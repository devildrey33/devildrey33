<?php 
/* Objeto devildrey33_Menu                     */
/* Creado el 07/11/2011 por Jose Antonio Bover */
class devildrey33_Menu {
	// Constructor
	public function __construct($ArchivoXML = "devildrey33_Menu.xml") {
		$this->LeerContenidoXML($ArchivoXML);
	}
	
/* -[INICIO devildrey33.LeerContenidoXML]- */
	// Funcion para leer el contenido del archivo XML y pasarlo a un array de datos
	public function LeerContenidoXML($ArchivoXML) {
		// Leemos el archivo XML con todo el contenido del menú
		$ArchivoLista = @fopen($ArchivoXML, "r", true);
		$DatosArchivo = fread($ArchivoLista, filesize($ArchivoXML));
		@fclose($ArchivoLista);
		$TotalCaracteres = strlen($DatosArchivo);
		// Parseamos el XML y lo dividimos en un array inicial de datos
		$Parser = xml_parser_create();
		xml_parse_into_struct($Parser, $DatosArchivo, $DatosXML, $Indices);
		xml_parser_free($Parser);
		// Creo el menu padre superior (que esta por encima de los menus padre que podamos crear)
		$PadreP = "";
		$this->_Menus = new devildrey33_SubMenu("Padre", "", "", $Padre);
		// Enlazo la referencia del MenuActual a padre superior que acabamos de crear
		$MenuActual = &$this->_Menus;
		// Recorremos el array de datos XML
		foreach ($DatosXML as $Etiqueta) {
			$Destino = "";
			if (isset($Etiqueta['attributes']['DESTINO'])) $Destino = $Etiqueta['attributes']['DESTINO'];
			// Empieza un submenu con hijos
			if ($Etiqueta['tag'] == "CREARMENU" && $Etiqueta['type'] == "open") { 
				$MenuActual->CrearSubMenu( $Etiqueta['attributes']['NOMBRE'], $Etiqueta['attributes']['URL'], 
                                           $Destino, $MenuActual );
				$Pos = 0;
				if ($MenuActual->TotalSubMenus()) $Pos = $MenuActual->TotalSubMenus() - 1;
				$MenuActual = &$MenuActual->SubMenu($Pos);
			}
			// Termina un submenu con hijos
			else if ($Etiqueta['tag'] == "CREARMENU" && $Etiqueta['type'] == "close") { 
				$MenuActual = &$MenuActual->Padre();
			}
			// Empieza y termina un submenu sin hijos
			else if ($Etiqueta['tag'] == "CREARMENU" && $Etiqueta['type'] == "complete") { 
				$MenuActual->CrearSubMenu( $Etiqueta['attributes']['NOMBRE'], $Etiqueta['attributes']['URL'], 
				                           $Destino, $MenuActual );
			}
		}
	}
/* -[FIN devildrey33.LeerContenidoXML]- */
	
/* -[INICIO devildrey33.CrearMenus]- */
	// Función para crear el menu
	public function CrearMenus() {
		echo $this->_CrearMenuRecursivo($this->_Menus, 0);
	}
	// Función recursiva para crear los menus	
	private function _CrearMenuRecursivo(&$Menu, $Escalera) {
		$TextoMenu = "";
		$TextoSubMenu = "";
		if ($Escalera == 0) { // Menu superior
			$TextoMenu .= "\n<div class='devildrey33_Menu'>";
			for ($i = 0; $i < $Menu->TotalSubMenus(); $i ++) {
				// Si existe una URL creamos la etiqueta <a>
				if ($Menu->SubMenu($i)->Url() != "") { 
					// Si existe un destino lo añadimos
					if ($Menu->SubMenu($i)->Destino() != "") $Target = " target='".$Menu->SubMenu($i)->Destino()."'";
					else                                     $Target = "";
					$EtiquetaA1 = "<a href='.$Menu->SubMenu($i)->Url().' ".$Target.">";
					$EtiquetaA2 = "</a>";
				}
				else {
					$EtiquetaA1 = "";
					$EtiquetaA2 = "";
				}
				// Creación del div para el menu superior o padre
				$TextoMenu .= "\n<div class='devildrey33_MenuSuperior' id='devildrey33_MenuSuperior_".$Menu->SubMenu($i)->ID();
				$TextoMenu .= "' onmousemove='devildrey33_MostrarMenu(\"".$Menu->SubMenu($i)->ID()."\")'";
				$TextoMenu .= " onmouseout='devildrey33_TemporizadorOcultarMenus(1);'>";
				$TextoMenu .= $EtiquetaA1.$Menu->SubMenu($i)->Nombre().$EtiquetaA2;
				$TextoMenu .= "\n</div> <!-- FIN devildrey33_MenuSuperior_".$Menu->SubMenu($i)->ID()." -->";
				$TextoSubMenu .= $this->_CrearMenuRecursivo($Menu->SubMenu($i), $Escalera + 1);
				if (!isset($this->_IDS[$Escalera])) $this->_IDS[$Escalera] = 0;
				$this->_IDS[$Escalera] ++;
			}
			$TextoMenu.= "\n</div> <!-- FIN devildrey33_Menu -->";
		}
		else { // SubMenu
			if ($Menu->TotalSubMenus() > 0) {
				$TextoMenu .= "\n<div class='devildrey33_SubMenu' id='devildrey33_SubMenu_".$Menu->ID()."'>";
				for ($i = 0; $i < $Menu->TotalSubMenus(); $i ++) {
					// Si existe una URL creamos la etiqueta <a>
					if ($Menu->SubMenu($i)->Url() != "") { 
						// Si existe un destino lo añadimos
						if ($Menu->SubMenu($i)->Destino() != "") $Target = " target='".$Menu->SubMenu($i)->Destino()."'";
						else                                     $Target = "";
						$EtiquetaA1 = "<a href='".$Menu->SubMenu($i)->Url()."' ".$Target.">";
						$EtiquetaA2 = "</a>";
					}
					else {
						$EtiquetaA1 = "";
						$EtiquetaA2 = "";
					}
					// Creación del div para el submenu 
					if ($Menu->SubMenu($i)->TotalSubMenus() > 0) {
						$TextoMenu .= "\n<div class='devildrey33_SubMenuItem' id='devildrey33_SubMenuItem_".$Menu->SubMenu($i)->ID();
						$TextoMenu .= "' onmousemove='devildrey33_MostrarSubMenu(\"".$Menu->SubMenu($i)->ID()."\")'";
						$TextoMenu .= " onmouseout='devildrey33_TemporizadorOcultarMenus(1);'>";
						$TextoMenu .= $EtiquetaA1.$Menu->SubMenu($i)->Nombre().$EtiquetaA2;
						$TextoMenu .= "\n</div> <!-- FIN devildrey33_SubMenuItem_".$Menu->SubMenu($i)->ID()." -->";
						$TextoSubMenu .= $this->_CrearMenuRecursivo($Menu->SubMenu($i), $Escalera + 1);					
					}
					else {
						$TextoMenu .= "\n<div class='devildrey33_SubMenuItem' id='devildrey33_SubMenuItem_".$Menu->SubMenu($i)->ID();
						$TextoMenu .= "' onmousemove='devildrey33_ResaltarMenuItem(\"".$Menu->SubMenu($i)->ID()."\")'";
						$TextoMenu .= " onmouseout='devildrey33_TemporizadorOcultarMenus(1);'>";
						$TextoMenu .= $EtiquetaA1.$Menu->SubMenu($i)->Nombre().$EtiquetaA2."</div>";
					}
				}
				$TextoMenu .= "\n</div> <!-- FIN devildrey33_SubMenu_".$Menu->ID()." -->";
			}
		}
		return $TextoMenu.$TextoSubMenu;
	}
/* -[FIN devildrey33.CrearMenus]- */
	
