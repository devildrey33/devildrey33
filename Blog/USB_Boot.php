<?php 
/*	include("devildrey33.php");
	
	$HEAD = "
	<meta name='description' content='USB booteable con varios sistemas operativos'>
	<meta name='keywords' content='USB Windows, USB Ubuntu, USB Linux, Pendrive Windows, Pendrive Ubuntu, Pendrive Linux, USB Windows Linux, USB Multiboot, Grub4Dos'>
	<style>
		.TablaPen {
			border:1px solid #CCC; 
			padding:0px; 
			text-align:center;
			margin:3px; 
			background:#EEE;
		}
		.TablaPen td {	width:50px; }
	</style>

	";
	
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("USB booteable con varios sistemas operativos (ACTUALIZADO)", $HEAD);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='USB booteable con varios sistemas operativos'>
	<meta name='keywords' content='USB Windows, USB Ubuntu, USB Linux, Pendrive Windows, Pendrive Ubuntu, Pendrive Linux, USB Windows Linux, USB Multiboot, Grub4Dos'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "USB booteable con varios sistemas operativos (ACTUALIZADO)", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "USB booteable con varios sistemas operativos (ACTUALIZADO)");

?>	

<style>
    .TablaPen {
        border:1px solid #CCC; 
        padding:0px; 
        text-align:center;
        margin:3px; 
        background:#EEE;
    }
    .TablaPen td {	width:50px; }
</style>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_USBBoot.png" alt="USB booteable con varios sistemas operativos" />
                <p>Hace ya unos días estuve formateando varias maquinas e instalando varios sistemas operativos en ellas a través de un pen drive, y al final se me metió en la cabeza hacer un único USB que tuviera para instalar Windows XP, Windows 7 x86 y x64, y Ubuntu desktop en sus versiones de 32 y 64 bits.</p>
                <p>Después de rebuscar mucho por internet vi que con el gestor de arranque grub4dos podía conseguir algo así, pero no fue nada fácil. Hacer un pendrive con un solo sistema operativo instalable es relativamente sencillo, pero cuando se quiere meter más de uno la cosa se complica bastante.</p>
                <div class='nota'>He actualizado este tutorial para que se pueda incluir : Windows Vista, Windows 8, Ubuntu 13, y el Hirens Boot.</div>
                <!-- FIN_INTRODUCCION -->
                <p>Para este tutorial necesitaremos un pendrive con capacidad suficiente para albergar todos los sistemas operativos y utilidades que queremos integrar, en el caso de querer integrar todos los sistemas mencionados debería ser suficiente con un pendrive de 32gb de capacidad, aunque depende de las isos que tengáis.</p>
<!--                <p>Este tutorial se centrara en un pendrive de 16GB (si quitáis un ubuntu os cabe justito en uno de 8gb) en el cual insertaremos : windows xp de 32 bits, windows 7 de 32 bits, windows 7 de 64 bits, Ubuntu desktop 12.04 de 32 bits, Ubuntu desktop 12.04 de 64 bits, y también añadiremos una imagen de la herramienta de recuperación del antivirus Kaspersky 2013.</p>-->
                <p>He estado probando muchos programas para hacer pendrives booteables pero no he encontrado ninguno que me permita instalar todo lo que he mencionado anteriormente, pero sí que hay uno que prácticamente nos hace todo el trabajo. Este es <a href="https://mega.co.nz/#!KF5wFDoJ!fHV1piPUekEqeYr4kcIAwF0pso0jTpj0XHASkrsHGF0" target="new">WinSetupFromUSB (versión del tutorial)</a> pero por desgracia no he encontrado ninguna página oficial por lo que he subido un archivo zip en mega.co.nz con todo lo necesario para hacer funcionar el programa.</p>
				<p>Antes de nada necesitaremos tener una iso de cada sistema operativo que queramos agregar (este tutorial incluye WinXP, WinVista (32 y 64 bits), Win7 (32 y 64 bits), Win8 (32 y 64 bits) Ubuntu 12.04.2 (32 y 64 bits) y Ubuntu 13.04 (32 y 64 bits), para windows xp necesitamos tener acceso a la carpeta raíz del cd de instalación (ya sea montando su iso en una unidad virtual, copiando el cd en el disco duro o como sea).</p>
                <div class='nota'>No es posible añadir mas de una instalación de Windows XP con este tutorial.</div>
                
                <a class='Boton Centrado' href="https://mega.co.nz/#!KF5wFDoJ!fHV1piPUekEqeYr4kcIAwF0pso0jTpj0XHASkrsHGF0" target="_blank">WinSetupFromUSB (versión del tutorial)</a>
                
                <p>Una vez descargado y descomprimido el programa necesitamos encenderlo con privilegios de administración y veremos la siguiente ventana :</p>
                <div class='nota'>
                	Por lo que me ha informado <b>Pep</b> hay una nueva versión del programa, pero no he visto que traiga la iso con drivers extras para el windows xp, así que para evitar problemas, prefiero que utilicéis la versión que he colgado en <a href="https://mega.co.nz/#!KF5wFDoJ!fHV1piPUekEqeYr4kcIAwF0pso0jTpj0XHASkrsHGF0" target="new">mega.co.nz</a>, que es la que hay en el enlace de arriba. <br />
                    En vista de que mucha gente descarga este archivo con gestores de descarga e inicia hasta 20 descargas paralelas, no me queda otra solución que dejarlo en un servidor externo, por lo que si es eliminado de dicho servidor, me vais a tener que avisar para que vuelva a subirlo.<br />
                    El caso es que con la versión del tutorial lo tengo todo probado al 100%, y utilizar la nueva versión requiere ponerse a instalar windows para probar que todo funcione correctamente. <br />
                    De todas formas os dejo el enlace de la nueva versión que está alojado en softpedia, por si os queréis arriesgar... <a href="http://www.softpedia.com/get/PORTABLE-SOFTWARE/System/System-Enhancements/WinSetupFromUSB.shtml" target="_blank">WinSetupFromUSB (nueva versión)</a>.
				</div>
                <br />

                <img src='/Graficos/WinSetupFromUSB_LR.png' alt='WinSetupFromUSB' /><br />
                <h2>Formateando y preinstalando</h2>
                <ul>
                    <li>Lo primero que debemos hacer es marcar la casilla "<b>Autoformat it with FBinst</b>" y luego seleccionaremos como tipo de partición : <b>NTFS</b>. (Si teneis problemas para arrancar algún linux, probad con FAT32)</li>
                    <li>En segundo lugar marcaremos la casilla "<b>Windows 2000/XP/2003 Setup</b>" y buscaremos el directorio raíz del cd de instalación de Windows XP. (En mi caso me he hecho una copia del cd en la carpeta "WinXP_SP3" y luego le he añadido unos drivers con nLite, este paso se puede omitir si no deseáis incluir windows xp)</li>
                    <li>Una vez seguidos estos pasos presionaremos el botón "<b>GO</b>" y el programa formateara y añadirá Windows XP al pendrive.</li>
                </ul>
                <div class='nota'>No os he hecho añadir nada más porque WinSetupFromUSB no soporta por ejemplo dos Ubuntus o dos Windows 7, por lo que tenemos que hacer esto a parte.</div>
                <br />
                <h2>Añadiendo los demás sistemas operativos</h2>
                <p>Antes de nada deberíais saber que el Grub es el gestor de arranque que se usa actualmente en la mayoría de distribuciones linux, que además tiene una versión compatible con dos/windows (Grub4dos). Este gestor es totalmente configurable aunque es algo complicado de configurar.</p>
                <p>Para no liar mucho la cosa editando el menú del grub os he hecho un zip con varios archivos que <b>deberéis copiar dentro de la raíz del pendrive</b> que podéis descargar desde este enlace : </p>
                
                <a class='Boton Centrado' href="/Descargas/Tutorial_USBBoot.zip" target="_blank">Menu + Drivers</a>
                
                
                <p>Una vez copiados los archivos del zip dentro del pendrive os debería quedar la siguiente estructura :</p>
                <img src="/Graficos/EstructuraUSB.png" alt='Estructura pendrive' /><br />
				<p>He montado el menu.lst de forma que si no encuentra alguno de los sistemas operativos, no lo mostrará en el menú. Este menu.lst soporta los siguientes sistemas operativos y utilidades :</p>
				<h2>Sistemas operativos en formato ISO</h2>
                <table class="Tabla">
                    <tr>
                    	<td width="300px">Windows Vista x86 (32 bits)</td>
                    	<td><b>/Isos/WindowsVista/WinVista_x86.iso</b></td>
                    </tr>
                    <tr>
                    	<td>Windows Vista x64 (64 bits)</td>
                    	<td><b>/Isos/WindowsVista/WinVista_x64.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://msft.digitalrivercontent.net/win/X17-58866.iso" target="_blank" title="Enlace oficial de Windows 7 x86 Profesional SP1 en castellano">Windows 7 x86 (32 bits)</a></td>
                    	<td><b>/Isos/Windows7/Win7_x86.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://msft.digitalrivercontent.net/win/X17-58868.iso" target="_blank" title="Enlace oficial de Windows 7 x64 Profesional SP1 en castellano">Windows 7 x64 (64 bits)</a></td>
                    	<td><b>/Isos/Windows7/Win7_x64.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://technet.microsoft.com/es-ar/windows/windows-8.aspx" target="_blank" title="Enlace oficial de Windows 8 x86 en castellano">Windows 8 x86 (32 bits)</a> </td>
                    	<td><b>/Isos/Windows8/Win8_x86.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://technet.microsoft.com/es-ar/windows/windows-8.aspx" target="_blank" title="Enlace oficial de Windows 8 x64 en castellano">Windows 8 x64 (64 bits)</a></td>
                    	<td><b>/Isos/Windows8/Win8_x64.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://releases.ubuntu.com/12.04/ubuntu-12.04.2-desktop-i386.iso" target="_blank" title='Enlace oficial de Ubuntu desktop 12.04.2 (32 bits)'>Ubuntu desktop 12.04.2 (32 bits)</a></td>
                    	<td><b>/Isos/Ubuntu/ubuntu-12.04.2-desktop-i386.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://releases.ubuntu.com/12.04/ubuntu-12.04.2-desktop-amd64.iso" target="_blank" title='Enlace oficial de Ubuntu desktop 12.04.2 (32 bits)'>Ubuntu desktop 12.04.2 (64 bits)<a></td>
                    	<td><b>/Isos/Ubuntu/ubuntu-12.04.2-desktop-amd64.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://releases.ubuntu.com/13.04/ubuntu-13.04-desktop-i386.iso" target="_blank" title='Enlace oficial de Ubuntu desktop 13.04 (32 bits)'>Ubuntu desktop 13.04 (32 bits)</a> </td>
                    	<td><b>/Isos/Ubuntu/ubuntu-13.04-desktop-i386.iso</b></td>
                    </tr>
                    <tr>
                    	<td><a href="http://releases.ubuntu.com/13.04/ubuntu-13.04-desktop-amd64.iso" target="_blank" title='Enlace oficial de Ubuntu desktop 13.04 (64 bits)'> Ubuntu desktop 13.04 (64 bits)</a> </td>
                    	<td><b>/Isos/Ubuntu/ubuntu-13.04-desktop-amd64.iso</b></td>
                    </tr>
                </table><br />

				<h2>Utilidades</h2>
                <table class="Tabla">
                    <tr>
                    	<td width="300px"><a href="http://www.kaspersky.com/sp/anti-virus-trial" target="_blank" title='Enlace oficial de Kaspersky 2013 trial necesario para crear el disco de rescate'>Disco de rescate de KasperSky 2013</a> </td>
                    	<td><b>/Isos/Utilidades/KasperSky2013.iso</b></td>
                    </tr>
                    <tr>
                    	<td width="300px"><a href="http://hbcd.sg.net.pl/Hirens.BootCD.15.2.zip" target="_blank" title='Enlace oficial de Hirens Boot 15.2'>Hirens Boot 15.2</a></td>
                    	<td><b>/Isos/Utilidades/Hiren's.BootCD.15.2.iso</b></td>
                    </tr>
                    <tr>
                    	<td width="300px"><a href="http://softlayer-dal.dl.sourceforge.net/project/gparted/gparted-live-stable/0.17.0-1/gparted-live-0.17.0-1-i486.iso" target="_blank" title='Enlace oficial de gparted'>Gparted live 0.17.0-1</a></td>
                    	<td><b style="margin-right:10px">/Isos/Utilidades/gparted-live-0.17.0-1-i486.iso</b> (Gracias a <a href="http://m4cr0ss.wordpress.com" target="_blank">hunt3r25</a>).</td>
                    </tr>
<!--                    <tr>
                    	<td width="300px"><a href="http://beini.es/descarga/beini-1-2/beini-1-2-1/" target="_blank" title='Enlace oficial de Beini 1.2.1'>Beini 1.2.1</a></td>
                    	<td><b>/Isos/Utilidades/beini-1.2.1.iso</b></td>
                    </tr>
                    <tr>
                    	<td width="300px"><a href="http://beini.es/descarga/beini-1-2/beini-1-2-2/" target="_blank" title='Enlace oficial de Beini 1.2.2'>Beini 1.2.2</a></td>
                    	<td><b>/Isos/Utilidades/beini-1.2.2.iso</b></td>
                    </tr>
                    <tr>
                    	<td width="300px"><a href="http://beini.es/descarga/beini-1-2/beini-1-2-3/" target="_blank" title='Enlace oficial de Beini 1.2.3'>Beini 1.2.3</a></td>
                    	<td><b>/Isos/Utilidades/beini-1.2.3.iso</b></td>
                    </tr> -->
				</table>	
                
                <p>Podéis añadir cualquiera de los sistemas operativos y utilidades mencionadas anteriormente, siempre que respetéis la ruta indicada, es decir.. si queréis añadirle Windows 8 de 64 bits, tenéis que crear la carpeta <code>Isos</code> dentro del pendrive, y luego dentro de esta carpeta tenéis que crear la carpeta <code>Windows8</code> y finalmente dentro de esta ultima carpeta debéis añadir la imagen que contiene Windows 8 con el nombre <code>Win8_x64.iso</code>.</p>
                <p>Para evitar ciertos errores comunes os recomiendo crear toda la estructura del directorio <code>/Isos/</code> en vuestro disco duro, colocando allí todas las isos que queréis, y luego volcar la carpeta <code>/Isos/</code> del disco al pendrive.</p>
                <div class='nota'>
                	Para los windows podéis utilizar cualquier versión y service pack, <b><u>SIEMPRE QUE SEAN ISOS ESTÁNDAR DE MICROSOFT</u></b> como mucho modificadas con nLite o similares, no valen los típicos Todo En Uno / All In One, ni cosas raras por el estilo.<br /><br />
                	<b>Por qué no valen los Todo En Uno?</b> realmente os estoy engañando y si que se pueden hacer llegar a funcionar, pero podría resultar ineficiente como poco. Por no hablar de que hay miles de TEU distintos de gente distinta, y cada uno lo monta a su manera.<br /><br />
                    Los TEU suelen utilizar el Grub4Dos para sus propios menús y esto significa que con el menú de este tutorial al cargar la ISO del TEU, se abre un segundo Grub4Dos que te muestra sus opciones, carga otra iso que tiene el dentro con el windows que le habéis dicho, y empieza la instalación.<br /><br />
                    Todo esto supone un enorme gasto de ciclos y de memoria, por lo que en ciertos ordenadores podría llegar a consumir todos los recursos y terminar colgándose la instalación.<br /><br />
                    <b>Conclusión</b> : Si solo tenéis un TEU y no disponéis de otras isos, yo creo que si miráis dentro de la iso del TEU encontrareis en algún directorio las isos de los windows por separado, pero a decir verdad cada TEU se lo montan a su manera. Si ni así las encontráis, arriba tenéis los enlaces de descarga oficiales para la mayoría de sistemas operativos y utilidades.
                </div>
				<br />
                <div class='nota'>
                	Debéis grabar las isos justo después de grabar los archivos del <code>Tutorial_USBBoot.zip</code> en el pendrive, y además debéis grabarlas de una en una, de forma que queden en un solo bloque. Si por ejemplo ponéis a grabar 4 isos a la vez de forma independiente, estas no se grabaran en un bloque continuo, si no que necesitaran ser divididas en varios bloques, y el driver que usamos para cargar las isos no soporta la lectura de estas si no se encuentran en un único bloque.<br /> <br /> 
                    Si os aparece el siguiente mensaje <code style="background:black; color:white; font-weight:bold; padding-left:3px; padding-right:3px">Error 60: File for drive emulation must be in one contiguous disk area.</code> es que la iso ha quedado grabada en mas de una parte dentro del pendrive, y por lo tanto no nos sirve.<br /><br />
					El tema de la fragmentación es algo complicado, así que os voy a poner un ejemplo para que podáis comprenderlo mejor. Supongamos que tenemos un pen de <b>8Gb</b>, y que tenemos 3 isos que queremos grabarle dentro (<span style='color:blue'><b>Iso1</b></span> = <b>1</b>Gb, <span style='color:green'><b>Iso2</b></span> = <b>1</b>Gb, <span style='color:purple'><b>Iso3</b></span> = <b>2</b>Gb)
					<ul>
	                    <li>
							Grabamos la <span style='color:blue'><b>Iso1</b></span>, y luego grabamos la <span style='color:green'><b>Iso2</b></span> de forma que el pendrive queda así :<br />
            		        <table class='TablaPen'>
                                <tr>
                                    <td style="background:blue; color:white;"><b>Iso1</b></td>
                                    <td style="background:green; color:white"><b>Iso2</b></td>
                                    <td></td><td></td><td></td><td></td><td></td><td></td>
                                </tr>
                            </table>
                        </li>
                        <li>
                            Ahora si eliminamos la <span style='color:blue'><b>Iso1</b></span> el pendrive quedaría así :
                            <table class='TablaPen'>
                                <tr>
                                    <td></td>
                                    <td style="background:green; color:white"><b>Iso2</b></td>
                                    <td></td><td></td><td></td><td></td><td></td><td></td>
                                </tr>
                            </table>
                        </li>
                        <li>
                            Si después de eliminar la <span style='color:blue'><b>Iso1</b></span> grabamos la <span style='color:purple'><b>Iso3</b></span>, el pendrive quedaría así :
                            <table class='TablaPen'>
                                <tr>
                                    <td style="background:purple; color:white"><b>Iso3</b></td>
                                    <td style="background:green; color:white"><b>Iso2</b></td>
                                    <td style="background:purple; color:white"><b>Iso3</b></td>
                                    <td></td><td></td><td></td><td></td><td></td>
                                </tr>
                            </table>
                        </li>
                    </ul>
                    <b>Que ha pasado?</b> Al eliminar la <span style='color:blue'><b>Iso1</b></span> que ocupaba 1Gb, ha quedado un espacio libre de 1Gb al principio del pendrive. Como el archivo <span style='color:purple'><b>Iso3</b></span> ocupa 2Gb el sistema operativo lo empieza a grabar al principio, y cuando ya no puede continuar porque se encuentra la <span style='color:green'><b>Iso2</b></span>, busca otra zona con espacio libre (para este ejemplo es justo después de la <span style='color:green'><b>Iso2</b></span>).<br /><br />
                    En este caso concreto la <span style='color:green'><b>Iso2</b></span> funcionaría perfectamente, pero con la <span style='color:purple'><b>Iso3</b></span> recibiríamos el Error 60.<br /><br />
                    <b>Conclusión</b> : la mejor manera de grabar todos los datos correctamente, es crear la estructura en el disco duro, es decir se crea la carpeta <code>/Isos/</code> y luego se van metiendo todas las isos que queremos con sus respectivos nombres y directorios. Una vez se tienen todas las isos allí se copia el directorio desde el disco al pendrive.
                </div>
                <br />
                <div class='nota'>Para los windows 8 debéis editar el menu.lst, buscar la parte del windows 8, y modificar la clave del producto con vuestra clave. La clave que he puesto es para versiones de prueba, y con ella no podréis activar el windows. <img src='/Graficos/USBBootW8Key.png' style="margin-left:5px"> </div>

                <p>Ahora solo os quedara probar que todo funcione correctamente utilizando el USB para arrancar en alguna maquina o con algun emulador (WinSetupFromUSB trae el QEmu, que para probar los arranques de todo no va mal, PERO OJO que funcione en QEmu no quiere decir que luego en una maquina real funcione).</p>
                <h2>Notas finales</h2>
                <p>Todo esto lo he conseguido hacer mirando varios tutoriales, pero en especial me he basado en el siguiente : <a href="http://www.rmprepusb.com/tutorials/install-xp-and-win7-to-internal-hdd" target="_blank">Install XP and Win7 onto a computer from one USB flash drive</a>. Lo que en esa pagina utilizan su propio programa para crear pendrives que con windows xp a mi me dio muchos dolores de cabeza (sobre todo para cargar windows xp desde una iso e instalarlo).</p>
                <p>He evitado mostrar el funcionamiento de Grub4dos ya que a decir verdad hay muchas cosas que ni yo entiendo, por lo que si no sois muy hábiles con estas cosas os recomendaría no tocar el <b>"menu.lst"</b>. De todas formas he comentado el archivo menu.lst internamente para que os sea fácil editarlo si es que tenéis que llegar hasta tal punto.</p>
                <div class='nota'>Ultima actualización (08/01/2014), añadido gparted a la lista de utilidades y al <code>menu.lst</code>, gracias a <a href="http://m4cr0ss.wordpress.com" target="_blank">hunt3r25</a>.</div>
                
                <p>Y esto es todo por hoy, espero que este documento os sirva de ayuda.</p>



<?php
    $Base->FinBlog(false, true);
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     