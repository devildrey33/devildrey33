<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta prpopiedad nos permite especificar el grueso de la fuente.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>font-weight: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>normal</b></td>
        <td>Asigna el grueso normal. <b>(por defecto)</b></td>
    </tr>
    <tr>
        <td><b>bold</b></td>
        <td>Asigna el grueso negrita (700).</td>
    </tr>
    <tr>
        <td><b>bolder</b></td>
        <td>Asigna el grueso negrita (900).</td>
    </tr>
    <tr>
        <td><b>lighter</b></td>
        <td>Asigna el grueso fino (100).</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el grueso de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i></div></td>
    </tr>
</table><br />
