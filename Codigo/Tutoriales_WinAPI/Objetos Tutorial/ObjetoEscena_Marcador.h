// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener el marcador del Snake dentro de un ObjetoEscena

// Para pintar el marcador necesitaremos datos externos, en concreto la puntacion, el recorrido en cuadros, y los FPS
#ifndef OBJETO_ESCENA_MARCADOR
#define OBJETO_ESCENA_MARCADOR

#include "ObjetoEscena_VentanaTranslucida.h"

// -[INICIO devildrey33.ObjetoEscena_Marcador]-
// Clase que encapsula una ventana translucida que hace de tablero 

class ObjetoEscena_Marcador : public ObjetoEscena_VentanaTranslucida { 
 public : //////////////////// Miembros publicos
                            // -Constructor
                            ObjetoEscena_Marcador(void);
                            // -Destructor
                           ~ObjetoEscena_Marcador(void);
                            // -Función para mostrar el marcador
  void                      MostrarMarcador(void);
                            // -Función que se llama antes de hacer el alphablend en la 
                            //  que podemos añadir mas graficos.
  virtual void              Pintar_AlphaBlend(HDC hDCDestino);
                            // -Puntuacion total del jugador
  UINT                      Puntuacion;
                            // -Recorrido total del jugador
  UINT                      Recorrido;
                            // -Frames por segundo
  UINT                      FPS;
                            // -Velocidad en MS que tardara en hacer el movimiento la 
                            //  serpiente
  UINT                      Velocidad;

};
// -[FIN devildrey33.ObjetoEscena_Marcador]-

#endif