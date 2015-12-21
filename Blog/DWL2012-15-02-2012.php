<?php 
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Devildrey33 Windows Library">
        <meta name="keywords" content="DWL, Devildrey33 Windows Library">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "DWL 2012", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "DWL 2012");
?>	

				<!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Ataque.png" alt="devildrey33 Windows Library" />
                <p>La verdad es que no tenia intención de actualizar hoy la DWL, pero resulta que recibí un ataque fallido de algún listillo que intento acceder al panel de control de mi web, y al actualizar las medidas de seguridad que incluyen un baneo de IP a todo aquel que intente entrar a alguna carpeta del estilo myphpadmin, sin querer he actualizado la documentación de la DWL.</p>
                <p>En este sentido la he cagado, y como no tengo una copia de la documentación antigua he decidido actualizar la DWL, porque si alguien se decide a consultar la documentación para utilizar la librería se podría encontrar con varias funciones que tienen parámetros distintos.</p>
                <p>Por suerte la seguridad de mi hosting es muy buena, y la web no ha sufrido ningún daño, pero me ha molestado ver este ataque por lo que he decidido reforzar la seguridad para que el atacante se dé cuenta de que estoy alerta.</p>
                <!-- FIN_INTRODUCCION -->

                <p>Las novedades son poco significativas, he retocado la clase DButton para hacerla 100% funcional y he re-emplazado sus eventos por las notificaciones estándar de windows, también he documentado dicha clase al estilo doxygen por completo.</p>
                <img src="/Graficos/BUTTONS.png" alt="Tipos de boton soportados" />
                <p>Ahora estaba puesto en la ComboBox y la ComboBoxEx pero de momento aun les falta para tenerlas listas.</p>
                <p>También debo mencionar que he retocado las macros para iniciar la aplicación, ya que no funcionaban del todo bien. Y también he retocado el diseño interno para almacenar todas las ventanas y controles que se vayan creando, de forma que tenga mucho más control sobre ellos.</p>

                <p style="text-decoration:line-through">Podéis  acceder a la documentacion de la DWL desde el siguiente enlace : Documentación <b>D</b>evildrey33 <b>W</b>indows <b>L</b>ibrary.</p>
                <p><b>Requisitos mínimos :</b> VisualStudio 2008, Windows Vista.</p>
                <div class='nota'>en un futuro se implementara compatibilidad para Windows XP.</div>
                <a class="Boton Centrado" href="/Descargas/DWL_2012.zip" target="_blank">Descargar código fuente de la DWL 2012</a>       
                
                
                
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>