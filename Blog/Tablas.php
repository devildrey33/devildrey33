<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

	$Base->InicioPlantilla("Tablas fijas y tablas automáticas", $HEAD);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Tabla responsive'>
	<meta name='keywords' content='CSS tabla'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tablas automáticas y tablas fijas", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tablas automáticas y tablas fijas");
        echo "<script>\$Base.CargarCSS('Blog_tablas.css');</script>";

?>


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Propiedades CSS" />
                <p>Cuando se necesita mostrar una gran cantidad de datos por la web se suele recurrir a tablas, pero las tablas por defecto calculan automáticamente el tamaño de las columnas, y no necesariamente tiene porque ser conveniente para nuestra tarea.</p>
                <p>Desde el CSS 2.1 se puede modificar la forma en que la tabla calcula la disposición de columnas, para ello existe la propiedad <a href="/Doc/CSS/Propiedades/table-layout" target="_blank">table-layout</a>.</p>
                <p>Esta propiedad nos permite especificar si la tabla debe ser calculada automáticamente, o por el contrario tiene una disposición fija (todas las columnas fijas, excepto una columna variable).</p>
                <!-- FIN_INTRODUCCION -->
                <p>Pongamos por caso que tenemos que mostrar una base de datos que contiene unas 200 filas con 3 columnas. Dos de las tres columnas tendrán datos que ocuparan unos 10 caracteres cada una, y la última columna contendrá una descripción que puede ser muy larga.</p>
                <p>Lo mas lógico en este caso es hacer las dos primeras columnas de un ancho fijo de pongamos 100 pixeles, y la última columna ocupará como máximo el 100% del ancho restante.</p>

                <div style='position:relative'>
                <div class='Marca700'></div>
                <div class='Marca400'></div>
                <span style="color:red; position:absolute; left:350px;">400px</span>
                <span style="color:green; position:absolute; left:650px;">700px</span>
<!--[INICIO devildrey33.TablaHTML]-->
<table class='MiTabla MiTablaFija'>
    <caption><code>table-layout:fixed</code></caption>
    <tr>
        <td>nombre de pila</td>
        <td>A-1234567890</td>
        <td>Descripción larga utilizada para explicar el valor.</td>
    </tr>
    <tr>
        <td>nombre de pila</td>
        <td>A-1234567890</td>
        <td>Descripción larga utilizada para explicar el valor.</td>
    </tr>
    <tr>
        <td>nombre de pila</td>
        <td>A-1234567890</td>
        <td>Descripción larga utilizada para explicar el valor.</td>
    </tr>
</table>				
<!--[FIN devildrey33.TablaHTML]-->
                    <br />
                    <table class='MiTabla'>
                        <caption><code>table-layout:auto</code></caption>
                        <tr>
                            <td>nombre de pila</td>
                            <td>A-1234567890</td>
                            <td>Descripción larga utilizada para explicar el valor.</td>
                        </tr>
                        <tr>
                            <td>nombre de pila</td>
                            <td>A-1234567890</td>
                            <td>Descripción larga utilizada para explicar el valor.</td>
                        </tr>
                        <tr>
                            <td>nombre de pila</td>
                            <td>A-1234567890</td>
                            <td>Descripción larga utilizada para explicar el valor.</td>
                        </tr>
                    </table>
                </div>
                <p>Si os fijáis en las tablas, la primera es capaz de llegar a 400 pixeles de ancho sacrificando parte de la descripción. En cambio la otra, al ser de tamaño automático no se puede hacer mas pequeña.</p>
                <div class='nota'>En los ejemplos he utilizado la propiedad <a href="/Doc/CSS/Propiedades/white-space" target="_blank">white-space</a> para evitar que cree mas de una línea de texto por <code>&lt;tr&gt;</code>. Normalmente el texto se cortaría en varias líneas, y eso estéticamente a veces resulta muy molesto.</div>
                <p>Viendo el ejemplo anterior podemos ver que el modelo de tablas con una columna variable puede resultar muy adecuado para documentos responsive, ya que además no daña la apariencia de la lista creando múltiples líneas en algunos valores.</p>
                <h2>Declaración CSS</h2>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_TablaCSS", "CSS para la tabla fija", "../Web/CSS/Blog_tablas.css", "TablaCSS"); ?>
                <p>Para las celdas de la tabla he utilizando la propiedad <a href="/Doc/CSS/Propiedades/overflow" target="_blank">overflow</a> que oculta el contenido que sobresaliente de la celda, y la propiedad <a href="/Doc/CSS/Propiedades/text-overflow" target="_blank">text-overflow</a> para indicar que si un texto sobresale del contenedor se deben mostrar tres puntos "..." al final indicando que hay mas texto que no se ve.</p>
                <h2>Maquetación HTML</h2>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID_TablaCSS", "Código HTML para la tabla fija", "Tablas.php", "TablaHTML"); ?>
                <p>Como veis la maquetación es de lo mas simple, y esto es todo por hoy, si quereis podeis echar un vistazo al ejemplo desde el laboratorio de pruebas.</p>

<div class='Centrado'>
    <a href="/Lab/Ejemplos/TablaFija/TablaFija.html" class="Boton-Normal">Ver Ejemplo</a>
</div>
                
                
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     