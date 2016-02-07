<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("PHP : Objeto devildrey33_PintarCodigo");*/

        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="devildrey33_PintarCodigo">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "PHP : Objeto devildrey33_PintarCodigo", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "PHP : Objeto devildrey33_PintarCodigo");
?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_PHP.png" alt="devildrey33_PintarCodigo" />
                <p>Este objeto es en el que he basado los 6 tutoriales anteriores sobre Colorear código con PHP.</p>
                <p>Uno de los problemas de parsear el código y mostrarlo, es que requiere que el servidor PHP realice ciertos cálculos, y por ello puede resultar pesado para ciertos sitios web.</p>
                <p>Si por ejemplo tenemos un sitio con 10000 visitas diarias y tenemos que hacer el parsing de un código 10000 veces al día, estoy seguro que en más de un momento si el servidor pudiera hablar nos diría muchas palabras mal sonantes.</p>
                <p>Por ello este objeto tiene incorporado un sistema que guarda el parsing realizado en un archivo del servidor para ahorrarle trabajo, lo que se traduce en una respuesta más rápida por parte de él al mostrar las páginas web a los usuarios.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Por si solo este objeto me ofrece la posibilidad de pintar códigos tal y como los veo en los programas que utilizo para desarrollarlos, y además sin necesidad de tener que re-escribirlos en el documento HTML final.</p>
                <p>Si por ejemplo tengo el archivo main.c, y quiero mostrar una parte de él en un documento HTML, utilizando una simple línea de código este objeto realiza el parsing y lo muestra en el documento HTML final. Anteriormente he comentado que estos parsings se guardan en el servidor PHP una vez realizados para agilizar el proceso, pero esto no es inconveniente si al cabo de una semana decido modificar el archivo main.c, ya que este mismo objeto comprobara que la fecha de modificación del archivo main.c sea anterior a la del archivo del parsing. En caso contrario este objeto volverá a parsear la porción de código indicada y guardara nuevamente los cambios.</p>
                <p>Además también crea un marco que nos facilita la visualización del código y que viene con las líneas numeradas, por si luego hay que explicar de esas líneas específicamente que sea mucho más fácil de hacer.</p>
                <p>En esencia para cada tipo de código existen 3 funciones :</p>
                <ul>
                <li>Pintar...</li>
                <li>PintarTexto...</li>
                <li>PintarArchivo...</li>
                </ul>
                <p>La primera función recibe una cadena de caracteres y realiza el parsing al lenguaje especificado.</p>
                <p>La segunda función básicamente es como la primera, con la diferencia de que devuelve el código para mostrar el marco además del código parseado y pintado a su lenguaje correspondiente.</p>
                <p>La tercera función está preparada para archivos, y también devuelve el marco además del código pintado. Esta función además puede ser utilizada para mostrar solo un fragmento de código, o todo el archivo completo.</p>
                <p>Veamos la lista de funciones públicas :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDFuncionesPublicas", "devildrey33_PintarCodigo", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_devildrey33_PintarCodigo.protos.php"); ?>
                <p>Exceptuando las funciones de CSS todas las demás funciones siguen el esquema anterior de tres funciones. El problema con el CSS es que podemos necesitar pintar un estilo con su nombre de clase/id o simplemente pintar solo sus propiedades. Tal y como han definido las reglas en Dreamweaver es necesario separar estos dos conceptos ya que nos podemos encontrar una etiqueta script, que requiera el nombre de clase/id del estilo, o bien nos podemos encontrar en cualquier etiqueta el atributo style que nunca incluye el nombre de la clase/id.</p>
                <p>Los parámetros para las funciones son exactamente iguales independientemente del lenguaje a parsear :</p>
                <p><b>$IDMarco</b> :<br />
                Este parámetro se utiliza para asignar una id en el marco de código. Esta id es accesible desde HTML.</p>
                <p><b>$Titulo</b> :<br />
                Este parámetro es una cadena de texto con el titulo que se mostrara en el marco. Se pueden añadir etiquetas con alguna url.</p>
                <p><b>$Archivo</b> :<br />
                Este parámetro es la ruta del archivo de donde queremos extraer el código a parsear.</p>
                <p><b>$ID</b> :<br />
                Este parámetro es la ID de la porción de código que queremos parsear del archivo. Si no se especifica ninguna ID se parseara el archivo completo.</p>
                <p><b>$Texto</b> :<br />
                Este parámetro es una cadena de caracteres con el código a parsear.</p>
                <p>Para las funciones PintarArchivo si queremos solo pintar una porción del código hay que especificar la ID a pintar en la función. Dentro del archivo que queremos pintar deberán haber unos comentarios que designaran la porción a pintar, por ejemplo :</p>
