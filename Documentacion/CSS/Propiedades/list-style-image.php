<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta prpopiedad nos permite especificar una imagen para el marcador del item.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>list-style-image: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>url</b></td>
        <td>Especifica el path de la imagen que deseas poner como marcador.</td>
    </tr>
    <tr>
        <td><b>none</b></td>
        <td>Valor por defecto. No se mostrará ninguna imagen externa, aunque dependiendo de <a href="list-style-type">list-style-type</a> aun se puede mostrar el marcador por defecto.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>        
        </td>
    </tr>
</table><br />
