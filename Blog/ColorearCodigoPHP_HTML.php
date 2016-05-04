<?php 
	/*include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$DeclaracionesHeadExtras = "
<style>
.Tabla_Estados {
    border-collapse:collapse;
    border-color:#000;
    border-style:solid;
    border-width:1px;
    border-radius:4px;
    background-color:#333;
    color:#FFF;
}

.Tabla_Estados td {
    color:#000;
    background-color:#FFF;
    padding:3px;
    border-bottom-color:#000;
    border-bottom-style:solid;
    border-bottom-width:1px;
}
</style>";
	$Base->InicioPlantilla("Colorear código con PHP (Parte 6 HTML)", $DeclaracionesHeadExtras);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="Colorear código HTML">';

        $Base->InicioPlantilla(basename(__FILE__), "Colorear código con PHP (Parte 6 HTML)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Colorear código con PHP (Parte 6 HTML)");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ColoresHTML.png" alt="Colorear código con PHP parte 6 HTML" />
                <p>Finalmente llegamos a la sexta parte de los tutoriales de colorear código, donde el objetivo será el lenguaje HTML. A decir verdad es el más complicado de pensar, ya que puede disponer de partes CSS, JavaScript y PHP que debemos pintar con su correspondiente esquema de colores.</p>
                <p>No es casualidad que haya dejado el HTML para el final, ya que para poder hacerlo necesitábamos tener las partes anteriores (JavaScript, CSS y PHP) programadas.</p>
                <p>Al igual que con los otros tutoriales vamos a utilizar un Diccionario de palabras para HTML, pero el algoritmo para parsear HTML será algo distinto.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Como siempre, vamos a empezar por ver un ejemplo básico de un archivo HTML con los elementos más comunes que podemos encontrar :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("IDEjemploHTML", "Documento HTML", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "EjemploHTML"); ?>
                <p>En este ejemplo se han incluido partes de códigos JavaScript, CSS y PHP para que veáis que son pintadas tal y como se especificaba en los tutoriales anteriores. En total podemos observar 12 colores distintos dentro de este ejemplo, pero algunos son utilizados por fragmentos de otros lenguajes.</p>
                <p>Lo primero que vamos a necesitar va a ser definir dichos colores dentro de un archivo CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDColoresCSS", "CSS con los colores necesarios", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.css"); ?>
                <p>Ahora vamos a crear array con los delimitadores y un array con el diccionario de etiquetas reservadas para HTML y que también llevaran su color correspondiente :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDarrays", "CSS con los colores necesarios", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "arrays"); ?>
                <p>Aunque el diccionario de palabras no sea muy extenso no quiere decir que no existan más, y como sabéis de ejemplos anteriores bastaría con agregar la palabra clave y su color al array si fuera necesario añadir alguna más.</p>
                <p>Una vez tenemos el array de palabras reservadas ya podemos empezar a pensar en el algoritmo. A diferencia de los ejemplos anteriores no vamos a hacerlo en dos fases (pre-escaneo y post-escaneo). Esto es porque nosotros sabemos perfectamente donde empieza y donde termina una etiqueta a partir de los caracteres '&lt;' y '&gt;' por lo que no necesitamos separar nada. Recordad que la idea del pre-escaneo y post-escaneo surgía por la necesidad de separar comentarios y strings de lo que pudieran ser palabras clave, ya que por ejemplo podíamos tener la palabra '<b>if</b>' dentro de un string, y a pesar de que '<b>if</b>' es una palabra reservada, al estar dentro de un string no queremos pintarla con su color, si no con el color del string.</p>
                <p>Hay que remarcar que una etiqueta puede constar de varias partes, por ejemplo "<b>&lt;a href='http://www.url.com'&gt;</b>" en este caso el nombre de la etiqueta es 'a' y contiene el atributo 'href' que indica la url destino. Además de esto hay tres tipos de etiquetas, las etiquetas de apertura, las etiquetas de clausura, y las etiquetas completas. Para tener claro este concepto vamos a ver las siguientes tres etiquetas : "<b>&lt;a href='url'&gt;</b>", "<b>&lt;/a&gt;</b>" y "<b>&lt;img src='url' /&gt;</b>". La primera etiqueta es de apertura ya que luego los datos introducidos se trataran según el ámbito de esta. La segunda etiqueta es de clausura ya que una vez se llegue a ella no se añadirá nada mas dentro del link. Y la tercera etiqueta es una etiqueta completa ya que se abre y se cierra en la misma etiqueta.</p>
                <p>Al igual que con los tutoriales anteriores utilizaremos la variable $Estado que nos indicara que debemos hacer en ese momento. Esta vez la variable $Estado puede tener 16 estados distintos contando el '' o Sin estado, veamos por encima cada estado y su razón de ser.</p>
                <table class='Tabla'>
                    <tr><th>Estado</th><th>Descripción</th></tr>
                    <tr><td>'' <b>(Sin estado)</b></td><td>Debemos buscar cualquier posibilidad que nos indique un nuevo estado a seguir.</td></tr>
                    <tr><td>'<b>PHP</b>'</td><td>Este estado nos indica que estamos dentro de un código PHP y que para salir de él debemos encontrar <b>?&gt;</b>. Al salir volveremos al estado ''.</td></tr>
                    <tr><td>'<b>JavaScript_Inicio</b>'</td><td>Este estado nos indica que estamos dentro de una etiqueta "<b>&lt;script</b>" y que para salir de el debemos encontrar <b>&gt;</b>. Al salir del estado pasaremos al estado '<b>JavaScript_Fin</b>'.</td></tr>
                    <tr><td>'<b>JavaScript_Str1</b>'</td><td>Este estado nos indica que estamos dentro de un string en una etiqueta "<b>&lt;script</b>" y que para salir de él debemos encontrar '. Al salir volveremos al estado '<b>JavaScript_Inicio</b>'.</td></tr>
                    <tr><td>'<b>JavaScript_Str2</b>'</td><td>Este estado nos indica que estamos dentro de un string en una etiqueta "<b>&lt;script</b>" y que para salir de él debemos encontrar ". Al salir volveremos al estado '<b>JavaScript_Inicio</b>'.</td></tr>
                    <tr><td>'<b>JavaScript_Fin</b>'</td><td>Este estado nos indica que estamos dentro de un código JavaScript, y que para salir debemos encontrar <b>&lt;/script&gt;</b>. Al salir volveremos al estado ''.</td></tr>
                    <tr><td>'<b>CSS_Inicio</b>'</td><td>Este estado nos indica que estamos dentro de una etiqueta "<b>&lt;style</b>", y que para salir debemos encontrar <b>&gt;</b>. Al salir del estado pasaremos al estado '<b>CSS_Fin</b>'.</td></tr>
                    <tr><td>'<b>CSS_Str1</b>'</td><td>Este estado nos indica que estamos dentro de un string de una etiqueta "<b>&lt;style</b>", y que para salir debemos encontrar '. Al salir del estado pasaremos al estado '<b>CSS_Inicio</b>'.</td></tr>
                    <tr><td>'<b>CSS_Str2</b>'</td><td>Este estado nos indica que estamos dentro de un string de una etiqueta "<b>&lt;style</b>", y que para salir debemos encontrar ". Al salir del estado pasaremos al estado '<b>CSS_Inicio</b>'.</td></tr>
                    <tr><td>'<b>CSS_Fin</b>'</td><td>Este estado nos indica que estamos dentro de un código CSS, y que para salir debemos encontrar <b>&lt;/style&gt;</b>. Al salir volveremos al estado ''.</td></tr>
                    <tr><td>'<b>Etiqueta</b>'</td><td>Este estado nos indica que estamos dentro de una etiqueta cualquiera, y que para salir de él debemos encontrar &gt;. Al salir volveremos al estado ''.</td></tr>
                    <tr><td>'<b>Etiqueta_Str1</b>'</td><td>Este estado nos indica que estamos dentro de un string de una etiqueta cualquiera, y que para salir de él debemos encontrar '. Al salir del estado pasaremos al estado '<b>Etiqueta</b>'.</td></tr>
                    <tr><td>'<b>Etiqueta_Str2</b>'</td><td>Este estado nos indica que estamos dentro de un string de una etiqueta cualquiera, y que para salir de él debemos encontrar ". Al salir del estado pasaremos al estado '<b>Etiqueta</b>'.</td></tr>
                    <tr><td>'<b>Comentario</b>'</td><td>Este estado nos indica que estamos dentro de un comentario HTML y que para salir debemos encontrar <b>--&gt;</b>. Al salir volveremos al estado ''.</td></tr>
                    <tr><td>'<b>Estilo_Str1</b>'</td><td>Este estado nos indica que estamos dentro de un string del <b>atributo style</b> de una etiqueta cualquiera, y que para salir debemos encontrar '. Al salir del estado pasaremos al estado '<b>Etiqueta</b>'.</td></tr>
                    <tr><td>'<b>Estilo_Str2</b>'</td><td>Este estado nos indica que estamos dentro de un string del <b>atributo style</b> de una etiqueta cualquiera, y que para salir debemos encontrar ". Al salir del estado pasaremos al estado '<b>Etiqueta</b>'.</td></tr>
                </table>
                <p>Una vez vistos los estados vamos a ver la primera parte de la función PintarHTML que pertenece a la fase en la que el estado esta vacio y buscamos un nuevo estado :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarHTML1", "Función PHP PintarHTML (sin estado)", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "PintarHTML1"); ?>
                <p>En esencia esta parte de la función escanea todos los caracteres del HTML para buscar específicamente el carácter '&lt;' que nos indica el inicio de una etiqueta. En caso de encontrar el carácter '&lt;' miramos lo que viene a continuación para determinar si es una etiqueta especial, o una etiqueta común.</p>
                <p><b>NOTA</b> : las etiquetas comunes son las que miraremos en el diccionario, en cambio las otras etiquetas como "<b>style</b>", "<b>script</b>", "<b>&lt;?php</b>" y "<b>&lt;!--</b>" deben ser tratadas de un modo especial, y estas además ya incluyen su color/es.</p>
                <p>Ahora vamos a revisar la parte del código que hace referencia a las etiquetas comunes :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarHTML2", "Función PHP PintarHTML (Etiquetas comunes)", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "PintarHTML2"); ?>
                <p>Tal y como comente anteriormente las etiquetas comunes pueden tener atributos, y en especial hay uno de ellos que debe tratarse de forma distinta. Este es el atributo '<b>style</b>', dicho atributo hace referencia a los estilos css para esa etiqueta. Si nos encontramos con el debemos pintar el string que contiene utilizando la función de pintado CSS.</p>
                <p>En la línea 31 detectamos que el atributo es el '<b>style</b>', llegados a este punto determinamos si viene en un string con comillas simples o comillas dobles para así poder asignar el estado <b>Estilo_Str1</b> o <b>Estilo_Str2</b>, y marcamos el carácter donde empieza el string.</p>
                <p>Dependiendo del tipo de string (comillas simples o dobles) llegaremos en algún momento a la línea 51 o 58, y en ese momento miraremos si se ha terminado el string. De ser ese el caso utilizaremos la función <b>PintarEstiloCSS</b> para pintar ese texto utilizando las reglas del CSS.</p>
                <p>Ahora que hemos visto las etiquetas comunes pasemos a ver las etiquetas script :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarHTML3", "Función PHP PintarHTML (Etiquetas script)", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "PintarHTML3"); ?>
                <p>De esta parte de código lo que más nos interesa es el estado "<b>JavaScript_Fin</b>". En el comprobamos cuando se ha llegado a la etiqueta de clausura script, para luego utilizar la función <b>PintarJavaScript</b> con el código JavaScript previamente leído y almacenado en la variable <b>$PalabraActual</b>.</p>
                <p>Para más información sobre la función PintarJavaScript podéis consultar <a href="ColorearCodigoPHP_JavaScript.php" target="_new">Colorear código con PHP (Parte 3 JavaScript)</a>.</p>
                <p>Vista la parte para JavaScript podemos continuar con la parte para etiquetas style que contienen código CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarHTML4", "Función PHP PintarHTML (Etiquetas style)", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "PintarHTML4"); ?>
                <p>Esta parte funciona de forma muy similar a la parte de JavaScript de forma que cuando llegamos al estado "<b>CSS_Fin</b>" buscamos cuando se cierra la etiqueta style. Una vez encontrado el cierre pasamos la función <b>PintarEstilosCSS</b> a la variable <b>$PalabraActual</b> en la que previamente se había almacenado todo el código CSS, y esta nos retorna el código CSS correctamente pintado.</p>
                <p><b>NOTA</b> : en el tutorial <a href="ColorearCodigoPHP_CSS.php" target="_new">Colorear código con PHP (Parte 2 CSS)</a> podemos ver la función <b>PintarCSS</b> que es prácticamente igual a la función <b>PintarEstilosCSS</b>. De todas formas no son iguales ya que en el tutorial 2 no había previsto encontrarme con el atributo style dentro del código HTML, por lo que la función <b>PintarCSS</b> ha quedado separada en dos funciones : <b>PintarEstiloCSS</b> y <b>PintarEstilosCSS</b>. La función <b>PintarEstiloCSS</b> se ha diseñado para pintar una clase o una id sin su nombre, y la función <b>PintarEstilosCSS</b> pinta los nombres de clase/id y luego llama a <b>PintarEstiloCSS</b> para pintar sus atributos.</p>
                <p>Visto esto podemos ver lo que queda de la función PintarHTML :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarHTML5", "Función PHP PintarHTML (PHP y comentarios)", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_HTML_Ejemplo.php", "PintarHTML5"); ?>
                <p>En esta parte tenemos los comentarios y el código PHP. El tema de los comentarios no tiene mucha complicación, básicamente hay que mirar si encontramos "--&gt;" para cortar el comentario.</p>
                <p>Por la parte del código PHP tampoco es demasiado complicada, vamos introduciendo todo el texto en la variable <b>$PalabraActual</b>, y cuando encontramos el texto "<b>?&gt;</b>" le pasamos la variable <b>$PalabraActual</b> a la función <b>PintarPHP</b>.</p>
                <p>Para más información sobre la función PintarPHP podéis consultar <a href="ColorearCodigoPHP_PHP.php" target="_new">Colorear código con PHP (Parte 4 PHP)</a>.</p>
                <p>A parte de esto faltaría por ver las funciones <b>_FinString1</b>, <b>_FinString2</b> y <b>_BuscarEtiqueta</b>. Pero como estas funciones se han comentado sobradamente en los tutoriales anteriores las omitiremos por hoy. Si deseáis más información sobre dichas funciones os recomiendo mirar el siguiente tutorial <a href="ColorearCodigoPHP_JavaScript.php" target="_new">Colorear código con PHP (Parte 3 JavaScript)</a>.</p>
                <p>Y con esto terminamos por hoy! aunque no ponemos punto y final a los tutoriales para pintar código con PHP. Mañana podréis ver la clase <a href="ColorearCodigoPHP_devildrey33_PintarCodigo.php">devildrey33_PintarCodigo</a> que se utiliza en esta web.</p>
                <p><strike>Como siempre os dejo la posibilidad de ver y descargar el ejemplo de hoy :</strike></p>

<div class='nota'>Este código ha quedado obsoleto, por favor echa un vistazo a la versión 2 : <a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>.</div>                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
