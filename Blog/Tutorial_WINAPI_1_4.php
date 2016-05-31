<?php 
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.4 (Entorno gráfico de windows GDI)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.4 (Entorno gráfico de windows GDI)");

        /*include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.4 (Entorno gráfico de windows GDI)");*/
?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.1.4.png" alt="Tutorial 1.4" style="cursor:pointer;" />
                <p>Con este tutorial empezaremos a tocar la parte grafica de las ventanas, cosa que nos servira mas adelante para moldear y pintar todos los controles de creacion propia a nuestro antojo.</p>
                <p>En esencia vamos a ver como responder al mensaje <b>WM_PAINT</b> de windows, que es el encargado de avisarnos cuando una ventana necesita repintarse. Luego utilizaremos este mensaje para escribir una cadena de caracteres en la ventana, y pintar el fondo de toda la ventana utilizando un color aleatorio.</p>
                <p></p>
                <!-- FIN_INTRODUCCION -->
                <p>Aun recuerdo cuando hice un cursillo de programación básico, y mi profesor decía : hay 2 tipos de programadores en esencia, los que mueven  datos, y los que mueven gráficos. Ahora le doy la razón, a pesar de que una  aplicación no solo son gráficos o datos y siempre se requiere de las dos  partes, y yo tengo una afición especial para añadir acabados gráficos que marquen la diferencia.  </p>
                <p>Supongo que más de uno recordara Windows 95/98/ME, con sus gráficos 100% rectangulares, pues os sorprendería ver la de aplicaciones con un  acabado excelente bajo esos sistemas operativos, y no precisamente gracias a  los controles estándar de windows. Yo personalmente tengo una serie de controles creados por mi que simulan gran  parte de los controles estándar de windows con varias mejoras graficas y que  además son perfectamente configurables en su apariencia. Actualmente con  windows 7 y windows vista la cosa ha mejorado mucho en cuanto al aspecto  grafico, pero no por ello tenemos que usar los controles por defecto del  windows.</p>
                <p>Bueno dejando de banda mi historial académico y versiones antiguas de windows, empezaremos a familiarizarnos con el GDI de windows.  Windows esta hecho de tal forma que cuando necesita repintar algo, solo repinta  lo que necesite cambios, es decir si minimizamos una ventana windows repintara  la porción de la pantalla donde estaba esa ventana.</p>
                <p>Pongamos por ejemplo una ventana con 4 controles dentro, y windows necesita repintar la mitad de la ventana, la cual solo contiene 2  controles. Que pasara? Windows mandara un mensaje <a href="http://msdn.microsoft.com/en-us/library/dd145213%28VS.85%29.aspx" target="_blank">WM_PAINT</a> a la ventana  indicando que esta debe repintarse, además windows mirara que controles están  dentro de la región de repintado, y repetirá el mensaje <a href="http://msdn.microsoft.com/en-us/library/dd145213%28VS.85%29.aspx" target="_blank">WM_PAINT</a> en los  controles que queden dentro.</p>
                <p>Para poder pintar cualquier cosa en windows necesitamos  obtener el HDC de la ventana que queremos pintar. El HDC es una herramienta de  windows para pintar gráficos, y está formado por varios objetos. Para empezar  un HDC tiene un objeto HBITMAP, que es donde se almacenan los gráficos en  esencia, también tiene un objeto HFONT que enlaza con la fuente seleccionada  que se usa para pintar texto, un objeto HPEN que simboliza una pluma de un  color para pintar líneas, un HBRUSH que simboliza una brocha para pintar  regiones de un color, y otros objetos. </p>
                <p>Desde un mensaje <a href="http://msdn.microsoft.com/en-us/library/dd145213%28VS.85%29.aspx" target="_blank">WM_PAINT</a> para acceder al DC debemos usar  las API's <a href="http://msdn.microsoft.com/en-us/library/dd183362%28VS.85%29.aspx" target="_blank">BeginPaint</a> y <a href="http://msdn.microsoft.com/en-us/library/dd162598(v=VS.85).aspx" target="_blank">EndPaint</a>, ya que estas funciones están preparadas para  pintar SOLO la porción que windows necesita. Dentro de la estructura  <a href="http://msdn.microsoft.com/en-us/library/dd162768(VS.85).aspx" target="_blank">PAINTSTRUCT</a> podemos encontrar la región que se requiere pintar, o podemos  ignorar esos datos y pintar todo el HDC, y dejar que windows pinte la porción  que necesite (cosa que será más lenta pero más cómoda).</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDWM_PAINT", "Archivo : PlantillaEventos.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/PlantillaEventos.h", "WM_PAINT"); ?>
                <p>Si por el contrario queremos acceder a un HDC para  repintarlo nosotros mismos sin enviar el mensaje <a href="http://msdn.microsoft.com/en-us/library/dd145213%28VS.85%29.aspx" target="_blank">WM_PAINT</a>, debemos utilizar las  API's <a href="http://msdn.microsoft.com/en-us/library/dd144871%28VS.85%29.aspx" target="_blank">GetDC</a> y <a href="http://msdn.microsoft.com/en-us/library/dd162920(v=VS.85).aspx" target="_blank">ReleaseDC</a>. Hay casos en los que podemos necesitar repintar  nuestra ventana / control, por ejemplo si queremos hacer un efecto de resaltado  cuando pasamos por encima con el mouse, debemos repintar la ventana una vez  cuando el mouse esta dentro, y una vez cuando el mouse sale. </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDRePintar", "Archivo : Tutorial_GDI.cpp", "../Codigo/Tutoriales_WinAPI/1.04 Tutorial GDI/Tutorial_GDI.cpp", "RePintar"); ?>
                <p>Bueno ahora ya hemos tomado contacto con el HDC sin pintar  nada. Lo siguiente será crear la función Pintar para hacer un fondo de color aleatorio con  un texto centrado de color blanco.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar", "Archivo : Tutorial_GDI.cpp", "../Codigo/Tutoriales_WinAPI/1.04 Tutorial GDI/Tutorial_GDI.cpp", "Pintar"); ?>
                <p>La función Pintar utiliza la API <a href="http://msdn.microsoft.com/en-us/library/dd183518%28VS.85%29.aspx" target="_blank">CreateSolidBrush</a> para crear  una brocha de color aleatorio, luego obtiene el ancho y alto de la ventana  utilizando la API <a href="http://msdn.microsoft.com/en-us/library/ms633503%28VS.85%29.aspx" target="_blank">GetClientRect</a>, pinta el fondo de la ventana de color negro  con la API <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, asigna el color del texto a blanco con la API  <a href="http://msdn.microsoft.com/en-us/library/dd145093%28VS.85%29.aspx" target="_blank">SetTextColor</a>, asigna el color del fondo para el texto a negro con la API  <a href="http://msdn.microsoft.com/en-us/library/dd162964(VS.85).aspx" target="_blank">SetBkColor</a>, pinta el texto &quot;Hola Mundo&quot; centrado en la ventana con la  API <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a>, y borra la brocha de la memoria con la API <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>.</p>
                <p> Hay que destacar que la gran mayoría de objetos del GDI  tienen una API para ser creados y otra para ser eliminados. Si utilizamos  objetos que debamos crear nosotros, debemos recordar que dichos objetos deben  ser destruidos cuando ya no sean necesarios, si nos olvidamos de borrar  correctamente estos objetos llegara un punto en el que windows no podrá crear  mas objetos y causara errores graficos.</p>
                <p> Otra cosa a tener en cuenta es que podemos  echar mano de algunos objetos GDI creados por el sistema operativo para sus  operaciones rutinarias, de esta forma ahorraremos algo de memoria y tiempo de  procesador, pero debemos recordar que dichos objetos no deben ser eliminados,  ya que Windows los esta utilizando tambien. Para ello podemos utilizar las API <a href="http://msdn.microsoft.com/en-us/library/dd144927(VS.85).aspx" target="_blank">GetSysColorBrush</a>  y <a href="http://msdn.microsoft.com/en-us/library/dd144925(VS.85).aspx" target="_blank">GetStockObject</a> entre otras.</p>
                <p>Ahora que ya sabemos crear ventanas y utilizar básicamente el  GDI de Windows es el momento ideal para empezar a crear nuestro primer control y asi poder aprender mas sobre el GDI haciendo algo util. Este control consistirá en un botón con los bordes redondeados el cual estará pintado  con un degradado de fondo : <a href="/Blog/Tutorial_WINAPI_1_5">1.5 Creación de nuestro objeto Botón</a>.</p>
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
