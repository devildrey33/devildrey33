<?php
include($_SERVER['DOCUMENT_ROOT'] . "/Web/devildrey33.php");
$Base = new devildrey33;

if (!isset($_POST["SinPlantilla"])) {
    $Base->InicioPlantilla(basename(__FILE__), "Test HTML", "");
}
?>

<!-- -[INICIO devildrey33.char]-
abc
-[FIN devildrey33.char]- --> 




<div style='padding:10px'>
    
   
    
    <h2>C / Cpp</h2>
<!-- -[INICIO devildrey33.Cpp]-
#ifndef EJEMPLO_H     // Si no esta definido EJEMPLO_H
    #define EJEMPLO_H /* definimos EJEMPLO_H */
    #define Macro(x) x // Marco simple
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
    <?php $Base->PintarCodigo->PintarArchivoC("Cpp", "Test C/Cpp", basename(__FILE__), "Cpp"); ?>
    <ul>
        <li><linea cid="Cpp" l="1">Línea 1</linea></li>
        <li><linea cid="Cpp" l="5">Línea 5</linea></li>
        <li><linea cid="Cpp" l="9">Línea 9</linea></li>
        <li><linea cid="Cpp" l="12">Línea 12</linea></li>
        <li><linea cid="Cpp" l="14">Línea 14</linea></li>
        <li><linea cid="Cpp" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
    </ul>
    
        
</div>
<?php
if (!isset($_POST["SinPlantilla"]))
    $Base->FinPlantilla();
?>





