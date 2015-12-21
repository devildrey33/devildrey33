// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener controles
#ifndef OBJETO_CONTROL
#define OBJETO_CONTROL

#include "PlantillaEventos.h"

// -[INICIO devildrey33.ObjetoControl]-
// Clase que hereda ObjetoHWND y se especializa en controles
class ObjetoControl : public PlantillaEventos<LRESULT, 0> {
 public : //////////////////// Miembros publicos
                            // -Constructor
                            ObjetoControl(void);
                            // -Destructor
                           ~ObjetoControl(void);
                            // Función para crear el control
  HWND                      CrearControl( HWND hWndParent, const TCHAR *nNombre, 
                                          UINT Estilos, const TCHAR *nTexto,
                                          const int cX, const int cY, 
                                          const int cAncho, const int cAlto, 
                                          const int nID,
                                          DWORD nEstiloExtendido = NULL );
 private : /////////////////// Miembros privados
                            // -Gestor de mensajes estatico inicial
  static LRESULT CALLBACK  _GestorMensajes( HWND nhWnd, UINT uMsg, 
                                            WPARAM wParam, LPARAM lParam );
};
// -[FIN devildrey33.ObjetoControl]-


// -[INICIO devildrey33.RGB_OBTENER]-
// Macros para obtener uno de los canales de color de un COLORREF
#define RGB_OBTENER_R(ValorRGB)	static_cast<unsigned short>((ValorRGB & 0xFF) * 0x100)
#define RGB_OBTENER_G(ValorRGB)	static_cast<unsigned short>(ValorRGB & 0xFF00)
#define RGB_OBTENER_B(ValorRGB)	static_cast<unsigned short>((ValorRGB & 0xFF0000) / 0x100)
// -[FIN devildrey33.RGB_OBTENER]-


// -[INICIO devildrey33.AGREGAR_COLOR]-
// Macro que crea un COLORREF con el nombre especificado en la seccion protected
// y funciones publicas para asignar y obtener el color.
#define AGREGAR_COLOR(NOMBRE)                                          \
	public :                                                           \
	                 /* Función que devuelve el color _NOMBRE */       \
	 inline COLORREF NOMBRE (void) {                                   \
                         return _ ## NOMBRE ;                          \
                     };                                                \
	                 /* Función que asigna el color _NOMBRE */         \
	 void            NOMBRE (COLORREF nCol, const bool nRepintar) {    \
                         _ ## NOMBRE = nCol;                           \
                         if (nRepintar == true) Repintar();            \
                     };                                                \
	protected :                                                        \
	                 /* Color NOMBRE */                                \
	 COLORREF      _ ## NOMBRE ;
// -[FIN devildrey33.AGREGAR_COLOR]-


// -[INICIO devildrey33.AGREGAR_FUENTE]-
// Macro que crea un HFONT con el nombre especificado en la seccion protected
// y una funcion publica para crear una fuente dentro de la variable.
#define AGREGAR_FUENTE(NOMBRE)                                                                                                      \
	public :                                                                                                                        \
          /* Función que crea una fuente con los parametros especificados en la variable _NOMBRE */                                 \
	 void NOMBRE ( const TCHAR *Nombre, const int Tam, const bool Negrita, const bool Cursiva, const bool Subrayado ) {             \
	          if (_ ## NOMBRE != NULL) DeleteObject(_ ## NOMBRE );                                                                  \
			  _ ## NOMBRE = CreateFont( Tam, 0, 0, 0, (Negrita) ? FW_BOLD : FW_NORMAL, Cursiva, Subrayado, false, DEFAULT_CHARSET,  \
                                        OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, Nombre);                  \
	 };                                                                                                                             \
	protected :                                                                                                                     \
             /* Fuente NOMBRE */                                                                                                    \
     HFONT _ ## NOMBRE ;
// -[FIN devildrey33.AGREGAR_FUENTE]-


#endif
