<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad define como debe repetirse la imagen si el borde es de mayor tamaño.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'><code style="display:table; float:left; padding-right:20px">border-image-repeat: <i>ValorHV</i>;
border-image-repeat: Horizontal Vertical;
</code>
<code style="display:table; float:right; color:#999">/* 1 valor. */
/* 2 valores : Horizontal, Vertical. */
</code></pre>
<table class='Tabla'>
    <tr>
        <td><b>stretch</b></td>
        <td>La imagen será estirada hasta llenar el borde.</td>
    </tr>
    <tr>
        <td><b>repeat</b></td>
        <td>La imagen se repetira hasta llenar el borde.</td>
    </tr>
    <tr>
        <td><b>round</b></td>
        <td>La imagen será estirada hasta llenar el borde. Si la imagen no queda ajustada después de haber repetido un número de veces, la imagen se reajustará a la medida.</td>
    </tr>
</table><br />
