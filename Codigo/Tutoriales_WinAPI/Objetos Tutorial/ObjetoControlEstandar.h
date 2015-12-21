// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener controles estandar de windows como por ejemplo :
// EditBox, ComboBox, ListView, TreeView, etc...
#ifndef OBJETO_CONTROL_ESTANDAR
#define OBJETO_CONTROL_ESTANDAR

#include "PlantillaEventos.h"
#include <commctrl.h>

#if!defined LIBRERIA_COMCTL32
    #define LIBRERIA_COMCTL32
    #pragma comment(lib, "COMCTL32.lib")         // Agrego la libreria COMCTL32.lib al proyecto
#endif

// Activa los estilos visuales del XP vista y 7 para los controles estandar
#pragma comment(linker, "/manifestdependency:\"type='win32' name='Microsoft.Windows.Common-Controls' version='6.0.0.0' processorArchitecture='*' publicKeyToken='6595b64144ccf1df' language='*'\"") 

// Esta clase parece ser inutil con VisualStudio 2008..... se tiene que ver que pasa con el MINGW del codeblocks...
// La razón es que en teoria si no la iniciamos no van ciertos controles como el ListView, ProgressBar, TreeView, y tal.. 
// pero en mi windows 7 funcionan perfectamente sin hacer el InitCommonControlsEx... si en XP con mingw y VisualStudio no es necesario,
// probablemente desaparecera. (con visualc6 fijo que es necesario....)
// la pregunta inmediata que respondere en breve es... si necesito hacer el instalador en VC6 o se puede hacer en mingw.......
// Clase que iniciara los CommonControls una unica vez
class ObjetoIniciarCommonControls {
  public :
                ObjetoIniciarCommonControls(void) { };
               ~ObjetoIniciarCommonControls(void) { };
 static void    Iniciar(void) {
                    if (_Iniciado == true) return;
                    INITCOMMONCONTROLSEX InitCtrlEx;

                    InitCtrlEx.dwSize = sizeof(INITCOMMONCONTROLSEX);
                    InitCtrlEx.dwICC  = ICC_STANDARD_CLASSES | ICC_PROGRESS_CLASS | ICC_LISTVIEW_CLASSES | ICC_TREEVIEW_CLASSES | ICC_USEREX_CLASSES;
                    InitCommonControlsEx(&InitCtrlEx);                     
                    _Iniciado = true;
                }
  private :
 static bool   _Iniciado;
};




// A REMARCAR : fijaros que el VALOR_DEVUELTO en este caso no es 0, si no USAR_GESTOR_POR_DEFECTO. Esto se hace asi porque el control ya tiene
//              sus eventos programados, y si por ejemplo queremos saber cuando se hace click con el raton, no debemos retornar 0 porque si no 
//              el control no situaria el cursor. En cambio retornando USAR_GESTOR_POR_DEFECTO, una vez echas nuestras operaciones con el click
//              permitiria continuar al control con su trabajo WindowProcedure original.

// -[INICIO devildrey33.ObjetoControlEstandar]-
// Clase que hereda PlantillaEventos y se especializa en controles
class ObjetoControlEstandar : public PlantillaEventos<LRESULT, GESTOR_POR_DEFECTO> { 
 public : //////////////////// Miembros publicos
                            // -Constructor
                            ObjetoControlEstandar(void);
                            // -Destructor
                           ~ObjetoControlEstandar(void);
                            // -Funcion que conecta el control estandar con esta clase
  HWND                      Asignar(HWND hWndParent, const int ID_Control);
 protected :
                            // -Funcion que conecta el control estandar con esta clase
  void                     _ConectarControl(void);
 private : /////////////////// Miembros privados
                            // -Gestor de mensajes estatico inicial
  static LRESULT CALLBACK  _GestorMensajes( HWND nhWnd, UINT uMsg, 
                                            WPARAM wParam, LPARAM lParam);
                            // -WindowProcedure Orignal del control estándar
  WNDPROC                  _GestorMensajesOriginal;
};
// -[FIN devildrey33.ObjetoControlEstandar]-





#endif