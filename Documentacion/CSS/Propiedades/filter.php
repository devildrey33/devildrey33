<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $ExtraMeta = "blur, brightness, contrast, grayscale, hue-rotate, invert, opacity, saturate, sepia, dowp-shadow, CSS blur, CSS brightness, CSS contrast, CSS grayscale, CSS hue-rotate, CSS invert, CSS opacity, CSS saturate, CSS sepia, CSS dowp-shadow";
    $Doc = new devildrey33_Documentacion(basename(__FILE__), $ExtraMeta); $Base = $Doc->Base;
?>
<style>
    .Caja { 
        border:1px dashed #BBB;
        float:right;
        position:relative;
        padding:4px;
    }
    
    .ImagenOriginal, .ImagenFiltro {
        border:none !important;            
        position:relative;
        display:inline-table;
        width:100px;
        height:100px;
        background:url(/Web/Graficos/logo100.png);
    }
    .ImagenOriginal::before {
        content:"Original";
        position:absolute;
        top:-20px;
        left: 50%;
        transform: translate(-50%, 0%);
    }      
    
    .ImagenFiltro::before {
        content:"Filtro";
        position:absolute;
        top:-20px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    
    
    #ImagenBlur         { animation:AniImagenBlur 3s ease-in-out 1s infinite;    }
    @keyframes AniImagenBlur {
        0%   {  filter:blur(0px);  }
        50%  {  filter:blur(5px);  }
        100% {  filter:blur(0px);  }
    }
    
    #ImagenBrightness   { animation:AniImagenBrightness 3s ease-in-out 0s infinite;    }
    @keyframes AniImagenBrightness {
        0%   {  filter:brightness(0);  }
        50%  {  filter:brightness(2);  }
        100% {  filter:brightness(0);  }
    }
    
    #ImagenContrast     { animation:AniImagenContrast 3s ease-in-out 0s infinite;    }
    @keyframes AniImagenContrast {
        0%   {  filter:contrast(0%);    }
        50%  {  filter:contrast(200%);  }
        100% {  filter:contrast(0%);    }
    }
    
    #ImagenDropShadow   { animation:AniImagenDropShadow 3s ease-in-out 0s infinite;    }
    @keyframes AniImagenDropShadow {
        0%   {  filter:drop-shadow(10px 3px 0px #333);  }
        50%  {  filter:drop-shadow(-14px 3px 5px red);  }
        100% {  filter:drop-shadow(10px 3px 0px #333);  }
    }
        
    #ImagenGrayscale     { animation:AniImagenGrayscale 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenGrayscale {
        0%   {  filter:grayscale(0%);    }
        50%  {  filter:grayscale(200%);  }
        100% {  filter:grayscale(0%);    }
    }
    
    #ImagenHueRotate     { animation:AniImagenHueRotate 9s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenHueRotate {
        0%   {  filter:hue-rotate(0deg);    }
        50%  {  filter:hue-rotate(360deg);  }
        100% {  filter:hue-rotate(0deg);    }
    }
    
    #ImagenInvert     { animation:AniImagenInvert 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenInvert {
        0%   {  filter:invert(0%);    }
        50%  {  filter:invert(100%);  }
        100% {  filter:invert(0%);    }
    }
    
    #ImagenOpacity     { animation:AniImagenOpacity 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenOpacity {
        0%   {  filter:opacity(100%);  }
        50%  {  filter:opacity(0%);    }
        100% {  filter:opacity(100%);  }
    }
    
    #ImagenSaturate     { animation:AniImagenSaturate 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenSaturate {
        0%   {  filter:saturate(0%);    }
        50%  {  filter:saturate(200%);  }
        100% {  filter:saturate(0%);    }
    }
    
    #ImagenSepia     { animation:AniImagenSepia 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenSepia {
        0%   {  filter:sepia(0%);    }
        50%  {  filter:sepia(100%);  }
        100% {  filter:sepia(0%);    }
    }
    
    #ImagenCombi     { animation:AniImagenCombi 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenCombi {
        0%   {  filter:drop-shadow(0px 0px 0px transparent) grayscale(100%);    }
        50%  {  filter:drop-shadow(0px 0px 10px #333) grayscale(0%)  }
        100% {  filter:drop-shadow(0px 0px 0px transparent) grayscale(100%);    }
    }    
    
</style>


<p>Esta propiedad permite aplicar uno o mas filtros que nos permiten modificar la apariencia del objeto.</p>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>filter: <b>filtro(valor)</b> [...];</pre>
<hr /><br />
<p>A continuación tienes la lista de filtros posibles :</p>


<h3><i>none</i></h3>
<div class='Tab'>
    <p>No se aplica ningún filtro. <b>(valor por defecto)</b></p>
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/blur()'>blur()</a></i></h3>
<div class='Tab'>
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenBlur"></div>
    </div>
    <p>Filtro que aplica un <a href='https://es.wikipedia.org/wiki/Desenfoque_gaussiano' target='_blank'>desenfoque Gaussiano</a> al objeto.</p>
<p>El desenfoque debe ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida excepto porcentajes '<code>%</code>'.</p>
<p>Se tiene que especificar un valor que determinarña la dfesviación estándar, dicho valor puede ser especificado utilizando cualquier tipo de unidad relativa válida (excepto porcentajes '<code>%</code>').
    <br /> Consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem">Referencia CSS : Unidades</a> para más información.</p>
<p>Por ejemplo podéis ver los pasos de la animación de la derecha :</p>            
<!-- -[INICIO devildrey33.blur]-
filter:blur(0px);          /* 0 píxeles de desenfoque */
filter:blur(5px);          /* 5 píxeles de desenfoque */
 -[FIN devildrey33.blur]- -->
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("blur", "", basename(__FILE__), 'blur'); 
    ?> 
    <hr />
</div><br /><br />



<h3><i><a href='/Doc/CSS/Funciones/brightness()'>brightness()</a></i></h3>
<div class='Tab'>
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenBrightness"></div>
    </div>
    <p>Filtro que modifica el brillo en el objeto.</p>
    <p>Hay que especificar un valor decimal positivo para aplicar un multiplicador linear al filtro, por defecto es 1, si es menor el resultado será más oscuro, si es mayor el resultado será mas brillante.</p>
    <p>Por ejemplo :</p>
            
<!-- -[INICIO devildrey33.brightness]-
filter:brightness(0.1);                                                 /* 10% brillo  */
filter:brightness(2);                                                   /* 200% brillo */
 -[FIN devildrey33.brightness]- -->
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("brightness", "", basename(__FILE__), 'brightness'); 
    ?>   
    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/contrast()'>contrast()</a></i></h3>
<div class="Tab">
    <div class='Caja'>    
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenContrast"></div>
    </div>
    <p>Filtro que modifica el contraste en el objeto.</p>
    <p>Hay que especificar un porcentaje para el contraste. Por defecto es 100%, un 0% es completamente gris, y un valor por encima del 100% nos da más contraste.</p>
    <p> Por ejemplo : </p>
<!-- -[INICIO devildrey33.contrast]-
filter:contrast(0%);                                                    /*   0% contraste (gris) */
filter:contrast(200%);                                                  /* 200% de contraste     */
-[FIN devildrey33.contrast]- -->            
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("contrast", "", basename(__FILE__), 'contrast'); 
    ?>            
    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/drop-shadow()'>drop-shadow()</a></i></h3>
<div class="Tab">
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenDropShadow"></div>
    </div>
    <p>Filtro que a partir de la mascara alfa del objeto crea una o mas sombras.</p>
    <p>Esta función tiene 2 parametros obligatorios, las coordenadas <code>X</code> e <code>Y</code> donde se ubicará la sombra partiendo desde el centro. se puede especificar con cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
    <p>Ademas según la mdn tiene 3 parámetros opcionales, <b>pero hasta la fecha solo dos de ellos funcionan en Webkit</b>.</p>

    <ul>
        <li>
            Rádio de <b>desenfoque</b>. Se utiliza igual que la función <a href=''>blur</a> pero solo se aplica a la sombra.
        </li>
        <li>
            
            Rádio de <b>expansión</b>. se puede especificar con cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.
            <div class='nota'><b>no funciona en Webkit</b> e invalida el string de todo el <code>filter</code>, por lo que <b>no se aplicará ningún filtro</b> si especificas mas de 3 valores con un tipo de unidad de tamaño relativo válido...</div>
        </li>
        <li>
            <b>Color</b> de la sombra. Para mas información sobre los colores en CSS visita este enlace Referencia CSS : <a href='/Doc/CSS/Colores'>Colores</a>.
        </li>
    </ul>
    
    <p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.drop-shadow]-
