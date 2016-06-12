<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("BubaTronik 0.61");*/

	include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Reproductor audio/video">
        <meta name="keywords" content="BubaTronik 0.61, Reproductor, Reproductor audio, Reproductor video, Reproductor audio/video">';

	
        $Base->InicioPlantilla(basename(__FILE__), "BubaTronik 0.61", $META);
        
        $Base->InicioBlog(basename(__FILE__), "BubaTronik 0.61");
        
        ?>	

                <!-- INTRODUCCION -->
                <p>BubaTronik es un reproductor mixto de audio y video que fue hecho ante la necesidad de tener un programa competente que pudiera manejar mi colección de música y videos (más de 5000 mp3s, y más de 500 videos). Para ello BubaTronik tiene una base de datos la cual contiene información relevante sobre esos medios, y permite la creación de listas en segundos y con una gran facilidad.</p>
                <p>Además el reproductor se ha diseñado de forma que se le puedan añadir idiomas y configuraciones de colores externas al proyecto inicial sin demasiado esfuerzo.</p>
                <p>Este reproductor funciona bajo Windows XP, Windows 2k3 server, Windows Vista y Windows 7.</p>
                <!-- FIN_INTRODUCCION -->
                
                <p><strong>NOTA</strong> : BubaTronik solo se encuentra disponible en una versión de 32 bits. Si tienes un sistema operativo de 64 bits puedes utilizar perfectamente la versión de 32 bits de BubaTronik.</p>
                <h3>BubaTronik se ha construido partiendo las siguientes bases : </h3>
                <ul>
                <li>la librería <a href="DWL">Devildrey33 Windows Lib</a> de la cual sacamos su compatibilidad Windows XP hacia arriba, y su aspecto gráfico. </li>
                <li>la librería <a href="http://www.videolan.org/">LIBVLC</a> que nos proporciona un sistema para poder reproducir audio y video fácilmente. </li>
                <li>la librería <a href="http://www.fmod.org/">FMODEX</a> que nos proporciona un sistema para reproducir audio fácilmente y de una forma mas limpia que la VLC.</li>
                </ul>
                
                <h3>Ventajas ante otros reproductores convencionales :</h3>
                <ul>
                <li>No requiere codecs externos y acepta la mayoría de formatos existentes (gracias a la LIBVLC).</li>
                <li>Tiene una potente base de datos que permite la creación de listas al instante.</li>
                <li>Existe la posibilidad de crear listas aleatorias basadas en un patrón.</li>
                <li>Su bajo consumo de recursos reproduciendo audio, lo hace ideal para utilizar el reproductor en segundo plano mientras se está jugando (gracias a la FMODEX).</li>
                <li>Se pueden cargar y mostrar subtítulos externos para cualquier video (gracias a la LIBVLC).</li>
                <li>El aspecto es altamente configurable.</li>
                <li>Dispone de modos de repeat extra : 'Apagar el reproductor al terminar la lista', y 'Apagar el ordenador al terminar la lista'.</li>
                <li>Posibilidad de activar actualizaciones automáticas.</li>
                </ul>
                
                <h3>Información adicional :</h3>
                <ul>
                <li><a href="BubaTronik_Formatos">Formatos soportados</a></li>
                <li><a href="BubaTronik_Notas">Notas sobre la versión</a></li>
                </ul>
                <p><strong>Notas sobre el desarrollo</strong> : El estado de desarrollo de BubaTronik actualmente está <strong>totalmente detenido</strong>, y sin fecha para su reanudación.</p>
                <div class="Centrado">    
                    <a class="Boton-Normal" href="/Descargas/BubaTronik_0.61.zip" target="_blank">Descargar BubaTronik 0.61</a>
                    <a class="Boton-Normal" href="/Descargas/Codigo_BubaTronik_0.61.zip" target="_blank">Descargar código fuente</a>
                </div>
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>