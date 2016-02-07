<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial C++ 4 Creación de archivos DUMP.");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial C++ 4 Creación de archivos DUMP", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial C++ 4 Creación de archivos DUMP");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada2" src="/Web/Graficos/250x200_DUMP.png" alt="Tutorial WINAPI 4" />
                <p>Los archivos DUMP son una forma de depurar aplicaciones con windows. La idea consiste en que cuando una aplicación falla críticamente se guarda un archivo con el contenido de la memoria de esta.</p>
                <p>Más tarde podemos abrir esos archivos con el Visual Studio y depurar la aplicación (siempre que tengamos su código fuente a mano).</p>
                <p>Por ejemplo <a href='/Blog/BubaTronik'>BubaTronik</a> si tiene un error critico, crea un archivo dump y pide al usuario permiso para mandarme este archivo dump a mi cuenta de correo. Cosa que es muy útil para depurar errores que yo no he visto en mi maquina.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para ver cómo funciona este proceso, vamos a hacer una aplicación muy básica que consistirá en una ventana vacía, la cual al ser clickeada con el botón izquierdo provocara un error crítico.</p>
                <h2>Función MAIN</h2>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMain", "", "../Codigo/Tutoriales_WinAPI/4 Tutorial crear archivo DUMP/main.cpp", "WinMain"); ?>
                <p>Lo más destacable de esta función WinMain son las <linea cid='IDMain' l='3,4'>dos primeras líneas de código (3,4)</linea>. En la primera declaramos una variable del tipo <linea cid='IDMain' l='3'>LPTOP_LEVEL_EXCEPTION_FILTER</linea> diseñada para guardar la dirección de una función que hace de filtro de errores.</p>
                <p>Luego llamamos a la API <a cid='IDMain' l='4' href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms680634(v=vs.85).aspx" target="_new">SetUnhandledExceptionFilter</a> para asignar nuestra función para filtrar los errores, y esta nos devuelve la dirección del filtro de errores por defecto que tenía asignado la aplicación.</p>
                <p>Con esto acabamos de re-direccionar los errores críticos a nuestra propia función, en la cual podemos entre otras osas escribir el archivo DUMP.</p>
                <h2>Función FiltroError</h2>
                <?php $Base->PintarCodigo->PintarArchivoC("IDFiltroError", "", "../Codigo/Tutoriales_WinAPI/4 Tutorial crear archivo DUMP/main.cpp", "FiltroError"); ?>
                <p>Esta función en primer lugar obtiene la ruta del directorio <linea cid='IDFiltroError' l='6'>APP_DATA</linea> mediante la API <a cid='IDFiltroError' l='6' href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb762181(v=vs.85).aspx" target="_new">SHGetFolderPath</a>.</p>
                <p>Una vez tiene la ruta donde guardar el archivo <linea cid='IDFiltroError' l='9'>crea el archivo DUMP.dmp</linea> con la API <a cid='IDFiltroError' l='9' href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa363858(v=vs.85).aspx" target="_new">CreateFile</a>.</p>
                <p>Cuando se ha usado la API <a cid='IDFiltroError' l='9' href="http://msdn.microsoft.com/en-us/library/windows/desktop/aa363858(v=vs.85).aspx" target="_new">CreateFile</a>, <linea cid='IDFiltroError' l='11'>comprueba que el archivo se ha creado correctamente</linea>, y <linea cid='IDFiltroError' l='13,14,15,16,18,19,20,22,24'>crea e inicializa las variables</linea> necesarias para el reporte de error.</p>
                <ul>
                    <li>La primera estructura es del tipo <a cid='IDFiltroError' l='13' href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms680366(v=vs.85).aspx" target="_new">MINIDUMP_EXCEPTION_INFORMATION</a> donde se guardan la ID del thread actual, y la información de la excepción.</li>
                    <li>La segunda estructura es del tipo <a cid='IDFiltroError' l='18' href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms680361(v=vs.85).aspx" target="_new">MINIDUMP_CALLBACK_INFORMATION</a> donde se puede indicar un callback para añadir más datos al dump, pero que en este caso no vamos a utilizar.</li>
                    <li>Luego se crea una variable del tipo <linea cid='IDFiltroError' l='22'>MINIDUMP_TYPE</linea> que contiene las opciones que se usaran para crear el dump.</li>
                </ul>
                <p>Una tenemos las variables inicializadas se utiliza la API <a cid='IDFiltroError' l='25' href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms680360(v=vs.85).aspx" target="_new">MiniDumpWriteDump</a> para escribir el volcado de memoria dentro del archivo que creamos anteriormente.</p>
                <p>Cuando tenemos los datos en el archivo, lo cerramos utilizando la API <a cid='IDFiltroError' l='27' href="http://msdn.microsoft.com/en-us/library/windows/desktop/ms724211(v=vs.85).aspx" target="_new">CloseHandle</a>.</p>
                <p>Y por ultimo se utiliza la API <a cid='IDFiltroError' l='29' href="http://msdn.microsoft.com/en-us/library/windows/desktop/bb762153(v=vs.85).aspx" target="_new">ShellExecute</a> para mostrarnos el directorio donde ha guardado el archivo DUMP.dmp, para que de esta forma nos sea más fácil de ejecutarlo.</p>
                <p>Ahora que ya hemos visto la función <b>FiltroError</b>, nos falta por ver como provocamos el error en el <b>WndProc</b> :</p>
                <h2>Función WndProc</h2>
                <?php $Base->PintarCodigo->PintarArchivoC("IDWndProc", "", "../Codigo/Tutoriales_WinAPI/4 Tutorial crear archivo DUMP/main.cpp", "WndProc"); ?>
                <p>Ahora que tenemos una idea bastante más clara de cómo funciona todo esto, vamos a ver cómo hay que utilizar estos archivos <b>'dmp'</b>.</p>
                <p>En primer lugar esto solo funciona si la aplicación está corriendo fuera del depurador, puede ser tanto debug como release, pero es necesario que no la estemos ejecutando desde VisualStudio, así que lo primero será compilar el ejecutable (para hacer la prueba mejor lo compilaremos en modo Release), una vez compilado nos vamos a la carpeta donde tenemos los tutoriales WINAPI, y entramos dentro de la carpeta 'Release'. Allí buscamos el archivo '4 Tutorial crear archivo DUMP.exe', y lo ejecutamos. Una vez ejecutado hacemos un click izquierdo dentro de la ventana que nos sale, para provocar el error, y nos aparecerá un MessageBox. Una vez aceptemos el MessageBox se abrirá una carpeta del explorador, y si buscamos en esta encontraremos un archivo llamado 'DUMP.dmp'. Al hacer dobleclick en el archivo se abriría el Visual Studio y nos mostrara una pantalla similar a esta :</p>
                <img src='/Graficos/VS2010Debug.png' alt='Depuración con VisualStudio 2010' />
                <img src='/Graficos/VS2010Debug2.png' alt='Depuración con VisualStudio 2010' style='float:right; margin-top:15px' />
                <p>A la derecha de esta pantalla debería salir un menú que nos da tres opciones : 'Depurar con Solo Nativo', 'Establecer rutas de acceso de símbolos' y 'Copiar todo en el Portapapeles'.</p>
                <p>La razón de que veamos esta pantalla es porque el Visual Studio no ha sabido encontrar los símbolos para poder depurar la aplicación, por lo que vamos a tener que indicarle la ruta de donde puede encontrar estos símbolos.</p>
                <p>Por lo que vamos a hacer click en 'Establecer rutas de acceso de símbolos', y nos mostrara una pantalla similar a esta, aunque probablemente vacía :</p>
                <img src='/Graficos/VS2010Debug3.png' alt='Depuración con VisualStudio 2010' />
                <p>En esta pantalla vamos a tener que añadir el directorio donde se encuentra el ejecutable '4 Tutorial crear archivo DUMP.exe', que también es el mismo donde se han creado los símbolos de depuración.</p>
                <p>Finalmente ya podemos hacer click en "Depurar solo nativo" y voila, vemos la línea de código que ha petado.</p>
                <div class='nota'>En Visual Studio 2008 a mi no me sale la pantalla del resumen, y me sale todo en gris, pero me permite utilizar la flecha verde para ejecutar, al utilizar la flecha verde me sale el código con la línea de error directamente, sin necesidad de establecer ninguna ruta para los símbolos. Por ello no sé exactamente cómo funciona esto, pero con los pasos descritos anteriormente debería funcionar todo a la perfección.</div>
                <p>Y esto es todo!, en un futuro si encuentro un servidor de correo publico que permita enviar emails mediante smtp veremos cómo podemos mandarnos archivos dump al correo en caso de que una de nuestras aplicaciones tenga un error critico.</p>

                <p>De todas formas ya os aviso que si queréis hacer algo así, el tema de enviar el correo se tiene que hacer ejecutando una nueva instancia de la aplicación, y no desde el filtro de errores.</p>
                
                <a class="Boton Centrado" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     