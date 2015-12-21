<?php
// -[INICIO devildrey33.LeerContenidoXML]-
function LeerContenidoXML($Archivo) {
    $ArchivoLista = fopen($Archivo, "r", true);
    $DatosArchivo = fread($ArchivoLista, filesize($Archivo));
    fclose($ArchivoLista);
    $Parser = xml_parser_create();
    xml_parse_into_struct($Parser, $DatosArchivo, $Valores, $Indices);
    xml_parser_free($Parser);
    return $Valores;
}
// -[FIN devildrey33.LeerContenidoXML]-

// -[INICIO devildrey33.MostrarDatosXML]-
function MostrarDatosXML() {
    $DatosXML = LeerContenidoXML("PHPyXML_Ejemplo.xml");
    foreach ($DatosXML as $Etiqueta) {
        // Se ha encontrado una Entrada
        if ($Etiqueta['tag'] == "ENTRADA" && $Etiqueta['type'] == "complete") {
            $Nombre = $Etiqueta['attributes']['NOMBRE'];
            $Dia = $Etiqueta['attributes']['DIA'];
            $Mes = $Etiqueta['attributes']['MES'];
            $Any = $Etiqueta['attributes']['ANY'];
            $Url = $Etiqueta['attributes']['URL'];
            echo "<a href='$Url'>$Nombre</a> creado el $Dia de $Mes del $Any<br />";
        }
        // Se ha encontrado el inicio de una Categoria
        if ($Etiqueta['tag'] == "CATEGORIA" && $Etiqueta['type'] == "open")
            echo "<ul>".$Etiqueta['attributes']['NOMBRE'];
        // Se ha encontrado el final de una Categoria
        if ($Etiqueta['tag'] == "CATEGORIA" && $Etiqueta['type'] == "close")
            echo "</ul>";
        // Se ha encontrado una Entrada de una Categoria
        if ($Etiqueta['tag'] == "ENTRADACATEGORIA" && $Etiqueta['type'] == "complete")
            echo "<li>".$Etiqueta['attributes']['NOMBRE']."</li>";
    }
}
// -[FIN devildrey33.MostrarDatosXML]-

?>
<html>
	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>
	
    <body>
    <?php MostrarDatosXML(); ?>
    <br /><br />
    <a href='PHPyXML.php'>Volver a devildrey33</a>.
	</body>    
</html>