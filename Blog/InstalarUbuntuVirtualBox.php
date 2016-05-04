<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Instalar Ubuntu bajo VirtualBox en Windows");*/
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Ubuntu bajo VirtualBox">
        <meta name="keywords" content="Ubuntu virtualbox">';

        $Base->InicioPlantilla(basename(__FILE__), "Instalar Ubuntu bajo VirtualBox en Windows", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Instalar Ubuntu bajo VirtualBox en Windows");
        
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_VirtualBox.png" alt="Instalar Ubuntu en VirtualBox" />
                <p>VirtualBox es una aplicación que nos permite instalar sistemas operativos con el hardware emulado dentro de nuestro sistema operativo. Dicho así suena un poco confuso, por lo que vamos a imaginarnos que queremos instalar una versión de linux en nuestra máquina, pero queremos ver este linux dentro de una ventana de windows. Pues esto es lo que hace VirtualBox.</p>
                <p>También hay que remarcar que lo podemos hacer al revés, es decir, desde nuestro linux nativo instalar windows para que se muestre en una ventana de linux.</p>
                <p>De todas formas la intención de este tutorial es servir como base para luego poder hacer algunos tutoriales programando con el protocolo X11 server (dicho de forma burda programar aplicaciones con entorno gráfico para linux)</p>
                <!-- FIN_INTRODUCCION -->
                <ul style="clear:both">
                <li>1 <a href='#InstalarVBox'>Instalación de VirtualBox</a></li>
                <li>2 <a href='#ConfigurarVbox'>Creación y configuración de una máquina virtual</a></li>
                <li>3 <a href='#InstalarUbuntu'>Instalación de Ubuntu</a></li>
                <li>4 <a href='#ConfigurarUbuntu'>Configuración de Ubuntu</a></li>
                </ul>
                <p>El primer paso será descargar las últimas versiones de Virtual Box y de Ubuntu :</p>
                <p>Para empezar iremos descargando la ultima ISO de Ubuntu ya que son alrededor de 700mb y es lo que más tardara : <a href="http://www.ubuntu.com/download/ubuntu/download">Descargar Ubuntu</a>.</p>
                <div class='nota'>Podéis elegir la versión que mas os guste siempre que sea de 32 bits, yo personalmente elegiría la última versión 11.04 en 32 bits. Con mi portátil por ejemplo me he encontrado que al hacer la prueba con el Ubuntu de 64bits no me reconocía capacidades de 64bits, mientras que en mi ordenador de sobremesa la cosa ha funcionado perfectamente con la de 64bits.</div>
                <img src='/Graficos/DownloadUbuntu.png' alt='Descargar Ubuntu' />
                <p>En segundo lugar descargaremos el instalador de VirtualBox para windows desde este enlace : <a href="https://www.virtualbox.org/wiki/Downloads">Descargar VirtualBox</a>.</p>
                <a name="InstalarVBox" id="InstalarVBox"></a><img src='/Graficos/DownloadVirtualBox.png' alt='Descargar VirtualBox' /><br /><br />
                <h2>1 Instalación de VirtualBox</h2>
                <p>Una vez tenemos el VirtualBox descargado procederemos a su instalación : </p>
                <p>La instalación nos pedirá que seleccionemos los componentes a instalar y su ubicación, que podemos dejar tal cual vienen por defecto.</p>
                <img src='/Graficos/VirtualBoxInstall1.png' alt='Instalar VirtualBox' />
                <p>Una vez le demos a 'Next' aparecerá la siguiente ventana que nos advierte que se instalaran los drivers para que los sistemas operativos de virtualbox puedan acceder a la red.</p>
                <div class='nota'>Esto desactivara la red temporalmente, <b>si aun estáis descargando Ubuntu NO SIGAIS hasta que termine de descargarse</b>, o de lo contrario se os cortara la descarga.</div>
                <img src='/Graficos/VirtualBoxInstall2.png' alt='Instalar VirtualBox' />
                <p>Una vez confirmada la instalación de las 'Network Interfaces' el programa de instalación comenzara a instalarse, es probable que en algún punto de la instalación os pida privilegios de administración, si es así se los dais.</p>
                <p>A media instalación os aparecerán varias ventanas pidiendo confirmación para instalar drivers de USB y redes como la que se muestra abajo. Debéis instalarlas todas, ya que de esta forma virtualbox será capaz de compartir la red con nuestro windows, y así nuestro linux también podrá conectarse a internet.</p>
                <a name="ConfigurarVbox" id="ConfigurarVbox"></a><img src='/Graficos/VirtualBoxInstall3.png' alt='Instalar VirtualBox' /><br /><br />
                <h2>2 Creación y configuración de una máquina virtual</h2>
                <p>Una vez instalado el VirtualBox ya podemos ejecutarlo, y lo primero que veremos será una pantalla como esta :</p>
                <img src='/Graficos/VirtualBox1.png' alt='Configurar VirtualBox' />
                <p>Cuando tengáis la ISO del Ubuntu completamente descargada, podéis empezar a crear una nueva máquina virtual presionando el botón 'Nueva' que hay en la esquina superior izquierda que se ve en la imagen anterior.</p>
                <p>Esto nos llevara a un asistente que nos preguntara varios datos sobre el sistema operativo y la máquina virtual.</p>
                <p>En primer lugar debemos indicar el nombre de la máquina virtual (por ejemplo 'Ubuntu virtual'), el tipo de sistema operativo que vamos a instalar (en este caso 'Linux'), y luego indicaremos su versión (para este caso 'Ubuntu'). Una vez configurados estos parámetros podemos presionar el botón 'Next'.</p>
                <div class='nota'>Si habéis descargado una versión de Ubuntu de 64 bits, en versión debéis especificar 'Ubuntu (64 bit)', en caso de haber descargado la versión de 32 bits bastara con poner versión 'Ubuntu'.</div>
                <img src='/Graficos/VirtualBox2.png' alt='Configurar VirtualBox' />
                <p>La siguiente pantalla nos preguntara cuanta memoria ram queremos que tenga nuestro sistema virtual. Dependiendo de la memoria y windows que tengáis yo os recomendaría de un 25% a un 50% de vuestra memoria. Por ejemplo Windows 7 requiere ya 1gb de memoria sin hacer nada, así que si tenéis windows 7 y 2gb de memoria total yo le asignaría 512mb a Ubuntu. Si tenéis 4gb de ram y windows 7 (como es mi caso) yo le asignaría 1gb a la máquina virtual.</p>
                <img src='/Graficos/VirtualBox3.png' alt='Configurar VirtualBox' />
                <p>Ahora nos preguntara los datos para crear o usar un disco duro virtual. Esta sección permite habilitar discos duros virtuales que tuviéramos anteriormente, por lo que si un día borráis el VirtualBox, pero no borráis sus discos, y luego queréis instalar otra vez VirtualBox para utilizar esos discos, podréis hacerlo sin problemas.</p>
                <p>De todas formas en este caso no tenéis ningún disco virtual creado por lo que debéis indicar a VirtualBox que cree un disco.</p>
                <img src='/Graficos/VirtualBox4.png' alt='Configurar VirtualBox' />
                <p>Al seleccionar que quereis crear un disco duro virtual, os aparecerá un nuevo asistente para crear dicho disco virtual. En la primera pantalla dejad seleccionado 'VDI (VirtualBox Disk Image)'.</p>
                <p>Luego os preguntara los detalles de almacenamiento donde podréis encontrar 2 opciones 'Reservado dinámicamente' y 'Tamaño fijo'. La mejor opción es seleccionar 'Reservado dinámicamente' ya que de esta forma si el disco solo tiene 2gb ocupados, solo nos ocupara 2gb en nuestro disco duro, en cambio si seleccionáis tamaño fijo, siempre ocupara el tamaño que seleccionemos inicialmente. Por contra creo que el sistema funcionara más fluido si el disco es de tamaño fijo así que vosotros mismos.</p>
                <p>Por último os pedirá cuanto tamaño deseáis asignarle al disco virtual, OJO ya que esto no podréis volver a modificarlo una vez creado el disco. Yo personalmente para linux no he necesitado nunca más de 8gb así que me parece bien dejarlo así.</p>
                <p>Una vez configurada la máquina virtual volvereis a la pantalla inicial de virtual box que tendrá el siguiente aspecto :</p>
                <img src='/Graficos/VirtualBox5.png' alt='Configurar VirtualBox' />
                <p>En teoría ya podríais empezar a instalar Ubuntu, pero si queréis ver el sistema operativo bien tal y como lo veríais instalado nativamente vais a tener que retocar los parámetros de la tarjeta de video virtual.</p>
                <p>Para ello presionad el botón 'configurar' que encontrareis ubicado en la parte superior izquierda, y os aparecerá la siguiente pantalla :</p>
                <img src='/Graficos/VirtualBox6.png' alt='Configurar VirtualBox' />
                <p>Por defecto VirtualBox asigna 12mb de memoria a la tarjeta de video virtual, pero para ir bien creo que se necesita un mínimo de 64mb por no decir 128mb, la verdad es que no sé exactamente el consumo de Ubuntu y el Unity, por lo que si tenéis una tarjeta de video con 256mb o mas yo recomendaría asignar 128mb, en caso de tener únicamente 128mb de video, asignadle 64.</p>
                <p>También debéis activar la aceleración 3D para que el entorno gráfico de Ubuntu funcione más fluido. OJO solo debéis activar la aceleración 3D, la opción aceleración de video 2D no funciona en sistemas linux.</p>
                <a name="InstalarUbuntu" id="InstalarUbuntu"></a><p>Y ahora si, ya estais listos para instalar Ubuntu. Para ello debéis ejecutar la máquina virtual que acabamos de crear dándole dobleclick en 'Ubuntu virtual'.</p><br />
                <h2>3 Instalación de Ubuntu</h2>
                <p>Una vez ejecutada la máquina virtual, os aparecerá un nuevo asistente de la primera ejecución, donde básicamente debéis especificar la ubicación de la ISO del Ubuntu que acabáis de descargar.</p>
                <div class='nota'>Puede ser que en algún momento os desaparezca el ratón, o que el ratón no salga de la ventana de linux, para hacer que el ratón vuelva a la normalidad debéis presionar la tecla <b>'Control derecha'</b>. Esto lo hace el VirtualBox durante la instalación, así que no os preocupéis es normal... más adelante una vez instalado y configurado el Ubuntu ya no volverá a pasar.</div>
                <img src='/Graficos/VirtualBox7.png' alt='Configurar VirtualBox' />
                <p>Lo primero que veréis será una pantalla de bienvenida donde podréis seleccionar el idioma, que os dejara elegir entre 'Probar Ubuntu' y 'Instalar Ubuntu'. La opción 'Probar Ubuntu' se incluye para que la gente pueda probar el sistema operativo sin necesidad de instalar nada, pero para este caso no os sirve de nada, así que debéis pulsar en 'Instalar Ubuntu'.</p>
                <img src='/Graficos/UbuntuInstall1.png' alt='Instalar Ubuntu' />
                <p>La siguiente pantalla que veréis hace una comprobación de los requisitos para instalar Ubuntu, y os da las opciones de 'Descargar actualizaciones mientras se instala' y 'Instalar este software de terceros'. Es muy recomendable que <b>no marquéis ninguna de estas opciones</b> para evitar posibles errores que pueda tener el VirtualBox con la red, ya que podría no estar bien configurada.</p>
                <img src='/Graficos/UbuntuInstall2.png' alt='Instalar Ubuntu' />
                <p>Ahora veréis una pantalla donde se os da dos opciones 'Borrar disco e instalar Ubuntu' o 'Algo más'. Yo personalmente seleccionaría 'Borrar disco e instalar Ubuntu' ya que no necesitáis crear un entramado de particiones. Normalmente en sistemas nativos se suelen crear varias particiones, una para el sistema operativo, una para los datos y una de swap, pero como no vamos a tener datos importantes dentro, no hace falta liar mas la cosa. Por lo que yo recomendaría que dejéis que la instalación cree las particiones que crea convenientes, que casi seguro serán dos (la swap y la del sistema).</p>
                <img src='/Graficos/UbuntuInstall3.png' alt='Instalar Ubuntu' />
                <p>En la siguiente pantalla os pedirá confirmación para borrar el disco y empezar la instalación, así que podéis confirmar el borrado de disco y la instalación. Recordad que lo que se borrara es el disco duro virtual que creamos anteriormente, y no nuestro disco.</p>
                <img src='/Graficos/UbuntuInstall4.png' alt='Instalar Ubuntu' />
                <p>Durante la instalación os pedirá la ubicación donde estáis para poder seleccionar la zona horaria.</p>
                <img src='/Graficos/UbuntuInstall5.png' alt='Instalar Ubuntu' />
                <p>También os preguntara por la distribución de teclado que queréis utilizar.</p>
                <img src='/Graficos/UbuntuInstall6.png' alt='Instalar Ubuntu' />
                <p>Y también os pedirá los datos para vuestra cuenta de administrador.</p>
                <img src='/Graficos/UbuntuInstall7.png' alt='Instalar Ubuntu' />
                <p>Una vez introducidos estos datos, empezara la post-instalación y descarga de Ubuntu, donde podéis ir a hacer un café o lo que os apetezca, ya que tardara un tiempo en completarse.</p>
                <a name="ConfigurarUbuntu" id="ConfigurarUbuntu"></a><p>Cuando la instalación termine, habrá que reiniciar el sistema y aquí concluirá la parte de la instalación de Ubuntu.</p><br />
                <h2>4 Configuración de Ubuntu</h2>
                <p>Ahora que ya tenéis el Ubuntu instalado os faltara instalar los drivers de la VirtualBox en el, para que funcione perfectamente.</p>
                <p>La primera vez que introduzcáis el login y el password os aparecerá un mensaje indicando que Unity no puede ejecutarse debido a que no se cumplen los requisitos de hardware.</p>
                
                <p>Antes de instalar los drivers de VirtualBox yo recomendaría que actualicéis el sistema, para ello si esperáis un poco, os aparecerá automáticamente una ventana llamada 'Gestor de Actualizaciones', y desde ella bastara con presionar el botón 'Instalar Actualizaciones'.</p>
                <div class='nota'>Si os saltáis la actualización del sistema, y luego en algún momento lo actualizáis por lo que sea, vais a tener que instalar las 'Guest additions' del VirtualBox de nuevo.</div>
                <img src='/Graficos/Ubuntu1.png' alt='Configurar Ubuntu' />
                <p>Este proceso tardara un buen rato así que podéis ir a por otro café...</p>
                <p>Una vez terminada la actualización Ubuntu os pedirá que reiniciéis la máquina, cosa que debéis hacer.</p>
                <p>Una vez re-iniciada la máquina e introducido el login y el password ya podéis empezar a instalar las 'Guest Additions' del VirtualBox. Para ello debéis dirigiros al menú 'Dispositivos' y seleccionar la opción 'Instalar Guest additions'</p>
                <img src='/Graficos/Ubuntu2.png' alt='Configurar Ubuntu' />
                <p>Cuando pulséis en la opción 'Instalar Guest Additions' aparecerá en el escritorio un icono que hace referencia a una unidad de cd virtual, entrad dentro y copiad el archivo <b>'VBoxLinuxAdditions.run'</b> a vuestro escritorio (podéis  copiar el archivo arrastrándolo, o usando Control+C y Control+V).</p>
                <p>Ahora abrid un terminal, para ello id al menú 'Aplicaciones' -> 'Accesorios' -> 'Terminal'</p>
                <img src='/Graficos/Ubuntu3.png' alt='Configurar Ubuntu' />
                <p>Una vez abierto el terminal escribid lo siguiente : <b>'sudo su'</b>.
                <p>Este comando os pedirá que introduzcais vuestra contraseña de usuario/administrador.</p>
                <div class='nota'>El comando <b>'sudo'</b> permite ejecutar programas con los privilegios de seguridad de otro usuario, en este caso lo redirigimos a '<b>su</b>' que es el <b>S</b>uper <b>U</b>suario.</div>
                <p>Seguidamente utilizareis el comando <b>'cd Escritorio'</b> para entrar al directorio donde se ubican los archivos de nuestro escritorio.</p>
                <p>Luego debéis utilizar el comando <b>'chmod 777 ./VBoxAdditions.run'</b> para establecer los permisos para este archivo, en concreto estáis haciendo que el archivo se pueda ejecutar (entre otras cosas).</p>
                <p>Y por ultimo introduciréis el siguiente comando : <b>'./VBoxAdditions.run'</b></p>
                <p>Resumiendo :</p>
                <?php $Base->PintarCodigo->PintarTexto("ID1", "Comandos", "sudo su
cd Escritorio
chmod 777 ./VBoxAdditions.run
./VBoxAdditions.run"); ?>
                <br />
                <img src='/Graficos/Ubuntu4.png' alt='Configurar Ubuntu' />
                <p>Si todo ha ido correctamente debería apareceros lo siguiente en la terminal :</p>
                <img src='/Graficos/Ubuntu5.png' alt='Configurar Ubuntu' />
                <p>Ahora debéis reiniciar la máquina de nuevo. Al introducir el login y el password, el escritorio tendrá una nueva barra lateral a la izquierda de color negro como en la siguiente foto :</p>
                <img src='/Graficos/Ubuntu6.png' alt='Configurar Ubuntu' />
                <p>Es probable que os pase como a mí, y la barra superior se vea de color gris claro, si esto sucede es por culpa de un bug en el GNOME, y para arreglarlo debéis hacer lo siguiente :</p>
                <p>Abrid un terminal, para ello haced click en la esquina superior izquierda, e introducid el texto 'terminal'. Abajo os mostrara el icono del terminal, haced click en el.</p>
                <img src='/Graficos/Ubuntu7.png' alt='Configurar Ubuntu' />
                <p>Para elevar los privilegios a administrador escribid :</p>
                <?php $Base->PintarCodigo->PintarTexto("ID2", "Comandos", "sudo su"); ?>
                <p>Para editar la configuración del demonio de GNOME Escribid : </p>
                <?php $Base->PintarCodigo->PintarTexto("ID3", "Comandos", "gedit /etc/xdg/autostart/gnome-settings-daemon.desktop"); ?><br />
                <img src='/Graficos/Ubuntu8.png' alt='Configurar Ubuntu' />
                <p>Re-emplazad la línea que esta seleccionada en azul por :</p>
                <?php $Base->PintarCodigo->PintarTexto("ID4", "Re-emplazo", 'Exec= bash -c "sleep 20; /usr/lib/gnome-settings-daemon/gnome-settings-daemon"'); ?>
                <p>Re-iniciad el sistema, y una vez iniciado el escritorio, en un tiempo máximo de de 30 segundos la barra superior debería ponerse de un color negro como podéis ver en la foto de abajo.</p>
                <img src='/Graficos/Ubuntu9.png' alt='Configurar Ubuntu' />
                <p>Por último vais a configurar un directorio real de vuestro disco duro de forma que podáis acceder a él desde Ubuntu. Para ello lo primero que debéis hacer es ir al menú 'Máquina' -> 'Configuración' y seleccionar la pestaña 'Carpetas compartidas'.</p>
                <img src='/Graficos/Ubuntu10.png' alt='Configurar Ubuntu' />
                <p>Una vez dentro le dais al botón que tiene una carpeta azul con el símbolo '+' en verde, allí seleccionad el directorio que quereis acceder en Ubuntu, y marcad la casilla 'hacer permanente'.</p>
                <img src='/Graficos/Ubuntu11.png' alt='Configurar Ubuntu' />
                <p>Luego abrid una terminal, escribid <b>'cd Escritorio'</b> para entrar al directorio de vuestro Escritorio. <b>'mkdir DiscoDuroD'</b> para crear una carpeta, <b>'sudo su'</b> para elevar los privilegios de la terminal, y <b>'gedit /etc/fstab'</b> para editar el archivo fstab que es el encargado de cargar las particiones.</p>
                <p>Resumiendo :</p>
                <?php $Base->PintarCodigo->PintarTexto("ID4", "Comandos", "cd Escritorio
mkdir DiscoDuroD
sudo su
gedit /etc/fstab"); ?>
                <p>Una vez dentro debéis añadir la siguiente línea al final :</p>
                <?php $Base->PintarCodigo->PintarTexto("ID4", "Comandos", "D_DRIVE  /home/devildrey33/Escritorio/DiscoDuroD vboxsf defaults 0 0"); ?>
                <div class='nota'>/home/devildrey33/Escritorio/DiscoDuroD es la ruta donde yo he creado la carpeta en mi sistema de archivos, vosotros debéis escribir en vez de 'devildrey33' vuestro nombre de usuario.</div>
                <p>Una vez realizados los cambios, guardad el archivo y reiniciad la máquina.</p>
                <img src='/Graficos/Ubuntu12.png' alt='Configurar Ubuntu' />
                <p>Y esto es todo!, espero que esta guía/tutorial de instalación os sea de ayuda, tanto si vais a seguir los futuros tutoriales del protocolo X11 como si queríais instalar Ubuntu por cualquier otra razón.</p>            



<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>