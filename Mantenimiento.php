<?php 
//    include_once($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33_htaccess.php");
    include_once($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33_cmd.php");
    $Comando = basename($_GET["CMD"], ".php");
    if (strpos($_GET["CMD"], "cmd.php") !== false) {
        $cmd = new devildrey33_cmd($Comando);
        exit();
    }
/*    if (basename($_GET["CMD"], ".php") === "DesactivarMantenimiento") {
        devildrey33_htaccess::Mantenimiento(FALSE);
        exit();
    }*/
?>

<!doctype HTML>
<html>
    <head></head>
    <body>
        <p>Web en mantenimiento, disculpa las molestias.</p>
        <?php if (devildrey33_Opciones::Administrador() > 0) echo "<p>Desactivar mantenimiento : <a href='/cmd/DesactivarMantenimiento'>/cmd/DesactivarMantenimiento</a>.</p>";  ?>
    </body>    
</html>
    
    