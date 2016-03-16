<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.1 Creación del ObjetoBarraProgreso");*/
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.1 Creación del ObjetoBarraProgreso", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.1 Creación del ObjetoBarraProgreso");
        
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ejemplo.3.1.png" alt="Tutorial 3 Instalador y Ensamblador"  style='cursor:pointer;' />
                <p>En este tutorial nos vamos a hacer nuestra barra de progreso desde cero, que se usara en el instalador final para mostrar el progreso de instalación.</p>
                <p>Al ser un control 'visual' que no requiere interaccion por parte del usuario, sera bastante facil de programar. Lo unico que tenemos que tener claro es que la barra puede ser vertical o horizontal, y esto se decidira por su forma inicial al crearla. Por ejemplo si creamos una barra de 200 pixeles de ancho por 10 de alto, esta barra sera horizontal.</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>En primer lugar creamos la clase ObjetoBarraProgreso que heredara de ObjetoControl, y definimos sus miembros. Vamos a necesitar varios  miembros para asignar/obtener el mínimo, el valor y el máximo de la barra,  además de los colores para el control :</p>
                <div style='clear:both'></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoBarraProgreso", "Archivo : ObjetoBarraProgreso.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBarraProgreso.h", "ObjetoBarraProgreso"); ?>
                
                <p> Podríamos haber hecho que mínimo siempre fuera 0 y máximo  siempre fuera 100, pero me parece interesante poder asignar esos valores y que  la barra calcule el porcentaje, ya que nos ahorrara código para calcular el  porcentaje en la aplicación final. Pensad por ejemplo que tenemos 433 archivos  y queremos mostrar el porcentaje completado, si la barra tuviera mínimo 0 y  máximo 100, la aplicación sería la encargada de calcular el porcentaje, en  cambio al hacer que el mínimo y el máximo sean variables de forma que el  ObjetoBarraProgreso tenga que calcularlos internamente, nos ahorramos tener que  escribir un código para calcular el porcentaje en la aplicación. </p>
                <p> El ObjetoBarraProgreso es un control que no requiere  acciones del usuario por lo que será bastante fácil de programar, ya que no  necesitamos responder a la mayoría de eventos. El único evento que  necesitaremos re-escribir es el Evento_Pintar :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDEvento_Pintar", "Archivo : ObjetoBarraProgreso.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoBarraProgreso.cpp", "ObjetoBarraProgreso::Evento_Pintar"); ?>
                <p>Veamos la función en 7 pasos : </p>
                <ul>
                <li>Creamos el buffer de pintado con las API&rsquo;s <a href="http://msdn.microsoft.com/en-us/library/dd183489(VS.85).aspx" target="_blank">CreateCompatibleDC</a>,  <a href="http://msdn.microsoft.com/en-us/library/dd183488(VS.85).aspx" target="_blank">CreateCompatibleBitmap</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a> y creamos la región que usaremos para pintar el borde del control con la API <a href="http://msdn.microsoft.com/en-us/library/dd183516(VS.85).aspx" target="_blank">CreateRoundRectRgn</a>.</li>
                <li>Hacemos el cálculo de pixeles necesarios por  parte. Para hacer este cálculo necesitamos saber si la barra es horizontal o vertical,  y luego aplicaremos la siguiente fórmula para determinar el tamaño en pixeles  que necesita : <b>((Maximo – Minimo) / TamañoControl) * (Valor – Minimo)</b>.</li>
                <li>Pintamos el fondo utilizando las API&rsquo;s  <a href="http://msdn.microsoft.com/en-us/library/dd183518%28VS.85%29.aspx" target="_blank">CreateSolidBrush</a>, <a href="http://msdn.microsoft.com/en-us/library/dd162719(VS.85).aspx" target="_blank">FillRect</a>, y eliminamos la brocha con al API <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>. Este fondo es el fondo &ldquo;vacio&rdquo; del  control, o la parte de barra que no se ha completado.</li>
                <li>Pintamos un degradado en la parte de la barra de progreso con la  API <a href="http://msdn.microsoft.com/en-us/library/dd144957(VS.85).aspx" target="_blank">GradientFill</a>.</li>
                <li>Pintamos un borde de 2 pixeles con 2 colores  distintos utilizando las API&rsquo;s <a href="http://msdn.microsoft.com/en-us/library/dd183518%28VS.85%29.aspx" target="_blank">CreateSolidBrush</a>, <a href="http://msdn.microsoft.com/en-us/library/dd144839(VS.85).aspx" target="_blank">FrameRgn</a> y borramos la brocha utilizada con la API <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a>.</li>
                <li>Pintamos el buffer al HDC del control utilizando la API <a href="http://msdn.microsoft.com/en-us/library/dd183370(VS.85).aspx" target="_blank">BitBlt</a>.</li>
                <li>Liberamos la memoria utilizada por el buffer y la región utilizando las API's <a href="http://msdn.microsoft.com/en-us/library/dd162957(VS.85).aspx" target="_blank">SelectObject</a>, <a href="http://msdn.microsoft.com/en-us/library/dd183539(VS.85).aspx" target="_blank">DeleteObject</a> y <a href="http://msdn.microsoft.com/en-us/library/dd183533(VS.85).aspx" target="_blank">DeleteDC</a>.</li>
                </ul>
                
                <p>Con esto ya tenemos un control al que le podemos especificar  mínimo, máximo y valor para que nos pinte una barra.</p>
                <div class='nota'>Aunque no viene a cuento para el instalador,  pensad que podríamos crear un ObjetoBarraDesplazamiento que herede de este control, y  incluya eventos del mouse para que el usuario pudiera posicionar la barra manualmente. </div>
                <p> Llegados a este punto ya podemos pasar al siguiente tutorial  <a href="/Blog/Tutorial_WINAPI_3_2">3.2 Common Dialogs</a>.</p>         
                
                <div class='Centrado'>
                    <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
                </div>



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     