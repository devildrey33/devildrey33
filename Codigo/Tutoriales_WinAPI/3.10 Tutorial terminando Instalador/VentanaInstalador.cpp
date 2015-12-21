#include "VentanaInstalador.h"
#include "..\Objetos Tutorial\ObjetoArchivo.h"
#include "..\Objetos Tutorial\ObjetoZLIB.h"
#include "..\Objetos Tutorial\ObjetoDirectoriosWindows.h"
#include "..\Objetos Tutorial\ObjetoDlgDirectorios.h"
#include "Resource.h"

// - Constructor
VentanaInstalador::VentanaInstalador(void) { 
     Crear();
};

// - Función que crea la VentanaInstalador
void VentanaInstalador::Crear(void) {
    CrearVentana( NULL, TEXT("Instalador"), WS_OVERLAPPEDWINDOW | WS_VISIBLE, 
                TEXT("Mi Instalador (Ejemplo 3.10)"), 100, 100, 420, 205, NULL, NULL, IDI_ICON1 );
	Instalar.CrearBoton(_hWnd, TEXT("Instalar"), 220, 140, 80, 20, ID_BOTON_INSTALAR);
	Salir.CrearBoton(_hWnd, TEXT("Salir"), 310, 140, 80, 20, ID_BOTON_SALIR);
	BuscarDirectorio.CrearBoton(_hWnd, TEXT("..."), 360, 90, 30, 20, ID_BOTON_BUSCAR);
	Barra.CrearBarraProgreso(_hWnd, ID_BARRA, 10, 120, 380, 10);
	PathDestino.CrearEditBox(_hWnd, TEXT("C:\\"), WS_CHILD | WS_VISIBLE, 13, 93, 334, 14, ID_PATH);

	LeerDatos();
};

// - Función que enlaza con el mensaje WM_CLOSE
LRESULT VentanaInstalador::Evento_Cerrar(void) { 		
     PostQuitMessage(0);
     return ObjetoVentana::Evento_Cerrar();
};

// - Función que enlaza con el mensaje WM_PAINT
LRESULT VentanaInstalador::Evento_Pintar(HDC hDC, PAINTSTRUCT &PS) {
	RECT	RC;
	GetClientRect(_hWnd, &RC);
	// 1 - Creación de un buffer para el pintado
	HDC     Buffer  = CreateCompatibleDC(hDC);
	HBITMAP Bmp     = CreateCompatibleBitmap(hDC, RC.right, RC.bottom);
	HBITMAP Viejo   = static_cast<HBITMAP>(SelectObject(Buffer, Bmp));
	HRGN    Region  = CreateRoundRectRgn(10, 90, 350, 110, 2, 2);
	HFONT   VFuente = NULL;


	const COLORREF Degradado1 = RGB(100, 100, 100);
	const COLORREF Degradado2 = RGB(255, 255, 255);
	FillRect(Buffer, &RC, static_cast<HBRUSH>(GetStockObject(WHITE_BRUSH)));
	// 3 - Pintamos el degradado del fondo
	TRIVERTEX     GCVertex[2];
	GRADIENT_RECT tGRect;
	GCVertex[0].Red     = RGB_OBTENER_R(Degradado1);
	GCVertex[0].Green   = RGB_OBTENER_G(Degradado1);
	GCVertex[0].Blue    = RGB_OBTENER_B(Degradado1);
	GCVertex[0].x = 0;
	GCVertex[0].y = 0;
	GCVertex[1].Red     = RGB_OBTENER_R(Degradado2);
	GCVertex[1].Green   = RGB_OBTENER_G(Degradado2);
	GCVertex[1].Blue    = RGB_OBTENER_B(Degradado2);
	GCVertex[1].x = RC.right;
	GCVertex[1].y = 100;
	tGRect.UpperLeft = 0;
	tGRect.LowerRight = 1;
	GradientFill(Buffer, GCVertex, 2, &tGRect, 1, GRADIENT_FILL_RECT_V);
	
	// 4 - Pintamos el icono
	HICON IcoInstalar = static_cast<HICON>(LoadImage(GetModuleHandle(0), MAKEINTRESOURCE(IDI_ICON1), IMAGE_ICON, 48, 48, LR_DEFAULTCOLOR));
	DrawIconEx(Buffer, 10, 10, IcoInstalar, 48, 48, 0, NULL, DI_NORMAL);
	DestroyIcon(IcoInstalar);

	// 5 - Pintamos el titulo
	HFONT Fuente = CreateFont( 20, 0, 0, 0, FW_BOLD, false, false, false, DEFAULT_CHARSET,
                               OUT_DEFAULT_PRECIS, CLIP_DEFAULT_PRECIS, PROOF_QUALITY, FF_ROMAN, TEXT("Tahoma"));
	HFONT VFont = static_cast<HFONT>(SelectObject(Buffer, Fuente));
	SetBkMode(Buffer, TRANSPARENT);
	SetTextColor(Buffer, RGB(0, 0, 0));
	TextOut(Buffer, 60, 25, TEXT("Ejemplo 3.10 Instalador"), 23);
	SetTextColor(Buffer, RGB(255, 255, 255));
	TextOut(Buffer, 59, 24, TEXT("Ejemplo 3.10 Instalador"), 23);
	SelectObject(Buffer, VFont);
	DeleteObject(Fuente);
	 
	// 6 - Pintamos el borde
	HBRUSH Brocha = CreateSolidBrush(BuscarDirectorio.Color_BordeInterno());
	FrameRgn(Buffer, Region, Brocha, 2, 2);
	DeleteObject(Brocha);
	Brocha = CreateSolidBrush(BuscarDirectorio.Color_BordeExterno());
	FrameRgn(Buffer, Region, Brocha, 1, 1);
	DeleteObject(Brocha);

	// 7 - Pintamos el Buffer en el DC del botón
	BitBlt(hDC, 0, 0, RC.right, RC.bottom, Buffer, 0, 0, SRCCOPY);

	// 8 - Selecciono los objetos originales del Buffer
	SelectObject(Buffer, VFuente);
	SelectObject(Buffer, Viejo);
	// 9 - Elimino objetos gdi de la memoria
	DeleteObject(Region);
	DeleteObject(Bmp);
	DeleteDC(Buffer);
	return 0;
};

