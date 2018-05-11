<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector selecciona todas las etiquietas que tengan la clase especificada.</p>
<p>Este selector es uno de los mas comunes, nos permite seleccionar todas las etiquetas que tengan cómo clase el nombre especificado.<br />
Para referirnos a el debemos utilizar siempre un punto delante del nombre "."</p>
<div class='nota'>Podemos tener tantas etiquetas cómo queramos con el mismo nombre de clase.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>.MiClase { };</pre>
