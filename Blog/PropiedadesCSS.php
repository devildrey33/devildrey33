<?php 
/*	include("devildrey33.php");
	// Se muestra desde PropiedadesCSS.php (por defecto)
	$PathRelativo = ".";
	// Se muestra desde el directorio PropiedadCSS como si fuera el indice
	if (isset($_GET["SD"])) {
		if ($_GET["SD"] == "true") $PathRelativo = "..";
	}

	$MostrarGrupos = true;
	if (isset($_GET["Mostrar"])) {
		if ($_GET["Mostrar"] == "Alf") $MostrarGrupos = false;
	}
	
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$HEAD = "<link href='/css/PropiedadesCSS.css' rel='stylesheet' type='text/css' />
	<meta name='robots' content='index, follow'>";
        
	$Base->InicioPlantilla("Referencia CSS : Propiedades" , $HEAD, '<a href="/Doc/">Doc</a>/<a href="/Doc/CSS/">CSS</a>/Propiedades');*/
	

        
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="CSS Propiedades">
    <meta name="keywords" content="CSS, CSS3, CSS3 Propiedades">
    <meta name="robots" content="index, follow">';

    if (!isset($_POST["SinPlantilla"])) {
        $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Propiedades", $META);
    }

    $Base->InicioBlog(basename(__FILE__), "Referéncia CSS : Propiedades");
        
        
	include("../Web/CSS_BD.php");
	$Propiedades = new CSS_BD;

	echo '
			<!-- INTRODUCCION -->
			<img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Propiedades CSS" />
			<p>El corazón que hace funcionar el CSS son sin duda sus propiedades, las cuales nos permiten modificar tanto el comportamiento como el aspecto gráfico de cualquier etiqueta.</p>
			<p>A partir de CSS3 la lista de propiedades ha crecido de forma significativa, y aunque no hay ningún navegador que las soporte todas, la mayoría de navegadores actuales empiezan a soportar una gran cantidad de ellas.</p>
			<p>Es posible que esta lista no abarque todas las propiedades existentes, ya que a día de hoy aun se siguen añadiendo nuevas propiedades, por lo que voy a intentar mantener la lista actualizada, y tener cada propiedad que funcione en algún navegador documentada y con algún ejemplo.</p>
			<!-- FIN_INTRODUCCION -->
			<div class="nota"> Las propiedades tachadas no están soportadas en ningún navegador.</div>
			';
	
/*	if ($MostrarGrupos == true) {
		echo '<div class="Centrado">
			<a class="devildrey33_BotonDesactivado" style="margin-right:10px">Mostrar propiedades por grupo</a>
			<a class="devildrey33_Boton" href="'.$Base->Raiz.'/PropiedadesCSS.php?Mostrar=Alf">Mostrar propiedades por orden alfabético</a>		
		</div>';
	}
	else {
		echo '<div class="Centrado">
			<a class="devildrey33_Boton" style="margin-right:10px" href="'.$Base->Raiz.'/PropiedadesCSS.php">Mostrar propiedades por grupos</a>
			<a class="devildrey33_BotonDesactivado">Mostrar propiedades por orden alfabetico</a>		
		</div><br />';
	}*/
	$Documentadas = $Propiedades->MostrarPorGrupo(CSSTipo::Propiedad);
	/*
	if ($MostrarGrupos == true) $Documentadas = $Propiedades->MostrarPorGrupo(CSSTipo::Propiedad);
	else						$Documentadas = $Propiedades->MostrarPropiedadesPorOrdenAlfabetico();*/
	$Fecha = date("d/m/Y", filemtime("../Web/CSS_BD.php"));
	echo "<br /><postit>Propiedades documentadas : <b>".$Documentadas["Documentadas"]."/".$Documentadas["Total"]."</b><br />Modificado por última vez : <i>".$Fecha."</i>.</postit>";
	

    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>


	
