// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado para contener una escena que mostrara uno o varios ObjetoEscena_VentanaTranslucida
// los ObjetoEscena_VentanaTranslucida seran ventanas simuladas dentro de la escena.

#ifndef OBJETO_ESCENA
#define OBJETO_ESCENA

#include "ObjetoVentana.h"
#include <vector>

class ObjetoEscena_VentanaTranslucida;

// -[INICIO devildrey33.ObjetoEscena]-
// Tipo para el vector de ventanas
typedef std::vector<ObjetoEscena_VentanaTranslucida *> VectorVentanas;
// Clase que hereda ObjetoVentana y contiene los datos de la escena
class ObjetoEscena : public ObjetoVentana {
 public : ///////////////////////////////////////// Miembros publicos
                    // -Constructor
                    ObjetoEscena(void);
                    // -Destructor
                   ~ObjetoEscena(void);
                    // Función para crear la ventana
  HWND              CrearEscena( HWND hWndParent, UINT Estilos, const TCHAR *nTitulo,
                                 const int cX, const int cY, 
                                 const int cAncho, const int cAlto,
                                 HMENU nMenu = NULL, DWORD nEstiloExtendido = NULL,
                                 const int nIconoRecursos = 32512 );
  //////////////////// Funciones para obtener los eventos
                    // -Función enlazada al mensaje WM_ERASEBKGND
  virtual LRESULT   Evento_BorrarFondo(HDC hDC);
                    // -Función enlazada al mensaje WM_PAINT
  virtual LRESULT   Evento_Pintar(HDC hDC, PAINTSTRUCT &PS);
  //////////////////// Funciones para la escena
                    // -Función que pinta la escena
  void              Escena_Pintar(HDC hDCDestino);
                    // -Función que agrega una ventana translucida a la escena
  void              Escena_AgregarVentana(ObjetoEscena_VentanaTranslucida *Ventana);
                    // -Función que carga la imagen para el fondo de la escena
  BOOL              Escena_ImagenFondo(const UINT BmpID);
                    // -Color para el fondo (el mismo que el fondo de la imagen)
  COLORREF          ColorFondo;
 protected : ///////// Miembros protegidos
                    // -Vector que contiene nuestras ventanas translucidas
  VectorVentanas    Ventanas;
                    // -Variables que mantendran la imagen de fondo cargada en memoria
  HBITMAP           BmpFondo;
  HBITMAP           ViejoFondo;
  HDC               BufferFondo;

};
// -[FIN devildrey33.ObjetoEscena]-

#endif
