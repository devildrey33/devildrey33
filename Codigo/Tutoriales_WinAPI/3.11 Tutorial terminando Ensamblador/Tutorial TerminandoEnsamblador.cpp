// www.devildrey33.es
// Ejemplo 3.11 - Terminando el Ensamblador
// En este ejemplo podremos ver el programa que se usara para crear el Instalador

#include "DialogoEnsamblador.h"
#include <Shlobj.h> // Cabecera para IsUserAnAdmin

// -[INICIO devildrey33.WinMain]-
// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
	if (IsUserAnAdmin() == FALSE) { 
		int		TotalArgs	= 0;
		TCHAR **Args		= CommandLineToArgvW(GetCommandLine(), &TotalArgs);
		// Ejecutamos el instalador de forma que pida privilegios de administrador
		ShellExecute(NULL, TEXT("RunAs"), Args[0], NULL, NULL, SW_SHOWNORMAL);
		LocalFree(Args);
		return 0;
	}

	DialogoEnsamblador Dialogo;
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    }
    return 0;
}
// -[FIN devildrey33.WinMain]-

