<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector nos permite seleccionar todas los elementos que dentro del mismo padre están preceditos de otro elemento.</p>
<p>Estos elementos pueden ser etiquetas, clases, ID's, o cualquier tipo de selector permitido.</p>
<div class='nota'>Todos los Elemento2 que se encuentren después del Elemento1 serán seleccionados.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'><i>Elemento ~ ElementoPrecedido</i> { };</pre>
