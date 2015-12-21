<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("DWL 2012");-*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Devildrey33 Windows Library">
        <meta name="keywords" content="DWL, Devildrey33 Windows Library">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "DWL 2012", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "DWL 2012");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_DWL2012.png" alt="devildrey33 Windows Library" />
                <p>Hacia algo más de dos meses que no actualizaba la web, pero eso no quiere decir que estuviera haciendo el vago, al contrario....</p>
                <p>Desde hace un tiempo me he propuesto restaurar la DWL a los tiempos actuales, para ello he decidido empezar nuevamente el proyecto desde cero aprovechando algunas partes de la antigua DWL.</p>
                <p>Han pasado casi diez años desde la primera versión de la DWL, y en este tiempo han cambiado muchas cosas, sobre todo en lo que se refiere al aspecto grafico de windows. Anteriormente el windows (95,98,ME) se componía de controles y ventanas totalmente rectangulares y grises, por lo que me decidí a hacer una serie de controles que marcasen la diferencia en ese aspecto, pero en la actualidad considero que los controles de windows ya son mucho más maduros, y que en principio no es necesario crear clones de esos controles.</p>
                <!-- FIN_INTRODUCCION -->
                <p>A decir verdad la librería aun está muy verde, pero considero que ya va siendo hora de mostrar un poco a donde quiero llegar con ella.</p>
                <p>En principio la librería soporta varios controles básicos como el Button, EditBox, ComboBox, ListView y TreeView, pero el único que puedo afirmar que ya ha alcanzado una posición para ser candidato a la versión 1.0 es el ListView. Todos los demás sufrirán muchos cambios, incluidos ventanas y diálogos.</p>
                <p>Me he pasado prácticamente un mes re-escribiendo la clase DListView y con los resultados que he conseguido me siento muy satisfecho de ella.</p>
                <p>En primer lugar he añadido soporte para 7 tipos de edición distintas, esto quiere decir que el usuario puede editar un item/subitem de 7 formas distintas.</p>
                <p>El ListView por defecto puede editar items con un EditBox, pero con la DWL he extendido el control para que se pueda utilizar un ComboBox con texto editable y un ComboBox con texto estático. Hasta aquí son 3 formas de edición, a ellas hay que sumarle que tanto con el EditBox como con el ComboBox de texto editable se puede limitar la entrada a valores enteros y a valores decimales, con lo que hace un total de 7.</p>
                <img src="/Graficos/LV_COMBO1.png" alt="Editando un item del ListView con una ComboBox de texto estatico" />
                <p>Aparte de la edición he querido mantener la posibilidad de modificar los colores y las fuentes de cada item/subitem independientemente. En la DWL anterior se podía cambiar incluso el color del fondo de un item, y el color de la selección, pero en esta versión he optado por eliminar esa posibilidad, ya que con el tema del explorer (<a href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb759827(v=vs.85).aspx" target="_blank">SetWindowTheme</a>) de windows XP hacia arriba modificar tanto los colores del fondo como los de la selección quedaba bastante mal, visualmente hablando.</p>
                <img src="/Graficos/LV_TILE.png" alt="ListView con colores retocados" />
                <p>También he conseguido de una forma bastante amigable poder hacer un pintado personalizado de una serie de items/subitems para que en vez de mostrar texto muestren cualquier tipo de gráficos que se os puedan ocurrir.</p>
                <img src="/Graficos/LV_CUSTOMDRAW.png" alt="ListView con pintado personalizado" />
                <p style="text-decoration:line-through">Por último he documentado todo el ListView en formato doxygen, podéis ver dicha documentación en el siguiente enlace : Documentación <b>D</b>evildrey33 <b>W</b>indows <b>L</b>ibrary.</p>
                <p><b>Requisitos mínimos :</b> VisualStudio 2008, Windows Vista.</p>
                <div class='nota'>en un futuro se implementara compatibilidad para Windows XP.</div>
                <a class="Boton Centrado" href="/Descargas/DWL_2012.zip" target="_blank">Descargar código fuente de la DWL 2012</a>            


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>