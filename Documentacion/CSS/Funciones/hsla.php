<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>

<p>Esta funcion define un color utilizando el modelo HSL (<b>H</b>ue, <b>S</b>aturation, <b>L</b>ight) con canal <b>A</b>lpha. La matríz (hue) se expresa en grados (0-360), la saturación y la luminosidad se repesentan en porcentajes (0%-100%), y el canal alpha (transparencia) puede ser un valor desde 0.0 a 1.0.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>hsla(<i>ValorH</i>, <i>ValorS</i>, <i>ValorL</i>, <i>ValorA</i>);</pre>
<table class='Tabla'>
    <tr>
        <td>Valor<b>H</b></td>
        <td>Hue (matríz) puede ser un valor de 0 a 360.</td>
    </tr>
    <tr>
        <td>Valor<b>S</b></td>
        <td>Saturation (saturación) puede ser un porcentaje del 0% al 100%.</td>
    </tr>
    <tr>
        <td>Valor<b>L</b></td>
        <td>Light (luminosidad) puede ser un porcentaje del 0% al 100%.</td>
    </tr>
    <tr>
        <td>Valor<b>A</b></td>
        <td>Canal Alpha, puede ser de 0.0 (transparente) a 1.0 (opaco).</td>
    </tr>
</table><br />

