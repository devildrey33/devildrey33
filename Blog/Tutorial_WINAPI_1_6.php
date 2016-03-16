<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.6 (Creación del ObjetoMarcador)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.6 (Creación del ObjetoMarcador)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.6 (Creación del ObjetoMarcador)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.1.6.png" alt="Tutorial 1.6" style="cursor:pointer;" />
                <p>A partir de todo lo que vimos en el capitulo anterior la cosa esta en echarle imaginación. Ahora nos toca hacer un marcador para la calculadora que nos mostrara las operaciones y el resultado. La idea es hacer una parte para ver las operaciones que se están evaluando, y otra parte para mostrar el resultado actual de la operación.</p>
                <p>Ademas este objeto sera el encargado de apuntar y resolver las operaciones de la calculadora, por lo que tambien se mostrara como responder a pulsaciones del teclado.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Al querer mostrar las operaciones independientemente del resultado nos va a hacer falta ingeniar un sistema para almacenar dichas operaciones con el mismo orden en que se han introducido. </p>
                <div style='clear:both'></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoMarcador_TipoDatos", "Archivo : ObjetoMarcador.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.h", "ObjetoMarcador_TipoDatos"); ?>
                <p>Lo siguiente será crear un objeto que simbolice tanto un  valor como una operación, pero ojo solo puede ser o un valor, o una operación.  La idea es tener una lista de objetos que se irá ampliando a medida que se  añadan valores o operaciones. De esta forma será fácil recrear la operación que  se está evaluando en la calculadora.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoMarcador_Datos", "Archivo : ObjetoMarcador.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.h", "ObjetoMarcador_Datos"); ?>
                <p>Esta clase tiene un constructor para indicarle que tipo de operación  es, o en el caso de que sea un valor especificaremos el tipo correctamente y le  pasaremos el valor en el segundo parámetro. Por lo demás todos sus miembros  serán privados y solo podremos acceder a ellos para lectura.</p>
                <p>Ahora que tenemos una implementación para almacenar los  datos de la calculadora podemos proceder a crear la clase que va a contener el  objeto marcador. Este objeto no requerirá eventos de mouse ni de teclado, aunque  necesitaremos re-emplazar el Evento_Pintar , hacer unas funciones Pintar y Repintar,  hacer unas funciones para que desde la ventana principal de la calculadora  podamos añadir valores y operaciones, definir una lista que contenga  todos los valores y operaciones, y hacer una  función que calculara las operaciones y mostrara el resultado.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoMarcador", "Archivo : ObjetoMarcador.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.h", "ObjetoMarcador"); ?>
                <p>Pensad que los valores los introduciremos vía teclado o con  los botones, y la única forma de saber cuándo se ha terminado de introducir un  valor es cuando se añade una operación.<br />
                Por ejemplo pulsamos el botón 1, el botón 2, el botón 3, y  el botón +. Hasta que no se ha pulsado el botón + no podemos saber si el valor  esta completo, en vez de pulsar el botón + se podría pulsar el botón 4, con lo  que el valor en vez de ser 123 seria 1234. Por ello tenemos la función  AgregarNumero la cual ira almacenando los números que se pulsen, la función  AgregarPunto que agregara una coma decimal, y la función AgregarOperacion que  añadirá el valor y la operación a la lista.</p>
                <p>En el tutorial anterior creamos y pintamos el control de una  forma similar, así que omitiré las clases para colores y fuentes, la función  CrearMarcador y las funciones de repintado.</p>
                <p>Ahora pasemos a ver el núcleo de las operaciones para la calculadora, empezaremos por la función AgregarNumero :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregarNumero", "Archivo : ObjetoMarcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.cpp", "AgregarNumero"); ?>
                <p>Esta función básicamente agrega un numero al string que contiene el valor actual, lo único destacable es que si el numero que se va a agregar es 0 y no hay caracteres en el valor actual, este valor no se añadirá ya que los ceros a la izquierda no nos sirven de nada. Ahora veamos la función AgregarPunto :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregarPunto", "Archivo : ObjetoMarcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.cpp", "AgregarPunto"); ?>
                <p>En esta función lo primero que hacemos es mirar el valor _Punto, ya que si esta en true quiere decir que ya hay una coma decimal en el valor actual, y por lo tanto no debemos añadir más. En segundo lugar, si no hay ningún carácter añadiremos un cero al valor actual. Y por último se añade un punto al valor, y se asigna _Punto a true. Veamos la función AgregarOperacion : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAgregarOperacion", "Archivo : ObjetoMarcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.cpp", "AgregarOperacion"); ?>
                <p>Lo primero es determinar si el valor no es cero para añadirlo a la lista. Si el valor es válido creamos una clase ObjetoMarcador_Datos en la que almacenamos el valor actual, luego creamos otra clase ObjetoMarcador_Datos en la que añadimos la operación que se va a realizar. Por último borramos el contenido de _ValorActual, y asignamos _Punto a false, de forma que podamos empezar a añadir un nuevo valor actual.  </p>
                <p>Ahora veamos la función BorrarCaracter : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDBorrarCaracter", "Archivo : ObjetoMarcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.cpp", "BorrarCaracter"); ?>
                <p>Lo primero que miramos en esta función es si el tamaño de valor actual es 1, y en ese caso asignamos un cero a valor actual y a su tamaño. En caso de que el valor actual sea mas grande que uno, borramos el ultimo carácter y nos fijamos si era un punto para asignar correctamente el valor _Punto. </p>
                <p>Y si llegamos al caso de que valor actual es 0 quiere decir que no tenemos mas caracteres en el valor actual, pero puede que tengamos valores y operaciones en la lista, así que miramos el tamaño de la lista. Si el tamaño de la lista es mas grande que 1 lo que hacemos es asignar el ultimo valor de la lista al valor actual, y eliminar tanto la operación como el ultimo valor de la lista.</p>
                <p>Por último nos queda ver la función Resultado :  </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDResultado", "Archivo : ObjetoMarcador.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoMarcador.cpp", "Resultado"); ?>
                <p>Para mostrar correctamente toda la operación lo primero que hacemos es añadir el valor actual a la lista, luego hacemos un bucle que revisa todos los valores a partir de la segunda posición de la lista. La lista contiene los datos de la siguiente forma : VALOR, OPERACION, VALOR, OPERACION, VALOR, etc.. asi que si partimos del primer valor, sabemos que luego siempre vendrá una operación y un segundo valor. Por último formateamos correctamente el resultado, miramos si contiene una coma decimal para asignar el valor _Punto, repintamos el control, y borramos la lista de operaciones para comenzar una nueva lista.</p>
                <p>Llegados a este punto ya hemos visto lo más importante a la hora de crear nuestro marcador. Si deseáis ver el marcador funcionando podéis descargar los ejemplos de este tutorial y echar un vistazo al ejemplo numero 6 : </p>
                <p>La siguiente y última parte del tutorial será el punto y final para la calculadora, y consistirá en enlazar todo lo hecho anteriormente para ensamblar la aplicación : <a href="/Blog/Tutorial_WINAPI_1_7">1.7  - Terminando la calculadora</a></p>            
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
