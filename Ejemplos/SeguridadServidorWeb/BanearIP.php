<?php
	if (!isset($_SESSION)) session_start();
	
	// Contador de actividades no permitidas
	if (isset($_SESSION["AvisoDeBaneado"])) $_SESSION["AvisoDeBaneado"] ++;
	else									$_SESSION["AvisoDeBaneado"] = 1;
	
	if ($_SESSION["AvisoDeBaneado"] == 1) {
		// Aviso de actividad no permitida
		echo "<html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' /></head><body>
		<h1>Atención! has realizado una actividad no permitida, si lo vuelves a intentar serás baneado.</h1>
		</body></html>";
	}
	else {
		if (BanearIP() == TRUE) {
			// Banear actividad no permitida
			echo "<html><body>
			<h1>IP ".$_SERVER['REMOTE_ADDR']." BANEADA que tengas un buen dia.</h1>
			</body></html>";		
		}
	}
	
	function BanearIP($HTACCESS = ".htaccess") {
		// Leo el .htaccess en la variable $Txthta
		$Archivo = fopen($HTACCESS, "r");
		$Txthta = fread($Archivo, filesize($HTACCESS));
		fclose($Archivo);
			
		// Nueva IP para banear (\r\n es un salto de línea valido para windows, en linux se omite \r)
		$NuevaIP = "\r\n"."deny from ".$_SERVER['REMOTE_ADDR'];
		// Comentario que debemos buscar
		$TxtIpBaneada = "#INICIO ips baneadas";
		// Obtenemos la posición donde empieza el comentario
		$Posicion = strpos($Txthta, $TxtIpBaneada);
		// No se ha encontrado el comentario salimos.....
		if ($Posicion === FALSE) return FALSE;
		// Sumamos el tamaño del comentario
		$Posicion += strlen($TxtIpBaneada);
		// Guardo el .htaccess con la nueva ip baneada
		$Archivo = fopen($HTACCESS, "w");
		// Guardamos desde el inicio hasta el comentario (incluyendo el mismo)
		fwrite($Archivo, substr($Txthta, 0, $Posicion), $Posicion);
		// Guardamos la nueva ip
		fwrite($Archivo, $NuevaIP, strlen($NuevaIP));
		// Guardamos el resto del archivo
		fwrite($Archivo, substr($Txthta, $Posicion, strlen($Txthta) - $Posicion), strlen($Txthta) - $Posicion);
		fclose($Archivo);
		
		return TRUE;
	}
?>
