<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.3 (Creación del ObjetoEditBox)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.3 (Creación del ObjetoEditBox)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.3 (Creación del ObjetoEditBox)");
        
        ?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.3.png" alt="Tutorial 3 Instalador y Ensamblador" />
                <p>En este tutorial veremos cómo crear controles estándar de  windows un poco en general, y en especial nos centraremos en el control  EDITBOX.</p>
                <p>Hasta ahora nos habíamos creado nuestros controles partiendo  del ObjetoControl, pero ahora queremos utilizar un control de windows que ya  tiene varios eventos programados, por lo que vamos a tener que enlazar a ellos.  La diferencia entre ObjetoControl y ObjetoControlEstandar residirá en que  ObjetoControl controla eventos que nosotros hemos programado completamente, y  ObjetoControlEstandar controla eventos programados por microsoft en los cuales  podemos añadir código al principio o al final según nos convenga.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Veamos la declaración de ObjetoControlEstandar : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoControlEstandar", "Archivo : ObjetoControlEstandar.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoControlEstandar.h", "ObjetoControlEstandar"); ?>
                <p>Podemos ver : </p>
                <ul>
                <li style="list-style:disc">La función publica Asignar, que usaremos solo para asignar  controles que vengan de un dialogo a esta clase. (para controles creados dentro  de una ventana se usa _ConectarControl)</li>
                <li style="list-style:disc">La función protegida _ConectarControl, que usaremos cuando  se cree el control en una ventana.</li>
                <li style="list-style:disc">Un gestor de mensajes estático por el que pasaran todos los  mensajes del control.</li>
                <li style="list-style:disc">Y un miembro WNDPROC que apunta al gestor de mensajes  original del control.</li>
                </ul>
                <p>Veamos… cuando creamos un control propio como por ejemplo el  ObjetoBoton, nos estamos creando su WindowProcedure/GestorMensajes y lo  adaptamos a nuestras necesidades. En cambio si utilizamos algún control  estándar de windows, este trae su WindowProcedure por defecto. </p>
                <p>A la hora de tratar los eventos no es lo mismo responder a  un evento que hemos programado nosotros, que a un evento de un control  estándar, ya que ademas de responder al evento debemos llamar también al  WindowProcedure original del control para que nos procese el evento y nos  actualice el control tal y como lo programo microsoft.</p>
                <p>Veamos el _GestorMensajes de ObjetoControlEstandar :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("ID_GestorMensajes", "Archivo : ObjetoControlEstandar.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoControlEstandar.cpp", "ObjetoControlEstandar::_GestorMensajes"); ?>
                <p>Exceptuando el mensaje WM_PAINT, cuando recibimos un mensaje  lo procesamos primero nosotros y luego miramos si ha devuelto  USAR_GESTOR_POR_DEFECTO. En caso de devolver USAR_GESTOR_POR_DEFECTO llamaremos  al GestorMensajesOriginal del control estándar para que se use el código de  microsoft.</p>
                <p>Pongamos por ejemplo que tenemos un EditBox de windows bajo  la clase ObjetoControlEstandar y recibimos el Evento_Teclado_TeclaPresionada.  En el caso de retornar 0 lo que estariamos haciendo es decirle a  ObjetoControlEstandar que no mande el mensaje al GestorMensajesOriginal del  EditBox, por lo que no se mostraría la nueva tecla presionada en el control. En  cambio si retornamos USAR_GESTOR_POR_DEFECTO, además de procesar nuestro código  se procesara el código que pintara la tecla presionada en el EditBox.</p>
                <p>Teniendo esto claro ya podemos empezar con el EditBox,  veamos su declaración :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoEditBox", "Archivo : ObjetoEditBox.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEditBox.h", "ObjetoEditBox"); ?>
                <p>Por el momento solo necesitamos una función para crear el  EDITBOX, una función para asignar su texto y otra función para devolver su  texto. Además en miembros protegidos declararemos una fuente que será la que  usara para imprimir el texto dentro del EditBox.</p>
                <p>Veamos la función CrearEditBox :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearEditBox", "Archivo : ObjetoEditBox.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEditBox.cpp", "ObjetoEditBox::CrearEditBox"); ?>
                <p>Lo primero que se hace es llamar a la función  ObjetoIniciarCommonControls::Iniciar. Esta función llama a la API  <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> para iniciar los controles estándar de windows para  nuestra aplicación. Antiguamente en VC6 esto era necesario si queríamos  trabajar con controles estándar, pero ahora mismo a decir verdad ya no se si es  necesario, porque en mi maquina me funcionan igual los ejemplos tanto si llamo  a <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> como si no… y en la MSDN no dice nada.. Por lo que prefiero mantener este codigo por si las moscas.</p>
                <p>Lo segundo que se hace es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680(VS.85).aspx" target="_blank">CreateWindowEx</a> con  el segundo parámetro &ldquo;EDIT&rdquo; (que es el nombre de la clase). Esto hace que el control creado se convierta en un  EditBox. Para ver más nombres de control mira este enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/ms632679(VS.85).aspx" target="_blank">CreateWindow</a> (Casi al final hay una tabla que muestra los nombres de classe mas comunes)</p>
                <p>Lo siguiente es llamar a la función _ConectarControl, que  re-emplazara el WindowProcedure del EditBox por el nuestro.</p>
                <p>Y por último creamos una fuente con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a> para el  editbox, y le mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a> al editbox con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>,  cosa que le dirá al editbox que debe usar esa fuente.</p>
                <p>Ya solo nos queda ver las funciones ObtenerTexto y  AsignarTexto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObtenerTexto", "Archivo : ObjetoEditBox.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEditBox.cpp", "ObjetoEditBox::ObtenerTexto"); ?>
                <p>Para obtener el texto del editbox utilizamos la API  <a href="http://msdn.microsoft.com/en-us/library/ms645489(VS.85).aspx" target="_blank">GetDlgItemText</a>, y para asignarlo utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms645521(VS.85).aspx" target="_blank">SetDlgItemText</a>. Además utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms633585(VS.85).aspx" target="_blank">GetWindowLongPtr</a> para  obtener la ID del editbox que necesitamos a la hora de asignar / obtener su  texto.</p>
                <p>Con esto ya tenemos suficiente para cumplir con los  requisitos del instalador y el ensamblador, pero debéis saber que para obtener  eventos del editbox debemos mirar si recibimos el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a> en la  ventana padre, y a partir de allí mirar que código de notificación nos da para determinar que acción nos está reportando. De todas formas puede que necesitemos obtener un evento que no retorne el editbox por defecto, como por ejemplo cuando el usuario presiona la tecla intro. En este caso como tenemos el objeto encapsulado de tal forma que re-emplazamos su window procedure original, bastaría con crear el Evento_Teclado_TeclaPresionada dentro del EditBox, desde dentro de la función del evento mandaríamos un mensaje al objeto EventosPadre. Luego habría que añadir una función virtual nueva en el objeto EventosPadre &quot;EditBox_Evento_Teclado_Intro&quot; que enlazaríamos en el GestorMensajes con el mensaje que mandamos desde ObjetoEditBox::Evento_Teclado_TeclaPresionada.</p>
                <p>Si aun no lo veis muy claro, un buen ejemplo seria el Evento_ObjetoBoron_Click (parte del GestorMensajes):</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDGestorMensajes_WM_BOTON_CLICK", "Archivo : PlantillaEventos.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/PlantillaEventos.h", "PlantillaEventos::GestorMensajes_WM_BOTON_CLICK"); ?>
                <p>La declaración de PlantillaEventos::Evento_ObjetoBoron_Click :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_ObjetoBoton_Click", "Archivo : PlantillaEventos.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/PlantillaEventos.h", "Evento_ObjetoBoton_Click"); ?>
                <p>Y como mandamos el mensaje desde el ObjetoBoton utilizando las API's <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a> y <a href="http://msdn.microsoft.com/en-us/library/ms633510(VS.85).aspx" target="_blank">GetParent</a> :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Mouse_BotonSoltado", "Archivo : ObjetoBoton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp", "Evento_Mouse_BotonSoltado"); ?>
                <p>Para el caso del evento TeclaPresionada_Intro, con que incluyamos la ID del EditBox en el WPARAM, no hace falta mucho mas, por lo que podríamos dejar el LPARAM vacio. La función virtual EditBox_Evento_Teclado_Intro solo recibiria un UINT como parametro que seria la ID que mandamos antes en el WPARAM.</p>
                <p>Para mas información referente al control EditBox consulta el siguiente enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/bb775458(v=VS.85).aspx" target="_blank">Edit Control</a>.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_4">3.4 Creación del ObjetoButton</a>.</p>
                
                <a class="Boton Centrado" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     