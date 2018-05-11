<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Propiedad que permite modificar la posición de la perspectiva 3d con la que mostrarán todos sus objetos hijos.</p>
<div class='nota'>Esta propiedad puede combinarse con la propiedad <a href="perspective-origin" target="_blank">perspective-origin</a>.</div>
<br />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>perspective-origin: X Y;</pre>
<table class='Tabla'>
    <tr>
        <td><b>X</b></td>
        <td>Valor que define el eje X, y puede ser : <code>left</code>, <code>center</code>, <code>right</code>, o un valor con una <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> especifica.</td>
        <td>(por defecto <b>50%</b>)</td>
    </tr>
    <tr>
        <td><b>Y</b></td>
        <td>Valor que define el eje Y, y puede ser : <code>top</code>, <code>center</code>, <code>bottom</code>, o un valor con una <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> especifica.</td>
        <td>(por defecto <b>50%</b>)</td>
    </tr>
</table><br />
<div class='nota'>Solo es aplicable para transformaciones 3D.</div>
