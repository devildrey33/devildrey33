<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad se usa para indicar si la animación al llegar al final se debe reiniciar o debe ser invertida. Por ejemplo imaginaros un objeto que se mueve 100 pixeles a la derecha, una vez termine podemos hacer que haga el recorrido a la inversa, o que simplemente no haga nada.</p>
<div class='nota'>Para que alternate funcione la animación debe hacer como minimo 2 iteraciones con "<a href="animate-iteration-count" target="_blank"><i>animate-iteration-count</i></a>".</div>
<br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>animation-direction: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>Valor</b></td>
        <td>Este valor puede ser "<i>normal</i>" para terminar la animación normalmente, o puede ser "<i>alternate</i>" para invertir la animación una vez llegue al final. Por defecto tomra el valor "<i>normal</i>".</td>
    </tr>
</table><br />
