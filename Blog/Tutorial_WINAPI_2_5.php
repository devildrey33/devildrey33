<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WINAPI C++ 2.5 (Creación del ObjetoSnake_Nivel)");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WINAPI C++ 2.5 (Creación del ObjetoSnake_Nivel)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WINAPI C++ 2.5 (Creación del ObjetoSnake_Nivel)");

?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.2.5.png" alt="Tutorial 2.5" style='cursor:pointer;'/>
                <p>En este tutorial no vamos a tocar la API prácticamente pero veremos cómo hacer un parsing de un fichero de texto para obtener datos que usaremos para definir un nivel/pantalla del juego.</p>
                <p>Este objeto tiene por objetivo leer un archivo de texto e identificar y almacenar los valores que contiene dentro de forma que pueda crear paredes en la pantalla del juego donde nos encontremos. Para ello usaremos el ObjetoArchivo que creamos anteriormente en el tutorial 2.3</p>
                <!-- FIN_INTRODUCCION -->
                <p>Veamos la declaración de ObjetoSnake_Nivel :</p><div style='clear:both'></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoSnake_Nivel", "Archivo : ObjetoSnake_Nivel.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake_Nivel.h", "ObjetoSnake_Nivel"); ?>
                <p>Como podéis observar la clase no tiene mucha complicación, existen 2 funciones CargarNivel y EvaluarLinea, y luego tenemos todos los parámetros que necesitamos para el nivel del juego.</p>
                <p>La función CargarNivel carga en memoria todo el archivo txt, lo separa por líneas, y analiza cada línea con la función EvaluarLinea. Para cargar un nivel debemos especificar que numero de nivel queremos cargar. La idea es crear un archivo para cada nivel, por ejemplo &ldquo;Nivel1.txt, Nivel2.txt, etc…&rdquo;</p>
                <p>Al usar un archivo txt debemos tener claro que hay que usar las funciones ANSI y no las funciones Unicode para realizar operaciones con el archivo.</p>
                <p>Veamos la función CargarNivel :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCargarNivel", "Archivo : ObjetoSnake_Nivel.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake_Nivel.cpp", "ObjetoSnake_Nivel::CargarNivel"); ?>
                <p>Para empezar inicializamos todos los valores a cero por si las moscas, y creamos las variables que vamos a necesitar. Lo que hacemos después es leer todo el archivo en un buffer, y luego escaneamos todo el buffer para encontrar el carácter 13 (que es el intro), además también ignoramos todos los caracteres 10 ya que en Windows cada intro en un txt se simboliza con 2 caracteres, el 13 seguido del 10. Una vez tenemos la línea la pasamos a la función EvaluarLinea para que esta determine si es un valor valido y que valor es. Por último borramos el buffer de la memoria, y comprobamos que se han aceptado un total de lineas por la función EvaluarLinea que debe ser igual a 7 mas la altura del tablero. En el caso de que esa comprobación falle quiere decir que nos faltan datos del nivel, por lo cual retornaremos FALSE indicando un error al leer el nivel.</p>
                <p>Ahora veamos la función EvaluarLinea que es la que realmente hace el parsing :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvaluarLinea", "Archivo : ObjetoSnake_Nivel.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoSnake_Nivel.cpp", "ObjetoSnake_Nivel::EvaluarLinea"); ?>
                <p>Lo primero que hacemos es quitar todos los espacios de la línea, de forma que nos quede NombreValor=Num; por muchos espacios que tuviera por el medio. Al mismo tiempo que quitamos los espacios almacenamos en el nombre los caracteres que vamos encontrando que no sean el símbolo =. En el momento que encontramos el símbolo = almacenaremos los siguientes caracteres como parte del valor en vez del nombre.</p>
                <p>Una vez tenemos separado el nombre y el valor comparamos el nombre con los nombres que tengo asignados para cada valor del nivel, y cuando lo encontramos asignamos el valor de la línea a su ubicación correspondiente. Por último los valores del tablero son dinámicos, es decir no hay un número fijo definido, ya que lo definimos nosotros mismos en AltoTablero, por lo que necesitamos tener tantas líneas como la variable AltoTablero indique. Además esas líneas en sus valores solo podrán tener tantos caracteres como AnchoTablero indique.</p>
                <p>Por último remarcar que en las variables Tablero[] se tomara como parte del muro cualquier carácter que no sea un punto.</p>
                <p>En el ejemplo 2.5 utilizamos esta clase para cargar un nivel en memoria.</p>
                <p>Y por fin llegamos al último tutorial de la segunda parte donde veremos todo el juego ensamblado y funcionando : <a href="/Blog/Tutorial_WINAPI_2_6">2.6 - Terminando el Snake (ObjetoSnake)</a>.</p>            
    
                <table class='Centrado'><tr>
                        <td><a class='Boton-Normal' href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a></td>
                	<td><a class='Boton-Normal' href="/Descargas/Snake.zip" target="_blank">Snake compilada</a></td>
                </tr></table>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     