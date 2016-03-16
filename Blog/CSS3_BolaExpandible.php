<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	*/
	
	$DeclaracionesHeadExtras = "
		<style>
/* -[INICIO devildrey33.BolaExpandible]- */
.Bola_Expandible {
	width:40px;
	height:40px;
	position:relative;
	border-radius:20px;
	box-shadow:2px 2px 2px #999;
	margin:4px;
	-webkit-transition-property:width;
	-webkit-transition-duration:0.3s;	
	-moz-transition-property:width;
	-moz-transition-duration:0.3s;	
	-o-transition-property:width;
	-o-transition-duration:0.3s;	
}

.Bola_Expandible:hover {
	-webkit-transition-property:width;
	-webkit-transition-duration:0.3s;	
	-moz-transition-property:width;
	-moz-transition-duration:0.3s;	
	-o-transition-property:width;
	-o-transition-duration:0.3s;	
	width:100px;
}
/* -[FIN devildrey33.BolaExpandible]- */

/* -[INICIO devildrey33.BolaExpandible2]- */
.Bola_Expandible .Bola_Expandible_Texto {
	-webkit-transition-property:color, text-shadow;
	-webkit-transition-duration:0.3s, 0.3s;	
	-moz-transition-property:color, text-shadow;
	-moz-transition-duration:0.3s, 0.3s;	
	-o-transition-property:color, text-shadow;
	-o-transition-duration:0.3s, 0.3s;	
	color:#000;
	text-shadow:1px 1px 1px #AAA;
}

.Bola_Expandible:hover .Bola_Expandible_Texto {
	-webkit-transition-property:color, text-shadow;
	-webkit-transition-duration:0.3s, 0.3s;	
	-moz-transition-property:color, text-shadow;
	-moz-transition-duration:0.3s, 0.3s;	
	-o-transition-property:color, text-shadow;
	-o-transition-duration:0.3s, 0.3s;	
	color:#FFF;
	text-shadow:1px 1px 1px #000;
}
/* -[FIN devildrey33.BolaExpandible2]- */

/* -[INICIO devildrey33.BolaExpandible_Texto]- */
.Bola_Expandible_Texto {     
	padding-top:11px;
	padding-bottom:11px;
	padding-left:50px;
	font-size:14px;
}
/* -[FIN devildrey33.BolaExpandible_Texto]- */
        </style>";
        
/*        
<!--[INICIO devildrey33.HTML]-->
<div class='Bola_Expandible' style='background-color:red;'>
    <div class='Bola_Expandible_Texto'>Rojo</div>
</div>
<div class='Bola_Expandible' style='background-color:green;'>
    <div class='Bola_Expandible_Texto'>Verde</div>
</div>
<div class='Bola_Expandible' style='background-color:blue;'>
    <div class='Bola_Expandible_Texto'>Azul</div>
</div>
<!--[FIN devildrey33.HTML]-->
 */

	
