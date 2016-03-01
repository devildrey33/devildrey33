<?php 
    /* Script per tabular codi d'un svg comprimit/minificat. */
    if (isset($_GET["a"]))  $Arxiu = $_GET["a"];
    else                    $Arxiu = "prova.svg";

$domxml = new DOMDocument('1.0');
$domxml->preserveWhiteSpace = false;
$domxml->formatOutput = true;
/* @var $xml SimpleXMLElement */
$domxml->load($Arxiu);
$domxml->save($Arxiu.".separat.svg");    
header('Location: '.$Arxiu.".separat.svg");
    
/*    $Codi = file_get_contents($Arxiu);
    $Res = str_replace("><", ">
<", $Codi);
file_put_contents($Arxiu.".separat.svg", $Res);
echo $Res;*/
?>