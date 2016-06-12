<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Tutorial WinAPI C++ 3.6 (Creación del ObjetoProgressBar)");-*/

        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Tutorial WINAPI">
        <meta name="keywords" content="WINAPI C++, WINAPI, C++">';

        $Base->InicioPlantilla(basename(__FILE__), "Tutorial WinAPI C++ 3.6 (Creación del ObjetoProgressBar)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Tutorial WinAPI C++ 3.6 (Creación del ObjetoProgressBar)");

?>	


                <!-- INTRODUCCION -->
                <p>Estareis pensando... pero bueno, si ya hemos hecho nuestro propia barra de progreso hace 5 tutoriales... pues si.. pero creo interesante que tambien veais el funcionamiento del ProgressBar de windows.</p>
                <p>Pues nada, vamos a hacer lo mismo que en los anteriores controles estandar y encapsularemos en una clase que tendrá de nombre ObjetoProgressBar, y que heredara de ObjetoControlEstandar (La clase ObjetoControlEstandar se describe en el tutorial <a href="/Blog/Tutorial_WINAPI_3_3">3.3 Creación del ObjetoEditBox</a>).</p>
                <!-- FIN_INTRODUCCION -->
                <p> Veamos su declaración :</p><div style="clear:both"></div>
                <?php $Base->PintarCodigo->PintarArchivoC("IDObjetoProgressBar", "Archivo : ObjetoProgressBar.h", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoProgressBar.h", "ObjetoProgressBar"); ?>
                <p>Lo primero que vemos es una función para crear la  ProgressBar, después tenemos varias funciones para asignar / obtener el mínimo, el máximo y el valor de la barra, que son : AsignarRango, ObtenerRagon, Mínimo, Máximo y Valor.</p>
                <p>Veamos la función CrearProgressBar :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDCrearProgressBar", "Archivo : ObjetoProgressBar.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoProgressBar.cpp", "ObjetoProgressBar::CrearProgressBar"); ?>
                <p>Lo primero que se hace es llamar a la función  ObjetoIniciarCommonControls::Iniciar. Esta función llama a la API  <a href="http://msdn.microsoft.com/en-us/library/bb775697(VS.85).aspx" target="_blank">InitCommonControlsEx</a> para iniciar los controles estándar de windows para nuestra aplicación. Al iniciar los CommonControlEx podemos utilizar controles que no son estandar de windows 95, y adoptar el aspecto grafico del sistema operativo (siempre que la aplicacion tenga su archivo .manifest).</p>
                <p>Lo segundo que se hace es llamar a la API <a href="http://msdn.microsoft.com/en-us/library/ms632680(VS.85).aspx" target="_blank">CreateWindowEx</a> con  el segundo parámetro &quot;PROGRESS_CLASS&quot; (que es una macro para identificar la clase). Esto hace que el control creado se convierta en un  PROGRESSBAR. </p>
                <p>Lo siguiente es llamar a la función _ConectarControl, que  re-emplazara el WindowProcedure de la ProgressBar por el nuestro.</p>
                <p>Y por último asignamos los valores mínimo, máximo y valor. Para ello utilizamos la función AsignarRango, y la función Valor.</p>
                <p>Ahora veamos como funcionan las funciones AsignarRango y ObtenerRango :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDAsignarRango", "Archivo : ObjetoProgressBar.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoProgressBar.cpp", "ObjetoProgressBar::AsignarRango"); ?>
                <p>La función AsignarRango manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb760846(v=VS.85).aspx" target="_blank">PBM_SETRANGE</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, especificando en el LPARAM el mínimo y el máximo. Para especificar el mínimo y el máximo podemos utilizar la macro <a href="http://msdn.microsoft.com/en-us/library/ms632661(VS.85).aspx" target="_blank">MAKELPARAM</a>. Y la función ObtenerRango manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb760832(v=VS.85).aspx" target="_blank">PBM_GETRANGE</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a> especificando en el LPARAM una estructura del tipo   <a href="http://msdn.microsoft.com/en-us/library/bb760822(v=VS.85).aspx">PBRANGE</a> en la que nos devolvera el valor mínimo y máximo.</p>
                <p>También puede que necesitemos obtener solo el mínimo o solo el máximo, para ello se han implementado las funciones Minimo y Maximo :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDMinimo", "Archivo : ObjetoProgressBar.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoProgressBar.cpp", "ObjetoProgressBar::Minimo"); ?>
                <p>Para obtener el mínimo y el máximo en estas funciones se manda el mensaje <a href="http://msdn.microsoft.com/en-us/library/bb760832(v=VS.85).aspx" target="_blank">PBM_GETRANGE</a> con la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>. La única diferencia entre estas dos funciones es que en el wParam la función Minimo especifica FALSE, y la función Maximo especifica TRUE. El mismo mensaje <a href="http://msdn.microsoft.com/en-us/library/bb760832(v=VS.85).aspx" target="_blank">PBM_GETRANGE</a> puede funcionar de varias formas : puede obtener el mínimo y el máximo en la misma llamada, o solo obtener el mínimo o el máximo.</p>
                <p>Por último nos queda ver las funciones para asignar y obtener el valor :</p>
                <?php $Base->PintarCodigo->PintarArchivoC("IDValor", "Archivo : ObjetoProgressBar.cpp", "../Codigo/Tutoriales_WinAPI/Objetos Tutorial/ObjetoProgressBar.cpp", "ObjetoProgressBar::Valor"); ?>
                <p>Como podéis ver el funcionamiento es bastante fácil, se utiliza la API <a href="http://msdn.microsoft.com/en-us/library/ms644950(VS.85).aspx" target="_blank">SendMessage</a>, y se le pasa el parámetro <a href="http://msdn.microsoft.com/en-us/library/bb760830(v=VS.85).aspx" target="_blank">PBM_GETPOS</a> para obtener el valor, o el parámetro <a href="http://msdn.microsoft.com/en-us/library/bb760844(v=VS.85).aspx" target="_blank">PBM_SETPOS</a> para asignarlo.</p>
                <p>Para mas información referente al control ProgressBar consulta el siguiente enlace de la MSDN : <a href="http://msdn.microsoft.com/en-us/library/bb760818(v=VS.85).aspx" target="_blank">ProgressBar Control</a>.</p>
                <p>Siguiente tutorial : <a href="/Blog/Tutorial_WINAPI_3_7"> 3.7 Creación del ObjetoListView</a>.</p>
    <div class='Centrado'>
                <a class="Boton-Normal" href="/Descargas/EjemplosWinAPI.zip" target="_blank">Descargar tutorial WinAPI completo</a>
    </div>


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
     