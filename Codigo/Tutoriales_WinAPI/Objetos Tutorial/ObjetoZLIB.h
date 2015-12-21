// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener las funciones necesarias relacionadas con archivos para el instalador
#ifndef OBJETO_ZLIB
#define OBJETO_ZLIB

#include "ObjetoArchivo.h"


// -[INICIO devildrey33.ContenedorBinario]-
// Clase destinada a contener datos comprimidos
// Se ha hecho de forma que se puede agregar un archivo por partes de tamaño variable.
class ContenedorBinario {
 public : //////// Miembros publicos
                // -Constructor
                ContenedorBinario(void) {
                    _Longitud = 0; 
                    _Datos = NULL; 
                };
                // -Destructor
               ~ContenedorBinario(void) { 
                   if (_Datos != NULL) delete [] _Datos; 
                };
                // -Función para agregar una parte
   void         AgregarParte(const char *NuevaParte, const size_t LongitudParte) {
                    char *NuevosDatos = new char [_Longitud + LongitudParte];
                    if (_Datos != NULL) {
                        CopyMemory(NuevosDatos, _Datos, _Longitud);
                        delete [] _Datos;
                    }
                    CopyMemory(&NuevosDatos[_Longitud], NuevaParte, LongitudParte);
                    _Datos = NuevosDatos;
                    _Longitud += LongitudParte;
                };
                // -Operador que retorna una referencia a los datos 
                //  de esta clase en la posición especificada
   char	       *operator[] (const UINT nPos) {
                    return &_Datos[nPos];
                };
                // -Operador que retorna la posicion de inicio de 
                //  los datos que contiene esta clase
   char	       *operator() (void) const {
                    return _Datos;
                };
                // -Función que retorna el tamaño total de los datos de esta clase
   UINT         Longitud(void) const {
                    return _Longitud;
                };
                // -Función que borra los datos de esta clase
   void         Borrar(void) {
                    _Longitud = 0;
                    if (_Datos != NULL) delete [] _Datos;
                    _Datos = NULL;
                };
 protected : ///// Miembros protegidos
                // -Miembro que contiene los datos agregados
   char       *_Datos;
                // -Miembro que contiene el tamaño de la variable _Datos
   UINT        _Longitud;
};
// -[FIN devildrey33.ContenedorBinario]-


// -[INICIO devildrey33.ObjetoZLIB]-
// Clase que contiene las funciones necesarias para ensamblar el instalador, y para instalarse
class ObjetoZLIB  { 
 public : //////////////////// Miembros publicos
							// -Constructor
                            ObjetoZLIB(void);
							// -Destructor
						   ~ObjetoZLIB(void);
                            // -Función que comprime un archivo dentro de una clase ContenedorBinario
    const BOOL              Comprimir(const TCHAR *nPathOrigen, ContenedorBinario &Datos);
                            // -Función que descomprime un ContenedorBinario y lo guarda en nPathDestino como un archivo
    const BOOL              Descomprimir(ContenedorBinario &Datos, const TCHAR *nPathDestino);
};
// -[FIN devildrey33.ObjetoZLIB]-

#endif