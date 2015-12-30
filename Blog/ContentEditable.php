<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Atributo ContentEditable del HTML");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="ContentEditable">
        <meta name="keywords" content="ContentEditable HTML">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Atributo ContentEditable del HTML", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Atributo ContentEditable del HTML");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ContentEditable.png" alt="ContentEditable" />
                <p>El atributo ContentEditable convierte cualquier etiqueta en una región editable con texto enriquecido, esto quiere decir que podemos convertir una etiqueta en un TEXTAREA, que además permite cosas como el texto en negrita, cursiva, etc.. sin mucho esfuerzo.</p>
                <p>Este atributo existe desde hace varios años y es quizás una de las pocas innovaciones introducidas por la gente de microsoft en el mundo del HTML, pero hasta hace relativamente poco no se había visto gran cosa sobre ella.</p>
                <p>En esencia una etiqueta con este atributo activado se convierte en un editor WYSIWYG (What-You-See-Is-What-You-Get), con una funcionabilidad básica, que mediante javascript puede ser extendida hasta el punto de llegar a convertirse en un editor para cualquier tipo de tarea, que no tenga nada que envidiar a un editor convencional compilado para windows / linux / mac, con la diferencia de que este será compatible con los navegadores actuales, y por lo tanto será multiplataforma.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En este articulo veremos un poco por encima como podemos llegar a crear un editor con capacidades básicas para poner el texto en negrita.</p>
                <h2>Convertir un objeto en editable</h2>
                <p>Para empezar veamos un ejemplo sencillo de cómo convertir una etiqueta 'p' en una región editable :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<p ContentEditable='true'>Mi contenido editable.</p>
-[FIN devildrey33.ID1]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID1", "Etiqueta 'p' con el contenido editable", basename(__FILE__), "ID1"); 
                ?>
                <p>Como podéis observar en el anterior ejemplo basta con asignar el atributo <b>ContentEditable</b> a '<i>true</i>', en el caso de que queramos desactivar la edición dentro de esta etiqueta, debemos cambiar el valor del atributo <b>ContentEditable</b> a '<i>false</i>'.</p>
                <p>Ahora vamos a entrar en contacto y probaremos un poco por encima las capacidades básicas de una etiqueta con el contenido editable, a continuación os dejo un DIV editable, y me gustaría que probarais la negrita (Control+B), cursiva (Control+I), e incluso a copiar texto de esta misma página y pegarlo dentro.</p>
                <div ContentEditable="true" class='Tabla'>Etiqueta 'div' con el <b>contenido</b> <i>editable</i>.</div>
                <p>Para probarlo bien me interesaría que seleccionéis una palabra y pulséis Control+B, luego me interesaría que vayáis al final del texto y pulséis Control+B para seguir escribiendo, ya que de esta forma veréis que el comportamiento es distinto cuando tenemos algo seleccionado. Otra cosa que me gustaría que vierais es que al copiar y pegar (Control+C, Control+V) podemos incluso copiar una parte de la web (incluyendo imagenes, tablas, etc..) y estas se pegaran tal cual.</p>
                <p>Ahora que ya habéis visto por encima el comportamiento de una etiqueta con contenido editable, pensad que todo lo que hacemos dentro de esta etiqueta (texto en negrita, cursiva, etc..) se hace a nivel de HTML internamente, es decir cuando ponemos a negrita una palabra el navegador lo que hace es poner la etiqueta 'b' al principio y al final de la palabra. Pero ojo que cada navegador lo hace a su forma, igual uno le pone la etiqueta '<i>b</i>' y otro le pone la etiqueta '<i>strong</i>' o otro incluso le pone el atributo '<i>style</i>' y define el negrita dentro de él.</p>
                <p>En definitiva cada navegador trata internamente el contenido editable a su manera, de forma que el aspecto final quede igual que en otros navegadores.</p>
                <p>Pasemos a ver algo de código javascript, empezaremos por como activar / desactivar el contenido editable dentro de una etiqueta :</p>
                <?php 
