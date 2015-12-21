// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para mostrar un dialogo que pregunta el nombre del proyecto
#ifndef DIALOGO_NUEVO_PROYECTO
#define DIALOGO_NUEVO_PROYECTO

#include "..\Objetos Tutorial\ObjetoDialogo.h"
#include "..\Objetos Tutorial\ObjetoButton.h"
#include "..\Objetos Tutorial\ObjetoEditBox.h"

// -[INICIO devildrey33.DialogoNuevoProyecto]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del listbox
class DialogoNuevoProyecto : protected ObjetoDialogo { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            DialogoNuevoProyecto(void);
							// -Destructor
						   ~DialogoNuevoProyecto(void);
                            // -Función para crear el dialogo para introducir el nombre del nuevo proyecto
						    //  Devuelve el nombre del proyecto o NULL si se ha cancelado.
  const TCHAR              *Mostrar(HWND hWndParent);
							// -Re-emplazamos el evento cerrar y añadimos la API EndDialog
  BOOL						Evento_Cerrar(void) { 		
							    EndDialog(_hWnd, 0);
							    return ObjetoDialogo::Evento_Cerrar();
							};
							// -Función que se llama al crear el dialogo
  BOOL                      Evento_IniciarDialogo(HWND hWndNuevoFoco);
							// -Re-emplazamos el evento commando para obtener que button se ha pulsado
  BOOL                      Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl);
protected :
  ObjetoEditBox             Edit_Nombre;
  ObjetoButton              Boton_Ok;
  ObjetoButton              Boton_Cancelar;
  TCHAR                   *_NombreProyecto;
};
// -[FIN devildrey33.DialogoNuevoProyecto]-

#endif