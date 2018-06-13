<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<div>
	<img src='/Graficos/border-image-slice.png' alt='Imagen con 3 filas y 3 columnas' style="float:right; margin-right:20px;">
	<p>Esta propiedad nos permite especificar la porción de la imagen que se va a utilizar para el borde. Para entendernos mejor tenemos que pensar en una imagen dividida en 9 partes (3 filas y 3 columnas).</p>
	<p>Por ejemplo la imagen de la derecha tiene 90 píxeles de ancho y de alto, por lo tanto si la dividimos equitativamente en 9 partes cada celda ocupara 30x30.</p>
</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'><code style="display:table; float:left; padding-right:20px">border-image-slice: <i>ValorTRBL</i>;
border-image-slice: TopBottom LeftRight;
border-image-slice: Top LeftRight Bottom;
border-image-slice: Top Left Bottom Right;
</code>
<code style="display:table; float:right; color:#999">/* 1 valor para todos los costados. */
/* 2 valores : arriba y abajo, derecha y izquierda. */
/* 3 valores : arriba, derecha y izquierda, abajo.*/
/* 4 valores : arriba, derecha, abajo, izquierda. */
</code></pre>
<div class='nota'>Podemos especificar hasta 4 valores (uno por cada costado).<br />
Si especificamos solo un valor, se aplicará a los 4 costados.<br />
Si especificamos 2 valores, el primer valor se asignará a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
Si especificamos 3 valores, el primer valor se asignará al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
Si especificamos 4 valores, el primer valor se asignará al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
</div><br />
<table class='Tabla'>
    <tr>
        <td><b>Valor</b></td>
        <td>Permite definir el tamaño que se extraerá de la imagen origen. Se puede especificar un valor numérico o un porcentaje, los valores numéricos representarán píxeles para imagénes rasterizadas, y coordenadas para las imagenes vectorizadas.</td>
    </tr>
</table><br />
