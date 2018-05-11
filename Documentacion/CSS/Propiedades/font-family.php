<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad nos permite especificar la fuente que se usara.</p>
<p>Se puede especificar un nombre concreto de fuente, por ejemplo <code>Times New Roman</code>, una familia de fuentes, por ejemplo <code>times</code>, o una familia genérica como por ejemplo <code>serif</code>.</p>
<div class='nota'>Es muy recomendable por no decir imprescindible añadir en primer lugar el nombre de la fuente concreta que deseamos utilizar, y luego añadir una familia de fuentes o una familia genérica, por si se da el caso en que el navegador no puede cargar la fuente que seleccionamos inicialmente.
<br />Cada sistema operativo tiene sus fuentes y no tienen porque parecerse, además aunque utilicemos la regla <a href='/Doc/CSS/Reglas/@font-face' target="_blank">@font-face</a> para definir nuestra propia fuente, puede darse el caso que el navegador no soporte dicha regla, por lo que deberá cargar la siguiente familia de la lista.
</div>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>font-family: <b>valor</b> ;</pre>
<div class='nota'>Se pueden añadir uno o mas valores separados por ujna coma. Si el valor incluye espacios debemos marcarlo entre comillas.</div>
<br />
<table class='Tabla'>
    <tr>
        <td><b>Nombre de la fuente</b></td>
        <td>El nombre de la fuente, por ejemplo <code>"Lucida Sans Unicode"</code>.</td>
    </tr>
    <tr>
        <td><b>Nombre de la familia</b></td>
        <td>El nombre de la familia de un tipo de fuentes, por ejemplo : <code>times, courier, arial</code>.</td>
    </tr>
    <tr>
        <td><b>Familia genérica</b></td>
        <td>El nombre de la familia generica de un tipo de fuentes, por ejemplo : <code>serif, sans-serif, cursive, fantasy, monospace</code>.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>El nombre de la fuente se heredara del objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
