<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.9 (Creación del ObjetoZLIB)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.9 (Creación del ObjetoZLIB)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.9 (Creación del ObjetoZLIB)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.9.png" alt="Tutorial 3 Instalador y Ensamblador" />
                <p>En este tutorial vamos a encapsular las funciones de la ZLIB (libreria de compresion y descompresion escrita por <b>Jean-loup-Gailly</b> y <b>Mark Adler</b>) en un objeto que usaremos tanto en la aplicacion Instalador como en la aplicacion Ensamblador.</p>
                <p>De esta forma nos crearemos un objeto que con una linea de codigo sera capaz de comprimir / descomprimir un archivo, y asi no tendremos que preocuparnos mas por este tema una vez creemos las aplicaciones finales de este tutorial.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero será diseñar un contenedor al que se le puedan agregar partes binarias, que será el  destinado a contener los archivos comprimidos / descomprimidos en memoria. Para  ello crearemos el objeto ContenedorBinario, veamos su declaración :</p>
                <div style="clear:both"></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDContenedorBinario", "Archivo : ObjetoZLIB.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoZLIB.h", "ContenedorBinario"); ?>
                <p>Este objeto nos permite  ir agregando partes binarias variables de forma que queden concatenadas. Esto  se hace así porque la ZLIB tanto para comprimir como para descomprimir lo hace  por trozos. Además en nuestro caso necesitamos añadir todos los archivos  comprimidos a un solo archivo, por lo que la mejor opción es mantener el  archivo comprimido en memoria.</p>
                <p>Ahora veamos la  declaración del ObjetoZLIB : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoZLIB", "Archivo : ObjetoZLIB.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoZLIB.h", "ObjetoZLIB"); ?>
                <p>Este objeto tiene dos  métodos públicos : Comprimir y Descomprimir.</p>
                <p>Veamos la función Comprimir  :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDComprimir", "Archivo : ObjetoZLIB.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoZLIB.cpp", "ObjetoZLIB::Comprimir"); ?>
                <p>Esta función abre el  archivo a comprimir, lee el archivo a partes, comprime cada parte, y introduce  las partes dentro del ContenedorBinario.</p>
                <p>Y por último la función  Descomprimir :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDDescomprimir", "Archivo : ObjetoZLIB.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoZLIB.cpp", "ObjetoZLIB::Descomprimir"); ?>
                <p>Esta función abre el  archivo a descomprimir, lee el ContenedorBinario por partes, descomprime cada  parte, y va guardando las partes descomprimidas en el path destino.</p>
                <p>Con esto ya tenemos  todos los requisitos para crear el instalador.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_10">3.10  Terminando el Instalador</a></p>            
    
                <a class="Boton Centrado" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     