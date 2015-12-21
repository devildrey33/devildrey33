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
            $Base->InicioPlantilla(basename(__FILE__), "devildrey33_ListaDesplegable 2.0 BETA", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "devildrey33_ListaDesplegable 2.0 BETA");


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
                <img class="ImagenPortada" src="/Web/Graficos/250x200_ComboBoxWeb2.png" alt="devildrey33_ListaDesplegable 2.0 BETA" />
                <p>Hace más de un año cree un control desplegable para esta web el cual me tenía que servir para cambiar las categorías del índice. Dicho sea de paso ese control era muy precario pero cumplía perfectamente su función para esta web.</p>
                <p>Pero hace unos días, tuve que lidiar con ciertos problemas que quise solucionar con ese control, y al ver lo nefasto que era, me decidí por crear uno nuevo desde cero y utilizando únicamente JavaScript con un poco de CSS.</p>
                <p>El resultado visualmente no varía mucho, pero a la hora de programar con él la cosa cambia enormemente a mejor. Para empezar se puede manipular todo el control dinámicamente una vez creado mediante JavaScript, esto quiere decir que podemos añadir / modificar / eliminar items después de haber creado el control, además también lo he creado de forma que se pueda desplegar hacia abajo o hacia arriba, de esta forma también puedo añadirlo al footer sin cargarme el diseño de la web.</p>
                <!-- FIN_INTRODUCCION -->
                <br />								
				
                <h2>Creación del control</h2>
                <p>Lo primero será añadir la cabecera de javascript y el archivo css en el <code>head</code> de nuestro documento web :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<script type="text/javascript" src="./js/devildrey33_ListaDesplegable.js" ></script>
<link rel="stylesheet" href="./css/devildrey33_ListaDesplegable.css" type="text/css" />
-[FIN devildrey33.ID1]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID1", "Cabeceras", basename(__FILE__), "ID1"); 
                ?>
                <p>Luego debemos crear un pequeño script para inicializar el control, preferiblemente en el <code>head</code> de nuestro documento web :</p>
                <?php 
