<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar si el borde de la tabla se generara unido, o separado para cada celda.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-collapse: <b>valor</b>;</pre>
<div class='nota'>Si no se especifica un <code>!DOCTYPE</code> la propiedad border-collapse puede producir resultados inesperados.</div>
<br />
<table class='Tabla'>
    <tr>
        <td><b>collapse</b></td>
        <td>Los bordes de todas las celdas estarán unidos siempre que sea posible. Si se especifica este valor, se omitiran las propiedades <a href="border-spacing">border-spacing</a> y <a href="empty-cells">empty-cells</a>.</td>
    </tr>
    <tr>
        <td><b>separate</b></td>
        <td>Los bordes de todas las celdas quedaran separados y se usaran las propiedades <a href="border-spacing">border-spacing</a> y <a href="empty-cells">empty-cells</a> para determinar su separación. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Especifica que esta propiedad debe ser heredada desde su objeto padre. 
            <div class='nota'>Este valor no está soportado en Internet Explorer.</div>
        </td>
    </tr>
</table><br />
