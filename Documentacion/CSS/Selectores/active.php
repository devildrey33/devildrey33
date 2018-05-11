<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector apunta al enlace que se está presionando con el mouse, una vez soltado el botón del mouse el enlace volverá al estado "<a href=":visited" target="_blank">:visited</a>" o "<a href=':link' target="_blank">:link</a>".</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>:active { };</pre>