// - Función que recibe cuando se hace click en un ObjetoBoton
LRESULT VentanaInstalador::Evento_ObjetoBoton_Click(ObjetoBoton *BotonPresionado, const UINT nBoton) {
	switch (BotonPresionado->ID()) {
		case ID_BOTON_SALIR :
			PostQuitMessage(0);
			break;
		case ID_BOTON_BUSCAR :
			SeleccionarDirectorio();
			break;
		case ID_BOTON_INSTALAR :
			InstalarContenido();
			break;
	}
	return ObjetoVentana::Evento_ObjetoBoton_Click(BotonPresionado, nBoton);
}

void VentanaInstalador::SeleccionarDirectorio(void) {
	ObjetoDlgDirectorios Directorios;
	const TCHAR *Tmp = NULL;
	Tmp = Directorios.MostrarDirectorios(_hWnd, TEXT("Donde crear \\MiInstalacion\\"), true, false);
	if (Tmp != NULL) {
		PathDestino.AsignarTexto(Tmp);
	}
	

}

// -[INICIO devildrey33.VentanaInstalador::LeerDatos]-
// - Función que determina si el instalador está lleno o vacio, y en el caso de estar lleno
//   lee los valores de la instalación y los asigna a sus correspondientes controles.
BOOL VentanaInstalador::LeerDatos(void) {
	LPWSTR        Path = GetCommandLine();
	TCHAR         PathInstalarExe[MAX_PATH + 1];

	// 1 - Parseamos el path por si viene con comillas
	UINT TamPath  = wcslen(Path) + 1;
	UINT Contador = 0;
	for (UINT i = 0; i < TamPath; i++) {
		if (Path[i] != TEXT('"')) {
			PathInstalarExe[Contador] = Path[i];
			Contador ++;
		}
	}

	// 2 - Abrimos el instalador para lectura
	if (InstalarExe.AbrirArchivoLectura(PathInstalarExe) == FALSE) {
		_MostrarUltimoError(TEXT("Error abriendo el instalador..."));
		return FALSE;
	}

	// 3 - Leemos los datos del instalar.exe
	TCHAR Tmp[512];
	// Nos desplazamos al final del archivo menos ((sizeof(TCHAR) * 32) + sizeof(UINT)
	// La cabecera son 32 caracteres del tipo TCHAR y ademas le sumamos el tamaño de un UINT.
	// El UINT será el tamaño del ejecutable limpio
	UINT TamInstalarExeReal = 0;
	InstalarExe.Posicion(-static_cast<long>(((sizeof(TCHAR) * 32) + sizeof(UINT))), true);
	InstalarExe.LeerUINT(TamInstalarExeReal);
	// - Leemos la cabecera para determinar si el instalador esta lleno o vacio
	InstalarExe.Leer(Tmp, sizeof(TCHAR) * 32);
	TCHAR Cabecera[32] = TEXT("Instalador 1.0 devildrey33     ");
	if (wcscmp(Tmp, Cabecera) != 0) {
		// Instalador vacio
		Instalar.Activado(false);
		TamInstalarExeReal = 0;
		return FALSE;
	}

	// 4 - Nos movemos a la posición donde termina el instalar.exe y empiezan los datos
	InstalarExe.Posicion(TamInstalarExeReal, false);
	// 5 - Obtenemos el Path por defecto de la instalación
	UINT NumPathDefecto = 0;
	InstalarExe.LeerUINT(NumPathDefecto);
	TCHAR *PathDefecto = NULL;
	TCHAR PathDefecto2[MAX_PATH];
	InstalarExe.LeerString(PathDefecto);

	ObjetoDirectoriosWindows Directorios;
	TCHAR PathDestinoInicial[MAX_PATH];
	wcscpy_s(PathDestinoInicial, MAX_PATH, PathDefecto);

	switch (NumPathDefecto) {
		case 0 : // C: 
			wcscpy_s(PathDefecto2, 4, TEXT("C:\\"));
			break;
		case 1 : // Archivos de programa x86
			Directorios.ArchivosDeProgramaX86(PathDefecto2);
			break;
		case 2 : // Archivos de programa x64
//			Directorios.ArchivosDeProgramaX64(PathDefecto);
			break;
	}
	// 6 - Asignamos el path por defecto de la instalación al editbox	
	swprintf_s(PathDestinoInicial, TEXT("%s\\%s"), PathDefecto2, PathDefecto);
	PathDestino.AsignarTexto(PathDestinoInicial);
	delete [] PathDefecto;
	return TRUE;
}
// -[FIN devildrey33.VentanaInstalador::LeerDatos]-


