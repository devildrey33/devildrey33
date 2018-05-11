<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite generar contenido para un objeto con la ayuda de los selectores ::before y ::after.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>
    content : '<b>string</b>;'<br />
    content : '<b>url(http://web.url)</b>;'<br />
    content : '<b>string</b>;'<br />
    content : '<b>string</b>;'<br />
    content : '<b>string</b>;'<br />
</pre>
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>Nada.</td>
    </tr>
    <tr>
        <td><b>String</b></td>
        <td>Cadenas de caracteres.</td>
    </tr>
    <tr>
        <td><b>url()</b></td>
        <td>Urls por ejemplo : <code>content : url(http://devildrey33.es);</code></td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	El color se hereda del elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
