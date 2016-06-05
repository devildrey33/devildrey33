<?php
/* Clase devildrey33_PintarCodigo creada por Josep Antoni Bover el 09/10/2011 para www.devildrey33.es
   Ultima modificación : 29/01/2016

   Versión             : 2.02

   Explicación         : Esta clase consiste en un conjunto de funciones que permiten pintar cadenas de texto, archivos, o partes de archivo XML, PHP, C, C++, HTML, JavaScript, y CSS
                         La idea es parsear una parte de un archivo para introducir en las palabras especificadas etiquetas span con colores especificos.
                         Dado que este proceso puede ser algo pesado para el servidor PHP, esta clase guarda los textos parseados en archivos, para que la proxima vez que se requieran no se tarde tanto en subministrarlos.
                         Si por alguna razón modificas el archivo, esta clase comprueba su fecha de modificación, y actualiza el archivo parseado si es necesario.

   Objetivo            : Como estoy administrando mucho código en www.devildrey33.es necesito algo que me haga el trabajo de colorear aquellas porciones de código que quiero mostrar en la web.
                         De esta forma puedo añadir directamente los archivos de código en la web, y esta se encarga de colorearlos si son solicitados.

   TODO                : Diccionario C++ estilo NetBeans
                         Captar y parsear con el tipo CSS los atributos style del HTML. 

   Licencia            : GPL3 (http://www.gnu.org/licenses/gpl-3.0.html)

   NOVEDADES           : La version 2.0 antes de escanear el código lo divide por lineas. Al dividir el código por líneas se puede remarcar luego en el HTML.
                         Eliminadas las funciones "PintarTextoC", "PintarTextoCSS", "PintarTextoHTML", "PintarTextoXML", "PintarTextoPHP", y "PintarTextoJavaScript". Ya que estas siempre hacian el parsing al vuelo y no lo guardaban en el disco. Solo se ha dejado la función "PintarTexto" que es ideal para pintar código de consola (blanco y negro).
                         Eliminadas las funciónes para parsear XML, si necesitas parsear XML utiliza la función para HTML.
                         Replanteado el algoritmo de pintado del CSS para asemejarlo a los demas lenguajes.
                         Se han unificado todas las funciones de parsing en una sola. Se ha optimizado el motor de parsing respecto a la versión 1.x, eliminando algunas fases innecesareas.
                         Creados diccionarios de colores para cada lenguaje, por el momento existen diccionarios que simulan los siguientes IDE : VC, NetBeans, y DreamWeaver.
                         Se puede especificar a la hora de pintar, que diccionario queremos utilizar.
                         La versión 2.01 pintaba ciertas palabras del diccionario HTML si se las encontraba sueltas por el código HTML sin los caracteres <>.
*/
//    echo "devildrey33_PintarCodigo.php\n";


// Objeto que realiza el parsing básico para normas complejas, y especificas para cada lenguaje
class devildrey33_PintarCodigo {
                // Path para guardar y leer los archivos cache
    private     $_PathCache                 = "/Cache/PintarCodigo/";
                // Path donde están ubicados los diccionarios de colores
    private     $_PathDiccionario           = "/PintarCodigo/";
                // Sin depurador se hace lo que se puede... (Imprimo el array de palabras y estados)
                // El modo depuración anula la escritura del texto coloreado en cache, por lo que siempre parseara al vuelo el código
    private     $_Debug = false;
                // Array de los caracteres delimitadores para HTML    
    private     $_DelimitadoresHTML         = array(" ", ">", "<");
                // Array de los caracteres delimitadores para PHP
    private     $_DelimitadoresPHP          = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", "@", "	", "\n", "\r");
                // Array de los caracteres delimitadores para JavaScript
    private     $_DelimitadoresJavaScript   = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", "@", "	", "\n", "\r");
                // Array de los caracteres delimitadores para C/C++
    private     $_DelimitadoresC            = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", ":", "	", "\n", "\r", "&");
                // Array de los caracteres delimitadores para CSS    
    private     $_DelimitadoresCSS          = array(" ", ":", ";", "(", ")" , "{", "}", ",");
    
