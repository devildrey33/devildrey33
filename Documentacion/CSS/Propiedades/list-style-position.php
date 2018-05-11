<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta prpopiedad nos permite especificar donde se ubicara la marca de cada item de la lista. La marca se puede ubicar fuera del item (por defecto), o dentro del item.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>list-image-position: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>inside</b></td>
        <td>La marca quedará dentro del <code>li</code>.</td>
    </tr>
    <tr>
        <td><b>outside</b></td>
        <td>La marca quedará fuera del <code>li</code>. Opción por defecto.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>        
        </td>
    </tr>
</table><br />
