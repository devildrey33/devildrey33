// www.devildrey33.es
// Ejemplo 3.4 - Crear objeto BUTTON
// En este ejemplo podremos un boton estandar de windows funcionando

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoButton.h"

#define ID_BUTTON_CERRAR 100

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
    LRESULT					Evento_Cerrar(void) { 		
								PostQuitMessage(0);
								return ObjetoVentana::Evento_Cerrar();
							};
  protected :
    void					Crear(void) {
								// Creamos la ventana
								CrearVentana( NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
									          TEXT("Ejemplo tutorial 3.4"), 100, 100, 400, 100, NULL );
								ButtonCerrar.CrearButton(_hWnd, WS_CHILD | WS_VISIBLE, TEXT("Cerrar"), 150, 20, 100, 20, ID_BUTTON_CERRAR);
							};

							// Evento que captara cuando se presiona un BUTTON
	LRESULT                 Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl);

							// Boton que usamos para terminar la aplicación
    ObjetoButton		    ButtonCerrar;
};
// -[FIN devildrey33.MiVentana]-


// -[INICIO devildrey33.MiVentana::Evento_Comando]-
// Función que recibe cuando se presiona el BUTTON
LRESULT MiVentana::Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl) {
	if (nID == ID_BUTTON_CERRAR) Evento_Cerrar();
	return 0;
}
// -[FIN devildrey33.MiVentana::Evento_Comando]-


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

