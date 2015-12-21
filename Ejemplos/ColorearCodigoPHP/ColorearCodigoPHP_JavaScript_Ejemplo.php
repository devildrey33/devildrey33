
<?php 
// -[INICIO devildrey33.arrays]-
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
// -[FIN devildrey33.arrays]-


// -[INICIO devildrey33.FinString]-
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

// -[FIN devildrey33.FinString]-


// -[INICIO devildrey33.EsNumero]-
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
// -[FIN devildrey33.EsNumero]-


// -[INICIO devildrey33.PintarJavaScript1]-
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
// -[FIN devildrey33.PintarJavaScript1]-
// -[INICIO devildrey33.PintarJavaScript2]-	
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
// -[FIN devildrey33.PintarJavaScript2]-	

?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>Ejemplo colorear JavaScript</title>
        
<script type='text/javascript'>
// -[INICIO devildrey33.EjemploJavaScript]-
function NombreFuncion(Parametro) {
	// Comentario con trampas \' "" '' if return alert parseInt
	/* ComentarioML con trampas \" "" '' 
	   if return alert parseInt */
	var MiCadena = "Cadena Caracteres con trampas \" '' if return alert parseInt";
	var MiNumero = 33;
	switch (Parametro) {
		case "Cosa" :
			return;
		default : 
			break;
	}
	if (MiCadena == parseInt(MiNumero)) alert("Imposible!");
}
// -[FIN devildrey33.EjemploJavaScript]-
</script> 

<style>
/* -[INICIO devildrey33.CSS]- */
.Codigo_Gris       { font-family:Courier New; font-size:12px; color:rgb(128, 128, 128); }
.Codigo_Lila       { font-family:Courier New; font-size:12px; color:rgb(153, 0, 153);   }
.Codigo_Azul       { font-family:Courier New; font-size:12px; color:#0000FF;            }
.Codigo_AzulOscuro { font-family:Courier New; font-size:12px; color:#009;               }
.Codigo_VerdeClaro { font-family:Courier New; font-size:12px; color:rgb(0, 153, 153);   }
.Codigo_Rojo       { font-family:Courier New; font-size:12px; color:#CC0000;            }
/* -[FIN devildrey33.CSS]- */
</style>

		</head>
    <body>
    	<p>Ejemplo de código JavaScript pintado :</p>
	    <pre style="border-color:#000; border-width:1px; border-style:solid">
<?php echo PintarJavaScript("function NombreFuncion(Parametro) {
	// Comentario con trampas \' \"\" '' if return alert parseInt
	/* ComentarioML con trampas \" \"\" '' 
	   if return alert parseInt */
	var MiCadena = 'Cadena Caracteres con trampas \" \'\' if return alert parseInt';
	var MiNumero = 33;
	switch (Parametro) {
		case 'Cosa' :
			return;
		default : 
			break;
	}
	if (MiCadena == parseInt(MiNumero)) alert('Imposible!');
}");
?>
    	</pre>
        <a href="http://www.devildrey33.es/ColorearCodigoPHP_JavaScript.php">Volver a devildrey33</a>.
    </body>
</html>