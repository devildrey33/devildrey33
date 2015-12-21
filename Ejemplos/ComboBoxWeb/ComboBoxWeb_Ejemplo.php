<html>
	<head>
    	<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    </head>
	<link href='css/devildrey33_ComboBox.css' rel='stylesheet' type='text/css' />
	<?php
		include("devildrey33_ComboBox.php");
		$Combo = new devildrey33_ComboBox;
		// Esta función añade las cabeceras JQuery standard desde un servidro de google
		$Combo->IncluirJQuery(); 
		// Añadimos 10 entradas a la ComboBox
		for ($Contador = 1; $Contador < 11; $Contador ++) $Combo->AgregarEntrada("Texto".$Contador);
	?>
    <script type='text/javascript' src='js/devildrey33_ComboBox.js'></script>    
    <script type='text/javascript'>
		// Función que obtiene cuando se pulsa en la ComboBox
		function ComboOnClick(Texto) { 
			alert(Texto); 
		};
	</script>
	<body>
    	<?php $Combo->CrearComboBox("MiComboBox", "Texto1", "ComboOnClick");	?>
        <a href='../../ComboBoxWeb.php'>Volver a devildrey33</a>.
        <p><b>NOTA :</b> Por culpa del <b>alert</b> la ComboBox no vuelve a su tamaño original al hacer click en 
           una entrada, si no se usa <b>alert</b> la ComboBox volvera a su estado inicial sin incidencias.</p>
	</body>
</html>