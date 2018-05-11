<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad indica el tiempo que se utilizará para realizar toda la transición.</p>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>transition-duration: <b>Tiempo</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>Tiempo</b></td>
        <td>Tiempo total para realizar la transición, se puede especificar en segundos (s) o milisegundos (ms). Por defecto es 0.</td>
    </tr>
</table><br />
<div class='nota'>Obviamente si no tocamos la duración y por lo tanto el tiempo es 0, no habra transición, y las propiedades se cambiarán al instante.</div>

