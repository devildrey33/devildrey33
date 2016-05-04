<?php 
	/*include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$DeclaracionesHeadExtras = '
';
	
	$Base->InicioPlantilla("Creación de páginas web desde cero (5 Más sobre los estilos)", $DeclaracionesHeadExtras);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (5 Más sobre los estilos)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (5 Más sobre los estilos)");

?>	

<style type="text/css">
    .TextoSombreado {
        text-shadow:1px 1px 1px rgb(255, 0, 0);
    }
    .Texto18px {
        font-size:18px;
    }

    .MovimientoDerecha {
        position:relative;
        color:green;
    }
    .MovimientoDerecha:hover {
        left:10px;
    }			
</style>

<!-- -[INICIO devildrey33.ID1]-
body {
	background-color:green; /* Color de fondo verde   */
	color:white;            /* Color del texto blanco */
}
-[FIN devildrey33.ID1]- -->                                        
                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Tutorial creación de paginas web desde cero" />
                <p>En el tutorial anterior se vio muy por encima los estilos CSS y cómo utilizarlos con el atributo "<i>style</i>" sobre cualquier etiqueta.</p>
                <p>Hoy crearemos nuestro primer documento CSS, y dejaremos el atributo "<i>style</i>" de lado para empezar a probar los atributos "<i>id</i>" y "<i>class</i>" ya que con ellos podemos utilizar estilos definidos en un archivo CSS a parte.</p>
                <p>Pero antes de nada necesitamos aprender un poco sobre selectores CSS, que son y cómo utilizarlos correctamente en nuestras hojas de estilos.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para empezar vamos a crear un archivo CSS con nuestro editor de texto al que llamaremos "<i>Tutorial_HTML5_5_Ejemplo.css</i>" y al que introduciremos el siguiente código :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID1", "Archivo css básico", basename(__FILE__), "ID1"); ?>
                <p>Que es lo que acabamos de hacer? pues es muy simple, acabamos de crear un archivo css el cual establece que la etiqueta "<i>body</i>" tendrá el color de fondo de color verde, y el texto de color blanco por defecto.</p>
                <div class='nota'>Dentro de los estilos CSS podemos añadir comentarios al igual que hacemos dentro del HTML, pero en este caso utilizamos los caracteres "<i>/*</i>" para empezar el comentario y "<i>*/</i>" para terminarlo.</div>
                <p>Ahora vamos a enlazar este archivo CSS a nuestro documento HTML, por ello vamos a crear un documento HTML nuevo para este ejemplo que se llamara "<i>Tutorial_HTML5_5_Ejemplo.html</i>"</p>
                <p>En el introduciremos las etiquetas típicas que necesitamos para cualquier documento HTML : "<i>!DOCTYPE HTML</i>", "<i>html</i>", "<i>head</i>", "<i>body</i>". Además vamos a introducir una nueva etiqueta dentro del head que indicara al documento que debe buscar sus estilos CSS en un archivo a parte.</p>
                <p>Fijaros en el siguiente ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID2]-
<!DOCTYPE HTML>   <!-- Documento HTML 5 -->
<html>            <!-- Inicio del documento HTML -->
    <head>        <!-- Inicio del head -->
        <title>Ejemplo del tutorial 5</title>
        <link href='Tutorial_HTML5_5_Ejemplo.css' rel='stylesheet' type='text/css' />
    </head>       <!-- Final del head -->
    <body>        <!-- Inicio del cuerpo para el documento HTML -->
    	<header>  <!-- Inicio de la cabecera con el titulo -->
            <h1>Tutorial 5 : Creación de páginas web desde cero (5 Mas sobre estilos)</h1>
        </header> <!-- Inicio de la cabecera con el titulo -->
    </body>       <!-- Final del cuerpo para el documento HTML -->
