<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;
?>
<p>Este selector apunta a los controles input[type=radio], o input[type=checkbox] marcados.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>:checked { };</pre>

<h2>¿Sabías que...?</h2>
<p>Se puede utilizar el selector checked para definir atributos de uno o mas objetos adyacentes. Por ejemplo podemos ocultar el input[radio/checkbox] y dejar un label personalizado en su lugar y asociar dicho label al input. Una vez asociados, los clicks que se hacen en el label, repercutiran en el estado del input ocultado. Mira este ejemplo : <a href='/Lab/Ejemplos/Checked/CheckBox-basico.html' target='_blank'>CheckBox-basico</a></p>
<p>Incluso se puede complicar mas la cosa y crear controles para todo tipo de situaciones, solo hace falta echarle imaginación. En el siguiente ejemplo utiliza un grupo de contrones input[radio] personalizados, que al presionarlos muestran una tarjeta con información : <a href='/Lab/Ejemplos/Checked/RadioBox-avanzado.html' target='_blank'>RadioBox-avanzado</a> </p>
