#include "ObjetoControlEstandar.h"

bool ObjetoIniciarCommonControls::_Iniciado = false;


// Constructor
ObjetoControlEstandar::ObjetoControlEstandar(void) {
}

// Destructor
ObjetoControlEstandar::~ObjetoControlEstandar(void) {
}

// Función para conectar esta clase con el control estandar
HWND ObjetoControlEstandar::Asignar(HWND hWndParent, const int ID_Control) {
	_hWnd = GetDlgItem(hWndParent, ID_Control);
	_ConectarControl();
	return _hWnd;
}

void ObjetoControlEstandar::_ConectarControl(void) {
    SetWindowLongPtr(_hWnd, GWLP_USERDATA, PtrToLong(this));
    _GestorMensajesOriginal = (WNDPROC)LongToPtr(SetWindowLongPtr(_hWnd, GWLP_WNDPROC, PtrToLong(_GestorMensajes)));
}

// Gestor de mensajes estatico inicial
// -[INICIO devildrey33.ObjetoControlEstandar::_GestorMensajes]-
LRESULT CALLBACK ObjetoControlEstandar::_GestorMensajes(HWND nhWnd, UINT uMsg, WPARAM wParam, LPARAM lParam) {
    ObjetoControlEstandar *Control = reinterpret_cast<ObjetoControlEstandar *>(LongToPtr(GetWindowLongPtr(nhWnd, GWL_USERDATA)));
    if (Control == NULL) return FALSE;
    LRESULT Ret = 0;
    if (uMsg == WM_PAINT) {
        return (Control->_GestorMensajesOriginal)(nhWnd, uMsg, wParam, lParam);
    }
    else {
        Ret = Control->GestorMensajes(uMsg, wParam, lParam);
        if (Ret == USAR_GESTOR_POR_DEFECTO) return (Control->_GestorMensajesOriginal)(nhWnd, uMsg, wParam, lParam);
    }
    return Ret;
};
// -[FIN devildrey33.ObjetoControlEstandar::_GestorMensajes]-

