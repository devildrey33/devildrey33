<?php

class devildrey33_Buscador {
    static public function GenerarCache() {
        // Tiempo máximo de ejecución en segundos (1 hora)
        set_time_limit(60 * 60);
//        header('Content-Type: text/html; charset=8859-1');
//        header('Content-Type: text/html; charset=UTF-8');
        $ArrayEntradasB = (require dirname(__FILE__).'/Config/EntradasBlog.php');
        $ArrayEntradasD = (require dirname(__FILE__).'/Config/EntradasDocCSS.php');
        $CacheBuscador = array();
        
//        $CacheBuscador[] = devildrey33::CacheBuscador_EscanearArchivo($ArrayEntradasB[1]);
        
//        devildrey33::CacheBuscador_SeparaString($CacheBuscador[0]["Palabras"]);
        foreach ($ArrayEntradasB as $Entrada) {  $CacheBuscador[] = devildrey33_Buscador::EscanearArchivo($Entrada);        }
        foreach ($ArrayEntradasD as $Entrada) {  $CacheBuscador[] = devildrey33_Buscador::EscanearArchivo($Entrada);        }
        
        
        file_put_contents($_SERVER['DOCUMENT_ROOT']."/Web/Cache/BuscadorPalabras.php", "<?php return ".var_export($CacheBuscador, TRUE).";");
        
        print_r($CacheBuscador);
        // Tiempo máximo de ejecución en segundos (30 segundos)
        set_time_limit(30);
    }
    
    // Archivo '/Blog/Canvas2D_1'
    static public function EscanearArchivo($Entrada) {
        switch ($Entrada["Tipo"]) { /* Blog y Doc sempre van sense extensio, el lab sempre va amb extensio (s'han de posar les extensions que falten) */
            case "Blog"   :   default :       $URL = "/Blog/".$Entrada["URL"].".php";   break;
            case "Lab"    :                   $URL = "/".$Entrada["URL"];               break; // (La URL sense el /Lab/ perque retorni nomes l'arxiu (OJU PERQUE DESPRES AL RESULTAT DEL BUSCADOR SI QUE HA D'APUNTAR A /Lab/)
            case "DocCSS" :                   
                switch ($Entrada["TipoCSS"]) {
                    case 0 : $URL  = "/Doc/CSS/Propiedades/".(  ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    $Entrada["Titulo"] = "Propiedad CSS ".$Entrada["Nombre"];    break;
                    case 1 : $URL  = "/Doc/CSS/Selectores/".(   ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    $Entrada["Titulo"] = "Selector CSS ".$Entrada["Nombre"];     break;
                    case 2 : $URL  = "/Doc/CSS/Funciones/".(    ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    $Entrada["Titulo"] = "Función CSS ".$Entrada["Nombre"];      break;
                    case 3 : $URL  = "/Doc/CSS/Reglas/".(       ($Entrada["Path"] === '') ? $Entrada["Nombre"].".php" : $Entrada["Path"].".php");    $Entrada["Titulo"] = "Regla CSS ".$Entrada["Nombre"];        break;
                }
                
                break;
        }
        
        // Fase 1, generar código html
        $fb = iconv('UTF-8', 'ISO-8859-1//IGNORE', file_get_contents("http://devildrey33.st0rm".$URL."?GenerarCacheBuscador"));            
        // Fase 2, eliminar todas las etiquetas
        $fb = strip_tags($fb);
        // Fase 3, pasar un filtro que elimina acentos y ciertos caracteres 
        $fb = devildrey33_Buscador::Filtro($fb);
        // Dividimos el contenido restante en un array de palabras
        $ArrayPalabras = array_filter(explode(" ", $fb)); 
        // Creo un array con el archivo, el titulo, y las palabras
//        if (filemtime(dirname(__FILE__).'/CSS_BD.php') > filemtime(dirname(__FILE__)."/Config/EntradasDocCSS.php")) { 
        $Resultado = array( "URL"       => $URL, 
                            "Titulo"    => devildrey33_Buscador::Filtro(iconv('UTF-8', 'ISO-8859-1//IGNORE', $Entrada["Titulo"])), 
                            "Palabras"  => "",
                            "UMOD"      => filemtime($_SERVER['DOCUMENT_ROOT'].$URL));               
        foreach ($ArrayPalabras as $Palabra) {
            if (strlen($Palabra) > 1) {
                if (strpos($Resultado["Palabras"], $Palabra) === false) {
                    $Resultado["Palabras"] .= $Palabra." ";
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
            /* Redeu no pilla be els accents amb strings... els he posat amb chr i el caracter ASCII... putes codificacións... */
            array(chr(225), chr(233), chr(237), chr(243), chr(250), chr(241), "(", ")", "'", '"', ";", ":", "=", "_", "[", "]", "{", "}", "+", "*", "%", "/", "^", "`", "´", "&", ",", ".", ">", "<", "\n", "#", "\r", "\t", "?", "\\"),
            array("a"     ,"e"      , "i"     , "o"     , "u"     , "n"     , " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " ", " " ," ", " ", " ", " " , " ", " " , " " , " ", " " ),  
            mb_strtolower($Texto)
        );
    }
};    
?>
     