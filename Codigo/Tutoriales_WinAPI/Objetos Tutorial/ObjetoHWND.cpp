#include "ObjetoHWND.h"
#include "ObjetoBoton.h"

// Constructor
ObjetoHWND::ObjetoHWND(void) {
	_hWnd = NULL;
}

// Destructor
ObjetoHWND::~ObjetoHWND(void) {
}

// Función que retorna la ID de esta ventana / control
UINT ObjetoHWND::ID(void) {
	return static_cast<UINT>(GetWindowLongPtr(_hWnd, GWL_ID));
}

// Función que destruye esta ventana
BOOL ObjetoHWND::Destruir(void) {
	BOOL R = TRUE;
	if (_hWnd != NULL) R = DestroyWindow(_hWnd);
	_hWnd = NULL;
	return R;
}

// Función que asigna el estado de visibilidad de la ventana
BOOL ObjetoHWND::Visible(const bool nMostrar) {
	return ShowWindow(_hWnd, (nMostrar == true) ? SW_SHOW : SW_HIDE);
}

// Función que retorna si la ventana es visible
BOOL ObjetoHWND::Visible(void) {
	return IsWindowVisible(_hWnd);
}

// Función que activa / desactiva la ventana
BOOL ObjetoHWND::Activado(const bool nActivar) {
	return EnableWindow(_hWnd, nActivar);
}

// Función que retorna si la ventana esta activada
BOOL ObjetoHWND::Activado(void) {
	return IsWindowEnabled(_hWnd);
}

// Función para mover la ventana
BOOL ObjetoHWND::Mover(const int cX, const int cY, const int cAncho, const int cAlto, const BOOL Repintar) {
    return MoveWindow(_hWnd, cX, cY, cAncho, cAlto, Repintar);
}

HWND ObjetoHWND::AsignarFoco(void) {
	return SetFocus(_hWnd);
}

// Función para registrar una clase ventana
ATOM ObjetoHWND::RegistrarClase(const TCHAR *NombreClaseVentana, const int nIconoRecursos, WNDPROC WindowProcedureInicial) {
	WNDCLASSEX WndClass;
	WndClass.cbSize			= sizeof(WNDCLASSEX);
	WndClass.style			= 0;
	WndClass.lpfnWndProc	= WindowProcedureInicial;
	WndClass.cbClsExtra		= 0;
	WndClass.cbWndExtra		= 0;
	WndClass.hInstance		= GetModuleHandle(NULL);
	if (nIconoRecursos != 0) { // Si se ha especificado icono, se carga desde los recursos
		WndClass.hIcon		= LoadIcon(GetModuleHandle(NULL), MAKEINTRESOURCE(nIconoRecursos));
		WndClass.hIconSm	= LoadIcon(GetModuleHandle(NULL), MAKEINTRESOURCE(nIconoRecursos));
	}
	else {
		WndClass.hIcon		= NULL;
		WndClass.hIconSm	= NULL;
	}
	WndClass.hCursor		= LoadCursor(0, IDC_ARROW);
	WndClass.hbrBackground	= (HBRUSH)(COLOR_WINDOW + 1);
	WndClass.lpszMenuName	= 0;
	WndClass.lpszClassName	= NombreClaseVentana;
	return RegisterClassEx(&WndClass);
}
