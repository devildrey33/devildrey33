#include "ObjetoSnake_Nivel.h"
#include "ObjetoArchivo.h"

// Constructor
ObjetoSnake_Nivel::ObjetoSnake_Nivel(void) {
}

// Destructor
ObjetoSnake_Nivel::~ObjetoSnake_Nivel(void) {
}

// -[INICIO devildrey33.ObjetoSnake_Nivel::CargarNivel]-
// Función para leer un nivel del juego
BOOL ObjetoSnake_Nivel::CargarNivel(const UINT nNivel) {
    // Inicializo los datos
    NumBolas            = 0;
    VelocidadInicial    = 0;
    AmpliacionVelocidad = 0;
    TamInicialSerpiente = 0;
    PuntosParaPasar     = 0;
    AnchoTablero        = 0;
    AltoTablero         = 0;
    Muro.resize(0);

    ObjetoArchivo ArchivoNivel;
    TCHAR         RutaNivel[] = TEXT("Nivel?.txt");
    char         *Buffer = NULL;
    DWORD         Tam = 0;
    DWORD         n = 0;
    char          Linea[1024];
    char          NumeroNivel[16];
    int           TotalDatos = 0; // 7 + AltoTablero;

    // Cambiamos el interrogante por el numero del nivel
    _itoa_s(nNivel, NumeroNivel, 16, 10);
    RutaNivel[5] = NumeroNivel[0];
    TCHAR NN[MAX_PATH];
    GetCurrentDirectory(MAX_PATH, NN);
    wcscat_s(NN, MAX_PATH, TEXT("\\"));
    wcscat_s(NN, MAX_PATH, RutaNivel);
    // MessageBox(NULL, NN, RutaNivel, MB_OK);
    // Leo todo el archivo en un buffer
    if (ArchivoNivel.AbrirArchivoLectura(NN) == TRUE) {
        Tam = ArchivoNivel.ObtenerLongitud32(NULL);
        Buffer = new char[Tam];
        ArchivoNivel.Leer(Buffer, Tam * sizeof(char));
        ArchivoNivel.CerrarArchivo();
    }
    else {
        return FALSE;
    }

    for (DWORD i = 0; i < Tam; i++) {
        // Omitimos el caracter intro y el caracter 10 que siempre va detras del intro en Windows
        if (Buffer[i] != 13 && Buffer[i] != 10) {
            Linea[n] = Buffer[i];
            n++;
        }
        if (Buffer[i] == ';' || Buffer[i] == '\n' && n != 0) {
            Linea[n -1] = '\0';
            if (EvaluarLinea(Linea, n) == TRUE) TotalDatos ++;
            n = 0;
        }
    }

    delete Buffer;
    // Si el total de datos evaluados es 7 + el alto del tablero se ha cargado correctamente el archivo
    if (TotalDatos == static_cast<int>(7 + AltoTablero)) return TRUE;
    return FALSE;
}
// -[FIN devildrey33.ObjetoSnake_Nivel::CargarNivel]-


// -[INICIO devildrey33.ObjetoSnake_Nivel::EvaluarLinea]-
// Funcion para parsear una linea del archivo del nivel y obtener sus datos
BOOL ObjetoSnake_Nivel::EvaluarLinea(const char *Linea, const UINT TamLinea) {
    // Declaración de variables
    char   Nombre[512];
    char   Valor[512];
    char   TableroY[64];
    char   Posicion[4];
    UINT   PosPosicion;
    UINT   TamNombre    = 0;
    UINT   TamValor     = 0;
    bool   NombreValor  = false;
    POINT  PuntoMuro;
    size_t i            = 0;

    // Quitamos todos los espacios y separamos el nombre del valor
    for (i = 0; i < TamLinea; i++) {
        // Cuando pasamos por el signo igual empezamos la parte del valor
        if (Linea[i] == '=') {
            NombreValor = true;
            i ++;
        }
        // Si NombreValor es false, el caracter pertenece al Nombre
        if (Linea[i] != ' ' && NombreValor == false) {
            Nombre[TamNombre] = Linea[i];
            TamNombre ++;
        }
        // Si NombreValor es true, el caracter pertenece al Valor
        if (Linea[i] != ' ' && NombreValor == true) {
            Valor[TamValor] = Linea[i];
            TamValor ++;
        }
    }

    // Si no se ha llegado a obtener valor
    if (NombreValor == false)
        return FALSE;

    // Terminamos las cadenas con el caracter '\0'
    Nombre[TamNombre] = '\0';
    TamNombre ++;
    Valor[TamValor] = '\0';
    TamValor ++;

    // Comprobamos el nombre del valor, y si coincide le asignamos el valor
    if (_strcmpi(Nombre, "NumeroBolas") == 0) {
        NumBolas = atoi(Valor);
        return TRUE;
    }
    if (_strcmpi(Nombre, "VelocidadInicial") == 0) {
        VelocidadInicial = atoi(Valor);
        return TRUE;
    }
    if (_strcmpi(Nombre, "AmpliacionVelocidad") == 0) {
        AmpliacionVelocidad = atoi(Valor);
        return TRUE;
    }
    if (_strcmpi(Nombre, "TamañoInicialSerpiente") == 0) {
        TamInicialSerpiente = atoi(Valor);
        return TRUE;
    }
    if (_strcmpi(Nombre, "PuntosParaPasar") == 0) {
        PuntosParaPasar = atoi(Valor) - 1;
        return TRUE;
    }
    if (_strcmpi(Nombre, "AnchoTablero") == 0) {
        AnchoTablero = atoi(Valor);
        return TRUE;
    }
    if (_strcmpi(Nombre, "AltoTablero") == 0) {
        AltoTablero = atoi(Valor);
        return TRUE;
    }

    // Miramos si el nombre contiene 'Tablero['
    if (TamNombre > 7) {
        for (i = 0; i < 8; i++) TableroY[i] = Nombre[i];
        TableroY[i] = '\0';
        if (_strcmpi(TableroY, "Tablero[") == 0) {
            // Obtenemos la posicion Y de la parte del tablero
            PosPosicion = 0;
            for (i = i; Nombre[i] != ']'; i++) {
                Posicion[PosPosicion] = Nombre[i];
                PosPosicion ++;
            }
            Posicion[PosPosicion] = '\0';
            PuntoMuro.y = atoi(Posicion);
            // Si el punto no corresponde a una posicion valida del tablero retornamos FALSE
            if (PuntoMuro.y < 0 && PuntoMuro.y > static_cast<int>(AltoTablero)) return FALSE;
            for (i = 0; i < AnchoTablero; i++) {
                PuntoMuro.x = i;
                if (Valor[i] != '.') Muro.push_back(PuntoMuro);
            }
            return TRUE;
        }
    }
    return FALSE;
}
// -[FIN devildrey33.ObjetoSnake_Nivel::EvaluarLinea]-

