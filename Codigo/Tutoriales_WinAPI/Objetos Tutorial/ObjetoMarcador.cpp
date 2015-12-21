#include "ObjetoMarcador.h"
#include <string>

////////////////////////////////////////////////////
// INICIO ObjetoMarcador
////////////////////////////////////////////////////



// Constructor
ObjetoMarcador::ObjetoMarcador(void) {
}

// Destructor
ObjetoMarcador::~ObjetoMarcador(void) {
    _BorrarLista();
	if (_Fuente_Operaciones != NULL) DeleteObject(_Fuente_Operaciones);
	if (_Fuente_Resultado != NULL) DeleteObject(_Fuente_Resultado);
}

#define REDONDEAMIENTO 2

// Función para crear la ventana
HWND ObjetoMarcador::CrearMarcador( HWND hWndParent, const int cX, const int cY, const int cAncho, const int cAlto,
                                    COLORREF nColor_Texto, COLORREF nColor_DegradadoSuperior, COLORREF nColor_DegradadoInferior,
                                    COLORREF nColor_BordeExterno, COLORREF nColor_BordeInterno ) {
	// Asigno los colores
    _Color_Texto             = nColor_Texto;
    _Color_DegradadoSuperior = nColor_DegradadoSuperior;
    _Color_DegradadoInferior = nColor_DegradadoInferior;
    _Color_BordeExterno      = nColor_BordeExterno;
    _Color_BordeInterno      = nColor_BordeInterno;

	// Creo una fuente tahoma de 13 pixeles para las operaciones
	_Fuente_Operaciones = CreateFont( 13, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET,
                                      OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));
	// Creo una fuente tahoma de 21 pixeles para el resultado
	_Fuente_Resultado = CreateFont( 21, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET,
                                    OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));

	// Creo el control y le asigno una region redondeada
    CrearControl(hWndParent, TEXT("ObjetoMarcador"), WS_CHILD, NULL, cX, cY, cAncho, cAlto, 1001);
    HRGN Region = CreateRoundRectRgn(0, 0, cAncho, cAlto, REDONDEAMIENTO, REDONDEAMIENTO);
    SetWindowRgn(_hWnd, Region, FALSE);

	// Inicializo las variables para las operaciones de teclado
    _Punto = false;
    _ValorActual[0] = TEXT('0');
    _ValorActual[1] = TEXT('\0');
    _TamValorActual = 0;
    Visible(true);
	return _hWnd;
}

// -[INICIO devildrey33.AgregarNumero]-
// Función que agrega un numero al valor actual
void ObjetoMarcador::AgregarNumero(const TCHAR Numero) {
    if (Numero == TEXT('0') && _TamValorActual == 0) return;
    _ValorActual[_TamValorActual] = Numero;
    _TamValorActual ++;
    _ValorActual[_TamValorActual] = TEXT('\0');
    Repintar();
};
// -[FIN devildrey33.AgregarNumero]-

// -[INICIO devildrey33.AgregarPunto]-
// Funcion que agrega una coma decimal al valor acutal
void ObjetoMarcador::AgregarPunto(void) {
    if (_Punto == true) {
        MessageBeep(-1);
        return;
    }
    // Si no hay nada agregamos un cero
    if (_TamValorActual == 0) {
        _ValorActual[_TamValorActual] = TEXT('0');
        _TamValorActual ++;
    }
    _ValorActual[_TamValorActual] = TEXT('.');
    _TamValorActual ++;
    _ValorActual[_TamValorActual] = TEXT('\0');
    _Punto = true;
    Repintar();
};
// -[FIN devildrey33.AgregarPunto]-

// Función que resetea los valores de la lista y el valor actual
void ObjetoMarcador::CE(void) {
    _BorrarLista();
    _ValorActual[0] = TEXT('0');
    _ValorActual[1] = TEXT('\0');
    _TamValorActual = 0;
    _Punto = false;
    Repintar();
}

// -[INICIO devildrey33.BorrarCaracter]-
// Función que borra el último caracter
void ObjetoMarcador::BorrarCaracter(void) {
    // Hay un caracter en el valor actual
    if (_TamValorActual == 1) {
        _ValorActual[0] = TEXT('0');
        _ValorActual[1] = TEXT('\0');
        _TamValorActual = 0;
        _Punto = false;
    }
    // Hay caracteres en el valor actual
    else if (_TamValorActual > 1) {
        _TamValorActual --;
        if (_ValorActual[_TamValorActual] == TEXT('.')) _Punto = false;
        _ValorActual[_TamValorActual] = TEXT('\0');
    }
    else { // Sin caracteres que borrar en el valor actual
        size_t TamLista = _Lista.size();
        // Miramos si hay mas valores en la lista de valores
        if (TamLista > 1) {
            _TamValorActual = swprintf_s(_ValorActual, 256, TEXT("%f"), _Lista[TamLista - 2]->Valor());
            _TamValorActual = _FormatearStr(_ValorActual);
            delete _Lista[TamLista -1];
            delete _Lista[TamLista -2];
            _Lista.resize(TamLista -2);
            _Punto = false;
            // Miramos si el nuevo valor tiene una coma decimal
            for (size_t n = 0; n < _TamValorActual; n++) {
                if (_ValorActual[n] == TEXT('.')) _Punto = true;
            }
        }
        else { // No hay mas valores en la lista, reafirmamos el valor 0
            _ValorActual[0] = TEXT('0');
            _ValorActual[1] = TEXT('\0');
            _TamValorActual = 0;
        }
    }
    Repintar();
};
// -[FIN devildrey33.BorrarCaracter]-


