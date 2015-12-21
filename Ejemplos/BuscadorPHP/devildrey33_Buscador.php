<?php 
	class devildrey33_Buscador {
		
// -[INICIO devildrey33.variables]-
		private $_BusquedaTotal = array();
		private $_BusquedaParcial = array();
		private $_ContadorTotal = 0;
		private $_ContadorParcial = 0;
// -[FIN devildrey33.variables]-
		
// -[INICIO devildrey33.Buscar]-
		public function Buscar($Texto) {
			$Palabras = $this->_ValidarTexto($Texto);
			$BuscarDir = dir("./");
			while (false !== ($Entrada = $BuscarDir->read())) {
				if (!is_dir($Entrada) && $Entrada[0] != "." && $Entrada[0] != "Buscar.php") {
					$this->_BuscarTexto($Entrada, $Palabras);
				}
			}
			$BuscarDir->close();
			if ($this->_ContadorTotal == 0 && $this->_ContadorParcial == 0) {
				echo "<h2>No se ha encontrado nada que contenga las palabras : ".$Texto."</h2>";
			}
			if ($this->_ContadorTotal > 0) {
				echo "<h2>".count($this->_BusquedaTotal)." Resultados</h2>";
				foreach ($this->_BusquedaTotal as $Str) echo $Str;
			}
			if (count($Palabras) > 1) {
				echo "<h2>".count($this->_BusquedaParcial)." Resultados parciales</h2>";
				foreach ($this->_BusquedaParcial as $Str) echo $Str;
			}
		}
// -[FIN devildrey33.Buscar]-
		
// -[INICIO devildrey33._LeerArchivo]-
		private function _LeerArchivo($Path) {
			$ArchivoLista = fopen($Path, "r");
			$DatosArchivo = fread($ArchivoLista, filesize($Path));
			fclose($ArchivoLista);
			$TamDatos = strlen($DatosArchivo) ;
			$Estado = ""; // Puede ser : PHP, CSS, JS, Link, Comentario, Imagen, href
			$TextoFinal = "";
			for ($i = 0; $i < $TamDatos; $i++) {
				switch ($Estado) {
					case "" :
						if ($DatosArchivo[$i] == '<') { // Posible etiqueta
							if (substr($DatosArchivo, $i, 7) == "<script")
								$Estado = "JS";
							else if (substr($DatosArchivo, $i, 6) == "<style")
								$Estado = "CSS";
							else if (substr($DatosArchivo, $i, 5) == "<link")
								$Estado = "Link";
							else if (substr($DatosArchivo, $i, 5) == "<?php")
								$Estado = "PHP";
							else if (substr($DatosArchivo, $i, 4) == "<!--")
								$Estado = "Comentario";
							else if (substr($DatosArchivo, $i, 4) == "<img")
								$Estado = "Imagen";
							else if (substr($DatosArchivo, $i, 3) == "<a ")
								$Estado = "href";
							else if (substr($DatosArchivo, $i, 3) == "</a")
								$Estado = "href";
							else $TextoFinal .= $DatosArchivo[$i];
						}
						else $TextoFinal .= $DatosArchivo[$i];
						break;
					case "Comentario" :
						if ($DatosArchivo[$i] == '>') { 
							if (substr($DatosArchivo, $i- 2, 3) == "-->") 
								$Estado = "";
						}
						break;
					case "Link" : case "Imagen" :
						if ($DatosArchivo[$i] == '>' && $DatosArchivo[$i - 1] == '/')
							$Estado = "";
						break;
					case "JS" :
						if ($DatosArchivo[$i] == '>') { // Posible etiqueta
							if (substr($DatosArchivo, $i - 8, 9) == "</script>") 
								$Estado = "";
						}
						break;
					case "CSS" :
						if ($DatosArchivo[$i] == '>') { // Posible etiqueta
							if (substr($DatosArchivo, $i - 7, 8) == "</style>") 
								$Estado = "";
						}
						break;
					case "PHP" :
						if ($DatosArchivo[$i] == ">" && $DatosArchivo[$i - 1] == "?")
							$Estado = ""; 
						break;
					case "href" :
						if ($DatosArchivo[$i] == ">")
							$Estado = ""; 
						break;
				}
			}
			return $TextoFinal;
		}
// -[FIN devildrey33._LeerArchivo]-
		
		
// -[INICIO devildrey33._BuscarTexto]-
		private function _BuscarTexto($NombreArchivo, $Palabras) {
			$Datos = $this->_LeerArchivo($NombreArchivo);
			$TamDatos = strlen($Datos);
			$Posicion = 0;
			$PalabraActual = 0;
			$TotalPalabras = 0;
			$TextoFinal = "<h3><a href='$NombreArchivo'>$NombreArchivo</a></h3> ....";
			foreach ($Palabras as $Palabra) {
				$Posicion = stripos($Datos, $Palabra);
				if ($Posicion !== false) {
					for ($i = $Posicion; $Datos[$i - 1] != '>'; $i--) {
						if ($i == 0) break;
					}
					$Inicio = $i;
					for ($i = $Posicion; $Datos[$i] != '<'; $i++) {
						if ($i == $TamDatos) break;
					}
					$Final = $i;
					$TextoFinal .= str_ireplace( $Palabra, "<span class='PalabraEncontrada'>".$Palabra."</span>", 
											     substr($Datos, $Inicio, $Final - $Inicio) )." ....<br />";
					$TotalPalabras ++;
				}
				$PalabraActual ++;
			}
			if ($TotalPalabras > 0) {
				if ($TotalPalabras == $PalabraActual) 
					$this->_BusquedaTotal[$this->_ContadorTotal ++] = $TextoFinal."<br />";
				else 
					$this->_BusquedaParcial[$this->_ContadorParcial ++] = $TextoFinal."<br />";
			}
		}
// -[FIN devildrey33._BuscarTexto]-
		
// -[INICIO devildrey33._ValidarTexto]-
		private function _ValidarTexto($Texto) {
			$TamTexto = strlen($Texto);
			$Estado = ""; // Puede ser : String1, String2
			$Palabras = array();
			$TotalPalabras = 0;
			$PalabraActual = "";
			for ($i = 0; $i < $TamTexto; $i++) {
				switch ($Estado) {
					case "" :
						if ($Texto[$i] == '"') {
							if ($PalabraActual != "")
								$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
							$Estado = "String2";
						}
						else if ($Texto[$i] == "'") {
							if ($PalabraActual != "")
								$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
							$Estado = "String1";
						}
						else if ($Texto[$i] == " ") {
							if ($PalabraActual != "")
								$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
						}
						else $PalabraActual .= $Texto[$i];
						break;
					case "String1" :
						if ($Texto[$i] == "'") {
							if ($PalabraActual != "")
								$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
							$Estado = "";
						}
						else $PalabraActual .= $Texto[$i];
						break;
					case "String2" :
						if ($Texto[$i] == '"') {
							if ($PalabraActual != "")
								$Palabras[$TotalPalabras ++] = $PalabraActual;
							$PalabraActual = "";
							$Estado = "";
						}
						else $PalabraActual .= $Texto[$i];
						break;
				}
			}			
			if ($PalabraActual != "") 
				$Palabras[$TotalPalabras] = $PalabraActual;
			// No era un string completo por lo que se incluira la comilla en la busqueda
			if ($Estado != "") $Palabras = explode(" ", $Texto);
			return $Palabras;
		}
// -[FIN devildrey33._ValidarTexto]-
	};
?>

