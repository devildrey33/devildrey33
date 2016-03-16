<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Creación de páginas web desde cero (4 Estilos)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (4 Estilos)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (4 Estilos)");
        
        ?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Tutorial creación de paginas web desde cero" />
                <p>Llegamos a un punto interesante donde veremos que podemos cambiar la apariencia de prácticamente cualquier etiqueta.</p>
                <p>Pero que podemos hacer realmente con los estilos CSS? Pues si os digo la verdad en la actualidad se pueden hacer maravillas con ellos, ya que nos permiten adaptar cualquier etiqueta a nuestras necesidades, y además podemos hacerlo de una forma en la que reutilizamos código, por lo que podemos por ejemplo aplicar el mismo estilo a varias etiquetas distintas.</p>
                <p>Esto es muy interesante a la larga ya que nos ahorrara muchas líneas de código además de ofrecernos una versatilidad enorme en cuanto a la apariencia de nuestros documentos html.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para empezar vamos a utilizar el atributo style. Este atributo lo podemos agregar a cualquier etiqueta que represente un objeto visible en el documento html, como por ejemplo en las etiquetas "<i>body</i>", "<i>a</i>", "<i>img</i>", "<i>h1</i>", etc...</p>
                <p>En este tutorial utilizaremos los estilos CSS mediante el atributo style, pero debéis saber que esta forma es la menos recomendable, aunque pienso que es la mejor forma para empezar a tratar con ellos sin mucha dificultad.</p>
                <p>Pongamos por ejemplo que queremos que nuestra página tenga un fondo negro, y que el texto sea de color blanco. Para ello necesitaremos incluir el atributo style en la etiqueta body indicando la que propiedad <i>background-color</i> tenga el color negro, y que la propiedad <i>color</i> tenga el color blanco.</p>
                <p>Veamos el siguiente ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<body style='background-color:black; color:white;'>
-[FIN devildrey33.ID1]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID1", "Cambiando los colores del documento", basename(__FILE__), "ID1"); 
                ?>
                <p>Como podéis observar dentro del atributo style se ha especificado "<i>background-color:<b>black</b>; color:<b>white</b>;</i>", <i>background-color</i> se refiere al color del fondo, y <i>color</i> se refiere al color del texto. En este caso se ha indicado los colores con las palabras <i>black</i> y <i>white</i>, pero por norma se suele utilizar una notación al estilo hexadecimal, o una notación RGB.</p>
                <p><b>NOTA</b> : Es muy importante escribir correctamente los estilos si queremos que funcionen correctamente. Observad que primero se escribe el nombre de la propiedad, luego se añaden "<i>:</i>" y se escribe el valor, y finalmente cerramos la propiedad con "<i>;</i>".</p>
                <p>La notación hexadecimal consiste en una parrilla seguida de 6 dígitos que van del (0-9) y de la (A-F), por ejemplo para especificar el color negro en hexadecimal deberíamos poner "<i>#000000</i>", y para especificar el color blanco "<i>#FFFFFF</i>". De todas formas entiendo que quizás es la notación más complicada de entender y calcular por lo que intentare no utilizarla.</p>
                <p>La notación RGB creo que es bastante más fácil de comprender, e incluso nos recordara a nuestra infancia cuando jugábamos en clase de plástica a mezclar los colores. RGB son las siglas de Red, Green y Blue, y para especificar un color debemos escribirlo de la siguiente forma "<i>rgb(0, 0, 0)</i>" que sería el equivalente del negro, y "<i>rgb(255, 255, 255)</i>" que sería el equivalente del blanco. Por si no ha quedado claro cada canal de color va de 0 a 255.</p>
                <p>Realmente la notación RGB es muy parecida a la notación hexadecimal, pero con la diferencia de que en la RGB introducimos los valores en base(10), mientras que en la hexadecimal hay que introducirlos en base(16).</p>
                <p>Os acordáis de que colores hay que mezclar para obtener el amarillo? pues con el RGB pasa lo mismo, mezclamos rojo y verde, y sacamos el color amarillo. Por lo tanto el color amarillo se expresaría de la siguiente forma "<i>rgb(255, 255, 0)</i>".</p>
                <p>Con esto creo que ya deberíais ser capaces de cambiar básicamente los colores de prácticamente cualquier elemento, ya que al igual que como hemos hecho en la etiqueta "<i>body</i>" podemos hacer lo mismo en la etiqueta "<i>p</i>", o en la etiqueta "<i>a</i>", etc...</p>
                <p>Pero los estilos CSS no se resumen simplemente a un color de fondo y aun color para el texto, a decir verdad soy incapaz de enumeraros todos los atributos CSS que existen en la actualidad, y es que actualmente el CSS3 está aún en fase de desarrollo, y no se puede saber con certeza que atributos más le añadirán.</p>
                <p>Antes de continuar con los estilos CSS creo que es el momento de ver dos etiquetas nuevas : "<i>div</i>" y "<i>span</i>"</p>
                <ul>
	                <li>
                    	<p>La etiqueta <b>div</b> simboliza un espacio de izquierda a derecha de la pantalla en el que podemos añadir todo tipo de etiquetas. Puede que os parezca una etiqueta descriptiva, pero no lo es, yo la utilizo principalmente para crear todo tipo de marcos, y resulta muy versátil.</p>
                    </li>
	                <li>
                    	<p>La etiqueta <b>span</b> simboliza un espacio de la pantalla con un tamaño indefinido en el que podemos añadir todo tipo de etiquetas. Esta etiqueta también nos puede servir para crear marcos, pero tened en cuenta de que ocupara solo el espacio que se necesite para representar los datos que contenga.</p>
                    </li>
                </ul>
                <p>Veamos un ejemplo para las dos etiquetas :</p>
                <?php 
