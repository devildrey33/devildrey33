// www.devildrey33.es
// Ejemplo 2.5 - Niveles Snake.
// En este ejemplo crearemos archivos binarios que tendran dentro los datos de un nivel del Snake

#include "..\Objetos Tutorial\ObjetoSnake_Nivel.h"


// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    ObjetoSnake_Nivel Nivel;
    BOOL Carga = Nivel.CargarNivel(1);
    return 0;
}


