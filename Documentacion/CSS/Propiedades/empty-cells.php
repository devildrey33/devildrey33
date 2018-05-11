<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar si se deben mostrar los bordes y colores de fondo en las celdas vacias.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>empty-cells: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>show</b></td>
        <td>Muestra el borde y el fondo de las celdas vacias. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><b>hide</b></td>
        <td>Oculta el borde y el fondo de las celdas vacias.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Especifica que esta propiedad debe ser heredada desde su objeto padre. 
            <div class='nota'>IE8 soporta empty-cells solo si se define un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
