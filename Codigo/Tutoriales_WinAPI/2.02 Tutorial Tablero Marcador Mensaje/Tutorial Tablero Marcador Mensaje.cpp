// www.devildrey33.es
// Ejemplo 2.2 - Crear Tablero Marcador y Mensaje para el ObjetoEscena
// Este ejemplo crea un ObjetoEscena para testear el tablero el marcador y el mensaje

#include "..\Objetos Tutorial\ObjetoEscena.h"
#include "..\Objetos Tutorial\ObjetoEscena_Tablero.h"
#include "..\Objetos Tutorial\ObjetoEscena_Marcador.h"
#include "..\Objetos Tutorial\ObjetoEscena_Mensaje.h"
#include "resource.h"


// Objeto final : ObjetoHWND -> ObjetoVentana -> PlantillaEventos -> ObjetoEscena -> MiEscena
class MiEscena : public ObjetoEscena {
 public :
                         MiEscena(void) { 
                             Crear();
				         };

                        ~MiEscena(void) {
 	                     };
                         // Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
                         // De esta forma cuando se cierre la ventana se cerrara la aplicación
  LRESULT                Evento_Cerrar(void) { 		
                             PostQuitMessage(0);
                             return ObjetoVentana::Evento_Cerrar();
                         };

                         // Objeto que controla el tablero
  ObjetoEscena_Tablero  *Tablero;
                         // Objeto que controla el marcador
  ObjetoEscena_Marcador *Marcador;
                         // Objeto que controla el mensaje
  ObjetoEscena_Mensaje  *Mensaje;
 protected:
                         // Función que crea la ventana y añade 2 ventanas translucidas y una imagen de fondo
  void                   Crear(void) {
                             RECT EspacioMarcador = { 10, 10, 310, 60 };
                             RECT EspacioTablero = { 10, 70, 310, 370 };
                             Mensaje = new ObjetoEscena_Mensaje;
                             Marcador = new ObjetoEscena_Marcador;
                             Tablero = new ObjetoEscena_Tablero; 

                             Escena_AgregarVentana(Mensaje);
                             Escena_AgregarVentana(Marcador);
                             Escena_AgregarVentana(Tablero);
                             Escena_ImagenFondo(IDB_BITMAP1); // Asignamos la imagen de los recursos
                             ColorFondo = RGB(229, 229, 229);  

                             CrearEscena( NULL, WS_OVERLAPPEDWINDOW, 
                                          TEXT("Ejemplo tutorial 2.2"), 100, 100, 
                                          340, 415, NULL );
                             Tablero->MostrarTablero(30, 30);
                             Mensaje->MostrarMensaje(TEXT("Prueba de mensaje de 2 lienas\nLinea2"));
                             Marcador->MostrarMarcador();
                             Visible(true);
					     };
};



// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Creamos la clase MiEscena que en el contructor crea la ventana.
	MiEscena Ventana;
	// Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
    return 0;
}


