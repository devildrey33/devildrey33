// www.devildrey33.es
// Ejemplo 1.2 - Creación de una ventana y obtención de sus eventos
// Este ejemplo crea una ventana basica con el fondo blanco que al cerrarla termina la aplicación


// Cabecera básica de windows
#include <windows.h>


// Esqueleto de nuestra ventana
// -[INICIO devildrey33.WndProc]-
static LRESULT CALLBACK WindowProcedure( HWND hWnd, UINT Msg, 
                                         WPARAM wParam, LPARAM lParam ) {
    switch (Msg) { 
        case WM_CLOSE :
            PostQuitMessage(0);
            return 0;
    }
    return DefWindowProc(hWnd, Msg, wParam, lParam); 
}
// -[FIN devildrey33.WndProc]-


// Función que registra nuestra clase ventana
// -[INICIO devildrey33.RegWnd]-
void RegistrarClaseVentana(const TCHAR *NombreClaseVentana, WNDPROC WndProc) {
    WNDCLASSEX WinClass;
    WinClass.cbSize        = sizeof(WNDCLASSEX);
    WinClass.style         = 0;
    WinClass.lpfnWndProc   = WndProc;
    WinClass.cbClsExtra    = 0;
    WinClass.cbWndExtra    = 0;
    WinClass.hInstance     = GetModuleHandle(NULL);
    WinClass.hIcon         = NULL;
    WinClass.hIconSm       = NULL;
    WinClass.hCursor       = LoadCursor(0, IDC_ARROW);
    WinClass.hbrBackground = (HBRUSH)(COLOR_WINDOW + 1);
    WinClass.lpszMenuName  = 0;
    WinClass.lpszClassName = NombreClaseVentana;
    ATOM A = RegisterClassEx(&WinClass);
}
// -[FIN devildrey33.RegWnd]-


// Función main donde empieza la aplicación
// -[INICIO devildrey33.CreateWindow]-
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Defino el nombre para mi clase ventana
    TCHAR NombreClase[] = TEXT("NombreVentana");
    // Registro la clase ventana
    RegistrarClaseVentana(NombreClase, WindowProcedure);
    // Creo la ventana
    HWND hWnd = CreateWindowEx( NULL, NombreClase, TEXT("Ejemplo tutorial 1.2"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                100, 100, 300, 300, NULL, NULL, hInstance, NULL ); 
    // Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
    return 0;
}
// -[FIN devildrey33.CreateWindow]-

