<p>Esta propìedad nos permite especificar si el objeto debe ser visible o por el contrario debe estar oculto.</p>
<div class='nota'>Aunque ocultemos el elemento. el navegador seguira reservando el espacio que ocupa el objeto.</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>visibility: <b>estado</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>visible</b></td>
        <td>El navegador muestra el objeto normalmente. Este es el valor por defecto.</td>
    </tr>
    <tr>
        <td><b>hidden</b></td>
        <td>El navegador oculta el objeto pero deja el espacio que ocupa en blanco.</td>
    </tr>
    <tr>
        <td><b>collapse</b></td>
        <td>
        	Solo para elementos de una tabla, elimina una columna o fila, pero no afecta a la estructura de la tabla.
            <div class='nota'>Si usamos collapse en un elemento que no sea una columna o fila de una tabla, este actuara de la misma forma que el valor <code>hidden</code>. </div>
            <div class='nota'>Este valor no está soportado en IE.</div>
        </td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre. <div class='nota'>Este valor no está soportado en IE.</div></td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS2.</p>
