<p>Esta propiedad permite asignar el tamaño del borde para la imagen.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'><code style="display:table; float:left; padding-right:20px">border-image-width: <i>ValorTRBL</i>;
border-image-width: TopBottom LeftRight;
border-image-width: Top LeftRight Bottom;
border-image-width: Top Left Bottom Right;
</code>
<code style="display:table; float:right; color:#999">/* 1 valor para todos los costados. */
/* 2 valores : arriba y abajo, derecha y izquierda. */
/* 3 valores : arriba, derecha y izquierda, abajo.*/
/* 4 valores : arriba, derecha, abajo, izquierda. */
</code></pre>
<div class='nota'>Podemos especificar hasta 4 valores (uno por cada costado).<br />
Si especificamos solo un valor, se aplicara a los 4 costados.<br />
Si especificamos 2 valores, el primer valor se asignara a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
Si especificamos 3 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
Si especificamos 4 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
</div>
<br />
<table class='Tabla'>
    <tr>
        <td><b>Valor</b></td>
        <td>Tamaño para el borde de la imagen, se puede especificar cualquier medida de <a href="/Doc/CSS/Unidades/" target="_blank">unidad</a> siempre que no sea negativa.</td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores modernos. Para Internet Explorer solo funciona a partir de la versión 11.</p>
