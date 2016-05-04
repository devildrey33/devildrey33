<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$DEH = "
<link href='./Ejemplos/Tutorial_HTML5/Tutorial_HTML5_8_Ejemplo.css' rel='stylesheet' type='text/css' />	
";
	
	$Base->InicioPlantilla("Creación de páginas web desde cero (8 Menus)", $DEH);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (8 Menus)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (8 Menus)");

?>	

<link href='../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_8_Ejemplo.css' rel='stylesheet' type='text/css' />	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_HTML5_8.png" alt="Tutorial creación de paginas web desde cero" />   
                <p>En este tutorial podréis ver cómo crear un menú simple para vuestras páginas web que no requiere grandes conocimientos de programación.</p>
                <p>Por otro lado este menú no será ni mucho menos tan flexible como el que se muestra en el articulo <a href="MenuWebFijo.php">Menu PHP + XML + JQuery + JavaScript + CSS</a>. Pero tampoco requeriréis conocimientos de PHP ni de JQuery ni de JavaScript para hacerlo, lo cual es una ventaja para aquellos que estáis empezando en esto.</p>
                <p>En esencia se construirá todo el menú utilizando estilos CSS, y podréis ver entre otras cosas que podéis mostrar y ocultar etiquetas dependiendo de vuestras necesidades.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Existen dos formas de ocultar etiquetas : "<i>display:none</i>" y "<i>visibility:hidden</i>". Con la propiedad "<i>display</i>" ya hemos visto que podemos hacer varias cosas, y una de ellas es ocultar etiquetas, de todas formas y aunque es mas compatible con navegadores viejos considero que es mejor utilizar la propiedad "<i>visibility</i>" ya que la propiedad display puede que la necesitemos para otras cosas en la misma etiqueta. Por esa razón en este ejemplo se utilizara la propiedad "<i>visibility</i>" a la hora de mostrar y ocultar etiquetas.</p>
                <p>De todas formas estas propiedades no hacen exactamente lo mismo, si por ejemplo hacemos "<i>display:none</i>" en un elemento, este elemento al estar oculto no ocupara espacio, por el contrario si utilizamos "<i>visibility:hidden</i>" aunque no se vea el elemento el navegador reservara su espacio mostrándolo en blanco.</p>
                <p>En esencia cada menú consistirá en tres etiquetas, la primera "<b>MenuPadre</b>" será la encargada de mostrar el titulo para el menú y de contener dentro una segunda etiqueta a la cual llamaremos "<i>SubMenu</i>". La etiqueta "<b>SubMenu</b>" representara un marco oculto donde ubicaremos todos los enlaces que queramos mostrar, estos enlaces irán en una tercera etiqueta llamada "<b>SubMenuItem</b>" de forma que queden resaltados al pasar el mouse por encima.</p>
                <div>
                    <img src="/Graficos/Tutorial_HTML5_8_1.png" alt='Esquema menu' style='float:left' />
                    <table>
                    	<tr>
                        	<td><span style='color:rgb(63,72,204)'><b>MenuPadre</b></span></td>
                        	<td>: Menú que mostrara el titulo y que al pasar por encima mostrara el "<i>SubMenu</i>".</td>                            
                        </tr>
                    	<tr>
                        	<td><span style='color:rgb(127,127,127)'><b>SubMemu</b></span></td>
                        	<td>: Marco inicialmente oculto que contiene los "<i>SubMenuItem</i>" con los enlaces.</td>                            
                        </tr>
                    	<tr>
                        	<td><span style='color:rgb(34,177,76)'><b>SubMemuItem</b></span></td>
                        	<td>: Espacio que ocupara el texto para un enlace dentro de un "<i>SubMenu</i>".</td>                            
                        </tr>
                    </table>
                </div>
                <p>Hay que destacar que a las clases "<i>SubMenu</i>" se les asignara la propiedad "<i>position:absolute</i>" ya que de esta forma no ocuparan espacio, y se mostraran por encima de los elementos que puedan tener debajo.</p>
                <p>Vista la estructuración del menú pasemos a ver sus estilos css :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID1", "Estilos CSS para los menus", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_8_Ejemplo.css"); ?>
                <p>Para empezar se define una clase "<b>Marco</b>" en la que le asignamos un borde negro y un color de fondo gris, esta clase será utilizada en elementos con la clases "<i>MenuPadre</i>" y "<i>SubMenu</i>" para mostrar las propiedades mencionadas.</p>
                <p>En segundo lugar definimos la clase "<b>MenuPadre</b>" con la propiedad "<i>display:table</i>" lo que ajustara su tamaño únicamente al tamaño que necesite para mostrar los elementos que contiene. Además le ponemos un margen a la derecha de 5 pixeles para que no se nos queden pegados los menús padre, y le asignamos la propiedad "<i>cursor:pointer</i>" para que el cursor del mouse cambie su aspecto por una mano con el dedo índice levantado al pasar por encima del objeto.</p>
                <p>En la línea 16 tenemos la clase "<b>AlinearIzquierda</b>" que únicamente contiene la propiedad "<i>float:left</i>" la cual se asignara a todos los menús padres menos el ultimo.</p>
                <p>En la línea 17 definimos la clase "<b>SubMenu</b>" con la propiedad "<i>position:absolute</i>". Al definir su posición absoluta, el navegador no utilizara espacio extra del documento para esta etiqueta, y lo que hará es mostrarla por encima de los elementos que puedan haber debajo. Esta propiedad es muy importante ya que si no la asignamos, al mostrarse el sub-menú se movería todo el documento hacia abajo para dejarle espacio a la etiqueta "<i>SubMenu</i>".</p>
                <p>En la línea 18 definimos que las clases "<b>SubMenu</b>" <b>dentro de las clases</b> "<b>MenuPadre</b>" tienen la propiedad "<i>visibility:hidden</i>" o dicho de otra forma que todos los sub-menús inicialmente estarán ocultos.</p>
                <p>En la línea 19 definimos que <b>cuando se pase por encima de</b> "<b>MenuPadre</b>" la clases "<b>SubMenu</b>" dentro del padre pasaran a tener la propiedad "<i>visibility:visible</i>" por lo que se mostrara el submenú dentro del padre.</p>
                <p>Y por ultimo en la línea 22 definimos la clase "<b>SubMenuItem</b>" solo para cuando pasemos el mouse por encima, lo que cambiara el color del fondo para hacer un pequeño efecto de resaltado. Además también cambiamos el puntero del mouse, por la mano con el dedo índice levantado.</p>
                
                <div class='MenuPadre AlinearIzquierda Marco'>	   <!-- Menu padre alineado a la izquierda -->
                    <div>Menú padre 1</div>                        <!-- Titulo del menú padre -->
                    <div class='SubMenu Marco'>                    <!-- Marco para el submenu inicialmente oculto -->
                        <div class='SubMenuItem'>Sub Menú 1</div>
                        <div class='SubMenuItem'>Sub Menú 2</div>
                        <div class='SubMenuItem'>Sub Menú 3</div>
                        <div class='SubMenuItem'>Sub Menú 4</div>
                        <div class='SubMenuItem'>Sub Menú 5</div>
                    </div>                
                </div>
