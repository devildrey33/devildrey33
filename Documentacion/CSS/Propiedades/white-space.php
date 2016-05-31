<p>Esta propiedad nos permite especificar como debe tratar el navegador los espacios en blanco del texto dentro de un elemento.</p>
<div class='nota'>Una sequencia multiple de espacios en blanco puede ser : dos o mas espacios en blanco, una tabulación, o cualquier combinación de espacios y tabulaciones.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>white-space: <b>valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:80px'><b>normal</b></td>
        <td>Las sequencias de multiples espacios en blanco se convertirán a un unico espacio en blanco. El texto se adaptará al objeto. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><b>nowrap</b></td>
        <td>Las sequencias de multiples espacios en blanco se convertirán a un unico espacio en blanco. El texto no adaptará al objeto y puede sobresalir de él. El texto continúa en la misma linea hasta que se encuentra una etiqueta &lt;br&gt;. Los saltos de línea son ignorados.</td>
    </tr>
    <tr>
        <td><b>pre</b></td>
        <td>Las sequencias de multiples espacios en blanco se conservan tal cual. El texto continua siempre en la misma linea hasta que se encuentra una etiqueta &lt;br&gt; o un salto de línea.</td>
    </tr>
    <tr>
        <td><b>pre-line</b></td>
        <td>Las sequencias de multiples espacios en blanco se convertirán a un unico espacio en blanco.  El texto se adaptará al objeto. El texto continua siempre en la misma linea hasta que encuentra un salto de línea o una etiqueta &lt;br&gt;.</td>
    </tr>
    <tr>
        <td><b>pre-wrap</b></td>
        <td>Las sequencias de multiples espacios en blanco se conservan tal cual. El texto se adaptará al objeto. El texto continua siempre en la misma linea hasta que encuentra un salto de línea o una etiqueta &lt;br&gt;.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE7 e inferiores. Para IE8 se necesita definir un <i>!DOCTYPE</i>.</div></td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS1.</p>
