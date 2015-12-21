// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase controla todo el juego

#ifndef OBJETO_SNAKE_NIVEL
#define OBJETO_SNAKE_NIVEL

#include "Plataforma.h"
#include <vector>

// -[INICIO devildrey33.ObjetoSnake_Nivel]-
// Clase que contiene todas las funciones para controlar el juego
class ObjetoSnake_Nivel {
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoSnake_Nivel(void);
							// -Destructor
						   ~ObjetoSnake_Nivel(void);
                            // -Función para leer un nivel del juego
  BOOL                      CargarNivel(const UINT nNivel);
                            // -Variable que nos indica el numero de bolas a mostrar
  UINT                      NumBolas;
                            // -Variable que nos indica la velocidad
                            //  inicial en milisegundos
  UINT                      VelocidadInicial;
                            // -Variable que nos indica la ampliación
                            //  de velocidad en milisegundos
  UINT                      AmpliacionVelocidad;
                            // -Variable que nos indica el tamaño inicial 
                            //  de la serpiente en cuadros
  UINT                      TamInicialSerpiente;
                            // -Variable que nos indica el total de puntos 
                            //  que se necesitan para pasar de nivel
  UINT                      PuntosParaPasar;
                            // -Variable que nos indica el ancho del tablero en pixeles
  UINT                      AnchoTablero;
                            // -Variable que nos indica la altura del tablero en pixeles
  UINT                      AltoTablero;
                            // -Vector donde guardamos las posiciones 
                            //  de los cuadros que son parte del muro
  std::vector<POINT>        Muro;
 protected : ///////////////// Miembros protegidos
                            // -Función que obtiene datos de una linea y 
                            //  los almacena en su lugar correspondiente
  BOOL                      EvaluarLinea(const char *Linea, const UINT TamLinea);
};
// -[FIN devildrey33.ObjetoSnake_Nivel]-

#endif