/* -[INICIO devildrey33.ID2]-
// Activa el contenido editable en el objeto que tiene la ID : MiObjetoEditable
document.getElementById('MiObjetoEditable').setAttribute('ContentEditable', 'true');

// Desactiva el contenido editable en el objeto que tiene la ID : MiObjetoEditable
document.getElementById('MiObjetoEditable').setAttribute('ContentEditable', 'false');
-[FIN devildrey33.ID2]- */
                    $Base->PintarCodigo->PintarArchivoJavaScript("ID2", "Activar / desactivar el contenido editable mediante JavaScript", basename(__FILE__), "ID2"); 
                ?>

                <p>En este ejemplo tenemos un objeto con la ID '<i>MiObjetoEditable</i>' al que le editamos el valor del atributo '<i>ContentEditable</i>' a '<i>true</i>' para que sea editable, o a '<i>false</i>' para que no lo sea.</p>
                <p>Bueno ahora toca entrar a tocar por encima la función '<i>document.execCommand</i>', que nos permite controlar varios aspectos del contenido editable.</p>
                <p>Antes de nada debo decir que me parece un enfoque incorrecto que se llame al objeto '<i>document</i>' para ejecutar un comando dentro de la región editable, ya que podemos tener varias regiones editables y esto nos puede causar más de un lio. Todos los sistemas operativos están diseñados para responder a un único teclado, y por lo tanto cuando pulsamos una tecla, esta va a parar a una única ventana que es la que tiene el foco.</p>
                <p>Como ya he dicho esto puede ser un follón, ya que podemos tener 20 regiones editables y puede que ninguna tenga el foco activo, por lo que si creamos un botón que llame a '<i>document.execCommand</i>', si ninguna ventana tiene el foco nunca podremos estar seguros de que ventana/objeto recibe el comando si es que lo recibe.</p>
                <p>Para ver más claro este problema, vamos a imaginar que tenemos 2 regiones editables, y que cada una tiene un botón para poner el texto en negrita. Yo puedo estar editando el texto en la primera región editable, y pulsar el botón negrita de la segunda región editable, y como el botón llama a 'document.execCommand' y esta función no especifica ningún objeto en concreto, se nos activaría la negrita en la primera región editable.</p>
                <p>Si os digo la verdad no tengo muy clara la solución, yo lo que intentaría en ese caso es determinar qué región tiene el foco, y actuar en consecuencia, pero estoy hablando en teoría. En cambio si hubieran diseñado la función '<i>execCommand</i>' de forma que formara parte de cualquier objeto este problema no lo tendríamos, pero por desgracia esta función solo existe en el objeto '<i>document</i>'.</p>

                <p>Ahora que ya conocéis mi opinión sobre el mal enfoque de esta función veamos cómo utilizarla y algunos de los comandos que podemos usar en ella :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
document.execCommand(Comando, Interface, Valor);
-[FIN devildrey33.ID3]- */
                    $Base->PintarCodigo->PintarArchivoJavaScript("ID3", "Función document.execCommand", basename(__FILE__), "ID3"); 
                ?>
                <h2>Comandos</h2>
                
                <p>Existen varios comandos pero a día de hoy no he encontrado ninguna referencia fiable de cuales están totalmente soportados en todos los navegadores actuales, por lo que solo mostrare unos cuantos :</p>
                <table class='Tabla' style="white-space:nowrap; border-spacing:0px">
                	<tr>
                    	<th><h3>Comando</h3></th>
                    	<th><h3>Descripción</h3></th>
<!--                    	<td style='width:130px'><h3>Comando</h3></td>
                    	<td style='width:410px'><h3>Descripción</h3></td>-->
                    	<th><h3>Ejemplo</h3></th>
                    </tr>
                	<tr>
                    	<td><b>bold</b></td>
                        <td>Activar / desactivar negrita (Control + B).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'bold'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>copy</b></td>
                        <td>Copiar la selección al portapapeles (Control + C).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'copy'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>cut</b></td>
                        <td>Cortar la selección al portapapeles (Control + X).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'cut'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>italic</b></td>
                        <td>Activar / desactivar cursiva (Control + I).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'italic'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>paste</b></td>
                        <td>Pegar desde el portapapeles (Control + V).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'paste'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>redo</b></td>
                        <td>Re-hacer (Control + Y).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'redo'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>strikethrough</b></td>
                        <td>Activar / desactivar el tachado de texto.</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'strikethrough'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>underline</b></td>
                        <td>Activar / desactivar el sub-rayado de texto (Control + U).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'underline'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                	<tr>
                    	<td><b>undo</b></td>
                        <td>Des-hacer (Control + Z).</td>
                        <td class='Codigo_Negro'><span class='Codigo_Lila'>document</span>.execCommand(<span class='Codigo_Azul'>'undo'</span>, <span class='Codigo_AzulOscuro'>false</span>, <span class='Codigo_AzulOscuro'>null</span>);</td>
                    </tr>
                </table>
                <br />
                <div class='nota'>Los comandos que tienen una tecla de acceso directo (Control + ?) por defecto están activos en cualquier objeto con el contenido editable utilizando la combinación de teclas pertinente.</div>
                
                <p>Por último y terminando con este articulo debéis saber que existen librerías para controlar objetos con el contenido editable, y algunas para que negarlo son verdaderas maravillas, por ejemplo las que más me han gustado son CodeMirror y YUIlibrary.</p>
                <p>En especial utilizo <a href="http://codemirror.net/" target="_blank">CodeMirror</a> para mi sección <a href="/Lab/" target="_blank">'Laboratorio de pruebas'</a> ya que esta librería está diseñada para escribir código, y admite una gran cantidad de lenguajes.</p>
                <p>En lo referente a <a href="http://yuilibrary.com/" target="_blank">YUIlibrary</a> es una librería inmensa que viene de la gente de yahoo y que es capaz de convertir un navegador en una suite ofimática.</p>

                <p>Y esto es todo por hoy, como siempre podeis ver el ejemplo online o descargar el ejemplo.</p>
  
                <table class='Centrado'><tr>
                        <td><a class='Boton' href="/Lab/Ejemplos/ContentEditable/ContentEditable.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton' href="/Descargas/ContentEditable.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>