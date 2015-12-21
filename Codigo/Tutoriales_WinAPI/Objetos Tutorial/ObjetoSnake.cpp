#include "ObjetoSnake.h"

// Constructor
ObjetoSnake::ObjetoSnake(void) {
    srand(GetTickCount());
}

// Destructor
ObjetoSnake::~ObjetoSnake(void) {
}

// -Función que inicia el juego y se enlaza con el marcador y el tablero
void ObjetoSnake::Enlazar(ObjetoEscena_Marcador *nMarcador, ObjetoEscena_Tablero *nTablero, ObjetoEscena_Mensaje *nMensaje, ObjetoEscena_Records *nRecords) {
    Marcador = nMarcador;
    Tablero = nTablero;
    Mensaje = nMensaje;
    Records = nRecords;
}

// -[INICIO devildrey33.ObjetoSnake::CargarNivel]-
// -Función que carga los datos de un nivel
BOOL ObjetoSnake::CargarNivel(const UINT nNivel) {
    UINT i = 0;
    BOOL ExisteNivel = Nivel.CargarNivel(nNivel);
    if (ExisteNivel == FALSE) return FALSE;
    Tablero->MostrarTablero(Nivel.AnchoTablero, Nivel.AltoTablero);
    Marcador->MostrarMarcador();
    Marcador->Velocidad = Nivel.VelocidadInicial;
    Direccion = 6;

    // Añado los muros
    Tablero->Muro.resize(0);
    for (i = 0; i < Nivel.Muro.size(); i++) {
        Tablero->Muro.push_back(Nivel.Muro[i]);
        Tablero->Muro[Tablero->Muro.size() -1].x ++;
        Tablero->Muro[Tablero->Muro.size() -1].y ++;
    }
    // Añado la serpiente
    Tablero->Serpiente.resize(0);
    POINT Serpiente = { Nivel.AnchoTablero / 2, Nivel.AltoTablero / 2 };
    for (i = 0; i < Nivel.TamInicialSerpiente; i++) {
        Serpiente.x --;
        Tablero->Serpiente.push_back(Serpiente);
    }
    // Añado las bolas
    Tablero->Bolas.resize(0);
    for (i = 0; i < Nivel.NumBolas; i++) {
        Tablero->Bolas.push_back(BolaAleatoria());
    }
    return TRUE;
}
// -[FIN devildrey33.ObjetoSnake::CargarNivel]-


// -[INICIO devildrey33.ObjetoSnake::EmpezarJuego]-
// -Función que inicia el juego y se enlaza con el marcador y el tablero
void ObjetoSnake::EmpezarJuego(void) {
    Estado = EnJuego;
    NivelActual = 1;
    // Asigno los valores del marcador
    Marcador->Velocidad = 100;
    Marcador->Recorrido = 0;
    Marcador->Puntuacion = 0;

    Marcador->ColorFondo = RGB(20, 20, 120);
    // Cargo el nivel y si no existe mostramos un error.
    if (CargarNivel(NivelActual) == FALSE) {
        Estado = EnError;
        Mensaje->MostrarMensaje(TEXT("ERROR!! no se puede cargar el primer nivel."), true);
    }

    Tablero->ColorFondo = RGB(20, 20, 120);
}
// -[FIN devildrey33.ObjetoSnake::EmpezarJuego]-


// -[INICIO devildrey33.ObjetoSnake::BolaAleatoria]-
// -Función que retorna una posición que este libre para una bola
POINT ObjetoSnake::BolaAleatoria(void) {
    bool BolaValida = false;
    POINT R;
    // Mientras la bola no este en una posicion valida...
    while (BolaValida == false) {
        R.x = (rand()%(Nivel.AnchoTablero -1)) +1;
        R.y = (rand()%(Nivel.AltoTablero -1)) +1;
        BolaValida = true;
        // Miramos si la bola esta en una posición donde hay una porción de la serpiente
        for (size_t i = 0; i < Tablero->Serpiente.size(); i++) {
            if (R.x == Tablero->Serpiente[i].x && R.y == Tablero->Serpiente[i].y) BolaValida = false;
        }
        // Miramos si la bola esta en una posición donde hay una porción del muro
        for (size_t i = 0; i < Tablero->Muro.size(); i++) {
            if (R.x == Tablero->Muro[i].x && R.y == Tablero->Muro[i].y) BolaValida = false;
        }
    }
    return R;
}
// -[FIN devildrey33.ObjetoSnake::BolaAleatoria]-


