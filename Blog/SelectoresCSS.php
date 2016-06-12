<?php 


    include("../Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="Referencia selectores css, Ejemplos selectores css">
<meta name="keywords" content="CSS, Selectores CSS, :link, :visited, :active, :hover, :focus, :first-letter, :fisrt-child, :before, :after, :lang, :first-of-type, :last-of-type, :only-of-type, :only-child, :nth-child, :nth-last-child, :nth-pf-type, :nth-last-of-type, :last-child, :root, :empty, :target, :enabled, :disabled, :checked, :not, ::selection">
<meta name="robots" content="index, follow">';

    $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Selectores", $META);

    $Base->InicioBlog(basename(__FILE__), "Referéncia CSS : Selectores");

/*
	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$DeclaracionesHeadExtras = '
        <meta name="description" content="Referencia selectores css, Ejemplos selectores css">
		<meta name="keywords" content="CSS, Selectores CSS, :link, :visited, :active, :hover, :focus, :first-letter, :fisrt-child, :before, :after, :lang, :first-of-type, :last-of-type, :only-of-type, :only-child, :nth-child, :nth-last-child, :nth-pf-type, :nth-last-of-type, :last-child, :root, :empty, :target, :enabled, :disabled, :checked, :not, ::selection">
		<meta name="robots" content="index, follow">
        <link href="/css/PropiedadesCSS.css" rel="stylesheet" type="text/css" />';
	
	$Base->InicioPlantilla("Referéncia CSS : Reglas", $DeclaracionesHeadExtras, '<a href="/Doc/">Doc</a>/<a href="/Doc/CSS/">CSS</a>/Selectores');*/
	
	include("../Web/CSS_BD.php");
	$Selectores = new CSS_BD;
?>	


                <!-- INTRODUCCION -->
                <p>Los selectores CSS son una parte fundamental que todo el que se aventure a crear una hoja de estilos CSS debería conocer mínimamente. En esencia estos selectores nos permiten referirnos a una parte en concreto de la página web para poder estilizarla a nuestra conveniencia.</p>
				<p>Dentro de un documento HTML podemos identificar cada etiqueta de una forma básica por el nombre de la etiqueta, por una clase, o por una ID. Pero además también podemos crear selectores para una gran variedad de situaciones, por ejemplo podemos crear un selector que se refiera a cuando el mouse está encima de una etiqueta, un selector que busque una etiqueta dentro de una etiqueta, un selector que busque una etiqueta antes o después de una determinada etiqueta, etc..</p> 
                <!-- FIN_INTRODUCCION -->
                <p>En este artículo voy a enumerar todos los selectores CSS disponibles hasta la fecha de hoy, además incluiré ejemplos para cada uno de ellos.</p>
                
<?php 
	$Documentadas = $Selectores->MostrarPorGrupo(CSSTipo::Selector);
?>                

                
                <p class='nota'>Para la mayoría de los selectores de CSS2 hay que declarar "<i>&lt;!DOCTYPE&gt;</i>" si queremos que Internet Explorer 8 e inferiores funcionen con ellos, los selectores CSS3 directamente no funcionan en Internet Explorer 8 e inferiores.</p>
                
                <p>Este documento se ha creado partiendo cómo base de la referencia de <a href="http://w3schools.com/cssref/css_selectors.asp" target="_new">w3schools CSS Selector Reference</a>, mi intención principal al crear este documento es la de probar todos los selectores que existen hasta la fecha, y crear mis propios ejemplos con ellos.</p>
                <p>También debo decir que he descubierto mas de un selector interesante que hasta la fecha desconocía, así que por lo menos la experiencia me ha resultado útil. Personalmente os recomiendo echar un vistazo al selector "<i>:active</i>" el cual por su nombre no da mucho a entender su función (viene a ser cómo un OnClick), y al selector "<i>:first-letter</i>" del cual me ha parecido una buena idea ya que simplifica bastante el modificar el primer carácter de un párrafo.</p>
<?php
	$Fecha = date("d/m/Y", filemtime("../Web/CSS_BD.php"));
	echo "<br /><div class='postit'>Propiedades documentadas : <b>".$Documentadas["Documentadas"]."/".$Documentadas["Total"]."</b><br />Modificado por última vez : <i>".$Fecha."</i>.</div>";
?>
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>