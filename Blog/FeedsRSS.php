<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Creación de feeds RSS");*/

        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Creación de feeds RSS">
        <meta name="keywords" content="Programar Feeds RSS">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Creación de feeds RSS", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Creación de feeds RSS");
        
        ?>	


                <!-- INTRODUCCION --> 
                <img class="ImagenPortada" src="/Web/Graficos/250x200_RSS.png" alt="RSS" />
                <p>Los feeds RSS son una forma de comunicar noticias diseñados para que el usuario pueda estar informado desde una sola pantalla de todas aquellas cosas que le interesan.</p>
                <p>Si nunca habéis usado feeds es algo complicado de imaginar. La idea consiste en que los portales web con noticias como por ejemplo blogs dejen en un archivo un resumen de las nuevas noticias para que más tarde el usuario desde un visor de feeds pueda ver las novedades de todos los sitios a los que está subscrito sin necesidad de acceder por el navegador a cada página web.</p>
                <p>Esto permite que si nos subscribimos a 4 páginas web, abriendo una sola web / programa podamos ver todas las novedades de estos cuatro sitios.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Personalmente hasta el día de ayer mi contacto con el RSS había sido prácticamente nulo, ya que no es algo que me atraiga, pero siempre está bien abrir la mente a nuevos horizontes.</p>
                <p>Y ya que me he puesto a investigar cómo integrar feeds RSS a mi web, también he creído conveniente hacer una pequeña explicación de cómo crearlos e integrarlos a una web. Especialmente porque las paginas que he encontrado no explican muy bien el tema, o solo cuentan una parte de él.</p>
                <p>Bueno para empezar un Feed RSS no es más que un archivo que contiene código XML dentro, que debe estar estructurado según unas reglas especificas.</p>
                <p>La primera regla es que <b>TODOS</b> los datos del feed deben ir dentro de la siguiente etiqueta :</p>
                <?php 
/* -[INICIO devildrey33.ID0]-
<rss version="2.0">INFORMACIÓN DEL FEED...</rss>
-[FIN devildrey33.ID0]-  */
                    $Base->PintarCodigo->PintarArchivoXML("InformacionFeed", "Etiqueta <b>rss</b>", basename(__FILE__), "ID0"); ?> 
                <p>Dentro de un feed podemos encontrar <b>'canales'</b>, estos canales vienen a ser como apartados de la web, por ejemplo con mi web podría hacer un canal C/C++, otro para PHP, otro para JavaScript, etc..., o simplemente podría hacer un canal para todo el contenido de la web (que es lo que voy a hacer en mi caso).</p>
                <p>Los canales deben tener un titulo, un link y una descripción como mínimo, también se les puede añadir más datos opcionales como podría ser el email del autor, comentarios, fecha, etc...</p>
                <p>Veamos el siguiente ejemplo :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<channel>
    <title>www.devildrey33.es</title>
    <link>http://www.devildrey33.es</link>
    <description>Página dedicada principalmente a la programación.</description>
    <language>ES</language>
    <item> INFORMACIÓN DEL ITEM1... </item>
    <item> INFORMACIÓN DEL ITEM2... </item>
    <item> INFORMACIÓN DEL ITEM3... </item>
</channel>
-[FIN devildrey33.ID1]-  */
                    $Base->PintarCodigo->PintarArchivoXML("InformacionFeed2", "Etiqueta <b>channel</b>", basename(__FILE__), "ID1"); 
                ?> 
                <p>Las etiquetas <b>title</b>, <b>link</b> y <b>description</b> son obligatorias, y además se ha añadido la etiqueta <b>language</b> la cual especifica el idioma en que está escrita la información del feed. También hay varias etiquetas item que veremos a continuación.</p>
                <p>En cada canal deben existir varios items, los items vienen a ser entradas específicas, por ejemplo para mi web esta página en concreto seria un item, el tutorial de ayer con <a href="Tutorial_WINAPI_4.php">Creación de archivos dump</a> sería otro, etc...</p>
                <p>Al igual que con los canales, los items también tienen unas etiquetas obligatorias y otras opcionales. Las etiquetas obligatorias son las mismas que para channel : <b>title</b>, <b>link</b> y <b>description</b>. Veamos el siguiente ejemplo para un item :</p>
                <?php 
