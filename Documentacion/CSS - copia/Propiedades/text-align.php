<p>Esta propiedad nos permite especificar como se alineará el texto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>text-align: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>left</b></td>
        <td>El texto se alineará hacia la izquierda. <b>(por defecto si <code><a href="direction">direction</a></code> es <code>ltr</code>)</b>.</td>
    </tr>
    <tr>
        <td><b>right</b></td>
        <td>El texto se alineará hacia la derecha. <b>(por defecto si <code><a href="direction">direction</a></code> es <code>rtl</code>)</b>.</td>
    </tr>
    <tr>
        <td><b>center</b></td>
        <td>El texto se centrará.</td>
    </tr>
    <tr>
        <td><b>justify</b></td>
        <td>El texto se justificara adaptandose al ancho de la línea.</td>
    </tr>
    <tr>
        <td><b>start</b> <i>(CSS3)</i></td>
        <td>El texto se alineará al principio, basandose en la dirección del texto. En castellano vendria a ser lo mismo que <code>left</code>.</td>
    </tr>
    <tr>
        <td><b>end</b> <i>(CSS3)</i></td>
        <td>El texto se alineará al final, basandose en la dirección del texto. En castellano vendria a ser lo mismo que <code>right</code>.</td>
    </tr>
    <tr>
        <td><b>match-parent</b> <i>(CSS3)</i></td>
        <td>Hace lo mismo que <code>inherit</code>, excepto porque obtiene la dirección del texto de este mismo objeto.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	La alineación se hereda del elemento padre. Tambien se obtiene la <code>direction</code> del elemento padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS1. Para las propiedades de CSS3 solo se soportan en Chrome, Firefox y Safari.</p>
