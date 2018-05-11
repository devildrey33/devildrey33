<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Propiedad que permite establecer la parte trasera de un objeto 3D es visible o no.</p>
<br />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>backface-visibility: <i>valor</i>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>visible</b></td>
        <td>La cara trasera es visible. <b>(Valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>hidden</b></td>
        <td>La cara trasera <b>NO</b> es visible.</td>
    </tr>

</table><br />
<div class='nota'>Todas las funciones 3d requieren una perspectiva en el mismo objeto, o en el contenedor padre.</div>
