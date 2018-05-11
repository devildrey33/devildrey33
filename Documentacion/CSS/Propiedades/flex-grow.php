<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el factor de crecimiento para un <code>flex-item</code>. De esta forma tenemos la habilidad de poder hacer crecer un flex-item especificando una proporción.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>flex-grow: Valor;</pre>

<table class='Tabla'>
    <tr>
        <td><i>Valor</i></td>
        <td>
            Por defecto es 0, si es 0 no se aplicará ninguna correción de tamaño al <code>flex-item</code>. En caso de no ser 0, el valor determina la proporción de espacio que debe utilizar un <code>flex-item</code> en relación con los demás <code>flex-items</code>. 
            <div class='nota'>No se puede especificar valores negarivos.</div>
        </td>
    </tr>
</table><br />
