#include "ObjetoEscena_Mensaje.h"

// Constructor
ObjetoEscena_Mensaje::ObjetoEscena_Mensaje(void) {
    TextoMensaje = NULL;
    TamTexto     = 0;
}

// Destructor
ObjetoEscena_Mensaje::~ObjetoEscena_Mensaje(void) {
    if (TextoMensaje != NULL) delete TextoMensaje;
}


// Esta funcion se usara para pintar los graficos que se necesiten. (NO SE INCLUIRAN EN EL ALPHABLEND)
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado en esta función
void ObjetoEscena_Mensaje::Pintar_Terminado(HDC hDCDestino) {
    HFONT Fuente = CreateFont( 16, 0, 0, 0, FW_BOLD, false, false, false, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS, 
                               CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
    HFONT VFuente = static_cast<HFONT>(SelectObject(hDCDestino, Fuente));
    SetBkMode(hDCDestino, TRANSPARENT);

    RECT RectaDestino  = { 10, 10, (Espacio.right - Espacio.left) - 10, (Espacio.bottom - Espacio.top) };
    RECT RectaDestinoS = { RectaDestino.left + 1, RectaDestino.top + 1, RectaDestino.right + 1, RectaDestino.bottom + 1 };

    SetTextColor(hDCDestino, RGB(0, 0, 0));
    DrawText(hDCDestino, TextoMensaje, TamTexto, &RectaDestinoS, DT_LEFT);
    SetTextColor(hDCDestino, RGB(255, 255, 255));
    DrawText(hDCDestino, TextoMensaje, TamTexto, &RectaDestino, DT_LEFT);

    SelectObject(hDCDestino, VFuente);
    DeleteObject(Fuente);
}

// -[INICIO devildrey33.ObjetoEscena_Mensaje::MostrarMensaje]-
// -Función que calcula el tamaño y hace visible la ventana del mensaje
void ObjetoEscena_Mensaje::MostrarMensaje(const TCHAR *nTexto, const bool Error) {
    UINT  nAncho  = 0;
    UINT  nAlto   = 0;

    // Eliminamos el anterior texto de la memoria (si es que existe)
    if (TextoMensaje != NULL) delete TextoMensaje;

    // Asignamos el nuevo texto del mensaje
    TamTexto = wcslen(nTexto) + 1;
    TextoMensaje = new TCHAR[TamTexto];
    wcscpy_s(TextoMensaje, TamTexto, nTexto);


    // Inicio un DC y una fuente para obtener los tamaños del texto
    HDC   hDC     = CreateCompatibleDC(NULL);
    HFONT Fuente  = CreateFont( 16, 0, 0, 0, FW_BOLD, false, false, false, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS, 
                                CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") ); 
    HFONT VFuente = static_cast<HFONT>(SelectObject(hDC, Fuente));

    // Escaneamos el texto para calcular el tamaño en pixeles de cada linea
    // Para ello separaremos el texto por lineas y obtendremos el ancho para cada linea.
    TCHAR  Linea[512];
    size_t Contador = 0;
    SIZE   PixelsTexto;
    for (size_t i = 0; i < TamTexto; i++) {
        Linea[Contador] = TextoMensaje[i];
        Contador ++;
        // Terminamos la linea que queremos analizar
        if (TextoMensaje[i] == TEXT('\n') || TextoMensaje[i] == TEXT('\0')) {
            Linea[Contador] = TEXT('\0');
			GetTextExtentPoint32(hDC, Linea, Contador, &PixelsTexto);
            // El ancho de la nueva linea es superior, por ello lo guardamos
            if (static_cast<UINT>(PixelsTexto.cx) > nAncho) nAncho = PixelsTexto.cx;
            nAlto  += (PixelsTexto.cy + 4);
            Contador = 0;
        }
    }

    // Calculamos la posicion centrada
    nAlto += 10;
    nAncho += 10;
    RECT RectaEscena;
    GetClientRect(EscenaPadre->hWnd(), &RectaEscena);
    Espacio.left = (RectaEscena.right - nAncho) / 2;
    Espacio.top = (RectaEscena.bottom - nAlto) / 2;
    Espacio.right = Espacio.left + nAncho;
    Espacio.bottom = Espacio.top + nAlto;

    // Eliminamos objetos GDI de la memoria
    SelectObject(hDC, VFuente);
    DeleteObject(Fuente);
    DeleteDC(hDC);

    // Si la ventana no es de error ponemos un fondo verde
    if (Error == false) {
        ColorFondo     = RGB(20, 120, 20);
        ColorBordeE    = RGB(60, 160, 60);
        ColorBordeI    = RGB(120, 220, 120);
    }
    else { // Si la ventana es de error ponemos un fondo rojo
        ColorFondo     = RGB(120, 20, 20);
        ColorBordeE    = RGB(160, 60, 60);
        ColorBordeI    = RGB(220, 120, 120);
    }

    // Hacemos visible el mensaje
    Visible = TRUE;
}
// -[FIN devildrey33.ObjetoEscena_Mensaje::MostrarMensaje]-

void ObjetoEscena_Mensaje::OcultarMensaje(void) {
    Visible = FALSE;
}