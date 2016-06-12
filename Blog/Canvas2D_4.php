<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

	$DeclaracionesHeadExtras = '
';

	$Base->InicioPlantilla("Tutorial HTML5 Canvas2D parte 4 (imagenes)", $DeclaracionesHeadExtras);	*/

	include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML5 Canvas2D parte 3">
        <meta name="keywords" content="HTML5 Canvas2D, Canvas2D">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 4 (imagenes)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 4 (imagenes)");


?>

<script type="text/javascript">
// -[INICIO devildrey33.vars]-
// Variables globales
var Imagen = new Image();   // Contenedor para la imagen
var Canvas; 				// Objeto Canvas
var Context;				// Contexto 2D
// -[FIN devildrey33.vars]-

// -[INICIO devildrey33.Empezar]-
// Función que inicia el objeto Canvas y carga la imagen del bender
function Empezar() {
    Canvas = document.getElementById("CanvasBender");
    if (Canvas.getContext) {
        Context = Canvas.getContext("2d");
    }
    else {
        alert("Tu navegador no soporta el objeto canvas!");
        return;
    }		
    Imagen.onload = Pintar;
    Imagen.src = "bender.jpg";
}
// -[FIN devildrey33.Empezar]-

// -[INICIO devildrey33.Pintar]-
// Función que pinta la imagen original y luego pinta las imagenes con un solo canal
function Pintar() {
    Context.drawImage(Imagen, 0, 0);
    PintarCanal(0, 192, 0);     // Pinta el canal rojo
    PintarCanal(1, 192 * 2, 0); // Pinta el canal verde
    PintarCanal(2, 192 * 3, 0); // Pinta el canal azul
}
// -[FIN devildrey33.Pintar]-

// -[INICIO devildrey33.PintarCanal]-
// Función que pinta la imagen utilizando uno de los tres canales RGB. 
// ConservarRGB = 0 (rojo)
// ConservarRGB = 1 (verde)
// ConservarRGB = 2 (azul)
function PintarCanal(ConservarRGB, nX, nY) {
    var Origen  = Context.getImageData(0, 0, 192, 192);		
    var Destino = Context.createImageData(192, 192);
    // Obtenemos el tamaño de la imagen
    var Ancho = Origen.width;
    var Alto  = Origen.height;
    var Posicion = 0;
    // de 0 al ancho de la imagen
    for (var An = 0; An < Ancho; An++) {
        // de 0 a la altura de la imagen
        for (var Al = 0; Al < Alto; Al++) {
            // de 0 a 3 (R, G, B)
            for (var CanalRGB = 0; CanalRGB < 3; CanalRGB++) {
                Posicion = (((An * Alto) + Al) * 4) + CanalRGB;
                if (CanalRGB == ConservarRGB)   Destino.data[Posicion] = Origen.data[Posicion];
                else                            Destino.data[Posicion] = 0;
            }
            // Conservamos el canal alpha
            Destino.data[Posicion + 1] = Origen.data[Posicion + 1];
        }
    }
    Context.putImageData(Destino, nX, nY);
}
// -[FIN devildrey33.PintarCanal]-

</script>
                <!-- INTRODUCCION -->
                <p>Ha pasado algo más de una semana desde el ultimo tutorial del canvas 2d, pero tranquilos que no me he olvidado de él.</p>
                <p>Esta vez vamos a trastear con imágenes, y veremos hasta que punto podemos toquetearlas.</p>
                <p>Para ello voy a tomar una imagen del bender, y la voy a mostrar utilizando un único canal de color cada vez, de esta forma veréis como queda distribuida la imagen en memoria una vez cargada, y como poder modificar uno o más pixeles de ella.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En primer lugar vamos a crear algunas variables globales que necesitaremos para el ejemplo :</p><br style='clear:both' />
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID1", "JavaScript : variables globales", "Canvas2D_4.php", "vars"); ?>
                <p>Una vez tenemos las variables globales declaradas, crearemos una función para comprobar si el navegador es compatible con el objeto Canvas2D, y de ser ese el caso cargaremos la imagen que queremos mostrar :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID2", "Función JavaScript : Empezar()", "Canvas2D_4.php", "Empezar"); ?>
                <p>Fijaros en la línea 11 que se llama a la función <i>Pintar</i> una vez cargada la imagen, veamos la función Pintar :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID3", "Función JavaScript : Pintar()", "Canvas2D_4.php", "Pintar"); ?>
                <p>En la línea 3 de la función <i>Pintar</i> utilizamos la función <i>drawImage</i> que pinta la imagen previamente cargada sin ninguna modificación en el canvas. Es necesario pintar la imagen en el canvas para luego poder obtener los bytes de la imagen y poderlos modificar a nuestro antojo (cosa que no me ha gustado mucho).</p>
                <p>Imagino que si tenemos que trabajar con muchas imágenes lo que se puede hacer es crear un canvas oculto para utilizarlo de backbuffer, y de esta forma no tenemos que ir pintando las imágenes en el canvas visible.</p>
                <p>Una vez pintada la imagen en el canvas llamamos a la función <i>PintarCanal</i>, veamos su código :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID4", "Función JavaScript : PintarCanal()", "Canvas2D_4.php", "PintarCanal"); ?>
                <p>Para entender bien esta función tenemos que imaginar que la imagen es un array de una sola dimensión donde se guardan los pixeles. Cada pixel utiliza cuatro bytes : Rojo, Verde, Azul y Alpha.</p>
                <p>En primer lugar en la línea 6 creamos la variable Origen y le cargamos la porción donde se ha pintado la imagen (0, 0, 192, 192) con la función <i>getImageData</i>. Una vez cargados los datos podemos modificar el miembro data de origen que es el que contiene el array de pixeles.</p>
                <p>En la línea 7 creamos un objeto <i>ImageData</i> dentro de la variable <i>Destino</i> en el que guardaremos la imagen pintada con un solo canal, y para ello utilizamos la función <i>createImageData</i> a la que especificamos 192 pixeles de ancho y de alto.</p>
                <p>A partir de la línea 13 creamos un bucle que recorre pixel a pixel la imagen, si os fijáis en la línea 17 es el ultimo bucle que recorre los canales de un pixel en concreto, en la cual establecemos la posición del pixel en el array de datos con la siguiente fórmula : <i>Posicion = (((An * Alto) + Al) * 4)</i> . A partir de esa posición hay 4 bytes que serán los canales RGBA.</p>
                <p>En la línea 19 comprobamos si el canal actual es igual a la variable <i>ConservarRGB</i>, y de ser ese el caso copiamos el mismo valor que tiene la imagen <i>Origen</i> a la imagen <i>Destino</i>. Si resulta que la variable <i>ConservarRGB</i> no coincide con el <i>CanalRGB</i> actual asignamos el valor a 0.</p>
                <p>En la línea 23 copiamos el canal alpha tal cual viene de la imagen <i>Origen</i> a la imagen <i>Destino</i>.</p>
                <p>Y por ultimo en la línea 26 utilizamos la función <i>putImageData</i> para pintar la imagen <i>Destino</i> en el canvas.</p>
                <p>Y esto es todo por hoy, como siempre podéis ver un ejemplo online, o descargar-lo.</p>
                <table class='Centrado'><tr>
                        <td><a href='/Lab/Ejemplos/Canvas2D/Canvas2D_4_Ejemplo.html' class='Boton-Normal'>Ver ejemplo</a></td>
                        <td><a href='/Descargas/Canvas2D_4.zip' target="_blank" class='Boton-Normal'>Descargar ejemplo</a></td>
                </tr></table>


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>