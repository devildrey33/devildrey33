<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el eje y la dirección de un contenedor flex. El eje puede ser columnas o filas (<code>column|row</code>), y la dirección normal o invertida.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>flex-direction: Valor;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:120px'><b>row</b></td>
        <td>Los objetos flexibles se muestran como filas. Se utiliza la dirección del texto para determinar por donde empiezan y terminan los objetos, para mas información consulta la <a href='/Doc/CSS/Propiedades/direction'>Propiedad CSS direction</a>.</td>
    </tr>
    <tr>
        <td><b>row-reverse</b></td>
        <td>Lo mismo que row, pero con el punto de inicio y el punto final invertidos.</td>
    </tr>
    <tr>
        <td><b>column</b></td>
        <td>Los objetos flexibles se muestran como columnas.</td>
    </tr>
    <tr>
    <td><b>column-reverse</b></td>
        <td>Lo mismo que column, pero con el punto de inicio y el punto final invertidos.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.</td>
    </tr>
</table><br />
