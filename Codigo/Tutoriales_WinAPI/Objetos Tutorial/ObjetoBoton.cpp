#include "ObjetoBoton.h"
//#include <string.h>


////////////////////////////////////////////////////
// INICIO ObjetoBoton
////////////////////////////////////////////////////

// Constructor
ObjetoBoton::ObjetoBoton(void) {
    // Asigno los estados
    _Estado  = ObjetoBoton_EstadoNormal;
	_UEstado = ObjetoBoton_EstadoDesactivado;
	_Presionado = false;
	_Texto = NULL;
}

// Destructor
ObjetoBoton::~ObjetoBoton(void) {
	if (_Fuente_Normal != NULL)      DeleteObject(_Fuente_Normal);
	if (_Fuente_Resaltada != NULL)   DeleteObject(_Fuente_Resaltada);
	if (_Fuente_Presionada != NULL)  DeleteObject(_Fuente_Presionada);
	if (_Fuente_Desactivada != NULL) DeleteObject(_Fuente_Desactivada);
}

// -[INICIO devildrey33.CrearBoton]-
// Factor de redondeamiento que se usara en el botón
#define REDONDEAMIENTO 2

// Función para crear el botón
HWND ObjetoBoton::CrearBoton( HWND hWndParent, const TCHAR *nTexto,
                              const int cX, const int cY, const int cAncho, const int cAlto, const int nID,
                              COLORREF nColor_TextoNormal, COLORREF nColor_TextoResaltado, COLORREF nColor_TextoPresionado,
                              COLORREF nColor_TextoDesactivado, COLORREF nColor_DegradadoSuperior, COLORREF nColor_DegradadoInferior,
                              COLORREF nColor_DegradadoResaltado, COLORREF nColor_BordeExterno, COLORREF nColor_BordeInterno,
							  COLORREF nColor_BordeInternoResaltado ) {
	// Asigno los colores
	_Color_TextoNormal           = nColor_TextoNormal;
	_Color_TextoResaltado        = nColor_TextoResaltado;
	_Color_TextoPresionado       = nColor_TextoPresionado;
	_Color_TextoDesactivado      = nColor_TextoDesactivado;
	_Color_DegradadoSuperior     = nColor_DegradadoSuperior;
	_Color_DegradadoInferior     = nColor_DegradadoInferior;
	_Color_DegradadoResaltado    = nColor_DegradadoResaltado;
	_Color_BordeExterno          = nColor_BordeExterno;
	_Color_BordeInterno          = nColor_BordeInterno;
	_Color_BordeInternoResaltado = nColor_BordeInternoResaltado;

	// Creo las fuentes
	_Fuente_Normal = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET,
                                 OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));
	_Fuente_Resaltada = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, true, false, DEFAULT_CHARSET,
                                    OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));
	_Fuente_Presionada = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, true, false, DEFAULT_CHARSET,
                                     OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));
	_Fuente_Desactivada = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET,
                                      OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));

	// Asigno los estados
    _Estado  = ObjetoBoton_EstadoNormal;
	_UEstado = ObjetoBoton_EstadoDesactivado;
	_Presionado = false;
	Texto(nTexto, false);
    // Creo el botón
	CrearControl(hWndParent, TEXT("ObjetoBoton"), WS_CHILD, NULL, cX, cY, cAncho, cAlto, nID, NULL);
	// Asigno una region redondeada al botón
	HRGN Region = CreateRoundRectRgn(0, 0, cAncho, cAlto, REDONDEAMIENTO, REDONDEAMIENTO);
    SetWindowRgn(_hWnd, Region, FALSE);
	// Hago visible el botón
	Visible(true);
	return _hWnd;
}
// -[FIN devildrey33.CrearBoton]-

// Función para asignar el texto del botón
void ObjetoBoton::Texto(const TCHAR *nTexto, const bool nRepintar) {
    size_t Tam = wcslen(nTexto) + 1;
    if (_Texto != NULL) delete [] _Texto;
    _Texto = new TCHAR [Tam];
    wcscpy_s(_Texto, Tam, nTexto);
//	_Texto = nTexto;
	if (nRepintar == true) Repintar(true);
}

