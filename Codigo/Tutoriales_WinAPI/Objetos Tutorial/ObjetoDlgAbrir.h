// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para realizar operaciones de la calculadora y mostrarlas
#ifndef OBJETO_DLGABRIR
#define OBJETO_DLGABRIR

//#include "ObjetoControl.h"
#include <vector>
#include <string>
#include <windows.h>

// -[INICIO devildrey33.LIBRERIA_SHELL32]-
// CUIDADO!! con MINGW no se acepta la directiva pragma comment
#if!defined LIBRERIA_SHELL32
    #define LIBRERIA_SHELL32
    #pragma comment(lib, "shell32.lib")         // Agrego la libreria shell32.lib al proyecto
#endif
// -[FIN devildrey33.LIBRERIA_SHELL32]-



// -[INICIO devildrey33.ObjetoDlgAbrir]-
// Clase que hereda ObjetoControl y se convierte en el marcador para nuestra calculadora
class ObjetoDlgAbrir { 
 public : //////////////////////// Miembros publicos
			                    // -Constructor
                                ObjetoDlgAbrir(void);
			                    // -Destructor
		                       ~ObjetoDlgAbrir(void);
                                // -Función que muestra el dialogo abrir
    const UINT                  MostrarAbrir( HWND hWndParent, const TCHAR *nTitulo, const TCHAR *nPathRoot = NULL,
                                              const TCHAR *nFiltro = NULL, const bool nMultiSeleccion = false );
                                // -Función que retorna el total de archivos señalados para abrir
    inline const UINT           TotalArchivos(void) {
						            return static_cast<unsigned int>(_Archivos.size());
					            }
                                // -Función que retorna el archivo de la posición especificada
    inline TCHAR               *Archivo(const UINT Pos) { 
						            return _Archivos[Pos]; 
					            };
                                // -Operador que retorna el archivo de la posición especificada
    inline TCHAR               *operator [] (const UINT Pos) { 
									return _Archivos[Pos];
					            };
 private : /////////////////////// Miembros privados
                                // -Vector que contiene los archivos a abrir
	std::vector<TCHAR *>       _Archivos;
};
// -[FIN devildrey33.ObjetoDlgAbrir]-

#endif