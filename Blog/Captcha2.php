<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Captchas (2 Captcha básico con php)");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial Captchas">
        <meta name="keywords" content="Captchas PHP, Programar captchas">';

        $Base->InicioPlantilla(basename(__FILE__), "Captchas (2 Captcha básico con php)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Captchas (2 Captcha básico con php)");

        ?>	


                <!-- INTRODUCCION -->
                <p>En el tutorial anterior se vio con qué facilidad se puede sortear un captcha creado únicamente con JavaScript, y más bien fue un tutorial de cómo NO se debe hacer un captcha.</p>
                <p>Con todo esto en mente hoy vamos a ver como podríamos crear un captcha similar al del primer tutorial pero que sea más difícil de hackear.</p>
                <p>La parte que generara los valores aleatorios estará en el código PHP, y la parte que validara el captcha también. Además crearemos una imagen utilizando PHP con los valores a sumar, de esta forma será mucho más seguro contra hacks de JavaScript.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Solo por el simple hecho de que sea imposible saltarse la protección del captcha con un código JavaScript considero que el captcha es mucho más seguro. Aunque no nos engañemos, no existe ningún sistema de seguridad infalible, y lo repito NINGUNO.</p>
                <p>Sobre la seguridad hay bastante que decir, si os fijáis en la mayoría de captchas comunes en la web suelen ser a base de texto incrustado en una imagen, que luego queda distorsionado con algún garabato. Los garabatos que se añaden por encima del texto se utilizan principalmente para confundir a posibles lectores de texto OCR, pero por el contrario también consiguen un efecto negativo, y es que a veces ni nosotros mismos sabemos que hay escrito allí.</p>
                <p>Pero además la mayoría de estos captchas incluye un botón que te dicta el texto por el altavoz. Que pasara cuando existan librerías de análisis de voz que sean capaces de escribir un texto dictado a la perfección? (tanto windows7 como google chrome tienen soporte de voz en la actualidad). La verdad es que no quiero ni pensar en lo que pasara cuando algún bot que se dedica a mandar mensajes de spam, sea capaz de pasar el audio de un captcha a texto plano, porque ahora mismo la cosa es muy absurda.</p>
                <p>En definitiva el concepto para diferenciar una máquina de una persona cada vez resultara más difícil, y solo se verá limitado por la habilidad del que programe a la maquina. Por eso creo que es más importante recurrir a soluciones más originales que además sean poco comunes, y esto pasa por crear nuestros propios captchas, que aunque no sean tan seguros tampoco serán de gran interés para los spamers.</p>
                <p>Volviendo al tema de los tutoriales, en el primer tutorial vimos un ejemplo básico para crear un captcha en JavaScript que representaba un nivel de seguridad prácticamente nulo. Si representamos el mismo concepto utilizando PHP para generar los valores y validar el resultado obtendremos una mayor seguridad.</p>
                <p>Vamos a empezar por crear un código php que generara una imagen con los valores a sumar :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID1", "Archivo php que genera la imagen del captcha", "../Ejemplos/Captcha/Captcha2_Ejemplo_Imagen.php"); ?>
				
                <p>En primer lugar utilizamos la función <a href="http://php.net/manual/es/function.session-start.php" target="_blank">session_start</a> para inicializar la variable <i>$_SESSION</i> de forma que podamos conservar datos en ella y utilizarlos en varios documentos php durante la misma sesión.</p>
                <p>En las líneas 5 y 6 creamos dos valores aleatorios de 1 a 99 con la función <a href="http://php.net/manual/es/function.rand.php" target="_blank">rand</a>.</p>
                <p>En la línea 7 guardamos la suma de los dos valores aleatorios dentro de la variable <i>$_SESSION</i>.</p>
                <p>En la línea 10 creamos una imagen en memoria de 120x30 pixeles con la función <a href="http://php.net/manual/es/function.imagecreatetruecolor.php" target="_blank">imagecreatetruecolor</a>.</p>
                <p>En la línea 11 creamos un color para el fondo con la función <a href="http://php.net/manual/es/function.imagecreatetruecolor.php" target="_blank">imagecreatetruecolor</a>, y luego en la línea 12 pintamos el fondo con el color que creamos anteriormente utilizando la función <a href="http://php.net/manual/es/function.imagefill.php" target="_blank">imagefill</a>.</p>
                <p>En la línea 13 creamos un color para el texto con la función <a href="http://php.net/manual/es/function.imagecolorallocate.php" target="_blank">imagecolorallocate</a>, y luego imprimimos la operación con la función <a href="http://php.net/manual/es/function.imagestring.php" target="_blank">imagestring</a>.</p>
                <p>En la línea 17 establecemos la cabecera para la imagen que en este caso será un PNG con la función <a href="http://php.net/manual/es/function.header.php" target="_blank">header</a>.</p>
                <p>En la línea 20 imprimimos los datos de la imagen de forma que el archivo php se convertirá en un archivo png, esto con la función <a href="http://php.net/manual/es/function.imagepng.php" target="_blank">imagepng</a>.</p>
                <p>Y por ultimo en la línea 23 eliminamos la imagen de la memoria con la función <a href="http://php.net/manual/es/function.imagedestroy.php" target="_blank">imagedestroy</a>.</p>
                
                <p>Con esta parte hecha solo nos quedara validar el resultado una vez introducido, para ello crearemos un segundo archivo php con el nombre "<i>Captcha2_Ejemplo_Validar.php</i>" :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID2", "Archivo php que valida el resultado introducido", "../Ejemplos/Captcha/Captcha2_Ejemplo_Validar.php"); ?>
                <p>En este código simplemente comprobamos si el resultado enviado es igual al resultado que se creó anteriormente en la imagen, y de ser ese el caso procedemos a guardar el mensaje, descargar el archivo o lo que sea...</p>
                <p>Por último veamos la implementación HTML para todo esto :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("ID2", "Archivo php que valida el resultado introducido", "Captcha2.php", "html"); ?>
                <p></p>
