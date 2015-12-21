<p>Esta propiedad se puede utilizar para especificar todas las propiedades de la animación, excepto la propiedad "<i><a href="animation-play-state">animation-play-state</a></i>".</p>
<p>Podemos especificar hasta 6 propiedades de la animación con esta propiedad : <a href="animation-name"><i>animation-name</i></a>, <a href="animation-duration"><i>animation-duration</i></a>, <a href="animation-timing-function"><i>animation-timing-function</i></a>, <a href="animation-delay"><i>animation-delay</i></a>, <a href="animation-iteration-count"><i>animation-iteration-count</i></a>, y <a href="animation-direction"><i>animation-direction</i></a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'>animation <b>NombreAnimación</b>&nbsp;<b>Duración</b>&nbsp;<b>FunciónTiempo</b>&nbsp;<b>Retraso</b>&nbsp;<b>Iteraciones</b>&nbsp;<b>Dirección</b></pre>
<table class='Tabla'>
    <tr>
        <td><b>NombreAnimación</b></td>
        <td>Especifica el nombre del <a href="/Doc/CSS/Reglas/@keyframes" target="_blank">@keyframe</a> que queremos asociar.</td>
    </tr>
    <tr>
        <td><b>Duración</b></td>
        <td>Duración en segundos (s) o en milisegundos (ms) de la animación.</td>
    </tr>
    <tr>
        <td><b>FunciónTiempo</b></td>
        <td>Especifica la curva de velocidad que se va a usar, que puede ser :<br />
            <table>
                <tr><td><i>linear</i></td> <td>La misma velocidad para toda la animación</td></tr>
                <tr><td><i>ease</i></td> <td>La animación empieza lenta y termina más lenta, pero va rápida durante la mitad. <b>Por defecto</b></td></tr>
                <tr><td><i>ease-in</i></td><td>La animación empieza lenta</td></tr>
                <tr><td><i>ease-out</i></td><td>La animación termina lenta</td></tr>
                <tr><td><i>ease-in-out</i></td><td>La animación empieza y termina lenta</td></tr>
                <tr><td><i>cubic-bezier(v, v, v, v)</i>&nbsp;</td><td>Define tus propios valores en la función cubic-bezier (los valores van de 0 a 1)</td></tr> 
            </table>
        </td>
    </tr>
    <tr>
        <td><b>Retraso</b></td>
        <td>Especifica el tiempo que tarda en arrancar la animación.</td>
    </tr>
    <tr>
        <td><b>Iteraciones</b></td>
        <td>Especifica el numero de veces que la animación debe ser reproducida. (puedes especificar "<i>infinite</i>")</td>
    </tr>
    <tr>
        <td><b>Dirección</b></td>
        <td>Especifica si la animación se alterna/invierte al llegar al final. Valores : "<i>normal</i>" (<b>por defecto</b>), o "<i>alternate</i>" (invertir). </td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores, aunque Chrome, Safari y Opera aun requieren el prefijo <code>-webkit-</code>.</p>
