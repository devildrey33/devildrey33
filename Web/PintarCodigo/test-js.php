<?php
include($_SERVER['DOCUMENT_ROOT'] . "/Web/devildrey33.php");
$Base = new devildrey33;

if (!isset($_POST["SinPlantilla"])) {
    $Base->InicioPlantilla(basename(__FILE__), "Test HTML", "");
}
?>

<!-- -[INICIO devildrey33.char]-
abc
-[FIN devildrey33.char]- --> 




<div style='padding:10px'>
    
    
   
    <h2>JS</h2>
<!-- -[INICIO devildrey33.JS]-
function NombreFuncion(Parametro) {
    // Comentario con trampas \' "" '' if return alert parseInt
    /* ComentarioML con trampas \" "" '' 
       if return alert parseInt */
    var MiCadena = "Cadena Caracteres con trampas \" '' if return alert parseInt";
    var MiNumero = 33;
    switch (Parametro) {
        case "Cosa" :
            return;
        case 'Cosa' :
            return;
        default : 
            break;
    }
    if (MiCadena == parseInt(MiNumero)) alert("Imposible!");
}
-[FIN devildrey33.JS]- -->    
    <?php $Base->PintarCodigo->PintarArchivoJavaScript("JS", "Test JS", basename(__FILE__), "JS"); ?>
    <ul>
        <li><linea cid="JS" l="1">Línea 1</linea></li>
        <li><linea cid="JS" l="5">Línea 5</linea></li>
        <li><linea cid="JS" l="9">Línea 9</linea></li>
        <li><linea cid="JS" l="12">Línea 12</linea></li>
        <li><linea cid="JS" l="15">Línea 15</linea></li>
        <li><linea cid="JS" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
    </ul>

        
</div>
<?php
if (!isset($_POST["SinPlantilla"]))
    $Base->FinPlantilla();
?>





