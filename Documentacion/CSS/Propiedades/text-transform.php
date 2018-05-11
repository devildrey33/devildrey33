<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar la transformación para el texto en : Mayúsculas, Minúsculas, Primera letra de cada palabra mayúscula. </p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>text-transform: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>Sin transformación. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>capitalize</b></td>
        <td>Todas las palabras con la primera letra en mayúscula, y el resto en minúscula.</b></td>
    </tr>
    <tr>
        <td><b>uppercase</b></td>
        <td>Todo el texto convertido a mayúsculas.</b></td>
    </tr>
    <tr>
        <td><b>lowercase</b></td>
        <td>Todo el texto convertido a minúsculas.</b></td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	La transformación se hereda del elemento padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
