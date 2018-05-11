<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta porpiedad nos permite especificar el area donde se pintara el fondo.</p>
<div class='nota'>Para imagenes de fondo, esta propiedad cortara la imagen si esta sobresale del rectangulo especificado.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>background-clip: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>border-box</b></td>
        <td>El fondo se pintara desde el rectangulo del borde. <b>(por defecto)</b></td>
    </tr>
    <tr>
        <td><b>padding-box</b></td>
        <td>El fondo se pintara desde el rectangulo del padding.</td>
    </tr>
    <tr>
        <td><b>content-box</b></td>
        <td>El fondo se pintara desde el rectangulo del contenido.</td>
    </tr>
</table><br />
