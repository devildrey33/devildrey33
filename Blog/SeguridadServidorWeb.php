<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Añadir más seguridad a nuestro servidor Web");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Seguridad htaccess">
        <meta name="keywords" content="Seguridad, Apache, servidor web">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Añadir más seguridad a nuestro servidor Web", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Añadir más seguridad a nuestro servidor Web");
        
        
        ?>	


				<!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_Candado.png" alt="Añadir más seguridad a nuestro servidor Web" />
                <p>Hoy mirando los logs de mi servidor web, me he encontrado con que algún iluminado ha intentado acceder a mi página web pensándose que esta funcionaba bajo word press.</p>
                <p>No es la primera vez que comento que alguien intenta entrar a la zona de administración de mi página web, y probablemente no será la última. Por ello hoy me he propuesto ilustrar un poco por encima, como podemos disuadir a estos iluminados que por aburrimiento se dedican a cargarse el trabajo de otros.</p>
                <p>En este mundo nada es 100% seguro, por ello nunca viene mal añadir algunos mecanismos que dificulten aun más la tarea de romper la seguridad de nuestros servidores.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Me imagino que no debo ser el único que recibe este tipo de ataques, ya que me extraña muchísimo que una web como la mía sufra este tipo de cosas con bastante regularidad. Por lo que supongo que deben ser ataques automatizados, o de lo contrario, alguien me quiere mucho...</p>
                <p>Lo que propongo en este artículo es banear a los usuarios que intenten acceder a carpetas y o archivos que son famosos por ser archivos de configuración / paneles de control.</p>
				<p>Como podemos banear a estos usuarios? en los servidores php existe la posibilidad de crear un archivo de configuración llamado  "<i>.htaccess</i>" el cual nos permite entre otras cosas denegar el acceso a nuestra web a las ips especificadas. Veamos un ejemplo :</p>
                <div class='nota'>El archivo "<i>.htaccess</i>" debe estar ubicado en la raíz de nuestra página web, o en la raíz del directorio que se desea proteger. También podemos tener un .htaccess en la raíz de la web y otro .htaccess ubicado en un subdirectorio, cada uno con sus reglas.</div>
                <?php $Base->PintarCodigo->PintarTexto("ID1", ".htaccess", "&lt;Limit GET&gt;
order allow,deny
deny from 213.5.64.19 		#spamer conocido
allow from all
&lt;/Limit&gt; "); ?>
				<p>Para banear una IP debemos tener las lineas 1,2,4,5 siempre fijas, y entre medio (en este caso la linea 3) añadir el comando "<i>deny from IP</i>". Podemos añadir tantas ips como queramos, y tambien deberíais saber que la parrilla '<i>#</i>' se usa para insertar comentarios.</p>
                <div class='nota'>La IP 213.5.64.19 es de un servidor que se dedica a hacer spam a miles de páginas webs, así que ya la podéis dejar dentro del archivo <i>".htaccess"</i>.</div>
				<p>Ahora vamos a meternos en la piel de un hacker que desea acceder a nuestra web, el no sabe realmente desde donde acceder a la web, por lo que tiene que ir probando métodos conocidos, como por ejemplo entrar en la carpeta "<i>admin</i>" y ver si existe, y ver si puede hacer algo desde ella.</p>
                <p>Aunque nosotros no tengamos dicha carpeta admin, si baneamos a ese usuario al probar de entrar en la carpeta 'admin' nos ahorraremos sus siguientes pruebas, y este se verá obligado a cambiar de IP para saltarse el baneo, a la que lleve 10 veces haciendo esto es posible que desista y busque otro objetivo mas fácil que nuestra web.</p>
                <p>He elaborado una lista con los directorios / archivos en los que suelen mirar basada en mi propia experiencia :</p>
                <table class="Tabla" style="float:left; margin-right:10px;">
                	<tr><td>/muieblackcat/</td></tr>
	                <tr><td>/admin/</td></tr>
	                <tr><td>/admin/pma/</td></tr>
	                <tr><td>/db/</td></tr>
	                <tr><td>/dbadmin/</td></tr>
	                <tr><td>/myadmin/</td></tr>
	                <tr><td>/mysql/</td></tr>
	                <tr><td>/mysqladmin/</td></tr>
	                <tr><td>/typo3/phpmyadmin/</td></tr>
                </table>
                <table class="Tabla" style="float:left; margin-right:10px;">
	                <tr><td>/phpadmin/</td></tr>
	                <tr><td>/phpMyAdmin/</td></tr>
	                <tr><td>/phpmyadmin/</td></tr>
	                <tr><td>/phpmyadmin1/</td></tr>
	                <tr><td>/phpmyadmin2/</td></tr>
	                <tr><td>/pma/</td></tr>
	                <tr><td>/web/phpMyAdmin/</td></tr>
	                <tr><td>/xampp/phpmyadmin/</td></tr>
	                <tr><td>/websql/</td></tr>
				</table>
                <table class="Tabla" style="float:left; margin-right:10px;">
	                <tr><td>/phpMyAdmin-2/</td></tr>
	                <tr><td>/php-my-admin/</td></tr>
	                <tr><td>/phpMyAdmin-2.2.3/</td></tr>
	                <tr><td>/phpMyAdmin-2.2.6/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.1/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.4/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.5-rc1/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.5-rc2/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.5-pl1/</td></tr>
				</table>
                <table class="Tabla">                
	                <tr><td>/phpMyAdmin-2.5.6-rc1/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.6-rc2/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.6/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.7/</td></tr>
	                <tr><td>/phpMyAdmin-2.5.7-pl1/</td></tr>
	                <tr><td>/wp-login.php</td></tr>
	                <tr><td>/blog/wp-login.php</td></tr>
	                <tr><td>/wordpress/wp-login.php</td></tr>
	                <tr><td>/wp/wp-login.php</td></tr>
                </table>
                <div class='nota'>Mucho ojo con intentar acceder a algún archivo o carpeta de los mencionados en mi web, o os quedareis sin leer el resto del artículo, quien avisa no es traidor xD.</div>
                <p>Yo recomiendo bloquear todos estos directorios y archivos, y si resulta que vuestro servidor tiene archivos para la configuración de vuestro sitio en alguna de estas ubicaciones os recomendaría que cambiéis su nombre de alguna forma para que no sean tan evidentes.</p>
                <p>Con todo esto claro, la idea sería que si algún usuario entra en una de esas ubicaciones sea baneado, ya que de esta forma dificultareis mucho mas su recolección de información, y probablemente lo disuadiréis de seguir intentando acceder a vuestros datos.</p>
                <h2>Script PHP para banear IPs</h2>
                <p>Ahora lo que necesitamos es crear un script PHP para banear una ip especifica, y modificar el archivo "<i>.htaccess</i>" para re-direccionar todos los directorios y archivos mencionados anteriormente al script que banea ips.</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("ID2", "BanearIP.php", "../Ejemplos/SeguridadServidorWeb/BanearIP.php"); ?>
                <p>Este script se basa en que el archivo <i>".htaccess"</i> tenga el comentario "<b>#INICIO ips baneadas</b>" justo antes de las ips que van a ser denegadas, para añadir la ip del cliente actual a la lista del "<i>.htaccess</i>"</p>
                <p>En este caso le he añadido tambien un primer aviso que se mostrara para advertir al usuario que si sigue metiendo las narices donde no debe acabara baneado.</p>
                <div class='nota'>No estaría de más añadir una pequeña función para mandaros un correo avisando de que se ha baneado a un usuario, así podreis revisar lo que ha hecho en vuestros logs (No la he incluido para no alargar más el código, pero ya os digo que mi función BanearIP lo hace).</div>
                <h2>Código del archivo .htaccess</h2>
                <p>Por último solo nos falta re-direccionar todos los archivos y carpetas al script para banear la IP, para ello también utilizaremos el "<i>.htaccess</i>", de forma que el archivo final debería quedar así :</p>
                <?php $Base->PintarCodigo->PintarTexto("ID1", ".htaccess", "&lt;Limit GET&gt;
order allow,deny
#INICIO ips baneadas
deny from 213.5.64.19 		#spamer conocido
#FIN ips baneadas
allow from all
&lt;/Limit&gt;

#Redirecciones 
Redirect 301 /muieblackcat 			http://www.MIURL.es/BanearIP.php
Redirect 301 /admin 				http://www.MIURL.es/BanearIP.php
Redirect 301 /admin/pma 			http://www.MIURL.es/BanearIP.php
Redirect 301 /db 				http://www.MIURL.es/BanearIP.php
Redirect 301 /dbadmin 				http://www.MIURL.es/BanearIP.php
Redirect 301 /myadmin 				http://www.MIURL.es/BanearIP.php
Redirect 301 /mysql 				http://www.MIURL.es/BanearIP.php
Redirect 301 /mysqladmin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /typo3/phpmyadmin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpadmin 				http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpmyadmin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpmyadmin1 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpmyadmin2 			http://www.MIURL.es/BanearIP.php
Redirect 301 /pma 				http://www.MIURL.es/BanearIP.php
Redirect 301 /web/phpMyAdmin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /xampp/phpmyadmin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /websql 				http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2 			http://www.MIURL.es/BanearIP.php
Redirect 301 /php-my-admin 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.2.3 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.2.6 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.1 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.4 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.5-rc1 		http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.5-rc2 		http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.5-pl1 		http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.6-rc1 		http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.6-rc2 		http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.6 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.7 			http://www.MIURL.es/BanearIP.php
Redirect 301 /phpMyAdmin-2.5.7-pl1 		http://www.MIURL.es/BanearIP.php
Redirect 301 /wp-login.php                      http://www.MIURL.es/BanearIP.php
Redirect 301 /blog/wp-login.php                 http://www.MIURL.es/BanearIP.php
Redirect 301 /wordpress/wp-login.php            http://www.MIURL.es/BanearIP.php
Redirect 301 /wp/wp-login.php                   http://www.MIURL.es/BanearIP.php"); ?>
			<p>Como podéis ver se utiliza el comando "<i>Redirect 301</i>" especificando la URL y la redirección.</p>
            <div class='nota'>En donde especificamos la redirección debe tener la URL completa o en el caso contrario podría no funcionar bien, ya que si re-direccionamos desde un directorio el script se perdería del todo. Por ejemplo si vamos a "<i>/admin/</i>" intentaria acceder a "<i>/admin/BanearIP.php</i>" y no lo encontraria.</div>
            <p>Por último debo comentar que desde mi servidor de pruebas (xampp) el comando "<i>Redirect 301</i>" no funciona, esto es porque me falta activar el modulo "<i>rewrite_module</i>" dentro del archivo "<i>httpd.conf</i>". De todas formas la gran mayoría de servidores web lo tienen activado por defecto.</p>
            <p>Y esto es todo, espero que por lo menos con estos apuntes se lo dejemos mas difícil a esta gentuza que se dedica a cargarse el trabajo de los demás.</p>
<div class='Centrado'>
    <a class='Boton-Normal' href="/Descargas/SeguridadServidorWeb.zip" target="_blank">Descargar Ejemplo</a>
</div>




<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
                