<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$DeclaracionesHeadExtras = '
		<script type="text/javascript" src="js/TestVelocidad.js"></script>        
        <link href="./css/ComparativaNavegadores.css" rel="stylesheet" type="text/css" />
	';
	
	$Base->InicioPlantilla("Comparativa navegadores 2011", $DeclaracionesHeadExtras);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Comparativa navegadores 2011">
        <meta name="keywords" content="Comparativa navegadores">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Comparativa navegadores 2011", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Comparativa navegadores 2011");
        
        
        ?>	

<script type="text/javascript" src="/Ejemplos/TestVelocidad/TestVelocidad.js"></script>
                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Navegadores.png" alt="Navegadores actuales" />
                <p>En este articulo se verán las diferencias principales entre los navegadores que se usan actualmente (Google chrome, Mozilla firefox, Safari, Opera y Internet explorer), sobretodo enfocaremos esta comparativa en términos de velocidad y de soporte de nuevas tecnologías.</p>
                <p>Se van a tener en cuenta varios estilos css que a mi entender son muy básicos y necesarios, y la velocidad de ejecución con códigos javascript.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Empezaremos por un repaso rápido de algunos estilos css de última generación, y veremos que navegadores los soportan.</p>
                <div style='clear:both'></div>
                <table class="Tabla">
                    <tr>
                        <th>&nbsp;</th>
                        <th>Chrome 8</th>
                        <th>Safari 5</th>
                        <th>Opera 11</th>
                        <th>Firefox 3.6</th>
                        <th>Explorer 8</th>
                    </tr>
                    <tr>
                        <td>border-image</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>NO Soportado!</td>
                    </tr>
                    <tr>
                        <td>border-radius</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>1/5 Soportado</td>
                        <td>Soportado</td>
                        <td>NO Soportado!</td>
                    </tr>
                    <tr>
                        <td>box-shadow</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>1/2 Soportado</td>
                        <td>Soportado</td>
                        <td>NO Soportado!</td>
                    </tr>
                    <tr>
                        <td>"degradados"</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>Soportado</td>
                        <td>1/2 Soportado</td>
                    </tr>
                    <tr>
                        <td>rgba()</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaXFI">NO Soportado!</td>
                    </tr>
                    <tr>
                        <td class="TDCSS">text-shadow</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaXFI">NO Soportado!</td>
                    </tr>
                    <tr>
                        <td class="TDCSS">opacity</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaMFI">1/2 Soportado</td>
                    </tr>
                    <tr>
                        <td class="TDCSS">transform-rotate</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaMFI">1/2 Soportado</td>
                    </tr>
                    <tr>
                        <td class="TDCSS">"varios fondos"</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaXFI">NO Soportado!</td>
                    </tr>
                    <tr>
                        <td class="TDCSS">@font-face</td>
                        <td class="TDComparativaM">1/2 Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaV">Soportado</td>
                        <td class="TDComparativaMFI">1/2 Soportado</td>
                    </tr>
                    <tr>
                        <td class="TDCSSF" style="font-weight:bold">Puntuación CSS</td>
                        <td class="TDComparativaVF" style="font-weight:bold">9.5</td>
                        <td class="TDComparativaVF" style="font-weight:bold">10</td>
                        <td class="TDComparativaVF" style="font-weight:bold">9</td>
                        <td class="TDComparativaVF" style="font-weight:bold">10</td>
                        <td class="TDComparativaXF" style="font-weight:bold">2.0</td>
                    </tr>
                </table><br />
                Se ha contado 1 punto por el soporte completo, y 0.5 por el soporte parcial. Como se puede observar la mayoría de navegadores tienen gran soporte para los estilos css de última generación.<br /><br />
                Ahora veremos velocidades de ejecución de código JavaScript. Para hacer esta prueba usare un código que sumara 1 a una variable durante 1 segundo para determinar cuántas iteraciones se han hecho. Hay que tener en cuenta que dependiendo de la maquina los resultados serán mayores o menores, pero en esencia nos darán una perspectiva de que navegadores ejecutan el código más rápido.<br /><br />
                Además hay muchos otros factores que pueden hacer que un código JavaScript se ejecute más rápido o más lento, como por ejemplo la velocidad en la que el navegador muestra los datos por pantalla, el sistema operativo, aplicaciones encendidas, etc....<br /><br />

                <table class='Centrado'><tr>
                    <td><div class='Boton-Normal' onclick="TestVelocidad()">Test de velocidad</a></td>
                    <td><a class='Boton-Normal' href="/Ejemplos/TestVelocidad/TestVelocidad.js" target="_blank">Ver archivo TestVelocidad.js</a></td>
                </tr></table>

                Viendo los resultados he confirmado lo que ya sabía a simple vista, pero no me esperaba que la diferencia de velocidad fuera tan abismal... observad vosotros mismos :<br /><br />
                <div class="DivCentrado"><img src="/Graficos/GraficaJavaScript.png" alt="Comparativa iteracions Java-Script" /></div><br />
                He probado 2 veces cada navegador en mi quad-core con 4gb de ram a 1333mhz bajo windows 7, y he obtenido los siguientes resultados :<br /><br /> 
                <table class="Tabla">
                    <tr>
                        <th class="THComparativaVacio">&nbsp;</th>
                        <th class="THComparativa">Chrome 8</th>
                        <th class="THComparativa">Safari 5</th>
                        <th class="THComparativa">Opera 11</th>
                        <th class="THComparativa">Firefox 3.6</th>
                        <th class="THComparativaFI">Explorer 8</th>
                    </tr>
                    <tr>
                        <td class="TDCSS">Iteraciones test 1</td>
                        <td class="TDComparativaVD">7.079.931</td>
                        <td class="TDComparativaM">3.424.376</td>
                        <td class="TDComparativaM">2.996.652</td>
                        <td class="TDComparativaX">1.367.627</td>
                        <td class="TDComparativaXFI">575.197</td>
                    </tr>
                    <tr>
                        <td class="TDCSS">Iteraciones test 2</td>
                        <td class="TDComparativaV">6.951.711</td>
                        <td class="TDComparativaM">3.427.357</td>
                        <td class="TDComparativaM">3.083.318</td>
                        <td class="TDComparativaX">1.379.099</td>
                        <td class="TDComparativaXFI">564.903</td>
                    </tr>
                    <tr>
                        <td class="TDCSSF" style="font-weight:bold">Puntuación JS</td>
                        <td class="TDComparativaVF" style="font-weight:bold">10</td>
                        <td class="TDComparativaMF2" style="font-weight:bold">4.8</td>
                        <td class="TDComparativaMF2" style="font-weight:bold">4.4</td>
                        <td class="TDComparativaXF2" style="font-weight:bold">1.9</td>
                        <td class="TDComparativaXF" style="font-weight:bold">0.8</td>
                    </tr>
                </table>
                <br />
                Basándome en que 7 millones de iteraciones son 10 puntos he hecho una regla de tres para sacar el resto de puntuaciones.<br /><br />
                Personalmente tengo suficiente con estos datos para decir cuál es el mejor navegador, pero habrá gente que podría añadir otros datos como el tiempo de carga de la página, o la memoria utilizada por el navegador. Sinceramente no creo que nos venga de 0.5 segundos de carga de página, o de si una página ocupa más memoria en un navegador o en otro, ya que actualmente con las maquinas que disponemos hoy en día la memoria ram no es un problema.<br /><br />
                Las herramientas de depuración podrían ser otro punto a favor o en contra de los navegadores, pero de cara al usuario final no son importantes por lo que no las contare. De todas formas serian más puntos para Google Chrome.<br /><br />
                La seguridad es también un aspecto muy importante, pero como no me considero un experto en este tema, lo dejare de banda. Solo remarcare una cosa... el 90% de la comunidad hacker odia microsoft, y por eso considero que el navegador más susceptible a tener agujeros de seguridad es el explorer.<br /><br />
                <table class="Tabla">
                    <tr>
                        <th class="THComparativaVacio">&nbsp;</th>
                        <th class="THComparativa">Chrome 8</th>
                        <th class="THComparativa">Safari 5</th>
                        <th class="THComparativa">Opera 11</th>
                        <th class="THComparativa">Firefox 3.6</th>
                        <th class="THComparativaFI">Explorer 8</th>
                    </tr>
                    <tr>
                        <td class="TDCSSF" style="font-weight:bold">Puntuación TOTAL</td>
                        <td class="TDComparativaVDF" style="font-weight:bold">19.5 de 20</td>
                        <td class="TDComparativaVF" style="font-weight:bold">14.8 de 20</td>
                        <td class="TDComparativaVF" style="font-weight:bold">13.4 de 20</td>
                        <td class="TDComparativaVF" style="font-weight:bold">11.9 de 20</td>
                        <td class="TDComparativaXF" style="font-weight:bold">2.8 de 20</td>
                    </tr>
                </table>
                <br />
                En conclusión, como usuario avanzado pienso que los usuarios buscan facilidad a la hora de navegar, un aspecto moderno, aprovechar las últimas tecnologías, y el máximo de velocidad/estabilidad posible en animaciones, por eso el mejor navegador a día de hoy según Devildrey33 es <strong>Google Chrome</strong> con <strong>19.5/20</strong> puntos.<br /><br />
                También  he de hacer una mención especial para el <strong>Internet explorer</strong> que no ha llegado ni al 20% de la puntuación total, con lo que no se si realmente debería catalogarlo como navegador o como problema.<br />
                <br /> 
                Por último he encontrado un test de capacidades HTML5 para navegadores muy bueno en este enlace <a href="http://html5test.com/">http://html5test.com/</a> que me da los siguientes resultados : <br /><br />
                <table class="Tabla">
                    <tr>
                        <th class="THComparativaVacio">&nbsp;</th>
                        <th class="THComparativa">Chrome 8</th>
                        <th class="THComparativa">Safari 5</th>
                        <th class="THComparativa">Opera 11</th>
                        <th class="THComparativa">Firefox 3.6</th>
                        <th class="THComparativaFI">Explorer 8</th>
                    </tr>
                    <tr>
                        <td class="TDCSSF" style="font-weight:bold">Puntuación HTML5</td>
                        <td class="TDComparativaVDF" style="font-weight:bold">231/300 + 13</td>
                        <td class="TDComparativaVF" style="font-weight:bold">165/300 + 0</td>
                        <td class="TDComparativaVF" style="font-weight:bold">177/300 + 7</td>
                        <td class="TDComparativaMF2" style="font-weight:bold">139/300 + 4</td>
                        <td class="TDComparativaXF" style="font-weight:bold">27/300 + 0</td>
                    </tr>
                </table>  
                <p>Esto es todo, espero que esta comparativa sirva para que más de un usuario de internet explorer decida hacer un cambio de navegador, y que de esta forma pueda disfrutar de todas las mejoras que cualquier otro de los navegadores nombrados ofrecen.</p>


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>