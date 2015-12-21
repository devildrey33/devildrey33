// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un editbox de windows
// MSDN EditBox reference : http://msdn.microsoft.com/en-us/library/aa921604.aspx

#ifndef OBJETO_EDITBOX
#define OBJETO_EDITBOX

#include "ObjetoControlEstandar.h"

// -[INICIO devildrey33.ObjetoEditBox]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del editbox
class ObjetoEditBox : public ObjetoControlEstandar { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoEditBox(void);
							// -Destructor
						   ~ObjetoEditBox(void);
                            // -Función para crear el EditBox
  void                      CrearEditBox( HWND hWndParent, const TCHAR *nTexto, const UINT nEstilos, 
                                          const int cX, const int cY, const int cAncho, const int cAlto, 
                                          const UINT nID );
                            // -Función para obtener el texto del EditBox
  UINT                      ObtenerTexto(TCHAR *nTxt, const UINT TamTxt);
                            // -Función para asignar el texto del EditBox
  BOOL                      AsignarTexto(const TCHAR *nTxt);
 protected : ///////////////// Miembros protegidos
  HFONT                    _Fuente;
};
// -[FIN devildrey33.ObjetoEditBox]-

#endif