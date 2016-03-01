<?php 
    $Categoria = "Todo";
    if (isset($_GET["Categoria"])) { 
        $Categoria = $_GET["Categoria"];         
    }
    // No se exactament perque pero $Categoria sempre ve amb un .php final, jo diria que es alguna cosa amb lo de treure les extensions php
    $Categoria = str_replace(".php", "", $Categoria);
    // Traductor de categorias viejas al nuevo nombre (para enlaces antiguos del google)
    switch ($Categoria) {
        case "C/Cpp" 		: $Categoria = "C y C++"; 	break;
        case "C-C  " 		: $Categoria = "C y C++"; 	break;
        case "C-y-C  " 		: $Categoria = "C y C++"; 	break;
        case "C%20y%20C++" 	: $Categoria = "C y C++"; 	break;
        case "Tutoriales" 	: $Categoria = "Todo"; 		break;
    }
    $Categoria = str_replace("-", " ", $Categoria);

    
    include("GenerarIndice.php");
        
    $Base = new devildrey33;
    
    /* Regenerar el indice sin cargar nada mas */
    if (isset($_GET["Regenerar"])) {
        echo Indice::GenerarIndice($Base->BD, $Categoria);
        exit;
    }
    
    
    if (!isset($_POST["SinPlantilla"])) {
        $Base->InicioPlantilla(basename(__FILE__), "devildrey33", "");    
    }
    $Base->BD = new devildrey33_BD();
    echo Indice::GenerarIndice($Base->BD, $Categoria, 0);

    if (isset($_GET["Loguear"])) { 
        echo "<script>".
                "$('#VentanaLogin').attr({ 'Visible' : 'true' });".
                "setTimeout(function() { $('#devildrey33_Usuario').focus(); }, 200);".
            "</script>";
    }
    
    
    if (!isset($_POST["SinPlantilla"])) {
        $Base->FinPlantilla(); 
    }
?>