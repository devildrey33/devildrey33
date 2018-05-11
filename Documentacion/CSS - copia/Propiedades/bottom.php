<p>Esta propiedad nos permite especificar la posición del objeto partiendo desde abajo.</p>
<p>La propiedad <code>bottom</code> solo tiene efeto si la propiedad <a href="position" target="_blank">position</a> tiene un valor que no sea <code>static</code>.</p>
<p>Cuando la propiedad <a href="position">position</a> es <code>relative</code> la propiedad <code>bottom</code> parte desde la posición original (<code>static</code>) del objeto, es decir <code>bottom:-10px</code> bajaria el objeto 10 pixeles.</p>
<p>Cuando la propiedad <a href="position">position</a> es <code>abolute</code> la propiedad <code>bottom</code> parte desde la posición del primer objeto padre con una posición <b>NO</b> estatica.</p>
<p>Cuando la propiedad <a href="position">position</a> es <code>fixed</code> la propiedad <code>bottom</code> parte desde el borde inferior de la ventana.</p>

<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>bottom: <i>valor</i>;</pre>
<table class='Tabla'>
    <tr>
        <td>valor</td>
        <td>Especifica la distancia desde abajo hacia el objeto. La distancia se debe especificar con cualquier tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a>.</td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS2.</p>
