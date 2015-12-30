<?php 
/*-	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	
	$HEAD = '';

	$Base->InicioPlantilla("devildrey33_ListaDesplegable 2.0 FINAL", $HEAD);*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Lista Desplegable'>
	<meta name='keywords' content='Control JavaScript'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "devildrey33_ListaDesplegable 2.0 FINAL", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "devildrey33_ListaDesplegable 2.0 FINAL");


	function CrearPropiedad($Nombre, $Descripcion, $TituloAlternativo = "") {
		echo "
                    <table class='Fila' onclick='MostrarPropiedad(\"".$Nombre."\");'>
                        <tr>
                            <td class='TD_Propiedad'>".$Nombre."</td>
                            <td class='TD_Descripcion'>".$Descripcion."</td>
                        </tr>
                    </table>
					<div class='Div_Ejemplo' id='Ejemplo_".$Nombre."'><br />";
                if ($TituloAlternativo == "") echo "
                    	<h2><a id='Link_".$Nombre."'></a>Función \"<i>".$Nombre."</i>\"</h2><br />";
                else echo "<h2><a id='Link_".$Nombre."'></a>".$TituloAlternativo."</h2><br />";
	}
	
	function TerminarPropiedad() {
		echo "
					</div>";
	}
?>	

<style type="text/css">			
.TD_Propiedad {
    width:165px;
}

.TD_Descripcion {
    width:825px;
}

.TD_Cabecera {
    background-color:rgb(30, 30, 30);
    color:#FFF;
}

.Div_Separador {
    border-bottom-style:dashed;
    border-bottom-width:1px;
    border-bottom-color:#CCC;
    height:1px;
}

.Fila:hover {
    background-color:#F56E63; 
    color:#fff; 
    cursor:pointer;
}

.Div_Ejemplo {
    margin-left:20px;
    display:none;
    padding-right:4px;
    /*width:0px; */
}

.Pre_Sintaxis {
    display:table; 
    margin-top:0px;
    background-color:rgb(245, 245, 245);			
}

.TD_Sintaxis {
    padding-right:20px;
    vertical-align:top;
    border-bottom-style:dashed;
    border-bottom-width:1px;
    border-bottom-color:#CCC;
    height:1px;	
    background-color:rgb(245, 245, 245);			
}

.TD_SintaxisU {
    padding-right:20px;
    vertical-align:top;
    background-color:rgb(245, 245, 245);			
}

.Explicacion {
    position:absolute;
    border:1px solid rgba(153, 190, 225, 0.9);
    background:rgba(153, 190, 225, 0.6);
    display:hidden;
}

.SelExp {
    position:relative;
    cursor:pointer;
    color:#009;
    font-family:"Courier New";
    font-size: 14px;
    display:table;
    border:1px dotted transparent;
}
.ExpExp {
    position:absolute;
    width:978px;
    padding:0px;
    padding-left:3px;
    padding-right:3px;
    margin-top:15px;
    display:none;
}

#Explicacion1 { /* devildrey33_ListaDesplegable */
    width:144px;
    height:22px;
}
#Explicacion2 { /* devildrey33_ListaDesplegable_Interna */
    width:144px;
    height:132px;
}
#Explicacion3 { /* devildrey33_ListaDesplegable_ItemSeleccionado */
    margin-top:5px;
    margin-left:3px;
    width:110px;
    height:17px;
}
#Explicacion4 { /* devildrey33_ListaDesplegable_Flecha */
    margin-top:8px;
    margin-left:125px;
    width:15px;
    height:8px;
}
#Explicacion5 { /* devildrey33_ListaDesplegable_ListaItems */
    margin-top:24px;
    margin-left:4px;
    width:136px;
    height:104px;
}
#Explicacion6 { /* devildrey33_ListaDesplegable_Item */
    margin-top:28px;
    margin-left:8px;
    width:35px;
    height:16px;
}

.Fila, .TD_Cabecera {
    table-layout:fixed;
    width:100%;
}

</style>

<script type="text/javascript">
function MostrarPropiedad(Nombre) {
    $(".Div_Ejemplo:not(#Ejemplo_" + Nombre + ")").hide("fast");
    var Ejemplo = $("#Ejemplo_" + Nombre);
    if (Ejemplo.css("display") == "block")	Ejemplo.hide("fast", function() {  });
    else					Ejemplo.show("fast", function() { 	// Voy a la posición del link si queda fuera de la vista.
                                                var TopLink = $("#Link_" + Nombre).offset().top;
                                                if (TopLink > $(document).scrollTop() + $(window).height() || TopLink < $(document).scrollTop())
                                                        $("html,body").scrollTop(TopLink - 100); 
                                            });
}

var ExplicacionSeleccionada = 0;

