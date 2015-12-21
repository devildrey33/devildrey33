#include "ObjetoVentana.h"


// Constructor
ObjetoVentana::ObjetoVentana(void) {
}

// Destructor
ObjetoVentana::~ObjetoVentana(void) {
}

// Función para crear la ventana
// -[INICIO devildrey33.CrearVentana]-
HWND ObjetoVentana::CrearVentana( HWND hWndParent, const TCHAR *nNombre, UINT nEstilos, const TCHAR *nTitulo,
								  const int cX, const int cY, const int cAncho, const int cAlto, HMENU hMenu,
								  DWORD nEstiloExtendido, const int nIcono ) {
	ATOM A = RegistrarClase(nNombre, nIcono, _GestorMensajes);
	_hWnd = CreateWindowEx( nEstiloExtendido, nNombre, nTitulo, nEstilos, cX, cY,
							cAncho, cAlto, hWndParent, hMenu, GetModuleHandle(NULL), this );
	return _hWnd;
}
// -[FIN devildrey33.CrearVentana]-


// Gestor de mensajes estatico inicial
//
// - En el mensaje WM_CREATE obtenemos el puntero a nuestra clase previamente asignado utilizando la función CreateWindowEx
//   Luego asignamos el puntero a la ventana utilizando SetWindowLongPtr con el parametro GWLP_USERDATA.
//   Echo esto ya tenemos enlazada la funcion GestorMensajes virtual a esta ventana.
//
// - En el default miramos si podemos acceder al ObjetoVentana y le pasamos el mensaje, en caso contrario pasamos dicho mensaje
//   a la API DefWindowProc para que lo procese como si fuera una ventana normal.
// -[INICIO devildrey33.GestorMensajes]-
LRESULT CALLBACK ObjetoVentana::_GestorMensajes(HWND nhWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
	switch (uMsg) {
		case WM_CREATE : {
			ObjetoVentana *PreVentana = reinterpret_cast<ObjetoVentana *>(
				reinterpret_cast<CREATESTRUCT *>(lParam)->lpCreateParams
			); 
			if (PreVentana == NULL) return FALSE;
			PreVentana->_hWnd = nhWnd;
			SetWindowLongPtr(nhWnd, GWLP_USERDATA, PtrToLong(PreVentana));
			PreVentana->GestorMensajes(uMsg, wParam, lParam);
			return TRUE;
		}

		default : {
			ObjetoVentana *Ventana = reinterpret_cast<ObjetoVentana *>(
				LongToPtr(GetWindowLongPtr(nhWnd, GWL_USERDATA))
			);
            if (Ventana != NULL) {
                LRESULT Ret = Ventana->GestorMensajes(uMsg, wParam, lParam);
                if (Ret == USAR_GESTOR_POR_DEFECTO) Ret = DefWindowProc(nhWnd, uMsg, wParam, lParam);
                return Ret;
            }
            return DefWindowProc(nhWnd, uMsg, wParam, lParam);
		}
	}
};
// -[FIN devildrey33.GestorMensajes]-
