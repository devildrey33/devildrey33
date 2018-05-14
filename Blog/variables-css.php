<?php 
/*	include("devildrey33.php");
	// Se muestra desde PropiedadesCSS.php (por defecto)
	$PathRelativo = ".";
	// Se muestra desde el directorio PropiedadCSS como si fuera el indice
	if (isset($_GET["SD"])) {
		if ($_GET["SD"] == "true") $PathRelativo = "..";
	}

	$MostrarGrupos = true;
	if (isset($_GET["Mostrar"])) {
		if ($_GET["Mostrar"] == "Alf") $MostrarGrupos = false;
	}
	
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$HEAD = "<link href='/css/PropiedadesCSS.css' rel='stylesheet' type='text/css' />
	<meta name='robots' content='index, follow'>";
        
	$Base->InicioPlantilla("Referencia CSS : Propiedades" , $HEAD, '<a href="/Doc/">Doc</a>/<a href="/Doc/CSS/">CSS</a>/Propiedades');*/
	

        
    include("../Web/devildrey33.php");
    $Web = new devildrey33;	

    $META = '<meta name="description" content="CSS Variables">
    <meta name="keywords" content="CSS, CSS3, CSS3 Variables, CSS4, CSS4 Variables">
    <meta name="robots" content="index, follow">';

    $Web->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Variables", $META);

    $Web->InicioBlog(basename(__FILE__), "Referéncia CSS : Variables", true);
        
        /*
	include("../Web/CSS_BD.php");
	$Propiedades = new CSS_BD;*/
    ?>

        <p>Recientemente se han vuelto a habilitar las variables css en chrome, y me parece un tema a empezar a tener en cuenta ya que a mi entender es algo que debería haber existido desde el CSS1. Por ejemplo en cualquier diseño web se acaban utilizando siempre unos determinados colores, estos colores se pueden llegar a repetir decenas e incluso cientos de veces en una o varias hojas de estilo, y  si llega el caso de querer modificar uno de esos colores vamos a tener una ardua tarea por delante.</p>
        <p>Con las variables CSS este problema desaparece, ya que podemos declarar dicho color y enlazar todos los elementos que lo van a utilizar a la variable. Además podemos llegar a modificar la variable desde JavaScript, lo que nos da aún mas versatilidad. Por ultimo también ayuda mucho a la hora de leer el código, ver una variable del estilo <code>--ColorFondo</code> que ver <code>#632784</code>.</p>
        <p>En definitiva todo son ventajas, excepto por una cosa... <b>no funciona ni funcionará</b> en ninguna versión de <b>Internet Explorer</b>. <strike>Por suerte he leído en alguna parte que desde hace poco funcionan las variables css en Edge (el nuevo navegador de windows 10), pero es algo que no he podido comprobar.</strike></p>
        <div class='nota'>Puede que con algún script tipo Modernizr se pueda hacer algo con variables css en Internet Explorer, pero seguimos con la misma tónica respecto a los navegadores huérfanos de microsoft. Cada vez que sale una nueva versión de windows sale con su navegador mejorado, pero van dejando los navegadores de las versiones anteriores de windows sin actualizar.</div>
        <h2>Declaración de variables CSS</h2>
        <p>Lo primero que debemos entender antes de nada es que las variables se declaran en un ámbito, y este ámbito puede ser global o restringido solo para ciertos elementos.</p>
        <p>Los nombres de las variables CSS siempre deben empezar con <code>--</code> seguido del nombre, por ejemplo :</p>        
        <pre class="Sintaxis">--Variable : valor;</pre>
        <p>El valor puede ser cualquier cosa en principio...</p>
        <div class="nota">Digo en principio, ya que parece que aguanta bien cualquier tipo de parámetro, incluso he probado <code>--Variable : var(--Variable);</code> que mi para mi mente retorcida es algo que podría acabar en un bucle infinito o incluso en un crash, y oye me ha sorprendido... no he roto nada, ni ha pasado nada.</div>
        <p>A continuación un par de ejemplos de creación de variables : </p>
        <pre style="display:none">