// Función para obtener el texto del botón
const TCHAR *ObjetoBoton::Texto(void) {
	return _Texto;
}

// -Función para activar / desactivar el botón
BOOL ObjetoBoton::Activado(const bool nActivar) {
	if (nActivar == false) _Estado = ObjetoBoton_EstadoDesactivado;
	else                   _Estado = ObjetoBoton_EstadoNormal;
	return ObjetoHWND::Activado(nActivar);
}


// Mensaje WM_ERASEBKGND :
// - Ocurre cuando windows quiere borrar el fondo del botón
// - Si pintamos algo en el fondo debemos retornar cualquier cosa que no sea 0
LRESULT ObjetoBoton::Evento_BorrarFondo(HDC hDC) {
	return 0;
}

// Mensaje WM_PAINT :
// - Ocurre cuando windows quiere pintar una porcion del botón para actualizarlo
// - Podemos obtener una brocha del sistema utilizando GetSysColorBrush
// - En la estructura PAINTSTRUCT podemos encontrar la recta que se necesita pintar en el miembro rcPaint.
// - Siempre debemos retornar 0, ya que la estructura de este objeto nos obliga a reemplazar el WM_PAINT de la ventana.
LRESULT ObjetoBoton::Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
	Pintar(hDC);
	return 0;
}

// Mensaje WM_MOUSEMVOE :
// - Ocurre cuando se mueve el mouse dentro del botón
// - Siempre retornamos 0
// -[INICIO devildrey33.Evento_Mouse_Movimiento]-
LRESULT ObjetoBoton::Evento_Mouse_Movimiento(const int cX, const int cY, const UINT Params) {
	POINT Pt = { cX, cY };
	RECT  RectaControl;
	GetClientRect(_hWnd, &RectaControl);
	BOOL  DentroControl = PtInRect(&RectaControl, Pt);
	if (_Presionado == true) {
		if (DentroControl == TRUE)  _Estado = ObjetoBoton_EstadoPresionado;
		else						_Estado = ObjetoBoton_EstadoNormal;
	}
	else {
		if (DentroControl == TRUE) _Estado = ObjetoBoton_EstadoResaltado;
		else					   _Estado = ObjetoBoton_EstadoNormal;
	}
	Repintar();
	return ObjetoControl::Evento_Mouse_Movimiento(cX, cY, Params);
}
// -[FIN devildrey33.Evento_Mouse_Movimiento]-



// Mensaje WM_MOUSELEAVE :
// - Ocurre cuando se sale del botón
// - Siempre retornamos 0
LRESULT ObjetoBoton::Evento_Mouse_Saliendo(void) {
	_Estado = ObjetoBoton_EstadoNormal;
	Repintar();
	return ObjetoControl::Evento_Mouse_Saliendo();
}

// Mensajes : WM_LBUTTONDOWN, WM_RBUTTONDOWN, WM_MBUTTONDOWN, y WM_XBUTTONDOWN
// - Ocurre cuando presionamos un boton del mouse
// - Siempre retornamos 0
// -[INICIO devildrey33.Evento_Mouse_BotonPresionado]-
LRESULT ObjetoBoton::Evento_Mouse_BotonPresionado(const UINT Boton, const int cX, const int cY, const UINT Params) {
	POINT Pt = { cX, cY };
	RECT  RectaControl;
	GetClientRect(_hWnd, &RectaControl);
	if (PtInRect(&RectaControl, Pt) == TRUE) {
		SetCapture(_hWnd);
		_Estado = ObjetoBoton_EstadoPresionado;
		_Presionado = true;
	}
	Repintar(true);
	return 0;
}
// -[FIN devildrey33.Evento_Mouse_BotonPresionado]-

