// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un imagelist de windows
// MSDN ImageList reference : http://msdn.microsoft.com/en-us/library/ff485946(v=VS.85).aspx
#ifndef OBJETO_IMAGELIST
#define OBJETO_IMAGELIST

#include "Plataforma.h"
#include "Commctrl.h"

// -[INICIO devildrey33.ObjetoImageList]-
// Clase que encapsula las funciones minimas de un ImageList de windows
class ObjetoImageList { 
 public : //////////////////// Miembros publicos
							// -Constructor
							ObjetoImageList(void) { 
								_ImageList = NULL; 
							};
							// -Destructor
						   ~ObjetoImageList(void) { 
							   if (_ImageList != NULL) {
								   ImageList_Destroy(_ImgList); 
							   }
						    };
                            // -Función para crear el ImageList
  void                      CrearImageList(const UINT TamX, const UINT TamY) { 
								_ImageList = ImageList_Create(TamX, TamY, ILC_COLORDDB | ILC_MASK, 1, 0);
  						    };
                            // -Función para agregar un icono de los recursos.
  int                       AgregarIcono(UINT nIDIcono) {
								int cX = 0, cY = 0;
								ImageList_GetIconSize(_ImageList, cX, cY);
								hIcon = (HICON) LoadImage(GetModuleHandle(NULL), MAKEINTRESOURCE(cID), IMAGE_ICON, cX, cY, LR_DEFAULTCOLOR);
								return ImageList_GetImageCount(_ImageList);
							};
							// -Función que devuelve el identificador del ImageList
  inline HIMAGELIST        &operator () (void) {
								return *_ImageList;
							};
 protected : ///////////////// Miembros protegidos
  HIMAGELIST               _ImageList;
};
// -[FIN devildrey33.ObjetoImageList]-

#endif