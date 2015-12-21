#include "ObjetoDialogo.h"
#include "ObjetoControlEstandar.h"

// Constructor
ObjetoDialogo::ObjetoDialogo(void) {
}

// Destructor
ObjetoDialogo::~ObjetoDialogo(void) {
}

// Función para crear el dialogo
// -[INICIO devildrey33.CrearDialogo]-
HWND ObjetoDialogo::CrearDialogo(UINT ID_Dialogo) {
	if (_hWnd != NULL) Destruir();
	CreateDialogParam(GetModuleHandle(NULL), MAKEINTRESOURCE(ID_Dialogo), HWND_DESKTOP, (DLGPROC)_GestorMensajes, (LPARAM)this); 
	
	return _hWnd;
}
// -[FIN devildrey33.CrearDialogo]-



// Gestor de mensajes estatico inicial
//
// - En el mensaje WM_INITDIALOG obtenemos el puntero a nuestra clase previamente asignado utilizando la función CreateWindowEx
//   Luego asignamos el puntero a la ventana utilizando SetWindowLongPtr con el parametro GWLP_USERDATA.
//   Echo esto ya tenemos enlazada la funcion GestorMensajes virtual a esta ventana.
//
// - En el default miramos si podemos acceder al ObjetoVentana y le pasamos el mensaje, en caso contrario pasamos dicho mensaje
//   a la API DefWindowProc para que lo procese como si fuera una ventana normal.
// -[INICIO devildrey33.GestorMensajes]-
BOOL CALLBACK ObjetoDialogo::_GestorMensajes(HWND nhWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	switch (uMsg) {
		// Usamos WM_INITDIALOG en ve de WM_CREATE
		case WM_INITDIALOG : {
			// El puntero a nuestra clase dialogo esta vez viene en el LPARAM
			ObjetoIniciarCommonControls::Iniciar();
			ObjetoDialogo *PreDialogo = reinterpret_cast<ObjetoDialogo *>(lParam); 
			if (PreDialogo == NULL) return FALSE;
			PreDialogo->_hWnd = nhWnd;
			SetWindowLongPtr(nhWnd, GWLP_USERDATA, PtrToLong(PreDialogo));
			return PreDialogo->Evento_IniciarDialogo(static_cast<HWND>(LongToPtr(wParam)));
		}

		default : {
			ObjetoDialogo *Dialogo = reinterpret_cast<ObjetoDialogo *>(
				LongToPtr(GetWindowLongPtr(nhWnd, GWL_USERDATA))
			);
            if (Dialogo != NULL) {
                BOOL Ret = Dialogo->GestorMensajes(uMsg, wParam, lParam);
                if (Ret == USAR_GESTOR_POR_DEFECTO) return FALSE;
                return Ret;
            }
            return FALSE;
		}
	}
};
// -[FIN devildrey33.GestorMensajes]-
