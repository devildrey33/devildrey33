#include "ObjetoTreeView.h"

// Constructor
ObjetoTreeView::ObjetoTreeView(void) {
	_Fuente = NULL;
}


// Destructor
ObjetoTreeView::~ObjetoTreeView(void) {
	if (_Fuente != NULL) DeleteObject(_Fuente);
}


// -[INICIO devildrey33.ObjetoTreeView::CrearTreeView]-
// Función para crear el TreeView
void ObjetoTreeView::CrearTreeView( HWND hWndParent, const UINT nEstilos, const UINT nID, 
                                    const int cX, const int cY, const int cAncho, const int cAlto ) {
	// Si el control ya se ha creado, salimos.
	if (_hWnd != NULL) return;
	// Iniciamos los CommonControls
	ObjetoIniciarCommonControls::Iniciar();
	// Creamos el control TREEVIEW
	_hWnd = CreateWindowEx( NULL, WC_TREEVIEW, NULL, nEstilos, cX, cY, cAncho, cAlto, hWndParent,
                            reinterpret_cast<HMENU>(IntToPtr(nID)), GetModuleHandle(NULL), NULL ); 
	// Enlazamos el TreeView con esta clase
	_ConectarControl(); 
	// Creamos la fuente para el TreeView
    _Fuente = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, 
                          OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
	// Asignamos la fuente creada al TreeView
    SendMessage(_hWnd, WM_SETFONT, (WPARAM)_Fuente , 0);
}
// -[FIN devildrey33.ObjetoTreeView::CrearTreeView]-


// -[INICIO devildrey33.ObjetoTreeView::AgregarNodo]-
// -Función para agregar nodos
HTREEITEM ObjetoTreeView::AgregarNodo(HTREEITEM nPadre, TCHAR *nTexto, const UINT nIDIcono) {
	TVINSERTSTRUCT ITS; 
	TVITEM         Item;
	
	Item.pszText        = nTexto;
	Item.cchTextMax     = static_cast<int>(wcslen(nTexto));
	Item.mask           = TVIF_TEXT | TVIF_IMAGE | TVIF_SELECTEDIMAGE | TVIF_CHILDREN;
	Item.state          = TVIS_SELECTED;
	Item.stateMask      = TVIS_SELECTED; 
	Item.iImage         = nIDIcono;
	Item.iSelectedImage = nIDIcono; 
	Item.cChildren      = 0; 

	ITS.hInsertAfter    = NULL;
	ITS.item            = Item; 
	ITS.hParent         = nPadre;
	HTREEITEM Ret = TreeView_InsertItem(_hWnd, &ITS);

	// IMPORTANTE Decirle al padre que tiene hijos...
	Item.mask = TVIF_HANDLE | TVIF_CHILDREN; 
	Item.cChildren = 1; 
	Item.hItem = nPadre; 
	TreeView_SetItem(_hWnd, &Item);

	return Ret;
}
// -[FIN devildrey33.ObjetoTreeView::AgregarNodo]-

// -[INICIO devildrey33.ObjetoTreeView::BorrarNodo]-
// -Función para borrar un nodo y sus hijos
void ObjetoTreeView::BorrarNodo(HTREEITEM bNodo) {
	TreeView_DeleteItem(_hWnd, bNodo);                        
};

// -Función para borrar todos los nodos
void ObjetoTreeView::BorrarTodo(void) {
	TreeView_DeleteAllItems(_hWnd);                           
};
// -[FIN devildrey33.ObjetoTreeView::BorrarNodo]-

// -Función que retorna el total de nodos del treeview
UINT ObjetoTreeView::TotalNodos(void) { 
	return TreeView_GetCount(_hWnd);                          
};

// -[INICIO devildrey33.ObjetoTreeView::NodoRoot]-
// -Función para obtener el primer nodo root
HTREEITEM ObjetoTreeView::NodoRoot(void) { 
	return TreeView_GetRoot(_hWnd);
};

// -Función para obtener el nodo padre del nodo especificado
HTREEITEM ObjetoTreeView::NodoPadre(HTREEITEM pNodo) {
	return TreeView_GetParent(_hWnd, pNodo); 
};

// -Función para obtener el primer nodo hijo del nodo especificado
HTREEITEM ObjetoTreeView::NodoHijo(HTREEITEM pNodo) { 
	return TreeView_GetChild(_hWnd, pNodo);   
};

// -Función para obtener el anterior nodo del nodo especificado
HTREEITEM ObjetoTreeView::NodoAnterior(HTREEITEM pNodo) { 
	return TreeView_GetNextItem(_hWnd, pNodo, TVGN_PREVIOUS);
};

// -Función para obtener el siguiente nodo del nodo especificado
HTREEITEM ObjetoTreeView::NodoSiguiente(HTREEITEM pNodo) {
	return TreeView_GetNextItem(_hWnd, pNodo, TVGN_NEXT);   
};

// -Función para obtener el nodo marcado
HTREEITEM ObjetoTreeView::NodoMarcado(void) {
	return TreeView_GetSelection(_hWnd);
};
// -[FIN devildrey33.ObjetoTreeView::NodoRoot]-

// -[INICIO devildrey33.ObjetoTreeView::ObtenerTexto]-
// -Función para obtener el texto de un nodo
void ObjetoTreeView::ObtenerTexto(HTREEITEM pNodo, TCHAR *nTexto, UINT nTamTexto) {
	TVITEM Item;
	Item.pszText    = nTexto;
	Item.cchTextMax = nTamTexto;
	Item.mask       = TVIF_TEXT | TVIF_HANDLE;
	Item.hItem      = pNodo;
	TreeView_GetItem(_hWnd, &Item);
}

// -Función para asignar el texto de un nodo
void ObjetoTreeView::AsignarTexto(HTREEITEM pNodo, TCHAR *nTexto) {
	TVITEM Item;
	Item.pszText    = nTexto;
	Item.cchTextMax = wcslen(nTexto);
	Item.mask       = TVIF_TEXT | TVIF_HANDLE;
	Item.hItem      = pNodo;
	TreeView_SetItem(_hWnd, &Item);
}
// -[FIN devildrey33.ObjetoTreeView::ObtenerTexto]-

// -Función para expandir / contraer nodos
void ObjetoTreeView::ExpandirNodo(HTREEITEM pNodo, const bool nExpandir) {
	if (nExpandir == true)  TreeView_Expand(_hWnd, pNodo, TVE_EXPAND);
	else					TreeView_Expand(_hWnd, pNodo, TVE_COLLAPSE);
}