function SeleccionarExplicacion(Num) {
    if (ExplicacionSeleccionada == Num) {
        ExplicacionSeleccionada = 0;
        $("#SelExp" + Num).css({ "background-color" : "rgba(255, 255, 255, 0.9)", "border-color" : "#AAA" });
        return;
    }
    ExplicacionSeleccionada = Num;
    for (var i = 0; i < 7; i++) {
        if (i == Num) {
            $("#Explicacion" + i).show("fast");
            $("#SelExp" + i).css({ "background-color" : "rgba(255, 255, 255, 0.9)", "border-color" : "red" });
//						$("#ExpExp" + i).stop().animate({ "opacity" : "1.0" }, "fast").css({ "z-index" : 100 });
            $("#ExpExp" + i).css({ "display" : "block" });
        }
        else {
            $("#Explicacion" + i).hide("fast");
            $("#SelExp" + i).css({ "background-color" : "transparent", "border-color" : "transparent" });
//						$("#ExpExp" + i).stop().animate({ "opacity" : "0.0" }, "fast").css({ "z-index" : 1 });
            $("#ExpExp" + i).css({ "display" : "none" });
        }
    }
}

function MostrarExplicacion(Num) {
    if (ExplicacionSeleccionada != 0) return;
    for (var i = 0; i < 7; i++) {
        if (i == Num) {
            $("#Explicacion" + i).show("fast");
            $("#SelExp" + i).css({ "background-color" : "rgba(255, 255, 255, 0.9)", "border-color" : "#AAA" });
//						$("#ExpExp" + i).stop().animate({ "opacity" : "1.0" }, "fast").css({ "z-index" : 100 });
            $("#ExpExp" + i).css({ "display" : "block" });
        }
        else {
            $("#Explicacion" + i).hide("fast");
            $("#SelExp" + i).css({ "background-color" : "transparent", "border-color" : "transparent" });
//						$("#ExpExp" + i).stop().animate({ "opacity" : "0.0" }, "fast").css({ "z-index" : 1 });
            $("#ExpExp" + i).css({ "display" : "none" });
        }
    }
}

function IrEstructuracion(Num) {
    $("html,body").animate({ scrollTop : ($("#Estructuraccion").offset().top - 100) }, "fast", function() { ExplicacionSeleccionada=0; SeleccionarExplicacion(Num); });
}

</script>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_devildrey33_ListaDesplegable_2.0.png" alt="devildrey33_ListaDesplegable 2.0 BETA" />
                <p>Hace unos días os presentaba un control llamado 'devildrey33_ComboBox2' en fase beta, pues bien ahora os dejo la versión final, que por cierto he renombrado a 'devildrey33_ListaDesplegable' porque me parece más adecuado y describe mejor al control.</p>
                <p>Entre las mejoras hay que destacar que ahora es compatible incluso con IE6 (y me ha costado bastante conseguir-lo) aunque hay una opción que solo está disponible para IE9 además de para todos los navegadores actuales.</p>
                <p>También he añadido algunas opciones nuevas, ahora se puede especificar un ancho mínimo para el control, se puede especificar si deseamos ocultar la lista una vez seleccionado un nuevo item, y he modificado la creación del control de forma que la lista de items y la función que recibía cuando se cambiaba la selección son ahora opcionales.</p>
                <!-- FIN_INTRODUCCION -->
                
                <h2>Creación del control</h2>
                <p>Lo primero será añadir la cabecera de javascript y el archivo css en el <code>head</code> de nuestro documento web :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<script type="text/javascript" src="./js/devildrey33_ListaDesplegable.js" ></script>
<link rel="stylesheet" href="./css/devildrey33_ListaDesplegable.css" type="text/css" />
-[FIN devildrey33.ID1]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID1", "Cabeceras", basename(__FILE__), "ID1"); 
                ?>
				<p>
                	Luego debemos crear un pequeño script para inicializar el control, preferiblemente en el <code>head</code> de nuestro documento web :<br />
	                <div class='nota'>Para ver una lista completa de las opciones disponibles para este control visita el siguiente enlace : <a onclick="MostrarPropiedad('constructor')">devildrey33_ListaDesplegable::constructor</a>.</div>
                </p>
                <?php 