filter:drop-shadow(3px 3px);                                            /* Sombra abajo a la derecha */
filter:drop-shadow(-4px 2px 3px red);                                   /* Sombra roja difuminada abajo a la izquierda */
filter:drop-shadow(1px 1px 1px 2px red);                                /* NO FUNCIONA EN WEBKIT */
-[FIN devildrey33.drop-shadow]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("drop-shadow", "", basename(__FILE__), 'drop-shadow'); 
?>        
<p>Para especificar más de una sombra, separa los parámetros con una coma <code>','</code>, por ejemplo :</p>
<!-- -[INICIO devildrey33.drop-shadow2]-
filter:drop-shadow( 3px 3px black,                                      /* Sombra inferior derecha negra */
                    -3px 3px rgba(100, 100, 100, 0.6) );                /* sombra inferior izuiqerda gris translucido */
-[FIN devildrey33.drop-shadow2]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("drop-shadow2", "", basename(__FILE__), 'drop-shadow2'); 
?>        

    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/grayscale()'>grayscale()</a></i></h3>
<div class="Tab">
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenGrayscale"></div>
    </div>
    <p>Filtro que convierte el objeto a una escala de grises.</p>
    <p>Se tiene que especificar un porcentaje para el filtro. Un 0% deja la imagen intacta, un 100% convierte la imagen a una escala de gris.</p>
    <p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.grayscale]-
