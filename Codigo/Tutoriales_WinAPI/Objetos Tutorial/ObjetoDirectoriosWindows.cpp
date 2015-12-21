#include "ObjetoDirectoriosWindows.h"
#include <ShlObj.h>


// -[INICIO devildrey33.ObjetoDirectoriosWindows::ObjetoDirectoriosWindows]-
// -Constructor
ObjetoDirectoriosWindows::ObjetoDirectoriosWindows(void) {
    _Shell32 = LoadLibrary(TEXT("shell32.dll"));
    _SHGetKnownFolderPath = NULL;
    if (_Shell32 != NULL) 
		_SHGetKnownFolderPath = reinterpret_cast<TpSHGetKnownFolderPath>(GetProcAddress(_Shell32, "SHGetKnownFolderPath"));
}
// -[FIN devildrey33.ObjetoDirectoriosWindows::ObjetoDirectoriosWindows]-

// -[INICIO devildrey33.ObjetoDirectoriosWindows::~ObjetoDirectoriosWindows]-
// -Destructor
ObjetoDirectoriosWindows::~ObjetoDirectoriosWindows(void) {
    if (_Shell32 != NULL) FreeLibrary(_Shell32);
    _Shell32 = NULL;
}
// -[FIN devildrey33.ObjetoDirectoriosWindows::~ObjetoDirectoriosWindows]-

// -[INICIO devildrey33.ObjetoDirectoriosWindows::_ObtenerDirectorioV5]-
// -Función que llamara a SHGetFolderPath si es posible
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::_ObtenerDirectorioV5(int CSLID, TCHAR *StrOut) {
    if (SUCCEEDED(SHGetFolderPath(NULL, CSLID, NULL, 0, StrOut))) return TRUE;
    return FALSE;
}
// -[FIN devildrey33.ObjetoDirectoriosWindows::_ObtenerDirectorioV5]-

// -[INICIO devildrey33.ObjetoDirectoriosWindows::_ObtenerDirectorioV6]-
// -Función que llamara a SHGetKnownFolderPath si es posible
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::_ObtenerDirectorioV6(const GUID& rfid, TCHAR *StrOut) {
    #if _MSC_VER > 1300
        if (_SHGetKnownFolderPath != NULL) { // Vista o superior
            PWSTR Tmp = NULL;
            if (S_OK == _SHGetKnownFolderPath(FOLDERID_ProgramData, NULL, 0, &Tmp)) {
                wcscpy_s(StrOut, MAX_PATH, Tmp);
                CoTaskMemFree(Tmp);
                return TRUE;
            }
        }
    #endif
    return FALSE;
}
// -[FIN devildrey33.ObjetoDirectoriosWindows::_ObtenerDirectorioV6]-

// -[INICIO devildrey33.ObjetoDirectoriosWindows::AppData]-
// -Función para obtener el directorio AppData general
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::AppData(TCHAR *StrOut) {
    #if _MSC_VER > 1300
        if (_ObtenerDirectorioV6(FOLDERID_ProgramData, StrOut) == FALSE) return _ObtenerDirectorioV5(CSIDL_COMMON_APPDATA, StrOut);
    #endif
    return _ObtenerDirectorioV5(CSIDL_COMMON_APPDATA, StrOut);
};
// -[FIN devildrey33.ObjetoDirectoriosWindows::AppData]-

// -Función para obtener el directorio AppData del usuario actual
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::AppData_UsuarioActual(TCHAR *StrOut) {
    #if _MSC_VER > 1300
        if (_ObtenerDirectorioV6(FOLDERID_RoamingAppData, StrOut) == FALSE) return _ObtenerDirectorioV5(CSIDL_APPDATA, StrOut);
    #endif
    return _ObtenerDirectorioV5(CSIDL_APPDATA, StrOut);
}

// -Función para obtener el directorio del Escritorio general
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::Escritorio(TCHAR *StrOut) {
    #if _MSC_VER > 1300
        if (_ObtenerDirectorioV6(FOLDERID_PublicDesktop, StrOut) == FALSE) return _ObtenerDirectorioV5(CSIDL_COMMON_DESKTOPDIRECTORY, StrOut);
    #endif
    return _ObtenerDirectorioV5(CSIDL_COMMON_DESKTOPDIRECTORY, StrOut);
}

// -Función para obtener el directorio del Escritorio para el usuario actual
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::Escritorio_UsuarioActual(TCHAR *StrOut) {
    #if _MSC_VER > 1300
        if (_ObtenerDirectorioV6(FOLDERID_PublicDesktop, StrOut) == FALSE) return _ObtenerDirectorioV5(CSIDL_DESKTOPDIRECTORY, StrOut);
    #endif
    return _ObtenerDirectorioV5(CSIDL_DESKTOPDIRECTORY, StrOut);
}

// -Función para obtener el directorio Archivos de Programa 32 bits
//  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
BOOL ObjetoDirectoriosWindows::ArchivosDeProgramaX86(TCHAR *StrOut) {
    #if _MSC_VER > 1300
        if (_ObtenerDirectorioV6(FOLDERID_ProgramFilesX86, StrOut) == FALSE) return _ObtenerDirectorioV5(CSIDL_PROGRAM_FILESX86, StrOut);
    #endif
    return _ObtenerDirectorioV5(CSIDL_PROGRAM_FILESX86, StrOut);
}

