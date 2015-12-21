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
    
    
    <h2>PHP</h2>
<!-- -[INICIO devildrey33.PHP]-
/* Comentario multilinea con alguna trampa "if" '\\' /* //
 */
function MiFuncion($Parametro = "NADA", $Valor = 0) {
    // Comentario hasta el final de la linea con alguna trampa /* "" { }
    $Texto = "Cadena de caracteres con comillas dobles y algunas trampas /* if \\";
    switch ($Texto) {
        case 33 :
            return false;
        case "Texto" :
            return true;
        case 'Texto' :
            return true;
        default :
            break;
    }
    echo substr($Texto, 0, 5);
}

class Objeto {
    public function e($Var){ echo $Var."e"; }
}
 -[FIN devildrey33.PHP]- -->
    <?php $Base->PintarCodigo->PintarArchivoPHP("PHP", "Test PHP", basename(__FILE__), "PHP"); ?>
    <ul>
        <li><linea cid="PHP" l="20">Línea 20</linea></li>
        <li><linea cid="PHP" l="5">Línea 5</linea></li>
        <li><linea cid="PHP" l="9">Línea 9</linea></li>
        <li><linea cid="PHP" l="12">Línea 12</linea></li>
        <li><linea cid="PHP" l="15">Línea 15</linea></li>
        <li><linea cid="PHP" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
    </ul>
    
        
</div>
<?php
if (!isset($_POST["SinPlantilla"]))
    $Base->FinPlantilla();
?>





