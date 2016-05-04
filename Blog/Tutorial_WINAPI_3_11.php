<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.11 (Terminando el Ensamblador)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.11 (Terminando el Ensamblador)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.11 (Terminando el Ensamblador)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.11.png" alt="Tutorial 3 Instalador y Ensamblador" style='cursor:pointer;' />
                <p>Esta es la ultima parte del tercer tutorial, donde juntaremos todos los controles estandar que hemos visto anteriormente y formaremos una aplicacion encargada de hacer una lista de archivos.</p>
                <p>Con esa lista de archivos la aplicacion podra comprimirlos todos para luego insertarlos en el ejecutable del Instalador.</p>
                <p>Y tambien le indicaremos la ruta predeterminada de la instalación.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Ahora que tenemos todos los controles necesarios, además del ejecutable de la instalación solo nos queda hacer el programa para ensamblar la instalación con los archivos.</p>
                <p>La idea es hacer un programa que nos permita seleccionar los archivos que queremos meter dentro del instalador, y nos pida datos, como el directorio por defecto y el archivo que se usara como instalador.</p>
                <p>Además le añadiremos posibilidad de cargar y guardar proyectos de instalador.</p>
                <p>Por último en vez de utilizar una ventana como siempre  utilizaremos un dialogo y veremos en que se diferencian.</p>
                <p>Vamos al lio, lo primero será crear un ObjetoDialogo para  contener diálogos de windows :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoDialogo", "Archivo : ObjetoDialogo.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoDialogo.h", "ObjetoDialogo"); ?>
                <p>Aunque parece prácticamente igual que un ObjetoVentana hay  que destacar que el _GestorMensajes retorna BOOL mientras que el el  ObjetoVentana retorna LRESULT. Esto no es porque ami me guste mas… y a decir  verdad no se la razón de ello, simplemente si vamos a usar un dialogo  necesitamos utilizar WindowProcedures que retornen BOOL. Y aquí está la razón  de porque utilizamos la clase plantilla PlantillaEventos a la hora de basar  todas nuestras ventanas / diálogos / controles.</p>
                <p>Por último la función CrearDialogo solo recibe un parámetro,  que es la ID que tiene el dialogo en los recursos. Para especificar los estilos  del dialogo hay que hacerlo mediante el editor de recursos.</p>
                <p>Veamos la declaración de un dialogo pequeño que  necesitaremos para poner nombre al nuevo proyecto DialogoNuevoProyecto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDDialogoNuevoProyecto", "Archivo : DialogoNuevoProyecto.h", "../Codigo/Tutoriales_WinAPI/3.11 Tutorial terminando Ensamblador/DialogoNuevoProyecto.h", "DialogoNuevoProyecto"); ?>
                <p>En esencia es muy parecido a una ventana, pero con la  diferencia de que todos los eventos devuelven BOOL, y que en el Evento_Cerrar  para cerrar el dialogo utilizamos la API EndDialog en vez de la API  DestroyWindow.</p>
                <p>Veamos la función Mostrar :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMostrar", "Archivo : DialogoNuevoProyecto.cpp", "../Codigo/Tutoriales_WinAPI/3.11 Tutorial terminando Ensamblador/DialogoNuevoProyecto.cpp", "DialogoNuevoProyecto::Mostrar"); ?>
                <p>Para crear un dialogo y enlazarlo a nuestro ObjetoDialogo  utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms645465(VS.85).aspx" target="_blank">DialogBoxParam</a> pasándole la ID del dialogo, y el  _GestorMensajes que debe usar. El _GestorMensajes que se ha usado es el de  ObjetoDialogo::_GestorMensajes, y este cuando recibe el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms645428(VS.85).aspx" target="_blank">WM_INITDIALOG</a> enlaza la clase con el dialogo utilizando la API <a href="http://msdn.microsoft.com/en-us/library/ms644898(VS.85).aspx">SetWindowLongPtr</a> con la constante <b>GWLP_USERDATA</b> en el que le especificamos un puntero a nuestro ObjetoDialogo.</p>
                <p>Una vez hecho esto el gestor de mensajes estático puede  pasar los mensajes a las funciones virtuales de los eventos.</p>
                <p>Ahora veamos la declaración del dialogo principal de la aplicación  DialogoEnsamblador :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDDialogoEnsamblador", "Archivo : DialogoEnsamblador.h", "../Codigo/Tutoriales_WinAPI/3.11 Tutorial terminando Ensamblador/DialogoEnsamblador.h", "DialogoEnsamblador"); ?>
                <p>La mayoría de funciones de este objeto ya se han tratado en  los tutoriales anteriores, lo que mas nos interesa ver de este objeto son las  siguientes funciones : CrearInstalador, _AgregarArchivosRecursivo, y  _ArbolRecursivo.</p>
                <p>Empezaremos por _AgregarArchivosRecursivo, esta función  tiene como objetivo agregar todos los archivos que se encuentren en el  directorio especificado al ObjetoListView   :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("ID_AgregarArchivosRecursivo", "Archivo : DialogoEnsamblador.cpp", "../Codigo/Tutoriales_WinAPI/3.11 Tutorial terminando Ensamblador/DialogoEnsamblador.cpp", "DialogoEnsamblador::_AgregarArchivosRecursivo"); ?>
                <p>Lo primero que hace esta función es construir un path que al  final tenga &ldquo;*.*&rdquo; para pasárselo a la API <a href="http://msdn.microsoft.com/en-us/library/aa364418(VS.85).aspx" target="_blank">FindFirstFile</a>.  A partir de que le pasamos los parámetros de  búsqueda a la API <a href="http://msdn.microsoft.com/en-us/library/aa364418(VS.85).aspx" target="_blank">FindFirstFile</a>, debemos ir llamando a la API <a href="http://msdn.microsoft.com/en-us/library/aa364428(VS.85).aspx" target="_blank">FindNextFile</a> hasta que retorne 0.</p>
                <p>Cada vez que llamamos a <a href="http://msdn.microsoft.com/en-us/library/aa364418(VS.85).aspx" target="_blank">FindFirstFile</a> o <a href="http://msdn.microsoft.com/en-us/library/aa364428(VS.85).aspx" target="_blank">FindNextFile</a> el  miembro de la estructura <a href="http://msdn.microsoft.com/en-us/library/aa365740(VS.85).aspx" target="_blank">WIN32_FIND_DATA</a> cFileName contendrá el nombre de un  archivo, lo que hacemos es mirar si es un archivo valido, ya que nos puede  devolver &ldquo;.&rdquo; Y &ldquo;..&rdquo;, y luego comprobamos si es un directorio o un archivo.<br />
                En el caso de ser un directorio hacemos otra llamada a  _AgregarArchivosRecursivo para inspeccionarlo. Y en el caso de ser un archivo  lo agregamos al ObjetoListView.</p>
                <p>Con esto conseguimos enumerar todos los archivos del  directorio especificado recursivamente. </p>
                <p>Ahora veamos la función CrearInstalador :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearInstalador", "Archivo : DialogoEnsamblador.cpp", "../Codigo/Tutoriales_WinAPI/3.11 Tutorial terminando Ensamblador/DialogoEnsamblador.cpp", "DialogoEnsamblador::CrearInstalador"); ?>
                <ul>
                <li>Lo primero es comprobar que tenemos datos suficientes  para crear el Instalador. Necesitamos archivos a aladir, una ruta destino  valida para instalar archivos, y el instalar.exe que usaremos.</li>
                <li>Creamos un nuevo archivo.exe, y le volcamos el  instalar.exe, a continuación guardamos el numero de directorio predeterminado  en formato UINT, y luego el nombre del directorio de la aplicación. Leemos el  contenido del ObjetoTreeView (que son los subdirectorios por crear) y los  volcamos al archivo.exe. Comprimimos y volcamos los archivos dentro de  archivo.exe, y por ultimo añadimos al final un DWORD con el tamaño original del  instalar.exe, y una cabecera de 32 TCHAR&rsquo;s con el texto &ldquo;Instalador 1.0  devildrey33    &ldquo;</li>
                </ul>
                <table class='Marco'>
                  <tr>
                    <td>Tabla que nos muestra un instalador por dentro :</td>
                  </tr>
                  <tr>
                    <td><table width="100%" border="0">
                      <tr>
                        <td><img src="/Graficos/InstalarEXE_VI.png" alt="" /></td>
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
                            <td>: <b>DWORD</b> con la posición de inicio del instalador, <b>TCHAR</b> * 32 con este texto &ldquo;Instalador 1.0  devildrey33    &ldquo;</td>
                          </tr>
                        </table>
                          <div class='nota'>Un <b>String</b> se compone de : <b>UINT</b> con el tamaño en caracteres, <b>TCHAR</b> * tamaño en caracteres.</div></td>
                      </tr>
                    </table></td>
                  </tr>
                </table>
                <p>Y por ultimo veamos la función _ArbolRecursivo, que enumera  todos los nodos dentro del TREEVIEW (que representan directorios) y los guarda  dentro del Instalar.exe</p>
                <?php $Base->PintarCodigo->PintarArchivoC("ID_ArbolRecursivo", "Archivo : DialogoEnsamblador.cpp", "../Codigo/Tutoriales_WinAPI/3.11 Tutorial terminando Ensamblador/DialogoEnsamblador.cpp", "DialogoEnsamblador::_ArbolRecursivo"); ?>
                <p>El objetivo de esta función es enumerar todos los nodos  partiendo del nodo ROOT, e ir montando el path en memoria para volcarlo al  archivo instalar.exe</p>
                <p>Hay que pensar que los nodos simplemente son strings, y que  tenemos que concaternar todos los padres con sus hijos para obtener el path  correctamente.</p>
                <p>En esencia escaneamos todos los nodos partiendo del nodo  ROOT utilizando la función ObjetoTreeView::<b>NodoSiguiente</b>, si vemos que algún  nodo tiene uno o mas hijos con la función ObjetoTreeView::<b>NodoHijo</b>, volvemos a  llamar a la función _ArbolRecursivo para añadir sus hijos. Por último agregamos  las cadenas concatenadas al Instalar.exe</p>
                <p>Y aqui termina la tercera serie de tutoriales, espero que sean de ayuda para aquellos que os iniciais en la programación con el API de windows.</p>
                <p>Actualmente creo que los tutoriales en cuanto a ventanas y graficos tienen un nivel bastante aceptable (quizas se revise o extienda algúno pero por lo general abarcan la mayoria de cosas básicas a mi entender), por lo que los proximos tutoriales intentare enfocarlos a otros temas de interes como pueden ser : Creación de archivos dmp (para depurar aplicaciones), Creación y manejo de componentes COM, Interacción con redes/internet (por ejemplo mandar un e-mail mediante Winsock, SMTP y MIME, o hacer un chat cliente/servidor simple), etc...</p>
    <div class='Centrado'>
        <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
    </div>
                

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     