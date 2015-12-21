<?php 
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33_htaccess.php");
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33_Opciones.php");
    
    if (basename($_GET["CMD"], ".php") === "DesactivarMantenimiento") {
        $HT = new devildrey33_htaccess();
        $HT->Mantenimiento(FALSE);
        exit();
    }
?>

<!doctype HTML>
<html>
    <head></head>
    <body>
        <p>Web en mantenimiento, disculpa las molestias.</p>
        <?php if (devildrey33_Opciones::Administrador() === 1) echo "<p>Desactivar mantenimiento : <a href='/cmd/DesactivarMantenimiento'>/cmd/DesactivarMantenimiento</a>.</p>";  ?>
    </body>    
</html>
    
    