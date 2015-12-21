<p>Esta propiedad nos permite especificar como debe ser mostrado el objeto.</p>
<p>Cada etiqueta tiene su valor por defecto, por ejemplo las etiquetas <code>div</code> por defecto vienen con <code>display:block</code>, las etiqquetas <code>span</code> vienen por defecto con <code>display:inline</code>, las etiquetas <code>table</code> con <code>display:table</code>, etc...</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'>display: Valor;</pre>
<h2>Valores básicos</h2>
<table class='Tabla' style="table-layout:fixed">
    <tr>
        <td style="width:165px"><b>none</b></td>
        <td>
        	El objeto no se mostrará. Todos los descendientes de este objeto no se mostraran.
        	<div class='nota'>El navegador no reservará espacio para el objeto y mostrará la página como si este no existiera. Si quieres que el navegador reserve espacio para el objeto sin mostrarlo, echa un vistazo a la propiedad <code><a href='visibility' target="_blank">visibility</a></code>.</div>
        </td>
    </tr>
    <tr>
        <td><b>block</b></td>
        <td>El objeto se muestra como un bloque que ocupa todo el ancho disponible y se situa justo debajo del ultimo objeto.</td>
    </tr>
    <tr>
        <td><b>inline</b></td>
        <td>El objeto se muestra al lado del ultimo objeto. Si hay que hacer varias líneas, el objeto ocupara el resto de la línea actual, y lo que necesite de las siguientes.</td>
    </tr>
    <tr>
        <td><b>inline-block</b></td>
        <td>El objeto se muestra al lado del ultimo objeto. Si no hay suficiente ancho para todo el objeto se mostrará en una nueva línea, omitiendo el ancho que pueda quedar en la línea actual.</td>
    </tr>
    <tr>
        <td><b>list-item</b></td>
        <td>El objeto se muestra justo debajo del ultimo objeto como si fuera un <code>&lt;li&gt;</code>, por lo que puede mostrar el puntito dependiendo del <code><a href='list-style' target="_blank">list-style</a></code>.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table>
<br />
<h2>Valores para cajas flexibles</h2>
<table class='Tabla' style="table-layout:fixed">
	
    <tr>
        <td style="width:165px"><b>flex</b></td>
        <td>El objeto se muestra como un elemeto de bloque con el interior flexible.</td>
    </tr>
    <tr>
        <td><b>inline-flex</b></td>
        <td>El objeto se muestra al lado del ultimo objeto y su tamaño se calcula midiendo su contenido. Además el interior del objeto es flexible.</td>
    </tr>
</table>
<br />
    
<h2>Valores para tablas</h2>
<table class='Tabla' style="table-layout:fixed">
    <tr>
        <td style="width:165px"><b>inline-table</b></td>
        <td>El objeto se muestra al lado del ultimo objeto y su tamaño se calcula dependiendo del <code><a href='table-layout' target="_blank">table-layout</a></code>.</td>
    </tr>
    <tr>
        <td><b>table</b></td>
        <td>El objeto se muestra justo debajo del ultimo objeto como si fuera un <code>&lt;table&gt;</code>. Su tamaño se obtiene midiendo el interior del objeto, dependiendo del <code><a href='table-layout' target="_blank">table-layout</a></code>.</td>
    </tr>
    <tr>
        <td><b>table-caption</b></td>
        <td>El objeto se muestra justo debajo del ultimo objeto como si fuera un <code>&lt;caption&gt;</code>. Su altura se obtiene midiendo el interior del objeto, su ancho es el ancho de la fila de la tabla.</td>
    </tr>
    <tr>
        <td><b>table-cell</b></td>
        <td>El objeto se muestra como si fuera un <code>&lt;td&gt;</code> de una tabla, si es el primero de la fila, se mostrará justo debajo de la ultima fila alineado a la izquierda. Si no es el primero de la fila, se mostrará justo al lado del ultimo elemento de esta fila.</td>
    </tr>
    <tr>
        <td><b>table-column</b></td>
        <td>El objeto se muestra como si fuera una celda de una tabla, si es el primero de la fila, se mostrará justo debajo de la ultima fila alineado a la izquierda. Si no es el primero de la fila, se mostrará justo al lado del ultimo elemento de esta fila.</td>
    </tr>
    <tr>
        <td><b>table-column-group</b></td>
        <td>El objeto se muestra como si fuera un <code>&lt;colgroup&gt;</code> de una tabla.</td>
    </tr>
    <tr>
        <td><b>table-footer-group</b></td>
        <td>El objeto se muestra como si fuera un <code>&lt;tfoot&gt;</code> de una tabla.</td>
    </tr>
    <tr>
        <td><b>table-header-group</b></td>
        <td>El objeto se muestra como si fuera un <code>&lt;thead&gt;</code> de una tabla.</td>
    </tr>
    <tr>
        <td><b>table-row</b></td>
        <td>El objeto se muestra como si fuera un <code>&lt;tr&gt;</code> de una tabla.</td>
    </tr>
    <tr>
        <td><b>table-row-group</b></td>
        <td>El objeto se muestra como si fuera un <code>&lt;tbody&gt;</code> de una tabla.</td>
    </tr>
</table><br />


<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS1.</p>
