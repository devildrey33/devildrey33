<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.5 (Creación de nuestro ObjetoBoton)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.5 (Creación de nuestro ObjetoBoton)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.5 (Creación de nuestro ObjetoBoton)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.1.5.png" alt="Tutorial 1.5" style='cursor:pointer;' />
                <p>En este tutorial vamos a aplicar varios conceptos anteriores que son la creacion de ventanas y utilizar el GDI de windows para dar paso a la creacion de nuestro primer control desde cero.</p>
                <p>Aunque windows ya nos ofrece toda una gama de controles listos para utilizar, siempre es interesante ver y comprender como podemos crear nosotros mismos nuestro propio control. Ademas hay muchos casos en los que podemos necesitar algo que no sea 'estandar' por lo que al final nos sera mas conveniente crear este tipo de cosas partiendo de cero.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Diría que el 90% de la gente que ha programado controles,  programaron un botón la primera vez, y yo no fui una excepción. Por suerte  vosotros vais a tener una orientación bastante mas enfocada de la que obtuve yo en su tiempo, lo que os permitirá hacer un botón chulo utilizando funciones de pintado del GDI de Windows junto con la clase ObjetoHWND que creamos anteriormente.</p>
                <p>A la hora de hacer cualquier control hay que tener muy claras sus funciones y que tipo de comportamiento seguirá. En este caso  sabemos que queremos un botón con el borde redondeado, el cual tenga todos los  colores configurables, y podamos cambiar su fuente. Además este botón tendrá un efecto de resaltado cuando el  mouse pase por encima, y un efecto de presión cuando pulsemos con el mouse  encima de este. </p>
                <p>Lo primero de todo va a ser hacernos nuestra clase base para  controles, de la misma forma que tenemos la clase ObjetoVentana ahora vamos a  hacer una clase ObjetoControl enfocada a controles que tienen una ventana  padre.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoControl", "Archivo : ObjetoControl.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoControl.h", "ObjetoControl"); ?>
                <p>Vamos a tener que modificar el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms645616(VS.85).aspx" target="_blank">WM_MOUSEMOVE</a> para llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms646265(VS.85).aspx" target="_blank">TrackMouseEvent</a>. Esta API lo que hace es informarnos cuando el mouse sale del control mediante el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms645615(VS.85).aspx" target="_blank">WM_MOUSELEAVE</a>.  En el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms645615(VS.85).aspx" target="_blank">WM_MOUSELEAVE</a> hay que poner el miembro _MouseDentro a false, para que cuando vuelva a entrar el mouse en el control se use la API TrackMouseEvent. (Todo esto se hace en la plantilla PlantillaEventos.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEventos_Mouse", "Archivo : PlantillaEventos.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/PlantillaEventos.h", "Eventos_Mouse"); ?>
                <p>Como cada control tendrá sus colores, y la verdad es un engorro ir creando una función para asignar y otra para obtener el color, crearemos una macro que nos ahorrara tener que escribir dichas funciones. La idea es que la macro reciba un parametro, que será el nombre de las funciones asignar y obtener, ademas también creara una variable del tipo COLORREF que tendrá el mismo nombre con el carácter '_' delante. </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAGREGAR_COLOR", "Archivo : <a href='./Tutoriales_WinAPI/Objetos Tutorial/ObjetoControl.h'>ObjetoControl.h</a>", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoControl.h", "AGREGAR_COLOR"); ?>
                <p>Fijaros que se utiliza una función repintar dentro de la función que asigna el color, por ello solo podremos utilizar esta macro dentro de una clase que tenga dicha funcion Repintar implementada.</p>
                <p>Ahora vamos a hacer una macro del mismo estilo que los colores pero para las fuentes, y en este caso solo tendrá una función. Dicha función será la encargada de crear la fuente en memoria, pero OJO esto no nos libra de borrar el contenido de esa variable, así que vamos a tener que acordarnos de ella en el destructor de la clase ObjetoBoton.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAGREGAR_FUENTE", "Archivo : ObjetoControl.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoControl.h", "AGREGAR_FUENTE"); ?>
                <p>Fijaros que dentro de la macro se usa la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont.</a> esta API es la encargada de crear fuentes, y toda fuente que se cree con esta api, debe ser eliminada con la API <a href="http://msdn.microsoft.com/en-us/library/dd183539(v=VS.85).aspx" target="_blank">DeleteObject</a> cuando ya no sea necesaria. </p>
                <p>Con esto ya tenemos una base para hacer controles que seran capaces de saber si el mouse esta dentro de ellos, ahora vamos a por el ObjetoBoton, empezaremos por definir  todos sus estados :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoBoton_Estados", "Archivo : ObjetoBoton.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.h", "ObjetoBoton_Estados"); ?>
                <p>Siempre que el control no esté desactivado, y el mouse no  esté encima, el botón tendrá el estado normal. Si el mouse esta encima, y no  esta desactivado, el botón tendrá el estado resaltado. Y si se ha presionado el  control, y no esta desactivado, el botón tendrá el estado presionado. Si el control esta desactivado el botón no  podrá tener otro estado que el desactivado.<u></u></p>
                <p>Con esto queda bastante claro el comportamiento que deberá  seguir el botón, asi que ya es hora de empezar con la declaración del ObjetoBoton :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoBoton", "Archivo : ObjetoBoton.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.h", "ObjetoBoton"); ?>
                <p>En la declaración se puede observar por encima que se van a re-emplazar los eventos del mouse y algunos del teclado, además también se ha añadido unas funciones para asignar y obtener el texto, una función para crear el botón, y un par de funciones para el pintado. </p>
                <p>Una vez tenemos declarada la clase nos tocara empezar a  programar sus funciones, empezaremos por la función CrearBoton :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearBoton", "Archivo : ObjetoBoton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp", "CrearBoton"); ?>
                <p>Lo primero que se hace es asignar los todos los colores y crear todas las fuentes, para crear las fuentes utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>. Luego creamos la ventana que representa el botón, y por último como necesitamos que el botón tenga las puntas redondeadas  utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateRoundRectRgn</a> que crea una región recta redondeada  con el área especificada, finalmente utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd145102(VS.85).aspx" target="_blank">SetWindowRgn</a> para  asignar dicha región a nuestro control. Al final de todo hacemos visible el control, de esta forma evitamos posibles repintados antes de tener perfilado el control. </p>
                <p>Ahora veamos el Evento_Mouse_Movimiento :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Mouse_Movimiento", "Archivo : <a href='./Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp'>ObjetoBoton.cpp</a>", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp", "Evento_Mouse_Movimiento"); ?>
                <p>En primer lugar se utiliza la API <a href="http://msdn.microsoft.com/en-us/library/ms633503(VS.85).aspx" target="_blank">GetClientRect</a> para obtener el ancho y el alto de nuestro botón, luego utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd162882(VS.85).aspx" target="_blank">PtInRect</a> para saber si las coordenadas del mouse están dentro del control. Sabiendo si el mouse esta dentro del control y si el control esta presionado o no, elegimos el estado correcto para poder pintar el botón. Y por ultimo retornamos con la función ObjetoControl::MouseMove, ya que esta tiene implementada la rutina para que nos funcione el Evento_Mouse_Saliendo.</p>
                <p>Hay que destacar que en principio no deberíamos controlar si el mouse esta fuera del control en el Evento_Mouse_Movimiento, pero en los Eventos_Mouse_BotonPresionado y Eventos_Mouse_BotonSoltado se usan las API's <a href="http://msdn.microsoft.com/en-us/library/ms646262(VS.85).aspx" target="_blank">SetCapture</a> y <a href="http://msdn.microsoft.com/en-us/library/ms646261(VS.85).aspx" target="_blank">ReleaseCapture</a>, hay un momento en el que el Evento_Mouse_Movimiento salta cuando el mouse esta fuera del control. Ese momento es desde después de presionar el botón del mouse, hasta que soltamos el botón.</p>
                <p>Ahora veamos la función Eventos_Mouse_BotonPresionado : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Mouse_BotonPresionado", "Archivo : ObjetoBoton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp", "Evento_Mouse_BotonPresionado"); ?>
                <p>Como en el Evento_Mouse_Movimiento,  miramos si el mouse esta realmente dentro de nuestro botón, si es asi llamamos a la API <a href="http://msdn.microsoft.com/en-us/library/ms646262(VS.85).aspx" target="_blank">SetCapture</a> para tener capturado el mouse de forma que recibamos sus eventos incluso fuera del control. Esto se hace así porque tu puedes presionar encima del  botón 1 y acabar soltando el mouse en el botón 2, si no tubieramos esto controlado el boton 2 se ejecutaría, y no me parece muy correcto, más bien parece que el usuario se ha arrepentido de presionar el boton y lo ha intentado evitar. Hay que remarcar que mientras <a href="http://msdn.microsoft.com/en-us/library/ms646262(VS.85).aspx" target="_blank">SetCapture</a> este activo, ninguna otra ventana recibirá eventos del mouse, así que hay que tener mucho cuidado.</p>
                <p>Y para terminar con las tareas del mouse veamos la función  Eventos_Mouse_BotonSoltado :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Mouse_BotonSoltado", "Archivo : ObjetoBoton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp", "Evento_Mouse_BotonSoltado"); ?>
                <p>Lo primero que hacemos es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms646261(VS.85).aspx" target="_blank">ReleaseCapture</a> sin miedo para liberar  cualquier captura pendiente. Luego miramos si el mouse esta dentro del control para aplicar su estado correspondiente y para saber si hay que mandar un mensaje a su ventana padre informando de que el usuario ha hecho un click en el botón. Para averiguar el HWND de la ventana padre que contiene nuestro botón se utilizara la API <a href="http://msdn.microsoft.com/en-us/library/ms633510(VS.85).aspx" target="_blank">GetParent</a>, sabiendo el HWND podemos mandar el mensaje WM_BOTON_CLICK que se ha definido en esta misma clase. Esto nos lleva a tener que crear un nuevo evento en la clase ObjetoHWND para enlazar ese evento y tenerlo más a mano. </p>
                <p>Ya hemos terminado con la parte de controlar los eventos de nuestro control, ahora nos queda hacer las funciones de pintado así que nos liaremos con el GDI de nuevo. Para empezar vamos a tratar los con buffers graficos, que en esencia son una porcion de memoria que podemos usar para pintar nuestros remiendos sin que se vea por pantalla. Para pintar cosas complejas lo mejor es siempre tener un buffer o mas para gráficos, una de las razones es que si empezamos a pintar directamente en el DC de la ventana podemos provocar efectos gráficos no deseados. Por ejemplo pongamos que quiero una ventana en fondo blanco con una redonda verde en medio, necesitare pintar el fondo entero de blanco y luego la redonda encima, al hacerlo directamente en una ventana veríamos como la redonda de vez en cuando parpadea, y eso sucede porque también nos esta mostrando el fondo blanco que pintamos primero. En cambio si hacemos ese trabajo en un bufer, y luego pintamos el buffer acabado en la ventana quedara perfectamente. </p>
                <p>Para crear un buffer grafico hay que usar las siguientes API's : <a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank">CreateCompatibleBitmap</a> y <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a>. Con <a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a> estamos reservando un espacio para nuestro buffer que será compatible con el DC especificado, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank">CreateCompatibleBitmap</a> crea el espacio en memoria necesario para guardar nuestro grafico, y <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a> se utiliza entre otras cosas para asignar nuestro Bitmap compatible a nuestro DC compatible. </p>
                <p>Una cosa muy importante cuando usamos <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a> para asignar un objeto al DC, debemos guardar la dirección del objeto viejo, ya que a la hora de destruir el DC solo puede ser destruido si tiene seleccionados sus objetos originales. Es decir si le asigno un nuevo Bitmap al DC tenemos que almacenar la dirección del Bitmap original, y luego cuando no necesitemos mas el nuevo Bitmap habra que volver a asignar el Bitmap original con la API <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a>. Para ver esto con mas detalle fíjate en el principio y el final del siguiente código :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar", "Archivo : ObjetoBoton.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBoton.cpp", "Pintar"); ?>
                <ul>
                <li>Creamos el Buffer para pintar el botón (explicado anteriormente).</li>
                <li>Seleccionamos los colores y fuentes necesarios para el botón según su estado. Para ello utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd145093(VS.85).aspx" target="_blank">SetTextColor</a> para poner el color del texto, y la API <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a> para seleccionar la fuente (recordad que luego vamos a tener que volver a seleccionar la fuente original antes de borrar el buffer) </li>
                <li>Pintamos el degradado de fondo. Para ello utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd144957(VS.85).aspx" target="_blank">GradientFill</a> rellenando correctamente las estructuras <a href="http://msdn.microsoft.com/en-us/library/dd145142(VS.85).aspx" target="_blank">TRIVERTEX</a> y <a href="http://msdn.microsoft.com/en-us/library/dd144958(VS.85).aspx" target="_blank">GRADIENT_RECT</a>. Hay que remarcar que se han utilizado 3 macros para extraer los canales RGB de los COLORREF especificados.</li>
                <li>Pintamos el borde del control, que tiene 2 colores. Para ello creamos unas brochas con la API <a href="http://msdn.microsoft.com/en-us/library/dd183518(VS.85).aspx" target="_blank">CreateSolidBrush</a> y luego pintamos con la API <a href="http://msdn.microsoft.com/en-us/library/dd144839(VS.85).aspx" target="_blank">FrameRgn</a> la región del control con la brocha especificada. Esta operación la hacemos con el borde interno primero y lo pintamos de dos pixeles de ancho/alto. Luego pintamos encima el borde externo con solo un pixel de ancho/alto.</li>
                <li>Pintamos el texto del botón. Para ello primero vamos a poner el fondo del texto transparente con la API <a href="http://msdn.microsoft.com/en-us/library/dd162965(VS.85).aspx" target="_blank">SetBkMode</a> especificando TRANSPARENT. Por último pintamos el texto utilizando la API <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a>.</li>
                <li>Pintamos nuestro buffer en el DC final. Para ello utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd183370(VS.85).aspx" target="_blank">BitBlt</a> especificando las coordenadas y los DC's que intervienen en la operación.</li>
                <li>Des-seleccionamos nuestros objetos GDI y volvemos a seleccionar los objetos originales para poder borrar nuestro DC que contiene el buffer.</li>
                <li>Por último eliminamos los objetos GDI utilizados para el buffer.</li>
                </ul>
                <p>Llegados a este punto ya hemos visto lo más importante a la hora de crear nuestro botón. Si deseáis ver el botón funcionando podéis descargar los ejemplos de este tutorial y echar un vistazo al ejemplo numero 5 : </p>
                <p>En la siguiente parte del tutorial veremos como crear nuestro control marcador que mostrara las operaciones y el resultado de nuestra calculadora : <a href="/Blog/Tutorial_WINAPI_1_6">1.6  - Creación de nuestro objeto Marcador</a>. </p>            
    
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
