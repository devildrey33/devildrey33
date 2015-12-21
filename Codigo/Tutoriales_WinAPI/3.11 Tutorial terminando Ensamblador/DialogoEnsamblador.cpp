#include "DialogoEnsamblador.h"
#include "resource.h"
#include "..\Objetos Tutorial\ObjetoZLIB.h"
#include "..\Objetos Tutorial\ObjetoDirectoriosWindows.h"

// Constructor
DialogoEnsamblador::DialogoEnsamblador(void) : IPRJ(Lista, Arbol, Path_Destino, Path_Instalar, Path_Defecto, Barra_Total) {
	Crear();
}

// Función que enlaza con el mensaje WM_CLOSE
BOOL DialogoEnsamblador::Evento_Cerrar(void) { 		
    PostQuitMessage(0);
    return ObjetoDialogo::Evento_Cerrar();
};


// Función que crea el dialogo para el ensamblador
void DialogoEnsamblador::Crear(void) {
	// Creo el dialogo
	CrearDialogo(IDD_ENSAMBLADOR);
	// Enlazo los Button con los ObjetoButton
	Boton_NuevoProyecto.Asignar(_hWnd, IDC_NUEVO);
	Boton_AbrirProyecto.Asignar(_hWnd, IDC_CARGAR);
	Boton_GuardarProyecto.Asignar(_hWnd, IDC_GUARDAR);
	Boton_AgregarArchivos.Asignar(_hWnd, IDC_AGREGAR_ARCHIVO);
	Boton_AgregarDirectorios.Asignar(_hWnd, IDC_AGREGAR_DIRECTORIO);
	Boton_BorrarSeleccionado.Asignar(_hWnd, IDC_BORRAR);
	Boton_CrearInstalador.Asignar(_hWnd, IDC_CREAR);
	Boton_Buscar.Asignar(_hWnd, IDC_BUSCAR);
	// Enlazo la ProgressBar con el ObjetoProgressBar
	Barra_Total.Asignar(_hWnd, IDC_TOTAL);
	// Enlazo la ListView con el ObjetoListView
	Lista.Asignar(_hWnd, IDC_LISTA);
	Lista.AgregarColumna(TEXT("Path absoluto"), 300);
	Lista.AgregarColumna(TEXT("Path relativo"), 150);
	// Enlazo el TreeView con el ObjetoTreeView
	Arbol.Asignar(_hWnd, IDC_ARBOL);
	// Enlazo los EditBox con los ObjetoEditBox
	Path_Destino.Asignar(_hWnd, IDC_EDIT_PATH);
	Path_Instalar.Asignar(_hWnd, IDC_RUTA_INSTALAR);
	Path_Instalar.AsignarTexto(TEXT("..\\..\\Debug\\3.10 Tutorial TerminandoInstalador.exe"));
	// Enlazo el ComboBox con el ObjetoComboBox
	Path_Defecto.Asignar(_hWnd, IDC_COMBO_PATH);
	TCHAR Paths[MAX_PATH];
	ObjetoDirectoriosWindows Directorios;
	Directorios.ArchivosDeProgramaX86(Paths);
	Path_Defecto.InstertarString(TEXT("C:"));
	Path_Defecto.InstertarString(Paths);
	Path_Defecto.Seleccion(0);
	_ActivarControles(false);
	Visible(true);
};

// Función para activar / desactivar los controles del dialogo que no deben ser usados si no hay un proyecto
void DialogoEnsamblador::_ActivarControles(const bool nActivar) {
	Boton_GuardarProyecto.Activado(nActivar);
	Boton_AgregarArchivos.Activado(nActivar);
	Boton_AgregarDirectorios.Activado(nActivar);
	Boton_BorrarSeleccionado.Activado(nActivar);
	Boton_CrearInstalador.Activado(nActivar);
	Boton_Buscar.Activado(nActivar);
	Lista.Activado(nActivar);
	Arbol.Activado(nActivar);
	Path_Destino.Activado(nActivar);
	Path_Instalar.Activado(nActivar);
	Path_Defecto.Activado(nActivar);
}

