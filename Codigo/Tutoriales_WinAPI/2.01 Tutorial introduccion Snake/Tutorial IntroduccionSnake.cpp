// www.devildrey33.es
// Ejemplo 2.1 - Introduccion al Snake
// Este ejemplo crea una ventana que sera la contenedora de toda la escena.

#include "..\Objetos Tutorial\ObjetoEscena.h"
#include "..\Objetos Tutorial\ObjetoEscena_VentanaTranslucida.h"
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
  LRESULT             Evento_Cerrar(void) { 		
                          PostQuitMessage(0);
                          return ObjetoVentana::Evento_Cerrar();
                      };
 protected:
                      // Función que crea la ventana y añade 2 ventanas translucidas y una imagen de fondo
  void                Crear(void) {
                          Escena_ImagenFondo(IDB_BITMAP2); // Asignamos la imagen de los recursos
                          ColorFondo = RGB(229, 229, 229);

                          CrearEscena( NULL, WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                       TEXT("Ejemplo tutorial 2.1"), 100, 100, 
                                       550, 300, NULL );
                          // Creo las ventanas translucidas y asigno sus posiciones y estado de visibilidad
                          ObjetoEscena_VentanaTranslucida *V1 = new ObjetoEscena_VentanaTranslucida;
                          ObjetoEscena_VentanaTranslucida *V2 = new ObjetoEscena_VentanaTranslucida;
                          Escena_AgregarVentana(V1);
                          Escena_AgregarVentana(V2);
                          V2->Espacio.left = 30;
                          V2->Espacio.top = 30;
                          V2->Espacio.right = 130;
                          V2->Espacio.bottom = 130;
                          V1->Visible = TRUE;
                          V2->Visible = TRUE;
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


