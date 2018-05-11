<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta prpopiedad nos permite especificar el estilo de la fuente.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>font-style: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>normal</b></td>
        <td>Asigna el estilo normal. <b>(por defecto)</b></td>
    </tr>
    <tr>
        <td><b>italic</b></td>
        <td>Asigna el estilo cursiva.</td>
    </tr>
    <tr>
        <td><b>small</b></td>
        <td>Asigna el estilo oblicuo.</td>
    </tr>

    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i></div></td>
    </tr>
</table><br />
