<?php 
	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Varios retoques en la web de devildrey33");
?>	
<!-- INTRODUCCION -->
<img class="ImagenPortada" src="/Web/Graficos/250x200_Tridente.png" alt="Retoques en la web" />
<p>Hoy como no tenía un día muy inspirado para hacer algún tutorial me he dedicado a retocar varios aspectos de la web que no me acababan de convencer.</p>
<p>Para empezar he eliminado el menú de la izquierda donde salían los iconos para las redes sociales, ya que no acababan de congeniar con la web. Ahora cada entrada dispone de unos iconos en gris al lado del título donde podéis comentar en facebook y twitter.</p>
<p>Por desgracia y aunque ya lo tenía todo montado para google plus, no es posible enlazar mensajes directamente a vuestras cuentas, por lo que he dejado el icono del +1 de google plus en la cabecera.</p>
<!-- FIN_INTRODUCCION -->

<?php $Base->FinPlantilla(); ?>