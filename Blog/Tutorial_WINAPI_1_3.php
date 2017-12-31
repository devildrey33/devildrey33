<?php 
	/*include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.3 (Creación de un ObjetoVentana)");*/
        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.3 (Creación de un ObjetoVentana)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.3 (Creación de un ObjetoVentana)");
        

        ?>	

                <!-- INTRODUCCION -->
                <p>Este es el primer punto interesante del tutorial, como encapsular una ventana en una clase que podamos heredar y modificar a nuestro antojo.</p>
                <p>La idea es tener una clase que podamos heredar, y que a partir de ella podamos crear distintos modelos de ventana, sin tener que re-escribir mucho código.</p>
                <p> En especial este tutorial nos demostrara como crear varias ventanas del mismo tipo re-utilizando el mismo objeto.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para empezar el problema más importante que se nos presenta  es que la función WindowProcedure debe ser estática, y esto no nos interesa, ya  que esta función es la primera que necesitaremos sobre-escribir. Además esto  también nos produciría algún que otro problema cuando intentásemos acceder a  miembros de la misma clase no estáticos.</p>
                <p>La solución más viable es enlazar ese WindowProcedure estático  a otra función no estática que además será virtual. De esta forma queda  solucionado el problema más grave a la hora de diseñar esta clase, aunque sea a  costa de otro callback más dentro del WindowProcedure.</p>
                <p>Otra cosa que debemos pensar es que un control es  básicamente una ventana, pero no tiene porqué tener las mismas funciones, así  que estaría bien crear un modelo base para ventanas y controles. A partir de  este modelo ya podremos crearnos ventanas y controles más específicos.</p>
                <p>Veamos como quedaría estructurada la cosa : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPlantillaEventos", "Archivo : PlantillaEventos.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/PlantillaEventos.h", "PlantillaEventos"); ?>
                <p>Para empezar creamos una plantilla destinada a controlar todos los eventos de una ventana. Esta plantilla depende del TIPO_DEVUELTO que por norma sera LRESULT pero puede ser BOOL en caso de los dialogos, y retornara VALOR_DEVUELTO en los mensajes por defecto (que sera 0 para casi todo, menos para los controles estandar de windows).</p>
                <p>Aunque no veamos el codigo de GestorMensajes, hay que destacar que el GestorMensajes debera retornar VALOR_DEVUELTO si se ha procesado el evento en este GestorMensajes, o USAR_GESTOR_POR_DEFECTO si no se ha procesado ninguno de nuestros eventos. Al devolver USAR_GESTOR_POR_DEFECTO le estamos diciendo al _GestorMensajes estatico que devuelva el WindowProcedure por defecto.</p>
                <p>Si creamos cualquier control que mande eventos a su ventana padre, aqui seria donde deberiamos definir dicho evento. Ahora veamos el ObjetoHWND :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoHWND", "Archivo : ObjetoHWND.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoHWND.h", "ObjetoHWND"); ?>
                <p>La clase ObjetoHWND tiene una función que retorna el hWnd de  esta ventana, una función para destruir la ventana, y varias funciones basicas para cualquier ventana como son Activado, Visible, Mover, y ID.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoVentana", "Archivo : ObjetoVentana.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoVentana.h", "ObjetoVentana"); ?>
                <p>La clase ObjetoVentana hereda la clase ObjetoHWND, y contiene la  función _GestorMensajes estatica que se usara al iniciar / crear la ventana y enlazara a GestorMensajes virtual.</p>
                <p>Para que quede claro, estas dos clases serán tomadas como  una base, y nosotros heredaremos de la plantilla PlantillaEventos&lt;LRESULT, USAR_GESTOR_POR_DEFECTO&gt; para hacer nuestra clase  VentanaPadre. Los mensajes mandados a dicha VentanaPadre realizaran el  siguiente recorrido : ObjetoVentana::_GestorMensajes() -&gt;  PlantillaEventos::GestorMensajes(), y por último la API DefWindowProc() si no se  procesa el mensaje en el GestorMensajes. La API DefWindowProc tiene como  objetivo procesar todos los mensajes tal y como lo haría Windows por defecto,  por ejemplo acciones como minimizar, maximizar, restaurar, mover, cambiar  tamaño, etc…. </p>
                <p>Bien, ahora vamos a ver cómo podemos enlazar nuestro  _GestorMensajes estático a nuestro GestorMensajes virtual. Existen varias  alternativas, pero solo voy a exponer la que me parece más ideal para todos los  casos, ya que es compatible con 64 bits e incluso con el VC6, aunque no sea la  más rápida.</p>
                <p>La idea es almacenar un puntero de nuestra clase Ventana en  un espacio que tiene Windows reservado en cada ventana/control para almacenar  datos extra. Para lograr esto le pasaremos un puntero de nuestra clase Ventana  a la función definitivamente de la siguiente forma :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearVentana", "Archivo : ObjetoVentana.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoVentana.cpp", "CrearVentana"); ?>
                <p>Como podemos observar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank" cid='IDCrearVentana' l='5,6'>CreateWindowEx</a> le pasamos en  el último parámetro el puntero this, de esta forma al iniciarse la ventana  desde el _GestorMensajes tendremos el puntero a nuestra clase Ventana para poder  enlazarlo definitivamente, y pasarle sus mensajes correctamente a la función  virtual GestorMensajes. Al usar la API <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank"  cid='IDCrearVentana' l='5,6'>CreateWindowEx</a> estaremos invocando entre  otros el mensaje <a href="http://msdn.microsoft.com/es-es/library/ms632619%28v=VS.85%29.aspx" target="_blank" cid='IDGestorMensajes' l='3'>WM_CREATE</a> para esta ventana, el cual será captado por la  función _GestorMensajes.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDGestorMensajes", "Archivo : ObjetoVentana.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoVentana.cpp", "GestorMensajes"); ?>
                <p>Esta sería la implementación para nuestro _GestorMensajes  estático, solo debemos hacer dos cosas, interceptar el mensaje <a href="http://msdn.microsoft.com/es-es/library/ms632619(v=VS.85).aspx" target="_blank" cid='IDGestorMensajes' l='3'>WM_CREATE</a> para  obtener el puntero a nuestra clase Ventana y asignarlo definitivamente de forma  que este _GestorMensajes mande los mensajes a su Ventana::GestorMensajes  correspondiente. Para ello utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms644898%28VS.85%29.aspx" target="_blank" cid='IDGestorMensajes' l='9'>SetWindowLongPtr</a>, que nos permite  asignar a un área de memoria específica para esta ventana, en el cual asignamos  nuestro puntero a la clase Ventana. </p>
                <p>Más abajo tenemos la sección default, que intentara pasar  todos los mensajes que no sean <a href="http://msdn.microsoft.com/es-es/library/ms632619%28v=VS.85%29.aspx" target="_blank" cid='IDGestorMensajes' l='3'>WM_CREATE</a> a su ventana padre utilizando el  puntero asignado anteriormente a la ventana. Para obtener dicho puntero se  utiliza la API <a href="http://msdn.microsoft.com/en-us/library/ms633585(v=VS.85).aspx" target="_blank" cid='IDGestorMensajes' l='16'>GetWindowLongPtr</a> además de una serie de castings, si resulta que  el resultado es NULL (cosa que no debería) se utilizara la API <a href="http://msdn.microsoft.com/en-us/library/ms633572(v=VS.85).aspx" target="_blank" cid='IDGestorMensajes' l='23'>DefWindowProc</a>  para procesar el mensaje.</p>
                <p>Algunos puede que penséis, porque tanto lio en el <a href="http://msdn.microsoft.com/es-es/library/ms632619%28v=VS.85%29.aspx" target="_blank" cid='IDGestorMensajes' l='3'>WM_CREATE</a>  si podemos hacer el <a href="http://msdn.microsoft.com/en-us/library/ms644898%28VS.85%29.aspx" target="_blank" cid='IDGestorMensajes' l='9'>SetWindowLongPtr</a> justo después de llamar a <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx</a>,  pues esto se ha hecho así debido a que al usar <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx</a> se mandan una  serie de mensajes, a los cuales no tendríamos acceso si utilizamos  <a href="http://msdn.microsoft.com/en-us/library/ms644898%28VS.85%29.aspx" target="_blank" cid='IDGestorMensajes' l='9'>SetWindowLongPtr</a> al terminar <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx</a>, y esto nos puede traer problemas  extra en el primer pintado de la ventana, y con alguna cosa más.</p>
                <p>Ahora veamos como construir una ventana a partir de estas clases :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMiVentana", "Archivo : Tutorial_CrearObjetoVentana.cpp", "../Codigo/Tutoriales_WinAPI/1.03 Tutorial crear ObjetoVentana/Tutorial_CrearObjetoVentana.cpp", "MiVentana"); ?>
                <p>Como podéis ver se ha creado una tercera clase 'MiVentana' y  se ha re-emplazado la función 'Evento_Cerrar' de tal forma que cuando se cierre  la ventana también terminara la aplicación, dicha función esta enlazada al mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632617%28VS.85%29.aspx" target="_blank">WM_CLOSE</a>. Ahora ya tenemos un objeto Ventana  con el cual podemos crear ventanas con pocas lineas y de forma mas cómoda. En  este ejemplo se crean 5 ventanas desde la clase MiVentana, y como en el  Evento_Cerrar se ha incluido la API <a href="http://msdn.microsoft.com/en-us/library/ms644945%28VS.85%29.aspx" target="_blank">PostQuitMessage</a>, cuando cerremos cualquiera  de las 5 ventanas terminara la aplicación y se cerraran todas las demás.</p>
                <p>Si nos fijamos en la plantilla de eventos podemos re-emplazar cualquiera de sus funciones virtuales para utilizar dichos eventos. Por ejemplo podriamos re-emplazar el Evento_Mouse_Movimiento, y cambiar el titulo de la ventana por las coordenadas que nos devuelve dicho evento, etc.... Esta forma de trabajar nos ahorrara muchos problemas en el futuro, ademas de que tendremos un codigo mucho mas ordenado.</p>

				<div class='nota'>Última modificación 07/10/2012 :<br /><br /> Había  un error al crear el objeto plantilla ObjetoVentana al que le pasábamos <b>0</b> en vez de pasarle <b>USAR_GESTOR_POR_DEFECTO</b>, el cual provocaba que en algunas ocasiones no se llegara a llamar el gestor de ventanas por defecto. <br /><br />Gracias a <b>Javi Luque</b> por informarme del error.</div>
                <p>La siguiente parte del tutorial nos enseñara los conceptos  más básicos sobre pintar gráficos en ventanas : <a href="/Blog/Tutorial_WINAPI_1_4">1.4 - Entorno gráfico de windows (GDI)</a>.</p>            
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
