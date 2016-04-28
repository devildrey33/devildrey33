<?php 
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="Resaltar sintaxis de un código fuente (C/C++, PHP, HTML, JavaScript, CSS) para PHP">'.Intro().
            '<meta name="keywords" content="Resaltador de código, Resaltador de sintaxis, Dar formato código, Pintar código, Pintar código fuente, Resaltar código, Resaltar código fuente, Marcar código, Resaltar sintaxis">';

    $Titulo = "Resaltar sintaxis de un código fuente";
    
    if (!isset($_POST["SinPlantilla"])) {
        $Base->InicioPlantilla(basename(__FILE__), $Titulo, $META);
    }

    $Base->InicioBlog(basename(__FILE__), $Titulo);
?>	


    <img class="ImagenPortada" src="/Web/Graficos/250x200_ResaltarSintaxis.png" alt="Resaltar código para mostrar en una web" />
    
    <p>Uno de los primeros problemas que me encontré al empezar esta web en el 2009 fue la necesidad de mostrar código fuente de varios lenguajes resaltando su sintaxis.</p>
    <p>Al investigar sobre el tema, me di cuenta que la mayoría de soluciones (por lo menos las mas aceptables) estaban hechas con JavaScript. Lo que al final con el tiempo me llevo a crearme mi propia herramienta para remarcar la sintaxis en php, ya que yo consideraba mejor hacer el parsing en php y guardarlo en archivos "cache", de forma que solo se realizaba el parsing si la fecha de modificación del archivo cache era inferior a la fecha de modificación del archivo de código.</p>

    <p>Por el 2011 publique varias entradas en el blog sobre el tema de remarcar sintaxis en php, en las que explicaba como parsear determinados lenguajes y resaltar su sintaxis :
        <a href='/Blog/ColorearCodigoPHP_XML'>Colorear código XML</a>, 
        <a href='/Blog/ColorearCodigoPHP_CSS'>Colorear código CSS</a>,
        <a href='/Blog/ColorearCodigoPHP_JavaScript'>Colorear código JavaScript</a>,
        <a href='/Blog/ColorearCodigoPHP_PHP'>Colorear código PHP</a>,
        <a href='/Blog/ColorearCodigoPHP_CPP'>Colorear código C/C++</a>,
        <a href='/Blog/ColorearCodigoPHP_HTML'>Colorear código HTML</a>.
        Al final dichas entradas del blog acabaron fusionadas para formar el objeto devildrey33_PintarCodigo.
    </p>
    
    <p>Hace cosa de un par de meses se me metió en la cabeza que necesitaba poder resaltar ciertas líneas de código con enlaces parecidos a un link. Y esto me llevo a re-escribir prácticamente por completo el objeto devildrey33_PintarCodigo. El resultado, es que ahora se pueden resaltar <linea cid='HTML' l='4'>una</linea> o <linea cid='HTML' l='6,7,8,9,14,15,22,23,24'>varias</linea> líneas de código pasando por encima de los enlaces. Si la línea no está visible en la pantalla, al hacer click en el enlace <linea cid='HTML' l='38'>nos lleva hasta ella</linea>.</p>

