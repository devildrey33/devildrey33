<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Instalar NetBeans y MinGW en Windows");-*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="NetBeans y MinGW Windows">
        <meta name="keywords" content="NetBeans, MinGW, Windows">';

        $Base->InicioPlantilla(basename(__FILE__), "Instalar NetBeans y MinGW en Windows", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Instalar NetBeans y MinGW en Windows");

        
        ?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_NetBeans.png" alt="Instalar NetBeans + MinGW en Windows" />
                <p>NetBeans es un entorno de desarrollo diseñado por Oracle que nos permite crear aplicaciones en distintos lenguajes.</p>
                <p>Lo bueno que tiene este entorno de desarrollo es que es multiplataforma, y esto nos permite crear proyectos en windows para luego revisarlos en linux por ejemplo.</p>
                <p>Trabajar con NetBeans destinado al lenguaje C/C++ en linux es muy fácil, ya que en la mayoría de casos o ya tenemos el compilador instalado, o el compilador se instala automáticamente, pero por desgracia en windows hay que instalar varias cosas a parte, y la configuración puede ser un poco más complicada.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Lo primero que necesitareis será descargar NetBeans desde su página web en internet : <a href="http://netbeans.org/downloads" target="_new">Descargar NetBeans IDE</a>.</p>
                <p>Una vez estéis en la página web de NetBeans, os aparecerá una pantalla donde se os permite seleccionar el idioma, la plataforma, y los paquetes disponibles de NetBeans. En principio solo nos interesa el paquete C/C++ por lo que descargaremos este. De todas formas si más adelante queréis utilizarlo para tocar archivos PHP, Java o cualquier otra cosa, se puede actualizar desde el mismo IDE sin ningún problema.</p>
                <img src="/Graficos/DescargaNetBeans.png" alt="Descargar NetBeans" />
                <p>Cuando tengamos descargado el instalador, podemos proceder con la instalación de NetBeans.</p>
                <p>Es posible que os aparezca un mensaje indicando que no se encuentra Java SE Development Kit en el ordenador como el de la foto de abajo. Si no os aparece ese mensaje podéis pasar directamente a la parte donde se explica la instalación de NetBeans.</p>
                <img src="/Graficos/InstalarJava.png" alt="Instalar Java SE" />
                <p>Si este es el caso debéis  ir al siguiente enlace : <a href="http://java.sun.com/javase/downloads">Java SE Development Kit</a>, y descargar el JDK desde el boton que se muestra en la siguiente imagen :</p>
                <img src="/Graficos/DownloadJDK.png" alt="Download JDK" />
                <p>Una vez presionado ese botón, os aparecerá otra página donde debéis aceptar la licencia, y elegir vuestro sistema operativo, y la arquitectura (32/64 bits).</p>
                <p>La instalación del JDK es muy sencilla, basta con seguir las indicaciones del instalador.</p><br />
                <h2>Instalación  de NetBeans</h2>
                <p>En primer lugar aparecerá una ventana de bienvenida como la siguiente, en este punto bastara con pulsar en el botón 'Siguiente'.</p>
                <img src="/Graficos/InstalarNetBeans1.png" alt="Instalar NetBeans" />
                <p>Luego nos aparecerá un contrato de licencia que tenemos que aceptar, para luego pulsar el botón 'Siguiente'.</p>
                <img src="/Graficos/InstalarNetBeans2.png" alt="Instalar NetBeans" />
                <p>La siguiente ventana nos preguntara el directorio donde queremos instalar NetBeans, y el directorio donde se encuentra instalado el JDK. En principio podemos dejar todo tal cual como viene y pulsar en el botón 'Siguiente'.</p>
                <img src="/Graficos/InstalarNetBeans3.png" alt="Instalar NetBeans" />
                <p>Ahora nos aparecerá una ventana para confirmar el directorio de la instalación y que además nos dice el espacio que vamos a necesitar en el disco. Si los datos son correctos podemos pulsar en el botón 'Instalar'.</p>
                <img src="/Graficos/InstalarNetBeans4.png" alt="Instalar NetBeans" />
                <p>Una vez instalado NetBeans nos aparecerá la siguiente ventana, que nos pedirá si deseamos enviar información anónima sobre el uso que le damos a NetBeans. Podéis hacer lo que más os guste, yo personalmente no tengo problema en que recopile datos anónimos si es para mejorar su producto.</p>
                <img src="/Graficos/InstalarNetBeans5.png" alt="Instalar NetBeans" />
                <p>Cuando le demos al botón terminar ya tendremos el NetBeans listo para ejecutarse. Ahora nos faltara descargar un compilador que pueda utilizar NetBeans. Yo personalmente me decanto por MinGW ya que si luego queremos trabajar en linux con C/C++ es lo mas compatible que podemos encontrar. Obviamente las aplicaciones de escritorio necesitan el API de Windows o de X11 para funcionar, y no se parecen en nada, pero por lo demás el código suele ser 100% compatible.</p><br />
                <h2>Descarga e instalación de MinGW</h2>
                <p>Lo primero que tenemos que hacer es buscar la última versión disponible de MinGW en el siguiente enlace : <a href="http://sourceforge.net/projects/mingw/files/" target="_new">MinGW Files</a>.</p>
                <p>Nos aparecerá un directorio con varias entradas, debemos pinchar en "Automated MinGW Instaler", y luego nos aparecerán dos entradas más "mingw-get", y "mingw-get-inst". La primera es para un instalador desde la consola de comandos, y la segunda es para un instalador con interfaz grafico para windows. Yo recomendaría descargar la última versión de "mingw-get-inst".</p>
                <p>Una vez dentro de esa carpeta nos aparecerán varias carpetas ordenadas por fecha. Lo mejor será elegir la primera, que será la última versión. Cuando entréis dentro de la carpeta aparecerán varios archivos, debéis pinchar en el exe que es el instalador.</p>
                <img src="/Graficos/DescargarMinGW.png" alt="Descargar MinGW" />
                <p>Cuando tengamos el archivo descargado podemos ejecutarlo para empezar la instalación, donde nos aparecerá la siguiente pantalla de bienvenida en la que podemos pulsar en el botón 'Next'.</p>
                <img src="/Graficos/InstalarMinGW1.png" alt="Instalar MinGW" />
                <p>Lo siguiente que nos aparecerá será una ventana que nos pregunta que repositorios debe utilizar el instalador. Por seguridad yo elegiría los 'pre-packaged repository catalogues' ya que la última versión siempre puede tener algún fallo.</p>
                <img src="/Graficos/InstalarMinGW2.png" alt="Instalar MinGW" />
                <p>Ahora nos aparecerá una ventana que nos muestra la licencia y que debemos aceptar para proceder con la instalación, así que seleccionaremos la opción 'I accept' y luego pulsaremos en 'Next'.</p>
                <img src="/Graficos/InstalarMinGW3.png" alt="Instalar MinGW" />
                <p>La siguiente ventana nos preguntara donde queremos instalar MinGW, y aunque la carpeta nos la pone en C:\MinGW para evitar problemas yo no la tocaría, así que pulsaremos en 'Next'.</p>
                <img src="/Graficos/InstalarMinGW4.png" alt="Instalar MinGW" />
                <p>Luego nos pedirá donde queremos crear los accesos directos de MinGW, la opción por defecto es válida así que pulsaremos en 'Next'.</p>
                <img src="/Graficos/InstalarMinGW5.png" alt="Instalar MinGW" />
                <p>Ahora nos aparecerá una ventana que nos pregunta que componentes queremos instalar, debemos marcar "C++ Compiler", "MSYS Basic System", y "MinGW Developer ToolKit". Una vez marcados pulsaremos en el botón 'Next'.</p>
                <img src="/Graficos/InstalarMinGW6.png" alt="Instalar MinGW" />
                <p>Por último nos aparecerá una ventana para confirmar los datos que se han seleccionado donde podemos pulsar en el botón 'Install'.</p>
                <img src="/Graficos/InstalarMinGW7.png" alt="Instalar MinGW" />
                <p>La instalación encenderá una consola de comandos donde veremos cómo se van descargando los paquetes previamente seleccionados. Este proceso puede durar varios minutos así que es un momento ideal para hacer una pausa/cigarrillo/cafe.</p>
                <img src="/Graficos/InstalarMinGW8.png" alt="Instalar MinGW" /><br /><br />
                <h2>Configuración de NetBeans</h2>
                <p>No sé muy bien porque pero NetBeans tiene algún tipo de problemas con el Make del MinGW, y nos pide utilizar el Make del MSYS, cosa que es un problema ya que el MSYS se encuentra en un directorio que no es el mismo que el directorio donde tenemos el compilador de C/C++ de MinGW. Para solucionar esto vamos a hacer una mezcla de estos directorios en un tercer directorio (he leído en más de una ocasión que esto no se debe hacer, pero por mi parte no he encontrado otra forma viable).</p>
                <p>El primer paso antes de nada será copiar las dlls de MinGW al directorio de windows, ya que si no lo hacemos no se ejecutara ninguna aplicación de las que compilemos, y el NetBeans no nos dirá nada en claro. Para ello nos vamos al directorio de "<b>MinGW\Bin</b>", seleccionamos todas las dlls y las copiamos en "<b>Windows\System32</b>".</p>
                <img src="/Graficos/ConfigurarNetBeans1.png" alt="Configurar NetBeans" />
                <p>Una vez copiadas las dlls, creamos una carpeta dentro de MinGW con el nombre de NetBeans y le copiamos dentro TODO el contenido de la carpeta "<b>MinGW\Bin</b>". Luego nos vamos a la carpeta "<b>MinGW\MSYS\1.0\Bin</b>", y copiamos todo el contenido a la carpeta NetBeans que hemos creado anteriormente.</p>
                <p>Cuando tengamos la carpeta NetBeans dentro de MinGW con todo el contenido citado anteriormente, podemos encender el NetBeans.</p>
                <p>Creamos un nuevo proyecto del tipo C/C++ Application.</p>
                <img src="/Graficos/ConfigurarNetBeans2.png" alt="Configurar NetBeans" />
                <p>Al crear el proyecto NetBeans nos comunicara que no encuentra un compilador C/C++ y nos aparecerá la siguiente ventana.</p>
                <img src="/Graficos/ConfigurarNetBeans3.png" alt="Configurar NetBeans" />
                <p>Le damos al botón 'Browse' y seleccionamos el directorio "<b>MinGW\NetBeans</b>" que creamos anteriormente, luego en el cuadro Tool Collection Familly seleccionamos <b>MinGW</b>, y nos quedara el cuadro de opciones de la siguiente forma :</p>
                <img src="/Graficos/ConfigurarNetBeans4.png" alt="Configurar NetBeans" />
                <p>Por alguna razón si el make está en el mismo directorio que el compilador NetBeans lo ignora y aunque en las opciones nos muestre la ruta del Make dentro de la carpeta NetBeans, si le damos al botón "Versions.." nos dice "Make Tool: no versión aviable". Por lo que vamos a cambiar el directorio del make, y le vamos a poner la siguiente ruta : "<b>C:\MinGW\MSYS\1.0\Bin\Make.exe</b>".</p>
                <img src="/Graficos/ConfigurarNetBeans5.png" alt="Configurar NetBeans" />
                <p>Luego en el código fuente creamos una aplicación sencilla, por ejemplo un "Hola mundo" y probamos a compilarla.</p>
                <img src="/Graficos/ConfigurarNetBeans6.png" alt="Configurar NetBeans" />
                <p>Y si hemos seguido todos los pasos correctamente debería salir en la ventana de salida el texto "Hola Mundo!!".</p>
                <div class='nota'>Este tutorial se ha hecho con una instalación limpia de WindowsXP, por lo que no he podido probar el proceso completo en Windows 7, de todas formas ya hace tiempo que tengo NetBeans en Windows 7 instalado y funcionando por lo que no creo que sea más complicado, como mucho necesitaremos privilegios de administrador para realizar las copias de archivos.</div>
                <p>Y con esto terminamos por hoy!, espero que este tutorial os sirva de ayuda.</p>            

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>