<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.2 (Common Dialogs)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.2 (Common Dialogs)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.2 (Common Dialogs)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.2.png" alt="Tutorial 3 Instalador y Ensamblador" />
                <p>El siguiente tutorial tiene como objetivo mostrar  por encima algunos de los common dialogs de windows. Lo primero que debéis saber es que un common dialog se refiere a un dialogo común del sistema, como por ejemplo el dialogo  que nos sale cuando guardamos un archivo de texto en el Notepad.</p>
                <p>Estos dialogos son usados por el 99% de aplicaciones que requieren trabajar con archivos / directorios, con impresoras, con colores, con fuentes, etc... Es importante conocerlos ya que nos pueden ahorrar un gran trabajo.</p>
                <p>Aunque no vamos a verlos todos en este tutorial, veremos los dialogos para trabajar con el sistema de archivos, y que hacen referenca a las acciones : 'abrir', 'guardar' y 'seleccionar directorio'.</p>
                <div style="clear:both"></div>
                <!-- FIN_INTRODUCCION -->
                <img src="/Graficos/DlgGuardarW7.png" style="width:45%"  />
                <img src="/Graficos/DlgGuardarWXP.png" style="width:45%; padding-top:5px;" />
                <p>La imagen superior pertenece a un dialogo para guardar archivos de Windows7, y la imagen inferior a a un dialogo para guardar archivos de Windows XP. Como podéis observar el aspecto grafico es distinto de un sistema operativo a otro, pero el código para llamar a ese dialogo es exactamente el mismo incluso para Win95,98,ME.</p>
                <div class='nota'>Aunque el código para mostrar un dialogo sea el mismo de un sistema operativo a otro, nos podemos encontrar que en sistemas operativos mas nuevos tengan mas opciones que no funcionen en sistemas anteriores.</div>
                <p><h2><b>ObjetoDlgAbrir</b></h2></p>
                <p>Bueno pasemos a ver la declaración de ObjetoDlgAbrir :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoDlgAbrir", "Archivo : ObjetoDlgAbrir.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgAbrir.h", "ObjetoDlgAbrir"); ?>
                <p>En esencia tiene una función para mostrar el dialogo  &ldquo;MostrarAbrir&rdquo; que nos devolverá el numero de archivos seleccionados. Luego  tiene una función TotalArchivos que también nos devuelve el total de archivos  seleccionados, una función Archivo y un operador [] que nos devuelven el Path  del archivo especificado en el miembro Pos. Y por ultimo un vector de TCHARS  que contendrá los paths de los archivos seleccionados.</p>
                <p>Ahora veamos la función MostrarAbrir :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarAbrir", "Archivo : ObjetoDlgAbrir.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgAbrir.cpp", "ObjetoDlgAbrir::MostrarAbrir"); ?>
                <p>Esta función es algo grande, por la que la resumiré en 2  partes (INICIALIZACION y MOSTRAR EL DIALOGO)</p>
                <p><b>INICIALIZACION</b> : En esencia rellenamos la estructura  <a href="http://msdn.microsoft.com/en-us/library/ms646839(VS.85).aspx" target="_blank">OPENFILENAME</a> de forma que la configuremos para realizar la tarea. Lo mas  importante de esta estructura aparte de los estilos es el filtro de archivos.  Veréis una línea con TEXT(&ldquo;Todos los archivos\0*.*\0&rdquo;), esto es el filtro y en  este caso se ajusta a todos los archivos. Si por ejemplo queremos crear un  filtro para archivos de texto podríamos poner esta cadena : TEXT(&ldquo;Archivos de  texto\0*.txt;*.texto\0Todos los archivos\0*.*\0&rdquo;). Con esto se crearía un  filtro para las extensiones *.txt y *.texto. Si deseamos añadir mas extensiones  a un filtro tienen que estar delimitadas por el carácter &lsquo;;&rsquo;</p>
                <p><b>MOSTRAR EL DIALOGO</b> :  Para mostrar el dialogo lo primero es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms646927(v=VS.85).aspx" target="_blank">GetOpenFilename</a>. Una vez  <a href="http://msdn.microsoft.com/en-us/library/ms646927(v=VS.85).aspx" target="_blank">GetOpenFilename</a> termine querrá decir que el usuario ha seleccionado uno o mas  archivos, o que el usuario ha cancelado la selección. En el caso de que el  dialogo tenga multiselección <a href="http://msdn.microsoft.com/en-us/library/ms646927(v=VS.85).aspx" target="_blank">GetOpenFilename</a> nos devolverá un string con el  directorio al principio seguido de todos los nombres de archivo seleccionados.  Esto es algo incomodo ya que vamos a tener que parsear cada archivo  seleccionado para añadirle el directorio.</p>
                <div class='nota'>Si vamos a utilizar un dialogo para abrir en nuestra aplicación, necesitaremos añadir al linker la libreria Shell32.lib (Dependiendo del compilador puede que ya esté enlazada por defecto). Bajo Visual C podeis usar el siguiente codigo para enlazar la libreria al linker : </div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDLIBRERIA_SHELL32", "Archivo : ObjetoDlgAbrir.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgAbrir.h", "LIBRERIA_SHELL32"); ?><br />
                <h2><b>ObjetoDlgGuardar</b></h2></p>
                <p>Nos toca ver el  ObjetoDglGuardar (Dialogo para guardar archivos) :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoDlgGuardar", "Archivo : ObjetoDlgGuardar.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgGuardar.h", "ObjetoDlgGuardar"); ?>
                <p>La idea es prácticamente la misma que con el dialogo abrir,  con excepción de que sabemos que este dialogo siempre retornara un único  archivo. Por eso la función MostrarGuardar nos retorna directamente el Path del  archivo seleccionado.</p>
                <p>Veamos la función MostrarGuardar </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarGuardar", "Archivo : ObjetoDlgGuardar.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgGuardar.cpp", "ObjetoDlgGuardar::MostrarGuardar"); ?>
                <p>La inicialización de la estructura <a href="http://msdn.microsoft.com/en-us/library/ms646839(VS.85).aspx" target="_blank">OPENFILENAME</a> es  prácticamente igual a la del dialogo abrir, con la excepción de los estilos. Y para mostrar el dialogo guardar utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms646928(v=VS.85).aspx" target="_blank">GetSaveFilename</a>.</p>
                <div class='nota'>Si vamos a utilizar un dialogo para guardar en nuestra aplicación, necesitaremos añadir al linker la libreria Shell32.lib (Dependiendo del compilador puede que ya esté enlazada por defecto) Bajo Visual C podeis usar el siguiente codigo para enlazar la libreria al linker : </div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDLIBRERIA_SHELL322", "Archivo : ObjetoDlgGuardar.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgGuardar.h", "LIBRERIA_SHELL32"); ?><br />
                <h2><b>ObjetoDlgDirectorios</b></h2>
                <p>Ahora nos toca ver el ObjetoDlgDirectorios :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoDlgDirectorios", "Archivo : ObjetoDlgDirectorios.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgDirectorios.h", "ObjetoDlgDirectorios"); ?>
                <p>La declaración de este objeto es prácticamente idéntica a la  del dialogo guardar en cuanto a funcionabilidad, solo se diferencian en la  función Mostrar…</p>
                <p>Veamos como funciona la función MostrarDirectorios :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrarDirectorios", "Archivo : ObjetoDlgDirectorios.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDlgDirectorios.cpp", "ObjetoDlgDirectorios::MostrarDirectorios"); ?>
                <p>En la inicialización rellenamos la estructura <a href="http://msdn.microsoft.com/en-us/library/bb773205(VS.85).aspx" target="_blank">BROWSEINFO</a>, y  luego mostramos el dialogo directorios con la API <a href="http://msdn.microsoft.com/en-us/library/bb762115(VS.85).aspx" target="_blank">SHBrowseForFolder</a>. La API  <a href="http://msdn.microsoft.com/en-us/library/bb762115(VS.85).aspx" target="_blank">SHBrowseForFolder</a> nos devuelve un PIDLIST_ABSOLUTE que apunta a la ruta  devuelta, para traducir la ruta a un string con un path se utiliza la API  <a href="http://msdn.microsoft.com/en-us/library/bb762194(VS.85).aspx" target="_blank">SHGetPathFromIDList</a>.</p>
                <p>Con esto ya tenemos todo  lo que necesitara tanto el instalador como el ensamblador . Para mas  información acerca de los dialogos comunes consultad este enlace de la MSDN :  <a href="http://msdn.microsoft.com/en-us/library/ms645524(v=VS.85).aspx" target="_blank">Common Dialog Box Library</a></p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_3">3.3 Creación del ObjetoEditBox</a>.</p>     
                <div class='Centrado'>
                <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
                </div>
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     