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
        
    .EjemploPathEllipse::before {
        clip-path:ellipse(10% 5%);
        animation: AniEllipse 20s ease 0s infinite;
        background: linear-gradient(300deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathEllipse::after {
        background: linear-gradient(300deg, red,orange,yellow,green,blue,indigo,violet); 
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
</style>

<p>Esta función recorta el área visible del objeto al tamaño del elipse especificado.</p>
<p>Solo se puede utilizar en la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<hr />
<h2>Sintaxis</h2>
    <div class='EjemploPath EjemploPathEllipse'>
        <div class="EjemploTexto">Animación</div>
    </div>
<pre class='Sintaxis'>ellipse( <i>radioX</i> <i>RadioY</i> [ <i>at X Y</i> ] );</pre>
<br />
<p>Los radios deben ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida.</p>
<p>Las coordenadas de inicio son opcionales, y se pueden especificar con cualquier tipo de unidad de tamaño relativo válido, tanto positivo como negativo.<br />
Para más información sobre unidades de tamaño relativo, consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Por ejemplo podéis ver los pasos de la animación de la derecha :</p>                        
<!-- -[INICIO devildrey33.ellipse]-
clip-path:ellipse(10% 5%);                  /* 10% de radio X, 5% de radio Y                                                    */
clip-path:ellipse(120% 30%);                /* 120% de radio X, 30% de radio Y                                                  */
clip-path:ellipse(80% 150% at 0% 50%);      /* 80% de radio X, 150% de radio Y, 0% posición X, 50% posición Y                   */
clip-path:ellipse(70% 50% at 100% 20px);    /* 70% de radio X, 50% de radio Y, 100% posición X, 20 píxeles posición Y           */
clip-path:ellipse(100px 60% at 50% 150px);  /* 100 píxeles de radio X, 60% de radio Y, 50% posición X, 150 píxeles posición Y   */
 -[FIN devildrey33.ellipse]- -->
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("ellipse", "", basename(__FILE__), 'ellipse'); 
?>            
