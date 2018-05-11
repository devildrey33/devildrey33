<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta prpopiedad nos permite especificar el color del borde exterior.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>outline-color: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b><i>Color</i></b></td>
        <td>Especifica el color para el borde externo. Para más información sobre los colores en CSS visita este enlace <a href="/Doc/CSS/Colores/" target="_blank">Referencia CSS : Colores</a>.</td>
    </tr>
    <tr>
        <td><b>invert</b></td>
        <td>Invierte el color. Esto asegura que el borde exterior sea visible sin importar el color del fondo. <b>(Valor por defecto)</b>.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.</td>
    </tr>
</table><br />
