<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta prpopiedad nos permite especificar una imagen para el marcador del item.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>list-style: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><a href="list-style-type"><b>list-style-type</b></a></td>
        <td>Especifica el tipo de marcación para la lista. El valor por defecto es <code>disc</code>.</td>
    </tr>
    <tr>
        <td><a href="list-style-position"><b>list-style-position</b></a></td>
        <td>Especifica si la marca estara en el interior o el exterior de los items de la lista. El valor por defecto es <code>outside</code>.</td>
    </tr>
    <tr>
        <td><a href="list-style-image"><b>list-style-image</b></a></td>
        <td>Permite especificar una imagen para utilizarla como marca. El valor por defecto es <code>none</code>.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>        
        </td>
    </tr>
</table><br />
