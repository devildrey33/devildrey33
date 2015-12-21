// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener ventanas translucidas simuladas dentro de un ObjetoEscena
#ifndef OBJETO_ESCENA_VENTANATRANSLUCIDA
#define OBJETO_ESCENA_VENTANATRANSLUCIDA

#include "ObjetoEscena.h"

// -[INICIO devildrey33.ObjetoEscena_VentanaTranslucida]-
// Clase que encapsula una ventana translucida dentro de un ObjetoEscena
class ObjetoEscena_VentanaTranslucida { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoEscena_VentanaTranslucida(void);
							// -Destructor
						   ~ObjetoEscena_VentanaTranslucida(void);
							// -Función para crear la ventana
  void                      CrearVentanaTranslucida(ObjetoEscena *nEscenaPadre);
                            // -Función para pintar la ventana translucida
  void                      Pintar(HDC hDCDestino);
                            // -Función que se llama antes de hacer el alphablend en la que podemos añadir mas graficos.
  virtual void              Pintar_AlphaBlend(HDC hDCDestino);
                            // -Función que se llama al final de pintar todos los graficos 
                            // (Los graficos pintados no seran modificados con AlphaBlend).
  virtual void              Pintar_Terminado(HDC hDCDestino);
                            // -Espacio de la ventana translucida
  RECT                      Espacio;

//  UINT                      OrdenZ;

  COLORREF                  ColorFondo;

  COLORREF                  ColorBordeE;

  COLORREF                  ColorBordeI;

  BOOL                      Visible;
 protected :
  ObjetoEscena             *EscenaPadre;
};
// -[FIN devildrey33.ObjetoEscena_VentanaTranslucida]-

#endif