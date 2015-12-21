#include "ObjetoEscena_VentanaTranslucida.h"

#define COLOR_TRANSPARENTE_R 10
#define COLOR_TRANSPARENTE_G 10
#define COLOR_TRANSPARENTE_B 10

// Constructor
ObjetoEscena_VentanaTranslucida::ObjetoEscena_VentanaTranslucida(void) {
    Visible = FALSE;
}


// Destructor
ObjetoEscena_VentanaTranslucida::~ObjetoEscena_VentanaTranslucida(void) {
}

// Función para crear la ventana translucida
void ObjetoEscena_VentanaTranslucida::CrearVentanaTranslucida(ObjetoEscena *nEscenaPadre) {
    Espacio.left   = 0;
    Espacio.right  = 100;
    Espacio.top    = 0;
    Espacio.bottom = 100;
    EscenaPadre    = nEscenaPadre;
    ColorFondo     = RGB(20, 20, 120);
    ColorBordeE    = RGB(60, 60, 160);
    ColorBordeI    = RGB(120, 120, 220);
    Visible        = FALSE;
}

// -[INICIO devildrey33.Pintar]-
// Estructura que se usara para almacenar un pixel de un BMP
struct EstructuraBitmap32Bits {
    char B;
    char G;
    char R;
    char Valor;
};

// Definicion que podemos modificar si necesitamos mas de 10 pixeles cuadrados para el escaneo de las puntas
#define ESPACIO_REDONDEADO 10

