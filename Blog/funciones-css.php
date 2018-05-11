<?php    
    include("../Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="CSS Funciones">
    <meta name="keywords" content="CSS, CSS Funciones, CSS3, CSS3 Funciones">
    <meta name="robots" content="index, follow">';

    $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Funciones", $META);

    $Base->InicioDoc(basename(__FILE__), "Referéncia CSS : Funciones");
    
    include("../Web/CSS_BD.php");
    $CSSBD = new CSS_BD;

    

    $Documentadas = $CSSBD->MostrarPorGrupo(CSSTipo::Funcion);
    
    $Fecha = date("d/m/Y", filemtime("../Web/CSS_BD.php"));
    echo "<br /><postit>Funciones documentadas : <b>".$Documentadas["Documentadas"]."/".$Documentadas["Total"]."</b><br />Modificado por última vez : <i>".$Fecha."</i>.</postit>";
	

    $Base->FinBlog(FALSE);
    $Base->FinPlantilla(); 
?>
