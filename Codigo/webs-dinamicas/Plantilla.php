<?php 

// -[INICIO devildrey33.IniciarPlantilla]-
// Función para iniciar la plantilla (requiere el nombre del archivo, y el titulo del documento)
function IniciarPlantilla($Archivo, $Titulo) {
    // Si no existe el parámetro SinPlantilla es porque se está cargando la web por primera vez
    if (!isset($_POST["SinPlantilla"])) {
        echo "<!DOCTYPE HTML>".
        "<html lang='es'>".
            "<head>".
                "<title>".$Titulo."</title>".                                                           // Titulo
                "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />".                // Codificación UTF8
                "<link rel='stylesheet' href='TutoWebDinamica.css'>".                                   // Archivo con el CSS para la web
                "<script src='//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js'></script>".   // jQuery
                "<script src='TutoWebDinamica.js'></script>".                                           // Archivo con el JS para la web
            "</head>".
            // El body empieza con el atributo cargando (para la animación de carga entre documentos)  
            "<body cargando='true'>".
                // Menu superior fijo para navegar por los enlaces
                "<div id='MenuSuperior'>".
                    /* El atributo archivo se utiliza para saber en que documento estamos
                       y de esta forma poder resaltar el botón del documento actual (todo mediante css) */
                    "<ul archivo='".$Archivo."'>".
                        "<li><a href='Amarillo.php'>Amarillo</a></li>".
                        "<li><a href='Azul.php'>Azul</a></li>".
                        "<li><a href='Verde.php'>Verde</a></li>".
                        "<li><a href='Rojo.php'>Rojo</a></li>".
                        "<li><a href='Blanco.php'>Blanco</a></li>".
                        "<li><a href='Negro.php'>Negro</a></li>".
                    "</ul>".
                "</div>". 
                // Marco donde se cargaran los documentos dinámicos mediante JavaScript
                "<div id='MarcoDinamico'>"; 
    }
    // Datos del archivo que esta usando la plantilla (siempre quedan al principio del MarcoDinamico)
    echo "<div id='InformacionDinamica' archivo='".$Archivo."' titulo='".$Titulo."'></div>";
}
// -[FIN devildrey33.IniciarPlantilla]-

// -[INICIO devildrey33.TerminarPlantilla]-
// Función para terminar la plantilla
function TerminarPlantilla() {
    if (!isset($_POST["SinPlantilla"])) {
        echo    "</div>". // Final del MarcoDinamico
            "</body>".
        "</html>";
    }
}
// -[FIN devildrey33.TerminarPlantilla]-
?>
