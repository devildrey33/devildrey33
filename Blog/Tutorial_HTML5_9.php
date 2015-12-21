<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

	$DEH = "

";

	$Base->InicioPlantilla("Creación de páginas web desde cero (9 Tipografías)", $DEH);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (9 Tipografías)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (9 Tipografías)");

?>	
<link href='../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_9_Ejemplo.css' rel='stylesheet' type='text/css' />

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_HTML5_9.png" alt="Tutorial creación de paginas web desde cero" />   
                <p>Hoy vamos a hablar sobre las tipografías o fuentes para la web, que es un tema muy importante a la hora de definir un buen diseño en vuestras páginas.</p>
                <p>Lo primero que debéis saber es que al existir todo tipo de dispositivos que pueden mostrar una página web bajo distintos sistemas operativos, no es algo que resulte fácil de implementar.</p>
                <p>Hasta no hace mucho una página web estaba limitada a ciertos tipos de fuentes, e incluso podía darse el caso de que se eligiera una tipografía que no estuviera disponible por lo que al final se re-emplazaba por otra.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En HTML versión 4 e inferiores se podía utilizar la etiqueta <b>font</b> para especificarla, pero a partir de HTML5 esta etiqueta ha quedado obsoleta y <b>no debe ser utilizada bajo ningún concepto</b>, por lo que se ha relegado este trabajo a las hojas de estilo css.</p>
                <p>La propiedad "<b><a href="/Doc/CSS/Propiedades/font-family" target="_blank">font-family</a></b>" del CSS nos permite elegir un tipo de fuente, pero ojo que como ya comente anteriormente puede darse el caso de que la fuente que elijamos no esté disponible para algunos usuarios. Veamos un ejemplo :</p>
				<?php $Base->PintarCodigo->PintarArchivoCSS("ID1", "CSS font-family", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_9_Ejemplo.css", "font-family"); ?>
                <p>En este ejemplo se ha elegido la fuente "<i>Verdana</i>" para la clase "<i>Fuente1</i>" si se diera el caso de que esa fuente no se encuentra disponible se buscaría la fuente "<i>Geneva</i>", y en caso de que esa fuente tampoco se encuentre disponible se buscaría la fuente "<i>sans-serif</i>".</p>
                <div class='nota'>Si elegimos una fuente que tiene un nombre con espacios por ejemplo "<i>Times New Roman</i>" debemos especificarla con comillas. También debéis saber que no hace falta especificar 3 fuentes, podéis especificar las que queráis, pero si especificáis solo una os arriesgáis a que si el sistema del usuario no tiene dicha fuente elija la que el navegador quiera.</div>
                <p>A continuación veamos una lista de las combinaciones de fuentes más comunes :</p>
                    <table class="devildrey33_Marco">
                	<tr>
                    	<td style="background-color:#333; color:#FFF"><b>Fuentes Serif</b></td>
                        <td style="background-color:#333; color:#FFF"><b>Ejemplo</b></td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID1]-
font-family:Georgia, serif;
-[FIN devildrey33.ID1]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID1', "", basename(__FILE__), "ID1"); 
                            ?></td>
                    	<td class="Fuente_Georgia">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php
