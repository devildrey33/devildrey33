// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado para poder leer y escribir archivos del disco duro con el API de windows
#ifndef OBJETO_ARCHIVO
#define OBJETO_ARCHIVO

#include "Plataforma.h"


// -[INICIO devildrey33.ObjetoArchivo]-
// Clase que encapsula las funciones necesarias para abrir-cerrar y leer-escribir archivos
class ObjetoArchivo {
 public : //////////////////////////// Miembros publicos
							        // - Constructor
                                    ObjetoArchivo(void);
							        // - Destructor
						           ~ObjetoArchivo(void);

                                    // - Función para abrir un archivo (lectura / escritura)
  BOOL                              AbrirArchivo(const TCHAR *Path, const bool Abrir_si_no_existe = false);
                                    // - Función para abrir un archivo
  BOOL                              AbrirArchivoLectura(const TCHAR *Path);
                                    // - Función para abrir un archivo
  BOOL                              AbrirArchivoEscritura(const TCHAR *Path, const bool Abrir_si_no_existe = true);
                                    // - Función para cerrar el archivo
  BOOL    		                    CerrarArchivo(void);

                                    // - Función para leer datos del archivo
  BOOL                              Leer(LPVOID, const size_t NumBytes);
                                    // - Función para guardar datos en el archivo
  BOOL	                            Guardar(LPCVOID Buffer, const size_t NumBytes);
                                    // - Función que lee un string previamente guardado con GuardarString
                                    //   Hay que pasarle un puntero NULL en el que se creara el string.
                                    //   Una vez no necesites mas el string deberas borrarlo con delete.
  BOOL                              LeerString(PTCHAR &nStr);
                                    // - Función que guarda un string terminado con '\0'
  BOOL                              GuardarString(const TCHAR *Str);
                                    // - Función que lee un UINT
  inline BOOL                       LeerUINT(UINT &Valor) {
										return Leer(&Valor, sizeof(UINT));
									};
                                    // - Función que guarda un UINT
  inline BOOL                       GuardarUINT(const UINT Valor) {
                                        return Guardar(&Valor, sizeof(UINT));
                                    };
                                    // - Función que lee un UINT
  inline BOOL                       LeerDWORD(DWORD &Valor) {
										return Leer(&Valor, sizeof(DWORD));
									};
                                    // - Función que guarda un DWORD
  inline BOOL                       GuardarDWORD(const DWORD Valor) {
                                        return Guardar(&Valor, sizeof(DWORD));
                                    };

                                    // - Función para saber si el archivo esta abierto
  bool			                    EstaAbierto(void);
                                    // -Función para obtener la longitud del archivo (limitada a valores de 32 bits)
                                    //  Si el archivo es muy grande puedes usar ValorAlto para almacenar el HIDWORD,
                                    //  el valor de retorno siempre sera el LODWORD
  DWORD                             ObtenerLongitud32(DWORD *ValorAlto = NULL);
                                    // - Función para obtener la longitud del archivo en formato 64 bits
  LARGE_INTEGER                     ObtenerLongitud64(void);

                                    // - Función que nos dice si se ha llegado al final del archivo con la función Leer
  inline bool	    			    FinalDelArchivo(void) const {
										return _FinalDelArchivo;
									}
									// - Función para posicionar el cursor dentro del archivo
  inline ULONG						Posicion(const long Pos, const bool Desde_El_Final = false) {
										if (Desde_El_Final == false)	return SetFilePointer(_Archivo, Pos, NULL, FILE_BEGIN);
										else							return SetFilePointer(_Archivo, Pos, NULL, FILE_END);
									};

 protected : ///////////////////////// Miembros protegidos
					                // - Miembro que contiene la ID del archivo.
  HANDLE                           _Archivo;
                                    // - Miembro que indica si se ha llegado al final del archivo con la función Leer
  bool                             _FinalDelArchivo;
};
// -[FIN devildrey33.ObjetoArchivo]-

#endif
