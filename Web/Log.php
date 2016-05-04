<?php

    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $HEAD = "";

    $Base->InicioPlantilla(basename(__FILE__), "Logs de acceso", $HEAD);

    if (devildrey33_Opciones::Administrador() > 0) {
        $Log = new LogAccesos;
        echo "<article class='Blog'>";
        $Log->LeerLogAccesos();
        echo "</article>";
    }
    else {
        echo "<script>\$Base.MostrarErrorAjax(404, true);</script>";
    }
    
     $Base->FinPlantilla(); 

    
    
    
    
    
    
    
    class LogAccesos {
        public $ListaAccesos = array();
        public $Lineas = array();
        public $ListaOrdenadaPorIP = array();
        public $TotalTipos = array();

        public function LeerLogAccesos() {
            $this->TotalTipos["Ataques"] = 0;
            $this->TotalTipos["Advertencias"] = 0;
            $this->TotalTipos["Errores404"] = 0;
            $this->TotalTipos["Zips"] = 0;
            $this->TotalTipos["Documentos"] = 0;
            $this->TotalTipos["CSS"] = 0;
            $this->TotalTipos["JS"] = 0;
            $this->TotalTipos["Imagenes"] = 0;
            $this->TotalTipos["Otros"] = 0;

            /* Opciones para mostrar/ocultar */
            $ArchivoLog = "../../logs/access.log.current";
            if (file_exists($ArchivoLog)) {
                $Archivo = fopen($ArchivoLog, "r");
                $Datos = fread($Archivo, filesize($ArchivoLog));
                fclose($Archivo);
                /* Ejemplo */
                /*	94.194.34.14 - - [03/Jul/2013:00:00:14 +0200] "GET /Graficos/devildrey33.ico HTTP/1.1" 200 3606 devildrey33.es "-" "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)" "-"
                        201.134.42.53 - - [03/Jul/2013:00:00:19 +0200] "GET /Tutorial_HTML5_8.php HTTP/1.1" 200 122235 devildrey33.es "http://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=0CDAQFjAB&url=http%3A%2F%2Fdevildrey33.es%2FTutorial_HTML5_8.php&ei=bE3TUY3jJOSMyAGwjIGQDA&usg=AFQjCNHe90T-d6n5n_EgTirFKAwwET4dGA&bvm=bv.48705608,d.aWc" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33_Comentarios.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /css/devildrey33.css HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                        188.165.195.156 - - [03/Jul/2013:16:14:35 +0200] "HEAD / HTTP/1.1" 200 - devildrey33.es "-" "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)
                // Divido los datos en un array de lineas */
                $this->Lineas = explode("\n", $Datos);
                // Extraigo toda la informaciÃ³n de cada linea y la almaceno por separado en $ListaAccesos
                $Contador = -1;					
                foreach ($this->Lineas as $Linea) {
                    if (strlen($Linea) < 10) break;
                    // La IP siempre empieza en el primer caracter, luego al terminar viene el siguiente string = " - - "
                    $this->ListaAccesos[++$Contador]["IP"] = substr($Linea, 0, strpos($Linea, " - - "));
                    // La fecha empieza por "[" y termina por "]"
                    $Inicio = strpos($Linea, "[") + 1; 
                    $Fin = strpos($Linea, "]");
                    $this->ListaAccesos[$Contador]["Fecha"] = substr($Linea, $Inicio, $Fin - $Inicio);
                    $this->ListaAccesos[$Contador]["Fecha"]= substr($this->ListaAccesos[$Contador]["Fecha"], strpos($this->ListaAccesos[$Contador]["Fecha"], ":") + 1, 8);

                    // La acción, GET o POST
                    if     (strpos($Linea, '] "POST ') > 0) 	$this->ListaAccesos[$Contador]["Accion"] = "POST";
                    elseif (strpos($Linea, '] "GET ') > 0)	$this->ListaAccesos[$Contador]["Accion"] = "GET";
                    elseif (strpos($Linea, '] "HEAD ') > 0)	$this->ListaAccesos[$Contador]["Accion"] = "HEAD";
                    // La URL empieza despues de la acciÃ³n
                    if 		($this->ListaAccesos[$Contador]["Accion"] == "GET") 	$Inicio = strpos($Linea, '"GET ') + 5;
                    elseif 	($this->ListaAccesos[$Contador]["Accion"] == "POST") 	$Inicio = strpos($Linea, '"POST ') + 5; // HEAD tambien tiene 4 caracteres ya va bien
                    else								$Inicio = strpos($Linea, '"HEAD ') + 5; // HEAD tambien tiene 4 caracteres ya va bien
                    $Fin = strpos($Linea, " HTTP/1.");
                    $this->ListaAccesos[$Contador]["URL"] = substr($Linea, $Inicio, $Fin - $Inicio);
                    // El tipo de URL se determina mirando el string de la URL
                    $this->ListaAccesos[$Contador]["URL_Tipo"] = $this->TipoURL($this->ListaAccesos[$Contador]["URL"]);
                    // Respuestra del servidor (hay un fallo mio con los subdominios, quedaran agregados a $Respuesta.. Pendiente de estudiar otro sistema.
                    $Inicio = strpos($Linea, " HTTP/1.") + 11;
                    // La url suele ser devildrey33.es, pero aveces la pasa con www. delante, o con algun subdomino, OJO solo soporta subdominios de 3 caracteres
                    $Fin = strpos($Linea, 'devildrey33.es "');
                    if (strpos($Linea, '.devildrey33.es "') != FALSE) $Fin -= 4;
                    $this->ListaAccesos[$Contador]["Respuesta"] = substr($Linea, $Inicio, $Fin - $Inicio);
                    // Cliente / Navegador
                    $this->ListaAccesos[$Contador]["Navegador"] = substr($Linea, strpos($Linea, '" "') + 3, -5);
                    $Fin = strpos($this->ListaAccesos[$Contador]["Navegador"], '" "-"');
                    if ($Fin !== FALSE) $this->ListaAccesos[$Contador]["Accion"] = substr($this->ListaAccesos[$Contador]["Accion"], 0, $Fin);
                }

                // Genero la lista ordenada por ips y tiempo
                foreach ($this->ListaAccesos as $Acceso) {
                    $this->AgregarIP($Acceso);
                }
                $IDAcceso = -1;
                $ArrayDestacados = array();


                // Creo la lista de las entradas mas destacadas
                foreach ($this->ListaOrdenadaPorIP as $IP) {					
                    $ContadorEntradas = 0;
                    $ArrayDestacados[$IP[0]["IP"]] = array();
                    $PrimerObjeto = array();
                    foreach ($IP as $Acceso) {
                        if (strpos($Acceso["URL"], "BanearIP.php"))             array_unshift($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);
                        else if (strpos($Acceso["URL"], ".php?"))               array_unshift($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);
                        else if (strpos($Acceso["URL"], "Error404"))            array_push($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);
                        else if (strpos($Acceso["URL"], ".zip"))                array_push($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);
                        else if (strpos($Acceso["URL"], "PropiedadCSS/"))       array_push($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);
                        else if (strpos($Acceso["URL"], ".php"))                array_push($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);
                        else if (strpos($Acceso["URL"], ".html"))               array_push($ArrayDestacados[$IP[0]["IP"]], $Acceso["URL"]);							
                        else                                                    $PrimerObjeto = $Acceso["URL"];
                        $ContadorEntradas++;
                    }
                    array_push($ArrayDestacados[$IP[0]["IP"]], $PrimerObjeto);
                }
                echo "<table style='float:right'>". Intro().
                        "<tr>".Intro().
                            "<td>".Intro().
                                "<label id='LabelNavegadores' style='color:darkgreen'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChNavegadores'>".Intro().
                                    "<span>Navegadores</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>".Intro().
                                "<label id='LabelBots' style='color:grey'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChBots'>".Intro().
                                    "<span>Bots</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>".Intro().
                                "<label id='LabelDesconocido' style='color:orange'>".Intro().
                                "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChDesconocido'>".Intro().
                                "<span>Desconocido</span>".Intro().
                            "</label>".Intro().
                            "</td>".Intro().
                        "</tr>".Intro().
                    "</table>".Intro().
                    "<table>".Intro().
                        "<tr>".Intro().
                            "<td>".Intro().
                                "<label id='LabelAtaques' style='color:red'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChAtaques'>".Intro().
                                    "<span>Ataques</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                            "<td>".Intro().
                                "<label id='LabelAdvertencias' style='color:orange'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChAdvertencias'>".Intro().
                                    "<span>Advertencias</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                            "<td>".Intro().
                                "<label id='LabelErrores404' style='color:purple'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChErrores404'>".Intro().
                                    "<span>Errores 404</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>".Intro().
                                "<label id='LabelZips' style='color:olive'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChZip'>".Intro().
                                    "<span>Archivos Zip</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                            "<td>".Intro().
                                "<label id='LabelDocumentos' style='color:green'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChDocumentos'>".Intro().
                                    "<span>Documentos PHP y HTML</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                            "<td>".Intro().
                                "<label id='LabelCSS' style='color:blue'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChCSS'>".Intro().
                                    "<span>CSS</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>".Intro().
                                "<label id='LabelJS' style='color:brown'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChJS'>".Intro().
                                    "<span>JavaScript</span>".Intro().
                                "</label>". Intro().
                            "</td>".Intro().
                            "<td>".Intro().
                                "<label id='LabelImagenes' style='color:grey'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChImagenes'>".Intro().
                                    "<span>Imagenes</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                            "<td>".Intro().
                                "<label id='LabelOtros'>".Intro().
                                    "<input type='checkbox' checked='checked' OnChange='\$Admin.Log_Actualizar()' id='ChOtros'>".Intro().
                                    "<span>Otros</span>".Intro().
                                "</label>".Intro().
                            "</td>".Intro().
                        "</tr>".Intro().
                    "</table>".Intro().
                    "<hr />";


                echo "<div id='Log_Contenedor'></div>".
                "<script type='text/javascript'>".
                    "BD_Log = [";
                foreach ($this->ListaAccesos as $Acceso) echo json_encode($Acceso).",";
                echo "];";
//				echo "	BD_Log = ".json_encode($this->ListaAccesos).";";
                echo " BD_LogPorIP = [";
                foreach ($this->ListaOrdenadaPorIP as $Acceso) echo json_encode($Acceso).",";
                echo "];";
//				echo "	BD_LogPorIP = ".json_encode($this->ListaOrdenadaPorIP).";";
                echo " BD_LogTotalTipos = ".json_encode($this->TotalTipos).";".Intro().
                        "Log_IP_Admin = '".$_SERVER["REMOTE_ADDR"]."';".Intro().
//                        "\$Base.CargarCSS('Log.css');".Intro().
                        "\$Admin.Log_Actualizar();".Intro().
                "</script>".Intro();
            }
            else {
                echo "<div class='CP_Titulo'>No se encuentra el archivo de logs del dia de hoy.</div>".Intro();
            }
        }	

        public function TipoURL($URL) {		 
            if (stripos($URL, "BanearIP.php"))               	{	$this->TotalTipos["Ataques"]++; 		return 1; 	}
            else if (stripos($URL, "?")) 			{	$this->TotalTipos["Advertencias"]++;            return 2; 	}
            else if (stripos($URL, "Error404")) 		{	$this->TotalTipos["Errores404"]++; 		return 3; 	}
            else if (stripos($URL, ".zip")) 			{	$this->TotalTipos["Zips"]++; 			return 4; 	}
            else if (stripos($URL, "PropiedadCSS/")) 		{	$this->TotalTipos["Documentos"]++; 		return 5; 	}
            else if (stripos($URL, ".php")) 			{	$this->TotalTipos["Documentos"]++; 		return 5; 	}
            else if (stripos($URL, ".html")) 			{	$this->TotalTipos["Documentos"]++; 		return 5; 	}
            else if (stripos($URL, ".cmd")) 			{	$this->TotalTipos["Documentos"]++; 		return 5; 	}
            else if (stripos($URL, ".css")) 			{	$this->TotalTipos["CSS"]++; 			return 6; 	}
            else if (stripos($URL, ".js")) 			{	$this->TotalTipos["JS"]++; 			return 7; 	}
            else if (stripos($URL, ".ico")) 			{	$this->TotalTipos["Imagenes"]++; 		return 8; 	}
            else if (stripos($URL, ".png")) 			{	$this->TotalTipos["Imagenes"]++; 		return 8; 	}
            else if (stripos($URL, ".jpg")) 			{	$this->TotalTipos["Imagenes"]++; 		return 8; 	}
            else if (stripos($URL, ".") === FALSE) 		{	$this->TotalTipos["Documentos"]++; 		return 5; 	}
            else						{	$this->TotalTipos["Otros"]++; 			return 9; 	}
        }



        public function AgregarIP($Acceso) {
            for ($i = 0; $i < count($this->ListaOrdenadaPorIP); $i++) {
                if ($Acceso["IP"] == $this->ListaOrdenadaPorIP[$i][0]["IP"]) {
                    $this->ListaOrdenadaPorIP[$i][count($this->ListaOrdenadaPorIP[$i])] = $Acceso;
                    return;
                }
            }
            $this->ListaOrdenadaPorIP[count($this->ListaOrdenadaPorIP)][0] = $Acceso;
        }
    };    
?>