<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));*/
	$DeclaracionesHeadExtras = "
";

//	$Base->InicioPlantilla("Tutorial HTML5 Canvas2D parte 1", $DeclaracionesHeadExtras);

	include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML5 Canvas2D parte 1">
        <meta name="keywords" content="HTML5 Canvas2D, Canvas2D">';

	
        $Base->InicioPlantilla(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 1", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 1");
        
        ?>	


<script type='text/javascript'>
// -[INICIO devildrey33.Variables]-
// Variables globales
var TotalEstrellas = 200;
var Espacio = Array();
var Temporizador = 0;
var Canvas;
var Context;

// Atributos para cada estrella del espacio
function Estructura_Espacio(x, y, Velocidad, Color) {
    this.x = x;
    this.y = y;
    this.Velocidad = Velocidad;
    this.Color = 'rgb(' + Color + ', ' + Color + ', ' + Color + ')';
}
// -[FIN devildrey33.Variables]-		

// -[INICIO devildrey33.Temporizadores]-
// Función que inicia el temporizador de la animación
function EncenderTemporizador() {
    if (Canvas.getContext && Temporizador === 0) {
        Temporizador = setInterval(PintarEspacio, 10);
    }
}

// Función que detiene el temporizador de la animación
function PararTemporizador() {
    if (Temporizador != 0) {
        clearInterval(Temporizador);
        Temporizador = 0;
    }
}
// -[FIN devildrey33.Temporizadores]-		

// -[INICIO devildrey33.IniciarAnimacion]-
// Función que inicializa todas las variables requeridas para la animación
function IniciarAnimacion() {
    if (Temporizador !== 0) return;
    Canvas = document.getElementById('CanvasEspacio');
    if (Canvas.getContext) {
        Context = Canvas.getContext('2d');
        CrearEspacio();
        EncenderTemporizador();
    }
    else {
        alert('Tu navegador no soporta el objeto canvas!');
    }
}

// Función que crea el array con los datos para cada estrella
function CrearEspacio() { 
    for (var i = 0; i < TotalEstrellas; i++) {
        Espacio[i] = new Estructura_Espacio( Context.canvas.width * Math.random(),              // X
                                             Context.canvas.height * Math.random(),             // Y
                                             (5 * Math.random()) + 1,                           // Velocidad
                                             200 + Math.round((5 * Math.random()) + 1) * 10 );  // Color
    }
    Temporizador = 0;
}
// -[FIN devildrey33.IniciarAnimacion]-

