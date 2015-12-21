<?php

// Archivo que contiene el codigo para pintar CSS JavaScript y CSS segun los ejemplos anteriores
include "ColorearCodigoPHP_HTML_EjemplosAnteriores.php";

// -[INICIO devildrey33.arrays]-
// Array de los caracteres delimitadores para etiquetas HTML
$_DelimitadoresHTML = array(" ", "/", ">", "<");
// Array con el diccionario de palabras y su color pertinente para PHP
$_DiccionarioHTML = array(  array("Palabra" => "table"  , "Color" => "Codigo_VerdeClaro"),
							array("Palabra" => "tr"     , "Color" => "Codigo_VerdeClaro"),
							array("Palabra" => "td"     , "Color" => "Codigo_VerdeClaro"),

							array("Palabra" => "img"    , "Color" => "Codigo_Lila"),

							array("Palabra" => "a"      , "Color" => "Codigo_Verde")
						  );
// -[FIN devildrey33.arrays]-


// Función privada que busca si dentro del texto introducido hay una etiqueta del _DiccionarioHTML
// - $Texto : Texto en el que se buscara la etiqueta
// NOTA devuelve el color que deberia tener esa etiqueta, en caso de no estar en el diccionario devuelve Codigo_AzulOscuro
function _BuscarEtiqueta($Texto) {
	global $_DiccionarioHTML;
	foreach ($_DiccionarioHTML as $Palabra) {				
		$PosPalabra = strpos($Texto, $Palabra['Palabra']);
		if ($PosPalabra !== false) { // El operador !== también puede ser usado. Puesto que != no funcionará como se espera porque si la posición de la palabra es 0. La declaración (0 != false) se evalúa a false.
			$DelimitadorInicio = false;
			$DelimitadorFin = false;
			$TamPalabra = strlen($Palabra['Palabra']);
			// Miramos si el caracter anterior es un delimitador
			if ($PosPalabra == 0) 	$DelimitadorInicio = true;
			else					$DelimitadorInicio = _BuscarDelimitadorHTML($Texto[$PosPalabra - 1]);
			// Miramos si el caracter inmediatamente siguiente a la palabra es un delimitador
			if ($PosPalabra + $TamPalabra == strlen($Texto)) 	$DelimitadorFin = true;
			else												$DelimitadorFin = _BuscarDelimitadorHTML($Texto[$PosPalabra + $TamPalabra]);
			// Si la palabra esta bien delimitada la coloreamos
			if ($DelimitadorInicio == true && $DelimitadorFin == true) return $Palabra['Color'];
		}
	}
	return "Codigo_AzulOscuro";
}

// Función privada que busca si el caracter es un delimitador de palabra PHP
// - $Caracter : Caracter que queremos compribar con la lista de delimitadores
function _BuscarDelimitadorHTML($Caracter) {
	global $_DelimitadoresHTML;
	foreach($_DelimitadoresHTML as $Delimitador) {
		if ($Caracter == $Delimitador) return true;
	}
	return false;
}



