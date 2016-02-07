<?php
    include("devildrey33_PintarCodigo.php");
    $PintarCodigo = new devildrey33_PintarCodigo;
?>


<!DOCTYPE HTML>
<html lang='es'>
    <head>
        <title>Test JS</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='stylesheet' href='PintarCodigo.css' />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="PintarCodigo.js"></script>
    </head>
    <body>
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
// También se puede resaltar una op varias líneas utilizando un enlace
-[FIN devildrey33.JS]- -->    
            <?php $PintarCodigo->PintarArchivoJavaScript("JS", "Test JS", basename(__FILE__), "JS"); ?>
            <p>eitqueta <code>&lt;linea&gt;</code> : Resaltado en el hover y posicionamiento al hacer click</p>
            <ul>
                <li><linea cid="JS" l="1">Línea 1</linea></li>
                <li><linea cid="JS" l="5">Línea 5</linea></li>
                <li><linea cid="JS" l="9">Línea 9</linea></li>
                <li><linea cid="JS" l="12">Línea 12</linea></li>
                <li><linea cid="JS" l="15">Línea 15</linea></li>
                <li><linea cid="JS" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
            </ul>
            <hr>
            <p>eitqueta <code>&lt;a&gt;</code> : Resaltado en el hover, al hacer click va al enlace como de costumbre.</p>            
            <ul>
                <li><a href='test-php.php'  cid='JS' l='17'>test-php.php</a></li>
                <li><a href='test-html.php' cid='JS' l='17'>test-html.php</a></li>
                <li><a href='test-css.php'  cid='JS' l='17'>test-css.php</a></li>
                <li><a href='test-c.php'    cid='JS' l='17'>test-c.php</a></li>
            </ul>
        </div>
    </body>
</html>

