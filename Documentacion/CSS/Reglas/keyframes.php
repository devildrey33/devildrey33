<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta regla se usa para especificar las fases de la animación.</p>
<p>Podemos añadir fases desde el 0% al 100% de la animación, para entendernos podriamos hacer que en el 0% el fondo sea rojo, y en el 100% sea azul, pero ademas podriamos incluir una fase intermedia al 50% para que el fondo sea verde.</p>
<hr />
<h2>Sintaxis</h2>
<br />
<br />
<pre class='Sintaxis'>@keyframes <b>NombreAnimación</b> { <b>Selector</b> { <b>EstilosCSS</b>; }}</pre>
<table class='Tabla'>
    <tr>
        <td><b>NombreAnimación</b></td>
        <td>Define el nombre de la animación (obligatorio).</td>
    </tr>
    <tr>
        <td><b>Selector</b></td>
        <td>Porcentaje de la animación que puede ser del 0% al 100% (obligatorio).<br />Tambien podemos usar <code>from</code> (0%) y <code>to</code> (100%).</td>
    </tr>
    <tr>
        <td><b>EstilosCSS</b></td>
        <td>Uno o más estilos CSS válidos (obligatorio).</td>
    </tr>
</table><br />
