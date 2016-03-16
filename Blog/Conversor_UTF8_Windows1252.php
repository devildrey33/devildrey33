<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Conversor UTF8 - Windows1252");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="UTF8 a Windows1252">
        <meta name="keywords" content="Conversor UTF8 a CP1252">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Conversor UTF8 - Windows1252", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Conversor UTF8 - Windows1252");
        
        ?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ConversorUTF8-Windows1252.png" alt="Conversor UFT8, Windows1252" />
                <p>Este 'conversor' es una aplicación que me facilita la vida a la hora de convertir archivos de código <b>cpp</b> y <b>h</b> recursivamente de una codificación a otra.</p>
                <p>Lo bueno que tiene esta aplicación es que convierte recursivamente todos los archivos de código que pueda contener un directorio (incluyendo sus subdirectorios).</p>
                <p>Por otra parte no tiene interface grafico, y es una simple aplicación de consola. Además guarda los archivos originales con la extensión .OLD</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>Este proyecto consiste en dos simples aplicaciones que convierten todos los archivos C, Cpp y H del directorio donde se encuentren ubicados los ejecutables.</p>
                <p>La razón principal por la que se creó el proyecto es porque la mayoría de mi código en C/C++ se ha creado bajo VisualStudio, y este por defecto guarda todos los archivos bajo la codificación Windows-1252 en mi PC. El problema viene cuando hay que documentar un código utilizando Doxygen, e incluir esta documentación en un sitio web el cual trabaja con la codificación UTF8.</p>
                <p>En principio no es un problema muy grave si el código consiste en un par de archivos, ya que desde el mismo VisualStudio se puede cambiar la codificación de los archivos, pero por ejemplo con la <a href="DWL.php">DWL</a> existen más de 175 archivos de código, y cambiar la codificación uno a uno puede terminar en una tarde tediosa, que además puede acabar siendo una pérdida de tiempo total.</p>
                <p>Por ello acabe por hacer este proyecto que consiste en 2 aplicaciones : <strong>UTF8aWindows1252.exe</strong> y <strong>Windows1252aUTF8.exe</strong></p>
                <p>Lo que hacen es bastante simple, ya que escanean recursivamente el directorio donde se encuentran los ejecutables, y todos los archivos que encuentran con la extensión C, CPP y H son leídos en memoria y re-escritos a la codificación que se requiera.</p>
                <p>Por razones de seguridad los archivos originales se renombran añadiéndoles la extensión .OLD de forma de que si hay algún problema puedan ser recuperados.</p>
                <p>El código  fuente viene todo en el archivo <strong>UTF8aWindows1252.cpp</strong> para los dos conversores.</p>
                <p>La cosa es simple, si deseas compilar el conversor UTF8 a Windows1252, el principio del archivo <strong>UTF8aWindows1252.cpp</strong> debería quedar así :</p>

                <?php 
/* -[INICIO devildrey33.IDC1]-
#define UTF8_A_WINDOWS_1252  0
#define WINDOWS_1252_A_UTF8  1

#define CONVERSION  UTF8_A_WINDOWS_1252      // Conversor UTF8 a Windows1252
// #define CONVERSION  WINDOWS_1252_A_UTF8   // Conversor Windows1252 a UTF8
-[FIN devildrey33.IDC1]- */                
                $Base->PintarCodigo->PintarArchivoC("IDC1", "De UTF8 a Windows 1252", basename(__FILE__), "IDC1"); 
                ?>
                
            	<p>Si por el contrario quieres compilar el conversor Windows1252 a UTF8 , deberás dejar el principio del archivo <strong>UTF8aWindows1252.cpp</strong> así :</p>
            	<?php 
/* -[INICIO devildrey33.IDC2]-
#define UTF8_A_WINDOWS_1252  0
#define WINDOWS_1252_A_UTF8  1

// #define CONVERSION  UTF8_A_WINDOWS_1252    // Conversor UTF8 a Windows1252
#define CONVERSION  WINDOWS_1252_A_UTF8       // Conversor Windows1252 a UTF8
-[FIN devildrey33.IDC2]- */                
                $Base->PintarCodigo->PintarArchivoC("IDC2", "De Windows 1252 a UTF8", basename(__FILE__), "IDC2"); ?>

                <div class='nota'>Este proyecto viene preparado para compilar con VisualStudio 2010, si vas a usar una versión más antigua deberás crearte un proyecto de consola y añadir el archivo UTF8aWindows1252.cpp a tu proyecto.</div>
                
                

                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/Conversor_UTF8_Windows1252.zip" target="_blank">Descargar conversor UTF8 Windows1252</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Conversor_UTF8_Windows1252.zip" target="_blank">Descargar código fuente</a></td>
                </tr></table>
                                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>