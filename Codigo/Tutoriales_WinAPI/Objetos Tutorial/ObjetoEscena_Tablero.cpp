#include "ObjetoEscena_Tablero.h"

// Constructor
ObjetoEscena_Tablero::ObjetoEscena_Tablero(void) {
    Ancho = 0;
    Alto = 0;
}

// Destructor
ObjetoEscena_Tablero::~ObjetoEscena_Tablero(void) {
}


// -[INICIO devildrey33.ObjetoEscena_Tablero::MostrarTablero]-
// -Función para crear el tablero
//  Esta funcion adaptara la ventana que contiene el ObjetoEscena al tamaño necesario
void ObjetoEscena_Tablero::MostrarTablero(const UINT nAncho, const UINT nAlto) {
    Ancho = nAncho +2;
    Alto = nAlto +2;
    RECT RectaEscena;
    GetWindowRect(EscenaPadre->hWnd(), &RectaEscena);
    // Muevo la ventana padre acorde al tamaño del tablero añadiendo 40 pixeles de ancho y 120 de alto
    EscenaPadre->Mover(RectaEscena.left, RectaEscena.top, (Ancho * 10) + 40, (Alto * 10) + 120);
    Espacio.left = 10;
    Espacio.top = 70;
    Espacio.right = Espacio.left + (Ancho * 10);
    Espacio.bottom = Espacio.top + (Alto * 10);
    Visible = TRUE;
}
// -[FIN devildrey33.ObjetoEscena_Tablero::MostrarTablero]-

// -[INICIO devildrey33.ObjetoEscena_Tablero::Pintar_AlphaBlend]-
// Esta función se usara para pintar los graficos que se necesiten con AlphaBlend
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado.
void ObjetoEscena_Tablero::Pintar_AlphaBlend(HDC hDCDestino) {
    UINT nx = 0;
    UINT ny = 0;

    // Pinto el fondo por donde se movera la serpiente con una tonalidad de azul distinta
    RECT EspacioTablero = { 11, 11, (Espacio.right - Espacio.left) - 10, (Espacio.bottom - Espacio.top) - 10 };
    HBRUSH Brocha = CreateSolidBrush(RGB(40, 40, 140));
    FillRect(hDCDestino, &EspacioTablero, Brocha);
    
    // Pinto lineas para formar una rejilla dentro del espacio donde se movera la serpiente
    HPEN Pluma = CreatePen(PS_SOLID, 1, RGB(120, 120, 220));
    HPEN Viejo = static_cast<HPEN>(SelectObject(hDCDestino, Pluma));
    for (ny = 1; ny < Alto; ny ++) {
        MoveToEx(hDCDestino, 11, ny * 10, NULL);
        LineTo(hDCDestino, (Alto * 10) - 10, ny * 10);
    }
    for (nx = 1; nx < Ancho; nx ++) {
        MoveToEx(hDCDestino, nx * 10, 11, NULL);
        LineTo(hDCDestino, nx * 10, (Ancho * 10) - 10);
    }
    // Elimino objetos GDI de la memoria
    DeleteObject(Brocha);
    SelectObject(hDCDestino, Viejo);
    DeleteObject(Pluma);
}
// -[FIN devildrey33.ObjetoEscena_Tablero::Pintar_AlphaBlend]-


// -[INICIO devildrey33.ObjetoEscena_Tablero::Pintar_Terminado]-
// Esta función se usara para pintar los graficos que se necesiten. (NO SE INCLUIRAN EN EL ALPHABLEND)
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado.
void ObjetoEscena_Tablero::Pintar_Terminado(HDC hDCDestino) {
    int i;
    RECT EspacioTmp;
    // Creación de las brochas necesarias
    HBRUSH Brocha  = CreateSolidBrush(RGB(0, 200, 0));
    HBRUSH BrochaH = CreateSolidBrush(RGB(0, 255, 0));
    HBRUSH BrochaM = CreateSolidBrush(RGB(100, 50, 20));
    HBRUSH Brocha2 = CreateSolidBrush(RGB(255, 0, 0));

    // Pinto los muros
    for (i = 0; i < static_cast<int>(Muro.size()); i++) {
        EspacioTmp.left   = (Muro[i].x * 10); 
        EspacioTmp.top    = (Muro[i].y * 10); 
        EspacioTmp.right  = EspacioTmp.left + 11;
        EspacioTmp.bottom = EspacioTmp.top + 11;
        FillRect(hDCDestino, &EspacioTmp, BrochaM);
    }

    // Pinto las bolas
    HBRUSH VBrocha = static_cast<HBRUSH>(SelectObject(hDCDestino, Brocha2));
    for (size_t i2 = 0; i2 < Bolas.size(); i2++) {
        Ellipse(hDCDestino, (Bolas[i2].x * 10) + 1, (Bolas[i2].y * 10) + 1, (Bolas[i2].x * 10) + 10, (Bolas[i2].y * 10) + 10);
    }
    SelectObject(hDCDestino, VBrocha);

    // Pinto la serpiente
    for (i = static_cast<int>(Serpiente.size()) -1; i > -1; i--) {
        EspacioTmp.left   = (Serpiente[i].x * 10) + 1; 
        EspacioTmp.top    = (Serpiente[i].y * 10) + 1; 
        EspacioTmp.right  = EspacioTmp.left + 9;
        EspacioTmp.bottom = EspacioTmp.top + 9;
        if (i == 0) FillRect(hDCDestino, &EspacioTmp, BrochaH);
        else        FillRect(hDCDestino, &EspacioTmp, Brocha);
    }

    // Elimino las brochas de la memoria
    DeleteObject(Brocha);
    DeleteObject(Brocha2);
    DeleteObject(BrochaH);
    DeleteObject(BrochaM);
}
// -[FIN devildrey33.ObjetoEscena_Tablero::Pintar_Terminado]-

