// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado como contenedor basico para todos los eventos
#ifndef PLANTILLA_EVENTOS
#define PLANTILLA_EVENTOS

#include "ObjetoHWND.h"

// Mensaje para los cliks del ObjetoBoton
#define WM_BOTON_CLICK     WM_USER + 1

// definición que indicara a _GestorMensajes que debe usar el gestor por defecto
#define USAR_GESTOR_POR_DEFECTO -888

// Pre-declaración de la clase ObjetoBoton
class ObjetoBoton;

// -[INICIO devildrey33.PlantillaEventos]-
// Clase base para ventanas y controles
template <typename TIPO_DEVUELTO, const long VALOR_DEVUELTO = 0>
class PlantillaEventos : public ObjetoHWND {
 public : ///////////////////////// Miembros publicos
                                 // Constructor
                                 PlantillaEventos(void) { _MouseDentro = false; };
                                 // Destructor
                                ~PlantillaEventos(void) { };

  ///////////////////////////////// Funciones para obtener los eventos
                                 // -Función enlazada al mensaje WM_CLOSE
  virtual TIPO_DEVUELTO          Evento_Cerrar(void) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_ERASEBKGND
  virtual TIPO_DEVUELTO          Evento_BorrarFondo(HDC hDC) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_PAINT
  virtual TIPO_DEVUELTO          Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_MOUSEMOVE
  virtual TIPO_DEVUELTO          Evento_Mouse_Movimiento( const int cX, const int cY, 
                                                          const UINT Params ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_MOUSELEAVE
  virtual TIPO_DEVUELTO          Evento_Mouse_Saliendo(void) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada a los mensajes WM_?BUTTONDOWN
  virtual TIPO_DEVUELTO          Evento_Mouse_BotonPresionado( const UINT Boton, 
                                                               const int cX, 
                                                               const int cY, 
                                                               const UINT Params ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada a todos los mensajes WM_?BUTTONUP
  virtual TIPO_DEVUELTO          Evento_Mouse_BotonSoltado( const UINT Boton, 
                                                            const int cX, 
                                                            const int cY, 
                                                            const UINT Params ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_KEYDOWN
  virtual TIPO_DEVUELTO          Evento_Teclado_TeclaPresionada( const UINT Caracter, 
                                                                 const UINT Repetir, 
                                                                 const UINT Params ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_KEYUP
  virtual TIPO_DEVUELTO          Evento_Teclado_TeclaSoltada( const UINT Caracter, 
                                                              const UINT Repeticion, 
                                                              const UINT Params ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_CHAR
  virtual TIPO_DEVUELTO          Evento_Teclado_Caracter( const UINT Caracter,
                                                          const UINT Repeticion, 
                                                          const UINT Params ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_SYSCHAR
  virtual TIPO_DEVUELTO          Evento_Teclado_CaracterDelSistema(const UINT Caracter,
                                                                   const UINT Repetir,
                                                                   const UINT Params) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_KILLFOCUS
  virtual TIPO_DEVUELTO          Evento_Foco_Perdido(HWND hWndNuevoFoco) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_SETFOCUS
  virtual TIPO_DEVUELTO          Evento_Foco_Obtenido(HWND hWndUltimoFoco) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_TIMER
  virtual TIPO_DEVUELTO          Evento_Temporizador(const UINT IDTemporizador) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_SIZE
  virtual TIPO_DEVUELTO          Evento_Dimension_Cambio( const UINT Tipo, 
                                                          const int nAncho, 
                                                          const int nAlto ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_SIZING
  virtual TIPO_DEVUELTO          Evento_Dimension_Cambiando( const UINT Lado,
                                                             const RECT *NDim ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_COMMAND
  virtual TIPO_DEVUELTO          Evento_Comando( const UINT nID, 
                                                 const UINT nNotificacion, 
                                                 HWND hWndControl ) {
                                     return VALOR_DEVUELTO;
                                 };
                                 // -Función enlazada al mensaje WM_NOTIFY
  virtual TIPO_DEVUELTO          Evento_Notificacion(const UINT cID, LPNMHDR Datos) {
                                     return VALOR_DEVUELTO;
                                 };
// -[INICIO devildrey33.Evento_ObjetoBoton_Click]-
                                 // -Función enlazada al mensaje WM_BOTON_CLICK
  virtual TIPO_DEVUELTO          Evento_ObjetoBoton_Click( ObjetoBoton *BtnPresionado,
                                                           const UINT nBoton ) {
                                     return VALOR_DEVUELTO;
                                 };
// -[FIN devildrey33.Evento_ObjetoBoton_Click]-


  ///////////////////////////////// -Gestor de mensajes virtual
  virtual TIPO_DEVUELTO CALLBACK GestorMensajes(UINT uMsg,WPARAM wParam,LPARAM lParam);
 protected: /////////////////////// Miembros protegidos
                                 // -Variable que determina si el mouse esta dentro de 
                                 //  la ventana / controol
  bool                          _MouseDentro;
};
// -[FIN devildrey33.PlantillaEventos]-


// Gestor de mensajes por defecto para todas las ventanas y controles que sera llamado por _GestorMensajes
template <typename TIPO_DEVUELTO, const long VALOR_DEVUELTO>
TIPO_DEVUELTO CALLBACK PlantillaEventos<TIPO_DEVUELTO, VALOR_DEVUELTO>::GestorMensajes(UINT uMsg, WPARAM wParam, LPARAM lParam) {
    LRESULT Ret = NULL;
    switch (uMsg) {
        // Borrar fondo
        case WM_ERASEBKGND :
            return this->Evento_BorrarFondo(reinterpret_cast<HDC>(wParam));
// -[INICIO devildrey33.WM_PAINT]-
        // Respuesta al evento pintar (con controles estandar no va bien...)
        case WM_PAINT :
            HDC DC;
            PAINTSTRUCT ps;
            DC = BeginPaint(_hWnd, &ps);
            Ret = this->Evento_Pintar(DC, ps);
            EndPaint(_hWnd, &ps);
            return Ret;
// -[FIN devildrey33.WM_PAINT]-
        // Cerrar ventana
        case WM_CLOSE :
            return this->Evento_Cerrar();
// -[INICIO devildrey33.Eventos_Mouse]-
        // Mouse move y leave
        case WM_MOUSEMOVE :
            if (_MouseDentro == false) {
                TRACKMOUSEEVENT Trk;
                Trk.cbSize = sizeof(TRACKMOUSEEVENT);
                Trk.dwFlags = TME_LEAVE;
                Trk.hwndTrack = _hWnd;
                TrackMouseEvent(&Trk);
                _MouseDentro = true;
            }
            return this->Evento_Mouse_Movimiento( GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam) );
        case WM_MOUSELEAVE :
             _MouseDentro = false;
            return this->Evento_Mouse_Saliendo();
// -[FIN devildrey33.Eventos_Mouse]-
        // Mouse Boton Presionado
        case WM_LBUTTONDOWN :
            return this->Evento_Mouse_BotonPresionado(0, GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam));
        case WM_RBUTTONDOWN :
            return this->Evento_Mouse_BotonPresionado(1, GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam));
        case WM_MBUTTONDOWN :
            return this->Evento_Mouse_BotonPresionado(2, GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam));
        case WM_XBUTTONDOWN :
            return this->Evento_Mouse_BotonPresionado(HIWORD(wParam) + 2, GET_X_LPARAM(lParam), GET_X_LPARAM(lParam), static_cast<UINT>(wParam));
        // Mouse Boton Soltado
        case WM_LBUTTONUP :
            return this->Evento_Mouse_BotonSoltado(0, GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam));
        case WM_RBUTTONUP :
            return this->Evento_Mouse_BotonSoltado(1, GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam));
        case WM_MBUTTONUP :
            return this->Evento_Mouse_BotonSoltado(2, GET_X_LPARAM(lParam), GET_Y_LPARAM(lParam), static_cast<UINT>(wParam));
        case WM_XBUTTONUP :
            return this->Evento_Mouse_BotonSoltado(HIWORD(wParam) + 2, GET_X_LPARAM(lParam), GET_X_LPARAM(lParam), static_cast<UINT>(wParam));
        // Teclado
        case WM_KEYDOWN :
            return this->Evento_Teclado_TeclaPresionada(static_cast<UINT>(wParam), LOWORD(lParam), HIWORD(lParam));
        case WM_KEYUP :
            return this->Evento_Teclado_TeclaSoltada(static_cast<UINT>(wParam), LOWORD(lParam), HIWORD(lParam));
        case WM_CHAR :
            return this->Evento_Teclado_Caracter(static_cast<UINT>(wParam), LOWORD(lParam), HIWORD(lParam));
        case WM_SYSCHAR :
            return this->Evento_Teclado_CaracterDelSistema(static_cast<UINT>(wParam), LOWORD(lParam), HIWORD(lParam));
        // Foco
        case WM_SETFOCUS :
            return this->Evento_Foco_Obtenido(reinterpret_cast<HWND>(wParam));
        case WM_KILLFOCUS :
            return this->Evento_Foco_Obtenido(reinterpret_cast<HWND>(wParam));
        // Temporizador
        case WM_TIMER :
            return this->Evento_Temporizador(static_cast<int>(wParam));
        // Cambio de tamaño
        case WM_SIZE :
            return this->Evento_Dimension_Cambio(static_cast<UINT>(wParam), LOWORD(lParam), HIWORD(lParam));
        // Cambiando de tamaño
        case WM_SIZING :
            return this->Evento_Dimension_Cambiando(static_cast<UINT>(wParam), reinterpret_cast<RECT *>(lParam));
		// Evento WM_NOTIFY (utilizado por controles estandar de windows para notificar varias acciones)
        case WM_NOTIFY :
			return Evento_Notificacion(static_cast<UINT>(wParam), reinterpret_cast<LPNMHDR>(lParam));
		// Evento WM_COMMAND (por defecto se usa para obtener pulsaciones en los button de windows)
        case WM_COMMAND :
			return this->Evento_Comando(LOWORD(wParam), HIWORD(wParam), reinterpret_cast<HWND>(lParam));
// -[INICIO devildrey33.PlantillaEventos::GestorMensajes_WM_BOTON_CLICK]-
		// ObjetoBoton Click
        case WM_BOTON_CLICK :
            return this->Evento_ObjetoBoton_Click(reinterpret_cast<ObjetoBoton *>(wParam), static_cast<UINT>(lParam));
// -[FIN devildrey33.PlantillaEventos::GestorMensajes_WM_BOTON_CLICK]-
	}
    // Retornamos USAR_GESTOR_POR_DEFECTO para que _GestorMensajes utilice el gestor por defecto
    return  USAR_GESTOR_POR_DEFECTO;
};



#endif
