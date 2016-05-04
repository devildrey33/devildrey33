<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 2.4 Crear ObjetoEscena_Records");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 2.4 (Crear ObjetoEscena_Records)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 2.4 (Crear ObjetoEscena_Records)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.2.4.png" alt="Tutorial 2.4" style="cursor:pointer;" />
                <p>En este tutorial vamos a tener que usar lo que hemos visto sobre archivos y directorios para crear un objeto que sea capaz de guardar nuestas puntuaciones maximas en el disco duro.</p>
                <p>Vamos a tener que usar el objeto ObjetoEscena_VentanaTranslucida para hacer el ultimo modelo de ventana translucida que nos faltara para tener listo el juego, y ademas vamos a simular un cursor al estilo ms-dos para introducir el nombre de la puntuacion.</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>Para este objeto nos vamos a tener que complicar algo mas que con los 3 últimos basados en ObjetoEscena_VentanaTranslucida.</p>
                <p>Necesitamos es tener un objeto que cargue y guarde los records en un archivo además de mostrarlos en la escena. También debemos pensar que este objeto deberá ser capaz de obtener los caracteres pulsados del teclado, para poder guardar el nombre del record.</p>
                <p>Lo primero será definir una clase para almacenar los datos de un record, veamos la declaración :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDRecord_Snake", "Archivo : ObjetoEscena_Records.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Records.h", "Record_Snake"); ?>
                <p>Como podemos observar tenemos una serie de variables para almacenar los datos del record. Lo único que hay que remarcar es que el string que guardara el nombre será dinamico y se creara ajustado a los caracteres que contenga.</p>
                <p>Ahora que ya tenemos en mente los datos que necesitamos para un record podemos crear el ObjetoEscena_Records, veamos su declaración :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoEscena_Records", "Archivo : ObjetoEscena_Records.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Records.h", "ObjetoEscena_Records"); ?>
                <p>Podemos ver que hay una función para cargar los records, una para guardarlos, una para agregar caracteres (la cual se usara a la hora de escribir el nuevo record), una función Pintar_Terminado que usaremos para pintar los records, una función MostrarRecords que calculara la posición y mostrara la ventana de los records, una función OcultarRecords para ocultar la ventana y por ultimo una función IntroduciendoNuevoRecord que nos servirá para saber si se está introduciendo un nuevo record o no.</p>
                <p>Veamos la función CargarRecords :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCargarRecords", "Archivo : ObjetoEscena_Records.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Records.cpp", "ObjetoEscena_Records::CargarRecords"); ?>
                <p>La función CargarRecords lo primero que hace es obtener la ruta de trabajo mediante la función AppData del ObjetoDirectoriosWindows, luego le añade la parte final del directorio &ldquo;\Tutoriales www.devildrey33.es&rdquo; con la función <a href="http://msdn.microsoft.com/en-us/library/d45bbxx4(VS.80).aspx" target="_blank">wcscat_s</a>. Una vez tenemos determinada la ruta de trabajo creamos otro string con dicha ruta mas el nombre del archivo, para ello utilizamos <a href="http://msdn.microsoft.com/en-us/library/td1esda9(VS.80).aspx" target="_blank">wcscpy_s</a> y <a href="http://msdn.microsoft.com/en-us/library/d45bbxx4(VS.80).aspx" target="_blank">wcscat_s</a> (que son las funciones Unicode seguras de strcopy y strcat). Cuando tenemos la ruta del archivo intentamos abrirlo y leer sus datos, en caso de que el archivo no exista crearemos un vector de 10 records con todo a cero.</p>
                <p>Viendo la función CargarRecords creo que podemos omitir la explicación para la función GuardarRecords que en esencia hace algo similar, asi que pasemos a ver la función Pintar_Terminado :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar_Terminado", "Archivo : ObjetoEscena_Records.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Records.cpp", "ObjetoEscena_Records::Pintar_Terminado"); ?>
                <p>Para empezar creamos un par de fuentes con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>, una normal y una negrita. Luego miramos los milisegundos del parpadeo del cursor con la API <a href="http://msdn.microsoft.com/en-us/library/ms724408(VS.85).aspx" target="_blank">GetTickCount</a>, de forma que cada 300 milisegundos la variable Parpadeo cambie de true a false. </p>
                <p>Lo siguiente es pintar los textos con sombra de la cabecera de los records, para ello utilizamos <a href="http://msdn.microsoft.com/en-us/library/dd162965(VS.85).aspx" target="_blank">SetBkMode</a> para establecer que los textos se pintaran sin fondo, <a href="http://msdn.microsoft.com/en-us/library/dd145093(VS.85).aspx" target="_blank">SetTextColor</a> para asignar el color del texto y <a href="http://msdn.microsoft.com/en-us/library/dd145133(VS.85).aspx" target="_blank">TextOut</a> para pintar el texto.</p>
                <p>Despues creamos un bucle que recorra todos los records para pintarlos de uno en uno. Dentro del bucle utilizamos <a href="http://msdn.microsoft.com/en-us/library/ce3zzk1k(VS.80).aspx" target="_blank">swprintf_s</a> para formatear cada valor y los pintamos con <a href="http://msdn.microsoft.com/en-us/library/dd145133(VS.85).aspx" target="_blank">TextOut</a>. Ademas comprobamos si el record actual es el que se está pintando, para determinar si tenemos que pintar el cursor o no. Para pintar el cursor utilizamos <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a> y la brocha la obtenemos del stock de brochas de Windows con <a href="http://msdn.microsoft.com/en-us/library/dd144925(VS.85).aspx" target="_blank">GetStockObject</a>.</p>
                <p>Por último pintamos el texto &ldquo;Nuevo Record!!&rdquo; si se está introduciendo un record, o en caso contrario pintamos el texto &ldquo;Pulsa ESPACIO para volver a empezar&rdquo;, y eliminamos de memoria todos los objetos GDI.</p>
                <p>Ahora veamos la función MostrarRecords :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarRecords", "Archivo : ObjetoEscena_Records.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Records.cpp", "ObjetoEscena_Records::MostrarRecords"); ?>
                <p>El objetivo de esta función no es solo mostrar los records. Su finalidad también es ordenar los records de forma que se valore la puntuación por encima de todo, y luego si hay varias puntuaciones iguales que las ordene según la idea de que la que tenga menor recorrido es mejor.</p>
                <p>El primer bucle determina si el record está entre los 10 primeros. Mas tarde partiendo de que sabemos la posición del record ordenamos los otros records de forma que borraremos el ultimo y añadiremos el nuevo en la posición que le toque. Por último se calcula la posición centrada para esta ventana y se pone el estado de visibilidad a TRUE.</p>
                <p>Ya solo nos queda ver una función mas, Agragar_Caracter :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregar_Caracter", "Archivo : ObjetoEscena_Records.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_Records.cpp", "ObjetoEscena_Records::Agregar_Caracter"); ?>
                <p>Esta función tiene por objetivo almacenar los caracteres introducidos por el teclado para formar una cadena que será el nombre del nuevo record.</p>
                <p>Basicamente miramos si se ha presionado Intro para terminar con la introducción del nuevo record,  si se ha pulsado la tecla borrar para borrar el ultimo carácter de la cadena, o si se ha pulsado cualquier otra tecla la cual añadiremos a la cadena.</p>
                <p>En el ejemplo 2.4 podemos ver dentro de la escena una ventana que muestra los records, y que esta preparada para recibir pulsaciones de teclado y anotar el nombre del record.</p>
                <p>Ya casi estamos al final del segundo tutorial, ahora nos las veremos con el objeto que cargara los niveles para el Snake: <a href="/Blog/Tutorial_WINAPI_2_5">2.5 - Tutorial Creación del ObjetoSnake_Nivel</a>.</p>
                
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Snake.zip" target="_blank">Snake compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     