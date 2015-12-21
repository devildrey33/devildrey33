#include "ProyectoIPRJ.h"
#include "..\Objetos Tutorial\ObjetoArchivo.h"

TCHAR Cabecera[24] = TEXT("IPRJ 1.0  devildrey33  ");

ProyectoIPRJ::ProyectoIPRJ( ObjetoListView &Lista, ObjetoTreeView &Arbol, ObjetoEditBox &Path_Destino, 
                            ObjetoEditBox &Path_Instalar, ObjetoComboBox &Path_Defecto, ObjetoProgressBar &Barra_Total) :
		                     _Lista(Lista), _Arbol(Arbol), _Path_Destino(Path_Destino), _Path_Instalar(Path_Instalar),
		    	             _Path_Defecto(Path_Defecto), _Barra_Total(Barra_Total), _Nombre(NULL)                       { 
};


ProyectoIPRJ::~ProyectoIPRJ(void) {
	if (_Nombre != NULL) delete [] _Nombre; 
};

void ProyectoIPRJ::Nuevo(const TCHAR *nNombre) { 
	UINT Tam = wcslen(nNombre) + 1;
	if (_Nombre != NULL) delete [] _Nombre;
	_Nombre = new TCHAR[Tam];
	wcscpy_s(_Nombre, Tam, nNombre);
	_Lista.BorrarItems();
	_Arbol.BorrarTodo();
	_Path_Destino.AsignarTexto(nNombre);
};


// Estructura del proyecto dentro del archivo binario :
// - 1 Cabecera                  => TCHAR 24 caracteres
// - 2 Nombre proyecto 
//     - TotalCaracteres         => UINT con el total de caracteres del path instalar
//     - Cadena de caracteres    => TCHAR * TotalCaracteres
// - 3 Path_Instalar (path del Instalar.exe)
//     - TotalCaracteres         => UINT con el total de caracteres del path instalar
//     - Cadena de caracteres    => TCHAR * TotalCaracteres
// - 4 Path_Destino (nuestro nombre de proyecto por defecto)
//     - TotalCaracteres         => UINT con el total de caracteres del path por defecto
//     - Cadena de caracteres    => TCHAR * TotalCaracteres
// - 5 Path_Defecto              => UINT que contiene el path inicial por defecto (C:\Archivos de programa, C:\, etc..)
// - 6 TotalArchivos             => UINT que contiene el total de archivos
// - 7 Archivos (Los archivos se componen de un path absoluto y uno relativo)
//     - Path_Relativo (ruta relativa a la instalación)     
//       - TotalCaracteres       => UINT con el total de caracteres del path por defecto
//       - Cadena de caracteres  => TCHAR * TotalCaracteres
//     - Path_Absoluto (ruta de nuestro disco duro)       
//       - TotalCaracteres       => UINT con el total de caracteres del path por defecto
//       - Cadena de caracteres  => TCHAR * TotalCaracteres
BOOL ProyectoIPRJ::Guardar(const TCHAR *nPath) {
	UINT TotalArchivos = _Lista.TotalItems();
	TCHAR TmpTxt[MAX_PATH + 1];

	ObjetoArchivo Archivo;
	if (Archivo.AbrirArchivoEscritura(nPath, true) == TRUE) {
		Archivo.Guardar(Cabecera, 24 * sizeof(TCHAR));        // 1
		Archivo.GuardarString(_Nombre);                       // 2
		_Path_Instalar.ObtenerTexto(TmpTxt, MAX_PATH +1);
		Archivo.GuardarString(TmpTxt);                        // 3
		_Path_Destino.ObtenerTexto(TmpTxt, MAX_PATH +1);
		Archivo.GuardarString(TmpTxt);                        // 4
		Archivo.GuardarUINT(_Path_Defecto.Seleccion());       // 5  
		Archivo.GuardarUINT(TotalArchivos);                   // 6
		for (UINT i = 0; i < TotalArchivos; i++) {            // 7
			_Lista.ObtenerTexto(i, 0, TmpTxt, MAX_PATH + 1);
			Archivo.GuardarString(TmpTxt);
			_Lista.ObtenerTexto(i, 1, TmpTxt, MAX_PATH + 1);
			Archivo.GuardarString(TmpTxt);
		}
		return TRUE;
	}
	else {
		return FALSE;
	}
}