// Mensajes : WM_LBUTTONUP, WM_RBUTTONUP, WM_MBUTTONUP, y WM_XBUTTONUP
// - Ocurre cuando soltamos un boton del mouse
// - Siempre retornamos 0
// -[INICIO devildrey33.Evento_Mouse_BotonSoltado]-
LRESULT ObjetoBoton::Evento_Mouse_BotonSoltado(const UINT Boton, const int cX, const int cY, const UINT Params) {
	ReleaseCapture();
	if (_Presionado == true) {
		RECT  RectaControl;
		GetClientRect(_hWnd, &RectaControl);
		POINT Pt = { cX, cY };
		_Presionado = false;
        _Estado = ObjetoBoton_EstadoNormal;
		// Si el mouse esta dentro del control mandamos el mensaje WM_BOTON_CLICK a la ventana padre del botón.
		if (PtInRect(&RectaControl, Pt) != 0) {
			UINT IDBoton = ID();
			PostMessage(GetParent(_hWnd), WM_BOTON_CLICK, reinterpret_cast<WPARAM>(this), static_cast<LPARAM>(Boton));
		}
	}
	Repintar(true);
	return 0;
}
// -[FIN devildrey33.Evento_Mouse_BotonSoltado]-

// Mensaje WM_KEYDOWN
// - Ocurre cuando presionamos una tecla del teclado
// - Siempre retornamos 0
LRESULT ObjetoBoton::Evento_Teclado_TeclaPresionada(const UINT Caracter, const UINT Repeticion, const UINT Params) {
	if (Caracter == VK_SPACE || Caracter == VK_RETURN) {
		_Presionado = true;
		_Estado = ObjetoBoton_EstadoPresionado;
		Repintar();
	}
	return 0;
}

// Mensaje WM_KEYUP
// - Ocurre cuando soltamos una tecla del teclado
// - Siempre retornamos 0
LRESULT ObjetoBoton::Evento_Teclado_TeclaSoltada(const UINT Caracter, const UINT Repeticion, const UINT Params) {
	_Presionado = false;
	_Estado = ObjetoBoton_EstadoNormal;
	if (Caracter == VK_SPACE || Caracter == VK_RETURN) {
		UINT IDBoton = ID();
		PostMessage(GetParent(_hWnd), WM_BOTON_CLICK, reinterpret_cast<WPARAM>(this), 0);
	}
	return 0;
}

// Función que repinta el control si el ultimo estado no es como el estado actual
void ObjetoBoton::Repintar(const bool Forzar) {
	if (_Estado != _UEstado || Forzar == true) {
		HDC hDC = GetDC(_hWnd);
		Pintar(hDC);
		ReleaseDC(_hWnd, hDC);
	}
}



