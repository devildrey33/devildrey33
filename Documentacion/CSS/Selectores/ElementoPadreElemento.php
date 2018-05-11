<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector nos permite especificar que queremos seleccionar un elemento que está inmediatamente precedido de otro elemento.</p>
<p>Estos elementos pueden ser etiquetas, clases, ID's, o cualquier tipo de selector permitido.</p>
<div class='nota'>El elemento2 tiene que ser hijo del elemento1, es decir que si el elemento2 está dentro de un tercer elemento que a su vez está dentro de un elemento1 este no será seleccionado.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'><i>.Elemento > #Elemento</i> { };</pre>
