// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado para mostrar dialogos destinados a guardar archivos
#ifndef OBJETO_DLGGUARDAR
#define OBJETO_DLGGUARDAR

#include <string>
#include <windows.h>

// -[INICIO devildrey33.LIBRERIA_SHELL32]-
// CUIDADO!! con MINGW no se acepta la directiva pragma comment
#if!defined LIBRERIA_SHELL32
    #define LIBRERIA_SHELL32
    #pragma comment(lib, "shell32.lib")         // Agrego la libreria shell32.lib al proyecto
#endif
// -[FIN devildrey33.LIBRERIA_SHELL32]-



// -[INICIO devildrey33.ObjetoDlgGuardar]-
// Clase que hereda ObjetoControl y se convierte en el marcador para nuestra calculadora
class ObjetoDlgGuardar { 
 public : //////////////////////////////// Miembros publicos
					                    // -Constructor
                                        ObjetoDlgGuardar(void);
					                    // -Destructor
				                       ~ObjetoDlgGuardar(void);
                                        // -Función que muestra el dialogo guardar
    const TCHAR                        *MostrarGuardar( HWND hWndParent, const TCHAR *nTitulo, 
                                                        const TCHAR *nPathRoot = NULL, const TCHAR *nFiltro = NULL );
                                        // -Función que retorna el archivo a guardar
    inline const TCHAR                 *Archivo(void) {
									        return _Archivo; 
								        };
                                        // -Operador que retorna el archivo a guardar
    inline const TCHAR                 *operator() (void) { 
								            return _Archivo; 
							            };

 private : /////////////////////////////// Miembros privados
                                        // -TCHAR que contiene el archivo a guardar
	TCHAR                             *_Archivo;
};
// -[FIN devildrey33.ObjetoDlgGuardar]-

#endif