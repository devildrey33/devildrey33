<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.0 (Introducción al Instalador)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.0 (Introducción al Instalador)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.0 (Introducción al Instalador)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.0.png" alt="Tutorial 3 Instalador y Ensamblador" style='cursor:pointer;' onclick="Imagen_Mostrar('/Graficos/Ejemplo.3.0.png');" />
                <p>La tercera entrega de tutoriales WINAPI tiene por objetivo lograr hacer un instalador desde cero. Para ello se trataran temas como la compresion de archivos y el uso de varios controles basicos.</p>
                <p>En esencia necesitaremos construir dos aplicaciones que seran el instalador y el ensamblador.</p>
                <p>El instalador sera una aplicacion que dentro del mismo ejecutable llevara todos los archivos a instalar comprimidos.</p>
                <p>Para crear el instalador necesitaremos hacer una segunda aplicacion que comprima y ensamble todos los archivos a instalar dentro del instalador. Dicha aplicacion se llamara ensamblador.</p>
                <!-- FIN_INTRODUCCION -->
                
                <img src="/Graficos/Instalador.png" alt="Instalador" width="454" height="230" style="float:right" />
                <h2>Instalador:</h2>
                <p>El instalador será un binario ejecutable preparado para leer  el final de el mismo donde debería encontrar todos los archivos que deseamos des-empaquetar. </p>
                <p>Los archivos de dentro del instalador estarán comprimidos  para ocupar menos espacio. Por ello el instalador deberá ser capaz de descomprimir los archivos en memoria y guardar los datos descomprimidos en el disco.</p>
                <p>Para la parte de comprimir y descomprimir archivos se  utilizara la librería <a href="http://www.zlib.net" target="_new">ZLIB</a> creada por <strong>Jean-loup-Gailly</strong> y <strong>Mark Adler</strong>, que es de código libre.</p>
                <p>Otra capacidad del instalador será la de pedir una elevación  de privilegios si el usuario actual no tiene permisos de administrador, ya que  sin los permisos de escritura necesarios el instalador no será capaz de crear archivos.</p>
                <p>Por ultimo también será capaz de mostrar un dialogo que  permita al usuario seleccionar el directorio donde se va a des-empaquetar toda  la información. </p>
                
                
                <h2>Ensamblador:</h2>
                <p>El ensamblador será una aplicación que nos permitirá unir la  aplicación del instalador con todos los archivos que se deseemos incluir. Para  ello nos pedirá el directorio por defecto de la instalación, el nombre del  proyecto, y la ruta del binario que se usara para hacer la instalación. A  partir de esos datos mas los archivos que le añadamos deberá ser capaz de  juntarlos en un solo binario de forma ordenada para que luego el binario  instalador pueda extraerlos.</p>
                <p>Además también tendrá la posibilidad de cargar y guardar  proyectos de instalación, de forma que nos haga un poco mas cómodo el proceso.</p>
                <img src="/Graficos/Ensamblador.png" alt="Ensamblador" />
                <p>Ahora que sabemos por encima lo que necesitaremos hacer,  dividiremos por partes todos los objetos nuevos que vamos a necesitar en los  siguientes tutoriales:</p>
                <table class="Tabla">
                  <tr>
                    <td class="EnlaceH" style="width:50px"><h3>3.01&nbsp;</h3></td>
                    <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_3_1">Creación del ObjetoBarraProgreso</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos el ObjetoBarraProgreso que simulara un control con una barra de progreso.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank">CreateCompatibleBitmap</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateRoundRectRgn</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183518%28VS.85%29.aspx" target="_blank">CreateSolidBrush</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144957(VS.85).aspx" target="_blank">GradientFill</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144839(VS.85).aspx" target="_blank">FrameRgn</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183370(VS.85).aspx" target="_blank">BitBlt</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a> y <a href="http://msdn.microsoft.com/en-us/library/dd183533(VS.85).aspx" target="_blank">DeleteDC</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd145142(VS.85).aspx" target="_blank">TRIVERTEX</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd144958(VS.85).aspx" target="_blank">GRADIENT_RECT</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo">ninguno...</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.02</h3></td>
                    <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_3_2">Common Dialogs</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos tres objetos: ObjetoDlgAbrir, ObjetoDlgGuardar, y ObjetoDlgDirectorios. Todo esto partiendo de los common dialogs de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> GetOpenFilename </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> GetSaveFilename </a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank"> SHBrowseForFolder </a>, y<a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank"> SHGetPathFromIDList </a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms646839(VS.85).aspx" target="_blank">OPENFILENAME</a>, y   <a href="http://msdn.microsoft.com/en-us/library/bb773205(VS.85).aspx" target="_blank">BROWSEINFO</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo">ninguno...</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.03</h3></td>
                    <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_3_3">Creación del ObjetoEditBox</a>: </h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoControlEstandar que usaremos para encapsular controles estandar de windows, y crearemos un ObjetoEditBox que heredará de ObjetoControlEstandar, y nos permitirá controlar un editbox de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> InitCommonControlsEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> CreateWindowEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">CreateWindow</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645489(VS.85).aspx" target="_blank">GetDlgItemText</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645521(VS.85).aspx" target="_blank">SetDlgItemText</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633585(VS.85).aspx" target="_blank">GetWindowLongPtr</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a> y <a href="http://msdn.microsoft.com/en-us/library/ms633510(VS.85).aspx" target="_blank">GetParent</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo">ninguna...</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.04</b></td>
                    <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_3_4">Creación del ObjetoButton</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoButton que nos permitirá controlar un button de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> InitCommonControlsEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> CreateWindowEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">CreateWindow</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645489(VS.85).aspx" target="_blank">GetDlgItemText</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645521(VS.85).aspx" target="_blank">SetDlgItemText</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms633585(VS.85).aspx" target="_blank">GetWindowLongPtr</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo">ninguna...</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.05</h3></td>
                    <td class="EnlaceH"><h3 class="Estilo3"><a href="/Blog/Tutorial_WINAPI_3_5">Creación del ObjetoComboBox</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoComboBox que nos permitirá controlar un button de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> InitCommonControlsEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> CreateWindowEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">CreateWindow</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank"> MAKELPARAM </a>, y <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb760822(v=VS.85).aspx">PBRANGE</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb760846(v=VS.85).aspx" target="_blank">PBM_SETRANGE</a>, <a href="http://msdn.microsoft.com/en-us/library/bb760830(v=VS.85).aspx" target="_blank">PBM_GETPOS</a>, y <a href="http://msdn.microsoft.com/en-us/library/bb760844(v=VS.85).aspx" target="_blank">PBM_SETPOS</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.06</h3></td>
                    <td class="EnlaceH"><h3 class="Estilo3"><a href="/Blog/Tutorial_WINAPI_3_6">Creación del ObjetoProgressBar</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoProgressBar que nos permitirá controlar una progress bar de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> InitCommonControlsEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> CreateWindowEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645489(VS.85).aspx" target="_blank">GetDlgItemText</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645521(VS.85).aspx" target="_blank">SetDlgItemText</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms633585(VS.85).aspx" target="_blank">GetWindowLongPtr</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo">ninguna...</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a> , <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.07</h3></td>
                    <td class="EnlaceH"><h3 class="Estilo3"><a href="/Blog/Tutorial_WINAPI_3_7">Creación del ObjetoListView</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoListView que nos permitirá controlar un listview de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> InitCommonControlsEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> CreateWindowEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/bb775032(VS.85).aspx" target="_blank">ListView_InserColumn</a>, <a href="http://msdn.microsoft.com/en-us/library/bb775038(VS.85).aspx" target="_blank">ListView_InsertItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb775105(VS.85).aspx" target="_blank">ListView_SetItemText</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761308(VS.85).aspx" target="_blank">ListView_GetItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761237(VS.85).aspx" target="_blank">ListView_DeleteItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761235(VS.85).aspx" target="_blank">ListView_DeleteAllItems</a>, <a href="http://msdn.microsoft.com/en-us/library/bb774980(VS.85).aspx" target="_blank">ListView_GetItemState</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761522(VS.85).aspx" target="_blank">ImageList_Create</a>, <a href="http://msdn.microsoft.com/en-us/library/ms648072(VS.85).aspx" target="_blank">LoadIcon</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761399(VS.85).aspx" target="_blank">ImageList_AddIcon</a>, <a href="http://msdn.microsoft.com/en-us/library/bb775076(VS.85).aspx" target="_blank">ListView_SetExtendedListViewStyle</a>, <a href="http://msdn.microsoft.com/en-us/library/bb775086(VS.85).aspx" target="_blank">ListView_SetImageList</a>, <a href="http://msdn.microsoft.com/en-us/library/ms645505(VS.85).aspx" target="_blank">MessageBox</a></td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb774743(VS.85).aspx" target="_blank">LVCOLUMN</a>, y    <a href="http://msdn.microsoft.com/en-us/library/bb774760(VS.85).aspx" target="_blank">LV_ITEM</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top class="tablasoportadotitulo="TablaSoportadoTitulo"""><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a>, <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>, y <a href="http://msdn.microsoft.com/en-us/library/bb775583(VS.85).aspx" target="_blank">WM_NOTIFY</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb774867(VS.85).aspx" target="_blank">NM_DBLCLK</a>.</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.08</h3></td>
                    <td class="EnlaceH"><h3 class="Estilo3"><a href="/Blog/Tutorial_WINAPI_3_8">Creación del ObjetoTreeView</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoTreeView que nos permitirá controlar un treeview de windows.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank"> InitCommonControlsEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank"> CreateWindowEx </a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773898(VS.85).aspx" target="_blank">TreeView_InsertItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb760091(VS.85).aspx" target="_blank">TreeView_SetItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773793(VS.85).aspx" target="_blank">TreeView_DeleteItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773790(VS.85).aspx" target="_blank">TreeView_DeleteAllItems</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773881(VS.85).aspx" target="_blank">TreeView_GetRoot</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773872(VS.85).aspx" target="_blank">TreeView_GetParent</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773812(VS.85).aspx" target="_blank">TreeView_GetChild</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773861(VS.85).aspx" target="_blank">TreeView_GetNextItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773861(VS.85).aspx" target="_blank">TreeView_GetNextItem</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773891(VS.85).aspx" target="_blank">TreeView_GetSelection</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761522(VS.85).aspx" target="_blank">ImageList_Create</a>, <a href="http://msdn.microsoft.com/en-us/library/ms648072(VS.85).aspx" target="_blank">LoadIcon</a>, <a href="http://msdn.microsoft.com/en-us/library/bb761399(VS.85).aspx" target="_blank">ImageList_AddIcon</a>, y <a href="http://msdn.microsoft.com/en-us/library/bb760056(VS.85).aspx" target="_blank">TreeView_SetImageList</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb773456(VS.85).aspx" target="_blank">TVITEM</a>, <a href="http://msdn.microsoft.com/en-us/library/bb773452(VS.85).aspx" target="_blank">TVINSERTSTRUCT</a>, <a href="http://msdn.microsoft.com/en-us/library/bb775514(VS.85).aspx" target="_blank">NMHDR</a> a <a href="http://msdn.microsoft.com/en-us/library/bb774778(VS.85).aspx" target="_blank">NMTVCUSTOMDRAW</a></td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632642(VS.85).aspx" target="_blank">WM_SETFONT</a>, <a href="http://msdn.microsoft.com/en-us/library/ms647591(VS.85).aspx" target="_blank">WM_COMMAND</a>, y <a href="http://msdn.microsoft.com/en-us/library/bb775583(VS.85).aspx" target="_blank">WM_NOTIFY</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb773470(VS.85).aspx" target="_blank">NM_CUSTOMDRAW</a>.</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.09</h3></td>
                    <td class="EnlaceH"><h3 class="Estilo3"><a href="/Blog/Tutorial_WINAPI_3_9">Creación del ObjetoZLIB</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos un ObjetoZLIB que nos permitira utilizar la librería <a href="http://www.zlib.org" target="_blank">ZLIB</a> para comprimir y descomprimir datos.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo">ninguna...</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo">ninguna...</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo">ninguno...</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.10</h3></td>
                    <td class="EnlaceH"><h3 class="Estilo3"><a href="/Blog/Tutorial_WINAPI_3_10">Terminando el Instalador</a>:</h3></td>
                  </tr>
                  <tr>
                    <td class="TablaSoportadoTitulo">&nbsp;</td>
                    <td class="TablaSoportadoTitulo">En esta parte crearemos la ventana del instalador y usaremos algunos  objetos  de los anteriormente creados.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/bb776463(VS.85).aspx" target="_blank">IsUserAnAdmin</a>, <a href="http://msdn.microsoft.com/en-us/library/bb776391(VS.85).aspx" target="_blank">CommandLineToArgvW</a>, <a href="http://msdn.microsoft.com/en-us/library/ms683156(VS.85).aspx" target="_blank">GetCommandLine</a>, <a href="http://msdn.microsoft.com/en-us/library/bb762153(VS.85).aspx" target="_blank">ShellExecute</a>,    <a href="http://msdn.microsoft.com/en-us/library/aa366730(VS.85).aspx" target="_blank">LocalFree</a>, <a href="http://msdn.microsoft.com/en-us/library/ms679360(VS.85).aspx" target="_blank">GetLastError</a>, <a href="http://msdn.microsoft.com/en-us/library/ms679351(VS.85).aspx" target="_blank">FormatMessage,</a> y <a href="http://msdn.microsoft.com/en-us/library/ms645505(VS.85).aspx" target="_blank">MessageBox</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo">ninguna...</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo">ninguno...</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                  <tr>
                    <td class="EnlaceH"><h3>3.11</h3></td>
                    <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_3_11">Terminando el Ensamblador</a>:</h3></td>
                  </tr>
                  <tr>
                    <td>&nbsp;</td>
                    <td>En esta parte crearemos la aplicación que nos permitirá ensamblar el instalador con los datos a instalar.<br />
                      Ademas veremos como realizar busquedas recursivas, y como crear dialogos en vez de ventanas.
                      <table width="100%" border="0" cellspacing="0" cellpadding="0">
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                          <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms645465(VS.85).aspx" target="_blank">DialogBoxParam</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644898(VS.85).aspx">SetWindowLongPtr</a>, <a href="http://msdn.microsoft.com/en-us/library/aa364418(VS.85).aspx" target="_blank">FindFirstFile</a>, y <a href="http://msdn.microsoft.com/en-us/library/aa364428(VS.85).aspx" target="_blank">FindNextFile</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/aa365740(VS.85).aspx" target="_blank">WIN32_FIND_DATA</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                          <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms645428(VS.85).aspx" target="_blank">WM_INITDIALOG</a>.</td>
                        </tr>
                        <tr>
                          <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                          <td class="TablaSoportadoTitulo"> ninguna...</td>
                        </tr>
                      </table>
                      </td>
                  </tr>
                </table>
                <br />
                <div class='postit'>
                <h3>Requisitos:</h3>
                <ul>
                <li>Conocimientos básicos de C o C++.</li>
                <li>Entorno Windows XP o superior.</li>
                <li>Compilador Visual Studio express 2008 o superior.</li>
                <li>Ganas de hacer trabajar el coco.</li>
                </ul>            
                </div>
    <div class='Centrado'>
                <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
    </div>
                                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     