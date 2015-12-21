<?php
    /* Clase devildrey33_PintarCodigo creada por Josep Antoni Bover el 09/10/2011 para www.devildrey33.es
       Ultima modificación : 06/01/2014

       Versión             : 1.2

       Explicación         : Esta clase consiste en un conjunto de funciones que permiten pintar cadenas de texto, archivos, o partes de archivo XML, PHP, C, C++, HTML, JavaScript, y CSS
                             La idea es parsear una parte de un archivo para introducir en las palabras especificadas etiquetas span con colores especificos.
                             Dado que este proceso puede ser algo pesado para el servidor PHP, esta clase guarda los textos parseados en archivos, para que la proxima vez que se requieran no se tarde tanto en subministrarlos.
                             Si por alguna razón modificas el archivo, esta clase comprueba su fecha de modificación, y actualiza el archivo parseado si es necesario.

    Objetivo            : Como estoy administrando mucho código en www.devildrey33.es necesito algo que me haga el trabajo de colorear aquellas porciones de código que quiero mostrar en la web.
                          De esta forma puedo añadir directamente los archivos de código en la web, y esta se encarga de colorearlos si son solicitados.

    Por hacer           :  - Colorear C/C++ hay que hacerlo en el estilo NetBeans

       BUGS                :                                    	- Si hay que pintar de algun color una palabra delimitadora SE TIENE QUE HACER AL FINAL (... ni idea a que me refiero exactamente... es del 14/01/2013)
                                                     SOLUCIONADO	- Hay muchos notices sobre strings sin inicializar en mi version de apache localhost...
                                                     SOLUCIONADO 	- Los saltos de linea no quedan igual en windows que en linux (Pasa en PintarHTML con los estilos)
                                                     AÑADIDA		- Hay que crear en CSS una regla para la @ (debe ir en marron, y puede contener estilos si se trata de un keyframe, o propiedades si es un font-face)
                                                                                            - font-face va en rosa y es una excepción, aun no se si hay mas...
                                                     SOLUCIONADO	- Los estilos en linea (los que van dentro de un tag) no cerraban los colores correctamente si el estilo no terminaba en ';'

        Licencia            : GPL3 (http://www.gnu.org/licenses/gpl-3.0.html)
    */

    class devildrey33_PintarCodigo {
        ////////////////////////
        // Funciones publicas //
        ////////////////////////
        
        // Función que activa el modo depuración
        // NOTA : basicamente imprime el array de palabras para las funciones basadas en PHP, JavaScript y C/Cpp
        public function ActivarDebug() {
            $this->_Debug = true;
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
        public function PintarArchivoHTML($IDMarco, $Titulo, $Archivo, $ID = "") {
            if ($this->_Debug == false) {
                if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
            }
            $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
            if ($Ret == "TRUE") 	$TextoColoreado .= $this->PintarHTML($Texto);
            else			$TextoColoreado .= $Ret;
            $TextoColoreado .= $this->_TerminarMarco();
            if ($this->_Debug == false) {
                if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
            }
            echo $TextoColoreado;
        }


        // Función que pinta el string especificado según el esquema de colores de Dreamweaver para archivos HTML		
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto HTML a pintar
        // NOTA : Esta función no guarda nada en disco, y obliga al servidor a hacer el parsing cada vez.
        //        No se recomienda para strings muy grandes
        public function PintarTextoHTML($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $this->PintarHTML($Texto);
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;
        }


        // Función que colorea el texto HTML especificado según el esquema de colores de Dreamweaver
        // - $Texto : String con el texto HTML a colorear.
        public function PintarHTML($Texto) {
            // El primer paso es separar todas las etiquetas en un array
            $Texto = str_replace('	', '    ', $Texto); // Re-emplazo tabuladores
            $Texto = str_replace('&', '&amp;', $Texto); // Re-emplazo simbolos AND
            $TamTexto = strlen($Texto);			
            $PalabraActual = "";
            $Estado = ""; // Puede ser : PHP, JavaScript_Inicio, JavaScript_Str1, JavaScript_Str2, JavaScript_Fin, 
                                      // 			 CSS_Inicio, CSS_Str1, CSS_Str2, CSS_Fin, Etiqueta, Etiqueta_Str1, Etiqueta_Str2, 
                                      //             Comentario, Estilo_Str1, Estilo_Str2
            $TextoColoreado = "";
            $InicioEtiqueta = 0;
            $InicioEstilo = 0;
            for ($i = 0; $i < $TamTexto; $i++) {
                switch ($Estado) {
                    case "" : // Sin estado
                        if ($Texto[$i] == "<") { // Posible etiqueta abierta
                            if (substr($Texto, $i, 7) == "<script")  { // JavaScript
                                $TextoColoreado .= $PalabraActual;
                                $PalabraActual = "<span class='Codigo_Marron'>&lt;script";
                                $Estado = "JavaScript_Inicio"; 
                                $i += 6;
                            }
                            else if (substr($Texto, $i, 6) == "<style")  { // CSS
                                $TextoColoreado .= $PalabraActual;
                                $PalabraActual = "<span class='Codigo_Lila'>&lt;style";
                                $Estado = "CSS_Inicio";
                                $i += 5;
                            }
                            else if (substr($Texto, $i, 5) == "<?php")  { // PHP
                                $TextoColoreado .= $PalabraActual;
                                $PalabraActual = "<?php ";
                                $Estado = "PHP";
                                $i += 5;
                            }
                            else if (substr($Texto, $i, 4) == "<!--")  { // Comentario
                                $TextoColoreado .= $PalabraActual;
                                $PalabraActual = "<span class='Codigo_Gris'>&lt;!--";
                                $Estado = "Comentario";
                                $i += 3;
                            }
                            else { // Otras etiquetas
                                $TextoColoreado .= $PalabraActual;
                                $PalabraActual = "&lt;";
                                $Estado = "Etiqueta";
                                $InicioEtiqueta = $i + 1;
                            }
                        }
                        else {
                            $PalabraActual .= $Texto[$i];
                        }
                        break;
                    // Estado : Comentario HTML (puede ser multilinea)
                    case "Comentario" : 
                        if ($Texto[$i] == ">" && $Texto[$i - 1] == "-"  && $Texto[$i - 2] == "-") {
                                $PalabraActual .= "&gt;</span>";
                                $Estado = "";
                        }
                        else if ($Texto[$i] == "<") $PalabraActual .= "&lt;";
                        else if ($Texto[$i] == ">") $PalabraActual .= "&gt;";
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : String con comillas simples dentro de una etiqueta
                    case "Etiqueta_Str1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $PalabraActual .= "'</span>";
                            $Estado = "Etiqueta"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : String con comillas dobles dentro de una etiqueta
                    case "Etiqueta_Str2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $PalabraActual .= '"</span>';
                            $Estado = "Etiqueta"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : dentro de una etiqueta
                    case "Etiqueta" : 
                        if ($Texto[$i] == ">") { // Final de la etiqueta
                            $Color = $this->_BuscarEtiqueta(substr($Texto, $InicioEtiqueta, $i - $InicioEtiqueta));
                            $TextoColoreado .= "<span class='".$Color."'>".$PalabraActual."&gt;</span>";
                            $PalabraActual = "";
                            $Estado = ""; 
                        }
                        else if ($Texto[$i] == "<") { // Estabamos en una etiqueta falsa
                            $TextoColoreado .= $PalabraActual;
                            $PalabraActual = "&lt;";
                            $InicioEtiqueta = $i + 1;
                        }
                        else if ($Texto[$i] == "s") { // miramos si es el atributo style
                            if (substr($Texto, $i, 5) == "style") {
                                while ($Texto[$i] != "'" && $Texto[$i] != '"') $PalabraActual .= $Texto[$i ++];
                                if ($Texto[$i] == "'") 		$Estado = "Estilo_Str1";
                                else if ($Texto[$i] == '"') $Estado = "Estilo_Str2";
                                $PalabraActual .= "<span class='Codigo_Azul'>".$Texto[$i ++];
                                $InicioEstilo = $i;
                            }
                            else $PalabraActual .= $Texto[$i];
                        }
                        else if ($Texto[$i] == "'") { // String con comillas simples dentro de la etiqueta
                            $PalabraActual .= "<span class='Codigo_Azul'>'";
                            $Estado = "Etiqueta_Str1"; 
                        }
                        else if ($Texto[$i] == '"') { // String con comillas dobles dentro de la etiqueta
                            $PalabraActual .= '<span class="Codigo_Azul">"';
                            $Estado = "Etiqueta_Str2"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : inicio del atributo style encapsulado por comillas simples
                    case "Estilo_Str1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $PalabraActual .= $this->PintarEstiloCSS(substr($Texto, $InicioEstilo, $i - $InicioEstilo))."'</span>";
                            $Estado = "Etiqueta";
                        }
                        break;
                    // Estado : inicio del atributo style encapsulado por comillas dobles
                    case "Estilo_Str2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $PalabraActual .= $this->PintarEstiloCSS(substr($Texto, $InicioEstilo, $i - $InicioEstilo)).'"</span>';
                            $Estado = "Etiqueta";
                        }
                        break;
                    // Estado : inicio de un texto de un atributo dentro de una etiqueta script con comillas simples
                    case "JavaScript_Str1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $PalabraActual .= "'</span>";
                            $Estado = "JavaScript_Inicio"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : inicio de un texto de un atributo dentro de una etiqueta script con comillas dobles
                    case "JavaScript_Str2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $PalabraActual .= '"</span>';
                            $Estado = "JavaScript_Inicio"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : dentro de una etiqueta script
                    case "JavaScript_Inicio" : 
                        if ($Texto[$i] == ">") { // Final de una etiqueta script
                            $TextoColoreado .= $PalabraActual."&gt;</span>";
                            $PalabraActual = "";
                            $Estado = "JavaScript_Fin"; 
                        }
                        else if ($Texto[$i] == "'") { // String dentro de una etiqueta script con comillas simples
                            $PalabraActual .= "<span class='Codigo_Azul'>'";
                            $Estado = "JavaScript_Str1"; 
                        }
                        else if ($Texto[$i] == '"') { // String dentro de una etiqueta script con comillas dobles
                            $PalabraActual .= '<span class="Codigo_Azul">"';
                            $Estado = "JavaScript_Str2"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : se ha encontrado el final de una etiqueta script
                    case "JavaScript_Fin" :
                        if (substr($Texto, $i, 9) == "</script>") { // Comprobamos que sea la etiqueta de cierre
                            if (strlen($PalabraActual) > 1)	$TextoColoreado .= $this->PintarJavaScript($PalabraActual);
                            else							$TextoColoreado .= $PalabraActual;
                            $TextoColoreado .= "<span class='Codigo_Marron'>&lt;/script&gt;</span>";
                            $PalabraActual = "";
                            $Estado = "";
                            $i += 8;
                        }
                        else $PalabraActual .= $Texto[$i];						
                        break;
                    // Estado : string dentro de una etiqueta style con comillas simples
                    case "CSS_Str1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $PalabraActual .= "'</span>";
                            $Estado = "CSS_Inicio"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : string dentro de una etiqueta style con comillas dobles
                    case "CSS_Str2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $PalabraActual .= '"</span>';
                            $Estado = "CSS_Inicio"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : etiqueta style inicial
                    case "CSS_Inicio" : 
                        if ($Texto[$i] == ">") { // Final de la etiqueta style
                            $TextoColoreado .= $PalabraActual."&gt;</span>";
                            $PalabraActual = "";
                            $Estado = "CSS_Fin"; 
                        }
                        else if ($Texto[$i] == "'") { // String con comillas simples dentro de la etiqueta style
                            $PalabraActual .= "<span class='Codigo_Verde'>'";
                            $Estado = "CSS_Str1"; 
                        }
                        else if ($Texto[$i] == '"') { // String con comillas dobles dentro de la etiqueta style
                            $PalabraActual .= '<span class="Codigo_Verde">"';
                            $Estado = "CSS_Str2"; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;	
                    // Estado : etiqueta style de cierre					
                    case "CSS_Fin" :
                        if (substr($Texto, $i, 8) == "</style>") { 
                            $TextoColoreado .= $this->PintarEstilosCSS($PalabraActual);
                            $TextoColoreado .= "<span class='Codigo_Lila'>&lt;/style&gt;</span>";
                            $PalabraActual = "";
                            $Estado = "";
                            $i += 7;
                        }
                        else $PalabraActual .= $Texto[$i];						
                        break;
                    // Estado : dentro de un código php					
                    case "PHP" : 
                        if ($Texto[$i] == ">" && $Texto[$i - 1] == "?") {
                            $TextoColoreado .= $this->PintarPHP($PalabraActual.">");
                            $PalabraActual = "";
                            $Estado = ""; 
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;						
                }
            }
            $TextoColoreado .= $PalabraActual;
            if ($this->_Debug == true) { echo "PintarHML<br /><pre>"; print_r($Etiquetas); echo "</pre>"; }
            return $TextoColoreado;
        }

        // Función que lee el archivo XML especificado y lo pinta según el esquema de colores de Dreamweaver
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Archivo : Ruta del archivo XML a colorear.
        // - $ID      : ID de la porcion de código a colorear (Si no se especifica ninguna ID se usara todo el archivo)
        // NOTA  Primero se comprueba que no exista un archivo de pintado, en el caso de existir se omite el parsing y se imprime el archivo directamente
        // NOTA2 Para establecer una porción dentro de un archivo XML debes usar 2 comentarios : 
        //  <!--[INICIO devildrey33.MIID]-->
        //  Mi código XML.....
        //  <!--[FIN devildrey33.MIID]-->
        public function PintarArchivoXML($IDMarco, $Titulo, $Archivo, $ID = "") {
            if ($this->_Debug == false) {
                if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
            }
            $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
            if ($Ret == "TRUE") 	$TextoColoreado .= $this->PintarXML($Texto);
            else			$TextoColoreado .= $Ret;
            $TextoColoreado .= $this->_TerminarMarco();
            if ($this->_Debug == false) {
                if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
            }
            echo $TextoColoreado;
        }

        // Función que pinta el string especificado según el esquema de colores de Dreamweaver para archivos XML		
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto XML a pintar
        // NOTA : Esta función no guarda nada en disco, y obliga al servidor a hacer el parsing cada vez.
        //        No se recomienda para strings muy grandes
        public function PintarTextoXML($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $this->PintarXML($Texto);
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;
        }

        // Función que colorea el texto XML especificado según el esquema de colores de Dreamweaver
        // - $Texto : String con el texto XML a colorear.
        public function PintarXML($Texto) {
            $Texto = str_replace('	', '    ', $Texto); // Re-emplazo tabuladores
            $TamTexto = strlen($Texto);			
            $TextoColoreado = "<span class='Codigo_Negro'>";
            $Estado = ""; // Puede ser : String1, String2, Comentario
            for ($i = 0; $i < $TamTexto; $i++) {
                switch ($Estado) {
                    case "" : 
                        if ($Texto[$i] == "'") {
                            $Estado = "String1";
                            $TextoColoreado .= "<span class='Codigo_Verde'>'";
                        }
                        else if ($Texto[$i] == '"') {
                            $Estado = "String2";
                            $TextoColoreado .= '<span class="Codigo_Verde">"';
                        }
                        else if ($Texto[$i] == "<" && $Texto[$i + 1] != "!" && $Texto[$i + 2] != "-" && $Texto[$i + 3] != "-") { // Etiqueta normal
                            $TextoColoreado .= '<span class="Codigo_AzulOscuro">&lt;';
                        }
                        else if ($Texto[$i] == "<" && $Texto[$i + 1] == "!" && $Texto[$i + 2] == "-" && $Texto[$i + 3] == "-") { // Comentario
                            $TextoColoreado .= '<span class="Codigo_Gris">&lt;!--';
                            $Estado = "Comentario";
                            $i += 3;
                        }
                        else if ($Texto[$i] == ">") {
                            $TextoColoreado .= '&gt;</span>';
                        }
                        else {
                            $TextoColoreado .= $Texto[$i];
                        }
                        break;
                    case "Comentario" :
                        if ($Texto[$i] == ">" && $Texto[$i - 1] == "-" && $Texto[$i - 2] == "-") {
                            $TextoColoreado .= "&gt;</span>";
                            $Estado = "";
                        }
                        else if ($Texto[$i] == "<") $TextoColoreado .= "&lt;";
                        else if ($Texto[$i] == ">") $TextoColoreado .= "&gt;";
                        else 						$TextoColoreado .= $Texto[$i];
                        break;
                    case "String1" :
                        if ($Texto[$i] == "'") {
                            $TextoColoreado .= "'</span>";
                            $Estado = "";
                        }
                        else if ($Texto[$i] == "<") $TextoColoreado .= "&lt;";
                        else if ($Texto[$i] == ">") $TextoColoreado .= "&gt;";
                        else						$TextoColoreado .= $Texto[$i];
                        break;
                    case "String2" :
                        if ($Texto[$i] == '"') {
                            $TextoColoreado .= '"</span>';
                            $Estado = "";
                        }
                        else if ($Texto[$i] == "<") $TextoColoreado .= "&lt;";
                        else if ($Texto[$i] == ">") $TextoColoreado .= "&gt;";
                        else						$TextoColoreado .= $Texto[$i];
                        break;
                }
            }
            if ($this->_Debug == true) echo "PintarXML<br />";
            return $TextoColoreado."</span>";
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
        public function PintarArchivoPHP($IDMarco, $Titulo, $Archivo, $ID = "") {
            if ($this->_Debug == false) {
                if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
            }
            $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
            if ($Ret == "TRUE")	$TextoColoreado .= $this->PintarPHP($Texto);
            else 				$TextoColoreado .= $Ret;
            $TextoColoreado .= $this->_TerminarMarco();
            if ($this->_Debug == false) {
                if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
            }
            echo $TextoColoreado;
        }

        // Función que pinta el string especificado según el esquema de colores de Dreamweaver para archivos PHP		
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto PHP a pintar
        // NOTA : Esta función no guarda nada en disco, y obliga al servidor a hacer el parsing cada vez.
        //        No se recomienda para strings muy grandes
        public function PintarTextoPHP($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $this->PintarPHP($Texto);
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;
        }

        // Función que colorea el texto PHP especificado según el esquema de colores de Dreamweaver
        // - $Texto : Texto PHP que queremos colorear
        public function PintarPHP($Texto) {
            // Dividimos texto en un array de palabras / frases (los comentarios y los strings quedaran en una sola posicion del array, las demas palabras quedaran divididas según los delimitadores)
            $Texto = $this->_EliminarCaracteresComprometidos($Texto);
            $TextoColoreado = "";
            $TotalCaracteres = strlen($Texto);
            $Palabras = array();
            $TotalPalabras = 0;
            $Palabras[$TotalPalabras ++] = "<span class='Codigo_Negro'>";
            $PalabraActual = "";
            $Estado = ""; // Puede ser : Comentario, ComentarioML, String1, String2, Variable, y Numero
            for ($i = 0; $i < $TotalCaracteres; $i++) {
                switch ($Estado) {
                    case "" : // Sin estado
                        if ($Texto[$i] == "/" && $Texto[$i + 1] == "*") { // Principio ComentarioML
                            $Estado = "ComentarioML";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Amarillo'>/*";
                            $i++;
                        }
                        else if ($Texto[$i] == "/" && $Texto[$i + 1] == "/") { // Principio Comentario
                            $Estado = "Comentario";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Amarillo'>//";
                            $i++;
                        }
                        else if ($Texto[$i] == '"' && $Texto[$i - 1] != "\\") { // Principio String2
                            $Estado = "String2";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = '<span class="Codigo_Rojo">"';
                        }
                        else if ($Texto[$i] == "'" && $Texto[$i - 1] != "\\") { // Principio String1
                            $Estado = "String1";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Rojo'>'";
                        }
                        else if ($Texto[$i] == "$") { // Principio Variable
                            $Estado = "Variable";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_AzulClaro'>$";
                        }
                        else if ($this->_EsNumero($Texto[$i]) == true && $this->_BuscarDelimitadorPHP($Texto[$i - 1])) {
                            $Estado = "Numero";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Rojo'>".$Texto[$i];
                        }
                        else { // Cualquier letra
                            $PalabraActual .= $Texto[$i];
                            if ($this->_BuscarDelimitadorPHP($Texto[$i]) == true) {
                                // Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
                                // Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
                                // De todas formas no estoy seguro si esto puede traer problemas
                                if (isset($Texto[$i + 1])) {
                                    if ($this->_BuscarDelimitadorPHP($Texto[$i + 1]) != true) {
                                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                                        $PalabraActual = "";
                                    }
                                }
                            }
                        }
                        break;
                    // Estado : comentario multi linea
                    case "ComentarioML" :
                        if ($Texto[$i] == "*" && $Texto[$i + 1] == "/") {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."*/</span>";
                            $PalabraActual = "";
                            $Estado = "";
                            $i++;
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : comentario hasta el final de la linea
                    case "Comentario" :
                        if ($Texto[$i] == chr(10) || $Texto[$i] == chr(13)) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."</span>".$Texto[$i];
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : string de comillas dobles
                    case "String2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : string de comillas simples
                    case "String1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."'</span>";
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : en una variable 
                    case "Variable" :
                        if ($this->_BuscarDelimitadorPHP($Texto[$i]) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."</span>";
                            $PalabraActual = "";
                            $Estado = "";							
                        }
                        $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : en un valor numérico
                    case "Numero" :
                        if ($this->_BuscarDelimitadorPHP($Texto[$i]) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."</span>";
                            $PalabraActual = $Texto[$i];
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                }
            }
            // Si se ha quedado algun estado abierto, cerramos su span (los comentarios pueden quedar abiertos si se encuentran en la ultima linea)
            if ($Estado != "") $PalabraActual.= "</span>";
            // Pasamos la ultima palabra al array de palabras
            $Palabras[$TotalPalabras ++] = $PalabraActual;
            for ($i = 0; $i < $TotalPalabras; $i++) {
                if (isset($Palabras[$i][0])) {
                    if ($Palabras[$i][0] != '<') { // Si tiene '<' es el principio de un span por lo que no se debe tocar
                        foreach ($this->_DiccionarioPHP as $Palabra) {				
                            $PosPalabra = strpos($Palabras[$i], $Palabra['Palabra']);
                            if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
                                $DelimitadorInicio = false;
                                $DelimitadorFin = false;
                                $TamPalabra = strlen($Palabra['Palabra']);
                                // Miramos si el caracter anterior es un delimitador
                                if ($PosPalabra == 0) 	$DelimitadorInicio = true;
                                else					$DelimitadorInicio = $this->_BuscarDelimitadorPHP($Palabras[$i][$PosPalabra - 1]);
                                // Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
                                if ($PosPalabra + $TamPalabra == strlen($Palabras[$i])) 	$DelimitadorFin = true;
                                else														$DelimitadorFin = $this->_BuscarDelimitadorPHP($Palabras[$i][$PosPalabra + $TamPalabra]);
                                // Si la palabra esta bien delimitada la coloreamos
                                if ($DelimitadorInicio == true && $DelimitadorFin == true) { 
                                    $Palabras[$i] = str_replace($Palabra['Palabra'], "<span class='".$Palabra['Color']."'>".$Palabra['Palabra']."</span>", $Palabras[$i]);
                                    break; // Salimos del foreach para no colorear 2 veces la misma palabra
                                }
                            }
                        }
                    }
                }
                $TextoColoreado .= $Palabras[$i];
            }

            // Imprime el array para depurar
            if ($this->_Debug == true) { echo "PintarPHP<pre>"; print_r($Palabras); echo "</pre>"; }

            // Buscamos el inicio del código PHP que al ser con &lt;?php no es detectable por el algoritmo (<?php)
            $TextoColoreado = str_replace("&lt;?php", "<span class='Codigo_Rojo'>&lt;?php</span>", $TextoColoreado); 

            return $TextoColoreado."</span>";			
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
        public function PintarArchivoJavaScript($IDMarco, $Titulo, $Archivo, $ID = "") {
            if ($this->_Debug == false) {
                if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
            }
            $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
            if ($Ret == "TRUE")	$TextoColoreado .= $this->PintarJavaScript($Texto);
            else 				$TextoColoreado .= $Ret;
            $TextoColoreado .= $this->_TerminarMarco();
            if ($this->_Debug == false) {
                if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
            }
            echo $TextoColoreado;
        }

        // Función que pinta el string especificado según el esquema de colores de Dreamweaver para archivos JavaScript		
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto JavaScript a pintar
        // NOTA : Esta función no guarda nada en disco, y obliga al servidor a hacer el parsing cada vez.
        //        No se recomienda para strings muy grandes
        public function PintarTextoJavaScript($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $this->PintarJavaScript($Texto);
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;
        }

        // Función que colorea el texto JavaScript especificado según el esquema de colores de Dreamweaver
        // - $Texto : Texto JavaScript que queremos colorear
        public function PintarJavaScript($Texto) {
            $Texto = $this->_EliminarCaracteresComprometidos($Texto);
            $TextoColoreado = "";
            $TotalCaracteres = strlen($Texto);
            $Palabras = array();
            $TotalPalabras = 0;
            $Palabras[$TotalPalabras ++] = "<span class='Codigo_Negro'>";
            $PalabraActual = "";
            $Estado = ""; // Puede ser : Comentario, ComentarioML, String1, String2, y Numero
            for ($i = 0; $i < $TotalCaracteres; $i++) {
                switch ($Estado) {
                    case "" : // Sin estado
                        if ($Texto[$i] == "/" && $Texto[$i + 1] == "*") { // Principio ComentarioML
                            $Estado = "ComentarioML";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Gris'>/*";
                            $i++;
                        }
                        else if ($Texto[$i] == "/" && $Texto[$i + 1] == "/") { // Principio Comentario
                            $Estado = "Comentario";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Gris'>//";
                            $i++;
                        }
                        else if ($Texto[$i] == '"' && $Texto[$i - 1] != "\\") { // Principio String2
                            $Estado = "String2";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = '<span class="Codigo_Azul">"';
                        }
                        else if ($Texto[$i] == "'" && $Texto[$i - 1] != "\\") { // Principio String1
                            $Estado = "String1";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Azul'>'";
                        }
                        else if ($this->_EsNumero($Texto[$i]) == true && $this->_BuscarDelimitadorJavaScript($Texto[$i - 1])) {
                            $Estado = "Numero";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Rojo'>".$Texto[$i];
                        }
                        else { // Cualquier letra
                            if ($this->_BuscarDelimitadorJavaScript($Texto[$i]) == true) {
                                // Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
                                // Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
                                // De todas formas no estoy seguro si esto puede traer problemas
//                      	if ($this->_BuscarDelimitadorJavaScript($Texto[$i + 1]) != true) {
                                $Palabras[$TotalPalabras ++] = $PalabraActual;
                                $PalabraActual = "";
//				}
                            }
                            $PalabraActual .= $Texto[$i];
                        }
                        break;
                    // Estado : en un comentario multilinea
                    case "ComentarioML" :
                        if ($Texto[$i] == "*" && $Texto[$i + 1] == "/") {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."*/</span>";
                            $PalabraActual = "";
                            $Estado = "";
                            $i++;
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : en un comentario hasta el final de la linea
                    case "Comentario" :
                        if ($Texto[$i] == chr(10) || $Texto[$i] == chr(13)) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."</span>".$Texto[$i];
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : en un string con comillas dobles
                    case "String2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : en un string con comillas simples
                    case "String1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."'</span>";
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : en un valor numérico
                    case "Numero" :
                        if ($this->_BuscarDelimitadorJavaScript($Texto[$i]) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."</span>";
                            $PalabraActual = $Texto[$i];
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                }
            }

            // Si se ha quedado algun estado abierto, cerramos su span (los comentarios pueden quedar abiertos si se encuentran en la ultima linea)
            if ($Estado != "") $PalabraActual.= "</span>";
            // Pasamos la ultima palabra al array de palabras
            $Palabras[$TotalPalabras ++] = $PalabraActual;
            for ($i = 0; $i < $TotalPalabras; $i++) {
                if (isset($Palabras[$i][0])) {
                    if ($Palabras[$i][0] != '<') { // Si tiene '<' es el principio de un span por lo que no se debe tocar
                        foreach ($this->_DiccionarioJavaScript as $Palabra) {				
                            $PosPalabra = strpos($Palabras[$i], $Palabra['Palabra']);
                            if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
                                $DelimitadorInicio = false;
                                $DelimitadorFin = false;
                                $TamPalabra = strlen($Palabra['Palabra']);
                                // Miramos si el caracter anterior es un delimitador
                                if ($PosPalabra == 0) 	$DelimitadorInicio = true;
                                else			$DelimitadorInicio = $this->_BuscarDelimitadorJavaScript($Palabras[$i][$PosPalabra - 1]);
                                // Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
                                if ($PosPalabra + $TamPalabra == strlen($Palabras[$i])) 	$DelimitadorFin = true;
                                else														$DelimitadorFin = $this->_BuscarDelimitadorJavaScript($Palabras[$i][$PosPalabra + $TamPalabra]);
                                // Si la palabra esta bien delimitada la coloreamos
                                if ($DelimitadorInicio == true && $DelimitadorFin == true) { 
                                    $Palabras[$i] = str_replace($Palabra['Palabra'], "<span class='".$Palabra['Color']."'>".$Palabra['Palabra']."</span>", $Palabras[$i]);
//					break; // Salimos del foreach para no colorear 2 veces la misma palabra
                                }
                            }
                        }
                    }
                }
                $TextoColoreado .= $Palabras[$i];
            }

            // Imprime el array para depurar
            if ($this->_Debug == true) { echo "PintarJavaScript<pre>"; print_r($Palabras); echo "</pre>"; }

            return $TextoColoreado."</span>";	
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
        public function PintarArchivoCSS($IDMarco, $Titulo, $Archivo, $ID = "") {
            if ($this->_Debug == false) {
                if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
            }
            $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
            if ($Ret == "TRUE")	$TextoColoreado .= $this->PintarEstilosCSS($Texto);
            else 				$TextoColoreado .= $Ret;
            $TextoColoreado .= $this->_TerminarMarco();
            if ($this->_Debug == false) {
                if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
            }
            echo $TextoColoreado;
        }

        // Función que pinta el string especificado según el esquema de colores de Dreamweaver para archivos CSS		
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto CSS a pintar
        // NOTA : Esta función no guarda nada en disco, y obliga al servidor a hacer el parsing cada vez.
        //        No se recomienda para strings muy grandes
        public function PintarTextoCSS($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $this->PintarEstilosCSS($Texto);
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;
        }

        // Función que colorea el texto CSS especificado según el esquema de colores de Dreamweaver
        // - $Texto : Texto CSS que queremos colorear
        // NOTA : Esta función abarca tanto clases como ids ademas de sus estilos
        //        Ideal para pintar una etiqueta style dentro de un codigo HTML
        public function PintarEstilosCSS($Texto) {
            // Empieza por rosa, y hasta que no se encuentre un '{' no se cierra el span, una vez se vuelva a encontrar '}' se vuelve a poner rosa
            $Texto = $this->_EliminarCaracteresComprometidos($Texto);
            $TotalCaracteres = strlen($Texto);
            $TextoColoreado = "<span class='Codigo_Rosa'>";
            $Estado = "";
            $InicioEstiloCSS = 0;
            for ($i = 0; $i < $TotalCaracteres; $i++) {
                switch ($Estado) {
                    case "" : // Sin estado
                        if ($Texto[$i] == "@" && substr($Texto, $i, 10) != "@font-face") {
                            $TextoColoreado .= "</span><span class='Codigo_Marron Codigo_Negrita'>@";
                            $Estado = "Regla";
                        }
                        else if ($Texto[$i] == "}") {
                            $TextoColoreado .= "<span class='Codigo_Marron Codigo_Negrita'>}</span>";
                        }
                        else if ($Texto[$i] == "{") {
                            $TextoColoreado .= "{</span>";
                            $InicioEstiloCSS = $i + 1;
                            $Estado = "Estilo";
                        }
                        else if ($Texto[$i] == "/" && $Texto[$i + 1] == "*") {
                            $Estado = "ComentarioML";
                            $TextoColoreado .= "<span class='Codigo_Gris'>/*";
                            $i ++;
                        }
                        else {
                            $TextoColoreado .= $Texto[$i];
                        }
                        break;
                    case "Estilo" : // dentro de una id o una clase
                        if ($Texto[$i] == "}") {
                            $TextoColoreado .= $this->PintarEstiloCSS(substr($Texto, $InicioEstiloCSS, $i - $InicioEstiloCSS));
                            $TextoColoreado .= "<span class='Codigo_Rosa'>}";
                            $Estado = "";
                        }
                        break;
                    case "Regla" : // regla css @keyframes, @font-face, etc..
                        if ($Texto[$i] == "{") {
                            $TextoColoreado .= "{</span><span class='Codigo_Rosa'>";
                            $Estado = "";
                        }
                        else { $TextoColoreado.= $Texto[$i]; }
                        break;
/*					case "Regla_Estilo" : // dentro de un estilo que está en una regla
                        if ($Texto[$i] == "}") {
                                $TextoColoreado .= $this->PintarEstiloCSS(substr($Texto, $InicioEstiloCSS, $i - $InicioEstiloCSS));
                                $TextoColoreado .= "<span class='Codigo_Rosa'>}";
                                $Estado = "";
                        }
                        break;*/

                    case "ComentarioML" : // comentario multi linea
                        if ($Texto[$i] == "*" && $Texto[$i + 1] == "/") {
                            $Estado = "";
                            $TextoColoreado .= "*/</span>";
                            $i ++;
                        }
                        else { $TextoColoreado.= $Texto[$i]; }
                        break;
                }
            }
            if ($this->_Debug == true) echo "PintarEstilosCSS<br />";
            $TextoColoreado .= "</span>";
            return $TextoColoreado;
        }

        // Función que colorea el texto CSS especificado según el esquema de colores de Dreamweaver
        // - $Texto : Texto CSS que queremos colorear
        // NOTA : Esta función esta diseñada para pintar los estilos de una unica clase o id, sin su nombre.
        //        Ideal para pintar un atributo style dentro de un código HTML
        public function PintarEstiloCSS($Texto) {
            $Texto = $this->_EliminarCaracteresComprometidos($Texto);
            $TotalCaracteres = strlen($Texto);
            $TextoColoreado = "<span class='Codigo_AzulOscuro'>";
            $Estado = "";
            for ($i = 0; $i < $TotalCaracteres; $i++) {
                switch ($Estado) {
                    case "" : // Sin estado
                        if ($Texto[$i] == "'") {
                            $Estado = "String1";
                            $TextoColoreado .= "<span class='Codigo_Verde'>'";
                        }
                        else if ($Texto[$i] == '"') {
                            $Estado = "String2";
                            $TextoColoreado .= '<span class="Codigo_Verde">"';
                        }
                        else if ($Texto[$i] == "/" && $Texto[$i + 1] == "*") {
                            $Estado = "ComentarioML";
                            $TextoColoreado .= "<span class='Codigo_Gris'>/*";
                            $i ++;
                        }
                        else if ($Texto[$i] == ":") {
//							$TextoColoreado .= "<span class='Codigo_Rosa'>:</span>";
                            $TextoColoreado .= "<span class='Codigo_Rosa'>:</span><span class='Codigo_Azul'>";
                        }
                        else if ($Texto[$i] == ";") {
                            $TextoColoreado .= "</span><span class='Codigo_Rosa'>;</span>";
                        }
                        else {
                            $TextoColoreado .= $Texto[$i];
                        }
                        break;
                    // Estado : dentro de un string con comillas simples
                    case "String1" : 
                        if ($Texto[$i] == "'") {
                            $Estado = "";
                            $TextoColoreado .= "'</span>";
                        }
                        else { $TextoColoreado.= $Texto[$i]; }
                        break;
                    // Estado : dentro de un string con comillas dobles
                    case "String2" : 
                        if ($Texto[$i] == '"') {
                            $Estado = "";
                            $TextoColoreado .= '"</span>';
                        }
                        else { $TextoColoreado.= $Texto[$i]; }
                        break;
                    // Estado : dentro de un comentario multilinea
                    case "ComentarioML" : 
                        if ($Texto[$i] == "*" && $Texto[$i + 1] == "/") {
                            $Estado = "";
                            $TextoColoreado .= "*/</span>";
                            $i ++;
                        }
                        else { $TextoColoreado.= $Texto[$i]; }
                        break;	
                }
            }
            if ($this->_Debug == true) echo "PintarEstiloCSS<br />";
            if (isset($Texto[$i -1])) {
                    if ($Texto[$i -1] != ";") $TextoColoreado .= "</span>";
            }
            $TextoColoreado .= "</span>";
            return $TextoColoreado;
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
        public function PintarArchivoC($IDMarco, $Titulo, $Archivo, $ID = "") {
            if ($this->_Debug == false) {
                if ($this->_ComprobarPintado($Archivo, $ID) == "TRUE") return;
            }
            $Ret = $this->_LeerArchivo($Archivo, $Texto, $ID);
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto));
            if ($Ret == "TRUE")	$TextoColoreado .= $this->PintarC($Texto);
            else 		$TextoColoreado .= $Ret;
            $TextoColoreado .= $this->_TerminarMarco();
            if ($this->_Debug == false) {
                if ($Ret == "TRUE") $this->_GuardarPintado($Archivo, $TextoColoreado, $ID);
            }
            echo $TextoColoreado;
        }

        // Función que pinta el string especificado según el esquema de colores de VisualStudio para archivos C/Cpp		
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto C/Cpp a pintar
        // NOTA : Esta función no guarda nada en disco, y obliga al servidor a hacer el parsing cada vez.
        //        No se recomienda para strings muy grandes
        public function PintarTextoC($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $this->PintarC($Texto);
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;
        }

        // Función que colorea el texto C/Cpp especificado según el esquema de colores de VisualStudio
        // - $Texto : Texto C/Cpp que queremos colorear
        public function PintarC($Texto) {
            // Dividimos texto en un array de palabras / frases (los comentarios y los strings quedaran en una sola posicion del array, las demas palabras quedaran divididas según los delimitadores)
            $Texto = $this->_EliminarCaracteresComprometidos($Texto);
            $TextoColoreado = "";
            $TotalCaracteres = strlen($Texto);
            $Palabras = array();
            $TotalPalabras = 0;
            $Palabras[$TotalPalabras ++] = "<span class='Codigo_Negro'>";
            $PalabraActual = "";
            $Estado = ""; // Puede ser : Comentario, ComentarioML, String1, String2, Directiva, Directiva_Fin
            for ($i = 0; $i < $TotalCaracteres; $i++) {
                switch ($Estado) {
                    case "" : // Sin estado
                        if ($Texto[$i] == "/" && $Texto[$i + 1] == "*") { // Principio ComentarioML
                            $Estado = "ComentarioML";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Verde'>/*";
                            $i++;
                        }
                        else if ($Texto[$i] == "/" && $Texto[$i + 1] == "/") { // Principio Comentario
                            $Estado = "Comentario";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Verde'>//";
                            $i++;
                        }
                        else if ($Texto[$i] == '"' && $Texto[$i - 1] != "\\") { // Principio String2
                            $Estado = "String2";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = '<span class="Codigo_Rojo">"';
                        }
                        else if ($Texto[$i] == "'" && $Texto[$i - 1] != "\\") { // Principio String1
                            $Estado = "String1";
                            $Palabras[$TotalPalabras ++] = $PalabraActual;
                            $PalabraActual = "<span class='Codigo_Rojo'>'";
                        }
                        else if($Texto[$i] == "#" && $Texto[$i + 1] != "#" && $i != 0) {
                            if ($Texto[$i - 1] != "#") {
                                $Estado = "Directiva";
                                $Palabras[$TotalPalabras ++] = $PalabraActual;
                                $PalabraActual = "<span class='Codigo_Azul'>#";
                            }
                        }
                        else { // Cualquier letra
                            $PalabraActual .= $Texto[$i];
                            if ($this->_BuscarDelimitadorC($Texto[$i]) == true) {
                                // Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
                                // Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
                                // De todas formas no estoy seguro si esto puede traer problemas
                                if (isset($Texto[$i + 1])) {
                                    if ($this->_BuscarDelimitadorC($Texto[$i + 1]) != true) {
                                        $Palabras[$TotalPalabras ++] = $PalabraActual;
                                        $PalabraActual = "";
                                    }
                                }
                            }
                        }
                        break;
                    // Estado : dentro de una directiva ej : #include
                    case "Directiva" :
                        if ($Texto[$i] == " ") {
                            $Palabras[$TotalPalabras ++] = $PalabraActual." </span>";
                            $PalabraActual = "";
                            $Estado = "Directiva_Fin";
                        }
                        else $PalabraActual .= $Texto[$i];						
                        break;
                    // Estado : justo despues de una directiva.
                    //          Hay que mirar por si empieza un simbolo <
                    case "Directiva_Fin" :
                        switch ($Texto[$i]) {
                            case "&" : // posible &lt; o &gt;
                                if (substr($Texto, $i, 4) == "&lt;") { // <
                                    $PalabraActual .= "<span class='Codigo_Rojo'>&lt;";
                                    $i+=3;
                                }
                                else if (substr($Texto, $i, 4) == "&gt;") { // >
                                    $PalabraActual .= "&gt;</span>";
                                    $Palabras[$TotalPalabras ++] = $PalabraActual;
                                    $PalabraActual = "";
                                    $Estado = "";
                                    $i+=3;
                                }
                                else $PalabraActual .= "&";
                                break;
                            case "/" : // Pasamos el estado a String1
                                if ($Texto[$i + 1] == "/") {
                                    $Estado = "Comentario";
                                    $Palabras[$TotalPalabras ++] = $PalabraActual;
                                    $PalabraActual = "<span class='Codigo_Verde'>//";
                                    $i++;									
                                }
                                else if ($Texto[$i + 1] == "*") {
                                    $Estado = "ComentarioML";
                                    $Palabras[$TotalPalabras ++] = $PalabraActual;
                                    $PalabraActual = "<span class='Codigo_Verde'>/*";
                                    $i++;									
                                }
                                else $PalabraActual .= $Texto[$i];
                                break;
                            case "'" : // Pasamos el estado a String1
                                $Palabras[$TotalPalabras ++] = $PalabraActual;
                                $PalabraActual = "<span class='Codigo_Rojo'>'";
                                $Estado = "String1";
                                break;
                            case '"' : // Pasamos el estado a String2
                                $Palabras[$TotalPalabras ++] = $PalabraActual;
                                $PalabraActual = '<span class="Codigo_Rojo">"';
                                $Estado = "String2";
                                break;
                            case chr(10) : case chr(13) :
                                $PalabraActual .= $Texto[$i];
                                $Estado = "";
                                break;
                            default :
                                $PalabraActual .= $Texto[$i];
                                break;
                        }
                        break;
                    // Estado : dentro de un comentario multilinea
                    case "ComentarioML" :
                        if ($Texto[$i] == "*" && $Texto[$i + 1] == "/") {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."*/</span>";
                            $PalabraActual = "";
                            $Estado = "";
                            $i++;
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : dentro de un comentario hasta el final de la linea
                    case "Comentario" :
                        if ($Texto[$i] == chr(10) || $Texto[$i] == chr(13)) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual."</span>".$Texto[$i];
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];
                        break;
                    // Estado : dentro de un string con comillas dobles
                    case "String2" :
                        if ($this->_FinString2($Texto, $i) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];	
                        break;
                    // Estado : dentro de un string con comillas simples
                    case "String1" :
                        if ($this->_FinString1($Texto, $i) == true) {
                            $Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
                            $PalabraActual = "";
                            $Estado = "";
                        }
                        else $PalabraActual .= $Texto[$i];	
                        break;
                }
            }
            // Si se ha quedado algun estado abierto, cerramos su span (los comentarios pueden quedar abiertos si se encuentran en la ultima linea)
            if ($Estado != "") $PalabraActual.= "</span>";
            // Pasamos la ultima palabra al array de palabras
            $Palabras[$TotalPalabras ++] = $PalabraActual;
            for ($i = 0; $i < $TotalPalabras; $i++) {
                if (isset($Palabras[$i][0])) { // Si tiene '<' es el principio de un span por lo que no se debe tocar
                    if ($Palabras[$i][0] != '<') { // Si tiene '<' es el principio de un span por lo que no se debe tocar
                        foreach ($this->_DiccionarioC as $Palabra) {				
                            $PosPalabra = strpos($Palabras[$i], $Palabra['Palabra']);
                            if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
                                $DelimitadorInicio = false;
                                $DelimitadorFin = false;
                                $TamPalabra = strlen($Palabra['Palabra']);
                                // Miramos si el caracter anterior es un delimitador
                                if ($PosPalabra == 0) 	$DelimitadorInicio = true;
                                else					$DelimitadorInicio = $this->_BuscarDelimitadorC($Palabras[$i][$PosPalabra - 1]);
                                // Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
                                if ($PosPalabra + $TamPalabra == strlen($Palabras[$i])) 	$DelimitadorFin = true;
                                else														$DelimitadorFin = $this->_BuscarDelimitadorC($Palabras[$i][$PosPalabra + $TamPalabra]);
                                // Si la palabra esta bien delimitada la coloreamos
                                if ($DelimitadorInicio == true && $DelimitadorFin == true) { 
                                    $Palabras[$i] = str_replace($Palabra['Palabra'], "<span class='".$Palabra['Color']."'>".$Palabra['Palabra']."</span>", $Palabras[$i]);
                                    break; // Salimos del foreach para no colorear 2 veces la misma palabra
                                }
                            }
                        }
                    }
                }
                $TextoColoreado .= $Palabras[$i];
            }

            // Imprime el array para depurar
            if ($this->_Debug == true) { echo "PintarC<pre>"; print_r($Palabras); echo "</pre>"; }

            return $TextoColoreado."</span>";			
        }


        // Función que pinta el string especificado dentro de un marco de código
        // - $IDMarco : ID para el marco (utilizable desde HTML)
        // - $Titulo  : Titulo para el maarco (se puede incluir un link HTML)
        // - $Texto   : String que contiene el texto C/Cpp a pintar
        public function PintarTexto($IDMarco, $Titulo, $Texto) {
/*			$TextoFinal = $Texto;
            if ($Texto[0] == "\n") $TextoFinal = substr($Texto, 1);
            if ($TextoFinal[strlen($TextoFinal) - 1] == "\n") $TextoFinal[strlen($TextoFinal) - 1] = " ";*/
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $Texto;
            $TextoColoreado .= $this->_TerminarMarco();
            echo $TextoColoreado;			
        }

        public function Texto($IDMarco, $Titulo, $Texto) {
            $TextoColoreado  = $this->_IniciarMarco($IDMarco, $Titulo, $this->_ObtenerTotalLineas($Texto) + 1);
            $TextoColoreado .= $Texto;
            $TextoColoreado .= $this->_TerminarMarco();
            return $TextoColoreado;
        }





        ////////////////////////
        // Funciones privadas //
        ////////////////////////


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
                    return "<span class='Codigo_Rojo'>ERROR!! no se ha encontrado el archivo : '".$Path."'</span>";
            }
            $ArchivoLista = fopen($Path, "r");
            $DatosArchivo = fread($ArchivoLista, filesize($Path));
            fclose($ArchivoLista);
            if ($ID_Parte != "") {
                $IBuscarStr = "[INICIO devildrey33.".$ID_Parte."]-";
                $TamIDBuscar = strlen($IBuscarStr);
                $Inicio = strpos($DatosArchivo, $IBuscarStr) + $TamIDBuscar;
                $Fin = strpos($DatosArchivo, "[FIN devildrey33.".$ID_Parte."]-"); // delante ira '/* -[' o '// -' o '<!--'
                // Miramos si el código es HTML
                if ($DatosArchivo[$Inicio - ($TamIDBuscar + 4)] == "<" && $DatosArchivo[$Inicio - ($TamIDBuscar + 3)] == "!") { $Inicio ++; $Fin--; }
                // Miramos si el código viene con comentarios multilinea C/PHP/JavaScript/CSS especialmente para CSS
                if ($DatosArchivo[$Inicio - ($TamIDBuscar + 4)] == "/" && $DatosArchivo[$Inicio - ($TamIDBuscar + 3)] == "*") { $Inicio += 3; }

                if ($Inicio === false || $Fin === false) { // NO EXISTE LA ID EN EL ARCHIVO
                    return "<span class='Codigo_Rojo'>ERROR!! no se ha encontrado la ID : '".$ID_Parte."' en el archivo : '".$Path."'</span>";
                }
                // Parche para servidores windows / linux (para los caracteres delimitadores de linea
                // En windows hay 2, en linux solo hay uno
                if ($DatosArchivo[$Inicio + 1] == chr(10) || $DatosArchivo[$Inicio + 1] == chr(13))
                    $Texto = substr($DatosArchivo, $Inicio + 2, ($Fin - 6) - $Inicio);
                else
                    $Texto = substr($DatosArchivo, $Inicio + 1, ($Fin - 5) - $Inicio);
                return "TRUE";
            }
            else {
                $Texto = $DatosArchivo;
                return "TRUE";
            }
        }


        // Función que imprime la parte superior del marco donde se escribira el código coloreado
        // - $IDMarco     : ID para el marco (para acceder a el desde HTML)
        // - $Titulo      : Titulo del marco
        // - $TotalLineas : Numero total de lineas del código (para imprimir a la izquierda la numeración)
        private function _IniciarMarco($IDMarco, $Titulo, $TotalLineas) {
            $PRE = "<div class='devildrey33_Codigo_Marco' id='".$IDMarco."'>".
                        "<div class='devildrey33_Codigo_Titulo'>".$Titulo."</div>".
//                        "<div>".
                            "<div class='devildrey33_Codigo_Numeracion'>";
            if ($TotalLineas == 0) $TotalLineas = 1;
            for ($i = 1; $i < $TotalLineas + 1; $i++) {
/*				if ($i < 10) 		$PRE = $PRE."00".$i."<br />";
                    else if ($i < 100) 	$PRE = $PRE."0".$i."<br />";
                    else		*/		$PRE = $PRE.$i."<br />";
            }
            $PRE = $PRE.    "</div>".
//                            "<div class='devildrey33_Codigo_Scroll'>".
                            "<pre class='devildrey33_Codigo_PRECodigo'>";


            return $PRE;
        }
/*		private function _IniciarMarco($IDMarco, $Titulo, $TotalLineas) {
                $PRE = "<div class='TablaCodigo' id='".$IDMarco."'>
                                        <div class='TablaTitulo'>".$Titulo."</div>
                                        <div class='TablaNumeracion'>";
                if ($TotalLineas == 0) $TotalLineas = 1;
                for ($i = 1; $i < $TotalLineas + 1; $i++) $PRE = $PRE.$i."<br />";
                $PRE = $PRE."</div>
                                         <pre class='Pre_Codigo'>";
                return $PRE;
        }*/

        // Función que imprime la parte inferior del marco donde se escribira el código coloreado
        private function _TerminarMarco() {
//            return "</pre>"."</div>"."</div>"."</div>";
            return "</pre>"."</div>";
        }

/*		private function _TerminarMarco() {
                return "</pre></div>";
        }*/


        // Función que comprueba si existe una version actual del código a colorear ya parseada
        // - $Archivo : Ruta del archivo a colorear.
        // - $ID      : ID de la porción de código a colorear.
        // - Devuelve "TRUE" si el archivo existe y esta actualizado, "FALSE" en caso contrario
        private function _ComprobarPintado($Archivo, $ID = "") {
            $ID = $this->_RetocarNombreArchivo($ID);
            $NombreArchivo = $this->_RetocarNombreArchivo($Archivo);
            if ($ID != "") 	$NombrePintado = $_SERVER["DOCUMENT_ROOT"]."/Web/Cache/PintarCodigo/".$NombreArchivo."_".$ID.".PintarCodigo";
            else		$NombrePintado = $_SERVER["DOCUMENT_ROOT"]."/Web/Cache/PintarCodigo/".$NombreArchivo.".PintarCodigo";
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
            if ($ID != "") 	$NombrePintado = $_SERVER["DOCUMENT_ROOT"]."/Web/Cache/PintarCodigo/".$NombreArchivo."_".$ID.".PintarCodigo";
            else		$NombrePintado = $_SERVER["DOCUMENT_ROOT"]."/Web/Cache/PintarCodigo/".$NombreArchivo.".PintarCodigo";
            $ArchivoPrePintado = fopen($NombrePintado, "w");
            fwrite($ArchivoPrePintado, $Datos, strlen($Datos));
            fclose($ArchivoPrePintado);
        }

        // Función que retoca el nombre de archivo de forma de que si incluye directorios se pueda guardar igualmente
        // - $NombreArchivo : Ruta del archivo
        // NOTA : las barras y antibarras se re-emplazan por el simbolo '-', y los puntos por '_'
        private function _RetocarNombreArchivo($NombreArchivo) {
            $NombreArchivo = str_replace('/', '-', $NombreArchivo);  
            $NombreArchivo = str_replace('\\', '-', $NombreArchivo); 
            $NombreArchivo = str_replace('.', '_', $NombreArchivo);  
            $NombreArchivo = str_replace(':', '-', $NombreArchivo);  
            return $NombreArchivo;
        }

        // Función que devuleve el total de lineas que tiene un string
        // - $Texto : String del que queremos saber sus lineas
        private function _ObtenerTotalLineas($Texto) {
/*			$TamTexto = strlen($Texto);
            $Lineas = 0;
            for ($i = 0; $i < $TamTexto; $i++) {
                    if ($Texto[$i] == '\n') $Lineas ++;
            }
            return $Lineas;*/
            return count(explode(chr(10), $Texto)) - 1;
        }

        // Función que substituye las tabulaciones por 4 espacios, y los caracteres '<', '>' por '&lt;' y '&gt;'
        // - $Texto : String del que queremos eliminar los caracteres.
        private function _EliminarCaracteresComprometidos($Texto) {
            $Texto = str_replace('	', '    ', $Texto); // Cambio tabulaciones por 4 espacios (cosa que trae problemas de alineacion.... pero esque si no, a la que tienes 5 tabuladores seguidos te comes media pantalla)
            $Texto = str_replace('<', '&lt;', $Texto);  // Cambio el caracter '<' por '&lt;'			
            $Texto = str_replace('>', '&gt;', $Texto);  // Cambio el caracter '<' por '&lt;'	
            return $Texto;		
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

        // Función privada que busca si el caracter es un delimitador de palabra PHP
        // - $Caracter : Caracter que queremos compribar con la lista de delimitadores
        private function _BuscarDelimitadorHTML($Caracter) {
            foreach($this->_DelimitadoresHTML as $Delimitador) {
                if ($Caracter == $Delimitador) return true;
            }
            return false;
        }

        // Función privada que busca si el caracter es un delimitador de palabra PHP
        // - $Caracter : Caracter que queremos compribar con la lista de delimitadores
        private function _BuscarDelimitadorPHP($Caracter) {
            foreach($this->_DelimitadoresPHP as $Delimitador) {
                if ($Caracter == $Delimitador) return true;
            }
            return false;
        }

        // Función privada que busca si el caracter es un delimitador de palabra JavaScript
        // - $Caracter : Caracter que queremos compribar con la lista de delimitadores
        private function _BuscarDelimitadorJavaScript($Caracter) {
            foreach($this->_DelimitadoresJavaScript as $Delimitador) {
                if ($Caracter == $Delimitador) return true;
            }
            return false;
        }

        // Función privada que busca si el caracter es un delimitador de palabra C/Cpp
        // - $Caracter : Caracter que queremos compribar con la lista de delimitadores
        private function _BuscarDelimitadorC($Caracter) {
            foreach($this->_DelimitadoresC as $Delimitador) {
                if ($Caracter == $Delimitador) return true;
            }
            return false;
        }

        // Función privada que busca si dentro del texto introducido hay una etiqueta del _DiccionarioHTML
        // - $Texto : Texto en el que se buscara la etiqueta
        // NOTA devuelve el color que deberia tener esa etiqueta, en caso de no estar en el diccionario devuelve Codigo_AzulOscuro
        private function _BuscarEtiqueta($Texto) {
            foreach ($this->_DiccionarioHTML as $Palabra) {				
                $PosPalabra = strpos($Texto, $Palabra['Palabra']);
                if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
                    $DelimitadorInicio = false;
                    $DelimitadorFin = false;
                    $TamPalabra = strlen($Palabra['Palabra']);
                    // Miramos si el caracter anterior es un delimitador
                    if ($PosPalabra == 0) 	$DelimitadorInicio = true;
                    else			$DelimitadorInicio = $this->_BuscarDelimitadorHTML($Texto[$PosPalabra - 1]);
                    // Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
                    if ($PosPalabra + $TamPalabra == strlen($Texto)) 	$DelimitadorFin = true;
                    else                                		$DelimitadorFin = $this->_BuscarDelimitadorHTML($Texto[$PosPalabra + $TamPalabra]);
                    // Si la palabra esta bien delimitada la coloreamos
                    if ($DelimitadorInicio == true && $DelimitadorFin == true) return $Palabra['Color'];
                }
            }
            return "Codigo_AzulOscuro";
        }

        // Función que retorna si relamente esta al final de un string empezado con dobles comillas
        // - $Texto    : Cadena de caracteres que contiene el string a analizar
        // - $Posicion : Posicion actual dentro de la cadena de caracteres
        // NOTA la razon de ser de esta función es que podemos encontrar una cadena con un terminador \", este terminador representa una doble comilla, 
//		pero si la cadena es \\" lo que representa es una antibarra seguida de una doble comilla.
        private function _FinString2(&$Texto, $Posicion) {
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
        // NOTA la razon de ser de esta función es que podemos encontrar una cadena con un terminador \', este terminador representa una comilla, 
//		pero si la cadena es \\' lo que representa es una antibarra seguida de una comilla.
        private function _FinString1(&$Texto, $Posicion) {
            if ($Texto[$Posicion] == "'") {
                // Es una cadena de escape que define una comilla simple
                if ($Texto[$Posicion - 1] == "\\" && $Texto[$Posicion - 2] != "\\") return false;
                else                                                                return true;
            }
            else return false;
        }

        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
        // Variables privadas                                                                                        //
        //  En esencia son los diccionarios para palabras restringidas de cada lenguaje que van en colores distintos //
        //  Se pueden añadir palabras o delimitadores que puedan faltar sin ningun problema                          //
        ///////////////////////////////////////////////////////////////////////////////////////////////////////////////
                                // Variable que indica si se tienen que mostrar datos de depuración
        private     $_Debug = false;
                                // Array de los caracteres delimitadores para etiquetas HTML
        private     $_DelimitadoresHTML = array(" ", "/", ">", "<");
                                // Array con el diccionario de palabras y su color pertinente para HTML
        private     $_DiccionarioHTML = array(          array("Palabra" => "table"                      , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "tr"                         , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "td"                         , "Color" => "Codigo_VerdeClaro"),

                                                        array("Palabra" => "form"                       , "Color" => "Codigo_Amarillo"),
                                                        array("Palabra" => "select"                     , "Color" => "Codigo_Amarillo"),
                                                        array("Palabra" => "option"                     , "Color" => "Codigo_Amarillo"),
                                                        array("Palabra" => "input"                      , "Color" => "Codigo_Amarillo"),
                                                        array("Palabra" => "label"                      , "Color" => "Codigo_Amarillo"),

                                                        array("Palabra" => "img"                        , "Color" => "Codigo_Lila"),

                                                        array("Palabra" => "a"                          , "Color" => "Codigo_Verde")
                                                                          );
                                // Array de los caracteres delimitadores para PHP
        private     $_DelimitadoresPHP = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", "@", "	", "\n", "\r");
                                // Array con el diccionario de palabras y su color pertinente para PHP
        private     $_DiccionarioPHP = array(           array("Palabra" => "if"                         , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "else"                       , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "for"                        , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "foreach"                    , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "as"                         , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "while"                      , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "array"                      , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "break"                      , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "class"                      , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "true"                       , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "false"                      , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "TRUE"                       , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "FALSE"                      , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "echo"                       , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "return"                     , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "include"                    , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "public"                     , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "protected"                  , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "private"                    , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "new"                        , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "case"                       , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "switch"                     , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "default"                    , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "global"                     , "Color" => "Codigo_Verde"),
                                                        array("Palabra" => "isset"                      , "Color" => "Codigo_Verde"),

                                                        array("Palabra" => "+"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "-"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "*"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "/"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "="                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "{"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "}"                          , "Color" => "Codigo_Azul"),

                                                        array("Palabra" => "chr"                        , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "rand"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "fread"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "fopen"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "fwrite"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "fclose"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "header"                     , "Color" => "Codigo_Azul"),														
                                                        array("Palabra" => "is_dir"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "strlen"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "substr"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "strpos"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "stripos"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "print_r"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "explode"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "shuffle"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "basename"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "filesize"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagepng"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "function"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagefill"                  , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagestring"                , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "file_exists"                , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "mysql_error"                , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "str_replace"                , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "str_ireplace"               , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagedestroy"               , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "session_start"              , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "xml_parser_free"            , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "xml_parser_create"          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagecolorallocate"         , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagecreatetruecolor"       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "xml_parse_into_struct"      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "imagecolorallocatealpha"    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "mysql_real_escape_string"   , "Color" => "Codigo_Azul"),

                                                        array("Palabra" => "?&gt;"                      , "Color" => "Codigo_Rojo")
                                                );
                                // Array de los caracteres delimitadores para JavaScript
        private     $_DelimitadoresJavaScript = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", "@", "	", "\n", "\r");
                                // Array con el diccionario de palabras y su color pertinente para JavaScript
        private     $_DiccionarioJavaScript = array(    array("Palabra" => "if"                         , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "for"                        , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "var"                        , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "new"                        , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "item"                       , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "else"                       , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "case"                       , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "break"                      , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "while"                      , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "return"                     , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "switch"                     , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "default"                    , "Color" => "Codigo_AzulOscuro"),
                                                        array("Palabra" => "function"                   , "Color" => "Codigo_AzulOscuro"),

                                                        array("Palabra" => "("                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => ")"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "+"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "-"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "*"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "/"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "="                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "{"                          , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "}"                          , "Color" => "Codigo_Azul"),

                                                        array("Palabra" => "log"                        , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "eval"                       , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "Math"                       , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "Array"                      , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "floor"                      , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "round"                      , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "random"                     , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "String"                     , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "charAt"                     , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "parseInt"                   , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "charCodeAt"                 , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "setTimeout"                 , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "setInterval"                , "Color" => "Codigo_VerdeClaro"),
                                                        array("Palabra" => "fromCharCode"               , "Color" => "Codigo_VerdeClaro"),

                                                        array("Palabra" => "stop"                       , "Color" => "Codigo_Lila"),
                                                        array("Palabra" => "alert"                      , "Color" => "Codigo_Lila"),
                                                        array("Palabra" => "scroll"                     , "Color" => "Codigo_Lila"),
                                                        array("Palabra" => "options"                    , "Color" => "Codigo_Lila"),
                                                        array("Palabra" => "window"                     , "Color" => "Codigo_Lila"),
                                                        array("Palabra" => "document"                   , "Color" => "Codigo_Lila"),
                                                        array("Palabra" => "clearInterval"              , "Color" => "Codigo_Lila")
                                                );
                                // Array de los caracteres delimitadores para C/C++
        private     $_DelimitadoresC		 = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", ":", "	", "\n", "\r", "&");
                                // Array con el diccionario de palabras y su color pertinente para C/C++
        private     $_DiccionarioC           = array(   array("Palabra" => "reinterpret_cast"           , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "dynamic_cast"               , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "static_cast"                , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "const_cast"                 , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "namespace"                  , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "protected"                  , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "operator"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "template"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "typename"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "unsigned"                   , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "typedef"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "defined"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "virtual"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "default"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "private"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "comment"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "wchar_t"                    , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "delete"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "public"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "inline"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "return"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "static"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "sizeof"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "signed"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "struct"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "friend"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "switch"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "double"                     , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "class"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "break"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "const"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "short"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "while"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "false"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "float"                      , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "bool"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "case"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "true"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "void"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "enum"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "else"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "char"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "long"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "this"                       , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "for"                        , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "new"                        , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "int"                        , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "do"                         , "Color" => "Codigo_Azul"),
                                                        array("Palabra" => "if"                         , "Color" => "Codigo_Azul")
                                                );
    };
?>
