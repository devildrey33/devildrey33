<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite definir que tipo de curva de velocidad usara la animación. Para entenderlo mejor vamos a imaginar una animación que mueve 10 píxeles un objeto durante 10 segundos, una curva "<i>linear</i>" moveria 1 pixel en cada segndo, pero por ejemplo si usamos "<i>ease-in</i>" los primeros segundos se movera mas lenta, y luego continuara de forma normal.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>animation-timing-function: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>linear</b></td>
        <td>La animación tiene la misma velocidad en todo momento.</td>
        <td>cubic-bezier(1, 1, 1, 1)</td>
    </tr>
    <tr>
        <td><b>ease</b></td>
        <td>La animación empieza lenta, luego va rápida, y temina aun más lenta. <b>(Por defecto)</b></td>
        <td>cubic-bezier(0.25, 0.1, 0.25, 1)</td>
    </tr>
    <tr>
        <td><b>ease-in</b></td>
        <td>La animación empieza lenta.</td>
        <td>cubic-bezier(0.42, 0, 1, 1)</td>
    </tr>
    <tr>
        <td><b>ease-out</b></td>
        <td>La animación termina lenta.</td>
        <td>cubic-bezier(0, 0, 0.58, 1)</td>
    </tr>
    <tr>
        <td><b>ease-in-out</b></td>
        <td>La animación empieza y termina lenta.</td>
        <td>cubic-bezier(0.42, 0, 0.58, 1)</td>
    </tr>
    <tr>
        <td><b>cubic-bezier(d,d,d,d)</b></td>
        <td>Define tu propia curva de velocidad, los valores posibles son de 0 a 1.</td>
        <td> </td>
    </tr>
</table><br />
