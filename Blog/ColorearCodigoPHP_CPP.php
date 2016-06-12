<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Colorear código con PHP (Parte 5 C++)");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="Colorear código C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Colorear código con PHP (Parte 5 C++)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Colorear código con PHP (Parte 5 C++)");
        
        ?>	

                <!-- INTRODUCCION -->
                <p>Esta es la quinta entrega de los tutoriales para colorear código con PHP, que en este caso está dedicada a códigos C/C++ con el estilo grafico del VisualC.</p>
                <p>Para ello utilizaremos un sistema muy parecido al que se utilizo con <a href="ColorearCodigoPHP_JavaScript.php">Colorear código con PHP (Parte 3 JavaScript)</a> y <a href="ColorearCodigoPHP_PHP.php">Colorear código con PHP (Parte 4 PHP)</a> adaptado para este caso concreto. Por ello vamos a disponer de un array que utilizaremos como Diccionario y que podremos modificar fácilmente en caso de encontrar más palabras reservadas que se me puedan haber pasado.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero que necesitamos es hacernos una idea de que partes del código queremos colorear y como, para ello vamos a ver el siguiente ejemplo de código C++ :</p> <div style='clear:both'></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEjemploCpp", "Ejemplo de un codigo en C++", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CPP_Ejemplo.h"); ?>
                <p>En esencia podemos ver involucrados cuatro colores : verde para comentarios, rojo para cadenas de texto, azul para palabras reservadas, y negro para lo demás. Actualmente se usan mas colores en VisualStudio en fragmentos de código dentro de definiciones que no están definidas (En visual Studio 2008 salen en gris, en el 2010 ya salen con colores normales pero más claros), pero como no es viable parsear todos los documentos y hacerme una lista de definiciones para saber si el código encapsulado dentro de un <b>"#ifdef"</b> se va a compilar, omitiremos esta regla.</p>
                <p>En definitiva vamos a necesitar cuatro colores, así que ya podemos ir definiéndolos en un archivo CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDColoresCSS", "Colores necesarios para el código C/C++", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CPP_Ejemplo.php", "ColoresCSS"); ?>
                <p>Una vez tenemos los colores definidos podemos pasar a definir el diccionario de palabras reservadas, y el array para los delimitadores :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDarrays", "Diccionario de palabras reservadas, y delimitadores", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CPP_Ejemplo.php", "arrays"); ?>
                <p>A pesar de que todas las palabras reservadas van en color azul, prefiero preservar el espacio para indicar el color por si algún día nos sorprenden en una nueva versión con colores nuevos.</p>
                <p>Ahora que tenemos el diccionario y los delimitadores, vamos a recordar cómo funcionaba el algoritmo para pintar código. Teníamos que recorrer todo el código carácter a carácter para encontrar pistas que nos permitieran determinar el color a utilizar.</p>
                <p>Para hacer esto nos basábamos en una variable <b>$Estado</b> la cual nos indicaba que teníamos que buscar. Esta vez dividiré la función en tres partes, la primera parte será el principio del pre-escaneo y el estado "" que podemos llamarla "<b>Sin estado</b>" :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarC1", "Función PintarC parte 1", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CPP_Ejemplo.php", "PintarC1"); ?>
                <p>Cuando nos encontramos en el estado "<b>Sin estado</b>" nos dedicamos a buscar algún carácter que nos ayude a identificar otro posible estado que por ende significara un color distinto. Por ejemplo en la línea 18 miramos si el carácter actual es "<b>/</b>" y el que viene después es "<b>*</b>", en caso de que la comprobación sea cierta sabemos con seguridad de que nos encontramos al principio de un comentario multilinea, y por ello cambiamos el estado a "<b>ComentarioML</b>", además abrimos un span con la clase "<b>Codigo_Verde</b>" para que todo lo que introduzcamos después quede de ese color. También separamos todo el texto anterior y lo almacenamos en un espacio del array <b>$Palabras</b>.</p>
                <p>Si la comprobación de estados no da ningún resultado pasamos al else en la línea 45, y lo que hacemos es añadir ese carácter en la variable <b>$PalabraActual</b>, luego miramos si el siguiente carácter es un delimitador, ya que en caso de serlo nos interesa mantener la palabra en un espacio del array separada del resto. Otra cosa a añadir es que miramos que el siguiente carácter no sea un delimitador, ya que por ejemplo si tenemos 10 espacios juntos uno detrás de otro estos acabarían introduciéndose cada uno en una posición del array de <b>$Palabras</b>, y esto para códigos enormes puede resultar malo para la memoria, y no queremos quedarnos sin memoria a medio parsing. De esta forma si hay varios delimitadores juntos se quedaran todos en una posición del array <b>$Palabras</b> en vez de ocupar un espacio cada uno.</p>
                <p>Pasemos a ver la parte de los estados :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarC2", "Función PintarC parte 2", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CPP_Ejemplo.php", "PintarC2"); ?>
                <p>La gran mayoría de estados ya los vimos en profundidad en los anteriores tutoriales, en este caso nos interesa pensar específicamente en los estados "<b>Directiva</b>" y "<b>Directiva_Fin</b>".</p>
                <p>El estado "<b>Directiva</b>" indica que nos encontramos dentro de una directiva que empieza por #, como por ejemplo #include. Todo sería muy fácil si los includes fueran siempre entre comillas, pero no es el caso, ya que podemos encontrarnos includes que van entre "<b>&lt;</b>" y "<b>&gt;</b>". Estos includes buscan los archivos en los directorios especificados en las opciones del compilador, el caso es que esa parte de código va en rojo y no hay ningún otro momento en que esto suceda. Para solucionar este problema miramos cuando se encuentra un espacio después de la directiva y asignamos el estado "<b>Directiva_Fin</b>".</p>
                <p>Al llegar al estado "<b>Directiva_Fin</b>" prácticamente es como si estuviéramos en la fase "<b>Sin estado</b>" pero con la diferencia de que necesitamos encontrar los caracteres "<b>&lt;</b>" y "<b>&gt;</b>" para poner en rojo su texto. Si os fijáis en la línea 14 miramos si el carácter actual es "<b>&</b>", y os preguntareis, porque? pues bien al principio de todo de la parte 1 de la función PintarC estamos re-emplazando los caracteres "<b>&lt;</b>" y "<b>&gt;</b>" por "<b>&amp;lt;</b>" y "<b>&amp;gt;</b>" ya que en html meter los caracteres "<b>&lt;</b>" y "<b>&gt;</b>" no suele ir muy bien por la simple razón de que las etiquetas van encapsuladas dentro de esos caracteres.</p>
                <p>Más tarde en las líneas 15 y 19 se ve un if que contiene un <a href="http://php.net/manual/es/function.substr.php" target="_new">substr</a> que obtiene 4 caracteres el cual se compara con "<b>&lt;</b>" y "<b>&gt;</b>" realmente no se está utilizando esos caracteres si no que se está utilizando "<b>&amp;lt;</b>" y "<b>&amp;gt;</b>", pero al pasar el código a formato HTML se ven así.</p>
                <p>Además de buscar el carácter "<b>&amp;</b>" luego empezamos a buscar caracteres que nos indiquen el inicio de un comentario o el inicio de un string. De ser el caso cambiamos directamente el estado a "<b>Comentario</b>", "<b>ComentarioML</b>", "<b>String1</b>" y "<b>String2</b>" según convenga.</p>
                <p>Por ultimo también miramos si se ha llegado al final de la línea de código, en ese caso volvemos al estado "<b>Sin estado</b>".</p>
                <p>Ahora que ya tenemos más o menos claro el tema de los estados podemos ver la parte final de la función PintarC, en la que se realiza el post-escaneo :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarC3", "Función PintarC parte 3, post-escaneo", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CPP_Ejemplo.php", "PintarC3"); ?>
                <p>Esta ultima parte tiene por objetivo recorrer el array <b>$Palabras</b> que se ha construido anteriormente y determinar que partes del array no han sido inspeccionadas, para ellos simplemente miramos el primer carácter de cada posición del array y comprobamos si el carácter es "<b>&lt;</b>". En caso de que no sea el carácter "<b>&lt;</b>" sabemos que esa posición del array no empieza con un "<b>span</b>", y por lo tanto necesita ser analizada para buscar si tiene alguna palabra reservada que necesite ser pintada.</p>
                <p>A parte de este código nos quedan varias funciones por comentar : _FinString1. _FinString2, y _BuscarDelimitadorC. Pero como son en esencia prácticamente iguales por no decir idénticas que en los dos últimos ejemplos las omitiré por hoy.</p>
                <p>Y esto es todo! espero que este tutorial os sirva de ayuda. <strike>Como siempre podéis descargar el ejemplo, o ver la versión online</strike>.</p>
                
                <div class='nota'>Este código ha quedado obsoleto, por favor echa un vistazo a la versión 2 : <a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>.</div>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>

                