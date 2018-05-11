<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector mira que el atributo sea exactamente el valor especificado. Si ademas del valor especificado justo despues se encuentra el caracter "-" (U+002D) este selector tambien lo da por válido.</p>
<p>Estos elementos pueden ser etiquetas, clases, ID's, o cualquier tipo de selector permitido.</p>
<div class='nota'>El valor debe estar delimitado por un guion (no he encontrado ninguna referencia sobre esto, pero es la única forma en que he conseguido que funcione).</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>Elemento[Atribut|=Valor] { };</pre>
