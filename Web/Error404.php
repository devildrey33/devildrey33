<?php 
	include("devildrey33.php");
	$Base = new devildrey33;	
	
	$HEAD = "";
	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Error 404!", $HEAD);
        }
        
//        $Base->InicioBlog(basename(__FILE__), "Empezando con SQLite en C++");
?>	
    <script>$Base.MostrarErrorAjax(404, true);</script>
    
    
    
<?php
//    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>