    // Función que pinta el string especificado dentro de un marco de código
    // - $IDMarco : ID para el marco (utilizable desde HTML)
    // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
    // - $Texto   : String que contiene el texto C/Cpp a pintar
    public function PintarTexto($IDMarco, $Titulo, $Texto) {
        echo $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
        $Lineas     = explode("\n", $this->_EliminarCaracteresComprometidos($Texto));
        $l          = 1;
        foreach ($Lineas as $Linea) {
            echo "<div l='".$l++."'>".$Linea."</div>";
        }        
        echo $this->_TerminarMarco();
    }
    
    
    // Funcion que lee el archivo C/Cpp especificado y lo pinta según el esquema de colores de VisualStudio
    // - $IDMarco : ID para el marco (utilizable desde HTML)
    // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
    // - $Archivo : Ruta del archivo C/Cpp
    // - $ID      : ID para la porcion a colorear. (Si no se especifica ninguna ID se usara todo el archivo)
    // NOTA  Primero se comprueba que no exista un archivo de pintado, en el caso de existir se omite el parsing y se imprime el archivo directamente
    // NOTA2 Para establecer la ID de una porción dentro de un archivo CSS debes usar 2 comentarios : 
    //  /* -[INICIO devildrey33.MIID]- */
    //  Mi código C/Cpp.....
    //  /* -[FIN devildrey33.MIID]- */
    public function PintarArchivoC($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "VC") {
        if ($this->_Debug == false) {
            if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
        }
        $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
        $TextoColoreado = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
        if ($Ret == "TRUE") $TextoColoreado .= $this->Parsear("C", $Texto, $Tema);
        else                $TextoColoreado .= $Ret;
        $TextoColoreado .= $this->_TerminarMarco();
        if ($this->_Debug == false) {
            if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
        }
        echo $TextoColoreado;
    }
    
    
    // Funcion que lee el archivo CSS especificado y lo pinta según el esquema de colores de Dreamweaver
    // - $IDMarco : ID para el marco (utilizable desde HTML)
    // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
    // - $Archivo : Ruta del archivo CSS
    // - $ID      : ID para la porcion a colorear. (Si no se especifica ninguna ID se usara todo el archivo)
    // NOTA  Primero se comprueba que no exista un archivo de pintado, en el caso de existir se omite el parsing y se imprime el archivo directamente
    // NOTA2 Para establecer la ID de una porción dentro de un archivo CSS debes usar 2 comentarios : 
    //  /* -[INICIO devildrey33.MIID]- */
    //  Mi código CSS.....
    //  /* -[FIN devildrey33.MIID]- */
    public function PintarArchivoCSS($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans") {
        if ($this->_Debug == false) {
            if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
        }
        $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
        $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));

        if ($Ret == "TRUE") $TextoColoreado .= $this->Parsear("CSS", $Texto, $Tema);
        else 		    $TextoColoreado .= $Ret;
        $TextoColoreado .= $this->_TerminarMarco();
        if ($this->_Debug == false) {
            if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
        }
        echo $TextoColoreado;
    }

    // Función que lee el archivo HTML especificado y lo pinta según el esquema de colores de Dreamweaver
    // - $IDMarco : ID para el marco (utilizable desde HTML)
    // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
    // - $Archivo : Ruta del archivo XML a colorear.
    // - $ID      : ID de la porcion de código a colorear (Si no se especifica ninguna ID se usara todo el archivo)
    // NOTA  Primero se comprueba que no exista un archivo de pintado, en el caso de existir se omite el parsing y se imprime el archivo directamente
    // NOTA2 Para establecer una porción dentro de un archivo XML debes usar 2 comentarios : 
    //  <!--[INICIO devildrey33.MIID]-->
    //  Mi código HTML.....
    //  <!--[FIN devildrey33.MIID]-->
    public function PintarArchivoHTML($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans") {
        if ($this->_Debug == false) {
            if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
        }
        $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
        $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
        if ($Ret == "TRUE") $TextoColoreado .= $this->Parsear("HTML", $Texto, $Tema);
        else		    $TextoColoreado .= $Ret;
        $TextoColoreado .= $this->_TerminarMarco();
        if ($this->_Debug == false) {
            if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
        }
        echo $TextoColoreado;
    }
    /* Por compatibilidad se mantiene el nombre, pero ahora se usa la de HTML */
    public function PintarArchivoXML($IDMarco, $Titulo, $Archivo, $ID) {
        $this->PintarArchivoHTML($IDMarco, $Titulo, $Archivo, $ID);
    }
    
    // Funcion que lee el archivo JavaScript especificado y lo pinta según el esquema de colores de Dreamweaver
    // - $IDMarco : ID para el marco (utilizable desde HTML)
    // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
    // - $Archivo : Ruta del archivo JavaScript
    // - $ID      : ID para la porcion a colorear. (Si no se especifica ninguna ID se usara todo el archivo)
    // NOTA  Primero se comprueba que no exista un archivo de pintado, en el caso de existir se omite el parsing y se imprime el archivo directamente
    // NOTA2 Para establecer la ID de una porción dentro de un archivo JavaScript debes usar 2 comentarios : 
    //  /* -[INICIO devildrey33.MIID]- */
    //  Mi código JavaScript.....
    //  /* -[FIN devildrey33.MIID]- */
    public function PintarArchivoJS($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans") {
        $this->PintarArchivoJavaScript($IDMarco, $Titulo, $Archivo, $ID, $Tema);
    }

    public function PintarArchivoJavaScript($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans") {
        if ($this->_Debug == false) {
            if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
        }
        $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
        $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
        if ($Ret == "TRUE") $TextoColoreado .= $this->Parsear ("JS", $Texto, $Tema);
        else                $TextoColoreado .= $Ret;
        $TextoColoreado .= $this->_TerminarMarco();
        if ($this->_Debug == false) {
            if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
        }
        echo $TextoColoreado;
    }
    
    
    // Funcion que lee el archivo PHP especificado y lo pinta según el esquema de colores de Dreamweaver
    // - $IDMarco : ID para el marco (utilizable desde HTML)
    // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
    // - $Archivo : Ruta del archivo PHP
    // - $ID      : ID para la porcion a colorear. (Si no se especifica ninguna ID se usara todo el archivo)
    // NOTA  Primero se comprueba que no exista un archivo de pintado, en el caso de existir se omite el parsing y se imprime el archivo directamente
    // NOTA2 Para establecer la ID de una porción dentro de un archivo PHP debes usar 2 comentarios : 
    //  // -[INICIO devildrey33.MIID]-
    //  Mi código PHP.....
    //  // -[FIN devildrey33.MIID]-
    public function PintarArchivoPHP($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans") {
        if ($this->_Debug == false) {
            if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
        }
        $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
        $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
        if ($Ret == "TRUE") $TextoColoreado .= $this->Parsear("PHP", $Texto, $Tema);
        else                $TextoColoreado .= $Ret;
        $TextoColoreado .= $this->_TerminarMarco();
        if ($this->_Debug == false) {
            if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
        }
        echo $TextoColoreado;
    }
    
    
    /* Fases del parsing :
        1 - Eliminar caracteres comprometidos dependiendo del lenguaje especificado
        2 - Separación del código por líneas eliminando los caracteres "\n"
        3 - Escaneo de normas básicas carácter a carácter (comentarios, strings, numeros, directivas c/cpp, etc...)  
            - Mientras se escanean las normas básicas se separan las líneas en partes a las que llamaremos palabras para un analisis posterior
            - Para separar palabras utilizamos el array de delimitadores de su lenguaje.
        4 - Con todo el código separado por palabras, buscamos coincidencias en el diccionario palabra a palabra (siempre y cuando dicha palabra no sea parte de un estado básico).
        
       Tabla de estados del parsing básico por lenguajes 
                 ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------
                | Comentarios | ComentariosML | String1 | String2 | Números | Variables | Directivas | EtiquetaHTML | SelectorCSS | PropiedadCSS |
     ----------- ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------
    |   C/C++   |      X      |       X       |    X    |    X    |    X    |           |      X     |              |             |              |
     ----------- ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------
    |   PHP     |      X      |       X       |    X    |    X    |    X    |     X     |            |              |             |              |
     ----------- ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------
    |   JS      |      X      |       X       |    X    |    X    |    X    |           |            |              |             |              |
     ----------- ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------
    |   CSS     |             |       X       |    X    |    X    |         |           |            |              |      X      |       X      |
     ----------- ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------
    |   HTML    |             |       X       |    X    |    X    |         |           |            |       X      |             |              |
     ----------- ------------- --------------- --------- --------- --------- ----------- ------------ -------------- ------------- --------------        
     * Función para parsear un texto con las normas del $Tipo especificado 
     *  $Tipo puede ser : "HTML", "PHP", "CSS", "JS", y "C".
     *  $Tema puede ser : "NetBeans" y "DreamWeaver" para HTML, PHP, CSS, y JS. Para C solo existe el tema "VC"
     *  $l              : Parámetro para especificar la línea inicial (se usa internamente para parsings de HTML con código PHP, CSS, y JS. */
    protected function Parsear($Tipo = "HTML", $Texto, $Tema = "PorDefecto", &$l = 0) {
        if ($l != 0) $SubParsing = true;    // Si la línea no es 0, es que se trata de un SubParsing desde el parsing de HTML.
        else         $SubParsing = false;   // La línea es 0, por lo que es un nuevo parsing independiente.
        if ($Tipo == "HTML") ///////////////// Para el HTML no tocamos los caracteres < y >
            $Lineas     = explode("\n", $this->_EliminarCaracteresComprometidosHTML($Texto));
        else ///////////////////////////////// Para los demas lenguajes re-emplazamos caracteres comprometidos como < y > entre otros.
            $Lineas     = explode("\n", $this->_EliminarCaracteresComprometidos($Texto));            
        $Palabras       = array();          // Array de palabras con su estado (Texdo, Estado)
        $TotalPalabras  = 0;                // Contador con el total de palabras en el array                        
        $Estado         = $Tipo; ///////////// Estado actual del parsing ////////////////////////////////////////////////////////////////////////////////////////////////
        /* $Estado puede ser uno de los siguientes strings :  
             HTML, CSS, JS, PHP, C,                                                                      (Lenguajes)
             HTML_ComentarioML, CSS_ComentarioML, JS_ComentarioML, PHP_ComentarioML, C_ComentarioML,     (Comentarios multilinea)
             JS_Comentario, PHP_Comentario, C_Comentario,                                                (Comentarios de una sola línea)
             HTML_String1, CSS_String1, JS_String1, PHP_String1, C_String1                               (strings con comillas simples '')         
             HTML_String2, CSS_String2, JS_String2, PHP_String2, C_String2                               (strings con comillas dobles "")                
             JS_Numero, PHP_Numero, C_Numero,                                                            (valores numericos)
             PHP_Variable,                                                                               (variables PHP)
             C_Directiva, C_DirectivaFin,                                                                (macros / directivas C/C++)
             HTML_FinCSS, HTML_FinJS, HTML_FinPHP, HTML_Etiqueta, HTML_EtiquetaStr1, HML_EtiquetaStr2    (Partes de otro lenguaje y valores de atributos [HTML])
             CSS_Regla, CSS_Selector                                                                     (Reglas y Selectores CSS) */                 
        /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/
        /* Elección de Diccionario y Delimitadores según el lenguaje */
        switch ($Tipo) {
            case "HTML" :
                $Delimitadores = $this->_DelimitadoresHTML;
                switch ($Tema) {
                    case "NetBeans" :  case "PorDefecto" :  default :       $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'HTML-NetBeans.php');    break;
                    case "DreamWeaver" :                                    $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'HTML-DreamWeaver.php'); break;
                }
                break;
            case "CSS" :
                $Delimitadores = $this->_DelimitadoresCSS;
                switch ($Tema) {
                    case "NetBeans" :  case "PorDefecto" :  default :       $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'CSS-NetBeans.php');    break;
                    case "DreamWeaver" :                                    $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'CSS-DreamWeaver.php'); break;
                }
                break;
            case "JS" :
                $Delimitadores = $this->_DelimitadoresJavaScript;
                switch ($Tema) {
                    case "NetBeans" :  case "PorDefecto" :  default :       $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'JS-NetBeans.php');    break;
                    case "DreamWeaver" :                                    $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'JS-DreamWeaver.php'); break;
                }
                break;
            case "PHP" :
                $Delimitadores = $this->_DelimitadoresPHP;
                switch ($Tema) {
                    case "NetBeans" :  case "PorDefecto" :  default :       $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'PHP-NetBeans.php');    break;
                    case "DreamWeaver" :                                    $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'PHP-DreamWeaver.php'); break;
                }
                break;
            case "C" :
                $Delimitadores = $this->_DelimitadoresC; 
                switch ($Tema) {
                    case "VC" :  case "PorDefecto" :  default :             $Diccionario = (require dirname(__FILE__).$this->_PathDiccionario.'C-VC.php');    break;
                }            
                break;
        }
        $NuevoParsing = "";
        $NuevoParsingLinea = 0;
        
        // Análisis de las normas básicas
        for ($i = 0; $i < count($Lineas); $i++) {            
            if ($SubParsing == true && count($Lineas) == 1) { //////////////// Una sola línea en el subparsing
                $this->_EscanearLinea($Lineas[$i], $Diccionario, $Delimitadores, $Palabras, $TotalPalabras, $l, $Estado, $Tipo, false, false, $NuevoParsing, $NuevoParsingLinea);
            }            
            else if ($SubParsing == true && $i == 0)  { ////////////////////// Sin abrir el div de la linea en el subparsing
                $this->_EscanearLinea($Lineas[$i], $Diccionario, $Delimitadores, $Palabras, $TotalPalabras, $l, $Estado, $Tipo, false, true, $NuevoParsing, $NuevoParsingLinea);
            }            
            else if ($SubParsing == true && $i == (count($Lineas)-1)) { ////// Sin cerrar el div de  la linea en el subparsing
                $this->_EscanearLinea($Lineas[$i], $Diccionario, $Delimitadores, $Palabras, $TotalPalabras, $l, $Estado, $Tipo, true, false, $NuevoParsing, $NuevoParsingLinea);
            }            
            else { /////////////////////////////////////////////////////////// Lineas abiertas y cerradas 
                $this->_EscanearLinea($Lineas[$i], $Diccionario, $Delimitadores, $Palabras, $TotalPalabras, $l, $Estado, $Tipo, true, true, $NuevoParsing, $NuevoParsingLinea);
            }
        }        
        // Analisis de las palabras clave
        return $this->_PintarPalabrasClave($Palabras, $Diccionario, $Delimitadores, $Tipo);
    }
    
    /* Función interna para iniciar la $PalabraActual con o sin la abertura del div de la línea */
    protected function _DivInicial($l, $Color, $Estado, $AbrirDivLinea = true, &$Spans) {
        $Spans ++;
        if ($AbrirDivLinea == true)
            return array("Texto" => "<div l=".($l + 1)."><span class='".$Color."'>", "Estado" => $Estado);        
        else
            return array("Texto" => "<span class='".$Color."'>", "Estado" => $Estado);        
    }
    
    /* Las posiciones finales de los diccionarios se utilizan para guardar colores de los estados básicos 
        $Diccionario[count($Diccionario) - 1]["Color"] // Estado_Numero   (NO SE USA EN CSS NI EN HTML)
        $Diccionario[count($Diccionario) - 2]["Color"] // Estado_Variable (O DIRECTIVAS C)
        $Diccionario[count($Diccionario) - 3]["Color"] // Estado_String
        $Diccionario[count($Diccionario) - 4]["Color"] // Estado_Comentarios
        $Diccionario[count($Diccionario) - 5]["Color"] // Estado_Normal   (REGLAS PARA CSS)    
        $Diccionario[count($Diccionario) - 8]["Color"] // Estado_Selector (SOLO PARA CSS) */         
    /* Función que devuelve el color especificado en $Valor según el $Diccionario especificado */
    protected function _Color(&$Diccionario, $Valor) {
        return $Diccionario[count($Diccionario) - $Valor]["Color"];
    }
    
    /* Función que escanea una linea para determinar las normas básicas */
    protected function _EscanearLinea($Linea, $Diccionario, $Delimitadores, &$Palabras, &$TotalPalabras, &$l, &$Estado, $Tipo, $AbrirDivLinea, $CerrarDivLinea, &$NuevoParsing, &$NuevoParsingLinea) {        
        $InicioEtiqueta = 0;
        $Spans = 0;
        // Estado inicial de la línea
        switch ($Estado) {
            case "HTML" : case "CSS" : case "PHP" : case "JS" : case "C" :           // Sin estado
            default : // Comentario de una sola línea que se ha terminado
                $Estado = $Tipo;
                $Palabras[$TotalPalabras ++] = $this->_DivInicial($l, $this->_Color($Diccionario, 5), $Estado, $AbrirDivLinea, $Spans);
                break;
            case "HTML_ComentarioML" : case "CSS_ComentarioML" : case "PHP_ComentarioML" : case "JS_ComentarioML" : case "C_ComentarioML" :
                $Palabras[$TotalPalabras ++] = $this->_DivInicial($l, $this->_Color($Diccionario, 4), $Estado, $AbrirDivLinea, $Spans);
                break;
            case "HTML_String1" : case "CSS_String1" : case "PHP_String1" : case "JS_String1" : case "C_String1" : 
            case "HTML_String2" : case "CSS_String2" : case "PHP_String2" : case "JS_String2" : case "C_String2" : 
                $Palabras[$TotalPalabras ++] = $this->_DivInicial($l, $this->_Color($Diccionario, 3), $Estado, $AbrirDivLinea, $Spans);
                break;
            case "CSS_Regla" :
                $Palabras[$TotalPalabras ++] = $this->_DivInicial($l, $this->_Color($Diccionario, 5), $Estado, $AbrirDivLinea, $Spans);
                break;
            case "CSS_Selector" :
                $Palabras[$TotalPalabras ++] = $this->_DivInicial($l, $this->_Color($Diccionario, 8), $Estado, $AbrirDivLinea, $Spans);
                break; 
            case "HTML_FinPHP" : case "HTML_FinJS" : case "HTML_FinCSS" :
                $NuevoParsing .= "\n";
                break;
        }
        $PalabraActual = array("Texto" => "", "Estado" => $Estado);       
   
        // Escaneado de la línea
        for ($i = 0; $i < strlen($Linea); $i++) { 
            switch ($Estado) {
                case "HTML" : case "CSS" : case "PHP" : case "JS" : case "C" : // Sin estado
                    // ComentarioML (JS, CSS, PHP, C)
                    if (substr($Linea, $i, 2) == "/*") { 
                        $Estado .= "_ComentarioML"; $Spans++; $i++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 4)."'>/*", "Estado" => $Estado);                        
                    }
                    // Comentario (JS, PHP, C)
                    else if (substr($Linea, $i, 2) == "//") { 
                        $Estado .= "_Comentario"; $Spans ++; $i++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 4)."'>//", "Estado" => $Estado);                        
                    }
                    // String de dobles comillas
                    else if ($Linea[$i] == '"' && $Linea[$i - 1] != "\\") {
                        $Estado .= "_String2"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 3)."'>\"", "Estado" => $Estado);                                            
                    }
                    // String de comillas simples
                    else if ($Linea[$i] == "'" && $Linea[$i - 1] != "\\") { // Principio String1
                        $Estado .= "_String1"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 3)."'>'", "Estado" => $Estado);
                    }
                    // Principio variable PHP
                    else if ($Linea[$i] == "$" && $Tipo == "PHP") {
                        $Estado .= "_Variable"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 2)."'>$", "Estado" => $Estado);                        
                    }
                    // Número
                    else if ($this->_EsNumero($Linea[$i]) == true && $this->_BuscarDelimitador($Linea[$i - 1], $Delimitadores) && $Tipo != "CSS" && $Tipo != "HTML") {
                        $Estado .= "_Numero"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 1)."'>".$Linea[$i], "Estado" => $Estado);
                    }     
                    // Principio de una directiva C/C++
                    else if($Linea[$i] == "#" && $Linea[$i + 1] != "#" && $Tipo == "C") { // Directiva (pre-procesador)
                        $Estado .= "_Directiva"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 2)."'>#", "Estado" => $Estado);                            
                    }
                    // Regla CSS
                    else if ($Linea[$i] == "@" && substr($Linea, $i, 10) != "@font-face" && $Tipo == "CSS") {
                        $Estado .= "_Regla"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 2)."'>@", "Estado" => $Estado);                        
                    }
                    // Selector Clase CSS
                    else if ($Linea[$i] == "." && $Tipo == "CSS") {
                        $Estado .= "_Selector"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 8)."'>".$Linea[$i], "Estado" => $Estado);                        
                    }
                    // Selector ID CSS
                    else if ($Linea[$i] == "#" && $Tipo == "CSS") {
                        $Estado .= "_Selector"; $Spans ++;
                        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 8)."'>".$Linea[$i], "Estado" => $Estado);                        
                    }
                    // Posible etiqueta HTML
                    else if ($Linea[$i] == "<" && $Tipo == "HTML") {
                        if (substr($Linea, $i, 5) == "<?php")  { // PHP
                            $Estado = "HTML_FinPHP"; $i += 5; $NuevoParsing = "<?php "; $NuevoParsingLinea = $l;
                            $Palabras[$TotalPalabras ++] = $PalabraActual;                            
                            $PalabraActual = array("Texto" => "", "Estado" => $Estado);                                                        
                        }
                        else if (substr($Linea, $i, 4) == "<!--")  { // Comentario HTML
                            $Estado .= "_ComentarioML"; $Spans++; $i+=3;
                            if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 4)."'>&lt;!--", "Estado" => $Estado);                                                    
                        }
                        else { // Otras etiquetas
                            $Estado .= "_Etiqueta"; 
                            if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = array("Texto" => "&lt;", "Estado" => $Estado);
                            $InicioEtiqueta = $i + 1;
                        }
                    }                    
                    else {
                        $PalabraActual["Texto"] .= $Linea[$i];
                        if ($this->_BuscarDelimitador($Linea[$i], $Delimitadores) == true) {
                            // Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
                            // Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
                            // De todas formas no estoy seguro si esto puede traer problemas
                            if (isset($Linea[$i + 1])) {
                                if ($this->_BuscarDelimitador($Linea[$i + 1], $Delimitadores) != true) {
                                    if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
                                    $PalabraActual = array("Texto" => "", "Estado" => $Estado);
                                }
                            }
                        }                        
                    }
                    break;
                // Comentario de una línea
                case "PHP_Comentario" : case "JS_Comentario" : case "C_Comentario" :
                    $PalabraActual["Texto"] .= $Linea[$i];
                    break;
                // Comentario multilinea de HTML
                case "HTML_ComentarioML" :
                    $this->_FinComentarioML($Linea, $i, $PalabraActual, $Palabras, $TotalPalabras, $Estado, $Spans, $Tipo, "-->");
                    break;
                // Comentario multilinea de PHP, CSS, JS, y C/C++
                case "CSS_ComentarioML" : case "PHP_ComentarioML" : case "JS_ComentarioML" : case "C_ComentarioML" :
                    $this->_FinComentarioML($Linea, $i, $PalabraActual, $Palabras, $TotalPalabras, $Estado, $Spans, $Tipo, "*/");
                    break;
                // String1 comillas simples ''
                case "HTML_String1" : case "CSS_String1" : case "PHP_String1" : case "JS_String1" : case "C_String1" : 
                    $this->_FinString1($Linea, $i, $PalabraActual, $Palabras, $TotalPalabras, $Estado, $Spans, $Tipo);
                    break;
                // String2 dobles comillas ""
                case "HTML_String2" : case "CSS_String2" : case "PHP_String2" : case "JS_String2" : case "C_String2" : 
                    $this->_FinString2($Linea, $i, $PalabraActual, $Palabras, $TotalPalabras, $Estado, $Spans, $Tipo);
                    break;
                // Numero
                case "PHP_Numero" : case "JS_Numero" : case "C_Numero" : 
                    $this->_Numero($Linea, $i, $PalabraActual, $Palabras, $TotalPalabras, $Estado, $Spans, $Tipo);
                    break;
                /****************/
                /* Especial PHP */
                /****************/                                        
                case "PHP_Variable" :
                    if ($this->_BuscarDelimitador($Linea[$i], $Delimitadores) == true) {
                        $PalabraActual["Texto"] .= "</span>";
                        $Palabras[$TotalPalabras ++] = $PalabraActual;                            
                        $Estado = $Tipo; $Spans --;
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);
                    }
                    $PalabraActual["Texto"] .= $Linea[$i];
                    break;
                /******************/
                /* Especial C/Cpp */
                /******************/                                        
                // Estado : dentro de una directiva ej : #include
                case "C_Directiva" :
                    if ($Linea[$i] == " ") {
                        $PalabraActual["Texto"] .= " </span>";
                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $Estado = "C_Directiva_Fin"; $Spans --;
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);                        
                    }
                    else $PalabraActual["Texto"] .= $Linea[$i];						
                    break;
                /* Una directiva puede ser tanto una macro como un include 
                    Es posible que el Include se haga con los caracteres <>, en caso contrario volvemos el estado al flujo normal  */
                case "C_Directiva_Fin" :
                    switch ($Linea[$i]) {
                        case "&" : // posible &lt; o &gt; (<>)
                            if (substr($Linea, $i, 4) == "&lt;") { // <               (cabecera #include <stdio.h>)
                                $PalabraActual["Texto"] .= "<span class='".$this->_Color($Diccionario,3)."'>&lt;";
                                $i+=3; $Spans ++;
                            }
                            else if (substr($Linea, $i, 4) == "&gt;") { // >          (fin de la cabecera #include < >)
                                $PalabraActual["Texto"] .= "&gt;</span>";
                                $Palabras[$TotalPalabras ++] = $PalabraActual;
                                $Estado = $Tipo; $i+=3; $Spans --;
                                $PalabraActual = array("Texto" => "", "Estado" => $Estado);                                
                            }
                            else $PalabraActual["Texto"] .= "&";
                            break;
                            // En la misma linea de la directiva pueden haber strings y comentarios
                        case "/" : /* Posible comentario */ case "'" : /* String1 */  case '"' : /* String2 */
                            $Estado = $Tipo; $i--; // Comprobamos el caracter desde el bucle principal de C
                            break;
                        default :
                            $PalabraActual["Texto"] .= $Linea[$i];
                            break;
                    }
                    break;
                /****************/
                /* Especial CSS */
                /****************/                    
                case "CSS_Regla" :
                    if ($this->_BuscarDelimitador($Linea[$i], $Delimitadores) == true) {
                        $PalabraActual["Texto"] .= "</span>".$Linea[$i]; ;
                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $Estado = $Tipo; $Spans --;
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);
                    }
                    else $PalabraActual["Texto"] .= $Linea[$i];
                    break;
                case "CSS_Selector" :
                    if ($this->_BuscarDelimitador($Linea[$i], $Delimitadores) == true) {
                        $PalabraActual["Texto"] .= "</span>".$Linea[$i];
                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $Estado = $Tipo; $Spans --;
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);                        
                    }
                    else $PalabraActual["Texto"] .= $Linea[$i];
                    break;
                /*****************/
                /* Especial HTML */
                /*****************/                    
                case "HTML_Etiqueta" :
                    if ($Linea[$i] == ">") { // Final de la etiqueta
                        if (!isset($PalabraActual["Etiqueta"])) {
                            $Split = explode(" ", substr($Linea, $InicioEtiqueta, $i - $InicioEtiqueta));
                            $PalabraActual["Etiqueta"] = $Split[0];
                        }                        
                        $Color = $this->_BuscarEtiqueta($PalabraActual["Etiqueta"], $Diccionario);
                        $PalabraActual["Texto"] = "<span class='".$Color."'>".$PalabraActual["Texto"]."&gt;</span>";                       
                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                        switch ($PalabraActual["Etiqueta"]) {
                            case "script"   :   $Estado = "HTML_FinJS";  $NuevoParsingLinea = $l;  break;
                            case "style"    :   $Estado = "HTML_FinCSS"; $NuevoParsingLinea = $l;  break;
                            default         :   $Estado = $Tipo;                                   break;
                        }
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);
                    }
                    else if ($Linea[$i] == " ") {
                        if (!isset($PalabraActual["Etiqueta"])) {
                            $Split = explode(" ", substr($Linea, $InicioEtiqueta, $i - $InicioEtiqueta));
                            $PalabraActual["Etiqueta"] = $Split[0];
                        }
                        $PalabraActual["Texto"] .= $Linea[$i];
                    }
                    else if ($Linea[$i] == "<") { // Estabamos en una etiqueta falsa
                        $PalabraActual["Estado"] = "HTML";
                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $InicioEtiqueta = $i + 1;
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);
                    }
