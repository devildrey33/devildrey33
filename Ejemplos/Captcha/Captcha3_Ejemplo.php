<?php include("Captcha3_Ejemplo_Motor.php"); ?>
<!DOCTYPE HTML>
<html>
	<head>
        <meta charset="utf-8" />
		<title>Ejemplo Captcha 3</title>
        <link href='Captcha3_Ejemplo.css' rel='stylesheet' type='text/css' />
        <script type='text/javascript' src='jquery-1.7.1.min.js'></script>
        <script type='text/javascript' src='jquery-ui-1.8.16.custom.min.js'></script>
        <script type='text/javascript' src='Captcha3_Ejemplo.js'></script>
	</head>
	<body onLoad="IniciarCaptcha()">
    	<h1>Ejemplo Captcha 3</h1>
        <p>Arrastra el resultado correcto a la zona de los interrogantes.</p>
        <?php 
			CrearCaptcha();
		?>
        <br />
        <a href="http://www.devildrey33.es/Captcha3.php">Volver a devildrey33.</a>
	</body>
</html>
