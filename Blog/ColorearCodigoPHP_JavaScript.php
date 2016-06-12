<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Colorear código con PHP (Parte 3 JavaScript)");*/

        
        include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Colorear código">
        <meta name="keywords" content="Colorear código JavaScript">';

        $Base->InicioPlantilla(basename(__FILE__), "Colorear código con PHP (Parte 3 JavaScript)", $META);
        
        $Base->InicioBlog(basename(__FILE__), "Colorear código con PHP (Parte 3 JavaScript)");
?>	

                <!-- INTRODUCCION -->
                <p>Siguiendo los tutoriales para pintar código utilizando PHP, hoy toca ver como pintaremos un archivo JavaScript.</p>
                <p>A diferencia de los dos últimos tutoriales, este ya empieza a complicarse, ya que los códigos escritos en javascript tienen palabras clave que deben utilizar un tipo de color, y que debemos diferenciar del resto.</p>
                <p>Por ello vamos a tener que hacer un diccionario de palabras clave para JavaScript de forma que nos sea fácil añadir palabras que vayamos descubriendo que van en otro color.</p>
                <p>También hay que remarcar que las cadenas de caracteres tienen complicaciones añadidas ya que funcionan al estilo C, y estas pueden contener ciertos caracteres engañosos.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Para empezar vamos a ver un código JavaScript básico, de forma que nos podamos hacer una idea de que cosas necesitamos pintar :</p>
                <?php $Base->PintarCodigo->PintarArchivoJavaScript("IDEjemploJavaScript", "Ejemplo absurdo de JavaScript", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "EjemploJavaScript"); ?>
                <p>A primera vista este código JavaScript no sirve para nada xD, pero podemos ver una aproximación de los colores que vamos a necesitar, y en qué casos necesitamos aplicarlos.</p>
                <p>Hay tres tipos de palabras clave, las que son más comunes de cualquier lenguaje de programación : '<b>if</b>', '<b>switch</b>', '<b>break</b>', '<b>return</b>', '<b>default</b>', '<b>var</b>', etc... y estas van en un color azul oscuro. Las que son mas para tratamiento interno de datos java script, que en este caso solo vemos '<b>parseInt</b>', pero hay otras como por ejemplo '<b>setInterval</b>', '<b>setTimeout</b>', '<b>eval</b>', etc.. que irán en un color verde azulado. Y por ultimo palabras claves relacionadas con acciones del navegador que en este caso solo vemos '<b>alert</b>' pero también existen otras como '<b>document</b>', '<b>window</b>', '<b>scroll</b>', etc.. y estas van en un color lila.</p>
                <p>Además de las palabras clave, vemos que las cadenas de caracteres van en un color azul más brillante, y que los valores numéricos van en color rojo.</p>
                <p>Con este análisis ya podemos empezar a pensar un algoritmo viable para hacer el trabajo.</p>
                <p>Lo ideal como se comento antes, seria tener un array que nos sirva de diccionario, al que fácilmente le podamos añadir más palabras clave con su color pertinente. Además de tener un diccionario de palabras también estaría bien tener un diccionario de delimitadores, ya que en este caso lo mas fácil va a ser separar todas las palabras que podamos en strings independientes, y para ello no nos vale separarlas solo si tienen un espacio como delimitador ya que por ejemplo podemos tener la sentencia "<b>2+2</b>", y los números deberían ir en rojo, pero el símbolo sumar debería ir en azul oscuro, y analizar esta cadena podría ser un infierno.</p>
                <p>Bien entonces la propuesta más prometedora es hacer un array de palabras clave con su color correspondiente, y un array que contenga únicamente los delimitadores.</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDarrays", "Arrays para el diccionario y los delimitadores", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "arrays"); ?>
                <p>Creados los arrays con el diccionario y los delimitadores, ahora lo inmediatamente siguiente seria empezar a definir un css con los colores necesarios para pintar el código JavaScript. Además de los colores que vemos declarados en el diccionario, nos hace falta un color para los comentarios que irán en gris, y un color para los valores numéricos que irán en rojo :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDCSS", "CSS con los colores necesarios para el código", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "CSS"); ?>
                <p>Llegados a este punto ahora toca empezar a idear el algoritmo. El primer problema que tenemos es que no queremos buscar palabras en el diccionario y re-emplazarlas si están dentro de un comentario o de una cadena de caracteres. Para evitar esto, lo mejor que se me ocurre es escanear todo el texto introducido una primera vez y separar el código en partes. La idea sería tener un array de cadenas de caracteres que contenga el texto separado según las siguientes normas :</p>
                <ul>
                <li>Los comentarios deben ir en una parte del array sin separar nada de ellos.</li>
                <li>Los strings deben ir en una parte del array sin separar nada de ellos, además hay que diferenciar si el string empieza con una comilla o con comillas dobles.</li>
                <li>Las demás palabras deben ir separadas cuando se encuentre un delimitador.</li>
                <li>Los valores numéricos deben ir separados en una parte del array. Hay que identificar los valores numéricos de forma que tengan un delimitador al principio y un delimitador al final.</li>
                <li>Tanto los strings como los comentarios llevaran puesto el "<b>&lt;span&gt;</b>" al principio para determinar que esa posición del array no debe re-emplazarse nada más.</li>
                </ul>
                <p>Con esto claro en mente pasemos a ver la primera parte de la función PintarJavaScript :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarJavaScript1", "Función PintarJavaScript parte 1", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "PintarJavaScript1"); ?>
                <p>En esta primera parte de la función recorremos todo el array <b>$Texto</b> mirando el <b>$Estado</b> en el que nos encontramos.</p>
                <p>Para entendernos hay varios estados : '', '<b>Comentario</b>', '<b>ComentarioML</b>', '<b>String1</b>', '<b>String2</b>', y '<b>Numero</b>'.</p>
                <p>Si el estado esta vacio es que podemos buscar cualquier carácter sin restricciones para determinar que debemos hacer con él. Por ejemplo si encontramos unas comillas dobles nos indica que empieza un string, por lo que el estado cambiaria a '<b>String2</b>'.</p>
                <p>Si el estado por ejemplo es '<b>String2</b>' sabemos que solo podemos salir de ese estado si encontramos unas comillas dobles, pero como los strings del tipo C son algo quisquillosos tenemos que tener cuidado, ya que podemos encontrarnos por ejemplo esta secuencia <b>\"</b>, que nos estaría indicando que dentro del string hay unas comillas dobles, y ojo porque estas no nos valen para salir del estado.</p>
                <p>Por último hace falta remarcar que cuando salimos de cualquier estado creamos una nueva posición en el array <b>$Palabras</b> con el texto que andábamos analizando, y lo dejamos allí para el post-análisis.</p>
                <p>Veamos el post-análisis :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDPintarJavaScript2", "Función PintarJavaScript parte 2", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "PintarJavaScript2"); ?>
                <p>En esencia en el post-análisis recorremos el array de palabras que creamos anteriormente donde deberíamos tener el código separado por comentarios, strings o palabras. Lo primero que miramos en cada palabra, es que el primer carácter no sea '<' porque si lo fuera estaríamos tocando un comentario o un string.</p>
                <p>Luego recorremos el array <b>$_DiccionarioJavaScript</b> y miramos con la función <a href="http://php.net/manual/es/function.strpos.php" target="_new">strpos</a> si encontramos la palabra del diccionario dentro de nuestro array de palabras del primer análisis. Si la encontramos, nos aseguramos que dicha palabra venga delimitada tanto al principio como al final con uno de los caracteres delimitadores. Y finalmente en el caso de que dicha palabra venga bien delimitada utilizamos <a href="http://php.net/manual/es/function.str-replace.php" target="_new">str_replace</a> para añadir un span con su color correspondiente.</p>
                <p>Vista la función PintarJavaScript nos queda echar un vistazo varias funciones de apoyo. Empezaremos por _FinString1 y _FinString2 :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDFinString", "Funciones _FinString", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "FinString"); ?>
                <p>Anteriormente os contaba que las cadenas del estilo C son algo quisquillosas y ahora es voy a explicar bien el porqué. Si empezamos una cadena con dobles comillas esta debe terminar con dobles comillas, hasta aquí todo normal, pero que pasa si queremos que dicha cadena de caracteres tenga unas comillas dobles dentro? pues lo más fácil es utilizar la siguiente secuencia \" que indicara al navegador que queremos añadir una doble comilla. El carácter \ es bastante peculiar en cadenas del estilo C, ya que se usa principalmente para describir caracteres problemáticos como por ejemplo \t (tabulador), \n (salto de línea), etc... y si lo que queremos introducir precisamente el carácter \ debemos hacerlo mediante dos caracteres \ seguidos, por ejemplo "\\".</p>
                <p>Bien veis la paradoja? si queremos indicar una anti barra al final de un string queda "\\" por lo que si miramos solo el carácter anterior a la doble comilla veremos la anti barra y creeremos que es una secuencia que describe una comilla dentro del string, cuando realmente no es cierto, si no que esa anti barra es la segunda anti barra indicando que queríamos introducir una anti barra en el string.</p>
                <p>Pues esta es la razón de que existan estas dos funciones, y aunque podía haberlas incluido directamente dentro de la función PintarJavaScript, las tengo separadas porque en mi clase devildrey33_PintarCodigo las re-utilizo para varias funciones.</p>
                <p>Por último veamos las funciones _EsNumero y _BuscarDelimitadorJavaScript :</p>
                <?php $Base->PintarCodigo->PintarArchivoPHP("IDEsNumero", "Funciones _EsNumero y _BuscarDelimitadorJavaScript", "../Ejemplos/ColorearCodigoPHP/ColorearCodigoPHP_JavaScript_Ejemplo.php", "EsNumero"); ?>
                <p>No hay mucho que contar sobre estas dos funciones, la primera básicamente mira si el carácter es un numero o no, y la segunda mira si el carácter es el mismo que uno de los caracteres del array <b>$_DelimitadoresJavaScript</b>.</p>
                <p>Y con esto terminamos por hoy, espero que este tutorial os sirva si algún día tenéis la intención de pintar un código JavaScript en vuestra web, o almenos para haceros una idea de como parsear códigos complicados con PHP.</p>


<div class='nota'>Este código ha quedado obsoleto, por favor echa un vistazo a la versión 2 : <a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>.</div>                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>
