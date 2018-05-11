<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar si los hijos deben mostrarse en la misma línea, o si pueden fluir en varias líneas.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>flex-wrap: Valor;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:120px'><b>nowrap</b></td>
        <td>Los hijos se muestran en la misma línea.</td>
    </tr>
    <tr>
        <td><b>wrap</b></td>
        <td>Los hijos se muestran en varias líneas.</td>
    </tr>
    <tr>
        <td><b>wrap-reverse</b></td>
        <td>Lo mismo que wrap, pero en orden invertido.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.</td>
    </tr>
</table><br />
