<?php 
// -[INICIO devildrey33.PintarCSS]-
// Función que colorea el texto CSS especificado según el esquema de colores de Dreamweaver
// - $Texto : Texto CSS que queremos colorear
function PintarCSS($Texto) {
	$Texto = str_replace('	', '    ', $Texto); // Re-emplazo tabuladores
	$TotalCaracteres = strlen($Texto);
	$TextoColoreado = "<span class='Codigo_Rosa'>";
	$Estado = ""; // Puede ser : "String1", "String2" y "ComentarioML"
	$DentroEstilo = false;
	for ($i = 0; $i < $TotalCaracteres; $i++) {
		switch ($Estado) {
			case "" :
				if ($Texto[$i] == "{") {
					$TextoColoreado .= "{</span><span class='Codigo_AzulOscuro'>";
					$DentroEstilo = true;
				}
				else if ($Texto[$i] == "}") {
					$TextoColoreado .= "</span><span class='Codigo_Rosa'>}";
					$DentroEstilo = false;
				}
				else if ($Texto[$i] == "'") {
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
				else if ($Texto[$i] == ":" && $DentroEstilo == true) {
					$TextoColoreado .= "<span class='Codigo_Rosa'>:</span><span class='Codigo_Azul'>";
				}
				else if ($Texto[$i] == ";") {
					$TextoColoreado .= "</span><span class='Codigo_Rosa'>;</span>";
				}
				else {
					$TextoColoreado .= $Texto[$i];
				}
				break;
			case "String1" : 
				if ($Texto[$i] == "'") {
					$Estado = "";
					$TextoColoreado .= "'</span>";
				}
				else { $TextoColoreado.= $Texto[$i]; }
				break;
			case "String2" : 
				if ($Texto[$i] == '"') {
					$Estado = "";
					$TextoColoreado .= '"</span>';
				}
				else { $TextoColoreado.= $Texto[$i]; }
				break;
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
	$TextoColoreado .= "</span>";
	return $TextoColoreado;
}
// -[FIN devildrey33.PintarCSS]-
?>

<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>Ejemplo colorear CSS</title>
        <link href='ColorearCodigoPHP_CSS_Ejemplo.css' rel='stylesheet' type='text/css' />
	</head>
    <body>
    	<p>Ejemplo de código CSS pintado :</p>
	    <pre style="border-color:#000; border-width:1px; border-style:solid">
<?php echo PintarCSS('#NombreID {
    width:40px;
    height:40px;
    background-image:url("../Imagen.png");
}

/* Comentario */
#NombreID:hover {
    background-image:url("../ImagenH.png");
    cursor:pointer;
}
.NombreClase {
    cursor:pointer;
}'); ?>
    	</pre>
        <a href="/Blog/ColorearCodigoPHP_CSS">Volver a devildrey33</a>.
    </body>
</html>