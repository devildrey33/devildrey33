// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado como contenedor basico de ventanas y controles
#ifndef OBJETO_HWND
#define OBJETO_HWND

#include "Plataforma.h"
//#include <windowsx.h>

//! Macro para obtener la coordenada X de un LPARAM
#ifndef GET_X_LPARAM
	#define GET_X_LPARAM(lp)			((int)(short)LOWORD(lp))
#endif
//! Macro para obtener la coordenada Y de un LPARAM
#ifndef GET_Y_LPARAM
	#define GET_Y_LPARAM(lp)			((int)(short)HIWORD(lp))
#endif


// Pre-declaración de la clase ObjetoBoton
class ObjetoBoton;

// -[INICIO devildrey33.ObjetoHWND]-
// Clase base para ventanas y controles
class ObjetoHWND {
 public : //////////////////// Miembros publicos
							// Constructor
							ObjetoHWND(void);
							// Destructor
						   ~ObjetoHWND(void);

  //////////////////////////// Funciones basicas
							// -Función que retorna el hWnd de la ventana
  inline HWND               hWnd(void) { return _hWnd; };
							// -Función que retorna la ID de la ventana
  virtual UINT              ID(void);

							// -Función que destruye la ventana
  virtual BOOL              Destruir(void);

							// -Función para mostrar / ocultar la ventana
  virtual BOOL              Visible(const bool nMostrar);
							// -Función para saber si la ventana esta visible
  virtual BOOL              Visible(void);

							// -Función para activar / desactivar la ventana
  virtual BOOL              Activado(const bool nActivar);
							// -Función para saber si la ventana esta activada
  virtual BOOL              Activado(void);

                            // -Función para mover la ventana
  virtual BOOL              Mover(const int cX, const int cY, const int cAncho, const int cAlto, const BOOL Repintar = TRUE);

							// -Función para asignar el foco del teclado a esta ventana
  virtual HWND              AsignarFoco(void);

 protected : ///////////////// Miembros protegidos
							// -HWND de la ventana
  HWND                     _hWnd;

							// -Funcion para registrar una clase ventana
  ATOM                      RegistrarClase(const TCHAR *NombreClaseVentana, const int nIconoRecursos, WNDPROC WindowProcedureInicial);
};
// -[FIN devildrey33.ObjetoHWND]-


#endif
