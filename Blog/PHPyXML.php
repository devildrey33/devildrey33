<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Utilizar archivos XML con PHP");*/
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="PHP + XML">
        <meta name="keywords" content="PHP, XML">';

        $Base->InicioPlantilla(basename(__FILE__), "Utilizar archivos XML con PHP", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Utilizar archivos XML con PHP");
        
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_PHPyXML.png" alt="PHP y XML" />
                <p>XML son las siglas de e<b>X</b>tensible <b>M</b>arkup <b>L</b>anguage, y en esencia es un lenguaje que permite a los desarrolladores crear sus propias etiquetas para definir un conjunto de información.</p>
                <p>Pero que podemos hacer con XML? Por si solo no es más que un archivo de datos, que con PHP puede ser interpretado muy fácilmente.</p>
                <p>Por poner un ejemplo, vamos a imaginarnos que queremos hacer una lista de datos, y que queremos mostrar esa lista de datos en varios documentos PHP. Esto podríamos hacerlo con un archivo de texto a base de fopen / fread, con una conexión mysql extrayendo dichos datos de una base de datos, o utilizando un archivo XML.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Si lo hacemos con un archivo de texto plano, nos tendríamos que crear nuestras propias reglas dentro del archivo para distinguir la información, cosa que aumentaría considerablemente el trabajo de programación.</p>
                <p>Si utilizamos una base de datos, la información ya la tendríamos ordenada, pero cada vez que quisiéramos modificar esa lista de datos tendríamos que acceder a <b>myphpadmin</b>, o hacernos una página PHP para introducir datos, lo cual también acarrea trabajo extra.</p>
                <p>En cambio si utilizamos XML solo tenemos que editar dicho archivo y añadir / eliminar las etiquetas pertinentes para modificar la lista de información a nuestro antojo.</p>
                <p>PHP dispone de varias funciones para facilitar la interacción con archivos XML, en especial hoy vamos a tratar con estas tres : <a href="http://es2.php.net/manual/es/function.xml-parser-create.php" target="_new">xml_parser_create</a>, <a href="http://es2.php.net/manual/es/function.xml-parse-into-struct.php" target="_new">xml_parse_into_struct</a>, <a href="http://es2.php.net/manual/es/function.xml-parser-free.php" target="_new">xml_parser_free</a>.</p>
                <p>La función <a href="http://es2.php.net/manual/es/function.xml-parser-create.php" target="_new">xml_parser_create</a> crea un intérprete XML y devuelve su identificador para poder utilizarlo en otras funciones XML.</p>
                <p>La función <a href="http://es2.php.net/manual/es/function.xml-parse-into-struct.php" target="_new">xml_parse_into_struct</a> crea un array de datos con todo el contenido XML especificado dividido por etiquetas.</p>
                <p>La función <a href="http://es2.php.net/manual/es/function.xml-parser-free.php" target="_new">xml_parser_free</a> libera un intérprete XML generado anteriormente con xml_parser_create.</p>
                <p>Veamos un ejemplo en PHP para abrir y parsear un archivo XML :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("EjemploPHP", "Función PHP <b>LeerContenidoXML</b>", "../Ejemplos/PHPyXML/PHPyXML_Ejemplo.php", "LeerContenidoXML"); ?>
                <p>Por ejemplo en www.devildrey33.es el archivo index.php se genera automáticamente a partir de un archivo XML. En este archivo se indican todas las entradas, y a que categorías pertenece cada entrada. Veamos como quedaría el XML con las 5 últimas entradas de esta web :</p>
                <?php $Base->PintarCodigo->PintarArchivoXML("EjemploXML", "Archivo : PHPyXML_Ejemplo.xml", "../Ejemplos/PHPyXML/PHPyXML_Ejemplo.xml"); ?>
                <p>Ahora que ya conocemos la estructura del archivo XML y sabemos como parsear un archivo XML dentro de un array, veamos cómo podemos extraer los datos de dicho array :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("EjemploPHP2", "Función PHP <b>MostrarDatosXML</b>", "../Ejemplos/PHPyXML/PHPyXML_Ejemplo.php", "MostrarDatosXML"); ?>
                
                <p>Hay que destacar que se pueden especificar datos de dos formas dentro de una etiqueta. La primera es en forma de atributos, como serian : <b>Nombre</b>, <b>Dia</b>, <b>Mes</b>, <b>Any</b>, y <b>Url</b>. La otra forma seria añadir datos dentro de la etiqueta, por ejemplo "<span class='Codigo_AzulOscuro'>&lt;Entrada&gt;</span><span class='Codigo_Negro'>Mi entrada</span><span class='Codigo_AzulOscuro'>&lt;/Entrada&gt;</span>", y para acceder al texto "<b>Mi entrada</b>" deberíamos acceder al atributo '<b>value</b>' al encontrar una etiqueta <b>ENTRADA</b> con el '<b>type</b>' <b>open</b>.</p>
                <div class='nota'>Los nombres de las etiquetas y sus atributos durante el parsing se convierten a mayúsculas, por lo que no intentéis buscarlos utilizando minúsculas.</div>
                <p>En cuanto a la función del ejemplo anterior, en esencia recorremos cada etiqueta que existe en el array DatosXML, la identificamos y la imprimimos en el documento final con un '<b>echo</b>'.</p>
                <p>Hay que destacar que existen 3 tipos de etiquetas : '<b>complete</b>', '<b>open</b>' y '<b>close</b>'. </p>
                <p>Es muy simple una etiqueta '<b>complete</b>' es la que termina con una '/' al final, por ejemplo "<span class='Codigo_AzulOscuro'>&lt;EntradaCategoria Nombre=<span class='Codigo_Verde'>'Nombre'</span> /&gt;</span>".</b>
                <p>Una etiqueta '<b>open</b>' es una etiqueta que no tiene ninguna '<b>/</b>' y sirve para indicar el inicio de ese campo. Y una etiqueta '<b>close</b>' es la que empieza con una '<b>/</b>', y indica que se ha terminado el contenido de dicha etiqueta.</p>
                <p>Y esto es todo por hoy, podeis descargar el ejemplo de este tutorial, y ver como quedaria la pagina web una vez hecho el parsing al archivo XML.</p>


                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Ejemplos/PHPyXML/PHPyXML_Ejemplo.php" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/PHPyXML.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
                