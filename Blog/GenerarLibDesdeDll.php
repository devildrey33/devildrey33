<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Generar un .lib a partir de una DLL con Visual Studio");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Generar Lib desde una DLL">
        <meta name="keywords" content="Generar lib de una DLL">';

        $Base->InicioPlantilla(basename(__FILE__), "Generar un .lib a partir de una DLL con Visual Studio", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Generar un .lib a partir de una DLL con Visual Studio");

?>	

                <!-- INTRODUCCION -->
                <p>Hoy vamos a ver cómo podemos generar un archivo lib utilizando de base una DLL.</p>
                <p>Aunque no es un problema muy común, puede darse el caso de que necesitemos trabajar con cierta dll bajo VisualC, y que dicha dll no tenga un archivo lib desde el que poder linkear, pero si disponga de las cabeceras con las declaraciones para la dll.</p>
                <p>Un ejemplo muy claro seria la LibVLC que es la librería base para el famoso reproductor de medios <a href="http://www.videolan.org/">VLC</a>.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero que necesitamos es una versión cualquiera de Visual Studio a partir de la 2003, en el caso de no tener ninguna podéis descargar la versión gratuita desde el siguiente enlace : <a href="http://www.microsoft.com/express/download">Visual Studio Express</a>.</p>
                <p>Visual Studio trae consigo un montón de herramientas, entre ellas existe una aplicación de consola denominada <b>dumpbin.exe</b> que nos permite examinar la información de archivos binarios en formato Common Object File Format (COFF). A primera vista esto puede sonar a chino, pero en esencia nos permite ver entre otras cosas las declaraciones de las que dispone una DLL.</p>
                <p>Pongamos por ejemplo que queremos generar el archivo libvlc.lib a partir del archivo libvlc.dll, para hacerlo lo primero que debemos hacer es abrir el "<b>Símbolo del sistema de Visual Studio</b>" que podéis encontrar dentro del "<b>Menú de inicio</b>" -> "<b>Visual Studio</b>" -> "<b>Visual Studio Tools</b>".</p>
                <p>Una vez abierto no es más que una consola de comandos normal y corriente, pero que tiene cargadas las variables de entorno necesarias para ejecutar cualquier herramienta de Visual Studio desde ella.</p>
                <p>En primer lugar nos movemos a la carpeta donde se encuentra la <b>libvlc.dll</b>, en mi caso "<b>C:\Program Files (x86)\VideoLAN\VLC</b>"</p>
                <p>Para sistemas operativos Vista o superiores vamos a necesitar una carpeta donde no se requieran permisos de administrador para escribir, que en mi caso será "<b>D:\Programacio</b>".</p>
                <img src="../Web/Graficos/GenerarLibDesdeDll1.png" alt="Simbolo del sistema de Visual Studio" />
                <p>Una vez en el directorio ejecutamos el siguiente comando : </p>
                <?php $Base->PintarCodigo->PintarTexto("IDDumpBin", "Comando", "dumpbin /exports libvlc.dll > D:\Programacio\libvlc.def"); ?>
                <p>Si el comando se ha ejecutado correctamente no saldrá nada, y nos devolverá al símbolo del sistema. En caso de que no se pueda escribir el archivo en la ruta especificada nos saldrá el mensaje "<b>Acceso denegado</b>", esto es porque muy probablemente el directorio donde queremos escribir el archivo libvlc.def requiere privilegios de administración para poder escribir datos en el.</p>
                <p>Una vez creado el archivo libvlc.def vamos a editarlo utilizando el notepad mismo. Al editarlo deberíamos ver algo como la siguiente foto :</p>
                <img src="../Web/Graficos/GenerarLibDesdeDll2.png" alt="Notepad libvlc.def" />
                <p>Para que sea un archivo .def válido, en la primera línea debería poner EXPORTS, y luego debería haber un nombre de función por línea.</p>
                <p>De todo lo que vemos solo nos sirve la parte marcada en rojo, que son los nombres de las funciones que exporta la libvlc.dll, por lo que tenemos que eliminar el resto de información.</p>
                <p>Para eliminar la información o bien lo hacemos a mano (ojo que son 230 funciones) o podemos utilizar los siguientes comandos :</p>
                <?php $Base->PintarCodigo->PintarTexto("IDEXPORTS", "Comando", 'echo EXPORTS > D:\Programacio\libvlc.def
for /f "usebackq tokens=4,* delims=_ " %%i in (`dumpbin /exports libvlc.dll`) do if %%i==libvlc echo %%i_%%j >> D:\Programacio\libvlc.def'); ?>
                <div class="nota">Las variables van con un '%' desde la linea de comandos, pero desde dentro de un archivo bat van con 2 '%%'.</div>
                <p>Una vez tengamos el archivo de definiciones preparado nos queda crear el .lib con el siguiente comando :</p>
                <?php $Base->PintarCodigo->PintarTexto("IDDumpBin", "Comando", 'lib /def:"D:\Programacio\libvlc.def" /out:"D:\Programacio\libvlc.lib" /machine:x86'); ?>
                <br />
                <img src="../Web/Graficos/GenerarLibDesdeDll3.png" alt="Generando libvlc.lib" />
                <p>En este caso la dll es de 32 bits (de momento solo hay versiones de 32bits del VLC para windows) por lo que ponemos "/machine:x86" en caso de ser una dll de 64 bits deberíamos poner "/machine:x64".</p>
                <p>Y esto es todo, ya tenemos nuestro .lib creado y ya podemos utilizarlo para linkear nuestro código con la dll. Espero que os sirva de ayuda.</p>            




<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>