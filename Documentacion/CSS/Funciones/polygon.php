<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;  
?>
<style>
    .EjemploPath {
        position:relative;
        float:right;
        width:210px; 
        height:210px;
        border:1px dashed rgba(78, 78, 78, 0.5);
        margin-left:10px;
    }
    .EjemploPath::before {
        display:table;
        position:relative;
        content:'';        
        width:100%;
        height:100%;
    }
    
    .EjemploPath::after {
        display:table;
        position:absolute;
        content:'';        
        top:0;
        width:100%;
        height:100%;
        opacity:0.3;
    }

    .EjemploTexto {
        position:absolute;
        font-size:25px;
        text-shadow:1px 1px 2px #000;
        color:#FFF;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }       

    .EjemploPathPolygon::before {
        clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%, 50%  75%,   0%  75%,   0%  50%); 
        animation: AniPolygon 20s ease 0s infinite;
        background: linear-gradient(240deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathPolygon::after {
        background: linear-gradient(240deg, red,orange,yellow,green,blue,indigo,violet); 
    } 
    
    @keyframes AniPolygon {
        0%   { clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%,  50%  75%,   0%  75%,   0%  60%,   0%  42%,   0%  25%); }
        15%  { clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%,  50%  75%,   0%  75%,   0%  60%,   0%  42%,   0%  25%); }
        
        20%  { clip-path:polygon( 40%   0%,  40%  20%, 100%  20%, 100%  40%, 100%  60%, 100%  80%,   70%  80%, 40%  80%,  40% 100%,   0%  50%); }
        35%  { clip-path:polygon( 40%   0%,  40%  20%, 100%  20%, 100%  40%, 100%  60%, 100%  80%,   70%  80%, 40%  80%,  40% 100%,   0%  50%); }
        
        40%  { clip-path:polygon( 50%   0%,  80%  10%, 100%  35%, 100%  70%,  80%  90%,  50% 100%,  20%  90%,   0%  70%,   0%  35%,  20%  10%); }
        55%  { clip-path:polygon( 50%   0%,  80%  10%, 100%  35%, 100%  70%,  80%  90%,  50% 100%,  20%  90%,   0%  70%,   0%  35%,  20%  10%); }
        
        60%  { clip-path:polygon( 50%   0%,  61%  35%,  98%  35%,  68%  57%,  79%  91%,  50%  70%,  21%  91%,  32%  57%,   2%  35%,  39%  35%); }
        75%  { clip-path:polygon( 50%   0%,  61%  35%,  98%  35%,  68%  57%,  79%  91%,  50%  70%,  21%  91%,  32%  57%,   2%  35%,  39%  35%); }
        
        80%  { clip-path:polygon(  0%   0%,   0% 100%,  25% 100%,  25%  25%,  75%  25%,  75%  75%,  25%  75%,  25% 100%, 100% 100%, 100%   0%); }
        95%  { clip-path:polygon(  0%   0%,   0% 100%,  25% 100%,  25%  25%,  75%  25%,  75%  75%,  25%  75%,  25% 100%, 100% 100%, 100%   0%); }
        
        100% { clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%,  50%  75%,   0%  75%,   0%  60%,   0%  42%,   0%  25%); }
    }    
</style>
<p>Esta función recorta el área visible del objeto utilizando el poligono especificado.</p>
<p>Solo se puede utilizar en la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<hr />
<h2>Sintaxis</h2>
    <div class='EjemploPath EjemploPathPolygon'>
        <div class="EjemploTexto">Animación</div>
    </div>
<pre class='Sintaxis'>polygon( <i>X</i> <i>Y</i>, <i>X</i> <i>Y</i>, <i>X</i> <i>Y</i>, ... );</pre>
<br />
<p>Para definir el polygono debes definir 3 o más puntos, cada punto debe tener un valor para la X y otro para la Y.</p>
<p>Todas las coordenadas deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Por ejemplo puedes ver los pasos de la animación de la derecha (10 puntos) :</p>
<!-- -[INICIO devildrey33.polygon]-
clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%,  50%  75%,   0%  75%,   0%  60%,   0%  42%,   0%  25%);    /* Bocadillo   */
clip-path:polygon( 40%   0%,  40%  20%, 100%  20%, 100%  40%, 100%  60%, 100%  80%,   70%  80%, 40%  80%,  40% 100%,   0%  50%);    /* Flecha izq. */
clip-path:polygon( 50%   0%,  80%  10%, 100%  35%, 100%  70%,  80%  90%,  50% 100%,  20%  90%,   0%  70%,   0%  35%,  20%  10%);    /* Decágono    */
clip-path:polygon( 50%   0%,  61%  35%,  98%  35%,  68%  57%,  79%  91%,  50%  70%,  21%  91%,  32%  57%,   2%  35%,  39%  35%);    /* Estrella    */
clip-path:polygon(  0%   0%,   0% 100%,  25% 100%,  25%  25%,  75%  25%,  75%  75%,  25%  75%,  25% 100%, 100% 100%, 100%   0%);    /* Ventana     */
-[FIN devildrey33.polygon]-  -->
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("polygon", "", basename(__FILE__), 'polygon'); 
?>               
<div class='nota'>Se puede aplicar una animación o una transición con la función <code>polygon</code> siempre que todos los pasos tengan el mismo numero de puntos.</div>