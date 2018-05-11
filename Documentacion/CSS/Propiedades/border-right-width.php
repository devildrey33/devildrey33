<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el tamaño de la parte derecha del borde para el objeto.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-right-width: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>thin</b></td>
        <td>Especifica un borde pequeño.</td>
    </tr>
    <tr>
        <td><b>medium</b></td>
        <td>Especifica un borde medio. <b>(Utilizada por defecto)</b></td>
    </tr>
    <tr>
        <td><b>thick</b></td>
        <td>Especifica un borde espeso.</td>
    </tr>
    <tr>
        <td><b><i>tamaño</i></b></td>
        <td>Permite definir el tamaño del borde. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>Referencia CSS : Unidades</a></td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i></div></td>
    </tr>
</table><br />
