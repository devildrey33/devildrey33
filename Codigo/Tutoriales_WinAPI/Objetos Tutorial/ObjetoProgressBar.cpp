#include "ObjetoProgressBar.h"
//http://msdn.microsoft.com/en-us/library/bb760818(VS.85).aspx <- referencia para la progressbar

// Constructor
ObjetoProgressBar::ObjetoProgressBar(void) {
}

// Destructor
ObjetoProgressBar::~ObjetoProgressBar(void) {
}

// -[INICIO devildrey33.ObjetoProgressBar::CrearProgressBar]-
// Función para crear la progressbar
void ObjetoProgressBar::CrearProgressBar( HWND hWndParent, const UINT nEstilos, const int cX,
                                          const int cY, const int cAncho, const int cAlto, const UINT nID,
                                          const int nMin, const int nMax, const int nValor ) {
    // Iniciamos los controles estandar
    ObjetoIniciarCommonControls::Iniciar();
	// Creamos la ProgressBar
    _hWnd = CreateWindowEx( NULL, PROGRESS_CLASS, NULL, nEstilos, cX, cY, cAncho, cAlto, hWndParent, 
                            reinterpret_cast<HMENU>(IntToPtr(nID)), GetModuleHandle(NULL), NULL );
	// Enlazamos el windowprocedure
  	_ConectarControl(); 
	// Establecemos los valores iniciales de la ProgressBar
    if (nMin != 0 || nMax != 100) AsignarRango(nMin, nMax);
    if (nValor != 0) Valor(nValor);
}
// -[FIN devildrey33.ObjetoProgressBar::CrearProgressBar]-


// -[INICIO devildrey33.ObjetoProgressBar::AsignarRango]-
// Función para asignar el minimo y el maximo para la progressbar
void ObjetoProgressBar::AsignarRango(const int nMinimo, const int nMaximo) {
    SendMessage(_hWnd, PBM_SETRANGE, 0, MAKELPARAM(nMinimo, nMaximo));
}

// Función para asignar el minimo y el maximo para la progressbar
void ObjetoProgressBar::ObtenerRango(int &nMinimo, int &nMaximo) {
    PBRANGE Rango;
    SendMessage(_hWnd, PBM_GETRANGE, 0, reinterpret_cast<LPARAM>(&Rango));
    nMinimo = Rango.iLow;
    nMaximo = Rango.iHigh;
}
// -[FIN devildrey33.ObjetoProgressBar::AsignarRango]-

// -[INICIO devildrey33.ObjetoProgressBar::Minimo]-
// -Función para obtener el minimo de la progressbar
const int ObjetoProgressBar::Minimo(void) {
    return SendMessage(_hWnd, PBM_GETRANGE, FALSE, NULL);
}

// -Función para obtener el maximo de la progressbar
const int ObjetoProgressBar::Maximo(void) {
    return SendMessage(_hWnd, PBM_GETRANGE, TRUE, NULL);
}
// -[FIN devildrey33.ObjetoProgressBar::Minimo]-

// NOTA : es interesante porque en la MSDN para asignar los rangos nos permite hacerlo con integers con signo,
//        pero para obtener el valor actual nos lo devuelve con un unsigned int (UINT) en cambio para asignar el valor
//        debemos usar un int... asi que mas me vale trabajar con valores de 0 para arriba si no queremos liarnos....          
//        Tengo la teoria que al valor devuelto si le sumamos el minimo nos da el valor que buscamos... 

// -[INICIO devildrey33.ObjetoProgressBar::Valor]-
// -Función para obtener el maximo de la progressbar
const UINT ObjetoProgressBar::Valor(void) {
    return SendMessage(_hWnd, PBM_GETPOS, TRUE, NULL);
}

// -Función para asignar el maximo de la progressbar
void ObjetoProgressBar::Valor(const int nValor) {
    SendMessage(_hWnd, PBM_SETPOS, static_cast<WPARAM>(nValor), NULL);
}
// -[FIN devildrey33.ObjetoProgressBar::Valor]-
