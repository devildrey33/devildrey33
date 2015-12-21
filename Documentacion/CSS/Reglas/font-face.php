<p>Esta regla nos permite añadir fuentes externas para utilizar en el documento.</p>
<p>Si quieres alguna fuente que no sea convencional, te recomiendo buscar en la siguiente pagina <a href="http://www.fontsquirrel.com/fonts" target="_blank">Font Squirrel</a>, la cual tiene cientos de fuentes gratis compatibles para la web listas para la descarga.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'>@font-face { <b>Propiedades</b> }</pre>
<table class='Tabla'>
    <tr>
        <td><a href='/Doc/CSS/Propiedades/font-family' target="_blank"><b>font-family</b></a></td>
        <td>Requerido, define el nombre de la fuente.</td>
    </tr>
    <tr>
        <td><b>src</b></td>
        <td>Requerido, especifica una o mas URL's donde se pueden encontrar las fuentes.
        	<div class='nota'>Internet explorer solo soporta fuentes del tipo 'eot', los demas navegadores soportan fuentes del tipo 'ttf' y 'otf'.</div>
        </td>
    </tr>
    <tr>
        <td><a href='/Doc/CSS/Propiedades/font-stretch' target="_blank"><b>font-stretch</b></a></td>
        <td>Opcional, define como debe estirarse la fuente. Por defecto es <code>normal</code>.</td>
    </tr>
    <tr>
        <td><a href='/Doc/CSS/Propiedades/font-style' target="_blank"><b>font-style</b></a></td>
        <td>Opcional, especifica el estilo de la fuente. Por defecto es <code>normal</code>.</td>
    </tr>
    <tr>
        <td><a href='/Doc/CSS/Propiedades/font-weight' target="_blank"><b>font-weight</b></td></td>
        <td>Opcional, define el grosor de la fuente. Por defecto es <code>normal</code>.</td>
    </tr>
    <tr>
        <td><b>unicode-range</b></td>
        <td>Opcional, Define el rango de caracteres unicode que soporta la fuente. Por defecto es <code>U+0-10FFFF</code></td>
    </tr>

</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta regla es soportada por todos los navegadores compatibles con CSS3.<br />
IE 9 solo soporta fuentes del tipo eot.</p>
