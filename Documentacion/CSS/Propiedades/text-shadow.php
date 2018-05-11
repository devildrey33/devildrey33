<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad permite especificar una o mas sombras para el texto. Cada sombra se define con un maximo de 4 valores, los dos primeros son la posición horizontal y vertical de la sombra, luego el tamaño del difuminado, y por ultimo el color de la sombra.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>text-shadow: <b>Horizontal</b>&nbsp;<b>Vertical</b> [opcional] <b>Difuminado</b> [opcional] <b>Color</b></pre>
<div class='nota'>Los tamaños omitidos se quedaran en 0, el color si se omite se quedara transparente y el tipo en outset.</div>
<table class='Tabla'>
    <tr>
        <td><b>Horizontal</b></td>
        <td>Posición horizontal para la sombra. Se permiten valores negativos, en este caso un valor negativo ira hacia la izquierda.</td>
    </tr>
    <tr>
        <td><b>Vertical</b></td>
        <td>Posición vertical para la sombra. Se permiten valores negativos, en este caso un valor negarivo ira hacia arriba.</td>
    </tr>
    <tr>
        <td><b>Difuminado</b>&nbsp;[opcional]</td>
        <td>Distancia del difuminado.</td>
    </tr>
    <tr>
        <td><b>Color</b>&nbsp;[opcional]</td>
        <td>Color para la sombra. Para mas información sobre los colores en CSS visita este enlace <a href="/Doc/CSS/Colores/" target="_blank">Referencia CSS : Colores</a>.</td>
    </tr>
</table><br />
