/*  Archivo JavaScript con las funciones necesarias para el menú de www.devildrey33.es 
	Creado el 07/11/2011 
	Ultima modificación 09/11/2011
 */

// -[INICIO devildrey33.MostrarMenu]-
// Función para mostrar el primer submenu 
function devildrey33_MostrarMenu(ID) {
	var MenuSuperior = $("#devildrey33_MenuSuperior_" + ID);
	// Normalizo menus superiores
	$(".devildrey33_MenuSuperior_Resaltado").prop({ "className" : "devildrey33_MenuSuperior" });
	// Normalizo los submenus
	$(".devildrey33_SubMenuItem_Resaltado").prop({ "className" : "devildrey33_SubMenuItem" });
	// Oculto TODOS los submenus
	$(".devildrey33_SubMenu").css({ "display" : "none" });
	// Resalto el menu superior seleccionado
	MenuSuperior.prop({ "className" : "devildrey33_MenuSuperior_Resaltado" });
	// Asigno estilos, posición, y muestro el submenu seleccionado
	var SubMenu = $("#devildrey33_SubMenu_" + ID);	
	SubMenu.css({   "left" : MenuSuperior.offset().left, 
                    "top" : (MenuSuperior.outerHeight() + MenuSuperior.position().top),
                    "min-width" : MenuSuperior.width() 
				});
	if (SubMenu.width() > MenuSuperior.width()) SubMenu.css({ "border-radius" : "0px 4px 4px 4px" });
	else 										SubMenu.css({ "border-radius" : "0px 0px 4px 4px" });	
	SubMenu.css({ "display" : "block" });	
	// Desactivo el temporizador para ocultar todos los menus
	devildrey33_TemporizadorOcultarMenus(0);
}
// -[FIN devildrey33.MostrarMenu]-

// -[INICIO devildrey33.MostrarSubMenu]-
// Función para mostrar menus de segundo nivel en adelante
function devildrey33_MostrarSubMenu(ID) {
	// Oculto TODOS los submenus
	$(".devildrey33_SubMenu").css({ "display" : "none" });
	// Des-Resalto todos los submenus
	$(".devildrey33_SubMenuItem_Resaltado").prop({ "className" : "devildrey33_SubMenuItem" });
	// Busco los sumbenus que deben permanecer visibles
	var ID2 = ID;
	var TSubMenus = 0;
	while (ID2.length > 5) {
		TSubMenus ++;
		// Asigno la clase resaltada al item que esta seleccionado
		$("#devildrey33_SubMenuItem_" + ID2).prop({ "className" : "devildrey33_SubMenuItem_Resaltado" });
		// Muestro el submenu inferior
		$("#devildrey33_SubMenuItem_" + ID2).parent().css({ "display" : "block" });
		// Eliminamos 2 caracteres a la id para ir al menu inmediatamente superior o padre.
		ID2 = ID2.substr(0, (ID2.length - 3));
	}
	if (TSubMenus == 1) TSubMenus = 4;
	else				TSubMenus = 6 * TSubMenus;
	// Localizo el item a mostrar
	var SubMenuItem = $("#devildrey33_SubMenuItem_" + ID);
	// Localizo el submenu a mostrar
	var SubMenu = $("#devildrey33_SubMenu_" + ID);
	// Asigno estilos con la posición y hago visible el submenu que toca
	SubMenu.css({   "left" : (SubMenuItem.offset().left + SubMenuItem.width()) - 10,
                    "top" : SubMenuItem.position().top + 40 + TSubMenus, 
                    "border-radius" : "4px", 
                    "border-top-width" : "1px" 
				});
	SubMenu.css({ "display" : "block" });
	// Desactivo el temporizador para ocultar todos los menus
	devildrey33_TemporizadorOcultarMenus(0);
}
// -[FIN devildrey33.MostrarSubMenu]-

// -[INICIO devildrey33.ResaltarMenuItem]-
// Función para resaltar items que no tienen submenus
function devildrey33_ResaltarMenuItem(ID) {
	// Oculto TODOS los submenus
	$(".devildrey33_SubMenu").css({ "display" : "none" });
	// Des-Resalto todos los submenus
	$(".devildrey33_SubMenuItem_Resaltado").prop({ "className" : "devildrey33_SubMenuItem" });
	// Busco los sumbenus que deben permanecer visibles
	ID2 = ID;
	while (ID2.length > 5) {
		// Asigno la clase resaltada al item que esta seleccionado
		$("#devildrey33_SubMenuItem_" + ID2).prop({ "className" : "devildrey33_SubMenuItem_Resaltado" });
		// Muestro el submenu inferior
		$("#devildrey33_SubMenuItem_" + ID2).parent().css({ "display" : "block" });
		// Eliminamos 2 caracteres a la id para ir al menu inmediatamente superior o padre.
		ID2 = ID2.substr(0, (ID2.length - 3));
	}
	// Selecciono todos los menuitems del submenu actual y los normalizo
	$("#devildrey33_SubMenuItem_" + ID).parent().children().prop({ "className" : "devildrey33_SubMenuItem" });
	// Resalto el menuitem actual
	$("#devildrey33_SubMenuItem_" + ID).prop({ "className" : "devildrey33_SubMenuItem_Resaltado" });
	// Desactivo el temporizador para ocultar todos los menus
	devildrey33_TemporizadorOcultarMenus(0);
}
// -[FIN devildrey33.ResaltarMenuItem]-

// Variable que contiene la ID del temporizador que se ocupa de ocultar el menú 
var devildrey33_TemporizadorOcultarMenu = 0;

// -[INICIO devildrey33.OcultarMenus]-
// Función que activa / desactiva un temporizador que oculta el menu pasado un segundo
// Activar = 0 desactiva el temporizador
// Activar = 1 activa el temporizador
function devildrey33_TemporizadorOcultarMenus(Activar) {
	if (devildrey33_TemporizadorOcultarMenu != 0) clearInterval(devildrey33_TemporizadorOcultarMenu);
	if (Activar == 1) devildrey33_TemporizadorOcultarMenu = setInterval("devildrey33_OcultarMenus()", 1000);
}

// Función que oculta todos los SubMenus
function devildrey33_OcultarMenus() {
	clearInterval(devildrey33_TemporizadorOcultarMenu);
	// Normalizo menus superiores
	$(".devildrey33_MenuSuperior_Resaltado").prop({ "className" : "devildrey33_MenuSuperior" });
	// Oculto TODOS los submenus
	$(".devildrey33_SubMenu").css({ "display" : "none" });
}
// -[FIN devildrey33.OcultarMenus]-

