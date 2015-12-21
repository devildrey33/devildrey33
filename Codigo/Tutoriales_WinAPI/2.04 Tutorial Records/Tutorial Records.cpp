// www.devildrey33.es
// Ejemplo 2.4 - Creación del objeto que controlara los records del juego
// Este ejemplo crea un ObjetoEscena para testear el ObjetoEscena_Records

#include "..\Objetos Tutorial\ObjetoEscena.h"
#include "..\Objetos Tutorial\ObjetoEscena_Records.h"
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
                         // Re-emplazamos el mensaje WM_CHAR para poder pasarle pulsaciones de teclado a la ventana de los records
  LRESULT                Evento_Teclado_Caracter(const UINT Caracter, const UINT Repeticion, const UINT Params) {
                             if (Records->IntroduciendoNuevoRecord() == TRUE) {
                                 Records->Agregar_Caracter(Caracter);
                                 HDC hDC = GetDC(_hWnd);
                                 Escena_Pintar(hDC);
                                 ReleaseDC(_hWnd, hDC);
                             }
                             return 0;
                         };

                         // Objeto que controla el tablero
  ObjetoEscena_Records  *Records;
 protected:
                         // Función que crea la ventana y añade 2 ventanas translucidas y una imagen de fondo
  void                   Crear(void) {
                             Records = new ObjetoEscena_Records;

                             Escena_AgregarVentana(Records);
                             Escena_ImagenFondo(IDB_BITMAP1); // Asignamos la imagen de los recursos
                             ColorFondo = RGB(229, 229, 229);  
                             CrearEscena( NULL, WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                          TEXT("Ejemplo tutorial 2.4"), 100, 100, 
                                          340, 415, NULL );
                             Records->MostrarRecords(2, 2, 1);
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
//    Ventana.Records->GuardarRecords();
    return 0;
}


