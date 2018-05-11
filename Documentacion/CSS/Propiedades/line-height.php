<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar la separación las líneas de un texto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>line-height: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>normal</b></td>
        <td>Espacio entre caracteres sin modificar. (<b>Utilizada por defecto</b>)</td>
    </tr>
    <tr>
        <td><i>tamaño extra</i></td>
        <td>Especifica el espacio extra entre líneas. Puedes especificar valores negativos también.<br />Para más información sobre los tipos de unidades consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>Referencia CSS : Unidades</a>
        </td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i></div></td>
    </tr>
</table><br />
