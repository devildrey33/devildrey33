<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite indicar si el titulo de la tabla se mostrará arriba o abajo.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>caption-side: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>top</b></td>
        <td>Muestra el titulo de la tabla arriba. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><b>bottom</b></td>
        <td>Muestra el titulo de la tabla abajo.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Especifica que esta propiedad debe ser heredada desde su objeto padre. 
            <div class='nota'>IE8 soporta caption-side solo si se define un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