// Función que pinta todo el botón
// -[INICIO devildrey33.Pintar]-
void ObjetoBoton::Pintar(HDC hDC) {
	RECT	RC;
	GetClientRect(_hWnd, &RC);
	// 1 - Creación de un buffer para el pintado
	HDC     Buffer  = CreateCompatibleDC(hDC);
	HBITMAP Bmp     = CreateCompatibleBitmap(hDC, RC.right, RC.bottom);
	HBITMAP Viejo   = static_cast<HBITMAP>(SelectObject(Buffer, Bmp));
	HRGN	Region  = CreateRoundRectRgn(0, 0, RC.right, RC.bottom, REDONDEAMIENTO, REDONDEAMIENTO);
	HFONT   VFuente = NULL;

	// 2 - Seleccionamos los colores según el estado
	COLORREF Degradado1;
	COLORREF Degradado2;
	COLORREF ColorBorde;

	switch (_Estado) {
		case ObjetoBoton_EstadoNormal :
			Degradado1 = _Color_DegradadoSuperior;
			Degradado2 = _Color_DegradadoInferior;
			SetTextColor(Buffer, _Color_TextoNormal);
			VFuente = static_cast<HFONT>(SelectObject(Buffer, _Fuente_Normal));
			if (GetFocus() == _hWnd)	ColorBorde = _Color_BordeInternoResaltado;
			else						ColorBorde = _Color_BordeInterno;
			break;
		case ObjetoBoton_EstadoResaltado :
			Degradado1 = _Color_DegradadoResaltado;
			Degradado2 = _Color_DegradadoInferior;
			SetTextColor(Buffer, _Color_TextoResaltado);
			VFuente = static_cast<HFONT>(SelectObject(Buffer, _Fuente_Resaltada));
			ColorBorde = _Color_BordeInternoResaltado;
			break;
		case ObjetoBoton_EstadoPresionado :
			Degradado1 = _Color_DegradadoInferior;
			Degradado2 = _Color_DegradadoResaltado;
			SetTextColor(Buffer, _Color_TextoPresionado);
			VFuente = static_cast<HFONT>(SelectObject(Buffer, _Fuente_Presionada));
			ColorBorde = _Color_BordeInternoResaltado;
			break;
		case ObjetoBoton_EstadoDesactivado :
			Degradado1 = _Color_DegradadoSuperior;
			Degradado2 = _Color_DegradadoInferior;
			SetTextColor(Buffer, _Color_TextoDesactivado);
			VFuente = static_cast<HFONT>(SelectObject(Buffer, _Fuente_Desactivada));
			ColorBorde = _Color_BordeInterno;
			break;
	}

	// 3 - Pintamos el degradado del fondo
	TRIVERTEX     GCVertex[2];
	GRADIENT_RECT tGRect;
	GCVertex[0].Red     = RGB_OBTENER_R(Degradado1);
	GCVertex[0].Green   = RGB_OBTENER_G(Degradado1);
	GCVertex[0].Blue    = RGB_OBTENER_B(Degradado1);
	GCVertex[0].x = 2;
	GCVertex[0].y = 2;
	GCVertex[1].Red     = RGB_OBTENER_R(Degradado2);
	GCVertex[1].Green   = RGB_OBTENER_G(Degradado2);
	GCVertex[1].Blue    = RGB_OBTENER_B(Degradado2);
	GCVertex[1].x = RC.right -2;
	GCVertex[1].y = RC.bottom -2;
	tGRect.UpperLeft = 0;
	tGRect.LowerRight = 1;
	GradientFill(Buffer, GCVertex, 2, &tGRect, 1, GRADIENT_FILL_RECT_V);

	// 4 - Pintamos el borde
	HBRUSH BordeInterno = CreateSolidBrush(ColorBorde);
	HBRUSH BordeExterno = CreateSolidBrush(_Color_BordeExterno);
	FrameRgn(Buffer, Region, BordeInterno, 2, 2);
	FrameRgn(Buffer, Region, BordeExterno, 1, 1);
	DeleteObject(BordeInterno);
	DeleteObject(BordeExterno);

	// 5 - Pintamos el texto
	SetBkMode(Buffer, TRANSPARENT);
	RECT RC2 = RC;
	// Si el estado es presionado sumamos 1 a todos los lados del RECT para simular el efecto de presión.
    if (_Estado == ObjetoBoton_EstadoPresionado) {
		RC2.left ++; RC2.top ++; RC2.right ++; RC2.bottom ++;
	}
	DrawText(Buffer, _Texto, wcslen(_Texto), &RC2, DT_CENTER | DT_VCENTER | DT_SINGLELINE);

	// 6 - Pintamos el Buffer en el DC del botón
	BitBlt(hDC, 0, 0, RC.right, RC.bottom, Buffer, 0, 0, SRCCOPY);

	// 7 - Selecciono los objetos originales del Buffer
	SelectObject(Buffer, VFuente);
	SelectObject(Buffer, Viejo);
	// 8 - Elimino objetos gdi de la memoria
	DeleteObject(Region);
	DeleteObject(Bmp);
	DeleteDC(Buffer);
}
// -[FIN devildrey33.Pintar]-






////////////////////////////////////////////////////
// FIN ObjetoBoton
////////////////////////////////////////////////////
