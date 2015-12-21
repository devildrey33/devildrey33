// www.devildrey33.es
// Ejemplo 1.7 - Terminando la calculadora
// Este ejemplo es la calculadora terminada

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoMarcador.h"
#include "..\Objetos Tutorial\ObjetoBoton.h"

#define ID_BOTON0               100
#define ID_BOTON1               101
#define ID_BOTON2               102
#define ID_BOTON3               103
#define ID_BOTON4               104
#define ID_BOTON5               105
#define ID_BOTON6               106
#define ID_BOTON7               107
#define ID_BOTON8               108
#define ID_BOTON9               109
#define ID_BOTON_PUNTO          110
#define ID_BOTON_SUMA           111
#define ID_BOTON_RESTA          112
#define ID_BOTON_MULTIPLICACION 113
#define ID_BOTON_DIVISION       114
#define ID_BOTON_RESULTADO      115
#define ID_BOTON_BORRAR         116
#define ID_BOTON_CE             117

// -[INICIO devildrey33.VentanaCalculadora]-
// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> VentanaCalculadora
class VentanaCalculadora : public ObjetoVentana {
 public : //////////// Miembros publicos
                    // -Constructor
                    VentanaCalculadora(void) { };
                    // -Destructor
                   ~VentanaCalculadora(void) { };

  //////////////////// Eventos
                    // -Reemplazamos el evento cerrar y añadimos la API PostQuitMessage
                    //  De esta forma se cerrara la aplicación al cerrar la ventana
  LRESULT           Evento_Cerrar(void);
                    // -Re-emplazamos el evento ObjetoBoton_Click para enlazar los  
                    //  botones con el marcador
  LRESULT           Evento_ObjetoBoton_Click( ObjetoBoton *BotonPresionado, 
                                              const UINT Boton);
                    // -Re-emplazamos el evento Teclado_TeclaPresionada para enlazar  
                    //  los botones a las teclas correspondientes
  LRESULT           Evento_Teclado_Caracter( const UINT Caracter, const UINT Repeticion,
                                             const UINT Params);
                    // -Función que crea la calculadora
  void              Crear(void);

 protected : ///////// Miembros protegidos
                    // -Marcador de la calculadora y centro de operaciones
  ObjetoMarcador    Marcador;
                    // -Botones para cada función
  ObjetoBoton       Boton[10];
  ObjetoBoton       Boton_Punto;
  ObjetoBoton       Boton_Suma;
  ObjetoBoton       Boton_Resta;
  ObjetoBoton       Boton_Multiplicacion;
  ObjetoBoton       Boton_Division;
  ObjetoBoton       Boton_Resultado;
  ObjetoBoton       Boton_CE;
  ObjetoBoton       Boton_Borrar;
};
// -[FIN devildrey33.VentanaCalculadora]-


// Función que crea la ventana y los controles de la calculadora
void VentanaCalculadora::Crear(void) {
    CrearVentana( NULL, TEXT("VentanaCalculadora"), WS_OVERLAPPEDWINDOW | WS_VISIBLE,
                  TEXT("Ejemplo tutorial 1.7"), 100, 100, 225, 265, NULL );
    Marcador.CrearMarcador(_hWnd, 10, 10, 190, 50);
    Boton[7].CrearBoton(_hWnd, TEXT("7"), 10, 70, 30, 30, ID_BOTON7);
    Boton[8].CrearBoton(_hWnd, TEXT("8"), 50, 70, 30, 30, ID_BOTON8);
    Boton[9].CrearBoton(_hWnd, TEXT("9"), 90, 70, 30, 30, ID_BOTON9);
    Boton[4].CrearBoton(_hWnd, TEXT("4"), 10, 110, 30, 30, ID_BOTON4);
    Boton[5].CrearBoton(_hWnd, TEXT("5"), 50, 110, 30, 30, ID_BOTON5);
    Boton[6].CrearBoton(_hWnd, TEXT("6"), 90, 110, 30, 30, ID_BOTON6);
    Boton[1].CrearBoton(_hWnd, TEXT("1"), 10, 150, 30, 30, ID_BOTON1);
    Boton[2].CrearBoton(_hWnd, TEXT("2"), 50, 150, 30, 30, ID_BOTON2);
    Boton[3].CrearBoton(_hWnd, TEXT("3"), 90, 150, 30, 30, ID_BOTON3);
    Boton[0].CrearBoton(_hWnd, TEXT("0"), 10, 190, 70, 30, ID_BOTON0);
    Boton_Punto.CrearBoton(_hWnd, TEXT("."), 90, 190, 30, 30, ID_BOTON_PUNTO);
    Boton_Suma.CrearBoton(_hWnd, TEXT("+"), 130, 70, 30, 30, ID_BOTON_SUMA);
    Boton_Resta.CrearBoton(_hWnd, TEXT("-"), 130, 110, 30, 30, ID_BOTON_RESTA);
    Boton_Multiplicacion.CrearBoton(_hWnd, TEXT("X"), 130, 150, 30, 30, ID_BOTON_MULTIPLICACION);
    Boton_Division.CrearBoton(_hWnd, TEXT("/"), 130, 190, 30, 30, ID_BOTON_DIVISION);
    Boton_CE.CrearBoton(_hWnd, TEXT("CE"), 170, 70, 30, 30, ID_BOTON_CE);
    Boton_Borrar.CrearBoton(_hWnd, TEXT("<<"), 170, 110, 30, 30, ID_BOTON_BORRAR);
    Boton_Resultado.CrearBoton(_hWnd, TEXT("="), 170, 150, 30, 70, ID_BOTON_RESULTADO);
}


