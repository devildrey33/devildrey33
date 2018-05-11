<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector es uno de los mas comunes, nos permite seleccionar todas las etiquetas que tengan cómo ID el nombre especificado.</p>
<p>Para referirnos a el debemos utilizar siempre una parrilla delante del nombre "#"</p>
<div class='nota'>No es NADA recomendable tener mas de una etiqueta con la misma ID, para ese propósito están las clases, las ID son mas para identificar un único objeto.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>#MiID { };</pre>
