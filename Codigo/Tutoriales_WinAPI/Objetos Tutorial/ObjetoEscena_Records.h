// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado especificamente para contener un mensaje del Snake dentro de un ObjetoEscena

#ifndef OBJETO_ESCENA_RECORDS
#define OBJETO_ESCENA_RECORDS

#include "ObjetoEscena_VentanaTranslucida.h"
#include <vector>

// -[INICIO devildrey33.Record_Snake]-
// Clase que contiene los datos de una puntuación del juego
class Record_Snake {
 public: // Miembros publicos
         // -Constructor
         Record_Snake(void) { 
            Nombre = NULL; 
            TamNombre = 0; 
         };
         // -Destructor
        ~Record_Snake(void) { 
            if (Nombre != NULL) delete Nombre; 
         };
         // -Puntos
  UINT   Puntos;
         // -Total de cuadros recorridos
  UINT   Recorrido;
         // -Nivel
  UINT   Nivel;
         // -Nombre del record
  TCHAR *Nombre;
         // -Tamaño en caracteres del nombre
  UINT   TamNombre;
};
// -[FIN devildrey33.Record_Snake]-

// -[INICIO devildrey33.ObjetoEscena_Records]-
// Clase que encapsula una ventana translucida que sirve para ver los records dentro de un ObjetoEscena
class ObjetoEscena_Records : public ObjetoEscena_VentanaTranslucida {
 public : ////////////////////// Miembros publicos
							  // -Constructor
                              ObjetoEscena_Records(void);
							  // -Destructor
                             ~ObjetoEscena_Records(void);
                              // -Función que carga el archivo de records
  void                        CargarRecords(void);
                              // -Función que guarda el archivo de records
  void                        GuardarRecords(void);
                              // -Función que agrega un caracter al nuevo nombre del record actual
  void                        Agregar_Caracter(const TCHAR Tecla);
                              // -Función que se llama al final de pintar todos los graficos
                              // (Los graficos pintados no seran modificados con AlphaBlend).
  virtual void                Pintar_Terminado(HDC hDCDestino);
                              // -Función que calcula el tamaño y hace visible la ventana del mensaje
  BOOL                        MostrarRecords(const UINT nPuntos, const UINT nRecorrido, const UINT nNivel);
                              // -Función que oculta la ventana de los records
  void                        OcultarRecords(void);
                              // -Función que retorna si se esta introduciendo un nuevo record
  inline BOOL                 IntroduciendoNuevoRecord(void) const { return IntroduciendoRecord; };

 private: ////////////////////// Miembros privados
                              // -Vector que contiene los records del juego
  std::vector<Record_Snake *> Records;
                              // -Posición del nuevo record
  UINT                        PosNuevoRecord;
                              // -Valor que determina si se esta introduciendo un record
  BOOL                        IntroduciendoRecord;
                              // -Milisegundos para hacer parpadear el cursor
  DWORD                       MSParpadeo;
                              // -Valor que determina si el cursor sera visible o no
  bool                        Parpadeo;
};
// -[FIN devildrey33.ObjetoEscena_Records]-

#endif