// Función para pintar la ventana translucida
void ObjetoEscena_VentanaTranslucida::Pintar(HDC hDCDestino) {
    // Si no es visible salimos
    if (Visible == FALSE) return;

    // Espacio para nuestro buffer
	RECT    RC              = { 0, 0, Espacio.right - Espacio.left, Espacio.bottom - Espacio.top };
	
    // Creo un buffer para el fondo
    HDC     BufferFondo     = CreateCompatibleDC(hDCDestino);
	HBITMAP BmpFondo        = CreateCompatibleBitmap(hDCDestino, RC.right, RC.bottom);
	HBITMAP ViejoFondo      = static_cast<HBITMAP>(SelectObject(BufferFondo, BmpFondo));
    SetBkColor(BufferFondo, EscenaPadre->ColorFondo);

    // Creo un buffer para la ventana translucida
	HDC     BufferVentana   = CreateCompatibleDC(hDCDestino);
	HBITMAP BmpVentana      = CreateCompatibleBitmap(hDCDestino, RC.right, RC.bottom);
	HBITMAP ViejoVentana    = static_cast<HBITMAP>(SelectObject(BufferVentana, BmpVentana));
    SetBkColor(BufferVentana, EscenaPadre->ColorFondo);

    // Creo una region para usarla en la ventana translucida
	HRGN    Region          = CreateRoundRectRgn(0, 0, RC.right + 1, RC.bottom + 1, 20, 20);
	
	// Pinto el fondo del hDCDestino en el buffer
	BitBlt(BufferFondo, 0, 0, RC.right, RC.bottom, hDCDestino, Espacio.left, Espacio.top, SRCCOPY);

	// Pinto fondo de la ventana padre
	FillRect(BufferVentana, &RC, static_cast<HBRUSH>(GetStockObject(BLACK_BRUSH)));

    // Pinto el fondo de esta ventana
	HBRUSH Brocha = CreateSolidBrush(ColorFondo);
	FillRgn(BufferVentana, Region, Brocha);
	DeleteObject(Brocha);

    // Pinto el borde de esta ventana
	Brocha = CreateSolidBrush(ColorBordeI);
	FrameRgn(BufferVentana, Region, Brocha, 2, 2);
	DeleteObject(Brocha);
	Brocha = CreateSolidBrush(ColorBordeE);
	FrameRgn(BufferVentana, Region, Brocha, 1, 1);
	DeleteObject(Brocha);
	
    // Pintamos los graficos extras de las ventanas que hereden de esta clase
    Pintar_AlphaBlend(BufferVentana);
    
    // Pinto la ventana encima del fondo de forma translucida
	BLENDFUNCTION BF;
	BF.AlphaFormat         = 0;
	BF.BlendOp             = AC_SRC_OVER;
	BF.BlendFlags          = NULL;
	BF.SourceConstantAlpha = 200;
	BOOL A = AlphaBlend(BufferFondo, 0, 0, RC.right, RC.bottom, BufferVentana, 0, 0, RC.right, RC.bottom, BF);

    // Rellenamos la estructura BITMAPINFOHEADER para poder obtener los datos del BMP
    BITMAPINFOHEADER   bi;    
    bi.biSize          = sizeof(BITMAPINFOHEADER);    
    bi.biWidth         = RC.right;    
    bi.biHeight        = RC.bottom;  
    bi.biPlanes        = 1;    
    bi.biBitCount      = 32;                        // Debe ser 32 para que la alineacion sea 8B+8G+8R+8BitImagen
    bi.biCompression   = BI_RGB;    
    bi.biSizeImage     = (RC.right * RC.bottom) * 4;  
    bi.biXPelsPerMeter = 0;    
    bi.biYPelsPerMeter = 0;    
    bi.biClrUsed       = 0;    
    bi.biClrImportant  = 0;

    LONG nx, ny, nxy;
    nxy = 0;

    // El siguiente código se ha optimizado para obtener la maxima velocidad
    // Inicialmente se escaneaban todos los pixels y se miraba si estaban dentro de la region con PtInRgn.
    // Pero de esa forma si la region tiene 1000*1000 pixeles estamos haciendo un millon de iteraciones cuando con unas 400 bastaria
    // Para solucionar esto escanearemos 10 pixeles cuadrados por cada punta del rectangulo.
    // La efectividad de esta optimización se nota en la función Pintar_Escena la cual tardaba 32ms, y ahora tarda de 0 a 1ms
    EstructuraBitmap32Bits *Bmp = new EstructuraBitmap32Bits[RC.right * RC.bottom];

    GetDIBits(BufferFondo, BmpFondo, 0, (UINT)RC.bottom, Bmp, (BITMAPINFO *)&bi, DIB_RGB_COLORS);
    // Punta 7 (del teclado numerico)
    for (ny = 0; ny < ESPACIO_REDONDEADO; ny ++) {
        for (nx = 0; nx < ESPACIO_REDONDEADO; nx ++) {
            if (PtInRegion(Region, nx, ny) == FALSE) {
                nxy = (ny * RC.right) + nx;
                Bmp[nxy].R = COLOR_TRANSPARENTE_R;
                Bmp[nxy].G = COLOR_TRANSPARENTE_G;
                Bmp[nxy].B = COLOR_TRANSPARENTE_B;
            }
        }
    }
    // Punta 9 (del teclado numerico)
    for (ny = 0; ny < ESPACIO_REDONDEADO; ny ++) { 
        for (nx = RC.right - ESPACIO_REDONDEADO; nx < RC.right; nx ++) {
            if (PtInRegion(Region, nx, ny) == FALSE) {
                nxy = (ny * RC.right) + nx;
                Bmp[nxy].R = COLOR_TRANSPARENTE_R;
                Bmp[nxy].G = COLOR_TRANSPARENTE_G;
                Bmp[nxy].B = COLOR_TRANSPARENTE_B;
            }
        }
    }
    // Punta 1 (del teclado numerico)
    for (ny = RC.bottom - ESPACIO_REDONDEADO; ny < RC.bottom; ny ++) { 
        for (nx = 0; nx < ESPACIO_REDONDEADO; nx ++) {
            if (PtInRegion(Region, nx, ny) == FALSE) {
                nxy = (ny * RC.right) + nx;
                Bmp[nxy].R = COLOR_TRANSPARENTE_R;
                Bmp[nxy].G = COLOR_TRANSPARENTE_G;
                Bmp[nxy].B = COLOR_TRANSPARENTE_B;
            }
        }
    }
    // Punta 3 (del teclado numerico)
    for (ny = RC.bottom - ESPACIO_REDONDEADO; ny < RC.bottom; ny ++) {
        for (nx = RC.right - ESPACIO_REDONDEADO; nx < RC.right; nx ++) {
            if (PtInRegion(Region, nx, ny) == FALSE) {
                nxy = (ny * RC.right) + nx;
                Bmp[nxy].R = COLOR_TRANSPARENTE_R;
                Bmp[nxy].G = COLOR_TRANSPARENTE_G;
                Bmp[nxy].B = COLOR_TRANSPARENTE_B;
            }
        }
    }

    // Asignamos el nuevo BMP al HDC que hace de buffer
    SetDIBits(BufferFondo, BmpFondo, 0, (UINT)RC.bottom, Bmp, (BITMAPINFO *)&bi, DIB_RGB_COLORS);

    // Borramos los datos del Bmp de memoria
    delete Bmp;

    // Llamamos a la funcion Pintar_Terminado para pintar aquellos graficos que no queramos incluir con AlphaBlend
    Pintar_Terminado(BufferFondo);

    // Pintamos el Bitmap con las puntas transparentes
    TransparentBlt( hDCDestino, Espacio.left, Espacio.top, Espacio.right - Espacio.left, Espacio.bottom - Espacio.top,
                    BufferFondo, 0, 0, RC.right, RC.bottom, RGB(COLOR_TRANSPARENTE_R, COLOR_TRANSPARENTE_G, COLOR_TRANSPARENTE_B) );

    // Elimino la region de la memoria
	DeleteObject(Region);

    // Elimino buffers de la memoria
    SelectObject(BufferFondo, ViejoFondo);
	DeleteObject(BmpFondo);
	DeleteDC(BufferFondo);
	SelectObject(BufferVentana, ViejoVentana);
	DeleteObject(BmpVentana);
	DeleteDC(BufferVentana);
}
// -[FIN devildrey33.Pintar]-


// Esta funcion se usara para pintar los graficos que se necesiten al heredar la clase (Estos graficos se pintaran Solidos)
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado en esta función
void ObjetoEscena_VentanaTranslucida::Pintar_Terminado(HDC hDCDestino) {
}

// Esta funcion se usara para pintar los graficos que se necesiten al heredar la clase (Estos graficos se pintaran con AlphaBlend)
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado en esta función
void ObjetoEscena_VentanaTranslucida::Pintar_AlphaBlend(HDC hDCDestino) {
}


