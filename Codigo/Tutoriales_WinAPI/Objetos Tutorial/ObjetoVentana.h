// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener ventanas padre
#ifndef OBJETO_VENTANA
#define OBJETO_VENTANA

#include "PlantillaEventos.h"

// -[INICIO devildrey33.ObjetoVentana]-
// Clase que hereda ObjetoHWND y se especializa en ventanas padre
class ObjetoVentana : public PlantillaEventos<LRESULT, USAR_GESTOR_POR_DEFECTO> { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoVentana(void);
							// -Destructor
						   ~ObjetoVentana(void);
							// Función para crear la ventana
  HWND                      CrearVentana( HWND hWndParent, const TCHAR *nNombre, UINT nEstilos, const TCHAR *nTitulo,
                                          const int cX, const int cY, const int cAncho, const int cAlto, HMENU nMenu,
                                          DWORD nEstiloExtendido = NULL, const int nIconoRecursos = 32512 );

 private : /////////////////// Miembros privados
							// -Gestor de mensajes estatico inicial
  static LRESULT CALLBACK  _GestorMensajes(HWND nhWnd, UINT uMsg, WPARAM wParam, LPARAM lParam);
};
// -[FIN devildrey33.ObjetoVentana]-

#endif