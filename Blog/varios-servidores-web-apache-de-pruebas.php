<?php 
/*	include("devildrey33.php");

	$HEAD = "
	<meta name='description' content='Varios servidores web apache de pruebas'>
	<meta name='keywords' content='Varios servidores apache, múltiples servidores apacle, Varios servidores web de prueba, Múltiples servidores web de prueba, Apache VirtualHost, Hosts'>";
	
	
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Varios servidores web apache de pruebas", $HEAD);
 * */
         include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Varios servidores web apache de pruebas'>
	<meta name='keywords' content='Varios servidores apache, múltiples servidores apacle, Varios servidores web de prueba, Múltiples servidores web de prueba, Apache VirtualHost, Hosts'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Varios servidores web apache de pruebas", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Varios servidores web apache de pruebas");

?>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_XAMPP.png" alt="Varios servidores web apache de pruebas" />
                <p>Últimamente  a la hora de hacer proyectos web intento no tener ninguna ruta relativa, de esta forma siempre estoy seguro que archivo voy a consultar, y evito complicaciones con php.</p>
                <p>Al utilizar rutas absolutas si quiero probar la web en con un servidor web local, por defecto solo hay configurado un directorio que estará enlazado a localhost:80. Yo hasta hace poco estaba cambiando el archivo http.conf cada vez que quería probar una web distinta para establecerla como raíz. </p>
                <p>Pongamos que tengo <code>C:/Webs/Proyecto1</code>, y <code>C:/Webs/Proyecto2</code>. Si localhost enlaza a <code>C:\Webs</code> podré entrar a los dos proyectos pero la raíz será <code>C:/Webs</code>, por lo que cualquier contenido especificado con una '/' barra inicial no será encontrado.</p>
                <p>Por ejemplo si queremos  mostrar el archivo "<code>/Imagen.png</code>" en www.proyecto1.com funcionaria bien, pero en localhost buscaría la imagen en el directorio <code>C:/Webs</code> y no en <code>C:/Webs/Proyecto1</code>.</p>
                <!-- FIN_INTRODUCCION -->
				<p>La mejor solución para este problema que he visto pasa por seguir 2 pasos :</p>
                    	<h2>Editar el archivo httpd.conf y añadir varios VirtualHost.</h2>
                        <p>En Windows este archivo suele estar en la ruta de instalación del Xampp <code>\xampp\apache\conf</code>.<br />
                        En Linux este archivo suele estar en <code>/usr/local/apache2/conf/httpd.conf</code>.</p>
						<p>Una vez abierto el archivo hay que añadir las siguientes líneas :</p>
                        <?php $Base->PintarCodigo->PintarTexto("ID1", "httpd.conf", 'NameVirtualHost 127.0.0.1
&lt;VirtualHost 127.0.0.1&gt;
   DocumentRoot "C:/Webs/Proyecto1"
   ServerName proyecto1.localhost
&lt;/VirtualHost&gt;
&lt;VirtualHost 127.0.0.1&gt;
   DocumentRoot "C:/Webs/Proyecto2"
   ServerName proyecto2.localhost
&lt;/VirtualHost&gt;'); ?>
                        <p>En el nombre del host y el dominio podemos poner lo que nos de la gana, ya que los re-direccionaremos utilizando el archivo hosts del sistema operativo</p>
                    	<h2>Editar el <a href="http://es.wikipedia.org/wiki/Archivo_hosts" target="_blank" title='Enlace a wikipedia' style="color:black">archivo hosts</a> y añadir los dominios que se han especificado en el VirtualHost.</h2>
                        <p>En Windows este archivo suele estar en <code>C:\Windows\System32\drivers\etc\hosts</code>, y hay que editarlo con privilegios de administrador.<br />
                        En Linux este archivo suele estar en <code>/etc/hosts</code>, y hay que editarlo con privilegios de administrador.</p>
                        <p>Una vez abierto el archivo hay que añadir las siguientes líneas :</p>
                        <?php $Base->PintarCodigo->PintarTexto("ID2", "hosts", "127.0.0.1   proyecto1.localhost
127.0.0.1   proyecto2.localhost"); ?><br /><br />
<div class='nota'><strike>Al habilitar los <code>VirtualHost</code> la opción DocumentRoot (define la ruta del localhost) es ignorada. Si queréis conservar localhost como directorio base para ver todos los proyectos, tenéis que especificar otro <code>VirtualHost</code> mas para localhost.</strike><br />En la última versión del xampp DocumentRoot ya no es ignorada, y apunta a la ruta de localhost, por lo que no hay que especificar via VirtualHost el localhost.</div>
				<p>Y esto es todo, ya podéis utilizar los servidores de pruebas desde el navegador especificando las rutas <code>http://proyecto1.localhost</code> y <code>http://proyecto2.localhost</code>.</p>

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     