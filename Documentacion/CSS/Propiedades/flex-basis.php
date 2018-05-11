<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad se utiliza para especificar el tamaño de un <code>flex-item</code> antes de distribuir el tamaño disponible según las normas del contenedor flexible.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>flex-basis: Valor;</pre>

<table class='Tabla'>
    <tr>
        <td><i>Valor</i></td>
        <td>
            El valor puede ser cualquier tipo de <a href="/Doc/CSS/Unidades">unidad</a> válido tanto relativo como absoluto (px, cm, em, %, etc...)             
        </td>
    </tr>
    <tr>
        <td><b>auto</b></td>
        <td>
            Se obtiene el valor basandose en el tamaño de su propio contenido. <b>Este es el valor por defecto</b>.
        </td>
    </tr>
</table><br />