/*                    else if (substr($Linea, $i, 5) == "style") { // atributo style
                        while ($Linea[$i] != "'" && $Linea[$i] != '"' && $i < count($Linea)) $PalabraActual["Texto"] .= $Linea[$i++];
                        if ($Linea[$i] == "'")      $Estado = "HTML_Style1";
                        else if ($Linea[$i] == '"') $Estado = "HTML_Style2";
                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                        $PalabraActual = array("Texto" => "", "Estado" => $Estado);
                    }*/
                    else if ($Linea[$i] == "'") { // String con comillas simples dentro de la etiqueta
                        $PalabraActual["Texto"].= "<span class='".$this->_Color($Diccionario,3)."'>'"; $Spans++;
                        $Estado = "HTML_EtiquetaStr1";
                    }
                    else if ($Linea[$i] == '"') { // String con comillas dobles dentro de la etiqueta
                        $PalabraActual["Texto"].= "<span class='".$this->_Color($Diccionario,3)."'>\""; $Spans++;
                        $Estado = "HTML_EtiquetaStr2";
                    }
                    else $PalabraActual["Texto"] .= $Linea[$i];
                    break;
                // Valor de un atributo con comillas simples
                case "HTML_EtiquetaStr1" :
                    if ($this->_BuscarFinString1($Linea, $i) == true) {
                        $PalabraActual["Texto"].= "'</span>";  $Spans--;
                        $Estado = "HTML_Etiqueta";
                    }
                    else $PalabraActual["Texto"].= $Linea[$i];
                    break;
                // Valor de un atributo con comillas dobles
                case "HTML_EtiquetaStr2" :
                    if ($this->_BuscarFinString2($Linea, $i) == true) {
                        $PalabraActual["Texto"].= '"</span>';  $Spans--;
                        $Estado = "HTML_Etiqueta";
                    }
                    else $PalabraActual["Texto"].= $Linea[$i];
                    break;
                // Parsing de PHP dentro del HTML
                case "HTML_FinPHP" :
                    if (substr($Linea, $i, 2) == "?>") {
                        $Palabras[$TotalPalabras ++] = array('Texto' => $this->Parsear("PHP", $NuevoParsing."?>", "PorDefecto", $NuevoParsingLinea), 'Estado' => 'HTML_FinCSS');                        
                        $Estado = $Tipo; $i++; $l = $NuevoParsingLinea;
                        $PalabraActual = array("Texto" => '', "Estado" => "HTML");
                        $NuevoParsing = "";
                    }
                    else $NuevoParsing .= $Linea[$i];
                    break;
                // Parsing de JS dentro del HTML
                case "HTML_FinJS" :
                    if (substr($Linea, $i, 9) == "</script>") { 
                        $Palabras[$TotalPalabras ++] = array('Texto' => $this->Parsear("JS", $NuevoParsing, "PorDefecto", $NuevoParsingLinea), 'Estado' => 'HTML_FinJS');
                        $Estado = $Tipo; $i --; $l = $NuevoParsingLinea;
                        $PalabraActual = array("Texto" => '', "Estado" => "HTML");
                        $NuevoParsing = "";
                    }
                    else $NuevoParsing .= $Linea[$i];
                    break;
                // Parsing de CSS dentro del HTML
                case "HTML_FinCSS" :
                    if (substr($Linea, $i, 8) == "</style>") { 
                        $Palabras[$TotalPalabras ++] = array('Texto' => $this->Parsear("CSS", $NuevoParsing, "PorDefecto", $NuevoParsingLinea), 'Estado' => 'HTML_FinCSS');
                        $Estado = $Tipo; $i--; $l = $NuevoParsingLinea;
                        $PalabraActual = array("Texto" => '', "Estado" => "HTML");
                        $NuevoParsing = "";
                    }
                    else $NuevoParsing .= $Linea[$i];
                    break;
            }
        }
        // Cierro los spans
        for ($s = 0; $s < $Spans; $s++) $PalabraActual["Texto"] .= "</span>";
        // Cierro la linea
        if ($CerrarDivLinea == true && $Estado != "HTML_FinCSS" && $Estado != "HTML_FinJS" && $Estado != "HTML_FinPHP")
            $PalabraActual["Texto"] .= "</div>";        
        // Añado la palabra actual
        $Palabras[$TotalPalabras ++] = $PalabraActual;
        // Sumo una línea SOLO si se ha incluido el cierre de línea
        if ($CerrarDivLinea == true) $l++;
    }
    
    // Es el principio de un string con comillas simples
    private function _InicioString1(&$Linea, &$Diccionario, &$PalabraActual, &$Palabras, &$TotalPalabras, &$Estado, &$Spans, $nEstado) {
        $Estado = $nEstado; $Spans ++;
        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 3)."'>'", "Estado" => $Estado);
    }
    
    // Es el principio de un string con comillas dobles
    private function _InicioString2(&$Linea, &$Diccionario, &$PalabraActual, &$Palabras, &$TotalPalabras, &$Estado, &$Spans, $nEstado) {
        $Estado = $nEstado; $Spans ++;
        if ($PalabraActual["Texto"] != "") $Palabras[$TotalPalabras ++] = $PalabraActual;
        $PalabraActual = array("Texto" => "<span class='".$this->_Color($Diccionario, 3)."'>\"", "Estado" => $Estado);
    }
    
    // Mira si es la ultima comilla simple de un string
    private function _FinString1(&$Linea, &$i, &$PalabraActual, &$Palabras, &$TotalPalabras, &$Estado, &$Spans, $nEstado) {
        if ($this->_BuscarFinString1($Linea, $i) == true) {
            $PalabraActual["Texto"] .= "'</span>";
            $Palabras[$TotalPalabras ++] = $PalabraActual;
            $Estado = $nEstado; $Spans --;
            $PalabraActual = array("Texto" => "", "Estado" => $Estado);
        }
        else $PalabraActual["Texto"] .= $Linea[$i];        
    }
    
    // Mira si es la ultima comilla doble de un string
     private function _FinString2(&$Linea, &$i, &$PalabraActual, &$Palabras, &$TotalPalabras, &$Estado, &$Spans, $nEstado) {    
        if ($this->_BuscarFinString2($Linea, $i) == true) {
            $PalabraActual["Texto"] .= '"</span>';
            $Palabras[$TotalPalabras ++] = $PalabraActual;                            
            $Estado = $nEstado; $Spans --;
            $PalabraActual = array("Texto" => "", "Estado" => $Estado);
        }
        else $PalabraActual["Texto"] .= $Linea[$i];
    }
    
    // Mira si ha encontrado el cierre de un comentario multi linea
    private function _FinComentarioML(&$Linea, &$i, &$PalabraActual, &$Palabras, &$TotalPalabras, &$Estado, &$Spans, $nEstado, $Cierre = "*/") {        
        if (substr($Linea, $i, strlen($Cierre)) == $Cierre) {
            $PalabraActual["Texto"] .= $this->_EliminarCaracteresComprometidos($Cierre)."</span>";
            $Palabras[$TotalPalabras ++] = $PalabraActual;                        
            $Estado = $nEstado; $i+= (strlen($Cierre) - 1); $Spans --;
            $PalabraActual = array("Texto" => "", "Estado" => $Estado);
        }
        else $PalabraActual["Texto"] .= $Linea[$i];
    }
    
    // Mira si es un numero
    private function _Numero(&$Linea, &$i, &$PalabraActual, &$Palabras, &$TotalPalabras, &$Estado, &$Spans, &$Tipo){
        if ($this->_EsNumero($Linea[$i]) == false) {
            $PalabraActual["Texto"] .= "</span>";
            $Palabras[$TotalPalabras ++] = $PalabraActual;
            $Estado = $Tipo; $Spans --;
            $PalabraActual = array("Texto" => $Linea[$i], "Estado" => $Estado);
        }
        else $PalabraActual["Texto"] .= $Linea[$i];
    }
    
    // Fase final del parsing comparamos las palabras sin estado con la lista de palabras del diccionario
    public function _PintarPalabrasClave(&$Palabras, &$Diccionario, &$Delimitadores, $Tipo) {
        $TextoColoreado = "";
        // Busco en el array de palabras las palabras reservadas que tienen su propio color
        foreach ($Palabras as $p) {
            if (isset($p["Texto"])) {
                if (isset($p["Texto"][0]) && $Tipo !== "HTML") {
                    if (strpos($p["Estado"], '_') === FALSE && $p["Texto"][0] != '<') { // Si no tiene estado y no empieza por una etiqueta
                        foreach ($Diccionario as $Palabra) {				
                            if (isset($Palabra['Palabra'])) {
                                $PosPalabra = strpos($p["Texto"], $Palabra['Palabra']);
                                if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
                                    $DelimitadorInicio = false;
                                    $DelimitadorFin = false;
                                    $TamPalabra = strlen($Palabra['Palabra']);
                                    // Miramos si el caracter anterior es un delimitador
                                    if ($PosPalabra == 0) 	$DelimitadorInicio = true;
                                    else			$DelimitadorInicio = $this->_BuscarDelimitador($p["Texto"][$PosPalabra - 1], $Delimitadores);
                                    // Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
                                    if ($PosPalabra + $TamPalabra == strlen($p["Texto"])) $DelimitadorFin = true;
                                    else                                                  $DelimitadorFin = $this->_BuscarDelimitador($p["Texto"][$PosPalabra + $TamPalabra], $Delimitadores);
                                    // Si la palabra esta bien delimitada la coloreamos
                                    if ($DelimitadorInicio == true && $DelimitadorFin == true) { 
                                        $p["Texto"] = str_replace($Palabra['Palabra'], "<span class='".$Palabra['Color']."'>".$Palabra['Palabra']."</span>", $p["Texto"]);
                                        break; // Salimos del foreach para no colorear 2 veces la misma palabra
                                    }
                                }
                            }
                        }
                    }
                }
                $TextoColoreado .= $p["Texto"];
            }
        }

        // Imprime el array para depurar
        if ($this->_Debug == true) { echo "<pre>"; print_r($Palabras); echo "</pre>"; }

        return $TextoColoreado;            
    }
        
    // Función que mira si el caracter pasado como parámetro es un numero
    // - $Caracter : Caracter del que queremos saber si es un numero
    private function _EsNumero($Caracter) {
        switch ($Caracter) {
            case '0' : case '1' : case '2' : case '3' : case '4' :			
            case '5' : case '6' : case '7' : case '8' : case '9' :
                return true;
            default :
                return false;
        }
    }


    // Función que mira si el Caracter especificado es un Delimitador
    private function _BuscarDelimitador($Caracter, &$Delimitadores) {
        foreach($Delimitadores as $Delimitador) {
            if ($Caracter == $Delimitador) return true;
        }
        return false;
    }        
    

    // Función que retorna si relamente esta al final de un string empezado con dobles comillas
    // - $Texto    : Cadena de caracteres que contiene el string a analizar
    // - $Posicion : Posicion actual dentro de la cadena de caracteres
    // NOTA la razón de ser de esta función es que podemos encontrar una cadena con un terminador \", este terminador representa una doble comilla, 
    //      pero si la cadena es \\" lo que representa es una antibarra seguida de una doble comilla.
    private function _BuscarFinString2(&$Texto, $Posicion) {
        if ($Texto[$Posicion] == '"') {
            // Es una cadena de escape que define una doble comilla
            if ($Texto[$Posicion - 1] == "\\" && $Texto[$Posicion - 2] != "\\") return false;
            else                                                                return true;

        }
        else return false;
    }

    // Función que retorna si relamente esta al final de un string empezado con comilla
    // - $Texto    : Cadena de caracteres que contiene el string a analizar
    // - $Posicion : Posicion actual dentro de la cadena de caracteres
    // NOTA la razón de ser de esta función es que podemos encontrar una cadena con un terminador \', este terminador representa una comilla, 
    //	    pero si la cadena es \\' lo que representa es una antibarra seguida de una comilla.
    private function _BuscarFinString1(&$Texto, $Posicion) {
        if ($Texto[$Posicion] == "'") {
            // Es una cadena de escape que define una comilla simple
            if ($Texto[$Posicion - 1] == "\\" && $Texto[$Posicion - 2] != "\\") return false;
            else                                                                return true;
        }
        else return false;
    }
    
    
    // Función que substituye las tabulaciones por 4 espacios, y los caracteres '<', '>' por '&lt;' y '&gt;'
    // - $Texto : String del que queremos eliminar los caracteres.
    private function _EliminarCaracteresComprometidos($Texto) {
        return str_replace(array('	', '<', '>'), array('    ', '&lt;', '&gt;'), $Texto); // Cambio tabulaciones por 4 espacios (cosa que trae problemas de alineacion.... pero esque si no, a la que tienes 5 tabuladores seguidos te comes media pantalla)
    }
    
    // Función que substituye las tabulaciones por 4 espacios, y los caracteres '&' por '&amp;'
    // - $Texto : String del que queremos eliminar los caracteres.
    private function _EliminarCaracteresComprometidosHTML($Texto) {
        return str_replace(array('	', '&'), array('    ', '&amp'), $Texto); // Cambio tabulaciones por 4 espacios (cosa que trae problemas de alineacion.... pero esque si no, a la que tienes 5 tabuladores seguidos te comes media pantalla)
    }
    
    // Función que retoca el nombre de archivo de forma de que si incluye directorios se pueda guardar igualmente
    // - $NombreArchivo : Ruta del archivo
    // NOTA : las barras y antibarras se re-emplazan por el simbolo '-', y los puntos por '_'
    private function _RetocarNombreArchivo($NombreArchivo) {
        return str_replace(array('/', '\\', '.', ':'), array('-', '-', '_', '-'), $NombreArchivo);  
    }
    
    
    // Función privada que busca si dentro del texto introducido hay una etiqueta del _DiccionarioHTML
    // - $Texto : Texto en el que se buscara la etiqueta
    // NOTA devuelve el color que deberia tener esa etiqueta, en caso de no estar en el diccionario devuelve TxtAzulOscuro
    private function _BuscarEtiqueta($Texto, &$Diccionario) {
        foreach ($Diccionario as $Palabra) {		
            if (isset($Palabra['Palabra'])) {
                $PosPalabra = strpos($Texto, $Palabra['Palabra']);
                if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
                    $DelimitadorInicio = false;
                    $DelimitadorFin    = false;
                    $TamPalabra = strlen($Palabra['Palabra']);
                    // Miramos si el caracter anterior es un delimitador
                    if ($PosPalabra == 0) 	$DelimitadorInicio = true;
                    else			$DelimitadorInicio = $this->_BuscarDelimitador($Texto[$PosPalabra - 1], $this->_DelimitadoresHTML);
                    // Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
                    if ($PosPalabra + $TamPalabra == strlen($Texto)) $DelimitadorFin = true;
                    else                                             $DelimitadorFin = $this->_BuscarDelimitador($Texto[$PosPalabra + $TamPalabra], $this->_DelimitadoresHTML);
                    // Si la palabra esta bien delimitada la coloreamos
                    if ($DelimitadorInicio == true && $DelimitadorFin == true) return $Palabra['Color'];
                }
            }
        }
        return "TxtAzulOscuro";
    }    

    // Función que comprueba si existe una version actual del código a colorear ya parseada
    // - $Archivo : Ruta del archivo a colorear.
    // - $ID      : ID de la porción de código a colorear.
    // - Devuelve "TRUE" si el archivo existe y esta actualizado, "FALSE" en caso contrario
    private function _ComprobarPintado($Archivo, $ID = "") {
        $ID = $this->_RetocarNombreArchivo($ID);
        $NombreArchivo = $this->_RetocarNombreArchivo($Archivo);
        if ($ID != "") 	$NombrePintado = dirname(__FILE__).$this->_PathCache.$NombreArchivo."_".$ID.".PintarCodigo";
        else		$NombrePintado = dirname(__FILE__).$this->_PathCache.$NombreArchivo.".PintarCodigo";
        // Si existe una version pintada
        if (file_exists($NombrePintado) == true) {
            if (filemtime($Archivo) > filemtime($NombrePintado)) {
                return "FALSE";
            }
            else {
                $Ret = $this->_LeerArchivo($NombrePintado, $Texto);
                echo $Texto;
                return "TRUE";
            }
        }
        return "FALSE";
    }


    // Función que guarda una porción código parseado
    // - $Archivo : Ruta del archivo coloreado.
    // - $Datos   : String con el codigo coloreado.
    // - $ID      : ID de la porción de código coloreada.
    private function _GuardarPintado($Archivo, $Datos, $ID = "") {
        $ID = $this->_RetocarNombreArchivo($ID);
        $NombreArchivo = $this->_RetocarNombreArchivo($Archivo);
        if ($ID != "") 	$NombrePintado = dirname(__FILE__).$this->_PathCache.$NombreArchivo."_".$ID.".PintarCodigo";
        else		$NombrePintado = dirname(__FILE__).$this->_PathCache.$NombreArchivo.".PintarCodigo";
        $ArchivoPrePintado = fopen($NombrePintado, "w");
        fwrite($ArchivoPrePintado, $Datos, strlen($Datos));
        fclose($ArchivoPrePintado);
    } 

    // Función que lee el archivo especificado en una variable
    // - $Path     : Ruta del archivo a leer
    // - $Texto    : Variable por referencia donde se almacenaran los datos leidos
    // - $ID_Parte : ID de la porción a leer (Si no se especifica una ID, se leera el archivo completo)
    // - Devuelve "TRUE" si todo ha salido bien, o un mensaje de error en caso contrario
    // NOTA Para establecer una porción dentro de un archivo PHP debes usar 2 comentarios : 
    //  // -[INICIO devildrey33.MIID]-
    //  Mi código PHP.....
    //  // -[FIN devildrey33.MIID]-
    private function _LeerArchivo($Path, &$Texto, $ID_Parte = "") {
        if (file_exists($Path) == false) { // NO EXISTE EL ARCHIVO
            return "<span class='TxtRojo'>ERROR!! no se ha encontrado el archivo : '".$Path."'</span>";
        }
        // Leo el archivo
        $ArchivoLista = fopen($Path, "r");
        $DatosArchivo = fread($ArchivoLista, filesize($Path));
        fclose($ArchivoLista);
        if ($ID_Parte != "") { // Solo una porción del archivo
            // Busco la ID del inicio
            $Inicio = strpos($DatosArchivo, "[INICIO devildrey33.".$ID_Parte."]-");
            if ($Inicio === false) // No se ha encontrado la ID del principio
                return "<span class='TxtRojo'>ERROR!! No se ha encontrado el comentario [INICIO devildrey33.$ID_Parte]-</span>";
            // Busco el final de la línea que hay despues del comentario con la ID inicial
            while ( $DatosArchivo[$Inicio++] != "\n" ) { 
                if ($Inicio > strlen($DatosArchivo) -1) 
                    return "<span class='TxtRojo'>ERROR!! El INICIO de $ID_Parte parece no estár bien</span>";
            }                
//            $Inicio ++;
            // Busco la ID del final
            $Fin = strpos($DatosArchivo, "[FIN devildrey33.".$ID_Parte."]-"); // delante ira '/* -[' o '// -' o '<!--'
            if ($Fin === false) // No se ha encontrado la ID del final
                return "<span class='TxtRojo'>ERROR!! No se ha encontrado el comentario [FIN devildrey33.$ID_Parte]-</span>";                
            // Busco el final de la línea que hay antes del comentario con la ID final
            while ( $DatosArchivo[$Fin--] != "\n") {
                if ($Fin < 0) 
                    return "<span class='TxtRojo'>ERROR!! El FIN de $ID_Parte parece no estár bien</span>";
            }                
            $Texto = substr($DatosArchivo, $Inicio, ($Fin - $Inicio) + 1);
        }
        else { // Todo el archivo (Sin ID)
            $Texto = $DatosArchivo;
        }
        return "TRUE";
    }


    // Función que imprime la parte superior del marco donde se escribira el código coloreado
    // - $IDMarco     : ID para el marco (para acceder a el desde HTML)
    // - $Titulo      : Titulo del marco
    // - $TotalLineas : Numero total de lineas del código (para imprimir a la izquierda la numeración)
    private function _IniciarMarco($IDMarco, $Titulo, $TotalLineas) {
        $PRE = "<div class='Codigo_Marco' id='".$IDMarco."'>";
        if ($Titulo != "") {
            $PRE .= "<div class='Codigo_Titulo'>".$Titulo."</div>";
        }
        $PRE .=     "<div class='Codigo_Numeracion'>";
        if ($TotalLineas == 0) $TotalLineas = 1;
        for ($i = 1; $i < $TotalLineas + 1; $i++) {
            $PRE .= $i."<br>";
//                $PRE .= "<div l=".$i.">".$i."</div>";
        }
        $PRE = $PRE."</div>".
                    "<pre class='Codigo_PRECodigo'>";
        return $PRE;
    }


    // Función que imprime la parte inferior del marco donde se escribira el código coloreado
    private function _TerminarMarco() {
        return "</pre>"."</div>";
    }    
    
    // Función que devuleve el total de lineas que tiene un string
    // - $Texto : String del que queremos saber sus lineas
    private function _ObtenerTotalLineas($Texto) {
        return count(explode(chr(10), $Texto));
    }
}
?>
