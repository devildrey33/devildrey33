<?php

if (!defined('DEF_Base')) {
    define('DEF_Base', true);    
/*    function myErrorHandler($errno, $errstr, $errfile, $errline) {
        Base::$ErrorPhp = true;
        echo "<pre>ERROR-PHP</pre>";
        return FALSE;
    }

    $old_error_handler = set_error_handler('myErrorHandler', E_ALL  & ~E_NOTICE & ~E_USER_NOTICE);*/


    /* Funciones base utilizadas por varios objetos independientes  *
     * Todas las funciones son estaticas.                           */
    class Base {
        static $ErrorPhp = false;
        
        
        
        /* Función que devuelve el nombre del mes especificado numericamente */
        static public function ObtenerMesStr($NumMes) {
            switch ($NumMes) {
                case "01" : return "Enero";
                case "02" : return "Febrero";
                case "03" : return "Marzo";
                case "04" : return "Abril";
                case "05" : return "Mayo";
                case "06" : return "Junio";
                case "07" : return "Julio";
                case "08" : return "Agosto";
                case "09" : return "Septiembre";
                case "10" : return "Octubre";
                case "11" : return "Noviembre";
                case "12" : return "Diciembre";
            }
        }


        /* Pasa una cadena de valores ascii a string */
        static public function Decodificar($String) {
            $r = substr($String, 0, 1);
            $Ret = "";
            for ($i = 1; $i < strlen($String); $i+=3) {
                $c = chr(substr($String, $i, 3) - $r);
                if ($c < 0) $c +=255;
                $Ret .= $c;
            }
            return strrev($Ret);
        }


        /* Me envia un correo */
        static public function EnviarEmail($Titulo, $Mensaje, $Desde, $Para = 'devildrey33@hotmail.com') {
            $MensajeWW = wordwrap($Mensaje, 70);
            $Cabecera = "From: ".$Desde."\r\n".
                        "Reply-To: ".$Desde."\r\n".
                        "X-Mailer: PHP/".phpversion();
            return mail($Para, $Titulo, $Mensaje, $Cabecera);
        }


        /* Devuelve los datos del navegador y plataforma que se está utilizando */
        static public function ObtenerNavegador() {
            $u_agent = $_SERVER['HTTP_USER_AGENT']; 
            $bname = 'Indefinido';
            $bnamecorto = 'Indefinido';
            $platform = 'Indefinido';
            $platformcorto = '';
            $version= "";

            // Plataforma
            if 		(stripos($u_agent, "linux") !== FALSE)			{ $platformcorto = 'Linux';	$platform = 'Linux'; }
            elseif 	(stripos($u_agent, "android") !== FALSE)		{ $platformcorto = 'Android'; 	$platform = 'Android'; } 
            elseif 	(stripos($u_agent, "iPhone") !== FALSE)			{ $platformcorto = 'iPhone';	$platform = 'iPhone'; }
            elseif 	(stripos($u_agent, "iPad") !== FALSE)			{ $platformcorto = 'iPad';	$platform = 'iPad'; }
            elseif 	(stripos($u_agent, "macintosh") !== FALSE)		{ $platformcorto = 'Mac';	$platform = 'Macintosh'; }
            elseif 	(stripos($u_agent, "mac os x") !== FALSE)		{ $platformcorto = 'Mac';	$platform = 'Macintosh'; }
            elseif 	(stripos($u_agent, "windows nt 5.0") !== FALSE)		{ $platformcorto = 'Win2k'; 	$platform = 'Microsoft Windows 2000'; } 
            elseif 	(stripos($u_agent, "windows nt 5.") !== FALSE)		{ $platformcorto = 'WinXP'; 	$platform = 'Microsoft Windows XP'; }
            elseif 	(stripos($u_agent, "windows nt 6.0") !== FALSE)		{ $platformcorto = 'WinVista';  $platform = 'Microsoft Windows Vista'; }
            elseif 	(stripos($u_agent, "windows nt 6.1") !== FALSE)		{ $platformcorto = 'Win7'; 	$platform = 'Microsoft Windows 7'; } 
            elseif 	(stripos($u_agent, "windows nt 6.2") !== FALSE)		{ $platformcorto = 'Win8'; 	$platform = 'Microsoft Windows 8'; } 
            elseif 	(stripos($u_agent, "windows") !== FALSE)		{ $platformcorto = 'Win'; 	$platform = 'Microsoft Windows'; }
            elseif 	(stripos($u_agent, "win32") !== FALSE)			{ $platformcorto = 'Win'; 	$platform = 'Microsoft Windows'; }

            // Next get the name of the useragent yes seperately and for good reason
            if		(preg_match('/Opera/i',$u_agent)) 			{ $bnamecorto = 'Opera'; 	$bname = 'Opera'; } 
            elseif	(preg_match('/Firefox/i',$u_agent))			{ $bnamecorto = 'Firefox';	$bname = 'Mozilla Firefox'; } 
            elseif	(preg_match('/Chrome/i',$u_agent)) 			{ $bnamecorto = 'Chrome'; 	$bname = 'Google Chrome'; }
            elseif	(preg_match('/Safari/i',$u_agent)) 			{ $bnamecorto = 'Safari'; 	$bname = 'Apple Safari';}
            elseif	(preg_match('/Netscape/i',$u_agent)) 			{ $bnamecorto = 'Netscape'; 	$bname = 'Netscape'; } 
            elseif	(preg_match('/Baiduspider/i',$u_agent))			{ $bnamecorto = 'Baiduspider'; 	$bname = 'Baiduspider'; } 
            elseif	(preg_match('/Ezooms/i',$u_agent)) 			{ $bnamecorto = 'Ezooms Bot'; 	$bname = 'Ezooms'; } 
            elseif	(preg_match('/YandexBot/i',$u_agent)) 			{ $bnamecorto = 'YandexBot'; 	$bname = 'YandexBot'; }
            elseif	(preg_match('/Exabot/i',$u_agent)) 			{ $bnamecorto = 'YandexBot'; 	$bname = 'YandexBot'; } 
            elseif	(preg_match('/Feedly/i',$u_agent)) 			{ $bnamecorto = 'Feedly';	$bname = 'Feedly RSS Reader'; } 
            elseif	(preg_match('/alexa/i',$u_agent)) 			{ $bnamecorto = 'Alexa'; 	$bname = 'Alexa Web Crawler'; } 
            elseif	(preg_match('/bingbot/i',$u_agent)) 			{ $bnamecorto = 'Bing'; 	$bname = 'Bing Bot'; } 
            elseif	(preg_match('/msnbot/i',$u_agent)) 			{ $bnamecorto = 'MSNBot'; 	$bname = 'MSN Bot'; } 
            elseif	(preg_match('/majestic/i',$u_agent)) 			{ $bnamecorto = 'Majestic'; 	$bname = 'Majestic Bot'; } 
            elseif	(preg_match('/Googlebot/i',$u_agent)) 			{ $bnamecorto = 'Googlebot'; 	$bname = 'Googlebot'; } 
            elseif	(preg_match('/Googlebot-Mobile/i',$u_agent))            { $bnamecorto = 'Googlebot'; 	$bname = 'Googlebot Mobile'; } 
            elseif	(preg_match('/AhrefsBot/i',$u_agent)) 			{ $bnamecorto = 'AhrefsBot'; 	$bname = 'AhrefsBot'; } 
            elseif	(preg_match('/Bot/i',$u_agent)) 			{ $bnamecorto = 'Bot'; 		$bname = 'Bot genÃ©rico'; } 
            elseif	(preg_match('/MSIE 11.0/i',$u_agent)) 			{ $bnamecorto = 'IE11'; 	$bname = 'Internet Explorer';	$version = 11.0; }
            elseif	(preg_match('/MSIE 10.0/i',$u_agent))		 	{ $bnamecorto = 'IE10'; 	$bname = 'Internet Explorer';	$version = 10.0; }
            elseif	(preg_match('/MSIE 9.0/i',$u_agent))		 	{ $bnamecorto = 'IE9'; 		$bname = 'Internet Explorer';	$version = 9.0; }
            elseif	(preg_match('/MSIE 8.0/i',$u_agent))		 	{ $bnamecorto = 'IE8'; 		$bname = 'Internet Explorer';	$version = 8.0; }
            elseif	(preg_match('/MSIE 7.0/i',$u_agent)) 			{ $bnamecorto = 'IE7'; 		$bname = 'Internet Explorer';	$version = 7.0; }
            elseif	(preg_match('/MSIE 6.0/i',$u_agent))		 	{ $bnamecorto = 'IE6'; 		$bname = 'Internet Explorer';	$version = 6.0; }
            elseif	(preg_match('/MSIE/i',$u_agent)) 			{ $bnamecorto = 'IE'; 		$bname = 'Internet Explorer'; }
            $ub = $bname; 		

            // finally get the correct version number
            $known = array('Version', $ub, 'other');
            $pattern = '#(?<browser>'.join('|', $known).')[/ ]+(?<version>[0-9.|a-zA-Z.]*)#';
            if (!preg_match_all($pattern, $u_agent, $matches)) {
                // we have no matching number just continue
            }

            if ($version == "") {
                // see how many we have
                $i = count($matches['browser']);
                if ($i != 1) {
                    //we will have two since we are not using 'other' argument yet
                    //see if version is before or after the name
                    if (strripos($u_agent,"Version") < strripos($u_agent,$ub))	if (isset($matches['version'][0])) $version= $matches['version'][0];
                    else 							if (isset($matches['version'][1])) $version= $matches['version'][1];
                }
                else {
                    $version= $matches['version'][0];
                }
            }

            return array(
                'userAgent' 		=> $u_agent,
                'Nombre'      		=> $bname,
                'NombreCorto'		=> $bnamecorto,
                'Version'   		=> $version,
                'Plataforma' 		=> $platform,
                'PlataformaCorto' 	=> $platformcorto,
                'pattern'   		=> $pattern
            );
        }

        static function var_export($Objeto, $Opciones = []) {
            // Espacios al principio
            if (!isset($Opciones["EspaciosInicio"]))        $Opciones["EspaciosInicio"] = 2;
            if (!isset($Opciones["Ret"]))                   $Opciones["Ret"] = "";
            $EspaciosNombre = 0;
            $UltimoHijo = true;
            $IndiceNumerico = true;
            $Contador = 0;
            // Fase 1   comprobar los espacios que ocupa el nombre para esta iteración
            //          determinar si este objeto es el ultimo hijo
            //          determinar si todos los indices del objeto son numericos y co-relativos (1,2,3,4,5,6,7,etc...)
            foreach ($Objeto as $Nombre => $Valor) {                
                $TamNombre = strlen($Nombre);
                // Actualizo el $EspacioNombre si el tamaño actual es mayor.
                if ($TamNombre > $EspaciosNombre) $EspaciosNombre = $TamNombre;
                // Si el tipo de objeto actual es un objeto o un array determinamos que no es el ultimo hijo.
                if (gettype($Valor) == "array" || gettype($Valor) == "object") $UltimoHijo = false;
                // Si el Nombre del indice no es númerico o no es co-relativo
                if ($Nombre !== $Contador++) $IndiceNumerico = false;
//                echo $Nombre." ".($Contador - 1)." ".$IndiceNumerico."\n";
            }
//            echo $EspaciosNombre." ".$IndiceNumerico."\n";
            // Los indices numericos no se muestran por lo que el espacio del nombre se asigna a 0
            if ($IndiceNumerico === true) $EspaciosNombre = 0;
            
            // Fase 2 Crear el contenido de la variable tabulado a mi gusto
            // Empieza por array
            $Opciones["Ret"].= gettype($Objeto)." ( ";            
            if ($UltimoHijo === false) $Opciones["Ret"].= "\n";
            $Contador = 0;
            foreach ($Objeto as $Nombre => $Valor) {
                $Contador ++;
                if ($UltimoHijo === false) $Opciones["Ret"].= str_repeat(" ", $Opciones["EspaciosInicio"]); // Añado los espacios iniciales
                if ($IndiceNumerico === false) {
                    $Opciones["Ret"].= "'".$Nombre."'";
                    if ($UltimoHijo === false)  $Opciones["Ret"].= str_repeat(" ", $EspaciosNombre - strlen($Nombre)); // Añado los espacios después del nombre
                    $Opciones["Ret"].= " => ";
                }
                switch (gettype($Valor)) {
                    case "object" :
                    case "array"  :
                        $EI = $Opciones["EspaciosInicio"] + $EspaciosNombre + 2 + (($IndiceNumerico === false)? 6 : 0);
                        $Ret = Base::var_export($Valor, ["EspaciosInicio" => $EI]);
                        $Opciones["Ret"].= $Ret["Ret"];
                        break;
                    case "NULL" :
                        $Opciones["Ret"].= "NULL";
                        if (count($Objeto) !== $Contador)   $Opciones["Ret"].= ",";
                        break;
                    case "string" :
                        $Opciones["Ret"].= "'".$Valor."'";
                        if (count($Objeto) !== $Contador)   $Opciones["Ret"].= ",";
                        break;
                    default :
                        $Opciones["Ret"].= $Valor;
                        if (count($Objeto) !== $Contador)   $Opciones["Ret"].= ",";
                        break;
                }                
                // Si este objeto no contiene mas objetos o arrays ($UltimoHijo), añadiremos sus valores en la misma linea
                if ($UltimoHijo === true) $Opciones["Ret"].= " ";
                else                      $Opciones["Ret"].= "\n";
            }
            if      ($Opciones["EspaciosInicio"] != 2 && $UltimoHijo === false)   $Opciones["Ret"].= str_repeat(" ", $Opciones["EspaciosInicio"] - 2)."),";
            else if ($Opciones["EspaciosInicio"] != 2 && $UltimoHijo === true)    $Opciones["Ret"].= "),";
            else                                                                  $Opciones["Ret"].= ")";
//            if ($UltimoHijo === true) $Opciones["Ret"].= "";
//            else                      $Opciones["Ret"].= "\n";
//            echo $Opciones["Ret"];
            if ($Opciones["EspaciosInicio"] != 2)   return $Opciones;
            else                                    return $Opciones["Ret"];
        }


        static function ObtenerLogPHP() {
            $LogStr = "";
            /* Volcado del log php al final de la web */
            if (file_exists(dirname(__FILE__)."/Cache/php-error.log")) {
                $LogStr .= "<div style='text-decoration:underline; font-weight:boldest; font-size:1.6rem'>Log generado el ".date('d/m/Y [h:i:s]', time())."</div>";
                $Log = file_get_contents(dirname(__FILE__)."/Cache/php-error.log");
                $LogStr .= Base::ParsearLogPHP($Log);

                Base::EnviarEmail("Advertencias o Errores PHP", 
                  "Ip : ".$_SERVER['REMOTE_ADDR']."\n".$Log, 
                  "ErroresPHP@".$_SERVER["SERVER_NAME"], 
                  "devildrey33@hotmail.com");

                
                unlink(dirname(__FILE__)."/Cache/php-error.log");
                $LogStr .= "<script>\$Base.MostrarErroresPHP();</script>";
            }
            return $LogStr;
        }
        
        static function ParsearLogPHP($Log) {
            $LogStr = "";
            $Lineas = split("\n", $Log);
            foreach ($Lineas as $Linea) {
                $NumLinea = strpos($Linea, " on line ");
                if ($NumLinea !== false) {
                    $Linea = str_replace(" on line ", " on line <b style='color:blue'>", $Linea);
                    $LogStr .= "<div>".substr($Linea, strpos($Linea, "]") + 2)."</b></div>".Intro();
                }
                else {
                    $LogStr .= "<div>".substr($Linea, strpos($Linea, "]") + 2)."</div>".Intro();                        
                }
            }
            return $LogStr;
        }
    };

    
    /* Clase que contiene todas las entradas de la web.
     *  Para acceder a las entradas puedes usar el miembro Datos, si añades o modificas cualquier valor, deberas usar la funcion guardar. */
    /*class EntradasWeb {
        public $Datos;
        public function __construct() {
            $this->Datos = require dirname(__FILE__).'/Config/EntradasBlog.php';
        }
        
        public function Guardar() {
            file_put_contents($_SERVER['DOCUMENT_ROOT']."/Web/Config/EntradasBlog.php", "<?php return ".var_export($this->Datos, TRUE).";");
        }
        
        public function Agregar($Entrada) {
            $this->Datos[] = $Entrada;
        }
        
        public function Total() {
            return count($this->Datos);
        }
    };*/


    // Elimino el archivo que contiene los warnings y errores php
    if (file_exists(dirname(__FILE__)."/Cache/php-error.log")) {
        unlink(dirname(__FILE__)."/Cache/php-error.log");
    }
    
    // Establezco un archivo de log para guardar los errores/warnings 
    ini_set("log_errors", 1);
    ini_set("error_log", $_SERVER['DOCUMENT_ROOT']."/Web/Cache/php-error.log");
    
    // Los errores criticos nunca llegaran a mostrarse en el navegador, pero me los mando por correo.
    function exception_handler($e) {
        try {
            // ... normal exception stuff goes here
            error_log($e->getMessage()); // This is the underlying problem
            print($e->getMessage());
        }
        catch (Exception $e) {
            error_log(get_class($e)." thrown within the exception handler. Message: ".$e->getMessage()." on line ".$e->getLine());
        }
        Base::ObtenerLogPHP(); 
    }    
    set_exception_handler('exception_handler');
        
    
    
}
