<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el espacio entre cada palabra.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>word-spacing: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:80px'><b>normal</b></td>
        <td>El espacio entre palabras se establece al su valor por defecto. <b>Este es el valor por defecto</b>.</td>
    </tr>
    <tr>
        <td><i>Longitud</i></td>
        <td>Permite especificar el espacio en cualquier tipo de <a href="/UnidadesCSS.php" target="_blank" title='px, ex, em, cm, mm, in, pt, pc'>unidad</a> válida exceptuando porcentajes.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i>.</div></td>
    </tr>
</table><br />
