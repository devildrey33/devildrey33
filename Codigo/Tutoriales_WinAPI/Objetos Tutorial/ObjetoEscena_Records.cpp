#include "ObjetoEscena_Records.h"
#include "ObjetoArchivo.h"
#include "ObjetoDirectoriosWindows.h"
#include <string>

// Constructor
ObjetoEscena_Records::ObjetoEscena_Records(void) {
    MSParpadeo = 0;
    Parpadeo = false;
}

// Destructor
ObjetoEscena_Records::~ObjetoEscena_Records(void) {
    for (size_t i = 0; i < Records.size(); i++) delete Records[i];
    Records.resize(0);
}

// -[INICIO devildrey33.ObjetoEscena_Records::CargarRecords]-
// Función que carga los records del juego
void ObjetoEscena_Records::CargarRecords(void) {
    // Borramos los records de la memoria
    size_t i = 0;
    for (i = 0; i < Records.size(); i++) delete Records[i];
    Records.resize(0);

    // Declaración de variables y objetos
    ObjetoDirectoriosWindows Directorios;
    ObjetoArchivo            ArchivoRecords;
    TCHAR                    RutaAppData[MAX_PATH];    // Directorio
    TCHAR                    RutaAppDataTxt[MAX_PATH]; // Archivo de prueba

    // Obtengo el directorio AppData
    Directorios.AppData(RutaAppData);

    // Añado el resto de la ruta
    wcscat_s(RutaAppData, MAX_PATH, TEXT("\\Tutoriales www.devildrey33.es"));

    // Creo un string con el nombre del archivo con el que se va a trabajar
    wcscpy_s(RutaAppDataTxt, MAX_PATH, RutaAppData);
    wcscat_s(RutaAppDataTxt, MAX_PATH, TEXT("\\Records.snake"));

    Record_Snake *Tmp;
    if (ArchivoRecords.AbrirArchivo(RutaAppDataTxt, false) == TRUE) {
        for (i = 0; i < 10; i++) {
            Tmp = new Record_Snake;
            Records.push_back(Tmp);
            ArchivoRecords.LeerUINT(Tmp->Puntos);
            ArchivoRecords.LeerUINT(Tmp->Recorrido);
            ArchivoRecords.LeerUINT(Tmp->Nivel);
            Tmp->TamNombre = ArchivoRecords.LeerString(Tmp->Nombre);
        }
        ArchivoRecords.CerrarArchivo();
    }
    // Si no existe el archivo de records creo una tabla con 10 records a cero
    else {
        for (i = 0; i < 10; i++) {
            Tmp = new Record_Snake;
            Tmp->Puntos    = 0;
            Tmp->Recorrido = 0;
            Tmp->Nivel     = 0;
            Tmp->Nombre    = NULL;
            Tmp->TamNombre = 0;
            Records.push_back(Tmp);
        }
    }
}
// -[FIN devildrey33.ObjetoEscena_Records::CargarRecords]-


// Función que carga los records del juego
void ObjetoEscena_Records::GuardarRecords(void) {
    ObjetoDirectoriosWindows Directorios;
    ObjetoArchivo            ArchivoRecords;
    TCHAR                    RutaAppData[MAX_PATH];    // Directorio
    TCHAR                    RutaAppDataTxt[MAX_PATH]; // Archivo de prueba

    // Obtengo el directorio AppData
    Directorios.AppData(RutaAppData);

    // Añado el resto de la ruta y creo el directorio
    wcscat_s(RutaAppData, MAX_PATH, TEXT("\\Tutoriales www.devildrey33.es"));
    CreateDirectory(RutaAppData, NULL);

    // Creo un string con el nombre del archivo con el que se va a trabajar
    wcscpy_s(RutaAppDataTxt, MAX_PATH, RutaAppData);
    wcscat_s(RutaAppDataTxt, MAX_PATH, TEXT("\\Records.snake"));

    ArchivoRecords.AbrirArchivo(RutaAppDataTxt, true);
    for (size_t i = 0; i < 10; i++) {
        ArchivoRecords.GuardarUINT(Records[i]->Puntos);
        ArchivoRecords.GuardarUINT(Records[i]->Recorrido);
        ArchivoRecords.GuardarUINT(Records[i]->Nivel);
        ArchivoRecords.GuardarString(Records[i]->Nombre);
    }
    ArchivoRecords.CerrarArchivo();
}


