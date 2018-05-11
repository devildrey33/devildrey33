<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar como se tratará el texto, si una parte de él está oculta.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>text-overflow: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>clip</b></td>
        <td>El texto se cortará.</td>
    </tr>
    <tr>
        <td><b>ellipsis</b></td>
        <td>El texto se cortará pero añadirá "..." al final.</td>
    </tr>
    <tr>
        <td><i>string</i></td>
        <td>El texto se cortará pero añadirá "<i>string</i>" al final.</td>
    </tr>
</table><br />
