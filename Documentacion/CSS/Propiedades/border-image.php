<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite asignar las propiedades "<i><a href="border-image-source">border-image-source</a></i>", "<i><a href="border-image-slice">border-image-slice</a></i>", "<i><a href="border-image-width">border-image-width</a></i>", "<i><a href="border-image-outset">border-image-outset</a></i>", y "<i><a href="border-image-repeat">border-image-repeat</a></i>" en la misma linea.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>border-image: <b>source</b>&nbsp;<b>slice</b>&nbsp;<b>width</b>&nbsp;<b>outset</b>&nbsp;<b>repeat</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><a href="border-image-source"><b>border-image-source</b></a></td>
        <td>Especifica la url de la imagen que se va a utilizar para el borde.</td>
    </tr>
    <tr>
        <td><a href="border-image-slice"><b>border-image-slice</b></a></td>
        <td>Especifica por donde se cortara la imagen de origen para mostrarla en el borde.</td>
    </tr>
   	<tr>
        <td><a href="border-image-width"><b>border-image-width</b></a></td>
        <td>Especifica el tamaño del recuadro que se extraera de la imagen.</td>
    </tr>
    <tr>
        <td><a href="border-image-outset"><b>border-image-outset</b></a></td>
        <td>Especifica la cantidad en que el área de la imagen se extiende mas allá del borde del contenedor.</td>
    </tr>
    <tr>
        <td><a href="border-image-repeat"><b>border-image-repeat</b></a></td>
        <td>Especifica como debe ser tratada la imagen para extenderla al borde.</td>
    </tr>
</table><br />
