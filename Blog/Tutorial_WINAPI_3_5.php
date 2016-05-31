<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.5 (Creación del ObjetoComboBox)");*/
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.5 (Creación del ObjetoComboBox)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.5 (Creación del ObjetoComboBox)");


?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.5.png" alt="Tutorial 3 Instalador y Ensamblador" />
                <p>En windows un combobox es un control que consiste en un EDITBOX que tiene un BUTTON al lado, y que al presionar ese button despliega un LISTBOX con varias opciones.</p>
                <p>En este tutorial veremos el funcionamiento básico del COMBOBOX, y lo encapsularemos dentro de la clase ObjetoComboBox. Esta clase heredara de ObjetoControlEstandar (La clase ObjetoControlEstandar se describe en el tutorial <a href="Tutorial_WINAPI_3_3.php" target="_self">3.3 Creación del ObjetoEditBox</a>)</p>
                <p>Tenemos que tener bien claro para que vamos a querer usar este control, ya que podemos usarlo como una forma de seleccionar opciones fijas, o tambien podria servirnos para otros fines que no requieran opciones fijas, como por ejemplo insertar un texto a buscar que nos muestre otras posibilidades, etc...</p>
                <!-- FIN_INTRODUCCION -->
                <p>Veamos su declaración :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoComboBox", "Archivo : ObjetoComboBox.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoComboBox.h", "ObjetoComboBox"); ?>
                <p>Lo primero que vemos es una función para crear la ComboBox, después tenemos varias funciones para manipular los strings de la lista interna del ComboBox : InsertarString, BorrarString, BorrarTodo, y ObtenerTextoLista. También tenemos un par de funciones que nos retornan el texto del editbox interno : AsignarTexto y ObtenerTexto. Y por ultimo tenemos dos funciones para asignar y obtener la selección dentro de la lista interna de la ComboBox.</p>
                <p>Veamos la función CrearComboBox :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearComboBox", "Archivo : ObjetoComboBox.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoComboBox.cpp", "ObjetoComboBox::CrearComboBox"); ?>
                <p>Lo primero que se hace es llamar a la función  ObjetoIniciarCommonControls::Iniciar. Esta función llama a la API  <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> para iniciar los controles estándar de windows para  nuestra aplicación. Antiguamente en VC6 esto era necesario si queríamos  trabajar con controles estándar, pero ahora mismo a decir verdad ya no se si es  necesario, porque en mi maquina me funcionan igual los ejemplos tanto si llamo  a <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> como si no… y en la MSDN no dice nada.. Por lo que prefiero mantener este código por si las moscas.</p>
                <p>Lo segundo que se hace es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680(VS.85).aspx" target="_blank">CreateWindowEx</a> con  el segundo parámetro &ldquo;COMBOBOX&rdquo; (que es el nombre de la clase). Esto hace que el control creado se convierta en un  COMBOBOX. Para ver más nombres de control mira este enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/ms632679(VS.85).aspx" target="_blank">CreateWindow</a> (Casi al final hay una tabla que muestra los nombres de classe mas comunes)</p>
                <p>Lo siguiente es asignar el texto especificado al EditBox interno, y llamar a la función _ConectarControl, que  re-emplazara el WindowProcedure del ComboBox por el nuestro.</p>
                <p>Y por último creamos una fuente con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a> para el  button, y le mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a> al editbox con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>,  cosa que le dirá al ComboBox que debe usar esa fuente.</p>
                <p>Ahora veamos las funciones para interactuar con el ListBox interno de la ComboBox :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDFuncionesListBox", "Archivo : ObjetoComboBox.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoComboBox.cpp", "FuncionesListBox"); ?>
                <p>Podemos ver 5 funciones diseñadas para trabajar con el contenido del ListBox interno de la ComboBox :</p>
                <ul>
                <li style="list-style:disc">La función <b>InsertarString</b> manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/aa921266.aspx" target="_blank">CB_INSERTSTRING</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> para insertar un texto dentro de la lista del ComboBox.</li>
                <li style="list-style:disc">La función <b>BorrarString </b> manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775830(VS.85).aspx" target="_blank">CB_DELETESTRING</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> para eliminar el texto especificado por nPos dentro de la lista del ComboBox.</li>
                <li style="list-style:disc">La función <b>BorrarTodo</b> manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775878(v=VS.85).aspx" target="_blank">CB_RESETCONTENT</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> para eliminar el contenido de la lista del ComboBox.</li>
                <li style="list-style:disc">La función <b>TotalStrings</b> manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775841(VS.85).aspx" target="_blank">CB_GETCOUNT</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> para obtener el número total de items dentro de la lista interna del ComboBox.</li>
                <li style="list-style:disc">La función <b>ObtenerTextoLista</b> lo primero que hace es mandar el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775864(v=VS.85).aspx" target="_blank">CB_GETTEXTLEN</a> apuntando al item especificado en nPos para obtener el tamaño en caracteres de ese string. Una vez sabemos el tamaño del string mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775862(v=VS.85).aspx" target="_blank">CB_GETLBTEXT</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, lo que nos retorna el texto del item especificado en nPos.</li>
                </ul>
                <p>Ahora veamos las funciones de Selección :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDSeleccion", "Archivo : ObjetoComboBox.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoComboBox.cpp", "ObjetoComboBox::Seleccion"); ?>
                <p>La primera función se usa para asignar la selección, y en ella mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775899(v=VS.85).aspx" target="_blank">CB_SETCURSEL</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>. La segunda función se usa para obtener la selección, y en ella mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb775845(v=VS.85).aspx" target="_blank">CB_GETCURSEL</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> para hacer el trabajo.</p>
                <p>Ya solo nos queda ver las funciones ObtenerTexto y  AsignarTexto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObtenerTexto", "Archivo : ObjetoComboBox.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoComboBox.cpp", "ObjetoComboBox::ObtenerTexto"); ?>
                <p>Para obtener el texto del ComboBox utilizamos la API  <a href="http://msdn.microsoft.com/en-us/library/ms645489(VS.85).aspx" target="_blank">GetDlgItemText</a>, y para asignarlo utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms645521(VS.85).aspx" target="_blank">SetDlgItemText</a>. Además utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms633585(VS.85).aspx" target="_blank">GetWindowLongPtr</a> para  obtener la ID del button que necesitamos a la hora de asignar / obtener su  texto.</p>
                <p>Ahora solo nos falta saber como responder a los eventos de la ComboBox. Para ello normalmente se tiene que mirar el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>, o en este caso como lo tenemos encapsulado lo recibiremos por Evento_Comando de su ventana padre. Observad el siguiente ejemplo :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("Evento_Comando", "Archivo : 3.5 Tutorial crear ObjetoComboBox.cpp", "./Tutoriales_WinAPI/3.05 Tutorial crear ObjetoComboBox/3.5 Tutorial crear ObjetoComboBox.cpp", "MiVentana::Evento_Comando"); ?>
                <p>Como podeis ver, comparamos la ID con ID_COMBO y la Notificación con <a href="http://msdn.microsoft.com/en-us/library/bb775821(v=VS.85).aspx" target="_blank">CBN_SELCHANGE</a>, para determinar si ha cambiado la selección dentro del listbox interno de la ComboBox. Si la comparación es positiva mostramos un mensaje con el texto de la selección.</p>
                <p>Para mas información referente al control ComboBox consulta el siguiente enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/bb775792(v=VS.85).aspx" target="_blank">ComboBox Control</a>.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_6"> 3.6 Creación del ObjetoProgressBar</a>.</p>
                <div class='Centrado'>
                <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
                </div>


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     