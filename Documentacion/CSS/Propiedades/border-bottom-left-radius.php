<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad permite establecer la figura del borde inferior izquierdo de forma que se pueda redondear el borde.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-bottom-left-radius: <b>ValorH</b>&nbsp;<b>ValorV</b>;</pre>
<div class='nota'>Se puede omitir el <i>ValorV</i>, en ese caso se copiará del <i>ValorH</i>.</div>
<p>Los dos valores definen los radios de una cuarta parte de la elipse que dan forma a la esquina del borde. </p>
<table class='Tabla'>
    <tr>
        <td><b>ValorH</b></td>
        <td>Define el radio horizontal del borde. Se puede especificar en píxeles o en porcentaje.</td>
    </tr>
    <tr>
        <td><b>ValorV</b></td>
        <td>Define el radio vertical del borde. Se puede especificar en píxeles o en porcentaje.</td>
    </tr>
</table><br />