	protected $_Menus;
};


/* -[INICIO devildrey33.devildrey33_SubMenu]- */
/* Clase que contiene los datos de un menu / submenu */	
class devildrey33_SubMenu {
	// Constructor para crear un SubMenu
	public function __construct($nNombre, $nUrl, $nDestino, &$nPadre, $nID = "00") {
		$this->_Nombre = $nNombre;
		$this->_Url    = $nUrl;
		$this->_Padre  = &$nPadre;
		// Establecemos la ID para este submenu
		if (strlen($nID) == 1) $nID = "0".$nID;
		if ($nPadre != "")  $this->_ID = $nPadre->_ID."_".$nID;
		else				$this->_ID = $nID;
	}
	// Función para crear un SubMenu
	public function CrearSubMenu($nNombre, $nUrl, $nDestino, &$nPadre) {
		$this->_SubMenus[$this->_TotalSubMenus] = new devildrey33_SubMenu( $nNombre, $nUrl, $nDestino, 
                                                                           $nPadre, $this->_TotalSubMenus ++ );
	}
	// Función que devuelve una referencia hacia el menu padre 
	public function &Padre()         { return $this->_Padre; }
	// Función que devuelve una referencia hacia el menu hijo especificado 
	public function &SubMenu($Pos)   { return $this->_SubMenus[$Pos]; }
	// Función que devuelve el nombre para este menu
	public function  Nombre()        { return $this->_Nombre; }
	// Función que devuelve la URL de este menu
	public function  Url()           { return $this->_Url; }
	// Función que devuelve el total de hijos de este menu
	public function  TotalSubMenus() { return $this->_TotalSubMenus; }
	// Función que devuelve la ID de este menu
	public function  ID()            { return $this->_ID; }
	// Función que devuelve el destino de este menu (se refiere a donde abrira la url, por defecto la abre en la misma ventana)
	public function  Destino()       { return $this->_Destino; }
	// Variables protegidas
	protected $_ID;
	protected $_Nombre;
	protected $_Url;
	protected $_Destino;
	protected $_Padre;
	protected $_TotalSubMenus = 0;
	protected $_SubMenus = array();
}
/* -[FIN devildrey33.devildrey33_SubMenu]- */

?>