// Función para mostrar un dialogo nuevo poryecto
void DialogoEnsamblador::NuevoProyecto(void) {
	ObjetoDlgAbrir       oAbrir;
	DialogoNuevoProyecto NP;
	const TCHAR         *nNombreProyecto;
	TCHAR                Txt[512];
	nNombreProyecto = NP.Mostrar(_hWnd);
	if (nNombreProyecto != NULL) {
		IPRJ.Nuevo(nNombreProyecto);
		Arbol.AgregarNodo(NULL, IPRJ.Nombre(), 0);
		_ActivarControles(true);
		swprintf_s(Txt, 512, TEXT("Ensamblador (Proyecto : %s)"), IPRJ.Nombre());
		SetWindowText(_hWnd, Txt);
	}
}

// Función para mostrar un dialogo abrir proyecto
void DialogoEnsamblador::CargarProyecto(void) {
	UINT                 Abiertos = 0;
	ObjetoDlgAbrir       oAbrir;
	TCHAR                Txt[512];
	Abiertos = oAbrir.MostrarAbrir(_hWnd, TEXT("Abrir proyecto"), TEXT("."), TEXT("Proyecto de instalación\0*.IPRJ\0\0"));
	if (Abiertos > 0) {
		_ActivarControles(true);
		IPRJ.Abrir(oAbrir.Archivo(0));
		swprintf_s(Txt, 512, TEXT("Ensamblador (Proyecto : %s)"), IPRJ.Nombre());
		SetWindowText(_hWnd, Txt);
	}
}

// Función para mostrar un dialogo guardar proyecto
void DialogoEnsamblador::GuardarProyecto(void) {
	ObjetoDlgGuardar     oGuardar;
	TCHAR                Tmp[512];
	TCHAR                PathGuardar[MAX_PATH + 1];
	const TCHAR         *PathG = oGuardar.MostrarGuardar(_hWnd, TEXT("Guardar proyecto"), 0, TEXT("Proyecto de instalación\0*.IPRJ\0\0"));
	UINT                 Tam = 0;
	if (PathG != NULL) {
		Tam = wcslen(PathG) + 1;
		wcscpy_s(PathGuardar, MAX_PATH + 1, PathG);
		// Si no se ha introducido la extension la agregamos
		if (PathG[Tam - 6] != TEXT('.')) 
			wcscat_s(PathGuardar, MAX_PATH + 1, TEXT(".IPRJ"));

		// Miramos si ya existe el archivo y le damos opcion al usuario para cancelar
		if (GetShortPathName(PathGuardar, Tmp, 512) != 0) {
			swprintf_s(Tmp, 512, TEXT("El archivo ya existe, deseas sobre-escribirlo? : \n%s"), PathGuardar);
			if (MessageBox(_hWnd, Tmp, TEXT("El proyecto ya existe!"), MB_YESNO) == IDNO) return;
		}

		// Guardamos el proyecto (si devuelve false es que sucedio un error)
		if (IPRJ.Guardar(PathGuardar) == FALSE) {
			swprintf_s(Tmp, 512, TEXT("Error guardando el proyecto %s"), PathGuardar);
			_MostrarUltimoError(Tmp);
		}
	}
}

// Función para mostrar un dialogo de seleccion de archivos
void DialogoEnsamblador::AgregarArchivos(void) {
	ObjetoDlgAbrir       oAbrir;
	TCHAR                PathRelativo[MAX_PATH + 1];
	UINT                 Tam      = 0;
	UINT                 i        = 0;
	UINT				 i2       = 0;
	TCHAR               *Path     = NULL;
	UINT                 Abiertos = 0;
	Abiertos = oAbrir.MostrarAbrir(_hWnd, TEXT("Agregar archivos"), TEXT("."), TEXT("Todos los archivos\0*.*\0\0"), true);
	for (i = 0; i < Abiertos; i++) {
		Path = oAbrir[i];
		Tam = wcslen(Path);
		for (i2 = Tam; i2 > 0; i2--) {
			if (Path[i2] == TEXT('\\')) break;
		}
		swprintf_s(PathRelativo, MAX_PATH + 1, TEXT("%s"), &Path[i2]);
		if (_BuscarPathAbsoluto(Path) == FALSE) {
			Lista.AgregarItem(0, PathRelativo, Path);
		}
	}
}

// Función para mostrar un dialogo de seleccion de directorios
void DialogoEnsamblador::AgregarDirectorio(void) {
	ObjetoDlgDirectorios oDirectorios;
	const TCHAR *PathInicial = oDirectorios.MostrarDirectorios(_hWnd, TEXT("Selecciona el directorio a añadir"), true);
	if (PathInicial != NULL) _AgregarArchivosRecursivo(PathInicial);
}


