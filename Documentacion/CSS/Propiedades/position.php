<p>Esta propiedad nos permite especificar el tipo de posicionamiento para un objeto.</p>
<p>Antes de nada hay que tener bien claro el concepto de que es la ventana y que es el documento. Si os fijáis en la siguiente foto sale un navegador con mi web, en él podemos ver un recuadro rojo que enmarca lo que sería el objeto <code>window</code> (ventana en castellano), y más abajo se puede ver con un marco naranja saliendo de la foto del navegador, lo que representa que queda del <code>document</code> (documento en castellano).</p>
<img src='http://img.devildrey33.es/window-document.png' alt="Diferencias entre ventana y documento">
<p>Dependiendo del valor que asignemos a la propiedad <code>position</code> trabajaremos relativamente a la ventana (<code style="color:red">window</code>), o a el documento (<code style="color:orange">document</code>).</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>position: <b>Valor</b>;</pre>
<table class='Tabla'>
    <tr>
        <td><b>static</b></td>
        <td>
        	Define al objeto como estático, y este se posicionara automáticamente debajo de la etiqueta que tenga anteriormente. Este es el valor por defecto.
            <div class='nota'>Los elementos static no pueden ser posicionados con las propiedades <a href="top">top</a>, <a href="left">left</a>, <a href="bottom">bottom</a>, y <a href="right">right</a>.</div>
        </td>
    </tr>
    <tr>
        <td><b>absolute</b></td>
        <td>
        	Define el objeto como absoluto, y este se posicionará relativamente a su primer padre que no sea estático (si no existe tal padre, se posicionara al inicio del documento). Hay que destacar que con esta propiedad se trabaja con la posición relativa al padre no estatico, por lo que si especificamos <code>bottom:0px;</code>, el elemento se colocara justo al final del padre no estatico, y necesitaremos bajar el scroll vertical para poder verlo.
            Otra cosa a destacar es que las coordenadas X-Y empiezan desde el elemento padre que no sea estático, por lo que si asignamos <code>left:50px;</code>, el objeto se moverá 50 pixeles hacia la derecha partiendo de la posición del primer padre no estático.
        </td>
    </tr>
    <tr>
        <td><b>fixed</b></td>
        <td>
        	Define el objeto como fijo, y este se posicionará relativamente a la ventana. Por ello si especificamos <code>bottom:0px;</code>, el objeto quedará <b>SIEMPRE</b> alineado abajo de la ventana por mucho que movamos el scroll. En este caso las coordenadas X-Y empiezan desde arriba a la izquierda de la ventana.
        </td>
    </tr>
    <tr>
        <td><b>relative</b></td>
        <td>
        	Define el objeto como relativo, y este se posicionará relativamente a la posición que debería tener si fuera static. La diferencia entre este valor y static es que con este si que podemos utilizar las propiedades <a href="top">top</a>, <a href="left">left</a>, <a href="bottom">bottom</a>, y <a href="right">right</a> para mover el objeto. En este caso las coordenadas X-Y empiezan justo donde empieza el objeto, por lo que si queremos moverlo hacia a la izquierda necesitaremos darle un valor negativo a la propiedad <code>left</code>. 
            <div class='nota'>Al crear el elemento como relativo, el navegador reserva el espacio que ocupa este dentro del flujo de elementos, aunque luego lo movamos.</div>
            
        </td>
    </tr>
    <tr>
        <td><b>inherit</b></td>
        <td>Se heredara el estilo de su objeto padre.
        	<div class='nota'>Este valor no se soporta en IE7, y en IE8 requiere la declaración de un <code>!DOCTYPE</code>.</div>        
        </td>
    </tr>
</table><br />
<hr />
<h2>Compatibilidad</h2>
<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS2.</p>