<!-- -[INICIO devildrey33.ID2]-
/* -[INICIO devildrey33.MiID]- */
.Estilo { margin:0px; };
/* -[FIN devildrey33.MiID]- */                    
-[FIN devildrey33.ID2]- -->
                <?php 
/* -[INICIO devildrey33.ID1]-
// -[INICIO devildrey33.MiID]- 
int MiFuncionEjemplo(void) { return 0: };
// -[FIN devildrey33.MiID]-
 -[FIN devildrey33.ID1]-*/
                    $Base->PintarCodigo->PintarArchivoC("IDEjemploC", "Ejemplo 1 para la ID C/C++", basename(__FILE__), "ID1"); 

                    $Base->PintarCodigo->PintarArchivoCSS("IDEjemploCSS", "Ejemplo 2 para la ID CSS", basename(__FILE__), "ID2"); 
/* -[INICIO devildrey33.ID3]-
<!--[INICIO devildrey33.MiID]-->
<Etiqueta>Datos</Etiqueta>
<!--[FIN devildrey33.MiID]-->                    
-[FIN devildrey33.ID3]-*/

                    $Base->PintarCodigo->PintarArchivoHTML("IDEjemploHTML", "Ejemplo 3 para la ID HTML", basename(__FILE__), "ID3"); 
                ?>
                <p>Como podéis observar en el ejemplo en la línea 1 tenemos el comentario "// -[INICIO devildrey33.<b>MiID</b>]-" exceptuando la parte en negrita ese texto debe estar siempre presente al empezar la porción de código. La parte en negrita es variable y es donde pondremos el nombre que designaremos a esa porción de código. Ese nombre será el que pondremos luego en el parámetro $ID para especificar una porción de código a parsear.</p>
                <p>Cada lenguaje tiene sus tipos de comentarios, por ejemplo HTML y XML tiene &lt;!--, CSS solo sirven los comentarios /*, y en C/C++, PHP y JavaScript se puede utilizar tanto // como /*</p>
                <p>Lo importante es que el tercer carácter del comentario empiece por "-" seguido por "[INICIO devildrey33.????]-". Así que si queremos hacer un comentario para HTML/XML deberá tener este estilo : "&lt;!--[INICIO devildrey33.MiID]--&gt;", y si lo queremos para CSS deberá ser de este estilo "/* -[INICIO devildrey33.MiID]- */"</p>
                <p>Si os fijáis en cualquier tutorial de C/C++ de devildrey33 os encontrareis comentarios de ese estilo en la mayoría de archivos de código que vienen para descargar, ya que estos son utilizados directamente para ser mostrados luego en la web.</p>
                <p><b>NOTA</b> para finalizar de marcar una porción de código debéis poner el mismo estilo de comentario re-emplazando la palabra INICIO por FIN.</p>
                <p>Dicho esto solo queda enseñaros el código un documento PHP de ejemplo que mostrara toda la clase devildrey33_PintarCodigo :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("EjemploFinal", "Documento PHP que utiliza devildrey33_PintarCodigo", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_devildrey33_PintarCodigo_Ejemplo.php"); ?>
                <p>En esencia es muy simple, creamos una instancia de devildrey33_PintarCodigo, y llamamos a la función que más nos interese en cualquier momento.</p>
                <p>Si descargáis el ejemplo fijaros que dentro hay una carpeta PintarCodigo, en ella es donde se guardaran los archivos parseados. Podéis borrar los archivos que hay dentro, pero ojo no me borréis la carpeta, o el código PHP os puede dar más de un warning / error.</p>
                <p>Y esto es todo! espero que esta clase os saque de algún apuro y que como mínimo os ahorre tiempo.</p>


                <div class='nota'>Este código ha quedado obsoleto, por favor echa un vistazo a la versión 2 : <a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>.</div>
                
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>