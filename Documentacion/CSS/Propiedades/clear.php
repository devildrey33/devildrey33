<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar que elementos flotantes no son permitidos despues del objeto actual.</p>
<div class='nota'>Imaginemos que tenemos 2 divs con <code>float:left</code> uno al lado del otro, si no especificamos ningun clear se mostrará el primer elemento seguido por el segundo elemento que se intentará colocar justo a la izquierda si es posible. Si asignamos <code>clear:both</code> al segundo elemento, este entenderá que debe empezar en la linea inferior, y no a su lado.</div><br />
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>clear: Valor;</pre>
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>Se permiten todos los elementos flotantes a ambos lados. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>left</b></td>
        <td>No se permiten elementos flotantes a la izquierda.</td>
    </tr>
    <tr>
        <td><b>right</b></td>
        <td>No se permiten elementos flotantes a la derecha.</td>
    </tr>
    <tr>
        <td><b>both</b></td>
        <td>No se permiten elementos flotantes.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
