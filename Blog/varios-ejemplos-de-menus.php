<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$HEAD = "
";
	
	$Base->InicioPlantilla("Varios ejemplos de menus", $HEAD);*/
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Ejemplos menús'>
	<meta name='keywords' content='Menu CSS, Menu JavaScript'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Varios ejemplos de menús", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Varios ejemplos de menús");
        echo "<script>\$Base.CargarCSS('Blog_varios-ejemplos-de-menus.css');</script>";        
?>	
                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_VariosMenus.png" alt="Varios Menus" />
                <p>He estado haciendo pruebas con menús y sobretodo con CSS para practicar con las transiciones, y me estoy dando cuenta de que en CSS resulta muy difícil por no decir imposible en algunas situaciones hacer código re-aprovechable para las animaciones/transiciones en el sentido de que si añades/modificas/eliminas un menú tendrás que volver a editar el CSS. En cambio en JavaScript si te lo montas bien puedes hacer las cosas más dinámicas de forma que si modificas el menú no tengas que tocar ni JavaScript ni CSS.</p>
                <p>La intención en principio era trastear un rato con transiciones complejas, ya que exceptuando el primer ejemplo los demás al desplegarse utilizan una transición, y al resaltar sus items utilizan otra transición dentro de la primera.</p>
                <p>También he querido poner énfasis en hacer los menús lo más cómodos posible, dejando retrasos (delay) al plegarse para que el usuario tenga tiempo de moverse por el menú.</p>
                <!-- FIN_INTRODUCCION -->
                <br /><hr />
                
                <h2>Menú Subrayado (JQuery)</h2>
                <p>Este es un menú simple sin sub-menús que tiene una animación en el subrayado implementada en JQuery. Esta animación debe calcular el ancho y la posición del item donde está el mouse para calcular el ancho y la posición inicial de la barra de subrayado.</p>
                <p>Se podría hacer también con CSS, pero no veo ninguna forma de hacerlo dinámico es decir que calcule automáticamente los items del menú para desplazar la barra del subrayado, así que la única solución viable que veo seria medir cada parte del menú, e implementar una transición especificando la posición para cada parte del menú.</p>
                <p>Para este caso en concreto yo he apostado por la comodidad de poder añadir/modificar/eliminar items sin tener que tocar código javascript ni css.</p>
                <iframe src='/Ejemplos/Menus/MenuSubrayado.html' class='postit Centrado' id="Marco1"></iframe>
               	
                <a href="/Lab/Ejemplos/Menus/MenuSubrayado.html" class="Boton Centrado">Ver código de ejemplo</a>

				<br /><hr />
                
                <h2>Menú Des-alineado (CSS3)</h2>
                <p>Este es un menú padre que contiene varios submenus, al desplegarse hace una rotación de los items y los deja torcidos. Al pasar por encima de un item, este se escala a una proporción de 1.2.</p>
                <p>Los menuitems se han hecho con la propiedad <a href="/Doc/CSS/Propiedades/position" target="_blank">position</a> en <code>absolute</code>.</p>
                <p>Para la animación del despliegue se ha utilizado la propiedad <a href="/Doc/CSS/Propiedades/transition" target="_blank">transition</a> con las propiedades <a href="/Doc/CSS/Propiedades/top" target="_blank">top</a>, y <a href="/Doc/CSS/Propiedades/transform" target="_blank">transform</a> (<a href="/Doc/CSS/Funciones/rotateZ" target="_blank">rotateZ</a> y <a href="/Doc/CSS/Funciones/scale" target="_blank">scale</a>).</p>
                <p>Al hacerlo con CSS sin nada de javascript no tengo forma de hacer los items torcidos aleatoriamente (con php se podría pero no es una práctica aconsejable), y además tengo que calcular sus posiciones a mano.</p>
                <p>Otra cosa que no me ha gustado y que creo que mejoraría con JavaScript es el efecto de la escala, ya que por alguna razón repinta todos los items y se hacen como borrosos. Curiosamente en internet explorer 10 es donde se ve mas fino.</p>
                <p>Por ultimo también hay que remarcar que tiene una transición en el marco principal con el degradado, y que al pasar el mouse por encima se hace mas luminoso. Aunque algunos navegadores antiguos no soporten transiciones con degradados de fondo, se puede hacer un degradado con uno de los colores translucido, y luego modificarlo haciendo un <a href="/Doc/CSS/Propiedades/transition" target="_blank">transition</a> a la propiedad <a href="/Doc/CSS/Propiedades/background-color" target="_blank">background-color</a>.</p>

                <iframe class='postit' id='Marco2' src="/Ejemplos/Menus/MenuDesalineado.html"></iframe>
               
                <a href="/Lab/Ejemplos/Menus/MenuDesalineado.html" class="Boton Centrado">Ver código de ejemplo</a>


				<br /><hr />
                <h2>Menú Pregunta (CSS3)</h2>
                <p>Este menú sigue en la dinámica del anterior con la diferencia de que muestra sus items en una sola fila.</p>
                <p>A diferencia del menú anterior este se centra en el documento, y sus items tienen el <a href="/Doc/CSS/Propiedades/position" target="_blank">position</a> a <code>relative</code>, para poder centrar el contenido sin complicaciones.</p>
                <p>La parte de la animación del despliegue se ha hecho con la propiedad <a href="/Doc/CSS/Propiedades/transition" target="_blank">transition</a> aplicado a las propiedades <a href="/Doc/CSS/Propiedades/top" target="_blank">top</a>, <a href="/Doc/CSS/Propiedades/left" target="_blank">left</a>, y <a href="/Doc/CSS/Propiedades/transform" target="_blank">transform</a> (<a href="/Doc/CSS/Funciones/rotateZ" target="_blank">rotateZ</a>).</p>
                <iframe id='Marco3' class='postit' src="/Ejemplos/Menus/MenuPregunta.html"></iframe>
                
                <a href="/Lab/Ejemplos/Menus/MenuPregunta.html" class="Boton Centrado">Ver código de ejemplo</a>

				<br /><hr />
                <h2>Menú Esfera (CSS3)</h2>
                <p>Este menú es sin duda el que mejor me ha quedado, y además es el único desde mi punto de vista que realmente merece la pena crear en puro CSS3 y posicionar sus items a mano.</p>
                <p>Cada esfera pequeña tiene su propia transición para empezar con 100 milisegundos de retraso la animación.</p>
                <p>Al perder el foco también requiere una transición para cada esfera, ya que queremos dejar un retardo (Delay) de como mínimo medio segundo (100 milisegundos más para cada esfera pequeña) para que el usuario tenga tiempo de mover el mouse por las esferas sin que se vuelvan a su posición oculta/inicial.</p>
                <iframe id='Marco4' class='postit' src="/Ejemplos/Menus/MenuEsfera.html"></iframe>

                <a href="/Lab/Ejemplos/Menus/MenuEsfera.html" class="Boton Centrado">Ver código de ejemplo</a>

				<br /><hr />

                <p>En definitiva mi conclusión es que si hay que hacer un menú que sabemos que va a tener siempre el mismo número de opciones suele ser más acertado utilizar el máximo de CSS posible, pero si necesitamos un menú dinámico que va a estar cambiando cada dos por tres, lo mejor es basarse JavaScript y desde él si es posible invocar a alguna animación o transición, y si no es posible por temas de diseño la función animate del jquery hace maravillas.</p>



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     