// Empezando con SQLite.cpp: define el punto de entrada de la aplicación de consola.
#include "stdafx.h"
#include "BaseDatos.h"
#include <iostream>

int _tmain(int argc, _TCHAR* argv[]) {
	BaseDatos    BD;
	int          Opcion  = -1;
	unsigned int TmpEdad =  0;
	wchar_t      TmpNombre[256];
	// Creación / apertura de la base de datos
	if (BD.Iniciar() == 0) {
		std::wcout << L"Error al crear la base de datos\n";
		return -1;
	}
	// Creación de la tabla
	if (BD.CrearTabla()) 
		BD.InsertarDatosPorDefecto(); // Si la tabla no existia insertamos los datos por defecto
	/* Opciones :
        0  Salir
		1  Insertar datos
		2  Mostrar datos  */
	while (Opcion != 0) {
		std::wcout << L"Opciones disponibles : 0 Salir, 1 Insertar datos, 2 Mostrar datos\n";
		std::wcin >> Opcion;
		switch (Opcion) {
			case 1 : // Insertar datos
				std::wcout << L"Introduce el nombre\n";
				std::wcin >> TmpNombre;
				std::wcout << L"Introduce la edad\n";
				std::wcin >> TmpEdad;
				BD.Insertar(TmpNombre, TmpEdad);
				std::wcout << L"Datos insertados correctamente\n";
				break;
			case 2 : // Mostrar datos
				BD.MostrarDatos();
				break;
		}
	}
	// Se ha salido del bucle principal de opciones, terminamos la BD y salimos.
	BD.Terminar();
	return 0;
}
