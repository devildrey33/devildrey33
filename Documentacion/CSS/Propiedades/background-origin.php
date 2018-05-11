<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta porpiedad nos permite especificar la posiciñon donde empezara la imagen de fondo.</p>
<div class='nota'>Puede parecer que <code><a href="background-clip" target="_blank">background-clip</a></code> sea igual que esta propiedad, pero no lo es, ya que esta propiedad está mas enfocada a imagenes de fondo.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>background-origin: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>border-box</b></td>
        <td>La imagen de fondo empezara desde el rectangulo del borde.</td>
    </tr>
    <tr>
        <td><b>padding-box</b></td>
        <td>La imagen de fondo empezara desde el rectangulo del padding. <b>(por defecto)</b></td>
    </tr>
    <tr>
        <td><b>content-box</b></td>
        <td>La imagen de fondo empezara desde el rectangulo del contenido.</td>
    </tr>
</table><br />
