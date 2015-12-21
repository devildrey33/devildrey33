// www.devildrey33.es
// Ejemplo 2.6 - Crear objeto Snake
// En este ejemplo podremos ver el juego corriendo

#include "..\Objetos Tutorial\ObjetoEscena.h"
#include "..\Objetos Tutorial\ObjetoEscena_Tablero.h"
#include "..\Objetos Tutorial\ObjetoEscena_Marcador.h"
#include "..\Objetos Tutorial\ObjetoEscena_Mensaje.h"
#include "..\Objetos Tutorial\ObjetoEscena_Records.h"
#include "..\Objetos Tutorial\ObjetoSnake.h"
#include "resource.h"


// -[INICIO devildrey33.MiEscena]-
// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> ObjetoEscena -> MiEscena
class MiEscena : public ObjetoEscena {
 public :
                         MiEscena(void) { 
                             Crear();
				         };
                        ~MiEscena(void) {
 	                     };

                         // Objeto que controla el tablero
  ObjetoEscena_Tablero  *Tablero;
                         // Objeto que controla el marcador
  ObjetoEscena_Marcador *Marcador;
                         // Objeto que controla el mensaje
  ObjetoEscena_Mensaje  *Mensaje;
                         // Objeto que controla los records
  ObjetoEscena_Records  *Records;
                         // Objeto que contiene los datos del juego y lo controla
  ObjetoSnake            Snake;

                         // Re-emplazamos el mensaje WM_CHAR para poder pasarle pulsaciones de teclado a la ventana de los records
  LRESULT                Evento_Teclado_Caracter(const UINT Caracter, const UINT Repeticion, const UINT Params) {
                             if (Records->IntroduciendoNuevoRecord() == TRUE) {
                                 Records->Agregar_Caracter(Caracter);
                             }
                             return 0;
                         };
                         // Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
                         // De esta forma cuando se cierre la ventana se cerrara la aplicación
  LRESULT                Evento_Cerrar(void) { 		
                             PostQuitMessage(0);
                             return ObjetoVentana::Evento_Cerrar();
                         };
 protected:
                         // Función que crea la ventana y añade 2 ventanas translucidas y una imagen de fondo
  void                   Crear(void) {
                             Marcador = new ObjetoEscena_Marcador;
                             Tablero = new ObjetoEscena_Tablero; 
                             Mensaje = new ObjetoEscena_Mensaje; 
                             Records = new ObjetoEscena_Records;

                             Escena_AgregarVentana(Records);
                             Escena_AgregarVentana(Mensaje);
                             Escena_AgregarVentana(Marcador);
                             Escena_AgregarVentana(Tablero);
                             Escena_ImagenFondo(IDB_BITMAP1); // Asignamos la imagen de los recursos
                             ColorFondo = RGB(198, 219, 240);  

                             CrearEscena( NULL, WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                          TEXT("Ejemplo tutorial 2.6"), 100, 100, 
                                          340, 415, NULL );
					     };
};
// -[FIN devildrey33.MiEscena]-



// -[INICIO devildrey33.WinMain]-
// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    DWORD TiempoMS  = 0;
    DWORD TiempoFPS = 0;
    DWORD Frames    = 0;
    // Creamos la clase MiEscena que en el contructor crea la ventana.
	MiEscena Ventana;

    // Iniciamos el juego
    Ventana.Snake.Enlazar(Ventana.Marcador, Ventana.Tablero, Ventana.Mensaje, Ventana.Records);
    Ventana.Snake.EmpezarJuego();

    bool FinApp = false;
    MSG Mensaje;
    HDC hDC;
    // Mientras no sea el final de la aplicación
    while (FinApp == false) {
        // 1 Miramos el estado
        switch (Ventana.Snake.Estado) {
            // Se esta jugando
            case EnJuego : 
                Ventana.Snake.Teclado();
                if (TiempoMS + Ventana.Marcador->Velocidad < GetTickCount()) {
                    Ventana.Snake.Movimiento();
                    TiempoMS = GetTickCount();
                }
                break;
            // Hay una ventana informativa
            case EnPausa : 
            case EnRecords :
            case EnSiguienteNivel :
                Ventana.Snake.Teclado();
                break;
            // Se esta introcuciendo un nuevo record
            case EnRecords_NuevoRecord : 
                if (Ventana.Records->IntroduciendoNuevoRecord() == FALSE) {
                    Ventana.Records->GuardarRecords();
                    Ventana.Snake.Estado = EnRecords;
                }
                break;
        }
        
        // 2 Calculamos los frames por segundo
        if (TiempoFPS + 1000 < GetTickCount()) {
            Ventana.Marcador->FPS = Frames;
            Frames = 0;
            TiempoFPS = GetTickCount();
        }
        Frames ++;
        
        // 3 Repintamos la escena
        hDC = GetDC(Ventana.hWnd());
        Ventana.Escena_Pintar(hDC);
        ReleaseDC(Ventana.hWnd(), hDC);

        // 4 Miramos mensajes de la ventana
        if (PeekMessage(&Mensaje, NULL, 0, 0, PM_REMOVE)) {
            if (Mensaje.message == WM_QUIT) 
                FinApp = true;
            TranslateMessage(&Mensaje);
            DispatchMessage(&Mensaje);
        }
    }
    return 0;
}
// -[FIN devildrey33.WinMain]-

