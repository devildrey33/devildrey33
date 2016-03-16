<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));
	
	$NEH = "
		<style type='text/css'>
            .Estilo3 {font-size: 14px}
        </style>	
	";
		
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.7 (Terminando la calculadora)", $NEH);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial C++ 2.0 Introducción al Snake", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial C++ 2.0 Introducción al Snake");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Snake.png" alt="Tutorial 2 Snake" style="cursor:pointer" />
                <p>La segunda parte de los tutoriales para el API de windows tiene por objetivo la creacion de el tipico juego de la serpiente.</p>
                <p>Este juego consiste en una serpiente que va creciendo a medida que va comiendo bolas, y que contra mas crece la serpiente mas se acelera su movimiento. El juego termina una vez tocamos con la cabeza de la serpiente una pared o la misma serpiente.</p>
                <p>Tambien tendrá un marcador de records que quedaran guardados en el disco duro.</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>En esta segunda parte de los tutoriales profundizaremos especialmente en el entorno gráfico de windows, y mas especificamente en como pintar todo tipo de graficos con varios efectos.</p>
                <p>Crearemos un objeto principal, el cual se encargara de gestionar todos los graficos que necesitemos pintar en la ventana del juego al cual llamaremos ObjetoEscena.</p>
                <p>Dentro de ese objeto crearemos un objeto base que nos servira para pintar marcos translucidos los cuales tendran una funcion similar a la que tiene una ventana de windows. Dicho objeto se llamara ObjetoEscena_VentanaTranslucida.</p>
                <p>Una vez tengamos esa base podremos empezar a crear objetos que hereden del ObjetoEscena_VentanaTranslucida para hacer el tablero del juego, una parte para mostrar mensajes, una parte para mostrar el marcador, y una parte para mostrar los records del juego.</p>
                <p>Tambien trataremos por encima el sistema de archivos de windows (para leer y guardar los records) en versiones de windows 6.x (windows vista y 7) no podemos escribir en cualquier lugar por defecto, por lo que necesitaremos comprender como funciona el sistema de permisos del sistema de archivos, y donde podemos almacenar datos para nuestras aplicaciones sin problemas.
                <p>Por ultimo trataremos la obtencion de eventos del teclado (para poder hacer que el juego responda a nuestras ordenes), en esencia hay 2 formas de obtener pulsaciones de teclas (una es mediante los eventos de la ventana, y la otra es utilizando apis especiales para ello). En este caso al estar programando un juego necesitaremos utilizar el api especial para obtener las pulsaciones ya que el juego requiere el maximo de precision posible.</p>
                
                
                
                
                
                <table class='Tabla'>
                 <tr>
                  <td class="EnlaceH" style="width:50px"><h3>2.01</h3></td>
                  <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_2_1">Creación del ObjetoEscena y el ObjetoEscena_VentanaTranslucida</a>:</h3></td>
                 </tr>
                 <tr>
                  <td class="TablaSoportadoTitulo">&nbsp;</td>
                  <td class="TablaSoportadoTitulo">En esta parte crearemos un interface gráfico básico para el juego que nos puede servir en otras aplicaciones.
                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                     <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183351(VS.85).aspx" target="_blank">AlphaBlend</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145141(VS.85).aspx" target="_blank">TransparentBlt</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183370(VS.85).aspx" target="_blank">BitBlt</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162883(VS.85).aspx" target="_blank">PtInRegion</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144879(VS.85).aspx" target="_blank">GetDIBits</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd162973(VS.85).aspx" target="_blank">SetDIBits</a>.</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                     <td class="TablaSoportadoTitulo">ninguna...</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                     <td class="TablaSoportadoTitulo">ninguno...</td>
                    </tr>
                    <tr>
                     <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                     <td class="TablaSoportadoTitulo"> ninguna...</td>
                    </tr>
                   </table>
                   </td>
                 </tr>
                 <tr>
                  <td class="EnlaceH" style="width:50px"><h3>2.02</h3></td>
                  <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_2_2">Creación del tablero, el marcador y el mensaje</a>:</h3></td>
                 </tr>
                 <tr>
                  <td class="TablaSoportadoTitulo">&nbsp;</td>
                  <td class="TablaSoportadoTitulo">En esta parte crearemos tres Objeto_VentanaTranslucida, uno para el tablero, uno para el marcador, y uno para los mensajes cortos.
                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                     <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ce3zzk1k(VS.80).aspx" target="_blank">swprintf_s</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145093(VS.85).aspx" target="_blank">SetTextColor</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633519(VS.85).aspx" target="_blank">GetWindowRect</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633503(VS.85).aspx" target="_blank">GetClientRect</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633534(VS.85).aspx" target="_blank">MoveWindow</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183518(VS.85).aspx" target="_blank">CreateSolidBrush</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183509(VS.85).aspx" target="_blank">CreatePen</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145069(VS.85).aspx" target="_blank">MoveToEx</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145029(VS.85).aspx" target="_blank">LineTo</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject, </a><a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162510(VS.85).aspx" target="_blank">Ellipse</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd144938(VS.85).aspx" target="_blank">GetTextExtentPoint32</a>.</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                     <td class="TablaSoportadoTitulo">ninguna...</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                     <td class="TablaSoportadoTitulo">ninguno...</td>
                    </tr>
                    <tr>
                     <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                     <td class="TablaSoportadoTitulo"> ninguna...</td>
                    </tr>
                   </table>
                   </td>
                 </tr>
                 <tr>
                  <td class="EnlaceH"><h3>2.03</h3></td>
                  <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_2_3" >Archivos y Directorios</a>:</h3></td>
                 </tr>
                 <tr>
                  <td class="TablaSoportadoTitulo">&nbsp;</td>
                  <td class="TablaSoportadoTitulo">En esta parte veremos un poco por encima como crear archivos y directorios, y tambien que limitaciones tenemos en ciertos sistemas operativos.
                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                     <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb762181(VS.85).aspx" target="_blank">SHGetFolderPath</a>, <a href="http://msdn.microsoft.com/en-us/library/bb762188(VS.85).aspx" target="_blank">SHGetKnownFolderPath</a>, <a href="http://msdn.microsoft.com/en-us/library/ms684175(VS.85).aspx" target="_blank">LoadLibrary</a>, <a href="http://msdn.microsoft.com/en-us/library/ms683212(VS.85).aspx" target="_blank">GetProcAddress</a>, <a href="http://msdn.microsoft.com/en-us/library/ms683152(VS.85).aspx" target="_blank">FreeLibrary</a>, <a href="http://msdn.microsoft.com/en-us/library/aa363858(VS.85).aspx" target="_blank">CreateFile</a>, <a href="http://msdn.microsoft.com/en-us/library/ms724211(VS.85).aspx" target="_blank">CloseHandle</a>, <a href="http://msdn.microsoft.com/en-us/library/aa365467(VS.85).aspx" target="_blank">ReadFile</a>, <a href="http://msdn.microsoft.com/en-us/library/aa365747(VS.85).aspx" target="_blank">WriteFile</a>, <a href="http://msdn.microsoft.com/en-us/library/aa364955(VS.85).aspx" target="_blank">GetFileSize</a>, y <a href="http://msdn.microsoft.com/en-us/library/aa364957(v=VS.85).aspx" target="_blank">GetFileSizeEx</a>.</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                     <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/aa383713(VS.85).aspx" target="_blank">LARGE_INTEGER</a>.</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                     <td class="TablaSoportadoTitulo">ninguno...</td>
                    </tr>
                    <tr>
                     <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                     <td class="TablaSoportadoTitulo"> ninguna...</td>
                    </tr>
                   </table>
                   </td>
                 </tr>
                 <tr>
                  <td class="EnlaceH"><h3>2.04</h3></td>
                  <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_2_4" >Creación del ObjetoEscena_Records</a>: </h3></td>
                 </tr>
                 <tr>
                  <td class="TablaSoportadoTitulo">&nbsp;</td>
                  <td class="TablaSoportadoTitulo">En esta parte crearemos una ventana translucida que nos permitira guardar nombres de los records, y mostrar los records del juego.
                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                     <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/d45bbxx4(VS.80).aspx" target="_blank">wcscat_s</a>, <a href="http://msdn.microsoft.com/en-us/library/td1esda9(VS.80).aspx" target="_blank">wcscpy_s</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ms724408(VS.85).aspx" target="_blank">GetTickCount</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162965(VS.85).aspx" target="_blank">SetBkMode</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145093(VS.85).aspx" target="_blank">SetTextColor</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145133(VS.85).aspx" target="_blank">TextOut</a>, <a href="http://msdn.microsoft.com/en-us/library/ce3zzk1k(VS.80).aspx" target="_blank">swprintf_s</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd144925(VS.85).aspx" target="_blank">GetStockObject</a>.</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                     <td class="TablaSoportadoTitulo">ninguna...</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                     <td class="TablaSoportadoTitulo">ninguno...</td>
                    </tr>
                    <tr>
                     <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                     <td class="TablaSoportadoTitulo"> ninguna...</td>
                    </tr>
                   </table>
                   </td>
                 </tr>
                 <tr>
                  <td class="EnlaceH"><h3>2.05</h3></td>
                  <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_2_5" >Creación del ObjetoSnake_Nivel</a>:</h3></td>
                 </tr>
                 <tr>
                  <td class="TablaSoportadoTitulo">&nbsp;</td>
                  <td class="TablaSoportadoTitulo">En esta parte crearemos un objeto para leer los niveles a partir de un fichero txt.
                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                     <td width="930" class="TablaSoportadoTitulo">ninguna...</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                     <td class="TablaSoportadoTitulo">ninguna...</td>
                    </tr>
                    <tr>
                     <td valign="top"><b>Mensajes:</b></td>
                     <td>ninguno...</td>
                    </tr>
                    <tr>
                     <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                     <td class="TablaSoportadoTitulo"> ninguna...</td>
                    </tr>
                   </table>
                   </td>
                 </tr>
                 <tr>
                  <td class="EnlaceH"><h3>2.06</h3></td>
                  <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_2_6" >Terminando el Snake (ObjetoSnake)</a>:</h3></td>
                 </tr>
                 <tr>
                  <td>&nbsp;</td>
                  <td>En este punto crearemos el objeto que controlara el juego, y enlazaremos todo lo hecho anteriormente.
                   <table width="100%" border="0" cellspacing="0" cellpadding="0">
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                     <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms646293(VS.85).aspx" target="_blank">GetAsyncKeyState</a>, <a href="http://msdn.microsoft.com/en-us/library/ms724408(VS.85).aspx" target="_blank">GetTickCount</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144871%28VS.85%29.aspx" target="_blank">GetDC</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162920(v=VS.85).aspx" target="_blank">ReleaseDC</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644955(VS.85).aspx" target="_blank">TranslateMessage</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms644934(VS.85).aspx" target="_blank">DispatchMessage</a>.</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                     <td class="TablaSoportadoTitulo">ninguna...</td>
                    </tr>
                    <tr>
                     <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                     <td class="TablaSoportadoTitulo">ninguno...</td>
                    </tr>
                    <tr>
                     <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                     <td class="TablaSoportadoTitulo"> ninguna...</td>
                    </tr>
                   </table>
                   </td>
                 </tr>
                </table>
                
                <br />
                <div class='postit' style='display:table'>
                <h3>Requisitos:</h3>
                <ul>
                <li>Conocimientos básicos de C o C++.</li>
                <li>Entorno Windows XP o superior.</li>
                <li>Compilador Visual Studio express 2008 o superior.</li>
                <li>Ganas de hacer trabajar el coco.</li>
                </ul>
                </div>
                
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Snake.zip" target="_blank">Snake compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     