// -[INICIO devildrey33.ObjetoSnake::Movimiento]-
// -Función que hace avanzar la serpiente una posición
//  Tambien comprueba si se ha comido bola en el movimiento, en ese caso agranda la serpiente.
void ObjetoSnake::Movimiento(void) {
    size_t i = 0;
    Marcador->Recorrido ++;
    bool Fin = false;
    // 1 Miramos si la cabeza de la serpiente esta encima de una bola
    for (i = 0; i < Tablero->Bolas.size(); i++) {
        if (Tablero->Serpiente[0].x == Tablero->Bolas[i].x && Tablero->Serpiente[0].y == Tablero->Bolas[i].y) {
            // Se ha comido la bola, creamos una nueva bola, ampliamos la puntuación y subimos la velocidad.
            Marcador->Puntuacion ++;
            Tablero->Serpiente.push_back(Tablero->Serpiente[Tablero->Serpiente.size() -1]);
            if (Marcador->Velocidad > 4) Marcador->Velocidad -= Nivel.AmpliacionVelocidad;
            Tablero->Bolas[i] = BolaAleatoria();
        }
    }

    // 2.1 Miramos si la cabeza de la serpiente ha chocado con el resto de la serpiente
    for (i = 2; i < Tablero->Serpiente.size(); i++) {
        if (Tablero->Serpiente[i].x == Tablero->Serpiente[0].x && Tablero->Serpiente[i].y == Tablero->Serpiente[0].y) {
            Fin = true;
            break;
        }
    }
    // 2.2 Miramos si la cabeza de la serpiente ha chocado con el muro
    for (i = 0; i < Tablero->Muro.size(); i++) {
        if (Tablero->Serpiente[0].x == Tablero->Muro[i].x && Tablero->Serpiente[0].y == Tablero->Muro[i].y) {
            Fin = true;
            break;
        }
    }

    // 3 FINAL DEL NIVEL
    if (Fin == true) {
        // Se ha terminado el nivel
        if (Nivel.PuntosParaPasar >= Marcador->Puntuacion) { // Puntuacion insuficiente
            if (Records->MostrarRecords(Marcador->Puntuacion, Marcador->Recorrido, NivelActual) == TRUE) 
				Estado = EnRecords_NuevoRecord;
            else
				Estado = EnRecords;
        }
        else { // La puntuacion es valida, miramos si existe otro nivel superior
            if (CargarNivel(NivelActual +1) == TRUE) {
                NivelActual ++;
                Estado = EnSiguienteNivel;
                Mensaje->MostrarMensaje(TEXT("Presiona ESPACIO para continuar."));
            }
            else { // No hay mas niveles
                if (Records->MostrarRecords(Marcador->Puntuacion, Marcador->Recorrido, NivelActual) == TRUE) 
					Estado = EnRecords_NuevoRecord;
                else
					Estado = EnRecords;
            }
        }
        return;
    }

    // 4 Desplazamos la serpiente
    for (i = Tablero->Serpiente.size() -1; i > 0; i--) {
        Tablero->Serpiente[i] = Tablero->Serpiente[i - 1];
    }

    // 5 Miramos la nueva dirección de la serpiente
    switch (Direccion) {
        case 4 : // Izquierda
            if (Tablero->Serpiente[0].x > 1)                                    Tablero->Serpiente[0].x --;
            else                                                                Tablero->Serpiente[0].x = Nivel.AnchoTablero;
            break;
        case 6 : // Derecha
            if (Tablero->Serpiente[0].x < static_cast<int>(Nivel.AnchoTablero)) Tablero->Serpiente[0].x ++;
            else                                                                Tablero->Serpiente[0].x = 1;
            break;
        case 8 : // Arriba
            if (Tablero->Serpiente[0].y > 1)                                    Tablero->Serpiente[0].y --;
            else                                                                Tablero->Serpiente[0].y = Nivel.AltoTablero;
            break;
        case 2 : // Abajo
            if (Tablero->Serpiente[0].y < static_cast<int>(Nivel.AltoTablero))  Tablero->Serpiente[0].y ++;
            else                                                                Tablero->Serpiente[0].y = 1;
            break;
    }
}
// -[FIN devildrey33.ObjetoSnake::Movimiento]-


// -[INICIO devildrey33.ObjetoSnake::Teclado]-
// -Función que mira el teclado
void ObjetoSnake::Teclado(void) {
    switch (Estado) {
        // Mientras esta en juego miramos los cursores y la tecla ESC
        case EnJuego :
            if (GetAsyncKeyState(VK_LEFT) != 0)  {
                if (Tablero->Serpiente[1].x != Tablero->Serpiente[0].x + 1 && Tablero->Serpiente[1].y != Tablero->Serpiente[0].y)
                    Direccion = 4;
            }

            if (GetAsyncKeyState(VK_RIGHT) != 0) {
                if (Tablero->Serpiente[1].x != Tablero->Serpiente[0].x - 1 && Tablero->Serpiente[1].y != Tablero->Serpiente[0].y)
                    Direccion = 6;
            }

            if (GetAsyncKeyState(VK_UP) != 0) {
                if (Tablero->Serpiente[1].x != Tablero->Serpiente[0].x && Tablero->Serpiente[1].y != Tablero->Serpiente[0].y + 1)
                    Direccion = 8;
            }

            if (GetAsyncKeyState(VK_DOWN) != 0) {
                if (Tablero->Serpiente[1].x != Tablero->Serpiente[0].x && Tablero->Serpiente[1].y != Tablero->Serpiente[0].y - 1)
                    Direccion = 2;
            }
            if (GetAsyncKeyState(VK_ESCAPE) != 0) {
                Mensaje->MostrarMensaje(TEXT("Juego en pausa.\nPresiona ESPACIO para reanudar el juego."));
                Estado = EnPausa;
            }
            break;
        // Cuando esta mirando records miramos si presiona espacio
        case EnRecords :
            if (GetAsyncKeyState(VK_SPACE) != 0) {
                Mensaje->OcultarMensaje();
                Records->OcultarRecords();
                EmpezarJuego();
            }
            break;
        // Cuando esta en pausa o en el inicio del siguiente nivel miramos si presiona espacio
        case EnSiguienteNivel :
            Direccion = 6;
        case EnPausa :
            if (GetAsyncKeyState(VK_SPACE) != 0) {
                Estado = EnJuego;
                Mensaje->OcultarMensaje();
            }
            break;
    }
}
// -[FIN devildrey33.ObjetoSnake::Teclado]-