// Función que enlaza con el mensaje WM_CLOSE
LRESULT VentanaCalculadora::Evento_Cerrar(void) {
    PostQuitMessage(0);
    return ObjetoVentana::Evento_Cerrar();
}


// -[INICIO devildrey33.Evento_ObjetoBoton_Click]-
// Función que enlaza con nuestro mensaje WM_BOTON_CLICK
LRESULT VentanaCalculadora::Evento_ObjetoBoton_Click(ObjetoBoton *BotonPresionado, const UINT Boton) {
    const TCHAR *TextoBoton = NULL;
    switch (BotonPresionado->ID()) {
      case ID_BOTON0 : case ID_BOTON1 : case ID_BOTON2 : case ID_BOTON3 : case ID_BOTON4 :
      case ID_BOTON5 : case ID_BOTON6 : case ID_BOTON7 : case ID_BOTON8 : case ID_BOTON9 :
          TextoBoton = BotonPresionado->Texto();
          Marcador.AgregarNumero(TextoBoton[0]);
          break;
      case ID_BOTON_SUMA           : Marcador.AgregarOperacion(TipoDatos_Suma);           break;
      case ID_BOTON_RESTA          : Marcador.AgregarOperacion(TipoDatos_Resta);          break;
      case ID_BOTON_MULTIPLICACION : Marcador.AgregarOperacion(TipoDatos_Multiplicacion); break;
      case ID_BOTON_DIVISION       : Marcador.AgregarOperacion(TipoDatos_Division);       break;
      case ID_BOTON_RESULTADO      : Marcador.Resultado();                                break;
      case ID_BOTON_BORRAR         : Marcador.BorrarCaracter();                           break;
      case ID_BOTON_CE             : Marcador.CE();                                       break;
    }
    return 0;
}
// -[FIN devildrey33.Evento_ObjetoBoton_Click]-


// -[INICIO devildrey33.Evento_Teclado_Caracter]-
// Función que enlaza con el mensaje WM_CHAR
LRESULT VentanaCalculadora::Evento_Teclado_Caracter(const UINT Caracter, const UINT Repeticion, const UINT Params) {
    UINT iBoton = 0;
    switch (Caracter) {
      case TEXT('0') : case TEXT('1') : case TEXT('2') : case TEXT('3') : case TEXT('4') :
      case TEXT('5') : case TEXT('6') : case TEXT('7') : case TEXT('8') : case TEXT('9') :
          iBoton = Caracter - TEXT('0');
          SendMessage(Boton[iBoton].hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton[iBoton].hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
// -[FIN devildrey33.Evento_Teclado_Caracter]-
      case TEXT('.') : case TEXT(',') :
          SendMessage(Boton_Punto.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Punto.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case TEXT('+') :
          SendMessage(Boton_Suma.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Suma.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case TEXT('-') :
          SendMessage(Boton_Resta.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Resta.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case TEXT('*') :
          SendMessage(Boton_Multiplicacion.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Multiplicacion.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case TEXT('/') :
          SendMessage(Boton_Division.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Division.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case TEXT('=') :
          SendMessage(Boton_Resultado.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Resultado.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case VK_BACK :
          SendMessage(Boton_Borrar.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_Borrar.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
      case VK_ESCAPE :
          SendMessage(Boton_CE.hWnd(), WM_LBUTTONDOWN, MAKELPARAM(5, 5), 0);
          Sleep(50);
          SendMessage(Boton_CE.hWnd(), WM_LBUTTONUP, MAKELPARAM(5, 5), 0);
          return 0;
    }
    return ObjetoVentana::Evento_Teclado_TeclaPresionada(Caracter, Repeticion, Params);
}






////////////////////////////////////////////
// WinMain
////////////////////////////////////////////
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Creamos la clase VentanaCalculadora.
	VentanaCalculadora Ventana;
    Ventana.Crear();
	// Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {
        TranslateMessage(&Mensaje);
        DispatchMessage(&Mensaje);
    }
    return 0;
}


