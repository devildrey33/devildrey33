<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Captchas (3 Captcha arrastrar y soltar PHP + JQuery)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial Captchas">
        <meta name="keywords" content="Captchas PHP, Programar captchas">';

        $Base->InicioPlantilla(basename(__FILE__), "Captchas (3 Captcha arrastrar y soltar PHP + JQuery)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Captchas (3 Captcha arrastrar y soltar PHP + JQuery)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Captcha3.png" alt="Captchas" />
                <p>En los anteriores tutoriales vimos un tipo de captcha muy básico que requería introducir el resultado de una suma en una caja de texto, pero esta vez vamos a enfocar el tema de otra forma. Se mostraran nueve resultados en recuadros independientes, y debajo una suma, y lo que habrá que hacer es arrastrar el resultado correcto para validar el captcha.</p>
                <p>Para hacer esto vamos a utilizar PHP y JQuery. También necesitaremos la librería JQuery UI que es la que nos permite hacer el efecto arrastrar y soltar compatible para todos los navegadores.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Aunque este ejemplo sigue basándose en una suma como los anteriores, es bastante más original ya que el usuario no tiene que escribir nada, sino que tiene que arrastrar el resultado correcto hacia la zona de los interrogantes grises.</p>
                <p>En este caso el servidor ya no se guarda el resultado de la operación, si no que se guarda la ID de la imagen con el resultado correcto.</p>
                <h2>Estructuración</h2>
                <p>Este ejemplo va a estar dividido en varios archivos :</p>
                <table class="Tabla">
                	<tr>
                    	<td style="vertical-align:top"><b>Captcha3_Ejemplo.php</b></td>
                        <td style="vertical-align:top">:</td>
                    	<td>Este archivo contiene el código HTML y contendrá enlaces a los estilos CSS, código JavaScript, y código PHP para el captcha.</td>
                    </tr>
                	<tr>
                    	<td style="vertical-align:top"><b>Captcha3_Ejemplo.js</b></td>
                        <td style="vertical-align:top">:</td>
                    	<td>Este archivo contiene todo el código javascript para el captcha.</td>
                    </tr>
                	<tr>
                    	<td style="vertical-align:top"><b>Captcha3_Ejemplo.css</b></td>
                        <td style="vertical-align:top">:</td>
                    	<td>Este archivo contiene los estilos css para el captcha.</td>
                    </tr>
                	<tr>
                    	<td style="vertical-align:top"><b>Captcha3_Ejemplo_Motor.php</b></td>
                        <td style="vertical-align:top">:</td>
                    	<td>Este archivo contiene las funciones necesarias para crear el captcha, generar sus imágenes y validarlo.</td>
                    </tr>
                </table>
                <p>El archivo "<i>Captcha3_Ejemplo_Motor.php</i>" funciona de dos formas, ya que puede ser incluido en otro archivo php para llamar a sus funciones y también puede ser utilizando independientemente con parámetros para realizar una función en concreto.</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID1", "Archivo Captcha3_Ejemplo_Motor.php posibles parámetros", "../Ejemplos/Captcha/Captcha3_Ejemplo_Motor.php", "Params") ?>
                <p>En la línea 3 comprobamos si se ha pasado el parámetro "<i>Img</i>" en cuyo caso indicaría que debe generar una imagen para uno de los valores aleatorios.</p>
                <p>En la línea 5 comprobamos si se ha pasado el parámetro "<i>ResultadoID</i>" para proceder a validar el resultado.</p>
                <p>Voy a omitir la función "<i>GenerarImagen</i>" ya que en esencia es muy simple, y si habéis visto el anterior tutorial sobre captchas  <a href="Captcha2.php" target="_blank">Captchas (2 Captcha básico con php)</a> no vais a tener ningún problema en ver cómo funciona.</p>
		<h2>Creación del captcha</h2>
                <p>La función "<i>Validar</i>" es de lo más simple, pero mejor la dejamos para más tarde ya que para comprenderla mejor tenéis que ver como se crea el captcha :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID2", "Archivo Captcha3_Ejemplo_Motor.php función CrearCaptcha", "../Ejemplos/Captcha/Captcha3_Ejemplo_Motor.php", "CrearCaptcha") ?>
                <p>En el principio de la función creamos dentro de la variable "<i>$_SESSION</i>" la variable "<i>CaptchaID</i>" y un array llamado "<i>Captcha</i>". La idea es que si cargamos 3 pestañas con la misma página se conserven los datos para los tres captchas, por ello cada vez que se use la función "<i>CrearCaptcha</i>" la variable "<i>CaptchaID</i>" se incrementara. Dentro del array Captcha se guardaran todos los valores aleatorios y la posición del resultado correcto.</p>
                <p>De la línea 12 a la 14 creamos los valores aleatorios para la suma, y guardamos el resultado en una variable temporal.</p>
                <p>A partir de la línea 17 creamos un bucle que generara 8 valores aleatorios dentro de un array. Luego en la línea 24 añadimos el verdadero resultado en la posición 8 del array y en la línea 27 llamamos a la función <a href="http://php.net/manual/es/function.shuffle.php" target="_blank">shuffle</a> que mezclara el array de valores de forma aleatoria.</p>
                <p>A partir de la línea 30 creamos otro bucle que recorrerá todos los valores aleatorios y creara un div con una imagen dentro. Esta imagen apuntara al archivo "<i>Captcha3_Ejemplo_Motor.php</i>" utilizando el parámetro "<i>Img</i>" con un valor de 0 a 8, lo que generara la imagen correspondiente.</p>
                <div class='nota'>Hay que remarcar que en cada div se agrega una id "<i>ImagenCaptcha_?_?</i>" los interrogantes son valores, el primero es la ID actual del captcha, y el segundo corresponde a la imagen. De esta forma mandando la ID de la imagen que se ha arrastrado podremos validar el captcha ya que la misma ID nos dice la ID del captcha y la imagen.</div>
                <br />
                <div class='nota'>Fijaros que guardo todos los valores aleatorios dentro de la variable <i>$_SESSION</i> ya que necesitaremos saberlos para pintarlos luego en las imágenes. También guardo el resultado en la variable <i>$_SESSION</i>.</div>
                <h2>Validación</h2>
                <p>Bien ahora ya podemos ver la función que validara el captcha :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID3", "Archivo Captcha3_Ejemplo_Motor.php función Validar", "../Ejemplos/Captcha/Captcha3_Ejemplo_Motor.php", "Validar") ?>
                <p>Como podéis observar no tiene mucha complicación, lo primero que hago es utilizar la función explode que separa el string utilizando como delimitador el carácter "_", por lo que quedara un array que en la primera posición será "<i>ImagenCaptcha</i>", en la segunda posición nos dirá la ID del captcha, y en la tercera posición nos dirá el numero de imagen.</p>
                <p>Así que únicamente comparamos si el resultado es el mismo que el numero imagen y retornamos "<i>Validado</i>" o "<i>Invalido</i>".</p>
                <p>Ahora que ya hemos visto lo más importante de la parte php podemos pasar a ver el código JavaScript / JQuery que consta de dos funciones "<i>IniciarCaptcha</i>" y "<i>ObjetoDentroObjeto</i>". Únicamente veremos la función IniciarCaptcha :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID4", "Archivo Captcha3_Ejemplo.js función IniciarCaptcha", "../Ejemplos/Captcha/Captcha3_Ejemplo.js", "IniciarCaptcha") ?>
                <p>A primera vista pude parecer un barullo, pero bastara con saber que la clase "<i>.ImagenCaptcha</i>" son todas las imágenes que contienen un valor aleatorio, y que luego tenemos la porción de los interrogantes donde debemos arrastrar el resultado correcto que se llama "<i>#ResultadoCaptcha</i>". También tenemos un área donde escribiremos el resultado de la validación que se llamara "<i>#TxtResultado</i>".</p>
                <p>Para empezar en la línea 5 utilizamos la función JQuery <a href="http://docs.jquery.com/UI/Draggable" target="_blank">draggable</a>('enable'), para decirle que todos los objetos con la clase "<i>.ImagenCaptcha</i>" pueden ser arrastrados y soltados.</p>
                <p>En la línea 6 volvemos a utilizar la función <a href="http://docs.jquery.com/UI/Draggable" target="_blank">draggable</a> pero esta vez para establecer sus parámetros y funciones. El parámetro "<i>containment</i>" se refiere al contenedor para el drag, que en este caso será toda la ventana pero se podría limitar solo a un área específica. El parámetro "<i>scroll</i>" es por si queremos que se haga un scroll automático al arrastrar un objeto, que en este caso no nos interesa.</p>
                <p>En la línea 10 empezamos a definir el evento start, que será llamado cuando empecemos a arrastrar un objeto "<i>ImagenCaptcha</i>", en el básicamente reseteamos la posición de todos los objetos "<i>ImagenCaptcha</i>".</p>
                <p>En la línea 11 establecemos el atributo "<i>z-index</i>" para el objeto "<i>ui.helper</i>" de forma que quede por encima de los demás. El objeto "<i>ui.helper</i>" apunta únicamente al "<i>ImagenCaptcha</i>" que se está moviendo, los demás no están incluidos en el.</p>
                <p>La linea 15 aunque no es necesaria me gusta mantenerla en mis codigos para recordar el prototipo del evento drag.</p>
                <p>En la línea 18 empieza lo bueno, esta línea se refiere al evento que salta cuando soltamos el objeto arrastrado, y es aquí donde tenemos que comprobar que se encuentre encima de los interrogantes para luego proceder a su validación.</p>
                <p>En la línea 19 llamamos a la función "<i>ObjetoDentroObjeto</i>" que no hace falta mostrarla, pero que en esencia comprueba que el objeto arrastrado este dentro de los interrogantes.</p>
                <p>En la línea 21 si el objeto arrastrado no se encuentra dentro de los interrogantes reseteamos su posición con una animación fon la funcion <a href="http://api.jquery.com/animate/" target="_blank">animate</a> de JQuery.</p>
                <p>En la línea 26 ya sabemos que el objeto esta dentro del área de los interrogantes por lo que utilizamos la función post para mandar la ID del objeto arrastrado al archivo "<i>Captcha3_Ejemplo_Motor.php</i>" mediante ajax. Dentro de la función <a href="http://api.jquery.com/jQuery.post/" target="_blank">post</a> en la línea 27 creamos otra función que recibe el resultado de lo que se ha mandado al archivo php, que puede ser "<i>Validado</i>" o "<i>Invalido</i>", y dependiendo de esto mostramos un texto o otro.</p>
                <p>Visto todo esto solo nos faltara ver como quedaría el archivo "<i>Captcha3_Ejemplo.php</i>" :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID5", "Archivo Captcha3_Ejemplo.php", "../Ejemplos/Captcha/Captcha3_Ejemplo.php") ?>
                <p></p>
                <h2>Conclusión</h2>
                <p>En el primer tutorial vimos lo fácil que era hackear un captcha creado únicamente con JavaScript, mientras que en el segundo tutorial solucionamos ese problema utilizando php, pero abrimos la puerta a un posible hack utilizando algún sistema de spam que sea capaz de implementar algoritmos de OCR. En este tercer tutorial aunque se implemente un algoritmo de OCR no serviría de nada, ya que la protección no es el resultado en sí, si no la ID de la imagen arrastrada. De todas formas si alguien es capaz de implementar un bot con capacidades OCR, también puede ser capaz de implementar un bot que lea las cookies, por lo que seguimos sin estar a salvo.</p>
                <p>En definitiva, no hay nada 100% seguro. Como ya comente antes no debemos fiarnos solamente de los captchas, también estaría bien implementar un sistema que nos avise por correo si por ejemplo se reciben 10 veces más mensajes de lo normal, o algún sistema por el estilo.</p>
                <p>Y con esto cierro los tutoriales sobre captchas, desgraciadamente no os voy a desvelar como he creado el captcha del puzzle por razones de seguridad. Como siempre podéis ver un ejemplo online sobre este tutorial, o descargar el ejemplo en vuestro ordenador.</p>
                
                <div class='Centrado'>
                    <a class='Boton-Normal' href="/Ejemplos/Captcha/Captcha3_Ejemplo.php" target="_blank">Ver Ejemplo</a>
                    <a class='Boton-Normal' href="/Descargas/Captcha3.zip" target="_blank">Descargar Ejemplo</a>
                </div>                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>

                