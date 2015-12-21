<?php 
// -[INICIO devildrey33.Params]-
session_start();
// Miramos si hay que generar una imagen	
if (isset($_GET["Img"]))
	if ($_GET["Img"] != "") GenerarImagen($_GET["CaptchaID"], $_GET["Img"]);
// Miramos si hay que validar el resultado
if (isset($_GET["ResultadoID"]))
	if ($_GET["ResultadoID"] != "") Validar($_GET["ResultadoID"]);
// -[FIN devildrey33.Params]-

// -[INICIO devildrey33.CrearCaptcha]-
// Función que genera los valores aleatorios y escribe el código HTML del captcha
function CrearCaptcha() {
	// Creamos las variables necesarias dentro del $_SESSION
	if (!isset($_SESSION["CaptchaID"])) {
		$_SESSION["CaptchaID"] = 0;
		$_SESSION["Captcha"] = array();
	}
	$CaptchaID = ++$_SESSION["CaptchaID"];
	$_SESSION["Captcha"][$CaptchaID] = array();
	
	// Creamos la operacion aleatoria
	$Valor1 = rand(10, 49);
	$Valor2 = rand(10, 49);
	$Resultado = $Valor1 + $Valor2;
				
	// Creamos 8 valores aleatorios
	$Valores = array();
	for ($i = 0; $i < 8; $i++) 	{
		do {
			$Valores[$i] = rand(10, 99);	
		} while ($Valores[$i] == $Resultado);
	}
	// Asignamos el resultado en la posición 8
	$Valores[8] = $Resultado;
	
	// Mezclamos los valores aleatorios y el resultado
	shuffle($Valores);
	
	// Guardamos los valores en la variable $_SESSION
	for ($i = 0; $i < 9; $i++) {
		$_SESSION["Captcha"][$CaptchaID][$i] = $Valores[$i];
		// Si el valor actual es el resultado guardamos su posición
		if ($Valores[$i] == $Resultado) $_SESSION["Captcha"][$CaptchaID]["Resultado"] = $i;
		echo "<div class='ImagenCaptcha' id='ImagenCaptcha_".$CaptchaID."_".$i."'>";
		echo "<img src='Captcha3_Ejemplo_Motor.php?CaptchaID=".$CaptchaID."&Img=".$i."' alt='ImagenCaptcha' />";
		echo "</div>\n";
	}
	echo "<br /> <br />";
	echo "<div>".$Valor1." + ".$Valor2." = "."<span id='ResultadoCaptcha'>???</span><span id='TxtResultado'></span></div>";	
}
// -[FIN devildrey33.CrearCaptcha]-	
	
// Función que genera la imagen con el valor que le corresponde
function GenerarImagen($CaptchaID, $ImagenActual) {
	// Creamos una imagen con el valor
	$Imagen = imagecreatetruecolor(20, 13);
	$Color_Fondo = imagecolorallocate($Imagen, 255, 255, 255);
	imagefill($Imagen, 0, 0, $Color_Fondo);
	$Color_Texto = imagecolorallocate($Imagen, 0, 0, 0);
	imagestring($Imagen, 4, 2, 0,  $_SESSION["Captcha"][$CaptchaID][$ImagenActual], $Color_Texto);		
	// Cabecera para la imagen PNG
	header('Content-Type: image/png');		
	// Imprimo la imagen
	imagepng($Imagen);
	// Liberar memoria
	imagedestroy($Imagen);
}

// -[INICIO devildrey33.Validar]-
// Función que comprueba si el valor arrastrado es el correcto
function Validar($ResultadoID) {
	$IDS = explode("_", $ResultadoID);
	if ($_SESSION["Captcha"][$IDS[1]]["Resultado"] == $IDS[2])  echo "Validado";
	else														echo "Invalido";
}
// -[FIN devildrey33.Validar]-	

?>