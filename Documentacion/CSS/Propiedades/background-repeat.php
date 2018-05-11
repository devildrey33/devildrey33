<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite definir si deseamos repetir la imagen de fondo.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>background-repeat: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>repeat</b></td>
        <td>La imagen se repetira tanto verticalmente como horizontalmente. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>repeat-x</b></td>
        <td>La imagen unicamente se repetira horizontalmente.</td>
    </tr>
    <tr>
        <td><b>repeat-y</b></td>
        <td>La imagen unicamente se repetira verticalmente.</td>
    </tr>
    <tr>
        <td><b>no-repeat</b></td>
        <td>La imagen no se repetira.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	La imagen se repetira segun el elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
