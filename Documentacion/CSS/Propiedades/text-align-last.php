<p>Esta propiedad nos permite especificar como se alineará la ultima linea del texto.</p>
<div class='nota'>Para utilizar esta propiedad debes establecer el valor de la propiedad <a href="text-align" target="_blank">text-align</a> a <code>justify</code>.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>text-align-last: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td style='min-width:110px'><b>auto</b></td>
        <td>Si <a href="text-align">text-align</a> es <code>justify</code>, la ultima línea se alineara a la izquierda. En caso de que el valor no sea <code>justify</code>, se usara el valor de <a href="text-align">text-align</a>. <b>(valor por defeto)</b></td>
    </tr>
    <tr>
        <td><b>left</b></td>
        <td>La ultima línea se alineará hacia la izquierda.</td>
    </tr>
    <tr>
        <td><b>right</b></td>
        <td>La ultima línea se alineará hacia la derecha.</td>
    </tr>
    <tr>
        <td><b>center</b></td>
        <td>La ultima línea se centrará.</td>
    </tr>
    <tr>
        <td><b>start</b> <i>(CSS3)</i></td>
        <td>La ultima línea se alineará al principio, basandose en la dirección del texto. En castellano vendria a ser lo mismo que <code>left</code>.</td>
    </tr>
    <tr>
        <td><b>end</b> <i>(CSS3)</i></td>
        <td>La ultima línea se alineará al final, basandose en la dirección del texto. En castellano vendria a ser lo mismo que <code>right</code>.</td>
    </tr>
    <tr>
        <td><b>justify</b> <i>(CSS3)</i></td>
        <td>La ultima línea se justificara adaptandose al ancho disponible. </td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada parcialmente por IE 10 y por Firefox.</p>
<p>En FireFox requiere el prefijo <code>-moz-</code>, PERO la pripiedad javascript <code>mozTextAlignLast</code> no funciona.</p>
