<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad corta nos permite asginar las propiedades "<a href="padding-bottom"><i>padding-bottom</i></a>", "<a href="padding-left"><i>padding-left</i></a>", "<a href="padding-right"><i>padding-right</i></a>", y "<a href="padding-bottom"><i>padding-bottom</i></a>" en la misma linea.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>padding: Top Right Bottom Left;</pre>
<div class='nota'>Los valores van en el siguiente orden : Top, Right, Bottom, Left. Si omitimos el left, este tomara el valor de Right. Si omitimos el Bottom, este tomara el valor de Top. Si solo ponemos un valor, se aplicara a los 4 valores.</div><br />
<table class='Tabla'>
    <tr>
        <td><a href="padding-top"><b>padding-top</b></a></td>
        <td>Tamaño del relleno superior. Si no hay mas parámetros será el tamaño para los 4 margenes.</td>
    </tr>
    <tr>
        <td><a href="padding-right"><b>padding-right</b></a></td>
        <td>Tamaño del relleno derecho. (opcional)</td>
    </tr>
    <tr>
        <td><a href="padding-bottom"><b>padding-bottom</b></a></td>
        <td>Tamaño del relleno inferior. (opcional)</td>
    </tr>
    <tr>
        <td><a href="padding-left"><b>padding-left</b></a></td>
        <td>Tamaño del relleno izquierdo. (opcional)</td>
    </tr>
</table><br />
<div class='nota'>Para mas información sobre como especificar tamaños en CSS, consulta la <a href="/Doc/CSS/Unidades/">Referencia CSS : Unidades</a>.</div>
