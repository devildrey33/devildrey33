<?php 
// JavaScript
// Array de los caracteres delimitadores para JavaScript
$_DelimitadoresJavaScript = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", "@", "	", "\n", "\r");
// Array con el diccionario de palabras y su color pertinente para JavaScript
$_DiccionarioJavaScript   = array(  array("Palabra" => "if"             , "Color" => "Codigo_AzulOscuro"),
									array("Palabra" => "var"            , "Color" => "Codigo_AzulOscuro"),
									array("Palabra" => "case"           , "Color" => "Codigo_AzulOscuro"),
									array("Palabra" => "break"          , "Color" => "Codigo_AzulOscuro"),
									array("Palabra" => "return"         , "Color" => "Codigo_AzulOscuro"),
									array("Palabra" => "switch"         , "Color" => "Codigo_AzulOscuro"),
									array("Palabra" => "default"        , "Color" => "Codigo_AzulOscuro"),
									
									array("Palabra" => "("              , "Color" => "Codigo_Azul"),
									array("Palabra" => ")"              , "Color" => "Codigo_Azul"),
									array("Palabra" => "+"              , "Color" => "Codigo_Azul"),
									array("Palabra" => "-"              , "Color" => "Codigo_Azul"),
									array("Palabra" => "*"              , "Color" => "Codigo_Azul"),
									array("Palabra" => "/"              , "Color" => "Codigo_Azul"),
									array("Palabra" => "="              , "Color" => "Codigo_Azul"),
									array("Palabra" => "{"              , "Color" => "Codigo_Azul"),
									array("Palabra" => "}"              , "Color" => "Codigo_Azul"),
									
									array("Palabra" => "eval"           , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "Math"           , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "floor"          , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "String"         , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "parseInt"       , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "setTimeout"     , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "setInterval"    , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "clearInterval"  , "Color" => "Codigo_VerdeClaro"),
									array("Palabra" => "fromCharCode"   , "Color" => "Codigo_VerdeClaro"),
									
									array("Palabra" => "stop"           , "Color" => "Codigo_Lila"),
									array("Palabra" => "alert"          , "Color" => "Codigo_Lila"),
									array("Palabra" => "scroll"         , "Color" => "Codigo_Lila"),
									array("Palabra" => "window"         , "Color" => "Codigo_Lila"),
									array("Palabra" => "document"       , "Color" => "Codigo_Lila")
								  );


// Función que retorna si relamente esta al final de un string empezado con dobles comillas
// - $Texto    : Cadena de caracteres que contiene el string a analizar
// - $Posicion : Posicion actual dentro de la cadena de caracteres
// NOTA la razón de ser de esta función es que podemos encontrar una cadena con un terminador \", este terminador representa  
//      una doble comilla, pero si la cadena es \\" lo que representa es una antibarra seguida de una doble comilla.
function _FinString2(&$Texto, $Posicion) {
	if ($Texto[$Posicion] == '"') {
		// No es una cadena de escape que define una doble comilla
		if ($Texto[$Posicion - 1] == "\\" && $Texto[$Posicion - 2] != "\\") return false;
		else                                                                return true;
	}
	else return false;
}

// Función que retorna si relamente esta al final de un string empezado con comilla
// - $Texto    : Cadena de caracteres que contiene el string a analizar
// - $Posicion : Posicion actual dentro de la cadena de caracteres
// NOTA la razón de ser de esta función es que podemos encontrar una cadena con un terminador \', este terminador representa 
//      una comilla, pero si la cadena es \\' lo que representa es una antibarra seguida de una comilla.
function _FinString1(&$Texto, $Posicion) {
	if ($Texto[$Posicion] == "'") {
		// No es una cadena de escape que define una doble comilla
		if ($Texto[$Posicion - 1] == "\\" && $Texto[$Posicion - 2] != "\\") return false;
		else                                                                return true;
	}
	else return false;
}



