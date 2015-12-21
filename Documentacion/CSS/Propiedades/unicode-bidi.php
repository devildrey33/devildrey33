<p>Propiedad que permite especificar junto con la propiedad <a href="direction" target="_blank">direction</a> hacia donde se escribe el texto.</p>
<div class='nota'>Esta propiedad resulta util para escribir en varios idiomas que no compartan la misma dirección al escribir. En castellano escribimos de izquierda a derecha, pero por ejemplo con el japonés se escribe de derecha a izquierda.</div>
<br />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'>unicode-bidi: valor;</pre>
<table class='Tabla'>
    <tr>
        <td><b>normal</b></td>
        <td>El elemento no abre un nivel adicional de incrustación. Para los elementos en línea, la reordenación implícita funciona a lo largo de los límites de los elementos. <b>(valor por defecto)</b></td>
    </tr>
    <tr>
        <td><b>bidi-override</b></td>
        <td>Igual que el valor <b>embed</b> , excepto por el hecho de que dentro del elemento la reordenación se realiza de forma secuencial únicamente en función de la propiedad <a href="direction" target="_blank">direction</a> . Este valor reemplaza al algoritmo bidireccional implícito.</td>
    </tr>
    <tr>
        <td><b>embed</b></td>
        <td>El elemento abre un nivel adicional de incrustación. El valor de la propiedad <a href="direction" target="_blank">direction</a> especifica el nivel de incrustación. Dentro del elemento, la reordenación es implícita.</td>
    </tr>
</table><br />
<div class='nota'>El algoritmo bidireccional Unicode invierte automáticamente las secuencias de caracteres incrustados en función de su dirección inherente. Por ejemplo, la dirección base de un documento en inglés es de izquierda a derecha. Si parte de un párrafo dentro del documento incluye un idioma con un orden de lectura de derecha a izquierda, la dirección de dicho idioma se muestra correctamente de derecha a izquierda. El explorador que aplica el algoritmo bidireccional invierte la dirección del idioma correctamente.</div>
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad está soportada por todos los navegadores compatibles con CSS2.</p>
