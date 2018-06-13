<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite definir la posición inicial de la imagen de fondo.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>background-position: <b>valores</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>Palabras clave</b></td>
        <td>Para estos valores hay que definir 2 palabras clave, una para la posicion horizontal (<code>left</code>, <code>right</code>, <code>center</code>) y otra para la posición vertical (<code>top</code>, <code>bottom</code>, <code>center</code>). Si se omite una de las dos palabras, la otra se asignará automaticamente como <code>center</code>.</td>
    </tr>
    <tr>
        <td><b>Porcentaje</b></td>
        <td>Para los porcentajes podemos definir 2 valores del 0% al 100%. Si omites el valor vertical, por defecto se asignará al 50%.</td>
    </tr>
    <tr>
        <td><b>Píxeles</b></td>
        <td>Para los píxeles podemos definir 2 valores, uno para la distancia desde la izquierda, y otro para la distancia desde arriba. Si omites el valor vertical, por defecto se asignará al 50%.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	La posición inicial para la imagen de fondo se hereda del elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
<div class='nota'>Es posible mezclar valores en porcentajes y en píxeles.</div>
