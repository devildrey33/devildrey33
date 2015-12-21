// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase contiene el dialogo principal de la aplicacion Ensamblador
#ifndef DIALOGO_ENSAMBLADOR
#define DIALOGO_ENSAMBLADOR

#include "..\Objetos Tutorial\ObjetoDialogo.h"
#include "..\Objetos Tutorial\ObjetoDlgAbrir.h"
#include "..\Objetos Tutorial\ObjetoDlgGuardar.h"
#include "..\Objetos Tutorial\ObjetoDlgDirectorios.h"
#include "..\Objetos Tutorial\ObjetoArchivo.h"
#include "DialogoNuevoProyecto.h"
#include "ProyectoIPRJ.h"


// -[INICIO devildrey33.DialogoEnsamblador]-
// Objeto final : ObjetoHWND -> PlantillaEventos -> ObjetoDialogo -> DialogoEnsamblador
class DialogoEnsamblador : public ObjetoDialogo {
 public : //////////////////// Miembros publicos
							// Constructor
							DialogoEnsamblador(void);						
							// Función que recibe el mensjae WM_CLOSE
  BOOL                      Evento_Cerrar(void);
							// Función que recibe cuando se pulsa un Button de windows
  BOOL                      Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl);
							// Función que crea el dialogo para el ensamblador
  void                      Crear(void);
                            // Función para mostrar un dialogo nuevo poryecto
  void                      NuevoProyecto(void);
                            // Función para mostrar un dialogo abrir proyecto
  void                      CargarProyecto(void);
                            // Función para mostrar un dialogo guardar proyecto
  void                      GuardarProyecto(void);
                            // Función para mostrar un dialogo de seleccion de archivos
  void                      AgregarArchivos(void);
                            // Función para mostrar un dialogo de seleccion de directorios
  void                      AgregarDirectorio(void);
                            // Función que borra los archivos seleccionados de la lista
  void                      BorrarSeleccionado(void);
							// Función que muestra un dialogo para buscar el Instalar.exe
  void                      BuscarEXE(void);
							// Función que crea el instalar.exe con los archivos de la lista
  void                      CrearInstalador(void);
 protected : ///////////////// Miembros protegidos
							// Función que comprueba si la ruta del path relativa tiene caracteres invalidos
							// Los caracteres / : * ? " < > | no son válidos para crear archivos y directorios
  BOOL                     _PathValido(const TCHAR *nText);
	                        // Función para activar / desactivar los controles del dialogo
  void                     _ActivarControles(const bool nActivar);
							// Función que nos dice si el path esta ya en la lista
  BOOL                     _BuscarPathAbsoluto(const TCHAR *nPath);
							// Función para agregar un directorio de forma recursiva
  UINT                     _AgregarArchivosRecursivo(const TCHAR *nPath, const UINT TamPathInicial = 0);
                            // Función que recorre todos los nodos para construir la jerarquia de directorios
  UINT                     _ArbolRecursivo( ObjetoArchivo &InstalarExe, HTREEITEM nNodo = NULL, 
	                                        TCHAR *PathActual = TEXT(""), const bool Root = true );
							// Función para mostrar el ultimo error con FormatMessage añadiendo un texto personalizado
  void                     _MostrarUltimoError(const TCHAR *Mensaje = NULL);
                            // Función para imprimir texto en la ventana Resultados
  void                     _ImprimirDebug(const TCHAR *Txt, ...);
							// Botones
  ObjetoButton              Boton_NuevoProyecto;
  ObjetoButton              Boton_AbrirProyecto;
  ObjetoButton              Boton_GuardarProyecto;
  ObjetoButton              Boton_AgregarArchivos;
  ObjetoButton              Boton_AgregarDirectorios;
  ObjetoButton              Boton_BorrarSeleccionado;
  ObjetoButton              Boton_CrearInstalador;
  ObjetoButton              Boton_Buscar;
							// Barra de progreso
  ObjetoProgressBar         Barra_Total;
							// Lista de archivos
  ObjetoListView			Lista;
							// Arbol de directorios a crear
  ObjetoTreeView			Arbol;
							// EditBox que indican los paths
  ObjetoEditBox             Path_Destino;
  ObjetoEditBox             Path_Instalar;
						    // ComboBox que indica el path por defecto
  ObjetoComboBox		    Path_Defecto;

  ProyectoIPRJ              IPRJ;
};
// -[FIN devildrey33.DialogoEnsamblador]-

#endif