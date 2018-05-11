<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad se utiliza para especificar el orden de un flex-item dentro de un contenedor flex.</p>
<div class='nota'>El <code>order</code> se refiere únicamente al orden visual, y no afecta al orden real de las etiquetas. No debe utilizarse la propiedad <code>order</code> el <a href='/Doc/Css/Reglas/@media'>medios</a> no visuales como por ejemplo el <code>speech</code>.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>order: Valor;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:120px'><i>Valor</i></td>
        <td>
            <p>El valor será el que defina el orden de este <code>flex-item</code> dentro del contenedor <code>flex-box</code>. Si dos o mas <code>flex-item</code> tienen el mismo valor, se ordenaran entre ellos tal y como vengan maquetados.</p>        
        </td>
    </tr>
</table><br />
