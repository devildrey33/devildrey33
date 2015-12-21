// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un treeview de windows
// MSDN TreeView reference : http://msdn.microsoft.com/en-us/library/bb759988(v=VS.85).aspx
#ifndef OBJETO_TREEVIEW
#define OBJETO_TREEVIEW

#include "ObjetoControlEstandar.h"


// -[INICIO devildrey33.ObjetoTreeView]-
// Clase que hereda ObjetoControlEstandar y se centra en las funciones del TreeView
class ObjetoTreeView : public ObjetoControlEstandar { 
 public : //////// Miembros publicos
                // -Constructor
                ObjetoTreeView(void);
                // -Destructor
               ~ObjetoTreeView(void);
                // -Función para crear el TreeVuew
  void          CrearTreeView( HWND hWndParent, const UINT nEstilos, const UINT nID, 
                               const int cX, const int cY, 
                               const int cAncho, const int cAlto );
                // -Función para agregar nodos
  HTREEITEM     AgregarNodo(HTREEITEM nPadre, TCHAR *nTexto, const UINT nIDIcono);
                // -Función para borrar un nodo y sus hijos
  void          BorrarNodo(HTREEITEM bNodo);
                // -Función para borrar todos los nodos
  void          BorrarTodo(void);
                // -Función que retorna el total de nodos del treeview
  UINT          TotalNodos(void);
                // -Función para obtener el primer nodo root
  HTREEITEM     NodoRoot(void);
                // -Función para obtener el nodo marcado
  HTREEITEM     NodoMarcado(void);
                // -Función para obtener el nodo padre del nodo especificado
  HTREEITEM     NodoPadre(HTREEITEM pNodo);
                // -Función para obtener el primer nodo hijo del nodo especificado
  HTREEITEM     NodoHijo(HTREEITEM pNodo);
                // -Función para obtener el anterior nodo del nodo especificado
  HTREEITEM     NodoAnterior(HTREEITEM pNodo);
                // -Función para obtener el siguiente nodo del nodo especificado
  HTREEITEM     NodoSiguiente(HTREEITEM pNodo);
                // -Función para obtener el texto de un nodo
  void          ObtenerTexto(HTREEITEM pNodo, TCHAR *nTexto, UINT nTamTexto);
                // -Función para asignar el texto de un nodo
  void          AsignarTexto(HTREEITEM pNodo, TCHAR *nTexto);
                // -Función para expandir / contraer nodos
  void          ExpandirNodo(HTREEITEM pNodo, const bool nExpandir = true);
 protected : ///// Miembros protegidos
  HFONT        _Fuente;
};
// -[FIN devildrey33.ObjetoTreeView]-

#endif