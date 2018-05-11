<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el color del borde para la parte derecha del objeto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-right-color: <b>Color</b> | <b>transparent</b> | <b>inherit</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>Color</b></td>
        <td>Especifica el color del borde derecho. Para mas información sobre los colores en CSS visita este enlace <a href="/Doc/CSS/Colores/" target="_blank">Referencia CSS : Colores</a></td>
    </tr>
    <tr>
        <td><b>transparent</b></td>
        <td>Especifica que el color es transparente. <div class='nota'>Este valor no está soportado en IE6 o inferiores.</div> </td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Especifica que el color debe ser heredado desde su objeto padre. <div class='nota'>Este valor no está soportado en IE7 o inferiores. En IE8 requiere la declaración de un !DOCTYPE.</div></td>
    </tr>
</table><br />
