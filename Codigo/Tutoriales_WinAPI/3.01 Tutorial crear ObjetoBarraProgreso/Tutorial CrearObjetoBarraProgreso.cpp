// www.devildrey33.es
// Ejemplo 3.1 - Crear objeto Barra progreso
// En este ejemplo podremos el funcionamiento de dos ObjetoBarraProgreso

//#include "resource.h"
#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoBarraProgreso.h"

#define ID_BARRA1        101
#define ID_BARRA2        102
#define ID_TEMPORIZADOR_BARRAS 1000

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
                                           TEXT("Ejemplo tutorial 3.1"), 100, 100, 400, 100, NULL );
							 // Creamos una barra de progreso (minimo -100, maximo 100, valor 50, se colocara al 75%)
							 BarraProgreso1.CrearBarraProgreso(_hWnd, ID_BARRA1, 10, 10, 365, 10, 0.0f, 100.0f, 0.0f);
							 // Creamos una barra de progreso (minimo 0, maximo 100, valor 50, se colocara al 50%)
							 BarraProgreso2.CrearBarraProgreso(_hWnd, ID_BARRA2, 10, 30, 365, 10, 0.0f, 100.0f, 100.0f);
							 // Creo un temporizador para ir moviendo las barras cada 100 milisegundos
							 SetTimer(_hWnd, ID_TEMPORIZADOR_BARRAS, 100, NULL);
                         };
						 // Temporizador para hacer que se muevan las barras
  LRESULT                Evento_Temporizador(const UINT IDTemporizador);
						 // Barra de progreso
  ObjetoBarraProgreso    BarraProgreso1;
						 // Barra de progreso
  ObjetoBarraProgreso    BarraProgreso2;
};
// -[FIN devildrey33.MiVentana]-



LRESULT MiVentana::Evento_Temporizador(const UINT IDTemporizador) {
	if (IDTemporizador == ID_TEMPORIZADOR_BARRAS) {
		float Valor1, Valor2;
		// Obtengo los valores de las barras
		Valor1 = BarraProgreso1.Valor();
		Valor2 = BarraProgreso2.Valor();
		// Miro si los valores han llegado al maximo
		if (++Valor1 == 99.0f) Valor1 = 0.0f;
		if (--Valor2 == 0.0f) Valor2 = 99.0f;
		// Asigno los nuevos valores a las barras
		BarraProgreso1.Valor(Valor1);
		BarraProgreso2.Valor(Valor2);
	}
	return 0;
}



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

