<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("CSS3 Transition y Transform");*/

        
	include("../Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="CSS3 : Sombras y bordes redondeados">
        <meta name="keywords" content="CSS3, css3 transition, css transition, css3 transform, css transform, css3 transform transition, css transform transition">';

	
        $Base->InicioPlantilla(basename(__FILE__), "CSS3 Transition y Transform", $META);
        
        $Base->InicioBlog(basename(__FILE__), "CSS3 Transition y Transform");
        
        ?>	


                <!-- INTRODUCCION -->
                <p>Para variar un poco con el tema de coloreados de código, hoy vamos a hacer un break y veremos algunos aspectos nuevos del CSS3 que desde mi punto de vista son de lo más interesantes.</p>
                <p>En concreto vamos a tratar con Transiciones y Transformaciones todo vía CSS.</p>
                <p>Hay que remarcar que estos efectos no funcionan en todos los navegadores actuales, por ejemplo Internet Explorer como no podía ser de otra forma aun no soporta una parte de estos efectos...</p>
                <!-- FIN_INTRODUCCION -->
                <h2>Transition :</h2>
                <p>Vamos a empezar por las transiciones (transition). Las transiciones son una forma de animar cambios en las propiedades CSS. Por ejemplo si queremos que un div tenga el fondo rojo, y que cuando pasemos el mouse por encima cambien su fondo a negro, podemos hacerlo como de costumbre con el back-color, o podemos decirle que utilice un efecto de transición. Al utilizar un efecto de transición el fondo se convertirá de rojo a negro en el tiempo determinado pasando por los colores que hay entre estos dos.</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("IDTransicion", "Ejemplo CSS3 Transition", "CSS3_Transition_Transform.php", "CSS3_Transition"); ?><br />
<!--[INICIO devildrey33.CSS3_Transition]-->
<style>
	#Rojo_Negro {
		text-align:center;
		position:relative;
		background-color:#F00;
		color:#000;
		-webkit-transition-property:background-color, color; 
		-webkit-transition-duration:2s, 2s;
		-moz-transition-property:background-color, color; 
		-moz-transition-duration:2s, 2s;
		-o-transition-property:background-color, color; 
		-o-transition-duration:2s, 2s;
		transition-property:background-color, color; 
		transition-duration:2s, 2s;
	}
	#Rojo_Negro:hover {
		background-color:#000;
		color:#FFF;
		-webkit-transition-property:background-color, color; 
		-webkit-transition-duration:2s, 2s;
		-moz-transition-property:background-color, color; 
		-moz-transition-duration:2s, 2s;
		-o-transition-property:background-color, color; 
		-o-transition-duration:2s, 2s;
		transition-property:background-color, color; 
		transition-duration:2s, 2s;
	}
</style>

<div id="Rojo_Negro">Ejemplo</div>
<!--[FIN devildrey33.CSS3_Transition]-->
                <p>Si pasáis el mouse por encima del rectángulo rojo podréis observar como este va cambiando de rojo a negro gradualmente. Lo bueno de esto es que se ha hecho sin necesidad de utilizar ningún código JavaScript, y viene todo encapsulado en el CSS.</p>
                <p>Observando el ejemplo anterior del CSS podéis observar que tenemos la ID Rojo_Negro en normal y en hover. Cada una tiene su color de fondo, y color de texto. Además tienen las propiedades transition-property y transition-duration, la primera indica que partes del estilo se usaran en la transición (en este caso el color del fondo y el color del texto, y la segunda indica el tiempo que se utilizara en la animación.</p> 
                <p>Este efecto no solo se aplica a los colores, podemos utilizar este efecto con prácticamente cualquier estilo, como puede ser la opacidad, la sombra el borde redondeado, el tamaño del texto, etc... Simplemente basta con indicar las propiedades en transition-property, e indicar el valor de la propiedad inicial en el estilo.</p>
                <p>Por último hay que destacar que este efecto por el momento requiere los prefijos de cada navegador ("-webkit-", "-moz-", "-o-"), ya que de momento está en fase experimental, y podría sufrir cambios de última hora en su sintaxis final.</p>
                <p class='devildrey33_Nota'><b>NOTA</b> : soportado por la mayoría de navegadores modernos excepto Internet Explorer.</p>
                <h2>Transform : </h2>
                <p>Las transformaciones en CSS3 nos permiten modificar un elemento de forma que podamos rotarlo, escalarlo, y desfasarlo. Veamos el siguiente código :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("IDTransform", "Ejemplo CSS3 Transition", "CSS3_Transition_Transform.php", "CSS3_Transform"); ?><br />
                <br /><br />
<!--[INICIO devildrey33.CSS3_Transform]-->
<style>
	.Marco    { background-color:#CCC; position:relative; width:208px; text-align:center; float:left; }
	#Rotacion { 
		-webkit-transform:rotate(163deg); 
		-moz-transform:rotate(163deg); 
		-ms-transform:rotate(163deg); 
		-o-transform:rotate(163deg); 
		transform:rotate(163deg); 
		left:10px; 
	}
	#Escala   {
		-webkit-transform:scaleX(1.5); 
		-moz-transform:scaleX(1.5);
		-ms-transform:scaleX(1.5); 
		-o-transform:scaleX(1.5); 
		transform:scaleX(1.5); 
		left:70px; 
	}
	#Desfase  {
		-webkit-transform:skew(30deg, 15deg); 
		-moz-transform:skew(30deg, 15deg); 
		-ms-transform:skew(30deg, 15deg); 
		-o-transform:skew(30deg, 15deg); 
		transform:skew(30deg, 15deg); 
		left:130px; 
	}
