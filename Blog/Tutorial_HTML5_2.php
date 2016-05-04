<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Creación de páginas web desde cero (2 Empezando)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (2 Empezando)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (2 Empezando)");
        
        ?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_HTML5.png" alt="Tutorial creación de paginas web desde cero" />
                <p>La intención de este tutorial es ir empezando a diseñar vuestra primera página, y ver la estructuración mínima necesaria además de algunas etiquetas obligatorias para todo documento HTML.</p>
                <p>Antes de nada también necesitareis elegir una aplicación para empezar a editar los documentos HTML, por lo que os recomendare alguna para windows. Aunque os recomiende aplicaciones para windows esto no quiere decir que no se pueda seguir este tutorial desde linux, pero en linux tenéis la ventaja de que cualquier editor de texto os vale perfectamente para el caso.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Como ya iréis viendo más adelante las páginas webs deben escribirse utilizando una codificación de caracteres. Que es una codificación de caracteres? pues por decirlo de una forma que se entienda, es una lista donde aparecen todos los caracteres que se pueden mostrar. Por ejemplo para escribir letras árabes, rusas, chinas, japonesas, etc.. se necesita una codificación específica ya que estos idiomas tienen sus propios caracteres que en muchos casos no tienen nada que ver con los idiomas que vienen del latín.</p>
                <p>En nuestro caso necesitamos utilizar una codificación que nos permita mostrar caracteres como la eñe, además de acentos y otros caracteres típicos de nuestra región. La codificación más extendida para ello en páginas web es la codificación UTF-8, pero ojo que no es la única que podríais utilizar. Windows por ejemplo para la gran mayoría de sus programas utiliza la codificación Windows-1252, y esta configuración es algo más pesada porque siempre requiere de 2 bytes para mostrar un carácter, por lo que no la recomiendo ya que nos interesa que la pagina web sea lo más ligera posible, UTF-8 utiliza normalmente un byte por carácter.</p>
                <p>En linux la gran mayoría de aplicaciones trabajan bajo la codificación UTF-8 por ello ya os he comentado antes que nos vale prácticamente cualquier editor. En cambio en windows si decidimos por ejemplo utilizar el bloc de notas vamos a tener muchos problemas con los acentos, ya que en el bloc de notas los escribiremos y los veremos bien, pero luego en los navegadores veremos caracteres raros.</p>
                <p>Yo personalmente utilizo Dreamweaver para escribir mis paginas, pero es una aplicación de pago, además de que puede resultar algo complicada y tiene varias funciones que si no se des-habilitan pueden acabar engañándonos a la hora de ver el resultado final. Como imagino que no tenéis intención de adquirir dicha aplicación, por ejemplo yo os recomendaría <a href="http://notepad-plus-plus.org/download/v5.9.6.1.html">Notepad++</a> que es un editor de texto libre que además nos resalta partes de la sintaxis, y nos permite tener varios documentos abiertos a la vez.</p>
                <p>Una vez tenemos una aplicación adecuada para empezar a crear páginas web ya podemos introducirnos en el mundo de las etiquetas HTML.</p>
                <p>Empecemos por las etiquetas mas básicas que toda web debe tener : "<i>!DOCTYPE HTML</i>", "<i>html</i>", "<i>head</i>", "<i>title</i>", "<i>meta</i>", "<i>body</i>" y "<i>p</i>".</p>
                <ul>
                    <li>
                    	<p>La etiqueta <b>"!DOCTYPE HTML"</b> es una etiqueta que le dice al navegador en que versión de HTML viene escrito el documento. Para especificar que se va a utilizar HTML5 basta con escribirla de la siguiente forma <b>SIEMPRE</b> al principio del documento :</p>
                        <?php
