<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite definir como se comportara la imagen de fondo cuando el usuario utiliza la barra de scroll.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>background-attachment: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>fixed</b></td>
        <td>La imagen se quedara estatica en la misma posición de la ventana. Por mucho que movamos el scroll siempre la veremos en la misma posición.</td>
    </tr>
    <tr>
        <td><b>scroll</b></td>
        <td>La imagen se desplazara con el scroll y quedara como fija para todo el documento. Al desplazar el scroll una parte de la imagen quedara oculta. <b>(Por defecto)</b></td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	El comportamiento del scroll se hereda del elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
