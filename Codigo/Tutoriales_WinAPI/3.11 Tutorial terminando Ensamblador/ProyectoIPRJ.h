// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se usara para administrar los proyectos IPRJ
#ifndef PROYECTOIPRJ
#define PROYECTOIPRJ

#include "..\Objetos Tutorial\ObjetoButton.h"
#include "..\Objetos Tutorial\ObjetoProgressBar.h"
#include "..\Objetos Tutorial\ObjetoListView.h"
#include "..\Objetos Tutorial\ObjetoTreeView.h"
#include "..\Objetos Tutorial\ObjetoEditBox.h"
#include "..\Objetos Tutorial\ObjetoComboBox.h"

//#include <Commctrl.h>

class ProyectoIPRJ {
 public :
  						ProyectoIPRJ( ObjetoListView &Lista, ObjetoTreeView &Arbol, ObjetoEditBox &Path_Destino, 
						              ObjetoEditBox &Path_Instalar, ObjetoComboBox &Path_Defecto, ObjetoProgressBar &Barra_Total);
                       ~ProyectoIPRJ(void);
   void					Nuevo(const TCHAR *nNombre);
   void                 Abrir(const TCHAR *nPath);
   BOOL                 Guardar(const TCHAR *nPath);
   inline TCHAR        *Nombre(void) { return _Nombre; };
                        
						// Función que mira los directorios de la ruta para incluirlos en el arbol
   void                 AnalizarRuta(const TCHAR *nPath);
 protected :
   TCHAR              *_Nombre;
   ObjetoListView     &_Lista;
   ObjetoTreeView     &_Arbol;
   ObjetoEditBox      &_Path_Destino;
   ObjetoEditBox      &_Path_Instalar;
   ObjetoComboBox     &_Path_Defecto;
   ObjetoProgressBar  &_Barra_Total;
};


#endif