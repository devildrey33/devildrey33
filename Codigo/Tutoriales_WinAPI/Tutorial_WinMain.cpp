// Archivo de muestra para www.devildrey33.es
// Este archivo se ha creado para mostrar partes de código en la web http://www.devildrey33.es/Tutorial_WinAPI.php
// No se puede compilar, y aunque lo consigas no hace nada. La razon es que un programa no puede tener 3 funciones WinMain.


// -[INICIO devildrey33.WinMain]-
int WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow){
	// INICIO DE NUESTRA APLICACIÓN
    return 0;
}
// -[FIN devildrey33.WinMain]-


// -[INICIO devildrey33.Bucle1]-
int WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
	return 0;
}
// -[FIN devildrey33.Bucle1]-


// -[INICIO devildrey33.Bucle2]-
int WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    MSG  Mensaje;
    bool FinApp = false;
    while (FinApp == false) {
        NuestrasOperaciones();
        if (PeekMessage(&Mensaje, NULL, 0, 0, PM_REMOVE)) {
            if (Mensaje.message == WM_QUIT) FinApp = true;
            TranslateMessage(&Mensaje);
            DispatchMessage(&Mensaje);
        }
    }
	return 0;
}
// -[FIN devildrey33.Bucle2]-
