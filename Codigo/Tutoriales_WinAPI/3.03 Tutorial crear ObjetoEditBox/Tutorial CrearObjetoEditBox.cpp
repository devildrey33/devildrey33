// www.devildrey33.es
// Ejemplo 3.3 - Crear objeto EditBox
// En este ejemplo podremos ver un edit box

//#include "resource.h"
#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoEditBox.h"

#define ID_EDIT         100
#define ID_PROGRESS     101
#define ID_LISTA        102
#define ID_BOTON        103
#define ID_BARRA        104

// -[INICIO devildrey33.MiVentana]-
// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> MiVentana
class MiVentana : public ObjetoVentana {
 public :
                         MiVentana(void) { 
                             Crear();
				         };

                        ~MiVentana(void) {
 	                     };
                         // Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
                         // De esta forma cuando se cierre la ventana se cerrara la aplicación
  LRESULT                Evento_Cerrar(void) { 		
                             PostQuitMessage(0);
                             return ObjetoVentana::Evento_Cerrar();
                         };
 protected :
  void                   Crear(void) {
                             // Creamos la ventana
                             CrearVentana( NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                           TEXT("Ejemplo tutorial 3.3"), 100, 100, 400, 145, NULL );
                             // Creamos el editbox
                             Edit.CrearEditBox( _hWnd, TEXT("EditBox"), WS_CHILD | WS_VISIBLE | WS_BORDER , 
                                                10, 10, 365, 20, ID_EDIT );
                             // Asignamos otro texto
                             Edit.AsignarTexto(TEXT("Nuevo texto asignado"));
                             // Obtenemos el texto del editbox para comprobar que la función ObtenerTexto realmente funciona
                             TCHAR Txt[128];
                             Edit.ObtenerTexto(Txt, 128);
                         };
                         // EditBox para hacer pruebas
  ObjetoEditBox          Edit;
};
// -[FIN devildrey33.MiVentana]-



// -[INICIO devildrey33.WinMain]-
// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    MiVentana Ventana;
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 

    return 0;
}
// -[FIN devildrey33.WinMain]-