/* -[INICIO devildrey33.global]- */
/* Variable global accesible desde todas las etiquetas */
:root { 
    --MiVariable:calc(100% - 6px); 
}
/* -[FIN devildrey33.global]- */    
    
/* -[INICIO devildrey33.local]- */
/* Variable local accesible solo para las etiquetas que estén dentro de #MiID, o .MiClase */
#MiID, .MiClase { 
    --MiVariable:blue; 
}
/* -[FIN devildrey33.local]- */
        </pre>        
        
<!--        <h3>Ámbito global</h3> -->
        <?php $Web->PintarCodigo->PintarArchivoCSS("global", "", basename(__FILE__), 'global'); ?>
<!--        <h3>Ámbito local</h3> -->
        <?php $Web->PintarCodigo->PintarArchivoCSS("local", "", basename(__FILE__), 'local');    ?>
        <p>En el primer ejemplo se ha creado <code>--MiVariable</code> dentro del selector <a href='/Doc/CSS/Selectores/:root'>:root</a> de forma que todas las etiquetas del documento podrán tener acceso a ella. En el segundo ejemplo la variable <code>--MiVariable</code> solo existe para la etiquetas #MiID, .MiClase, y para todas las etiquetas que estén dentro de estas.</p>
        <p>Para comprender mejor como funcionan las variables globales y locales os he preparado un ejemplo en el que el color del texto de las etiquetas <code>&lt;span&gt;</code> se determina por una variable CSS.</p>
        <p>Vamos a tener la variable <code>--ColorTexto</code> con el mismo nombre en varios ámbitos, y con distintos valores. Fijaros en las líneas 10, 12, y 14 donde podemos ver 3 variables con valores distintos.</p>
        <ul>
            <li>En el ámbito de <code>:root</code> las etiquetas <code>&lt;span&gt;</code> tienen el color del texto rojo. (Las variables globales pueden ser utilizadas por todas las etiquetas dentro del <code>&lt;body&gt;</code>)</li>
            <li>En el ámbito de <code>.ColAzul</code> las etiquetas <code>&lt;span&gt;</code> tienen el color del texto azul.</li>
            <li>En el ámbito de <code>.ColVerde</code> las etiquetas <code>&lt;span&gt;</code> tienen el color del texto verde.</li>
            
        </ul>        
        <h3>Ejemplo :</h3><br />

        <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/CSS/Variables/ambito.html")); ?>        
        
        <div class='nota'>Si creamos una variable solamente para un ámbito local, y una propiedad intenta acceder a ella en otro ámbito desde el que no tiene acceso, no sucederá absolutamente nada y la propiedad permanecerá igual que antes.</div>
        <h2>Enlazar variables a las propiedades</h2>
        <p>Una vez tenemos creadas las variables hay que enlazarlas a las propiedades, para ello se utiliza la función <a href='/Doc/CSS/Funciones/var()'>var</a>.</p>
        <h3>Sintaxis</h3>
        <pre class='Sintaxis'>var ( --Variable <span class="TxtGris">[requerido]</span> , ValorInicial <span class="TxtGris">[opcional]</span>  ) </pre>
<table class='Tabla'>
    <tr>
        <td><b>--Variable</b></td>
        <td>Nombre de la variable a enlazar. Las variables siempre empiezan por <code>--</code></td>
    </tr>
    <tr>
        <td><b>ValorPorDefecto</b></td>
        <td>Valor que recibirá la propiedad en el caso de no existir la variable. Este parámetro es opcional, si no se especifica este parámetro y la variable no existe, la propiedad permanecerá intacta.</td>
    </tr>
</table><br />
        <p>Veamos un ejemplo : </p>
        <pre style="display:none">
/* -[INICIO devildrey33.var]- */
:root { --MargenIzquierdo : 2em; }
p     { margin-left       : var(--MargenIzquierdo); }
/* -[FIN devildrey33.var]- */

