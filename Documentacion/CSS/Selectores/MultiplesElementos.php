<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector permite aplicar el mismo estilo a varios elementos.</p>
<p>Estos elementos pueden ser etiquetas, clases, ID's, o cualquier tipo de selector permitido.</p>
<div class='nota'>Este ejemplo muestra cómo aplicar el mismo estilo a 2 elementos, pero se puede utilizar con un número infinito de elementos, basta con delimitar cada elemento con una coma ",".</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'><i>.Elemento, #Elemento, Elemento:hover</i> { };</pre>
