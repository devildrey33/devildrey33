<?php 
	/*include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Colorear código con PHP (Parte 1 XML)");*/
        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="Colorear código XML">';

        $Base->InicioPlantilla(basename(__FILE__), "Colorear código con PHP (Parte 1 XML)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Colorear código con PHP (Parte 1 XML)");

?>	

                <!-- INTRODUCCION -->
                <p>Últimamente ando bastante liado intentando automatizar varios aspectos de www.devildrey33.es, en especial estoy creándome unas funciones para colorear todo tipo de códigos.</p>
                <p>La idea es tener un conjunto de funciones php que me faciliten la vida a la hora de mostrar archivos de código.</p>
                <p>Para empezar vamos a hacer algo fácil, que será colorear un código XML con el formato que utiliza Dreamweaver.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En primer lugar tenemos que tener muy claro que partes hay que poner de un color o de otro. En un archivo XML básicamente tenemos cuatro partes diferenciales que van a ir cada una en un color, y son : <b>etiquetas</b>, <b>cadenas de caracteres</b>, <b>conjuntos de datos</b>, y <b>comentarios</b>.</p>
                <p>Veamos un ejemplo básico de un archivo XML :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<!-- Comentario -->
<Etiqueta Atributo='Cadena de caracteres'>Conjunto de datos</Etiqueta>
 -[FIN devildrey33.ID1]-*/
                    $Base->PintarCodigo->PintarArchivoXML("EjemploXML", "Ejemplo XML", basename(__FILE__), "ID1");                     
                ?>
                <p>Como podéis ver el comentario está pintado de color gris, la etiqueta de color azul, la cadena de caracteres del atributo de color verde, y los datos internos de la etiqueta de color negro.</p>
                <p>Obviamente podemos poner los colores como nos plazca, pero personalmente prefiero tener esta configuración de colores, que me es más familiar. Google chrome por ejemplo utiliza su propia configuración de colores y en vez de tener cuatro colores para diferenciar las distintas partes del XML tiene cinco.</p>
                <p>Ahora vamos a hacer unos estilos css los cuatro colores que queremos usar :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("EjemploCSS", "CSS con los colores necesarios", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_XML_Ejemplo.css"); ?>
                <p>En esencia se han declarado los cuatro colores que además utilizaran la fuente <b>Courier New</b> de 12 pixeles.</p>
                <p>Por último nos queda hacer la función que coloreara el código XML y lo mostrara en un formato HTML valido.</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("EjemploPHP", "Función PHP <b>PintarXML</b>", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_XML_Ejemplo.php", "PintarXML"); ?>
                <p>En la línea 4 del código utilizamos <a href="http://php.net/manual/es/function.str-replace.php">str_replace</a> para re-emplazar todas las tabulaciones por cuatro espacios, (ojo con esto ya que puede dejarnos el archivo mal tabulado, pero es que no he encontrado una forma de reducir los 8 caracteres por defecto que tiene la tabulación en marcos PRE, y aunque existe un estilo css3 para ello, no funciona en algunos navegadores).</p>
                <p>En la línea 5 declaramos la variable <b>$TextoColoreado</b>, que será donde irá a parar todo el texto revisado y con sus correspondientes spans con su color.</p>
                <p>En la linea 6 declaramos la variable <b>$Estado</b>, la cual puede ser : </p>
                <table class='Tabla'>
                    <tr><td><b>""</b></td><td>Sin Estado</td></tr>
                    <tr><td><b>"String1"</b></td><td>String declarado con comillas simples 'Str'.</td></tr>
                    <tr><td><b>"String2"</b></td><td>String declarado con comillas dobles "Str".</td></tr>
                    <tr><td><b>"Comentario"</b></td><td>Comentario del estilo HTML &lt;!-- --&gt;.</td></tr>
                </table>
                <p>Para entender esto mejor, pongamos por ejemplo que encontramos el siguiente comentario : <b>&lt!-- prueba de cadena de caracteres "hola <>" --&gt;</b></p>
                <p>Como veis dentro del comentario se utilizan comillas y los caracteres <b>&lt;</b> y <b>&gt;</b> pero como forman parte del comentario no debemos escanearlos, por lo que mientras estemos dentro de un comentario ignoraremos esos caracteres. Lo mismo pasa con las cadenas de caracteres, si dentro de ellas encontramos esos caracteres también serán ignorados.</p>
                <p>A partir de la línea 8 empieza el bucle que recorre todo el texto carácter a carácter, y lo primero que miramos es el estado.</p>
                <p>Si el estado esta vacio, buscamos cualquier carácter que nos indique que color tenemos que utilizar.</p>
                <p>Si estado es "<b>Comentario</b>" buscamos específicamente el carácter "<b>&gt;</b>" y que los dos caracretes anteriores sean "<b>-</b>" para salir de ese estado.</p>
                <p>Si el estado es "<b>String1</b>" buscamos la próxima comilla simple para salir del estado. (No nos vale la comilla doble ya que no podemos empezar un string con comillas simples y terminarlo con comillas dobles).</p>
                <p>Si el estado es "<b>String2</b>" buscamos la próxima comilla doble para salir del estado.</p>
                <p>Y finalmente devolvemos el texto coloreado.</p>
                <p>Esto es todo por hoy, espero que este documento os sirva de ayuda si algún día queréis hacer una función para pintar códigos XML para vuestra web.</p>

                <div class='nota'>Este código ha quedado obsoleto, por favor echa un vistazo a la versión 2 : <a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>.</div>                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>