filter:grayscale(0%);                                                   /* Escala de grises al 0% */
filter:grayscale(100%);                                                 /* Escala de grises al 100% */
-[FIN devildrey33.grayscale]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("grayscale", "", basename(__FILE__), 'grayscale'); 
?>         
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/hue-rotate()'>hue-rotate()</a></i></h3>
<div class="Tab">
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenHueRotate"></div>
    </div>
    <p>Filtro que aplica la rotación HUE <a href='https://es.wikipedia.org/wiki/Tono_(color)' target='_blank'>(tono/matíz)</a> de colores al objeto.</p>
    <p>Requiere un valor en grados, <code>0deg</code> no modificará el objeto, <code>180deg</code> invertira el HUE del objeto, <code>360deg</code> es igual a <code>0deg</code> y a partir de aquí se puede rotar lo que quieras que cada vuelta completa (<code>360deg</code>) será como empezar desde <code>0deg</code>.</p>
<!-- -[INICIO devildrey33.hue-rotate]-
filter:hue-rotate(0deg);                                                /* color normal */
filter:hue-rotate(180deg);                                              /* color opuesto */
-[FIN devildrey33.hue-rotate]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("hue-rotate", "", basename(__FILE__), 'hue-rotate'); 
?>                   
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/invert()'>invert()</a></i></h3>
<div class="Tab">
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenInvert"></div>
    </div>
    <p>Filtro que invierte los valores RGB del objeto.</p>
    <p>Se requiere especificar un porcentaje. Un 0% deja el objeto sin cambios, un 100% invierte los valores RGB del objeto (por lo que el blanco (255,255,255) será negro(0,0,0).</p>
<!-- -[INICIO devildrey33.invert]-
filter:invert(0%);                                                      /* normal */
filter:invert(100%);                                                    /* RGB invertido */
-[FIN devildrey33.invert]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("invert", "", basename(__FILE__), 'invert'); 
?>                   
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/opacity()'>opacity()</a></i></h3>
<div class="Tab">
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenOpacity"></div>
    </div>
    <p>Filtro que aplica una transparencia al objeto (<a href='https://en.wikipedia.org/wiki/Alpha_compositing' target='_blank'>alpha blend</a>)</p>
    <p>Hay que especificar un valor decimal positivo para aplicar la transparencia en el objeto.</p>
    <p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.opacity]-
filter:opacity(1.0);                                                    /* opaco */
filter:opacity(0.0);                                                    /* transparente */
-[FIN devildrey33.opacity]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("opacity", "", basename(__FILE__), 'opacity'); 
?>                   
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/saturate()'>saturate()</a></i></h3>
<div class="Tab">
    <div class='Caja'>    
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenSaturate"></div>
    </div>
    <p>Filtro que aplica saturación al objeto.</p>
    <p>Se tiene que especificar un porcentaje positivo, un 0% dejara el objeto sin saturación, un 100% dejará el objeto intacto, y un 101% o superior aplicará una saturación en el objeto.</p>
    <p>Por ejemplo :</p>    
<!-- -[INICIO devildrey33.saturate]-
filter:saturate(150%);                                                  /* Saturación al 150% */
-[FIN devildrey33.saturate]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("saturate", "", basename(__FILE__), 'saturate'); 
?>                   
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/sepia()'>sepia()</a></i></h3>
<div class="Tab">
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenSepia"></div>
    </div>
    <p>Filtro que aplica un color sepia al objeto.</p>
    <p>Se tiene que especificar un porcentaje positivo, un 0% dejara el objeto intacto, y un 100% o superior aplicará un color sepia al objeto.</p>
<!-- -[INICIO devildrey33.sepia]-
filter:sepia(0%);                                                       /* normal */
filter:sepia(100%);                                                     /* 100% sepia */
-[FIN devildrey33.sepia]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("sepia", "", basename(__FILE__), 'sepia'); 
?>                   
</div>
<hr />
<h2>Por destacar</h2>
<div class='Caja'>
    <div class="ImagenOriginal"></div>
    <div class="ImagenFiltro" id="ImagenCombi"></div>
</div>
<p>Puedes combinar uno o mas filtros para un mismo objeto, por ejemplo :</p>
<!-- -[INICIO devildrey33.combi]-
filter:drop-shadow(0px 0px 0px transparent) grayscale(100%);            /* Sin sombra y con escala de gris al 100% */    
filter:drop-shadow(3px 3px 3px #333) grayscale(0%);                     /* Sombra de 3x3 px 3px de blur casi negra sin escala de gris */
-[FIN devildrey33.combi]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("combi", "", basename(__FILE__), 'combi'); 
?>                   
<p>La propiedad <code>filter</code> se puede combinar con <a href='/Doc/CSS/Propiedades/transition'>transiciones</a> y <a href='/Doc/CSS/Propiedades/animation'>animaciones</a>.</p>

<br />