/* -[INICIO devildrey33.ID1]-
<!DOCTYPE HTML> <!-- Documento HTML 5 -->
-[FIN devildrey33.ID1]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID1", "Versión del documento HTML", basename(__FILE__), "ID1"); 
                        ?>
                        <p>A pesar de que os había contado anteriormente de que existen tres tipos de etiquetas (apertura, clausura, completa) la etiqueta <i>!DOCTYPE HTML</i> no pertenece a ninguno de esos tipos, y es una etiqueta especial que solo debe especificarse al principio del documento, por lo que no debemos cerrarla.</p>
                    </li>
                    <li>
                    	<p>La etiqueta <b>"html"</b> es la etiqueta principal de primer nivel donde ubicaremos todas las demás etiquetas de nuestra página web. Esta etiqueta requiere una apertura (generalmente en la segunda línea) y una clausura (en la última línea del documento).</p>
                        <?php 
/* -[INICIO devildrey33.ID2]-
<html>  <!-- Inicio del documento HTML -->
	...........
</html> <!-- Final del documento HTML -->
-[FIN devildrey33.ID2]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID2", "Etiqueta html", basename(__FILE__), "ID2"); ?>
                    </li>
                    <li>
                    	<p>La etiqueta <b>"head"</b> de segundo nivel (va dentro de la etiqueta html) es donde debemos ubicar aquellos datos que requieran ser cargados al principio. Hay varias reglas sobre lo que se pude añadir y lo que no se puede añadir dentro de la etiqueta head que veremos más adelante en profundidad. Por ahora bastara con que sepamos que el titulo de la pagina web va dentro de la etiqueta head.</p>
                        <?php
/* -[INICIO devildrey33.ID3]-
<html>      <!-- Inicio del documento HTML -->
    <head>  <!-- Inicio del head -->
            ...........
    </head> <!-- Final del head -->
</html>     <!-- Final del documento HTML -->
-[FIN devildrey33.ID3]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID3", "Etiqueta head", basename(__FILE__), "ID3");
                        ?>
                        <p>Otro pequeño apunte sobre la etiqueta "<i>head</i>" es que debe colocarse al principio de la etiqueta "<i>html</i>" ya que es la primera etiqueta que consultan los navegadores para saber los datos más relevantes del documento HTML.</p>
                    </li>
                    <li>
                    	<p>La etiqueta <b>"title"</b> de tercer nivel describe el titulo para el documento HTML, y siempre debe ir dentro de la etiqueta "<i>head</i>". Este título lo veremos luego en la pestaña que contenga nuestra página web dentro de un navegador.</p>
                        <?php 
/* -[INICIO devildrey33.ID4]-
<html>      <!-- Inicio del documento HTML -->
    <head>  <!-- Inicio del head -->
        <title>Titulo para el documento HTML</title>
    </head> <!-- Final del head -->
</html>     <!-- Final del documento HTML -->
-[FIN devildrey33.ID4]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID4", "Etiqueta title", basename(__FILE__), "ID4"); ?>
                    </li>
                    <li>
                    	<p>La etiqueta <b>"meta"</b> de tercer nivel usualmente se utiliza para describir información de la página, como puede ser el autor del documento, una descripción general, palabras clave, la última fecha de modificación, y la codificación del documento. Por el momento solo nos interesa la codificación del documento, más adelante veremos cómo utilizar la etiqueta meta para sus otras funciones.</p>
                        <?php 
/* -[INICIO devildrey33.ID5]-
<html>      <!-- Inicio del documento HTML -->
    <head>  <!-- Inicio del head -->
        <title>Titulo para el documento HTML</title>
        <meta charset='UTF-8'>
    </head> <!-- Final del head -->
</html>     <!-- Final del documento HTML -->-[FIN devildrey33.ID5]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID4", "Etiqueta meta", basename(__FILE__), "ID5"); 
                        ?>
                    </li>
                    <li>
                    	<p>La etiqueta <b>"body"</b> de segundo nivel describe que empieza el documento HTML, y a partir de esta podemos empezar a añadir etiquetas con textos, enlaces, imagines, etc.. al documento HTML.</p>
                        <?php 
/* -[INICIO devildrey33.ID6]-
<html>      <!-- Inicio del documento HTML --> 
    <head>  <!-- Inicio del head -->
        ............
    </head> <!-- Final del head -->
    <body>  <!-- Inicio del cuerpo para el documento HTML -->
            ............
    </body> <!-- Final del cuerpo para el documento HTML -->
</html>     <!-- Final del documento HTML -->
-[FIN devildrey33.ID6]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID4", "Etiqueta body", basename(__FILE__), "ID6");
                        ?>
                        <p>Esta etiqueta siempre tiene que ir ubicada justo después de la etiqueta "<i>head</i>" y es a partir de aquí donde realmente empieza el documento HTML que el usuario verá.</p>
                    <li>
                    	<p>Por último la etiqueta <b>"p"</b> que viene del ingles <i>paragraph</i>, es una etiqueta en la que podemos escribir texto. Al cerrar la etiqueta el navegador entenderá que debe incluir un salto de línea.</p>
                        <?php
/* -[INICIO devildrey33.ID7]-
<body>  <!-- Inicio del cuerpo para el documento HTML -->
    <p>Texto a mostrar en el documento</p>
    <p>Segunda linea de texto</p>
</body> <!-- Final del cuerpo para el documento HTML -->
-[FIN devildrey33.ID7]-*/                        
                            $Base->PintarCodigo->PintarArchivoHTML("ID4", "Etiqueta p", basename(__FILE__), "ID7");
                        ?>
                        <p>Aunque existen varias etiquetas con las que podemos mostrar texto en el documento html, esta es sin duda la más utilizada y la mas básica. Más adelante veremos otras etiquetas para mostrar texto y que diferencias tienen.</p>
                    </li>
                </ul>
                <p>Bien una vez conocemos estas etiquetas básicas ya podéis crear vuestro primer documento HTML y probar lo que habéis aprendido. Abrid vuestro editor de texto e introducid lo siguiente :</p>                
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID5", "Documento HTML", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_2_Ejemplo.html" );?>
                <p>Si estáis utilizando Notepad++ a la hora de guardar el documento debéis especificar que se trata de un documento del tipo <i>"Hyper Text Markup Language file"</i>. Una vez guardado para ver el resultado id al explorador de windows, buscad el documento, haced clic en el con el botón derecho de mouse y seleccionad la opción "Abrir con". Allí debería apareceros vuestro navegador por defecto, haced clic en él y podréis observar los resultados.</p>
                <p>Para los que estéis utilizando otro editor de texto aseguraros que a la hora de guardar el documento, este tiene la extensión "html".</p>
                <p><b>NOTA</b> : Para seguir estos tutoriales correctamente necesitáis un navegador actual, no vale internet explorer 8 o inferior. Personalmente os recomiendo Google Chrome, Firefox, Opera o Safari, y en última instancia Internet Explorer 9, pero siempre tiene que ser la última versión del navegador.</p>
                <p>Y con esto terminamos la segunda parte del tutorial, si lo deseáis podéis ver el ejemplo online o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_2_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Tutorial_HTML5_2.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>

                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_3" alt='Creación de paginas web desde cero (3 más etiquetas)'>Creación de páginas web desde cero (3 varias etiquetas)</a>.</p>



<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
                