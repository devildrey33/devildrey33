#include "DialogoNuevoProyecto.h"
#include "resource.h"

// Constructor
DialogoNuevoProyecto::DialogoNuevoProyecto(void) {
	_NombreProyecto = NULL;
}

// Destructor
DialogoNuevoProyecto::~DialogoNuevoProyecto(void) {
	if (_NombreProyecto != NULL) delete [] _NombreProyecto;
}

// -[INICIO devildrey33.DialogoNuevoProyecto::Mostrar]-
// -Función para crear el dialogo MODAL para introducir el nombre del nuevo proyecto
const TCHAR *DialogoNuevoProyecto::Mostrar(HWND hWndParent) {
	if (_NombreProyecto != NULL) delete [] _NombreProyecto;
	_NombreProyecto = NULL;
	DialogBoxParam(GetModuleHandle(NULL), MAKEINTRESOURCE(IDD_NUEVO_PROYECTO), hWndParent, (DLGPROC)_GestorMensajes, (LPARAM)this);
	return _NombreProyecto;
}
// -[FIN devildrey33.DialogoNuevoProyecto::Mostrar]-

BOOL DialogoNuevoProyecto::Evento_IniciarDialogo(HWND hWndNuevoFoco) {
	Edit_Nombre.Asignar(_hWnd, IDC_NOMBRE_PROYECTO);
	Boton_Ok.Asignar(_hWnd, IDOK);
	Boton_Cancelar.Asignar(_hWnd, IDCANCEL);
	// No soy capaz de asignar el foco... he puesto el IDC_NOMBRE_PROYECTO como primer control que se crea en el dialogo
	// dentro del archivo .rc, y asi el editbox obtiene el foco por defecto.
	// Edit_Nombre.AsignarFoco(); 
	return TRUE;
}

BOOL DialogoNuevoProyecto::Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl) {
	TCHAR Nombre[512];
	UINT  Tam = 0;
	switch (nID) {
		case IDOK :
			Edit_Nombre.ObtenerTexto(Nombre, 512);
			Tam = wcslen(Nombre) + 1;
			_NombreProyecto = new TCHAR[Tam];
			wcscpy_s(_NombreProyecto, Tam, Nombre);
			EndDialog(_hWnd, 1);
			break;
		case IDCANCEL :
			_NombreProyecto = NULL;
			EndDialog(_hWnd, 0);
			break;
	}
	return FALSE;
}


