// www.devildrey33.es
// Ejemplo 1.4 - Entorno gráfico de windows (GDI)
// Este ejemplo crea una ventana con un fondo de color aleatorio, y un texto en blanco.
// Cuando haces click encima de la ventana se repinta con otro fondo aleatorio.

#include "..\Objetos Tutorial\ObjetoVentana.h"

// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> MiVentana
class MiVentana : public ObjetoVentana {
 public :
                MiVentana(void) { 
                    srand(GetTickCount()); // inicio una semilla aleatoria
				};
               ~MiVentana(void) { };
                // Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
                // De esta forma cuando se cierre la ventana se cerrara la aplicación
  LRESULT       Evento_Cerrar(void) { 		
                    PostQuitMessage(0);
                    return ObjetoVentana::Evento_Cerrar();
                };
                // Re-emplazamos el evento pintar para enlazarlo a nuestra función de pintado
  LRESULT       Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
                    Pintar(hDC);
                    return 0;
                };
                // Re-emplazamos el evento mouse boton soltado para que cuando clickemos se repinte la ventana
  LRESULT       Evento_Mouse_BotonSoltado(const UINT Boton, const int cX, const int cY, const UINT Params) {
                    RePintar();
                    return 0;
                };

// -[INICIO devildrey33.RePintar]-
                // Función que obtiene el HDC de nuestra ventana y se lo pasa a la funcion Pintar, para repintar la ventana.
  void          RePintar(void) {
                    HDC hDC = GetDC(_hWnd);
                    Pintar(hDC);
                    ReleaseDC(_hWnd, hDC);
                };
// -[FIN devildrey33.RePintar]-

// -[INICIO devildrey33.Pintar]-
                // Función que pinta el fondo de un color aleatorio con un texto de color blanco
  void          Pintar(HDC hDC) {
                    COLORREF R = rand()%255;
                    COLORREF G = rand()%255;
                    COLORREF B = rand()%255;
                    HBRUSH Brocha = CreateSolidBrush(RGB(R, G, B));
                    RECT   RC;
                    GetClientRect(_hWnd, &RC);
                    FillRect(hDC, &RC, Brocha);
                    SetTextColor(hDC, RGB(255, 255, 255));
                    SetBkColor(hDC, RGB(R, G, B));
                    DrawText(hDC, TEXT("Ejemplo 1.4 - Entorno gráfico de windows (GDI)"), -1, &RC, DT_CENTER);
                    DeleteObject(Brocha);
                };
// -[FIN devildrey33.Pintar]-
};



// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    MiVentana Ventana;
    Ventana.CrearVentana( NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                          TEXT("Ejemplo tutorial 1.4"), 100, 100, 400, 300, NULL );
	// Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
    return 0;
}


