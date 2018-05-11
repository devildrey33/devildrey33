<?php

	include("/Web/devildrey33.php");
	$Base = new devildrey33;	
	//g#celles.AniDashOffset, g#lupas.AniDashOffset {
	$META = '<meta name="description" content="Animaciones CSS3">
        <meta name="keywords" content="Animaciones CSS3">';

	
        $Base->InicioPlantilla(basename(__FILE__), "Animaciones CSS3", $META);
        
        $Base->InicioSinCabecera(basename(__FILE__), "Animaciones CSS3");
        
        ?>

<!-- <img src="/Web/Graficos/About.png" style='float:right; max-width:25%' />-->
<img src="/Web/Graficos/jeta.svg" style='float:right; max-width:33,3%; max-height:33,3%; border:none' />
<!-- <img src="JetaSVG" style='float:right; max-width:25%' /> -->
<object ype="image/svg+xml" data="JetaSVG" style='float:right; max-width:25%'></object>
<h1>Sobre el autor</h1>
<p>Hola me llamo Josep Antoni Bover Comas, y soy el creador de este portal web.</p>
<p>Una de mis aficiones es la programación, que encaja muy bien con mi razonamiento algo retorcido. Me encanta programar tanto cosas vistosas, como enrevesadas (a veces incluso excesivamente), y tengo la mala costumbre de querer hacerlo todo desde cero... Lo que en mas de una ocasion me ha llevado a querer hacer proyectos faraónicos imposibles de mantener en una sola vida.  </p>
<p>He creado esta web por varias razones :</p>
<ul>
    <li>Para tener algo parecido a un curriculum online, donde pueda mostrar algunas de mis habilidades.</li>
    <li>Para tener unos apuntes de todo aquello que me interesa.</li>
    <li>Y ya de paso, por qué no, para contribuir con mi granito de arena a enriquecer nuestra maravillosa internet.</li>
</ul>

<h1>Agradecimientos</h1>
<p>Por supuesto todo esto no lo he hecho yo solo, y me gustaria agradecer la ayuda aportada directa/indirectamente de :</p>
<p><a target='_new' href='http://www.linkedin.com/in/ivan-perez-lite-40880651'>Ivan Perez</a> este portal web no seria posible si no fuera por su ayuda tanto en el diseño, como en maquetación y diagramación de contenidos.</p>
<p><a target='_new' href='https://blogdelbarba.wordpress.com/'>Joel Barba</a> por sus consejos y su aportación de varios articulos en esta web.</p>
<p>Y aunque no soy muy partidario de librerias externas (por aquello de querer hacer-lo todo), me parecio imprescindible el uso de las siguientes librerias (y doy mil gracias por tenerlas, ya que sin ellas el tiempo extra de dessarrollo de esta web me habría resultado frustrante) :</p>
<table>
    <tr>
        <td><img src='Web/Graficos/a_jquery.png'></td>
        <td>Libreria/Framework javascript que facilita enormemente el uso del DOM.<br /> Para mi es imprescindible para cualquier proyecto que necesite mas de 30 etiquetas HTML.</td>
    </tr>
    <tr>
        <td><img src='Web/Graficos/a_codemirror.png'></td>
        <td>Librería javascript completisima para edición de código fuente, que incluso se puede convertir facilmente en un editor web WYSIWYG.</br />Es una libreria increible para convertir el navegador en un editor de texto enriquecido puede estilizar el código de un monton de lenguajes de programación. Ideal para cualquiera que desee mostrar su codigo, e incluso editar-lo.</td>
    </tr>
    <tr>
        <td style='width:220px'><img src='Web/Graficos/a_three.png'></td>
        <td>Excelente libreria javascript para renderizado 3D (WebGL). <br /> El tema del 3D siempre me ha apasionado y con esta libreria resulta muy facil e intuitivo hacer qualquier presentación, incluso con un nivel de matemáticas limitado. </td>
    </tr><tr>
    </tr>
</table>

<?php
    $Base->FinSinCabecera();
    $Base->FinPlantilla(); 
?>