/* -[INICIO devildrey33.ID2]-
<div style='background-color:rgb(255, 0, 0);'>
    <p>Texto de prueba en el que utilizaremos varios colores : </p>
    <p>
        <span style='color:rgb(0, 255, 255);'>amarillo</span> 
        <span style='color:rgb(0, 255, 0);'>verde</span>
        <span style='color:rgb(0, 0, 255);'>azul</span> 
        <span style='color:rgb(100, 100, 100);'>gris</span> 
    </p>
</div>
-[FIN devildrey33.ID2]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID2", "Etiquetas div y span", basename(__FILE__), "ID2"); 
                ?>
                <div style='background-color:rgb(255, 0, 0);'>
                    <p>Texto de prueba en el que utilizaremos varios colores : </p>
                    <p>
                        <span style='color:rgb(255, 255, 0);'>amarillo</span> 
                        <span style='color:rgb(0, 255, 0);'>verde</span>
                        <span style='color:rgb(0, 0, 255);'>azul</span> 
                        <span style='color:rgb(100, 100, 100);'>gris</span> 
                    </p>
                </div>                                                
                <p>Si en vez de utilizar las etiquetas <i>span</i> utilizáramos las etiquetas <i>div</i>, los textos quedarían separados automáticamente por nuevas líneas, es decir justo después de amarillo ocurriría un salto de línea y el texto verde quedaría inmediatamente debajo. Esta es la diferencia que quería que vierais entre las etiquetas <i>div</i> y las etiquetas <i>span</i>.</p>
                <p>De todas formas su comportamiento se puede modificar mediante estilos CSS, por lo que tampoco hace falta que os toméis estas reglas por norma.</p>
                <p>Bueno ya hemos visto de sobras las propiedades "<i>background-color</i>" y "<i>color</i>", ahora vamos a ver cómo podemos poner un borde de color negro a un span :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
<p>
    <span style='border-color:rgb(0,0,0); border-width:2px; border-style:solid;'>Texto enmarcado con solid</span> 
    <span style='border-color:rgb(0,0,0); border-width:2px; border-style:dotted;'>Texto enmarcado con dotted</span> 
    <span style='border-color:rgb(0,0,0); border-width:2px; border-style:dashed;'>Texto enmarcado con dashed</span> 
</p>
-[FIN devildrey33.ID3]-*/                        
                    $Base->PintarCodigo->PintarArchivoHTML("ID3", "Estilo del borde", basename(__FILE__), "ID3");     
                ?>
            	<p>
                	<span style='border-color:rgb(0,0,0); border-width:2px; border-style:solid;'>Texto enmarcado con solid</span> 
					<span style='border-color:rgb(0,0,0); border-width:2px; border-style:dotted;'>Texto enmarcado con dotted</span> 
					<span style='border-color:rgb(0,0,0); border-width:2px; border-style:dashed;'>Texto enmarcado con dashed</span>
                </p> 
				<p>En este último ejemplo utilizo las propiedades "<i>border-color</i>" para darle un color al fondo, "<i>border-width</i>" para especificar el tamaño del borde en pixeles, y "<i>boder-style</i>" para especificar el estilo de pintado del borde. Además de los tres estilos que os acabo de mostrar en este ejemplo existen varios mas, pero si os tengo que explicar uno a uno todos los valores que puede tener cada propiedad CSS no vamos a terminar los tutoriales ni para el 2020. Por ello os aconsejo que vayáis a google y busquéis "<i>border-style</i>", y en la primera entrada que os devuelva hay una web en la que nos describe todos los valores posibles.</p>
                <p>La mayoría de veces os encontrareis con webs en ingles, espero que no sea mucho problema para vosotros porque este tipo de cosas suelen estar siempre documentadas en ingles. De todas formas a base de acostumbrarse uno aprende ingles rápido para estas cosas, además pensad que se utiliza un lenguaje muy básico y descriptivo.</p>

                <p>Y con esto terminamos la cuarta parte del tutorial, si lo deseáis podéis ver el ejemplo online o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>
                
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_4_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Tutorial_HTML5_4.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                                
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_5" alt='Creación de paginas web desde cero (5 Más sobre los estilos)'>Creación de páginas web desde cero (5 Más sobre los estilos)</a>.</p>



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
                