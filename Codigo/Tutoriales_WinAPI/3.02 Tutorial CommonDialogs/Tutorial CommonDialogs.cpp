// www.devildrey33.es
// Ejemplo 3.3 - Common dialogs
// En este ejemplo podremos ver varios dialogos comunes

//#include "resource.h"
#include "..\Objetos Tutorial\ObjetoBoton.h"
#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoDlgAbrir.h"
#include "..\Objetos Tutorial\ObjetoDlgGuardar.h"
#include "..\Objetos Tutorial\ObjetoDlgDirectorios.h"

#define ID_ABRIR        100
#define ID_GUARDAR      101
#define ID_DIRECTORIOS  102

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
                             CrearVentana( NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                           TEXT("Ejemplo tutorial 3.2"), 100, 100, 400, 300, NULL );
                             BotonAbrir.CrearBoton(_hWnd, TEXT("DlgAbrir"), 150, 10, 100, 20, ID_ABRIR);
                             BotonGuardar.CrearBoton(_hWnd, TEXT("DlgGuardar"), 150, 40, 100, 20, ID_GUARDAR);
                             BotonDirectorios.CrearBoton(_hWnd, TEXT("DlgDirectorios"), 150, 70, 100, 20, ID_DIRECTORIOS);
                         };

  LRESULT                Evento_ObjetoBoton_Click(ObjetoBoton *BotonPresionado, const UINT nBoton) {
                             ObjetoDlgAbrir         DAbrir;
                             ObjetoDlgGuardar       DGuardar;
                             ObjetoDlgDirectorios   DDirectorios;
                             switch (BotonPresionado->ID()) {
                                 case ID_ABRIR :
                                     // Mostramos el dialogo abrir con multiselección
                                     DAbrir.MostrarAbrir(_hWnd, TEXT("Prueba abrir"), NULL, NULL, true); 
                                     break;
                                 case ID_GUARDAR :
                                     // Mostramos el dialogo guardar
                                     DGuardar.MostrarGuardar(_hWnd, TEXT("Prueba guardar"), NULL, NULL); 
                                     break;
                                 case ID_DIRECTORIOS :
                                     // Mostramos el dialogo para seleccionar un directorio
                                     DDirectorios.MostrarDirectorios(_hWnd, TEXT("Prueba seleccionar directorio"), true);
                                     break;
                             }
                             return 0;
                         };

  ObjetoBoton            BotonAbrir;
  ObjetoBoton            BotonGuardar;
  ObjetoBoton            BotonDirectorios;
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

