<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.10 (Terminando el Instalador)");*/
        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.10 (Terminando el Instalador)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.10 (Terminando el Instalador)");

?>	


                <!-- INTRODUCCION -->
                <p>En este tutorial vamos a empezar a jutar las piezas para formar nuestro instalador. En primer lugar usaremos los controles que hemos creado desde cero para el interface grafico del instalador, y luego le añadiremos el ObjetoZLIB para poder descomprimir datos.</p>
                <p>Tambien usaremos una parte de los common dialogs que tocamos antes, en concreto vamos a usar el ObjetoDlgDirectorios que nos servira para seleccionar el directorio destino de la instalacion.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Hay que remarcar que este punto es algo complicado dependiendo de las capacidades deseadas. Para empezar todo ejecutable creado con VC requiere unas dlls mínimas para funcionar, si el sistema operativo no tiene esas dlls, el ejecutable no arrancara.</p>
                <p>Esto es un problema, ya que si compilamos el instalador con VisualStudio 2010 este requerirá msvcp100.dll y msvcr100.dll. Esas dlls no vienen por defecto en ningún sistema operativo hasta la fecha (Puede que en instalaciones de windows 7 SP1 ya vengan dichas dlls, aunque aun no he tenido oportunidad de comprobarlo, pero en windows 7 a pelo sin service pack no vienen) por lo que si queremos que el instalador se ejecute, esas dlls deberán estar en el mismo directorio que se vaya a ejecutar el instalador.. Con lo que al final la única solución es distribuir un zip con el instalar.exe y las 2 dlls dentro.</p>
                <p>Si deseamos que el Instalar.exe funcione solo sin necesitar runtimes extras, necesitaremos compilar el instalar.exe con algún runtime que sepamos que ya está instalado en la maquina destino. Por ejemplo si queremos hacer un instalador para windows 2000/ME o superior… lo ideal sería hacerlo en  VC6.</p>
                <p>Por supuesto estoy hablando de casos extremos en los que no deseamos utilizar el instalador de visual studio y nos queremos hacer uno nosotros por lo que sea. Por ejemplo el instalador de BubaTronik que tiene un estilo como el reproductor, se ha hecho con VC6 para mantener compatibilidad con sistemas operativos antiguos.</p>
                <p>Dicho esto ya podemos empezar a ver código, lo mejor será empezar por el principio así que echaremos un vistazo al WinMain :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDWinMain", "Archivo : Tutorial TerminandoInstalador.cpp", "../Codigo/Tutoriales_WinAPI/3.10 Tutorial terminando Instalador/Tutorial TerminandoInstalador.cpp", "WinMain"); ?>
                <img src="../Web/Graficos/Elevacion.png"  style="float:right; margin-top:16px;" />
                <p>Lo primero que hacemos es utilizar la API <a href="http://msdn.microsoft.com/en-us/library/bb776463(VS.85).aspx" target="_blank">IsUserAnAdmin</a> para  determinar si el programa se esta ejecutando con privilegios de administrador. </p>
                <p> - En el caso de no ser administrador utilizaremos las API's <a href="http://msdn.microsoft.com/en-us/library/bb776391(VS.85).aspx" target="_blank">CommandLineToArgvW</a> y <a href="http://msdn.microsoft.com/en-us/library/ms683156(VS.85).aspx" target="_blank">GetCommandLine</a> para obtener la ruta completa de nuestro ejecutable, con esa  ruta ejecutaremos nuestro ejecutable de nuevo de forma que pida privilegios de  administrador (utilizando la API <a href="http://msdn.microsoft.com/en-us/library/bb762153(VS.85).aspx" target="_blank">ShellExecute</a> especificando en el parametro lpOperation &quot;RunAs&quot;). Al especificar RunAs en el parametro lpOperation le estamos diciendo al Windows que nuestra aplicacion necesita privilegios de administrador.</p>
                <p>Luego borraremos la memoria que crea <a href="http://msdn.microsoft.com/en-us/library/bb776391(VS.85).aspx" target="_blank">CommandLineToArgvW</a> con la API <a href="http://msdn.microsoft.com/en-us/library/aa366730(VS.85).aspx" target="_blank">LocalFree</a>.</p>
                <p>  - En el caso de ser administrador continuaremos la ejecución  normal mostrando la ventana del instalador.</p>
                <div class='nota'>En windows xp por defecto todas las aplicaciones se  ejecutan como administrador. En Windows Vista y superiores las aplicaciones se  ejecutan como usuario sin privilegios por defecto, y al estar sin permisos de  escritura en la mayoría del disco, el instalador no podría crear los archivos  descomprimidos ni los directorios (tampoco podría escribir en ciertas partes  del registro de windows).</div>
                <div class='nota'>La API <a href="http://msdn.microsoft.com/en-us/library/bb776463(VS.85).aspx" target="_blank">IsUserAnAdmin</a> no existe en VC6, además los  programas que usen el runtime del VC6 son lanzados automáticamente pidiendo  permisos de administrador.</div>
                <p>Bueno con esto ya hemos visto como podemos hacer que nuestra  aplicación pida privilegios de administrador, ahora pasemos a ver el objeto  VentanaInstalador :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDVentanaInstalador", "Archivo : VentanaInstalador.h", "../Codigo/Tutoriales_WinAPI/3.10 Tutorial terminando Instalador/VentanaInstalador.h", "VentanaInstalador"); ?>
                <p> No he dejado ningún miembro público de forma que cuando se  inicie el constructor se cree directamente la ventana y los controles  necesarios. <br />
                Las funciones mas interesantes por ver son : LeerDatos,  InstalarContenido y _MostrarUltimoError. Las demás funciones mas o menos se han  tratado con anterioridad.</p>
                <p> Empezemos por la función LeerDatos, esta función se  encargara de determinar si hay datos dentro del instalar.exe o es un instalador  vacio, y en el caso de haber datos extraerá los primeros que necesitamos.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDLeerDatos", "Archivo : VentanaInstalador.cpp", "../Codigo/Tutoriales_WinAPI/3.10 Tutorial terminando Instalador/VentanaInstalador.cpp", "VentanaInstalador::LeerDatos"); ?>
                <ul>
                <li>Lo primero es parsear el path por si viene con comillas,  en ese caso las quitaremos.</li>
                <li>Abrimos nuestro ejecutable de la instalación para  lectura, y en caso de fallar mostramos un error.</li>
                <li>Leemos el final del archivo para determinar ver si hay  la cabecera de 32 TCHAR TEXT(&quot;Instalador 1.0 devildrey33 &nbsp; &nbsp; &quot;). Si la comparación de la cabecera  con el texto da positivo, es que el instalador contiene archivos. Si la  coprobacion sale negativa saldremos de la función ya que no hay datos por leer.</li>
                <li>Movemos el puntero a la posición donde empiezan los datos.</li>
                <li>Obtenemos el path por defecto de la instalación, para ello leemos un UINT del archivo, y luego un string. El UINT determina el  directorio por defecto : &ldquo;c:\&rdquo; &ldquo;c:\Archivos de programa (x86)&rdquo;  y &ldquo;c:\archivos de programa&rdquo;. El string  contiene el nombre de la aplicación a instalar &ldquo;Ejemplo 3.5&rdquo; (Todo esto se  decide en el ensamblador)</li>
                <li>Una vez tenemos el directorio lo asignamos al EditBox, y salimos de la función.</li>
                </ul>
                <p>Ahora veamos la función InstalarContenido que será la que se  ejecutara al pulsar el botón instalar :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDInstalarContenido", "Archivo : VentanaInstalador.cpp", "../Codigo/Tutoriales_WinAPI/3.10 Tutorial terminando Instalador/VentanaInstalador.cpp", "VentanaInstalador::InstalarContenido"); ?>
                <ul>
                <li>Miramos si el directorio de instalación es válido, ya que  no puede contener caracteres que no acepte el sistema de archivos de windows.</li>
                <li>Comprobamos la ruta, si el directorio tiene una antibarra al final la quitamos.</li>
                <li>Intentamos crear el directorio de la instalación, en  caso de no poder mostramos el error y salimos de la función.</li>
                <li>Leemos y creamos los subdirectorios necesarios para los  archivos. Lo primero que encontraremos en el instalador después de haber  utilizado la función LeerDatos será el total de subdirectorios a crear en forma  de UINT. Luego habrá que leer tantos strings como el total de subdirectorios, y  mientras los leemos los iremos creando. En caso de no poder crear algún  subdirectorio mostraremos un error y saldremos de la función.</li>
                <li>Descomprimimos y creamos los archivos finales. Una vez  leídos correctamente todos los subdirectorios lo siguiente que nos  encontraremos será un UINT con el total de archivos que contiene el instalador.  Después tenemos que leer un string que será el nombre del archivo, un UINT que  nos dirá el tamaño de los datos comprimidos para el archivo actual, y por  ultimo leeremos tantos bytes como diga el UINT del tamaño para leer el archivo,  descomprimirlo, y guardarlo en su sitio.</li>
                </ul>
                <table class='Marco'>
                  <tr>
                    <td>Tabla que nos muestra un instalador por dentro :</td>
                  </tr>
                  <tr>
                    <td><table width="100%" border="0">
                      <tr>
                        <td><img src="../Web/Graficos/InstalarEXE_VI.png" alt="" /></td>
                        <td><table width="100%" border="0">
                          <tr>
                            <td style="width:180px"><font color="#FF0000"><b>Instalar.exe (BINARO)</b></font></td>
                            <td>: Esta parte contiene el ejecutable que descomprimirá los datos.</td>
                          </tr>
                          <tr>
                            <td><font color="#666666"><b>Directorio destino</b></font></td>
                            <td> : <b>UINT</b> con el directorio por defecto, <b>String</b> con el nombre del directorio.</td>
                          </tr>
                          <tr>
                            <td><font color="#000099"><b>Subdirectorios a crear</b></font></td>
                            <td>: <b>UINT</b> con el total de directorios, <b>String</b> * total directorios.</td>
                          </tr>
                          <tr>
                            <td><font color="#009933"><b>Archivos comprimidos</b></font></td>
                            <td>: <b>UINT</b> con el total de archivos, <b>String</b> con el path, <b>UINT</b> con el tamaño de los datos binarios, <b>char</b> * tamaño.</td>
                          </tr>
                          <tr>
                            <td><font color="#999999"><b>Cabecera</b></font></td>
                            <td>: <b>DWORD</b> con la posición de inicio del instalador, <b>TCHAR</b> * 32 con este texto &ldquo;Instalador 1.0  devildrey33 &nbsp; &nbsp; &ldquo;</td>
                          </tr>
                        </table>
                      <div class='nota'> un <b>String</b> se compone de : <b>UINT</b> con el tamaño en caracteres, <b>TCHAR</b> * tamaño en caracteres.</div></td>
                      </tr>
                    </table></td>
                  </tr>
                </table>
                <p> Ya solo nos falta ver la función _MostrarUltimoError :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("ID_MostrarUltimoError", "Archivo : VentanaInstalador.cpp", "../Codigo/Tutoriales_WinAPI/3.10 Tutorial terminando Instalador/VentanaInstalador.cpp", "VentanaInstalador::_MostrarUltimoError"); ?>
                <p> Esta función tiene por objetivo mostrar un mensaje de error  con la información que nos da la API <a href="http://msdn.microsoft.com/en-us/library/ms679360(VS.85).aspx" target="_blank">GetLastError</a>. Con el número del error  podemos utilizar <a href="http://msdn.microsoft.com/en-us/library/ms679351(VS.85).aspx" target="_blank">FormatMessage</a> para obtener un mensaje de error en formato de  texto, que es bastante mas descriptivo que un numero. Por último mostramos el  error con la API <a href="http://msdn.microsoft.com/en-us/library/ms645505(VS.85).aspx" target="_blank">MessageBox</a>.</p>
                <p>Y con esto hemos terminado con el instalador. Ya solo  nos queda el último paso :  <a href="/Blog/Tutorial_WINAPI_3_11">3.11 Tutorial terminando el Ensamblador</a>.</p>
                <div class='Centrado'>
                    <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
                </div>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     