// -[INICIO devildrey33.DialogoEnsamblador::_AgregarArchivosRecursivo]-
// Función para agregar un directorio de forma recursiva
UINT DialogoEnsamblador::_AgregarArchivosRecursivo(const TCHAR *nPath, const UINT TamPathInicial) {
	WIN32_FIND_DATA		FindInfoPoint;
	HANDLE				hFind = NULL;
	bool                Valido = false;
	TCHAR               PathFinal[MAX_PATH +1];
	TCHAR               PathTmp[MAX_PATH +1];
	TCHAR               PathRelativoTmp[MAX_PATH +1];
	UINT                TamInicial = 0;
	UINT                Tam = wcslen(nPath);

	wcscpy_s(PathFinal, MAX_PATH +1, nPath);
	// Agrego una antibarra al final, si no la lleva
	if (PathFinal[Tam -1] != TEXT('\\')) {
		Tam ++;
		wcscat_s(PathFinal, TEXT("\\"));
	}
	wcscat_s(PathFinal, TEXT("*.*"));

	// Especifico el tamaño inicial del path
	if (TamPathInicial == 0)	TamInicial = Tam;
	else						TamInicial = TamPathInicial;

	// Busco archivos recursivamente
	hFind = FindFirstFile(PathFinal, &FindInfoPoint);
	if (hFind == INVALID_HANDLE_VALUE) return 0;
	do {
		wcscpy_s(PathTmp, MAX_PATH +1, PathFinal);
		PathTmp[Tam] = 0;
		Valido = true;
		// Comprobamos la validez del archivo (basicamente por si es el directorio "." o el directorio "..")	
		if (FindInfoPoint.cFileName[0] == TEXT('.')) {
			if (FindInfoPoint.cFileName[1] == 0)                                                 Valido = false;
		    else if (FindInfoPoint.cFileName[1] == TEXT('.') && FindInfoPoint.cFileName[2] == 0) Valido = false;
		}
		if (Valido == true) {
			wcscat_s(PathTmp, MAX_PATH +1, FindInfoPoint.cFileName);
			if (FindInfoPoint.dwFileAttributes & FILE_ATTRIBUTE_DIRECTORY) {
				// Si es un directorio realizo una nueva busqueda recursiva dentro de el
				_AgregarArchivosRecursivo(PathTmp, TamInicial);
			}
			else { 
				// Si es un archivo lo añado a la lista, y analizo sus directorios
				wcscpy_s(PathRelativoTmp, MAX_PATH +1, TEXT("\\"));
				wcscat_s(PathRelativoTmp, MAX_PATH +1, &PathTmp[TamInicial]);
				if (_BuscarPathAbsoluto(PathTmp) == FALSE) {
					IPRJ.AnalizarRuta(PathRelativoTmp);
					Lista.AgregarItem(0, PathRelativoTmp, PathTmp);
				}
			}
		}
	} while (FindNextFile(hFind, &FindInfoPoint) != 0);
	return 0;
}
// -[FIN devildrey33.DialogoEnsamblador::_AgregarArchivosRecursivo]-


// Función que nos dice si el path esta ya en la lista
BOOL DialogoEnsamblador::_BuscarPathAbsoluto(const TCHAR *nPath) {
	UINT  TotalItems = Lista.TotalItems();
	TCHAR TmpTxt[MAX_PATH +1];
	for (UINT i = 0; i < TotalItems; i++) {
		Lista.ObtenerTexto(i, 1, TmpTxt, MAX_PATH +1);
		if (_wcsicmp(TmpTxt, nPath) == 0) return TRUE;
	}
	return FALSE;
}

// Función que borra los archivos seleccionados de la lista
void DialogoEnsamblador::BorrarSeleccionado(void) {
	UINT TotalItems = Lista.TotalItems();
	for (UINT i = Lista.TotalItems(); i != 0; i--) {
		if (Lista.Seleccionado(i - 1) == TRUE) Lista.BorrarItem(i - 1);
	}
	Arbol.BorrarTodo();
	TCHAR Tmp[MAX_PATH + 1];
	Path_Destino.ObtenerTexto(Tmp, MAX_PATH +1);
	Arbol.AgregarNodo(NULL, Tmp, 0);
	TotalItems = Lista.TotalItems();
	for (UINT i = 0; i < TotalItems; i++) {
		Lista.ObtenerTexto(i, 0, Tmp, MAX_PATH +1);
		IPRJ.AnalizarRuta(Tmp);
	}
}


