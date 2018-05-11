<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector nos permite seleccionar los enlaces.</p>
<div class='nota'>Los enlaces visitados responden al selector <a href=":visited" target="_blank">:visited</a>, por lo que si quieres cambiar el color del texto del enlace debes tener en cuenta que hay el color normal <code>:link</code> y el color para los enlaces visitados <a href=":visited" target="_blank">:visited</a>.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>:link { };</pre>
