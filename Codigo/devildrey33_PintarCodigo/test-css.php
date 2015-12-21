<?php
    include("devildrey33_PintarCodigo.php");
    $PintarCodigo = new devildrey33_PintarCodigo;
?>


<!DOCTYPE HTML>
<html lang='es'>
    <head>
        <title>Test CSS</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='stylesheet' href='PintarCodigo.css' />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="PintarCodigo.js"></script>
    </head>
    <body>
        <div style='padding:10px'>
            <h2>CSS</h2>
<!-- -[INICIO devildrey33.CSS]-
#NombreID {
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
}
div {
    display:inline-table !important;
}
@media screen and (max-height: 550px) {
    #Logo           {    left:-200px;     }
    .AnimacionLogo  {    display:block;   }
    a               {    display:block;   }
}
 -[FIN devildrey33.CSS]- -->    
            <?php $PintarCodigo->PintarArchivoCSS("CSS", "Test CSS", basename(__FILE__), "CSS"); ?>
            <ul>
                <li><linea cid="CSS" l="21">Línea 21</linea></li>
                <li><linea cid="CSS" l="5">Línea 5</linea></li>
                <li><linea cid="CSS" l="9">Línea 9</linea></li>
                <li><linea cid="CSS" l="12">Línea 12</linea></li>
                <li><linea cid="CSS" l="14">Línea 14</linea></li>
                <li><linea cid="CSS" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
            </ul>
        </div>
    </body>
</html>




