<p>Esta propiedad nos permite especificar si queremos incluir las propiedades <a href='padding'>padding</a> y <a href='border'>border</a> en el calculo final de las propiedades <a href='width'>width</a> y <a href="height">height</a>.</p>
<p>En esencia esta propiedad le dice al navegador como tiene que calcular el tamaño del objeto, 
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>box-sizing: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>content-box</b></td>
        <td>Las propiedades <a href='width'>width</a> y <a href='height'>height</a> incluyen solo el contenido. Los tamaños de las propiedades <a href='border'>border</a> y <a href='padding'>pading</a> no están incluidas. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>border-box</b></td>
        <td>Las propiedades <a href='width'>width</a> y <a href='height'>height</a> incluyen tanto el contenido y los tamaños de las propiedades <a href='border'>border</a> y <a href='padding'>padding</a>.</td>
    </tr>
    <tr>
        <td><b>initial</b></td>
        <td>Establece esta propiedad a su valor por defecto.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	Obtiene el valor de su elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS3.</p>
