// www.devildrey33.es
// Ejemplo 3.6 - Crear objeto COMBOBOX
// En este ejemplo podremos ver un ComboBox estandar de windows funcionando

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoComboBox.h"

#define ID_COMBO 100

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

							// Evento que recibe notificaciones de controles estandar, en este caso de la COMBOBOX
	LRESULT                 Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl);

							// ComboBox para el ejemplo
    ObjetoComboBox		    Combo;
};
// -[FIN devildrey33.MiVentana]-


// Para ver mas notificaciones de este control puedes consultar este enlace :
// En la sección Notifications : http://msdn.microsoft.com/en-us/library/bb775792(v=VS.85).aspx 
// -[INICIO devildrey33.MiVentana::Evento_Comando]-
LRESULT MiVentana::Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl) {
	// Notificación para saber cuando cambia la selección del COMBOBOX
	// Este mensaje nos dice cuando se selecciona un item del LISTBOX que se encuentra dentro de la COMBOBOX
	if (nID == ID_COMBO && nNotificacion == CBN_SELCHANGE) {		
		TCHAR TextoCombo[512];
		// Obtenemos el texto que actualmente se encuentra seleccionado dentro del LISTBOX
		Combo.ObtenerTextoLista(Combo.Seleccion(), TextoCombo, 512);
		// Mostramos el texto
		MessageBox(NULL, TextoCombo, TEXT("Selección"), MB_OK);
	}
	return 0;
}
// -[FIN devildrey33.MiVentana::Evento_Comando]-


// -[INICIO devildrey33.MiVentana::Crear]-
void MiVentana::Crear(void) {
	// Creamos la ventana
	CrearVentana(NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, TEXT("Ejemplo tutorial 3.5"), 100, 100, 400, 100, NULL );
	// Creamos la COMBOBOX con el estilo CBS_DROPDOWN para que muestre el boton de la derecha.
	Combo.CrearComboBox(_hWnd, WS_CHILD | WS_VISIBLE | CBS_DROPDOWN, TEXT("Texto inicial"), 50, 20, 300, 20, ID_COMBO);
	// Insertamos varias opciones dentro de la lista del COMBOBOX
	Combo.InstertarString(TEXT("Opcion 1"));
	Combo.InstertarString(TEXT("Opcion 2"));
	Combo.InstertarString(TEXT("Opcion 3"));
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