/* -[INICIO devildrey33.ID2]-
font-family:"Palatino Linotype", "Book Antiqua", Palatino, serif;
-[FIN devildrey33.ID2]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID2', "", basename(__FILE__), "ID2"); 
                            ?></td>
                    	<td class="Fuente_Palatino">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID3]-
font-family:"Times New Roman", Times, serif;
-[FIN devildrey33.ID3]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID3', "", basename(__FILE__), "ID3"); 
                            ?></td>
                    	<td class="Fuente_TimesNewRoman">texto de ejemplo</td>
                    </tr>
                	<tr>
                    	<td style="background-color:#333; color:#FFF"><b>Fuentes Sans-Serif</b></td>
                        <td style="background-color:#333; color:#FFF"><b>Ejemplo</b></td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID4]-
font-family:"Arial Black", Gadget, sans-serif;
-[FIN devildrey33.ID4]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID4', "", basename(__FILE__), "ID4");
                            ?></td>
                    	<td class="Fuente_Arial">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID5]-
font-family:"Arial Black", Gadget, sans-serif;
-[FIN devildrey33.ID5]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID5', "", basename(__FILE__), "ID5");
                            ?></td>
                    	<td class="Fuente_ArialBlack">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php
/* -[INICIO devildrey33.ID6]-
font-family:"Comic Sans MS", cursive, sans-serif;
-[FIN devildrey33.ID6]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID6', "", basename(__FILE__), "ID6"); 
                            ?></td>
                    	<td class="Fuente_ComicSans">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID7]-
font-family:Impact, Charcoal, sans-serif;
-[FIN devildrey33.ID7]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID7', "", basename(__FILE__), "ID7"); 
                            ?></td>
                    	<td class="Fuente_Impact">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID8]-
font-family:"Lucida Sans Unicode", "Lucida Grande", sans-serif;
-[FIN devildrey33.ID8]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID8', "", basename(__FILE__), "ID8"); 
                            ?></td>
                    	<td class="Fuente_LucidaSans">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID9]-
font-family:Tahoma, Geneva, sans-serif;
-[FIN devildrey33.ID9]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID9', "", basename(__FILE__), "ID9"); 
                            ?></td>
                    	<td class="Fuente_Tahoma">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID10]-
font-family:"Trebuchet MS", Helvetica, sans-serif;
-[FIN devildrey33.ID10]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID10', "", basename(__FILE__), "ID10");
                            ?></td>
                    	<td class="Fuente_Trebuchet">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID11]-
font-family:Verdana, Geneva, sans-serif;
-[FIN devildrey33.ID11]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID11', "", basename(__FILE__), "ID11"); 
                            ?></td>
                    	<td class="Fuente_Verdana">texto de ejemplo</td>
                    </tr>
                	<tr>
                    	<td style="background-color:#333; color:#FFF"><b>Fuentes Monoespaciadas (ideales para código fuente) &nbsp;</b></td>
                        <td style="background-color:#333; color:#FFF"><b>Ejemplo</b></td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID12]-
font-family:"Courier New", Courier, monospace;
-[FIN devildrey33.ID12]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID12', "", basename(__FILE__), "ID12"); 
                            ?></td>
                    	<td class="Fuente_CourierNew">texto de ejemplo</td>
                    </tr>
                    <tr>
                    	<td><?php 
/* -[INICIO devildrey33.ID13]-
font-family:"Lucida Console", Monaco, monospace;
-[FIN devildrey33.ID13]- */
                                $Base->PintarCodigo->PintarArchivoCSS('ID13', "", basename(__FILE__), "ID13"); 
                            ?></td>
                    	<td class="Fuente_LucidaConsole">texto de ejemplo</td>
                    </tr>
                </table>
                <p>Ahora que ya habéis visto como especificar una fuente también estaría bien saber cómo especificar un tamaño para esta, y para ello se utiliza el atributo "<b><a href="/Doc/CSS/Propiedades/font-size" target="_blank">font-size</a></b>" :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID2", "CSS font-size", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_9_Ejemplo.css", "font-size"); ?>
                <p>Bien ahora ya podéis jugar con fuentes básicas y sus tamaños, pero que pasa si queremos utilizar algún otro tipo de fuente? tenéis dos opciones, podéis arriesgaros a utilizar una fuente que exista en vuestro sistema, pero no es muy probable que el usuario la tenga también, o podéis utilizar una fuente para la web.</p>
                <p>Desde hace relativamente poco se pueden agregar fuentes externas a los documentos html, pero estas fuentes vienen en unos formatos especiales de forma que puedan ser leídas por la gran mayoría de sistemas operativos. El problema es que no podemos convertir una fuente cualquiera ya que la gran mayoría tienen copyright.</p>
                <p>Echad un vistazo al siguiente enlace : <a href="http://www.fontsquirrel.com/fontface" target="_blank">Font Squirrel</a>. En este enlace encontrareis cientos de fuentes que pueden ser utilizadas gratis, pero id con cuidado ya que puede ser que os bajéis una fuente que no tenga tildes o caracteres como la "<i>ñ</i>" o la "<i>ç</i>" así que probadlas antes de implementarlas (en la misma página web se pueden escribir textos de prueba).</p>
                <p>Descargad un kit de fuentes para ver como vienen, por defecto deberían venir varios archivos "<i>eot</i>", "<i>svg</i>", "<i>ttf</i>", y "<i>woff</i>" estos son los que contienen la fuente para distintos sistemas operativos, además os vendrá un archivo "<i>html</i>" de demostración, un archivo "<i>txt</i>" con la licencia y un archivo "<i>css</i>" con la implementación para la fuente.</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID3", "Ejemplo @font-face", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_9_Ejemplo.css", "font-face"); ?>
                <p class="Fuente_Cloister">Texto de ejemplo</p>
                <p>Por el funcionamiento del atributo "<b><a href="/Doc/CSS/Reglas/@font-face" target="_blank">@font-face</a></b>" no os preocupéis mucho ya que siempre os viene montado en el kit (en mi caso en el archivo stylesheet.css), con lo que basta con descomprimir el kit en el directorio de vuestra pagina web, y como mucho modificar la ruta de los archivos. Yo por ejemplo he descomprimido el kit en un directorio llamado "<i>Fuente Cloister</i>" por lo que he agregado "<i>./Fuente Cloister/</i>" delante de las urls que apuntan a los archivos de las fuentes dentro del atributo <b><a href="/Doc/CSS/Reglas/@font-face" target="_blank">@font-face</a></b>.</p>
                <p>Lo único que debéis hacer una vez insertado el "<b><a href="/Doc/CSS/Reglas/@font-face" target="_blank">@font-face</a></b>" es añadir el "<b><a href="/Doc/CSS/Propiedades/font-family" target="_blank">font-family</a></b>" con el nombre de la fuente en las clases donde queréis mostrar dicha fuente.</p>
                
                <p>Y con esto terminamos la novena entrega del tutorial, si lo deseáis podéis ver el ejemplo online simplificado o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>
                <table class='Centrado'><tr>
                        <td><a class='Boton' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_9_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton' href="/Descargas/Tutorial_HTML5_9.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
                