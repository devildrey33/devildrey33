#include "ObjetoListBox.h"

// Constructor
ObjetoListBox::ObjetoListBox(void) {
    _Fuente = NULL;
}

// Destructor
ObjetoListBox::~ObjetoListBox(void) {
    if (_Fuente == NULL) DeleteObject(_Fuente);
}

// Función para crear el EditBox
void ObjetoListBox::CrearListBox( HWND hWndParent, const UINT nEstilos, const int cX,
                                  const int cY, const int cAncho, const int cAlto, const UINT nID ) {
	_hWnd = CreateWindowEx( NULL, TEXT("LISTBOX"), 0, nEstilos, cX, cY, cAncho, cAlto, hWndParent,
                            reinterpret_cast<HMENU>(IntToPtr(nID)), GetModuleHandle(NULL), NULL ); 
	_ConectarControl(); 
    _Fuente = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, 
                          OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
    SendMessage(_hWnd, WM_SETFONT, (WPARAM)_Fuente , 0);
}


// -Funcion para agregar un texto a la posición especificada
//  Si omitimos nPos se agregara al final
void ObjetoListBox::InstertarString(const TCHAR *nTxt, const UINT nPos) {
	SendMessage(_hWnd, LB_INSERTSTRING, nPos, (LPARAM)nTxt); 
}

// -Funcion para borrar el texto de la posición especificada
void ObjetoListBox::BorrarString(const UINT nPos) {
	SendMessage(_hWnd, LB_DELETESTRING, nPos, 0); 
}

// -Función que borra todos los strings del listbox
void ObjetoListBox::BorrarTodo(void) {
	SendMessage(_hWnd, LB_RESETCONTENT, 0, 0); 
}; 

// -Función que retorna el total de strings que tiene el listbox                            
const UINT ObjetoListBox::TotalStrings(void) { 
	return static_cast<UINT>(SendMessage(_hWnd, LB_GETCOUNT, 0, 0));
} 

// -Función que retorna el total de strings seleccionados que tiene el listbox
const UINT ObjetoListBox::TotalStringsSeleccionados(void) { 
    return static_cast<UINT>(SendMessage(_hWnd, LB_GETSELCOUNT, 0, 0)); 
}