// -[INICIO devildrey33.PintarEspacio]-
// Función que pinta el universo
function PintarEspacio() {
    Context.fillStyle = 'rgb(0, 0, 0)';
    Context.fillRect(0, 0, Context.canvas.width, Context.canvas.height);
    for (i = 0; i < TotalEstrellas; i++) {
        Espacio[i].x += Espacio[i].Velocidad;
        // Se ha salido del recuadro
        if (Espacio[i].x > Context.canvas.width) {
            Espacio[i] = new Estructura_Espacio( 0,
                                                 Context.canvas.height * Math.random(),
                                                 (5 * Math.random()) + 1,
                                                 200 + Math.round((5 * Math.random()) + 1) * 10 );
        }
        Context.fillStyle = Espacio[i].Color;
        Context.fillRect(Espacio[i].x, Espacio[i].y, 1, 1);
    }
}
// -[FIN devildrey33.PintarEspacio]-		
</script>

                <!-- INTRODUCCION -->
                <p>El objeto canvas de HTML5 es un objeto que nos permite pintar gráficos dinámicamente en una porción de la pagina web utilizando JavaScript.</p>
                <p>Este objeto puede ser utilizado tanto para pintar gráficos en dos dimensiones como en tres dimensiones.</p>
                <p>En este primer tutorial empezaremos por ver cómo hay que crear este objeto y como utilizar un par de funciones básicas para pintar gráficos dentro del él.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para ello crearemos una animación simple que representara el universo moviéndose de izquierda a derecha.</p>
                <p>Lo primero que tenemos que hacer es declarar una serie de variables globales, y una estructura que utilizaremos para contener los datos de cada estrella :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDVariables", "Variables y estructuras", "Canvas2D_1.php", "Variables"); ?>
                <p>La variable <i>TotalEstrellas</i> determina el total de estrellas que se mostraran en la animación, la variable <i>Espacio</i> será un array con los datos de todas las estrellas, la variable <i>Temporizador</i> será la encargada de contener la ID del temporizador encargado de realizar la llamada a la función de la animación, la variable <i>Canvas</i> será la encargada de guardar los datos de la etiqueta canvas, y la variable <i>Context</i> será el objeto que se utilizara para pintar los gráficos en dos dimensiones.</p>
                <p>Además de las variables podemos ver la función <i>Estructura_Espacio</i> que no es más que la estructura básica con los datos de una estrella dentro del espacio (X, Y, Velocidad, y Color).</p>
                <p>Ahora nos toca ver como iniciamos el objeto canvas para pintar gráficos en dos dimensiones, y como creamos el universo :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDIniciarAnimacion", "Inicio de la animación", "Canvas2D_1.php", "IniciarAnimacion"); ?>
                <p>En primer lugar, en la línea 3 obtenemos el objeto DOM que hace referencia a la etiqueta canvas por su id. Luego en la línea 4 hacemos una comprobación para ver si existe la función <i>getContext</i> que en caso de salir falsa sabremos que el navegador no soporta el objeto canvas.</p>
				<p>Una vez sabemos que podemos utilizar la función <i>getContext</i> en la línea 5 creamos el objeto para pintar los gráficos en dos dimensiones, en la línea 6 llamamos a la función <i>CrearEspacio</i> para rellenar el array <i>Espacio</i> y por ultimo en la línea 7 utilizamos la función <i>EncenderTemporizador</i> que inicia la animación.</p>
                <p>En la función <i>CrearEspacio</i> básicamente utilizamos un bucle que recorre de 0 al total de estrellas y que crea sus valores aleatoriamente.</p>
                <p>Ahora echemos un vistazo brevemente a las funciones encargadas de iniciar y terminar el temporizador de la animación :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDTemporizadores", "Inicio y fin del temporizador", "Canvas2D_1.php", "Temporizadores"); ?>
				<p>La función <i>EncenderTemporizador</i> se asegura de que se pueda utilizar la función <i>getContext</i>, y de que el temporizador no se ha creado, para dar paso a su creación. Para crearlo utiliza la función <a href="http://www.w3schools.com/jsref/met_win_setinterval.asp" target="_new"><i>setInterval</i></a> que llama a la función <i>PintarEspacio</i> cada 10 milisegundos.</p>
                <p>La función <i>PararTemporizador</i> se asegura de que el temporizador esta encendido, y de ser ese el caso llama a la función <a href="http://www.w3schools.com/jsref/met_win_clearinterval.asp" target="_new"><i>clearInterval</i></a> para eliminar ese temporizador.</p>
                <p>Ya solo nos queda echar un vistazo a la función <i>PintarEspacio</i> : </p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDPintarEspacio", "Función PintarEspacio", "Canvas2D_1.php", "PintarEspacio"); ?>
                <p>Lo primero que hace esta función en la línea 3, es asignar el color, para ello se asigna en el atributo <i>fillStyle</i> la cadena "rgb(0,0,0)" que se refiere al color negro expresado en rgb.</p>
                <p><b>NOTA :</b> Existen dos atributos para cambiar el color <i>fillStyle</i> y <i>strokeStyle</i>, el primero define el color del fondo, y el segundo el color del borde. Al utilizar <i>fillRect</i> solo pintamos un rectángulo con el color del fondo, si luego queremos pintarle el borde deberíamos utilizar <i>strokeRect</i>.</p>
                <p>Inmediatamente en la línea 4 se utiliza la función <i>fillRect</i> especificando 0 en las coordenadas X, Y, y el ancho y altura del objeto canvas. Lo que pinta todo el fondo de color negro.</p>
                <p>En la línea 5 empieza un bucle que recorre el array <i>Espacio</i> y que suma a la X de cada estrella su valor de <i>Velocidad</i>. Luego comprueba si la X se sale del canvas, y de ser ese el caso crea una nueva estrella aleatoria en esa posición.</p>
                <p>Por último asigna el color para la estrella utilizando el atributo <i>fillStyle</i>, y pinta la estrella utilizando <i>fillRect</i>.</p>
                <canvas class='Centrado' style='display:table; background:#000' id="CanvasEspacio" width="990" height="100" style="background-color:#000"></canvas>
                <table class='Centrado'><tr>
                        <td><button class='Boton-Normal' onclick="IniciarAnimacion()">Iniciar la animación</button></td>
                        <td><button class='Boton-Normal' onclick="PararTemporizador()">Detener la animación</button></td>
                </tr></table>
<!--                <div class='Centrado'> 
	                <br />
                	<a class='devildrey33_Boton' href="javascript:IniciarAnimacion()" style='margin-right:10px'>Iniciar la animación</a>
                	<a class='devildrey33_Boton' href="javascript:PararTemporizador()">Detener la animación</a>
                </div> -->
                <p>Lo único que nos falta es ver el código HTML que se ha utilizado para el canvas :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
<canvas id="CanvasEspacio" width="990" height="100" style="background-color:#000"></canvas>
-[FIN devildrey33.ID3]-*/                
                $Base->PintarCodigo->PintarArchivoHTML("IDHTML", "Código HTML", 'Canvas2D_1.php', "ID3"); 
                ?>
                <p>Con añadir la etiqueta HTML canvas con una id para poder localizarla vía JavaScript DOM es suficiente. Como recomendación el tamaño del objeto canvas es mejor especificarlo vía atributos, y no dentro del estilo css.</p>
				<p><b>NOTA</b> : Este tutorial lo he hecho con un día de experiencia utilizando el objeto canvas, por lo que no tiene que ser necesariamente de lo mas optimizado, pero para el caso creo que viene bien para dar los primeros pasos. Almenos funciona en explorer algunas veces xD...</p>
                <p>Y esto es todo por hoy!, como siempre si queréis podéis ver o descargar una versión simplificada con el ejemplo de la animación.</p>
                
                <table class='Centrado'><tr>
                        <td><a href='/Lab/Ejemplos/Canvas2D/Canvas2D_1_Ejemplo.html' class='Boton-Normal'>Ver ejemplo</a></td>
                        <td><a href='/Descargas/Canvas2D_1.zip' class='Boton-Normal' target="_blank">Descargar ejemplo</a></td>
                </tr></table>


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>