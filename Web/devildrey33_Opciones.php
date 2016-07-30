<?php


/* Objeto para trabajar con las cookies de la sesión actual (la configuración por defecto varia de localhost al servidor REAL) */
if (!isset($_SESSION)) session_start();
//    echo "devildrey33_Opciones.php\n";

//include("Base.php");

// Tiempo de validez para la sesion 30 minutos desde la ultima actividad
if (isset($_SESSION["Opciones"]['UltimaActividadMS'])) {
    if ((time() - $_SESSION["Opciones"]['UltimaActividadMS'] > 1800))           { 	unset($_SESSION["Opciones"]["Administrador"]);	}	// 30 minutos
    if ((time() - $_SESSION["Opciones"]['UltimaActividadMS'] > 3600 * 24)) 	{ 	unset($_SESSION["Opciones"]["PaginasVistas"]);	}	// 1 dia
}
$_SESSION["Opciones"]['UltimaActividadMS'] = time(); // Guardo el tiempo de la ultima actividad

// Controla el número de paginas visitadas en esta sesion
if (!isset($_SESSION["Opciones"]['PaginasVistas'])) {    $_SESSION["Opciones"]['PaginasVistas'] = 1;     }
else                                                {    $_SESSION["Opciones"]['PaginasVistas'] ++;      }       

// Disposición de las opciones según si el servidor es local o de internet
if (strpos($_SERVER["SERVER_NAME"], "devildrey33.esy.es") !== false)  {  devildrey33_Opciones::$ServidorLocal = FALSE; }
else if (strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) {  devildrey33_Opciones::$ServidorLocal = FALSE; }
else                                                                  {  devildrey33_Opciones::$ServidorLocal = TRUE;  }


/* Esta clase contiene todas las variables que pueda necesitar de la variable $_SESSION de forma que si no estan definidas devuelve su valor por defecto sin necesidad de crearla en la cookie.
        En definitiva solo se reservara espacio para la cookie si la variable en concreto no tiene su valor por defecto.
        Por otra parte tambien controla los timeouts de ciertas variables que no deben ser guardadas durante mucho tiempo.           */
class devildrey33_Opciones {
    // Variable que determina las opciones predeterminadas segun si es el servidor local o de internet
    public static $ServidorLocal = FALSE;    
           
    /* Función interna utilizada por las funciones "pseudo variable por referencia" para asignar y obtener los valores */
    static protected function _ObtenerAsignarValor($Nombre, $ValorDefecto, $Valor) {
        /* Si el valor no es -1 es que se está asignando un valor */
        if ($Valor != -1) { 
            $_SESSION["Opciones"][$Nombre] = $Valor; 
            return $Valor; 
        }
        /* Miro si se ha creado la cookie, y dado el caso la devuelvo */
        if (isset($_SESSION["Opciones"]))  	{ 
            if (!isset($_SESSION["Opciones"][$Nombre])) {  
                $_SESSION["Opciones"][$Nombre] = $ValorDefecto;                
            } 
            return $_SESSION["Opciones"][$Nombre];
        }
        /* La cookie no existe, devuelvo el valor por defecto */
        return $ValorDefecto;
    }

