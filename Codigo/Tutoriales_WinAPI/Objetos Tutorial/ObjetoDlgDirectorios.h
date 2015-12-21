// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado para mostrar dialogos destinados a encontrar directorios
#ifndef OBJETO_DLGDIRECTORIOS
#define OBJETO_DLGDIRECTORIOS

#include <string>
#include <windows.h>


// -[INICIO devildrey33.ObjetoDlgDirectorios]-
// Clase que hereda ObjetoControl y se convierte en el marcador para nuestra calculadora
class ObjetoDlgDirectorios { 
 public : //////////////////////////////// Miembros publicos
					                    // -Constructor
                                        ObjetoDlgDirectorios(void);
					                    // -Destructor
				                       ~ObjetoDlgDirectorios(void);
                                        // -Función que muestra el dialogo buscar directorio
    const TCHAR                        *MostrarDirectorios( HWND hWndParent, const TCHAR *nTitulo, const bool BotonCrearDir = false,
                                                            const bool MostrarArchivos = false ); 
                                        // -Función que retorna el directorio seleccionado
    inline const TCHAR                 *Directorio(void) {
									        return _Directorio; 
								        };
                                        // -Operador que retorna el directorio seleccionado
    inline const TCHAR                 *operator() (void) { 
								            return _Directorio; 
							            };

 private : /////////////////////////////// Miembros privados
                                        // -TCHAR que contiene el directorio seleccionado
	TCHAR                              *_Directorio;
};
// -[FIN devildrey33.ObjetoDlgDirectorios]-

#endif