<!--
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
-->

<p>Esta propiedad permite recortar el área visible de un objeto, de forma que el navegador incluso es capaz de utilizar una figura SVG (path) para especificar la figura de un objeto.</p>
<div class='nota'>Esta propiedad se ha creado para substituir a la propiedad <a href='/Doc/CSS/Propiedades/clip'>clip</a>, que a partir de ahora se considera OBSOLETA.</div>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>clip-path: <b>Valor</b>;</pre>

<table class='Tabla'>
    <tr>
        <td style="width:80px"><b>none</b></td>
        <td>Muestra todo el objeto. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>url()</b></td>
        <td>
            Especifica que el objeto tomará el área definida de un svg.<br /><br />Por ejemplo :<br />
            <pre style='position:relative; left:10px'>clip-path:url(mi_archivo_svg.svg#id)
clip-path:url(#id_svg_inrustado_en_el_html)</pre>
        </td>
    </tr>
    <tr>
        <td><b>inset()</b></td>
        <td>
            El área a mostrar será un rectangulo, el tamaño se puede especificar en pixeles o utilizando un porcentaje. 
                <div class='nota'>Podemos especificar hasta 4 valores (uno por cada costado).<br />
                Si especificamos solo un valor, se aplicara a los 4 costados.<br />
                Si especificamos 2 valores, el primer valor se asignara a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
                Si especificamos 3 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
                Si especificamos 4 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
                </div>
            Por ejemplo :
            <pre>clip-path:inset(10px)     /* 10 pixeles para el top, bottom, left, right */
clip-path:inset(10px 20px) /* 10 pixeles para el top y bottom, 20 pixeles para el left y right */                
clip-path:inset(10px 20px, 30px) /* 10 pixeles para el top, 20 pixeles para el left y right, 30 pixeles para el bottom */                
clip-path:inset(10px 20px, 30px, 40px) /* 10 pixeles para el top, 20 pixeles para el right, 30 pixeles para el bottom, 40 pixeles para el left */                
            </pre>
        </td>
    </tr>
    <tr>
        <td><b>circle()</b></td>
        <td>
            El área a mostrar será un circulo. El primer valor es el rádio (se puede especificar en pixeles o en porcentaje) y no es opcional, y luego se puede espeficicar la posición inicial añadiendo <code>at X Y</code>.<br/>
            Por Ejemplo :
            <pre>clip-path:circle(10% at 5px 10px) /* 10% de radio empezando 5 pixeles a la derecha y 10 desde arriba */            </pre>
        </td>
    </tr>
    <tr>
        <td><b>ellipse()</b></td>
        <td>El área a mostrar será un ellipse. </td>
    </tr>
    <tr>
        <td><b>polygon()</b></td>
        <td>El área a mostrar será un poligono. </td>
    </tr>
</table><br />
<!--
<h3>Área de partida</h3>
<table class='Tabla'>
    <tr>
        <td style="width:250px"><b>fill-box<br />stroke-box<br />view-box<br />margin-box<br />border-box<br />padding-box<br />content-box</b></td>
        <td>Especifica una <i>área rectangular</i> de partida. Si se especifica en combinación con una <i>figura básica</i>, dicha figura utilizará como punto de partida las coordenadas del área de la caja especificada.
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
        </td>        
    </tr>
</table>-->
<br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad está soportada en Chrome, Opera y Firefox casi por completo, y tiene soporte muy limitado para Edge.</p>
