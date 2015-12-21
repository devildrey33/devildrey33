<p>Esta propiedad es un atajo para las propiedades <a href='/Doc/CSS/Propiedades/flex-grow'>flex-grow</a>, <a href='/Doc/CSS/Propiedades/flex-shrink'>flex-shrink</a>, y <a href='/Doc/CSS/Propiedades/flex-basis'>flex-basis</a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'>flex: grow shrink basis;</pre>
<hr />
<h2>flex-grow</h2>
<p>La propiedad <a href='/Doc/CSS/Propiedades/flex-grow'>flex-grow</a> nos permite especificar el factor de crecimiento para un <code>flex-item</code>. De esta forma tenemos la habilidad de poder hacer crecer un flex-item especificando una proporción.</p>
<p><b>Por defecto es 0</b>, si es 0 no se aplicará ninguna correción de tamaño al <code>flex-item</code>. En caso de no ser 0, el valor determina la proporción de espacio que debe utilizar un <code>flex-item</code> en relación con los demás <code>flex-items</code></p>. 
<div class='nota'>No se puede especificar valores negarivos.</div>
<br />
<hr />
<h2>flex-shrink</h2>
<p>La propiedad <a href='/Doc/CSS/Propiedades/flex-shrink'>flex-shrink</a> se utiliza para especificar factor de contracción de un <code>flex-item</code>.</p>
<p>Si el valor es 0, se utilizara el valor de <a href='/Doc/CSS/Propiedades/flex-basis'>flex-basis</a> como referencia.
    En caso de que el valor no sea 0, especifica cómo el elemento se reducirá en relación con el resto de los elementos flexibles en el interior del mismo contenedor. <b>Por defecto es 1</b>.</p>
<div class='nota'>No se puede especificar valores negarivos.</div>
<br />
<hr />
<h2>flex-basis</h2>
<p>La propiedad <a href='/Doc/CSS/Propiedades/flex-basis'>flex-basis</a> se utiliza para especificar el tamaño de un <code>flex-item</code> antes de distribuir el tamaño disponible según las normas del contenedor flexible.</p>
<table class='Tabla'>
    <tr>
        <td><i>Valor</i></td>
        <td>
            El valor puede ser cualquier tipo de <a href="/Doc/CSS/Unidades">unidad</a> válido tanto relativo como absoluto (px, cm, em, %, etc...)             
        </td>
    </tr>
    <tr>
        <td><b>auto</b></td>
        <td>
            Se obtiene el valor basandose en el tamaño de su propio contenido. <b>Este es el valor por defecto</b>.
        </td>
    </tr>
</table><br />

<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS3.</p>
