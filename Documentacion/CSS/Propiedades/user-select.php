<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad permite deshabilitar la selección con el mouse. Hasta hace poco los navegadores permitian la selección con el mouse en toda la pagina, pero ahora con esta propiedad podemos crear controles, imagenes y texto que no se puedan seleccionar.</p>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>user-select: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>Des-habilita totalmente la selección en el objeto actual.</td>
    </tr>
    <tr>
        <td><b>text</b></td>
        <td>Permite seleccionar unicamente el texto.</td>
    </tr>
    <tr>
        <td><b>all</b></td>
        <td>Permite la selección sin restricciones. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>element</b></td>
        <td>Permite la selección unicamente a partir del objeto actual. Soportada unicamente en Firefox 21 y IE 10.</td>
    </tr>
</table><br />
