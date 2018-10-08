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
    
    .EjemploPathCircle::before {
        clip-path:circle(10%);
        animation: AniCircle 20s ease 0s infinite;
        background: linear-gradient(120deg, red,orange,yellow,green,blue,indigo,violet); 
    }
    .EjemploPathCircle::after {
        background: linear-gradient(120deg, red,orange,yellow,green,blue,indigo,violet); 
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
    
</style>

<p>Esta función recorta el área visible del objeto al tamaño del círculo especificado.</p>
<p>Solo se puede utilizar en la propiedad <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<hr />
<h2>Sintaxis</h2>
    <div class='EjemploPath EjemploPathCircle'>
        <div class="EjemploTexto">Animación</div>
    </div>
<pre class='Sintaxis'>circle( <i>radio</i> [ <i>at X Y</i> ] );</pre>

<p>El rádio debe ser un valor positivo utilizando cualquier tipo de unidad de tamaño relativa válida.</p>
<p>Las coordenadas de inicio son opcionales, y se pueden especificar con cualquier tipo de unidad de tamaño relativo válido, tanto positivo como negativo.<br />
Para más información sobre unidades de tamaño relativo, consulta la <a href="/Doc/CSS/Unidades/" target="_blank" title="px, ex, em, rem, %">Referencia CSS : Unidades</a>.</p>
<p>Por ejemplo podéis ver los pasos de la animación de la derecha :</p>            
<!-- -[INICIO devildrey33.circle]-
clip-path:circle(10%);                      /* 10 píxeles de radio                                  */
clip-path:circle(50% at 100% 20%);          /* 50% de radio al 100% de la X y al 20% de la Y        */
clip-path:circle(20% at 50% 25%);           /* 20% de radio al  50% de la X y al 25% de la Y        */
clip-path:circle(40px at 10% 10%);          /* 40 píxeles de radio al 10% de la X y la Y            */
clip-path:circle(100px at 150px 150px);     /* 100 píxeles de radio a 150 píxeles de la X y la Y    */
 -[FIN devildrey33.circle]- -->
<?php 
    $Base->PintarCodigo->PintarArchivoCSS("circle", "", basename(__FILE__), 'circle'); 
?>            
