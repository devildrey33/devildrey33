<?php 
    include("../Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="Efectos de resaltado para botones en CSS">'.Intro().
            '<meta name="keywords" content="Efectos hover, resaltar botón css, botón hover, botones hover, transición hover, estados botón css, botones css, botón css, transición :active, transición :hover, transición :focus, transformación botón css">';

    $Titulo = "Algunos efectos para botones en CSS";
    
    $Base->InicioPlantilla(basename(__FILE__), $Titulo, $META);

    $Base->InicioBlog(basename(__FILE__), $Titulo, TRUE);
?>	
    <script>$Base.CargarCSS("Blog_algunos-efectos-para-botones-en-css.css");</script>

    
    <p>La intención de este documento es mostrar la forma de exprimir al máximo una simple etiqueta <code>&lt;button&gt;</code> añadiendo transiciones y transformaciones para cada uno de sus estados.</p>
    <p>Lo que mas claro nos debe quedar a la hora de trabajar con botones son sus estados. En esencia una etiqueta <code>&lt;button&gt;</code> puede tener los siguientes estados :</p>
    <ul>
        <li><code><a href='/Doc/CSS/Selectores/:hover'>:hover</a></code>  (al pasar el mouse por encima)</li>
        <li><code><a href='/Doc/CSS/Selectores/:active'>:active</a></code> (al hacer click con el mouse)</li>
        <li><code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code>  (al obtener el foco del teclado)</li>
    </ul>
    <p>Para ponernos en la situación, imaginaros que pasa al hacer click encima de un botón. Para empezar el evento <code><a href='/Doc/CSS/Selectores/:hover'>:hover</a></code> ya ha saltado antes de hacer el click por haber entrado dentro del área del botón. A parte al hacer el click se manda el evento <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code>, y además si el foco actual no es el botón en el que se hace el click, se recibe el evento <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code> por que ahora lo será.</p>
    <p>Con esta breve explicación lo que os quiero hacer ver, es que hay que pensar muy bien como distribuir las transiciones para cada evento, ya que si se activan las tres a la vez se pueden acabar pisando entre ellas. (en lo personal me pasa muchisimo utilizando transformaciones)</p>
    <p>Para evitar que las transiciones se pisen la idea es distribuir el control en 3 capas :</p>
    
    <ul id="Capas">
        <li class="Capa1">La <b>capa principal</b> es la etiqueta <code>&lt;button&gt;</code>, la cual contiene el texto y el borde del botón. Se utilizará para las transiciones de los eventos <code><a href='/Doc/CSS/Selectores/:active'>active</a></code> y <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code>.</li>
        <li class="Capa2">Detrás de la capa principal utilizaremos el pseudo elemento <code><a href='/Doc/CSS/Selectores/::before'>::before</a></code> para añadir una segunda capa destinada a mostrar las transiciones del evento <code><a href='/Doc/CSS/Selectores/:hover'>:hover</a></code>. Esta capa la identificaremos en este documento como la <b>capa animación</b>.</li>
        <li class="Capa3">Por ultimo detrás de la capa <code><a href='/Doc/CSS/Selectores/::before'>::before</a></code> crearemos con el pseudo elemento <code><a href='/Doc/CSS/Selectores/::after'>::after</a></code> una capa la cual tiene la finalidad de mostrar el fondo del botón (aunque si es necesario se puede llegar a utilizar para otra transición). Esta capa la identificaremos por <b>capa fondo</b>.</li>        
        <li class="Capas_Vista">
            <div>&lt;button&gt;</div>
            <div>::before</div>
            <div>::after</div>        
        </li>
    </ul>
    
    <div class="nota">Aunque los ejemplos funcionan perfectamente tanto en Firefox como en Explorer 11, recomiendo visualizar este documento con <b>Google Chrome</b> para obtener una mejor experiencia. Ya que en IE hay animaciones del documento que no funcionan, y en firefox el render del CSS en 3D no es de lo mejor que he visto...</div>
    <hr />
    
    
    
    <h2>Definiendo las capas</h2>
    <p>He creado varias transiciones para el hover en este documento, por lo que me ha resultado mas fácil crearme una base para los botones con los parámetros por defecto, para luego ir adaptando-los a cada transición.</p>
    <p>El primer paso consistirá en crear un marco con el borde negro, fondo transparente, y el texto de color blanco, al que definiremos sus tres estados por defecto (:hover, :focus, :active).</p>
    <?php $Base->PintarCodigo->PintarArchivoCSS("button", "Cuerpo estándar para el botón (Capa principal)", "../Ejemplos/Transition/Botones.html", "button"); ?>
    <ul>
        <li><linea cid="button" l="2">Línea 2</linea> utilizo el selector <code>[class^='Boton-']</code> para buscar los elementos en el que el principio del nombre de la clase sea 'Boton-'.<div class='nota'>La verdad es que podría haber utilizado el selector <code>button</code> sin más pero por una parte quería optimizar al máximo el tamaño del código, y por otra así no entra en conflicto con los botones de mi web.</div></li>
    <li><linea cid="button" l="8">Línea 8</linea> Esta transición se realiza en la capa principal para los eventos <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code> y <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code>. Hay que remarcar que el evento <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code> hace una transición con una transformación, con lo cual no podremos realizar otras transiciones con una transformación <b>en esta capa</b>.</li>
        <li><linea cid="button" l="14">Línea 14</linea> El <code><a href='/Doc/CSS/Propiedades/overflow' cid='button' l='14'>overflow</a></code> es muy importante, ya que la capa <code><a href='/Doc/CSS/Selectores/::before'>::before</a></code> (capa animación) puede quedar fuera de los límites del botón. </li>
        <li><linea cid="button" l="20,21,22,23">Líneas 20, 21, 22, 23</linea> Cuando el botón tiene el foco creo una sombra para el botón utilizando la propiedad <code><a href='/Doc/CSS/Propiedades/box-shadow' cid='button' l='22'>box-shadow</a></code>. También elimino el <code><a href='/Doc/CSS/Propiedades/outline' cid='button' l='21'>outline</a></code> por defecto que tiene. </li>
        <li><linea cid="button" l="25,26,27,28">Líneas 25, 26, 27, 28</linea> Cuando se está pulsando el botón movemos la coordenada Z utilizando la propiedad <code><a href='/Doc/CSS/Propiedades/transform' cid='button' l='26'>transform</a></code> (para simular que el botón se aleja), y cambio el color del texto utilizando la propiedad <code><a href='/Doc/CSS/Propiedades/color' cid='button' l='27'>color</a></code>. </li>
        <li><linea cid="button" l="30">Línea 30</linea> Modifico el color del borde en el <code><a href='/Doc/CSS/Selectores/:hover' cid='button' l='30'>:hover</a></code> utilizando la propiedad <code><a href='/Doc/CSS/Propiedades/border' cid='button' l='30'>border</a></code>. </li>
    </ul>
    <p>Para terminar con las capas por defecto, vamos a crear las capas animación y fondo (::before, ::after)</p>
    <?php $Base->PintarCodigo->PintarArchivoCSS("button2", "Cuerpos estándar para los pseudo-elementos ::before (Capa animación) y ::after (Capa fondo)", "../Ejemplos/Transition/Botones.html", "button2"); ?>
    <p>Lo más importante de este fragmento de código son los <code><a href='/Doc/CSS/Propiedades/z-index' cid='button2' l='13,17'>z-index</a></code> para colocar cada capa en su sitio, y la propiedad <code><a href='/Doc/CSS/Propiedades/transition' cid='button2' l='9'>transition</a></code> por defecto a 400ms para TODAS las propiedades.</p>    
    <p>A partir de aquí ya tenemos un botón básico con una transición en el <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code>, y una transición en el <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code>. Mantén pulsado el mouse sobre el botón, y luego haz click fuera de él para ver las transiciones de los eventos <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code> y <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code>.</p>
    <div class='Centrado'>
            <button class='Boton-prueba'>Púlsame!</button>
    </div>
    <p>Ahora viene la parte divertida donde vamos a crear varios efectos hover partiendo de esta base.</p>
    <hr />
    
    
    
    <h2>Efecto box-shadow</h2>
    <p>El efecto <code><a href='/Doc/CSS/Propiedades/box-shadow'>box-shadow</a></code> consiste en crear una sombra por dentro del botón hasta ocupar el 100% de su área. El primero empezará desde las puntas y terminara dentro, y el segundo empezara desde dentro para terminar en las puntas.</p>
    <p>Echad un vistazo al concepto : </p>
    <ul id="Capas2">
        <li class="Capa1">La primera capa contiene el borde y el texto. Ademas sigue conservando las transiciones en los eventos <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code> y <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code>.</li>
        <li class="Capa2">La segunda capa utiliza una transición con la propiedad <code><a href='/Doc/CSS/Propiedades/box-shadow'>box-shadow</a></code> para cambiar el color del fondo a rojo.</li>
        <li class="Capa3">La última capa se utiliza para mostrar el fondo gris oscuro.</li>        
        <li class="Capas_Vista">
            <div>box-shadow</div>
            <div></div>
            <div></div>        
        </li>
    </ul>    
    <?php $Base->PintarCodigo->PintarArchivoCSS("boxshadow", "Clases Boton-BoxShadow", "../Ejemplos/Transition/Botones.html", "boxshadow"); ?>
    <p>La cosa es muy simple asignamos el <linea cid='boxshadow' l='2,7'>tamaño normal</linea> y el <linea cid='boxshadow' l='3,4,8,9'>tamaño del estado hover</linea> de la sombra para generar la transición.</p>
    <div class='nota'>Para invertir el efecto en la clase Boton-BoxShadow2 he optado por la solución mas fácil, y se podría decir que hecho trampa, ya que <linea cid='boxshadow' l='10'>el fondo en este caso ya no es gris, si no rojo</linea>, y la sombra <linea cid='boxshadow' l='7'>empieza con el 100%</linea> del área <linea cid='boxshadow' l='8,9'>para terminar al 0%</linea> en el evento :hover.</div>
    <div class='Centrado'>
        <button class='Boton-BoxShadow1'>Boton-BoxShadow1</button>
        <button class='Boton-BoxShadow2'>Boton-BoxShadow2</button>
        <button class='Boton-BoxShadow3'>Test sin el selector <code>:active::before</code></button>
    </div>
    <div class='nota'>
    <div>Esto es mas bien una manía por mi parte, pero no se si os habéis preguntado ¿por qué en el selector del <linea cid='boxshadow' l='3,8'><code>.Boton-BoxShadow:hover::before</code></linea> también incluyo el <linea cid='boxshadow' l='4,9'><code>.Boton-BoxShadow:active::before</code></linea>? y os voy a responder con otra pregunta, ¿que pasa si mantenemos pulsado un botón, y sin soltar el botón nos movemos fuera de él? Probad en un Box-Shadow, y luego en el Test sin el selector.</div>
    <br />
    <div>Ahora haced click una vez mas en el botón 'Test sin el selector ...', <b>una vez soltado el botón del mouse</b>, moved el mouse fuera del área del bóton, y presionad la tecla 'espacio' durante 3 segundos, si lo habéis hecho correctamente, no habreis visto el efecto del hover al pulsar el espacio.</div>
    <br />
    <div>La solución a estas dos situcaciones, es tratar el selector <code>:active</code> del mismo modo que tratamos el selector <code>:hover</code>.</div>
</div>
    <hr />
    
    
    
    <h2>Efecto LinealGradient</h2>
    <p>Antes de nada vamos a ver gráficamente como funciona esta transición. En el siguiente concepto podemos ver que la capa animación es mas ancha de lo normal y se desplaza de izquierda a derecha.</p>
<!--    <p class='notamental'>¿si una imagen vale mas que mil palabras... cuantas palabras vale una ilustración animada :) ??</p> -->
    <ul id="Capas5">
        <li class="Capas_Vista">
            <div>Linear-gradient</div>
            <div></div>
            <div></div>        
        </li>
    </ul>
    <p>La idea es hacer un degradado un 400% mas ancho que el botón, que en una punta sea rojo yu en la otra transparente. Luego solo hay que desplazarlo lateralmente.</p>
    <div class='nota'>Un 400% puede parecer exagerado, de hecho mis cálculos iniciales eran para un 300% aproximadamente <b>PERO</b> no tuve en cuenta el ángulo de 45 grados a la hora de calcular el degradado, y al probar con algunos botones de 20x20 pixeles en mi web, me ha hecho falta hasta un 400% (con un 350% aún se veía una punta roja). </div>
    <?php $Base->PintarCodigo->PintarArchivoCSS("lineargradient", "Clases Boton-LinearGradient1 y Boton-LinearGradient2", "../Ejemplos/Transition/Botones.html", "lineargradient"); ?>
    <p>En realidad el código no tiene mucha complicación, como ya he mencionado antes asignamos un ancho del 400% con la propiedad <code><a href='/Doc/CSS/Propiedades/width' cid='lineargradient' l='2'>width</a></code>, creamos unos degradados con la propiedad <code><a href='/Doc/CSS/Propiedades/background-image' cid='lineargradient' l='4,8'>background-image</a></code> y la función <code><a href='/Doc/CSS/Degradados' cid='lineargradient' l='4,8'>linear-gradient</a></code>, y los desplazamos desde su <linea cid='lineargradient' l='5,9'>posición inicial</linea> hasta su <linea cid='lineargradient' l='11,12'>posición final</linea> con la porpiedad <code><a href='/Doc/CSS/Propiedades/left' cid='lineargradient' l='5,9,11,12'>left</a></code>.</p>
    <div class='Centrado'>
        <button class='Boton-LinearGradient1'>Boton-LinearGradient1</button>
        <button class='Boton-LinearGradient2'>Boton-LinearGradient2</button>
    </div>
    <hr />
    
    
    
    <h2>Efecto LinearGradient 3</h2>
    <p>Este efecto viene a ser los efectos LinearGradient1 y LinearGradient2 a la vez. Para construir este efecto, esta vez vamos a utilizar una transición tanto en la capa ::before como en la capa ::after. Echa un vistazo al concepto para este efecto :</p>
    <ul id="Capas6">
        <li class="Capas_Vista">
            <div>Linear-gradient3</div>
            <div></div>
            <div></div>        
        </li>
    </ul>
    <?php $Base->PintarCodigo->PintarArchivoCSS("lineargradient3", "Clases Boton-LinearGradient3", "../Ejemplos/Transition/Botones.html", "lineargradient3"); ?>
    <p>La capa <code><a href='/Doc/CSS/Selectores/::before' cid='lineargradient3' l='4'>::before</a></code> tiene un degradado de rojo a transparente, y la capa <code><a href='/Doc/CSS/Selectores/::after' cid='lineargradient3' l='8'>::after</a></code> tiene un degradado de gris a rojo. De esta forma aprovechamos la capa del fondo para hacer una segunda transición.</p>    
    <div class="Centrado">
        <button class='Boton-LinearGradient3'>Boton-LinealGradient3</button>
    </div>
    <hr />
    
    
    
    <h2>Efecto 3D</h2>
    <p>Los efectos 3d consisten en rotar la capa <code><a href='/Doc/CSS/Selectores/::before'>::before</a></code> ajustando el origen de la transformación a un lado del botón. Veamos el concepto :</p>
    <ul id="Capas3">
        <li class="Capa1">La primera capa contiene el borde y el texto. Como siempre sigue conservando las transiciones en los eventos <code><a href='/Doc/CSS/Selectores/:focus'>:focus</a></code> y <code><a href='/Doc/CSS/Selectores/:active'>:active</a></code> que definimos al principio.</li>
        <li class="Capa2">La segunda capa establece la propiedad <code><a href='/Doc/CSS/Propiedades/transform-origin'>transform-origin</a></code> a un lado, y hace una transición con la propiedad <code><a href='/Doc/CSS/Propiedades/transform'>transform</a></code> para rotar la capa de forma que quede a la vista o oculta.</li>
        <li class="Capa3">La última capa se utiliza para mostrar el fondo gris oscuro.</li>        
        <li class="Capas_Vista">
            <div>3D</div>
            <div></div>
            <div></div>        
        </li>
    </ul>        
    <?php $Base->PintarCodigo->PintarArchivoCSS("efecto3d", "Clases Boton-3D", "../Ejemplos/Transition/Botones.html", "efecto3d"); ?>    
    <p>En primer lugar hay que aplicar el <code><a href='/Doc/CSS/Propiedades/transform-origin' cid='efecto3d' l='7,8,13,14'>transform-origin</a></code> para cada lateral, y luego hay que utilizar la propiedad <code><a href='/Doc/CSS/Propiedades/transform' cid='efecto3d' l='7,8,13,14'>transform</a></code> para rotar el eje X (para los laterales superior e inferior), y para rotar el eje Y (para los laterales derecho e izquierdo).</p>
    <p>Por último en el <code><a href='/Doc/CSS/Selectores/:hover' cid='efecto3d' l='10,11,16,17'>:hover</a></code> devolvemos la rotación del eje X/Y a 0.</p>
    
    <div class='Centrado'>
        <button class='Boton-3DLateralI'>Boton-3DLateralI</button>
        <button class='Boton-3DLateralD'>Boton-3DLateralD</button>
        <button class='Boton-3DSuperior'>Boton-3DSuperior</button>
        <button class='Boton-3DInferior'>Boton-3DInferior</button>
    </div>    
    <hr />
    
    
    
    
    <h2>Efecto circular</h2>
    <p>Por ultimo el efecto circular consiste en centrar la capa animación con un tamaño inicial de 0 de altura por 0 de ancho para agrandarla en el <code><a href='/Doc/CSS/Selectores/:hover'>:hover</a></code>.</p>
    <table>
        <tr>
            <td>
    <?php $Base->PintarCodigo->PintarArchivoCSS("circular", "Clase Boton-Circular", "../Ejemplos/Transition/Botones.html", "circular"); ?>
            </td>
            <td>
                <ul id="Capas4">
                    <li class="Capas_Vista">
                        <div>Circular</div>
                        <div></div>
                        <div></div>        
                    </li>
                </ul>    
            </td>
        </tr>
    </table>  
    <p>Lo mas importante de este fragmento de código son las <linea cid='circular' l='7,8,9'>lineas 7, 8, 9</linea> que centran la capa animación sea cual sea su tamaño. Para ello asignamos la propiedades <code><a href='/Doc/CSS/Propiedades/top' cid='circular' l='7'>top</a></code> y <code><a href='/Doc/CSS/Propiedades/top' cid='circular' l='8'>left</a></code> al 50%, para luego utilizar la propiedad <code><a href='/Doc/CSS/Propiedades/transform' cid='circular' l='9'>transform</a></code> con un -50% a las coordenadas X e Y.</p>
    <p>Finalmente en el evento <code><a href='/Doc/CSS/Selectores/:hover' cid='circular' l='11' >:hover</a></code> establecemos las propiedades <code><a href='/Doc/CSS/Propiedades/width' cid='circular' l='11'>width</a></code> y <code><a href='/Doc/CSS/Propiedades/height' cid='circular' l='11'>height</a></code> a 300 pixeles.</p>
    <div class='nota'>Lo malo de este efecto es que para que salga un círculo perfecto debemos asignar el <code><a href='/Doc/CSS/Propiedades/width' cid='circular' l='11'>width</a></code> y el <code><a href='/Doc/CSS/Propiedades/height' cid='circular' l='11'>height</a></code> al mismo tamaño si queremos que el efecto sea circular, y no elíptico. Esto puede ser un problema a partir de ciertos tamaños, ya que contra mas grande sea el circulo final, mas rápida será la transición hasta el punto de que llegue a ser imperceptible.</div>    
    <div class="Centrado">
        <button class='Boton-Circular'>Boton-Circular</button>
    </div>
    <hr />
    <h2>Ejemplo completo</h2>
    <p>Y esto es todo por hoy, como siempre tenéis el ejemplo completo a vuestra disposición para que podáis hacer las pruebas que queráis.</p>
    <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/Transition/Botones.html")); ?>                
    
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>