// -[INICIO devildrey33.VentanaInstalador::InstalarContenido]-
void VentanaInstalador::InstalarContenido(void) {
	// 1 - Comprobamos que el directorio de instalacion sea valido
	TCHAR InstalarDir[MAX_PATH];
	TCHAR TmpSubDirectorio[MAX_PATH];
	TCHAR TmpTxt[512];
	PathDestino.ObtenerTexto(InstalarDir, MAX_PATH);
	if (_PathValido(InstalarDir) == FALSE) {
		MessageBox(_hWnd, TEXT("La ruta especificada no es válida.\n\
			                    La ruta no puede tener los siguientes caracteres / : * ? \" < > |"),
								TEXT("Error"), MB_OK);
		return;
	}

	// 2 - Si el directorio tiene una antibarra al final la quitamos
	UINT TamTmp = wcslen(InstalarDir);
	if (InstalarDir[TamTmp] == TEXT('\\')) {
		InstalarDir[TamTmp] = TEXT('\0');
	}

	// 3 - Creo el directorio de la instalación
	BOOL RC = CreateDirectory(InstalarDir, NULL);
	if (RC == FALSE && GetLastError() != 183) { // Error 183 "Error el directorio ya existe y no puede ser creado"
		swprintf_s(TmpTxt, 512, TEXT("Error creando el directorio '%s' (%d). Instalacion abortada.\n"), InstalarDir, GetLastError());
		_MostrarUltimoError(TmpTxt);
		return;
	}

	// 4 - Leemos y creamos los subdirectorios
	UINT   TotalDirectorios = 0;
	UINT   i = 0;
	PTCHAR TmpDir;
	InstalarExe.LeerUINT(TotalDirectorios);
	for (i = 0; i < TotalDirectorios; i++) {
		InstalarExe.LeerString(TmpDir);
		swprintf_s(TmpSubDirectorio, MAX_PATH, TEXT("%s%s"), InstalarDir, TmpDir);
		MessageBox(_hWnd, TmpSubDirectorio, TEXT("a"), MB_OK);
		delete [] TmpDir;
		RC = CreateDirectory(TmpSubDirectorio, NULL);
		if (RC == FALSE && GetLastError() != 183) { // Error 183 "Error el directorio ya existe y no puede ser creado"
			swprintf_s( TmpTxt, 512, TEXT("Error creando el directorio : '%s' (%d). Instalacion abortada.\n"),
                        TmpSubDirectorio, GetLastError());
			_MostrarUltimoError(TmpTxt);
			return;
		}
	}

	// 5 - Descomprimimos y creamos los archivos finales
	UINT  TotalArchivos = 0;
	UINT  TamArchivo = 0;
	MSG   msg;
	char *Datos = NULL;
	ObjetoZLIB        ZLIB;
	ContenedorBinario ArchivoComprimido;
	InstalarExe.LeerUINT(TotalArchivos);
	Barra.Maximo(static_cast<float>(TotalArchivos));
	for (i = 0; i < TotalArchivos; i++) {
		InstalarExe.LeerString(TmpDir);
		swprintf_s(TmpSubDirectorio, MAX_PATH, TEXT("%s%s"), InstalarDir, TmpDir);
		delete [] TmpDir;
		InstalarExe.LeerUINT(TamArchivo);
		Datos = new char[TamArchivo];
		InstalarExe.Leer(Datos, TamArchivo * sizeof(char));
		ArchivoComprimido.Borrar();
		ArchivoComprimido.AgregarParte(Datos, TamArchivo);

		if (ZLIB.Descomprimir(ArchivoComprimido, TmpSubDirectorio) == FALSE) {
			// error creando o descomprimiendo archivo
			swprintf_s(TmpTxt, 512, TEXT("Error creando el archivo : '%s'.\n"), TmpSubDirectorio);
			MessageBox(_hWnd, TmpTxt, TEXT("Error"), MB_OK);
		}
		Barra.Valor(static_cast<float>(i));
		// esperar eventos
		if (PeekMessage(&msg, NULL, 0, 0, PM_REMOVE)) {
			TranslateMessage(&msg);
			DispatchMessage(&msg);
		}
	}
	MessageBox(NULL, TEXT("Instalación completada!"), TEXT("Instalación completada"), MB_OK);
}
// -[FIN devildrey33.VentanaInstalador::InstalarContenido]-


