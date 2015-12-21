#include "ObjetoButton.h"

// Constructor
ObjetoButton::ObjetoButton(void) {
    _Fuente = NULL;
}

// Destructor
ObjetoButton::~ObjetoButton(void) {
    if (_Fuente == NULL) DeleteObject(_Fuente);
}

// -[INICIO devildrey33.ObjetoButton::CrearButton]-
// Función para crear el Button
void ObjetoButton::CrearButton(HWND hWndParent, const UINT nEstilos, 
                               const TCHAR *nTexto, const int cX, const int cY, 
                               const int cAncho, const int cAlto,  const UINT nID ) {
    ObjetoIniciarCommonControls::Iniciar();
    // Creo el boton y lo enlazo a esta clase
    _hWnd = CreateWindowEx(NULL, TEXT("BUTTON"), nTexto, nEstilos, cX, cY, cAncho, 
                           cAlto, hWndParent, reinterpret_cast<HMENU>(IntToPtr(nID)), 
                           GetModuleHandle(NULL), NULL ); 
    _ConectarControl(); 
    // Asigno una nueva fuente para el texto
    _Fuente = CreateFont(13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, 
                         OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, 
                         FF_ROMAN, TEXT("Tahoma") ); 
    SendMessage(_hWnd, WM_SETFONT, (WPARAM)_Fuente , 0);
}
// -[FIN devildrey33.ObjetoButton::CrearButton]-


// -[INICIO devildrey33.ObjetoButton::ObtenerTexto]-
// Función para obtener el texto del Button
UINT ObjetoButton::ObtenerTexto(TCHAR *nTxt, const UINT TamTxt) {
    return GetDlgItemText(GetParent(_hWnd), GetWindowLongPtr(_hWnd, GWL_ID), nTxt, TamTxt); 
}

// Función para asignar el texto del Button
BOOL ObjetoButton::AsignarTexto(const TCHAR *nTxt) {
    return SetDlgItemText(GetParent(_hWnd), GetWindowLongPtr(_hWnd, GWL_ID), nTxt); 
}
// -[FIN devildrey33.ObjetoButton::ObtenerTexto]-




