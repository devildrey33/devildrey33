<p>Esta propiedad permite especificar una o mas sombras para la caja / contenedor. Cada sombra se define con un maximo de 6 valores, los dos primeros son la posición horizontal y vertical de la sombra, luego el desenfoque y la propagación, y por ultimo el color y el tipo de sombra.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>box-shadow: <b>Horizontal</b>&nbsp;<b>Vertical</b> [opcional] <b>Desenfoque</b> [opcional] <b>Dispersion</b> [opcional] <b>Color</b> [opcional] Tipo;</pre>
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
        <td><b>Desenfoque</b>&nbsp;[opcional]</td>
        <td>Distancia del desenfoque.</td>
    </tr>
    <tr>
        <td><b>Dispersión</b>&nbsp;[opcional]</td>
        <td>Tamaño de dispersion para la sombra.</td>
    </tr>
    <tr>
        <td><b>Color</b>&nbsp;[opcional]</td>
        <td>Color para la sombra. Para mas información sobre los colores en CSS visita este enlace <a href="/Doc/CSS/Colores/" target="_blank">Referencia CSS : Colores</a>.</td>
    </tr>
    <tr>
        <td><b>Tipo</b>&nbsp;[opcional]</td>
        <td>Tipo de sombra que puede ser <code>inset</code> o nada. Por defecto no es nada por lo que la sombra se hace hacia fuera.</td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS3, además también se soporta en Internet Explorer 9.</p>
