// Clase creada para el tutorial WinAPI de www.devildrey33.es
// Esta clase se ha diseñado como contenedor basico para todos los eventos
#ifndef PLATAFORMA
#define PLATAFORMA


#ifndef WINVER                      // Especifica que la plataforma mínima requerida es Windows XP.
    #define WINVER 0x0510           // Cambiar al valor apropiado correspondiente a otras versiones de Windows.
#endif
#ifndef _WIN32_WINNT                // Especifica que la plataforma mínima requerida es Windows XP.
    #define _WIN32_WINNT 0x0510     // Cambiar al valor apropiado correspondiente a otras versiones de Windows.
#endif
#ifndef _WIN32_WINDOWS              // Especifica que la plataforma mínima requerida es Windows 98.
    #define _WIN32_WINDOWS 0x0410   // Cambiar al valor apropiado correspondiente a Windows Me o posterior.
#endif
#ifndef _WIN32_IE                   // Especifica que la plataforma mínima requerida es Internet Explorer 6.0.
    #define _WIN32_IE 0x0600        // Cambiar al valor apropiado correspondiente a otras versiones de IE.
#endif

#ifndef UNICODE
    #define UNICODE 1
    #define _UNICODE 1
#endif

#ifdef __GNUC__ // Las funciones "seguras" de MSVC no estan definidas en MINGW
    #ifndef swprintf_s
        #define swprintf_s(_str, _len, _fmt, ...) \
                swprintf(_str, _fmt, ## __VA_ARGS__)
    #endif
    #ifndef wcscpy_s
        #define wcscpy_s(dest, tam, source) wcscpy(dest, source);
    #endif

	#ifndef wcscat_s
        #define wcscat_s(dest, tam, source) wcscat(dest, source);
    #endif

	#ifndef _itoa_s
        #define _itoa_s(num, dest, tam, base) _itoa(num, dest, base);
    #endif

#endif

#include <windows.h>

#endif

