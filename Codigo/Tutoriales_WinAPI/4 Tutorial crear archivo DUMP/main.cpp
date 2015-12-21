
#pragma comment(lib, "dbghelp.lib")		// Libreria para las excepciones graves

#include <windows.h>
#include <dbghelp.h>
#include <stdio.h>
#include <Shlobj.h>


// -[INICIO devildrey33.WndProc]-
// Window procedure para la ventana que provoca el error.
LRESULT CALLBACK WndProc(HWND hWnd, UINT message, WPARAM wParam, LPARAM lParam) {
    int *i = NULL;
    switch (message) {
        case WM_LBUTTONUP :
            MessageBox( hWnd, TEXT("Se va a provocar un error, para que podáis abrir el archivo DUMP.dmp con el visual studio"),
                        TEXT("Provocando error"), MB_OK);
            *i = 2; // intentamos asignar el valor 2 a un puntero que no se ha inicializado, lo que provoca un error critico
            return 0;
        case WM_CLOSE :
            PostQuitMessage(0);
            return 0;
        default :
            return DefWindowProc(hWnd, message, wParam, lParam);
    }
    return 0;
}
// -[FIN devildrey33.WndProc]-

// -[INICIO devildrey33.FiltroError]-
LONG WINAPI FiltroError(struct _EXCEPTION_POINTERS* ExceptionInfo) {
    TCHAR  PathAppData[MAX_PATH];
    TCHAR  PathDump[MAX_PATH];
    if (ExceptionInfo == NULL) return -1;
    // Obtenemos la carpeta APP_DATA donde podemos escribir cosas sin necesidad de permisos de administrador
    SHGetFolderPath(NULL, CSIDL_COMMON_APPDATA, NULL, 0, PathAppData);
    swprintf_s(PathDump, MAX_PATH, TEXT("%s\\DUMP.dmp"), PathAppData);
    // Creamos el archivo DUMP.dmp para empezar a escribir los datos
    HANDLE hFile = CreateFile(PathDump, GENERIC_READ | GENERIC_WRITE, 0, NULL, CREATE_ALWAYS, FILE_ATTRIBUTE_NORMAL, NULL); 
    // Si no hay ningún error al crear el archivo..
    if ((hFile != NULL) && (hFile != INVALID_HANDLE_VALUE))  {
        // Rellenamos la estructura con la información de la excepción
        MINIDUMP_EXCEPTION_INFORMATION mdei; 
        mdei.ThreadId           = GetCurrentThreadId(); 
        mdei.ExceptionPointers  = ExceptionInfo; 
        mdei.ClientPointers     = FALSE; 
        // Rellenamos la estructura con la información del callback
        MINIDUMP_CALLBACK_INFORMATION mci; 
        mci.CallbackRoutine     = NULL; 
        mci.CallbackParam       = 0; 
        // Creamos una variable con las opciones que se usaran para crear el dump
        MINIDUMP_TYPE mdt       = (MINIDUMP_TYPE)(MiniDumpWithIndirectlyReferencedMemory | MiniDumpScanMemory | MiniDumpNormal); 
        // Escribimos el dump en el archivo
        BOOL rv;
        rv = MiniDumpWriteDump(GetCurrentProcess(), GetCurrentProcessId(), hFile, mdt, (ExceptionInfo != 0) ? &mdei : 0, 0, &mci); 
        // Cerramos el archivo dump
        CloseHandle(hFile); 
        // Abrimos la carpeta donde se ha guardado el DUMP.dmp
        ShellExecute(NULL, TEXT("open"), PathAppData, TEXT(""), PathAppData, SW_SHOW);
    }
    return TRUE;
}
// -[FIN devildrey33.FiltroError]-

// -[INICIO devildrey33.WinMain]-
int APIENTRY WinMain(HINSTANCE hIns, HINSTANCE hPrevIns, LPSTR lpCmdLine, int nCmdShow){
    // Asignación del filtro de errores
    LPTOP_LEVEL_EXCEPTION_FILTER Filtro;
    Filtro = SetUnhandledExceptionFilter((LPTOP_LEVEL_EXCEPTION_FILTER)FiltroError);
    // Creación de la clase ventana
    WNDCLASSEX wcex;
    wcex.cbSize         = sizeof(WNDCLASSEX);
    wcex.style          = CS_HREDRAW | CS_VREDRAW;
    wcex.lpfnWndProc    = WndProc;
    wcex.cbClsExtra     = 0;
    wcex.cbWndExtra     = 0;
    wcex.hInstance      = hIns;
    wcex.hIcon          = NULL;
    wcex.hCursor        = LoadCursor(NULL, IDC_ARROW);
    wcex.hbrBackground  = (HBRUSH)(COLOR_WINDOW+1);
    wcex.lpszMenuName   = NULL;
    wcex.lpszClassName  = TEXT("VentanaDump");
    wcex.hIconSm        = NULL;
    RegisterClassEx(&wcex);
    // Creación de la ventana
    HWND hWndVentana = CreateWindowEx( NULL, TEXT("VentanaDump"), TEXT("Ventana Dump"),
                                       WS_OVERLAPPEDWINDOW | WS_VISIBLE,
                                       100, 100, 200, 200, NULL, NULL, 
                                       GetModuleHandle(NULL), NULL);
    // Bucle de mensajes principal
    MSG  msg;
    while (GetMessage(&msg, NULL, 0, 0)) {
        TranslateMessage(&msg);
        DispatchMessage(&msg);
    }
    return 0;
}
// -[FIN devildrey33.WinMain]-
