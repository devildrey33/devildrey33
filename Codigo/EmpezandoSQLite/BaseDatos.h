#pragma once

#include "sqlite3.h"

class BaseDatos {
  public: ////////
				// Constructor
				BaseDatos(void);
				// Destructor
		       ~BaseDatos(void);
			    // Función que inicia la base de datos (devuelve FALSE en caso de error)
    const int   Iniciar(void);
				// Función para realizar consultas simples que no devuelven datos (CREATE TABLE, INSERT, etc..)
	const int   Consulta(const wchar_t *ConsultaSQL);
				// Función que crea una tabla con la que trabajaremos. (devuelve FALSE si la tabla ya existe)
	const int   CrearTabla(void);
				// Función que inserta los valores especificados en la base de datos
	const int   Insertar(const wchar_t *Nombre, const unsigned int Edad);
				// Función que rellena la tabla con datos (solo se usa cuando CrearTabla devuelve TRUE)
	const int   InsertarDatosPorDefecto(void);
				// Función que imprime por la consola los datos que contiene la BD
	const int   MostrarDatos(void);
				// Función que guarda los datos y cierra la bd
	void	    Terminar(void);
  protected: /////
				// Puntero a la estructura sqlite3 que contiene la base de datos
	sqlite3   *_BD;
};              //
//////////////////

