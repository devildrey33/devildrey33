<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Creación de páginas web desde cero (3 Varias etiquetas)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (3 Varias etiquetas)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (3 Varias etiquetas)");
        
        ?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_HTML5.png" alt="Tutorial creación de paginas web desde cero" />
                <p>En este tutorial vamos a ver varias etiquetas html de uso común para mostrar todo tipo de datos.</p>
                <p>Entre otras cosas podéis ver como añadir imágenes y enlaces a vuestros documentos html, ya que cualquier documento html que se precie necesita tanto ilustraciones como enlaces para ser lo más rico posible en información.</p>
                <p>También veremos algunas etiquetas descriptivas, que aunque no sirvan para un propósito especifico está muy bien utilizarlas para diferenciar ciertas partes del documento html.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En primer lugar explicare un poco lo que son las etiquetas descriptivas. Una etiqueta descriptiva en esencia no es más que un contenedor de datos, es decir puede tener etiquetas dentro con textos imágenes enlaces y demás. Lo importante de estas etiquetas aunque no se vea de cara al usuario final es que informan al navegador de que esa parte contiene un tipo específico de información.</p>
                <p>Veamos algunas de las etiquetas descriptivas que mas utilizo : "<i>article</i>", "<i>aside</i>", "<i>footer</i>", "<i>header</i>", "<i>section</i>".</p>
                <ul>
                    <li>
                        <p>La etiqueta "<b>article</b>" describe que la parte en cuestión forma parte de un artículo en concreto. Por ejemplo en la página principal de un blog donde se ven varios artículos utilizaríamos esta etiqueta para delimitar cada uno de los artículos mostrados.</p>
                    </li>
                    <li>
                        <p>La etiqueta "<b>aside</b>" describe que la parte en cuestión forma de un menú lateral. Por ejemplo en mi web podéis ver a la derecha la sección "<i>Enlaces más visitados</i>", "<i>Sigue devildrey33 en</i>", "<i>Enlaces más comentados</i>" y "<i>Pagina web escrita en HTML5!</i>", estos cuatro recuadros están incluidos bajo una etiqueta aside que informa al navegador de que esa parte pertenece a un menú lateral.</p>
                        <p><b>NOTA</b> : esta etiqueta no tiene nada que ver en que el menú salga a la derecha o a la izquierda, como ya he comentado es únicamente informativa, y no por utilizarla nos saldrá esa parte en un lateral. Esto se hace utilizando estilos, y lo veremos en otro tutorial más adelante.</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>footer</b>" describe que la parte en cuestión forma parte del pie de la pagina. Actualmente muchas páginas tienen una parte inferior donde se incluye un menú, o un texto informativo a cerca de su creación, licencia, etc...</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>header</b>" cumple el mismo objetivo que la etiqueta <i>footer</i>, pero para la cabecera de la pagina, es decir para la parte superior.</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>section</b>" quizás es de las mas indefinidas ya que engloba una sección. El termino sección es tan general que puede abarcar cualquier cosa, incluso se podría utilizar para la cabecera o el pie de página. También podemos utilizarla por ejemplo si tenemos una sección con enlaces a otras páginas, con una serie de imágenes / fotos, etc...</p>
                    </li>
                </ul>
                <p><b>NOTA</b> : Como ya he comentado las etiquetas descriptivas no cumplen ningún propósito concreto, y son más que nada para tener dividido el documento html en partes que el navegador pueda enumerar. A la hora de ver la página web no vamos a notar ninguna diferencia tanto si tiene etiquetas descriptivas como si no las tiene. Pero a mi modo de ver es mejor utilizarlas ya que en un futuro podrían ser utilizadas por buscadores para distinguir mejor la información.</p>
                <p>Vistas algunas etiquetas descriptivas vamos a ver algunas etiquetas que permiten modificar el formato del texto : "<i>b</i>", "<i>i</i>", "<i>s</i>", "<i>strong</i>", "<i>u</i>".</p>
                <ul>
                    <li>
                    	<p>La etiqueta "<b>b</b>" viene del ingles <i>bold</i>, y lo que hace es poner en negrita el texto que se encuentre dentro.</p>
                        <?php 
