<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Colorear código con PHP (Parte 4 PHP)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="Colorear código PHP">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Colorear código con PHP (Parte 4 PHP)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Colorear código con PHP (Parte 4 PHP)");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ColoresPHP.png" alt="Colorear código con PHP (Parte 4 PHP)" />
                <p>Hoy seguimos con los tutoriales para pintar código utilizando PHP, y el objetivo será colorear código PHP.</p>
                <p>Con este tutorial prácticamente se cierra el círculo para poder hacer una función que pinte un archivo HTML/PHP entero incluyendo posibles partes de código JavaScript, CSS y PHP.</p>
                <p>A decir verdad ya dispongo de un objeto para esta web el cual creo que ya está completo, y que me permite pintar un archivo HTML/PHP entero del tirón, pero voy a dejar unos días mas para probarlo y probablemente lo liberare en la séptima entrega de los tutoriales "Colorear código con PHP" que supongo sacare a principios de la semana que viene.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para el caso de hoy vamos a utilizar prácticamente el mismo algoritmo que utilizamos en la parte 3 : <a href="ColorearCodigoPHP_JavaScript.php">Colorear código con PHP (Parte 3 JavaScript)</a>. Por lo que no voy a extenderme demasiado explicando cosas que creo que ayer quedaron claras.</p>
                <p>Lo primero será ver un ejemplo de código PHP coloreado que aunque no tenga sentido alguno, nos servirá para hacernos una idea de que partes necesitamos identificar y colorear.</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDEjemploPHPAbsurdo", "Ejemplo de una función PHP absurda", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "EjemploPHP"); ?>
                <p>Como podemos observar en el ejemplo anterior en esencia se utilizan 5 colores a parte del negro, y prácticamente queda todo el código de colorines.</p>
                <p>Por una parte tenemos los comentarios en amarillo, variables en azul claro, cadenas de caracteres y valores en rojo, palabras reservadas para condiciones en verde, y palabras reservadas para funciones en azul.</p>
                <p>Viendo esto ya sabemos que colores vamos a necesitar, por lo que ya podemos escribir el css pertinente :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDColoresCSS", "CSS con los colores necesarios", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "ColoresCSS"); ?>
                <p>Una vez tenemos los colores escritos dentro del CSS podemos empezar con el array de delimitadores, y el array que contiene el diccionario de palabras php a colorear :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDarrays", "Arrays con los delimitadores y las palabras reservadas", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "arrays"); ?>
                <p>Cabe recordar que el primer array es el que se usara para saber cómo separar las palabras, y el segundo array se utilizara para saber que palabras hay que colorear y con qué color.</p>
                <p>Al igual que con JavaScript el código tiene varias complicaciones para ser coloreado, así que vamos a hacer un resumen de las normas que deberíamos seguir :</p>
                <ul>
                <li>El primer problema que tenemos es que no queremos buscar palabras en el diccionario y re-emplazarlas si están dentro de un comentario o de una cadena de caracteres. Para evitar esto, lo mejor que se me ocurre es escanear todo el texto introducido una primera vez y separar el código en partes.</li>
                <li>Los comentarios deben ir en una parte del array sin separar nada de ellos.</li>
                <li>Los strings deben ir en una parte del array sin separar nada de ellos, además hay que diferenciar si el string empieza con una comilla o con comillas dobles.</li>
                <li>Las demás palabras deben ir separadas cuando se encuentre un delimitador.</li>
                <li>Los valores numéricos deben ir separados en una parte del array. Hay que identificar los valores numéricos de forma que tengan un delimitador al principio y un delimitador al final.</li>
                <li>Las variables deben ir separadas en una parte del array. Estas se pueden diferenciar porque llevan el símbolo  del dólar  delante : $</li>
                <li>Tanto los strings como los comentarios llevaran puesto el "&lt;span&gt;" al principio para determinar que esa posición del array no debe re-emplazarse nada más.</li>
                </ul>
                <p>Con esto claro ya podemos ver la primera parte de la función PintarPHP :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarPHP1", "Función PintarPHP parte 1", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "PintarPHP1"); ?>
                <p>En esta primera parte de la función recorremos todo el array <b>$Texto</b> mirando el <b>$Estado</b> en el que nos encontramos.</p>
                <p>Hay varios estados, y dependiendo del estado se buscaran unos caracteres en concreto para salir de dicho estado. Podemos encontrar los siguientes estados : "" (sin estado), "<b>ComentarioML</b>" (comentario multilinea /* */), "<b>Comentario</b>" (comentario hasta el final de la línea //), "<b>String1</b>" (string con comillas simples 'str'), "<b>String2</b>" (string con comillas dobles "str"), "<b>Variable</b>" (una variable del código php, empieza por $) y "<b>Numero</b>" (un valor numérico).</p>
                <p>Si el estado esta vacio / sin estado, lo que se hace es ir buscando hasta que un carácter nos indique un nuevo estado, y cuando hay un estado asignado, según el estado solo se podrá salir de él con cierta combinación de caracteres.</p>
                <p>Al final de este bucle nos queda el array <b>$Palabras</b> lleno de palabras indefinidas, comentarios, strings, variables, y valores numéricos. Exceptuando las palabras indefinidas todas las demás ya estarán pintadas por lo que llevaran al principio un "&lt;span&gt;".</p>
                <p>Veamos la segunda parte de la función PintarPHP :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarPHP2", "Función PintarPHP parte 2", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "PintarPHP2"); ?>
                <p>En esencia en el post-análisis recorremos el array de palabras que creamos anteriormente donde deberíamos tener el código separado por comentarios, strings o palabras. Lo primero que miramos en cada palabra, es que el primer carácter no sea '&lt;' porque si lo fuera estaríamos tocando un comentario o un string.</p>
                <p>Luego recorremos el array <b>$_DiccionarioPHP</b> y miramos con la función <a href="http://php.net/manual/es/function.strpos.php" target="_new">strpos</a> si encontramos la palabra del diccionario dentro de nuestro array de palabras del primer análisis. Si la encontramos, nos aseguramos que dicha palabra venga delimitada tanto al principio como al final con uno de los caracteres delimitadores. Y finalmente en el caso de que dicha palabra venga bien delimitada utilizamos <a href="http://php.net/manual/es/function.str-replace.php" target="_new">str_replace</a> para añadir un span con su color correspondiente.</p>
                <p>Vista la función PintarPHP nos queda echar un vistazo varias funciones de apoyo. Empezaremos por _FinString1 y _FinString2 :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDFinString", "Funciones FinString", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "FinString"); ?>
                <p>En la parte 3 de estos tutoriales se vio muy bien el porque de estas funciones, por lo que no me voy a extender mas. En esencia os dire que sirven para detectar el final correcto de un string.</p>
                <p>Por ultimo queda echar un vistazo a las funciones _EsNumero y _BuscarDelimitadorPHP : </p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDEsNumero", "Funciones _EsNumero y _BuscarDelimitadorPHP", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php", "EsNumero"); ?>
                <p>No hay mucho que contar sobre estas dos funciones, la primera básicamente mira si el carácter es un numero o no, y la segunda mira si el carácter es el mismo que uno de los caracteres del array <b>$_DelimitadoresPHP</b>.</p>
                <p>Y con esto terminamos por hoy, espero que este tutorial os sirva si algún día tenéis la intención de pintar un código PHP en vuestra web, o almenos para haceros una idea de como parsear códigos complicados con PHP.</p>

                <table class='Centrado'><tr>
                        <td><a class='Boton' href="/Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_PHP_Ejemplo.php" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton' href="/Descargas/ColorearCodigoPHP_PHP.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
