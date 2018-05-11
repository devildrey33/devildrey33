<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;  
?>

<p>Esta función recorta el área visible del objeto al tamaño del rectangulo especificado.</p>
<p>Solo se puede utilizar en la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>inset( <i>top left right borrom</i> );</pre>
<p>Los valores se pueden especificar con cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<div class='nota'>Podemos especificar hasta 4 valores (uno por cada costado).<br />
    Si especificamos solo un valor, se aplicara a los 4 costados.<br />
    Si especificamos 2 valores, el primer valor se asignara a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
    Si especificamos 3 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
    Si especificamos 4 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
</div>
<div>Por ejemplo :</div>
            
<!-- -[INICIO devildrey33.inset]-
clip-path:inset(10px);                      /* 10 pixeles para el top, bottom, left, right */
clip-path:inset(10px 20px);                 /* 10 pixeles para el top y bottom, 20 pixeles para el left y right */                
clip-path:inset(10px 20px, 30px);           /* 10 pixeles para el top, 20 pixeles para el left y right, 30 pixeles para el bottom */                
clip-path:inset(10px 20px, 30px, 40px);     /* 10 pixeles para el top, 20 pixeles para el right, 30 pixeles para el bottom, 40 pixeles para el left */     
 -[FIN devildrey33.inset]- -->
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("inset", "", basename(__FILE__), 'inset'); 
?>            
