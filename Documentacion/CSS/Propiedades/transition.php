<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Propiedad corta que nos permite especificar las propiedades <a href="transition-delay">transition-delay</a>, <a href="transition-duration">transition-duration</a>, <a href="transition-timing-function">transition-timing-function</a>, y <a href="transition-property">transition-property</a>.</p>
<div class='nota'>Las transiciónes se suelen utilizar para el selector <code>:hover</code>, aunque tambien se pueden utilizar para el selector <code>:active</code>.</div>
<br />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>transition: <b>transition-property</b>&nbsp;<b>transition-duration</b>&nbsp;<b>transition-timing-function</b>&nbsp;<b>transition-delay</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b><a href="transition-property">transition-property</a></b></td>
        <td>Especifica la propiedad que se usará en la transición. Por defecto es <code>all</code>.</td>
    </tr>
    <tr>
        <td><b><a href="transition-duration">transition-duration</a></b></td>
        <td>Especifica el tiempo que necesitara la transición para completarse en segundos(s) o milisegundos(ms). Por defecto es <code>0</code>.</td>
    </tr>
    <tr>
        <td><b><a href="transition-timing-function">transition-timing-function</a></b></td>
        <td>Especifica la curva de velocidad que se usará para la transición. Por defecto es <code>ease</code>.</td>
    </tr>
    <tr>
        <td><b><a href="transition-delay">transition-delay</a></b></td>
        <td>Especifica el tiempo que tardará en arrancar la transición. Por defecto es <code>0</code>.</td>
    </tr>
</table><br />
<div class='nota'>Si deseas especificar mas de una propiedad para la transición, debes separarlas por una coma, ademas tambien tienes que especificar como minimo la duración para esa propiedad en concreto. Por ejemplo : <code>transition:width 5s linear 0s, height 5s;</code>.<br />Fijate que en el parámetro <i>height</i> no he especificado ni el <i>timing-function</i> ni el <i>delay</i>, por lo que tomaran los valores por defecto <code>ease 0s</code>.</div>
