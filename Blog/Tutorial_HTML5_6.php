<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Creación de páginas web desde cero (6 Diseño)");*/
        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (6 Diseño)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (6 Diseño)");

?>	


                <!-- INTRODUCCION -->
                <p>En los tutoriales anteriores se han tratado varios temas de una índole muy básica respecto a etiquetas HTML y estilos CSS, pero en cuestiones de diseño no se ha hecho gran cosa. Por ello hoy vamos a ver algunas técnicas para crear marcos y posicionarlos a vuestro gusto.</p>
				<p>Esto os llevara a crear una serie de marcos y alinearlos de a la derecha, a la izquierda y al centro.</p>
                <p>También veréis por encima como añadir una imagen de fondo y como crear efectos de transparencia en los marcos.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Empezaremos por añadir una imagen de fondo a la etiqueta body utilizando CSS :</p><br style='clear:both' />
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID1", "CSS Añadir una imagen de fondo", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.css", "body"); ?>
				<ul>
                	<li>
                    	<p>La propiedad "<b>background-image</b>" indica la ruta de la imagen que queremos mostrar. Podemos utilizar imágenes del tipo "<i>gif</i>", "<i>jpg</i>", y "<i>png</i>".</p>
                        <div class='nota'>fijaros que para indicar la ruta de la imagen se utiliza la palabra "<i>url</i>" y entre paréntesis y comillas se escribe la ruta relativa de la imagen.</div>
                    </li>
                	<li>
                    	<p>La propiedad "<b>background-repeat</b>" le indica al navegador si debe repetir el fondo. Se pueden especificar 4 valores : "<i>repeat</i>" que repetirá la imagen tanto por abajo como por la derecha, "<i>repeat-x</i>" que repetirá la imagen solo por la derecha, "<i>repeat-y</i>" que repetirá la imagen solo por abajo, y "<i>no-repeat</i>" que no repetirá la imagen.</p>
                    </li>
                	<li>
                    	<p>La propiedad "<b>background-position</b>" le indica al navegador en que posición debe ubicar la imagen. En este caso la imagen mide 1500x1000 por lo que he especificado el valor "<i>center</i>" y el valor "<i>top</i>". Al especificar "<i>center</i>" la imagen queda centrada tanto de derecha a izquierda como de arriba a abajo, pero luego le especifico "<i>top</i>" para indicarle que la imagen debe empezar al principio del documento (esto rompe en parte el valor center ya que no centrara la imagen de arriba a abajo, pero sí que la centrara de derecha a izquierda). Para mas información sobre los valores que puede tener la propiedad "<i>background-position</i>" consultad el siguiente enlace : <a href="http://www.w3schools.com/cssref/pr_background-position.asp" target="_blank">CSS background-position Property</a>.</p>
                    </li>
                </ul>
                <p>Ahora vamos a definir el ancho del documento que será de 1000 pixeles. Porque de 1000 pixeles? pues si os fijáis en la gran mayoría de páginas web suelen tener un tamaño similar en el documento, esto es porque la resolución mínima utilizada en los sistemas operativos de PC es de 1024x768. Y porque no especificamos 1024 de ancho? pues tened en cuenta que los navegadores muestran una barra de scroll lateral que suele ocupar un máximo de 20 pixeles, así que ya lo redondeamos y lo dejamos en 1000 pixeles.</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID2", "CSS clase .AnchoDocumento", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.css", "AnchoDocumento"); ?>
                <p>Para asignar el ancho se utiliza la propiedad "<b>width</b>".</p>
                <p>Lo siguiente será definir una clase para poder centrar objetos de derecha a izquierda :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID3", "CSS clase .Centrado", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.css", "Centrado"); ?>
                <p>Para la clase "<b>.Centrado</b>" se han utilizado las propiedades "<i>margin-left</i>" y "<i>margin-right</i>" en las que se ha especificado el valor "<i>auto</i>". Al especificar en el margen derecho y el margen izquierdo el valor "<i>auto</i>", el navegador entiende que ese objeto debe ir centrado de derecha a izquierda.</p>
                <div class='nota'>La propiedad "<i>margin</i>" establece el margen por fuera de un objeto, pero debéis saber que existe la propiedad "<i>padding</i>" que establece el margen interno del objeto, es decir si por ejemplo tenemos un texto dentro del objeto podemos especificar con padding que exista una separación desde el principio del objeto al texto.</div>
                <p>Ahora vamos a definir una clase para el titulo de nuestra página :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID4", "CSS clase .Titulo", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.css", "Titulo"); ?>
                <p>En esta clase se ha utilizado la propiedad "<i>text-align</i>" para alinear el texto, ojo porque una cosa es alinear un marco, y otra muy distinta es alinear el texto. En este caso establecemos el valor "<i>center</i>" para centrar el texto, pero también puede ser "<i>left</i>" izquierda, o "<i>right</i>" derecha.</p>
                <p>La propiedad "<i>text-shadow</i>" ya la vimos en el tutorial anterior por lo que no la voy a volver a explicar. De todas formas si queréis ver un articulo donde hablo mas explícitamente sobre esa propiedad podéis visitar el siguiente enlace : <a href="/Blog/CSS3_Sombras_Bordes" target="_blank">CSS3 : Sombras y bordes redondeados</a>.</p>
                <p>Ahora nos toca definir un marco con borde, color de fondo y un efecto de transparencia :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID5", "CSS clase .MarcoTranslucido", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.css", "MarcoTranslucido"); ?>
                <p>De este último ejemplo ya conocéis varias propiedades, sobre las propiedades que ya conocéis solo voy a remarcar que se ha utilizado la propiedad "position:relative" ya que de esta forma podemos manipular la posición y el tamaño de este objeto.</p>
                <p>Hay tres propiedades que aun no conocéis :</p>
                <ul>
                	<li>
                    	<p>La propiedad "<b>border-radius</b>" lo que hace es redondear las puntas del rectángulo. El valor se especifica en pixeles. Podéis ver más ejemplos de ella en el siguiente enlace : <a href="/Blog/CSS3_Sombras_Bordes" target="_blank">CSS3 : Sombras y bordes redondeados</a>.</p>
	                </li>
                	<li>
                    	<p>La propiedad "<b>opacity</b>" lo que hace es dar cierto grado de transparencia al objeto. Los valores pueden ir de 1.0 (opaco) a 0.0 (transparente).</p>
	                </li>
                	<li>
                    	<p>La propiedad "<b>box-shadow</b>" añade una sombra al marco, al igual que con "<i>text-shadow</i>" se especifican 3 valores para la <i>X</i>, <i>Y</i>, <i>Difusión</i> y luego se especifica el color de la sombra. Podéis ver más ejemplos de ella en el siguiente enlace : <a href="/Blog/CSS3_Sombras_Bordes" target="_blank">CSS3 : Sombras y bordes redondeados</a>.</p>
	                </li>
                </ul>
                <p>Para terminar con los estilos CSS solo nos falta especificar una clase para el documento, y una clase para la sección lateral :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID6", "CSS clases .Documento y ,SeccionLateral", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.css", "Documento"); ?>
                <p>De las propiedades que no conocéis "<i>height</i>" indica al altura en pixeles para las clases, "<i>padding</i>" como ya comente antes especifica el margen interno del objeto, y "<i>float</i>" que es la más importante especifica hacia donde tiene que alinearse el objeto.</p>
                <p>La propiedad "<i>float</i>" puede tener los siguientes valores : "<i>left</i>" alinear a la izquierda, "<i>right</i>" alinear a la derecha, y "<i>none</i>" sin alineación que es la que viene por defecto.</p>
                <p>Para entender un poco mejor la propiedad "<i>float</i>" imaginaros que tenemos dos etiquetas div de 500 pixeles que queremos situar una al lado de la otra, con "<i>float:none</i>" (que viene por defecto) esto no sería posible y acabaríamos con un div debajo del otro, en cambio si a uno le especificamos "<i>float:left</i>" y al otro le especificamos "<i>float:right</i>" estos objetos se alinearan bien uno al lado del otro.</p>
                <p>Por último os falta ver el código HTML y ya podréis ver el ejemplo y entenderlo mejor :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID6", "Tutorial_HTML5_6_Ejemplo.html", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.html"); ?>
                <p>En especial me gustaría que os fijarais en la línea 14 donde hay un div con varias clases "<i>AnchoDocumento</i>", "<i>Titulo</i>", "<i>MarcoTranslucido</i>", y "<i>Centrado</i>". Ese div mostrara un marco de 1000 pixeles de ancho centrado de derecha a izquierda y que contiene un texto centrado para el titulo.</p>
                <p>Y en segundo lugar también quiero que os fijéis en la línea 21, 22 y 25 donde creamos 3 divs. El div de la línea 19 crea un espacio de 1000 pixeles centrado de derecha a izquierda, en el que luego añadimos dos div más. La idea es que no podemos centrar dos objetos a la vez de izquierda a derecha, por eso se ha creado el div de la línea 19 que contiene los dos objetos, ya que al ser un solo objeto sí que es posible centrarlo.</p>

                <p>Y con esto terminamos la sexta parte del tutorial, si lo deseáis podéis ver el ejemplo online o descargar el ejemplo para poder editarlo en vuestro ordenador. Buen fin de semana.</p>

                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_6_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Tutorial_HTML5_6.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>

                
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_7" alt='Creación de paginas web desde cero (7 Botones)'>Creación de páginas web desde cero (7 Botones)</a>.</p>



<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
                