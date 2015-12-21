// www.devildrey33.es
// Ejemplo 2.3 - Archivos y Directorios.
// En este ejemplo vemos como crear archivos en Windows
// A partir de Windows Vista los programas deben guardar sus datos en directorios especificos ya que al no tener permisos de administrador
// no pueden acceder a cualquier directorio.
// En windows Vista / 7 existen varios directorios en los que la aplicacion tiene acceso, como MisDocumentos o AppData/ProgramData.
// En Windows XP no hay tales restricciones por lo que se puede guardar datos en cualquier directorio, de todas formas siempre esta bien utilizar
// el directorio AppData para ofrecer compatibilidad con Windows Vista y Windows 7.

#include "..\Objetos Tutorial\ObjetoArchivo.h"
#include "..\Objetos Tutorial\ObjetoDirectoriosWindows.h"


// WinMain
int APIENTRY WinMain(HINSTANCE hInstance, HINSTANCE hPrevInstance, LPSTR lpCmdLine, int nCmdShow) {
    // Declaraciones de variables y objetos
    ObjetoDirectoriosWindows Directorios;
    ObjetoArchivo            Prueba;
    TCHAR                    RutaAppData[MAX_PATH];    // Directorio
    TCHAR                    RutaAppDataTxt[MAX_PATH]; // Archivo de prueba

    // Obtengo el directorio AppData
    Directorios.AppData(RutaAppData);

    // Añado el resto de la ruta y creo el directorio
    wcscat_s(RutaAppData, MAX_PATH, TEXT("\\Tutoriales www.devildrey33.es"));
    CreateDirectory(RutaAppData, NULL);

    // Creo un string con el nombre del archivo con el que se va a trabajar
    wcscpy_s(RutaAppDataTxt, MAX_PATH, RutaAppData);
    wcscat_s(RutaAppDataTxt, MAX_PATH, TEXT("\\ArchivoPrueba.txt"));

    // Creo el archivo de prueba con un texto dentro
    Prueba.AbrirArchivo(RutaAppDataTxt, true);
    // NOTA : Para guardar textos que luego puedas volver a leer, puedes usar GuardarString y LeerString.
    //        La función GuardarString guarda el tamaño de la cadena antes de guardar la cadena.
    //        La función LeerString lee el tamaño, reserva un espacio en memoria con ese tamaño,
    //        y lee la cadena para introducirla en la variable StrOut.
    //        Una vez no necesitemos mas la cadena que nos devuelve LeerString, debemos eliminarla de memoria con delete.
    Prueba.Guardar(TEXT("Texto de prueba"), 15 * sizeof(TCHAR));
    Prueba.CerrarArchivo();

    // Abro la carpeta donde se ha guardado el archivo de prueba
    ShellExecute(NULL, TEXT("Open"), TEXT("Explorer.exe"), RutaAppData, NULL, SW_SHOW);
    return 0;
}


