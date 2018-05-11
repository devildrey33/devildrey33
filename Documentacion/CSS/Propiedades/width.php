<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el ancho del objeto.</p>
<div class='nota'>El valor asignado a esta propiedad no incluye ni el <a href="margin">margin</a> ni el <a href="padding">padding</a>, ni los <a href="border">border</a>, ni los <a href="outline">outline</a>.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>width: <b>tamaño</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>auto</b></td>
        <td>El navegador calculara el ancho. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><i><b>tamaño</b></i></td>
        <td>Especifica el ancho en cualquiera de las unidades válidas. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>Referencia CSS : Unidades</a>.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i>.</div></td>
    </tr>
</table><br />
