// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un combobox de windows
// Referencia MSDN ComboBox : http://msdn.microsoft.com/en-us/library/ff485897(v=VS.85).aspx
// Listado : http://msdn.microsoft.com/en-us/library/bb775792(v=VS.85).aspx


#ifndef OBJETO_COMBOBOX
#define OBJETO_COMBOBOX

#include "ObjetoControlEstandar.h"

// -[INICIO devildrey33.ObjetoComboBox]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del combobox
class ObjetoComboBox : public ObjetoControlEstandar { 
 public : //////// Miembros publicos
                // -Constructor
                ObjetoComboBox(void);
                // -Destructor
               ~ObjetoComboBox(void);
                // -Función para crear el ComboBox
  void          CrearComboBox(HWND hWndParent, const UINT nEstilos, const TCHAR *nTexto,
                              const int cX, const int cY, 
                              const int cAncho, const int cAlto, const UINT nID );
                // -Función para agregar un texto a la posición especificada
                //  Si omitimos nPos se agregara al final
  void          InstertarString(const TCHAR *nTxt, const UINT nPos = UINT_MAX);
                // -Función para seleccionar un string de la lista
  void          Seleccion(const UINT nPos);
                // -Función obtener la selección de la lista
  UINT          Seleccion(void);
                // -Función para borrar el texto de la posición especificada
  void          BorrarString(const UINT nPos);
                // -Función que borra todos los strings del ComboBox
  void          BorrarTodo(void);
                // -Función que retorna el total de strings que tiene el ComboBox
  const UINT    TotalStrings(void);
                // -Función para asignar el texto del combobox
  BOOL          AsignarTexto(const TCHAR *nTxt);
                // -Función para obtener el texto del combobox
  UINT          ObtenerTexto(TCHAR *nTxt, const UINT TamTxt);
                // -Función para obtener el texto de una posicion especificada dentro 
                //  del LISTBOX de la COMBOBOX.
                //  Para estar seguros de que la función se ha realizado correctamente 
                //  el resultado devuelto tiene que ser mas grande que cero.
  UINT          ObtenerTextoLista(const UINT Pos, TCHAR *nTxt, const UINT TamTxt);
protected :
  HFONT        _Fuente;
};
// -[FIN devildrey33.ObjetoComboBox]-

#endif