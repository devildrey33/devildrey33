// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para realizar operaciones de la calculadora y mostrarlas
#ifndef OBJETO_MARCADOR
#define OBJETO_MARCADOR

#include "ObjetoControl.h"
#include <vector>

#ifndef MSIMG32_LIB
    #define MSIMG32_LIB
    // La directiva pragma coment no funciona en Dev-C++ y hay que agregar la libreria msimg32.a manualmente
    #pragma comment(lib, "msimg32.lib")		// Libreria del AlphaBlend y GradientFill
#endif


// -[INICIO devildrey33.ObjetoMarcador_TipoDatos]-
// Enumeracion de los tipos de datos para la calculadora
enum ObjetoMarcador_TipoDatos {
  TipoDatos_INDEFINIDO     = -1,
  TipoDatos_Valor          = 0,
  TipoDatos_Suma           = 1,
  TipoDatos_Resta          = 2,
  TipoDatos_Multiplicacion = 3,
  TipoDatos_Division       = 4
};
// -[FIN devildrey33.ObjetoMarcador_TipoDatos]-


// -[INICIO devildrey33.ObjetoMarcador_Datos]-
// Contenedor de una porción de datos de la calculadora
class ObjetoMarcador_Datos {
public: /////////////////////////// Miembros publicos
                                 // -Constructor por defecto
                                 ObjetoMarcador_Datos(void) {
                                     _Tipo = TipoDatos_INDEFINIDO;
                                     _Valor = 0.0f;
                                 };
                                 // -Constructor asignador de datos
                                 ObjetoMarcador_Datos(const ObjetoMarcador_TipoDatos nTipo,
                                                      const double nValor = 0.0f) {
                                     _Tipo  = nTipo;
                                     _Valor = nValor;
                                 };
                                 // -Destructor
                                ~ObjetoMarcador_Datos(void) { };
                                 // -Función que retorna el tipo
 inline ObjetoMarcador_TipoDatos Tipo(void) const { return _Tipo; };
                                 // -Función que retorna el valor
 inline double                   Valor(void) const { return _Valor; };
private : ///////////////////////// Miembros privados
                                 // -Valor
 double                         _Valor;
                                 // -Tipo de dato
 ObjetoMarcador_TipoDatos       _Tipo;
};
// -[FIN devildrey33.ObjetoMarcador_Datos]-




// -[INICIO devildrey33.ObjetoMarcador]-
// Clase que hereda ObjetoControl y se convierte en el marcador para nuestra calculadora
class ObjetoMarcador : public ObjetoControl {
 public : /////////////////////////////// Miembros publicos
					                   // -Constructor
                                       ObjetoMarcador(void);
					                   // -Destructor
				                      ~ObjetoMarcador(void);
			                           // -Función para crear el control
  HWND                                 CrearMarcador( HWND hWndParent, const int cX, const int cY,
                                                      const int cAncho, const int cAlto,
                                                      COLORREF nColor_Texto = RGB(255, 255, 255),
                                                      COLORREF nColor_DegradadoSuperior = RGB(180, 180, 180),
                                                      COLORREF nColor_DegradadoInferior = RGB( 60,  60,  60),
                                                      COLORREF nColor_BordeExterno = RGB(128, 128, 128),
                                                      COLORREF nColor_BordeInterno = RGB(190, 190, 190) );

  /////////////////////////////////////// Funciones de pintado
                                       // -Función que enlaza con el evento WM_PAINT
  LRESULT                              Evento_Pintar(HDC hDC, PAINTSTRUCT &PS);
                                       // -Función que pinta todo el control
  void                                 Pintar(HDC hDC);
                                       // -Función que repinta el control si es necesario
  void                                 Repintar(void);

  /////////////////////////////////////// Funciones para los datos
                                       // -Función que agrega un numero al valor actual
  void                                 AgregarNumero(const TCHAR Numero);
                                       // -Función que agrega una coma decimal al valor actual
  void                                 AgregarPunto(void);
                                       // -Función que borra el último caracter introducido
  void                                 BorrarCaracter(void);
                                       // -Función que valida el valor actual, y agrega una operacion a la lista
  void                                 AgregarOperacion(const ObjetoMarcador_TipoDatos nTipo);
                                       // -Función que imprime el resultado y borra la lista
  void                                 Resultado(void);
                                       // -Función que borra la lista de operaciones y el valor actual
  void                                 CE(void);

  /////////////////////////////////////// Aspecto grafico
                                       // -Macro que crea funciones para asignar y obtener el COLORREF _Color_Texto
                                       AGREGAR_COLOR(Color_Texto);
                                       // -Macro que crea funciones para asignar y obtener el COLORREF _Color_DegradadoSuperior
                                       AGREGAR_COLOR(Color_DegradadoSuperior);
                                       // -Macro que crea funciones para asignar y obtener el COLORREF _Color_DegradadoInferior
                                       AGREGAR_COLOR(Color_DegradadoInferior);
                                       // -Macro que crea funciones para asignar y obtener el COLORREF _Color_BordeExterno
                                       AGREGAR_COLOR(Color_BordeExterno);
                                       // -Macro que crea funciones para asignar y obtener el COLORREF _Color_BordeInterno
                                       AGREGAR_COLOR(Color_BordeInterno);
                                       // -Macro que crea la función Fuente_Desactivada, y la variable HFONT _Fuente_Operaciones
                                       AGREGAR_FUENTE(Fuente_Operaciones);
                                       // -Macro que crea la función Fuente_Desactivada, y la variable HFONT _Fuente_Resultado
                                       AGREGAR_FUENTE(Fuente_Resultado);

 protected : //////////////////////////// Miembros privados
                                       // -Función para quitar ceros que sobren a la izquierda
  size_t                              _FormatearStr(TCHAR *String);
                                       // -Función que borra todos los datos de la lista
  void                                _BorrarLista(void);
                                       // -Vector que contiene los valores y operaciones
  std::vector<ObjetoMarcador_Datos *> _Lista;
                                       // -Valor que indica si se ha introducido la coma decimal en el valor actual
  bool                                _Punto;
                                       // -Valor actual en string
  TCHAR                               _ValorActual[256];
                                       // -Tamaño del valor actual en caracteres.
  size_t                              _TamValorActual;
};
// -[FIN devildrey33.ObjetoMarcador]-

#endif