/* -[INICIO devildrey33.ID1]-
<p>Texto normal, <b>Texto en negrita</b>.</p>
-[FIN devildrey33.ID1]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID1", "Texto en negrita", basename(__FILE__), "ID1"); 
                        ?>
                        <p>Texto normal, <b>Texto en negrita</b>.</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>i</b>" viene del ingles <i>italic</i>, y lo que hace es poner en cursiva el texto que se encuentre dentro.</p>
                        <?php 
/* -[INICIO devildrey33.ID2]-
<p>Texto normal, <i>Texto en cursiva</i>.</p>
-[FIN devildrey33.ID2http://devildrey34.st0rm/Blog/Tutorial_HTML5_4]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID2", "Texto en cursiva", basename(__FILE__), "ID2"); 
                        ?>
                        <p>Texto normal, <i>Texto en cursiva</i>.</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>s</b>" viene del ingles <i>strike</i>, y lo que hace es tachar el texto que se encuentre dentro.</p>
                        <?php 
/* -[INICIO devildrey33.ID3]-
<p>Texto normal, <s>Texto tachado</s>.</p>
-[FIN devildrey33.ID3]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID3", "Texto tachado", basename(__FILE__), "ID3");
                        ?>
                        <p>Texto normal, <s>Texto tachado</s>.</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>strong</b>" es en parte una etiqueta descriptiva pero que además aplica un estilo al texto, y lo que hace es poner en negrita el texto que se encuentre dentro. En los buscadores puede ser utilizada para buscar palabras clave.</p>
                        <?php 
/* -[INICIO devildrey33.ID4]-
<p>Texto normal, <strong>Texto strong</strong>.</p>
-[FIN devildrey33.ID4]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID4", "Texto en negrita 2", basename(__FILE__), "ID4"); 
                        ?>
                        <p>Texto normal, <strong>Texto strong</strong>.</p>
                        <p><b>NOTA</b> : personalmente esta etiqueta no la utilizo prácticamente nunca ya que es mas rápido escribir la etiqueta "b" de todas formas quizás es una mala costumbre. Tampoco hay que abusar de esta etiqueta o de lo contrario puede terminar siendo ignorada por el buscador.</p>
                    </li>
                    <li>
                    	<p>La etiqueta "<b>u</b>" viene del ingles <i>underline</i>, y lo que hace es subrayar el texto que se encuentre dentro.</p>
                        <?php 
/* -[INICIO devildrey33.ID5]-
<p>Texto normal, <u>Texto subrayado</u>.</p>
-[FIN devildrey33.ID5]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID5", "Texto subrayado", basename(__FILE__), "ID5"); 
                        ?>
                        <p>Texto normal, <u>Texto subrayado</u>.</p>
                        <p><b>NOTA</b> : personalmente esta etiqueta tampoco la utilizo, ya que los enlaces vienen subrayados por defecto, y esto puede confundir al usuario.</p>
                    </li>
                </ul>
                <p>Ahora que hemos visto algunas etiquetas para modificar el formato del texto podemos pasar a las etiqueta "<i>h1</i>", "<i>h2</i>", "<i>h3</i>", "<i>h4</i>", "<i>h5</i>". Estas etiquetas se utilizan para mostrar títulos, y lo que hacen es mostrar el texto en un tamaño más grande.</p>
                <p>La etiqueta "<i>h1</i>" mostrara el titulo con la fuente más grande por defecto, la etiqueta "<i>h2</i>" mostrara el titulo con una fuente algo más pequeña que la etiqueta "<i>h1</i>", y así hasta llegar a la etiqueta "<i>h5</i>". Veamos un ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID6]-
<h1>Titulo H1</h1>
<h2>Titulo H2</h2>
<h3>Titulo H3</h3>
<h4>Titulo H4</h4>
<h5>Titulo H5</h5>
-[FIN devildrey33.ID6]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID6", "Etiquetas de titulo", basename(__FILE__), "ID6"); 
                ?>
				<br />
				<table class='Tabla'><tr><td>
                    <h1 style="font-size:28px">Titulo H1</h1><br />
                    <h1 style="font-size:1.5em">Titulo H2</h1><br />
                    <h3>Titulo H3</h3><br />
                    <h4>Titulo H4</h4><br />
                    <h5>Titulo H5</h5>
                </td></tr></table>
                
                
                <p>Ahora que hemos visto las etiquetas para mostrar títulos podemos pasar a la etiqueta "<i>img</i>". Esta etiqueta se utiliza para incluir imágenes dentro del documento, y tiene varios atributos obligatorios : "<i>src</i>", "<i>alt</i>"</p>
                <ul>
                    <li>
                        <p>El atributo "<b>src</b>" viene del ingles <i>source</i> y debe contener la ruta relativa de la imagen. Ojo tenéis que escribir el nombre exactamente igual con mayúsculas y minúsculas. Si el servidor que muestra la pagina web corre bajo windows no hay problema, pero si el servidor resulta que corre bajo linux, no es lo mismo poner "./MI IMAGEN.JPG" que poner "./Mi Imagen.jpg" ya que en linux podríamos tener esos dos archivos en el mismo directorio.</p>
                        <p><b>NOTA</b> : Si tenemos la imagen en el mismo directorio que el documento html podemos indicar directamente en el source "Mi Imagen.jpg", en cambio si por ejemplo la tenemos en un subdirectorio llamado "Graficos" debemos especificar la ruta de la siguiente forma "./Graficos/Mi Imagen.jpg". Fijaros en que el primer carácter es un punto, esto indica que la ruta relativa será el directorio donde se encuentra el documento html.</p>
                    </li>
                    <li>
                    	<p>El atributo "<b>alt</b>" viene del ingles <i>alternative text</i>, y su función es proveer un texto alternativo ya que pueden haber casos en que no sea posible mostrar la imagen, y de esta forma aunque no se pueda mostrar la imagen aparecerá el texto alternativo.</p>
                    </li>                
                </ul>
                <p>Veamos un ejemplo de la etiqueta "img" :</p>
                <img src='/Graficos/bender.jpg' alt='Bender bebiendo' style='float:right' />
                <?php 
/* -[INICIO devildrey33.ID7]-
<img src='bender.jpg' alt='Bender bebiendo' />
-[FIN devildrey33.ID7]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID7", "Imagen", basename(__FILE__), "ID7");
                ?>
                <p>Fijaros también en que esta etiqueta es una etiqueta completa, es decir se abre y se cierra en la misma etiqueta, por lo que no puede contener datos extras dentro de ella.</p>
                <p>Otra cosa a remarcar es que podemos utilizar los atributos <i>width</i> y <i>height</i> para especificar el tamaño de la imagen, pero ES MUY POCO SALUDABLE, por qué? Pues el problema reside en que si especificamos que la imagen tenga otro tamaño del que realmente tiene, el navegador tiene que adaptarla, y no tiene porque salir bien. Además si por ejemplo la imagen hace 1000x1000, pero la reajustamos a 200x200 estaremos haciendo cargar al navegador muchos más datos de los que debería, ya que el archivo original pongamos ocupa 500KB pero si estuviera a 200x200 podría ocupar 20KB.</p>
                <p>En definitiva utilizar los atributos <i>width</i> y <i>height</i> en una imagen si no se especifica su tamaño exacto es muy problemático, de todas formas debéis saber que para especificar el tamaño se puede hacer en pixeles, o en porcentaje, por ejemplo podemos poner <i>width='200%'</i> por lo que el navegador mostrara la imagen el doble de ancha de su tamaño original, o podemos poner <i>width='100px'</i> por lo que el navegador ajustara el ancho de la imagen a 100 pixeles.</p>
                <p>Por último vamos a ver cómo podemos crear enlaces a otros documentos html. Para ello se utiliza la etiqueta "<b>a</b>" y tiene los siguientes atributos : "<i>href</i>", "<i>target</i>"</p>
                <ul>
                	<li>
                    	<p>El atributo "<b>href</b>" indica la dirección del enlace al que queremos conectar.</p>
                    </li>
                	<li>
                    	<p>El atributo "<b>target</b>" es opcional y indica donde queremos abrir el enlace. Puede que queramos abrir el enlace en la misma página donde nos encontramos, por lo que saltaríamos de nuestro documento al documento enlazado. O puede que queramos abrir el enlace en una nueva pestaña del navegador.</p>
                        <p>Si no especificamos el atributo "<i>target</i>" por defecto el enlace se abrirá en la misma pestaña donde nos encontramos, pero si por el contrario queremos abrir el enlace en una pestaña nueva debemos especificar <i>target='_blank'</i>.</p>
                    </li>
                </ul>
                <p>Veamos un ejemplo de la etiqueta "<b>a</b>" :</p>
                <?php 
/* -[INICIO devildrey33.ID8]-
<p>Página oficial de <a href='http://www.comedycentral.com/shows/futurama/index.jhtml' target='_blank'>Futurama</a>.</p>
-[FIN devildrey33.ID8]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID8", "Enlace", basename(__FILE__), "ID8"); 
                ?>
                <p>Página oficial de <a href='http://www.comedycentral.com/shows/futurama/index.jhtml' target='_blank'>Futurama</a>.</p>
                <p><b>NOTA</b> : Si por ejemplo queremos que al pulsar encima de una imagen nos envié a un enlace lo podemos hacer de la siguiente forma :</p>
                <?php 
/* -[INICIO devildrey33.ID9]-
<a href='http://www.comedycentral.com/shows/futurama/index.jhtml' target='_blank'>
	<img src='bender.jpg' alt='Bender bebiendo' />
</a>
-[FIN devildrey33.ID9]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID9", "Enlace", basename(__FILE__), "ID9"); 
                ?>
                <p>Y con esto terminamos la tercera parte del tutorial. Si lo deseáis podéis ver el ejemplo online o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>

                                
                <table class='Centrado'><tr>
                    <td><a class='Boton-Normal' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_3_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                    <td><a class='Boton-Normal' href="/Descargas/Tutorial_HTML5_3.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                                
                
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_4" alt='Creación de paginas web desde cero (4 Estilos)'>Creación de páginas web desde cero (4 Estilos)</a>.</p>



<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
                