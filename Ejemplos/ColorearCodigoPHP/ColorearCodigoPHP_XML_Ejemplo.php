<?php 
// -[INICIO devildrey33.PintarXML]-
// Función que colorea el texto XML especificado según el esquema de colores de Dreamweaver
// - $Texto : String con el texto XML a colorear.
function PintarXML($Texto) {
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
				// Etiqueta normal
				else if ($Texto[$i] == "<" && $Texto[$i + 1] != "!" && $Texto[$i + 2] != "-" && $Texto[$i + 3] != "-") { 
					$TextoColoreado .= '<span class="Codigo_AzulOscuro">&lt;';
				}
				// Comentario
				else if ($Texto[$i] == "<" && $Texto[$i + 1] == "!" && $Texto[$i + 2] == "-" && $Texto[$i + 3] == "-") { 
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
	return $TextoColoreado."</span>";
}
// -[FIN devildrey33.PintarXML]-
?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>Ejemplo colorear XML</title>
        <link href='ColorearCodigoPHP_XML_Ejemplo.css' rel='stylesheet' type='text/css' />
	</head>
    <body>
    	<p>Ejemplo de código XML pintado :</p>
	    <pre style="border-color:#000; border-width:1px; border-style:solid">
<?php echo PintarXML('<!-- Comentario -->
<Etiqueta Atributo="Cadena de caracteres">Conjunto de datos</Etiqueta>'); ?>
    	</pre>
        <a href="/Blog/ColorearCodigoPHP_XML">Volver a devildrey33</a>.
    </body>
</html>