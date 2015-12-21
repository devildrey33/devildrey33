#include "ObjetoDlgAbrir.h"
//#include <shlobj.h>             // Libreria para los objetos Shell


ObjetoDlgAbrir::ObjetoDlgAbrir(void) {
}

ObjetoDlgAbrir::~ObjetoDlgAbrir(void) {
	for (size_t i = 0; i < _Archivos.size(); i++) delete [] _Archivos[i];
}

// -[INICIO devildrey33.ObjetoDlgAbrir::MostrarAbrir]-
const size_t ObjetoDlgAbrir::MostrarAbrir( HWND hWndParent, const TCHAR *nTitulo, const TCHAR *nPathRoot,
                                           const TCHAR *nFiltro, const bool nMultiSeleccion ) {
	OPENFILENAME	ofn;
	TCHAR			szFile[32768]; 
	bool		    ObteniendoRuta = true; 
	TCHAR			Archi[MAX_PATH +1];
	TCHAR           Path[MAX_PATH +1];
	TCHAR           PathFinal[MAX_PATH +1];
	UINT            Tam = 0;
    TCHAR          *Tmp = NULL;
	size_t			N = 0;
	size_t			i = 0;

	// - 1 INICIALIZACION 
	// Creo la estructura para GetOpenFileName
	ZeroMemory(&ofn, sizeof(ofn));
	ofn.lpstrCustomFilter	= NULL; 
	ofn.nFilterIndex		= 1;
	ofn.lpstrFile			= szFile; 
	ofn.nMaxFile			= 32768;
	ofn.lpstrFileTitle		= NULL;
	ofn.nMaxFileTitle		= 4096;
	ofn.lpstrTitle			= nTitulo;
	ofn.lStructSize			= sizeof(OPENFILENAME);
	ofn.hwndOwner			= hWndParent; 

    // Establezco los estilos por defecto
    if (nMultiSeleccion == true) ofn.Flags = OFN_EXPLORER | OFN_PATHMUSTEXIST | OFN_FILEMUSTEXIST | OFN_ALLOWMULTISELECT;
    else                         ofn.Flags = OFN_EXPLORER | OFN_PATHMUSTEXIST | OFN_FILEMUSTEXIST;

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

    // Limpio la lista de archivos
    _Archivos.clear();

    // Limpio el buffer para el archivo actual
    ZeroMemory(szFile, sizeof(TCHAR) * 32768);


	// - 2 MOSTRAR EL DIALOGO
    // Ejecuto GetOpenFileName para mostrar el dialogo abrir (Si se pulsa cancelar GetOpenFilename retorna 0)
	if (GetOpenFileName(&ofn)) { 
        // Si el dialogo no tiene multiseleccion añado el archivo a la lista y retorno 1
        if (nMultiSeleccion == false) {
			Tam = wcslen(szFile) +1;
			Tmp = new TCHAR[Tam];   
			wcscpy_s(Tmp, Tam, szFile);
            _Archivos.push_back(Tmp); 
            return 1;
        }

        // Si llegamos a este punto es que el dialogo se ha creado con multiselección
        // En este caso szFile tiene dentro varios strings separados por el caracter 0
        // El primer string corresponde al path donde estan los archivos, ej : c:\mis documentos\
        // El resto de strings corresponden al nombre del archivo si su ruta, ej : Archivo.txt

        // Escaneamos toda la cadena para separar los strings
        for (i = 0; i < 32768; i++) {
            // Guardo el caracter actual, y sumo +1 a N (en este orden)
            Archi[N++] = szFile[i]; 
            // Si encontramos el caracter 0 es que se ha terminado la cadena
            if (szFile[i] == 0) {
                Archi[N] = 0;
                // Si el tamaño del ultimo archivo es 1 es que ya no quedan mas archivos por lo que salimos del for
                if (N == 1) break;
                N = 0;
                // Si aun no se ha obtenido el path, lo obtenemos 
                // (una vez tenemos el path sabemos que el resto de strings son archivos)
                if (ObteniendoRuta == true) {
                    wcscpy_s(Path, MAX_PATH +1, Archi);
					Tam = wcslen(Path);
                    ObteniendoRuta = false;
                    // Si el path no termina con una barra separadora de directorios, la añadimos
                    if (Path[Tam -1] != TEXT('\\')) wcscat_s(Path, MAX_PATH +1, TEXT("\\"));
                }
                else {
					wcscpy_s(PathFinal, MAX_PATH +1, Path);
					wcscat_s(PathFinal, MAX_PATH +1, Archi);
					Tam = wcslen(PathFinal) + 1;
                    // Añadimos el archivo con su path completo a la lista de archivos
					Tmp = new TCHAR[Tam];
					wcscpy_s(Tmp, Tam, PathFinal);
			        _Archivos.push_back(Tmp);   
                }
            }
        }
	} 
    // Aunque se cree el dialogo con multiselección si solo seleccionamos un archivo, nos devolvera la ruta completa
    // en ve de separar el directorio y el archivo en dos strings.
    if (_Archivos.size() == 0 && wcslen(Path) != 0) {
		Tam = wcslen(szFile) + 1;
		Tmp = new TCHAR[Tam];
		wcscpy_s(Tmp, Tam, szFile);
        _Archivos.push_back(Tmp);   
    }
	return _Archivos.size();
}
// -[FIN devildrey33.ObjetoDlgAbrir::MostrarAbrir]-