/* -[INICIO devildrey33.ID2]-
<item>
 
    <title>Creación de archivos dump</title>
    <link>http://www.devildrey33.es/Tutorial_WINAPI_4.php</link>
    <description>
        Los archivos DUMP son una forma de depurar aplicaciones con windows. 
        La idea consiste en que cuando una aplicación falla críticamente se guarda un archivo con el contenido en memoria.
        Más tarde podemos abrir esos archivos con el Visual Studio y depurar la aplicación....
    </description>
    <pubDate>Mon, 03 Oct 2011 15:21:36 GMT</pubDate>
</item>                
-[FIN devildrey33.ID2]- */

                    $Base->PintarCodigo->PintarArchivoXML("InformacionFeed3", "Etiqueta <b>item</b>", basename(__FILE__), "ID2"); 
                ?>
                <p>Como podéis ver la estructuración no es muy complicada, y en este ejemplo además de añadir las etiquetas obligatorias, se ha añadido la etiqueta <b>pubDate</b> la cual indica la fecha de publicación del item.</p>
                <p>Si unimos todas las partes el archivo xml nos queda de la siguiente forma :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0">
    <channel>
        <title>www.devildrey33.es</title>
        <link>http://www.devildrey33.es</link>
        <description>Página dedicada principalmente a la programación.</description>
        <language>ES</language>
        <item>
            <title>Creación de archivos dump</title>
            <link>http://www.devildrey33.es/Tutorial_WINAPI_4.php</link>
            <description>
                Los archivos DUMP son una forma de depurar aplicaciones con windows. 
                La idea consiste en que cuando una aplicación falla críticamente se guarda un archivo con el contenido en memoria.
                Más tarde podemos abrir esos archivos con el Visual Studio y depurar la aplicación....
            </description>
            <pubDate>Mon, 03 Oct 2011 15:21:36 GMT</pubDate>
        </item>   
    </channel>
</rss>
 -[FIN devildrey33.ID3]- */                 
                    $Base->PintarCodigo->PintarArchivoXML("InformacionFeed3", "Ejemplo rss completo", basename(__FILE__), "ID3"); 
                ?>
                <p>Como ultimo apunte fijaros que en la primera línea se ha incluido una etiqueta que describe la version del XML y la codificación que utiliza. Aunque no es estrictamente necesario incluir esa línea, si queremos ver bien acentuadas todas las palabras en todos los lectores de feeds mas nos vale definir una codificación.</p>
                <p>Si quereis saber mas sobre las etiquetas disponibles para RSS 2.0 os recomiendo esta página : <a href="http://cyber.law.harvard.edu/rss/rss.html" target="_new">RSS 2.0 at Harvard Law</a>.
                <p>Hasta aquí todo parece bastante sencillo, pero luego como debemos distribuir este feed?</p>
                <p>Lo primero es incluir lo siguiente en el head de nuestras páginas :</p>
                <?php 
/* -[INICIO devildrey33.ID4]-
<link rel="alternate" title="devildrey33 RSS" href="http://www.devildrey33.es/RSS.xml" type="application/rss+xml">
-[FIN devildrey33.ID4]- */
                    $Base->PintarCodigo->PintarArchivoXML("InformacionFeed4", "Head del indice para indicar la existencia de rss", basename(__FILE__), "ID4");
                ?>
                <p>Con tener esta línea en el index.html / index.php de nuestra página, si alguien quiere subscribirse a los feeds de devildrey33 le bastaría con agregar un nuevo canal y poner la dirección "http://www.devildrey33.es" y el lector de feeds buscaría dentro del índice esa línea para luego acabar consultando el archivo <b>RSS.xml</b>.</p>
                <p>También se puede utilizar un enlace de este tipo:</p>
                <?php 
/* -[INICIO devildrey33.ID5]-
 <a type="application/rss+xml" href="http://www.devildrey33.es/RSS.xml">Subscribirse.</a>
-[FIN devildrey33.ID5]- */
                    $Base->PintarCodigo->PintarArchivoXML("InformacionFeed5", "Enlace para el rss", basename(__FILE__), "ID5");
                ?>
                <p>El problema que tiene este enlace, es que si nuestro lector de feeds no es una aplicación, no servirá de mucho. Existen lectores de feeds RSS que son parte de la web como por ejemplo 'google reader', y este no se ejecutara al presionar ese enlace por la simple razón de que no es una aplicación registrada dentro de nuestro sistema operativo.</p>
                <h2>Preguntas frecuentes</h2>
                <ul>
                <li><b>Podemos usar un archivo php para generar los feeds, de forma que los lectores vayan a leer a un archivo PHP en vez del archivo XML?</b><br />
                Si, pero mucho cuidado porque algunos lectores de feeds miran la fecha de creación del archivo para actualizarse, de forma que si hacemos algún cambio quizás no se verá en el lector de feeds hasta que pase un buen rato. <br /><br /></li>
                <li><b>Podemos utilizar etiquetas HTML dentro de las descripciones?</b><br />
                Si, pero en muchos casos los caracteres '&lt;' y '&gt;' pueden dar bastantes problemas. Las etiquetas mal cerradas también pueden dar más de un problema.<br /><br /></li>
                <li><b>Existe alguna aplicación/script para crear nuestros feeds automáticamente?</b><br />
                Si, pero como cada página web es un mundo distinto, encontrar un script o una aplicación que nos funcione a medida es bastante complicado. De todas formas si por ejemplo utilizamos Wordpress existe un sitio llamado Feed burner que en teoría crea feeds automáticos. (Nunca lo he probado así que no lo puedo asegurar).</li>
                </ul>
                <p>Y esto es todo por hoy, espero que este documento os sirva de ayuda si alguna vez tenéis que crear vuestros propios feeds.</p>       
                

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>