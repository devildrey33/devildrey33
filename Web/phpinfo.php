<?php
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $HEAD = "";

    $Base->InicioPlantilla(basename(__FILE__), "Logs de acceso", $HEAD);

    if (devildrey33_Opciones::Administrador() > 0) {
        echo "<article class='Blog'>";
        phpinfo();
        echo "</article>";
    }
    else {
        echo "<script>\$Base.MostrarErrorAjax(404, true);</script>";
    }
    
    $Base->FinPlantilla(); 
?>