// Función que muestra un dialogo para buscar el Instalar.exe
void DialogoEnsamblador::BuscarEXE(void) {
	UINT                 Abiertos = 0;
	ObjetoDlgAbrir       oAbrir;
	Abiertos = oAbrir.MostrarAbrir(_hWnd, TEXT("Buscar Instalar.exe"), TEXT("."), TEXT("Archivos Ejecutables\0*.Exe\0\0"));
	if (Abiertos > 0) {
		Path_Instalar.AsignarTexto(oAbrir.Archivo(0));
	}
}

// -[INICIO devildrey33.DialogoEnsamblador::CrearInstalador]-
// Función que crea el instalar.exe con los archivos de la lista
void DialogoEnsamblador::CrearInstalador(void) {
	TCHAR PathDestino[MAX_PATH +1];
	TCHAR Tmp2[512];
	TCHAR TmpRelativo[512];
	TCHAR PathInstalarExe[MAX_PATH +1];
	TCHAR Mensaje[512];

	// 1 - Comprobación de datos
	// 1.1 No hay archivos para la instalación
	if (Lista.TotalItems() == 0) {
		MessageBox(_hWnd, TEXT("No se han añadido archivos al instalador"), TEXT("Error!"), MB_OK);
		return;
	}

	// 1.2 La ruta destino de la instalación no es valida
	Path_Destino.ObtenerTexto(PathDestino, MAX_PATH + 1);
	if (_PathValido(PathDestino) == FALSE) {
		MessageBox( _hWnd, 
                    TEXT("La ruta especificada no es válida. \nLa ruta no puede tener los siguientes caracteres / : * ? \" < > |"),
                    TEXT("Error"), MB_OK );
		Path_Destino.AsignarFoco();
		return;
	}

	// 1.3 El archivo Instalar.exe no existe
	Path_Instalar.ObtenerTexto(PathInstalarExe, MAX_PATH + 1);
	HANDLE HInstalar   = CreateFile(PathInstalarExe, FILE_READ_DATA, 0, 0, OPEN_EXISTING, FILE_ATTRIBUTE_NORMAL, 0);
	DWORD  TamInstalar = GetFileSize(HInstalar, NULL);
	if (HInstalar == INVALID_HANDLE_VALUE) {
		// Si estas ejecutando el ejemplo de www.devildrey33.es y te sale este error, compila el ejemplo 3.10 Terminando Instalador
		swprintf_s( Tmp2, 512, TEXT("No se encuentra el archivo : %s \nSin este archivo no se puede crear el instalador."),
                    PathInstalarExe);
		MessageBox(_hWnd, Tmp2, TEXT("Error!"), MB_OK);
		Path_Instalar.AsignarFoco();
		return;
	}
	CloseHandle(HInstalar);
	HInstalar = NULL;

	// 2 - Creación del instalador
	// 2.1 Abrimos el archivo destino
	ObjetoArchivo InstalarExe;
	ObjetoArchivo ArchivoL; // NOTA hay que hacer que se valide el nombre del proyecto o podria incluir caracteres no validos
	swprintf_s(Tmp2, 512, TEXT("..\\Instalar %s.exe"), IPRJ.Nombre());
	if (InstalarExe.AbrirArchivoEscritura(Tmp2, true) == FALSE) {
		swprintf_s(Mensaje, 512, TEXT("Error creando el archivo %s."), Tmp2);
		_MostrarUltimoError(Mensaje);
		return;
	}
	// 2.2 Leemos el contenido del Instalar.exe y lo volcamos al Instalador final.
	ArchivoL.AbrirArchivoLectura(PathInstalarExe);
	char *Buffer = new char[TamInstalar];
	ArchivoL.Leer(Buffer, TamInstalar * sizeof(char));
	InstalarExe.Guardar(Buffer, TamInstalar * sizeof(char));
	delete [] Buffer;
	// 2.3 Guardamos el directorio destino
	InstalarExe.GuardarUINT(Path_Defecto.Seleccion());
	InstalarExe.GuardarString(PathDestino);
	// 2.4 Parseamos el arbol para crear la estructura de directorios y la guardamos
	UINT TotalDirectorios = Arbol.TotalNodos() - 1; // Restamos 1 porque el root ya se creara por otro lado
	InstalarExe.GuardarUINT(TotalDirectorios);      // Guardamos el total de directorios
	_ArbolRecursivo(InstalarExe);

	// 2.5 Comprimimos y guardamos los archivos
	UINT              TotalArchivos = Lista.TotalItems();
	ObjetoZLIB        Compresor;
	ContenedorBinario ArchivoComprimido;
	InstalarExe.GuardarUINT(TotalArchivos);                                     // Guardamos el total de archivos
	Barra_Total.AsignarRango(0, TotalArchivos);
	for (UINT i = 0; i < TotalArchivos; i++) {
		Lista.ObtenerTexto(i, 1, Tmp2, 512);                                    // Obtenemos la ruta absoluta del archivo
		Lista.ObtenerTexto(i, 0, TmpRelativo, 512);                             // Obtenemos la ruta relativa del archivo
		InstalarExe.GuardarString(TmpRelativo);                                 // Guardamos la ruta relativa dentro del Instalar.exe
		Compresor.Comprimir(Tmp2, ArchivoComprimido);                           // Comprimimos el archivo en memoria
		InstalarExe.GuardarUINT(ArchivoComprimido.Longitud());                  // Guardamos el tamaño de los datos comprimidos
		InstalarExe.Guardar(ArchivoComprimido(), ArchivoComprimido.Longitud()); // Guardamos los datos comprimidos en el Instalar.exe
		Barra_Total.Valor(i);
		// esperar eventos
	}
	
	// 2.6 Guardamos el tamaño original del Instalar.exe al final del archivo
	InstalarExe.GuardarDWORD(TamInstalar); 
	// 2.7 Guardamos la cabecera al final de todo para saber si el instalar.exe esta vacio o lleno.
	TCHAR Cabecera[32] = TEXT("Instalador 1.0 devildrey33     ");
	InstalarExe.Guardar(Cabecera, sizeof(TCHAR) * 32); 


	MessageBox( _hWnd, TEXT("El instalador se ha creado correctamente en el directorio '3.11 Tutorial terminando Ensamblador'."),
                TEXT("Instalador creado"), MB_OK);
}
// -[FIN devildrey33.DialogoEnsamblador::CrearInstalador]-

