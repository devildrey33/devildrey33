<?php 
	include("devildrey33.php");
	$Base = new devildrey33;	
	
	$HEAD = "";
	
        $Base->InicioPlantilla(basename(__FILE__), "Error 404!", $HEAD);
        
//        $Base->InicioBlog(basename(__FILE__), "Empezando con SQLite en C++");
?>	
    
    <div id="Error404"></div>

    <!-- para depuración es mejor cargar-lo estaticamente -->
    <script src='/Web/JS/Error404.js'></script>
<!--    <script>
        $Base.CargarJS("Error404.js");
    </script> -->
    
<?php
//    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>