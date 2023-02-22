<?php

//echo "devildrey33_BD\n";

/* TODO : prohibit fer un echo */

class devildrey33_BD {
    public    $_mysqli;
    public    $_BDFuncional = false;
    // Constructor
    public function __construct() {
        if (file_exists(dirname(__FILE__).'/Passwords.php')) {
            $ArrayDatos = (require dirname(__FILE__).'/Passwords.php');

            if      (strpos($_SERVER["SERVER_NAME"], "devildrey33.esy.es") !== false)   $this->_mysqli = new mysqli($ArrayDatos["URL-BD-H"], $ArrayDatos["USER-BD-H"], $ArrayDatos["PASS-BD-H"], $ArrayDatos["NOM-BD-H"]);
            else if (strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false)       $this->_mysqli = new mysqli($ArrayDatos["URL-BD"], $ArrayDatos["USER-BD"], $ArrayDatos["PASS-BD"], $ArrayDatos["NOM-BD"]);
            else                                                                        $this->_mysqli = new mysqli("localhost", "root", $ArrayDatos["PASS-BD-LOCAL"], $ArrayDatos["NOM-BD"]);

            if ($this->_mysqli->connect_errno) {            
                error_log("<span style='color:red'>Error iniciando la BD en <b>".$_SERVER["SERVER_NAME"]."</b></span> : ".utf8_encode($this->_mysqli->connect_error));
                $this->_BDFuncional = false;
            }        
        }
        else {
            error_log("<span style='color:red'>Error iniciando la BD en <b>".$_SERVER["SERVER_NAME"]."</b></span> : No se encuentra el archivo '/Web/Paswwords.php'");
            $this->_BDFuncional = false;
        }
//        $this->_mysqli->set_charset("utf8");
//        $this->_mysqli->query('SET CHARACTER SET utf-8');

    }
    
    // Destructor
    function __destruct() {
        if ($this->_BDFuncional === false) return;
        $this->_mysqli->close();
    }

