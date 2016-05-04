<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$HED = "
	
	";
	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 2.6 (Terminando el Snake)", $HED);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 2.6 (Terminando el Snake)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 2.6 (Terminando el Snake)");

?>	

<style type='text/css'>
    table.TablaSnake {
        border:1px;
        background-color:#FFF;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.15);
    }
    tr.TablaSnake {
        background-color:rgb(220,220,220);
    }
    td.TablaSnake {
        width: 50px;
        height:50px;
    }
    td.TablaSnake_Valor {
        width: 50px;
        height:50px;
        font-family:'Courier New', Courier, monospace;
        font-size:12px;
    }
    td.TablaSnake_Cabeza {
        width: 50px;
        height:50px;
        background-color:#0F0;
        font-family:'Courier New', Courier, monospace;
        font-size:12px;
    }
    td.TablaSnake_Cuerpo {
        width: 50px;
        height:50px;
        background-color:#090;
        color:#FFF;
        font-family:'Courier New', Courier, monospace;
        font-size:12px;
    }
    table.TablaSnake1 {
        border:1px;
        background-color:#FFF;
        box-shadow: rgba(0, 0, 0, 0.15) 5px 5px 5px;
    }
</style> 

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Snake.png" alt="Tutorial 2.6" style="cursor:pointer;" />
                <p>Este tutorial nos mostrara como ensamblar todos los tutoriales anteriores con todos sus objetos.</p>
                <p>Ademas en este tutorial vamos a tener que diseñar la funcion main del juego, es decir que vamos a tener que pensar como mover la serpiente, como saber si se ha comido una bola, como hacer crecer la serpiente, y como saber si ha chocado con una pared o con ella misma.</p>
                <p>Tambien habra que tener en cuenta la velocidad de la serpiente, que va aumentando a medida que crece, y varios aspectos mas. En definitiva veremos corazon de la aplicacion que hace correr todos los objetos que creamos en los anteriores tutoriales.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero que debemos hacer es enumerar todos los estados  posibles para el juego, para ello crearemos un enum como el siguiente :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEstadoSnake", "Archivo : ObjetoSnake.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.h", "EstadoSnake"); ?>
                <p>Como podéis ver hay 6 estados :<br />
                El estado <strong>EnJuego</strong> se usara cuando estamos jugando.<br />
                El estado <strong>EnPausa</strong> se usara cuando hagamos una pausa en el  juego (con la tecla ESC).<br />
                El estado <strong>EnRecords</strong> se usara para VISUALIZAR los records.<br />
                El estado <strong>EnRecords_NuevoRecord</strong> se usara para GUARDAR un  nuevo record.<br />
                El estado <strong>EnSiguienteNivel</strong> se usara mientras tenemos un  mensaje advirtiendo que el siguiente nivel va a empezar.<br />
                Y por último el estado <strong>EnError</strong> se usara cuando tengamos que  mostrar algún error.</p>
                <p>Ahora que ya tenemos mas o menos claros los estados del  juego, podemos echar un vistazo a la declaración de ObjetoSnake :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoSnake", "Archivo : ObjetoSnake.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.h", "ObjetoSnake"); ?>
                <p>Para empezar tenemos la función Enlazar la cual utilizaremos  para enlazar todos los ObjetoEscena_* que intervienen en el juego con esta  clase, y debe usarse solo una vez al crear las ventanas translucidas.</p>
                <p>En segundo lugar tenemos la función EmpezarJuego que se  usara para inicializar el juego de forma que empieze por el nivel 1. Luego  tenemos la función CargarNivel que será la encargada de utilizar el  ObjetoSnake_Nivel para obtener los datos de un nivel , y crearlo mandándole los  datos necesarios tanto al marcador como al tablero. Y después tenemos la función  BolaAleatoria que se usara para crear una bola en una posición donde no haya ni  una porción de la serpiente ni del muro.</p>
                <p>Por último tenemos las funciones Movimiento y Teclado. La función  Movimiento es la que mueve la serpiente y se asegura de que el juego no ha  terminado. Y la función Teclado es la encargada de obtener las pulsaciones de  teclado y asignar la dirección de la serpiente entre otras cosas.</p>
                <p>Veamos la función EmpezarJuego :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEmpezarJuego", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.cpp", "ObjetoSnake::EmpezarJuego"); ?>
                <p>Esta función en esencia inicializa los valores del juego  para empezar por el primer nivel, hay que destacar que si la función CargarNivel  retorna FALSE es porque no encuentra el nivel, y en ese caso el juego no podrá empezar  y mostraremos un error.</p>
                <p>Veamos ahora la función CargarNivel :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCargarNivel", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.cpp", "ObjetoSnake::CargarNivel"); ?>
                <p>Lo primero que hacemos en esta función es utilizar el  ObjetoSnake_Nivel para intentar cargar el nivel. Si el nivel se ha cargado  inicializamos el tablero y el marcador con sus funciones mostrar (recordad que  el tablero es el que establece el tamaño de toda la escena asi que debe  inicializarse el primero SIEMPRE). Luego añadimos los muros al tablero, creamos  la serpiente, y creamos las bolas necesarias.</p>
                <p>Pasemos a la función BolaAleatoria :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDBolaAleatoria", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.cpp", "ObjetoSnake::BolaAleatoria"); ?>
                <p>Esta función básicamente calcula una posición aleatoria y  luego mira si esa posición esta ocupada por la serpiente o por el muro, y en  ese caso vuelve a calcular una posición aleatoria hasta que la bola no esté en  una posición ocupada.</p>
                <p>Ahora veamos la función Movimiento :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMovimiento", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.cpp", "ObjetoSnake::Movimiento"); ?>
                <p>Esta función esencialmente comprueba que la serpiente no  haya comido bolas, que no haya chocado con ella misma o con el muro, y en ese  caso hace avanzar la serpiente. Mejor veámoslo por partes :</p>
                <table width="100%" border="0">
                  <tr>
                    <td valign="top" width="20px"><b>1</b></td>
                    <td>Miramos si la cabeza de la serpiente está en la misma posición  que una bola, en ese caso sumamos un punto, hacemos mas grande la serpiente,  ampliamos la velocidad y creamos una nueva bola.<br /><br /></td>
                  </tr>
                  <tr>
                    <td valign="top"><b>2.1</b></td>
                    <td>Miramos si la cabeza de la serpiente está en la misma posición  que cualquier parte del resto de la serpiente, en ese caso asignamos la  variable Fin a true.<br /><br /></td>
                  </tr>
                  <tr>
                    <td valign="top"><b>2.2</b></td>
                    <td>Miramos si la cabeza de la serpiente esta en la misma posición  que cualquier parte del muro, en ese caso asignamos la variable Fin a true.<br /><br /></td>
                  </tr>
                  <tr>
                    <td valign="top"><b>3</b></td>
                    <td>Miramos si la variable Fin es true, en ese caso miramos si  podemos cargar el siguiente nivel, y si se ha podido cargar seguimos con el  juego. En caso de no poder cargar un nivel es que no hay mas, y mostraremos los  records. La función MostrarRecords retorna TRUE si el record actual ha superado  algún record, en ese caso asignaremos el estado a EnRecords_NuevoRecord, en  caso contrario asignaremos el estado a EnRecords.<br /><br /></td>
                  </tr>
                  <tr>
                    <td valign="top"><b>4</b></td>
                    <td>Desplazamos la serpiente, para ello hacemos un bucle que  desplaza las posiciones del vector de forma que la última posición se descarta. Para verlo mas claro observad las siguientes ilustraciones :
                      <table border="0">
                        <tr >
                          <td width="290" valign="bottom">Figura 1
                            <table cellspacing="1" cellpadding="2" class="TablaSnake1">
                              <tr valign="bottom" class="TablaSnake">
                                <td></td>
                                <td></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                              </tr>
                              <tr valign="bottom" class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Valor"><br />
                                  X= 10<br />
                                  Y= 9 </td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Valor"><br />
                                  X= 10<br />
                                  Y= 10</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td class="TablaSnake_Cuerpo">P= 3<br />
                                  X= 7<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 2<br />
                                  X= 8<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 1<br />
                                  X= 9<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cabeza">P= 0<br />
                                  X= 10<br />
                                  Y= 11</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                            </table></td>
                          <td width="290" valign="bottom">Figura 2
                            <table cellspacing="1" cellpadding="2" class="TablaSnake1">
                              <tr valign="bottom" class="TablaSnake">
                                <td></td>
                                <td></td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr valign="bottom" class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Valor"><br />
                                  X= 10<br />
                                  Y= 9 </td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Cabeza">P= 0<br />
                                  X= 10<br />
                                  Y= 10</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td class="TablaSnake_Valor"><br />
                                  X= 7<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 3<br />
                                  X= 8<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 2<br />
                                  X= 9<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 1<br />
                                  X= 10<br />
                                  Y= 11</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                            </table></td>
                          <td width="290">Figura 3
                            <table border="0" cellspacing="1" cellpadding="2" class="TablaSnake1">
                              <tr class="TablaSnake">
                                <td>&nbsp;&nbsp;&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Cabeza">P= 0<br />
                                  X= 10<br />
                                  Y= 9</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Cuerpo">P= 1<br />
                                  X= 10<br />
                                  Y= 10</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td class="TablaSnake_Valor"><br />
                                  X= 7<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Valor"><br />
                                  X= 8<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 3<br />
                                  X= 9<br />
                                  Y= 11</td>
                                <td class="TablaSnake_Cuerpo">P= 2<br />
                                  X= 10<br />
                                  Y= 11</td>
                                <td>&nbsp;</td>
                              </tr>
                              <tr class="TablaSnake">
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;</td>
                                <td>&nbsp;&nbsp;&nbsp;</td>
                              </tr>
                            </table></td>
                        </tr>
                      </table>
                      <br /><b>P</b> es la posición en el vector Serpiente. <b>X</b> y <b>Y</b> son la posición en el tablero.<br />
                    <br /> Que sacamos en claro de esto? siempre que la serpiente avanza, el último cuadro no es necesario, por lo que creamos una nueva posición para la cabeza con Y-1 (Y-1 porque la serpiente va hacia arriba en este ejemplo, si fuera hacia abajo seria Y+1), y luego hacemos correr el resto del array 1 posición hacia atrás.<br /><br /></td>
                  </tr>
                  <tr>
                    <td valign="top"><b>5</b></td>
                    <td>Asignamos la nueva posición de la cabeza de la serpiente,  para ello miramos la ultima dirección que se asigno a la serpiente y  desplazamos la cabeza a dicha posición. Hay que remarcar que también comprobamos  que la serpiente no se salga del tablero, y en ese caso corregimos la posición de  la cabeza para que salga en el lado opuesto del tablero. <br />
                Y otra cosa a destacar es que los valores de las direcciones  corresponden a las flechas del teclado numérico.</td>
                  </tr>
                </table>
                <p> Vista la función Movimiento ya solo nos queda la función Teclado  de esta clase :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDTeclado", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake.cpp", "ObjetoSnake::Teclado"); ?>
                <p>Esta función como su nombre indica se utiliza para mirar el  teclado, básicamente actua de una forma u otra según el estado actual. Mientras  esta en juego mira los 4 cursores y la tecla ESC (para la pausa), mientras esta  en records mira si se presiona espacio para volver a empezar el juego, y  mientras esta en pausa o en el inicio del siguiente nivel mira si se ha  presionado espacio para reanudar el juego. Hay que remarcar que asignamos Direccion a 6 solo en el estado EnSiguienteNivel, porque mientras no se ha presionado el espacio para continuar podemos cambiar la direccion inicial, y esto puede terminar con que la serpiente choque nada mas empezar.</p>
                <p>Para determinar si una tecla se ha presionado, en el juego se  usa la API <a href="http://msdn.microsoft.com/en-us/library/ms646293(VS.85).aspx" target="_blank">GetAsyncKeyState</a> a la cual debemos especificar la tecla virtual que  queremos mirar.</p>
                <p>Perfecto con esto ya hemos visto en gran parte el  ObjetoSnake, ahora veamos como quedara el ObjetoEscena final al que llamaremos  MiEscena :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMiEscena", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/2.06 Tutorial crear ObjetoSnake/Tutorial CrearObjetoSnake.cpp", "MiEscena"); ?>
                <p>En esencia esta clase contiene todas las ventanas  translucidas necesarias para el juego y las inicializa. Ademas se ha remplazado  el Evento_Cerrar para que cuando se cierre la ventana se termine la aplicación,  y el Evento_Teclado_Caracter para mandar las pulsaciones del teclado SOLO  cuando se esté introduciendo un record.</p>
                <p>Por lo demás remarcar que la función Crear se utiliza en el  constructor, asi que al crear el objeto se creara la VentanaEscena directamente.  Y otra cosa es que inicializamos con new las ventanas translucidas, dichas  ventanas se borraran por el destructor de ObjetoEscena cuando esta clase sea  destruida.</p>
                <p>Y por último veamos el WinMain :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDWinMain", "Archivo : ObjetoSnake.cpp", "../Codigo/Tutoriales_WinAPI/2.06 Tutorial crear ObjetoSnake/Tutorial CrearObjetoSnake.cpp", "WinMain"); ?>
                <p>Como podeis observar al principio creamos una clase  MiEscena, enlazamos el ObjetoSnake a las ventanas translucidas y llamamos a la función  EmpezarJuego.</p>
                <p> El bucle principal se basa en que FinApp sea false para  continuar. Veamos el resto del bucle principal por partes :</p>
                <p> <strong>1</strong> Miramos el estado del juego : Si se está jugando miramos  el teclado y luego miramos que haya pasado el tiempo mínimo para hacer otro  movimiento, y en ese caso hacemos el movimiento y volvemos a guardar el tiempo  actual con la API <a href="http://msdn.microsoft.com/en-us/library/ms724408(VS.85).aspx" target="_blank">GetTickCount</a>. Si hay una ventana informativa, únicamente miraremos  el teclado. Y si se está introduciendo un nuevo record miraremos el miembro IntroduciendoNuevoRecord  para determinar cuándo se termina de introducir el record, y cuando sea FALSE  guardaremos los records y cambiaremos el estado a EnRecords.</p>
                <p> <strong>2</strong> Hacemos un cálculo de los frames por segundo. Para hacer  este cálculo se usa un contador llamado Frames al que se le suma 1 por cada vez  que se pinta la ventana, y al pasar 1000 milisegundos ese valor nos dira  cuantas veces se ha pintado la escena. </p>
                <p> <strong>3</strong> Repintamos la escena, obtenemos el DC de la ventana con la  API <a href="http://msdn.microsoft.com/en-us/library/dd144871%28VS.85%29.aspx" target="_blank">GetDC</a>, utilizamos Ventana.Escena_Pintar para pintar la escena y utilizamos  la API <a href="http://msdn.microsoft.com/en-us/library/dd162920(v=VS.85).aspx" target="_blank">ReleaseDC</a> para liberar el DC de la ventana.</p>
                <p> <strong>4</strong> Miramos posibles eventos que se puedan haber mandado. Para  ello utilizamos la API <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a> que mira si hay algún evento, y en el caso  de retornar TRUE utilizamos las API's <a href="http://msdn.microsoft.com/en-us/library/ms644955(VS.85).aspx" target="_blank">TranslateMessage</a> y <a href="http://msdn.microsoft.com/en-us/library/ms644934(VS.85).aspx" target="_blank">DispatchMessage</a> para  obtener dicho evento. Hay que remarcar que si el mensaje es <a href="http://msdn.microsoft.com/en-us/library/ms632641(VS.85).aspx" target="_blank">WM_QUIT</a> asignaremos  FinApp a false con lo que terminara la aplicación.</p>
                <p>Con esto terminamos la segunda fase del tutorial, podéis continuar con el tutorial <a href="/Blog/Tutorial_WINAPI_3_0">3.0 Introducción al Instalador y el Ensamblador</a>.</p>
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Snake.zip" target="_blank">Snake compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     