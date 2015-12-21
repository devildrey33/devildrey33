<?php 
	include("../Web/devildrey33.php");
	$Base = new devildrey33();	
	
	$HEAD = "";
	
	$Base->InicioPlantilla(devildrey33_TipoPlantilla::Articulo, basename(__FILE__), "Tutorial JavaScript 1 ", $HEAD);
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Sqlite.png" alt="Varios Menus" />
                <p>Ya hace unos dias que estoy recibiendo peticiones para escribir algunos tutoriales de javascript a nivel basico, y hoy por fin me he decidido a empezar con el tema.</p>
				<p>Me gustaria llevar esta serie de tutoriales de forma que no se haga aburrida y que se interactue con el código desde el principio, y poco a poco ir explicando las cosas mas básicas, sin tener que introducir un monton de conceptos de golpe.</p>
                <nota>Para estos tutoriales se requiere un nivel básico de HTML y CSS, ademas es recomendable tener conocimientos básicos en algun lenguaje de programación.</nota>
                <p>Existen varios lenguajes de programación web que se dividen mayormente en dos categorias : lenguajes de servidor, y lenguajes de cliente. </p>
                <!-- FIN_INTRODUCCION -->
                <p>Los lenguajes para el servidor son aquellos que interactuan con los recursos del servidor para mostrar datos a un usuario, por ejemplo cuando escribimos un mensaje en la sección de mensajes de esta web, dicho mensaje se almacena en el servidor, y tanto para almacenarlo como para mostrarlo luego, se requiere utilizar un lenguaje de servidor como por ejemplo PHP.</p>
                <p>Los lenguajes para el cliente tienen como objetivo dar mas accesibilidad al usuario desde su navegador, por ejemplo para responder si es necesario cuando se hace click en una parte especifica de la web que no es un enlace.</p>
                <p>Por decirlo de otra forma los lenguajes de servidor solo pueden utilizar los recursos del servidor web, y los lenguajes de cliente solo pueden utilizar los recursos del ordenador que está viendo la web (el cliente), e incluso se pueden leer y escribir datos en el ordenador cliente.</p>
				<p>En definitiva JavaScript es capaz de convertir una pagina web estática, a algo parecido a una aplicación de escritorio sin necesidad de cargar otras paginas para realizar acciones.</p>
                <p>Para empezar vamos a imaginarnos una pagina web  en la que se muestran 10 imagenes pequeñas, y que al hacer click en una de ellas nos muestra la misma imagen con una resolución mayor. En esta situación podemos elegir varias soluciones : </p>
                <ul>
    	            <li>La mas simple que seria enlazar cada foto pequeña con otro documento html que nos muestra la imagen grande (la cual no requiere javascript).</li>
	                <li>Una solución dinámica seria hacer un div oculto en el cual cargamos la imagen grande al hacer click en la pequeña, y mostrar dicho div cuando el usuario hace click en la imagen pequeña SIN CAMBIAR DE PAGINA.</li>
                </ul>
               
				<p>En principio javascript nunca es necesario al 100% en ninguna web, PERO al utilizarlo podemos ahorrar tiempo y simplificar las cosas de cara al usuario final, cosa que siempre os agradecera.</p>
				<p>Bien ahora que ya os he descrito la situación os voy a mostrar todo el código necesario para realizar el ejemplo dinamico y lo ire comentado paso a paso.</p>

				<p>Para empezar al principio del <code>body</code> vamos a tener 3 divs estructurados de la siguiente manera : </p>


                <?php $Base->PintarCodigo->PintarArchivoHTML("IDbody", "Marco para las fotos grandes", "../Ejemplos/JavaScript/1-Empezando.html", "body"); ?>
				<p>La función de estos 3 divs en esencia es para mostrar las fotos grandes centradas en la pantalla, y para ello tenemos :</p>
                <table>
                	<tr>
                    	<td style="width:190px"><code>MostrarFoto_Fondo</code></td>
                    	<td>Es un fondo negro semitranslucido que se coloca delante de toda la web y impide poder interactuar mas con la tabla de las fotos pequeñas.</td>
	                </tr>
                	<tr>
                    	<td><code>MostrarFoto_CentrarV</code></td>
                    	<td>Este div nos ayuda a centrar el marco verticalmente.</td>
	                </tr>
                	<tr>
                    	<td><code>MostrarFoto_Marco</code></td>
                    	<td>Este div es un marco blanco que contiene la foto grande.</td>
	                </tr>
                </table>

				<p>Justo despues de los 3 divs hay un <code>table</code> con las 10 fotos pequeñas que se amplian al hacer click sobre ellas :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("IDtabla", "Marco para las fotos grandes", "../Ejemplos/JavaScript/1-Empezando.html", "tablafotos"); ?>



         	<!-- NOTES pels seguents tutos, primer començem facilet en plan C amb funcions planes i un main, 				
            								despres afegim el concepte de crear tot el html desde el códi, 					(fer un buto animat estil com el de la web amb tot el css posible)
                                            i despres afegim el concepte de crear els nostres propis objectes complexes.    (fer un paisatge d'una vall amb montanyes i que el cel i el sol/lluna cambia segons l'hora que mostrarem amb un rellotge)
                          -->
                
                
<?php $Base->FinPlantilla(); ?>