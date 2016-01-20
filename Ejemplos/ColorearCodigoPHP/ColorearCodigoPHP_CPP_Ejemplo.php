<?php
// -[INICIO devildrey33.arrays]-
// Array de los caracteres delimitadores para C/C++
$_DelimitadoresC = array(" ", "(", ")", "[", "]", "+", "-", "/", "*", "=", "!", ",", ".", ";", ":", "\n", "\r", "&");
// Array con el diccionario de palabras y su color pertinente para C/C++
$_DiccionarioC   = array( array("Palabra" => "reinterpret_cast" , "Color" => "Codigo_Azul"),
                          array("Palabra" => "dynamic_cast"     , "Color" => "Codigo_Azul"),
                          array("Palabra" => "static_cast"      , "Color" => "Codigo_Azul"),
                          array("Palabra" => "const_cast"       , "Color" => "Codigo_Azul"),
                          array("Palabra" => "namespace"        , "Color" => "Codigo_Azul"),
                          array("Palabra" => "protected"        , "Color" => "Codigo_Azul"),
                          array("Palabra" => "operator"         , "Color" => "Codigo_Azul"),
                          array("Palabra" => "template"         , "Color" => "Codigo_Azul"),
                          array("Palabra" => "typename"         , "Color" => "Codigo_Azul"),
                          array("Palabra" => "unsigned"         , "Color" => "Codigo_Azul"),
                          array("Palabra" => "typedef"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "defined"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "virtual"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "default"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "private"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "comment"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "wchar_t"          , "Color" => "Codigo_Azul"),
                          array("Palabra" => "delete"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "public"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "inline"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "return"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "static"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "sizeof"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "signed"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "struct"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "friend"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "switch"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "double"           , "Color" => "Codigo_Azul"),
                          array("Palabra" => "class"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "break"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "const"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "short"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "while"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "false"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "float"            , "Color" => "Codigo_Azul"),
                          array("Palabra" => "bool"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "case"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "true"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "void"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "enum"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "else"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "char"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "long"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "this"             , "Color" => "Codigo_Azul"),
                          array("Palabra" => "for"              , "Color" => "Codigo_Azul"),
                          array("Palabra" => "new"              , "Color" => "Codigo_Azul"),
                          array("Palabra" => "int"              , "Color" => "Codigo_Azul"),
                          array("Palabra" => "do"               , "Color" => "Codigo_Azul"),
                          array("Palabra" => "if"               , "Color" => "Codigo_Azul")
				         );
// -[FIN devildrey33.arrays]-


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
// Función que busca si el caracter es un delimitador de palabra C
// - $Caracter : Caracter que queremos compribar con la lista de delimitadores
function _BuscarDelimitadorC($Caracter) {
	global $_DelimitadoresC;
	foreach($_DelimitadoresC as $Delimitador) {
		if ($Caracter == $Delimitador) return true;
	}
	return false;
}

// -[INICIO devildrey33.PintarC1]-
// Función que colorea el texto C/Cpp especificado según el esquema de colores de VisualStudio
// - $Texto : Texto C/Cpp que queremos colorear
function PintarC($Texto) {
	global $_DiccionarioC;
	$Texto = str_replace('	', '    ', $Texto); // Cambio tabulaciones por 4 espacios
	$Texto = str_replace('<', '&lt;', $Texto);  // Cambio el caracter '<' por '&lt;'			
	$Texto = str_replace('>', '&gt;', $Texto);  // Cambio el caracter '>' por '&gt;'	
	
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
				else if($Texto[$i] == "#" && $Texto[$i + 1] != "#" && $Texto[$i - 1] != "#") {
					$Estado = "Directiva";
					$Palabras[$TotalPalabras ++] = $PalabraActual;
					$PalabraActual = "<span class='Codigo_Azul'>#";
				}
				else { // Cualquier letra
					$PalabraActual .= $Texto[$i];
					if (_BuscarDelimitadorC($Texto[$i]) == true) {
						// Para no gripar el array de palabras miramos que el siguiente caracter no sea un delimitador 
						// Si no lo hacemos, creara un espacio en el array para cada delimitador, incluidos los caracteres ' '
						// De todas formas no estoy seguro si esto puede traer problemas
						if (_BuscarDelimitadorC($Texto[$i + 1]) != true) {
							$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
						}
					}
				}
				break;
// -[FIN devildrey33.PintarC1]-
// -[INICIO devildrey33.PintarC2]-
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
				if (_FinString2($Texto, $i) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
					$PalabraActual = "";
					$Estado = "";
				}
				else $PalabraActual .= $Texto[$i];	
				break;
			// Estado : dentro de un string con comillas simples
			case "String1" :
				if (_FinString1($Texto, $i) == true) {
					$Palabras[$TotalPalabras ++] = $PalabraActual.'"</span>';
					$PalabraActual = "";
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
// -[FIN devildrey33.PintarC2]-
// -[INICIO devildrey33.PintarC3]-
	for ($i = 0; $i < $TotalPalabras; $i++) {
		if ($Palabras[$i][0] != '<') { // Si tiene '<' es el principio de un span por lo que no se debe tocar
			foreach ($_DiccionarioC as $Palabra) {				
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
						$DelimitadorInicio = _BuscarDelimitadorC($Palabras[$i][$PosPalabra - 1]);
					// Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
					if ($PosPalabra + $TamPalabra == strlen($Palabras[$i]))
					 	$DelimitadorFin = true;
					else
						$DelimitadorFin = _BuscarDelimitadorC($Palabras[$i][$PosPalabra + $TamPalabra]);
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
	if ($_Debug == true) { echo "PintarC<pre>"; print_r($Palabras); echo "</pre>"; }
	return $TextoColoreado."</span>";			
}
// -[FIN devildrey33.PintarC3]-
?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>Ejemplo colorear C/C++</title>
<style>
/* -[INICIO devildrey33.ColoresCSS]- */
.Codigo_Rojo  { font-family:Courier New; font-size:12px; color:#CC0000; }
.Codigo_Verde { font-family:Courier New; font-size:12px; color:#006600; }
.Codigo_Negro { font-family:Courier New; font-size:12px; color:#000000; }
.Codigo_Azul  { font-family:Courier New; font-size:12px; color:#0000FF; }
/* -[FIN devildrey33.ColoresCSS]- */
</style>

	</head>
    <body>
    	<p>Ejemplo de código C/C++ coloreado :</p>
	    <pre style="border-color:#000; border-width:1px; border-style:solid">
<?php echo PintarC('#ifndef EJEMPLO_H     // Si no esta definido EJEMPLO_H
    #define EJEMPLO_H /* definimos EJEMPLO_H */

    #include <Cabcerea1.h>
    #include "Cabecera2.h" // Comentario hasta el final de la linea


    /* Comentario multilinea antes de la plantilla
       algunas trampas "String\" if else endif */
    template <typename T> class ClaseHija : public ClasePadre {
      public:
                    ClaseHija(void);
        const T     Funcion(int ValorEntero, wchar_t Caracter);
    }

#endif'); 
?>
    	</pre>
        <a href="/Blog/ColorearCodigoPHP_CPP">Volver a devildrey33</a>.
    </body>
</html>