// Función que mira si el caracter pasado como parámetro es un numero
// - $Caracter : Caracter del que queremos saber si es un numero
function _EsNumero($Caracter) {
	switch ($Caracter) {
		case '0' : case '1' : case '2' : case '3' : case '4' : case '5' : case '6' : case '7' : case '8' : case '9' :
			return true;
		default :
			return false;
	}
}
// Función que busca si el caracter es un delimitador de palabra JavaScript
// - $Caracter : Caracter que queremos compribar con la lista de delimitadores
function _BuscarDelimitadorJavaScript($Caracter) {
	global $_DelimitadoresJavaScript;
	foreach($_DelimitadoresJavaScript as $Delimitador) {
		if ($Caracter == $Delimitador) return true;
	}
	return false;
}


// Función que colorea el texto JavaScript especificado según el esquema de colores de Dreamweaver
// - $Texto : Texto JavaScript que queremos colorear
function PintarJavaScript($Texto) {
	global $_DiccionarioJavaScript;
//	$_Debug = true;
	$Texto = str_replace('	', '    ', $Texto); // Cambio tabulaciones por 4 espacios
	$Texto = str_replace('<', '&lt;', $Texto);  // Cambio el caracter '<' por '&lt;'			
	$Texto = str_replace('>', '&gt;', $Texto);  // Cambio el caracter '>' por '&gt;'	
	
	$TotalCaracteres = strlen($Texto);
	$Palabras = array();
	$TotalPalabras = 0;
	$Palabras[$TotalPalabras ++] = "<span class='Codigo_Negro'>";
	$PalabraActual = "";
	$Estado = ""; // Puede ser : Comentario, ComentarioML, String1, String2, y Numero
	for ($i = 0; $i < $TotalCaracteres; $i++) {
		switch ($Estado) {
			case "" : // Normal
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
				else if (_EsNumero($Texto[$i]) == true && _BuscarDelimitadorJavaScript($Texto[$i - 1])) {
					$Estado = "Numero";
					$Palabras[$TotalPalabras ++] = $PalabraActual;
					$PalabraActual = "<span class='Codigo_Rojo'>".$Texto[$i];
				}
				else { // Cualquier letra
					$PalabraActual .= $Texto[$i];
					if (_BuscarDelimitadorJavaScript($Texto[$i]) == true) {
						// Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
						// Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
						// De todas formas no estoy seguro si esto puede traer problemas
						if (_BuscarDelimitadorJavaScript($Texto[$i + 1]) != true) {
							$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
						}
					}
				}
				break;
			case "ComentarioML" :
				if ($Texto[$i] == "*" && $Texto[$i + 1] == "/") {
					$Palabras[$TotalPalabras ++] = $PalabraActual."*/</span>";
					$PalabraActual = "";
					$Estado = "";
					$i++;
				}
				else $PalabraActual .= $Texto[$i];
				break;
			case "Comentario" :
				if ($Texto[$i] == chr(10) || $Texto[$i] == chr(13)) {
					$Palabras[$TotalPalabras ++] = $PalabraActual."</span>".$Texto[$i];
					$PalabraActual = "";
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
			case "String2" :
				if (_FinString2($Texto, $i) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
					$PalabraActual = "";
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
			case "String1" :
				if (_FinString1($Texto, $i) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual."'</span>";
					$PalabraActual = "";
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
			case "Numero" :
				if (_BuscarDelimitadorJavaScript($Texto[$i]) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual."</span>";
					$PalabraActual = $Texto[$i];
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
		}
	}
	// Si se ha quedado algun estado abierto, cerramos su span 
	// (los comentarios pueden quedar abiertos si se encuentran en la ultima linea)
	if ($Estado != "") $PalabraActual.= "</span>";
	// Pasamos la ultima palabra al array de palabras
	$Palabras[$TotalPalabras ++] = $PalabraActual;
	// Post analisis para el array de palabras separadas
	for ($i = 0; $i < $TotalPalabras; $i++) {
		if ($Palabras[$i][0] != '<') { // Si tiene '<' es el principio de un span por lo que no se debe tocar
			foreach ($_DiccionarioJavaScript as $Palabra) {				
				$PosPalabra = strpos($Palabras[$i], $Palabra['Palabra']);
				// El operador !== también puede ser usado. 
				// Puesto que != no funcionará como se espera porque si la posición de la palabra es 0.
				// La declaración (0 != false) se evalúa a false.
				if ($PosPalabra !== false) { 
					$DelimitadorInicio = false;
					$DelimitadorFin = false;
					$TamPalabra = strlen($Palabra['Palabra']);
					// Miramos si el caracter anterior es un delimitador
					if ($PosPalabra == 0)
						$DelimitadorInicio = true;
					else
						$DelimitadorInicio = _BuscarDelimitadorJavaScript($Palabras[$i][$PosPalabra - 1]);
					// Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
					if ($PosPalabra + $TamPalabra == strlen($Palabras[$i])) 	
						$DelimitadorFin = true;
					else	
						$DelimitadorFin = _BuscarDelimitadorJavaScript($Palabras[$i][$PosPalabra + $TamPalabra]);
					// Si la palabra esta bien delimitada la coloreamos
					if ($DelimitadorInicio == true && $DelimitadorFin == true) { 
						$Palabras[$i] = str_replace( $Palabra['Palabra'], 
						                             "<span class='".$Palabra['Color']."'>".$Palabra['Palabra']."</span>",
													 $Palabras[$i] );
						break; // Salimos del foreach para no colorear 2 veces la misma palabra
					}
				}
			}
		}
		$TextoColoreado .= $Palabras[$i];
	}
	// Imprime el array para depurar (hay que declarar la variable $_Debug y ponerla a true)
	if ($_Debug == true) { echo "<pre>"; print_r($Palabras); echo "</pre>"; }
	return $TextoColoreado."</span>";	
}

?>





<?php 
// PHP
// Array de los caracteres delimitadores para PHP
$_DelimitadoresPHP = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", "@", "	", "\n", "\r");
// Array con el diccionario de palabras y su color pertinente para PHP
$_DiccionarioPHP = array(   array("Palabra" => "if"                    , "Color" => "Codigo_Verde"),
                            array("Palabra" => "else"                  , "Color" => "Codigo_Verde"),
                            array("Palabra" => "for"                   , "Color" => "Codigo_Verde"),
                            array("Palabra" => "foreach"               , "Color" => "Codigo_Verde"),
                            array("Palabra" => "as"                    , "Color" => "Codigo_Verde"),
                            array("Palabra" => "while"                 , "Color" => "Codigo_Verde"),
                            array("Palabra" => "array"                 , "Color" => "Codigo_Verde"),
                            array("Palabra" => "break"                 , "Color" => "Codigo_Verde"),
                            array("Palabra" => "class"                 , "Color" => "Codigo_Verde"),
                            array("Palabra" => "true"                  , "Color" => "Codigo_Verde"),
                            array("Palabra" => "false"                 , "Color" => "Codigo_Verde"),
                            array("Palabra" => "TRUE"                  , "Color" => "Codigo_Verde"),
                            array("Palabra" => "FALSE"                 , "Color" => "Codigo_Verde"),
                            array("Palabra" => "echo"                  , "Color" => "Codigo_Verde"),
                            array("Palabra" => "return"                , "Color" => "Codigo_Verde"),
                            array("Palabra" => "include"               , "Color" => "Codigo_Verde"),
                            array("Palabra" => "public"                , "Color" => "Codigo_Verde"),
                            array("Palabra" => "protected"             , "Color" => "Codigo_Verde"),
                            array("Palabra" => "private"               , "Color" => "Codigo_Verde"),
                            array("Palabra" => "new"                   , "Color" => "Codigo_Verde"),
                            array("Palabra" => "case"                  , "Color" => "Codigo_Verde"),
                            array("Palabra" => "switch"                , "Color" => "Codigo_Verde"),
                            array("Palabra" => "default"               , "Color" => "Codigo_Verde"),
                            array("Palabra" => "global"                , "Color" => "Codigo_Verde"),

                            array("Palabra" => "+"                     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "-"                     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "*"                     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "/"                     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "="                     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "{"                     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "}"                     , "Color" => "Codigo_Azul"),

                            array("Palabra" => "fread"                 , "Color" => "Codigo_Azul"),
                            array("Palabra" => "fopen"                 , "Color" => "Codigo_Azul"),
                            array("Palabra" => "fclose"                , "Color" => "Codigo_Azul"),
                            array("Palabra" => "strlen"                , "Color" => "Codigo_Azul"),
                            array("Palabra" => "substr"                , "Color" => "Codigo_Azul"),
                            array("Palabra" => "strpos"                , "Color" => "Codigo_Azul"),
                            array("Palabra" => "print_r"               , "Color" => "Codigo_Azul"),
                            array("Palabra" => "filesize"              , "Color" => "Codigo_Azul"),
                            array("Palabra" => "function"              , "Color" => "Codigo_Azul"),
                            array("Palabra" => "file_exists"           , "Color" => "Codigo_Azul"),
                            array("Palabra" => "mysql_error"           , "Color" => "Codigo_Azul"),
                            array("Palabra" => "str_replace"           , "Color" => "Codigo_Azul"),
                            array("Palabra" => "xml_parser_free"       , "Color" => "Codigo_Azul"),
                            array("Palabra" => "xml_parser_create"     , "Color" => "Codigo_Azul"),
                            array("Palabra" => "xml_parse_into_struct" , "Color" => "Codigo_Azul"),
							
                            array("Palabra" => "?&gt;"                    , "Color" => "Codigo_Rojo")
);

// Función que busca si el caracter es un delimitador de palabra PHP
// - $Caracter : Caracter que queremos compribar con la lista de delimitadores
function _BuscarDelimitadorPHP($Caracter) {
	global $_DelimitadoresPHP;
	foreach($_DelimitadoresPHP as $Delimitador) {
		if ($Caracter == $Delimitador) return true;
	}
	return false;
}


// Función que colorea el texto PHP especificado según el esquema de colores de Dreamweaver
// - $Texto : Texto PHP que queremos colorear
function PintarPHP($Texto) {
//	$_Debug = true;
	global $_DiccionarioPHP;
	$Texto = str_replace('	', '    ', $Texto); // Cambio tabulaciones por 4 espacios
	$Texto = str_replace('<', '&lt;', $Texto);  // Cambio el caracter '<' por '&lt;'			
	$Texto = str_replace('>', '&gt;', $Texto);  // Cambio el caracter '>' por '&gt;'	
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
				else if (_EsNumero($Texto[$i]) == true && _BuscarDelimitadorPHP($Texto[$i - 1])) {
					$Estado = "Numero";
					$Palabras[$TotalPalabras ++] = $PalabraActual;
					$PalabraActual = "<span class='Codigo_Rojo'>".$Texto[$i];
				}
				else { // Cualquier letra
					$PalabraActual .= $Texto[$i];
					if (_BuscarDelimitadorPHP($Texto[$i]) == true) {
						// Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
						// Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
						// De todas formas no estoy seguro si esto puede traer problemas
						if (_BuscarDelimitadorPHP($Texto[$i + 1]) != true) {
							$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
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
				if (_FinString2($Texto, $i) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
					$PalabraActual = "";
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
			// Estado : string de comillas simples
			case "String1" :
				if (_FinString1($Texto, $i) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual."'</span>";
					$PalabraActual = "";
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
			// Estado : en una variable 
			case "Variable" :
				if (_BuscarDelimitadorPHP($Texto[$i]) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual."</span>";
					$PalabraActual = "";
					$Estado = "";							
				}
				$PalabraActual .= $Texto[$i];
				break;
			// Estado : en un valor numérico
			case "Numero" :
				if (_BuscarDelimitadorPHP($Texto[$i]) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual."</span>";
					$PalabraActual = $Texto[$i];
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];
				break;
		}
	}
	// Si se ha quedado algun estado abierto, cerramos su span 
	// (los comentarios pueden quedar abiertos si se encuentran en la ultima linea)
	if ($Estado != "") $PalabraActual.= "</span>";
	// Pasamos la ultima palabra al array de palabras
	$Palabras[$TotalPalabras ++] = $PalabraActual;
	// Post-análisis del array de palabras
	for ($i = 0; $i < $TotalPalabras; $i++) {
		if ($Palabras[$i][0] != '<') { // Si tiene '<' es el principio de un span por lo que no se debe tocar
			foreach ($_DiccionarioPHP as $Palabra) {				
				$PosPalabra = strpos($Palabras[$i], $Palabra['Palabra']);
				// El operador !== también puede ser usado. 
				// Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. 
				// La declaración (0 != false) se evalúa a false.
				if ($PosPalabra !== false) { 
					$DelimitadorInicio = false;
					$DelimitadorFin = false;
					$TamPalabra = strlen($Palabra['Palabra']);
					// Miramos si el caracter anterior es un delimitador
					if ($PosPalabra == 0) 	
						$DelimitadorInicio = true;
					else
						$DelimitadorInicio = _BuscarDelimitadorPHP($Palabras[$i][$PosPalabra - 1]);
					// Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
					if ($PosPalabra + $TamPalabra == strlen($Palabras[$i])) 
						$DelimitadorFin = true;
					else
						$DelimitadorFin = _BuscarDelimitadorPHP($Palabras[$i][$PosPalabra + $TamPalabra]);
					// Si la palabra esta bien delimitada la coloreamos
					if ($DelimitadorInicio == true && $DelimitadorFin == true) { 
						$Palabras[$i] = str_replace( $Palabra['Palabra'], 
													 "<span class='".$Palabra['Color']."'>".$Palabra['Palabra']."</span>", 
													 $Palabras[$i] );
						break; // Salimos del foreach para no colorear 2 veces la misma palabra
					}
				}
			}
		}
		$TextoColoreado .= $Palabras[$i];
	}
	// Imprime el array para depurar
	if ($_Debug == true) { echo "PintarPHP<pre>"; print_r($Palabras); echo "</pre>"; }
	// Buscamos el inicio del código PHP que al ser con &lt;?php no es detectable por el algoritmo (<?php)
	$TextoColoreado = str_replace("&lt;?php", "<span class='Codigo_Rojo'>&lt;?php</span>", $TextoColoreado); 
	return $TextoColoreado."</span>";			
}
?>

<?php
// CSS
// Función que colorea el texto CSS especificado según el esquema de colores de Dreamweaver
// - $Texto : Texto CSS que queremos colorear
// NOTA : Esta función abarca tanto clases como ids ademas de sus estilos
//        Ideal para pintar una etiqueta style dentro de un codigo HTML
function PintarEstilosCSS($Texto) {
	// Empieza por rosa, y hasta que no se encuentre un '{' no se cierra el span, una vez se vuelva a encontrar '}' se vuelve a poner rosa
	$Texto = str_replace('	', '    ', $Texto); // Cambio tabulaciones por 4 espacios
	$Texto = str_replace('<', '&lt;', $Texto);  // Cambio el caracter '<' por '&lt;'			
	$Texto = str_replace('>', '&gt;', $Texto);  // Cambio el caracter '>' por '&gt;'	
	$TotalCaracteres = strlen($Texto);
	$TextoColoreado = "<span class='Codigo_Rosa'>";
	$Estado = "";
	$InicioEstiloCSS = 0;
	for ($i = 0; $i < $TotalCaracteres; $i++) {
		switch ($Estado) {
			case "" : // Sin estado
				if ($Texto[$i] == "{") {
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
					$TextoColoreado .= PintarEstiloCSS(substr($Texto, $InicioEstiloCSS, $i - $InicioEstiloCSS));
					$TextoColoreado .= "<span class='Codigo_Rosa'>}";
					$Estado = "";
				}
				break;
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
	if ($_Debug == true) echo "PintarEstilosCSS";
	$TextoColoreado .= "</span>";
	return $TextoColoreado;
}

// Función que colorea el texto CSS especificado según el esquema de colores de Dreamweaver
// - $Texto : Texto CSS que queremos colorear
// NOTA : Esta función esta diseñada para pintar los estilos de una unica clase o id, sin su nombre.
//        Ideal para pintar un atributo style dentro de un código HTML
function PintarEstiloCSS($Texto) {
	$Texto = str_replace('	', '    ', $Texto); // Cambio tabulaciones por 4 espacios
	$Texto = str_replace('<', '&lt;', $Texto);  // Cambio el caracter '<' por '&lt;'			
	$Texto = str_replace('>', '&gt;', $Texto);  // Cambio el caracter '>' por '&gt;'	
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
	if ($_Debug == true) echo "PintarEstiloCSS";
	if ($Texto[$i] != ";") $TextoColoreado .= "</span>";
	$TextoColoreado .= "</span>";
	return $TextoColoreado;
}
?>