// Función que comprueba si la ruta del path relativa tiene caracteres invalidos
// Los caracteres / : * ? " < > | no son válidos para crear archivos y directorios
BOOL VentanaInstalador::_PathValido(const TCHAR *nText) {
	UINT Tam = wcslen(nText);
	for (UINT i = 0; i < Tam; i++) {
		switch (nText[i]) {
			case TEXT(':') :
				if (i != 1) return FALSE; // Si no es el segundo caracter
				break;
			case TEXT('/') :    case TEXT('*') :   case TEXT('?') :
			case TEXT('"') :    case TEXT('<') :    case TEXT('>') :   case TEXT('|') :
				return FALSE;
		}
	}
	return TRUE;
}


// -[INICIO devildrey33.VentanaInstalador::_MostrarUltimoError]-
// Función para mostrar el ultimo error con FormatMessage añadiendo un texto personalizado
void VentanaInstalador::_MostrarUltimoError(const TCHAR *Mensaje) {
	DWORD  ErrNum = GetLastError();
	LPVOID lpMsgBuf;
	if (ErrNum == 0) return;
	FormatMessage( FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS, 
                   NULL, ErrNum, MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), (LPTSTR) &lpMsgBuf, 0, NULL );
	if (Mensaje == NULL) {
		MessageBox(NULL, (LPCTSTR)lpMsgBuf, TEXT("Error!"), MB_OK | MB_ICONINFORMATION);
	}
	else {
		TCHAR Buffer[2048];
		wsprintf(Buffer, TEXT("%s\n%s"), Mensaje, (LPCTSTR)lpMsgBuf);
		MessageBox(NULL, Buffer, TEXT("Error"), MB_OK | MB_ICONINFORMATION);
	}

	LocalFree(lpMsgBuf);
}
// -[FIN devildrey33.VentanaInstalador::_MostrarUltimoError]-


