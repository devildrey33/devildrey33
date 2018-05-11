<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el estilo del borde para la parte derecha del objeto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-right-style: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>none</b></td>
        <td>Sin borde.</td>
    </tr>
    <tr>
        <td><b>hidden</b></td>
        <td>Borde oculto. Se computa el tamaño del borde en tablas.</td>
    </tr>
    <tr>
        <td><b>dotted</b></td>
        <td>Borde con puntos.</td>
    </tr>
    <tr>
        <td><b>dashed</b></td>
        <td>Borde con rayas.</td>
    </tr>
    <tr>
        <td><b>solid</b></td>
        <td>Borde normal.</td>
    </tr>
    <tr>
        <td><b>double</b></td>
        <td>Borde normal doble.</td>
    </tr>
    <tr>
        <td><b>groove</b></td>
        <td>Borde con un efecto 3D por la parte alta.</td>
    </tr>
    <tr>
        <td><b>ridge</b></td>
        <td>Borde con un efecto 3D por la parte baja.</td>
    </tr>
    <tr>
        <td><b>inset</b></td>
        <td>Borde con un efecto 3D interior.</td>
    </tr>
    <tr>
        <td><b>outset</b></td>
        <td>Borde con un efecto 3D exterior.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE8 e inferiores.</div></td>
    </tr>
</table><br />
