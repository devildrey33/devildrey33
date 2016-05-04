<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

	$Base->InicioPlantilla("FlexBox para diseños responsive", $HEAD);*/
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='FlexBox responsive'>
	<meta name='keywords' content='CSS, FlexBox, responsive, media query, css order, css flex-flow, css flex, @media'>";

        $Base->InicioPlantilla(basename(__FILE__), "FlexBox para diseños responsive", $META);
        
        $Base->InicioBlog(basename(__FILE__), "FlexBox para diseños responsive");
        
        echo "<script>\$Base.CargarCSS('Blog_flex-box-y-media-queries.css');</script>";        

?>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Propiedades CSS" />
                <p>El CSS sigue avanzando y el modelo FlexBox ya ha llegado a la fase de candidato final, por lo que ya funciona en todos los navegadores, prácticamente al 100%.</p>
                <p>Hoy voy a explicar un poco como podemos crear un documento responsive, aprovechando las ventajas del modelo FlexBox. Si combinamos el FlexBox con la regla <a href="/Doc/CSS/Reglas/@media">@media</a> podemos conseguir documentos totalmente responsive con unas pocas declaraciones CSS, y un marcaje HTML muy claro.</p>
                <p>El modelo FlexBox nos permite tener un contenedor al cual podemos establecer si queremos mostrar sus hijos por columnas o por filas. La idea es crear una cabecera, un marco principal (que será la FlexBox), y un footer. Dentro del marco principal crearíamos un menú de navegación, un artículo, y un menú lateral alternativo.</p>
                <!-- FIN_INTRODUCCION -->
                <p>El objetivo es que si la resolución es menor que 500 pixeles la página se muestre únicamente a base de filas, ya que los menús laterales no cabrían.</p>
                <div style='position:relative; padding-top:20px;'>
                    <div class='Marca800'></div>
                    <div class='Marca500'></div>
                    <div class='Marca300'></div>
                    <span style="color:red; position:absolute; left:250px;">300px</span>
                    <span style="color:orange; position:absolute; left:450px;">500px</span>
                    <span style="color:green; position:absolute; left:750px;">800px</span>
                    <br />
                    <iframe id='Ejemplo' src="/Ejemplos/FlexBox/Documento.html"></iframe>
                </div><br />
                <h2>Maquetación HTML</h2>
                <p>Echad un vistazo al HTML :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID_FlexHTML", "Marcaje HTML para el ejemplo", "../Ejemplos/FlexBox/Documento.html", "FlexHTML"); ?>
                <p>Como veis la parte del HTML no tiene mucha dificultad, solo un apunte <linea cid='ID_FlexHTML' l='4'>article</linea> es el primer hijo de <linea cid='ID_FlexHTML' l='3'>#Principal</linea>, y sin embargo aparece en medio con la resolución mayor que 500 pixeles de ancho.</p>
                <h2>CSS para la vista normal</h2>
                <p>Ahora veamos el CSS normal :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_FlexCSS1", "CSS Flex-Box", "../Ejemplos/FlexBox/Documento.html", "FlexCSS1"); ?>
                <p>En primer lugar podéis ver que establezco la propiedad <a href="/Doc/CSS/Propiedades/display">display</a> a <linea cid='ID_FlexCSS1' l='3'>flex</linea>, para indicarle al navegador que debe usar el modelo FlexBox en él.</p>
                <p>Luego en la <linea cid='ID_FlexCSS1' l='4'>línea 4</linea> utilizo la propiedad <a href="/Doc/CSS/Propiedades/flex-flow">flex-flow</a> para establecer que el contenedor flex, mostrará sus hijos de izquierda a derecha.</p>
                <p>Para las etiquetas <linea cid='ID_FlexCSS1' l='13'>nav</linea>,  <linea cid='ID_FlexCSS1' l='7'>article</linea>, y  <linea cid='ID_FlexCSS1' l='18'>aside</linea>, establezco en primer lugar el <linea cid='ID_FlexCSS1' l='8,14,19'>ancho que ocupan</linea> con la propiedad <a href="/Doc/CSS/Propiedades/flex">flex</a>, y luego <linea cid='ID_FlexCSS1' l='9,15,20'>establezco el orden</linea> de dichas etiquetas con la propiedad <a href="/Doc/CSS/Propiedades/order">order</a>. De esta forma el <code>nav</code> quedara ubicado a la izquierda, el <code>article</code> en medio y el <code>aside</code> a la derecha.</p>
                <p>Con esto ya tenemos la estructuración normal creada (resolución para mas de 500 pixeles de ancho), ahora veamos cómo se debe establecer la distribución para resoluciones menores de 500 pixeles de ancho.</p>
                <h2>CSS para la vista con el ancho reducido</h2><br />
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_FlexCSS2", "CSS MediaQuery + Flex-Box", "../Ejemplos/FlexBox/Documento.html", "FlexCSS2"); ?>
                <p>En la <linea cid='ID_FlexCSS2' l='2'>segunda línea</linea> vemos la regla <a href="/Doc/CSS/Reglas/@media">@media</a>, que es la encargada de establecer los estilos del documento cuando este es menor que 500 pixeles de ancho.</p>
                <p>La otra parte destacable de este código, es la <linea cid='ID_FlexCSS2' l='11'>línea 11</linea> donde establezco la propiedad <a href="/Doc/CSS/Propiedades/order">order</a> a 0. Esto hace que las etiquetas <code>nav</code>, <code>article</code>, y <code>aside</code> vuelvan a su posición original, es decir primero el <code>article</code>, luego el <code>nav</code>, y por último el <code>aside</code>, tal y como está maquetado el HTML inicialmente.</p>

                <p>Y esto es todo por hoy, si quereis podéis trastear con el ejemplo aquí mismo o desde el laboratorio de pruebas.</p>
                
                <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/FlexBox/Documento.html")); ?>                
                
<!--                <a href="/Lab/Ejemplos/FlexBox/Documento.html" class='Boton Centrado'>Ver Ejemplo</a> -->

                
                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     