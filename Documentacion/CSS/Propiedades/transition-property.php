<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar que propiedades se usarán para la transición.</p>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>transition-property: <b>Propiedades</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>Propiedades</b></td>
        <td>Una o mas propiedades que se utilizarán para realizar la transición. Si especificas mas de una propiedad debes separar-las por comas. Por defecto tiene el valor <code>all</code>, que usará todas las posibles propiedades.</td>
    </tr>
</table><br />

