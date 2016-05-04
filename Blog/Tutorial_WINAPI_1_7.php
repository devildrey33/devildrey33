<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.7 (Terminando la calculadora)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.7 (Terminando la calculadora)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.7 (Terminando la calculadora)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Calculadora.png" alt="Tutorial 1.7" style='cursor:pointer;' />
                <p>Ya hemos llegado al punto en que ensamblaremos todo lo hecho anteriormente para formar nuestra calculadora. Si os digo la verdad nunca pensé que me curraría tanto el código para una calculadora, pero espero que eso os haya servido para familiarizaros con el API de Windows. Además no solo se ha hecho una calculadora, si no que también tenéis una base para hacer ventanas y controles para futuras aplicaciones.</p>
                <p>Se podía haber hecho la calculadora utilizando controles de Windows y sin hacer objetos ni nada, a saco. Aunque probablemente no hubiera dado para enseñaros gran cosa, en cambio haciendo los botones, el marcador, nuestro objeto ventana y tal, espero que os hayan quedado claras cuatro cosas sobre las ventanas de Windows y el GDI.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En esta parte del tutorial no me queda gran cosa por mostrar, pero veremos la calculadora montada al fin, y también trataremos un poco el tema de enviar eventos.</p>
                <p>Empezaremos por la declaración de la clase VentanaCalculadora, que será nuestro enlace entre los botones, el teclado y el marcador.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDVentanaCalculadora", "Archivo : Tutorial TerminandoCalculadora.cpp", "../Codigo/Tutoriales_WinAPI/1.07 Tutorial terminando Calculadora/Tutorial TerminandoCalculadora.cpp", "VentanaCalculadora"); ?>
                <p> Se han re-emplazado 3 eventos, el cerrar para cerrar la aplicación con <a href="http://msdn.microsoft.com/en-us/library/ms644945(VS.85).aspx" target="_blank">PostQuitMessage</a>, el ObjetoBoton_Click para saber cuando se pulsa un botón de forma que se puedan mandar los datos necesarios al marcador, y el evento Teclado_Caracter que enlazara las teclas a los botones correspondientes.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Teclado_Caracter", "Archivo : Tutorial TerminandoCalculadora.cpp", "../Codigo/Tutoriales_WinAPI/1.07 Tutorial terminando Calculadora/Tutorial TerminandoCalculadora.cpp", "Evento_Teclado_Caracter"); ?>
                <p>Podiamos haber enlazado las teclas directamente al marcador, pero entonces no se verían los botones de la calculadora presionados al pulsar una tecla. Hacer que los botones hagan el efecto de presión sobre ellos se puede hacer de varias formas, desde implementar unas funciones dentro del mismo botón, utilizar <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> o <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a> para mandar mensajes directamente a su WindowProcedure, o llamar a las funciones evento que tiene el botón. En este caso lo vamos a hacer utilizando <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> para que así veáis un poco mas el funcionamiento de esta API.</p>
                <p>La API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> envía un mensaje al HWND especificado y espera a que sea procesado. También existe la API <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a> que envía un mensaje al HWND especificado sin esperar a que sea procesado, ese mensaje se queda en cola y se procesara en cuanto sea posible. Por decirlo de otra forma <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> forzara el mensaje a que sea procesado, y al terminar nos dejara seguir con la ejecución de nuestro código, en cambio <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a> proseguirá la ejecución de nuestro código, y luego cuando tenga tiempo libre procesara el mensaje.</p>
                <p>En esta función en concreto si utilizáramos <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a>, la llamada a <a href="http://msdn.microsoft.com/en-us/library/ms686298(VS.85).aspx" target="_blank">Sleep</a> seria inútil y probablemente ni se apreciaría el botón como se presiona al pulsar una tecla. Y para terminar la API <a href="http://msdn.microsoft.com/en-us/library/ms686298(VS.85).aspx" target="_blank">Sleep</a> lo que hace es dejar a la aplicación 'durmiendo' durante los milisegundos especificados, en este caso 50.</p>
                <p>Ahora veamos la funcion Evento_ObjetoBoton_Click :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_ObjetoBoton_Click", "Archivo : Tutorial TerminandoCalculadora.cpp", "../Codigo/Tutoriales_WinAPI/1.07 Tutorial terminando Calculadora/Tutorial TerminandoCalculadora.cpp", "Evento_ObjetoBoton_Click"); ?>
                <p>Esta función se creó ante la necesidad de obtener cuando un ObjetoBoton es presionado, dicho objeto lo creamos con anterioridad en el tutorial, y cuando el ObjetoBoton recibía correctamente el Evento_Mouse_BotonSoltado mandaba un mensaje WM_BOTON_CLICK a su ventana padre con algunos parámetros. Esta forma de enlazar los mensajes es una de las mas acertadas a mi modo de ver, ya que es sencilla, fácil de implementar, y no requiere mucha parrafada de código.</p>
                <p>En definitiva lo que hace esta función es mirar que botón se ha presionado, y le manda esa información al ObjetoMarcador. </p>
                <p>Aquí termina el tutorial para hacer la calculadora, ahora viene el tutorial para hacer un juego como el nibbles / snake. Es el típico juego de la serpiente que crece y que no puede chocar con su cola : <a href="/Blog/Tutorial_WINAPI_2_0">2.0 - Introducción para empezar con el Snake</a>. </p>
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
