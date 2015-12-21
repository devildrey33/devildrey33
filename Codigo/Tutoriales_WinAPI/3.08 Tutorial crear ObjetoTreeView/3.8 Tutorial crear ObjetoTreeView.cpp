// www.devildrey33.es
// Ejemplo 3.8 - Crear objeto TREEVIEW
// En este ejemplo podremos ver un TREEVIEW funcionando

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoTreeView.h"
#include "resource.h"

#define ID_TREEVIEW	100

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
								// Eliminamos el Imagelist de memoria
								ImageList_Destroy(ImageList);
								// Eliminamos los iconos de memoria
								DestroyIcon(Icon1);
								DestroyIcon(Icon2);
								DestroyIcon(Icon3);
								return ObjetoVentana::Evento_Cerrar();
							};
  protected :
    void					Crear(void);

	LRESULT                 Evento_Notificacion(const UINT cID, LPNMHDR Datos);

							// TREEVIEW para el ejemplo
    ObjetoTreeView		    TreeView;

	HIMAGELIST				ImageList;

	HICON                   Icon1;
	HICON                   Icon2;
	HICON                   Icon3;
};
// -[FIN devildrey33.MiVentana]-

// -[INICIO devildrey33.MiVentana::Evento_Notificacion]-
LRESULT MiVentana::Evento_Notificacion(const UINT cID, LPNMHDR Datos) {
	if (Datos->code == NM_CUSTOMDRAW && cID == ID_TREEVIEW) {
		// En este punto sabemos que es una notificación del treeview, convertimos la estructura LPNMHDR a LPNMTVCUSTOMDRAW
		LPNMTVCUSTOMDRAW DatosTree = (LPNMTVCUSTOMDRAW)Datos;
		// Miramos en que estado de pintado se encuentra
		switch(DatosTree->nmcd.dwDrawStage) { 
			// Pre-pintado general
			case CDDS_PREPAINT : 
				// Retornamos CDRF_NOTIFYITEMDRAW para que nos diga cuando se pintara cada nodo
				return CDRF_NOTIFYITEMDRAW;
			// Pre-pintado de un nodo
			case CDDS_ITEMPREPAINT :
				// Si no es el nodo marcado
				if ((HTREEITEM)DatosTree->nmcd.dwItemSpec != TreeView.NodoMarcado()) {
					// Cambiamos el color del fondo por rojo
					DatosTree->clrTextBk = RGB(255,0,0);
				}
				else {
					// Cambiamos el color del fondo por verde
					DatosTree->clrTextBk = RGB(0,100,0);
				}
				// Retornamos CDRF_NEWFONT para que actualize nuestros datos
				return CDRF_NEWFONT; 
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
	CrearVentana(NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, TEXT("Ejemplo tutorial 3.8"), 100, 100, 400, 280, NULL );
	// Creamos el TreeView
	TreeView.CrearTreeView( _hWnd, WS_CHILD | WS_VISIBLE | WS_BORDER | TVS_HASBUTTONS | TVS_LINESATROOT | TVS_HASLINES,
                            ID_TREEVIEW, 10, 10, 365, 220 );
	// Enlazamos el TreeView con el imagelist para iconos normales
	TreeView_SetImageList(TreeView.hWnd(), ImageList, TVSIL_NORMAL);
	// Creamos 20 nodos dentro del TreeView
	HTREEITEM Padre = NULL;
	UINT      Icono = 0;
	for (size_t i = 0; i < 20; i++) {
		if (Icono > 2) Icono = 0;
		// Creamos el nodo padre
		Padre = TreeView.AgregarNodo(NULL, TEXT("Nodo"), Icono++);
		// Creamos 20 nodos dentro de este nodo
		for (size_t y = 0; y < 20; y++) { 
			if (Icono > 2) Icono = 0;
			TreeView.AgregarNodo(Padre, TEXT("SubNodo"), Icono++);
		}
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

