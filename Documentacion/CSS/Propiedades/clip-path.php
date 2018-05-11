<?php    
/*
    https://tympanus.net/codrops/css_reference/clip-path/
    https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
    https://css-tricks.com/clipping-masking-css/
    https://tympanus.net/codrops/css_reference/shape-outside/

    funcións per crear/modificar
        url     : per modificar
        inset   : per crear
        circle  : per crear
        ellipse : per crear
        polygon : per crear
    s'ha de modificar també la propietat clip per REMARCAR que está obsoleta i que ara s'ha d'utilitzar clip-path
*/
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>

<p>Esta propiedad permite recortar el área visible de un objeto, de forma que el navegador incluso es capaz de utilizar una figura SVG (path) para especificar la figura de un objeto.</p>
<div class='nota'>Esta propiedad se ha creado para substituir a la propiedad <a href='/Doc/CSS/Propiedades/clip'>clip</a>, que a partir de ahora se considera obsoleta.</div>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>clip-path: <b>Valor</b>;</pre>
<hr /><br />
<p>A continuación tienes la lista de valores posibles :</p>


<h3><i>none</i></h3>
<div class='Tab'>
    <p>Muestra todo el objeto. <b>(valor por defecto)</b></p>
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/url()'>url()</a></i></h3>
<div class='Tab'>
    <p>Especifica que el objeto tomará el área definida de un svg.<br />Por ejemplo :</p>
<!-- -[INICIO devildrey33.url]-            
clip-path:url(mi_archivo.svg#id_grupo);              /* SVG externo */
-[FIN devildrey33.url]- -->
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("url", "", basename(__FILE__), 'url'); 
    ?> 
    <hr />
</div><br /><br />



<h3><i><a href='/Doc/CSS/Funciones/inset()'>inset()</a></i></h3>
<div class='Tab'>
    <p>El área a mostrar será un rectangulo, los valores se pueden especificar con cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
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
    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/circle()'>circle()</a></i></h3>
<div class="Tab">
    <p>El área a mostrar será un circulo. El primer valor es el rádio y no es opcional, y luego se puede espeficicar la posición inicial añadiendo <code>at X Y</code>.</p>
<p>El rádio debe ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida.<br />
Las coordenadas de inicio se pueden especificar con cualquier tipo de unidad de tamaño relativo válido, tanto positivo como negativo.<br />
Para más información sobre unidades de tamaño relativo, consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Un par de ejemplos :</p>
<!-- -[INICIO devildrey33.circle]-
clip-path:circle(5px);                      /* 5 pixeles de rádio */
clip-path:circle(10% at 5px 10px);          /* 10% de rádio empezando 5 pixeles a la derecha y 10 desde arriba */
-[FIN devildrey33.circle]- -->            
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("circle", "", basename(__FILE__), 'circle'); 
    ?>            
    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/ellipse()'>ellipse()</a></i></h3>
<div class="Tab">
    <p>El área a mostrar será un ellipse. Los primeros valores son el rádio X y el rádio Y y no son opcionales, y luego se puede espeficicar la posición inicial añadiendo <code>at X Y</code>.</p>
<p>Los rádios deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida.<br />
Las coordenadas de inicio se pueden especificar con cualquier tipo de unidad de tamaño relativo válido, tanto positivo como negativo.<br />
Para más información sobre unidades de tamaño relativo, consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Un par de ejemplos :</p>
<!-- -[INICIO devildrey33.ellipse]-
clip-path:ellipse(6px 3px);                 /* 6 pixeles de rádio X y 3 pixeles de rádio Y */
clip-path:ellipse(10% 30% at 5px 10px);     /* 10% de rádio X y 30% de rádio Y empezando 5 pixeles a la derecha y 10 desde arriba */
-[FIN devildrey33.ellipse]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("ellipse", "", basename(__FILE__), 'ellipse'); 
?>         
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/polygon()'>polygon()</a></i></h3>
<div class="Tab">
    <p>El área a mostrar será un poligono. Para definir el polygono debes definir 3 o más puntos, cada punto debe tener un valor para la X y otro para la Y.<br />
    Todas las coordenadas deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.<br />
    Por ejemplo :</p>
<!-- -[INICIO devildrey33.polygon]-
clip-path:polygon(50% 0%, 0% 100%, 100% 100%);  /* Un triangulo */
-[FIN devildrey33.polygon]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("polygon", "", basename(__FILE__), 'polygon'); 
?>                   

</div><br />

<hr />
<h2>Área de partida</h2>
<p>En la MDN (en ingles, que es la mas completa) se menciona que se puede especificar un área de partida (basic-shape) desde donde se calculará el clip-path. SOLO Para firefox (de momento) podemos especificar el área de partida para la función inset. Pero según mis pruebas parece que no funciona con las funciones cirle, ellipse, y polygon (NTY).
<!--<table class='Tabla'>
    <tr>
        <td style="width:250px"><b>fill-box<br />stroke-box<br />view-box<br />margin-box<br />border-box<br />padding-box<br />content-box</b></td>
        <td>Especifica una <i>área rectangular</i> de partida. Si se especifica en combinación con una <i>figura básica</i>, dicha figura utilizará como punto de partida las coordenadas del área de la caja especificada. -->
            <table class='Tabla'>
                <tr>
                    <td><b>fill-box</b></td>
                    <td>Utiliza el área del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>stroke-box</b></td>
                    <td>Utiliza el área del trazo como referencia.</td>
                </tr>
                <tr>
                    <td><b>view-box</b></td>
                    <td>Utiliza el viewport del SVG como referencia.</td>
                </tr>
                <tr>
                    <td><b>margin-box</b></td>
                    <td>Utiliza el área del margen del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>border-box</b></td>
                    <td>Utiliza el área del borde del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>padding-box</b></td>
                    <td>Utiliza el área del relleno del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>content-box</b></td>
                    <td>Utiliza el área del contenido del objeto como referencia.</td>
                </tr>
                
            </table>
<!--        </td>        
    </tr>
</table> -->
<div class="nota">Hasta la fecha de este documento, el área de partida solo funciona en FireFox, y aun no queda muy claro si es solo para la funcion inset, o mas adelante tambien se podrá utilizar con circle, ellipse y polygon.</div>
<br />
