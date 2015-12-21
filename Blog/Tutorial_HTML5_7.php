<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
        
        $DeclaracionesHeadExtras = "
<link href='./Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo.css' rel='stylesheet' type='text/css' />
";
	
	$Base->InicioPlantilla("Creación de páginas web desde cero (7 Botones)", $DeclaracionesHeadExtras);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML">
        <meta name="keywords" content="Tutorial HTML">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Creación de páginas web desde cero (7 Botones)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Creación de páginas web desde cero (7 Botones)");

?>	
                <link href='../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo.css' rel='stylesheet' type='text/css' />

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_HTML5_7.png" alt="Tutorial creación de paginas web desde cero" />   
				<p>En este tutorial veréis algunos trucos para añadirle botones gráficos a vuestra web.</p>
                <p>Lo más normal es que este tipo de controles se utilicen para llegar a otro documento web o a una descarga, y siempre resulta interesante que se vean bien para que el usuario no se pierda fácilmente.</p>
                <p>No es lo mismo poner un enlace de texto plano con la etiqueta "<i>&lt;a&gt;</i>" que tener ese enlace dentro de un marco con borde y un color de fondo bien resaltado.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero que vais a hacer será un botón simple utilizando CSS. Este botón consistirá en un div que mediante css tendrá un borde y un color de fondo que resalten dentro del documento. Observad la declaración del estilo CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID1", "Estilo CSS para un botón", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo.css", "Boton1"); ?>
                <div style="margin-top:10px;">
	            	<div class='Boton1' style='margin-right:10px; float:left;'><a onclick="alert('Boton presionado')">Boton1</a></div>
	            	<div class='Boton1' style='margin-right:10px; float:left;'><a onclick="alert('Boton presionado')">otro Boton1</a></div>
	            	<div class='Boton1' style='margin-right:10px; float:left;'><a onclick="alert('Boton presionado')">Boton1 con mucho más texto</a></div>
                </div><br />
            	<p>Hay tres propiedades de este estilo CSS que aun no sabéis que hacen :</p>
                <ul>
                	<li>
                    	<p>La propiedad "<b>display</b>" viene a ser la forma en que se mostrara el objeto. En este caso utilizamos el valor "<i>table</i>" y esto hace que el div pase de ocupar el 100% del ancho disponible, a ocupar únicamente el espacio que necesite lo que tiene dentro.</p>
                        <div class='nota'>La propiedad "<i>display</i>" tiene muchos valores posibles e incluso se puede utilizar para esconder un elemento. Echad un vistazo a la siguiente pagina para ver todos sus valores posibles : <a href="http://www.w3schools.com/cssref/pr_class_display.asp" target="_blank">CSS display property</a>.</div>
                    </li>
                    <li>
                    	<p>La propiedad "<b>cursor</b>" se utiliza para cambiar el cursor del mouse, por defecto al pasar sobre un texto el cursor del mouse se pone de forma que nos permita seleccionar texto, pero ahora al ponerle el valor "<i>pointer</i>" lo que estamos haciendo es decirle al navegador que debe mostrar una mano con el dedo índice alzado.</p>
                        <div class='nota'>Hay varios valores que se pueden establecer a la propiedad "<i>cursor</i>", e incluso se le puede dar una URL con un cursor personalizado. Si queréis saber más sobre qué valores podéis utilizar podéis echar un vistazo al siguiente enlace : <a href='http://www.w3schools.com/cssref/pr_class_cursor.asp' target="_blank">CSS cursor property</a>.</div>
                    </li>
                    <li>
                    	<p>La propiedad "<b>text-decoration</b>" nos permite añadir una línea al texto para subrayarlo por ejemplo. No solo podemos sub-rayar el texto si no que podemos tacharlo, o incluso poner una línea por encima.</p>
                        <p>Existen cuatro valores posibles para esta propiedad : "<i>none</i>", "<i>underline</i>", "<i>overline</i>" y "<i>line-throught</i>". El primero no muestra ninguna línea, el segundo sub-raya el texto, el tercero hace la línea por encima del texto, y el cuarto hace la línea en medio del texto.</p>
                    </li>
                </ul>
                <p>En principio creo que queda claro todo hasta llegar a la línea 27, por si acaso vamos a repasar-lo. Primero definimos un estilo para el botón en su estado normal donde tiene un margen interno de tres pixeles, un borde redondeado de color negro, un fondo de color verde y una sombra alrededor del marco.</p>
                <p>Luego en la línea 19 definimos el estilo que debe tomar cuando el mouse se encuentra encima del botón, por lo que el color del fondo pasa a ser un verde algo más claro, y el cursor del mouse cambia a una mano con el dedo índice levantado.</p>
                <p>A partir de la línea 27 creo que es lo que no habrá quedado muy claro, fijaros que creamos la clase con el siguiente nombre "<i>.Boton1 a {</i>", al hacer esto estamos indicando que vamos a escribir el estilo CSS de las etiquetas &lt;a&gt; que se encuentren dentro de una clase Boton1. En este caso lo que hacemos es poner el color del texto del enlace a blanco.</p>
                <p>Por último en la línea 30 estamos escribiendo el estilo para los enlaces resaltados dentro de la clase Boton1, por lo que ponemos el color del enlace a amarillo, y además le decimos que el enlace resaltando no estará subrayado con la propiedad "<i>text-decoration:none</i>".</p>
                <p>Todo esto está muy bien, pero y si queremos utilizar una imagen para el fondo del botón, sin tocar el borde y el fondo?</p>
                <p>Esto ya es más problemático pero no por ello es imposible, en primer lugar pensad que cada botón puede tener un tamaño distinto debido a que el texto que tiene dentro no tiene porque ser igual.</p>
                <img src="../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo_Garabatos.png" alt="garabatos" style='border-style:dotted; border-width:1px; border-color:#000; float:right; padding:3px;  margin-left:5px' />
                <p>Para el siguiente ejemplo vamos a utilizar la imagen de la derecha que tiene 200 pixeles de ancho, pero de la cual solo mostraremos 100 pixeles. La idea es mostrar una parte cuando pasemos con el mouse por encima, y mostrar la otra parte cuando no estemos encima con el mouse. Veamos la declaración de los estilos CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID2", "Estilo CSS para un botón gráfico", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo.css", "Boton2"); ?>
                <div >
        	    	<div class='Boton2' style='margin-top:10px; float:left'><a onclick="alert('Boton presionado')">Boton2</a></div>
    	            <div class='Boton2' style='margin-top:10px; float:left'><a onclick="alert('Boton presionado')">otro Boton2</a></div>
    	            <div class='Boton2' style='margin-top:10px;'><a onclick="alert('Boton presionado')">Boton2 con mucho más texto</a></div>
	            </div>
                <p>En este ejemplo se ha utilizado la propiedad "<i>background-image</i>" para especificar que el fondo del div utilice una imagen. Fijaros que también se utiliza la propiedad "<i>background-repeat</i>" con el valor "<i>no.repeat</i>", eso es porque no queremos que se repita la imagen por abajo.</p>
                <p>En la línea 19 se utiliza la propiedad "<i>background-position</i>" que nos permite indicar en qué punto de la imagen se empezara a mostrar. Por defecto esta propiedad nos mostrara la imagen a partir del pixel 0-0 pero en este caso queremos mostrar la parte de la imagen que queda a la derecha y que tiene los garabatos de color gris, por lo que empezaremos a -100 pixeles.</p>
                <div class='nota'>También podríamos utilizar dos imágenes por separado, pero esto tiene el problema de que el navegador no cargara la imagen resaltada hasta que no pases por encima con el mouse, y como no todo el mundo tiene internet de alta velocidad podría ser que se tarde algún tiempo de mas en ver el resultado, cosa que no nos conviene.</div>
                <p>Otra cosa a destacar es que con este ejemplo en concreto si añadimos un texto que ocupe más de 100 pixeles de ancho se nos carga el efecto y se nos mostrara el texto sobrante más abajo.</p>
                
                <p>Qué pasa si queremos hacer un botón utilizando imágenes que pueda ser de cualquier tamaño? Por poder podemos, el problema es enfocarlo bien.</p>
                <img src="../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo_Boton3.png" alt="garabatos" style='border-style:dotted; border-width:1px; border-color:#000; float:right; padding:3px; margin-left:5px' />
                <p>Supongamos que el botón siempre va a tener la misma altura, pero con un ancho indeterminado, de ser ese el caso podemos utilizar 3 imágenes para mostrar el botón, una para el borde izquierdo, una para la parte central y una para el borde derecho.</p>
                <p>Pues bien fijaros en la imagen de la derecha en la cual hay 6 partes que conformaran el botón, las tres primeras partes son para el botón en estado normal (degradado de amarillo a rojo), y las tres últimas partes son para el botón en estado resaltado (degradado de rojo a amarillo).</p>
                <p>Cada parte mide 25 (23 + 2 pixeles en blanco) pixeles de alto por 6 de ancho, a partir de aquí podemos jugar con la propiedad "<i>background-position</i>" y "<i>background-repeat</i>" para ir ubicando cada parte correctamente. Otra cosa a remarcar es que el botón consistirá en cuatro divs, uno que contendrá todo el botón entero, y los otros tres que mostraran cada parte de él. Veamos la declaración de los estilos CSS :</p>
                
                <img src='/Graficos/Boton3Dividido.png' alt='Boton3 dividido por pixeles' style="float:right; margin-right:50px; margin-top:50px; border-color:rgb(34, 177, 76); border-width:1px; border-style:dashed" />
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID3", "Estilo CSS para un botón gráfico complejo", "../Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo.css", "Boton3"); ?>
                <div style="margin-top:10px"> 
                    <div class='Boton3' style="float:left; margin-right:10px">
                        <a onclick="alert('Boton presionado')">
        	                <div class='Boton3I'></div>
    	                    <div class='Boton3C'>Boton3</div>
	                        <div class='Boton3D'></div>
                        </a>
                    </div>
                    <div class='Boton3' style="float:left; margin-right:10px">
                        <a onclick="alert('Boton presionado')">
	                        <div class='Boton3I'></div>
    	                    <div class='Boton3C'>otro Boton3</div>
        	                <div class='Boton3D'></div>
                        </a>
                    </div>
                    <div class='Boton3'>
                        <a onclick="alert('Boton presionado')">
	                        <div class='Boton3I'></div>
    	                    <div class='Boton3C'>Boton3 con mucho más texto</div>
        	                <div class='Boton3D'></div>
                        </a>
                    </div>
                </div>
                
                <p>No hay mucho que contar sobre estos estilos CSS, lo que tiene que quedar claro es que en la propiedad "backgorund-position" asignamos valores negativos a la Y para empezar más abajo de la imagen.</p>
                <p>Por último vamos a ver como quedaría escrito el Boton3 en HTML :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<div class='Boton3'>
    <a href='www.miurl.com'>
        <div class='Boton3I'></div>
        <div class='Boton3C'>Boton3</div>
        <div class='Boton3D'></div>
    </a>
</div>
-[FIN devildrey33.ID1]- */
                $Base->PintarCodigo->PintarArchivoHTML("", "Boton3 en HTML", basename(__FILE__), "ID1"); ?>
                <p>Y con esto terminamos la séptima entrega del tutorial, si lo deseáis podéis ver el ejemplo online o descargar el ejemplo para poder editarlo en vuestro ordenador.</p>
                <table class='Centrado'><tr>
                        <td><a class='Boton' href="/Lab/Ejemplos/Tutorial_HTML5/Tutorial_HTML5_7_Ejemplo.html" target="_blank">Ver Ejemplo</a></td>
                	<td><a class='Boton' href="/Descargas/Tutorial_HTML5_7.zip" target="_blank">Descargar Ejemplo</a></td>
                </tr></table>
                
                <p>Podéis seguir con el siguiente tutorial HTML5 : <a href="/Blog/Tutorial_HTML5_8" alt='Creación de paginas web desde cero (8 Menus)'>Creación de páginas web desde cero (8 Menus)</a>.</p>



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
                