<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite si la animación debe ejecutarse o estar pausada. Ojo porque una vez termina la animación por mucho que se le asigne el estado "<i>running</i>" no será reactivada.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>animation-play-state: <b>paused | running</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>paused</b></td>
        <td>Especifica que la animación se pausará.</td>
    </tr>
    <tr>
        <td><b>running</b></td>
        <td>Especifica que la animación se reproducirá. <b>(Esta es la opción por defecto)</b></td>
    </tr>
</table><br />
