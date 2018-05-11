<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Propiedad que permite modificar la distancia de la perspectiva 3d con la que mostrarán todos sus objetos hijos.</p>
<div class='nota'>Esta propiedad puede combinarse con la propiedad <a href="perspective-origin" target="_blank">perspective-origin</a>.</div>
<br />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>perspective: valor;</pre>
<table class='Tabla'>
    <tr>
        <td><b><i>valor</i></b></td>
        <td>Distancia de la perspectiva. Es recomendable especificar el valor en pixeles.</td>
        <td>(por defecto es <b>none</b> / <b>0</b>)</td>
    </tr>
</table><br />
<div class='nota'>Solo es aplicable para transformaciones 3D.</div>