// -[INICIO devildrey33.ObjetoEscena_Records::Pintar_Terminado]-
// Esta función se usara para pintar los graficos que se necesiten. (NO SE INCLUIRAN EN EL ALPHABLEND)
// NOTA el hDCDestino es un backbuffer creado por la funcion Pintar, por ello no hace falta crear otro buffer de pintado.
void ObjetoEscena_Records::Pintar_Terminado(HDC hDCDestino) {
    RECT  EspacioCursor;
    SIZE  TamTexto;
    // Fuente negrita
    HFONT Fuente  = CreateFont( 16, 0, 0, 0, FW_BOLD, false, false, false, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS,
                                CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") );
    // Fuente normal
    HFONT Fuente2 = CreateFont( 16, 0, 0, 0, FW_NORMAL, false, false, false, DEFAULT_CHARSET, OUT_DEFAULT_PRECIS,
                                CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma") );
    // Fuente inicialmente seleccionada en el DC
    HFONT VFuente = static_cast<HFONT>(SelectObject(hDCDestino, Fuente));

    // Calculamos el cambio de parpadeo
    if (MSParpadeo < GetTickCount()) {
        Parpadeo = !Parpadeo;
        MSParpadeo = GetTickCount() + 300;
    }

    TCHAR TmpTxt[256];
    UINT  TmpTam = 0;
    UINT  AnchoNombre = 0;

    // Pintamos la cabecera
    SetBkMode(hDCDestino, TRANSPARENT);
    SetTextColor(hDCDestino, RGB(0, 0, 0));
    TextOut(hDCDestino, 11, 11, TEXT("Puntos"), 6);
    TextOut(hDCDestino, 66, 11, TEXT("Recorrido"), 9);
    TextOut(hDCDestino, 139, 11, TEXT("Nivel"), 5);
    TextOut(hDCDestino, 180, 11, TEXT("Nombre"), 6);
    SetTextColor(hDCDestino, RGB(255, 255, 255));
    TextOut(hDCDestino, 10, 10, TEXT("Puntos"), 6);
    TextOut(hDCDestino, 65, 10, TEXT("Recorrido"), 9);
    TextOut(hDCDestino, 138, 10, TEXT("Nivel"), 5);
    TextOut(hDCDestino, 179, 10, TEXT("Nombre"), 6);
    SelectObject(hDCDestino, Fuente2);

    // Pintamos los valores de los records
    for (size_t i = 0; i < Records.size(); i++) {
        // Pintamos la sombra del texto
        SetTextColor(hDCDestino, RGB(0, 0, 0));
        TmpTam = swprintf_s(TmpTxt, 256, TEXT("%d"), Records[i]->Puntos);
        TextOut(hDCDestino, 11, (15 * i) + 26, TmpTxt, TmpTam);

        TmpTam = swprintf_s(TmpTxt, 256, TEXT("%d"), Records[i]->Recorrido);
        TextOut(hDCDestino, 66, (15 * i) + 26, TmpTxt, TmpTam);

        TmpTam = swprintf_s(TmpTxt, 256, TEXT("%d"), Records[i]->Nivel);
        TextOut(hDCDestino, 139, (15 * i) + 26, TmpTxt, TmpTam);

        TextOut(hDCDestino, 180, (15 * i) + 26, Records[i]->Nombre, Records[i]->TamNombre);

        if (i != PosNuevoRecord) { // Si no es la posición del record actual lo pintamos blanco
            SetTextColor(hDCDestino, RGB(255, 255, 255));
        }
        else { // Si es la posición del record actual
            // Si el parpadeo esta activado y estamos introduciendo un record, pintamos el cursor
            if (Parpadeo == true && IntroduciendoRecord == TRUE) {
                TamTexto.cx = 0;
                if (Records[i]->Nombre != NULL)
                    GetTextExtentPoint32(hDCDestino, Records[i]->Nombre, Records[i]->TamNombre -1, &TamTexto);
                EspacioCursor.left = 180 + TamTexto.cx;
                EspacioCursor.right = EspacioCursor.left + 2;
                EspacioCursor.top = (15 * i) + 25;
                EspacioCursor.bottom = EspacioCursor.top + 15;
                FillRect(hDCDestino, &EspacioCursor, static_cast<HBRUSH>(GetStockObject(BLACK_BRUSH)));
            }
            SetTextColor(hDCDestino, RGB(0, 255, 255));
        }

        // Pintamos el texto
        TmpTam = swprintf_s(TmpTxt, 256, TEXT("%d"), Records[i]->Puntos);
        TextOut(hDCDestino, 10, (15 * i) + 25, TmpTxt, TmpTam);

        TmpTam = swprintf_s(TmpTxt, 256, TEXT("%d"), Records[i]->Recorrido);
        TextOut(hDCDestino, 65, (15 * i) + 25, TmpTxt, TmpTam);

        TmpTam = swprintf_s(TmpTxt, 256, TEXT("%d"), Records[i]->Nivel);
        TextOut(hDCDestino, 138, (15 * i) + 25, TmpTxt, TmpTam);

        TextOut(hDCDestino, 179, (15 * i) + 25, Records[i]->Nombre, Records[i]->TamNombre);
    }
    SelectObject(hDCDestino, Fuente);

    // Pintamos un texto o otro segun si se esta introduciendo o mirando un record.
    if (IntroduciendoRecord == TRUE) {
        SetTextColor(hDCDestino, RGB(0, 0, 0));
        TextOut(hDCDestino, 11, 186, TEXT("Nuevo record!! Introduce tu nombre"), 40);
        SetTextColor(hDCDestino, RGB(240, 240, 0));
        TextOut(hDCDestino, 10, 185, TEXT("Nuevo record!! Introduce tu nombre"), 40);
    }
    else {
        SetTextColor(hDCDestino, RGB(0, 0, 0));
        TextOut(hDCDestino, 7, 186, TEXT("Presiona ESPACIO para volver a empezar"), 39);
        SetTextColor(hDCDestino, RGB(240, 240, 0));
        TextOut(hDCDestino, 6, 185, TEXT("Presiona ESPACIO para volver a empezar"), 39);
    }

    // Borramos objetos GDI
    SelectObject(hDCDestino, VFuente);
    DeleteObject(Fuente);
    DeleteObject(Fuente2);
}
// -[FIN devildrey33.ObjetoEscena_Records::Pintar_Terminado]-


// -[INICIO devildrey33.ObjetoEscena_Records::MostrarRecords]-
BOOL ObjetoEscena_Records::MostrarRecords(const UINT nPuntos, const UINT nRecorrido, const UINT nNivel) {
    // Cargo los records y miro si el nuevo record es mejor que alguno.
    IntroduciendoRecord = FALSE;
    CargarRecords();
    PosNuevoRecord = 10;
    size_t i = 0;
    for (i = 0; i < 10; i++) {
        // Si tiene mas puntos que este record es mejor
        if (nPuntos > Records[i]->Puntos) {
            PosNuevoRecord = i;
            break;
        }
        // Si tiene los mismos puntos miramos el recorrido
        else if (nPuntos == Records[i]->Puntos) {
            // Si el recorrido es el mismo o mas pequeño, este record sera mejor
            if (nRecorrido <= Records[i]->Recorrido) {
                PosNuevoRecord = i;
                break;
            }
        }
    }

    // Si la posicion del nuevo record no es 10, es que hay que guardarlo
    // Ademas moveremos los records que sean inferiores una posicion en el array
    if (PosNuevoRecord != 10) {
        IntroduciendoRecord = TRUE;
        Record_Snake *Tmp = new Record_Snake;
        Tmp->Nivel     = nNivel;
        Tmp->Puntos    = nPuntos;
        Tmp->Recorrido = nRecorrido;
        delete Records[9];
        for (i = 9; i > PosNuevoRecord; i--) Records[i] = Records[i -1];
        Records[PosNuevoRecord] = Tmp;
    }

    // Calculo la posicion centrada dentro de la escena
    RECT RectaEscena;
    GetClientRect(EscenaPadre->hWnd(), &RectaEscena);
    Espacio.left   = (RectaEscena.right - 280) / 2;
    Espacio.top    = (RectaEscena.bottom - 210) / 2;
    Espacio.right  = Espacio.left + 280;
    Espacio.bottom = Espacio.top + 210;
    Visible        = TRUE;
    ColorFondo     = RGB(20, 120, 20);
    ColorBordeE    = RGB(60, 160, 60);
    ColorBordeI    = RGB(120, 220, 120);
    return static_cast<BOOL>(IntroduciendoRecord);
}
// -[FIN devildrey33.ObjetoEscena_Records::MostrarRecords]-


// -[INICIO devildrey33.ObjetoEscena_Records::Agregar_Caracter]-
// -Función que agrega un caracter al nuevo nombre del record actual
void ObjetoEscena_Records::Agregar_Caracter(const TCHAR Tecla) {
    TCHAR *TmpTxt = Records[PosNuevoRecord]->Nombre;
    switch (Tecla) {
        // Tecla Intro
        case VK_RETURN :
            IntroduciendoRecord = FALSE;
            return;
        // Tecla borrar
        case VK_BACK :
            if (Records[PosNuevoRecord]->TamNombre > 0) Records[PosNuevoRecord]->TamNombre --;
            if (Records[PosNuevoRecord]->TamNombre == 0) {
                delete Records[PosNuevoRecord]->Nombre;
                Records[PosNuevoRecord]->Nombre = NULL;
            }
            else {
                Records[PosNuevoRecord]->Nombre[Records[PosNuevoRecord]->TamNombre -1] = TEXT('\0');
            }
            return;
        // Las demas teclas
        default :
            if (Records[PosNuevoRecord]->Nombre == NULL) {
                Records[PosNuevoRecord]->Nombre = new TCHAR[2];
                Records[PosNuevoRecord]->Nombre[0] = Tecla;
                Records[PosNuevoRecord]->Nombre[1] = TEXT('\0');
                Records[PosNuevoRecord]->TamNombre = 2;
            }
            else {
                Records[PosNuevoRecord]->TamNombre ++;
                Records[PosNuevoRecord]->Nombre = new TCHAR[Records[PosNuevoRecord]->TamNombre];
                wcscpy_s(Records[PosNuevoRecord]->Nombre, Records[PosNuevoRecord]->TamNombre, TmpTxt);
                delete TmpTxt;
                Records[PosNuevoRecord]->Nombre[Records[PosNuevoRecord]->TamNombre - 2] = Tecla;
                Records[PosNuevoRecord]->Nombre[Records[PosNuevoRecord]->TamNombre - 1] = TEXT('\0');
            }
            return;
    }
}
// -[FIN devildrey33.ObjetoEscena_Records::Agregar_Caracter]-

// -Función que oculta la ventana de los records
void ObjetoEscena_Records::OcultarRecords(void) {
    Visible = FALSE;
}
