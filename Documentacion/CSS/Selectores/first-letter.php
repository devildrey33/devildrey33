<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector apunta a la primera letra del elemento especificado.</p>
<div class='nota'>Solo podemos utilizar las siguientes propiedades con este selector :</nota>
<ul style='display:table'>
    <li>propiedades de la fuente</li>
    <li>propiedades del color</li>
    <li>propiedades del fondo</li>
    <li>propiedades del margen</li>
    <li>propiedades del relleno (padding)</li>
    <li>propiedades del borde</li>
    <li><a href='/RefCSS/Propiedades/text-decoration' target="_blank">text-decoration</a></li>
    <li><a href='/RefCSS/Propiedades/vertical-align' target="_blank">vertical-align</a> (solo si el <a href="/RefCSS/Propiedades/float" target="_blank">float</a> está asígnando a '<code>none</code>')</li>
    <li><a href='/RefCSS/Propiedades/text-transform' target="_blank">text-transform</a></li>
    <li><a href='/RefCSS/Propiedades/line-height' target="_blank">line-height</a></li>
    <li><a href='/RefCSS/Propiedades/float' target="_blank">float</a></li>
    <li><a href='/RefCSS/Propiedades/clear' target="_blank">clear</a></li>
</ul></div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>::first-letter { };</pre>
