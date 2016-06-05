<?php 
//    echo "devildrey33_Descargar\n";

    include("devildrey33_BD.php");
//    echo $_GET["Nombre"];

    $BD = new devildrey33_BD;
    if (isset($_GET["Nombre"])) {
        $PathDescarga = "/Apps/".$_GET["Nombre"];
        if (file_exists("../Apps/".$_GET["Nombre"])) {
//            echo "a";
            $BD->SumarDescarga($_GET["Nombre"]);            
//            header("Location: ".$PathDescarga);
        }
        else {
//            header("Location: 404");		
        }
        header("Location: ".$PathDescarga);
    }
    else {
        header("Location: 404");		
    }

?>