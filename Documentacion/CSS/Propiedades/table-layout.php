<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar el algoritmo que se usará para formar la tabla.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>table-layout: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>auto</b></td>
        <td>Algoritmo automático de diseño de la tabla. El ancho de la columna se determina por el contenido mas amplio de las celdas. Puede ser mas lento ya que necesita leer todo el contenido de la tabla antes de determinar el diseño final.</td>
    </tr>
    <tr>
        <td><b>fixed</b></td>
        <td>Algoritmo fijo de diseño de la tabla. La disposición horizontal sólo depende del ancho de la tabla y el ancho de las columnas, no del contenido de las celdas. El navegador puede comenzar a mostrar la tabla una vez que la primera fila se ha procesado.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Especifica que esta propiedad debe ser heredada desde su objeto padre. 
			<div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i></div>
        </td>
    </tr>
</table><br />
