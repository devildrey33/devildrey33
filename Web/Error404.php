<?php 
	include("devildrey33.php");
	$Base = new devildrey33;	
	
	$HEAD = "";
	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Error 404!", $HEAD);
        }
        
//        $Base->InicioBlog(basename(__FILE__), "Empezando con SQLite en C++");
?>	
    
    <div id="Error404"></div>

    <script>
        $Base.CargarJS("Error404.js");
    </script>
    
<?php
//    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>