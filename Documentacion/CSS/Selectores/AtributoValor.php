<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector nos permite seleccionar los elementos que tengan el atributo con el valor especificado.</p>
<p>Estos elementos pueden ser etiquetas, clases, ID's, o cualquier tipo de selector permitido.</p>
<div class='nota'>Se puede especificar un elemento delante del atributo para referirse solo a los elementos con dicho atributo que contengan el valor especificado.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>Elemento[Atributo=Valor] { };</pre>
