<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Propiedad que permite establecer si los elementos hijos preservaran su posición 3D.</p>
<br />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>transform-style: <i>valor</i>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>flat</b></td>
        <td>Los elementos hijos NO preservaran su posición 3D. <b>(Valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>preserve-3d</b></td>
        <td>Los elementos hijos preservaran su posición 3D.</td>
    </tr>

</table><br />
<div class='nota'>Todas las funciones 3d requieren una perspectiva en el mismo objeto, o en el contenedor padre.</div>
