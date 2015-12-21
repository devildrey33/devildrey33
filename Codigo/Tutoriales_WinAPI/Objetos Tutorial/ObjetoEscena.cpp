#include "ObjetoEscena.h"
#include "ObjetoEscena_VentanaTranslucida.h"

// -Constructor
ObjetoEscena::ObjetoEscena(void) {
    BmpFondo = NULL;
    ViejoFondo = NULL;
    BufferFondo = NULL;
    ColorFondo = RGB(229, 229, 229);
}

// -Destructor
ObjetoEscena::~ObjetoEscena(void) {
    // Elimino el Bmp de fondo
    if (BmpFondo != NULL) {
        SelectObject(BufferFondo, ViejoFondo);
        DeleteObject(BmpFondo);
        DeleteDC(BufferFondo);
    }
    // Elimino las ventanas translucidas de la memoria
    for (size_t i = 0; i < Ventanas.size(); i++) delete Ventanas[i];
    Ventanas.resize(0);
}

// -Función para crear la ventana
HWND ObjetoEscena::CrearEscena( HWND hWndParent, UINT Estilos, const TCHAR *nTitulo,
								const int cX, const int cY, const int cAncho, const int cAlto,
								HMENU hMenu, DWORD nEstiloExtendido, const int nIcono ) {
	return CrearVentana(hWndParent, TEXT("VentanaEscena"), Estilos, nTitulo, cX, cY, cAncho, cAlto, hMenu, nEstiloExtendido, nIcono);
}

// -Función enlazada al mensaje WM_ERASEBKGND
LRESULT ObjetoEscena::Evento_BorrarFondo(HDC hDC) {
    Escena_Pintar(hDC);
    return 0;
}

// -Función enlazada al mensaje WM_PAINT
LRESULT ObjetoEscena::Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
    Escena_Pintar(hDC);
    return 0;
}

// -[INICIO devildrey33.Escena_Pintar]-
// -Función que pinta la escena con todas sus ventanas translucidas
void ObjetoEscena::Escena_Pintar(HDC hDCDestino) {
    DWORD Tiempo = GetTickCount();
	HDC hDC;
	if (hDCDestino == NULL) hDC = GetDC(_hWnd);
	else					hDC = hDCDestino;
	RECT RC;
	GetClientRect(_hWnd, &RC);

	// Creo un buffer de pintado
    HDC     Buffer  = CreateCompatibleDC(hDC);
	HBITMAP Bmp     = CreateCompatibleBitmap(hDC, RC.right, RC.bottom);
	HBITMAP Viejo   = static_cast<HBITMAP>(SelectObject(Buffer, Bmp));

    // Pinto el fondo
    HBRUSH BrochaFondo = CreateSolidBrush(ColorFondo);
	FillRect(Buffer, &RC, BrochaFondo);
    DeleteObject(BrochaFondo);

    // Pinto la imagen de fondo
    if (BufferFondo != NULL)  BitBlt(Buffer, 0, 0, RC.right, RC.bottom, BufferFondo, 0, 0, SRCCOPY);

    // Pinto cada una de las ventanas translucidas (NOTA NO TOCAR EL INT PARA HACERLO UNSIGNED)
    for (int i = static_cast<int>(Ventanas.size()) -1; i > -1; i--) Ventanas[i]->Pintar(Buffer);

    // Pinto el buffer en la ventana
	BitBlt(hDC, 0, 0, RC.right, RC.bottom, Buffer, 0, 0, SRCCOPY);

    // Elimino de memoria los objetos GDI
	SelectObject(Buffer, Viejo);
	DeleteObject(Bmp);
	DeleteDC(Buffer);

    // Si miramos la variable tiempo podemos saber cuantos milisegundos se tarda en pintar toda la escena
    Tiempo = GetTickCount() - Tiempo;
}
// -[FIN devildrey33.Escena_Pintar]-


// -Función que agrega una ventana translucida a la escena
void ObjetoEscena::Escena_AgregarVentana(ObjetoEscena_VentanaTranslucida *nVentana) {
    nVentana->CrearVentanaTranslucida(this);
    Ventanas.push_back(nVentana);
}

// -Función que carga una imagen de fondo para la escena
BOOL ObjetoEscena::Escena_ImagenFondo(const UINT BmpID) {
    BmpFondo = LoadBitmap(GetModuleHandle(NULL), MAKEINTRESOURCE(BmpID));
    BufferFondo = CreateCompatibleDC(0);
    ViejoFondo = static_cast<HBITMAP>(SelectObject(BufferFondo, BmpFondo));
    if (BmpFondo != NULL) return TRUE;
    return FALSE;
}
