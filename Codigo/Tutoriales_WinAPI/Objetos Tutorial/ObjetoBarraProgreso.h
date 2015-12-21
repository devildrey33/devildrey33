// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un progressbar de windows
#ifndef OBJETO_BARRAPROGRESO
#define OBJETO_BARRAPROGRESO

#include "ObjetoControl.h"

// -[INICIO devildrey33.ObjetoBarraProgreso]-
// Clase que hereda ObjetoControl y se centra en las funciones 
// de la clase ObjetoBarraProgreso
class ObjetoBarraProgreso : public ObjetoControl { 
 public : //////// Miembros publicos
                // -Constructor
                ObjetoBarraProgreso(void);
                // -Destructor
               ~ObjetoBarraProgreso(void);
                // -Función para crear la progressbar
  HWND          CrearBarraProgreso( HWND hWndParent, const UINT nID,
                                    // Posición y tamaño
                                    const int cX, const int cY, 
                                    const int cAncho, const int cAlto, 
                                    // Valores y colores por defecto 
                                    const float nMin = 0.0f, const float nMax = 100.0f, 
                                    const float nValor = 0.0f,
                                    COLORREF ColorDegradadoSuperior= RGB(200, 200, 200),
                                    COLORREF ColorDegradadoInferior= RGB(100, 100, 100),
                                    COLORREF ColorBordeExterno = RGB(128, 128, 128),
                                    COLORREF ColorBordeInterno = RGB(192, 192, 192), 
                                    COLORREF ColorFondo = RGB(220, 220, 220) 
                                    /* FIN declaración CrearBarraProgreso */ ); 
                // -Función para asignar el minimo de la progressbar
  void          Minimo(const float nMinimo, const bool nRepintar = false);
                // -Función para obtener el minimo de la progressbar
  inline float  Minimo(void) const { return _Minimo; };
                // -Función para asignar el maximo de la progressbar
  void          Maximo(const float nMaximo, const bool nRepintar = false);
                // -Función para obtener el maximo de la progressbar
  inline float  Maximo(void) const { return _Maximo; };
                // -Función para asignar el valor de la progressbar
  void          Valor(const float nValor, const bool nRepintar = true);
                // -Función para obtener el valor de la progressbar 
                //  (ojo que devuelve UINT)
  inline float  Valor(void) const { return _Valor; };
                // -Función que repinta el control
  void          Repintar(void);
                // -Función que pinta el control
  LRESULT       Evento_Pintar(HDC hDC, PAINTSTRUCT &PS);
  //////////////// Colores
                // -Macro que crea funciones para asignar y obtener 
                //  el COLORREF _Color_DegradadoSuperior
                AGREGAR_COLOR(Color_DegradadoSuperior);
                // -Macro que crea funciones para asignar y obtener 
                //  el COLORREF _Color_DegradadoInferior
                AGREGAR_COLOR(Color_DegradadoInferior);
                // -Macro que crea funciones para asignar y obtener 
                //  el COLORREF _Color_BordeExterno
                AGREGAR_COLOR(Color_BordeExterno);
                // -Macro que crea funciones para asignar y obtener
                //  el COLORREF _Color_BordeInterno
                AGREGAR_COLOR(Color_BordeInterno);
                // -Macro que crea funciones para asignar y obtener 
                //  el COLORREF _Color_Fondo
                AGREGAR_COLOR(Color_Fondo); 
 protected : ///// Miembros protegidos
  float        _Minimo;
  float        _Maximo;
  float        _Valor;

};
// -[FIN devildrey33.ObjetoBarraProgreso]-

#endif