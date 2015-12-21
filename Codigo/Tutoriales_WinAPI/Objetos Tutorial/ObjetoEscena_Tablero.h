// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener el tablero del Snake dentro de un ObjetoEscena

// Para pintar el tablero necesitaremos datos externos, en concreto la ubicacion de toda la serpiente y la ubicacion de las bolas
#ifndef OBJETO_ESCENA_TABLERO
#define OBJETO_ESCENA_TABLERO

#include "ObjetoEscena_VentanaTranslucida.h"

// -[INICIO devildrey33.ObjetoEscena_Tablero]-
// Clase que encapsula una ventana translucida que hace de tablero dentro de un ObjetoEscena
class ObjetoEscena_Tablero : public ObjetoEscena_VentanaTranslucida { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoEscena_Tablero(void);
							// -Destructor
						   ~ObjetoEscena_Tablero(void);
                            // -Función para crear el tablero
                            //  Esta funcion adaptara la ventana que contiene el ObjetoEscena al tamaño necesario
  void                      MostrarTablero(const UINT nAncho, const UINT nAlto);
                            // -Función que se llama antes de hacer el alphablend en la que podemos añadir mas graficos.
  virtual void              Pintar_AlphaBlend(HDC hDCDestino);
                            // -Función que se llama al final de pintar todos los graficos 
                            // (Los graficos pintados no seran modificados con AlphaBlend).
  virtual void              Pintar_Terminado(HDC hDCDestino);

                            // -Vector de puntos para la serpiente
  std::vector<POINT>        Serpiente;
                            // -Vector de puntos para las bolas
  std::vector<POINT>        Bolas;
                            // -Vector de puntos para el muro
  std::vector<POINT>        Muro;
                            // -Ancho en cuadros del tablero
  UINT                      Ancho;
                            // -Alto en cuadros del tablero
  UINT                      Alto;
};
// -[FIN devildrey33.ObjetoEscena_Tablero]-

#endif