// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado para poder obtener la ubicación de ciertos directorios especiales de windows.
// En windows XP se usa la API SHGetFolderPath pero en windows vista y windows 7 hay una nueva API SHGetKnownFolderPath,
// la cual no se puede linkear si queremos que la aplicación funcione en windows XP.
// Por ello he creado una clase que mira si existe esa funcion en la API de windows, y en ese caso la usa.

// NOTAS Este archivo no compila ni en VisualC6 ni en DevC++
// -En VisualC6 no existe la definicion de la API SHGetFolderPath asi que habria que llamarla directamente,
//  y ya ni pensar en SHGetKnownFolderPath de la cual no tenemos su cabecera.
// -En DevC++ no tenemos la cabecera de KnownFolders, aunque podemos usar SHGetFolderPath, con lo que resulta inutil la función de esta clase.
#ifndef OBJETO_DIRECTORIOSWINDOWS
#define OBJETO_DIRECTORIOSWINDOWS

#include "Plataforma.h"

// Si la version de VisualStudio es la 2005 o superior añadimos la cabecera para directorios de windows vista y windows 7
#if _MSC_VER > 1300
    #include <KnownFolders.h>
#endif
// Prototipo para la API SHGetKnownFolderPath
typedef HRESULT (WINAPI* TpSHGetKnownFolderPath)(const GUID& rfid, DWORD dwFlags, HANDLE hToken, PWSTR *path);


// -[INICIO devildrey33.ObjetoDirectoriosWindows]-
// Clase que se usa para obtener directorios especiales de windows
class ObjetoDirectoriosWindows {
 public : //////////////////////////// Miembros publicos
							        // -Constructor
                                    ObjetoDirectoriosWindows(void);
							        // -Destructor
						           ~ObjetoDirectoriosWindows(void);
                                    // -Función para obtener el directorio Archivos de Programa 32 bits
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL                              ArchivosDeProgramaX86(TCHAR *StrOut);
                                    // -Función para obtener el directorio AppData general
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL                              AppData(TCHAR *StrOut);
                                    // -Función para obtener el directorio AppData del usuario actual
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL                              AppData_UsuarioActual(TCHAR *StrOut);
                                    // -Función para obtener el directorio del Escritorio general
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL					            Escritorio(TCHAR *StrOut);
                                    // -Función para obtener el directorio del Escritorio para el usuario actual
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL					            Escritorio_UsuarioActual(TCHAR *StrOut);
 protected : ///////////////////////// Miembros protegidos
						            // -Función que llamara a SHGetFolderPath si es posible
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL				               _ObtenerDirectorioV5(int CSLID, TCHAR *StrOut);
						            // -Función que llamara a SHGetKnownFolderPath si es posible
                                    //  NOTA : StrOut debe ser un TCHAR de tamaño MAX_PATH como minimo
  BOOL			            	   _ObtenerDirectorioV6(const GUID& rfid, TCHAR *StrOut);
					 	            // -Modulo shell32.
  HMODULE	                       _Shell32;
					                // -Función SHGetKnownFolderPath.
  TpSHGetKnownFolderPath     	   _SHGetKnownFolderPath;
};
// -[FIN devildrey33.ObjetoDirectoriosWindows]-

#endif
