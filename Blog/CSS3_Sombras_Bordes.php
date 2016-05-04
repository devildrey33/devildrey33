<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	*/
	
	$DeclaracionesHeadExtras = "
<!-- DECLARACIONES HEAD EXTRAS -->
<style> 
    .Rectangulo {
        position:relative; width:300px; height:20px; border:1px solid #000; background-color:#444; float:left; margin-left:10px; text-align:center; color:#FFF;
    }

    .Rectangulo2 {
        position:relative; width:480px; height:20px; background:#666; border:1px solid #000; float:left; margin-left:10px; text-align:center; color:#FFF;
    }

                .Txt {
    position:relative; width:440px; height:20px; float:left; margin-left:10px; text-align:center; font-size:24px;                }
/* -[INICIO devildrey33.BoxShadow]- */
.BoxShadow1 { box-shadow: -5px -5px 5px rgba(0,0,0, 0.5) }
.BoxShadow2 { box-shadow:  5px -5px 5px rgba(0,0,0, 0.5) }
.BoxShadow3 { box-shadow: -5px  5px 5px rgba(0,0,0, 0.5) }
.BoxShadow4 { box-shadow:  5px  5px 5px rgba(0,0,0, 0.5) }
/* -[FIN devildrey33.BoxShadow]- */

/* -[INICIO devildrey33.BoxShadow2]- */
.BoxShadowMultiple { 
    box-shadow: 10px -10px 10px rgba(255,0,0, 0.6),    /* Rojo     */
               -10px -10px 10px rgba(0, 255, 0, 0.6),  /* Verde    */
               -10px  10px 10px rgba(0,0,255, 0.6),    /* Azul     */
                10px  10px 10px rgba(255,255, 0, 0.6), /* Amarillo */
                 0px  0px  5px 5px rgba(0,0,0, 1.0);   /* Negro    */
}
/* -[FIN devildrey33.BoxShadow2]- */

/* -[INICIO devildrey33.TextShadow]- */
.TextShadow1 { text-shadow: -2px -2px 2px rgba(0,0,0, 0.7); }
.TextShadow2 { text-shadow:  2px -2px 2px rgba(0,0,0, 0.7); }
.TextShadow3 { text-shadow: -2px  2px 2px rgba(0,0,0, 0.7); }
.TextShadow4 { text-shadow:  2px  2px 2px rgba(0,0,0, 0.7); }
/* -[FIN devildrey33.TextShadow]- */

/* -[INICIO devildrey33.TextShadow2]- */
.TextShadowMultiple {
	text-shadow: 2px 1px 1px rgba(255, 255, 0, 0.9),     
				 4px 2px 2px rgba(200, 50, 0, 0.9),
				 6px 3px 3px rgba(150, 100, 0, 0.9),
				 10px 4px 5px rgba(150, 150, 0, 0.7),
				 14px 5px 8px rgba(200, 200, 0, 0.7),
				 20px 6px 12px rgba(255, 255, 0, 0.5) 
}
/* -[FIN devildrey33.TextShadow2]- */

/* -[INICIO devildrey33.BorderRadius]- */
.BorderRadius1 { border-radius: 20px  0px  0px  0px; }
.BorderRadius2 { border-radius:  0px 20px  0px  0px; }
.BorderRadius3 { border-radius:  0px  0px  0px 20px; }
.BorderRadius4 { border-radius:  0px  0px 20px  0px; }
/* -[FIN devildrey33.BorderRadius]- */

/* -[INICIO devildrey33.Animacion]- */
.Animacion {
    width:200px; height:100px; border-color:#000; border-width:1px; border-style:solid; background-color:#00F; color:#FFF; text-align:center; font-size:24px;    
    


    border-radius:2px;
    box-shadow: 10px 10px 10px rgba(50, 50, 50, 0.7);
    text-shadow: 10px 10px 10px rgba(0, 0, 0, 1.0);
    -webkit-transition-property:border-radius, box-shadow, text-shadow; 
    -webkit-transition-duration:2s, 2s, 2s;
    transition-property:border-radius, box-shadow, text-shadow; 
    transition-duration:2s, 2s, 2s;
}
    
