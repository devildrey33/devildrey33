#include "stdafx.h"
#include "BaseDatos.h"

#include <string>
#include <iostream>
#include <sstream>
#include <iomanip>

#include <Shlobj.h> // Para SHGetKnownFolderPath




/* Función plantilla que convierte cualquier tipo básico a cadena, se puede especificar si se quiere un número fijo de digitos */
template <typename T> std::wstring Valor_a_String(T Tmp, int Digitos = 0) {
	std::wostringstream out;
	if (Digitos > 1)	out << std::setfill(L'0') << std::setw(Digitos) << Tmp;
	else				out << Tmp;
	return out.str();
}




// Constructor vacio
BaseDatos::BaseDatos(void) : _BD(NULL) {
}

// Destructor que termina la base de datos y la guarda.
BaseDatos::~BaseDatos(void) {
	Terminar();
}

void BaseDatos::Terminar(void) {
	if (_BD != NULL) sqlite3_close_v2(_BD);
	_BD = NULL;
}


// En primer lugar debemos crear / abrir la base de datos desde una ruta válida en la que tengamos permisos de escritura.
// A partir de Windows vista necesitamos permisos de escritura en practicamente todo el disco,
// por lo que o bien abrimos la aplicación como administrador, o guardamos los datos en el directorio AppData.
// El directorio AppData puede ser distinto en cada maquina, y para obtenerlo debemos usar SHGetKnownFolderPath.
// NOTA : SHGetKnownFolderPath no funciona en windows xp.

// -[INICIO devildrey33.BaseDatos::Iniciar]-
/* Función para iniciar la base de datos, en caso de error retorna FALSE */
const int BaseDatos::Iniciar(void) {
	std::wstring TmpStr;
	PWSTR Tmp = NULL;
	// Obtengo el directorio AppData
	if (S_OK == SHGetKnownFolderPath(FOLDERID_ProgramData, NULL, 0, &Tmp)) {
		TmpStr = Tmp;
		CoTaskMemFree(Tmp);
	}
	TmpStr += L"\\Empezando con SQLite\\";
	// Si no existe el directorio "APPDATA\Empezando con SQLite\" lo creo.
	if (GetFileAttributes(TmpStr.c_str()) == INVALID_FILE_ATTRIBUTES)
		CreateDirectory(TmpStr.c_str(), NULL);
	// Una vez tenemos acceso a nuestro directorio podemos crear la base de datos.
	TmpStr += L"Base de Datos.bd";
	int Ret = 0;
	Ret = sqlite3_open16(TmpStr.c_str(), &_BD);
	if (Ret) {	// Error creando la BD
		const wchar_t *Error = reinterpret_cast<const wchar_t *>(sqlite3_errmsg16(_BD));
		std::wcout << Error << L"\n";
		sqlite3_close_v2(_BD);
		return FALSE;
	}
	return TRUE;
}
// -[FIN devildrey33.BaseDatos::Iniciar]-

// -[INICIO devildrey33.BaseDatos::Consulta]-
// Función para realizar consultas simples que no devuelven datos (CREATE TABLE, INSERT, etc..)
const int BaseDatos::Consulta(const wchar_t *ConsultaSQL) {
	int             SqlRet   = 0;
	sqlite3_stmt   *SqlQuery = NULL;
	SqlRet = sqlite3_prepare16_v2(_BD, ConsultaSQL, -1, &SqlQuery, NULL);
	if (SqlRet) {
		const wchar_t *Error = reinterpret_cast<const wchar_t *>(sqlite3_errmsg16(_BD));
		std::wcout << L"Error: " << Error << L"\n";
		return FALSE;
	}
	// Ejecutamos todos los pasos necesarios para la consulta
	while (SqlRet != SQLITE_DONE && SqlRet != SQLITE_ERROR) {
		SqlRet = sqlite3_step(SqlQuery);
	}
	sqlite3_finalize(SqlQuery);	
	if (SqlRet == SQLITE_ERROR) {
		const wchar_t *Error = reinterpret_cast<const wchar_t *>(sqlite3_errmsg16(_BD));
		std::wcout << L"Error: " << Error << L"\n";
		return FALSE;	// Error
	}
	return TRUE;
}
// -[FIN devildrey33.BaseDatos::Consulta]-

 
// -[INICIO devildrey33.BaseDatos::CrearTabla]-
// Función que crea una tabla con la que trabajaremos. (devuelve FALSE si la tabla ya existe)
const int BaseDatos::CrearTabla(void) {
	return Consulta(L"CREATE TABLE MiTabla (Id INTEGER PRIMARY KEY, Nombre VARCHAR(260), Edad INT)");
}
// -[FIN devildrey33.BaseDatos::CrearTabla]-

