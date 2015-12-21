// www.devildrey33.es
// Ejemplo 3.10 - Terminando el  Instalador
// En este ejemplo podremos ver la ventana que se mostrara para instalar

//#include "resource.h"
#include "VentanaInstalador.h"
#include <Shlobj.h> // Cabecera para IsUserAnAdmin

// -[INICIO devildrey33.WinMain]-
// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, 
                     HINSTANCE hPrevInstance, 
                     LPSTR lpCmdLine, 
                     int nCmdShow) {
	// Comprobamos si el usuario es administrador
	// NO ES ADMINISTRADOR
	if (IsUserAnAdmin() == FALSE) { 
		int		TotalArgs	= 0;
		TCHAR **Args		= CommandLineToArgvW(GetCommandLine(), &TotalArgs);
		// Ejecutamos el instalador de forma que pida privilegios de administrador
		ShellExecute(NULL, TEXT("RunAs"), Args[0], NULL, NULL, SW_SHOWNORMAL);
		LocalFree(Args);
	}
	// ES ADMINISTRADOR
	else {							
		// El programa se ha arrancado con privilegios de administrador,
		// mostramos la ventana de instalación
		VentanaInstalador Ventana;
		MSG Mensaje;
		while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {
			TranslateMessage(&Mensaje);                     
			DispatchMessage(&Mensaje); 
		}
	}
    return 0;
}
// -[FIN devildrey33.WinMain]-

