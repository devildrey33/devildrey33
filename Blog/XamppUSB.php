<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Crear servidor web de pruebas portatil para windows");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Xampp portable'>
	<meta name='keywords' content='Xampp'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Crear servidor web de pruebas portatil para windows", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Crear servidor web de pruebas portatil para windows");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_XAMPP.png" alt="Servidor web XAMP" />
                <p>Hoy vamos a ver cómo podemos instalar un servidor PHP y MySQL para windows en un pendrive, de forma que podamos llevarnos este servidor en el bolsillo a cualquier parte.</p>
                <p>Para ello utilizaremos una aplicación llamada XAMPP.</p>
                <p>XAMPP incluye entre otras cosas un servidor apache con soporte para php y un servidor mysql, y además nos permite instalar todo esto en un pendrive de forma que podamos utilizarlo en varios ordenadores sin tener que instalar nada en ellos. Lo único que tenemos que hacer es enchufar el pendrive en una maquina con windows y ejecutar el XAMPP para activar los servicios que se requieran.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero que vamos a hacer, va a ser descargar el instalador de XAMPP desde esta página web : <a href="http://www.apachefriends.org/en/xampp-windows.html#646" target="_blank">XAMPP HomePage</a></p>
                <img src="/Graficos/Xampp1.png" alt='XAMPP HomePage' />
                <p>Una vez descargado podemos proceder con la instalación.</p>
                <p>Lo primero que nos pedirá es la ruta donde queremos instalar XAMPP, no hace falta decir que debemos seleccionar la unidad donde se encuentra insertado el pendrive, en mi caso la '<b>E</b>', y como directorio de instalación es recomendable dejar XAMPP.</p>
                <p>Cuando tengamos seleccionada la unidad correcta podemos presionar el botón '<b>Install</b>'.</p>
                <img src="/Graficos/Xampp2.png" alt='Instalación de XAMPP' />
                <p>En este punto me he dado cuenta de que el servidor apache requiere el CRT del VisualC++ 2008, y que si no lo tiene, no se ejecuta. Esto lo he visto porque estoy haciendo esto desde una instalación de windows xp sp3 limpia.</p>
                <p>La solución mas simple pasa por descargar el instalador del CRT desde la web de microsoft <a href="http://www.microsoft.com/downloads/es-es/details.aspx?familyid=a5c84275-3b97-4ab7-a40d-3802b2af5fc2&displaylang=es" target="_blank">Visual C++ 2008 CRT</a>.</p>
                <p>Luego podemos dejar el archivo '<b>vcredist_x86.exe</b>' en la raíz del pendrive, por si nos encontramos con este problema en alguna maquina. (más vale ser precavidos que encontrarnos con problemas inesperados).</p>
                <p>Ahora pasemos a la configuración. Lo primero será indicarle el directorio que será la raíz para el servidor web.</p>
                <p>Por defecto este directorio viene configurado como "<b>\xampp\htdocs\</b>" pero se puede cambiar a un directorio mas cómodo, en este caso utilizaremos el directorio "<b>\Webs\</b>".</p>
                <p>Para ello lo que tenemos que hacer es editar el archivo de configuración "<b>\xampp\apache\conf\httod.conf</b>", y buscar dentro el texto "<b>htdocs</b>". En concreto tenemos que buscar la palabra "<b>htdocs</b>" 2 veces.</p>
                <img src="/Graficos/Xampp4.png" alt='\xampp\apache\conf\httod.conf' />
                <p>Bastara con re-emplazar los textos "<b>/xampp/htdocs/</b>" por "<b>/Webs/</b>" para asignar el nuevo directorio para nuestras páginas webs.</p>
                <p>Llegados a este punto ya podemos ejecutar xampp y ver si todo funciona correctamente, para ello nos vamos a la carpeta "<b>xampp</b>", buscamos el archivo "<b>xampp-control.exe</b>", y lo ejecutamos. Nos aparecerá la siguiente ventana :</p>
                <img src="/Graficos/Xampp3.png" alt='XAMPP Control Panel' />
                <p>Presionamos en los botones '<b>Start</b>' de Apache y MySql. Si al lado de estos botones sale el texto "<b>running</b>" con un fondo verde, es que los servidores están funcionando sin ningún problema.</p>
                <p>Ahora podemos configurar las bases de datos MySql abriendo un navegador e introduciendo en la URL : "<b>127.0.0.1/phpmyadmin/</b>", donde nos aparecerá una web en alemán...</p>
                <img src="/Graficos/Xampp6.png" alt='My PHP Admin' />
                <p>Cambiad el idioma, y ya podéis crearos vuestras bases de datos a medida para las páginas que lo requieran.</p>
                <p>Por último comprobamos que se vea el directorio webs, para ello abrimos un navegador, y en la URL introducimos "<b>127.0.0.1</b>"</p>
                <img src="/Graficos/Xampp5.png" alt='Navegador' />
                <p>En mi caso sale un directorio con varios subdirectorios, y en cada uno de ellos tengo una página web. Por lo que me ha funcionado correctamente.</p>
                <p>Y esto es todo por hoy, espero que esto os sirva de ayuda para poder enseñar vuestros proyectos web sin necesidad de tenerlos colgados en internet, de una forma sencilla y profesional.</p>

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     