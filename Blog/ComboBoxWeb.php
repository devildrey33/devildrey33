<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("ComboBox PHP + JQuery + JavaScript + Css");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="ComboBox en PHP">
        <meta name="keywords" content="ComboBox web, ComboBox php">';

        $Base->InicioPlantilla(basename(__FILE__), "ComboBox PHP + JQuery + JavaScript + Css", $META);
        
        $Base->InicioBlog(basename(__FILE__), "ComboBox PHP + JQuery + JavaScript + Css");
?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ComboBoxWeb.png" alt="ComboBox para la web" />
                <p>Un ComboBox es un control que contiene un texto y un botón que despliega una lista con mas textos de los cuales podemos seleccionar uno.</p>
                <p>En este tutorial vais a ver como podéis crearos vuestro propio ComboBox para la web sin muchas complicaciones. Para ello se utilizara PHP, JQuery, JavaScript y una hoja de estilos Css.</p>
                <p>Este control se verá exactamente igual independientemente del sistema operativo y navegador que utilicemos, ya que no parte de ningún control estándar. Esto puede ser de gran ayuda para webs con un diseño grafico complejo, ya que los controles estándar romperían en la mayoría de casos ese diseño.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para empezar vamos a crear un objeto en PHP que nos servirá para agregar entradas a la lista del combobox y para crearlo.</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("devildrey33ComboBox_php", "Objeto <b>devildrey33_ComboBox</b>", "../Ejemplos/ComboBoxWeb/devildrey33_ComboBox.php"); ?>
                <p>En esencia guardamos todas las entradas en el vector <b>_Lista</b> y luego al llamar a la función <b>CrearComboBox</b> recorremos todo el vector para incrustar las entradas dentro de la ComboBox.</p>
                <p>Con este código tenemos un objeto que nos permite añadirle textos dentro, y luego crear el ComboBox con los textos añadidos.</p>
                <p>Para entender mejor la distribución de los div podéis echar un vistazo al siguiente esquema :</p>
                <img src="/Graficos/EsquemaComboBox.png" alt="Esquema del ComboBox" />
                <p>Ahora que ya tenemos un objeto que nos permite crear la ComboBox con relativa facilidad, vamos a ver sus estilos css :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("devildrey33ComboBox_css", "Estilos para la ComboBox", "../Ejemplos/ComboBoxWeb/css/devildrey33_ComboBox.css"); ?>
                
                <p>Lo más importante de estos estilos css son las propiedades <b>overflow:hidden</b> y <b>position:absolute</b> de la clase <b>.devildrey33_ComboBox</b>. </p>
                <p>La propiedad <b>overflow:hidden</b> hace que el objeto se quede en el tamaño especificado aun y cuando existan más objetos dentro de el para mostrar, de esta forma si tenemos la lista dentro del ComboBox pero el ComboBox tiene solo 24 pixeles en la propiedad Height, la lista quedara oculta.</p>
                <p>La propiedad <b>position:absolute</b> crea el objeto en la posición normal donde debería crearse, con la diferencia de que si este objeto se hace más grande, no modificara el resto de la página, y quedara sobrepuesto por delante de ella.</p>
                <p>Por último nos queda ver las funciones JavaScript y JQuery del ComboBox.</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("devildrey33ComboBox_js", "Funciones JavaScript para la ComboBox", "../Ejemplos/ComboBoxWeb/js/devildrey33_ComboBox.js"); ?>
                <p>Para empezar en la funciones Mostrar y Ocultar se hace la animación para desplegar / plegar el ComboBox utilizando la función <a href="http://api.jquery.com/animate/">animate</a> de JQuery.</p>
                <p>Cuando desplegamos el ComboBox obtenemos la altura de la Lista de entradas y le sumamos 28, entonces la función <a href="http://api.jquery.com/animate/">animate</a> de JQuery despliega gradualmente la ComboBox haciendo que su altura pase de 24 pixeles a 28 pixeles más la altura en pixeles de la lista.</p>
                <p>Cuando plegamos el ComboBox se supone que tiene la altura de la lista más 28 pixeles, y la función <a href="http://api.jquery.com/animate/">animate</a> de JQuery plegara gradualmente la ComboBox hasta que su altura sea de 24 pixeles.</p>
                <p>Por último en la función devildrey33_ComboBox_Click primero llamamos a la función devildrey33_ComboBox_Ocultar para plegar la ComboBox y luego utilizamos la función <a href="http://www.w3schools.com/jsref/jsref_eval.asp">eval</a> para llamar a la función que previamente le pasamos en la función devildrey33_ComboBox::CrearComboBox.</p>
                <p>Con esto ya solo queda mostrar un pequeño ejemplo para crear una ComboBox.</p>
                
                <?php $Base->PintarCodigo->PintarArchivoHTML("ComboBox_Ejemplo_php", "Archivo PHP final", "../Ejemplos/ComboBoxWeb/ComboBoxWeb_Ejemplo.php"); ?>
                <br />
                <div class='nota'>Este control ha quedado completamente desfasado, echa un vistazo a <a href="devildrey33_ListaDesplegable_2.0.php">devildrey33_ListaDesplegable 2.0 FINAL</a>.</div>
                <div class='Centrado'>
                    <a class='Boton-Normal' href="devildrey33_ListaDesplegable_2.0.php">Ir a devildrey33_ListaDesplegable</a>
                </div>
                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>