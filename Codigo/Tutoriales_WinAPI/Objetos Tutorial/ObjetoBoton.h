// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para crear botones
#ifndef OBJETO_BOTON
#define OBJETO_BOTON

#include "ObjetoControl.h"

#ifndef MSIMG32_LIB
    #define MSIMG32_LIB
    // La directiva pragma coment no funciona en MINGW y hay que agregar la libreria libmsimg32.a manualmente
    #pragma comment(lib, "msimg32.lib")		// Libreria del AlphaBlend y GradientFill
#endif



// -[INICIO devildrey33.ObjetoBoton_Estados]-
// Estados posibles del ObjetoBoton
enum ObjetoBoton_Estados {
    ObjetoBoton_EstadoNormal      = 0,
    ObjetoBoton_EstadoResaltado   = 1,
    ObjetoBoton_EstadoPresionado  = 2,
    ObjetoBoton_EstadoDesactivado = 3
};
// -[FIN devildrey33.ObjetoBoton_Estados]-




// -[INICIO devildrey33.ObjetoBoton]-
// Clase que hereda ObjetoControl para hacer botones
class ObjetoBoton : public ObjetoControl {
 public : ////////////////////// Miembros publicos
							  // -Constructor
                              ObjetoBoton(void);
                              // -Destructor
						     ~ObjetoBoton(void);
							  // -Función para crear el boton
  HWND                        CrearBoton( HWND hWndParent, const TCHAR *nTexto,
                                          const int cX, const int cY, const int cAncho, const int cAlto, const int nID,
                                          COLORREF nColor_TextoNormal           = RGB(255, 255, 255),
										  COLORREF nColor_TextoResaltado        = RGB(255, 255,   0),
										  COLORREF nColor_TextoPresionado       = RGB(210, 210,   0),
										  COLORREF nColor_TextoDesactivado      = RGB(128, 128, 128),
										  COLORREF nColor_DegradadoSuperior     = RGB(200, 200, 200),
										  COLORREF nColor_DegradadoInferior     = RGB(100, 100, 100),
										  COLORREF nColor_DegradadoResaltado    = RGB(210, 210, 210),
										  COLORREF nColor_BordeExteno           = RGB(128, 128, 128),
										  COLORREF nColor_BordeInterno          = RGB(190, 190, 190),
										  COLORREF nColor_BordeInternoResaltado = RGB(220, 220, 220) );
                              // -Función para cambiar el texto del botón
  void                        Texto(const TCHAR *nTexto, const bool nRepintar = true);
                              // -Función que retorna el texto del botón
  const TCHAR                *Texto(void);
                              // -Función que pinta todo el botón
  void                        Pintar(HDC hDC);
                              // -Función que repinta todo el botón si es necesario
  void                        Repintar(const bool Forzar = false);
					   		  // -Función para activar / desactivar el botón
  BOOL                        Activado(const bool nActivar);

  ////////////////////////////// Eventos re-emplazados
							  // -Función enlazada al mensaje WM_ERASEBKGND
  virtual LRESULT             Evento_BorrarFondo(HDC hDC);
							  // -Función enlazada al mensaje WM_PAINT
  virtual LRESULT             Evento_Pintar(HDC hDC, PAINTSTRUCT &PS);
							  // -Función enlazada al mensaje WM_MOUSEMOVE
  virtual LRESULT             Evento_Mouse_Movimiento(const int cX, const int cY, const UINT Params);
							  // -Función enlazada al mensaje WM_MOUSELEAVE
  virtual LRESULT             Evento_Mouse_Saliendo(void);
							  // -Función enlazada a todos los mensajes WM_?BUTTONDOWN
  virtual LRESULT             Evento_Mouse_BotonPresionado(const UINT Boton, const int cX, const int cY, const UINT Params);
							  // -Función enlazada a todos los mensajes WM_?BUTTONUP
  virtual LRESULT             Evento_Mouse_BotonSoltado(const UINT Boton, const int cX, const int cY, const UINT Params);
							  // -Función enlazada al mensaje WM_KEYDOWN
  virtual LRESULT             Evento_Teclado_TeclaPresionada(const UINT Caracter, const UINT Repeticion, const UINT Params);
					  	      // -Función enlazada al mensaje WM_KEYUP
  virtual LRESULT             Evento_Teclado_TeclaSoltada(const UINT Caracter, const UINT Repeticion, const UINT Params);

 /////////////////////////////// Funciones para el aspecto grafico
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_TextoNormal
                              AGREGAR_COLOR(Color_TextoNormal);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_TextoResaltado
                              AGREGAR_COLOR(Color_TextoResaltado);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_TextoPresionado
                              AGREGAR_COLOR(Color_TextoPresionado);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_TextoDesactivado
                              AGREGAR_COLOR(Color_TextoDesactivado);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_DegradadoSuperior
                              AGREGAR_COLOR(Color_DegradadoSuperior);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_DegradadoInferior
                              AGREGAR_COLOR(Color_DegradadoInferior);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_DegradadoResaltado
                              AGREGAR_COLOR(Color_DegradadoResaltado);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_BordeExterno
                              AGREGAR_COLOR(Color_BordeExterno);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_BordeInterno
                              AGREGAR_COLOR(Color_BordeInterno);
                              // -Macro que crea funciones para asignar y obtener el COLORREF _Color_BordeInternoResaltado
                              AGREGAR_COLOR(Color_BordeInternoResaltado);
                              // -Macro que crea la función Fuente_Desactivada, y la variable HFONT _Fuente_Normal
                              AGREGAR_FUENTE(Fuente_Normal);
                              // -Macro que crea la función Fuente_Desactivada, y la variable HFONT _Fuente_Resaltada
                              AGREGAR_FUENTE(Fuente_Resaltada);
                              // -Macro que crea la función Fuente_Desactivada, y la variable HFONT _Fuente_Presionada
                              AGREGAR_FUENTE(Fuente_Presionada);
                              // -Macro que crea la función Fuente_Desactivada, y la variable HFONT _Fuente_Desactivada
                              AGREGAR_FUENTE(Fuente_Desactivada);

protected : /////////////////// Miembros privados
                              // -Texto del botón
  TCHAR                     *_Texto;
                              // -Estado actual del botón
  ObjetoBoton_Estados        _Estado;
                              // -Ultimo estado del botón
  ObjetoBoton_Estados        _UEstado;
                              // -Valor para saber si el boton esta presionado
  bool                       _Presionado;
};
// -[FIN devildrey33.ObjetoBoton]-

#endif
