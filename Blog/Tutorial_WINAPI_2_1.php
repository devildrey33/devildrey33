<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 2.1 (Creación del ObjetoEscena)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 2.1 (Creación del ObjetoEscena)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 2.1 (Creación del ObjetoEscena)");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.2.1.png" alt="Tutorial 2.1" style='cursor:pointer;' />
                <p>Esta parte del tutorial consistira en crear un objeto que se encargara de gestionar la escena. La escena seran todos aquellos graficos que se tengan que pintar en la venana, y en este caso consistira en un fondo y varias 'ventanas' translucidas. </p>
                <p>Necesitaremos crear cuatro modelos de ventanas translucidas por lo que sera una buena idea hacer un modelo base del cual poder derivar nuestras futuras tres ventanas translucidas, que seran : Marcador, Tablero, Mensaje y Records.</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>Bueno para empezar todos conoceréis el típico juego de la serpiente que va comiendo fichas, y se hace mas grande, en el que la única dificultad reside en no chocar con ella misma o con los muros. </p>
                <p>El juego en si no es muy complicado de programar, pero lo que se pretende es tener en primera instancia una base para un entorno grafico que nos pueda servir tanto para este juego, como para otro tipo de aplicaciones.</p>
                <p>Lo primero será definir que queremos que haga esta interfaz grafica, y como estructurarla de forma que luego resulte simple añadir nuevas funciones a esta.</p>
                <p>Lo que se busca es : Una ventana padre que pueda contener un fondo, y que simule dentro de ella unas ventanas translucidas que se usaran en este caso para mostrar el juego, el marcador, mensajes como la pausa, y los records.</p>
                <p>Para cumplir estos objetivos se diseñaran 2 clases básicas : ObjetoEscena y ObjetoEscena_VentanaTranslucida.</p>
                <p>El ObjetoEscena deberá ser capaz de mostrar una o mas ventanas translucidas, y el ObjetoEscena_VentanaTranslucida se encargara de pintar los gráficos que necesitemos para dicha ventana. Por ello necesitaremos crear estas dos clases paralelamente ya que no podrán funcionar una sin la otra.</p>
                <p>Veamos la declaración de ObjetoEscena :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoEscena", "Archivo : ObjetoEscena.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena.h", "ObjetoEscena"); ?>
                <p>Esta clase en esencia tiene una función para crear la ventana, 2 funciones / eventos que re-emplazaran los eventos de pintado, y varias funciones para interactuar con la escena. Además también contiene un vector de ObjetoEscena_VentanaTranslucida en el cual se almacenaran todas las ventanas translucidas que necesitemos crear.</p>
                <p>La idea es que esta clase pinte un fondo partiendo de una imagen BMP, y luego pinte encima cada ventana translucida de forma ordenada. Para entenderlo mejor pintaremos todos los objetos que contiene nuestra escena, empezando por el último objeto visible hasta el primero.</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEscena_Pintar", "Archivo : ObjetoEscena.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena.cpp", "Escena_Pintar"); ?>
                <p>Como se ve en el código anterior, nos creamos un buffer para pintar los gráficos, pintamos el fondo, y luego llamamos a la función pintar de cada ventana translucida.</p>
                <p>Hasta aquí parece fácil la cosa, ahora veamos la función pintar del ObjetoEscena_VentanaTranslucida :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDPintar", "Archivo : ObjetoEscena_VentanaTranslucida.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoEscena_VentanaTranslucida.cpp", "Pintar"); ?>
                <p>Para empezar se han creado 2 buffers en memoria para pintar gráficos, en el primero pintaremos la porción del fondo de la escena que corresponde con la ubicación de la ventana translucida, y en el segundo buffer pintaremos una recta redondeada que nos servirá de ventana. Una vez tenemos estos dos elementos preparados empezamos a fusionar los gráficos, para ello se utilizara la API <a href="http://msdn.microsoft.com/en-us/library/dd183351(VS.85).aspx" target="_blank">AlphaBlend</a>. Esta API lo que hace es pintar un DC translucido encima de otro, de forma que veamos el fondo algo borroso, y nuestra ventana por encima.</p>
                <img src="/Graficos/BordesVentanaTranslucida2.jpg" style="float:right" />
                <p>Una vez hecho esto se nos presenta un gran problema, ya que Windows pinta prácticamente todo a base de rectángulos, pero nosotros no queremos que nuestra ventana translucida sea rectangular.</p>
                <p>La mejor solución que se me ocurrió fue utilizar la API <a href="http://msdn.microsoft.com/en-us/library/dd145141(VS.85).aspx" target="_blank">TransparentBlt</a> en vez de usar la API <a href="http://msdn.microsoft.com/en-us/library/dd183370(VS.85).aspx" target="_blank">BitBlt</a>. La API <a href="http://msdn.microsoft.com/en-us/library/dd145141(VS.85).aspx" target="_blank">TransparentBlt</a> en esencia actúa como BitBlt, pero le podemos indicar un color como de la imagen para que lo trate como si fuera totalmente transparente.</p>
                <p>Pero con esto no solucionamos el problema aun. Al usar la API <a href="http://msdn.microsoft.com/en-us/library/dd183351(VS.85).aspx" target="_blank">AlphaBlend</a> los colores de las imágenes originales no tienen porque seguir siendo los mismos, por ejemplo queremos que el color transparente sea el negro, y tenemos una imagen con fondo negro, pero le sobreponemos otra imagen con <a href="http://msdn.microsoft.com/en-us/library/dd183351(VS.85).aspx" target="_blank">AlphaBlend</a> que tenia el fondo gris, el resultado de nuestro fondo sera un gris mas oscuro que no será negro. </p>
                <p>Lo que habrá que hacer es editar los pixeles que queremos que sean transparentes para asignarles el color que le indicaremos a la API <a href="http://msdn.microsoft.com/en-us/library/dd145141(VS.85).aspx" target="_blank">TransparentBlt</a> para usar como transparente. En este caso usaremos una tonalidad de color negro RGB(10,10,10) como en la foto de la derecha para lo que sobre de los bordes. </p>
                <img src="/Graficos/BordesVentanaTranslucida.jpg" style="float:right" />
                <p>Como podemos reconocer los pixeles que queremos que sean transparentes? </p>
                <p>En primera instancia se me ocurrió cambiar todos los pixeles que tuvieran el mismo color que el pixel x-0 y-0 de nuestra ventana translucida, pero esta solución no nos sirve si queremos sobreponer una ventana sobre otra, o si tenemos un fondo que no tiene porque ser de un solo color (una imagen por ejemplo). Así que ya podemos descartar esta alternativa.</p>
                <p>Lo siguiente que pensé fue en comparar con la API <a href="http://msdn.microsoft.com/en-us/library/dd162883(VS.85).aspx" target="_blank">PtInRegion</a> cada pixel para ver si ese pixel estaba dentro o fuera de la región, y en caso de estar fuera cambiaríamos el pixel al color que elegimos como transparente.</p>
                <p>Esta solución me dio los resultados que buscaba en cuanto a mostrar bien los gráficos, pero resultaba ser lenta si se escaneaban todos los pixeles de la imagen. Por ello tuve que optimizar esta solución de forma que solo se miren 10 pixeles cuadrados de cada esquina de la ventana. </p>
                <p>En la foto de la izquierda podeis ver como la parte negra exterior de los bordes desaparece para convertirse en transparente. Si os fijais el los dos circulos rojos superiores vereis que aunque el fondo no sea de un unico color los bordes quedan perfectamente. </p>
                <p>El resultado es que se necesita mas código, pero el ordenador sufre mucho menos. Si por ejemplo la ventana es de 300*300 el código inicial necesitaría hacer unas 90000 veces las comprobaciones, una por cada pixel. Pero como sabemos que los únicos pixeles que queremos comprobar son los que están en las esquinas de las ventanas, si hacemos 4 bucles (uno para cada esquina) que miren 10 pixeles cuadrados será mas que suficiente (lo que serian unas 400 comprobaciones en vez de 90000).</p>
                <p>Por último para acceder a la lista de pixeles que contiene un BMP debemos usar la API <a href="http://msdn.microsoft.com/en-us/library/dd144879(VS.85).aspx" target="_blank">GetDIBits</a>, dicha api es un poco complicada de utilizar la primera vez, ya que nos pide un buffer para almacenar los bits del BMP en forma de void. Esto lo han hecho así porque los mapas de bits no tienen una longitud fija, y sus atributos pueden contener valores de 4, 8, 16, 24 y 32 bits. En este ejemplo forzamos a la API a que nos retorne el mapa de bits en formato de 32bits, que viene a ser una estructura así : 8bits canal B (azul), 8bits canal V (verde), 8bits canal R (rojo) y 8bits para datos extra EN ESTE ORDEN.</p>
                <p>Una vez retocados los pixeles de la imagen, asignamos nuestro nuevo array de pixeles con la API <a href="http://msdn.microsoft.com/en-us/library/dd162973(VS.85).aspx" target="_blank">SetDIBits</a> al HBITMAP que queremos pintar, y ya podemos utilizar la API <a href="http://msdn.microsoft.com/en-us/library/dd145141(VS.85).aspx" target="_blank">TransparentBlt</a> para terminar de pintar la ventana translucida.</p>
                <p>Por ultimo he creado dos funciones virtuales dentro de ObjetoEscena_VentanaTranslucida, que son : Pintar_AlphaBlend y Pintar_Terminado. La primera se usara para pintar graficos adicionales antes de pasar la función <a href="http://msdn.microsoft.com/en-us/library/dd183351(VS.85).aspx" target="_blank">AlphaBlend</a>, y la segunda función se usara para pintar aquellos graficos que queramos pintar opacos sin añadirlos al <a href="http://msdn.microsoft.com/en-us/library/dd183351(VS.85).aspx" target="_blank">AlphaBlend</a>.</p>
                <p>Con todo esto hecho ya podemos empezar a crear nuestros objetos ObjetoEscena_VentanaTranslucida, de forma que podamos crear varios modelos distintos dependiendo de lo que necesitemos.</p>
                <p>En el ejemplo 2.1 podemos ver la ventana ObjetoEscena que tiene como imagen de fondo el logo de www.devildrey33.es y que luego pinta 2 ObjetoEscena_VentanaTranslucida solapadas por encima del logo.</p>
                <p>En la siguiente parte del tutorial veremos como crear un tablero y un marcador para el juego : <a href="/Blog/Tutorial_WINAPI_2_2"> 2.2 - Creación del tablero, el marcador, y el mensaje</a>.</p>            
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Snake.zip" target="_blank">Snake compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     