//	$Base->InicioPlantilla("CSS3 : Efecto bola expandible", $DeclaracionesHeadExtras);

	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="CSS3 Bola expandible">
        <meta name="keywords" content="CSS3, Bola expandible, CSS3 Bola expandible">';

	
        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "CSS3 : Efecto bola expandible", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "CSS3 : Efecto bola expandible");
        
        ?>	


                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_BolaExpandible.png" alt="Bola expandible" />
                <p>Hoy para no repetirme mucho con el tema del canvas os voy a mostrar cómo he creado el efecto de la bola expandible que podéis ver en la parte superior del menú de la derecha con los iconos del facebook, twitter, google plus y rss.</p>
                <p>Este efecto se ha hecho únicamente utilizando CSS3 sin necesidad de JQuery ni JavaScript, pero por esa razón no funciona en explorer. Como ya he comentado en más de una ocasión me niego a torturarme haciendo código que funcione en explorer, cuando en otros navegadores funciona perfectamente sin necesidad de romperse mucho la cabeza.</p>
                <!-- FIN_INTRODUCCION -->
                <p>Si los desarrolladores web le dieran la espalda directamente al explorer en vez de adaptar sus códigos exclusivamente para él, estoy convencido de que o los usuarios de explorer abrirían los ojos, o que los de microsoft se pondrían las pilas. Parece mentira que llevemos más de 10 años con este tipo de peleas.</p>
                <p>Dejando a un lado mi pique personal con el navegador de microsoft, vamos a ver que necesitamos para crear el efecto de la bola expandible.</p>
                <p>En primer lugar necesitamos un contenedor para cada bola, y un contenedor para el texto de cada bola. Veamos como quedaría el código HTML :</p>
                <?php $Base->PintarCodigo->PintarArchivoHTML("IDHTML", "Código HTML", "CSS3_BolaExpandible.php", "HTML"); ?>
				<p>Este ejemplo está preparado para contener 3 bolas expandibles. En esencia tenemos 3 divs que utilizan la clase <i>Bola_Expandible</i> en la que se pintara la bola. Dentro de los div <i>Bola_Expandible</i> tenemos otro div que utiliza la clase <i>Bola_Expandible_Texto</i> donde podemos introducir el texto que necesitemos y que quedara por encima de la bola.</p>
                <p>Una vez tenemos claro el código HTML pasemos a ver una parte del estilo CSS para la clase <i>Bola_Expandible</i> :</p>
                
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDBolaExpandible", "CSS Bola_Expandible", "CSS3_BolaExpandible.php", "BolaExpandible"); ?>
                <p>Lo más importante de esta parte es que la clase <i>Bola_Expandible</i> tiene el atributo <i>position</i> en <i>relative</i>, que tiene 40 pixeles de ancho y alto asignados en los atributos <i>width</i> y <i>height</i>, y que el efecto de transición solo se aplica al atributo <i>width</i> con una duración de 0.3 segundos.</p>
                <p>En la parte del hover podemos observar que el atributo <i>width</i> tiene 100 pixeles, por lo que la animación ira de 40 pixeles a 100 pixeles y viceversa.</p>
                <p>Ahora veamos la segunda parte de la clase <i>Bola_Expandible</i> que se aplica a la clase <i>Bola_Expandible_Texto</i> : </p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDBolaExpandible2", "CSS Bola_Expandible_Texto", "CSS3_BolaExpandible.php", "BolaExpandible2"); ?>
                <p>Cuando la clase <i>Bola_Expandible</i> este en estado normal, dentro de la clase <i>Bola_Expandible_Texto</i> el color del texto será negro, y la sombra será de un color gris. En cambio cuando la clase <i>Bola_Expandible</i> este en estado hover, dentro de la clase <i>Bola_Expandible_Texto</i> el color del texto será blanco, y la sombra será negra. A esto le añadimos el atributo <i>transition</i> para los 3 navegadores que lo soportan indicando los atributos <i>color</i> y <i>text-shadow</i>.</i>.
                <p>Por último nos falta echar un vistazo a la clase <i>Bola_Expandible_Texto</i> por defecto :</p>
                <?php $Base->PintarCodigo->PintarArchivoCSS("IDBolaExpandible3", "CSS Bola_Expandible_Texto", "CSS3_BolaExpandible.php", "BolaExpandible_Texto"); ?>
                <p>No hay gran cosa que destacar, simplemente le asignamos un tamaño de fuente, ponemos un padding adecuado para el top y el bottom, y 40 pixeles de padding en el left, para que el texto inicialmente salga fuera de la bola.</p>
                <p>Y con esto terminamos por hoy, como siempre podéis ver el ejemplo online simplificado, o descargarlo. Buen fin de semana.</p>
                <div class='Centrado'>
                    <a href='/Lab/Ejemplos/BolaExpandible/CSS3_BolaExpandible_Ejemplo.html' target="_blank" class='Boton-Normal'>Ver ejemplo</a>
                    <a href='/Descargas/CSS3_BolaExpandible.zip' target="_blank" class='Boton-Normal'>Descargar ejemplo</a>
                </div>


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>