/* -[INICIO devildrey33.ID2]-
<script type="text/javascript">
    // Array con los items que queremos que se muestren
    var ArrayItems = Array("Item1", "Item2", "Item3", "Item4");
    // Creación del control mediante JavaScript
    ListaDesplegable1 = new devildrey33_ListaDesplegable("IDListaDesplegable", ArrayItems, FuncionOnClick);
    // Definición de la función que recibirá cuando hacemos click en un item
    function FuncionOnClick(Combo) {
        // Muestro una ventana que nos dice el indice del item presionado, y el texto del item presionado
        alert(Combo.Seleccion() + " " + Combo.Item(Combo.Seleccion()).Texto());
    }
</script>
-[FIN devildrey33.ID2]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID2", "Inicialización y creación del control", basename(__FILE__), "ID2");    
                ?>									

				<p>Por último nos quedara crear la etiqueta del control donde queramos dentro del <code>body</code> de nuestra pagina.</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
<!-- Etiqueta personalizada -->
<devildrey33_ListaDesplegable id="IDListaDesplegable"></devildrey33_ListaDesplegable>
<!-- Etiqueta div -->
<div class="devildrey33_ListaDesplegable" id="IDListaDesplegable"></div>
-[FIN devildrey33.ID3]- */
                    $Base->PintarCodigo->PintarArchivoHTML("ID3", "Creación de la etiqueta", basename(__FILE__), "ID3"); 
                ?>	
				<br />
                <div class='nota'>Se puede crear con la etiqueta <i>&lt;devildrey33_ListaDesplegable id='IDListaDesplegable'&gt;</i> o con un <i>&lt;div class='devildrey33_ListaDesplegable' id='IDListaDesplegable'&gt;</i> pero <b>solo debes usar una de ellas</b>.</div>
                <br />								
                <br />								
				<h2>devildrey33_ListaDesplegable</h2>
                <p>A continuación podeis ver una referencia completa de todas las funciónes disponibles para trabajar con este objeto.</p>


   				<div class='devildrey33_Marco'>
                    <table class="TD_Cabecera">
                        <tr>
                            <td class="TD_Propiedad">Función</td>
                            <td class="TD_Descripcion">Descripción</td>
                        </tr>
                    </table>
                    
                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("constructor", "Constructor para crear el control.", "Constructor"); ?>
                    	Este constructor crea el control según los parámetros especificados.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function devildrey33_ListaDesplegable(<b>nID</b>, <b>nItems</b>, <b>FuncionOnChange</b>, [opcional] <b>Opciones</b>)</pre>
                        <h3>Parámetros</h3>
                        <table class='devildrey33_Marco'>
                        	<tr>
                            	<td class='TD_Sintaxis'><b>nID</b></td>
                                <td class='TD_Sintaxis'>ID única para la etiqueta principal del combobox (la etiqueta debe ser un &lt;div class='devildrey33_ListaDesplegable'&gt; o un &lt;devildrey33_ListaDesplegable&gt;.</td>
                            </tr>
                        	<tr>
                            	<td class='TD_Sintaxis'><b>nItems</b></td>
                                <td class='TD_Sintaxis'>Array que contiene los items que se incluirán inicialmente en el control.</td>
                            </tr>
                        	<tr>
                            	<td class='TD_Sintaxis'><b>FuncionOnChange</b></td>
                                <td class='TD_Sintaxis'>Función que recibira cuando el usuario seleccione un item. Esta función debe tener un parámetro, que sera el objeto devildrey33_ListaDesplegable que envia el evento.</td>
                            </tr>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>Opciones</b>&nbsp;[opcional]</td>
                                <td class='TD_SintaxisU'>
                                	Array que contiene una o mas opciones de creación para este control.
                                    <table class='devildrey33_Marco'>
                                        <tr>
                                            <td class='TD_Sintaxis'><b>MostrarItemSeleccionadoEnLista</b></td>
                                            <td class='TD_Sintaxis'>Esta opción permite indicar al control que siempre debe mostrar el item seleccionado dentro de la lista. Este párametro puede ser <i>true</i> o <i>false</i>. Por defecto el item seleccionado se oculta en la lista, y solo se muestra en la cabecera del control.</td>
                                        </tr>
                                        <tr>
                                            <td class='TD_Sintaxis'><b>DesplegarListaHaciaArriba</b></td>
                                            <td class='TD_Sintaxis'>Esta opción permite indicar hacia donde debe desplegarse la lista de items, hacia arriba o hacia abajo. Por defecto es <b>false</b>, por lo que se despliega hacia abajo.</td>
                                        </tr>
                                        <tr>
                                            <td class='TD_Sintaxis'><b>OrdenarItems</b></td>
                                            <td class='TD_Sintaxis'>Esta opción permite especificar el orden por defecto al agregar items dentro del control. Puede ser <i>null</i> (se dejará intacto), "<i>OrdenAsc</i>", "<i>OrdenDesc</i>", "<i>?</i>" (Aleatório). Por defecto es <b>null</b>.</td>
                                        </tr>
                                        <tr>
                                            <td class='TD_Sintaxis'><b>Animacion</b></td>
                                            <td class='TD_Sintaxis'>Esta opción permite especificar si el control usara una animacion al mostrar y ocultar la lista. Puede ser <i>true</i> o <i>false</i>. Por defecto es <b>true</b>.</td>
                                        </tr>
                                        <tr>
                                            <td class='TD_Sintaxis'><b>AnimacionTiempo</b></td>
                                            <td class='TD_Sintaxis'>Esta opción permite especificar cuanto tiempo en milisegundos durarán las animaciones al mostrar y ocultar el control. Por defecto es <b>100</b>.</td>
                                        </tr>
                                        <tr>
                                            <td class='TD_Sintaxis'><b>MostrarFlecha</b></td>
                                            <td class='TD_Sintaxis'>Esta opción permite indicar si se mostrara una imagen con una flecha a la derecha del control para indicar hacia donde se despliega. Puede ser <i>true</i> o <i>false</i>. Por defecto es <b>true</b>.</td>
                                        </tr>
                                        <tr>
                                            <td class='TD_SintaxisU'><b>ItemSeleccionado</b></td>
                                            <td class='TD_SintaxisU'>Esta opción permite especificar la posición del item seleccionado inicialmente al crear el control. Por defecto es <b>0</b>.</td>
                                        </tr>
                                    </table>
                                </td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Este constructor no devuelve nada.<br /><br />
                        
                    
					<?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("AgregarItem", "Función que permite agregar items al control dinamicamente."); ?>
                    	Esta función se usa para agregar un item en la posición especificada, se puede omitir la posición para agregar el item al final de la lista.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function AgregarItem(<b>nTexto</b>, [<i>opcional</i>] <b>nPos</b>)</pre>
                        <h3>Parámetros</h3>
                        <table class='devildrey33_Marco'>
                        	<tr>
                            	<td class='TD_Sintaxis'><b>nTexto</b></td>
                                <td class='TD_Sintaxis'>Texto para el item, puede incluir etiquetas HTML, por ejemplo podemos poner imagenes ademas de texto.</td>
                            </tr>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b> [opcional]</td>
                                <td class='TD_SintaxisU'>Posición para el item, tambien puede ser "<i><b>Inicio</b></i>", "<i><b>Final</b></i>", "<i><b>OrdenAsc</b></i>", "<i><b>OrdenDesc</b></i>", "<b><i>?</i></b>" (Aleatório).</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>
                    
                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("BorrarTodo", "Función para borrar todo el contenido de este control."); ?>
                    	Esta función borra todo el contenido del control, incluido el texto seleccionado.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function BorrarTodo()</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>
                    
                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("EliminarItem", "Función para eliminar el item especificado por la posición."); ?>
                    	Esta función borra el item especificado por la posición. Si el item que queremos borrar es el item seleccionado, la selección se reseteara a la posición 0.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function EliminarItem(<b>nPos</b>)</pre>
                        <h3>Parámetros</h3><br />
                        <table class='devildrey33_Marco'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b></td>
                                <td class='TD_SintaxisU'>Posición del item que queremos eliminar.</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("Item", "Función que devuelve el item de la posición especificada."); ?>
                    	Esta función devuelve el item de la posición especificada en forma de <a href='#devildrey33_ListaDesplegable_Item'>devildrey33_ListaDesplegable_Item</a>.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function Item(<b>nPos</b>)</pre>
                        <h3>Parámetros</h3><br />
                        <table class='devildrey33_Marco'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b></td>
                                <td class='TD_SintaxisU'>Posición del item que queremos obtener.</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Esta función devuelve el item especificado en forma de <a href='#devildrey33_ListaDesplegable_Item'>devildrey33_ListaDesplegable_Item</a>.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("MostrarLista", "Función despliega la lista de items."); ?>
                    	Esta función despliega la lista de items del control.
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function MostrarLista()</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("OcultarLista", "Función oculta la lista de items."); ?>
                    	Esta función oculta la lista de items del control.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function OcultarLista()</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función no devuelve nada.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("Seleccion", "Función para asignar / obtener la posición de la selección."); ?>
                    	Esta función se usa para asignar o obtener la posición de la selección.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function Seleccion([<i>opcional</i>] <b>nPos</b>)</pre>
                        <h3>Parámetros</h3>
                        <table class='devildrey33_Marco'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nPos</b> [opcional]</td>
                                <td class='TD_SintaxisU'>Posición del item que queremos seleccionar. Si omitimos este parámetro esta función devolverá el item seleccionado</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Si no se especifica ninguna posición, esta función devuleve la posición actual de la selección.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("TotalItems", "Función para obtener el total de items que contiene este control."); ?>
                    	Esta función se usa para obtener el total de items que contiene este control.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function TotalItems()</pre>
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Esta función devuelve el total de items que contiene este control.<br /><br />
                    <?php TerminarPropiedad(); ?>
				</div>				
                
                
                
                
                
                
                
                
                <br />
				<h2><a id='devildrey33_ListaDesplegable_Item'></a>devildrey33_ListaDesplegable_Item</h2>
                <p>A continuación podeis ver una referencia completa de todas las funciónes disponibles para trabajar con este objeto.</p>
                
   				<div class='devildrey33_Marco'>
                    <table class="TD_Cabecera">
                        <tr>
                            <td class="TD_Propiedad">Función</td>
                            <td class="TD_Descripcion">Descripción</td>
                        </tr>
                    </table>
                    
                    <div class='Div_Separador'></div>
                    <?php CrearPropiedad("Objeto", "Variable que apunta al div que contiene el item.", "Variable Objeto"); ?>
                    	Esta variable es un acceso directo al tag que contiene el item. <br /><br />
                        <div class='nota'>Mucho cuidado al utilizarla de no borrar el objeto.</div><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>
                    
                    <?php CrearPropiedad("Texto", "Función que permite asignar / obtener el texto del item."); ?>
                    	Esta función se usa para asignar o obtener el texto del item.<br /><br />
                        <h3>Prototipo</h3>
                        <pre class='devildrey33_Marco Pre_Sintaxis'>function Texto([opcional] nTexto)</pre>
                        <h3>Parámetros</h3><br />
                        <table class='devildrey33_Marco'>
                        	<tr>
                            	<td class='TD_SintaxisU'><b>nTexto</b>&nbsp;[opcional]</td>
                                <td class='TD_SintaxisU'>Si especificamos el parámetro podemos asignar el texto para el item. Si omitimos el parámetro la función devolvera el texto del item.</td>
                            </tr>
                        </table><br />
                        <h3>Retorno</h3><br />
                        Esta función devuelve el texto del item si omitimos el parámetro nTexto.<br /><br />
                    <?php TerminarPropiedad(); ?>

                    <div class='Div_Separador'></div>

                    <?php CrearPropiedad("Visible", "Función para saber si el item es visible en la lista o no."); ?>
                    	Esta función nos dice si el item es visible o no.<br />
                        <div class='nota'>Puede haber un item invisible si la opcion "MostrarItemSeleccionadoEnLista" es false. Este item será el seleccionado.</div><br />
                        <h3>Parámetros</h3><br />
                        Sin parámetros.<br /><br />
                        <h3>Retorno</h3><br />
                        Devuelve <i>true</i> si el item es visible, <i>false</i> en caso contrario.<br /><br />
                    <?php TerminarPropiedad(); ?>

				</div>
                
                <br /><br />
                
                <h2>Compatibilidad</h2>
                <p>Este control es compatible con todos los navegadores actuales incluyendo Internet Explorer 9. Para Internet Explorer 8 e inferiores no funciona... para la versión 2.0 final intentare que funcione incluso en Internet Explorer 6, aunque quizas sea mas fácil enseñarle a un burro a patinar...</p>
                
                <p>Versión actual : <b>2.0 BETA</b></p>
                
                
                <a class="Boton Centrado" href="/Blog/devildrey33_ListaDesplegable_2-0">Ir a la pagina de devildrey33_ListaDesplegable 2.0 FINAL</a>

                

                    
<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     