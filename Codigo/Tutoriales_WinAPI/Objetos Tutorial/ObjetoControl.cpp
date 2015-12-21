#include "ObjetoControl.h"

// Constructor
ObjetoControl::ObjetoControl(void) {
}

// Destructor
ObjetoControl::~ObjetoControl(void) {
}

// Función para crear la ventana
HWND ObjetoControl::CrearControl( HWND hWndParent, const TCHAR *nNombre, UINT nEstilos, const TCHAR *nTexto,
								  const int cX, const int cY, const int cAncho, const int cAlto, const int nID,
								  DWORD nEstiloExtendido ) {
	int m_ID = nID;
	RegistrarClase(nNombre, 0, _GestorMensajes);
	_hWnd = CreateWindowEx( nEstiloExtendido, nNombre, nTexto, nEstilos, cX, cY, cAncho, cAlto,
							hWndParent, reinterpret_cast<HMENU>(m_ID), GetModuleHandle(NULL), this );
	return _hWnd;
}


// Gestor de mensajes estatico inicial
//
// - En el mensaje WM_CREATE obtenemos el puntero a nuestra clase previamente asignado utilizando la función CreateWindowEx
//   Luego asignamos el puntero a la ventana utilizando SetWindowLongPtr con el parametro GWLP_USERDATA.
//   Echo esto ya tenemos enlazada la funcion GestorMensajes virtual a esta ventana.
//
// - En el default miramos si podemos acceder al ObjetoVentana y le pasamos el mensaje, en caso contrario pasamos dicho mensaje
//   a la API DefWindowProc para que lo procese como si fuera una ventana normal.
// -[INICIO devildrey33.GestorMensajes]-
LRESULT CALLBACK ObjetoControl::_GestorMensajes(HWND nhWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	switch (uMsg) {
		case WM_CREATE : {
			ObjetoControl *PreControl = reinterpret_cast<ObjetoControl *>(
				reinterpret_cast<CREATESTRUCT *>(lParam)->lpCreateParams
			); 
			if (PreControl == NULL) return FALSE;
			PreControl->_hWnd = nhWnd;
			SetWindowLongPtr(nhWnd, GWLP_USERDATA, PtrToLong(PreControl));
			PreControl->GestorMensajes(uMsg, wParam, lParam);
			return TRUE;
		}

		default : {
			ObjetoControl *Control = reinterpret_cast<ObjetoControl *>(
				LongToPtr(GetWindowLongPtr(nhWnd, GWL_USERDATA))
			);
            if (Control != NULL) {
                LRESULT Ret = Control->GestorMensajes(uMsg, wParam, lParam);
                if (Ret == USAR_GESTOR_POR_DEFECTO) Ret = DefWindowProc(nhWnd, uMsg, wParam, lParam);
                return Ret;
            }
            return DefWindowProc(nhWnd, uMsg, wParam, lParam);
		}
	}
};
// -[FIN devildrey33.GestorMensajes]-
