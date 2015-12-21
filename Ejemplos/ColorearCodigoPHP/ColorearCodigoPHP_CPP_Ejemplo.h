#ifndef EJEMPLO_H     // Si no esta definido EJEMPLO_H
    #define EJEMPLO_H /* definimos EJEMPLO_H */

    #include <Cabcerea1.h>
    #include "Cabecera2.h" // Comentario hasta el final de la linea


    /* Comentario multilinea antes de la plantilla
       algunas trampas "String\" if else endif */
    template <typename T> class ClaseHija : public ClasePadre {
      public:
                    ClaseHija(void);
        const T     Funcion(int ValorEntero, wchar_t Caracter);
    }
#endif
