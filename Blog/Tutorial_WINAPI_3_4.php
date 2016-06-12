<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.4 (Creación del ObjetoButton)");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.4 (Creación del ObjetoButton)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.4 (Creación del ObjetoButton)");

?>	


				<!-- INTRODUCCION -->
                <p>En este tutorial veremos el funcionamiento del control BUTTON de windows. Para ello lo encapsularemos en una clase que tendrá de nombre ObjetoButton, y que heredara de ObjetoControlEstandar (La clase ObjetoControlEstandar se describe en el tutorial <a href="Tutorial_WINAPI_3_3.php" target="_self">3.3 Creación del ObjetoEditBox</a>).</p>
                <p>Tambien veremos como responder cuando el usuario presiona encima del boton mediante el mensaje WM_COMMAND, y como decirle que fuente debe utilizar (si no deseamos la fuente estandar de windows) mediante el mensaje WM_SETFONT.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Veamos su declaración :</p><div style="clear:both"></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoButton", "Archivo : ObjetoButton.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoButton.h", "ObjetoButton"); ?>
                <p>Como podemos ver, esta clase tiene un miembro para crear el botón, un mimebro para asignar su texto, un miembro para obtener su texto, y un miembro privado que tendrá la funete del botón cargada en memoria.</p>
                <p>Veamos la función CrearButton :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearButton", "Archivo : ObjetoButton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoButton.cpp", "ObjetoButton::CrearButton"); ?>
                <p>Lo primero que se hace es llamar a la función  ObjetoIniciarCommonControls::Iniciar. Esta función llama a la API  <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> para iniciar los controles estándar de windows para  nuestra aplicación. Antiguamente en VC6 esto era necesario si queríamos  trabajar con controles estándar, pero ahora mismo a decir verdad ya no se si es  necesario, porque en mi maquina me funcionan igual los ejemplos tanto si llamo  a <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> como si no… y en la MSDN no dice nada.. Por lo que prefiero mantener este codigo por si las moscas.</p>
                <p>Lo segundo que se hace es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680(VS.85).aspx" target="_blank">CreateWindowEx</a> con  el segundo parámetro &ldquo;BUTTON&rdquo; (que es el nombre de la clase). Esto hace que el control creado se convierta en un  BUTTON. Para ver más nombres de control mira este enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/ms632679(VS.85).aspx" target="_blank">CreateWindow</a> (Casi al final hay una tabla que muestra los nombres de classe mas comunes)</p>
                <p>Lo siguiente es llamar a la función _ConectarControl, que  re-emplazara el WindowProcedure del Button por el nuestro.</p>
                <p>Y por último creamos una fuente con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a> para el  button, y le mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a> al button con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>,  cosa que le dirá al button que debe usar esa fuente.</p>
                <p>Ya solo nos queda ver las funciones ObtenerTexto y  AsignarTexto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObtenerTexto", "Archivo : ObjetoButton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoButton.cpp", "ObjetoButton::ObtenerTexto"); ?>
                <p>Para obtener el texto del button utilizamos la API  <a href="http://msdn.microsoft.com/en-us/library/ms645489(VS.85).aspx" target="_blank">GetDlgItemText</a>, y para asignarlo utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms645521(VS.85).aspx" target="_blank">SetDlgItemText</a>. Además utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms633585(VS.85).aspx" target="_blank">GetWindowLongPtr</a> para  obtener la ID del button que necesitamos a la hora de asignar / obtener su  texto.</p>
                <p>Ahora solo nos falta saber como responder cuando el usuario presione el boton. Para ello normalmente se tiene que mirar el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>, o en este caso como lo tenemos encapsulado lo recibiremos por Evento_Comando de su ventana padre. Observad el siguiente ejemplo :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Comando", "Archivo : 3.4 Tutorial crear ObjetoButton.cpp", "../Codigo/Tutoriales_WinAPI/3.04 Tutorial crear ObjetoButton/3.4 Tutorial crear ObjetoButton.cpp", "MiVentana::Evento_Comando"); ?>
                <p>Como podeis ver, comparamos la ID con ID_BUTTON_CERRAR, y en caso de que la comparación sea positiva llamamos al Evento_Cerrar, que en esta ventana terminara la aplicación de ejemplo.</p>
                <p>Para mas información referente al control Button consulta el siguiente enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/bb775943(v=VS.85).aspx" target="_blank">Button Control</a>.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_5"> 3.5 Creación del ObjetoComboBox</a>.</p>
    <div class='Centrado'>
                <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
    </div>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     