#include "ObjetoDlgGuardar.h"
//#include <shlobj.h>             // Libreria para los objetos Shell


ObjetoDlgGuardar::ObjetoDlgGuardar(void) : _Archivo(NULL) {
}

ObjetoDlgGuardar::~ObjetoDlgGuardar(void) {
	if (_Archivo != NULL) delete [] _Archivo;
}

// -[INICIO devildrey33.ObjetoDlgGuardar::MostrarGuardar]-
// -Función que muestra el dialogo guardar
const TCHAR *ObjetoDlgGuardar::MostrarGuardar( HWND hWndParent, const TCHAR *nTitulo, 
                                               const TCHAR *nPathRoot, const TCHAR *nFiltro) {
	// - 1 INICIALIZACION
	if (_Archivo != NULL) delete [] _Archivo;
	_Archivo = NULL;

	TCHAR           szFile[MAX_PATH +1];
	OPENFILENAME    ofn; 
	ZeroMemory(&ofn, sizeof(ofn));

    // Creo la estructura para GetSaveFileName
	ofn.lStructSize     = sizeof(ofn);
	ofn.hwndOwner       = hWndParent; 
	ofn.lpstrFile       = szFile;
	ofn.lpstrTitle      = nTitulo;
	ofn.lpstrFile[0]    = 0;
	ofn.nMaxFile        = sizeof(szFile);
	ofn.nFilterIndex    = 1;
	ofn.lpstrFileTitle  = NULL;
	ofn.nMaxFileTitle   = 0;
	ofn.Flags           = OFN_EXPLORER | OFN_PATHMUSTEXIST;

    // Establezco el filtro (Si es NULL usaremos un filtro para todos los archivos)
    if (nFiltro == NULL) ofn.lpstrFilter = TEXT("Todos los archivos\0*.*\0");
    else                 ofn.lpstrFilter = nFiltro;

    // Establezco la ruta inicial (Si es NULL usaremos la ruta del proyecto)
    if (nPathRoot == NULL) {
        TCHAR PathInicial[MAX_PATH +1];
        GetCurrentDirectory(MAX_PATH, PathInicial);
    	ofn.lpstrInitialDir = PathInicial;
    }
    else {
    	ofn.lpstrInitialDir = nPathRoot;
    }

	// - 2 MOSTRAR DIALOGO GUARDAR
    // Utilizo GetSaveFileName para mostrar el dialogo guardar
	if (GetSaveFileName(&ofn) == TRUE)	{
		UINT Tam = wcslen(szFile) + 1;
		_Archivo = new TCHAR[Tam];
		wcscpy_s(_Archivo, Tam, szFile); 
	}

    // Retorno el path del archivo
    return _Archivo;
}
// -[FIN devildrey33.ObjetoDlgGuardar::MostrarGuardar]-
