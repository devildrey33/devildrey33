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
        border:1px dashed #666;
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
    .CodigoPath {
        margin-top:0px;
        position:absolute;
        width:100%;
        /*display:none;*/
    }
    .CodigoPath > code {
        position:relative;
        display:block;
        width:200%;
        left:-50%;
        text-align: center;
    }
    
    .CodigoPath:nth-child(1) { animation: E5P1 20s ease 0s infinite; }
    .CodigoPath:nth-child(2) { animation: E5P2 20s ease 0s infinite; }
    .CodigoPath:nth-child(3) { animation: E5P3 20s ease 0s infinite; }
    .CodigoPath:nth-child(4) { animation: E5P4 20s ease 0s infinite; }
    .CodigoPath:nth-child(5) { animation: E5P5 20s ease 0s infinite; }
/*    .CodigoPath:nth-child(6) { animation: E5P6 20s ease 0s infinite; } */

    @keyframes AniEllipse {
        0%   { clip-path:ellipse(10% 5%); }
        15%  { clip-path:ellipse(10% 5%); }
        20%  { clip-path:ellipse(120% 30%); }
        35%  { clip-path:ellipse(120% 30%); }
        40%  { clip-path:ellipse(80% 150% at 0% 50%); }
        55%  { clip-path:ellipse(80% 150% at 0% 50%); }
        60%  { clip-path:ellipse(70% 50% at 100% 20px); }
        75%  { clip-path:ellipse(70% 50% at 100% 20px); }
        80%  { clip-path:ellipse(100px 60% at 50px 150px); }
        95%  { clip-path:ellipse(100px 60% at 50px 150px); }
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
    
    @keyframes E5P1 {
        0%   { opacity:0; }
        5%   { opacity:1; }
        15%  { opacity:1; }
        20%  { opacity:0;  }
        100% { opacity:0;  }        
    }
    @keyframes E5P2 {
        0%   { opacity:0;  }
        15%  { opacity:0;  }
        20%  { opacity:1;  }
        35%  { opacity:1;  }
        40%  { opacity:0;  }
        100% { opacity:0;  }        
    }
    @keyframes E5P3 {
        0%   { opacity:0;  }
        35%  { opacity:0;  }
        40%  { opacity:1;  }
        55%  { opacity:1;  }
        60%  { opacity:0;  }
        100% { opacity:0;  }        
    }
    @keyframes E5P4 {
        0%   { opacity:0;  }
        55%  { opacity:0;  }
        60%  { opacity:1;  }
        75%  { opacity:1;  }
        80%  { opacity:0;  }
        100% { opacity:0;  }        
    }
    @keyframes E5P5 {
        0%   { opacity:0;  }
        75%  { opacity:0;  }
        80%  { opacity:1;  }
        95%  { opacity:1;  }
        100% { opacity:0;  }        
    }
</style>

<p>Esta propiedad permite recortar el área visible de un objeto, de forma que el navegador incluso es capaz de utilizar una figura SVG (path) para especificar la figura de un objeto.</p>
<div class='nota'>Esta propiedad se ha creado para substituir a la propiedad <a href='/Doc/CSS/Propiedades/clip'>clip</a>, que a partir de ahora se considera obsoleta.</div>
<h2>Sintaxis</h2>
<pre class='Sintaxis'>clip-path: <b>Valor</b>;</pre>
<hr /><br />
<p>A continuación tienes la lista de valores posibles :</p>


<h3><i>none</i></h3>
<div class='Tab'>
    <p>Muestra todo el objeto. <b>(valor por defecto)</b></p>
    <hr />
</div><br /><br />

<h3><i><a href='/Doc/CSS/Funciones/url()'>url()</a></i></h3>
<div class='Tab'>
    <p>Especifica que el objeto tomará el área definida de un svg.<br />Por ejemplo :</p>
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
        <div class='CodigoPath'>
            <code>inset(0px);</code>
        </div>
        <div class='CodigoPath'>
            <code>inset(10px);</code>
        </div>
        <div class='CodigoPath'>
            <code>inset(10px 20px);</code>
        </div>        
        <div class='CodigoPath'>
            <code>inset(10px 20px 30px);</code>
        </div>
        <div class='CodigoPath'>
            <code>inset(10px 20px 30px 40px);</code>
        </div>        
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
        <div class='CodigoPath'>
            <code>circle(10%);</code>
        </div>
        <div class='CodigoPath'>
            <code>circle(50% at 100% 20%);</code>
        </div>
        <div class='CodigoPath'>
            <code>circle(20% at 50% 25%);</code>
        </div>        
        <div class='CodigoPath'>
            <code>circle(40px at 10% 10%);</code>
        </div>
        <div class='CodigoPath'>
            <code>circle(100px at 150px 150px);</code>
        </div>        
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
        <div class='CodigoPath'>
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
        </div>        
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
    <p>El área a mostrar será un poligono. Para definir el polygono debes definir 3 o más puntos, cada punto debe tener un valor para la X y otro para la Y.<br />
    Todas las coordenadas deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
    <p>Por ejemplo :</p>
<!-- -[INICIO devildrey33.polygon]-
clip-path:polygon(50% 0%, 0% 100%, 100% 100%);  /* Un triangulo */
-[FIN devildrey33.polygon]- -->            
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("polygon", "", basename(__FILE__), 'polygon'); 
?>                   

</div><br />

<hr />
<h2>Área de partida</h2>
<p>En la MDN (en ingles, que es la mas completa) se menciona que se puede especificar un área de partida (basic-shape) desde donde se calculará el clip-path. SOLO Para firefox (de momento) podemos especificar el área de partida para la función inset. Pero según mis pruebas parece que no funciona con las funciones cirle, ellipse, y polygon (NTY).
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
<div class="nota">Hasta la fecha de este documento, el área de partida solo funciona en FireFox, y aún no queda muy claro si es solo para la función inset, o mas adelante tambien se podrá utilizar con circle, ellipse y polygon.</div>
<br /><hr />

<h2>Por destacar</h2>
<p>La propiedad <code>clip-path</code> se puede utilizar para crear <a href='/Doc/CSS/Propiedades/transition'>transiciones</a> y <a href='/Doc/CSS/Propiedades/animation'>animaciones</a>. Para ello hay que jugar con la misma función, por ejejmplo :</p>
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