// -[INICIO devildrey33.BaseDatos::InsertarDatosPorDefecto]-
// Función que rellena la tabla con datos (solo se usa cuando CrearTabla devuelve TRUE)
const int BaseDatos::InsertarDatosPorDefecto(void) {
	// Especificamos que se trabaje en memoria
	int Ret = Consulta(L"BEGIN TRANSACTION");
	// Añado varias entradas
	Ret = Insertar(L"Ana", 27);
	Ret = Insertar(L"Barbara", 21);
	Ret = Insertar(L"Clara", 25);
	Ret = Insertar(L"devildrey33", 33);
	Ret = Insertar(L"Esteban", 31);
	Ret = Insertar(L"Francisco", 22);
	// Guardamos los datos al archivo de la base de datos	
	Ret = Consulta(L"COMMIT TRANSACTION");
	return TRUE;
}
// -[FIN devildrey33.BaseDatos::InsertarDatosPorDefecto]-


// -[INICIO devildrey33.BaseDatos::Insertar]-
// Función que inserta los valores especificados en la base de datos
const int BaseDatos::Insertar(const wchar_t *Nombre, const unsigned int Edad) {
	std::wstring TxtSql = L"INSERT INTO MiTabla (Nombre, Edad) VALUES(\"" + std::wstring(Nombre) + L"\", " + Valor_a_String(Edad) + L")";
	return Consulta(TxtSql.c_str());
}
// -[FIN devildrey33.BaseDatos::Insertar]-


// -[INICIO devildrey33.BaseDatos::MostrarDatos]-
const int BaseDatos::MostrarDatos(void) {
	int             SqlRet = 0;
	sqlite3_stmt   *SqlQuery = NULL;
	SqlRet = sqlite3_prepare16_v2(_BD, L"SELECT * FROM MiTabla", -1, &SqlQuery, NULL);
	if (SqlRet == SQLITE_ERROR) {
		const wchar_t *Error = reinterpret_cast<const wchar_t *>(sqlite3_errmsg16(_BD));
		std::wcout << L"Error: " << Error << L"\n";
		return FALSE;	// Error
	}
	std::wcout << L"---------------\n";
	// Ejecutamos todos los pasos necesarios para la consulta
	while (SqlRet != SQLITE_DONE && SqlRet != SQLITE_ERROR) {
		SqlRet = sqlite3_step(SqlQuery);
		if (SqlRet == SQLITE_ROW) {
			std::wcout << reinterpret_cast<const wchar_t *>(sqlite3_column_text16(SqlQuery, 1)); // Muestro el nombre 
			std::wcout << L"(";
			std::wcout << sqlite3_column_int(SqlQuery, 2);                                       // Muestro la edad 
			std::wcout << L")\n---------------\n";
		}
	}
	sqlite3_finalize(SqlQuery);
	if (SqlRet == SQLITE_ERROR) {
		const wchar_t *Error = reinterpret_cast<const wchar_t *>(sqlite3_errmsg16(_BD));
		std::wcout << L"Error: " << Error << L"\n";
		return FALSE;	// Error
	}
	return TRUE;
} 
// -[FIN devildrey33.BaseDatos::MostrarDatos]-