/* -[INICIO devildrey33.borde]- */
article { --ColorBorde : #000; }
button  { border       : 1px solid var(--ColorBorde, #000); }
/* -[FIN devildrey33.borde]- */
/* -[INICIO devildrey33.obtenervariable]- */
function ObtenerVariableCSS(Variable) {
    var EstilosComputados = window.getComputedStyle(document.body);
    return EstilosComputados.getPropertyValue(Variable);
}
/* -[FIN devildrey33.obtenervariable]- */
/* -[INICIO devildrey33.asignarvariable]- */
function AsignarVariableCSS(Variable, Valor) {
    document.body.style.setProperty(Variable, Valor);
}
/* -[FIN devildrey33.asignarvariable]- */

        </pre>        
            <?php $Web->PintarCodigo->PintarArchivoCSS("var", "", basename(__FILE__), 'var'); ?>
        
            <p>En la <linea cid='var' l='1'>primera línea</linea> creamos la variable <code>--MargenIzquierdo</code> con un valor de <code>2em</code>. En la <linea cid='var' l='2'>segunda línea</linea> asignamos a la propiedad <a href='/Doc/CSS/Propiedades/margin-left'>margin-left</a> la variable <code>--MargenIzquierdo</code> utilizando la función <a href='/Doc/CSS/Funciones/var()'>var</a>.</p>
            <?php $Web->PintarCodigo->PintarArchivoCSS("borde", "", basename(__FILE__), 'borde'); ?>
            <p>En este ejemplo tenemos una variable con el color del borde, y aplicamos la función <a href='/Doc/CSS/Funciones/var()' cid='borde' l ='2'>var</a> en el último parámetro de la propiedad <a href='/Doc/CSS/Propiedades/border'>border</a>. Como la variable --ColorBorde solo existe dentro del ámbito de una etiqueta article, nos aseguramos de que el borde será negro en el segundo parámetro de la función <a href='/Doc/CSS/Funciones/var()' cid='borde' l ='2'>var</a>.</p>

    
            <h2>Obtener y modificar variables CSS desde JavaScript</h2>
            <p>Hasta ahora hemos visto como crear y utilizar variables en el CSS, pero que pasa si necesitamos mostrar o modificar una variable via JavaScript? Aquí la cosa se complica ya que nos va a tocar acceder a los estilos computados por el navegador.</p>
            <p>El siguiente ejemplo nos muestra como obtener una variable global desde los estilos computados por el navegador :</p>
            <?php $Web->PintarCodigo->PintarArchivoJS("obtenervariable", "Obtener una variable global del CSS", basename(__FILE__), 'obtenervariable'); ?>
            
            <p>La función del ejemplo anterior nos devuelve el contenido de la variable <b>global</b> que especifiquemos.</p>
            <p>En la <linea cid='obtenervariable' l='2'>segunda línea</linea> obtengo los estilos computados con la función <code>window.getComputedStyle</code>, para después en la <linea cid='obtenervariable' l='3'>línea 3</linea> utilizar la función <code>getPropertyValue</code>, que nos devolverá el valor de la propiedad o en este caso variable especificada.</p>
            <div class='nota'>El problema de los estilos computados es que no podemos acceder al CSS de forma abstracta y solo disponemos del CSS que ha sido computado para cada elemento. Si queremos acceder a una variable que no esté en el ámbito global, vamos a tener que especificar en la función <linea cid='obtenervariable' l='2'>getComputedStyle</linea> una etiqueta bajo ese ámbito en vez del <linea cid='obtenervariable' l='2'>document.body</linea>.</div>  
            <p>Veamos como asignar un valor a una variable <b>global</b> del CSS :</p>            
            <?php $Web->PintarCodigo->PintarArchivoJS("asignarvariable", "Asignar un valor a una variable global del CSS", basename(__FILE__), 'asignarvariable'); ?>
            <p>Como veis en el ejemplo anterior se utiliza la función <code>style.setProperty</code>, de un elemento que se encuentre dentro del ámbito de la variable. En este caso como la variable es global podemos utilizar <code>document.body</code> directamente.</p>
            <p>Por último os dejo un ejemplo que modifica vía JavaScript cuatro variables que contienen los colores de los cuatro marcos que tiene el ejemplo.</p>
            <h3>Ejemplo :</h3><br />
            <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/CSS/Variables/javascript.html")); ?>        
            

<?php   
    $Web->FinBlog();
    $Web->FinPlantilla(); 
?>


	
