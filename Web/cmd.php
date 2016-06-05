<?php
    include("devildrey33_cmd.php");
    
    if (isset($_GET["cmd"]))    $Comando = substr($_GET["cmd"], 0, strlen($_GET["cmd"]) -4);
    else                        $Comando = "";
    
    $cmd = new devildrey33_cmd($Comando);
?>