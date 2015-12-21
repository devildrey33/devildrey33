// www.devildrey33.es
// Ejemplo 3.6 - Crear objeto PROGRESSBAR
// En este ejemplo podremos ver varios PROGRESSBAR funcionando

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoProgressBar.h"

#define ID_PROGRESS1	100
#define ID_PROGRESS2	101
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
    LRESULT					Evento_Cerrar(void) { 		
								PostQuitMessage(0);
								return ObjetoVentana::Evento_Cerrar();
							};
  protected :
    void					Crear(void);
							// Temporizador para hacer que se muevan las barras
	LRESULT                 Evento_Temporizador(const UINT IDTemporizador);

							// ProgressBar 1 para el ejemplo
    ObjetoProgressBar	    Progress1;
							// ProgressBar 2 para el ejemplo
    ObjetoProgressBar	    Progress2;
};
// -[FIN devildrey33.MiVentana]-


LRESULT MiVentana::Evento_Temporizador(const UINT IDTemporizador) {
	if (IDTemporizador == ID_TEMPORIZADOR_BARRAS) {
		int Valor1, Valor2;
		// Obtengo los valores de las barras
		Valor1 = Progress1.Valor();
		Valor2 = Progress2.Valor();
		// Miro si los valores han llegado al maximo
		if (++Valor1 == 99) Valor1 = 0;
		if (--Valor2 == 0) Valor2 = 99;
		// Asigno los nuevos valores a las barras
		Progress1.Valor(Valor1);
		Progress2.Valor(Valor2);
	}
	return 0;
}

// -[INICIO devildrey33.MiVentana::Crear]-
void MiVentana::Crear(void) {
	// Creamos la ventana
	CrearVentana(NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, TEXT("Ejemplo tutorial 3.6"), 100, 100, 400, 100, NULL );
	Progress1.CrearProgressBar(_hWnd, WS_CHILD | WS_VISIBLE, 10, 20, 360, 8, ID_PROGRESS1, 0, 99);
	Progress2.CrearProgressBar(_hWnd, WS_CHILD | WS_VISIBLE, 10, 40, 360, 8, ID_PROGRESS2, 0, 99, 99);
	// Creo un temporizador para ir moviendo las barras cada 100 milisegundos
	SetTimer(_hWnd, ID_TEMPORIZADOR_BARRAS, 100, NULL);
};
// -[INICIO devildrey33.MiVentana::Crear]-


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

