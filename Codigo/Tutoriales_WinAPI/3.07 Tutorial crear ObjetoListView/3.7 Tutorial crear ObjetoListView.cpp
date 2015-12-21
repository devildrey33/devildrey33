// www.devildrey33.es
// Ejemplo 3.7 - Crear objeto LISTVIEW
// En este ejemplo podremos ver un LISTVIEW funcionando

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoListView.h"
#include "resource.h"
#include <stdio.h>

#define ID_LISTVIEW	100

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
    LRESULT					Evento_Cerrar(void);
  protected :
    void					Crear(void);

	LRESULT					Evento_Notificacion(const UINT cID, LPNMHDR Datos);

							// LISTVIEW para el ejemplo
    ObjetoListView		    ListView;

	HIMAGELIST				ImageList;

	HICON                   Icon1;
	HICON                   Icon2;
	HICON                   Icon3;
};
// -[FIN devildrey33.MiVentana]-


// Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
// De esta forma cuando se cierre la ventana se cerrara la aplicación
LRESULT MiVentana::Evento_Cerrar(void) { 		
	// Terminamos el bucle main de mensajes
	PostQuitMessage(0);
	// Eliminamos el Imagelist de memoria
	ImageList_Destroy(ImageList);
	// Eliminamos los iconos de memoria
	DestroyIcon(Icon1);
	DestroyIcon(Icon2);
	DestroyIcon(Icon3);

	return ObjetoVentana::Evento_Cerrar();
};

// -[INICIO devildrey33.MiVentana::Evento_Notificacion]-
LRESULT MiVentana::Evento_Notificacion(const UINT cID, LPNMHDR Datos) {
	// Si la ID es la del listview y el codigo se refiere a un DobleClick
	if (cID == ID_LISTVIEW && Datos->code == NM_DBLCLK) {
		// Obtenemos el item marcado
		int ItemMarcado = ListView.ItemMarcado();
		// Si el item marcado no es -1 mostramos un mensaje con el texto.
		if (ItemMarcado != -1) {
			TCHAR TextoItem[512];
			ListView.ObtenerTexto(ItemMarcado, 0, TextoItem, 512);
			MessageBox(NULL, TextoItem, TEXT("DobleClick"), MB_OK);
		}
	}
	return 0;
}
// -[FIN devildrey33.MiVentana::Evento_Notificacion]-

// -[INICIO devildrey33.MiVentana::Crear]-
void MiVentana::Crear(void) {
	// Creamos un Imagelist de 16 * 16, para 3 iconos
	ImageList = ImageList_Create(16, 16, ILC_COLORDDB | ILC_MASK, 3, 3);
	// Creamos los iconos en memoria y los agregamos al ImageList
	Icon1 = LoadIcon(GetModuleHandle(NULL), MAKEINTRESOURCE(IDI_ICON1));
	ImageList_AddIcon(ImageList, Icon1);
	Icon2 = LoadIcon(GetModuleHandle(NULL), MAKEINTRESOURCE(IDI_ICON2));
	ImageList_AddIcon(ImageList, Icon2);
	Icon3 = LoadIcon(GetModuleHandle(NULL), MAKEINTRESOURCE(IDI_ICON3));
	ImageList_AddIcon(ImageList, Icon3);
	// Creamos la ventana
	CrearVentana(NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, TEXT("Ejemplo tutorial 3.7"), 100, 100, 350, 180, NULL );
	ListView.CrearListView(_hWnd, WS_CHILD | WS_VISIBLE | WS_BORDER | LVS_REPORT, ID_LISTVIEW, 10, 10, 315, 120);
	// Añadimos el estilo LVS_EX_FULLROWSELECT
	ListView_SetExtendedListViewStyle(ListView.hWnd(), LVS_EX_FULLROWSELECT);
	// Enlazamos el listview con el imagelist para iconos pequeños
	ListView_SetImageList(ListView.hWnd(), ImageList, LVSIL_SMALL);
	// Agregamos 3 columnas
	ListView.AgregarColumna(TEXT("Columna3"), 100);
	ListView.AgregarColumna(TEXT("Columna2"), 100);
	ListView.AgregarColumna(TEXT("Columna1"), 95);
	// Agregamos 20 items
	TCHAR TextoItem[256];
	UINT  Icono = 0;
	for (size_t i = 0; i < 20; i++) {
		if (Icono == 3) Icono = 0;
		swprintf(TextoItem, 256, TEXT("Item%d"), i); 
		ListView.AgregarItem(Icono, TextoItem, TEXT("SubItem1"), TEXT("SubItem2"));
		Icono ++;
	}
};
// -[FIN devildrey33.MiVentana::Crear]-


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

