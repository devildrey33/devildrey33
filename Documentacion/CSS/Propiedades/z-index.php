<p>Esta propiedad nos permite especificar el orden de la capa / objeto.</p>
<div class='nota'>Solo funciona con objetos que tengan la propiedad <code>position</code> a : <code>absolute</code>, <code>relative</code>, y <code>fixed</code></div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>z-index: <b>posición</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>auto</b></td>
        <td>El navegador calculara su posición, normalmente los objetos creados posteriormente quedan hacia adelante. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><i><b>posición</b></i></td>
        <td>Especifica un valor para posicionar el objeto. Este valor tambien puede ser negativo.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i>.</div></td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS2.</p>
