<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;  
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
        content:"blur";
        position:absolute;
        top:-20px;
        left: 50%;
        transform: translate(-50%, 0%);
    }
    
    
    #ImagenBlur         { animation:AniImagenBlur 3s ease-in-out 1s infinite alternate;    }
    @keyframes AniImagenBlur {
        0%   {  filter:blur(0px);  }
        100% {  filter:blur(5px);  }
    }    
</style>

<p>Esta función aplica un filtro para desenfocar el objeto con un <a href='https://es.wikipedia.org/wiki/Desenfoque_gaussiano' target='_blank'>desenfoque gausiano</a>.</p>
<p>Solo se puede utilizar dentro de la propiedad <a href='/Doc/CSS/Propiedades/filter'>filter</a>.</p>
<hr />
<h2>Sintaxis</h2>
    <div class='Caja'>
        <div class="ImagenOriginal"></div>
        <div class="ImagenFiltro" id="ImagenBlur"></div>
    </div>
<pre class='Sintaxis'>blur( <i>desenfoque</i> );</pre>

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