// -[INICIO devildrey33.AgregarOperacion]-
// Función que agrega una operación
void ObjetoMarcador::AgregarOperacion(const ObjetoMarcador_TipoDatos nTipo) {
    // Convertimos el _ValorActual a un numero decimal
    double nValor = _wtof(_ValorActual);
    // Si el valor es 0 no agregamos nada
    if (nValor == 0.0f) return;
    // Añadimos el valor a la lista
    ObjetoMarcador_Datos *nDatosValor = new ObjetoMarcador_Datos(TipoDatos_Valor, nValor);
    _Lista.push_back(nDatosValor);
    // Añadimos la operacion a la lista
    ObjetoMarcador_Datos *nDatosOperacion = new ObjetoMarcador_Datos(nTipo);
    _Lista.push_back(nDatosOperacion);
    _ValorActual[0] = TEXT('0');
    _ValorActual[1] = TEXT('\0');
    _TamValorActual = 0;
    _Punto = false;
    Repintar();
};
// -[FIN devildrey33.AgregarOperacion]-

// Función para borrar la lista de operaciones
void ObjetoMarcador::_BorrarLista(void) {
    for (size_t i = 0; i < _Lista.size(); i++) delete _Lista[i];
    _Lista.resize(0);
}

// -[INICIO devildrey33.Resultado]-
// Función que calcula el resultado, y reinicia todos los valores.
void ObjetoMarcador::Resultado(void) {
    double Op1 = 0.0f;
    double Op2 = 0.0f;
    double nValor = _wtof(_ValorActual);
    size_t i;
    if (nValor == 0.0f) return;
    // Añadimos el valor a la lista
    ObjetoMarcador_Datos *nDatosValor = new ObjetoMarcador_Datos(TipoDatos_Valor, nValor);
    _Lista.push_back(nDatosValor);

    // Realizamos toda la serie de operaciones
    Op1 = _Lista[0]->Valor();
    for (i = 1; i < _Lista.size() -1; i += 2) {
        Op2 = _Lista[i + 1]->Valor();
        switch (_Lista[i]->Tipo()) {
            case TipoDatos_Suma           : Op1 = Op1 + Op2; break;
            case TipoDatos_Resta          : Op1 = Op1 - Op2; break;
            case TipoDatos_Multiplicacion : Op1 = Op1 * Op2; break;
            case TipoDatos_Division       : Op1 = Op1 / Op2; break;
        }
    }
    // Formateamos el resultado y lo introducimos en _ValorActual
    swprintf_s(_ValorActual, 256, TEXT("%f"), Op1);
    _TamValorActual = _FormatearStr(_ValorActual);
    _Punto = false;
    for (i = 0; i < _TamValorActual; i++) {
        if (_ValorActual[i] == TEXT('.')) _Punto = true;
    }
    Repintar();
    _BorrarLista();
}
// -[FIN devildrey33.Resultado]-

// Función que enlaza el mensaje WM_PAINT a este control
LRESULT ObjetoMarcador::Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
    Pintar(hDC);
    return 0;
}

// Función que repinta el control
void ObjetoMarcador::Repintar(void) {
    HDC hDC = GetDC(_hWnd);
    Pintar(hDC);
    ReleaseDC(_hWnd, hDC);
}

