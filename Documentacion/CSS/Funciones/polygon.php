<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;  
?>

<p>Esta función recorta el área visible del objeto utilizando el poligono especificado.</p>
<p>Solo se puede utilizar en la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>polygon( <i>X</i> <i>Y</i>, <i>X</i> <i>Y</i>, <i>X</i> <i>Y</i>, ... );</pre>
<br />
<p>Para definir el polygono debes definir 3 o más puntos, cada punto debe tener un valor para la X y otro para la Y.<br />
Todas las coordenadas deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.<br />
Un ejemplo :</p>
<!-- -[INICIO devildrey33.polygon]-
clip-path:polygon(50% 0%, 0% 100%, 100% 100%);  /* Un triangulo */
-[FIN devildrey33.polygon]-  -->
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("polygon", "", basename(__FILE__), 'polygon'); 
?>               