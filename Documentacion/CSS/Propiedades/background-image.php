<p>Esta propiedad nos establecer una imagen de fondo. Los navegadores modernos soportan mas de una imagen de fondo y fondos creados mediante <a href="../DegradadosCSS.php" target="_blank">Degradados CSS</a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>background-image: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>Valor</b></td>
        <td>
        	Puede ser una o mas imagenes, o tambien se puede incluir un degradado CSS, incluso puedes mezclar una imagen y un degradado.<br />
        	Puedes utilizar la función <a href="/Doc/CSS/Funciones/url()">url</a> para especificar una imagen externa, por ejemplo : <code>url('PathImagen.gif')</code>.<br />
            A la hora de especificar multiples fondos debes separarlos por una coma.<br />
            También puedes utilizar un degradado, para más información sobre degradados consulta el siguiente enlace : <a href="/Doc/CSS/Degradados/" target="_blank">Referéncia CSS : Degradados</a>.
        	<div class='nota'>IE8 e inferiores no soportan fondos multiples, IE9 e inferiores no soportan degradados css.</div>
        </td>
    </tr>
    <tr>
        <td><b>none</b></td>
        <td>Sin fondo.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>
        	El fondo se hereda del elemento padre. 
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
<div class='nota'>Es muy recomendable asignar la propiedad <a href="background-color">background-color</a> con algun color similar a lo que deberia ser el fondo, por si el navegador no soporta bien la porpiedad <code>background-image</code>.</div>

<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS1. 
<br /><b>IE6</b> e inferiores no soportan imagenes png con fondo transparente.
<br /><b>IE8</b> e inferiores no soportan fondos multiples.
<br /><b>IE9</b> e inferiores no soportan <a href="/Doc/CSS/Degradados/" target="_blank">Degradados</a> CSS en el fondo.</p>
