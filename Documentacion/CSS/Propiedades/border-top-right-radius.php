<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad permite establecer la figura del borde superior derecho de forma que se pueda redondear el borde.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'><code style="display:table; float:left; padding-right:20px">border-top-right-radius: <i>ValorVH</i>;
border-top-right-radius: ValorV ValorH;
</code>
<code style="display:table; float:right; color:#999">/* 1 valor para todos los definir tanto vertical como horizontal. */
/* 2 valores : vertical, horizontal. */
</code>
</pre>
<p>Los dos valores definen los radios de una cuarta parte de la elipse que dan forma a la esquina del borde. </p>
<table class='Tabla'>
    <tr>
        <td><b>ValorH</b></td>
        <td>Define el radio horizontal del borde. Se puede especificar en pixeles o en porcentaje.</td>
    </tr>
    <tr>
        <td><b>ValorV</b></td>
        <td>Define el radio vertical del borde. Se puede especificar en pixeles o en porcentaje.</td>
    </tr>
</table><br />
