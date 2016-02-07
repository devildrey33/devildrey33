<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Colorear código con PHP (Parte 2 CSS)");*/
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="Colorear código CSS">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Colorear código con PHP (Parte 2 CSS)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Colorear código con PHP (Parte 2 CSS)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ColoresCSS.png" alt="Colorear código con PHP (Parte 2 CSS)" />
                <p>Continuando con el tutorial de ayer, hoy nos toca ver como crear un codigo php que nos sirva para pintar codigo css utilizando el formato de Dreamweaver.</p>
                <p>La verdad es que tampoco tiene demasiada complicacion, pero para un futuro me gustaria hacer una funcion que pinte documentos HTML, y para ello necesito tener todas sus posibles partes : CSS, JavaScript, y PHP.</p>
                <p>Y a decir verdad, hoy es viernes y quiero sacar una entrada sin tener que forzar mucho la maquina... xD</p>
                <!-- FIN_INTRODUCCION -->
                <p>Al igual que en el tutorial de ayer, lo primero es tener bien claro  la estructuracion del css, y cuantos colores vamos a necesitar.</p>
                <p>Veamos un ejemplo pequeño de css :</p>
<!-- -[INICIO devildrey33.ID1]-
#NombreID {
    width:40px;
    height:40px;
    background-image:url("../Imagen.png");
}

/* Comentario */
#NombreID:hover {
    background-image:url("../ImagenH.png");
    cursor:pointer;
}
.NombreClase {
    cursor:pointer;
} -[FIN devildrey33.ID1]- -->
                <?php $Base->PintarCodigo->PintarArchivoCSS("EjemploCSS", "Colores necesarios para pintar el CSS", basename(__FILE__), "ID1"); ?>
                <p>Como podeis observar en el ejemplo anterior vamos a necesitar cinco colores : el rosa para los nombres de clase / id, el azul oscuro para el nombre del estilo, el azul claro para los valores del estilo, el verde para las cadenas de caracteres y el gris para los comentarios</p>
                <p>Ahora que ya tenemos claros los colores que vamos a necesitar, vamos a definir esos colores en un archivo css :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("EjemploCSS2", "Colores necesarios para pintar el CSS", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CSS_Ejemplo.css"); ?>
                <p>Una vez tenemos definidos los colores solo nos queda escribir la funcion PHP que pintara una cadena de caracteres utilizando el formato de Dreamweaver para el css :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("EjemploCSS3", "Función PHP PintarCSS", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_CSS_Ejemplo.php", "PintarCSS"); ?>
                <p>En la línea 4 del código utilizamos <a href="http://php.net/manual/es/function.str-replace.php">str_replace</a> para re-emplazar todas las tabulaciones por cuatro espacios, (ojo con esto ya que puede dejarnos el archivo mal tabulado, pero es que no he encontrado una forma de reducir los 8 caracteres por defecto que tiene la tabulación en marcos PRE, y aunque existe un estilo css3 para ello, no funciona en algunos navegadores).</p>
                <p>En la línea 6 declaramos la variable <b>$TextoColoreado</b>, que será donde irá a parar todo el texto revisado y con sus correspondientes spans con su color.</p>
                <p>En la linea 7 declaramos la variable <b>$Estado</b>, la cual puede ser : </p>
                <table class='Tabla'>
                    <tr><td>""</td><td>Sin Estado</td></tr>
                    <tr><td>"String1"</td><td>String declarado con comillas simples 'Str'.</td></tr>
                    <tr><td>"String2"</td><td>String declarado con comillas dobles "Str".</td></tr>
                    <tr><td>"ComentarioML"</td><td>Comentario del estilo C-Cpp /* Comentario */.</td></tr>
                </table>
                <p>Para entender mejor los estados, pongamos por ejemplo que encontramos el siguiente comentario : <b>/* prueba de cadena de caracteres "hola" */</b></p>
                <p>Como veis dentro del comentario se utilizan comillas pero como forman parte del comentario no debemos escanearlos, por lo que mientras estemos dentro de un comentario ignoraremos esos caracteres. Lo mismo pasa con las cadenas de caracteres, si dentro de ellas encontramos los caracteres para empezar un comentario, seran ignorados.</p>
                <p>A partir de la línea 8 empieza el bucle que recorre todo el texto carácter a carácter, y lo primero que miramos es el estado.</p>
                <p>Si el estado esta vacio, buscamos cualquier carácter que nos indique que color tenemos que utilizar.</p>
                <p>Si estado es "<b>ComentarioML</b>" buscamos específicamente el carácter "<b>*</b>" y que el siguiente caracter sea "<b>/</b>" para salir de ese estado.</p>
                <p>Si el estado es "<b>String1</b>" buscamos la próxima comilla simple para salir del estado. (No nos vale la comilla doble ya que no podemos empezar un string con comillas simples y terminarlo con comillas dobles).</p>
                <p>Si el estado es "<b>String2</b>" buscamos la próxima comilla doble para salir del estado.</p>
                <p>Y finalmente devolvemos el texto coloreado.</p>
                <p>Esto es todo por hoy, espero que este documento os sirva de ayuda si algún día queréis hacer una función para pintar códigos CSS para vuestra web.</p>
                
<div class='nota'>Este código ha quedado obsoleto, por favor echa un vistazo a la versión 2 : <a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>.</div>                
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>

                