<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 2.2 Crear tablero, marcador y mensaje");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 2.2 Crear tablero, marcador y mensaje", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 2.2 Crear tablero, marcador y mensaje");

?>	


                <!-- INTRODUCCION -->
                <p>En el tutorial anterior se creo una base para poder hacer ventanas translucidas, ahora vamos a utilizar esa base para crear los objetos específicos que necesitaremos para el juego. Necesitamos varios objetos para el juego, pero por el momento empezaremos por estos tres : el Tablero, el Marcador y el Mensaje.</p>
                <p>El tablero consistira en una parrilla de cuadrados que sera por donde se movera nuestra serpiente. El marcador se usara para contabilizar los puntos, el recorrido, la velocidad y los frames por segundo. El mensaje nos servira para advertir que el juego esta en pausa, que se ha pasado al siguiente nivel, o que el juego ha terminado</p>
                
                <!-- FIN_INTRODUCCION -->
                
                <p>Para empezar veamos la declaración del ObjetoEscena_Marcador :</p>
                <div style='clear:both'></div>
                
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoEscena_Marcador", "Archivo : ObjetoEscena_Marcador.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Marcador.h", "ObjetoEscena_Marcador"); ?>
                <p>Como podéis ver esta clase incluye una función <b>MostrarMarcador</b>, que será la encargada de colocar el marcador en la parte superior centrado, y de hacerlo visible. En segundo lugar se ha añadido la función Pintar_AlphaBlend que será donde pintaremos el marcador, y por ultimo se han añadido varios miembros que apuntaran : la puntuación total, el recorrido total, la velocidad en milisegundos que se tarda en hacer un movimiento, y los frames por segundo que se están mostrando.</p>
                <p>Veamos la funcion Pintar_AlphaBlend :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar_AlphaBlend", "Archivo : ObjetoEscena_Marcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Marcador.cpp", "ObjetoEscena_Marcador::Pintar_AlphaBlend"); ?>
                <p>Lo primero que hacemos es definir las variables entre las cuales creamos una fuente para pintar el texto que necesitara el marcador con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>. Luego utilizamos la función <a href="http://msdn.microsoft.com/en-us/library/ce3zzk1k(VS.80).aspx" target="_blank">swprintf_s</a> para formatear el texto y añadirle los valores que necesitamos mostrar. La función swprintf_s es especial para VisualC++, y se basa en la antigua función swprintf (que es la versión Unicode de sprintf). Esta función se utiliza prácticamente igual, lo único que tiene de mas es que debemos especificar el tamaño de nuestro buffer. </p>
                <p>Una vez formateado el texto necesario para pintar la parte izquierda utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/dd145093(VS.85).aspx" target="_blank">SetTextColor</a> para asignar el color del texto, y la API <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a> para pintar el texto. La API <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a> nos permite pintar cadenas con varias líneas, cosa que nos facilitara algo el trabajo.</p>
                <p>Repetimos el mismo proceso para el texto que se alineara a la derecha, y por ultimo eliminamos la fuente anteriormente creada de la memoria.</p>
                <p>Veamos la función MostrarMarcador :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarMarcador", "Archivo : ObjetoEscena_Marcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Marcador.cpp", "ObjetoEscena_Marcador::MostrarMarcador"); ?>
                <p>Lo primero que hacemos es calcular el tamaño de la ventana que contiene la escena, para ello utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms633519(VS.85).aspx" target="_blank">GetWindowRect</a> que nos devuelve tanto la posición como el ancho y la altura de la ventana. La razón de utilizar <a href="http://msdn.microsoft.com/en-us/library/ms633519(VS.85).aspx" target="_blank">GetWindowRect</a> teniendo <a href="http://msdn.microsoft.com/en-us/library/ms633503(VS.85).aspx" target="_blank">GetClientRect</a> es que <a href="http://msdn.microsoft.com/en-us/library/ms633519(VS.85).aspx" target="_blank">GetWindowRect</a> nos devuelve el ancho y la altura de TODA la ventana incluyendo bordes y la barra de titulo, <a href="http://msdn.microsoft.com/en-us/library/ms633503(VS.85).aspx" target="_blank">GetClientRect</a> por el contrario nos devuelve el ancho y el alto del área cliente omitiendo los bordes y la barra de titulo.</p>
                <p>Una vez calculada la posición asignamos TRUE a la variable Visible para que el marcador se pinte en la escena.</p>
                <p>Con esto ya tenemos hecho el marcador, ahora veamos el Tablero y su declaración :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoEscena_Tablero", "Archivo : ObjetoEscena_Tablero.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Tablero.h", "ObjetoEscena_Tablero"); ?>
                <p>Como veis la declaración es muy similar a la declaración del Marcador, y consiste en una función MostrarTablero, dos funciones de pintado Pintar_AlphaBlend y Pintar_Terminado, varios vectores para contener la serpiente, el muro y las bolas, y dos variables que nos indican el ancho y la altura del tablero EN CUADROS.</p>
                <p>Veamos la función MostrarTablero :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarTablero", "Archivo : ObjetoEscena_Tablero.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Tablero.cpp", "ObjetoEscena_Tablero::MostrarTablero"); ?>
                <p>Esta función es la encargada de redimensionar el tamaño de la escena según el ancho y el alto del tablero, y por ello la funcion MostrarTablero debe ser la primera en ejecutarse cuando vayamos a mostrar la escena. Como necesitamos mover la ventana de la escena, requerimos saber su posición X y posición Y, o en caso contrario no podremos usar la función Mover que internamente utiliza la API <a href="http://msdn.microsoft.com/en-us/library/ms633534(VS.85).aspx" target="_blank">MoveWindow</a>. Para averiguar la posición de la ventana escena utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms633519(VS.85).aspx" target="_blank">GetWindowRect</a>. Y por ultimo asignamos el estado de visibilidad para esta ventana a TRUE.</p>
                <p>Ahora veamos la función Pintar_AlphaBlend :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar_AlphaBlend", "Archivo : ObjetoEscena_Tablero.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Tablero.cpp", "ObjetoEscena_Tablero::Pintar_AlphaBlend"); ?>
                <p>Esta función la usamos para remarcar el fondo donde se moverá el juego, y lo hacemos pintando un fondo azul con una tonalidad distinta y unas líneas que formaran una rejilla. Para pintar el fondo utilizamos las APIs <a href="http://msdn.microsoft.com/en-us/library/dd183518(VS.85).aspx" target="_blank">CreateSolidBrush</a> y <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, luego para pintar la rejilla creamos una pluma con la API <a href="http://msdn.microsoft.com/en-us/library/dd183509(VS.85).aspx" target="_blank">CreatePen</a>, seleccionamos esa pluma con la API <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a>, nos guardamos la pluma inicialmente seleccionada y por ultimo hacemos un bucle en el que usamos las APIs <a href="http://msdn.microsoft.com/en-us/library/dd145069(VS.85).aspx" target="_blank">MoveToEx</a> y <a href="http://msdn.microsoft.com/en-us/library/dd145029(VS.85).aspx" target="_blank">LineTo</a> que son las que nos permitirán pintar líneas, y por ultimo eliminamos los objetos GDI de la memoria con la API <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>.</p>
                <p>La API <a href="http://msdn.microsoft.com/en-us/library/dd145069(VS.85).aspx" target="_blank">MoveToEx</a> viene a ser como la funcion gotoxy que antiguamente se usaba en MS-DOS, pero bueno para los que no habeis usado nunca gotoxy esta funcion situaba el cursor en la posición indicada de la pantalla. <a href="http://msdn.microsoft.com/en-us/library/dd145069(VS.85).aspx" target="_blank">MoveToEx</a> en esencia apunta unas coordenadas X, Y donde empezaran todos los <a href="http://msdn.microsoft.com/en-us/library/dd145029(VS.85).aspx" target="_blank">LineTo</a>. Si por ejemplo hacemos <a href="http://msdn.microsoft.com/en-us/library/dd145069(VS.85).aspx" target="_blank">MoveToEx</a> 0,0 y luego LineTo 1024,0 estaremos haciendo una línea horizontal en la parte superior de la pantalla, si luego queremos hacer una línea en la parte izquierda solo nos hace falta llamar a <a href="http://msdn.microsoft.com/en-us/library/dd145029(VS.85).aspx" target="_blank">LineTo</a> 0, 768 ya que inicialmente se ha colocado el cursor con <a href="http://msdn.microsoft.com/en-us/library/dd145069(VS.85).aspx" target="_blank">MoveToEx</a> a 0,0.</p>
                <p>Ahora nos toca ver la funcion Pintar_Terminado :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar_Terminado", "Archivo : ObjetoEscena_Tablero.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Tablero.cpp", "ObjetoEscena_Tablero::Pintar_Terminado"); ?>
                <p>Esta funcion pintara las bolas, la serpiente y el muro OPACOS. No hace falta dar mucha explicación del código ya que se usan las API's de siempre exceptuando la API <a href="http://msdn.microsoft.com/en-us/library/dd162510(VS.85).aspx" target="_blank">Ellipse</a> la cual utilizamos para pintar las bolas. Solo remarcar que estos graficos no se incluirán en ningún AlphaBlend.</p>
                <p>Con esto ya tenemos el ObjetoEscena_Tablero listo. Ahora veamos la definición para el ObjetoEscena_Mensaje :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar_Terminado", "Archivo : ObjetoEscena_Mensaje.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Mensaje.h", "ObjetoEscena_Mensaje"); ?>
                <p>La definición es muy parecida a las dos clases anteriores lo único a destacar es que también se ha añadido una función para ocultar el mensaje. La función Pintar_Terminado no hace falta ni volverla a ver ya que simplemente pinta el texto del mensaje con sombra, pero la funcion MostrarMensaje es algo mas complicada ya que requerimos calcular el tamaño que necesitamos para mostrar el texto, para luego calcular la posición centrada de la ventana con el mensaje.</p>
                <p>Veamos la funcion MostrarMensaje :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarMensaje", "Archivo : ObjetoEscena_Mensaje.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Mensaje.cpp", "ObjetoEscena_Mensaje::MostrarMensaje"); ?>
                <p>Lo primero que hacemos es eliminar el texto anterior de la memoria, y luego asignamos el nuevo texto para el mensaje. Para calcular el ancho del texto necesitaremos crear un DC compatible con la API <a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a>, y una fuente que crearemos con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>. Una vez creados estos objetos la idea es utilizar la API <a href="http://msdn.microsoft.com/en-us/library/dd144938(VS.85).aspx" target="_blank">GetTextExtentPoint32</a> para obtener el ancho de nuestro texto, pero se nos presenta un problema ya que dicha API no mira si la cadena tiene varias líneas. Por ello debemos separar la cadena en líneas y analizar cada línea con <a href="http://msdn.microsoft.com/en-us/library/dd144938(VS.85).aspx" target="_blank">GetTextExtentPoint32</a> de forma que nos quedemos con el ancho de la línea mas larga.</p>
                <p>Una vez tenemos el ancho de la línea mas larga y sabemos el numero de líneas, podemos calcular el tamaño para el mensaje, y luego podemos calcular la posición centrada para el mensaje.</p>
                <p>Por ultimo si se ha especificado Error a false pondremos el fondo de color verde, si por el contrario se ha especificado Error a true pondremos el fondo de color rojo. Y para terminar hacemos visible el mensaje.</p>
                <p>En el ejemplo 2.2 podemos ver una venanta ObjetoEscena con las tres ventanas translucidas que se han creado en este tutorial.   </p>
                <p>Ya solo nos queda una ventana translucida mas por crear, que será la que llevara el tema de los records, pero antes necesitamos saber mas sobre archivos y directorios en Windows, asi que os invito a ver el siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_2_3">2.3 - Archivos y Directorios</a>.</p>
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Snake.zip" target="_blank">Snake compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     