void ProyectoIPRJ::Abrir(const TCHAR *nPath) {
	ObjetoArchivo Archivo;
	TCHAR CabeceraComp[24];
	TCHAR *Tmp     = NULL;
	TCHAR *Tmp2    = NULL;
	UINT   TmpUINT = 0;
	if (Archivo.AbrirArchivoLectura(nPath) == TRUE) {
		// Inicio un nuevo proyecto
		_Lista.BorrarItems();
		_Arbol.BorrarTodo();
		if (_Nombre != NULL) delete [] _Nombre;

		// 1 Leo y comparo la cabecera
		Archivo.Leer(CabeceraComp, 24 * sizeof(TCHAR));
		if (_wcsicmp(CabeceraComp, Cabecera) != 0) {
			MessageBox(NULL, TEXT("Error! la cabecera del archivo no es valida!."), TEXT("Error!"), MB_ICONERROR);
			return;
		}
		// 2 Leo el nombre del proyecto
		Archivo.LeerString(_Nombre);
		// 3 Leo el path del instalar.exe
		Archivo.LeerString(Tmp);
		_Path_Instalar.AsignarTexto(Tmp);
		delete [] Tmp;
		// 4 Leo el path destino
		Archivo.LeerString(Tmp);
		_Path_Destino.AsignarTexto(Tmp);
		_Arbol.AgregarNodo(NULL, Tmp, 0);
		delete [] Tmp;
		// 5 Leo el path por defecto
		Archivo.LeerUINT(TmpUINT);
		_Path_Defecto.Seleccion(TmpUINT);
		// 5 Leo el total de archivos
		Archivo.LeerUINT(TmpUINT);
		for (UINT i = 0; i < TmpUINT; i++) {
			Archivo.LeerString(Tmp);
			Archivo.LeerString(Tmp2);
			AnalizarRuta(Tmp);
			_Lista.AgregarItem(0, Tmp, Tmp2);
			delete [] Tmp;
			delete [] Tmp2;
		}
	}
	else {
		MessageBox(NULL, TEXT("Error abriendo el proyecto!, la ruta especificada no es válida, o no tienes privilegios de lectura."), TEXT("Error!"), MB_ICONERROR);
	}
}



void ProyectoIPRJ::AnalizarRuta(const TCHAR *nPath) {
	UINT  Tam = wcslen(nPath);
	TCHAR TmpDir[MAX_PATH + 1];
	TCHAR TmpChar[MAX_PATH + 1];
	UINT  Conta = 0;
	bool  Agregar = true;
	HTREEITEM Parent = _Arbol.NodoRoot();
	HTREEITEM Tmp = NULL;
	for (UINT i = 1; i < Tam; i++) {
		if (nPath[i] == TEXT('\\')) {
			TmpDir[Conta] = 0;
			Conta = 0;
			Tmp = _Arbol.NodoHijo(Parent);
			Agregar = true;
			while (Tmp != NULL) {
				_Arbol.ObtenerTexto(Tmp, TmpChar, MAX_PATH +1);
				if (_wcsicmp(TmpChar, TmpDir) == 0) {
					Parent = Tmp;
					Agregar = false;
					break;
				}
				Tmp = _Arbol.NodoSiguiente(Tmp);
			}
			if (Agregar == true) {
				Parent = _Arbol.AgregarNodo(Parent, TmpDir, 0);
				_Arbol.ExpandirNodo(_Arbol.NodoPadre(Parent));
			}
		}
		else {
			TmpDir[Conta] = nPath[i];
			Conta ++;
		}
	}
}