// Función que formatea una cadena decimal quitando los ceros a la derecha
// Tambien elimina comas decimales que esten a la derecha
// Ejemplos :
// _FormatearStr("10")     será "10"
// _FormatearStr("10.100") será "10.1"
// _FormatearStr("10.000") será "10"
size_t ObjetoMarcador::_FormatearStr(TCHAR *String) {
    size_t Tam = wcslen(String);
    size_t z = 0;
    bool Decimal = false;
    // Comprobamos que sea un numero decimal
    for (z = 0; z < Tam; z++) {
        if (String[z] == TEXT('.')) Decimal = true;
    }
    // Si no es un valor decimal salimos de la función
    if (Decimal == false) return Tam;
    // Miramos todos los caracteres del valor
    for (z = Tam -1; z > 0; z--) {
        // Si es un cero lo eliminamos
        if (String[z] == TEXT('0'))  String[z] = TEXT('\0');
        // Si es un punto lo eliminamos y terminamos
        else if (String[z] == TEXT('.')) {
            String[z] = TEXT('\0');
            return wcslen(String);
        }
        // Si no es ni un cero ni un punto terminamos
        else return wcslen(String);
    }
    return 0;
}
/*
// Macros para obtener uno de los canales de color de un COLORREF
#define RGB_OBTENER_R(ValorRGB)	static_cast<unsigned short>((ValorRGB & 0xFF) * 0x100)
#define RGB_OBTENER_G(ValorRGB)	static_cast<unsigned short>(ValorRGB & 0xFF00)
#define RGB_OBTENER_B(ValorRGB)	static_cast<unsigned short>((ValorRGB & 0xFF0000) / 0x100)
*/
// Función que pinta el marcador
void ObjetoMarcador::Pintar(HDC hDC) {
	RECT	RC;
	GetClientRect(_hWnd, &RC);
	// 1 - Creación de un buffer para el pintado
	HDC     Buffer  = CreateCompatibleDC(hDC);
	HBITMAP Bmp     = CreateCompatibleBitmap(hDC, RC.right, RC.bottom);
	HBITMAP Viejo   = static_cast<HBITMAP>(SelectObject(Buffer, Bmp));
	HRGN	Region  = CreateRoundRectRgn(0, 0, RC.right, RC.bottom, REDONDEAMIENTO, REDONDEAMIENTO);
	HFONT   VFuente = NULL;

	// 2 - Pintamos el degradado del fondo
	TRIVERTEX     GCVertex[2];
	GRADIENT_RECT tGRect;
	GCVertex[0].Red     = RGB_OBTENER_R(_Color_DegradadoSuperior);
	GCVertex[0].Green   = RGB_OBTENER_G(_Color_DegradadoSuperior);
	GCVertex[0].Blue    = RGB_OBTENER_B(_Color_DegradadoSuperior);
	GCVertex[0].x = 2;
	GCVertex[0].y = 2;
	GCVertex[1].Red     = RGB_OBTENER_R(_Color_DegradadoInferior);
	GCVertex[1].Green   = RGB_OBTENER_G(_Color_DegradadoInferior);
	GCVertex[1].Blue    = RGB_OBTENER_B(_Color_DegradadoInferior);
	GCVertex[1].x = RC.right -2;
	GCVertex[1].y = RC.bottom -2;
	tGRect.UpperLeft = 0;
	tGRect.LowerRight = 1;
	GradientFill(Buffer, GCVertex, 2, &tGRect, 1, GRADIENT_FILL_RECT_V);

	// 3 - Pintamos el borde
	HBRUSH BordeInterno = CreateSolidBrush(_Color_BordeInterno);
	HBRUSH BordeExterno = CreateSolidBrush(_Color_BordeExterno);
	FrameRgn(Buffer, Region, BordeInterno, 2, 2);
	FrameRgn(Buffer, Region, BordeExterno, 1, 1);
	DeleteObject(BordeInterno);
	DeleteObject(BordeExterno);

    // 4 - Pintamos el texto de las operaciones
    SetTextColor(Buffer, _Color_Texto);
    SetBkMode(Buffer, TRANSPARENT);
    TCHAR ValorTmp[256];
    std::wstring Str;
    // Calculo los parentesis del principio de la operación
    // y añado el primer valor con los parentesis a ValorTmp
    if (_Lista.size() > 0) {
        // Quitando la primera operacion hay una abertura de parentesis por cada 2 elementos de la lista
        size_t Parentesis = (_Lista.size() -1) / 2;
        size_t r = 0;
        for (r = 0; r < Parentesis; r++) ValorTmp[r] = TEXT('(');
        ValorTmp[r] = TEXT('\0');
        Str = ValorTmp;
        // Formateo el primer valor
        swprintf_s(ValorTmp, 256, TEXT("%f"), _Lista[0]->Valor());
        _FormatearStr(ValorTmp);
        Str += ValorTmp;
        Str += TEXT(" ");
    }
    // Parseo los valores y las operaciones en ValorTmp
    for (size_t i = 1; i < _Lista.size(); i++) {
        switch (_Lista[i]->Tipo()) {
            case TipoDatos_Valor :
                swprintf_s(ValorTmp, 256, TEXT("%f"), _Lista[i]->Valor());
                _FormatearStr(ValorTmp);
                Str += ValorTmp;
                Str += TEXT(") ");
                break;
            case TipoDatos_Suma             : Str += TEXT("+ "); break;
            case TipoDatos_Resta            : Str += TEXT("- "); break;
            case TipoDatos_Multiplicacion   : Str += TEXT("x "); break;
            case TipoDatos_Division         : Str += TEXT("/ "); break;
        }
    }
    RECT RTO = { 7, 5, RC.right, RC.bottom };
    VFuente = static_cast<HFONT>(SelectObject(Buffer, _Fuente_Operaciones));
    DrawText(Buffer, Str.c_str(), Str.size(), &RTO, DT_LEFT | DT_SINGLELINE);

    // 5 - Pintamos el texto del valor actual
    RECT RVA = { 0, 25, RC.right - 8, RC.bottom };
    SelectObject(Buffer, _Fuente_Resultado);
    if (_TamValorActual == 0)   DrawText(Buffer, _ValorActual, 1, &RVA, DT_RIGHT | DT_SINGLELINE);
    else                        DrawText(Buffer, _ValorActual, _TamValorActual, &RVA, DT_RIGHT | DT_SINGLELINE);

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




////////////////////////////////////////////////////
// FIN ObjetoMarcador
////////////////////////////////////////////////////





