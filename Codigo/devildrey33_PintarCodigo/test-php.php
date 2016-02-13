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
            <h2>PHP</h2>
<!-- -[INICIO devildrey33.PHP]-
/* Comentario multilinea con alguna trampa "if" '\\' /* //
 */
function MiFuncion($Parametro = "NADA", $Valor = 0) {
    // Comentario hasta el final de la linea con alguna trampa /* "" { }
    $Texto = "Cadena de caracteres con comillas dobles y algunas trampas /* if \\";
    switch ($Texto) {
        case 33 :
            return false;
        case "Texto" :
            return true;
        case 'Texto' :
            return true;
        default :
            break;
    }
    echo substr($Texto, 0, 5);
}

class Objeto {
    public function e($Var){ echo $Var."e"; }
}
// También se puede resaltar una o varias líneas utilizando un enlace
 -[FIN devildrey33.PHP]- -->
            <?php $PintarCodigo->PintarArchivoPHP("PHP", "Test PHP", basename(__FILE__), "PHP"); ?>
            <p>eitqueta <code>&lt;linea&gt;</code> : Resaltado en el hover y posicionamiento al hacer click</p>
            <ul>
                <li><linea cid="PHP" l="20">Línea 20</linea></li>
                <li><linea cid="PHP" l="5">Línea 5</linea></li>
                <li><linea cid="PHP" l="9">Línea 9</linea></li>
                <li><linea cid="PHP" l="12">Línea 12</linea></li>
                <li><linea cid="PHP" l="15">Línea 15</linea></li>
                <li><linea cid="PHP" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
            </ul>
            <hr>
            <p>eitqueta <code>&lt;a&gt;</code> : Resaltado en el hover, al hacer click va al enlace como de costumbre.</p>            
            <ul>
                <li><a href='test-css.php'  cid='PHP' l='22'>test-css.php</a></li>
                <li><a href='test-html.php' cid='PHP' l='22'>test-html.php</a></li>
                <li><a href='test-js.php'   cid='PHP' l='22'>test-js.php</a></li>
                <li><a href='test-c.php'    cid='PHP' l='22'>test-c.php</a></li>
            </ul>
        </div>
    </body>
</html>




