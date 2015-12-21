#include "ObjetoDlgDirectorios.h"
#include <shlobj.h>             // Libreria para los objetos Shell


ObjetoDlgDirectorios::ObjetoDlgDirectorios(void) : _Directorio(NULL) {
}

ObjetoDlgDirectorios::~ObjetoDlgDirectorios(void) {
	if (_Directorio != NULL) delete [] _Directorio;
}

// -[INICIO devildrey33.ObjetoDlgDirectorios::MostrarDirectorios]-
// -Función que muestra el dialogo guardar
const TCHAR *ObjetoDlgDirectorios::MostrarDirectorios( HWND hWndParent, const TCHAR *nTitulo, const bool BotonCrearDir,
                                                       const bool MostrarArchivos ) {
	// - 1 INICIALIZACION
	if (_Directorio != NULL) delete [] _Directorio;
	_Directorio = NULL;

	BROWSEINFO       BuscarDir;
	PIDLIST_ABSOLUTE ID; 
	PIDLIST_ABSOLUTE IDRoot;
	TCHAR            TmpDirectorio[MAX_PATH + 1] = TEXT("");
	TCHAR            DiName[MAX_PATH +1] = TEXT("");
	BuscarDir.hwndOwner     = hWndParent; 
	BuscarDir.lpszTitle     = nTitulo; 
	BuscarDir.lpfn          = NULL;
	BuscarDir.pszDisplayName = DiName;

    BuscarDir.ulFlags       = 0;
	// BIF_NONEWFOLDERBUTTON Solo funciona a partir de windows vista....
    if (BotonCrearDir == false) BuscarDir.ulFlags = BuscarDir.ulFlags | BIF_NONEWFOLDERBUTTON; 

    // BIF_BROWSEINCLUDEFILES Mostrar archivos
    if (MostrarArchivos == true) BuscarDir.ulFlags = BuscarDir.ulFlags | BIF_BROWSEINCLUDEFILES; 

    // SHGetFolderLocation no compila en VC6...
	HRESULT Res = SHGetFolderLocation(hWndParent, CSIDL_DRIVES, NULL, 0, &IDRoot);
	BuscarDir.pidlRoot = IDRoot;

	// - 2 MOSTRAR DIALOGO DIRECTORIOS
    // Mostramos el dialogo para seleccionar el directorio
	ID = SHBrowseForFolder(&BuscarDir);
	if (ID != NULL) SHGetPathFromIDList(ID, TmpDirectorio);

    // Asignamos el directorio obtenido con SHGetPathFromIDList
	UINT Tam = wcslen(TmpDirectorio) + 1;
	if (Tam > 1) {
		if (TmpDirectorio[Tam -2] != TEXT('\\')) {
			TmpDirectorio[Tam -1] = TEXT('\\');
			TmpDirectorio[Tam] = TEXT('\0');
			Tam ++;
		}
		_Directorio = new TCHAR[Tam];
		wcscpy_s(_Directorio, Tam, TmpDirectorio);
	}

    // Liberamos de la memoria los datos de SHBrowseForFolder y de SHGetFolderLocation
    ILFree(IDRoot);
    ILFree(ID);

    return _Directorio;
}
// -[FIN devildrey33.ObjetoDlgDirectorios::MostrarDirectorios]-
