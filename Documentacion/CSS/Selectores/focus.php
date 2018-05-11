<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector apunta al elemento que tiene el foco del teclado.</p>
<p>Para entender mejor que es el foco del teclado, tenemos que pensar que en general los PC's solo disponen de un teclado y por ello los Sistemas Operativos re-direccionan el teclado a un único objeto. Si por ejemplo tenemos 4 input box para escribir texto, solo podemos escribir texto en uno de ellos hasta que no hagamos click con el mouse en otro. En ese momento el foco del teclado se asígna al control en el que hacemos click.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>:focus { };</pre>