.Animacion:hover {
    border-radius:50px;
    box-shadow: -10px 10px 10px rgba(50, 50, 50, 0.7);
    text-shadow: -10px 10px 10px rgba(0, 0, 0, 1.0);
    -webkit-transition-property:border-radius, box-shadow, text-shadow; 
    -webkit-transition-duration:2s, 2s, 2s;
    transition-property:border-radius, box-shadow, text-shadow; 
    transition-duration:2s, 2s, 2s;
}
/* -[FIN devildrey33.Animacion]- */
</style>  	
	";
	
//	$Base->InicioPlantilla("CSS3 : Sombras y bordes redondeados", $DeclaracionesHeadExtras);
        
	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="CSS3 : Sombras y bordes redondeados">
        <meta name="keywords" content="CSS3, CSS Sombras, CSS Bordes, CSS3 Sombras. CSS3 Bordes">';

	
        $Base->InicioPlantilla(basename(__FILE__), "CSS3 : Sombras y bordes redondeados", $META);
        
        $Base->InicioBlog(basename(__FILE__), "CSS3 : Sombras y bordes redondeados");
        
?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="CSS3 : Sombras y bordes redondeados" />
                <p>Hoy para variar un poco y como estoy bastante puesto en el tema últimamente vamos a ver varios efectos CSS3 referentes al sombreado de texto/objetos y a redondear rectángulos/cuadrados.</p>
                <p>Ya aviso que Internet explorer 9 no soporta el sombreado de textos, y a pesar de que este efecto no sea compatible con explorer ya he visto más de una web que lo utiliza sin ningún tipo de remordimientos, es mas yo en mi web tengo muy poco en cuenta a internet explorer, y si alguien se atreve a entrar con él, verá como el muñequito rojo de abajo a la derecha le mete bronca. Por no hablar de que internet explorer 6 y 7 directamente no son soportados por esta web y te manda a un enlace simple que explica el porqué.</p>
                <!-- FIN_INTRODUCCION -->
                <br /><h2>box-shadow</h2>
                <p>La propiedad <a href="/Doc/CSS/Propiedades/box-shadow" target="_blank">box-shadow</a> tiene como objetivo pintar una sombra por debajo de una caja (en esencia cualquier objeto rectangular). Observad los siguientes ejemplos :</p>
                <div style='position:relative; width:300px; height:20px; border:1px solid #000; background-color:#444; float:left; margin-left:10px; text-align:center; color:#FFF; box-shadow: -5px -5px 5px rgba(0,0,0, 0.5)'>BoxShadow1 (-5, -5, 5)</div>                
                <div style='position:relative; width:300px; height:20px; border:1px solid #000; background-color:#444; float:left; margin-left:10px; text-align:center; color:#FFF; box-shadow:  5px -5px 5px rgba(0,0,0, 0.5)'>BoxShadow2 (5, -5, 5)</div>
                <br /><br />
                <div style='position:relative; width:300px; height:20px; border:1px solid #000; background-color:#444; float:left; margin-left:10px; text-align:center; color:#FFF; box-shadow: -5px  5px 5px rgba(0,0,0, 0.5)'>BoxShadow3 (-5, 5, 5)</div> 
                <div style='position:relative; width:300px; height:20px; border:1px solid #000; background-color:#444; float:left; margin-left:10px; text-align:center; color:#FFF; box-shadow:  5px  5px 5px rgba(0,0,0, 0.5)'>BoxShadow4 (5, 5, 5)</div>
                <br /><p>Las declaraciones de los cuatro rectángulos en CSS son las siguientes :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDBS", "box-shadow", "CSS3_Sombras_Bordes.php", "BoxShadow"); ?>
                <p>Hay bastante confusión sobre el orden de los parámetros, yo antiguamente recuerdo haber tenido más de un problema en ciertos navegadores por el orden de los parámetros, actualmente creo que se soporta el color de la sombra tanto al principio como al final, pero hace tiempo recuerdo que en algún navegador tenía problemas si no los ponía al principio. De todas formas según veo en varias webs se suele especificar al final.</p>
                <p>El color se puede poner con <a href="/Doc/CSS/Funciones/rgb()" target="_blank">rgb()</a>, <a href="/Doc/CSS/Funciones/rgba()" target="_blank">rgba()</a>, o con hex, y como ya he comentado actualmente creo que funciona tanto si es en el primer parámetro como en el ultimo.</p>
                <p>Pero esto no es todo, actualmente se pueden utilizar varias sombras en un mismo objeto. Observad el siguiente ejemplo :</p><br />
                <div class='Centrado'><div style='position:relative; width:300px; height:20px; border:1px solid #000; background-color:#444; float:left; margin-left:10px; text-align:center; color:#FFF; box-shadow: 10px -10px 10px rgba(255,0,0, 0.6), -10px -10px 10px rgba(0, 255, 0, 0.6), -10px  10px 10px rgba(0,0,255, 0.6), 10px  10px 10px rgba(255,255, 0, 0.6), 0px  0px  5px 5px rgba(0,0,0, 1.0);'>BoxShadowMultiple</div></div><br />
                
                <p>A continuación podéis ver el código CSS que se ha utilizado para este ejemplo :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDBS2", "box-shadow", "CSS3_Sombras_Bordes.php", "BoxShadow2"); ?><br />
                <h2>text-shadow</h2>
                <p>La propiedad <a href="/Doc/CSS/Propiedades/text-shadow" target="_blank">text-shadow</a> funciona de una forma muy similar a <a href="/Doc/CSS/Propiedades/box-shadow" target="_blank">box-shadow</a> y su objetivo es pintar una sombra debajo de un texto. Observad el siguiente ejemplo :</p>

                <div style='position:relative; width:440px; height:20px; float:left; margin-left:10px; text-align:center; font-size:24px; text-shadow: -2px -2px 2px rgba(0,0,0, 0.7);'>TextShadow1</div>
                <div style='position:relative; width:440px; height:20px; float:left; margin-left:10px; text-align:center; font-size:24px; text-shadow:  2px -2px 2px rgba(0,0,0, 0.7);'>TextShadow2</div>
                <div style='position:relative; width:440px; height:20px; float:left; margin-left:10px; text-align:center; font-size:24px; text-shadow: -2px  2px 2px rgba(0,0,0, 0.7);'>TextShadow3</div>
                <div style='position:relative; width:440px; height:20px; float:left; margin-left:10px; text-align:center; font-size:24px; text-shadow:  2px  2px 2px rgba(0,0,0, 0.7);'>TextShadow4</div><br /><br />
                <p>Para sombrear los ejemplos anteriores se ha utilizado el siguiente código CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDTS", "text-shadow", "CSS3_Sombras_Bordes.php", "TextShadow"); ?>
                <p>Como podéis ver la declaración es prácticamente igual a la de <a href="/Doc/CSS/Propiedades/box-shadow" target="_blank">box-shadow</a>, y al igual que <a href="/Doc/CSS/Propiedades/box-shadow" target="_blank">box-shadow</a> también se permiten múltiples sombras en el texto. Observad el siguiente ejemplo :</p>
	

                <div class='Centrado'><div style='position:relative; width:440px; height:20px; float:left; margin-left:10px; text-align:center; font-size:24px; text-shadow: 2px 1px 1px rgba(255, 255, 0, 0.9), 4px 2px 2px rgba(200, 50, 0, 0.9), 6px 3px 3px rgba(150, 100, 0, 0.9), 10px 4px 5px rgba(150, 150, 0, 0.7), 14px 5px 8px rgba(200, 200, 0, 0.7), 20px 6px 12px rgba(255, 255, 0, 0.5);'>TextShadowMultiple</div></div><br />
                <p>El código del ejemplo anterior es el siguiente : </p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDTS2", "text-shadow", "CSS3_Sombras_Bordes.php", "TextShadow2"); ?>
                <p>En definitiva hay un gran abanico de posibilidades, pero ojo! no me pongáis text-shadow en todos los textos de la web, o bajara considerablemente la velocidad de renderizado.</p>
                <h2>border-radius</h2>
                <p>Esta propiedad permite redondear una o más puntas de cualquier tipo de objeto rectangular. Observad el siguiente ejemplo :</p>
                <div style='position:relative; width:480px; height:20px; background:#666; border:1px solid #000; float:left; margin-left:10px; text-align:center; color:#FFF; border-radius: 20px  0px  0px  0px;'>BorderRadius1 (20, 0, 0, 0)</div> 
                <div style='position:relative; width:480px; height:20px; background:#666; border:1px solid #000; float:left; margin-left:10px; text-align:center; color:#FFF; border-radius:  0px 20px  0px  0px;'>BorderRadius2 (0, 20, 0, 0)</div>
                <br /><br />
                <div style='position:relative; width:480px; height:20px; background:#666; border:1px solid #000; float:left; margin-left:10px; text-align:center; color:#FFF; border-radius:  0px  0px  0px 20px;'>BorderRadius3 (0, 0, 0, 20)</div> 
                <div style='position:relative; width:480px; height:20px; background:#666; border:1px solid #000; float:left; margin-left:10px; text-align:center; color:#FFF; border-radius:  0px  0px 20px  0px;'>BorderRadius4 (0, 0, 20, 0)</div><br />
                <p>Para el ejemplo anterior se ha utilizado el siguiente código CSS :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDBR", "border-radius", "CSS3_Sombras_Bordes.php", "BorderRadius"); ?>
                <p>La propiedad <a href="/Doc/CSS/Propiedades/border-radius" target="_blank">border-radius</a> se puede utilizar con 4 valores como se ha visto en el ejemplo anterior o directamente con un solo valor, lo que indicara que debe aplicar ese valor a las cuatro esquinas.</p>
                <p>En principio <a href="/Doc/CSS/Propiedades/border-radius" target="_blank">border-radius</a> es compatible con <a href="/Doc/CSS/Propiedades/box-shadow" target="_blank">box-shadow</a>, por lo que podéis sombrear un rectángulo redondeado sin ningún problema.</p>
                <p>Por último os voy a enseñar una pequeña animación con las tres propiedades mencionadas en este documento utilizando la propiedad <a href="/Doc/CSS/Propiedades/transition" target="_blank">transition</a> :</p>

 
 

 <div style="padding-top:10px; width:200px; height:90px; border:1px solid #000; background-color:#00F; color:#FFF; text-align:center; font-size:24px; margin-left:auto; margin-right:auto     "
     onmouseout="$(this).css({ 'border-radius' : '2px', 'box-shadow' : '10px 10px 10px rgba(50, 50, 50, 0.7)', 'text-shadow' : '10px 10px 10px rgba(0, 0, 0, 1.0)', 'transition' : '2s' });"
      onmouseover="$(this).css({ 'border-radius' : '50px', 'box-shadow' : '-10px 10px 10px rgba(50, 50, 50, 0.7)', 'text-shadow' : '-10px 10px 10px rgba(0, 0, 0, 1.0)', 'transition' : '2s' });">Pasa el mouse por aquí.</div>
                <p>Al pasar por encima el ratón si os fijáis bien, las sombras van de derecha a izquierda tanto en el texto como en el rectángulo, y el rectángulo se vuelve un elipse.</p>
                <p>Para hacer esta animación he utilizado el siguiente código CSS :</p>
                <p class="nota">En internet explorer funciona a partir de la versión 9.</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDANI", "Animación", "CSS3_Sombras_Bordes.php", "Animacion"); ?>
                <p>Y esto es todo por esta semana! espero tener un fin de semana sin muchas complicaciones para poder empezar a programar varias cosillas, o de lo contrario la semana que viene no sé que voy a hacer en la web.</p>
				<div class='postit'><i>Ultima modificación [21/08/2013]&nbsp;</i></div>
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>