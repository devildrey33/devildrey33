// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un listbox de windows
#ifndef OBJETO_LISTBOX
#define OBJETO_LISTBOX

#include "ObjetoControlEstandar.h"

//-[INICIO devildrey33.ObjetoListBox]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del listbox
class ObjetoListBox : public ObjetoControlEstandar { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoListBox(void);
							// -Destructor
						   ~ObjetoListBox(void);
                            // -Función para crear el ListBox
  void                      CrearListBox( HWND hWndParent, const UINT nEstilos, const int cX,
                                          const int cY, const int cAncho, const int cAlto, const UINT nID );
                            // -Funcion para agregar un texto a la posición especificada
                            //  Si omitimos nPos se agregara al final
  void                      InstertarString(const TCHAR *nTxt, const UINT nPos = UINT_MAX);
                            // -Funcion para borrar el texto de la posición especificada
  void                      BorrarString(const UINT nPos);
                            // -Función que borra todos los strings del listbox
  void                      BorrarTodo(void);
                            // -Función que retorna el total de strings que tiene el listbox
  const UINT	            TotalStrings(void);
                            // -Función que retorna el total de strings seleccionados que tiene el listbox
  const UINT            	TotalStringsSeleccionados(void);
protected :
  HFONT                    _Fuente;
};
//-[FIN devildrey33.ObjetoListBox]-

#endif