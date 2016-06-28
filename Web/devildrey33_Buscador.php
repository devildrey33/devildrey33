<?php
//echo "devildrey33_Buscador\n";


include_once "devildrey33_Opciones.php";


class devildrey33_Buscador {
    static public function GenerarCache() {
        
        // Tiempo máximo de ejecución en segundos (1 hora)
//        set_time_limit(60 * 60);
//        header('Content-Type: text/html; charset=8859-1');
//        header('Content-Type: text/html; charset=UTF-8');
        if (!file_exists(dirname(__FILE__).'/Config/EntradasBlog.php')) {
            error_log("<span style='color:red'>Error! </span> devildrey33_Buscador::GenerarCache -> No existe el archivo '/Config/EntradasBlog.php'");
            return false;
        }
        if (!file_exists(dirname(__FILE__).'/Config/ListaLab.php')) {
            error_log("<span style='color:red'>Error! </span> devildrey33_Buscador::GenerarCache -> No existe el archivo '/Config/ListaLab.php'");
            return false;
        }
        if (!file_exists(dirname(__FILE__).'/Config/EntradasDocCSS.php')) {
            error_log("<span style='color:red'>Error! </span> devildrey33_Buscador::GenerarCache -> No existe el archivo '/Config/EntradasDocCSS.php'");
            return false;
        }
        
        $ArrayEntradasB = (require dirname(__FILE__).'/Config/EntradasBlog.php');
        $ArrayEntradasD = (require dirname(__FILE__).'/Config/EntradasDocCSS.php');
        $ArrayEntradasL = (require dirname(__FILE__).'/Config/ListaLab.php');
        $CacheBuscador = array();
        
//        $CacheBuscador[] = devildrey33::CacheBuscador_EscanearArchivo($ArrayEntradasB[1]);
        
//        devildrey33::CacheBuscador_SeparaString($CacheBuscador[0]["Palabras"]);
        foreach ($ArrayEntradasB as $Entrada) {   // Blog
            $Ret = devildrey33_Buscador::EscanearArchivo($Entrada);   
            if ($Ret["UMOD"] !== 0) $CacheBuscador[] = $Ret;
        }
        foreach ($ArrayEntradasD as $Entrada) {   // Doc/CSS
            $Ret = devildrey33_Buscador::EscanearArchivo($Entrada);   
            if ($Ret["UMOD"] !== 0) $CacheBuscador[] = $Ret;
        }
        foreach ($ArrayEntradasL as $Entrada) {   // Doc/CSS
            $E = ["Tipo" => "Lab", "URL" => str_replace("/Lab", "", $Entrada), "Titulo" => str_replace(array("/Lab", "/"), array("", " "), $Entrada)];
//            print_r($E);
            $Ret = devildrey33_Buscador::EscanearArchivo($E);
//            print_r($Ret);
            if ($Ret["UMOD"] !== 0) $CacheBuscador[] = $Ret;
        }        
        
        file_put_contents(Base::Path_Raiz()."Web/Cache/BDBuscador.php", "<?php return ".var_export($CacheBuscador, TRUE).";");
        
        return true;
//        print_r($CacheBuscador);
        // Tiempo máximo de ejecución en segundos (30 segundos)
//        set_time_limit(30);
    }
    
