#include "ObjetoComboBox.h"

// Constructor
ObjetoComboBox::ObjetoComboBox(void) {
    _Fuente = NULL;
}

// Destructor
ObjetoComboBox::~ObjetoComboBox(void) {
    if (_Fuente == NULL) DeleteObject(_Fuente);
}

// -[INICIO devildrey33.ObjetoComboBox::CrearComboBox]-
// Función para crear el ComboBox
void ObjetoComboBox::CrearComboBox( HWND hWndParent, const UINT nEstilos, const TCHAR *nTexto, 
                                    const int cX, const int cY, const int cAncho, const int cAlto, const UINT nID ) {
	// Iniciamos los CommonControls
	ObjetoIniciarCommonControls::Iniciar();
	// Creamos el control
	_hWnd = CreateWindowEx( NULL, TEXT("COMBOBOX"), 0, nEstilos, cX, cY, cAncho, cAlto, hWndParent,
                            reinterpret_cast<HMENU>(IntToPtr(nID)), GetModuleHandle(NULL), NULL ); 
	// Asignamos el texto al EDITBOX que tiene dentro la COMBOBOX
	SetDlgItemText(hWndParent, nID, nTexto);
	_ConectarControl(); 
	// Creamos la fuente que usara el control
    _Fuente = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, 
                          OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
	// Asignamos la fuente
    SendMessage(_hWnd, WM_SETFONT, (WPARAM)_Fuente , 0);
}
// -[FIN devildrey33.ObjetoComboBox::CrearComboBox]-

// -[INICIO devildrey33.FuncionesListBox]-
// -Funcion para agregar un texto a la posición especificada
//  Si omitimos nPos se agregara al final
void ObjetoComboBox::InstertarString(const TCHAR *nTxt, const UINT nPos) {
	SendMessage(_hWnd, CB_INSERTSTRING, nPos, (LPARAM)nTxt); 
}

// -Funcion para borrar el texto de la posición especificada
void ObjetoComboBox::BorrarString(const UINT nPos) {
	SendMessage(_hWnd, CB_DELETESTRING, nPos, 0); 
}

// -Función que borra todos los strings del combobox
void ObjetoComboBox::BorrarTodo(void) {
	SendMessage(_hWnd, CB_RESETCONTENT, 0, 0); 
}; 

// -Función que retorna el total de strings que tiene el combobox                            
const UINT ObjetoComboBox::TotalStrings(void) { 
	return static_cast<UINT>(SendMessage(_hWnd, CB_GETCOUNT, 0, 0));
} 

// Función para obtener texto del LISTBOX interior del COMBOBOX
// Si la funcion retorna 0 es que ha sucedido un error
UINT ObjetoComboBox::ObtenerTextoLista(const UINT nPos, TCHAR *nTxt, const UINT TamTxt) {
	// Comprobamos que nTxt tenga el suficiente tamaño para obtener el texto especificado
	UINT TamTextoLista = SendMessage(_hWnd, CB_GETLBTEXTLEN, nPos, NULL);
	if (TamTextoLista > TamTxt) {
		// Error, el buffer introducido no tiene tamaño suficiente para el texto que se quiere obtener
		return 0;
	}
	// Obtenemos el texto de la posición especificada
    return SendMessage(_hWnd, CB_GETLBTEXT, nPos, reinterpret_cast<LPARAM>(nTxt));
}
// -[FIN devildrey33.FuncionesListBox]-

// -[INICIO devildrey33.ObjetoComboBox::ObtenerTexto]-
// Función para obtener el texto del combobox
UINT ObjetoComboBox::ObtenerTexto(TCHAR *nTxt, const UINT TamTxt) {
    return GetDlgItemText(GetParent(_hWnd), GetWindowLongPtr(_hWnd, GWL_ID), nTxt, TamTxt); 
}

// Función para asignar el texto del combobox
BOOL ObjetoComboBox::AsignarTexto(const TCHAR *nTxt) {
	return SetDlgItemText(GetParent(_hWnd), GetWindowLongPtr(_hWnd, GWL_ID), nTxt); 
}
// -[FIN devildrey33.ObjetoComboBox::ObtenerTexto]-

// -[INICIO devildrey33.ObjetoComboBox::Seleccion]-
// -Función para seleccionar un string de la lista
void ObjetoComboBox::Seleccion(const UINT nPos) {
	SendMessage(_hWnd, CB_SETCURSEL, nPos, 0); 
}

// -Función para seleccionar un string de la lista
UINT ObjetoComboBox::Seleccion(void) {
	return SendMessage(_hWnd, CB_GETCURSEL, 0, 0); 
}
// -[FIN devildrey33.ObjetoComboBox::Seleccion]-