</html>           <!-- Final del documento HTML -->
-[FIN devildrey33.ID2]-*/                        
                $Base->PintarCodigo->PintarArchivoHTML("ID2", "Archivo HTML enlazado al css anterior", basename(__FILE__), "ID2"); ?>
                <p>En la línea 5 podéis observar que se ha utilizado la etiqueta "<b>link</b>" dentro de la etiqueta "<i>head</i>". Además se ha utilizado especificando los siguientes atributos : "<i>href</i>", "<i>rel</i>", y "<i>type</i>".</p>
                <ul>
                	<li>
                    	<p>El atributo "<b>href</b>" indica la localización del archivo que queremos enlazar con la etiqueta "<i>link</i>".</p>
                    </li>
                	<li>
                    	<p>El atributo "<b>rel</b>" viene del ingles <i>relationship</i>, y indica la relación que tiene el archivo especificado con el documento HTML, de momento solo nos interesa relacionarlo como "<i>stylesheet</i>" (hoja de estilos).</p>
                    </li>
                	<li>
                    	<p>El atributo "<b>type</b>" indica que tipo de archivo le estamos enlazando, en este caso el tipo es "<i>text/css</i>" un archivo de texto plano que contiene estilos css.</p>
                    </li>
                </ul>
                <p>Ahora si probáis el documento HTML podréis ver que la etiqueta "<i>body</i>" ha adquirido un fondo de color verde, y que muestra el texto de color blanco, sin necesidad de especificarle el atributo style.<p>
                <p>Además pensad que si tenemos diez documentos html podemos aprovechar la misma hoja de estilos css para poner todas las etiquetas "<i>body</i>" con las mismas propiedades. Esto a la larga es mucho más cómodo y profesional que ir escribiendo la etiqueta style para cada etiqueta.</p>
                <p>Al igual que hemos declarado "<i>body</i>" en la hoja de estilos podemos hacer lo mismo para cualquier etiqueta básica, de todas formas el css no es solo eso, también podemos crear "<i>clases</i>" o "<i>ids</i>".</p>
                <p>El concepto de las clases y las ids es un poco complicado de asimilar así que mejor empezaremos con un ejemplo de código css mostrando cómo debemos crear una clase :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
.TextoSombreado {
	text-shadow:1px 1px 1px rgb(255, 0, 0);
}
.Texto18px {
	font-size:18px;
}
-[FIN devildrey33.ID3]-*/
                $Base->PintarCodigo->PintarArchivoCSS("ID3", "Archivo css básico", basename(__FILE__), "ID3"); ?>
				<p>En este ejemplo podéis ver que he creado dos estilos nuevos "<i>.TextoSombreado</i>" y "<i>.Texto18px</i>" fijaros que los dos estilos empiezan con un punto, esto es para especificar que se tratan de clases. Además he utilizado dos propiedades css que aun no habíais visto, que son "<i>text-shadow</i>" y "<i>font-size</i>", primero veamos para que sirve cada una de las propiedades :</p>
                <ul>
	                <li>
                    	<p>La propiedad "<b>text-shadow</b>" como indica su nombre añade una sombra al texto, en este caso especificamos "<i>1px 1px 1px rgb(255,0,0)</i>;" que traducido para que nos entendamos seria : <i>X = 1 pixel</i>, <i>Y = 1 pixel</i>, <i>Difusión = 1 pixel</i>, <i>Color = rojo</i>. O en otras palabras el texto tendrá una sombra roja que se verá en la parte inferior izquierda del texto.</p>
                        <div class='nota'>En Internet Explorer la propiedad "text-shadow" no funciona (Así vais viendo porque tanto odio de los desarrolladores hacia Internet Explorer)</div>
                    </li>
	                <li>
                    	<p>La propiedad "<b>font-size</b>" indica que se utilizara una fuente de 18 pixeles (que es algo más grande de lo normal).</p>
                    </li>
                </ul>
                <p>Bien pero como hay que utilizar estas clases?, pues es bastante sencillo, para ello utilizaremos el atributo "<i>class</i>" de las etiquetas que queramos modificar, por ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID4]-
<p>
    <span>Texto normal</span> 
    <span class='TextoSombreado'>Texto sombreado</span> 
    <span class='Texto18px'>Texto de 18 pixeles</span> 
    <span class='TextoSombreado Texto18px'>Texto sombreado de 18 pixeles</span>
