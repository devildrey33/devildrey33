<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Animaciones CSS3", "");*/

	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Animaciones CSS3">
        <meta name="keywords" content="Animaciones CSS3">';

	
        $Base->InicioPlantilla(basename(__FILE__), "Animaciones CSS3", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Animaciones CSS3");
        
        ?>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Animaciones CSS" />
                <p>Desde hace algún tiempo que he empezado a añadirle poco a poco varias animaciones en CSS3 a mi web. Y al ver que últimamente recibo mensajes sobre ellas, he creído conveniente crear este articulo para enseñaros un poco por dentro dichas animaciones.</p>
                <p>Supongo que los usuarios de Chrome, Firefox, y safari os habréis fijado en la animación de las fotos de las entradas aleatorias (que parten desde arriba del documento, y caen hasta su posición por defecto con un pequeño efecto muelle), o en la animación del contenido al cargar / salir de la pagina (que hace una rotación del contenido).</p>
                <p>Pues ahora podréis ver con más detalle como funcionan estas animaciones.</p>
                <!-- FIN_INTRODUCCION -->
				<p>Antes de nada deberíais conocer un poco por encima las propiedades animation del CSS3 : <a href="/Doc/CSS/Reglas/@keyframes" target="_blank">@keyframes</a>, <a href="/Doc/CSS/Propiedades/animation" target="_blank">animation</a>, <a href="/Doc/CSS/Propiedades/animation-delay" target="_blank">animation-delay</a>, <a href="/Doc/CSS/Propiedades/animation-direction" target="_blank">animation-direction</a>, <a href="/Doc/CSS/Propiedades/animation-duration" target="_blank">animation-duration</a>, <a href="/Doc/CSS/Propiedades/animation-name" target="_blank">animation-name</a>, <a href="/Doc/CSS/Propiedades/animation-iteration-count" target="_blank">animation-iteration-count</a>, <a href="/Doc/CSS/Propiedades/animation-play-state" target="_blank">animation-play-state</a>, <a href="/Doc/CSS/Propiedades/animation-timing-function" target="_blank">animation-timing-function</a>.</p>
                <div class='nota'> Los enlaces anteriores corresponden a la <a href="/Doc/CSS/Propiedades/" target="_blank">Referéncia de propiedades CSS</a> que hace algún tiempo que estoy preparando pero aun está incompleta.</div>
				<br />
				<h2>Rotación del contenido</h2>
				<p>Vamos a empezar por la animación menos complicada, que sería la de rotar el contenido. La idea es que imaginemos el contenido como una hoja de papel que estamos mirando por su parte lateral fina, y que la vamos girando hasta quedar plana.</p>
                
                <p>Partiendo de que tenemos un div con la id <code>#Contenido</code> que teóricamente está lleno de texto e imágenes, por ejemplo este articulo, necesitamos definir la animación para él :</p>
                
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_Rotacion3D", "Rotación del contenido", "../Ejemplos/Animation/Rotacion3D.html", "Contenido"); ?>
                <p>Con este código estamos indicando que el <code>#Contenido</code> usara una animación linear durante 1 segundo con los keyframes definidos en KFRotacion3D.</p>
				<div class='nota'>Fijaros que he definido la misma propiedad 5 veces con prefijos distintos (uno para cada navegador actual)</div>
				<p>Ahora veamos como habría que definir la línea de tiempo para la animación (keyframes) : </p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_Rotacion3D2", "Línea de tiempo para la animación", "../Ejemplos/Animation/Rotacion3D.html", "KFRotacion3D"); ?>
				<p>Fijaros que se define una línea con 0% (inicio) y otra con 100% (final), es decir que la animación empieza con opacidad 0 y una rotación de 90 grados a la Y, y termina con una opacidad de 1 y una rotación de 0 grados a la Y.</p>
                <div class='nota'>Dentro de un keyframe podemos definir tantos pasos como queramos, por ejemplo podríamos empezar a hacer la rotación a partir del 75% de la animación, para ello bastaría con añadir otra línea con el 75% y las propiedades que queremos animar.</div>
                
                <p>Al principio puede que os suene todo a chino, pero la verdad es que es muy fácil hacer animaciones con este sistema.</p>

                <div class='Centrado'>
                    <a href='/Lab/Ejemplos/Animation/Rotacion3D.html' class='Boton-Normal'>Ver Ejemplo</a>
                </div>
                
                
                <h2>Objetos que caen desde arriba del navegador</h2>
                <p>Esta animación es la que se ven las imágenes de las entradas aleatorias cayendo desde arriba del navegador. La idea es que caiga la imagen desde arriba, y una vez llega al suelo (su posición Y 0) se comprima la altura como si fuera un muelle, y finalmente se restablezca su altura original.</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_CajaCayendoScale", "Objeto cayendo", "../Ejemplos/Animation/CajaCayendoScale.html", "Animacion"); ?>
                <p>Los objetos <code>Animacion</code> en este caso tienen un tamaño fijo de 155x125, la posición relativa (de esta forma podemos modificarla), el fondo blanco con un borde gris, se alinean a la derecha, y tienen un margen a la derecha de 20 pixeles. La animación durara un segundo (realmente no durara un segundo, pero necesitamos un valor inicial), será lineal y usara los keyframes CajaCayendo.</p>
                <p>Veamos la línea del tiempo <code>CajaCayendo</code> :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_CajaCayendoScale2", "Línea de tiempo para la animación", "../Ejemplos/Animation/CajaCayendoScale.html", "CajaCayendo"); ?>
                <p>En esta ocasión ya utilizamos 4 porcentajes de tiempo, al principio la altura es de -600 pixeles, cuando la animación llega al 75% el objeto toca el suelo, al 90% comprimimos la altura del objeto a una escala de 0.8 y rebajamos la 'Y' inicial 15 pixeles (para que el objeto siga tocando el suelo, al haber rebajado la altura un 0.8% el objeto mide unos 15 pixeles menos, que son los que sumamos a la Y), y finalmente al llegar al 100% volvemos a poner la Y a 0 y restauramos la proporción original de la altura.</p>
				<div class='nota'>En este ejemplo no he incluido el código para FireFox, IE10, Opera, y la propiedad final, ya que me pareció innecesario ocupar media web con lo mismo, pero siguen siendo necesarios si queremos que la animación sea compatible con todos los navegadores.</div>
				<p>Ahora nos falta por ver como gestionamos la duración de la animación. Al utilizar varios objetos (en este caso 6) lo ideal es que los objetos no caigan todos al mismo tiempo, para ello vamos a crear 6 clases cada una con una duración distinta :</p>                
                <?php $Base->PintarCodigo->PintarArchivoCSS("ID_CajaCayendoScale3", "Duraciones para los 6 objetos", "../Ejemplos/Animation/CajaCayendoScale.html", "Duracion"); ?>
				<p>Fijaros que cada clase <code>Duracion</code> tiene un tiempo distinto para la animación, de esta forma conseguimos un efecto un poco mas alborotado. Además si creamos los objetos con php podemos mezclar las duraciones de forma que la animación nunca parece exactamente igual.</p>

                <div class='Centrado'>
                    <a href='/Lab/Ejemplos/Animation/CajaCayendoScale.html' class='Boton-Normal'>Ver Ejemplo</a>
                </div>
                
                <p>Y con esto terminamos por hoy, espero que os sirva de ayuda!.</p>
                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>