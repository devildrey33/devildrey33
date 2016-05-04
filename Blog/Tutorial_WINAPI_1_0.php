<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI 1.0");-/*/
        
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial C++ 1.0 Introducción a la Calculadora", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial C++ 1.0 Introducción a la Calculadora");
        
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Calculadora.png" alt="Tutorial 1 calculadora" style="cursor:pointer" />
                <p>La primera parte de los tutoriales C++ en windows consiste en construir una simple calculadora desde cero. Cuando digo desde cero, me refiero a que vamos a crearnos los controles necesarios en vez de usar los controles estandar de windows. Para este caso necesitaremos concretamente crearnos nuestro propio Boton, y un control que sirva como marcador.</p>
                <p>Todo esto nos servira para tener una idea general de como crear ventanas y responder a sus eventos, ademas tambien veremos basicamente como pintar graficos dentro de una ventana.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para ello necesitaremos comprender la función WinMain (el inicio de la aplicación), las ventanas en windows (como crearlas, y como responder a sus eventos) y el entorno gráfico de windows o GDI (como pintar graficos dentro de una ventana).</p>
                </ul>
                
                <p>Todo esto se resumira en 7 partes de la siguiente forma:</p>
                
                <table class='Tabla'>
                        <tr>
                          <td class="EnlaceH" style="width:50px"><h3>1.01</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_1" >WinMain</a>: </h3></td>
                        </tr>
                        <tr>
                          <td class="TablaSoportadoTitulo">&nbsp;</td>
                          <td class="TablaSoportadoTitulo">En esta parte veremos como se debería  empezar una aplicación estructurada por objetos.
                
                            <table>
                              <tr>
                                <td class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                                <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms644936(VS.85).aspx" target="_blank">GetMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644955(VS.85).aspx" target="_blank">TranslateMessage</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms644934(VS.85).aspx" target="_blank">DispatchMessage.</a></td>
                              </tr>
                              <tr>
                                <td class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                                <td class="TablaSoportadoTitulo">ninguna...</td>
                              </tr>
                              <tr>
                                <td class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632641(VS.85).aspx" target="_blank">WM_QUIT</a></td>
                              </tr>
                              <tr>
                                <td width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                                <td class="TablaSoportadoTitulo">ninguna...</td>
                              </tr>
                            </table>
                            
                            </td>
                        </tr>
                        <tr>
                          <td class="EnlaceH"><h3>1.02</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_2"  class="Estilo3">Creación de una ventana y obtención de sus  eventos</a>:</h3></td>
                        </tr>
                        <tr>
                          <td class="TablaSoportadoTitulo">&nbsp;</td>
                          <td class="TablaSoportadoTitulo">En esta parte veremos como crear una ventana bajo Windows y como  responder a algunos eventos básicos.
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                                <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms644945%28VS.85%29.aspx" target="_blank">PostQuitMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633572(v=VS.85).aspx" target="_blank">DefWindowProc</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633587%28VS.85%29.aspx" target="_blank">RegisterClassEx</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx.</a></td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms633577(v=VS.85).aspx" target="_blank">WNDCLASSEX</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632617(VS.85).aspx" target="_blank">WM_CLOSE</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                                <td class="TablaSoportadoTitulo">ninguna...</td>
                              </tr>
                          </table>
                          </td>
                        </tr>
                        <tr>
                          <td class="EnlaceH"><h3>1.03</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_3" >Creación de nuestro objeto Ventana</a>: </h3></td>
                        </tr>
                        <tr>
                          <td class="TablaSoportadoTitulo">&nbsp;</td>
                          <td class="TablaSoportadoTitulo">En esta parte crearemos nuestro objeto  ventana que usaremos para crear nuestras futuras ventanas básicas.
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                                <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632680%28VS.85%29.aspx" target="_blank">CreateWindowEx</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644898%28VS.85%29.aspx" target="_blank">SetWindowLongPtr</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633585(v=VS.85).aspx" target="_blank">GetWindowLongPtr</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633572(v=VS.85).aspx" target="_blank">DefWindowProc</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms644945%28VS.85%29.aspx" target="_blank">PostQuitMessage</a></td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                                <td class="TablaSoportadoTitulo">ninguna...</td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms632619(VS.85).aspx" target="_blank">WM_CREATE</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms632617(VS.85).aspx" target="_blank">WM_CLOSE</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                                <td class="TablaSoportadoTitulo"> ninguna...</td>
                              </tr>
                            </table>
                            
                            </td>
                        </tr>
                        <tr>
                          <td class="EnlaceH" style="width:50px"><h3>1.04</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_4" >Entorno grafico de Windows (GDI)</a>:</h3></td>
                        </tr>
                        <tr>
                          <td class="TablaSoportadoTitulo">&nbsp;</td>
                          <td class="TablaSoportadoTitulo">En esta parte se trataran las herramientas  / funciones que dispone el GDI de Windows para poder pintar gráficos en una  ventana.
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                                <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd183362%28VS.85%29.aspx" target="_blank">BeginPaint</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162598(v=VS.85).aspx" target="_blank">EndPaint</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144871%28VS.85%29.aspx" target="_blank">GetDC</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162920(v=VS.85).aspx" target="_blank">ReleaseDC</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183518%28VS.85%29.aspx" target="_blank">CreateSolidBrush</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633503%28VS.85%29.aspx" target="_blank">GetClientRect</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145093%28VS.85%29.aspx" target="_blank">SetTextColor</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162964(VS.85).aspx" target="_blank">SetBkColor</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd162768(VS.85).aspx" target="_blank">PAINTSTRUCT</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd145213(VS.85).aspx" target="_blank">WM_PAINT</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                                <td class="TablaSoportadoTitulo"> ninguna...</td>
                              </tr>
                            </table>
                            
                            </td>
                        </tr>
                        <tr>
                          <td class="EnlaceH"><h3>1.05</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_5" >Creación de nuestro objeto Botón</a>:</h3></td>
                        </tr>
                        <tr>
                          <td class="TablaSoportadoTitulo">&nbsp;</td>
                          <td class="TablaSoportadoTitulo">En esta parte veremos como crear nuestro  propio botón, para así no tener que usar los botones estándar de windows.
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                                <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms646265(VS.85).aspx" target="_blank">TrackMouseEvent</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183499(VS.85).aspx" target="_blank">CreateFont</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateRoundRectRgn</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145102(VS.85).aspx" target="_blank">SetWindowRgn</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633503(VS.85).aspx" target="_blank">GetClientRect</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162882(VS.85).aspx" target="_blank">PtInRect</a>, <a href="http://msdn.microsoft.com/en-us/library/ms646262(VS.85).aspx" target="_blank">SetCapture</a>, <a href="http://msdn.microsoft.com/en-us/library/ms646261(VS.85).aspx" target="_blank">ReleaseCapture</a>, <a href="http://msdn.microsoft.com/en-us/library/ms633510(VS.85).aspx" target="_blank">GetParent</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank">CreateCompatibleBitmap</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a>, <a href="http://msdn.microsoft.com/en-us/library/dd145093(VS.85).aspx" target="_blank">SetTextColor</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144957(VS.85).aspx" target="_blank">GradientFill</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183518(VS.85).aspx" target="_blank">CreateSolidBrush</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144839(VS.85).aspx" target="_blank">FrameRgn</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162965(VS.85).aspx" target="_blank">SetBkMode</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162498(VS.85).aspx" target="_blank">DrawText</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd183370(VS.85).aspx" target="_blank">BitBlt</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Estructuras:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/dd145142(VS.85).aspx" target="_blank">TRIVERTEX</a>, y <a href="http://msdn.microsoft.com/en-us/library/dd144958(VS.85).aspx" target="_blank">GRADIENT_RECT</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>Mensajes:</b></td>
                                <td class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms645616(VS.85).aspx" target="_blank">WM_MOUSEMOVE</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms645615(VS.85).aspx" target="_blank">WM_MOUSELEAVE</a>.</td>
                              </tr>
                              <tr>
                                <td valign="top" width="116" class="TablaSoportadoTitulo"><b>Notificaciones:</b></td>
                                <td class="TablaSoportadoTitulo"> ninguna...</td>
                              </tr>
                            </table>
                            
                            </td>
                        </tr>
                        <tr>
                          <td class="EnlaceH"><h3>1.06</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_6" >Creación de nuestro objeto Marcador</a>:</h3></td>
                        </tr>
                        <tr>
                          <td class="TablaSoportadoTitulo">&nbsp;</td>
                          <td class="TablaSoportadoTitulo">En esta parte crearemos un control que nos  servirá de contenedor visual para las operaciones de la calculadora.
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
                          <td class="EnlaceH"><h3>1.07</h3></td>
                          <td class="EnlaceH"><h3><a href="/Blog/Tutorial_WINAPI_1_7" >Terminando la calculadora</a>:</h3></td>
                        </tr>
                        <tr>
                          <td>&nbsp;</td>
                          <td>En este punto  enlazaremos todos  los controles que creamos anteriormente para terminar la aplicación.
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                              <tr>
                                <td valign="top" class="TablaSoportadoTitulo"><b>APIs / macros:</b></td>
                                <td width="930" class="TablaSoportadoTitulo"><a href="http://msdn.microsoft.com/en-us/library/ms644945(VS.85).aspx" target="_blank">PostQuitMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644944(VS.85).aspx" target="_blank">PostMessage</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms686298(VS.85).aspx" target="_blank">Sleep</a>.</td>
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
                
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
