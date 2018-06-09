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
    
    .EjemploPathInset::before {
        clip-path:inset(0px);
        animation: AniInset 20s ease 0s infinite;
        background: linear-gradient(60deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathInset::after {
        background: linear-gradient(60deg, red,orange,yellow,green,blue,indigo,violet);         
    }    @keyframes AniInset {
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

    .EjemploTexto {
        position:absolute;
        font-size:25px;
        text-shadow:1px 1px 2px #000;
        color:#FFF;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
    }    
    </style>

<p>Esta función recorta el área visible del objeto al tamaño del rectangulo especificado.</p>
<p>Solo se puede utilizar en la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<hr />
<h2>Sintaxis</h2>
<div class='EjemploPath EjemploPathInset'>
    <div class="EjemploTexto">Animación</div>        
</div>
<pre class='Sintaxis'>inset( <i>top left right borrom</i> );</pre>
<p>Los valores se pueden especificar con cualquier tipo de unidad de tamaño relativa válida. Para más información consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<div class='nota'>Podemos especificar hasta 4 valores (uno por cada costado).<br />
    Si especificamos solo un valor, se aplicara a los 4 costados.<br />
    Si especificamos 2 valores, el primer valor se asignara a <i>top</i> / <i>bottom</i>, y el segundo valor a <i>left</i> / <i>right</i>.<br />
    Si especificamos 3 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>.<br />
    Si especificamos 4 valores, el primer valor se asignara al <i>top</i>, el segundo al <i>right</i>, y el tercero al <i>bottom</i>, y el cuarto al <i>left</i>.<br />
</div>
<div>Por ejemplo :</div>
            
<!-- -[INICIO devildrey33.inset]-
clip-path:inset(10px);                      /* 10 pixeles para el top, bottom, left, right */
clip-path:inset(10px 20px);                 /* 10 pixeles para el top y bottom, 20 pixeles para el left y right */                
clip-path:inset(10px 20px, 30px);           /* 10 pixeles para el top, 20 pixeles para el left y right, 30 pixeles para el bottom */                
clip-path:inset(10px 20px, 30px, 40px);     /* 10 pixeles para el top, 20 pixeles para el right, 30 pixeles para el bottom, 40 pixeles para el left */     
 -[FIN devildrey33.inset]- -->
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("inset", "", basename(__FILE__), 'inset'); 
?>            
