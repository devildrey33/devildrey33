<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.8 (Creación del ObjetoTreeView)");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.8 (Creación del ObjetoTreeView)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.8 (Creación del ObjetoTreeView)");
        
        ?>	


                <!-- INTRODUCCION -->
                <p>En este tutorial veremos el funcionamiento del control  TREEVIEW de windows. El TreeView es un control que nos permite visualizar una serie de datos en forma de árbol. El TreeView suele utilizarse para mostrar listas de directorios o listas de bases de datos.</p>
                <p>Vamos a seguir como en los últimos controles creando un nuevo objeto al que llamaremos ObjetoListTree que heredara de ObjetoControlEstandar (La clase ObjetoControlEstandar se describe en el tutorial <a href="/Blog/Tutorial_WINAPI_3_3">3.3 Creación del ObjetoEditBox</a>).</p>
                <!-- FIN_INTRODUCCION -->
                <p>Veamos su declaración :</p><div style="clear:both"></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoProgressBar", "Archivo : ObjetoTreeView.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoTreeView.h", "ObjetoTreeView"); ?>
                <p>Esta clase tiene un miembro   para crear el TreeView, varios miembros para agregar y eliminar nodos, y varios miembros para poder trabajar con los nodos.</p>
                <p>Lo que tiene que quedar claro es que un TreeView no es una lista normal como seria el ListView. En un listview tenemos un vector de items a los cuales accedemos especificando una posición, pero en un treeview no hay tal vector, y los nodos están  enlazados entre ellos con punteros que apuntan a : NodoPadre, NodoHijo, NodoAnterior y NodoSiguiente.</p>
                <p>Si por ejemplo queremos recorrer todos los nodos, vamos a  tener que hacer una búsqueda recursiva que empiece por NodoRoot, y que salte al  NodoSiguiente siempre que el nodo actual no tenga hijos. En caso de tener  hijos, debemos realizar otra búsqueda recursiva en el hijo. Podemos ver un ejemplo de busqueda recursiva por los nodos en el tutorial <a href="index.php?Pagina=Tutorial_3_11_TerminandoEnsamblador.php" target="_self">3.11 Terminando Ensamblador</a></p>
                <p>Visto por encima el funcionamiento   del TreeView pasemos a ver la función CrearTreeView :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearTreeView", "Archivo : ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoTreeView.cpp", "ObjetoTreeView::CrearTreeView"); ?>
                <p>Lo primero que se hace es llamar a la función  ObjetoIniciarCommonControls::Iniciar. Esta función llama a la API  <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> para iniciar los controles estándar de windows para  nuestra aplicación. Antiguamente en VC6 esto era necesario si queríamos  trabajar con controles estándar, pero ahora mismo a decir verdad ya no se si es  necesario, porque en mi maquina me funcionan igual los ejemplos tanto si llamo  a <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> como si no… y en la MSDN no dice nada.. Por lo que prefiero mantener este código por si las moscas.</p>
                <p>Lo segundo que se hace es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680(VS.85).aspx" target="_blank">CreateWindowEx</a> con  el segundo parámetro &quot;WC_TREEVIEW&quot; (que es una macro para identificar la clase). Esto hace que el control creado se convierta en un  TREEVIEW. </p>
                <p>Lo siguiente es llamar a la función _ConectarControl, que  re-emplazara el WindowProcedure del TreeView por el nuestro.</p>
                <p>Y por último creamos una fuente con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a> para el  listview, y le mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a> al treeview con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>,  cosa que le dirá al treeview que debe usar esa fuente.</p>
                <p>Ahora veamos la función   AgregarNodo :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregarNodo", "Archivo : ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoTreeView.cpp", "ObjetoTreeView::AgregarNodo"); ?>
                <p>Esta función   recibe en los parámetros   un <b>HTREEITEM</b> que apunta al nodo padre del que queremos crear, un String con el nombre del nuevo nodo y un UINT con la ID del icono dentro del ImageList. </p>
                <p>En esencia un <b>HTREEITEM</b> es un <b>HANDLE</b> que nos permite acceder a los datos del nodo, y lo necesitaremos siempre que se quiera acceder a ellos.</p>
                <p>Lo primero que se hace dentro de esta función   es rellenar la estructura <a href="http://msdn.microsoft.com/en-us/library/bb773456(VS.85).aspx" target="_blank">TVITEM</a> para asignarle el texto y el icono. Fijaros que en el miembro mask le especificamos las constantes : <b>TVIF_TEXT</b> para especificar el texto, <b>TVIF_IMAGE</b> para especificar el icono, <b>TVIF_SELECTEDIMAGE</b> para especificar el icono seleccionado, y <b>TVIF_CHILDREN</b> para especificar si este nodo tiene hijos.</p>
                <p>Una vez tenemos el <a href="http://msdn.microsoft.com/en-us/library/bb773456(VS.85).aspx" target="_blank">TVITEM</a> correctamente rellenado, lo asignamos a la estructura <a href="http://msdn.microsoft.com/en-us/library/bb773452(VS.85).aspx" target="_blank">TVINSERTSTRUCT</a>, y se lo pasamos a la macro <a href="http://msdn.microsoft.com/en-us/library/bb773898(VS.85).aspx" target="_blank">TreeView_InsertItem</a>.</p>
                <p>Por último   volvemos a rellenar el <a href="http://msdn.microsoft.com/en-us/library/bb773456(VS.85).aspx" target="_blank">TVITEM</a>, pero esta vez para editar el padre de este nodo, y indicarle que tiene hijos. Para ello establecemos el miembro cChildren a 1 y llamamos a la macro <a href="http://msdn.microsoft.com/en-us/library/bb760091(VS.85).aspx" target="_blank">TreeView_SetItem</a>.</p>
                <div class='nota'>Para crear nodos que no tengan padre hay que especificar NULL en el parámetro <b>HTREEITEM</b> nPadre.</div>
                <p>Visto el tema de creación   de nodos, veamos como podemos borrarlos :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDBorrarNodo", "Archivo : ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoTreeView.cpp", "ObjetoTreeView::BorrarNodo"); ?>
                <p>En esencia tenemos la macro <a href="http://msdn.microsoft.com/en-us/library/bb773793(VS.85).aspx" target="_blank">TreeView_DeleteItem</a> que nos permite borrar un nodo sabiendo su <b>HTREEITEM</b>, y la macro <a href="http://msdn.microsoft.com/en-us/library/bb773790(VS.85).aspx" target="_blank">TreeView_DeleteAllItems</a> que nos permite eliminar todos los nodos.</p>
                <p>Ahora veamos las funciones NodoRoot, NodoPadre, NodoHijo, NodoSiguiente, NodoAnterior, y NodoMarcado :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDNodoRoot", "Archivo : ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoTreeView.cpp", "ObjetoTreeView::NodoRoot"); ?>
                <ul>
                <li>La función <b>NodoRoot</b> utiliza la macro <a href="http://msdn.microsoft.com/en-us/library/bb773881(VS.85).aspx" target="_blank">TreeView_GetRoot</a> para devolver el nodo que hace de nodo principal dentro del TreeView. (Este nodo es el primer nodo insertado al principio)</li>
                <li>La función <b>NodoPadre</b> utiliza la macro <a href="http://msdn.microsoft.com/en-us/library/bb773872(VS.85).aspx" target="_blank">TreeView_GetParent</a> para devolver el padre del nodo especificado.Si devuelve NULL es que el nodo padre es el nodo Root.</li>
                <li>La función <b>NodoHijo</b> utiliza la macro <a href="http://msdn.microsoft.com/en-us/library/bb773812(VS.85).aspx" target="_blank">TreeView_GetChild</a> para devolver el primer hijo que tenga este nodo. Si devuelve NULL es que no tiene hijos.</li>
                <li>La función <b>NodoSiguiente</b> utiliza la macro <a href="http://msdn.microsoft.com/en-us/library/bb773861(VS.85).aspx" target="_blank">TreeView_GetNextItem</a> especificando la constante <b>TVGN_NEXT</b>, para devolver el siguiente nodo de su jerarquia. Si devuelve NULL es que no hay nodo siguiente.</li>
                <li>La función <b>NodoAnterior</b> utiliza la macro <a href="http://msdn.microsoft.com/en-us/library/bb773861(VS.85).aspx" target="_blank">TreeView_GetNextItem</a> especificando la constante <b>TVGN_PREVIOUS</b>, para devolver el anterior nodo de su jerarquía. Si devuelve NULL es que no hay nodo anterior.</li>
                <li>Y por último la función <b>NodoMarcado</b> utiliza la macro <a href="http://msdn.microsoft.com/en-us/library/bb773891(VS.85).aspx" target="_blank">TreeView_GetSelection</a> que nos devuelve el nodo que tiene el foco del teclado y está enmarcado. Puede devolver NULL.</li>
                </ul>
                <p>Para terminar con esta clase veamos las funciones ObtenerTexto y AsignarTexto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObtenerTexto", "Archivo : ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoTreeView.cpp", "ObjetoTreeView::ObtenerTexto"); ?>
                <p>En las dos funciones esencialmente rellenamos la estructura <a href="http://msdn.microsoft.com/en-us/library/bb773456(VS.85).aspx" target="_blank">TVITEM</a> para indicar que queremos asignar/obtener el texto, y utilizamos la macros TreeView_GetItem para obtener el texto, y TreeView_SetItem para asignarlo. Si por ejemplo necesitáramos   modificar el icono de un nodo, podríamos   hacernos las funciones AsignarIcono y ObtenerIcono, en las cuales asignaríamos   en el miembro mask las constantes <b>TVIF_HANDLE</b>, <b>TVIF_IMAGE</b>, y <b>TVIF_SELECTEDIMAGE</b> con lo que estaríamos diciéndole que asigne / obtenga el icono.</p>
                <p>Ahora construiremos una aplicación sencilla utilizando esta clase, veamos la función   Crear de MiVentana :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrear", "Archivo : 3.8 Tutorial crear ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/3.08 Tutorial crear ObjetoTreeView/3.8 Tutorial crear ObjetoTreeView.cpp", "MiVentana::Crear"); ?>
                <p>El imagelist para que os hagáis una idea es una lista de  iconos cargada en memoria que el treeview utilizara para pintar los iconos de  sus nodos. Además los imagelist pueden ser compartidos por varios controles a  la vez, con lo que conseguimos no tener que cargar iconos independientemente  para cada control, lo que nos ahorra código y memoria.</p>
                <p>Para empezar creamos un ImageList con la macro <a href="http://msdn.microsoft.com/en-us/library/bb761522(VS.85).aspx" target="_blank">ImageList_Create</a> de 16*16 con capacidad para 3 iconos. En segundo lugar cargamos en memoria los 3 iconos de los recursos con la API <a href="http://msdn.microsoft.com/en-us/library/ms648072(VS.85).aspx" target="_blank">LoadIcon</a>, y luego los añadimos al ImageList con la macro <a href="http://msdn.microsoft.com/en-us/library/bb761399(VS.85).aspx" target="_blank">ImageList_AddIcon</a>. En tercer lugar llamamos a la funcion CrearVentana para crear la ventana principal, y luego creamos el TreeView. En cuarto lugar  asignamos el imagelist al TreeView con la macro <a href="http://msdn.microsoft.com/en-us/library/bb760056(VS.85).aspx" target="_blank">TreeView_SetImageList</a>. Y por ultimo creamos 20 nodos, y en cada uno de esos nodos creamos otros 20 nodos.</p>
                <p>Hasta aquí tenemos hecho un treeview con varios nodos que mostraran un icono.</p>
                <p>Como los demás controles estándar que se han mostrado  anteriormente el TreeView tambien envía notificaciones para ciertos eventos,  pero en vez de enviarlas por el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>, las manda por el mensaje  <a href="http://msdn.microsoft.com/en-us/library/bb775583(VS.85).aspx" target="_blank">WM_NOTIFY</a>. En el tutorial del listview vimos como responder al evento doble click, en este veremos como responder a la notificación   <a href="http://msdn.microsoft.com/en-us/library/bb773470(VS.85).aspx" target="_blank">NM_CUSTOMDRAW</a> de forma que podamos cambiar los colores de los nodos :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Notificacion", "Archivo : 3.8 Tutorial crear ObjetoTreeView.cpp", "../Codigo/Tutoriales_WinAPI/3.08 Tutorial crear ObjetoTreeView/3.8 Tutorial crear ObjetoTreeView.cpp", "MiVentana::Evento_Notificacion"); ?>
                <p>Una vez sabemos que la notificación   es para nuestro TreeView, lo primero que hacemos es convertir la estructura <a href="http://msdn.microsoft.com/en-us/library/bb775514(VS.85).aspx" target="_blank">LPNMHDR</a> a <a href="http://msdn.microsoft.com/en-us/library/bb774778(VS.85).aspx" target="_blank">LPNMTVCUSTOMDRAW</a> para así poder acceder a los datos del &quot;CustomDraw&quot;. Cuando tengamos convertida la estructura miraremos el estado de pintado en el que se encuentra, los estados que nos interesan son <b>CDDS_PREPAINT</b>, y <b>CDDS_ITEMPREPAINT</b>. </p>
                <p>En el <b>CDDS_PREPAINT</b> retornaremos <b>CDRF_NOTIFYITEMDRAW</b> para decirle al TreeView que queremos que nos notifique cuando va a pintar cada nodo.</p>
                <p>En el <b>CDDS_ITEMPREPAINT</b> miraremos si el nodo esta marcado o no para asignar un color de fondo o otro, y por ultimo retornaremos <b>CDRF_NEWFONT</b> para decirle al treeview que actualice los datos.</p>
                <p>Para mas información referente al control TreeView consulta el siguiente enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/bb759988(v=VS.85).aspx" target="_blank">TreeView Control</a>.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_9"> 3.9 Creación del ObjetoZLIB</a>.</p>   
                <div class='Centrado'>
                    <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
                </div>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     