    // Archivo '/Blog/Canvas2D_1'
    static public function EscanearArchivo($Entrada) {
        switch ($Entrada["Tipo"]) { 
            case "Blog"   :   default :       
                $URL = "/Blog/".$Entrada["URL"];   
                $Path = "/Blog/".$Entrada["URL"].".php";   
                break;
            case "Lab"    :
                $URL = "/Lab/".$Entrada["URL"];
                $Path = "/".$Entrada["URL"];
                break; 
            case "DocCSS" :                   
                switch ($Entrada["TipoCSS"]) {
                    case 0 : 
                        $URL  = "/Doc/CSS/Propiedades/".(  ($Entrada["Path"] === '') ? $Entrada["Nombre"] : $Entrada["Path"]);   
                        $Path  = "/Documentacion/CSS/Propiedades/".(  ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");   
                        $Entrada["Titulo"] = "Propiedad CSS ".$Entrada["Nombre"];    
                        break;
                    case 1 : 
                        $URL  = "/Doc/CSS/Selectores/".(   ($Entrada["Path"] === '') ? $Entrada["Nombre"] : $Entrada["Path"]);    
                        $Path  = "/Documentacion/CSS/Selectores/".(   ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    
                        $Entrada["Titulo"] = "Selector CSS ".$Entrada["Nombre"];     
                        break;
                    case 2 : 
                        $URL  = "/Doc/CSS/Funciones/".(    ($Entrada["Path"] === '') ? $Entrada["Nombre"] : $Entrada["Path"]);    
                        $Path  = "/Documentacion/CSS/Funciones/".(    ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    
                        $Entrada["Titulo"] = "Función CSS ".$Entrada["Nombre"];      
                        break;
                    case 3 : 
                        $URL  = "/Doc/CSS/Reglas/".(       ($Entrada["Path"] === '') ? $Entrada["Nombre"] : $Entrada["Path"]);    
                        $Path  = "/Documentacion/CSS/Reglas/".(       ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    
                        $Entrada["Titulo"] = "Regla CSS ".$Entrada["Nombre"];        
                        break;
                }
                $Path = str_replace(array('@', ':', '(', ')', '[', ']', '=', '*', '|'), array('', '', '', '', '', '', '', '', ''), $Path);
                $Entrada["Imagen"] = "CSS3.png";
                break;
        }
        $Resultado = array( "URL"       => str_replace("//", "/", $URL),                
                            "Titulo"    => $Entrada["Titulo"], 
//                            "Imagen"    => $Entrada["Imagen"],
                            "Palabras"  => "",
                            "UMOD"      => 0);               
        
        if (file_exists(dirname(__FILE__)."/..".$Path) && is_dir(dirname(__FILE__)."/..".$Path) === false) {        
            // Fase 1, generar código html        
            $fb = utf8_decode(preg_replace('/<\\?.*(\\?>|$)/Us', '', file_get_contents(dirname(__FILE__)."/..".$Path)));        
            // Fase 2, eliminar todas las etiquetas
            $fb = strip_tags($fb);
            // Fase 3, pasar un filtro que elimina acentos y ciertos caracteres 
            $fb = devildrey33_Buscador::Filtro($fb);
            // Dividimos el contenido restante en un array de palabras
            $ArrayPalabras = array_filter(explode(" ", $fb)); 
            // Creo un array con el archivo, el titulo, y las palabras
    //        if (filemtime(dirname(__FILE__).'/CSS_BD.php') > filemtime(dirname(__FILE__)."/Config/EntradasDocCSS.php")) { 

    //        $URL = str_replace(array("/Doc/", '', '', '', '', '', '', '', '', ''), array("/Documentacion/", '@', ':', '(', ')', '[', ']', '=', '*', '|'), $URL);
            $Resultado["UMOD"] = filemtime(Base::Path_Raiz().$Path);               
            
            foreach ($ArrayPalabras as $Palabra) {
                if (strlen($Palabra) > 1) {
                    if (strpos($Resultado["Palabras"], $Palabra) === false) {
                        $Resultado["Palabras"] .= $Palabra." ";
                    }                
                }
            }
        }
//        print_r($Resultado["Titulo"]."\n");        
        return $Resultado;
    }
    
    // imprimeix cada lletra del string amb el seu valor ASCII (per depurar les putes codificacións i fer un parche dels caracters que no li agraden)
    static public function SeparaString($Str) {
        for ($i = 0; $i < strlen($Str); $i++) {
            echo substr($Str, $i, 1)." -> ".ord(substr($Str, $i, 1))."\n";
        }
    }
    
    static public function Filtro($Texto) {
        return str_replace(
            /* Redeu no pilla be els accents amb strings... els he posat amb chr i el caracter ASCII... putes codificacións...                                                                                                                ¿         «         »         º      */
            array(chr(225), chr(233), chr(237), chr(243), chr(250), chr(241), "(", ")", "'", '"', ";", ":", "=", "_", "[", "]", "{", "}", "+", "*", "%", "/", "^", "`", "´", "&", ",", ".", ">", "<", "\n", "#", "\r", "\t", "?", "¿", "\\", chr(191), chr(171), chr(187), chr(186)),
            array("a"     ,"e"      , "i"     , "o"     , "u"     , "n"     , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " " ," ", " ", " ", " " , " ", " " , " " , " ", " ", " " , " "     , " "     , " "     , " "),  
            mb_strtolower($Texto)
        );
    }
    
    static public function Buscar($Palabras) {
        if (strlen($Palabras) < 1) {
            return json_encode(array("HTML" => "La busqueda no ha producido ningún resultado.", "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
        }
        if (file_exists(dirname(__FILE__)."/Cache/BDBuscador.php") !== false) {
            $Ret = array();
            $Encontrado = 0;
            $ArrayBuscador = (require dirname(__FILE__).'/Cache/BDBuscador.php');
            $ArrayPalabras = explode(" ", devildrey33_Buscador::Filtro($Palabras));
            foreach ($ArrayPalabras as $Palabra) {
                foreach ($ArrayBuscador as $Entrada) {
                    if ($Palabra !== '') {
                        if (strpos($Entrada["Palabras"], $Palabra) !== false) {
                            devildrey33_Buscador::_AgregarBusqueda($Ret, $Entrada);
                        }
                        $Encontrado ++;
                    }
                }
            }
            $HTML = "";
            foreach ($Ret as $Entrada) {
                $HTML .= "<a href='".Base::URL_Raiz().substr($Entrada["URL"], 1)."'><div>".$Entrada["Titulo"]."</div></a>";
            }
            if ($HTML === "" || $Encontrado === 0) $HTML = "La busqueda no ha producido ningún resultado.";
        }
        else {
            error_log("Error!! no se encuentra el archivo '/Web/Cache/BDBuscador.php'");
        }               
        
        return json_encode(array("HTML" => $HTML, "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
    }
    
    static protected function _AgregarBusqueda(&$Ret, $Entrada) {
        foreach ($Ret as $Posicion) {
            if ($Posicion["Titulo"] === $Entrada["Titulo"]) {
                return;
            }
        }
        $R["Titulo"]    = $Entrada["Titulo"];
        $R["URL"]       = $Entrada["URL"];
        $R["UMOD"]      = $Entrada["UMOD"];
        $Ret[] = $R;
    }
};    
?>
     