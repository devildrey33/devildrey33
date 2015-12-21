// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un listbox de windows
#ifndef OBJETO_BUTTON
#define OBJETO_BUTTON

#include "ObjetoControlEstandar.h"

// -[INICIO devildrey33.ObjetoButton]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del listbox
class ObjetoButton : public ObjetoControlEstandar { 
 public : //// Miembros publicos
            // -Constructor
            ObjetoButton(void);
            // -Destructor
           ~ObjetoButton(void);
            // -Función para crear el Button
  void      CrearButton( HWND hWndParent, const UINT nEstilos, const TCHAR *nTexto,
                         const int cX, const int cY, const int cAncho, const int cAlto, 
                         const UINT nID );
            // -Función para asignar el texto del Button
  BOOL      AsignarTexto(const TCHAR *Texto);
            // -Función para obtener el texto del Button
  UINT      ObtenerTexto(TCHAR *Texto, const UINT TamTexto);
protected :
  HFONT    _Fuente;
};
// -[FIN devildrey33.ObjetoButton]-

#endif