// -[INICIO devildrey33.PintarHTML1]-
// Función que colorea el texto HTML especificado según el esquema de colores de Dreamweaver
// - $Texto : String con el texto HTML a colorear.
function PintarHTML($Texto) {
	$_Debug = false;
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
						$i += 4;
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
// -[FIN devildrey33.PintarHTML1]-
// -[INICIO devildrey33.PintarHTML2]-
			// Estado : String con comillas simples dentro de una etiqueta
			case "Etiqueta_Str1" :
				if (_FinString1($Texto, $i) == true) {
					$PalabraActual .= "'</span>";
					$Estado = "Etiqueta"; 
				}
				else $PalabraActual .= $Texto[$i];
				break;
			// Estado : String con comillas dobles dentro de una etiqueta
			case "Etiqueta_Str2" :
				if (_FinString2($Texto, $i) == true) {
					$PalabraActual .= '"</span>';
					$Estado = "Etiqueta"; 
				}
				else $PalabraActual .= $Texto[$i];
				break;
			// Estado : dentro de una etiqueta
			case "Etiqueta" : 
				if ($Texto[$i] == ">") { // Final de la etiqueta
					$Color = _BuscarEtiqueta(substr($Texto, $InicioEtiqueta, $i - $InicioEtiqueta));
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
						if ($Texto[$i] == "'")      $Estado = "Estilo_Str1";
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
				if (_FinString1($Texto, $i) == true) {
					$PalabraActual .= PintarEstiloCSS(substr($Texto, $InicioEstilo, $i - $InicioEstilo))."'</span>";
					$Estado = "Etiqueta";
				}
				break;
			// Estado : inicio del atributo style encapsulado por comillas dobles
			case "Estilo_Str2" :
				if (_FinString2($Texto, $i) == true) {
					$PalabraActual .= PintarEstiloCSS(substr($Texto, $InicioEstilo, $i - $InicioEstilo)).'"</span>';
					$Estado = "Etiqueta";
				}
				break;
// -[FIN devildrey33.PintarHTML2]-
// -[INICIO devildrey33.PintarHTML3]-
			// Estado : inicio de un texto de un atributo dentro de una etiqueta script con comillas simples
			case "JavaScript_Str1" :
				if (_FinString1($Texto, $i) == true) {
					$PalabraActual .= "'</span>";
					$Estado = "JavaScript_Inicio"; 
				}
				else $PalabraActual .= $Texto[$i];
				break;
			// Estado : inicio de un texto de un atributo dentro de una etiqueta script con comillas dobles
			case "JavaScript_Str2" :
				if (_FinString2($Texto, $i) == true) {
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
					if (strlen($PalabraActual) > 1) $TextoColoreado .= PintarJavaScript($PalabraActual);
					else                            $TextoColoreado .= $PalabraActual;
					$TextoColoreado .= "<span class='Codigo_Marron'>&lt;/script&gt;</span>";
					$PalabraActual = "";
					$Estado = "";
					$i += 8;
				}
				else $PalabraActual .= $Texto[$i];						
				break;
// -[FIN devildrey33.PintarHTML3]-
// -[INICIO devildrey33.PintarHTML4]-
			// Estado : string dentro de una etiqueta style con comillas simples
			case "CSS_Str1" :
				if (_FinString1($Texto, $i) == true) {
					$PalabraActual .= "'</span>";
					$Estado = "CSS_Inicio"; 
				}
				else $PalabraActual .= $Texto[$i];
				break;
			// Estado : string dentro de una etiqueta style con comillas dobles
			case "CSS_Str2" :
				if (_FinString2($Texto, $i) == true) {
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
					$TextoColoreado .= PintarEstilosCSS($PalabraActual);
					$TextoColoreado .= "<span class='Codigo_Lila'>&lt;/style&gt;</span>";
					$PalabraActual = "";
					$Estado = "";
					$i += 8;
				}
				else $PalabraActual .= $Texto[$i];						
				break;
// -[FIN devildrey33.PintarHTML4]-
// -[INICIO devildrey33.PintarHTML5]-
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
			// Estado : dentro de un código php					
			case "PHP" : 
				if ($Texto[$i] == ">" && $Texto[$i - 1] == "?") {
					$TextoColoreado .= PintarPHP($PalabraActual.">");
					$PalabraActual = "";
					$Estado = ""; 
				}
				else $PalabraActual .= $Texto[$i];
				break;						
		}
	}
	$TextoColoreado .= $PalabraActual;
	if ($_Debug == true) { echo "PintarHML<pre>"; print_r($Etiquetas); echo "</pre>"; }
	return $TextoColoreado;
}
// -[FIN devildrey33.PintarHTML5]-
		
?>

<!--[INICIO devildrey33.EjemploHTML]-->
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>Ejemplo colorear HTML</title>
		<link href='ColorearCodigoPHP_HTML_Ejemplo.css' rel='stylesheet' type='text/css' />
    	<!-- Código JavaScript -->
        <script type="text/javascript">
			// JavaScript : MiFuncion
			function MiFuncion(Parametro) {
				alert(MiParametro + 10);
			}
		</script>
    	<!-- Código CSS -->
        <style>
			/* CSS MiEstilo */
			.MiEstilo { margin-left:auto; margin-right:auto };
		</style>
	</head>
    <body>
        <table><tr>
            <td><pre style="border-color:#000; border-width:1px; border-style:solid">
	    	<!-- Código PHP -->
            <?php 
// PHP : Imprimimos en el documento HTML
echo PintarHTML("
<html>
	<head>
		<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
    	<title>Ejemplo colorear HTML</title>
    	<!-- Código JavaScript -->
        <script type='text/javascript'>
			// JavaScript : MiFuncion
			function MiFuncion(Parametro) {
				alert(MiParametro + 10);
			}
        </script>
        <!-- Código CSS -->
        <style>
			/* CSS MiEstilo */
			.MiEstilo { margin-left:auto; margin-right:auto };
		</style>
	</head>
    <body>
        <a href='ColorearCodigoPHP_HTML.php'>Volver a devildrey33</a>.
    </body>
</html>"); ?>
	    	</pre></td>
        </tr></table>
        <a href="http://www.devildrey33.es/ColorearCodigoPHP_HTML.php">
        	Volver a devildrey33
        </a>.
    </body>
</html>
<!--[FIN devildrey33.EjemploHTML]-->
