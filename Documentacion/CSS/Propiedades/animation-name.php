<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad se usa para enlazar un <a href="/Doc/CSS/Reglas/@keyframes" target="_blank">@keyframes</a> especifico a la animación.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>animation-name: <b>NombreKeyframe | none</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>NombreKeyframe</b></td>
        <td>Especifica el nombre del <a href="/Doc/CSS/Reglas/@keyframes" target="_blank">keyframe</a> que queremos asociar.</td>
    </tr>
    <tr>
        <td><b>none</b></td>
        <td>Especifica que no hay animación (se puede usar para finalizar la animación y volver a los valores originales).</td>
    </tr>
</table><br />
