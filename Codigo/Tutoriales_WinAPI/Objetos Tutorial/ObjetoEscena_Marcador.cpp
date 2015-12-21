#include "ObjetoEscena_Marcador.h"
#include <string>

// Constructor
ObjetoEscena_Marcador::ObjetoEscena_Marcador(void) {
    Puntuacion = 0;
    Recorrido = 0;
    FPS = 0;
    Velocidad = 0;
}

// Destructor
ObjetoEscena_Marcador::~ObjetoEscena_Marcador(void) {
}

// -[INICIO devildrey33.ObjetoEscena_Marcador::MostrarMarcador]-
// Función para mostrar el marcador
void ObjetoEscena_Marcador::MostrarMarcador(void) {
    RECT RectaEscena;
    GetWindowRect(EscenaPadre->hWnd(), &RectaEscena);
    Espacio.left = 10;
    Espacio.top = 10;
    Espacio.bottom = 60;
    Espacio.right = (RectaEscena.right - RectaEscena.left) - 30;
    Visible = TRUE;
}
// -[FIN devildrey33.ObjetoEscena_Marcador::MostrarMarcador]-


// -[INICIO devildrey33.ObjetoEscena_Marcador::Pintar_AlphaBlend]-
// Esta función se usara para pintar los graficos que se necesiten con AlphaBlend
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado.
void ObjetoEscena_Marcador::Pintar_AlphaBlend(HDC hDCDestino) {
    // Declaracion de variables
    HFONT Fuente = CreateFont( 16, 0, 0, 0, FW_BOLD, false, false, false, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS,
                               CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") );
    HFONT VFuente = static_cast<HFONT>(SelectObject(hDCDestino, Fuente));
    TCHAR Texto[256];
    SetBkMode(hDCDestino, TRANSPARENT);

    RECT RectaDestino = { 10, 8, Espacio.right, 40 };
    RECT RectaDestinoSombra = { 11, 9, Espacio.right, 41 };
    // Pintamos la parte izquierda del texto con su sombra
    int TamTexto = swprintf_s(Texto, 256, TEXT("Puntuación : %d\nRecorrido : %d"), Puntuacion, Recorrido);
    SetTextColor(hDCDestino, RGB(0, 0, 0));
    DrawText(hDCDestino, Texto, TamTexto, &RectaDestinoSombra, DT_LEFT);
    SetTextColor(hDCDestino, RGB(255, 255, 255));
    DrawText(hDCDestino, Texto, TamTexto, &RectaDestino, DT_LEFT);

    // Pintamos la parte derecha del texto con su sombra
    RectaDestino.left = Espacio.right - 135;
    RectaDestinoSombra.left = Espacio.right - 135;
    TamTexto = swprintf_s(Texto, 256, TEXT("FPS : %d\nVelocidad : %d%%"), FPS, abs(static_cast<int>(100 - Velocidad)));
    SetTextColor(hDCDestino, RGB(0, 0, 0));
    DrawText(hDCDestino, Texto, TamTexto, &RectaDestinoSombra, DT_LEFT);
    SetTextColor(hDCDestino, RGB(255, 255, 255));
    DrawText(hDCDestino, Texto, TamTexto, &RectaDestino, DT_LEFT);

    // Eliminamos los objetos GDI utilizados de la memoria
    SelectObject(hDCDestino, VFuente);
    DeleteObject(Fuente);
}
// -[FIN devildrey33.ObjetoEscena_Marcador::Pintar_AlphaBlend]-

