<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("LMD 0.02a (Libreria Multiplataforma Devildrey33)");*/
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="LMD windows linux">
        <meta name="keywords" content="LMD">';

        $Base->InicioPlantilla(basename(__FILE__), "LMD 0.02a (Libreria Multiplataforma Devildrey33)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "LMD 0.02a (Libreria Multiplataforma Devildrey33)");
        
        
?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_LMD.png" alt="Libreria Multiplataforma devildrey33" />
                <p>Durante el 2010 tube un contacto bastante mayor con sistemas linux que de costumbre, por lo que en ciertos ratos libres me dedique a intentar convertir la <a href="DWL.php">Devildrey33 Windows Lib</a> a una librería multiplataforma que sirviera tanto para windows como para linux, por desgracia si ya no era capaz de mantener la DWL esta libreria estaba predeterminada a lo mismo, y se quedo en una version alpha.</p>
                <p>Por otra parte creo que el código puede llegar a ser intenresante para algunos ya que empeze a implementar un sistema de creación de ventanas el cual respondia a ciertos eventos basicos, y que en teoria con el mismo código podria crear aplicaciones tanto para windows como para linux.</p>
                <!-- FIN_INTRODUCCION -->
                <p>En principio tiene varios objetos orientados a cada sistema operativo que quedan en una capa donde el programador final no puede acceder. La idea era implementar ventanas con eventos que pudieran ser manipuladas de la misma forma tanto en windows como en linux, pero aunque la idea puede resultar muy bonita a la practica es todo un follon. Para empezar el teclado y algunas funciones del raton responden de forma distinta en los dos sistemas operativos, para poner un ejemplo muy claro en windows si usas la rueda del raton ese evento se manda a la ventana que tiene el foco, en cambio en linux ese evento se manda a la ventana que hay debajo del cursor del raton.</p>
                <p>El código solo compila con NetBeans utilizando el compilador MinGW en windows y gcc bajo linux.</p>
                <p>Aunque el desarrolo ha quedado totalmente detenido, esto me sirvio para profundizar bastante mejor en la programación bajo X11 de linux, y asi pude ver la gran diferencia que existe entre estos dos sistemas de generacion de ventanas graficas. Y por desgracia le he pillado algo de mania al API del X11 ya que es super engorroso en contra del API de windows que es mucho mas ordenado y preciso para cada tarea. Por no hablar de que el X11 es un sistema super viejo que se mantiene en pie gracias a miles de parches, y esto lo hace aun mas dificil de programar (aunque debo admitir que tiene algunas ideas que me gustan mas que las de windows).</p>
                <div class='Centrado'>
                    <a class="Boton-Normal" href="/Descargas/LMD.zip" target="_blank">Descargar código fuente de la LMD 0.02a</a>
                </div>


<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>