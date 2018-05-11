<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad se utiliza para especificar factor de contracción de un <code>flex-item</code>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>flex-shrink: Valor;</pre>

<table class='Tabla'>
    <tr>
        <td><i>Valor</i></td>
        <td>
            Si el valor es 0, se utilizara el valor de <a href='/Doc/CSS/Propiedades/flex-basis'>flex-basis</a> como referencia.
            En caso de que el valor no sea 0, especifica cómo el elemento se reducirá en relación con el resto de los elementos flexibles en el interior del mismo contenedor. <b>Por defecto es 1</b>.
            <div class='nota'>No se puede especificar valores negarivos.</div>
        </td>
    </tr>
</table><br />
