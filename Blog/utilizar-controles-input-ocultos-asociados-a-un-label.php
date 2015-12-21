<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Crear servidor web de pruebas portatil para windows");*/

        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = "<meta name='description' content='Un repaso de como utilizar controles input[checkbox/radio] asociados a un label mediante el selector :checked'>
	<meta name='keywords' content='html5 checkbox, html5 radio, html5 label, :checked, Selector :checked, CSS3 :checked, ocultar input, ocultar checkbox, ocultar radio'>";

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Utilizar controles input[checkbox/radio] ocultos asociados a un label.", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Utilizar controles input[checkbox/radio] ocultos asociados a un label.");

?>	

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_InputOculto.png" alt="Utilizar controles input[checkbox/radio] ocultos asociados a un label." />
                <p>Desde hace un tiempo me he aficionado a utilizar todo tipo de atributos para marcar estados de una transición, pero últimamente he dado un paso más y he empezado a utilizar controles input[checkbox/radio] para construir menús de opciones que requieren cierta interacción del usuario.</p>
                <p>Utilizar este tipo de controles para interacciones simples de usuario tiene sus ventajas, pero como todo también sus desventajas.</p>
                <p>Yo destacaría por el lado bueno, que si se hace bien no requiere prácticamente nada de JavaScript, y queda todo el tema de transiciones y cambios de estado en objetos hecho en CSS3. Por la parte mala, no suele funcionar en navegadores antiguos, y son mínimo 2 o 3 etiquetas para un solo control, por lo que si queremos hacer una lista con 1000 entradas, la cosa se va a sobrecargar un poco.</p>
                <p>Para empezar he creado un ejemplo básico utilizando 3 <i>input[checkbox]</i> ocultos que han quedado enlazados a sus respectivos labels, y que al pulsarlos se quedan marcados y muestran un sub-menú.</p>
                <!-- FIN_INTRODUCCION -->
                <h2>Maquetación HTML de un menú</h2>
                <p>Veamos la maquetación de uno de los menús :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
<div class='Menu'>
    <input id='Input_Estilo1' type='checkbox' />
    <label for='Input_Estilo1'>Label que hace de menú</label>
    <div class='SubMenu'>SubMenu</div>
</div>
-[FIN devildrey33.ID1]- */
                    $Base->PintarCodigo->PintarArchivoHTML("IDMENUHTML", "Maquetación del menú", basename(__FILE__), "ID1"); 
                ?>
                <p>Como podéis ver es una maquetación bastante simple, y consiste de una etiqueta con la clase <i>.Menu</i> que dentro contiene una etiqueta <i>input</i> oculta, una etiqueta <i>label</i> con la apariencia de un botón, y un div con la clase <i>SubMenu</i> donde va todo el contenido del sub-menú.</p>
                <p>Lo más importante es el atributo <i>for</i> del <i>label</i> (línea 3), ya que este se enlaza con la etiqueta <i>input</i> que tenga la misma id. Al tener enlazados los controles, todos los eventos (click, keypress, etc...) que reciba el <i>label</i>, pasaran directamente al <i>input</i>.</p>
                <div class='nota'>Hay que remarcar, que aunque lo más lógico sea poner el <i>div SubMenu</i> dentro de la etiqueta <i>label</i>, no es una práctica recomendable y aunque funciona, no pasa el validador de la W3C, por la razón de que los labels no deben tener etiquetas dentro.</div>
                <hr />
                <h2>Estilos CSS</h2>
                <p>Vamos a empezar con el CSS : </p>                
