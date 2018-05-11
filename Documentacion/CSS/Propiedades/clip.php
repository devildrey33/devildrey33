<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad permite especificar una porción rectangular del objeto para mostrar, mientras el resto permanecerá oculto.</p>
<div class='nota'>Esta propiedad ha quedado <b>OBSOLETA</b>, considera echar un vistazo a la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a> que es su substituta para CSS3.</div>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>clip: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>auto</b></td>
        <td>Muestra todo el objeto. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td style="width:200px"><b>rect</b>(<i>top</i>, <i>right</i>, <i>bottom</i>, <i>left</i>)</td>
        <td>Crea un área para mostrar el objeto. Si por ejemplo tenemos un objeto de 100x100px y queremos mostrar solo un rectangulo de 20x20px ubicado abajo a la derecha debemos especificar : <code>rect(80px, 100px, 100px, 80px);</code></td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
<div class='nota'>Esta propiedad no funciona si el objeto tiene <code>overflow:visible</code>.</div><br />
