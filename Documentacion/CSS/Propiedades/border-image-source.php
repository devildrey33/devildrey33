<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar la ruta de la imagen que se usara para pintar el borde.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-image-source: <b>url()</b>;
border-image-source: <b>FunciónDegradado()</b></pre>
<table class='Tabla'>
    <tr>
        <td>url</td>
        <td>Especifica la url de la imagen que se va a utilizar para el borde con la función <a href="/Doc/CSS/Funciones/url()" target="_blank">url</a>.</td>
    </tr>
    <tr>
        <td>FunciónDegradado</td>
        <td>Especifica una función de degradado, para más información consulta la <a href="/Doc/CSS/Degradados/" target="_blank">Referencia CSS : Degradados</a>.</td>
    </tr>

</table><br />
