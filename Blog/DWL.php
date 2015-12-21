<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));		
	$Base->InicioPlantilla("Devildrey33 Windows Library");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Devildrey33 Windows Library">
        <meta name="keywords" content="DWL, Devildrey33 Windows Library">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Devildrey33 Windows Library", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Devildrey33 Windows Library");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_DWL.png" alt="devildrey33 Windows Library" />
                <p>Esta librería es la base para la mayoría de aplicaciones desarrolladas por Josep Antoni Bover. Fue creada en el año 2002 ante la necesidad de tener controles fuera del look estandar de windows xp, y tambien para facilitarme la vida a la hora de crear aplicaciones bajo windows.</p>
                <p>En los tiempos actuales en los que ya se va normalizando el uso de Windows 7 y windows xp va desapareciendo, esta libreria ha empezado a perder su utilidad. Pero de todas formas es un excelente ejemplo de como programar desde cero controles como el ListView, TreeView, PopupMenu, Button, etc... sin utilizar nada de los controles estandar de windows.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Se podria decir que el estilo a la hora de controlar eventos es bastante parecido al MFC, y personalmente me ha servido para aprender muchisimo sobre el API de windows.</p>
                <h2>DWLArbolEx</h2>
                <img src="/Graficos/DWLArbolEx.png" style="float:right;" alt="DWLArbolEx" />
                <p>Control que simula un TreeView de windows, con algunas particularidades :</p>
                <ul>
                <li>Scrolls propios completamente personalizables en apariencia.</li>
                <li>Posibilidad de añadir botones en las barras de scroll.</li>
                <li>SubSeleccion (cuando seleccionamos un nodo padre, todos los hijos quedan SubSeleccionados).</li>
                <li>Posibilidad de añadir una imagen de fondo, y que quede translucida debajo de los nodos.</li>
                <li>Colores de los nodos totalmente personalizables de forma individual (Fondo y Texto : Normal, Resaltado, Seleccionado, SubSeleccionado, Presionado. ademas del Borde.)</li>
                <li>Efectos de resaltado tanto en los nodos como en el borde del control, como en los scrollbars.</li>
                <li>Fuentes independientes para cada nodo, utilizando HFONTS previamente cargados en memoria.</li>
                <li>Funciones virtuales que permiten re-emplazar practicamente cada fase de pintado.</li>
                </ul>
                <p>Por el contrario tambien tiene algunas funciones que no fueron programadas en ningun momento :</p>
                <ul>
                <li>Drag & Drop</li>
                <li>Funciones mas complejas del teclado, por ejemplo si presionamos la tecla 'a' el DWLArbolEx selecciona el primer nodo que encuentra que empieza por la 'a', pero si deseamos buscar una palabra con mas de una letra, no lo reconocera y buscara el nodo que empieze por la ultima tecla que el usuario haya presionado.</li>
                </ul>
                
                <h2>DWLListaEx</h2>
                <img src="/Graficos/DWLListaEx.png" style="float:right;" alt="DWLListaEx" />
                <p>Control que simula un ListView de windows, con algunas particularidades :</p>
                <ul>
                <li>Scrolls propios completamente personalizables en apariencia.</li>
                <li>Posibilidad de añadir botones en las barras de scroll.</li>
                <li>Posibilidad de añadir una imagen de fondo, y que quede translucida debajo de los items.</li>
                <li>Colores de los nodos totalmente personalizables de forma individual (Fondo y Texto : Normal, Resaltado, Seleccionado, SubSeleccionado, Presionado. ademas del Borde.)</li>
                <li>Efectos de resaltado tanto en los items como en el borde del control, como en los scrollbars.</li>
                <li>Fuentes independientes para cada item, utilizando HFONTS previamente cargados en memoria.</li>
                <li>Funciones virtuales que permiten re-emplazar practicamente cada fase de pintado.</li>
                </ul>
                <p>Por el contrario tambien tiene algunas funciones que no fueron programadas en ningun momento :</p>
                <ul>
                <li>Drag & Drop</li>
                <li>Funciones mas complejas del teclado, por ejemplo si presionamos la tecla 'a' el DWLListaEx selecciona el primer nodo que encuentra que empieza por la 'a', pero si deseamos buscar una palabra con mas de una letra, no lo reconocera y buscara el nodo que empieze por la ultima tecla que el usuario haya presionado.</li>
                </ul>
                <div style='clear:both'></div>
                <h2>DWLMenuEx</h2>
                <img src="/Graficos/DWLMenuEx.png" style="float:right;" alt="DWLMenuEx" />
                <p>Control que simula un PopupMenu de windows, con algunas particularidades :</p>
                <ul>
                <li>Iconos de 16*16 en contra de los iconos de 12*12 por defecto de windows.</li>
                <li>Cada menu tiene su titulo.</li>
                <li>Colores totalmente configurables independientes por cada menuitem / submenu (FondoSeleccionado, TextoNormal, TextoResaltado, TextoPresionado).</li>
                <li>Fuentes totalmente configurables independientes para cada menuitem/ submenu con HFONTS previamente cargados en memoria.</li>
                <li>Integracion como menu del sistema para la aplicacion (En sistemas operativos como WindowsXP cuando se pulsaba en la barra de tareas el icono de la aplicacion con el boton derecho, esto hacia que mostrara el menu del sistema para la aplicacion. Actualmente en windows 7 esto ya no ocurre).</li>
                <li>Integracion con los comandos comunes como el SC_CLOSE, SC_MINIMIZE, SC_MAXIMIZE, SC_MOVE y SC_RESTORE</li>
                <li>Creacion dinamica de las ventanas requeridas para cada menu / submenu en tiempo real, de forma que el consumo de recorsos mientras no esten visibles sea minimo.</li>
                </ul>
                <p>Por el contrario tiene algunos problemas con el foco cuando se usa Alt+Tab y el menu esta visible.</p>
                <p>Aparte de estos tres controles tiene varios mas como una barra de progreso / desplazamiento, un boton, una combo que se puede convertir en una lista de unidades de disco para buscar un directorio, un checkbox, y un cuadro de edicion (que no funciona muy bien).</p>
                <p style="text-decoration:line-through">Puedes ver mas sobre la DWL en el siguiente enlace : <b>Documentación de la DWL (doxygen)</b>.</p>
                <div class='nota'>El estado de dessarrollo actual de esta libreria ha quedado totalmente detenido debido a que esta basada en controles clon que en la actualidad ya no son necesarios. Quizas te interese hechar un vistazo a la <a href="DWL2012-08-02-2012.php">DWL 2012</a>.</div>
                
                <a class="Boton Centrado" href="/Descargas/DWL.zip" target="_blank">Descargar código fuente de la DWL 0.961</a>   

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>