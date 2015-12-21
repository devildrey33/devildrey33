#include "ObjetoZLIB.h"
#include "..\zlib\zlib.h"

#define CHUNK 16384

// Constructor
ObjetoZLIB::ObjetoZLIB(void) {
}

// Destructor
ObjetoZLIB::~ObjetoZLIB(void) {
}


// -[INICIO devildrey33.ObjetoZLIB::Comprimir]-
const BOOL ObjetoZLIB::Comprimir(const TCHAR *nPathOrigen, ContenedorBinario &Datos) {
    ObjetoArchivo Origen;
	Datos.Borrar();
	// Si el archivo origen no se puede abrir retornamos FALSE
    if (Origen.AbrirArchivoLectura(nPathOrigen) == false) return FALSE;

    int ret, flush;
    unsigned have;
    z_stream strm;
    char in[CHUNK];
    char out[CHUNK];

    // Inicialización
    strm.zalloc = Z_NULL;
    strm.zfree = Z_NULL;
    strm.opaque = Z_NULL;
    ret = deflateInit(&strm, 5);
    if (ret != Z_OK) return FALSE;

    // Comprimimos hasta el final del archivo
	do {
        strm.avail_in = Origen.Leer(&in, CHUNK * sizeof(char));
		flush = Origen.FinalDelArchivo() ? Z_FINISH : Z_NO_FLUSH;
        strm.next_in = reinterpret_cast<Bytef *>(&in[0]);

		// Ejecutamos deflate hasta que comprimamos todo el archivo
        do {
            strm.avail_out = CHUNK;
            strm.next_out = reinterpret_cast<Bytef *>(&out[0]);
            ret = deflate(&strm, flush); 
            have = CHUNK - strm.avail_out;
			Datos.AgregarParte(out, have);
        } while (strm.avail_out == 0);
	
	} while (flush != Z_FINISH);

    // Liberamos la memoria usada por la zlib
    deflateEnd(&strm);
    return TRUE;
}
// -[FIN devildrey33.ObjetoZLIB::Comprimir]-

// -[INICIO devildrey33.ObjetoZLIB::Descomprimir]-
const BOOL ObjetoZLIB::Descomprimir(ContenedorBinario &Datos, const TCHAR *nPathDestino) {
	ObjetoArchivo Destino;
	// Si el archivo destino no se puede abrir retornamos FALSE
    if (Destino.AbrirArchivoEscritura(nPathDestino, true) == FALSE) return FALSE;

    int ret;
    unsigned have;
    z_stream strm;
    char in[CHUNK] = "";
    char out[CHUNK] = "";

	unsigned int Posicion = 0;

    // Inicialización
    strm.zalloc = Z_NULL;
    strm.zfree = Z_NULL;
    strm.opaque = Z_NULL;
    strm.avail_in = 0;
    strm.next_in = Z_NULL;
    ret = inflateInit(&strm);
    if (ret != Z_OK) return FALSE;

	// Descomprimimos hasta que se terminen los datos
    do {
		if (Posicion + CHUNK < Datos.Longitud()) {
			memcpy(in, Datos[Posicion], CHUNK);
			strm.avail_in = CHUNK;
		}
		else {
			memcpy(in, Datos[Posicion], Datos.Longitud() - Posicion);
            strm.avail_in = Datos.Longitud() - Posicion;
		}
		Posicion += CHUNK;

        if (strm.avail_in == 0)
            break;
        strm.next_in = reinterpret_cast<Bytef *>(&in[0]);

		// Ejecutamos inflate para extraer los datos
        do {
            strm.avail_out = CHUNK;
            strm.next_out = reinterpret_cast<Bytef *>(&out[0]);
            ret = inflate(&strm, Z_NO_FLUSH);
            switch (ret) {
				case Z_NEED_DICT:
					ret = Z_DATA_ERROR;
				case Z_DATA_ERROR:
				case Z_MEM_ERROR:
					(void)inflateEnd(&strm);
					return ret;
            }
            have = CHUNK - strm.avail_out;
			Destino.Guardar(out, have);
        } while (strm.avail_out == 0);

      // Terminamos cuando inflate retorne Z_STREAM_END
    } while (ret != Z_STREAM_END);

    // Liberamos la memoria usada por la ZLIB
    inflateEnd(&strm);
    return (ret == Z_STREAM_END) ? TRUE : FALSE;
}
// -[FIN devildrey33.ObjetoZLIB::Descomprimir]-

