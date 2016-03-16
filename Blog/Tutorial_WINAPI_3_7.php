<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.7 (Creación del ObjetoListView)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.7 (Creación del ObjetoListView)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.7 (Creación del ObjetoListView)");

?>	



                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.7.png" alt="Tutorial 3 Instalador y Ensamblador" />
                <p>En este tutorial veremos el funcionamiento del control  LISTVIEW de windows. El ListView es un control que nos permite hacer listas de  varios tipos : Iconos grandes, Iconos pequeños, Lista horizontal, y Lista  report. En especial nos centraremos en el modo Lista Report, ya que los otros  modos en esencia funcionan prácticamente igual pero no soportan columnas, por  lo que cada item tiene un único texto. </p>
                <p>Vamos a seguir como en los últimos  controles creando un nuevo objeto al que llamaremos ObjetoListView que heredara de ObjetoControlEstandar (La clase ObjetoControlEstandar se describe en el tutorial <a href="/Blog/Tutorial_WINAPI_3_3">3.3 Creación del ObjetoEditBox</a>).</p>
                <!-- FIN_INTRODUCCION -->
                <p>Veamos su declaración :</p><div style="clear:both"></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoListView", "Archivo : ObjetoListView.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoListView.h", "ObjetoListView"); ?>
                <p>Para resumir, esta clase tiene un miembro para crear el ListView, y varios miembros para trabajar con items y columnas : AgregarItem, AgregarColumna, ObtenerTexto, BorrarItem, BorrarItems, Seleccionado, TotalItems, TotalColumnas, y ItemMarcado.</p>
                <p>Bueno ahora que sabemos mas o menos que hacen los miembros vamos a verlos con mas detenimiento, para empezar veamos la funcion CrearListView :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearListView", "Archivo : ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoListView.cpp", "ObjetoListView::CrearListView"); ?>
                <p>Lo primero que se hace es llamar a la función  ObjetoIniciarCommonControls::Iniciar. Esta función llama a la API  <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> para iniciar los controles estándar de windows para  nuestra aplicación. Antiguamente en VC6 esto era necesario si queríamos  trabajar con controles estándar, pero ahora mismo a decir verdad ya no se si es  necesario, porque en mi maquina me funcionan igual los ejemplos tanto si llamo  a <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> como si no… y en la MSDN no dice nada.. Por lo que prefiero mantener este código por si las moscas.</p>
                <p>Lo segundo que se hace es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680(VS.85).aspx" target="_blank">CreateWindowEx</a> con  el segundo parámetro &quot;WC_LISTVIEW&quot; (que es una macro para identificar la clase). Esto hace que el control creado se convierta en un  LISTVIEW. </p>
                <p>Lo siguiente es llamar a la función _ConectarControl, que  re-emplazara el WindowProcedure del ListView por el nuestro.</p>
                <p>Y por último creamos una fuente con la API <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a> para el  listview, y le mandamos el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a> al listview con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>,  cosa que le dirá al listview que debe usar esa fuente.</p>
                <p>Ahora veamos la funcion AgregarColumna :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregarColumna", "Archivo : ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoListView.cpp", "ObjetoListView::AgregarColumna"); ?>
                <p>Esta función nos pide un nombre para la columna, y su ancho  en pixeles. Para empezar rellenamos la estructura <a href="http://msdn.microsoft.com/en-us/library/bb774743(VS.85).aspx" target="_blank">LVCOLUMN</a> con los datos de la  nueva columna, hay que destacar que en el miembro &quot;mask&quot;  especificamos que miembros deberá utilizar windows a la hora de crear la  columna. En este caso utilizamos las constantes <b>LVCF_TEXT</b>, <b>LVCF_WIDTH</b>, y <b>LVCF_SUBITEM</b> para que windows mire los miembros cx, pszText, cchTextMax y  iOrder. Por último llamamos a la macro <a href="http://msdn.microsoft.com/en-us/library/bb775032(VS.85).aspx" target="_blank">ListView_InserColumn</a> para agregar la  columna al ListView.</p>
                <div class='nota'>Las columnas solo se tienen en cuenta en el modo <a href="http://msdn.microsoft.com/en-us/library/bb774739(v=VS.85).aspx" target="_blank">LVS_REPORT</a>, si el listview está en cualquier otro modo, las columnas serán  ignoradas, y solo se mostrara un string por item.</div>
                <p>Visto el tema de las columnas podemos empezar con los items. Veamos la funcion AgregarItem :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregarItem", "Archivo : ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoListView.cpp", "ObjetoListView::AgregarItem"); ?>
                <p>Esta función nos pide un ID de icono, un texto para el item,  y luego tenemos un parámetro opcional al que hay que agregar los textos de las  siguientes columnas. Para que quede mas claro, si hacemos un listview con tres  columnas habrá que llamar a la función AgregarItem, pasándole una ID de icono,  y luego tres strings.</p>
                <p>Para empezar esta función rellena una estructura <a href="http://msdn.microsoft.com/en-us/library/bb774760(VS.85).aspx" target="_blank">LV_ITEM</a> con  los datos necesarios para crear el item. Hay que remarcar que en el miembro  &quot;mask&quot; hay que decirle que miembros deberá windows tener en cuenta  (en este caso usamos <b>LVIF_TEXT</b> para que mire el texto, y <b>LVIF_IMAGE</b> para que  mire la ID del icono). Una vez rellenada la estructura se llama a la macro  <a href="http://msdn.microsoft.com/en-us/library/bb775038(VS.85).aspx" target="_blank">ListView_InsertItem</a> para agregar el item.</p>
                <p>Al usar <a href="http://msdn.microsoft.com/en-us/library/bb775038(VS.85).aspx" target="_blank">ListView_InsertItem</a> solo agregamos el texto para la columna 0, los demás  textos los añadiremos después   utilizando la macro <a href="http://msdn.microsoft.com/en-us/library/bb775105(VS.85).aspx" target="_blank">ListView_SetItemText</a>, y especificando el numero de columna de la que queremos asignar el texto.</p>
                <p>Ahora veamos la funcion ObtenerTexto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObtenerTexto", "Archivo : ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoListView.cpp", "ObjetoListView::ObtenerTexto"); ?>
                <p>Esta función   nos pide la posición del item, la posición   del subitem (que seria la columna), un TCHAR para hacer de buffer del string, y el tamaño del buffer.</p>
                <p>Lo que hace la función es rellenar la estructura <a href="http://msdn.microsoft.com/en-us/library/bb774760(VS.85).aspx" target="_blank">LV_ITEM</a> de forma que enlacemos el buffer con esta, y luego hace una llamada a la macro <a href="http://msdn.microsoft.com/en-us/library/bb761308(VS.85).aspx" target="_blank">ListView_GetItem</a>, que copiara el texto del item/subitem especificados en nuestro buffer. Fijaros que ahora en el miembro &quot;mask&quot; solo especificamos <b>LVIF_TEXT</b>, ya que no necesitamos obtener nada mas que el texto.</p>
                <p>Para terminar con esta clase veamos los miembros BorrarItem, BorrarItems, Seleccionado y ItemMarcado :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDBorrarItem", "Archivo : ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoListView.cpp", "ObjetoListView::BorrarItem"); ?>
                <p>Para borrar un item utilizamos la macro <a href="http://msdn.microsoft.com/en-us/library/bb761237(VS.85).aspx" target="_blank">ListView_DeleteItem</a> especificando la posición del item. Para borrar todos los items utilizamos la  macro <a href="http://msdn.microsoft.com/en-us/library/bb761235(VS.85).aspx" target="_blank">ListView_DeleteAllItems</a>. Para mirar si un item esta seleccionado hacemos  uso de la macro <a href="http://msdn.microsoft.com/en-us/library/bb774980(VS.85).aspx" target="_blank">ListView_GetItemState</a> especificando la posición del item, y  miramos que devuelva <b>LVIS_SELECTED</b>. Y por ultimo para saber que item está  marcado recorremos toda la lista con un bucle, y mediante la macro <a href="http://msdn.microsoft.com/en-us/library/bb774980(VS.85).aspx" target="_blank">ListView_GetItemState</a> miramos cual retorna <b>LVIS_FOCUSED</b>.</p>
                <div class='nota'>Puede haber varios items seleccionados, pero como mucho solo  tendrá uno marcado. El item marcado es aquel que tiene el foco del teclado, y  no tiene porque estar seleccionado.</div>
                <p>Con esto ya hemos visto el ObjetoListView bastante a fondo,  ahora veamos como podemos trabajar con el. Para empezar vamos a asignarle el  estilo extendido <b>LVS_EX_FULLROWSELECT</b>, para que al seleccionar un item del  listview se extienda esa selección a todos sus subitems. Además también  enlazaremos el ListView con un ImageList para utilizar sus iconos.</p>
                <p>Veamos la función   Crear de MiVentana :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrear", "Archivo : 3.7 Tutorial crear ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/3.07 Tutorial crear ObjetoListView/3.7 Tutorial crear ObjetoListView.cpp", "MiVentana::Crear"); ?>
                <p>El imagelist para que os hagáis una idea es una lista de  iconos cargada en memoria que el listview utilizara para pintar los iconos de  sus items. Además los imagelist pueden ser compartidos por varios controles a  la vez, con lo que conseguimos no tener que cargar iconos independientemente  para cada control, lo que nos ahorra código y memoria.</p>
                <p>Para empezar creamos un ImageList con la macro <a href="http://msdn.microsoft.com/en-us/library/bb761522(VS.85).aspx" target="_blank">ImageList_Create</a> de 16*16 con capacidad para 3 iconos. En segundo lugar cargamos en memoria los 3 iconos de los recursos con la API <a href="http://msdn.microsoft.com/en-us/library/ms648072(VS.85).aspx" target="_blank">LoadIcon</a>, y luego los añadimos al ImageList con la macro <a href="http://msdn.microsoft.com/en-us/library/bb761399(VS.85).aspx" target="_blank">ImageList_AddIcon</a>. En tercer lugar llamamos a la funcion CrearVentana para crear la ventana principal, y luego creamos el Listview. En cuarto lugar añadimos el estilo <b>LVS_EX_FULLROWSELECT</b> utilizando la macro <a href="http://msdn.microsoft.com/en-us/library/bb775076(VS.85).aspx" target="_blank">ListView_SetExtendedListViewStyle</a>, y luego asignamos el imagelist al ListView con la macro <a href="http://msdn.microsoft.com/en-us/library/bb775086(VS.85).aspx" target="_blank">ListView_SetImageList</a>. Y por ultimo creamos 3 columnas y 20 items.</p>
                <p>Hasta aquí tenemos hecho un listview con 3 columnas que tendrá  20 items, y que mostrara un icono por item.</p>
                <p>Como los demás controles estándar que se han mostrado  anteriormente el ListView tambien envía notificaciones para ciertos eventos,  pero en vez de enviarlas por el mensaje <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>, las manda por el mensaje  <a href="http://msdn.microsoft.com/en-us/library/bb775583(VS.85).aspx" target="_blank">WM_NOTIFY</a>. Veamos como captaríamos cuando el usuario hace un dobleclick encima  de un item :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Notificacion", "Archivo : 3.7 Tutorial crear ObjetoListView.cpp", "../Codigo/Tutoriales_WinAPI/3.07 Tutorial crear ObjetoListView/3.7 Tutorial crear ObjetoListView.cpp", "MiVentana::Evento_Notificacion"); ?>
                <p>En nuestro caso como tenemos el ListView encapsulado  utilizamos la función virtual Evento_Notificacion, en la que básicamente  estamos comprobando que la ID del control sea la del ListView, y que el código  de la notificación sea <a href="http://msdn.microsoft.com/en-us/library/bb774867(VS.85).aspx" target="_blank">NM_DBLCLK</a>. En caso de que la comprobación sea positiva,  obtenemos el item marcado y lo mostramos con la API <a href="http://msdn.microsoft.com/en-us/library/ms645505(VS.85).aspx" target="_blank">MessageBox</a>.</p>
                <p>Para mas información referente al control ListView consulta el siguiente enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/bb774737(v=VS.85).aspx" target="_blank">ListView Control</a>.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_8"> 3.8 Creación del ObjetoTreeView</a>.</p>
                <div class='Centrado'>
                    <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
                </div>
                

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     