<?php
    include("devildrey33_PintarCodigo.php");
    $PintarCodigo = new devildrey33_PintarCodigo;
?>


<!DOCTYPE HTML>
<html lang='es'>
    <head>
        <title>Test HTML</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='stylesheet' href='PintarCodigo.css' />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="PintarCodigo.js"></script>
    </head>
    <body>
        <div style='padding:10px'>
            <h2>HTML</h2>
            <?php 
/* -[INICIO devildrey33.HTML]-
<!DOCTYPE HTML>
<html>
    <head>        
        <title>Ejemplo colorear HTML</title>
        <link href='ColorearCodigoPHP_HTML_Ejemplo.css' rel='stylesheet' type='text/css' />
        <!-- Código CSS -->
        <style>.MiEstilo { margin-left:auto; margin-right:auto; }</style>
        <style>
            .MiEstilo { 
               margin-left:auto; 
               margin-right:auto 
            };
        </style>
        <!-- Código JavaScript -->
        <script>function MiFuncion(variable) { alert(variable); }</script>
        <script>
            function MiFuncion(variable) { 
                alert(variable); // Comentario
            }
        </script>
    </head>
    <body> 
        <?php $MiVariable = true; ?> 
        <?php 
            function MiFuncion($Var, $Var2 = "string") {
                return $Var2." ".($Var * 10);
            }
        ?>
    </body>
</html>
 <!-- También se puede resaltar una o varias líneas utilizando un enlace -->
-[FIN devildrey33.HTML]- */    
                $PintarCodigo->PintarArchivoHTML("HTML", "Test HTML", basename(__FILE__), "HTML"); 
            ?>
            <p>eitqueta <code>&lt;linea&gt;</code> : Resaltado en el hover y posicionamiento al hacer click</p>
            <ul>
                <li><linea cid="HTML" l="6">Línea 6</linea></li>
                <li><linea cid="HTML" l="17">Línea 17</linea></li>
                <li><linea cid="HTML" l="22">Línea 22</linea></li>
                <li><linea cid="HTML" l="24">Línea 24</linea></li>
                <li><linea cid="HTML" l="29">Línea 29</linea></li>
                <li><linea cid="HTML" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
            </ul>
            <hr>
            <p>eitqueta <code>&lt;a&gt;</code> : Resaltado en el hover, al hacer click va al enlace como de costumbre.</p>            
            <ul>
                <li><a href='test-php.php' cid='HTML' l='31'>test-php.php</a></li>
                <li><a href='test-css.php' cid='HTML' l='31'>test-css.php</a></li>
                <li><a href='test-js.php'  cid='HTML' l='31'>test-js.php</a></li>
                <li><a href='test-c.php'   cid='HTML' l='31'>test-c.php</a></li>
            </ul>
        </div>
    </body>
</html>