// www.devildrey33.es
// Ejemplo 1.5 - Creación de nuestro objeto botón
// Este ejemplo crea una ventana con dos objetos botón.
// Cuando hacemos click en ellos nos sale un mensaje con su texto.

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoBoton.h"

#define ID_BOTON1 100
#define ID_BOTON2 101

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
  LRESULT             Evento_Cerrar(void) { 		
                          PostQuitMessage(0);
                          return ObjetoVentana::Evento_Cerrar();
                      };
                      // Re-emplazamos el evento ObjetoBoton_Click para saber cuando se pulsa un boton
  LRESULT             Evento_ObjetoBoton_Click(ObjetoBoton *BotonPresionado, const UINT Boton) {
                          TCHAR Txt[512];
						  wsprintf(Txt, TEXT("Boton del mouse : %d"), Boton);
                          MessageBox(_hWnd, Txt, BotonPresionado->Texto(), MB_OK);
						  return 0;
                      };
 protected:
  void                Crear(void) {
                          CrearVentana( NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                        TEXT("Ejemplo tutorial 1.5"), 100, 100, 400, 100, NULL );
                          Boton1.CrearBoton(_hWnd, TEXT("MiBoton1"), 85, 30, 100, 22, ID_BOTON1);
                          Boton2.CrearBoton(_hWnd, TEXT("MiBoton2"), 205, 30, 100, 22, ID_BOTON2);
					  };

  ObjetoBoton         Boton1;
  ObjetoBoton         Boton2;
};



// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Creamos la clase MiVentana que en el contructor crea la ventana.
	MiVentana Ventana;
	// Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
    return 0;
}


