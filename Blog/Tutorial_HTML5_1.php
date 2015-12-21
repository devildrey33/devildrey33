<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Creación de páginas web desde cero (1 Introducción)");*/
        
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (1 Introducción)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (1 Introducción)");
        
?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_HTML5.png" alt="Tutorial creación de paginas web desde cero" />
                <p>Hoy empezaremos con un nuevo tutorial para aquellos interesados en aprender a crear páginas web y que prácticamente no tienen conocimientos sobre el tema.</p>
                <p>La idea es mostrar en la medida de lo posible todos los conceptos básicos para realizar una página web utilizando HTML5, CSS3 y en última instancia también veremos lo más básico de JavaScript para ir abriendo boca.</p>
                <p>Como algunos sabréis HTML5 es la última versión del lenguaje destinado a maquetar páginas web.</p>
                <p>El CSS3 aunque sea algo complicado de entender al principio, es una forma de crear estilos que podremos re-utilizar en nuestros documentos HTML, ya sea para definir el esquema de colores, las tipografías/fuentes que queremos utilizar, efectos de resaltado, animaciones simples, etc...</p>
                <!-- FIN_INTRODUCCION -->
                <p>Y el JavaScript es un lenguaje de programación utilizado para realizar ciertas tareas de una forma mucho más versátil, pero también algo más complicada.</p>
                
                <p>En primer lugar HTML viene del lenguaje XML, y este lenguaje se utiliza para encapsular estructuras de datos. La teoría es que existen tres tipos importantes de datos : Etiquetas, Atributos y Datos.</p>
                <ul>
                    <li>
                        <p>Las <b>etiquetas</b> son una porción de código que definimos dentro de los caracteres &lt; &gt;.</p> 
                        <p>Una etiqueta puede ser de apertura, de clausura o completa, es decir hay casos en los que abrimos una etiqueta, luego insertamos datos dentro, y por ultimo cerramos la etiqueta. También nos podemos encontrar etiquetas que su uso no permite contener datos dentro y que por lo tanto se abre y se cierra en la misma etiqueta. Veamos unos ejemplos :</p>
                        <?php 
/* -[INICIO devildrey33.ID1]-
<p>Mi texto</p> <!-- Etiqueta de apertura, datos, etiqueta de clausura -->
<br />          <!-- Etiqueta completa en la que no podemos insertar datos -->
-[FIN devildrey33.ID1]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID1", "Etiquetas", basename(__FILE__), "ID1"); 
                        ?>
                        <p>Fijaros que tanto las etiquetas de clausura como las etiquetas completas llevan una barra "/". Esta barra sirve para que el navegador sepa que la etiqueta se va a cerrar. Otra cosa importante es que en la línea 1 la etiqueta de clausura empieza con la barra y luego sigue con el nombre, por el contrario la etiqueta completa primero tiene el nombre y termina con un espacio y la barra. Es muy importante seguir estas normas de marcaje SIEMPRE.</p>
            	    </li>
                    <li>
                    	<p>Los <b>atributos</b> son propiedades que podemos añadir a ciertas etiquetas para establecer ciertas funciones especiales para ellas. Existen atributos generales que pueden utilizarse en la mayoría de etiquetas, y existen atributos especiales para ciertas etiquetas, pero bueno esto lo veremos más adelante en profundidad, ahora solo me interesa que comprendáis que es un atributo y donde va ubicado. Veamos el siguiente ejemplo :</p>
                        <?php 
/* -[INICIO devildrey33.ID2]-
<a href='www.miurl.com' alt=\"Enlace\">Enlace a mi url</a> <!-- Etiqueta con un atributo -->
-[FIN devildrey33.ID2]-*/
                            $Base->PintarCodigo->PintarArchivoHTML("ID2", "Atributos", basename(__FILE__), "ID2"); 
                        ?>
                        <p>En este ejemplo utilizamos la etiqueta <i>a</i> y le especificamos los atributos <i>href</i> y <i>alt</i>. Los atributos siempre vienen seguidos del símbolo <i>=</i>, y luego tienen datos entre comillas. Para especificar los datos de un atributo se pueden usar tanto comillas simples como comillas dobles, lo único importante es que utilicemos el mismo tipo de comillas tanto para el principio como para el final de los datos del atributo.</p>
                    </li>
                    <li>
                    	<p>Los <b>datos</b> que hay dentro de etiquetas del estilo apertura y clausura pueden ser de cualquier tipo, lo único que tenemos que vigilar es de no utilizar los caracteres &lt; y &gt; dentro si no vamos a especificar una etiqueta dentro de esos datos. Tanto el primer ejemplo como el segundo ejemplo en la línea 1 tienen una etiqueta que tiene datos dentro, en el primer ejemplo los datos son "<i>Mi texto</i>", y en el segundo ejemplo los datos son "<i>Enlace a mi url</i>".
                    </li>
                </ul>
                <p>Antes de empezar a ver etiquetas y demás, quiero remarcar que es muy importante a la hora de escribir código que lo hagamos de una forma limpia y ordenada. Como hacemos esto? en primer lugar tenéis que acostumbraros a tabular bien todas las etiquetas, y en segundo lugar no dudéis en utilizar comentarios para apuntar aquellos puntos que puedan quedar poco claros. Veamos mejor un tercer ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
<body>         <!-- Inicio del cuerpo -->
    <article>  <!-- Principio del artículo -->
        <p>Texto del artículo</p>
        <a href='www.miurl.com' alt='Enlace'>Enlace a otro artículo</a>
    </article> <!-- Final del artículo -->
</body>        <!-- Final del cuerpo -->
-[FIN devildrey33.ID3]-*/
                    $Base->PintarCodigo->PintarArchivoHTML("ID3", "Tabulaciones y comentarios", basename(__FILE__), "ID3");
                ?>
                <p>Como podéis ver, la etiqueta "<i>body</i>" empieza a la izquierda sin ningún espacio ya que es la primera etiqueta (primer nivel). Luego añadimos otra etiqueta "<i>article</i>" dentro de la etiqueta "<i>body</i>", por lo que utilizamos el tabulador una vez para que se note que está dentro (segundo nivel). Más tarde añadimos las etiquetas "<i>p</i>" y "<i>a</i>" dentro de la etiqueta "<i>article</i>" por lo que estas ya las tabulamos 2 veces ya que están en el tercer nivel.</p>
                <p>La idea es que siempre quede muy claro cuando estamos dentro de una etiqueta de primer nivel, segundo nivel, etc...</p>
                <p>También fijaros en los textos que salen en gris, estos son comentarios, y para escribirlos siempre tienen que empezar por &lt;!--, y terminar por --&gt;. En ellos podemos escribir lo que queramos para que nos ayude a orientarnos mejor dentro del código.</p>
                <p>Y con esto terminamos la introducción del primer tutorial! Espero que no os haya resultado muy pesado :).</p>
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_2" alt='Creación de paginas web desde cero (2 Empezando)'>Creación de páginas web desde cero (2 Empezando)</a>.</p>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
                