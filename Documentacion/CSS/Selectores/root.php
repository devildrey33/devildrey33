<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector apunta la raíz del documento, o lo que es lo mismo al elemento HTML.</p>
<div class='nota'>En esencia el selector <code>HTML</code> y el selector <code>:root</code> son lo mismo, pero se suele utilizar el selector <code>:root</code> para definir variables CSS, y el selector <code>HTML</code> para definir las propiedades de la etiqueta HTML.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>:root { };</pre>
