// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un mensaje del Snake dentro de un ObjetoEscena

#ifndef OBJETO_ESCENA_MENSAJE
#define OBJETO_ESCENA_MENSAJE

#include "ObjetoEscena_VentanaTranslucida.h"

// -[INICIO devildrey33.ObjetoEscena_Mensaje]-
// Clase que encapsula una ventana translucida que hace de tablero dentro de un ObjetoEscena
class ObjetoEscena_Mensaje : public ObjetoEscena_VentanaTranslucida { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoEscena_Mensaje(void);
							// -Destructor
						   ~ObjetoEscena_Mensaje(void);
                            // -Función que se llama al final de pintar todos los graficos 
                            // (Los graficos pintados no seran modificados con AlphaBlend).
  virtual void              Pintar_Terminado(HDC hDCDestino);
                            // -Función que calcula el tamaño y hace visible la ventana del mensaje
  void                      MostrarMensaje(const TCHAR *nTexto, const bool Error = false);
                            // -Función que oculta la ventana del mensaje
  void                      OcultarMensaje(void);
 private: //////////////////// Miembros privados
                            // -Texto del mensaje
  TCHAR                    *TextoMensaje;
                            // -Tamaño del texto del mensaje
  size_t                    TamTexto;
};
// -[FIN devildrey33.ObjetoEscena_Mensaje]-

#endif