<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector nos permite seleccionar los enlaces visitados.</p>
<div class='nota'>Para los enlaces que no se hayan visitado debes usar el selector "<a href=":link" target="_blank">:link</a>".</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='SintaxisSintaxis'>:visited { };</pre>