    /* Funciones para obtener / asignar los valores 
            NOTA : Si $Valor es -1 devuelve el valor de la cookie, si valor es distinto a -1 asigna ese valor y lo devuelve.
                                                                                                                   Nombre de la variable        Si es el servidor de internet                         Valor por defecto         Parámetro	*/
    static public function MostrarConsola($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("MostrarConsola", 		(devildrey33_Opciones::$ServidorLocal === FALSE) ? 0 : 1, 		$Valor);	}
    static public function Administrador($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("Administrador",                                                                     0, 		$Valor);	}
    static public function Minificar_CSS($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_CSS", 		(devildrey33_Opciones::$ServidorLocal === FALSE) ? 1 : 0, 		$Valor);	}
    static public function Minificar_JS($Valor = -1)        {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_JS", 		(devildrey33_Opciones::$ServidorLocal === FALSE) ? 1 : 0, 		$Valor);	}
    static public function Minificar_HTML($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_HTML", 		(devildrey33_Opciones::$ServidorLocal === FALSE) ? 1 : 0, 		$Valor);	}
    static public function ActualizarCache($Valor = -1)     {	return devildrey33_Opciones::_ObtenerAsignarValor("ActualizarCache", 		(devildrey33_Opciones::$ServidorLocal === FALSE) ? 0 : 1, 		$Valor);	}
    static public function PaginasVistas($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("PaginasVistas",                                                                     0, 		$Valor);	}
    static public function UltimaActividadMS($Valor = -1)   {	return devildrey33_Opciones::_ObtenerAsignarValor("UltimaActividadMS",                                                                 0, 		$Valor);	}
    static public function EntradasIndice($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("Indice_EntradasCargadas",                                                           16, 		$Valor);	}
    static public function MostrarErroresPHP($Valor = -1)   {   return devildrey33_Opciones::_ObtenerAsignarValor("MostrarErroresPHP",                                                                 0, 		$Valor);	}
    static public function BorrarLogPHP($Valor = -1)        {   return devildrey33_Opciones::_ObtenerAsignarValor("BorrarLogPHP",                                                                      1, 		$Valor);	}
    static public function PausarBannerJS($Valor = -1)      {   return devildrey33_Opciones::_ObtenerAsignarValor("PausarBannerJS",                                                                    1, 		$Valor);	}
    
    
    static public function SumaErrorLogin()   {
        if (isset($_SESSION["Opciones"]["ErrorLogin"])) { $_SESSION["Opciones"]["ErrorLogin"] ++; } 
        else { $_SESSION["Opciones"]["ErrorLogin"] = 1; }
        return $_SESSION["Opciones"]["ErrorLogin"];
    }
    
    static public function ErrorLogin() { 
        if (isset($_SESSION["Opciones"]["ErrorLogin"]))     return $_SESSION["Opciones"]["ErrorLogin"]; 
        else                                                return 0; 
    }
    
    
    static public function Login($Login, $Pass) {
        if (file_exists(dirname(__FILE__).'/Passwords.php')) {
            $ArrayDatos = (require dirname(__FILE__).'/Passwords.php');
            if ($Login === $ArrayDatos["LOGIN-devildrey33"] && Base::Decodificar($Pass) === $ArrayDatos["PASS-devildrey33"] && devildrey33_Opciones::ErrorLogin() < 10) {
                devildrey33_Opciones::Administrador(1);
                return 0;
            }
            else if ($Login === $ArrayDatos["LOGIN-Barba"] && Base::Decodificar($Pass) === $ArrayDatos["PASS-Barba"] && devildrey33_Opciones::ErrorLogin() < 10) {
                devildrey33_Opciones::Administrador(2);
                return 0;          
            }
            else {
                return 1;
                if (devildrey33_Opciones::MostrarConsola() === 1) echo " (".Base::Decodificar($Pass).")";
            }
        }
        else {
            error_log("<span style='color:red'>Error interno!</span> devildrey33_Opciones::Login : No se encuentra el archivo '/Web/Paswwords.php'");
            return 2;
        }
    }        
};





/* Funciones base utilizadas por varios objetos independientes  *
* Todas las funciones son estaticas.                           */
class Base {
   static public function URL_Web() {           return Base::URL_Raiz()."Web/";          }
   static public function URL_Graficos() {      return Base::URL_Raiz()."Web/Graficos/";   }
   static public function URL_JS() {            return Base::URL_Raiz()."Web/JS/";         }
   static public function URL_CSS() {           return Base::URL_Raiz()."Web/CSS/";        }
   static public function URL_Cache() {         return Base::URL_Raiz()."Web/Cache/";        }
   static public function URL_Blog() {          return Base::URL_Raiz()."Blog/";          }
   static public function URL_Lab() {           return Base::URL_Raiz()."Lab/";          }
   static public function URL_Descargas() {     return Base::URL_Raiz()."Descargas/";          }
   static public function URL_Raiz() {
       return "http://".$_SERVER["SERVER_NAME"]."/".Base::PathRelativo_Raiz();
   }
   // devuelve el Path completo del directorio web
   static public function Path_Web() {          return Base::Path_Raiz()."Web/";   }
   static public function Path_Graficos() {     return Base::Path_Raiz()."Web/Graficos/";   }
   static public function Path_JS() {           return Base::Path_Raiz()."Web/JS/";   }
   static public function Path_CSS() {          return Base::Path_Raiz()."Web/CSS/";   }
   static public function Path_Cache() {        return Base::Path_Raiz()."Web/Cache/";   }
   static public function Path_Blog() {         return Base::Path_Raiz()."Blog/";   }
   static public function Path_Lab() {          return Base::Path_Raiz()."Lab/";   }
   static public function Path_Descargas() {    return Base::Path_Raiz()."Descargas/";   }
   static public function Path_Raiz() {         return str_replace("\\", "/", substr(dirname(__FILE__), 0, strlen(dirname(__FILE__)) - 3));  }
   
   static public function PathRelativo_Web() {          return Base::PathRelativo_Raiz()."Web/";   }
   static public function PathRelativo_Graficos() {     return Base::PathRelativo_Raiz()."Web/Graficos/";   }
   static public function PathRelativo_JS() {           return Base::PathRelativo_Raiz()."Web/JS/";   }
   static public function PathRelativo_CSS() {          return Base::PathRelativo_Raiz()."Web/CSS/";   }
   static public function PathRelativo_Cache() {        return Base::PathRelativo_Raiz()."Web/Cache/";   }
   static public function PathRelativo_Blog() {         return Base::PathRelativo_Raiz()."Blog/";   }
   static public function PathRelativo_Lab() {          return Base::PathRelativo_Raiz()."Lab/";   }
   static public function PathRelativo_Descargas() {    return Base::PathRelativo_Raiz()."Descargas/";   }
   // Función que devuelve el subdirectorio donde esta la raiz de esta web en el servidor. 
   //  Por ejemplo si está en http://localhost/devildrey33.es/ devuelve "devildrey33.es/"
   //  Devuelve "" si está en la raíz del servidor.
   static public function PathRelativo_Raiz() {
       $Raiz = $_SERVER["DOCUMENT_ROOT"];
       if (substr($Raiz, -1) !== "/") $Raiz .= "/";    // a veces DOCUMENT_ROOT viene terminado con barra, a veces no...  
       $TamServidor = strlen($Raiz);
       $Tmp = str_replace("\\", "/", dirname(__FILE__));
       return substr($Tmp, $TamServidor , (strlen($Tmp) - $TamServidor) - 3);
   }
   
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


   static public function ImprimirAscii($String) {
       $Tam = strlen($String);
       $ArrayCaracteres = [];
       for ($i = 0; $i < $Tam; $i++) {
           $Char["L"] = substr($String, $i, 1);
           $Char["ASCII"] = ord(substr($String, $i, 1));
           $ArrayCaracteres[] = $Char;
       }
       print_r($ArrayCaracteres);
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
       if 	(stripos($u_agent, "linux") !== FALSE)			{ $platformcorto = 'Linux';	$platform = 'Linux'; }
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
           'Nombre'      	=> $bname,
           'NombreCorto'	=> $bnamecorto,
           'Version'   		=> $version,
           'Plataforma' 	=> $platform,
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

           if (devildrey33_Opciones::BorrarLogPHP() === 1) {
                unlink(dirname(__FILE__)."/Cache/php-error.log");
           }
//           $LogStr .= "<script>\$Base.MostrarErroresPHP();</script>";
       }
       return $LogStr;
   }

   // Función que parsea el log para resaltar el número de línea del warning/error
   static function ParsearLogPHP($Log) {
       $LogStr = "";
       $Lineas = explode("\n", $Log);
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

/* Función que imprime un salto de línea si la opción Minificar HTML está desactivada. */
function Intro() {
    if (devildrey33_Opciones::Minificar_HTML() === 1) {   return "";   }
    else                                              {   return "\n"; }
}
//}




// Elimino el archivo que contiene los warnings y errores php
if (file_exists(dirname(__FILE__)."/Cache/php-error.log") /*&& devildrey33_Opciones::BorrarLogPHP() === 1 */) {
//    unlink(dirname(__FILE__)."/Cache/php-error.log");
    Base::ObtenerLogPHP();
}

// Establezco un archivo de log para guardar los errores/warnings 
ini_set("log_errors", 1);
ini_set("error_log", Base::Path_Raiz()."Web/Cache/php-error.log");

/*
register_shutdown_function("fatal_handler");
function fatal_handler() {
    echo "<script>\$Base.MostrarErroresPHP();</script>";
}*/
?>