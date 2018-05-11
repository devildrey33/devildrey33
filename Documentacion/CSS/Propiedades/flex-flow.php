<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad es un atajo para las propiedades <a href='/Doc/CSS/Propiedades/flex-direction'>flex-direction</a> y <a href='/Doc/CSS/Propiedades/flex-wrap'>flex-wrap</a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>flex-flow: direction wrap;</pre>

<h2>flex-direction</h2>
<p>La propiedad <code>flex-direction</code> permite especificar el eje y la dirección de un contenedor flex. El eje puede ser columnas o filas (<code>column|row</code>), y la dirección normal o invertida.</p>
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

<h2>flex-wrap</h2>
<p>La propiedad <code>flex-wrap</code> nos permite especificar si los hijos deben mostrarse en la misma línea, o si pueden fluir en varias líneas.</p>
<table class='Tabla'>
    <tr>
        <td style='width:120px'><b>nowrap</b></td>
        <td>Los hijos se muestran en la misma línea.</td>
    </tr>
    <tr>
        <td><b>wrap</b></td>
        <td>Los hijos se muestran en varias líneas.</td>
    </tr>
    <tr>
        <td><b>wrap-reverse</b></td>
        <td>Lo mismo que wrap, pero en orden invertido.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.</td>
    </tr>
</table><br />
