<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Menu PHP + XML + JQuery + JavaScript + Css");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Menu PHP">
        <meta name="keywords" content="Menu PHP, Menu XML, Menu JQuery, Menu JavaScript">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Menu PHP + XML + JQuery + JavaScript + Css", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Menu PHP + XML + JQuery + JavaScript + Css");

?>	
 
                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_MenuWebFijo.png" alt="Menu PHP + XML + JQuery + JavaScript + Css" />
                <p>Hoy para salir un poco de la rutina de la creación de páginas web desde cero y del objeto canvas 2d, os voy a mostrar cómo crear un menú para vuestra pagina web igual al que tengo en la mía.</p>
                <p>Este menú obtiene sus datos a partir de un archivo XML, y puede tener tantos submenús como quepan en pantalla, además es absolutamente recursivo por lo que podemos crear tantos submenús dentro de un submenú como nos hagan falta (siempre que el tamaño de la pantalla nos lo permita).</p>
                <p>Por desgracia está pensado para trabajar en una posición fija de la ventana del navegador, por lo que habría que retocarlo para trabajar con posiciones relativas / absolutas (en términos de la propiedad css <i>position</i>).</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para empezar vamos a ver un ejemplo de un archivo XML desde el que se crearían los menús :</p>
                <?php $Base->PintarCodigo->PintarArchivoXML("ID1", "Archivo : MenuWebFijo_Ejemplo.xml", "../Ejemplos/devildrey33_Menu/MenuWebFijo_Ejemplo.xml"); ?>
                <p>Como podéis observar el menú constaría en este caso de dos padres, uno de ellos tiene 4 submenús, uno de los cuales tiene un hijo que a su vez tiene otro hijo. En cualquier submenú se puede especificar una url sea un padre o un submenú con hijos, o un submenú final.</p>
                <p>Viendo este archivo XML ya podemos ir pensando en cómo crear una estructura de datos en PHP para almacenar todo esto. A decir verdad en este punto tuve algún que otro problema ya que estoy muy acostumbrado a los punteros en C/C++ pero en PHP no hay punteros... En PHP hay que usar referencias, y a diferencia de C/C++ las referencias pueden ser inicializadas cuando queramos, por lo que al final me sirvieron para este caso en concreto.</p>
                <p>La idea es almacenar todos los datos de un submenú dentro de un objeto, y que este objeto tenga una referencia a su menú padre, y una referencia a sus submenús hijos, de forma que podamos recorrer este objeto recursivamente.</p>
                <p>Veamos como quedaría creado el objeto que almacenara un submenú con sus referencias a su padre y sus hijos :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID2", "clase devildrey33_SubMenu", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.php", "devildrey33_SubMenu"); ?>
                <p>Una vez tenemos el contenedor para almacenar el árbol de menús, podemos pasar a ver como leeríamos el archivo XML, y como almacenaríamos los datos en la clase <i>devildrey33_SubMenu</i> :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID3", "Funcion devildrey33_Menu::LeerContenidoXML", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.php", "LeerContenidoXML"); ?>
                <p>Para empezar utilizo las funciones <a href="http://php.net/manual/es/function.fopen.php" target="_blank">fopen</a>, <a href="http://php.net/manual/es/function.fread.php" target="_blank">fread</a> y <a href="http://php.net/manual/es/function.fclose.php" target="_blank">fclose</a> para leer todo el contenido del archivo en una variable, luego utilizo las funciones <a href="http://php.net/manual/es/function.xml-parser-create.php" target="_blank">xml_parser_create</a>, <a href="http://php.net/manual/es/function.xml-parse-into-struct.php" target="_blank">xml_parse_into_struct</a>, y <a href="http://php.net/manual/es/function.xml-parser-free.php" target="_blank">xml_parser_free</a> para separar todos los datos leídos del xml en una estructura de datos que resulta mucho mas fácil de utilizar.</p>
                <p>A partir de la línea 13 creo lo que será el menú súper padre, que contendrá los menús padre que pueda tener el archivo XML, y dentro a sus hijos, y los hijos de sus hijos, etc...</p>
                <p>En la línea 15 creo una referencia que apunta al menú súper padre, para ir moviéndonos dentro del árbol con más comodidad.</p>
                <p>En la línea 18 empieza el bucle que escanea toda la estructura de datos previamente creada con las funciones <i>xml_parse*</i>, dentro de este bucle nos podemos encontrar tres tipos de etiquetas fácilmente diferenciables.</p>
                <p>Solo buscaremos las etiquetas con el tag "<i>CREARMENU</i>" que pueden ser de tres tipos : "<i>open</i>", "<i>close</i>", y "<i>complete</i>". Las etiquetas del tipo "<i>open</i>" nos indican que dentro encontraremos uno o más hijos por lo que apuntaremos la referencia <i>MenuActual</i> al último hijo de este menú, las etiquetas del tipo "<i>close</i>" nos indican que ya no hay más hijos dentro y que debemos subir un escalón de la jerarquía (dicho de otra forma vamos a hacer que la referencia <i>MenuActual</i> apunte al padre de este menú), y por último las etiquetas del tipo "<i>complete</i>" nos indican que ese submenú no tiene hijos por lo que no necesitamos modificar la referencia del <i>MenuActual</i>.</p>
				<p>Una vez hecho este proceso tenemos una variable llamada <i>_Menus</i> dentro de la clase <i>devildrey33_Menu</i> que contiene un árbol a base de objetos <i>devildrey33_SubMenu</i> con todos los datos necesarios para crear los menús.</p>
                <p>Ahora veamos las funciones que crearan los menús recursivamente dentro del documento HTML :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID4", "Funciones devildrey33_Menu::CrearMenus y devildrey33_Menu::_CrearMenuRecursivo", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.php", "CrearMenus"); ?>
                <p>Esta función a simple vista puede parecer un galimatías a causa de los nombres de clase y de id que se utilizan ya que son bastante largos, pero a decir verdad no es que sea muy complicada. Lo más importante es situar todos los divs con su clase e id pertinentes de forma que queden bien enlazados a sus funciones JavaScript, hay varios tipos de clases : "<i>devildrey33_MenuPadre</i>", "<i>devildrey33_SubMenu</i>" y "<i>devildrey33_SubMenuItem</i>". De la misma forma también hay varios tipos de id con los mismos nombres que las clases seguidos de un guion bajo y su ID numérica.</p>
                <p>Además también hay varias funciones JavaScript para hacer funcionar este menú que son : "<i>devildrey33_MostrarMenu</i>", "<i>devildrey33_MostrarSubMenu</i>", "<i>devildrey33_MostrarSubMenuItem</i>", y "<i>devildrey33_TemporizadorOcultarMenus</i>". La primera función se utiliza exclusivamente cuando pasamos el mouse por encima del menú padre, y muestra el primer submenú, la segunda función se utiliza para mostrar submenús de segundo nivel, la tercera función se utiliza para resaltar submenús que no tienen hijos, y la cuarta función se utiliza para activar un temporizador que ocultara los menús pasado un segundo.</p>
                <p>Con esto ya habéis visto todo lo relacionado con PHP y este menú, ahora tocara ver las funciones javascript, empezaremos por <i>devildrey33_MostrarMenu</i> :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID5", "Funcion devildrey33_MostrarMenu", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.js", "MostrarMenu"); ?>
                <p>Lo más destacable de esta función son las líneas 5 y 7 en las que selecciono todos los objetos con la clase "<i>devildrey33_MenuSuperior_Resaltado</i>" y "<i>devildrey33_SubMenu_Resaltado</i>" y los cambio a las clases "<i>devildrey33_MenuSuperior</i>" y "<i>devildrey33_SubMenu</i>" respectivamente. De esta forma quitamos todos los efectos de resaltado en todos los menús.</p>
                <p>Luego en la línea 9 escondemos todos los objetos que tengan la clase "<i>devildrey33_SubMenu</i>", y finalmente buscamos el menú padre y submenús a mostrar, les asignamos sus estilos, los mostramos, y por ultimo desactivamos el temporizador que oculta los menús.</p>
                <div class='nota'>Inicialmente utilizaba los selectores :hover del CSS para resaltar los menús, pero me encontré con que opera no se lleva bien con los objetos con "position:fixed" y al final tuve que re-escribir todo el código....</div>
                <p>Veamos la función <i>devildrey33_MostrarSubMenu</i> :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID6", "Funcion devildrey33_MostrarSubMenu", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.js", "MostrarSubMenu"); ?>
                <p>Esta función trabaja de un modo similar a la función <i>devildrey33_MostrarMenu</i>, con la diferencia de que al ocultarlo todo luego tenemos que encontrar los submenús padre y el menú padre para volverlos a mostrar. Este proceso lo podéis ver desde la línea 7 hasta la línea 18, donde a partir de la id voy quitando los tres últimos caracteres para localizar los menús padre hasta que la id solo tiene 5 caracteres.</p>
                <p>Veamos la función <i>devildrey33_ResaltarMenuItem</i> :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID7", "Funcion devildrey33_ResaltarMenuItem", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.js", "ResaltarMenuItem"); ?>
                <p>Esta función también trabaja de una forma similar a la función <i>devildrey33_MostrarSubMenu</i>, pero su único objetivo es resaltar un ítem que no tiene hijos. Al igual que en la función <i>devildrey33_MostrarSubMenu</i> también hay que localizar todos los padres y volverlos a mostrar.</p>
                <p>Y para terminar con el JavaScript y el JQuery veamos las funciones <i>devildrey33_TemporizadorOcultarMenus</i> y <i>devildrey33_OcultarMenus</i> :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID8", "Funciones devildrey33_TemporizadorOcultarMenus y devildrey33_OcultarMenus", "../Ejemplos/devildrey33_Menu/devildrey33_Menu.js", "OcultarMenus"); ?>
                <p>Lo más destacable de estas funciones es que la función <i>devildrey33_TemporizadorOcultarMenus</i> con el parámetro <i>Activar</i> a 0 desactiva el temporizador utilizando la función <a href="http://www.w3schools.com/jsref/met_win_clearinterval.asp" target="_blank">clearInterval</a>, y con el parámetro <i>Activar</i> a 1 activa el temporizador utilizando la función <a href="http://www.w3schools.com/jsref/met_win_setinterval.asp" target="_blank">setInterval</a>.</p>
                <p>La función <i>devildrey33_OcultarMenus</i> simplemente se limita a eliminar el temporizador y a ocultar todos los menús padre y submenús.</p>
                <p>Veamos como quedaría el documento PHP final con el menú incluido :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID9", "Archivo : Ejemplo.php", "../Ejemplos/devildrey33_Menu/Ejemplo.php"); ?>
                <p>Por último no creo que sea necesario mostrar los estilos css, pero si os voy a remarcar que están diseñados para trabajar con la propiedad "<i>position:fixed</i>" por lo que el menú tiene que quedar siempre fijo en la ventana.</p>
                <p>Y esto es todo por hoy, como siempre podéis ver el ejemplo online (aunque también tenéis otro ejemplo con el menú superior de esta página web), o descargar el ejemplo.</p>
                
                
                <table class='Centrado'><tr>
                        <td><a class='Boton' href="/Ejemplos/devildrey33_Menu/Ejemplo.php" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton' href="/Descargas/devildrey33_Menu.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>