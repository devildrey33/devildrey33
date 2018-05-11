<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Esta propiedad corta nos permite especificar las propiedades <a href="font-family">font-family</a>, <a href="font-size">font-size</a>, <a href="font-style">font-style</a>, <a href="font-weight">font-weight</a>, <a href="font-variant">font-variant</a>, y <a href="line-height">line-height</a> en la misma declaración.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>font:<b>valores</b>;</pre>
<table class='Tabla'>
    <tr>
        <td style='width:175px;'><a href='font-family'><b>font-family</b></a></td>
        <td>Requerido, define el nombre de la fuente.</td>
    </tr>
    <tr>
        <td><a href='font-size'><b>font-size</b></a> / <a href='line-height'><b>line-height</b></a></td>
        <td>Requerido / Opcional, especifica el tamaño de la fuente / especifica el tamaño de la linea. Para más información sobre los valores posibles consulta la <a href="/Doc/CSS/Unidades/" target="_blank">Referencia CSS : Unidades</a>.
        	<div class='nota'>El tamaño de la linea es opcional, si deseas agregarlo debes agregarlo detras del tamaño de la fuente separando los dos tamaños con una barra. Ejemplo <code>12px / 20px</code>.</div>
        </td>
    </tr>
    <tr>
        <td><a href='font-style'><b>font-style</b></a></td>
        <td>Opcional, especifica el estilo de la fuente. Por defecto es <code>normal</code>.</td>
    </tr>
    <tr>
        <td><a href='font-weight'><b>font-weight</b></td></td>
        <td>Opcional, define el grosor de la fuente. Por defecto es <code>normal</code>.</td>
    </tr>
    <tr>
        <td><a href='font-weight'><b>font-variant</b></td></td>
        <td>Opcional, permite utilizar la fuente unicamente con mayusculas, las letras que representan minusculas se mostraran en mayuscula con un tamaño mas pequeño. Por defecto es <code>normal</code>.</td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>
        </td>
    </tr>
</table><br />
<div class='nota'>Además de los valores mencionados se puede utilizar uno de los siguientes sets predefinidos :<br />
<br />
    <table>
        <tr>
            <td><b>caption</b></td>
            <td>Utiliza la fuente de controles como los botones.</td>
        </tr>
        <tr>
            <td><b>icon</b></td>
            <td>Utiliza la fuente de las etiquetas para los iconos.</td>
        </tr>
        <tr>
            <td><b>menu</b></td>
            <td>Utiliza la fuente de los menus desplegables.</td>
        </tr>
        <tr>
            <td><b>message-box</b></td>
            <td>Utiliza la fuente de los cuadros de mensaje.</td>
        </tr>
        <tr>
            <td><b>small-caption</b></td>
            <td>Versión mas pequeña de las fuentes de controles como los botones.</td>
        </tr>
        <tr>
            <td><b>status-bar</b></td>
            <td>Utiliza la fuente de la barra de estado.</td>
        </tr>    
    </table>    
</div>
