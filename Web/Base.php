<?php

if (!defined('DEF_Base')) {
    define('DEF_Base', true);


    /* Funciones base utilizadas por varios objetos independientes  *
     * Todas las funciones son estaticas.                           */
    class Base {
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


}