    function Query($Sentencia) {
        if ($this->_BDFuncional === false) return FALSE;
        if ($this->_mysqli->query($Sentencia) !== TRUE) {
            return $this->_mysqli->error;
        }
        return TRUE;
    }
    
    
    public function VotarWeb($Archivo, $Valor, $URL) { 

        if (is_numeric($Valor) && $this->_mysqli !== false) {
            //$URL = str_replace("http://www.", "http://", $URL);
            if ($Valor > 5) { $Valor = 5; }
            if ($Valor < 3) $Valor += 3;            
            
            $Resultado = $this->_mysqli->query("SELECT * FROM paginas WHERE Pagina = '".$this->_mysqli->real_escape_string($Archivo)."'");
            if ($Resultado) {
                Base::EnviarEmail("Se ha votado en $URL ($Valor/5)", 
                                  "Se ha votado el archivo : $URL ($Valor/5) \nIP : ".$_SERVER['REMOTE_ADDR'], 
                                  "votaciones@devildrey33.es");
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                $Total = $Datos["VotosTotal"] + 1;
                $Valor = $Datos["VotosValor"] + $Valor;                
                $this->_mysqli->query("UPDATE paginas SET VotosTotal='".$this->_mysqli->real_escape_string($Total)."', VotosValor='".$this->_mysqli->real_escape_string($Valor)."' WHERE Pagina='".$this->_mysqli->real_escape_string($Archivo)."'");
             
                $ValoresEntrada = $this->ObtenerValoresEntrada2($Archivo);
                $Codigo =    "<span>".
                                "<b>".$ValoresEntrada["Visitas"]."</b> visitas, ".
                                "<b>".$ValoresEntrada["Comentarios"]."</b> ";
                if ($ValoresEntrada["Comentarios"] != 1) { $Codigo .= "comentarios"; }
                else                                     { $Codigo .= "comentario"; }
                $Codigo .=      ", <b>".$ValoresEntrada["Votaciones"]["TotalVotaciones"]."</b> ";
                if ($ValoresEntrada["Votaciones"]["TotalVotaciones"] == 1) { $Codigo .= "voto"; }
                else                                                       { 
                    if ($ValoresEntrada["Votaciones"]["TotalEstrellas"] == 0) {
                        $Codigo .= "votos";
                    }
                    else {
                        $Codigo .= "votos con una media de <b>".round($ValoresEntrada["Votaciones"]["TotalEstrellas"] / $ValoresEntrada["Votaciones"]["TotalVotaciones"], 2)."</b> sobre <b>5</b>.";                            
                    }                        
                }                            
                $Codigo .=    "</span>".Intro();
//                echo $Codigo;    
                
                
                return json_encode(array("HTML" => $Codigo, "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }
        }
        return json_encode(array("HTML" => "false", "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 2));
    }
    
    
    
    public function ObtenetMediaVotacionesWeb($Archivo) {
        $Ret = array("TotalVotaciones" => 0, "TotalEstrellas" => 0);
        if ($this->_BDFuncional === false) return $Ret;
        // Comprobamos si existe la tabla paginas
        $Resultado = $this->_mysqli->query("SHOW TABLES LIKE 'paginas'");
        if ($Resultado->num_rows == 0) {
            return $Ret;
        }
        // Comprobamos si exsite la pagina
        $Resultado = $this->_mysqli->query("SELECT * FROM paginas WHERE Pagina = '".$this->_mysqli->real_escape_string($Archivo)."'");
        if ($Resultado->num_rows == 0) {
             return $Ret;
        }
        $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
        
        $Ret["TotalVotaciones"] = $Datos["VotosTotal"];
        $Ret["TotalEstrellas"]  = $Datos["VotosValor"];
        return $Ret;
    }
    
    


    // utilizada en devildrey33_Descargas.php
    // Suma 1 al contador de descargas
    public function SumarDescarga($Archivo) {
        if ($this->_BDFuncional === false) return FALSE;
        $Resultado = $this->_mysqli->query("SELECT * FROM descargas");
        $Descargas = 0;
        if (!$Resultado || $Resultado->num_rows == 0) { // La tabla no existe, la creamos
            // NumDescarga, Url, TotalDescargas
            $Resultado = $this->_mysqli->query("CREATE TABLE descargas (NumDescarga INT NOT NULL AUTO_INCREMENT PRIMARY KEY, Url VARCHAR(128), TotalDescargas INT)");
        }
        // Comprobamos si existe la descarga para la url actual
        $Resultado = $this->_mysqli->query("SELECT * FROM descargas WHERE Url='".$this->_mysqli->real_escape_string($Archivo)."'");
        if ($Resultado->num_rows == 0) { // La entrada no existe, la creamos
            $Resultado = $this->_mysqli->query("INSERT INTO descargas (Url, TotalDescargas) VALUES('".$this->_mysqli->real_escape_string($Archivo)."', '1')");
            return FALSE;
        }
        else {
            $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
            $Descargas = $Datos['TotalDescargas'] + 1;
            $this->_mysqli->query("UPDATE descargas SET TotalDescargas='".$this->_mysqli->real_escape_string($Descargas)."' WHERE Url='".$this->_mysqli->real_escape_string($Archivo)."'");
        }
        return TRUE;
    }


    // Al sumar una visita es posible que no exista la tabla para sumar visitas, o que no exista la entrada para la pagina especificada
    public function SumarVisita($Archivo, $bSumarVisita) {
        $Visitas = 0;
        if ($this->_BDFuncional === false) return $Visitas;

        $Archivo = $this->_mysqli->real_escape_string(str_replace(array("?Preview", "?Filas", "?Columnas", "?Codigo"), "", $Archivo));
        
        $PaginasExiste = false;
        // Comprobamos si existe algun registro de la pagina 
        $Resultado = $this->_mysqli->query("SHOW TABLES LIKE 'paginas'");
        $PaginasExiste = ($Resultado->num_rows > 0) ? true : false;
        if ($PaginasExiste == true) {
            $Resultado = $this->_mysqli->query("SELECT * FROM paginas WHERE Pagina='".$Archivo."'");
            if ($Resultado && $Resultado->num_rows == 1) {
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                if ($Datos) $Visitas = $Datos['Visitas'];
            }
        }
        
        // Comprobamos si existe la tabla Paginas
        if ($PaginasExiste == false) {
          //$Resultado = $this->_mysqli->query("SELECT * FROM paginas");
//        if (!$Resultado || $Resultado->num_rows == 0) { // La tabla no existe, la creamos
            if (!$this->_mysqli->query("CREATE TABLE paginas (NumPagina INT NOT NULL AUTO_INCREMENT PRIMARY KEY, Pagina VARCHAR(128), VotosTotal INT, VotosValor INT, Visitas INT)")) {
                error_log('Error creando la tabla Paginas!! : '.$this->_mysqli->error);
            }
//        }
        }
        
        // Comprobamos si existe la entrada para la pagina actual
        $Resultado = $this->_mysqli->query("SELECT * FROM paginas WHERE Pagina='".$Archivo."'");
        if (!$Resultado || $Resultado->num_rows == 0) { // La entrada no existe, la creamos
            if (!$Resultado = $this->_mysqli->query("INSERT INTO paginas (Pagina, Visitas, VotosTotal, VotosValor) VALUES('".$Archivo."', '1', '0', '0')")) {
                error_log('Error creando entrada dentro de la tabla Paginas : '.$this->_mysqli->error);
            }
        } 

        if ($bSumarVisita === true) {
            // Actualizamos las visitas
            $Visitas ++;
            if (!$Resultado = $this->_mysqli->query("UPDATE paginas SET Visitas='".$Visitas."' WHERE Pagina='".$Archivo."'"))
                error_log('Error sumando visitas a la pagina '.$Archivo.' : '.$this->_mysqli->error);
        }
        return $Visitas;
    }

    public function ObtenerValoresEntrada2($Archivo, $SumarVisita = false) {        
        // Datos a devolver
        $Ret = array(   "Visitas"           => 0, 
                        "Comentarios"       => 0,
                        "Votaciones"        => array(   
                                                        "TotalVotaciones"   => 0, 
                                                        "TotalEstrellas"    => 0));
        // Si la BD no funciona devuelvo los datos iniciales
        if ($this->_BDFuncional === false) { return $Ret; }
        $Contador = 0;
        // Renombro el $Archivo si este pertenece a la documentación (directorio Doc/)
        $ArchivoFinal = str_replace(array("CSS/Funciones/", "CSS/Propiedades/", "CSS/Selectores/", "CSS/Reglas/"), array("FunciónCSS_", "PropiedadCSS_", "SelectorCSS_", "ReglaCSS_"), $Archivo, $Contador);
        if ($Contador > 0) $ArchivoFinal .= ".php";
        // El máximo de caracteres que puede tener el nombre de una tabla es 64, si le restamos los 13 de "comentarios__" queda en 51
        // Re-emplazo los caracteres "." y "-" por el caracter "_" para crear un nombre compatible con los nombres de tabla de MYSQL
        $NombreArchivo = substr($this->_mysqli->real_escape_string(str_replace(array(".", "-", "/"), "_", strtolower($ArchivoFinal))), 0, 51);        
        // Comprobamos el numero de comentarios
//        echo "<pre>"."SELECT * FROM comentarios__".strtolower($NombreArchivo)."</pre>";
        $Resultado = $this->_mysqli->query("SHOW TABLES LIKE 'comentarios__".strtolower($NombreArchivo)."'");
        if ($Resultado->num_rows > 0) {
            $Resultado = $this->_mysqli->query("SELECT * FROM comentarios__".strtolower($NombreArchivo));
            if ($Resultado) $Ret["Comentarios"] = $Resultado->num_rows;
        }
        // Comprobamos si existe algun registro de la página 

        $Resultado = $this->_mysqli->query("SHOW TABLES LIKE 'paginas'");
        if ($Resultado->num_rows > 0) {
            $Resultado = $this->_mysqli->query("SELECT * FROM paginas WHERE Pagina='".$this->_mysqli->real_escape_string($ArchivoFinal)."'");
            if ($Resultado->num_rows == 1) {
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                // Si hay datos obtenemos sus valores
                if ($Datos) $Ret["Visitas"] = $Datos['Visitas'];
            }
        }
        
        // Obtengo la media de las votaciones
        $Ret["Votaciones"]  = $this->ObtenetMediaVotacionesWeb($ArchivoFinal);                            
        // Sumo la visita (si es necesario)
        if ($SumarVisita === true) {
            $this->SumarVisita($Archivo, $SumarVisita);
            $Ret["Visitas"] ++;            
        }
        
/*        echo "<pre>";
        print_r($Ret);
        echo "</pre>";*/
        
        return $Ret;
    }
    
    
    // TODO : S'ha de fer una nova funció que NO imprimeixi codi HTML y que torni les dades en una variable
    // 
    // Función que obtiene los valores de una entrada (numero de comentarios, visitas, votos, fecha, etc..)
  /*  public function ObtenerValoresEntrada($Archivo, $SumarVisita = false) {        
        if ($this->_BDFuncional === false) return "0 visitas, 0 comentarios, 0 votaciones.";

        $Votos       = 0;
        $Visitas     = 0;
        $Comentarios = 0;
        // El máximo de caracteres que puede tener el nombre de una tabla es 64, si le restamos los 13 de "comentarios__" queda en 51
        // Re-emplazo los caracteres "." y "-" por el caracter "_" para crear un nombre compatible con los nombres de tabla de MYSQL
        $NombreArchivo = substr($this->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", strtolower($Archivo))), 0, 51);        
//        $NombreArchivo = $this->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", $Archivo));
        // Comprobamos el numero de comentarios
        $Resultado = $this->_mysqli->query("SELECT * FROM comentarios__".strtolower($NombreArchivo));
        if ($Resultado) { 
            $Comentarios = $Resultado->num_rows;  
        }
        // Comprobamos si existe algun registro de la pagina 
        $Resultado = $this->_mysqli->query("SELECT * FROM paginas WHERE Pagina='".$this->_mysqli->real_escape_string($Archivo)."'");
        if ($Resultado) {
            if ($Resultado->num_rows == 1) {
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                // Si hay datos obtenemos sus valores
                if ($Datos) $Visitas = $Datos['Visitas'];
            }
        }

        //if ($SumarVisita == true) 
        $Visitas = $this->SumarVisita($Archivo, $SumarVisita);

        $Votaciones = $this->ObtenetMediaVotacionesWeb($Archivo);

        $StrVotos = "votos";
        $StrCom = "comentarios";
        if ($Comentarios == 1) $StrCom = "comentario";
        if ($Votaciones->TotalVotaciones == 1) $StrVotos = "voto";
        if ($Votaciones->TotalEstrellas == 0) 	return "<b>$Visitas</b> visitas, <b>".$Comentarios."</b> ".$StrCom.", <b>".$Votaciones->TotalVotaciones."</b> ".$StrVotos.".";
        else					return "<b>$Visitas</b> visitas, <b>".$Comentarios."</b> ".$StrCom.", <b>".$Votaciones->TotalVotaciones."</b> ".$StrVotos." con una media de <b>".round($Votaciones->TotalEstrellas / $Votaciones->TotalVotaciones, 2)."</b> sobre <b>5</b>.";
    }*/


    // Suma 1 al valor especificado de la tabla General_Enteros
    public function SumarIntGeneral($Nombre) {
        if ($this->_BDFuncional === false) return;
        $Resultado = $this->_mysqli->query("SELECT * FROM general_enteros");
        if (!$Resultado || $Resultado->num_rows == 0) { // La tabla no existe, la creamos
            $Resultado = $this->_mysqli->query("CREATE TABLE general_enteros (Nombre VARCHAR(128) PRIMARY KEY, Valor INT)");
        }
        $Resultado = $this->_mysqli->query("SELECT * FROM general_enteros WHERE Nombre='".$this->_mysqli->real_escape_string($Nombre)."'");
        if ($Resultado->num_rows == 0) { // La entrada no existe, la creamos
            $Resultado = $this->_mysqli->query("INSERT INTO general_enteros (Nombre, Valor) VALUES('".$this->_mysqli->real_escape_string($Nombre)."', '1')");
        }
        else {
            $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
            $Descargas = $Datos['Valor'] + 1;
            $this->_mysqli->query("UPDATE general_enteros SET Valor='".$this->_mysqli->real_escape_string($Descargas)."' WHERE Nombre='".$this->_mysqli->real_escape_string($Nombre)."'");
        }
    }
    
    
    
    
    /* Ejecutar : devildrey33.es/cmd/AdaptarComentarios        */
    /* Funciónes para adaptar los mensajes al formato del 2015 */
  /*  public function AdaptarComentarios() {
        $Tablas = $this->_mysqli->query("SELECT table_name from information_schema.tables");    
        echo $Tablas->num_rows."<br />";
        if ($Tablas->num_rows) {
            for ($i = 0; $i < $Tablas->num_rows; $i++) {
                $DatosTabla = $Tablas->fetch_array(MYSQLI_ASSOC);
                echo strpos($DatosTabla["table_name"], "comentarios__");
                if (strpos($DatosTabla["table_name"], "comentarios__") !== false) {
                    echo "<h1>".$DatosTabla["table_name"]."</h1>";
                    //Obtengo todos los mensajes de la tabla 
                    $Mensajes = $this->_mysqli->query("SELECT * from ".$DatosTabla["table_name"]); 
                    if ($Mensajes->num_rows) {
                        for ($i = 0; $i < $Mensajes->num_rows; $i++) {
                            $DatosMensaje = $Mensajes->fetch_array(MYSQLI_ASSOC);
//                            echo "<h2>".str_replace(array(">", "<"), "", $DatosMensaje["Nombre"])."</h2>";
//                            echo "<pre>".str_replace(array(">", "<"), array("&gt;", "&lt;"), $DatosMensaje["Mensaje"])."</pre>";
                            $MensajeAdaptado = $this->AdaptarMensaje($DatosMensaje);
//                            $MensajeAdaptado = mysql_real_escape_string($this->AdaptarMensaje($DatosMensaje));
                            echo $MensajeAdaptado."<hr >";
                            
                            $Res = $this->_mysqli->query("UPDATE ".$DatosTabla["table_name"]." SET Mensaje='".$this->_mysqli->real_escape_string($MensajeAdaptado)."' WHERE NumMsg=".$DatosMensaje["NumMsg"]."");
                            echo "<h3>[#".$DatosMensaje["NumMsg"]."] UPTADE ".$DatosTabla["table_name"]." ha retornado : <b>".$Res."</b></h3>";
                        } 
                    }                
                    echo "<hr />";
                }
                
            }
        }           
    }

    public function AdaptarMensaje($DatosMensaje) {
        $Mensaje = $DatosMensaje["Mensaje"];
        $Volta = 0;        
        
        $Pos = strpos($Mensaje, 'devildrey33_Comentarios_EnlaceComentario');
        while ($Pos !== false) {
            $PosIT = $Pos - 10;
            while (substr($Mensaje, --$PosIT, 1) !== '<');
//            $PosIT = strrpos($Mensaje, '<', $Pos); // Posicion inicio del tag
            $PosFT = strpos($Mensaje, '>', $Pos);  // Posicion final del span
            $PosIN = strpos($Mensaje, '<', $PosFT);  // Posición inicial del cierre del span
            $PosFN = strpos($Mensaje, ']', $Pos);  // Posición final del numero de despues del tag
            $NumMSG = substr($Mensaje, $PosFT + 1, ($PosFN - $PosFT) - 1);
            $NumMSG = str_replace(array("[", "]", "#"), "", $NumMSG);
            if ($PosIT === 0)  $Parte1 = "";
            else               $Parte1 = substr($Mensaje, 0, $PosIT);
            $Parte2 = substr($Mensaje, $PosIN); // </span> = 7 caracteres

            //echo "<br />";
                    
            // Hay algun span suelto sin número ni nada, este se elimina 
            if (is_numeric($NumMSG) === false)  
                $Mensaje = $Parte1.$Parte2;
            else                                
                $Mensaje = $Parte1."<span comentario='".$NumMSG."' contenteditable='false'>".$NumMSG."".$Parte2;
//            echo $Mensaje."<hr />".$NumMSG.") ".$Pos." ".$PosIT." ".$PosFT."<hr />";
            $Pos = strpos($Mensaje, 'devildrey33_Comentarios_EnlaceComentario');
        } 
        
        return str_replace( array("<h2", "</h2>", "<a href"), 
                            array("<h3", "</h3>", "<a target='_blank' href"), $Mensaje);

//        return str_replace("<a href", "<a target='_blank' href", $Mensaje);
//        return $Mensaje;
    }*/

    
};


/*
class devildrey33_ObtenetMediaVotacionesWeb {
    public $TotalEstrellas;
    public $TotalVotaciones;
    public function __construct() {
        $this->TotalEstrellas = 0;
        $this->TotalVotaciones = 0;
    }
};*/






        ?>