<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

	$DeclaracionesHeadExtras = '
   	';
	
	$Base->InicioPlantilla("Tutorial HTML5 Canvas2D parte 2 (texto)", $DeclaracionesHeadExtras);*/
	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML5 Canvas2D parte 2">
        <meta name="keywords" content="HTML5 Canvas2D, Canvas2D">';

	
        $Base->InicioPlantilla(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 2 (texto)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 2 (texto)");

?>
<script type="text/javascript">
// -[INICIO devildrey33.variables]-
// Variables globales
var Temporizador = 0; // ID del temporizador
var Context;          // Contexto gráfico
var PosX = 5;         // Posición X del texto
var PosY = 32;        // Posición Y del texto
var PosTexto = 0;     // Caracter actual
var Texto = "";       // Cadena de texto a animar
// -[FIN devildrey33.variables]-

// -[INICIO devildrey33.AnimarTexto]-
// Función que inicia la animación
function AnimarTexto(Txt) {
    if (Temporizador != 0) clearInterval(Temporizador);
    var Canvas = document.getElementById("canvas");
    if (Canvas.getContext) { Context = Canvas.getContext("2d");                          }
    else                   { alert("Tu navegador no soporta el objeto canvas!"); return; }
    PosX = 5;
    PosY = 32;
    PosTexto = 0;
    Texto = Txt;
    Context.fillStyle = "rgb(0, 0, 0)";
    Context.fillRect(0, 0, Context.canvas.width, Context.canvas.height);
    Context.font = "normal 400 32px sans-serif";
    Temporizador = setInterval("PintarCaracter()", 100);
}
// -[FIN devildrey33.AnimarTexto]-

// -[INICIO devildrey33.PintarCaracter]-
// Función que pinta un caracter del texto
// NOTA si se encuentra un salto de linea, calcula la posicion de la nueva linea.
function PintarCaracter() {
    // Si llegamos al final del texto desactivamos el temporizador y salimos
    if (PosTexto == Texto.length) {
        clearInterval(Temporizador);
        Temporizador = 0;
        return;
    }
    Caracter = Texto.charAt(PosTexto ++);
    // Si el caracter es un salto de linea ajustamos la posición y salimos
    if (Caracter == "\n" || Caracter.charCodeAt(0) == 13) {
        PosY += 32;
        PosX = 5;
        return;
    }
    // Pintamos el caracter actual con un color aleatorio
    else {
        // Creamos un color aleatorio
        ColR = Math.round(200 * Math.random()) + 55;
        ColG = Math.round(200 * Math.random()) + 55;
        ColB = Math.round(200 * Math.random()) + 55;
        Context.strokeStyle = "rgb(" + ColR + ", " + ColG + ", " + ColB + ")";
        // Pintamos el borde del caracter actual
        Context.strokeText(Caracter, PosX, PosY);
        // Medimos el caracter actual y sumamos su tamaño a la posición X
        Tam = Context.measureText(Caracter);
        PosX += Tam.width;
    }
}
// -[FIN devildrey33.PintarCaracter]-

</script>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Canvas2D_2.png" alt="Canvas 2D" />
                <p>Hoy vamos a seguir con el objeto canvas en dos dimensiones, y esta vez vamos a ver cómo podemos pintar texto en él.</p>
                <p>La idea es hacer una animación carácter a carácter de un texto.</p>
                <p>Además veremos que pintar texto dentro del objeto canvas no es como meter cualquier etiqueta de texto, la cosa varia bastante ya que no se pueden utilizar etiquetas, y si por ejemplo quisiéramos centrar el texto deberíamos obtener el tamaño del canvas en pixeles, restarle el tamaño de todo el texto en pixeles, y dividir el resultado por dos. A la vieja usanza como a mí me gusta :).</p>
                <!-- FIN_INTRODUCCION -->
                <p>Al igual que con el primer tutorial vamos a empezar por definir algunas variables globales.</p>
                <div  style='clear:both;'></div>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDVariables", "Variables globales", "../Ejemplos/Canvas2D/Canvas2D_2_Ejemplo.html", "variables"); ?>
                <p>En primer lugar tenemos la variable <i>Temporizador</i> la cual se utilizara para guardar la ID del temporizador que realizara la llamada a la función principal de la animación, la variable <i>Context</i> se utilizara para guardar el contexto grafico del canvas y desde donde llamaremos a las funciones de pintado de él, las variables <i>PosX</i> y <i>PosY</i> guardaran la posición X e Y actuales donde se tiene que pintar el siguiente carácter, la variable <i>PosTexto</i> guardara la posición del carácter actual, y por último la variable <i>Texto</i> guardara la cadena de caracteres que se tiene que animar.</p>
                <p>Seguimos con la función que inicia el Canvas y el temporizador para pintar los caracteres :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDAnimarTexto", "Función AnimarTexto", "../Ejemplos/Canvas2D/Canvas2D_2_Ejemplo.html", "AnimarTexto"); ?>
                <p>En primer lugar en la línea 3 obtenemos el objeto HTML Canvas, luego en la línea 4 comprobamos que tenga la función <i>getContext</i> ya que si no está disponible es que el navegador no soporta el objeto Canvas. Si todo ha ido bien, pasamos a la línea 6 donde empezamos a inicializar las variables de la animación.</p>
                <p>En la línea 10 establecemos el color con el que vamos a pintar el fondo (negro) utilizando el atributo <i>fillStyle</i>, y luego en la línea 11 pintamos un rectángulo que abarca todo el objeto Canvas utilizando la función <i>fillRect</i>.</p>
                <p>En la línea 12 establecemos las propiedades de la fuente con el atributo <i>font</i>. Cuidado porque no acepta cualquier cosa, en este caso especificamos que la fuente será normal (podría ser italic, underline, etc...), luego especificamos el grueso de la fuente (400 es lo normal, para ser negrita debería ser 1000), luego especificamos el tamaño en pixeles (en este caso 32 pixeles), y por ultimo especificamos el nombre de la fuente.</p>
                <p>Y finalmente en la línea 13 activamos un temporizador que llamara a la función PintarCaracter cada 100 milisegundos con la función <a href="http://www.w3schools.com/jsref/met_win_setinterval.asp" target="_new"><i>setInterval</i></a>.</p>
                <p>Ahora pasemos a ver la función PintarCaracter : </p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDPintarCaracter", "Función PintarCaracter", "../Ejemplos/Canvas2D/Canvas2D_2_Ejemplo.html", "PintarCaracter"); ?>
                <p>En primer lugar la función mira en la línea 5 si el carácter actual ha sobrepasado el texto, por lo que terminaremos la animación. Para ello utilizamos la función clearInterval que elimina el temporizador encargado de la animación.</p>
                <p>En la línea 9 obtenemos el carácter actual de la variable <i>Texto</i> utilizando la función <a href="http://www.w3schools.com/jsref/jsref_charat.asp" target="_blank"><i>charAt</i></a>, y lo guardamos en la variable <i>Caracter</i>.</p>
                <p>En la línea 11 comprobamos si el carácter actual es un carácter de salto de línea, en cuyo caso ajustamos las posiciones X e Y y salimos de la función de pintado. Fijaros que busco o el caracter <i>\n</i> y luego utilizo la función <a href="http://www.w3schools.com/jsref/jsref_charcodeat.asp" target="_blank"><i>charCodeAt</i></a> especificando el número 13.</p>
                <p>Si llega a la línea 17 es que se trata de un carácter normal, por lo que procedemos a crear un color aleatorio de 55 a 255 (así nos aseguramos que no salga muy oscuro) utilizando la función <a href="http://www.w3schools.com/jsref/jsref_random.asp" target="_blank"><i>Math.random</i></a>, y redondeamos el resultado con la función <a href="http://www.w3schools.com/jsref/jsref_round.asp" target="_blank"><i>Math.round</i></a> ya que el random devuelve resultados decimales que no son validos para nuestro propósito.</p>
                <p>En la línea 22 asignamos el color para el borde del texto utilizando el atributo <i>strokeStyle</i> y los canales de colores que previamente creamos a partir de la línea 17.</p>
                <p>En la línea 24 pintamos el carácter actual en la posición X e Y que toca utilizando la función <i>strokeText</i>.</p>
                <p>En la línea 26 obtenemos el ancho del carácter actual utilizando la función <i>measureText</i>. Ojo porque esta función solo devuelve el ancho, no he visto ninguna función que devuelva la altura.</p>
                <p>Y por ultimo en la línea 27 sumamos el ancho del carácter que obtuvimos previamente a la variable <i>PosX</i>.</p>
                <canvas id="canvas" class='Centrado' style='background:#000; display:table;' width="990" height="110" style="background-color:#000"></canvas>
                <div class='Centrado'>
                    <div class='Boton-Normal' onClick="AnimarTexto('Texto animado carácter a carácter\nCada carácter tiene un color distinto\nY puede tener varias líneas.')">Iniciar la animación</div>
                </div>
                <p>Y esto es todo por hoy, espero que este tutorial os sirva de ayuda. Como siempre podéis ver un ejemplo simplificado online o descargar el ejemplo.</p>
                <table class='Centrado'><tr>
                        <td><a href='/Lab/Ejemplos/Canvas2D/Canvas2D_2_Ejemplo.html' class='Boton-Normal'>Ver ejemplo</a></td>
                        <td><a href='/Descargas/Canvas2D_2.zip' target="_blank" class='Boton-Normal'>Descargar ejemplo</a></td>
                </tr></table>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>