</p>
-[FIN devildrey33.ID4]-*/
                $Base->PintarCodigo->PintarArchivoHTML("ID4", "Utilizando clases css", basename(__FILE__), "ID4"); ?>
                <p><span>Texto normal</span> 
                <span class='TextoSombreado'>Texto sombreado</span> 
                <span class='Texto18px'>Texto de 18 pixeles</span> 
                <span class='TextoSombreado Texto18px'>Texto sombreado de 18 pixeles</span></p>
                <p>Fijaros en que a la hora de especificar el nombre de la clase dentro del atributo class no incluimos el punto. También observad que en la última línea del ejemplo se utilizan dos clases en la misma etiqueta por lo que esa etiqueta adquiere las propiedades de las dos clases.</p>
                <p>Esto es una gran ventaja ya que podemos crear clases con estilos simples e ir mezclándolas a medida que sea necesario.</p>
                <p>Pero que hay acerca de las ids? bueno es un concepto algo más complicado de explicar ya que se suelen utilizar para identificar una etiqueta en concreto y utilizar código JavaScript en ellas. Por el momento solo deberíais saber que se declaran igual que las clases pero con la diferencia de que en vez de utilizar un punto "<i>.</i>" al principio se utiliza una parrilla "<i>#</i>".</p>
                <p>Y a la hora de utilizarlas dentro de una etiqueta en vez de utilizar el atributo "<i>class</i>" hay que utilizar el atributo "<i>id</i>". De todas formas por el momento quedaros con las clases y dejad las ids para más adelante.</p>
				<p>Por el momento solo habéis arañado la superficie de lo que son los estilos CSS, así que vamos a ver un poco más. Ahora veremos un selector que personalmente utilizo mucho "<i>:hover</i>".</p>
                <p>El selector "<i>:hover</i>" debe especificarse junto a un nombre de etiqueta o un nombre de clase o un nombre de id, y lo que hace es asignar sus atributos cuando estamos encima de la etiqueta/clase/id con el mouse. Para que quede más claro veamos un ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID5]-
