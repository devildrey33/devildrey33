<p>Esta propiedad nos permite especificar el color del borde del objeto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'><code style="display:table; float:left; padding-right:20px">border-color: <i>valor</i>;
border-color: TopBottom LeftRight;
border-color: Top LeftRight Bottom;
border-color: Top Left Bottom Right;
</code>
<code style="display:table; float:right; color:#999">/* 1 valor para todos los costados. */
/* 2 valores : arriba y abajo, derecha y izquierda. */
/* 3 valores : arriba, derecha y izquierda, abajo.*/
/* 4 valores : arriba, derecha, abajo, izquierda. */
</code>
</pre>

<div class='nota'>Podemos especificar hasta 4 valores (uno por cada costado).<br />
Si especificamos solo un valor, se aplicara a los 4 costados.<br />
Si especificamos 2 valores, el primer valor se asignara a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
Si especificamos 3 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
Si especificamos 4 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
</div>
<table class='Tabla'>
    <tr>
        <td><b>Color</b></td>
        <td>Especifica el color del borde. Para mas información sobre los colores en CSS visita este enlace <a href="/Doc/CSS/Colores/" target="_blank">Referencia CSS : Colores</a></td>
    </tr>
    <tr>
        <td><b>transparent</b></td>
        <td>Especifica que el color es transparente. <div class='nota'>Este valor no está soportado en IE6 o inferiores.</div> </td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Especifica que el color debe ser heredado desde su objeto padre. <div class='nota'>Este valor no está soportado en IE7 o inferiores. En IE8 requiere la declaración de un !DOCTYPE.</div></td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS1.</p>