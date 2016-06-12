<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.2 (Creación de una ventana)");*/
        
        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.2 (Creación de una ventana)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.2 (Creación de una ventana)");
        
?>	

                <!-- INTRODUCCION -->
                <p>En este tutorial empezaremos a entrar en materia y crearemos nuestra primera ventana en C, de forma que podais ver basicamente que funciones intervienen en la creacion de una ventana</p>
                <p>Para empezar una ventana no es más que un conjunto de datos que Windows utiliza internamente para definir una porción de la pantalla  para que el usuario pueda interactuar con ella. Cuando un usuario realiza  alguna acción encima de una ventana, dicha acción se envía en forma de mensaje  a la función WindowProcedure de la ventana en cuestión. En esencia el  WindowProcedure determina el comportamiento de una ventana cuando esta recibe  algún evento / acción.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Hay 2 formas de crear ventanas, via código o usando el editor de recurso. En este tutorial solo tocaremos como crear ventanas via codigo ya que me parece mas dinamico y facil de entender, ademas utilizar el editor de recursos para hacer aplicaciones tipo base de datos con muchos controles puede ser util, pero para realizar el tipo de aplicaciones gráficas que me gusta hacer resulta mucho más confuso. </p>
                <p>Para crear una ventana hay que seguir 3 pasos básicos : <br />
                  <b>1)</b> En primer  lugar debéis crear una función del tipo WindowProcedure, que se usara como  esqueleto para recibir mensajes de nuestra ventana.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDWndProc", "Archivo : Tutorial_CrearVentana.cpp", "../Codigo/Tutoriales_WinAPI/1.02 Tutorial crear Ventana/Tutorial_CrearVentana.cpp", "WndProc"); ?>
                
                <p>En este esqueleto básico se está mirando cuando la ventana  recibe el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632617%28VS.85%29.aspx" target="_blank">WM_CLOSE</a>. El mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632617%28VS.85%29.aspx" target="_blank">WM_CLOSE</a> nos dice que el usuario ha  cerrado la ventana, en este caso al recibir dicho mensaje usamos la API  <a href="http://msdn.microsoft.com/en-us/library/ms644945%28VS.85%29.aspx" target="_blank">PostQuitMessage</a> para indicar a la aplicación que debe terminar. Una vez sale  del switch, se debe retornar la API <a href="http://msdn.microsoft.com/en-us/library/ms633572(v=VS.85).aspx" target="_blank">DefWindowProc</a>, la cual procesara los  mensajes por defecto.</p>
                <p>Hay que destacar que el WindowProcedure es por donde pasaran  todos los mensajes de la ventana, estos mensajes pueden referirse a eventos de  cualquier tipo como cuando se mueve el mouse, cuando se hace click, cuando se  presiona una tecla del teclado, etc… Además también podemos usar esta función  para pasar datos de una ventana a otra.</p>
                <p><strong>2)</strong> En segundo  lugar debéis registrar la clase ventana, para ello habrá que especificar un  nombre de clase, y el WindowProcedure que se creó anteriormente.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDRegWnd", "Archivo : Tutorial_CrearVentana.cpp", "../Codigo/Tutoriales_WinAPI/1.02 Tutorial crear Ventana/Tutorial_CrearVentana.cpp", "RegWnd"); ?>
                <p>En este ejemplo utilizamos la función RegistrarClaseVentana  a la que le pasamos el nombre para nuestra clase ventana, y el WindowProcedure  que usara esta. Cuando registramos una clase ventana lo que estamos haciendo es  registrar un modelo de ventana para que al crearla, windows sepa donde tiene  que mandar sus mensajes y que atributos tiene. Para ello dentro de nuestra función RegistrarClaseVentana utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms633587%28VS.85%29.aspx" target="_blank">RegisterClassEx</a> pasandole una estructura <a href="http://msdn.microsoft.com/en-us/library/ms633577(v=VS.85).aspx" target="_blank">WNDCLASSEX</a> con los datos de la ventana. </p>
                <p>  Si por ejemplo registramos la clase "ClaseMiVentana", y  dicha clase al recibir el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632617%28VS.85%29.aspx" target="_blank">WM_CLOSE</a> termina la aplicación, podemos  mostrar 50 ventanas, que solo con cerrar una de ellas terminara la aplicación y  por consecuencia todas las demás ventanas de la misma instancia se cerraran.</p>
                <p><strong>3)</strong> Por último ya  podemos utilizar la API <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx</a> para crear nuestra ventana.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCreateWindow", "Archivo : Tutorial_CrearVentana.cpp", "../Codigo/Tutoriales_WinAPI/1.02 Tutorial crear Ventana/Tutorial_CrearVentana.cpp", "CreateWindow"); ?>
                <p>Hay que remarcar que la función <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx</a> nos devuelve  el identificador único de nuestra ventana, que necesitaremos para realizar  cualquier tipo de operación sobre ella. Este identificador es un HWND, y no  tiene nada que ver con la ID que le asignemos a la ventana, ya que esas ids no  tienen porqué ser únicas, en cambio el HWND siempre lo es (Cada HWND tiene un valor distinto y nunca coincidira con otro HWND, y ademas no tiene porque tener el mismo valor que la ultima vez)   </p>
                <p> Ahora que ya sabéis lo más básico sobre las ventanas podéis  pasar a ver como crear un objeto ventana que podáis re-utilizar en vuestras  aplicaciones futuras : <a href="/Blog/Tutorial_WINAPI_1_3">1.3 - Creación de nuestro objeto ventana</a>.</p>            
    


                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
