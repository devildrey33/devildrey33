<?php 
	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Virus fotos 05/06">
        <meta name="keywords" content="Virus fotos 05/06, Virus email fotos 05/05, Email fotos 05/06">';

	
        $Base->InicioPlantilla(basename(__FILE__), "Aplicación para eliminar el virus &quot;Fotos 05/06&quot;", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Aplicación para eliminar el virus &quot;Fotos 05/06&quot;");
/*
	include("devildrey33.php");
	
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));

	$Base->InicioPlantilla("Aplicación para eliminar el virus &quot;Fotos 05/06&quot;");*/
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_FotoVirus0506.png" alt="Email virus Fotos 05/06" />
                <p>En el verano del 2010 aparecio un virus que se propagaba por el correo electronico con el asunto &quot;fotos 05/06&quot; el cual mostraba una fotografia a un tamaño muy reducido y que al clickar encima de ella nos descargaba un archivo que se llama &quot;foto28_.com&quot;. Si lllegabamos a ejecutar este archivo la máquina quedaba infectada por este virus, que entre otras cosas se dedica a enviar a todos nuestros contactos del messenger el mismo correo por tal de expandirse.</p>
                <p>En principio este virus no tiene mucho de extraordinario a comparacion de otros, pero me toco la moral porque varios de mis contactos se infectaron, y me enviaban más copias del virus sin que ellos se dieran cuenta. Entre esos contactos que me enviaban el virus estaban mi padre y mi hermana, con lo que practicamente tenia asegurado el tener que desplazarme para eliminar el virus de sus maquinas.... pero como en el verano del 2010 hacia mucha calor, se me ocurrio que podria hacer una aplicacion que eliminara el virus y asi me ahorraria el desplazamiento y me quedaria tan fresco en casa.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Al final inverti varias horas en la creacion de esta aplicacion, y aparte de ayudar a mis familiares, tambien lo colgue en mi web, y de esta forma mi aplicacion a pesar de costarme unas horas de trabajo hizo un gran servicio a muchos internautas afectados.</p>
                <h3>Observaciones</h3>
                <ul>
                <li>El virus crea una carpeta oculta llamada 'cmos' en la raiz de la unidad donde tenemos instalado el windows</li>
                <li>Si existe conexion a internet, al ejecutarse por primera vez, se descarga varios archivos de algun otro sitio (que no me he molestado a averiguar), en caso de no tener conexion a internet solo crea la carpeta 'cmos' sin ocultarla.</li>
                <li>Una vez descargado el virus se crean cinco archivos :   &quot;?:\cmos\id&quot;, &quot;?:\cmos\xlb.cpl&quot;, &quot;?:\cmos\xln.cpl&quot;, &quot;?:\cmos\xlr.exe&quot;, y &quot;?:\cmos\xlr2.exe&quot; </li>
                <li>De los archivos que se crear, se enlazan cuatro al registro de windows de forma que se arranquen al iniciar el sistema.</li>
                <li>El archivo original del virus es un archivo COM de 64ks que solo tiene codigo para descargar el resto del virus y enlazarlo al sistema.</li>
                <li>Una vez el virus se encuentra activo, tus contactos recibiran correos iguales a la foto que se ve más arriba.</li>
                </ul>
                
                <h3>Proceso que sigue la aplicación para eliminar el virus</h3>
                <ul>
                <li>En primer lugar al arrancar el 'Antivirus Fotos 05/06' se comprobara que seamos el usuario administrador, y en caso de que no lo seamos se nos mostrara un dialogo pidiendo la elevacion de privilegios para la aplicación.</li>
                <li>Una vez el antivirus tenga privilegios de administrador necesarios, mirara el registro de windows para ver si existe los enlaces del virus, y luego enumerara los archivos que componen el virus.</li>
                <li>En este punto podremos ver una lista con varias lineas rojas, donde saldran que partes del virus se han encontrado. En el caso de que no se encuentre nada, nos saldra una ventana que nos comunicara que no tenemos el virus, y acto seguido se cerrara el antivirus.</li>
                <li>Si tenemos el virus, el boton 'Eliminar virus' se activara, y al presionarlo el antivirus intentara eliminar el virus de una sola tirada. En algunos casos (especialmente bajo Windows XP) el antivirus no sera capaz de eliminar los procesos del virus de la memoria ram, con lo que se nos mostrara un mensaje advirtiendo que <strong>debemos reiniciar el sistema y volver a ejecutar este antivirus</strong>.</li>
                </ul>
                
                <img src="/Graficos/Antivirus0506.png" alt="Foto Antivirus 05/06" /><br />
                <h3>Descarga</h3>
                <ul>
                <li>Este programa / antivirus es totalmente gratuito, y aunque no puedo asegurar al 100% que funcione en todos los sistemas, todas las pruebas realizadas en varias maquinas bajo mi supervisión hicieron correctamente el trabajo.</li>
                <li>Este programa se distribuye bajo licencia GPL (General Public License).</li>
                <li>El codigo fuente se distribuye por separado, ya que la mayoria de usuarios no lo van a querer para nada.</li>
                </ul>
                <div class='Centrado'>
                    <a class="Boton-Normal" href="/Descargas/Antivirus_fotos.zip" target="_blank">Descargar Antivirus</a>
                    <a class="Boton-Normal" href="/Descargas/Codigo_Antivirus.zip" target="_blank">Descargar código fuente</a>
                </div>

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>