</style>

<div class="Marco">Normal</div>
<div class="Marco" id="Rotacion">Rotación 163º</div>
<div class="Marco" id="Escala">EscalaX 1.5</div>
<div class="Marco" id="Desfase">Desfase 30º, 15º</div>
<!--[FIN devildrey33.CSS3_Transform]-->
                <br />
                <br />
                <p>Como podéis ver en el ejemplo anterior se han utilizado los tres tipos de transformaciones disponibles. La propiedad transform:rotate nos permite rotar un elemento, la propiedad transform:scaleX nos permite escalar el ancho de un elemento (podemos utilizar scaleY para escalar la altura), y la propiedad skew nos permite desfasar un elemento.</p>
                <p class='devildrey33_Nota'><b>NOTA</b> : la propiedad transform esta soportada por todos los navegadores modernos, incluido Internet Explorer.</p>
                
                <p>Por ultimo veamos un ejemplo excelente a la hora de combinar una transition con un transform : (El siguiente ejemplo lo ha escrito Rich Bradshaw en <a href="http://css3.bradshawenterprises.com/flip/">http://css3.bradshawenterprises.com</a>).</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("IDAnimacion", "Ejemplo CSS3 Transition", "CSS3_Transition_Transform.php", "CSS3_Animacion"); ?>
<!--[INICIO devildrey33.CSS3_Animacion]-->
<style>
	#f1_container {
		margin-top:20px;
		position: relative;
		width: 400px;
		height: 300px;
		z-index: 1;
	}
	.face.back {
		display: none;
	}

	#f1_container {
		-webkit-perspective: 1000;
	}
	#f1_card {
		-webkit-box-shadow: 5px 5px 5px #aaa;				
		-moz-box-shadow: 5px 5px 5px #aaa;
		box-shadow: 5px 5px 5px #aaa;		
		width: 100%;
		height: 100%;
		-webkit-transform-style: preserve-3d;
		-webkit-transition: all 1.0s linear;
		-moz-transform-style: preserve-3d;
		-moz-transition: all 1.0s linear;
		-o-transform-style: preserve-3d;
		-o-transition: all 1.0s linear;
		-ms-transform-style: preserve-3d;
		-ms-transition: all 1.0s linear;						
		transform-style: preserve-3d;
		transition: all 1.0s linear;		
	}
	#f1_container:hover #f1_card, #f1_container.hover_effect #f1_card {
		-webkit-transform: rotateY(180deg);
		-moz-transform: rotateY(180deg);
		-o-transform: rotateY(180deg);
		-ms-transform: rotateY(180deg);
		transform: rotateY(180deg);
		
		-webkit-box-shadow: -5px 5px 5px #aaa;				
		-moz-box-shadow: -5px 5px 5px #aaa;
		box-shadow: -5px 5px 5px #aaa;		
	}
	.face {
		position: absolute;
		width: 100%;
		height: 100%;
		-webkit-backface-visibility: hidden;
		-moz-backface-visibility: hidden;
		-o-backface-visibility: hidden;
		-ms-backface-visibility: hidden;
		backface-visibility: hidden;								
	}
	.face.back {
		display: block;
		-webkit-transform: rotateY(180deg);
		-webkit-box-sizing: border-box;
		-moz-transform: rotateY(180deg);
		-moz-box-sizing: border-box;
		-o-transform: rotateY(180deg);
		-o-box-sizing: border-box;		
		-ms-transform: rotateY(180deg);
		-ms-box-sizing: border-box;
		transform: rotateY(180deg);
		box-sizing: border-box;				
		padding: 10px;
		color: white;
		text-align: center;
		background-color: #DDD;
		color:#000;
	}
</style>

<div id="f1_container" class="hover">
	<div id="f1_card" class="shadow">
		<div class="front face">
			<img src="../Web/Graficos/CSS3.jpg" />
		</div>
		<div class="back face center">
			<p>Este efecto es perfecto para mostrar información adicional sobre imágenes.</p>
			<p>El ejemplo original lo podéis ver en 
            <a href="http://css3.bradshawenterprises.com/flip/" target="_new">http://css3.bradshawenterprises.com</a>.</p>
            <p>© Rich Bradshaw of Focal Strategy 2010 - 2011<p>
		</div>
  	</div>
</div>
<!--[FIN devildrey33.CSS3_Animacion]-->
                <p class='devildrey33_Nota'><b>NOTA</b> : a fecha de hoy el último ejemplo solo funciona en Google Chrome y Safari.</p>
                <h3>Enlaces recomendados : </h3><ul>
                <li><a href="http://css3.bradshawenterprises.com">http://css3.bradshawenterprises.com</a></li>
                <li><a href="http://www.css3files.com">http://www.cs3files.com</a></li>
                <li><a href="http://robertnyman.com/css3/">http://robertnyman.com</a></li>
                
                </ul>
                <p>Y esto es todo por hoy! espero que estos ejemplos os ayuden un poco a la hora de hacer nuevas animaciones tan bien hechas como la ultima :)</p>            

<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>