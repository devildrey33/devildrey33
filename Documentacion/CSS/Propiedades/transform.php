<p>Propiedad que permite definir una o mas transformaciones en 2d o en 3d.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>transform: <b>valor/es</b>;</pre>
<table class='Tabla'>
    <tr>
        <th>Transformación</th>
        <th>Descripción</th>
    </tr>
    <tr>
        <td><b>none</b></td>
        <td>Sin transformaciones. <b>(Por defecto)</b></td>
    </tr>
    <tr>
        <td><b>matrix</b>(v,v,v,v,v,v)</td>
        <td>Define una transformación 2D utilizando una matríz de 6 valores.</td>
    </tr>
    <tr>
        <td><b>matrix3d</b>(v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v)</td>
        <td>Define una trandformación 3D utilizando una matríz de [4x4] valores.</td>
    </tr>
    <tr>
        <td><b>perspective</b>(v)</td>
        <td>Define la perspectiva 3D para el objeto. Debes especificar el tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> para el valor (px, cm, pt, etc..).</td>
    </tr>
    <tr>
        <td><b>rotate</b>(ángulo)</td>
        <td>Define la rotación 2D para el objeto. Debes especificar 'deg' junto al valor.</td>
    </tr>
    <tr>
        <td><b>rotate3d</b>(x,y,z,ángulo)</td>
        <td>Define la rotación 3D para el objeto. Debes especificar 'deg' para el valor del ángulo.</td>
    </tr>
    <tr>
        <td><b>rotateX</b>(ángulo)</td>
        <td>Define una rotación 3D a lo largo del eje X. Debes especificar 'deg' junto al valor.</td>
    </tr>
    <tr>
        <td><b>rotateY</b>(ángulo)</td>
        <td>Define una rotación 3D a lo largo del eje Y. Debes especificar 'deg' junto al valor.</td>
    </tr>
    <tr>
        <td><b>rotateZ</b>(ángulo)</td>
        <td>Define una rotación 3D a lo largo del eje Z. Debes especificar 'deg' junto al valor.</td>
    </tr>
    <tr>
        <td><b>scale</b>(x,y)</td>
        <td>Define la escala del objeto 2D. Por defecto los valores son 1.0.</td>
    </tr>
    <tr>
        <td><b>scale3d</b>(x,y,z)</td>
        <td>Define la escala del objeto 3D. Por defecto los valores son 1.0.</td>
    </tr>
    <tr>
        <td><b>scaleX</b>(x)</td>
        <td>Define la escala del ancho para el objeto. Por defecto es 1.0.</td>
    </tr>
    <tr>
        <td><b>scaleY</b>(y)</td>
        <td>Define la escala de la altura para el objeto. Por defecto es 1.0.</td>
    </tr>
    <tr>
        <td><b>scaleZ</b>(z)</td>
        <td>Define la escala de la profundidad para el objeto. Por defecto es 1.0.</td>
    </tr>
    <tr>
        <td><b>skew</b>(ángulo-x,ángulo-y)</td>
        <td>Define como torcer el objeto utilizando los ejes X e Y. Debes especificar 'deg' junto a los valores.</td>
    </tr>
    <tr>
        <td><b>skewX</b>(ángulo-x)</td>
        <td>Define como torcer el objeto utilizando el eje X. Debes especificar 'deg' junto al valor.</td>
    </tr>
    <tr>
        <td><b>skewY</b>(ángulo-y)</td>
        <td>Define como torcer el objeto utilizando el eje Y. Debes especificar 'deg' junto al valor.</td>
    </tr>
    <tr>
        <td><b>translate</b>(x,y)</td>
        <td>Permite corregir la posición del objeto en el plano 2D. Debes especificar el tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> para cada valor (px, cm, pt, etc..).</td>
    </tr>
    <tr>
        <td><b>translate3d</b>(x,y,z)</td>
        <td>Permite corregir la posición del objeto en el plano 3D. Debes especificar el tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> para cada valor (px, cm, pt, etc..).</td>
    </tr>
    <tr>
        <td><b>translateX</b>(x)</td>
        <td>Permite corregir la posición X del objeto. Debes especificar el tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> para el valor (px, cm, pt, etc..).</td>
    </tr>
    <tr>
        <td><b>translateY</b>(y)</td>
        <td>Permite corregir la posición Y del objeto. Debes especificar el tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> para el valor (px, cm, pt, etc..).</td>
    </tr>
    <tr>
        <td><b>translateZ</b>(z)</td>
        <td>Permite corregir la posición Z del objeto. Debes especificar el tipo de <a href="/Doc/CSS/Unidades/" target="_blank" title='px, ex, em, %, cm, mm, in, pt, pc'>unidad</a> para el valor (px, cm, pt, etc..).</td>
    </tr>
</table><br />
<div class='nota'>Todas las funciones 3d requieren una perspectiva en el mismo objeto, o en el contenedor padre. Echa un vistazo al siguiente ejemplo : <a href="/Lab/Ejemplos/PropiedadesCSS/transform3d.html" target="_blank">Transformaciones 3D</a>.</div>
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad está soportada por todos los navegadores compatibles con CSS3.</p>
