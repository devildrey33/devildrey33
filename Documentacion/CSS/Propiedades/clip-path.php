<?php    
/*
    https://tympanus.net/codrops/css_reference/clip-path/
    https://developer.mozilla.org/en-US/docs/Web/CSS/clip-path
    https://css-tricks.com/clipping-masking-css/
    https://tympanus.net/codrops/css_reference/shape-outside/

    funcións per crear/modificar
        url     : per modificar
        inset   : per crear
        circle  : per crear
        ellipse : per crear
        polygon : per crear
    s'ha de modificar també la propietat clip per REMARCAR que está obsoleta i que ara s'ha d'utilitzar clip-path
*/
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
    
    .EjemploPathInset::before {
        clip-path:inset(0px);
        animation: AniInset 20s ease 0s infinite;
        background: linear-gradient(60deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathInset::after {
        background: linear-gradient(60deg, red,orange,yellow,green,blue,indigo,violet);         
    }

    .EjemploPathCircle::before {
        clip-path:circle(10%);
        animation: AniCircle 20s ease 0s infinite;
        background: linear-gradient(120deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathCircle::after {
        background: linear-gradient(120deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    
    .EjemploPathEllipse::before {
        clip-path:ellipse(10% 5%);
        animation: AniEllipse 20s ease 0s infinite;
        background: linear-gradient(300deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathEllipse::after {
        background: linear-gradient(300deg, red,orange,yellow,green,blue,indigo,violet); 
    }    

    .EjemploPathPolygon::before {
        clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%, 50%  75%,   0%  75%,   0%  50%); 
        animation: AniPolygon 20s ease 0s infinite;
        background: linear-gradient(240deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathPolygon::after {
        background: linear-gradient(240deg, red,orange,yellow,green,blue,indigo,violet); 
    }    
    
    .EjemploPathDestacar {
        width:140px !important;
        height:140px !important;
    }
    
    .EjemploPathDestacar::before {
        transition:0.4s;
        text-align: center;        
        content:"";
        font-size:1.5em;
        background: linear-gradient(75deg, red,yellow,green,blue,violet);        
        clip-path:inset(10px); 
    }
    .EjemploPathDestacar:hover::before {
        clip-path:inset(40%); 
    }
    .EjemploPathDestacar::after {
        background: linear-gradient(75deg, red,yellow,green,blue,violet);                
    }
    
/*    .CodigoPath {
        margin-top:0px;
        position:absolute;
        width:100%;
    }
    .CodigoPath > code {
        position:relative;
        display:block;
        width:200%;
        left:-50%;
        text-align: center;
    }*/
    

    .EjemploTexto {
        position:absolute;
        font-size:25px;
        text-shadow:1px 1px 2px #000;
        color:#FFF;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
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
    
    @keyframes AniEllipse {
        0%   { clip-path:ellipse(10% 5%); }
        15%  { clip-path:ellipse(10% 5%); }
        20%  { clip-path:ellipse(120% 30%); }
        35%  { clip-path:ellipse(120% 30%); }
        40%  { clip-path:ellipse(80% 150% at 0% 50%); }
        55%  { clip-path:ellipse(80% 150% at 0% 50%); }
        60%  { clip-path:ellipse(70% 50% at 100% 20px); }
        75%  { clip-path:ellipse(70% 50% at 100% 20px); }
        80%  { clip-path:ellipse(100px 60% at 50% 150px); }
        95%  { clip-path:ellipse(100px 60% at 50% 150px); }
        100% { clip-path:ellipse(10% 5%); }
    }

    @keyframes AniCircle {
        0%   { clip-path:circle(10%); }
        15%  { clip-path:circle(10%); }
        20%  { clip-path:circle(50% at 100% 20%); }
        35%  { clip-path:circle(50% at 100% 20%); }
        40%  { clip-path:circle(20% at 50% 25%); }
        55%  { clip-path:circle(20% at 50% 25%); }
        60%  { clip-path:circle(40px at 10% 10%); }
        75%  { clip-path:circle(40px at 10% 10%); }
        80%  { clip-path:circle(100px at 150px 150px); }
        95%  { clip-path:circle(100px at 150px 150px); }
        100% { clip-path:circle(10%); }
    }

    @keyframes AniInset {
        0%   { clip-path:inset(0%);   }
        15%  { clip-path:inset(0%);   }
        20%  { clip-path:inset(10%);  }
        35%  { clip-path:inset(10%);  }
        40%  { clip-path:inset(10% 20%);  }
        55%  { clip-path:inset(10% 20%);  }
        60%  { clip-path:inset(10% 20% 30%);  }
        75%  { clip-path:inset(10% 20% 30%);  }
        80%  { clip-path:inset(10% 20% 30% 40%);  }
        95%  { clip-path:inset(10% 20% 30% 40%);  }
        100% { clip-path:inset(0%);  }
    }
    
</style>

        <!-- SVG con el logo -->
        <svg width="0" height="0" style="clip-rule:evenodd;" preserveAspectRatio="xMinYMin meet" >
            <defs>
                <clipPath id="Figura">
                    <path d="M70 22c12,0 23,5 32,12 18,-6 13,-19 8,-30 39,22 11,43 4,45 2,5 4,12 4,18 0,14 -7,27 -17,35 -4,23 -15,42 -45,31l-4 7c-7,-8 -10,-17 -12,-27 6,5 14,9 23,10l-4 7c16,2 26,-4 28,-20 -5,1 -11,3 -17,3 -26,0 -47,-21 -47,-46 0,-6 1,-13 4,-18 -8,-2 -33,-23 4,-45 -5,11 -11,24 7,30 9,-7 20,-12 32,-12zm-32 29c14,-3 27,17 27,24 0,7 -22,11 -28,8 -8,-4 -9,-28 1,-32zm65 0c-13,-3 -27,17 -27,24 0,7 22,11 28,8 8,-4 9,-28 -1,-32z"/>
                </clipPath>
            </defs>
        </svg>


<p>Esta propiedad permite recortar el área visible de un objeto, de forma que el navegador incluso es capaz de utilizar una figura SVG (path) para especificar la figura de un objeto.</p>
<div class='nota'>Esta propiedad se ha creado para substituir a la propiedad <a href='/Doc/CSS/Propiedades/clip'>clip</a>, que a partir de ahora se considera obsoleta.</div>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>clip-path: <b>Valor</b>;</pre>
<hr /><br />
<p>A continuación tienes la lista de valores posibles :</p>


<h3><i>none</i></h3>
<div class='Tab'>
    <p>No aplica ninguna mascara al objeto / Muestra el objeto tal cual. <b>(valor por defecto)</b></p>
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/url()'>url()</a></i></h3>
<div class='Tab'>
    <p>Especifica que el objeto tomará el área definida de un grupo de objetos dentro de un svg definido con una ID.</p>
    <p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.url]-            
clip-path:url(mi_archivo.svg#id_grupo);              /* SVG externo */
-[FIN devildrey33.url]- -->
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("url", "", basename(__FILE__), 'url'); 
    ?> 
    <hr />
</div><br /><br />



<h3><i><a href='/Doc/CSS/Funciones/inset()'>inset()</a></i></h3>
<div class='Tab'>
    <div class='EjemploPath EjemploPathInset'>
        <div class="EjemploTexto">Animación</div>        
    </div>
    <p>El área a mostrar se recortará partiendo de los valores especificados para formar un rectangulo. Los valores se pueden especificar con cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
    <p>El rectangulo inicial es el objeto completo, y a este se le restan los valores especificados</p>
        <div class='nota'>Podemos especificar hasta 4 valores.<br />
            Si especificamos solo un valor, se aplicara a los 4 costados.<br />
            Si especificamos 2 valores, el primer valor se asignara a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
            Si especificamos 3 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
            Si especificamos 4 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
        </div>
        <div>Por ejemplo :</div>
            
<!-- -[INICIO devildrey33.inset]-
clip-path:inset(10px);                      /* 10 pixeles menos para el top, bottom, left, right */
clip-path:inset(10px 20px);                 /* 10 pixeles menos para el top y bottom, 20 pixeles para el left y right */                
clip-path:inset(10px 20px, 30px);           /* 10 pixeles menos para el top, 20 pixeles para el left y right, 30 pixeles para el bottom */                
clip-path:inset(10px 20px, 30px, 40px);     /* 10 pixeles menos para el top, 20 pixeles para el right, 30 pixeles para el bottom, 40 pixeles para el left */     
 -[FIN devildrey33.inset]- -->
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("inset", "", basename(__FILE__), 'inset'); 
    ?>   
    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/circle()'>circle()</a></i></h3>
<div class="Tab">
    <div class='EjemploPath EjemploPathCircle'>
        <div class="EjemploTexto">Animación</div>
    </div>
    
    
    <p>El área a mostrar será un circulo. El primer valor es el rádio y no es opcional, y luego se puede espeficicar la posición inicial añadiendo <code>at X Y</code>.</p>
    <p>El rádio debe ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida.</p>
    <p>Las coordenadas de inicio se pueden especificar con cualquier tipo de unidad de tamaño relativo válido, tanto positivo como negativo.<br />
Para más información sobre unidades de tamaño relativo, consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.circle]-
clip-path:circle(5px);                      /* 5 pixeles de rádio */
clip-path:circle(10% at 5px 10px);          /* 10% de rádio empezando 5 pixeles a la derecha y 10 desde arriba */
clip-path:circle(50px at 25% 75%);          /* 50 Pixeles de rádio empezando un 25% a la derecha y un 75% desde arriba */
-[FIN devildrey33.circle]- -->            
    <?php 
        $Base->PintarCodigo->PintarArchivoCSS("circle", "", basename(__FILE__), 'circle'); 
    ?>            
    <hr />
</div><br /><br />


<h3><i><a href='/Doc/CSS/Funciones/ellipse()'>ellipse()</a></i></h3>
<div class="Tab">
    <div class='EjemploPath EjemploPathEllipse'>
        <div class="EjemploTexto">Animación</div>
    </div>
    
    
    <p>El área a mostrar será un ellipse. Los primeros valores son el rádio X y el rádio Y y no son opcionales, y luego se puede espeficicar la posición inicial añadiendo <code>at X Y</code>.</p>
    <p>Los rádios deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida.</p>
<p>Las coordenadas de inicio se pueden especificar con cualquier tipo de unidad de tamaño relativo válido, tanto positivo como negativo.<br />
Para más información sobre unidades de tamaño relativo, consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.ellipse]-
clip-path:ellipse(6px 3px);                 /* 6 pixeles de rádio X y 3 pixeles de rádio Y */
clip-path:ellipse(10% 30% at 5px 10px);     /* 10% de rádio X y 30% de rádio Y, empezando 5 pixeles a la derecha y 10 pixeles desde arriba */
clip-path:ellipse(500px 50% at 0% 100px);   /* 500px de rádio X y 50% de rádio Y, empezando 0% a la derecha y 100 pixeles desde arriba */
-[FIN devildrey33.ellipse]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("ellipse", "", basename(__FILE__), 'ellipse'); 
?>         
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/polygon()'>polygon()</a></i></h3>
<div class="Tab">
    <div class='EjemploPath EjemploPathPolygon'>
        <div class="EjemploTexto">Animación</div>
<!--        <div class='CodigoPath'>
            <code>ellipse(10% 5%);</code>
        </div>
        <div class='CodigoPath'>
            <code>ellipse(120% 30%);</code>
        </div>
        <div class='CodigoPath'>
            <code>ellipse(80% 150% at 0% 50%);</code>
        </div>        
        <div class='CodigoPath'>
            <code>ellipse(70% 50% at 100% 20px);</code>
        </div>
        <div class='CodigoPath'>
            <code>ellipse(100px 60% at 50px 150px);</code>
        </div>        -->
    </div>
    
    <p>El área a mostrar será un poligono. Para definir el poligono debes definir 3 o más puntos, cada punto debe tener un valor para la X y otro para la Y.</p>
    <p>Todas las coordenadas deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
    <p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.polygon]-
clip-path:polygon(50% 0%, 0% 100%, 100% 100%);                                                                                  /* Triangulo */
clip-path:polygon(20% 0%, 80% 0%, 100% 100%, 0% 100%);                                                                          /* Trapezoide */
clip-path:polygon(20% 0%, 0% 20%, 30% 50%, 0% 80%, 20% 100%, 50% 70%, 80% 100%, 100% 80%, 70% 50%, 100% 20%, 80% 0%, 50% 30%);  /* Cruz */
-[FIN devildrey33.polygon]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("polygon", "", basename(__FILE__), 'polygon'); 
?>                   
<!-- -[INICIO devildrey33.polygon2]-
clip-path:polygon(  0%   0%, 100%   0%, 100%  75%,  75%  75%,  75% 100%,  50%  75%,   0%  75%,   0%  60%,   0%  42%,   0%  25%);    /* Bocadillo   */
clip-path:polygon( 40%   0%,  40%  20%, 100%  20%, 100%  40%, 100%  60%, 100%  80%,   70%  80%, 40%  80%,  40% 100%,   0%  50%);    /* Flecha izq. */
clip-path:polygon( 50%   0%,  80%  10%, 100%  35%, 100%  70%,  80%  90%,  50% 100%,  20%  90%,   0%  70%,   0%  35%,  20%  10%);    /* Decágono    */
clip-path:polygon( 50%   0%,  61%  35%,  98%  35%,  68%  57%,  79%  91%,  50%  70%,  21%  91%,  32%  57%,   2%  35%,  39%  35%);    /* Estrella    */
clip-path:polygon(  0%   0%,   0% 100%,  25% 100%,  25%  25%,  75%  25%,  75%  75%,  25%  75%,  25% 100%, 100% 100%, 100%   0%);    /* Ventana     */
-[FIN devildrey33.polygon2]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("polygon2", "Pasos de la animación de la derecha (10 puntos)", basename(__FILE__), 'polygon2'); 
?>                   

<div class='nota'>Para hacer los poligonos he utilizado la siguiente página : <a href='https://bennettfeely.com/clippy/' target="_blank">Clippy</a>, El truco para animar desde un poligono a otro es que tienen que tener siempre el mismo número de puntos, por ejemplo el Bocadillo solo tiene 7 puntos por lo que he añadido 3 puntos más para que todos los poligonos de la animación tuvieran 10 puntos .</div>
</div><br />

<hr />
<h2>Área de partida</h2>
<p>En la MDN (en ingles, que es la mas completa) se menciona que se puede especificar un área de partida (basic-shape) desde donde se calculará el clip-path. SOLO Para firefox (de momento) podemos especificar el área de partida para la función inset. Pero según mis pruebas parece que no funciona con las funciones cirle, ellipse, y polygon.
<!--<table class='Tabla'>
    <tr>
        <td style="width:250px"><b>fill-box<br />stroke-box<br />view-box<br />margin-box<br />border-box<br />padding-box<br />content-box</b></td>
        <td>Especifica una <i>área rectangular</i> de partida. Si se especifica en combinación con una <i>figura básica</i>, dicha figura utilizará como punto de partida las coordenadas del área de la caja especificada. -->
            <table class='Tabla'>
                <tr>
                    <td><b>fill-box</b></td>
                    <td>Utiliza el área del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>stroke-box</b></td>
                    <td>Utiliza el área del trazo como referencia.</td>
                </tr>
                <tr>
                    <td><b>view-box</b></td>
                    <td>Utiliza el viewport del SVG como referencia.</td>
                </tr>
                <tr>
                    <td><b>margin-box</b></td>
                    <td>Utiliza el área del margen del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>border-box</b></td>
                    <td>Utiliza el área del borde del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>padding-box</b></td>
                    <td>Utiliza el área del relleno del objeto como referencia.</td>
                </tr>
                <tr>
                    <td><b>content-box</b></td>
                    <td>Utiliza el área del contenido del objeto como referencia.</td>
                </tr>
                
            </table>
<!--        </td>        
    </tr>
</table> -->
<div class="nota">Hasta la fecha de este documento, el área de partida solo funciona en FireFox, y aún no queda muy claro si es solo para la función <code>inset</code>, o mas adelante también se podrá utilizar con <code>circle</code>, <code>ellipse</code> y <code>polygon</code>.</div>
<br /><hr />

<h2>Por destacar</h2>
<div class='EjemploPath EjemploPathDestacar'>
    <div class="EjemploTexto">Transición MouseOver</div>    
</div>
<p>La propiedad <code>clip-path</code> se puede utilizar para crear <a href='/Doc/CSS/Propiedades/transition'>transiciones</a> y <a href='/Doc/CSS/Propiedades/animation'>animaciones</a>. Existen varias limitaciones, la mas importante es que no se pueden combinar funciones, es decir no podemos hacer una transición de la función <code>circle</code> a la función <code>polygon</code>. En definitiva, para realizar una transición / animación se tiene que utilizar siempre la misma función en todos los pasos.</p>
<p>Además si queremos animar un polygono, todas las fases de la animación deben tener el mismo número de puntos / coordenadas. Es decir, no podemos animar un poligono de 8 puntos a un poligono de 10 puntos...</p>
<!-- -[INICIO devildrey33.combi]-
.Objeto {
    transition:0.4s;                        /* Transición de 0.4 segundos */
    clip-path:inset(10px);                  /* desde 10 pixeles */    
}
.Objeto:hover {
    clip-path:inset(20px);                  /* hasta 20 pixeles */    
}
-[FIN devildrey33.combi]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("combi", "", basename(__FILE__), 'combi'); 
?>                   
<div class='nota'>
    La transición / animación solo será posible si utilizamos en cada paso la misma función. Si por ejemplo hacemos una transición de <code>inset(10px)</code> a <code>circle(20px)</code>, la transición no se ejecutara por tratarse de distintas funciones.<br />
    Para la función <code>polygon</code> hay que especificar el mismo número de coordenadas en cada paso para que funcione la animación / transición.
<!--    Este ejemplo no ejecutará la transición :<br /> -->
<!-- -[INICIO devildrey33.combi2]-
.Objeto {
    transition:0.4s;                        /* Transición de 0.4 segundos */
    clip-path:inset(10px);                  /* rectangulo con 10 pixeles de margen */   
}
.Objeto:hover {
    clip-path:circle(20px);                 /* circulo de 20px de rádio centrado */    
}
-[FIN devildrey33.combi2]- -->            
<?php 
//    $Base->PintarCodigo->PintarArchivoCSS("combi2", "", basename(__FILE__), 'combi'); 
?>                   
</div>
<br />
