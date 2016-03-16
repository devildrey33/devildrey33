<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Captchas (1 Introducción)");*/

	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial Captchas">
        <meta name="keywords" content="Captchas PHP, Programar captchas">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Captchas (1 Introducción)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Captchas (1 Introducción)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Captcha.png" alt="Captchas" />
                <p>Hoy en día quien no ha tenido que lidiar con un captcha, y quien no ha fallado más de una vez en su validación?</p>
                <p>Los captchas más utilizados en la actualidad se basan en una imagen que contiene texto distorsionado de alguna forma, que a veces resulta imposible incluso para un ser humano de identificar.</p>
                <p>En la mayoría de casos el captcha se utiliza para proteger páginas web que tienen una sección de mensajes para que a nadie se le ocurra hacer una aplicación que mande mensajes de spam, o en servidores de descarga directa tipo fileserver y demás para evitar ataques que puedan colapsar sus servidores a base de descargar miles de ficheros a la vez.</p>
                <p>Pero cuando llega un punto en que ni nosotros mismos somos capaces de validar un captcha, vale la pena utilizar ese sistema? yo creo que no. Por ello voy a intentar hacer una serie de tutoriales sobre cómo podemos construir nuestros captchas para que sean mas amigables.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Obviamente los captchas que a nosotros nos cuestan de validar son por norma los más seguros, pero hasta que punto necesitamos tanta seguridad?</p>
                <p>Por ejemplo en esta página web tengo una sección donde se pueden enviar mensajes y luego pueden ser vistos por todos los usuarios. Necesito una protección hasta tal punto que incomode a un usuario para escribir un simple mensaje? yo creo que no.</p>
                <p>En primer lugar la gente que se dedica a mandar spam por las razones que sean, es obvio que no son unos cracks de la programación (de ser así probablemente estarían haciendo otro tipo de cosas), y aunque lo sean, invertir decenas de horas en descifrar un sistema de seguridad para mandar spam a una única pagina web, no creo que les valga la pena. En definitiva lo que buscan es difundir su spam en el máximo de medios posibles, por lo que no les vendrá de una página web.</p>
                <p>También nos podemos encontrar algún hacker con malas ideas que se fija en nuestra página web por la razón que sea, y decide probar suerte, en cuyo caso podemos tener otros métodos aparte del captcha para darnos cuenta de ello. Por ejemplo si tenéis una página web que no recibe muchos mensajes, pongamos una media de 10 al día, pero un día recibe 100 o 200 es que algo raro está pasando, por lo que nos podemos hacer un simple código que nos avise por email si algo así sucede, para proceder a desactivar el sistema de mensajería y tomar medidas contra el ataque.</p>
                <p>Para cada caso en concreto hay que pensar bien que defensas debemos desplegar, y sobretodo tener en mente que el usuario de a pie no tiene la culpa por lo que no debemos hacerle pasar por muchas dificultades, o en caso contrario puede que decida no molestarse en escribir el mensaje.</p>
                <p>En este tutorial vamos a empezar por crear un captcha súper simple únicamente utilizando JavaScript, y veremos cómo podemos validarlo por otros medios como los que podrían utilizar los spamers.</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID1", "Código de un captcha en JavaScript", "../Ejemplos/Captcha/Captcha1_Ejemplo.html", "Captcha1"); ?>
                <p></p>
                <h3>Ejemplo :</h3>
<script type='text/javascript'>
/* Funcion que generara el captcha al cargarse el documento */
$(function() { 
    GenerarCaptcha();
});	
var Valor1 = 0;
var Valor2 = 0;

/* Función que genera dos valores aleatorios */
function GenerarCaptcha() {
    Valor1 = 1 + Math.floor(Math.random() * 100);
    Valor2 = 1 + Math.floor(Math.random() * 100);
    document.getElementById("Valor1Captcha").innerHTML = Valor1;
    document.getElementById("Valor2Captcha").innerHTML = Valor2;
    document.getElementById("ResultadoCaptcha").value = "";
}

/* Función que comprueba que el resultado sea la suma de los dos valores generados */
function ValidarCaptcha() {
    if (document.getElementById("ResultadoCaptcha").value == (Valor1 + Valor2)) {
        alert("Captcha validado");
        GenerarCaptcha();
    }
    else {
        alert("El valor introducido no es válido.");
    }
}

/* Función que ejecuta el código del cuadro de texto ConsolaJavaScript */
function ConsolaJavaScript() {
    eval(document.getElementById("ConsolaJavaScript").value);
}

</script>
                
                <form action="javascript:ValidarCaptcha()">
                    <span><span id='Valor1Captcha'>0</span> + <span id='Valor2Captcha'>0</span> = </span>
                    <input type='text' name='Resultado' id='ResultadoCaptcha' value='' title='Introduce el resultado de la suma' />
                    <span>Pulsa intro una vez introducido el resultado.</span>
                </form>
                <p>En el momento que un atacante vea el código JavaScript del captcha vera que puede sortearlo de varias formas, a continuación os he dejado una caja de texto que permite ejecutar código JavaScript, introducid la siguiente línea y pulsad intro :</p>
                <?php 
/* -[INICIO devildrey33.ID2]-
document.getElementById("ResultadoCaptcha").value = (Valor1 + Valor2); ValidarCaptcha();
-[FIN devildrey33.ID2]- */
                    $Base->PintarCodigo->PintarArchivoJavaScript("ID2", "Hack para el captcha", basename(__FILE__), "ID2"); 
                ?>
                <p></p>
                <form action="javascript:ConsolaJavaScript()">
	                <span>Este cuadro de texto permite ejecutar funciones JavaScript</span>
                    <input type='text' name='Consola' id='ConsolaJavaScript' value='' title='Introduce código JavaScript' style="width:600px" />
                </form>
                <p>Como podéis ver ha resultado muy sencillo saltarse el captcha mediante JavaScript. La gente que se dedica a enviar spam imagino que modifican una copia del código de algún navegador por ejemplo Firefox, y esto les permite ejecutar código JavaScript de forma automatizada, por lo que este captcha resulta totalmente ineficiente.</p>
                <p>De hecho para hacer un captcha hay que utilizar lo menos posible JavaScript, y programar todas sus partes sensibles en un lenguaje de servidor como PHP.</p>
                <p>Y con esto terminamos por hoy, en la siguiente entrega veremos cómo crear un captcha similar a este pero utilizando PHP de forma que será mas difícil de hackear. Como siempre podéis ver el ejemplo simplificado online, o descargar el ejemplo para vuestro ordenador.</p>
                <p>Siguiente tutorial : <a href='Captcha2.php'>Captchas (2 Captcha básico con php)</a>.</p>
                <div class='Centrado'>
                        <a class='Boton-Normal' href="/Ejemplos/Captcha/Captcha1_Ejemplo.html" target="_blank">Ver Ejemplo</a>
                	<a class='Boton-Normal' href="/Descargas/Captcha1.zip" target="_blank">Descargar Ejemplo</a>
                </div>

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
