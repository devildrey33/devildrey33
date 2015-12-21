// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para mostrar un dialogo que pregunta el nombre del proyecto
#ifndef VENTANA_INSTALADOR
#define VENTANA_INSTALADOR

#include "..\Objetos Tutorial\ObjetoArchivo.h"
#include "..\Objetos Tutorial\ObjetoVentana.h"
#include "..\Objetos Tutorial\ObjetoBoton.h"
#include "..\Objetos Tutorial\ObjetoEditBox.h"
#include "..\Objetos Tutorial\ObjetoBarraProgreso.h"

#define ID_BOTON_SALIR    100
#define ID_BOTON_INSTALAR 101
#define ID_BOTON_BUSCAR   102
#define ID_BARRA          103
#define ID_PATH           104

// -[INICIO devildrey33.VentanaInstalador]-
// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoVentana -> VentanaInstalador
class VentanaInstalador : public ObjetoVentana {
 public : ///////////////// Miembros publicos
	                     // - Constructor
                         VentanaInstalador(void);
 protected : ////////////// Miembros portegidos
	                     // - Función que crea la ventana del instalador
  void                   Crear(void);
                         // - Función que determina si el instalador está lleno o vacio, y en el caso de estar lleno
                         //   lee los valores de la instalación y los asigna a sus correspondientes controles.
  BOOL                   LeerDatos(void);
                         // - Función que enlaza con el mensaje WM_CLOSE
  LRESULT                Evento_Cerrar(void);
                         // - Función que enlaza con el mensaje WM_PAINT
  LRESULT                Evento_Pintar(HDC hDC, PAINTSTRUCT &PS);
						 // - Función que recibe cuando se hace click en un ObjetoBoton
  LRESULT                Evento_ObjetoBoton_Click(ObjetoBoton *BotonPresionado, const UINT nBoton);
					     // - Función para mostrar al usuario un dialogo para seleccionar un directorio
  void                   SeleccionarDirectorio(void);
                         // - Función que valida los datos y empieza la instalacion
  void                   InstalarContenido(void);
						 // - Barra de progreso
  ObjetoBarraProgreso    Barra;
                         // - EditBox que indica la ruta destino
  ObjetoEditBox          PathDestino;
                         // - Botón para instalar 
  ObjetoBoton            Instalar; 
                         // - Botón para salir
  ObjetoBoton            Salir;
                         // - Botón para buscar el directorio
  ObjetoBoton            BuscarDirectorio;
					     // - Archivo que contiene toda la instalacion
  ObjetoArchivo          InstalarExe;
						 // - Función que comprueba si la ruta especificada es valida
  BOOL                  _PathValido(const TCHAR *nText);
						 // - Función para mostrar el ultimo error con FormatMessage añadiendo un texto personalizado
  void                  _MostrarUltimoError(const TCHAR *Mensaje);
};
// -[FIN devildrey33.VentanaInstalador]-


#endif