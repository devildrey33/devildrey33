<?php
	session_start();
	if ($_POST["ResultadoCaptcha"] == $_SESSION["ResultadoCaptcha"]) {
		echo "Captcha validado";
		// Enviamos el mensaje a la base de datos, o lo que sea.....
	}
	else {
		echo "Resultado incorrecto!";
		// No hacemos nada
	}
?>