.MovimientoDerecha {
	position:relative;
	color:green;
}
.MovimientoDerecha:hover {
	left:10px;
}
-[FIN devildrey33.ID5]-*/
                $Base->PintarCodigo->PintarArchivoCSS("ID5", "Selector css :hover", basename(__FILE__), "ID5"); ?>
                <p>Para este ejemplo hemos declarado una nueva clase llamada "<i>.MovimientoDerecha</i>" en la que utilizamos dos nuevas propiedades, que son : "<i>position</i>" y "<i>left</i>".</p>
                <ul>
                    <li>
                    	<p>La propiedad "<b>position</b>" es algo complicada de explicar, lo primero que debeis saber es que hay varias formas de trabajar con posiciones : usando la ventana del navegador (fixed), usando la posicion del objeto padre no estatico (absolute), y usando la posicion por defecto (static/relative).</p>
                        <p>Por defecto todas las etiquetas tienen la propiedad position con el valor "<i>static</i>" asignado, esto significa que no utilizan ningún tipo de coordenadas que podamos modificar y que se irán situando en la posición que les toque.</p>
                        <ul>
                            <li><p>Si asignamos la propiedad "<i>position</i>" a "<i>fixed</i>" la etiqueta se colocara SIEMPRE en la misma posición de la ventana sin importar el scroll. Para entender mejor el valor fixed, vamos a suponer que tenemos un documento que hace 2000 pixeles de altura, pero la ventana del navegador solo puede mostrar 700 pixeles porque la pantalla no da para mas, por lo tanto si queremos acceder a los datos de abajo del todo tenemos que recurrir al scroll. Pues bien en este caso si colocamos un objeto con la <i>position:fixed</i> en las coordenadas left y top 0, siempre veremos ese objeto en la esquina superior izquierda de nuestro navegador, por mucho que utilizemos el scroll.</p></li>
                            <li><p>Si asignamos la propiedad "<i>position</i>" a "<i>absolute</i>" la etiqueta se colocara al principio de la etiqueta inmediatamente superior (que no sea static), y nos permitirá modificar su posición. Estas coordenadas serán relativas a la primera etiqueta que no sea "<i>static</i>" inmediatamente superior.</p></li>
                            <li><p>Si asignamos la propiedad "<i>position</i>" a "<i>relative</i>" la etiqueta se colocara igual que siempre pero con la diferencia de que podremos modificar su posición. Estas coordenadas serán relativas la posición que debería tomar el elemento normnalmente.</p></li>
                        </ul>
                    </li>
                	<li>
                    	<p>La propiedad "<b>left</b>" nos permite modificar la posición del objeto por donde empieza por la izquierda.</p>
                    </li>
                	<li>
                    	<p>La propiedad "<b>right</b>" nos permite modificar la posición del objeto por donde termina por la derecha.</p>
                    </li>
                	<li>
                    	<p>La propiedad "<b>top</b>" nos permite modificar la posición del objeto por donde empieza por arriba.</p>
                    </li>
                	<li>
                    	<p>La propiedad "<b>bottom</b>" nos permite modificar la posición del objeto por donde termina por abajo.</p>
                        <div class='nota'>Las propiedades "<i>left</i>", "<i>right</i>", "<i>top</i>", y "<i>bottom</i>" solo funcionaran si asignamos la propiedad "<i>position</i>" a cualquier valor válido que no sea "static".</div>
                    </li>
                </ul>
                <img src='/Graficos/css_position.png' alt='position:absolute position:relative' style='float:right' />
                <p>Además de explicar el funcionamiento de la propiedad "<i>left</i>" he añadido una explicación para las propiedades "<i>right</i>", "<i>top</i>" y "<i>bottom</i>". Es posible que no haya quedado muy claro, sobre todo para aquellos que no habéis tocado nunca un lenguaje de programación, así que echad un vistazo a la imagen de la derecha a ver si os aclara mejor el tema.</p>
                <p>Imaginaros que la imagen de la derecha es un documento html completo, y que en un momento dado abrimos una etiqueta <i>&lt;p&gt;</i> (que es la porción blanca) y dentro le añadimos una etiqueta con la propiedad "<i>position:absolute</i>" (azul), y una etiqueta con la propiedad "<i>position:relative</i>" (rojo).</p> 
                <p>Si quisiéramos modificar la posición "<i>left</i>" de la etiqueta azul (absolute) deberíamos tener en cuenta el margen que va desde la izquierda del documento a la etiqueta "<i>p</i>", y la posición dentro de la etiqueta "<i>p</i>". En cambio si quisiéramos modificar la posición "<i>left</i>" de la etiqueta roja (relative) solo deberíamos tener en cuenta la posición dentro de la etiqueta "<i>p</i>".</p>
                <p>Espero que de esta forma haya quedado más claro. Por último podéis observar el ejemplo del selector "<i>:hover</i>" que hemos utilizado en la clase "<i>MovimientoDerecha</i>" en el siguiente texto en verde :</p>
                <p><span class='MovimientoDerecha'><u>Pasa el mouse por este texto.</u></span></p>
                <p>Cuando el mouse esta encima la propiedad "<i>left</i>" pasa a ser "<i>10px</i>", y cuando el mouse ya no está encima la propiedad left vuelve a su valor por defecto.</p>
                
                <p>Y con esto terminamos la quinta parte del tutorial, si lo deseáis podéis ver el ejemplo online o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>

                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_5_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Tutorial_HTML5_5.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>

                
                <div class='nota'>Aunque no son parte de este tutorial tambien os recomiendo echar un vistazo a los selectores disponibles para CSS en el siguiente enlace <a href="SelectoresCSS.php">Selectores CSS</a>.</div>
                
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_6" alt='Creación de paginas web desde cero (6 Diseño)'>Creación de páginas web desde cero (6 Diseño)</a>.</p>



<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
                