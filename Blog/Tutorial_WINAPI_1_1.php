<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 1.1 (POO y WinMain)");*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 1.1 (POO y WinMain)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 1.1 (POO y WinMain)");

?>	


                <!-- INTRODUCCION -->
                <p>Introducción básica a la <strong>P</strong>rogramación <strong>O</strong>rientada a <strong>O</strong>bjetos :</p>
                <p>En la programación orientada a objetos, un objeto es un conjunto de métodos que se han diseñado para llevar a cabo una tarea. En este ámbito debemos pensar que el objeto contiene miembros públicos desde donde otros objetos accederán a el, y miembros privados que se utilizan internamente para realizar la tarea del objeto. Si aplicamos esto a la programación orientada a objetos bajo windows debemos tener claro que una ventana será un objeto, los botones de esa ventana también serán objetos que residirán dentro de esta, y dichos botones no serán accesibles entre ellos, es decir el botón 1 no sabe el texto que tiene el botón 2 y viceversa. En el caso de que necesitáramos pasarle el texto del botón 1 al botón 2 esto se llevaría a cabo desde el objeto ventana, ya que dicho objeto tiene acceso a los métodos y funciones públicos de los 2 botones. </p>
                <!-- FIN_INTRODUCCION -->
                
                <p>
                <img src= "../Web/Graficos/ObjetosCalculadora.png" alt="Grafico objetos calculadora"  style="float:right" />Para ver este concepto más claro vamos a plantearnos que necesitamos hacer una calculadora. Esa calculadora requiere una ventana, diez botones con los números del 0 al 9, cinco botones para las operaciones básicas (suma, resta, multiplicación, división y resultado), un marcador para que podamos ver los resultados por pantalla que ademas realizara las operaciones de la calculadora. En la parte derecha podéis ver un esquema de como podríamos estructurar los objetos de la calculadora.
                </p><p>
                Una vez tengamos esta estructuración en mente, ya podemos empezar a darle forma. Empezaremos por ver la función WinMain de Windows, que viene a ser un substituto del típico int main(void) . 
                </p><p>
                La función quedaría más o menos así :
                </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDWinMain", "Archivo : Tutorial_WinMain.cpp", "../Codigo/Tutoriales_WinAPI/Tutorial_WinMain.cpp", "WinMain"); ?>
                <p>Como podéis ver el WinMain nos da 4 parámetros :</p>
                <ul>
                <li><strong>hInstance :</strong><br />Este parámetro es una ID que windows utiliza internamente para enumerar las aplicaciones que tiene funcionando.</li>
                <li><strong>hPrevInstance :</strong><br />Este parámetro solo se usa en aplicaciones COM, para saber si hay una instancia previa de esta aplicación funcionando.</li>
                <li><strong>lpCmdLine :</strong><br />Este parámetro contiene una cadena de texto con la línea de comandos entera que se ha usado para iniciar la aplicación, esto incluye la ruta de la aplicación, y posibles parámetros que se hayan podido pasar.<br /></li>
                <li><strong>nCmdShow :</strong><br />Este parámetro nos indica como debería mostrarse la ventana a la hora de arrancar la aplicación : maximizada, normal, o minimizada.</li>
                </ul>
                <p>En principio estos parámetros no los  vamos  a necesitar, y en  caso de necesitarlos se pueden obtener por funciones del API de windows. Para  obtener la instancia de nuestra aplicación podemos usar <a href="http://msdn.microsoft.com/en-us/library/ms683199%28VS.85%29.aspx" target="_blank">GetModuleHandle</a>(NULL),  y para obtener la línea de comandos podemos usar <a href="http://msdn.microsoft.com/en-us/library/ms683156%28VS.85%29.aspx" target="_blank">GetCommandLine</a>.</p>
                <p>En una aplicación que utilice ventanas debemos crear un  bucle que capte los mensajes de todas nuestras ventanas, y los distribuya a su  correspondiente ventana.</p>
                <p>Veamos como debería ser un bucle main : </p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDBucle1", "Archivo : Tutorial_WinMain.cpp", "../Codigo/Tutoriales_WinAPI/Tutorial_WinMain.cpp", "Bucle1"); ?>
                <p>Este bucle lo que hace es esperar a que windows mande un mensaje a nuestra aplicación para luego pasárselo a nuestra ventana. Para ello intervienen 3 APIS : <a href="http://msdn.microsoft.com/en-us/library/ms644936(VS.85).aspx" target="_blank">GetMessage</a>, <a href="http://msdn.microsoft.com/en-us/library/ms644955(VS.85).aspx" target="_blank">TranslateMessage</a> y <a href="http://msdn.microsoft.com/en-us/library/ms644934(VS.85).aspx" target="_blank">DispatchMessage</a></p>
                <p>Normalmente este bucle no debería variar a no ser que nuestra aplicación requiera mas tiempo de ejecución es decir que requiera un uso pleno de la CPU como sucedería en la mayoría de juegos. En este caso necesitaríamos hacer un bucle distinto. La API <a href="http://msdn.microsoft.com/en-us/library/ms644936(VS.85).aspx" target="_blank">GetMessage</a> <b>espera</b> a que Windows pase un nuevo mensaje para nuestra aplicación. Esto lo hace así porque en la ventana se ha especificado NULL, y en wParam y lParam se ha especificado 0. También podríamos especificar que solo obtuviera mensajes de una sola ventana lo que no resultaría muy útil a la hora de controlar una segunda ventana / control, ya que solo se procesarían los mensajes de una y la otra quedaría como descolgada.</p>
                <p>Cabe a destacar que cuando se use la API <a href="http://msdn.microsoft.com/en-us/library/ms644945%28VS.85%29.aspx" target="_blank">PostQuitMessage</a>, esta enviara la notificación <a href="http://msdn.microsoft.com/en-us/library/ms632641%28VS.85%29.aspx" target="_blank">WM_QUIT</a>, y <a href="http://msdn.microsoft.com/en-us/library/ms644936(VS.85).aspx" target="_blank">GetMessage</a> devolverá FALSE de forma que terminara el bucle y la aplicación. </p>
                <p>El bucle anterior es suficiente para aplicaciones que  esperen eventos de una o varias ventanas, pero y si necesitamos ejecutar algún proceso  durante toda la ejecución, independientemente de los eventos que puedan recibir  las ventanas?</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDBucle2", "Archivo : Tutorial_WinMain.cpp", "../Codigo/Tutoriales_WinAPI/Tutorial_WinMain.cpp", "Bucle2"); ?>
                <p>Con este bucle Main lo que estaríamos haciendo es : ejecutar NuestrasOperaciones(),  luego miramos si hay algún mensaje para nuestra aplicación, si es así lo procesamos. La API <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a> <b>no espera</b>  a que windows nos pase un mensaje para nuestra aplicación, simplemente mira si existe algún mensaje, y en ese caso lo procesa.</p>
                <p>De la misma forma que antes en la API <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a> se ha especificado NULL en la ventana, 0 en el lParam y 0 en el wParam, Así podemos obtener todos los mensajes de nuestra aplicación, no solo los de una ventana.</p>
                <p>En esencia las  API's <a href="http://msdn.microsoft.com/en-us/library/ms644936(VS.85).aspx" target="_blank">GetMessage</a> y <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a> hacen lo mismo con la diferencia de que <a href="http://msdn.microsoft.com/en-us/library/ms644936(VS.85).aspx" target="_blank">GetMessage</a> se espera hasta recibir un mensaje de forma que la aplicación queda suspendida, y <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a> mira si existe algún  mensaje en la cola, en ese caso no retorna 0 y podemos pasar a procesar el mensaje. Por último cabe a destacar que al usar <a href="http://msdn.microsoft.com/en-us/library/ms644943(VS.85).aspx" target="_blank">PeekMessage</a> tenemos que controlar cuando recibimos la notificación WM_QUIT, que es la encargada de decirnos que la aplicación debe terminar. </p>
                <p>Visto todo esto ya podéis pasar al siguiente punto del tutorial, <a href="/Blog/Tutorial_WINAPI_1_2">1.2 - Creación de una ventana y obtención de sus eventos</a>. </p>
                
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Calculadora.zip" target="_blank">Calculadora compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
