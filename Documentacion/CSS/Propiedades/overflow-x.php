<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite establecer como se debe tratar el contenido que sobresalga del contenedor.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>overflow-x: Valor;</pre>
<table class='Tabla'>
    <tr>
        <td><b>visible</b></td>
        <td>Se mostrará todo el contenido aunque sobresalga del objeto. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>hidden</b></td>
        <td>Se ocultara la parte del contenido que sobresalga del objeto.</td>
    </tr>
    <tr>
        <td><b>scroll</b></td>
        <td>Apareceran barras de scroll para mostrar el contenido incluso si el contenido no sobresale.</td>
    </tr>
    <tr>
        <td><b>auto</b></td>
        <td>Apareceran barras de scroll para mostrar el contenido solo si sobresale el contenido.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
