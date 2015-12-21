#include "ObjetoEditBox.h"

// Constructor
ObjetoEditBox::ObjetoEditBox(void) {
    _Fuente = NULL;
}

// Destructor
ObjetoEditBox::~ObjetoEditBox(void) {
    if (_Fuente != NULL) DeleteObject(_Fuente);
}

// -[INICIO devildrey33.ObjetoEditBox::CrearEditBox]-
// Función para crear el EditBox
void ObjetoEditBox::CrearEditBox( HWND hWndParent, const TCHAR *nTexto, const UINT nEstilos, 
                                  const int cX, const int cY, const int cAncho, const int cAlto, 
                                  const UINT nID ) {
	ObjetoIniciarCommonControls::Iniciar();
    if (_hWnd != NULL) return;
	_hWnd = CreateWindowEx( NULL, TEXT("EDIT"), nTexto, nEstilos, cX, cY, cAncho, cAlto, hWndParent,
                            reinterpret_cast<HMENU>(IntToPtr(nID)), GetModuleHandle(NULL), NULL ); 
	_ConectarControl(); 
    _Fuente = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, 
                          OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
    SendMessage(_hWnd, WM_SETFONT, (WPARAM)_Fuente , 0);
}
// -[FIN devildrey33.ObjetoEditBox::CrearEditBox]-

// -[INICIO devildrey33.ObjetoEditBox::ObtenerTexto]-
// Función para obtener el texto del EditBox
UINT ObjetoEditBox::ObtenerTexto(TCHAR *nTxt, const UINT TamTxt) {
    return GetDlgItemText(GetParent(_hWnd), GetWindowLongPtr(_hWnd, GWL_ID), nTxt, TamTxt); 
}

// Función para asignar el texto del EditBox
BOOL ObjetoEditBox::AsignarTexto(const TCHAR *nTxt) {
	return SetDlgItemText(GetParent(_hWnd), GetWindowLongPtr(_hWnd, GWL_ID), nTxt); 
}
// -[FIN devildrey33.ObjetoEditBox::ObtenerTexto]-

