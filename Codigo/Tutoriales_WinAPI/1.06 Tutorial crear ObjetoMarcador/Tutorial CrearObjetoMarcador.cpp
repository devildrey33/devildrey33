// www.devildrey33.es
// Ejemplo 1.6 - Creación de nuestro objeto marcador
// Este ejemplo crea una ventana con un objeto marcador que responde al teclado.

#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoMarcador.h"

// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> MiVentana
class MiVentana : public ObjetoVentana {
 public :
                      MiVentana(void) { 
                          Crear();
				      };
                     ~MiVentana(void) {
					  };
                      // Re-emplazamos el evento cerrar y añadimos la API PostQuitMessage
                      // De esta forma cuando se cierre la ventana se cerrara la aplicación
  LRESULT             Evento_Cerrar(void) { 		
                          PostQuitMessage(0);
                          return ObjetoVentana::Evento_Cerrar();
                      };
                      // Re-emplazamos el evento Teclado_Caracter para responder al teclado con nuestro marcador
  LRESULT             Evento_Teclado_Caracter(const UINT Caracter, const UINT Repeticion, const UINT Params) {
                            switch (Caracter) {
                                case TEXT('0') : case TEXT('1') : case TEXT('2') : case TEXT('3') : case TEXT('4') :
                                case TEXT('5') : case TEXT('6') : case TEXT('7') : case TEXT('8') : case TEXT('9') :
                                    Marcador.AgregarNumero(static_cast<TCHAR>(Caracter));
                                    return 0;
                                case TEXT('.') : case TEXT(',') :
                                    Marcador.AgregarPunto();
                                    return 0;
                                case TEXT('+') :
                                    Marcador.AgregarOperacion(TipoDatos_Suma);
                                    return 0;
                                case TEXT('-') :
                                    Marcador.AgregarOperacion(TipoDatos_Resta);
                                    return 0;
                                case TEXT('*') :
                                    Marcador.AgregarOperacion(TipoDatos_Multiplicacion);
                                    return 0;
                                case TEXT('/') :
                                    Marcador.AgregarOperacion(TipoDatos_Division);
                                    return 0;
                                case TEXT('=') :
                                    Marcador.Resultado();
                                    return 0;
                                case VK_BACK :
                                    Marcador.BorrarCaracter();
                                    return 0;
                            }
                            return ObjetoVentana::Evento_Teclado_Caracter(Caracter, Repeticion, Params);
                      };
 protected:
  void                Crear(void) {
                          CrearVentana( NULL, TEXT("MiVentana"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                                        TEXT("Ejemplo tutorial 1.6"), 100, 100, 400, 300, NULL );
                          Marcador.CrearMarcador(_hWnd, 10, 10, 360, 50);
					  };

  ObjetoMarcador      Marcador;

};



// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Creamos la clase MiVentana que en el contructor crea la ventana.
	MiVentana Ventana;
	// Bucle principal para obtener eventos de la ventana
    MSG Mensaje;
    while (TRUE == GetMessage(&Mensaje, NULL, 0, 0)) {    
        TranslateMessage(&Mensaje);                     
        DispatchMessage(&Mensaje);
    } 
    return 0;
}


