#include "ObjetoBarraProgreso.h"

// Constructor
ObjetoBarraProgreso::ObjetoBarraProgreso(void) {
}

// Destructor
ObjetoBarraProgreso::~ObjetoBarraProgreso(void) {
}

// -Función para crear la barra de progreso
HWND ObjetoBarraProgreso::CrearBarraProgreso( HWND hWndParent, const UINT nID, const int cX, const int cY, const int cAncho, 
											  const int cAlto, const float nMin, const float nMax, const float nValor,
											  COLORREF nColor_DegradadoSuperior, COLORREF nColor_DegradadoInferior,
											  COLORREF nColor_BordeExterno, COLORREF nColor_BordeInterno, COLORREF nColor_Fondo ) {
	// Comprobamos que la barra de progreso no es cuadrada
	if (cAncho == cAlto) return NULL; 
	// Asignamos los valores y los colores
	_Minimo                  = nMin;
	_Maximo                  = nMax;
	_Valor                   = nValor;
	_Color_DegradadoSuperior = nColor_DegradadoSuperior;
	_Color_DegradadoInferior = nColor_DegradadoInferior;
	_Color_BordeExterno      = nColor_BordeExterno;
	_Color_BordeInterno      = nColor_BordeInterno;
	_Color_Fondo             = nColor_Fondo;
	CrearControl(hWndParent, TEXT("ObjetoBarraProgreso"), WS_CHILD | WS_VISIBLE, 0, cX, cY, cAncho, cAlto, nID);
	SetWindowRgn(_hWnd, CreateRoundRectRgn(0, 0, cAncho, cAlto, 5, 5), false);
	return _hWnd;
}



// -Función para obtener el minimo de la barra de progreso
void ObjetoBarraProgreso::Minimo(const float nMinimo, const bool nRepintar) {
	_Minimo = nMinimo;
	if (nRepintar == true) Repintar();
}

// -Función para obtener el maximo de la barra de progreso
void ObjetoBarraProgreso::Maximo(const float nMaximo, const bool nRepintar) {
	_Maximo = nMaximo;
	if (nRepintar == true) Repintar();
}

// -Función para obtener el maximo de la progressbar
void ObjetoBarraProgreso::Valor(const float nValor, const bool nRepintar) {
	_Valor = nValor;
	if (nRepintar == true) Repintar();
}


// Factor de redondeamiento que se usara en la barra de progreso
#define REDONDEAMIENTO 5

void ObjetoBarraProgreso::Repintar(void) {
	HDC         hDC = GetDC(_hWnd);
	PAINTSTRUCT PS;
	Evento_Pintar(hDC, PS);
	ReleaseDC(_hWnd, hDC);
}

// -[INICIO devildrey33.ObjetoBarraProgreso::Evento_Pintar]-
LRESULT ObjetoBarraProgreso::Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
	RECT	RC;
	GetClientRect(_hWnd, &RC);
	// 1 - Creación de un buffer para el pintado
	HDC     Buffer     = CreateCompatibleDC(hDC);
	HBITMAP Bmp        = CreateCompatibleBitmap(hDC, RC.right, RC.bottom);
	HBITMAP Viejo      = static_cast<HBITMAP>(SelectObject(Buffer, Bmp));
	HRGN	Region     = CreateRoundRectRgn(0, 0, RC.right, RC.bottom, REDONDEAMIENTO, REDONDEAMIENTO);
	HFONT   VFuente    = NULL;
	RECT	Degradado  = { RC.left + 2, RC.top +2, RC.right -4, RC.bottom -4 };
	float   Parte      = 0.0f;
	bool    EsVertical = (RC.right < RC.bottom);

	// 2 -Calculamos los pixeles necesarios por cada parte 
	float TotalValores = 0.0f;
	if (EsVertical == true) { 
		// (RC.bottom - 4)          = Alto utilizable en pixeles del control
		// (_Maximo - _Minimo)      = Total de valores a recorrer
		// (Alto / Total varlores)  = Parte por valor
		float AltoU = static_cast<float>(RC.bottom - 4);
		TotalValores = (_Maximo - _Minimo);
		if (TotalValores > AltoU) Parte = TotalValores / AltoU;
		else                      Parte = AltoU / TotalValores;
		Degradado.top = Degradado.bottom - static_cast<int>(Parte * (_Valor - _Minimo));
	}
	else {
		// (RC.right - 4)           = Ancho utilizable en pixeles del control
		// (_Maximo - _Minimo)      = Total de valores a recorrer
		// (Ancho / Total varlores) = Parte por valor
		float AnchoU = static_cast<float>(RC.right - 4);
		TotalValores = (_Maximo - _Minimo);

		if (TotalValores > AnchoU) Parte = TotalValores / AnchoU;
		else                       Parte = AnchoU / TotalValores;
		Degradado.right = static_cast<int>(Parte * (_Valor - _Minimo));
	}

	// 3 - Pintamos el fondo
	HBRUSH Brocha = CreateSolidBrush(_Color_Fondo);
	FillRect(Buffer, &RC, Brocha);
	DeleteObject(Brocha);

	// 4 - Pintamos la barra de progreso con un degradado
	TRIVERTEX     GCVertex[2]; 
	GRADIENT_RECT tGRect; 
	GCVertex[0].Red     = RGB_OBTENER_R(_Color_DegradadoSuperior); 
	GCVertex[0].Green   = RGB_OBTENER_G(_Color_DegradadoSuperior);
	GCVertex[0].Blue    = RGB_OBTENER_B(_Color_DegradadoSuperior);
	GCVertex[0].x       = Degradado.left; 
	GCVertex[0].y       = Degradado.top; 
	GCVertex[1].Red     = RGB_OBTENER_R(_Color_DegradadoInferior);
	GCVertex[1].Green   = RGB_OBTENER_G(_Color_DegradadoInferior);
	GCVertex[1].Blue    = RGB_OBTENER_B(_Color_DegradadoInferior);
	GCVertex[1].x       = Degradado.right + 2; 
	GCVertex[1].y		= Degradado.bottom + 2;
	tGRect.UpperLeft = 0;  
	tGRect.LowerRight = 1; 
	GradientFill(Buffer, GCVertex, 2, &tGRect, 1, (EsVertical) ? GRADIENT_FILL_RECT_H : GRADIENT_FILL_RECT_V);  

	// 5 - Pintamos el borde
	Brocha = CreateSolidBrush(_Color_BordeInterno);
	FrameRgn(Buffer, Region, Brocha, 2, 2);
	DeleteObject(Brocha);
	Brocha = CreateSolidBrush(_Color_BordeExterno);
	FrameRgn(Buffer, Region, Brocha, 1, 1);
	DeleteObject(Brocha);

	// 6 - Pintamos el Buffer en el DC de la barra de progreso
	BitBlt(hDC, 0, 0, RC.right, RC.bottom, Buffer, 0, 0, SRCCOPY);

	// 7 - Selecciono los objetos originales del Buffer y elimino objetos gdi de la memoria
	SelectObject(Buffer, VFuente);
	SelectObject(Buffer, Viejo);
	DeleteObject(Region);
	DeleteObject(Bmp);
	DeleteDC(Buffer);

	return 0;
}
// -[FIN devildrey33.ObjetoBarraProgreso::Evento_Pintar]-
