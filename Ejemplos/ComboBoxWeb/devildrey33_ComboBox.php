<?php
	/* Objeto devildrey33_ComboBox                 */
	/* Creado el 03/10/2011 por Jose Antonio Bover */
	class devildrey33_ComboBox {
		protected $_Lista = array();
		protected $_TotalEntradas = 0;
		
		// Función que añade el script del jquery a la pagina 
		public function IncluirJQuery() {
			echo "<script type='text/javascript' 
			       src='http://ajax.googleapis.com/ajax/libs/jquery/1.5/jquery.min.js'>
				  </script>";
		}
		
		// Función para agregar una entrada a la ComboBox
		public function AgregarEntrada($Texto) {
			$this->_Lista[$this->_TotalEntradas] = $Texto;
			$this->_TotalEntradas ++;
		}
		
		// Esta función se debe usar al terminar de agregar entradas
        //  Ejemplo : CrearComboBox("Combo", $Texto, "FuncionOnClick");
        // La FuncionOnClick debe recibir un parametro 
        //  Ejemplo : function FuncionOnClick(Texto) { alert(Texto); }
		public function CrearComboBox($ID, $Texto = "", $NombreFuncionOnClick = "") {
			echo "<div id='".$ID."' class='devildrey33_ComboBox'
                   onmouseover='devildrey33_ComboBox_Mostrar(\"".$ID."\")'
                   onmouseout='devildrey33_ComboBox_Ocultar(\"".$ID."\")'>
                  <div class='devildrey33_ComboBox_Texto'>
                      <span id='devildrey33_ComboBoxTexto_".$ID."'>".$Texto."</span>
                      <div id='devildrey33_CoboBoxImagen_".$ID."'
                       class='devildrey33_ComboBox_ImgAbajo'> &nbsp;</div></div>
                  <div id='devildrey33_CoboBoxLista_".$ID."'>";		
						
			for ($i = 0; $i < $this->_TotalEntradas; $i++) {
				echo "<div class='devildrey33_ComboBox_Entrada' 
				       onclick='devildrey33_ComboBox_Click(\"".$ID."\",
					   \"".$NombreFuncionOnClick."\" ,
					   \"".$this->_Lista[$i]."\")'>".$this->_Lista[$i]."</div>";
			}
			echo "</div></div><div style='width:186px; float:left'>&nbsp;</div>";
		}
		
	};
?>
	