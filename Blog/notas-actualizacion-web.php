<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Animaciones CSS3", "");*/

	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Apuntes sobre la actualización del sitio web http://devildrey33.es">'.Intro().
        '<meta name="keywords" content="Notas actualización devildrey33">';

	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Notas sobre la actualización de la web", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Notas sobre la actualización de la web");
        
        ?>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Logo.png" alt="Notas del nuevo look" />
                <p>Buenas! hacía ya algún tiempo que no he dado señales de vida por aquí. Hoy me complace enseñaros el nuevo look para mi web, pero no es solo un nuevo look si no que prácticamente el 100% de la web ha sido re-hecho desde cero.</p>
                <p>Una de las razones por la que no he estado al pie del cañón, es porque me había aburrido del aspecto de la web, y solo en pensar en hacerle algún parche ya me desanimaba un poco. Mantener una web con las ultimas tecnologías, que lleva mas de 5 años resulta un poco complicado hoy en día, por lo que a principios del 2015 me decidí a empezar de nuevo toda la web.</p>
                <p>Esta vez he puesto mucho interés en que la web se vea perfectamente en dispositivos móviles, eso si para verla hay que usar un navegador decente actualizado.</p>
                <p>La web solo funciona en navegadores de última generación, en IE 11 debería funcionar bien, pero ya os digo que no me he molestado mucho en comprobarlo, en versiones anteriores ni lo se, ni me importa.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Que puedo destacar del trabajo? :</p> 
                <ul>
                    <li>A simple vista se puede ver que el diseño ha variado bastante, y le da como un toque mas serio.</li>
                    <li>La web es 100% dinámica, la barra principal y la barra de navegación están siempre fijas, todo lo demás se carga al vuelvo mediante ajax.</li>
                    <li>Todas las animaciones están hechas con CSS por lo que el navegador sufre menos, y se ven mucho mas fluidas.</li>
                    <li>La web es totalmente responsive por lo que en dispositivos móviles se ve bastante bien. Todos los menús son 100% accesibles desde dispositivos móviles.</li>
                    <li>He mejorado mucho la navegación de forma que se puede llegar a cualquier parte de la web fácilmente con unos pocos clicks.</li>
                    <li>He modificado el 99% de las URLS para que se vean de forma mas ordenada y amigable.</li>
                </ul>
                   
                <p>Por la parte interna, incluso me he creado un pequeño cms para controlar todos los aspectos de la web, la web anterior funcionaba toda a base de archivos de configuración XML.</p>
                <p>También he mejorado bastante el sistema de mensajería con texto enriquecido, en especial el editor y sus funciones. Por otra parte aún no he implementado ningún sistema de captcha, veremos cuánto dura sin que alguien me llene de spam el foro..., de todas formas dispongo de métodos para monitorizar el flujo de mensajes, y de ser necesario no permitir mas mensajes.</p>
                <p>Sobre el índice debo destacar que ahora acepta entradas del laboratorio, esto quiere decir que si un día estoy inspirado y no tengo ganas de hacer un artículo/tutorial, siempre puedo currarme un ejemplo en el laboratorio y dejarlo en portada.</p>

                <p>En definitiva, visualmente considero que ha quedado muy bien, y en cuanto al código interno os aseguro que me he quedado muy satisfecho.</p>
                <p>Y con esto me despido por hoy, Saludos!</p>
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>