// Función para mostrar el ultimo error con FormatMessage añadiendo un texto personalizado
void DialogoEnsamblador::_MostrarUltimoError(const TCHAR *Mensaje) {
	DWORD  ErrNum = GetLastError();
	LPVOID lpMsgBuf;
	if (ErrNum == 0) return;
	FormatMessage(FORMAT_MESSAGE_ALLOCATE_BUFFER | FORMAT_MESSAGE_FROM_SYSTEM | FORMAT_MESSAGE_IGNORE_INSERTS, NULL, ErrNum, MAKELANGID(LANG_NEUTRAL, SUBLANG_DEFAULT), (LPTSTR) &lpMsgBuf, 0, NULL);
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

// Función para imprimir texto en la ventana Resultados
void DialogoEnsamblador::_ImprimirDebug(const TCHAR *Txt, ...) {
	TCHAR       T[512];
	va_list     Marker;
	va_start(Marker, Txt);     
	vswprintf_s(T, 512, Txt, Marker);
	va_end(Marker);
	OutputDebugString(T);
}

// -[INICIO devildrey33.DialogoEnsamblador::_ArbolRecursivo]-
// Función que recorre todos los nodos para construir la jerarquia de directorios
UINT DialogoEnsamblador::_ArbolRecursivo(ObjetoArchivo &InstalarExe, HTREEITEM nNodo, TCHAR *PathActual, const bool Root) {
	TCHAR     nPathActual[512];
	TCHAR     Tmp[512];
	HTREEITEM NodoTmp          = NULL;
	HTREEITEM Hijo             = NULL;
	UINT      TotalDirectorios = 0;
	
	// Si el nNodo es NULL asignamos el nodo ROOT
	if (nNodo == NULL)  NodoTmp = Arbol.NodoRoot();
	else				NodoTmp = nNodo;

	// Mientras NodoTmp no sea NULL
	while (NodoTmp != NULL) {
		// Obtenemos el primer hijo de NodoTmp o NULL si no hay ninguno
		Hijo = Arbol.NodoHijo(NodoTmp);
		// Si no es el nodo ROOT
		if (Root == false) {
			Arbol.ObtenerTexto(NodoTmp, Tmp, 512);
			// Añadimos PathActual al principio del nPathActual, y al final agregamos el nombre del nodo actual
			swprintf_s(nPathActual, 512, TEXT("%s\\%s"), PathActual, Tmp);
			_ImprimirDebug(TEXT("%s\n"), nPathActual);
			// Guardamos la ruta completa del directorio
			InstalarExe.GuardarString(nPathActual);
			TotalDirectorios ++;
		}
		else {
			// Si es el nodo ROOT dejamos PathActual tal y como esta
			wcscpy_s(nPathActual, 512, PathActual);
		}
		// Si el Hijo no es NULL lo escaneamos recursivamente
		if (Hijo != NULL) TotalDirectorios += _ArbolRecursivo(InstalarExe, Hijo, nPathActual, false);
		// Asignamos como nodo actual el siguiente nodo
		NodoTmp = Arbol.NodoSiguiente(NodoTmp);
	}
	// Devolvemos el total de directorios a crear
	return TotalDirectorios;
}
// -[FIN devildrey33.DialogoEnsamblador::_ArbolRecursivo]-


// Función que recibe cuando se pulsa un Button de windows
BOOL DialogoEnsamblador::Evento_Comando(const UINT nID, const UINT nNotificacion, HWND hWndControl) {
	TCHAR Txt[MAX_PATH +1];
	switch (nID) {
		case IDC_NUEVO :				NuevoProyecto();			return 0;
		case IDC_CARGAR :				CargarProyecto();			return 0;
		case IDC_GUARDAR :				GuardarProyecto();			return 0;
		case IDC_AGREGAR_ARCHIVO :		AgregarArchivos();			return 0;
		case IDC_AGREGAR_DIRECTORIO :	AgregarDirectorio();		return 0;
		case IDC_BORRAR :				BorrarSeleccionado();       return 0;
		case IDC_BUSCAR :				BuscarEXE();                return 0;
		case IDC_CREAR :				CrearInstalador();          return 0;
		case IDC_EDIT_PATH :            
			if (nNotificacion == EN_CHANGE) {
				Path_Destino.ObtenerTexto(Txt, MAX_PATH + 1);
				Arbol.AsignarTexto(Arbol.NodoRoot(), Txt);
			}
			break;
	}
	return ObjetoDialogo::Evento_Comando(nID, nNotificacion, hWndControl);
}


// Función que comprueba si la ruta del path relativa tiene caracteres invalidos
// Los caracteres / : * ? " < > | no son válidos para crear archivos y directorios
BOOL DialogoEnsamblador::_PathValido(const TCHAR *nText) {
	UINT Tam = wcslen(nText);
	for (UINT i = 0; i < Tam; i++) {
		switch (nText[i]) {
			case TEXT('/') :    case TEXT(':') :    case TEXT('*') :   case TEXT('?') :
			case TEXT('"') :    case TEXT('<') :    case TEXT('>') :   case TEXT('|') :
				return FALSE;
		}
	}
	return TRUE;
}



/*
// Función que recibe notificaciones de los controles estandar
BOOL DialogoEnsamblador::Evento_Notificacion(const UINT cID, LPNMHDR Datos) {
	LV_DISPINFO *LVI;
	TCHAR        Tmp[MAX_PATH +1] = TEXT("\\");
	UINT         Tam;
	switch (cID) {
		case IDC_LISTA :
			if (Datos->code == LVN_ENDLABELEDIT) {
				LVI = reinterpret_cast<LV_DISPINFO *>(Datos);
				
				if (_PathValido(LVI->item.pszText) == FALSE) {
					MessageBox(_hWnd, TEXT("La ruta especificada no es válida. \nLa ruta no puede tener los siguientes caracteres / : * ? \" < > |"), TEXT("Error"), MB_OK);
					return FALSE;
				}

				// Introducimos la primera antibarra si no esta
				if (LVI->item.pszText[0] != TEXT('\\')) {
					wcscat_s(Tmp, MAX_PATH + 1, LVI->item.pszText);
					wcscpy_s(LVI->item.pszText, LVI->item.cchTextMax, Tmp);
				}
				Tam = wcslen(LVI->item.pszText);
//				LVI->item.cchTextMax = Tam;
//				LVI->item.mask = LVIF_TEXT;

				if (Tam < 2) {
					MessageBox(_hWnd, TEXT("Debes introducir una ruta que empieze por \\"), TEXT("Error"), MB_OK);
					return FALSE;
				}

				return TRUE;
			}

	}
	return FALSE;
}*/