<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar en que dirección se imprimira el texto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>direction: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>ltr</b> <i>(Left To Right)</i></td>
        <td>De izquierda a derecha, el texto empieza por la izquierda. <b>(por defecto)</b></td>
    </tr>
    <tr>
        <td><b>rtl</b> <i>(Right To Left)</i></td>
        <td>De derecha a izquierda, el texto empieza por la derecha.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	La dirección se hereda del elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