<!--[INICIO devildrey33.html]-->
<form action="../Ejemplos/Captcha/Captcha2_Ejemplo_Validar.php" method='POST'>
    <img src='../Ejemplos/Captcha/Captcha2_Ejemplo_Imagen.php' style="float:left" /> 
    <input type='text' name='ResultadoCaptcha' id='ResultadoCaptcha' value='' title='Introduce el resultado de la suma' />
</form>
<!--[FIN devildrey33.html]-->                
                <p>En esencia al cargar la imagen "<i>Captcha2_Ejemplo_Imagen.php</i>" se generan los valores aleatorios para la suma y se guarda el resultado, y luego lo comprobamos mediante un <i>POST</i> al archivo "<i>Captcha2_Ejemplo_Validar.php</i>"</p>
                <p>De esta forma este captcha no se puede hackear con JavaScript como en el ejemplo anterior, y su seguridad gana varios puntos, pero ojo que sigue sin ser perfecto ya que se podría descifrar la imagen utilizando algún algoritmo de OCR.</p>
                <p>Y por hoy terminamos aquí, en la siguiente entrega empezaremos a crear un captcha mas original que no requerirá introducir un valor, si no que arrastraremos una imagen a una posición especifica para validar el captcha. Como siempre podéis ver el ejemplo simplificado online, o descargar el ejemplo para vuestro ordenador.</p>
                <p>Siguiente tutorial : <a href='Captcha3.php'>Captchas (3 Captcha arrastrar y soltar PHP + JQuery)</a>.</p>
                <div class='Centrado'>
                    <a class='Boton-Normal' href="/Ejemplos/Captcha/Captcha2_Ejemplo.html" target="_blank">Ver Ejemplo</a>
                    <a class='Boton-Normal' href="/Descargas/Captcha2.zip" target="_blank">Descargar Ejemplo</a>
                </div>
                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>

                