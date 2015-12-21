<p>Esta regla nos permite especificar un conjunto de selectores que solo se utilizaran en el caso de estar en el medio especificado.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='devildrey33_Marco Pre_Sintaxis'>@media not|only &lt;tipo de medio&gt; and (Caracteristicas) { <b>Selectores</b> }</pre>
<div class='nota'>Si no especificamos <code>not</code> o <code>only</code> por defecto se tratará como <code>only</code>.</div>
<h2>Tipos de medio</h2>
<table class='Tabla'>
    <tr>
        <td><b>all</b></td>
        <td>Todos los medios posibles.</td>
    </tr>
    <tr>
        <td><b>braile</b></td>
        <td>Para dispositivos tactiles con soporte para braile.</td>
    </tr>
    <tr>
        <td><b>embossed</b></td>
        <td>Para dispositivos de impresión braile.</td>
    </tr>
    <tr>
        <td><b>handheld</b></td>
        <td>Para dispositivos de mano (normalmente pequeña pantalla, ancho de banda limitado).</td>
    </tr>
    <tr>
        <td><b>print</b></td>
        <td>Para previsualizaciones de impresión.</td>
    </tr>
    <tr>
        <td><b>projection</b></td>
        <td>Para presentación, por ejemplo en proyectores.</td>
    </tr>
    <tr>
        <td><b>screen</b></td>
        <td>Para pantallas de ordenador a color.</td>
    </tr>
    <tr>
        <td><b>speech</b></td>
        <td>Para sintetizadores.</td>
    </tr>
    <tr>
        <td><b>tty</b></td>
        <td>Para medios de comunicación que utilizan una cuadrícula de caracteres fija (como teletipos, terminales o dispositivos portátiles con capacidades de visualización limitadas). No se debe utilizar <a href="/Doc/CSS/Unidades">unidades de pixel</a> con este tipo de medio.</td>
    </tr>
    <tr>
        <td><b>tv</b></td>
        <td>Para televisores (baja resolución, color, limitaciones de scroll, y sonido disponible).</td>
    </tr>

</table><br />

<h2>Caracteristicas</h2>

<table class='Tabla'>
    <tr>
        <td><b>aspect-ratio</b></td>
        <td>La relación entre la anchura y la altura de la vista (espacio de la ventana cliente / viewport).</td>
    </tr>
    <tr>
        <td><b>color</b></td>
        <td>Número de bits que usa cada canal de color.</td>
    </tr>
    <tr>
        <td><b>color-index</b></td>
        <td>Número de colores que se pueden mostrar en el dispositivo.</td>
    </tr>
    <tr>
        <td><b>device-aspect-ratio</b></td>
        <td>La relación entre la anchura y la altura de la dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>device-height</b></td>
        <td>La altura del dispositivo.</td>
    </tr>
    <tr>
        <td><b>device-width</b></td>
        <td>El ancho del dispositivo.</td>
    </tr>
    <tr>
        <td><b>grid</b></td>
        <td>Si el dispositivo usa una rejilla o un mapa de bits.</td>
    </tr>
    <tr>
        <td><b>height</b></td>
        <td>La altura de la ventana cliente / viewport.</td>
    </tr>
    <tr>
        <td><b>max-aspect-ratio</b></td>
        <td>La relación máxima entre la anchura y la altura de la vista (espacio de la ventana cliente / viewport).</td>
    </tr>
    <tr>
        <td><b>max-color</b></td>
        <td>El número máximo de bits por canal de color del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>max-color-index</b></td>
        <td>El número máximo colores que puede mostrar el dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>max-device-aspect-ratio</b></td>
        <td>El máximo de relación entre la altura y el ancho del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>max-device-height</b></td>
        <td>La altura máxima del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>max-device-width</b></td>
        <td>El ancho máximo del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>max-height</b></td>
        <td>El ancho máximo de la ventana del navegador.</td>
    </tr>
    <tr>
        <td><b>max-monochrome</b></td>
        <td>El máximo de bits por color en un dispositivo monocromo.</td>
    </tr>
    <tr>
        <td><b>max-resolution</b></td>
        <td>El máximo de resolución del dispositivo de salida, se obtiene en <a href="/Doc/CSS/Unidades">dpi</a> o <a href="/Doc/CSS/Unidades">dpcm</a>.</td>
    </tr>
    <tr>
        <td><b>max-width</b></td>
        <td>La altura máxima de la ventana del navegador.</td>
    </tr>
    
    
    <tr>
        <td><b>min-aspect-ratio</b></td>
        <td>La relación mínima entre la anchura y la altura de la vista (espacio de la ventana cliente / viewport).</td>
    </tr>
    <tr>
        <td><b>min-color</b></td>
        <td>El número mínimo de bits por canal de color del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>min-color-index</b></td>
        <td>El número mínimo colores que puede mostrar el dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>min-device-aspect-ratio</b></td>
        <td>El mínimo de relación entre la altura y el ancho del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>min-device-height</b></td>
        <td>La altura mínima del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>min-device-width</b></td>
        <td>El ancho mínimo del dispositivo de salida (pantalla).</td>
    </tr>
    <tr>
        <td><b>min-height</b></td>
        <td>El ancho mínimo de la ventana del navegador.</td>
    </tr>
    <tr>
        <td><b>min-monochrome</b></td>
        <td>El mínimo de bits por color en un dispositivo monocromo.</td>
    </tr>
    <tr>
        <td><b>min-resolution</b></td>
        <td>El mínimo de resolución del dispositivo de salida, se obtiene en <a href="/Doc/CSS/Unidades">dpi</a> o <a href="/Doc/CSS/Unidades">dpcm</a>.</td>
    </tr>
    <tr>
        <td><b>min-width</b></td>
        <td>La altura mínima de la ventana del navegador.</td>
    </tr>    

    <tr>
        <td><b>monochrome</b></td>
        <td>El número de bits por color en un dispositivo monocromo.</td>
    </tr>
<!--
    <tr>
        <td><b>overflow-block</b></td>
        <td>Cómo el ... (añadido en MediaQueries nivel 4).</td>
    </tr> 
    <tr>
        <td><b>overflow-inline</b></td>
        <td>Cómo el ... (añadido en MediaQueries nivel 4).</td>
    </tr>     
    -->
    <tr>
        <td><b>resolution</b></td>
        <td>La resolución del dispositivo de salida, se obtiene en <a href="/Doc/CSS/Unidades">dpi</a> o <a href="/Doc/CSS/Unidades">dpcm</a>.</td>
    </tr>
    <tr>
        <td><b>scan</b></td>
        <!-- locualo?? -->
        <td>El proceso de escaneado del dispositivo de salida.</td>
    </tr>
    <tr>
        <td><b>update-frequency</b></td>
        <td>Con que velocidad puede el dispositivo de salida modificar la apariencia del contenido (añadido en MediaQueries nivel 4).</td>
    </tr>
    <tr>
        <td><b>width</b></td>
        <td>El ancho de la ventana cliente / viewport.</td>
    </tr>
</table>

<hr />
<h2>Compatibilidad</h2>
<p>Esta regla es soportada por todos los navegadores compatibles con CSS3.</p>
