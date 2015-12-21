<?php 

	$HEAD = '
	
        <style type="text/css">
        	.TD_Unidad {
				width:100px;
				vertical-align:top;
			}

        	.TD_Descripcion {
				width:900px;
			}
			
			.TD_Cabecera {
				background-color:rgb(30, 30, 30);
				color:#FFF;
			}
			
			.Div_Separador {
				border-bottom-style:dashed;
				border-bottom-width:1px;
				border-bottom-color:#CCC;
				height:1px;
			}
			
		</style>
	';


    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="CSS Unidades">
    <meta name="keywords" content="CSS, CSS3, CSS3 Unidades">';

    if (!isset($_POST["SinPlantilla"])) {
        $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Unidades", $META);
    }

    $Base->InicioBlog(basename(__FILE__), "Referéncia CSS : Unidades");
        
        
        
?>

                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Propiedades CSS" />
                <p>En CSS se necesita estar constantemente asignando tamaños a los distintos tipos de objetos de la web, para ello existen varias alternativas, pero quizás lo mas difícil es elegir con cabeza la que más nos conviene.</p>
                <p>Básicamente se pueden desglosar estas alternativas en dos grupos : tamaños relativos, y tamaños absolutos. Los tamaños relativos vienen a ser los porcentajes, pixeles, etc.. que dependiendo de la resolución pueden cambiar mucho. Los tamaños absolutos son Centímetros, Pulgadas, etc.. ya que un centímetro mide lo mismo aquí que en Marte.</p>
                <!-- FIN_INTRODUCCION -->
                <p>A la hora de elegir un determinado tipo de tamaño para nuestro sitio web, hay que pensar en su finalidad, si por ejemplo va a ser una web que acabara imprimida, nos conviene utilizar medidas absolutas para que en el papel siempre queden igual. En cambio si nuestro sitio web va a ser más bien para presentaciones online nos conviene más un tamaño relativo que pueda adaptarse a distintos tipos de resoluciones.</p>
                
                <h2>Unidades de tamaño relativas</h2><br />
                
                
                <table class="Tabla">
                    <tr>
                        <th>Unidad</th>
                        <th>Descripción</th>
                    </tr>
                    <tr>
                        <td><b>px</b></td>
                        <td>Pixel (El punto más pequeño posible en la pantalla).</td>                        
                    </tr>
                    <tr>
                        <td><b>ex</b></td>
                        <td>Un <i>ex</i> es la altura de la X de una fuente (la altura de la X suele ser alrededor de la mitad el tamaño de fuente).</td>                        
                    </tr>
                    <tr>
                        <td><b>em</b></td>
                        <td>Un <i>em</i> es igual al ancho de la letra mayúscula 'M' en la fuente actual. Hay que tener cuidado porque usando em se heredan los tamaños del padre.</td>                        
                    </tr>
                    <tr>
                        <td><b>rem</b></td>
                        <td>Un <i>rem</i> es igual al ancho de la letra mayúscula 'M' en la fuente actual. A diferencia de em, el rem se basa en el ancho de la fuente que tiene la etiqueta html.</td>                        
                    </tr>
                    <tr>
                        <td><b>%</b></td>
                        <td>Porcentaje.</td>                        
                    </tr>
                </table>                
                <br />
                <br />
                <h2>Unidades de tamaño absolutas</h2><br />
                
                <table class='Tabla'> 
                    <tr>
                        <th>Unidad</th>
                        <th>Descripción</th>                        
                    </tr>
                    <tr>
                        <td><b>cm</b></td>
                        <td>Centimetros.</td>                        
                    </tr>
                    <tr>
                        <td><b>mm</b></td>
                        <td>Milimetros.</td>                        
                    </tr>
                    <tr>
                        <td><b>in</b></td>
                        <td>Pulgadas.</td>                        
                    </tr>
                    <tr>
                        <td><b>pt</b></td>
                        <td>Punto (Un punto es 1/72 de una pulgada).</td>                        
                    </tr>
                    <tr>
                        <td><b>pc</b></td>
                        <td>Picas (Una pica es 1/6 de una pulgada).</td>                        
                    </tr>
                    
                </table>
                


<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>