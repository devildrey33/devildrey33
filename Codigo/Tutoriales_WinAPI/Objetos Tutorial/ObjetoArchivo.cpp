#include "ObjetoArchivo.h"
#include <string>

// Constructor
ObjetoArchivo::ObjetoArchivo(void) {
    _Archivo = INVALID_HANDLE_VALUE;
    _FinalDelArchivo = false;
}

// Destructor
ObjetoArchivo::~ObjetoArchivo(void) {
    CerrarArchivo();
}

// -[INICIO devildrey33.ObjetoArchivo::AbrirArchivo]-
// -Función para abrir un archivo lectura/escritura
//  Devuelve FALSE en caso de error
BOOL ObjetoArchivo::AbrirArchivo(const TCHAR *Path, const bool Abrir_si_no_existe) {
	CerrarArchivo();
	_Archivo = CreateFile( Path, FILE_READ_DATA | FILE_WRITE_DATA, 0, 0,
                           (Abrir_si_no_existe) ? OPEN_ALWAYS : OPEN_EXISTING,
                           FILE_ATTRIBUTE_NORMAL, 0 );
    _FinalDelArchivo = false;
	if (_Archivo != INVALID_HANDLE_VALUE)	return TRUE;
	else									return FALSE;
}
// -[FIN devildrey33.ObjetoArchivo::AbrirArchivo]-

// -Función para abrir un archivo
//  Devuelve FALSE en caso de error
BOOL ObjetoArchivo::AbrirArchivoLectura(const TCHAR *Path) {
	CerrarArchivo();
	_Archivo = CreateFile( Path, FILE_READ_DATA, 0, 0,
                           OPEN_EXISTING,
                           FILE_ATTRIBUTE_NORMAL, 0 );
    _FinalDelArchivo = false;
	if (_Archivo != INVALID_HANDLE_VALUE)	return TRUE;
	else									return FALSE;
}

// -Función para abrir un archivo
//  Devuelve FALSE en caso de error
BOOL ObjetoArchivo::AbrirArchivoEscritura(const TCHAR *Path, const bool Abrir_si_no_existe) {
	CerrarArchivo();
	_Archivo = CreateFile( Path, FILE_WRITE_DATA, 0, 0,
                           (Abrir_si_no_existe) ? OPEN_ALWAYS : OPEN_EXISTING,
                           FILE_ATTRIBUTE_NORMAL, 0 );
    _FinalDelArchivo = false;
	if (_Archivo != INVALID_HANDLE_VALUE)	return TRUE;
	else									return FALSE;
}

// -[INICIO devildrey33.ObjetoArchivo::Leer]-
// -Función para leer datos del archivo
BOOL ObjetoArchivo::Leer(LPVOID Buffer, const size_t NumBytes) {
    DWORD  Leido = 0;
    BOOL   Ret   = ReadFile(_Archivo, Buffer, NumBytes, &Leido, NULL);
    if (Leido != NumBytes) _FinalDelArchivo = true;
    return Leido;
};

// -Función para guardar datos en el archivo
BOOL ObjetoArchivo::Guardar(LPCVOID Buffer, const size_t NumBytes) {
    DWORD  Guardado = 0;
    BOOL   Ret = WriteFile(_Archivo, Buffer, NumBytes, &Guardado, NULL);
    return Guardado;
};
// -[FIN devildrey33.ObjetoArchivo::Leer]-

// -[INICIO devildrey33.ObjetoArchivo::CerrarArchivo]-
// -Función para cerrar el archivo
BOOL ObjetoArchivo::CerrarArchivo(void) {
    BOOL Ret = FALSE;
	if (_Archivo != INVALID_HANDLE_VALUE) Ret = CloseHandle(_Archivo);
	_Archivo = INVALID_HANDLE_VALUE;
    return Ret;
};
// -[FIN devildrey33.ObjetoArchivo::CerrarArchivo]-

// -Función para saber si el archivo esta abierto
bool ObjetoArchivo::EstaAbierto(void) {
    if (_Archivo != INVALID_HANDLE_VALUE)	return true;
    else									return false;
};

// -[INICIO devildrey33.ObjetoArchivo::LeerString]-
// -Función que guarda un string terminado con '\0'
BOOL ObjetoArchivo::GuardarString(const TCHAR *Str) {
    UINT Tam = 0;
    if (Str != NULL) Tam = wcslen(Str) + 1;
    GuardarUINT(Tam);
    return Guardar(Str, Tam * sizeof(TCHAR));
}

// -Función que lee un string previamente guardado con GuardarString
//  Hay que pasarle un puntero NULL o sin iniciar en el que se creara el string.
//  Una vez no necesites mas el string deberas borrarlo con delete.
BOOL ObjetoArchivo::LeerString(PTCHAR &nStr) {
    UINT Tam = 0;
    if (LeerUINT(Tam) == 0) return FALSE;
    if (Tam == 0) return FALSE;
    nStr = new TCHAR[Tam];
    Leer(nStr, Tam * sizeof(TCHAR));
    return Tam;
}
// -[FIN devildrey33.ObjetoArchivo::LeerString]-


// -[INICIO devildrey33.ObjetoArchivo::ObtenerLongitud]-
// -Función para obtener la longitud del archivo (limitada a valores de 32 bits)
DWORD ObjetoArchivo::ObtenerLongitud32(DWORD *ValorAlto) {
    return GetFileSize(_Archivo, ValorAlto);
}

// -Función para obtener la longitud del archivo en formato 64 bits
LARGE_INTEGER ObjetoArchivo::ObtenerLongitud64(void) {
    LARGE_INTEGER Ret;
    GetFileSizeEx(_Archivo, &Ret);
    return Ret;
}
// -[FIN devildrey33.ObjetoArchivo::ObtenerLongitud]-
