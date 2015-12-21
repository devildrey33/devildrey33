// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase controla todo el juego

#ifndef OBJETO_SNAKE
#define OBJETO_SNAKE

#include "ObjetoEscena_Marcador.h"
#include "ObjetoEscena_Mensaje.h"
#include "ObjetoEscena_Tablero.h"
#include "ObjetoEscena_Records.h"
#include "ObjetoSnake_Nivel.h"

// -[INICIO devildrey33.EstadoSnake]-
// Enumeracion de los estados del juego
enum EstadoSnake {
    EnJuego               = 0,
    EnPausa               = 1,
    EnRecords             = 2,
    EnRecords_NuevoRecord = 3,
    EnSiguienteNivel      = 4,
    EnError               = 5
};
// -[FIN devildrey33.EstadoSnake]-

// -[INICIO devildrey33.ObjetoSnake]-
// Clase que contiene todas las funciones para controlar el juego
class ObjetoSnake {
 public : //////////////////// Miembros publicos
                            // -Constructor
                            ObjetoSnake(void);
                            // -Destructor
                           ~ObjetoSnake(void);
                            // -Función que inicia el juego y se enlaza con el marcador,
                            //  el tablero, el mensaje y los records
  void                      Enlazar( ObjetoEscena_Marcador *nMarcador, 
                                     ObjetoEscena_Tablero *nTablero,
                                     ObjetoEscena_Mensaje *nMensaje, 
                                     ObjetoEscena_Records *nRecords );

                            // -Función para empezar el juego
  void                      EmpezarJuego(void);
                            // -Funcion que carga en memoria los datos del nivel
  BOOL                      CargarNivel(const UINT nNivel);
                            // -Función que retorna una posición que este libre para
                            //  poder insertar una nueva bola
  POINT                     BolaAleatoria(void);

                            // -Función que hace avanzar la serpiente una posición
                            //  Tambien comprueba si se ha comido bola en el movimiento,
                            //  en ese caso agranda la serpiente.
  void                      Movimiento(void);
                            // -Función que mira el teclado
  void                      Teclado(void);
                            // -Variable que determina el estado de juego
  EstadoSnake               Estado;
                            // -Objeto que carga datos de los niveles
  ObjetoSnake_Nivel         Nivel;
                            // -Numero del nivel actual
  UINT                      NivelActual;
 private:
  int                       Direccion;
  ObjetoEscena_Marcador    *Marcador;
  ObjetoEscena_Mensaje     *Mensaje;
  ObjetoEscena_Tablero     *Tablero;
  ObjetoEscena_Records     *Records;

};
// -[FIN devildrey33.ObjetoSnake]-

#endif