/* -[INICIO devildrey33.ID2]-
<script type="text/javascript">
    // Array con los items que queremos que se muestren
    var ArrayItems = Array("Item1", "Item2", "Item3", "Item4");
    // Creación del control mediante JavaScript
    ListaDesplegable1 = new devildrey33_ListaDesplegable("MiLista", { "ListaItems" : ArrayItems });
</script>
 -[FIN devildrey33.ID2]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID2", "Inicialización y creación del control", basename(__FILE__), "ID2"); ?>									

				<p>Por último nos quedara crear la etiqueta del control donde queramos dentro del <code>body</code> de nuestra página.</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
<!-- Etiqueta personalizada -->
<devildrey33_ListaDesplegable id="MiLista"></devildrey33_ListaDesplegable>
<!-- Etiqueta div -->
<div class="devildrey33_ListaDesplegable" id="MiLista"></div>
-[FIN devildrey33.ID3]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID3", "Creación de la etiqueta", basename(__FILE__), "ID3"); 
                ?>	
				<br /><br />
                <div class='nota'>Se puede crear con la etiqueta <i>&lt;devildrey33_ListaDesplegable id='IDListaDesplegable'&gt;</i> o con un <i>&lt;div class='devildrey33_ListaDesplegable' id='IDListaDesplegable'&gt;</i> pero <b>solo debes usar una de ellas</b>.</div>
				<br />
                
                
                
                
                
				<br /><a id='Estructuraccion'></a><h2>Estructuración interna del control</h2><br />
                <p>Pasa el mouse por encima de las etiquetas para ver el área que ocupan, y una breve explicación de para que se usa cada una. (Si haces click en la etiqueta se desactivará el efecto hover, y podrás ver mejor las explicaciones.)</p>
                
				<div style="float:left; width:640px">
                	<div class='SelExp' onclick='SeleccionarExplicacion("1")' onmouseover='MostrarExplicacion("1");' id='SelExp1'>&lt;div class='<b style="color:#0000FF">devildrey33_ListaDesplegable</b>'&gt; <span style="color:#000">o</span> &lt;<b>devildrey33_ListaDesplegable</b>&gt;</div>
                	<div class='SelExp' onclick='SeleccionarExplicacion("2")' style="margin-left:20px;" onmouseover='MostrarExplicacion("2");' id='SelExp2'>&lt;div class='<b style="color:#0000FF">devildrey33_ListaDesplegable_Interna</b>'&gt;</div>
                	<div class='SelExp' onclick='SeleccionarExplicacion("3")' style="margin-left:40px;" onmouseover='MostrarExplicacion("3");' id='SelExp3'>&lt;span class='<b style="color:#0000FF">devildrey33_ListaDesplegable_ItemSeleccionado</b>'&gt;</div>
                	<div class='SelExp' onclick='SeleccionarExplicacion("4")' style="margin-left:40px;" onmouseover='MostrarExplicacion("4");' id='SelExp4'>&lt;div id='<b style="color:#0000FF">devildrey33_ListaDesplegable_Flecha_</b><i style="color:#0000FF">IDControl</i>'&gt;</div>
                	<div class='SelExp' onclick='SeleccionarExplicacion("5")' style="margin-left:40px;" onmouseover='MostrarExplicacion("5");' id='SelExp5'>&lt;ul class='<b style="color:#0000FF">devildrey33_ListaDesplegable_ListaItems</b>'&gt;</div>
                	<div class='SelExp' onclick='SeleccionarExplicacion("6")' style="margin-left:60px;" onmouseover='MostrarExplicacion("6");' id='SelExp6'>&lt;li class='<b style="color:#0000FF">devildrey33_ListaDesplegable_Item</b>'&gt;</div>
                	<div class='SelExp' onclick='SeleccionarExplicacion("7")' style="margin-left:60px; cursor:default">.......</div>
                </div>

                <div style="float:left;">
                	<div class='Explicacion' id='Explicacion1'></div>
                	<div class='Explicacion' id='Explicacion2'></div>
                	<div class='Explicacion' id='Explicacion3'></div>
                	<div class='Explicacion' id='Explicacion4'></div>
                	<div class='Explicacion' id='Explicacion5'></div>
                	<div class='Explicacion' id='Explicacion6'></div>
                    <img src="/Graficos/DiagramaListaDesplegable.png" style='border:none' alt="ListaDesplegable de ejemplo">                
                </div>
                
                <div style='clear:both; display:block; height:222px;'>
                	<postit class='ExpExp' id='ExpExp1'>
                    	<code style='color:#009'>&lt;div class='<b style="color:#0000FF">devildrey33_ListaDesplegable</b>'&gt; <span style="color:#000">o</span> &lt;<b>devildrey33_ListaDesplegable</b>&gt;</code><br /><br />
                    	Esta es la etiqueta principal que contiene todo el control, pero realmente solo sirve para ocupar el espacio necesario dentro del documento web.<br /><br />
                        A la hora de modificar estilos para el control, no debes tocar ningún estilo de esta etiqueta, ya que está pensada para ocupar lo mismo que <code>&lt;div class='devildrey33_ListaDesplegable_Interna'&gt;</code> que es la que realmente tiene los estilos para el control (colores, fuente, márgenes, etc..)<br /><br />
                        Puedes acceder a esta etiqueta mediante javascript desde la siguiente variable : <code>MiLista.<b><a onclick="MostrarPropiedad('EtiquetaListaDesplegable')">EtiquetaListaDesplegable</a></b></code>.<br /> <br />
                        <b>NOTA</b> : Si quieres que el control sea compatible con IE8, 7 y 6 debes crearlo con un <code>div</code>, y no con la etiqueta <code>devildrey33_ListaDesplegable</code>.
                    </postit>
                	<postit class='ExpExp' id='ExpExp2'>
	                    <code style='color:#009'>&lt;div class='<b style="color:#0000FF">devildrey33_ListaDesplegable_Interna</b>'&gt;</code><br /><br />
                        Esta etiqueta tiene la posición absoluta de forma que el navegador no computa su tamaño para adaptar las demás etiquetas de la página web. Por eso cuando se muestra la lista no se baja el contenido de la pagina web y queda por encima de todo, tapando lo que pueda tener debajo.<br /><br />
                        Si quieres modificar el color del fondo, el borde, o el color del texto <b>sin resaltar</b> del control debes retocar esta clase en el CSS.<br /><br />
                        <b>NOTA </b> : No debes modificar la propiedad <code>overflow</code> o de lo contrario el control dejaría de mostrarse y ocultarse correctamente.<br /><br />
                        Puedes acceder a esta etiqueta mediante javascript desde la siguiente variable : <code>MiLista.<b><a onclick="MostrarPropiedad('ObjetoListaDesplegable')">ObjetoListaDesplegable</a></b></code>.
                    </postit>
                	<postit class='ExpExp' id='ExpExp3'>
	                    <code style='color:#009'>&lt;span class='<b style="color:#0000FF">devildrey33_ListaDesplegable_ItemSeleccionado</b>'&gt;</code><br /><br />
                    	Esta etiqueta contiene únicamente el texto del item seleccionado (puede ser código html por lo que se pueden añadir incluso imágenes con texto).<br /><br />
                        Si quieres puedes modificar el color del texto para esta etiqueta desde el CSS, pero por defecto obtiene su color del texto de la clase <code>devildrey33_ListaDesplegable_Interna</code>.<br /><br />
                        Puedes acceder a esta etiqueta mediante javascript desde la siguiente variable : <code>MiLista.<b><a onclick="MostrarPropiedad('ObjetoItemSeleccionado')">ObjetoItemSeleccionado</a></b></code>.<br /><br />
                        Para obtener el texto seleccionado mediante javascript utiliza la siguiente función : <code>MiLista.<b><a onclick="MostrarPropiedad('Texto')">Texto()</a></b></code>.
                    </postit>
                	<postit class='ExpExp' id='ExpExp4'>
	                    <code style='color:#009'>&lt;div id='<b style="color:#0000FF">devildrey33_ListaDesplegable_Flecha_</b><i style="color:#0000FF">IDControl</i>'&gt;</code><br /><br />
                    	Esta etiqueta contiene únicamente la imagen de la flecha hacia arriba o hacia abajo según configures la opción "<i>DesplegarListaHaciaArriba</i>", que por defecto se desplegará hacia abajo.<br /><br />
                    	Si quieres puedes substituir la imagen desde el CSS, lo único que debes tener en cuenta es que no debe ser más alta que el ItemSeleccionado, de esa forma se centrará verticalmente.<br /><br />
                        <b>NOTA</b> : En IE 8, 7, 6 no aparecerá nunca esta etiqueta ya que estos navegadores no soportan correctamente la propiedad <code>float</code> del CSS. Además IE6 no soporta imágenes con fondos transparentes.
                    </postit>
                	<postit class='ExpExp' id='ExpExp5'>
                    	<code style='color:#009'>&lt;ul class='<b style="color:#0000FF">devildrey33_ListaDesplegable_ListaItems</b>'&gt;</code><br /><br />
                        Esta etiqueta contiene la lista de items oculta que se muestra al pasar el mouse por encima del control. Por defecto suele estar después de las etiquetas del ItemSeleccionado y de la Flecha, pero si configuras la opcion "<i>DesplegarListaHaciaArriba</i>" como true, se colocara antes de estas etiquetas. Por defecto se mostrara el ItemSeleccionado en la lista si no especificas la opción "<i>OcultarItemSeleccionado</i>" a true.<br /><br />
                        <b>NOTA</b> : no es recomendable tocar los estilos de <code>.devildrey33_ListaDesplegable_ListaItems</code>, ya que están pensados para que no se descuadre el control tanto si se despliega hacia abajo como hacia arriba.<br /><br />
                        Puedes acceder a esta etiqueta mediante javascript desde la siguiente variable : <code>MiLista.<b><a onclick="MostrarPropiedad('ObjetoListaItems')">ObjetoListaItems</a></b></code>.
                    </postit>
                	<postit class='ExpExp' id='ExpExp6'>
                    	<code style='color:#009'>&lt;li class='<b style="color:#0000FF">devildrey33_ListaDesplegable_Item</b>'&gt;</code><br /><br />
                        Estas etiquetas contienen el texto de cada item dentro de la lista (puede ser código html por lo que se pueden añadir incluso imágenes con texto). Al hacer click en una de ellas quedara marcada como el ItemSeleccionado.<br /><br />
                        Si quieres puedes modificar el color del texto tanto normal como resaltado, pero ojo porque en IE 6 se usa la clase <code>devildrey33_ListaDesplegable_ItemResaltado</code> como re-emplazo a <code>devildrey33_ListaDesplegable_Item:hover</code> ya que IE6 no soporta la propiedad hover si no es en etiquetas <code>&lt;a&gt;</code>.<br /><br />
                        Para acceder al texto de un item desde javascript puedes usar la siguiente función : <code>MiLista.<b><a onclick="MostrarPropiedad('Texto')">Texto</b>([opcional] <i>Posición</i>, [opcional] <i>NuevoTexto</i>)</a></code>.
                    </postit>
                </div>
				<br /><br />
                
				<h2>Funciones y miembros del objeto devildrey33_ListaDesplegable</h2><br />
                A continuación tienes una lista detallada de todos las funciones y miebros disponibles para este objeto : <br /><br />        
                
   				<div class='Tabla'>
                    <table class="TD_Cabecera">
                        <tr>
                            <td class="TD_Propiedad">Función / miembro</td>
                            <td class="TD_Descripcion">Descripción</td>
                        </tr>
                    </table>
                    
                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("constructor", "Constructor para crear el control.", "Constructor"); ?>
                    	Este constructor crea el control según los parámetros especificados.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function devildrey33_ListaDesplegable(<b>nID</b>, [opcional] <b>Opciones</b>);</pre>
                        <h3>Parámetros</h3>
                        <table class='Tabla'>
                        	<tr>
                            	<td class='TD_Sintaxis'><b>nID</b></td>
                                <td class='TD_Sintaxis'>ID única para la etiqueta principal del control (la etiqueta debe ser un <code>&lt;div class='devildrey33_ListaDesplegable'&gt;</code> o una etiqueta personalizada <code>&lt;devildrey33_ListaDesplegable&gt;</code>).</td>
                            </tr>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>Opciones</b>&nbsp;[opcional]</td>
                                <td class='TD_SintaxisU'>
                                	Array que contiene una o más opciones de creación para este control.

                                </td>
                            </tr>
                        </table><br />
                        
                        <h3>Lista de opciones</h3><br />
                        Puedes especificar tantas opciones como necesites, las que no especifiques usaran sus valores por defecto.
                        <table class='Tabla'>
                            <tr>
                                <td class='TD_Sintaxis'><b>Animacion</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar si el control usara una animación al mostrar y ocultar la lista. Puede ser <i>true</i> o <i>false</i>. Por defecto es <b>true</b>.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>AnimacionTiempo</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar cuánto tiempo en milisegundos durarán las animaciones al mostrar y ocultar la lista. Por defecto es <b>100</b>.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>DesplegarHaciaArriba</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite indicar hacia donde debe desplegarse la lista de items, hacia arriba o hacia abajo. Por defecto es <b>false</b>, por lo que se despliega hacia abajo.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>FuncionItemClick</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite enlazar el evento <code>OnClick</code> de los items de la lista a la función que especifiques. La función que reciba este evento debe tener 2 parámetros, el primero será el control ListaDesplegable que manda el evento, y el segundo parámetro será la posición del item en el que se ha hecho click. <br /><code>function MiEventoOnClick(Lista, Posicion) { }</code></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>FuncionItemMouseOver</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite enlazar el evento <code>OnMouseOver</code> de los items de la lista a la función que especifiques. La función que reciba este evento debe tener 2 parámetros, el primero será el control ListaDesplegable que manda el evento, y el segundo parámetro será la posición del item en el que se ha situado el mouse. <br /><code>function MiEventoOnMouseOver(Lista, Posicion) { }</code></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>FuncionItemMouseOut</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite enlazar el evento <code>OnMouseOut</code> de los items de la lista a la función que especifiques. La función que reciba este evento debe tener 2 parámetros, el primero será el control ListaDesplegable que manda el evento, y el segundo parámetro será la posición del item que avisa de que el mouse ha salido de su área. <br /><code>function MiEventoOnMouseOut(Lista, Posicion) { }</code></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>FuncionItemMostrarLista</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite determinar cuando ha terminado de mostrarse la lista, de forma que ejecutara la función que le especifiques. La función que reciba este evento debe tener 1 parámetro, que será el control ListaDesplegable que manda el evento. <br /><code>function MiEventoMostrarLista(Lista) { }</code></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>FuncionItemOcultarLista</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite determinar cuando ha terminado de ocultarse la lista, de forma que ejecutara la función que le especifiques. La función que reciba este evento debe tener 1 parámetro, que será el control ListaDesplegable que manda el evento. <br /><code>function MiEventoOcultarLista(Lista) { }</code></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>ItemSeleccionado</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar la posición del item seleccionado inicialmente al crear el control. Por defecto es <b>0</b>.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>MinimoAncho</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar el ancho mínimo en pixeles que tendrá el control sin contar <code>padding</code>, <code>margin</code>, y <code>border</code>. Por defecto es <b>60</b>.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>MinimoAlto</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar la altura mínima en pixeles que tendrá el control cuando la lista permanece oculta, sin contar <code>padding</code>, <code>margin</code>, y <code>border</code>. Por defecto es 0 lo que hace que el control calcule automáticamente el mínimo necesario según la fuente que está usando.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>MostrarFlecha</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite indicar si se mostrara una imagen con una flecha a la derecha del control para indicar hacia donde se despliega. Puede ser <i>true</i> o <i>false</i>. Por defecto es <b>true</b>.<br /><div class='nota'>: Esta función no se soporta en IE8, 7, y 6.</div></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>ListaItems</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar los items que se añadirán inicialmente a la lista mediante un array. Por ejemplo : <code>Array("Item1", "Item2", "Item3", "Item4", "Item5")</code></td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>OcultarItemSeleccionado</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite indicar al control que debe ocultar de la lista el item actualmente seleccionado por lo que solo aparecerá en la cabecera, y no en la lista. Puede ser <i>true</i> o <i>false</i>, por defecto es <i><b>false</b></i>.</td>
                            </tr>
                            <tr>
                                <td class='TD_Sintaxis'><b>OcultarListaAlHacerClick</b></td>
                                <td class='TD_Sintaxis'>Esta opción permite especificar si la lista debe ocultarse al hacer click encima de un item o no. Puede ser <i>true</i> o <i>false</i>, por defecto es <b><i>true</i></b>.</td>
                            </tr>
                            <tr>
                                <td class='TD_SintaxisU'><b>OrdenarItems</b></td>
                                <td class='TD_SintaxisU'>Esta opción permite especificar el orden por defecto al agregar items dentro del control. Puede ser <i>null</i> (se dejará intacto), "<i>OrdenAsc</i>", "<i>OrdenDesc</i>", "<i>Aleatorio</i>". Por defecto es <b>null</b> por lo que los items se añadirán al final.</td>
                            </tr>
                        </table><br />
                                                            
                        <h3>Retorno</h3><br />
                        Este constructor no devuelve nada.<br /><br />
                        
                    
					<?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("AgregarItem", "Función que permite agregar items al control dinamicamente."); ?>
                    	Esta función se usa para agregar un item en la posición especificada, se puede omitir la posición para agregar el item al final de la lista.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Tabla Pre_Sintaxis'>function AgregarItem(<b>nTexto</b>, [<i>opcional</i>] <b>nPos</b>);</pre>
                        <h3>Parámetros</h3>
                        <table class='Tabla'>
                        	<tr>
                            	<td class='TD_Sintaxis'><b>nTexto</b></td>
                                <td class='TD_Sintaxis'>Texto para el item, puede incluir etiquetas HTML, por ejemplo podemos poner imágenes además de texto.</td>
                            </tr>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b>&nbsp;[opcional]</td>
                                <td class='TD_SintaxisU'>Posición para el item, también puede ser "<i><b>Inicio</b></i>", "<i><b>Final</b></i>", "<i><b>OrdenAsc</b></i>", "<i><b>OrdenDesc</b></i>", "<b><i>Aleatorio</i></b>". Si no se especifica nada el item irá a parar al final siempre que no se haya especificado la opción "<i>OrdenarItems</i>" al crear el control, en cuyo caso seguirá ese orden.</td>
                            </tr>
                        </table><br />
                        <div class='nota'>Si por ejemplo has especificado la opcion <code>"OrdenarItems" : "OrdenAsc"</code> al crear el control pero quieres agregar el item al final, especificando "<i>Final</i>" en la posición conseguirás ese efecto.</div>
                        <br />
                        <h3>Retorno</h3><br />
                        Devuelve true si se ha creado el item, devuelve false si especificas una posición invalida (valores inferiores a cero, o superiores al total de items).<br /><br />
                    <?php TerminarPropiedad(); ?>
                    
                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("BorrarTodo", "Función para borrar todo el contenido de este control."); ?>
                    	Esta función borra todo el contenido del control, incluido el texto seleccionado.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function BorrarTodo();</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>
                    
                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("EliminarItem", "Función para eliminar el item especificado por la posición."); ?>
                    	Esta función borra el item especificado por la posición. Si el item que queremos borrar es el item seleccionado, la selección se reseteará a la posición 0.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Tabla Pre_Sintaxis'>function EliminarItem(<b>nPos</b>);</pre>
                        <h3>Parámetros</h3><br />
                        <table class='Tabla'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b></td>
                                <td class='TD_SintaxisU'>Posición del item que queremos eliminar.</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Devuelve true si se ha eliminado el item, o false si especificas una posición inválida (valores inferiores a cero, o superiores al total de items).<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("EtiquetaListaDesplegable", "Variable que contiene la etiqueta <code>&lt;devildrey33_ListaDesplegable&gt;</code> o <code>&lt;div class='devildrey33_ListaDesplegable'&gt;</code>", "Miembro EtiquetaListaDesplegable"); ?>
                    	Esta variable contiene la etiqueta <code><a href="javascript:IrEstructuracion('1')">&lt;devildrey33_ListaDesplegable&gt;</a></code> o <code><a href="javascript:IrEstructuracion('1')">&lt;div class='devildrey33_ListaDesplegable'&gt;</a></code>.<br /><br />
                        <div class='nota'>No se recomienda tocar para nada esta etiqueta si no sabes lo que estás haciendo.</div>
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("ID", "Variable que contiene la ID unica para este control", "Miembro ID"); ?>
                    	Esta variable contiene la ID que se ha especificado en el constructor.<br /><br />
                        <div class='nota'>Puedes usar esta variable para ver su contenido, pero no cambies su valor o su control asociado dejara de funcionar.</div>
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("MostrarLista", "Función despliega la lista de items."); ?>
                    	Esta función despliega la lista de items del control.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function MostrarLista();</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("ObjetoItemSeleccionado", "Variable que contiene la etiqueta del item seleccionado.", "Miembro ObjetoItemSeleccionado"); ?>
                    	Esta variable contiene la etiqueta del item seleccionado. El item seleccionado es la parte de la cabecera que muestra el texto seleccionado incluso cuando la lista permanece oculta.<br />
                        Para verlo mejor echa un vistazo en la Estructuración interna del control, el span con la clase <code><a href="javascript:IrEstructuracion('3')">devildrey33_ListaDesplegable_ItemSeleccionado</a></code><br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("ObjetoListaDesplegable", "Variable que contiene la etiqueta padre que contiene todo el control.", "Miembro ObjetoListaDesplegable"); ?>
                    	Esta variable contiene la etiqueta con posición absoluta de la que descienden todas las demás etiquetas necesarias para el control.<br />
                        Para verlo mejor echa un vistazo en la estructuración interna del control, el div con la clase <code><a href="javascript:IrEstructuracion('2')">devildrey33_ListaDesplegable_Interna</a></code><br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("ObjetoListaItems", "Variable que contiene la etiqueta de la lista de items.", "Miembro ObjetoListaItems"); ?>
                    	Esta variable contiene la etiqueta de la que descienden todos los items, y que representa la lista oculta de este control.<br />
                        Para verlo mejor echa un vistazo en la estructuración interna del control, el div con la clase <code><a href="javascript:IrEstructuracion('5')">devildrey33_ListaDesplegable_ListaItems</a></code><br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("OcultarLista", "Función oculta la lista de items."); ?>
                    	Esta función oculta la lista de items del control.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function OcultarLista();</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("Seleccion", "Función para asignar / obtener la posición de la selección."); ?>
                    	Esta función se usa para asignar o obtener la posición de la selección.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function Seleccion([<i>opcional</i>] <b>nPos</b>);</pre>
                        <h3>Parámetros</h3>
                        <table class='Tabla'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b> [opcional]</td>
                                <td class='TD_SintaxisU'>Posición del item que queremos seleccionar. Si omitimos este parámetro esta función devolverá el item seleccionado</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Si no se especifica ninguna posición, esta función devuelve la posición actual de la selección.<br />
                        Si se especifica una posición devuelve <i>true</i> si es posible asignar esa nueva posición, o <i>false</i> si es menor que cero o mas grande que el total de items.
                        <br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("Texto", "Función que nos permite asignar / obtener el texto de un item."); ?>
                    	Esta función se usa para asingar o obtener el texto de un item.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function Texto([opcional] nPosicion, [opcional] nTexto);</pre>
                        <h3>Parámetros</h3><br />
                        <table class='Tabla'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPosicion</b>&nbsp;[opcional]</td>
                                <td class='TD_SintaxisU'>Posición del item que queremos asignar / obtener el texto. Si omitimos este parámetro la función entiende que queremos obtener el texto seleccionado.</td>
                            </tr>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nTexto</b>&nbsp;[opcional]</td>
                                <td class='TD_SintaxisU'>Nuevo texto a asignar. Si omitimos este parámetro, la función entiende que queremos obtener el texto y no asignarlo.</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Si omitimos los dos parámetros devuelve el texto del item seleccionado.<br />
                        Si omitimos el parámetro nTexto, devuelve el texto del item especificado en la posición. En caso de error devuelve un texto indicando el error.<br />
                        Si no omitimos ningún parámetro, se intentará cambiar el texto de la posición especificada, devolverá <i>true</i> en caso de éxito, o <i>false</i> en caso de error.<br /><br />
                        <div class='nota'>la única forma que de error esta función es especificando una posición inválida (menor que cero o mayor que el total de items).</div>
                        <br />
                        
                    <?php TerminarPropiedad(); ?>
                    
                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("TotalItems", "Función para obtener el total de items que contiene este control."); ?>
                    	Esta función se usa para obtener el total de items que contiene este control.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='Sintaxis'>function TotalItems();</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función devuelve el total de items que contiene este control.<br /><br />
                    <?php TerminarPropiedad(); ?>
				</div>				
                                
                
				<br /><br />
                <h2>Novedades de la versión 2.0 FINAL</h2>
                <ul>
                	<li>
                    	Compatible con IE 6, 7 y 8, exceptuando la opción "<i>MostrarFlecha</i>".
                        <div class='nota'>IE8 e inferiores tienen un bug con el <code>float</code> que hace inviable añadir una imagen a la derecha, sin tener que reprogramar el control por completo.</div>                        
                    </li>
                    <li>
                    	Se han eliminado las transparencias con rgba ya que IE8 e inferiores no las soportaban.
                        <div class='nota'>Si no necesitamos soporte para IE6 podemos añadir un rbga antes del rgb en el CSS.</div>                        
                    </li>
                    <li>Añadido efecto hover para IE6 hecho con javascript, ya que el selector <code>:hover</code> solo funciona en etiquetas <code>&lt;a&gt;</code>.</li>
                    <li>Se ha renombrado el control de <b>devildrey33_ComboBox</b> a <b>devildrey33_ListaDesplegable</b>.</li>
                    <li>Añadida opción para especificar un ancho mínimo para el control "<i>MinimoAncho</i>" sin contar con el padding y el borde.</li>
                    <li>Posibilidad de crear el control sin items inicialmente.</li>
                    <li>Añadida opción para evitar que se oculte la lista al hacer click en un item "<i>OcultarListaAlHacerClick</i>".</li>
                    <li>Se han retocado los parámetros del constructor, ahora todos los parámetros excepto la ID del control son opcionales.</li>
                    <li>Al mostrar la lista se pondrá por delante de todo incluso de otras listas desplegables (<code>z-index:100</code>).</li>
                    <li>Solucionado bug a la hora de añadir items en orden aleatório.</li>
                    <li>Se ha rediseñado el sistema para obtener el tamaño necesario para mostrar el control.</li>
                    <li>Al añadir / modificar / eliminar un item ahora se actualiza el tamaño del control.</li>
                    <li>Se ha eliminado la función <code>Item()</code> que permitía acceder a los textos de cada item, ahora existe la función <code>Texto()</code> para ello.</li>
                    <li>Se ha establecido una altura mínima de 19 pixeles para el control, ya que al borrar todos los items se quedaba demasiado pequeño.</li>
                    <li>
                    	Se ha añadido la opción "<i>MinimoAlto</i>" que se refiere a la altura mínima del item seleccionado.
                        <div class='nota'>
                        	La altura mínima se calcula a partir del item seleccionado ya que los paddings y el borde pueden variar según el CSS.<br />
                            <span style='margin-left:56px'>Por defecto este valor es 0 lo que hace que se calcule automáticamente.</span>
                        </div>
                    </li>
                    <li>Se ha modificado el sistema para almacenar la selección, antes se guardaba la posición del item seleccionado, ahora se guarda el objeto directamente.</li>
                    <li>Solucionado bug de la función <code>EliminarItem()</code> que no actualizaba correctamente la selección en ningún momento.</li>
                    <li>Solucionado bug de la función <code>AgregarItem()</code> que no actualizaba correctamente la selección una vez creado el control.</li>
                    <li>Se han retocado varias funciones para que devuelvan "<i>true</i>" o "<i>false</i>" en caso de funcionar o de tener un error.</li>
                    <li>Se ha creado un ejemplo extenso para poder testear el control al 100%, que además permite configurar toda la creación de este.</li>
                    <li>Añadidas opciones "<i>FuncionItemMouseOver</i>" y "<i>FuncionItemMouseOut</i>" que permiten responder a los eventos <code>mouseover</code> y <code>mouseout</code> de los items.</li>
                    <li>Añadidas opciones "<i>FuncionMostrarLista</i>" y "<i>FuncionOcultarLista</i>" que enlazan una función para saber cuando se termina de desplegar / ocultar la lista.</li>
                </ul>                
                

                <table class='Centrado'><tr>
                    <td><a class="Boton" href="/Ejemplos/devildrey33_ListaDesplegable/Ejemplo.html" target="_blank" style="margin-right:10px">Ver ejemplo simple</a></td>
                    <td><a class="Boton" href="/Ejemplos/devildrey33_ListaDesplegable/EjemploImagenes.html" target="_blank" style="margin-right:10px">Ver ejemplo con imágenes</a></td>
                    <td><a class="Boton" href="/Ejemplos/devildrey33_ListaDesplegable/EjemploCrear.html" target="_blank" style="margin-right:10px">Ver ejemplo creación</a></td>
<!--                    <a class="devildrey33_Boton" href="/Descargas/devildrey33_ListaDesplegable.zip" target="_blank">Descargar devildrey33_ListaDesplegable</a> -->
                </tr></table>
                <a href="/Descargas/devildrey33_ListaDesplegable.zip"  target="_blank" class="Boton">Descargar devildrey33_ListaDesplegable</a>

				<!-- 1000ms para que no me gripe con Chrome la nueva animación del contenido y me saque una scrollbar horizontal -->
                <script type="text/javascript">
                    setTimeout(function() { MostrarExplicacion("1"); }, 1000);
                </script>

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     