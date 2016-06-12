<?php 
    include("../Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="Webs de contenido dinámico">
    <meta name="keywords" content="Web dinámica, Webs dinámicas, window.history.pushState, history.pushState, modificar url, modificar url javascript">';

    $Base->InicioPlantilla(basename(__FILE__), "Webs de contenido dinámico", $META);

    $Base->InicioBlog(basename(__FILE__), "Webs de contenido dinámico");
?>	


    
    <p>Desde que se empezó a usar Ajax se podría decir que empezaron a existir webs con contenido dinámico, al principio se utilizaba para cosas simples, y estaba pensado mas bien como una herramienta para consultar pequeñas cantidades de datos. Con el paso de los años Ajax se ha vuelto prácticamente imprescindible en cualquier proyecto web medio/grande.</p>
    <p>Por poner un ejemplo claro, Facebook carga prácticamente todo su contenido mediante Ajax, seguro que todos conocéis su scroll infinito.</p>
    <p>También se pueden encontrar paginas tipo blog/revistas que hacen uso del scroll infinito, y que además son capaces de modificar su URL sin tener que re-cargar toda la web.</p>
    <p>A mí personalmente el tema del scroll infinito no me hace mucha gracia, pero sí que me gusta mucho la idea de tener una web eficiente, y que sea capaz de entregar los datos justos al usuario, además de darle una buena experiencia en la navegación.</p>    
    <p>En este tutorial os voy mostrar cómo hacer una web muy simple con un menú estático, que pueda cargar todos los documentos de forma dinámica en un marco. Antes de nada me gustaría que vieras un poco como he dividido los datos de mi web, ya que tenéis que tener muy claro que partes son esenciales y que partes no. Tal y como veis mi web ahora mismo, se podría dividir en 2 partes :</p>
    <ul>
        <li>La <b>plantilla</b> que contiene la maquetación, los menús, las cabeceras css y js, las fuentes, etc...</li>
        <li>El <b>documento</b> que contiene la información que ha solicitado el usuario.</li>
    </ul>    
    <p>En una web normal (estática), el servidor nos mandará cada vez que abramos un enlace tanto la plantilla como el documento. Pero que es lo que pasa si navegamos entre 50 documentos de la misma web? pues que el servidor nos manda 50 veces la plantilla junto al documento, y considerando que la plantilla es siempre la misma, aquí estamos derrochando el ancho de banda tanto del servidor como del usuario.</p>
    <p>En una web dinámica se evita ese derroche de ancho de banda, ya que si el usuario entra en 50 urls durante la misma sesión, recibirá la plantilla en la primera petición y luego recibirá los 50 documentos. Por lo que nos ahorramos los datos de un total de 49 plantillas respecto al modelo estático.</p>
    <p>Lo que vamos a hacer en este tutorial será crear una web muy sencilla con un menú que nos dejara navegar por 6 documentos. Lo que nos permitirá ver cómo trabajar con Ajax y como debemos gestionar el historial de documentos de la pestaña (para modificar la url).</p>
    
    <hr />
    <h2>Creación de la plantilla</h2>
    <p>Lo primero que necesitamos es la plantilla básica para nuestros documentos. La idea principal es que la plantilla se mande una sola vez al principio, y que luego si el usuario carga mas documentos solo reciba los datos de ellos pero sin mandar otra vez la plantilla.</p>
    <p>La forma mas fácil de hacernos una plantilla es crear un php con una función <linea cid='ID1' l='2'>IniciarPlantilla</linea>, y una función <linea cid='ID2' l='2'>TerminarPlantilla</linea>, que utilizaremos al principio y al final de nuestros documentos respectivamente.</p>

    <?php $Base->PintarCodigo->PintarArchivoPHP("ID1", "IniciarPlantilla", "../Codigo/webs-dinamicas/Plantilla.php", "IniciarPlantilla"); ?>        
    
    <p>La función <linea cid='ID1' l='2'>IniciarPlantilla</linea> imprime toda la <linea cid='ID1' l='5,6,7,8,9,10,11,12,13,15,17,20,21,22,23,24,25,26,27,28,30'>cabecera del documento HTML y el menú</linea>, siempre y cuando la variable <linea cid='ID1' l='4'>$_POST["SinPlantilla"]</linea> no exista. La idea es que el usuario la primera vez que entra, lo hace mediante un GET y por lo tanto no puede existir la variable <code>SinPlantilla</code> en el POST. Luego en el código de la web vamos a tener que re-direccionar todos los enlaces que apunten a nuestro servidor para hacer un POST con la variable SinPLantilla, para que de esta forma nos devuelva solo el documento sin la plantilla.</p>
    <p>Otra cosa a remarcar es la <linea cid='ID1' l='33'>línea 33</linea>, que siempre imprime un div con la ID <linea cid='ID1' l='33'>InformacionDinamica</linea>, este div lo vamos a utilizar para pasar variables de nuestro PHP al código JavaScript. En principio mandaremos el título y el nombre del archivo, pero se pueden añadir tantas variables como necesitéis.</p>
    <div class='nota'>Para pasar variables de PHP a JavaScript no hay que hacerlo necesariamente así, pero para este ejemplo me ha parecido la forma mas sencilla.</div>
    <br />
    <?php $Base->PintarCodigo->PintarArchivoPHP("ID2", "TerminarPlantilla", "../Codigo/webs-dinamicas/Plantilla.php", "TerminarPlantilla"); ?>    
    <p>La función <linea cid='ID2' l='2'>TerminarPlantilla</linea> mira si la variable <linea cid='ID2' l='3'>$_POST["SinPlantilla"]</linea> no existe, y en ese caso <linea cid='ID2' l='4,5,6'>imprime el código HTML</linea> para cerrar el documento correctamente.</p>
    <div class='nota'>Lo que nos tiene que quedar bien claro, es que cuando carguemos un documento de forma dinámica, lo tenemos que cargar con un post que contenga el parámetro <i>SinPlantilla</i>. Si no especificamos el parámetro SinPlantilla al cargar la web el servidor nos mandara toda la plantilla entera y el documento.</div>
    <br />
    
    <hr />
    <h2>JavaScript</h2>
    <p>Ahora que ya tenemos la plantilla, vamos a por el código en java script. Necesitaremos lo siguiente :</p>    
    <ul>
        <li>Hacer una función para cargar enlaces dinámicos en el div #MarcoDinamico</li>
        <li>Controlar el historial de la pestaña, detectando cuando el usuario pulsa hacia atrás o hacia adelante.</li>
        <li>Re-direccionar todas las etiquetas <code>a href</code> a la función para cargar enlaces dinámicos.</li>
    </ul>
    <div class='nota'>Por comodidad se utilizara jQuery para casi todo.</div>
    <br />
    
    <hr />    
    <h2>Función para cargar enlaces dinámicos</h2>
    <p>Antes de nada debo remarcar que al cargar dinámicamente el documento, el navegador seguirá con la primera URL, y vamos a tener que decirle la nueva URL manualmente. Para ello vamos a tener que toquetear el historial de la pestaña.</p>
    <p>Para tener acceso al historial de la pestaña tenemos el objeto <a href='https://developer.mozilla.org/es/docs/Web/API/Window/history' target='_blank'>window.history</a>, del cual solo vamos a utilizar la función <a href='https://developer.mozilla.org/en-US/docs/Web/API/History/pushState' target='_blank'>pushState</a>. Echad un vistazo a la función <linea cid='ID3' l='2'>CargarURL</linea> :</p>
    <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID3", "CargarURL", "../Codigo/webs-dinamicas/TutoWebDinamica.js", "CargarURL"); ?>    
    <p>Para empezar en la <linea cid='ID3' l='6'>línea 6</linea> asigno el atributo <i>cargando</i> a la etiqueta <code>body</code>. De esta forma se iniciara una pequeña animación.</p>
    <p>En la <linea cid='ID3' l='9'>línea 9</linea> se utiliza la funcion <a href='http://api.jquery.com/jquery.post/' target="_blank">post</a> para mandar un post con el parámetro <i>SinPlantilla</i>, lo que debería devolvernos si todo va bien el documento sin la plantilla.</p>
    <p>Lo mas destacable de la función es la <linea cId='ID3' l='15'>línea 15</linea> donde llamamos a <linea cId='ID3' l='15'>window.history.pushState</linea>, dicha función nos permite insertar una URL nueva en la cola del historial. Al ser la primera de la cola, es la que se mostrará en el navegador.</p>
    <div class='nota'>En la MDN nos dice que en Firefox no se usa el segundo parámetro de la función pushState (title), pero que no se use en Firefox no quiere decir que otros navegadores no lo usen, y de paso decir que el título debe ser el titulo del anterior documento (ya que en la MDN ni se menciona).</div>
    <br />
    
    <hr />
    <h2>CallBack del historial</h2>
    <p>Para poder controlar cuando el usuario va hacia atrás o hacia adelante en el historial, y de esta forma pasarle solo el documento sin la plantilla, debemos sobre-escribir el callback del historial.</p>
    <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID4", "CALLBACK Historial", "../Codigo/webs-dinamicas/TutoWebDinamica.js", "CALLBACK"); ?>    
    <p>En esencia es prácticamente el mismo código de la función <linea cid='ID3' l='2'>CargarURL</linea> con la diferencia de que no llamamos a <code>window.history.pushState</code>, ya que estamos navegando por el historial y no es una nueva entrada.</p>
    <p>Hay que remarcar que en la <linea cid='ID4' l='4'>línea 4</linea> miramos si ya hay una petición ajax en proceso, y de ser ese el caso la abortamos. Si por ejemplo navegais por 20 paginas de la misma web, y luego pulsais muy rápido la flecha atrás del historial, se abren 20 periciones Ajax y nos interesa abortarlas todas excepto la última.</p>
    <p>Sobretodo hay que asignar a la variable <linea cid='ID4' l='15,23'>'PeticionAjax' el valor '0'</linea> una vez terminada la petición, tal y como podéis ver en la <linea cid='ID4' l='15'>línea 15</linea> y en la <linea cid='ID4' l='23'>línea 23</linea>.</p>
    <div class='nota'>El navegador actualiza la URL automáticamente antes de pasar por nuestro evento 'popstate', por lo que <code>window.location.href</code> contiene la nueva URL.</div>
    <br />
    
    <hr />
    <h2>Re-direccionar etiquetas a href</h2>    
    <p>Necesitamos capturar todos los eventos OnClick de los enlaces de la página, para evitar que el navegador salte a dicho enlace, y para que podamos cargarlo utilizando la función <code>CargarURL</code>.</p>
    <p>Es muy importante mantener las etiquetas <i>a</i> para los buscadores, y a la vez poder utilizarlas para cargar contenido dinámico de nuestra web.</p>
    <p>Vamos a crear una función para enlazar los eventos OnClick, y ya de paso también para actualizar el título de la página y el botón del menú seleccionado.</p>
    <?php $Base->PintarCodigo->PintarArchivoJavaScript("ID5", "ActualizarContenido", "../Codigo/webs-dinamicas/TutoWebDinamica.js", "ActualizarContenido"); ?>    
    <p>En la  <linea cId='ID5' l='4'>línea 4</linea> el selector apunta a todas las etiquetas <i>a</i> que no tengan el atributo <code>target</code> establecido. Lo que tenemos que tener en cuenta, es que los enlaces que apunten a ventanas/pestañas nuevas deberán ser aquellos que apunten fuera de nuestro servidor. Para los enlaces que apunten a nuestro servidor usaremos la etiqueta <i>a</i> sin el atributo <code>target</code></p>
    <div class='nota'>Fijaros que se utiliza la función <a href='http://api.jquery.com/off/' target='_blank'>off</a> antes de la función <a href='http://api.jquery.com/on/' target='_blank'>on</a>, para eliminar cualquier evento anterior que hubiera asignado. Esto es necesario, ya que el menú de la plantilla también contiene enlaces, y este nunca desapatambienrece. </div>
    <p>En la <linea cId='ID5' l='16'>línea 16</linea> asignamos el titulo para el documento desde el atributo archivo del <code>div</code> <linea cid='ID1' l='32'>#InformacionDinamica</linea>, que si os acordáis este div se ha creado única y exclusivamente para pasar datos desde PHP a JavaScript. En la <linea cId='ID5' l='18'>línea 18</linea> asignamos el nombre del documento al atributo archivo del <linea cid='ID1' l='20'><code>ul</code> que contiene el menú</linea>, de esta forma el botón quedara marcado en verde.</p>
    <p>Por ultimo en la <linea cid='ID5' l=20>línea 20</linea> elimino el atributo <i>cargando</i> de la etiqueta <code>body</code>, lo que finalizará la animación de la carga. La animación a decir verdad es una chorrada, y prácticamente es imperceptible ya que el ejemplo tiene muy poco contenido, lo que hace que el tiempo de carga sea mínimo. De todas formas si os habéis fijado en la animación de carga de devildrey33, os puedo decir que funciona de un modo muy similar.</p>

    <hr />
    <p>Y esto es todo por hoy, como siempre podéis ver el ejemplo o descargarlo. Un saludo!</p>
    <div class='Centrado'>
        <a href='../Codigo/webs-dinamicas/Azul.php' target='_blank' class='Boton-Normal'>Ver ejemplo</a> 
        <a href='../Descargas/webs-dinamicas.zip' target='_blank' class='Boton-Normal'>Descargar ejemplo</a>
    </div>
    
    
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>