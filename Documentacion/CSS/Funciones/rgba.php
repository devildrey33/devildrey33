<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>

<p>Esta funcion define un color utilizando 3 canales de color (<b>R</b>ed, <b>G</b>reen, <b>B</b>lue) y un canal <b>A</b>lpha para la transparencia.</p>
<p>Los canales RGB tienen un rango de 0 a 255, y el canal Alpha va desde 0.0 (transparente) a 1.0 (opaco).</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>rgba( ValorR, ValorG, ValorB, ValorA );</pre>
<table class='Tabla'>
    <tr>
        <td>Valor<b>R</b></td>
        <td>Canal rojo, puede ser de 0 a 255.</td>
    </tr>
    <tr>
        <td>Valor<b>G</b></td>
        <td>Canal verde, puede ser de 0 a 255.</td>
    </tr>
    <tr>
        <td>Valor<b>B</b></td>
        <td>Canal azul, puede ser de 0 a 255.</td>
    </tr>
    <tr>
        <td>Valor<b>A</b></td>
        <td>Canal Alpha, puede ser de 0.0 (transparente) a 1.0 (opaco).</td>
    </tr>
</table><br />
