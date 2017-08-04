<?php
    include_once "devildrey33_Opciones.php";

    class devildrey33_Log {
        // el array de ips te 2 dades primaries IP (que es la ID unica) y Datos que es un array d'objectes (1 o mil) que cada un tenen les dades de la petició asociada a la seva IP
        public $ArrayIps = []; // [ "Ip" => "0.0.0.0", "Datos" => [] ];
        public $T = 0;


        static public function ObtenerLog($Archivo) {
            $ArchivoLog = "../../logs/".$Archivo;
            if (file_exists($ArchivoLog)) {
                if (strpos($Archivo, ".gz") !== false) { // comprimido
                    $Datos = implode("", gzfile($ArchivoLog));
                }
                else { // descomprimido
                    $hArchivo = fopen($ArchivoLog, "r");
                    $Datos = fread($hArchivo, filesize($ArchivoLog));
                    fclose($hArchivo);
                }
            }
            return $Datos;
        }

        public function LeerLogAccesos($Archivo) {
            $ArchivoLog = "../../logs/access.log.".$Archivo;
//            $ArrayLog = [];
            echo "<textarea id='Log_Datos'>";
            if (file_exists($ArchivoLog)) {
                $Archivo = fopen($ArchivoLog, "r");
/*                while (!feof($Archivo)){ 
                    // oh si ja ho faig lo que no ho parsejo les dades mentres ho llegeixo, pero te pinta de que algu ho ha preparat aixi per algo... xd
                    echo fgets($Archivo,1024 * 16);
                }                 */
                echo fread($Archivo, filesize($ArchivoLog));
                fclose($Archivo);
            }
            echo "</textarea>";
//            echo "<pre>".print_r($this->ArrayIps)."</pre>";
            
/*            echo "<script>\n".json_encode($this->ArrayIps)."\n</script>".
                    "<div>".count($this->ArrayIps)."</div>";*/
//            $this->CrearTablaDatos();
        }

        public function EnumLogs() {
            $Archivos = scandir("../../logs/");
            echo "<div id='Log_Opciones'>".
                    "<div id='Log_Contenedor_Archivos'>".
//                        "<label>Archivo Log</label>".
                        "<select name='NombreLog' id='Log_ArchivoActual' onchange='\$Admin.Log.ArchivoChange()'>";
            
            
            foreach($Archivos as $Archivo) {
                $Inicio = substr($Archivo, strlen("access.log."));
                $Color = "black";
                // Comprimit semanal son         16 chars   "access.log.18.gz"
                // Comprimit d'un dia son        18 chars   "access.log.18.1.gz"
                // Descomprimit dia actual son   18 chars   "access.log.current"
                // Descomprimit dia anterior son 15 chars   "access.log.18.5"
                if (strpos($Archivo, "access.log.") !== false) {
                    $Tam = strlen($Archivo);
                    switch ($Tam) {
                        case 16 : // Comprimit setmanal
                        case 18 : // Comprimit d'un dia
                        case 15 : // Descomprimit dia anterior
                            if (strpos($Archivo, ".current") !== false) {
                                echo "<option value='$Inicio' selected>$Archivo</option>";
                            }
                            else {
                                echo "<option value='$Inicio'>$Archivo</option>";
                            }
                            break;
                    }
                }
               
                
            }
            echo        "</select>".
                    "</div>"; // div para la columna del archivo log
            
            
            echo    "<div id='Log_Contenedor_Navegadores'>".
                        "<label id='LabelNavegadores' class='Log_Cliente_Navegador'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChNavegadores'>".Intro().
                            "<span>Navegadores</span>".Intro().
                        "</label>".Intro().                    
                        "<label id='LabelBots' class='Log_Cliente_Bot'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChBots'>".Intro().
                            "<span>Bots</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelDesconocido' class='Log_Cliente_Desconocido'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChDesconocido'>".Intro().
                            "<span>Desconocido</span>".Intro().
                        "</label>".Intro().
                    "</div>";
            
            echo    "<div id='Log_Contenedor_Tipo'>".
                        "<label id='LabelAtaques' class='Log_Entrada_Ataque'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChAtaques'>".Intro().
                            "<span>Ataques</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelAdvertencias' class='Log_Entrada_Advertencia'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChAdvertencias'>".Intro().
                            "<span>Advertencias</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelErrores404' class='Log_Entrada_Error'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChErrores404'>".Intro().
                            "<span>Errores 404</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelZips' class='Log_Entrada_Zip'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChZip'>".Intro().
                            "<span>Archivos Zip</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelCmd' class='Log_Entrada_Cmd'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChCmd'>".Intro().
                            "<span>Ajax</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelDocumentos' class='Log_Entrada_Documento'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChDocumentos'>".Intro().
                            "<span>Documentos PHP y HTML</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelCSS' class='Log_Entrada_CSS'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChCSS'>".Intro().
                            "<span>CSS</span>".Intro().
                        "</label>".Intro().
                        "<label id='LabelJS' class='Log_Entrada_JS'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChJS'>".Intro().
                            "<span>JavaScript</span>".Intro().
                        "</label>". Intro().
                        "<label id='LabelImagenes' class='Log_Entrada_Imagen'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChImagenes'>".Intro().
                            "<span>Imagenes</span>".Intro().
                        "</label>".Intro().                    
                        "<label id='LabelOtros' class='Log_Entrada_Otros'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.ClickCheckOpciones()' id='ChOtros'>".Intro().
                            "<span>Otros</span>".Intro().
                        "</label>".Intro().
                    "</div>";
/*            echo    "<div id='Log_Contenedor_Buscar'>".
                        "<label id='LabelUrl'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.CrearTablaDatos()' id='ChUrl'>".Intro().
                            "<span>Url</span>".Intro().
                        "</label>".Intro().                    
                        "<label id='LabelUa'>".Intro().
                            "<input type='checkbox' checked='checked' OnChange='\$Admin.Log.CrearTablaDatos()' id='ChUa'>".Intro().
                            "<span>UserAgent</span>".Intro().
                        "</label>".Intro().                    
                    
                        "<input type='text' name='Search' id='Log_Buscar' placeholder='Texto a buscar..' required=''>".
                    "</div>";
         */
            
            echo "</div>";
            
        }   
    }
?>