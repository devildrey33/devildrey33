<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

	$DeclaracionesHeadExtras = '
 ';
	
	$Base->InicioPlantilla("Tutorial HTML5 Canvas2D parte 3 (degradado lineal)", $DeclaracionesHeadExtras);	*/

	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial HTML5 Canvas2D parte 3">
        <meta name="keywords" content="HTML5 Canvas2D, Canvas2D">';

	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 3 (degradado lineal)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial HTML5 Canvas2D parte 3 (degradado lineal)");


?>

<script type="text/javascript">
		
function PintarDegradados() {
    // Inicializo el canvas
    var Canvas = document.getElementById("canvas");
    if (Canvas.getContext) { Context = Canvas.getContext("2d");                          }
    else                   { alert("Tu navegador no soporta el objeto canvas!"); return; }
    // Pinto el fondo gris claro	
    Context.fillStyle = "#EEEEEE";
    Context.fillRect(0, 0, Context.canvas.width, Context.canvas.height);

    // Creo los degradados lineales
// -[INICIO devildrey33.vertical]-
    var GradientVertical = Context.createLinearGradient(0, 20, 0, 80);
    GradientVertical.addColorStop(0, "blue");
    GradientVertical.addColorStop(1, "green");
// -[FIN devildrey33.vertical]-

    var GradientHorizontal = Context.createLinearGradient(120, 0, 180, 0);
    GradientHorizontal.addColorStop(0, "blue");
    GradientHorizontal.addColorStop(1, "green");

    var GradientInclinado = Context.createLinearGradient(220, 20, 280, 80);
    GradientInclinado.addColorStop(0, "blue");
    GradientInclinado.addColorStop(1, "green");

    // Pinto los degradados lineales
// -[INICIO devildrey33.Pvertical]-
    Context.fillStyle = GradientVertical;
    Context.fillRect(20, 20, 80, 80);
// -[FIN devildrey33.Pvertical]-
    Context.fillStyle = GradientHorizontal;
    Context.fillRect(120, 20, 80, 80);
    Context.fillStyle = GradientInclinado;
    Context.fillRect(220, 20, 80, 80);

    // Pinto los textos con las coordenadas de los gradients lineales
    Context.fillStyle = "#FFFFFF";

    Context.fillText("0,20", 22, 30);
    Context.fillText("0,80", 22, 97);

    Context.fillText("120,0", 122, 30);
    Context.fillText("180,0", 170, 30);

    Context.fillText("220,20", 222, 30);
    Context.fillText("280,80", 265, 97);
}
</script>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Canvas2D_3.png" alt="Canvas 2D" />
                <p>Siguiendo con los tutoriales del objeto HTML5 canvas en dos dimensiones, hoy vamos a ver cómo crear degradados.</p>
                <p>Ya os aviso que la implementación de degradados que han creado no me ha gustado nada, y que es muy complicada además de ser poco intuitiva. Por otro lado gana bastante en versatibilidad.</p>
                <p>Por una parte entiendo porque han implementado los degradados así, pero por otra me parece algo excesivo. De todas formas el objeto canvas aun está en fase experimental y probablemente sufrirá mas cambios antes de llegar a la primera versión final.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En fin vamos al lio, los degradados son tratados como si fueran un color mas, me explico... por ejemplo para decirle al canvas que queremos pintar un rectángulo con el fondo rojo utilizamos el atributo <i>fillStyle</i> y le indicamos <i>"rgb(255, 0, 0)"</i>, y luego para pintar el rectángulo utilizamos <i>fillRect</i>.</p>
                <p>Pues para pintar un rectángulo con un degradado hacemos prácticamente lo mismo, con la diferencia de que antes creamos un estilo degradado.</p>
				<p>Veamos un ejemplo con código :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDV1", "Creación del estilo degradado vertical", "Canvas2D_3.php", "vertical"); ?>
                <p>Para crear un estilo de degradado creamos la variable <i>GradientVertical</i> y utilizamos la función <i>createLinearGradient</i> a la cual debemos pasarle 4 parámetros. Los dos primeros parámetros representan el punto de origen (X,Y) y los dos últimos parámetros el punto de destino (X,Y).</p>
                <p>Luego en la línea 2 y 3 añadimos los colores que queremos incluir en el degradado utilizando la función <i>addColorStop</i>, el primer parámetro es un valor que puede ir de 0.0 a 1.0 y el segundo valor es el color. Hay que remarcar que podemos añadir más de dos colores si lo deseamos, por ejemplo podríamos añadir el rojo en la posición 0.5.</p>
                <p>Hasta aquí más o menos se entiende, ahora veamos cómo hay que pintar el degradado :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDV2", "Pintando estilo degradado vertical", "Canvas2D_3.php", "Pvertical"); ?>
                <p>Pues bien, como ya comente antes pintar el degradado no supone un gran problema ya que podemos pintarlo como cualquier rectángulo normal. En primer lugar asignamos el estilo del degradado utilizando el atributo <i>fillStyle</i>, y luego utilizamos la función <i>fillRect</i> para pintar el degradado dentro de un rectángulo.</p>
                <p>Fijaros que cuando creo el estilo del degradado le doy como parámetros: <i>origen (0,20)</i>, <i>destino (0, 80)</i> y el rectángulo realmente tiene 80 pixeles de ancho y altura, pero empieza en las coordenadas (20, 20).</p>
                <p>Entonces si creamos el degradado en <i>origen (0, 0)</i>, <i>destino (0, 80)</i> que es lo que pasa? pues que el degradado quedara calculado de forma que empiece al principio del objeto canvas, y no del rectángulo. Dicho de otro modo, veremos una pequeña parte azul y una gran parte de color verde.</p>
                <p>Porque funciona esto así? bueno la razón principal es que el estilo del degradado puede utilizarse para ser pintado con cualquier función ya sea para pintar el fondo o el borde de un rectángulo, de un texto o incluso de una figura.</p>
                <p>Por una parte ofrece más versatibilidad a la hora de utilizar degradados, pero por otra resulta bastante más engorroso su uso.</p>
                <p>Y esto es todo por hoy, como siempre podéis ver un ejemplo online, o descargar-lo.</p>

                <table class='Centrado'><tr>
                        <td><a href='/Lab/Ejemplos/Canvas2D/Canvas2D_3_Ejemplo.html' class='Boton-Normal'>Ver ejemplo</a></td>
                        <td><a href='/Descargas/Canvas2D_3.zip'  target="_blank" class='Boton-Normal'>Descargar ejemplo</a></td>
                </tr></table>

                

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>