<!--[INICIO devildrey33.HTML]-->
<div class='MenuPadre AlinearIzquierda Marco'>     <!-- Menu padre alineado a la izquierda -->
    <div>Menú padre 2</div>                        <!-- Titulo del menú padre -->
    <div class='SubMenu Marco'>                    <!-- Marco para el submenu inicialmente oculto -->
        <div class='SubMenuItem'>Sub Menú 1</div>
        <div class='SubMenuItem'>Sub Menú 2</div>
        <div class='SubMenuItem'>Sub Menú 3</div>
        <div class='SubMenuItem'>Sub Menú 4</div>
    </div>                
</div>

<div class='MenuPadre Marco'>                      <!-- Menu padre sin alineación -->
    <div>Menú padre 3</div>                        <!-- Titulo del menú padre -->
    <div class='SubMenu Marco'>                    <!-- Marco para el submenu inicialmente oculto -->
        <div class='SubMenuItem'>Sub Menú 1</div>
        <div class='SubMenuItem'>Sub Menú 2</div>
        <div class='SubMenuItem'>Sub Menú 3</div>
    </div>
</div>
<br /><br /><br />
<!--[FIN devildrey33.HTML]-->                
                <p>Explicados los estilos CSS y visto el ejemplo solo nos queda ver la disposición de las etiquetas en HTML :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID2", "Código HTML", "Tutorial_HTML5_8.php", "HTML"); ?>
                <p>Para no hacer muy grande el cuadro de código se ha mostrado solo la creación de los dos últimos menús, especialmente para que os fijéis que en el "<b>Menu padre 2</b>" se utilizan las clases "<i>MenuPadre AlinearIzquierda Marco</i>" y que en el "<b>Menu padre 3</b>" solo se utilizan las clases "<i>MenuPadre Marco</i>". Porque no se ha incluido la clase "<i>AlinearIzquieda</i>" al último menú padre? la respuesta es que si la alineamos a la izquierda el siguiente elemento que se encuentre en la página web quedaría ubicado a la derecha del menú, y dudo mucho que queramos este resultado. De esta forma al no especificar la clase "<i>AlinearIzquierda</i>" el siguiente elemento después del menú quedara ubicado justo debajo del menú.</p>
				<p>Otra cosa más! en estos ejemplos no he añadido ningún tipo de enlace, pero no debería resultaros difícil, hay 2 opciones :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<a href='www.MiUrl.com'><div class='SubMenuItem'>Sub Menu 1</div></a>
-[FIN devildrey33.ID1]- */
                $Base->PintarCodigo->PintarArchivoHTML("ID3", "Div dentro del enlace", basename(__FILE__), "ID1"); ?>
                <br />
                <?php 
/* -[INICIO devildrey33.ID2]-
<div class='SubMenuItem'><a href='www.MiUrl.com'>Sub Menu 1</a></div>
-[FIN devildrey33.ID2]- */
                $Base->PintarCodigo->PintarArchivoHTML("ID3", "Enlace dentro del div", basename(__FILE__), "ID2"); ?>
                <p>La mejor opción es la primera, es decir poner el "<i>div</i>" dentro del enlace, ya que si lo hacemos al revés y pulsamos sobre una parte del menú que no tenga texto, el enlace no funcionara aunque el "<i>SubMenuItem</i>" se vea resaltado. Dicho de otra forma si ponemos la etiqueta "<i>div</i>" dentro de la etiqueta "<i>a</i>" estamos indicando que si se presiona dentro del div hay que ir al enlace, en cambio si lo hacemos al revés, es decir ponemos la etiqueta "<i>a</i>" dentro de la etiqueta "<i>div</i>" estamos indicando que al presionar SOBRE EL TEXTO hay que ir al enlace.</p>
                
                <p>Y con esto terminamos la octava entrega del tutorial, si lo deseáis podéis ver el ejemplo online simplificado o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>


                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_8_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Tutorial_HTML5_8.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_9" alt='Creación de paginas web desde cero (9 Tipografías)'>Creación de páginas web desde cero (9 Tipografías)</a>.</p>
                            
                            
                            
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
                