<!-- -[INICIO devildrey33.ID2]-
/* Div que contiene un menú */
.Menu { 
    display:inline-block; 
    position:relative; 
}
/* El checkbox original queda escondido */
.Menu > input { display:none; }   
/* El label actua como botón, y está enlazado al checkbox oculto */
.Menu > input + label {             
    border:1px solid #000;
    background:#CCC;
    padding:8px;
    min-width:97px;
}
/* Cuando el checkbox está marcado el color del fondo del label es verde */
.Menu > input:checked + label { background:rgba(0, 155, 50, 0.5); }            
/* Div que contiene el submenú enlazado al checkbox */
.Menu > input + label + .SubMenu { 
    position:absolute;
    top:40px;
    width:calc(100% - 22px); /* (10 * 2 del padding) + (1 * 2) del borde */
    height:100px;
    border:1px solid #000;
    background:#CCC;                
    padding:10px;
    transform:perspective(600px) rotateY(90deg); /* Rotamos 90 grados el eje Y para que no se vea */
    transition:0.4s;
}
/* Div que contiene el submenú una vez esta marcado el checkbox, devuelve a 0 grados el eje Y del submenu */
.Menu > input:checked + label + .SubMenu { transform:perspective(600px) rotateY(0deg); }
-[FIN devildrey33.ID2]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("IDMENUCSS", "CSS del menú", basename(__FILE__), "ID2"); 
                ?>    
                
                <p>Os he puesto todo el CSS de golpe porque quiero que veáis como funciona bien el asunto.<p>     
                <table class='Tabla'>
                    <tr>
                        <td><b>Líneas 2-5 :</b></td>
                        <td>Creo una clase Menu que es un contenedor vacio auto-ajustable (<i><a href='/Doc/CSS/Propiedades/display'>dislpay</a>:inline-block</i>), con la <i><a href='/Doc/CSS/Propiedades/position'>position</a>:relative</i> para que los hijos partan de la posición del menú.</td>                        
                    </tr>
                    <tr>
                        <td><b>Línea 7 :</b></td>
                        <td>Las etiquetas input hijas de la etiqueta menú quedan ocultas (<i><a href='/Doc/CSS/Propiedades/display'>display</a>:none).</td>
                    </tr>
                    <tr>
                        <td><b>Líneas 9-14 :</b></td>
                        <td>Asigno las propiedades para el label (sin marcar), sobretodo fijaros en el selector que he utilizado. Busco en los hijos de la clase <i>Menu</i> una etiqueta <i>input</i> que justo después tenga una etiqueta <i>label</i>.</td>                        
                    </tr>
                    <tr>
                        <td><b>Línea 16 :</b></td>
                        <td>Como podéis ver el selector es prácticamente  igual que el anterior de la línea 9, pero en este caso solo busca etiquetas <i>input:checked</i>. En definitiva la etiqueta se vuelve de color verde cuando el checkbox inmediatamente anterior está marcado.</td>                        
                    </tr>
                    <tr>
                        <td style='white-space:nowrap;'><b>Líneas 18-28 :</b></td>
                        <td>Aquí establecemos las propiedades para el sub-menú (sin marcar), y si os fijáis el selector está formulado del mismo modo que en la línea 9, pero esta vez llega hasta la etiqueta .SubMenu. También rotamos el sub-menú de forma que quede invisible a 90 grados del eje Y con la propiedad <a href='/Doc/CSS/Propiedades/transform'>transform</a>.</td>
                    </tr>
                    <tr>
                        <td><b>Línea 30 :</b></td>
                        <td>Finalmente cuando el checkbox está marcado rotamos el sub-menú a 0 grados del eje Y con la propiedad <a href='/Doc/CSS/Propiedades/transform'>transform</a> para que sea visible.</td>
                    </tr>
                    
                </table>
                
                <p>Lo más importante del CSS es determinar un estado normal/desmarcado (Líneas 9-14 y 18-28), y un estado para cuando el checkbox está marcado (Líneas 16 y 30). Para determinar si está marcado utilizamos el selector <a href='/Doc/CSS/Selectores/:checked'>:checked</a>.</p>
                <hr />
                <h2>Ejemplo CheckBox</h2>
                <p>Finalmente podéis ver el ejemplo en vivo y toquetear un poco si queréis :</p>
                
                <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/Checked/CheckBox-personalizado.html")); ?>
                <hr />
                <h2>Ejemplo RadioButton</h2>
                <p>Los RadioButton están hechos para funcionar en grupo, de forma que solo puede haber un RadioButton marcado en cada grupo.</p>
                <p>Echad un vistazo al siguiente ejemplo :</p>
                <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/Checked/RadioButton-personalizado.html")); ?>
                <p>Notareis que mientras el código es similar, el funcionamiento del primer ejemplo y el segundo es distinto. En el primer ejemplo podemos tener los 3 menús marcados, y en el segundo ejemplo solo nos permite tener un menú marcado.</p>    
                <p>Como veis no ha hecho falta JavaScript en ninguno de los dos ejemplos, y los controles son plenamente funcionales y conscientes de sus estados en todo momento.</p>
                <p>En definitiva, esta técnica viene muy bien para terminar de encapsular dentro del CSS, aquellos momentos en que requiere alguna interacción por parte del usuario para hacer una animación/transición.</p>
                
                <p>Y con esto me despido por hoy, espero que os haya parecido interesante. Saludos!</p>
<?php


    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>
     