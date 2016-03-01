<?php
/* Objeto para trabajar con las cookies de la sesión actual (la configuración por defecto varia de localhost al servidor REAL) */
if (!isset($_SESSION)) session_start();

include("Base.php");

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
if (strpos($_SERVER["SERVER_NAME"], "devildrey33.esy.es") !== false)  {  devildrey33_Opciones::$ServidorDebug = FALSE; }
else if (strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) {  devildrey33_Opciones::$ServidorDebug = FALSE; }
else                                                                  {  devildrey33_Opciones::$ServidorDebug = TRUE;  }


/* Esta clase contiene todas las variables que pueda necesitar de la variable $_SESSION de forma que si no estan definidas devuelve su valor por defecto sin necesidad de crearla en la cookie.
        En definitiva solo se reservara espacio para la cookie si la variable en concreto no tiene su valor por defecto.
        Por otra parte tambien controla los timeouts de ciertas variables que no deben ser guardadas durante mucho tiempo.           */
class devildrey33_Opciones {
    // Variable que determina las opciones predeterminadas segun si es el servidor local o de internet
    public static $ServidorDebug = FALSE;    
           
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
    static public function MostrarConsola($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("MostrarConsola", 		(devildrey33_Opciones::$ServidorDebug === FALSE) ? 0 : 1, 		$Valor);	}
    static public function Administrador($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("Administrador",                                                                     0, 		$Valor);	}
    static public function Minificar_CSS($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_CSS", 		(devildrey33_Opciones::$ServidorDebug === FALSE) ? 1 : 0, 		$Valor);	}
    static public function Minificar_JS($Valor = -1)        {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_JS", 		(devildrey33_Opciones::$ServidorDebug === FALSE) ? 1 : 0, 		$Valor);	}
    static public function Minificar_HTML($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_HTML", 		(devildrey33_Opciones::$ServidorDebug === FALSE) ? 1 : 0, 		$Valor);	}
    static public function ActualizarCache($Valor = -1)     {	return devildrey33_Opciones::_ObtenerAsignarValor("ActualizarCache", 		(devildrey33_Opciones::$ServidorDebug === FALSE) ? 0 : 1, 		$Valor);	}
    static public function PaginasVistas($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("PaginasVistas",                                                                     0, 		$Valor);	}
    static public function UltimaActividadMS($Valor = -1)   {	return devildrey33_Opciones::_ObtenerAsignarValor("UltimaActividadMS",                                                                 0, 		$Valor);	}
    static public function EntradasIndice($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("Indice_EntradasCargadas",                                                           16, 		$Valor);	}

/*    static public function MostrarConsola($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("MostrarConsola", 		(strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) ? 0 : 1, 		$Valor);	}
    static public function Administrador($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("Administrador",                                                                              0, 		$Valor);	}
    static public function Minificar_CSS($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_CSS", 		(strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) ? 1 : 0, 		$Valor);	}
    static public function Minificar_JS($Valor = -1)        {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_JS", 		(strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) ? 1 : 0, 		$Valor);	}
    static public function Minificar_HTML($Valor = -1)      {	return devildrey33_Opciones::_ObtenerAsignarValor("Minificar_HTML", 		(strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) ? 1 : 0, 		$Valor);	}
    static public function ActualizarCache($Valor = -1)     {	return devildrey33_Opciones::_ObtenerAsignarValor("ActualizarCache", 		(strpos($_SERVER["SERVER_NAME"], "devildrey33.es") !== false) ? 0 : 1, 		$Valor);	}
    static public function PaginasVistas($Valor = -1)       {	return devildrey33_Opciones::_ObtenerAsignarValor("PaginasVistas",                                                                              0, 		$Valor);	}
    static public function UltimaActividadMS($Valor = -1)   {	return devildrey33_Opciones::_ObtenerAsignarValor("UltimaActividadMS",                                                                          0, 		$Valor);	}*/
    
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
        $ArrayDatos = (require dirname(__FILE__).'/Passwords.php');
        if ($Login === $ArrayDatos["LOGIN-devildrey33"] && Base::Decodificar($Pass) === $ArrayDatos["PASS-devildrey33"] && devildrey33_Opciones::ErrorLogin() < 10) {
            devildrey33_Opciones::Administrador(1);
            return "Correcto!";
        }
        else if ($Login === $ArrayDatos["LOGIN-Barba"] && Base::Decodificar($Pass) === $ArrayDatos["PASS-Barba"] && devildrey33_Opciones::ErrorLogin() < 10) {
            devildrey33_Opciones::Administrador(2);
            return "Correcto!";            
        }
        else {
            return "Error ".devildrey33_Opciones::SumaErrorLogin().".";
            if (devildrey33_Opciones::MostrarConsola() === 1) echo " (".Base::Decodificar($Pass).")";
        }
        
    }
    
};

/* Función que imprime un salto de línea si la opción Minificar HTML está desactivada. */
function Intro() {
    if (devildrey33_Opciones::Minificar_HTML() === 1) {   return ""; }
    else                                              {   return "\n"; }
}

?>