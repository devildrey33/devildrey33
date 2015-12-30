<p>Esta propiedad nos permite definir que tipo de curva de velocidad usara la transición. Para entenderlo mejor vamos a imaginar una animación que mueve 10 pixeles un objeto durante 10 segundos, una curva "<i>linear</i>" moveria 1 pixel en cada segndo, pero por ejemplo si usamos "<i>ease-in</i>" los primeros segundos se movera mas lenta, y luego continuara de forma normal.</p>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>transition-timing-function: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>linear</b></td>
        <td>La transición tiene la misma velocidad en todo momento.</td>
        <td>cubic-bezier(1, 1, 1, 1)</td>
    </tr>
    <tr>
        <td><b>ease</b></td>
        <td>La transición empieza lenta, luego va rápida, y temina aun más lenta. <b>(Por defecto)</b></td>
        <td>cubic-bezier(0.25, 0.1, 0.25, 1)</td>
    </tr>
    <tr>
        <td><b>ease-in</b></td>
        <td>La transición empieza lenta.</td>
        <td>cubic-bezier(0.42, 0, 1, 1)</td>
    </tr>
    <tr>
        <td><b>ease-out</b></td>
        <td>La transición termina lenta.</td>
        <td>cubic-bezier(0, 0, 0.58, 1)</td>
    </tr>
    <tr>
        <td><b>ease-in-out</b></td>
        <td>La transición empieza y termina lenta.</td>
        <td>cubic-bezier(0.42, 0, 0.58, 1)</td>
    </tr>
    <tr>
        <td><b><a href="/Doc/CSS/Funciones/cubic-bezzier()">cubic-bezier</a>(d,d,d,d)</b></td>
        <td>Define tu propia curva de velocidad, los valores posibles son de 0 a 1.</td>
        <td> </td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad está soportada por todos los navegadores compatibles con CSS3.</p>
