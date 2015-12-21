<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("WebGL");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Ejemplos WebGL'>
	<meta name='keywords' content='WebGL'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "WebGL", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "WebGL");
        
        ?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_WebGL.png" alt="WebGL" />
                <p>WebGL es el nombre que utiliza el nuevo sistema para renderizar gráficos en 3d específicamente diseñado para HTML5, dicho sistema está basado en OpenGL, y recientemente ha llegado a la versión 1.0 por lo que ya ha pasado las fase beta, y ahora empiezan a salir aplicaciones web que utilizan esta nueva tecnología. De todas formas aunque la especificación de WebGL sea la 1.0 esto no quiere decir que los navegadores sean capaces hacerla correr al 100%, y aun pasara algún tiempo hasta que la gran mayoría de los navegadores funcionen a la perfección con aplicaciones WebGL.</p>
                <p>En la práctica esto es un avance bastante prometedor ya que convierte a la mayoría de navegadores en plataformas para visualizar gráficos en 3d (con la excepción de internet explorer como no...)</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>Por el momento aun solo existen demostraciones de dicha tecnología, que desde mi punto de vista aun requiere algunas optimizaciones, pero lo que se empieza a ver es muy esperanzador, y no me extrañaría que en un futuro empezaran a salir juegos sin nada que envidiar bajo esta plataforma (aunque aún queda mucho por hacer).</p>
                <p>El concepto de renderizar juegos bajo esta plataforma es muy innovador ya que es totalmente independiente del sistema operativo, por lo que correría tanto en windows como en linux sin necesidad de adaptar nada en teoría. Aunque para ser sinceros tenemos los señores de microsoft que siempre hacen lo que más les conviene y no es precisamente adaptarse a los estándares, por lo que no sería de extrañar que dichas aplicaciones requieran código especial para internet explorer. De todas formas sigue siendo un concepto muy innovador y el tiempo nos dirá como acaba.</p>
                <p>Además este sistema creo que acabara re-emplazando las antiguas animaciones en flash que han quedado estancadas en el pasado (sinceramente odio el flash, y en la actualidad supone un problema para plataformas de 64 bits que a día de hoy aun siguen en versión beta)</p>
                <p>Algunas de las presentaciones que más me han impresionado son las siguientes :</p>
                <h2>Cycleblob</h2>
                <p>Esta presentación / juego viene a ser como un remake de la película Tron convertida a videojuego, y aunque no presenta unos gráficos extraordinarios es un muy buen ejemplo de lo que se puede hacer con WebGL. El juego dispone de varios niveles, y la posibilidad de añadir hasta 5 competidores controlados por la CPU.</p>
                <img src="/Graficos/Cycleblob2.png" alt="CycleBlob" />
                <img src="/Graficos/Cycleblob.png" alt="CycleBlob" />
                <p>Pagina web oficial : <a href="http://www.cycleblob.com/" target="_blank">CycleBlob</a> </p>
                
                <h2>Chrome Experiments WebGL</h2>
                <p>Recientemente la gente de google han habilitado este portal donde los desarrolladores pueden colgar sus experimentos con opengl para que el resto del mundo pueda verlos.</p>
                
                <p>Aunque no he tenido tiempo de visualizarlos todos, he de decir las siguientes demostraciones me dejaron impresionado :</p>
                <ul>
                    <li><a href="http://www.chromeexperiments.com/detail/glass/?f=webgl" target="_blank">Glass</a> Este ejemplo presenta un sinfín de efectos en 3d muy bien conseguidos de la mano de <a href="http://possan.se" target="_blank">Per-Olov Jernberg</a> (aunque necesita ser optimizado).<br />
                    <img src="/Graficos/WebGL_Glass1.png" alt="Glass, Per-Olov Jernberg" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Glass2.png" alt="Glass, Per-Olov Jernberg" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Glass3.png" alt="Glass, Per-Olov Jernberg" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Glass4.png" alt="Glass, Per-Olov Jernberg" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Glass5.png" alt="Glass, Per-Olov Jernberg" style="border-color:#000; border-style:solid; border-width:1px" />
                    <br /><br /></li>
                <li><a href="http://www.chromeexperiments.com/detail/sintel-goes-boom/?f=webgl" target="_blank">Sintel Goes Boom</a> Este ejemplo es un vídeo que se va separando en cubos, y que consigue un efecto extraordinario. Creado por <a href="http://alteredqualia.com/" target="_blank">AlteredQualia</a><br />
                    <img src="/Graficos/WebGL_Sintel1.png" alt="Sintel Goes Boom" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Sintel2.png" alt="Sintel Goes Boom" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Sintel3.png" alt="Sintel Goes Boom" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Sintel4.png" alt="Sintel Goes Boom" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_Sintel5.png" alt="Sintel Goes Boom" style="border-color:#000; border-style:solid; border-width:1px" />    
                    <br /><br /></li>
                <li><a href="http://www.chromeexperiments.com/detail/helloracer-webgl/?f=webgl" target="_blank">HelloRacer</a> Este ejemplo es un modelo de un monoplaza de formula 1 al que no le falta ningún detalle, y que además podemos conducir utilizando el teclado. Creado por <a href="http://helloenjoy.com/" target="_blank">HelloEnjoy</a><br />
                    <img src="/Graficos/WebGL_HelloRacer1.png" alt="Hello Racer" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_HelloRacer2.png" alt="Hello Racer" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_HelloRacer3.png" alt="Hello Racer" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_HelloRacer4.png" alt="Hello Racer" style="border-color:#000; border-style:solid; border-width:1px" />
                    <img src="/Graficos/WebGL_HelloRacer5.png" alt="Hello Racer" style="border-color:#000; border-style:solid; border-width:1px" />    
                    <br /><br /></li>
                </ul>
                <p>Por el momento hay 30 ejemplos en la web de Chrome Experiments y anuqué la mayoría son muy buenos no veo adecuado comentarlos todos, así que mejor echad vosotros mismos un vistazo a su web para ver más ;) <a href="http://www.chromeexperiments.com" target="_blank">Chrome Expetiments</a>.</p>
                
                <p>Personalmente tengo que ponerme a investigar un poco el WebGL y empezar a hacerme mis demos, ya que este tema lo encuentro muy interesante. Así que en un futuro no descarto hacer algún pequeño tutorial sobre WebGL.</p>            


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     