// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener dialogos
#ifndef OBJETO_DIALOGO
#define OBJETO_DIALOGO

#include "PlantillaEventos.h"

// -[INICIO devildrey33.ObjetoDialogo]-
// Clase que hereda PlantillaEventos y se especializa en dialogos
class ObjetoDialogo : public PlantillaEventos<BOOL, 0> { 
 public : //////////////// Miembros publicos
                        // -Constructor
                        ObjetoDialogo(void);
                        // -Destructor
                       ~ObjetoDialogo(void);
                        // Función para crear el dialogo
  HWND                  CrearDialogo(UINT ID_Dialogo);
                        // Evento que nos dice cuando arranca el dialogo
  virtual BOOL          Evento_IniciarDialogo(HWND hWndNuevoFoco) { return TRUE; };
 protected : ///////////// Miembros protegidos
                        // -Gestor de mensajes estatico inicial
  static BOOL CALLBACK _GestorMensajes(HWND nWnd, UINT uMsg, WPARAM wP, LPARAM lP);
};
// -[FIN devildrey33.ObjetoDialogo]-

#endif