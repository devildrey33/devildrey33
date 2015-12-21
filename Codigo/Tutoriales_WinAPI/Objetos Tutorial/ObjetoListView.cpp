#include "ObjetoListView.h"

// Constructor
ObjetoListView::ObjetoListView(void) {
	_Fuente = NULL;
	_Columnas = 0;
}


// Destructor
ObjetoListView::~ObjetoListView(void) {
	if (_Fuente != NULL) DeleteObject(_Fuente);
}


// -[INICIO devildrey33.ObjetoListView::CrearListView]-
// Función para crear el ListView
void ObjetoListView::CrearListView( HWND hWndParent, const UINT nEstilos, const UINT nID, 
                                    const int cX, const int cY, const int cAncho, const int cAlto ) {
	// Si ya se ha creado salimos.
	if (_hWnd != NULL) return;
	// Iniciamos los CommonControls
	ObjetoIniciarCommonControls::Iniciar();
	// Creamos la ventana con la clase WC_LISTVIEW
	_hWnd = CreateWindowEx( NULL, WC_LISTVIEW, NULL, nEstilos, cX, cY, cAncho, cAlto, hWndParent,
                            reinterpret_cast<HMENU>(IntToPtr(nID)), GetModuleHandle(NULL), NULL ); 
	// Conectamos el WindowProcedure del LISTVIEW con esta clase
	_ConectarControl(); 
	// Creamos la fuente que usara el ListView
    _Fuente = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, 
                          OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
	// Mandamos un mensaje al ListView con su nueva fuente.
    SendMessage(_hWnd, WM_SETFONT, (WPARAM)_Fuente , 0);
	// Por defecto no hay columnas
	_Columnas = 0;
}
// -[FIN devildrey33.ObjetoListView::CrearListView]-

// -[INICIO devildrey33.ObjetoListView::AgregarItem]-
// Función que agrega un item al inicio de la lista
int ObjetoListView::AgregarItem(const int nIcono, TCHAR *nTexto, ...) {
	LV_ITEM LVItem; 
	ZeroMemory(&LVItem, sizeof(LV_ITEM));
	LVItem.mask       = LVIF_TEXT | LVIF_IMAGE; 
	LVItem.pszText    = nTexto;
	LVItem.cchTextMax = static_cast<int>(wcslen(nTexto)); 
	LVItem.iSubItem   = 0; 
	LVItem.iImage     = nIcono;
	LVItem.iItem      = TotalItems();
	
	int Ret = ListView_InsertItem(this->_hWnd, &LVItem);

	va_list Marker; 
	va_start(Marker, nTexto);
	for (int n = 0; n < _Columnas; n++) { 
		ListView_SetItemText(_hWnd, Ret, n +1, va_arg(Marker, TCHAR *));
	} 
	va_end(Marker); 
	return Ret;
}
// -[FIN devildrey33.ObjetoListView::AgregarItem]-

// -[INICIO devildrey33.ObjetoListView::AgregarColumna]-
// Función que agrega una columna
void ObjetoListView::AgregarColumna(TCHAR *nTexto, const int nAncho) {
	LVCOLUMN Columna; 
	Columna.mask       = LVCF_TEXT | LVCF_WIDTH | LVCF_SUBITEM; 
	Columna.cx         = nAncho; 
	Columna.pszText    = nTexto;
	Columna.cchTextMax = static_cast<int>(wcslen(nTexto));
	Columna.iOrder     = _Columnas;
	ListView_InsertColumn(_hWnd, 0, &Columna);
	_Columnas ++;
}
// -[FIN devildrey33.ObjetoListView::AgregarColumna]-

// -[INICIO devildrey33.ObjetoListView::BorrarItem]-
// Función que borra el item especificado en la posición
void ObjetoListView::BorrarItem(const UINT nPos) {
	ListView_DeleteItem(_hWnd, nPos);
}

// Función que borra todos los items
void ObjetoListView::BorrarItems(void) {
	ListView_DeleteAllItems(_hWnd);
}

// Función que devuelve si el item de la posicion especificada esta seleccionado
BOOL ObjetoListView::Seleccionado(const UINT nPos) {
	if (ListView_GetItemState(_hWnd, nPos, LVIS_SELECTED) == LVIS_SELECTED) return TRUE;
	else																	return FALSE;
}

// Función que devuelve la posición del item marcado con el foco. Devuelve -1 si no hay item.
int ObjetoListView::ItemMarcado(void) const {
	int Tam = static_cast<int>(TotalItems());
	for (int i = 0; i < Tam; i++) {
		if (ListView_GetItemState(_hWnd, i, LVIS_FOCUSED) == LVIS_FOCUSED) return i;
	}
	return -1;
}
// -[FIN devildrey33.ObjetoListView::BorrarItem]-

// -[INICIO devildrey33.ObjetoListView::ObtenerTexto]-
// Función para obtener el texto de un Item/SubItem
void ObjetoListView::ObtenerTexto(const UINT PosItem, const UINT PosSubItem, TCHAR *nTxt, const UINT TamTxt) {
	LV_ITEM LVItem; 
	LVItem.mask       = LVIF_TEXT; 
	LVItem.pszText    = nTxt;	
	LVItem.cchTextMax = TamTxt; 	
	LVItem.iSubItem   = PosSubItem; 
	LVItem.iItem      = PosItem;
	ListView_GetItem(_hWnd, &LVItem);
}
// -[FIN devildrey33.ObjetoListView::ObtenerTexto]-


