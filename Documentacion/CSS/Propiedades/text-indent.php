<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar la sangría de la primera línea de un bloque de texto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>text-indent: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>valor</b></td>
        <td>Permite definir el tamaño de la sangría. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>Referencia CSS : Unidades</a>Referéncia CSS : Unidades</a>.
        <div class='nota'>El valor por defecto es <b>0</b>.</div></td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	La sangría se hereda del elemento padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
