<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar como se deben cortar las lineas de texto. Por lo general el navegador calcula el ancho de cada palabra y cuando ve que una de ellas sobresale del ancho total termina la linea. Esta propiedad nos permite justamente modificar ese comportamiento.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>word-break: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:80px'><b>normal</b></td>
        <td>No se cortaran las palabras. <b>(valor por defecto)</b>
        	<div class='nota'>De todas formas una palabra podria llegar a ser cortada dependiendo del valor de <a href="word-wrap" target="_blank">word-wrap</a>.</div>
        </td>
    </tr>
    <tr>
        <td><b>break-all</b></td>
        <td>Se puede terminar una linea en medio de dos letras.</td>
    </tr>
    <tr>
        <td><b>keep-all</b></td>
        <td>No se puede terminar una linea en medio de dos letras. <div class='nota'>Este valor no es soportado por navegadores que usen webkit (Chrome, Safari y Opera)</div></td>
    </tr>
</table><br />
