<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad se usa para especificar el comportamiento de las propiedades del elemento animado a la hora de empezar y de terminar la animación.</p>
<p>Por defecto las animaciones CSS solo afectan al elemento desde que el primer keyframe es ejecutado y hasta que el ultimo keyframe es ejecutado.<div class='nota'><a href="animation-delay">animation-delay</a> termina justo al empezar el primer keyframe.</div></p>

<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>animation-fill-mode: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>La animación no aplicara ningún estilo al elemento antes y despues de ser ejecutada. <b>(Valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>forwards</b></td>
        <td>Una vez terminadas todas las iteraciones de la animación, el elemento obtendrá los valores finales de la animación.</td>
    </tr>
    <tr>
        <td><b>backwards</b></td>
        <td>Antes de empezar la animación (y el delay), el elemento obtendrá los valores iniciales de la animación.</td>
    </tr>
    <tr>
        <td><b>both</b></td>
        <td>Antes de empezar la animación (y el delay), el elemento obtendrá los valores iniciales de la animación. Y una vez terminadas todas las iteraciones de la animación, el elemento obtendrá los valores finales de la animación.</td>
    </tr>
    <tr>
        <td><b>initial</b></td>
        <td>Asigna la propiedad a su valor por defecto.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>        
        </td>
    </tr>
</table><br />
