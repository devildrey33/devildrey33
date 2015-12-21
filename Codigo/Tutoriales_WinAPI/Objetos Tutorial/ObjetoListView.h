// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un listview de windows
// MSDN ListView reference : http://msdn.microsoft.com/en-us/library/aa922166.aspx
#ifndef OBJETO_LISTVIEW
#define OBJETO_LISTVIEW

#include "ObjetoControlEstandar.h"


// -[INICIO devildrey33.ObjetoListView]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del ListView
class ObjetoListView : public ObjetoControlEstandar { 
 public : //////// Miembros publicos
                // -Constructor
                ObjetoListView(void);
                // -Destructor
               ~ObjetoListView(void);
                // -Función para crear el ListView
  void          CrearListView( HWND hWndParent, const UINT nEstilos, const UINT nID, 
                               const int cX, const int cY, 
                               const int cAncho, const int cAlto );
                // Función que agrega un item al final de la lista
  int           AgregarItem(const int nIcono, TCHAR *nTexto, ...);
                // Función que agrega una columna
  void          AgregarColumna(TCHAR *nTexto, const int nAncho);
                // Función para obtener el texto de un Item/SubItem
  void          ObtenerTexto( const UINT PosItem, const UINT PosSubItem, 
                              TCHAR *nTxt, const UINT TamTxt);
                // Función que borra el item especificado en la posición
  void          BorrarItem(const UINT nPos);
                // Función que borra todos los items
  void          BorrarItems(void);
                // Función que devuelve si el item de la posición especificada 
                // está seleccionado
  BOOL          Seleccionado(const UINT nPos);
                // Función que devuelve el total de items dentro del listivew
  inline int    TotalItems(void) const { return ListView_GetItemCount(_hWnd); };
                // Función que devuelve el total de columnas dentro del listivew
  inline int    TotalColumnas(void) const { return _Columnas; }
                // Función que devuelve la posición del item marcado con el foco. 
                // Devuelve -1 si no hay item.
  int           ItemMarcado(void) const;
 protected : ///// Miembros protegidos
                // Fuente del listview (para creaciones dinamicas 'CrearListView')
  HFONT        _Fuente;
                // Total de columnas
  int          _Columnas;
};
// -[FIN devildrey33.ObjetoListView]-

#endif