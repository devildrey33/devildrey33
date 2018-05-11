<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector selecciona los elementos que el valor del atributo termine con el valor especificado.</p>
<div class='nota'>Se puede especificar un elemento delante del atributo para referirse solo a los elementos con dicho atributo que contengan el valor especificado.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>Elemento[Atributo$=Valor] { };</pre>