<?php 
/* -[INICIO devildrey33.HTML]-
<!DOCTYPE HTML>
<html>
    <head>        
        <title>Ejemplo colorear HTML</title>
        <link href='ColorearCodigoPHP_HTML_Ejemplo.css' rel='stylesheet' type='text/css' />
        <!-- Una única línea con estilos -->
        <style>.MiEstilo { margin-left:auto; margin-right:auto; }</style>
        <!-- Estilos multi-linea -->
        <style>
            .MiEstilo2 { 
               margin-left:auto; 
               margin-right:auto;
               margin-top:10px;               
            };
        </style>
        <!-- Código JavaScript en una sola línea -->
        <script>function MiFuncion(variable) { alert(variable); }</script>
        <!-- Código JavaScript multi-linea -->
        <script>
            function MiFuncion(variable) { 
                console.log(variable); 
                alert(variable); // Comentario
            }
        </script>
    </head>
    <body>
        <!-- Código PHP en una sola línea -->
        <?php $MiVariable = true; ?>
        <!-- Código PHP multi-linea -->
        <?php 
            function MiFuncion($Var, $Var2 = "string") {
                return $Var2." ".($Var * 10);
            }
        ?>
    </body>
</html>
 
<!-- Final del ejemplo-->
-[FIN devildrey33.HTML]- */    
                $Base->PintarCodigo->PintarArchivoHTML("HTML", "Test HTML", basename(__FILE__), "HTML"); 
            ?>    
    
    <h2>Funciones</h2>
    <p>Las funciones <b>PintarArchivo</b> permiten o bien mostrar un archivo completo, o mostrar solo una porción. Para mostrar una porción hay que marcar el archivo de código con un par de comentarios especiales, por ejemplo en un archivo PHP se marcara el principio de la porción con el comentario <code>/* -[INICIO devildrey33.<b>%ID%</b>]- */</code>, y el final con <code>/* -[FIN devildrey33.<b>%ID%</b>]- */</code>. Hay que substituir <code><b>%ID%</b></code> por la id que deseemos darle a esa porción de código.</p>
    
    <p>La función <b>PintarTexto</b> muestra un marco con el código especificado sin parsear. Esta función es ideal para mostrar comandos de consola.</p>
    <table class="Tabla">
        <thead>
            <tr>
               <th>Funciones</th>
               <th>Comentarios</th>
               <th>Parámetros</th>
            </tr>
        </thead>            
        <tbody>
            <tr>
                <td style="width:560px">
                    <b>PintarArchivoHTML</b>($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans")<br>
                    <b>PintarArchivoXML</b>($IDMarco, $Titulo, $Archivo, $ID = "")<br>
                    <b>PintarArchivoCSS</b>($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans")<br>
                    <b>PintarArchivoPHP</b>($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans")<br>
                    <b>PintarArchivoJS</b>($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "NetBeans")<br>
                    <b>PintarArchivoC</b>($IDMarco, $Titulo, $Archivo, $ID = "", $Tema = "VC")<br>
                </td>
                <td style='width:100px;'>
                    <code>&lt;!-- --&gt;</code><br>
                    <code>&lt;!-- --&gt;</code><br>
                    <code>/* */</code><br>
                    <code>/* */</code> o <code>//</code><br>
                    <code>/* */</code> o <code>//</code><br>
                    <code>/* */</code> o <code>//</code><br>
                </td>
                <td>
                    <b>$IDMarco</b> es la ID del marco del código en HTML/JavaScript.<br>
                    <b>$Titulo</b> el titulo (puede ser "" si no deseas mostrar ningún título).<br> 
                    <b>$Archivo</b> path del archivo que contiene el código fuente.<br>
                    <b>$ID</b> es la id de la porción a mostrar, si no hay $ID se mostrará todo el archivo.<br>
                    <b>$Tema</b> nombre del tema visual a utilizar.
                </td>
            </tr>
            <tr>
                <td><b>PintarTexto</b>($IDMarco, $Titulo, $Codigo)</td>
                <td>NO FUNCIONA CON COMENTARIOS</td>
                <td>
                    <b>$IDMarco</b> es la ID del marco del código en HTML/JavaScript.<br>
                    <b>$Titulo</b> el titulo (puede ser "" si no deseas mostrar ningún titulo).<br> 
                    <b>$Codigo</b> código a mostrar sin parsear.                   
                </td>
            </tr>
        </tbody>
    </table>    
    
    <div class='nota'>
        Las funciones <b>PintarArchivo</b> comprueban si la fecha de modificación del archivo cache es mas pequeña que la del archivo fuente, y en ese caso realizan el parsing. En caso contrario se imprime directamente el archivo de la cache sin hacer ningún tipo de parsing.
    </div>
    
    <h2>Como se debe utilizar</h2>
    <p>En 5 sencillos pasos ya puedes empezar a remarcar la sintaxis de tus códigos : 
    <ul>
        <li><linea cid='ID4' l='5'>Incluir devildrey33_PintarCodigo en nuestro archivo</linea>.</li>
        <li><linea cid='ID4' l='7'>Crear una instancia de devildrey33_PintarCodigo</linea>.</li>
        <li><linea cid='ID4' l='11,13,14'>Añadir las cabeceras CSS y JS</linea>.</li>
        <li><linea cid='ID4' l='18,20'>Delimitar el ejemplo a mostrar con comentarios</linea>.</li>
        <li><linea cid='ID4' l='21'>Ejecutar el parseado para mostrar el resultado</linea>.</li>        
    </ul>
  <?php 
/* -[INICIO devildrey33.IDC4]-
<!DOCTYPE HTML>
<html>
<?php
    // Cabecera con el objeto devildrey33_PintarCodigo
    include("devildrey33_PintarCodigo.php");
    // Creo una instancia al objeto devildrey33_PintarCodigo
    $PintarCodigo = new devildrey33_PintarCodigo;
?>
    <head>
        <!-- Cabecera CSS OBLIGATORIA -->
        <link rel='stylesheet' href='PintarCodigo.css' />
        <!-- Archivos JavaScript (Solo son necesarios si se quieren utilizar los enlaces para resaltar código) -->
        <script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
        <script src="PintarCodigo.js"></script> 
    </head>
    <body> 
<?php
    // -[INICIO devildrey33.FuncionEjemplo]-
    function MiFuncionDeEjemplo () { };
    // -[FIN devildrey33.FuncionEjemplo]- 
    $PintarCodigo->PintarArchivoPHP("IDHTML", "Titulo", basename(__FILE__), 'FuncionEjemplo'); 
?>
        <linea cid='IDHTML' l='1'>Enlace que apunta a la primera linea</linea>
    </body>
</html> 
-[FIN devildrey33.IDC4]- */
    $Base->PintarCodigo->PintarArchivoHTML("ID4", "", basename(__FILE__), 'IDC4'); 
?> 
    <p>Si queremos utilizar los enlaces para resaltar código, basta con añadir las <linea cid='ID4' l='13,14'>cabeceras JavaScript (JQuery y PintarCodigo)</linea>, y utilizar la <linea cid='ID4' l='23'>etiqueta <code>&lt;linea&gt;</code></linea>.</p>
    <p>El atributo <b>cid</b> es la ID del marco de código, y el atributo <b>l</b> es el número de la <b>l</b>ínea / <b>l</b>íneas de código. Para añadir múltiples líneas de código basta con delimitarlas con una coma, por ejemplo <code>l='1,2,3,4'</code> marcará las 4 primeras líneas.</p>
        
    <h2>Contenido del ejemplo</h2> 
    <table class='Tabla'>
        <tr>
            <td>/Cache/</td>
            <td>Directorio donde se guarda la cache de los parsings (se requieren permisos de escritura).</td><td><b>(NECESARIO)</b></td>            
        </tr>
        <tr>
            <td>/Diccionarios/</td>
            <td>Directorio donde se encuentran los diccionarios de colores para los distintos lenguajes.</td><td><b>(NECESARIO)</b></td>            
        </tr>
        <tr>
            <td>/devildrey33_PintarCodigo.php</td>
            <td>Archivo php que contiene el objeto devildrey33_PintarCodigo.php</td><td><b>(NECESARIO)</b></td>            
        </tr>
        <tr>
            <td>/PintarCodigo.css</td>
            <td>Archivo que contiene los estilos para los marcos de código.</td><td><b>(NECESARIO)</b></td>            
        </tr>
        <tr>
            <td>/PintarCodigo.js</td>
            <td>Archivo que contiene el script que hace funcionar los enlaces para resaltar código.</td><td><b>(OPCIONAL)</b></td>            
        </tr>
        <tr>
            <td>/<a href='/Codigo/devildrey33_PintarCodigo/test-c.php' target='_blank'>test-c.php</a></td>
            <td>Pequeño test sobre un código C++</td><td></td>            
        </tr>
        <tr>
            <td>/<a href='/Codigo/devildrey33_PintarCodigo/test-css.php' target='_blank'>test-css.php</a></td>
            <td>Pequeño test sobre una hoja de estilos CSS</td><td></td>         
        </tr>
        <tr>
            <td>/<a href='/Codigo/devildrey33_PintarCodigo/test-html.php' target='_blank'>test-html.php</a></td>
            <td>Pequeño test sobre un código HTML que contiene además PHP, CSS, y JavaScript.</td><td></td>          
        </tr>
        <tr>
            <td>/<a href='/Codigo/devildrey33_PintarCodigo/test-js.php' target='_blank'>test-js.php</a></td>
            <td>Pequeño test sobre un código JavaScript.</td><td></td>  
        </tr>
        <tr>
            <td>/<a href='/Codigo/devildrey33_PintarCodigo/test-php.php' target='_blank'>test-php.php</a></td>
            <td>Pequeño test sobre un código PHP.</td><td></td>       
        </tr>        
    </table>
    
    <div class='Centrado'><a href='../Descargas/devildrey33_PintarCodigo.2.02.zip' target='_blank' class='Boton-Normal'>Descargar ejemplo</a></div>
    
    
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>