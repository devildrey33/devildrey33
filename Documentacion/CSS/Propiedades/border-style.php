<p>Esta propiedad nos permite especificar el estilo del borde del objeto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'><code style="display:table; float:left; padding-right:20px">border-style: <i>valor</i>;
border-style: TopBottom LeftRight;
border-style: Top LeftRight Bottom;
border-style: Top Left Bottom Right;
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
</div><br />
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>Sin borde.</td>
    </tr>
    <tr>
        <td><b>hidden</b></td>
        <td>Borde oculto. Se computa el tamaño del borde en tablas.</td>
    </tr>
    <tr>
        <td><b>dotted</b></td>
        <td>Borde con puntos.</td>
    </tr>
    <tr>
        <td><b>dashed</b></td>
        <td>Borde con rayas.</td>
    </tr>
    <tr>
        <td><b>solid</b></td>
        <td>Borde normal.</td>
    </tr>
    <tr>
        <td><b>double</b></td>
        <td>Borde normal doble.</td>
    </tr>
    <tr>
        <td><b>groove</b></td>
        <td>Borde con un efecto 3D por la parte alta.</td>
    </tr>
    <tr>
        <td><b>ridge</b></td>
        <td>Borde con un efecto 3D por la parte baja.</td>
    </tr>
    <tr>
        <td><b>inset</b></td>
        <td>Borde con un efecto 3D interior.</td>
    </tr>
    <tr>
        <td><b>outset</b></td>
        <td>Borde con un efecto 3D exterior.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE8 e inferiores.</div></td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS1.</p>