// www.devildrey33.es
// Ejemplo 1.3 - Creación de nuestro objeto ventana
// Este ejemplo crea cinco ventanas basicas con el fondo blanco que al cerrar cualquiera de ellas termina la aplicación

// -[INICIO devildrey33.MiVentana]-
#include "..\Objetos Tutorial\ObjetoVentana.h"

// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> MiVentana
class MiVentana : public ObjetoVentana {
 public :
				MiVentana(void) { };
	           ~MiVentana(void) { };
			    // Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
			    // De esta forma cuando se cierre la ventana se cerrara la aplicación
  LRESULT       Evento_Cerrar(void) { 		
					PostQuitMessage(0);
					return 0;
				};
};

// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
	MiVentana Ventana[5];
    size_t i = 0;
	for (i = 0; i < 5; i++) {
	    Ventana[i].CrearVentana( NULL, TEXT("Mi_Ventana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                 TEXT("Ejemplo tutorial 1.3"), 100 + (i * 10), 100 + (i * 10), 400, 300, NULL );
	}
	// Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
	return 0;

}
// -[FIN devildrey33.MiVentana]-

