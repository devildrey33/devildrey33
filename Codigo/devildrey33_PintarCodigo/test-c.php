<?php
    include("devildrey33_PintarCodigo.php");
    $PintarCodigo = new devildrey33_PintarCodigo;
?>


<!DOCTYPE HTML>
<html lang='es'>
    <head>
        <title>Test C</title>
        <meta http-equiv='Content-Type' content='text/html; charset=utf-8' />
        <link rel='stylesheet' href='PintarCodigo.css' />
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="PintarCodigo.js"></script>
    </head>
    <body>
        <div style='padding:10px'>
            <h2>C / Cpp</h2>
<!-- -[INICIO devildrey33.Cpp]-
#ifndef EJEMPLO_H          // Si no esta definido EJEMPLO_H
    #define EJEMPLO_H      /* definimos EJEMPLO_H */
    #define Macro(x) x     // Marco simple
    #include <Cabcerea1.h> // Cabecera directorio por defecto
    #include "Cabecera2.h" // Cabecera directorio actual

    /* Comentario multilinea antes de la plantilla
       algunas trampas "String\" if else endif */
    template <typename T> class ClaseHija : public ClasePadre {
      public:
                    ClaseHija(void);
        const T     Funcion(int ValorEntero, wchar_t Caracter);
    }
#endif
-[FIN devildrey33.Cpp]- -->
            <?php $PintarCodigo->PintarArchivoC("Cpp", "Test C/Cpp", basename(__FILE__), "Cpp"); ?>
            <ul>
                <li><linea cid="Cpp" l="1">Línea 1</linea></li>
                <li><linea cid="Cpp" l="5">Línea 5</linea></li>
                <li><linea cid="Cpp" l="9">Línea 9</linea></li>
                <li><linea cid="Cpp" l="12">Línea 12</linea></li>
                <li><linea cid="Cpp" l="14">Línea 14</linea></li>
                <li><linea cid="Cpp" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
            </ul>
        </div>
    </body>
</html>