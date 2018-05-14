<?php 
        
    include("../Web/devildrey33.php");
    $Base = new devildrey33;	

    $META = '<meta name="description" content="CSS Degradados">
    <meta name="keywords" content="CSS, CSS3, CSS3 Degradados, CSS Gradient">';

    $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Degradados", $META);

    $Base->InicioBlog(basename(__FILE__), "Referéncia CSS : Degradados");
        
        
?>
                <!-- INTRODUCCION -->
                <p>Ahora en CSS3 se pueden utilizar degradados como si fueran una imagen de fondo. Con esta mejora tenemos la oportunidad de innovar mucho en los diseños de nuestras páginas, ya que podemos calcular estos degradados tanto en porcentajes como en pixeles, y esto nos da mucha flexibilidad para adaptar nuestras páginas a distintos dispositivos sin tener que rompernos la cabeza creando varias imágenes para ello.</p>
                <p>Además disponemos de degradados lineales o radiales, en los que podemos usar 2 o más colores, y que pueden tener patrones repetitivos.</p>
                <p>Lo único malo de estos degradados es que varios navegadores antiguos (y no tan antiguos como Internet Explorer 9) no los soportan, pero con el tiempo estoy seguro de que serán una herramienta básica para la mayoría de webs.</p>
                <!-- FIN_INTRODUCCION -->
                <a href='#linear-gradient'></a>
                <h2>Degradado lineal</h2>
                <p>La sintaxis para este tipo de degradados puede parecer un poco complicada al principio, pero ya veréis que es bastante simple, y si faltan algunos datos el mismo navegador los auto-calcula.</p>
                <h3>Sintaxis</h3>
                <pre class='Sintaxis'>background: linear-gradient(<b>PosicionInicio</b>, <b>Color</b>&nbsp;<b>PuntoParada</b>, <b>Color2</b>&nbsp;<b>PuntoParada2</b>, <b>Etc...</b>)</pre>
                
                <table class='Tabla'>
                    <tr>
                        <td class='TD_Sintaxis'><b>PosicionInicio</b></td>
                        <td class='TD_Sintaxis'>Especifica desde donde empezara el degradado. Puede ser : '<code>top</code>', '<code>left</code>', '<code>right</code>', '<code>bottom</code>', o un ángulo por ejemplo '<code>55deg</code>'. Este parámetro es opcional, si no se especifica el degradado empieza desde arriba.<br /> </td>
                    </tr>
                    <tr>
                        <td class='TD_Sintaxis'><b>Color</b></td>
                        <td class='TD_Sintaxis'>Color que se usara en esta posición. Para más información sobre los colores en CSS visita este enlace <a href="/RefCSS/Colores/" target="_blank">Referéncia CSS : Colores</a>.<br /></td>
                    </tr>
                    <tr>
                        <td class='TD_Sintaxis'><b>PuntoParada</b></td>
                        <td class='TD_Sintaxis'>Posición donde terminara el color, puede ser definida mediante porcentajes o mediante pixeles. Este parámetro es opcional, si no se especifica se calculara repartiendo el mismo porcentaje para los demás colores.<br /></td>
                    </tr>
                    <tr>
                        <td class='TD_Sintaxis'><b>Color2</b></td>
                        <td class='TD_Sintaxis'>Color que se usara en esta posición. Para más información sobre los colores en CSS visita este enlace <a href="/RefCSS/Colores/" target="_blank">Referéncia CSS : Colores</a>.<br /></td>
                    </tr>
                    <tr>
                        <td class='TD_Sintaxis'><b>PuntoParada2</b></td>
                        <td class='TD_Sintaxis'>Posición donde terminara el color2, puede ser definida mediante porcentajes o mediante pixeles. Este parámetro es opcional, si no se especifica se calculara repartiendo el mismo porcentaje para los demás colores.<br /></td>
                    </tr>
                    <tr>
                        <td class='TD_SintaxisU'><b>Etc...</b></td>
                        <td class='TD_SintaxisU'>Podemos especificar mas colores y puntos de parada si es necesario. Obviamente estos parámetros son opcionales.</td>
                    </tr>
                </table>
                <p>Veamos un ejemplo simple :</p>
<!-- -[INICIO devildrey33.ID1]-
/* Ejemplo simple */
.EjemploLinearSimple { background:linear-gradient(rgb(255, 0, 0), rgb(100, 0, 0)); }
-[FIN devildrey33.ID1]- -->
                <?php
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploLinealSimple", "Degradado lineal simple", basename(__FILE__), "ID1"); 
                ?>

                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-linear-gradient(rgb(255, 0, 0), rgb(100, 0, 0)); background:linear-gradient(rgb(255, 0, 0), rgb(100, 0, 0));'></div>
		<br />
                <p>En este ejemplo como no se ha indicado la posición inicial el degradado empieza por arriba, y como no se han especificado puntos de parada se reparten cada uno un 50% del espacio, es decir el primero termina al 50% y el segundo al 100%.</p>
                <p>Compliquemos un poco el ejemplo :</p>
<!-- -[INICIO devildrey33.ID2]-
/* Ejemplo con 3 colores */
.EjemploLinear3C { background:linear-gradient(45deg, rgb(255, 255, 0) 20%, rgb(200, 0, 0) 60%, rgb(0, 150, 0)); }
-[FIN devildrey33.ID2]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploLineal2", "Degradado lineal", basename(__FILE__), "ID2"); 
                ?>
                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-linear-gradient(45deg, rgb(255, 255, 0) 20%, rgb(200, 0, 0) 60%, rgb(0, 150, 0)); background:linear-gradient(45deg, rgb(255, 255, 0) 20%, rgb(200, 0, 0) 60%, rgb(0, 150, 0));'></div>
		<br />
                <p>En esta ocasión el primer parámetro define el punto de inicio en grados, (0 grados indica la izquierda) 45 grados indica abajo a la izquierda. Luego se han especificado 3 colores : amarillo hasta llegar al 20%, luego rojo hasta llegar al 60% y por último el verde.</p>
                <h3>Compatibilidad</h3>
                <p>Esta propiedad es soportada por :</p>
                <table class='postit'>
                    <tr>
                        <td><div class='Navegador_Chrome' title='Google Chrome'></div></td>
                        <td>Versiones 4.0 hasta 25 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_FireFox' title='Mozilla Firefox'></div></td>
                        <td>Versiones 3.6 hasta la 15.0 utilizando el prefijo <code>-moz-</code>, a partir de la 16 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Opera' title='Opera'></div></td>
                        <td>Versiones 11.1 hasta la 12 utilizando el prefijo <code>-o-</code>, a partir de la 12.1 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Safari' title='Safari'></div></td>
                        <td>Versiones 4.0 hasta la 6.0 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_IE' title='Internet Explorer'></div></td>
                        <td>A partir de la versión 10 sin necesidad de prefijo.</td>
                    </tr>
                </table>
                <h3>Ejemplo</h3><br />
        <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/CSS/Degradados/DegradadoLinear.html")); ?>        
                
                <hr />
                <a href='#repeating-linear-gradient'></a>
                <h2>Degradado lineal repetitivo</h2>
                <p>En esencia estos degradados funcionan de forma muy similar a los degradados lineares con la diferencia de que este degradado se repite hasta el infinito en todas las direcciones.</p>
                <h3>Sintaxis</h3>
                <pre class='Sintaxis'>background: repeating-linear-gradient(<b>PosicionInicio</b>, <b>Color</b>&nbsp;<b>PuntoParada</b>, <b>Color2</b>&nbsp;<b>PuntoParada2</b>, <b>Etc...</b>)</pre>
				<p>Los parametros son exactamente los mismos que con el <a href="#DegradadoLineal">Degradado lineal</a>.</p>
                <p>Veamos un ejemplo :</p>
<!-- -[INICIO devildrey33.ID3]-
/* Ejemplo repetitivo */
.EjemploLinearRepetitivoSimple { background:repeating-linear-gradient(rgb(0, 255, 0) 0%, rgb(0, 100, 0) 10%); }
-[FIN devildrey33.ID3]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploLinealRepetitivoSimple", "Degradado lineal repetitivo", basename(__FILE__), "ID3"); 
                ?>

                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-repeating-linear-gradient(rgb(0, 255, 0) 0%, rgb(0, 100, 0) 10%); background:repeating-linear-gradient(rgb(0, 255, 0) 0%, rgb(0, 100, 0) 10%);'></div>

                <p>Lo único destacable es que yo le digo dos colores un verde claro desde el 0% y un verde oscuro hasta el 10%, y el navegador se encarga de repetirlos hasta completar todo el objeto.</p>
                <h3>Compatibilidad</h3>
                <p>Esta propiedad es soportada por :</p>
                <table class='postit'>
                    <tr>
                        <td><div class='Navegador_Chrome' title='Google Chrome'></div></td>
                        <td>Versiones 4.0 hasta 25 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_FireFox' title='Mozilla Firefox'></div></td>
                        <td>Versiones 3.6 hasta la 15.0 utilizando el prefijo <code>-moz-</code>, a partir de la 16 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Opera' title='Opera'></div></td>
                        <td>Versiones 11.1 hasta la 12 utilizando el prefijo <code>-o-</code>, a partir de la 12.1 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Safari' title='Safari'></div></td>
                        <td>Versiones 4.0 hasta la 6.0 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_IE' title='Internet Explorer'></div></td>
                        <td>A partir de la versión 10 sin necesidad de prefijo.</td>
                    </tr>
                </table>
                
                <h3>Ejemplo</h3><br />
        <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/CSS/Degradados/DegradadoLinearRepetitivo.html")); ?>        
                
                <hr />
                
                <a href='#radial-gradient'></a>
                <h2>Degradado radial</h2>
                <p>Los degradados radiales si ya los conocéis de editores de imágenes a primera vista pueden parecer bastante simples, pero para los navegadores los han complicado bastante más, de tal forma que son mucho más personalizables.</p>
                <h3>Sintaxis</h3>
                <pre class='Sintaxis'>background: radial-gradient(<b>PosicionInicio</b>, <b>Figura</b>&nbsp;<b>Tamaño</b>, <b>Color</b>&nbsp;<b>PuntoParada</b>, <b>Color2</b>&nbsp;<b>PuntoParada2</b>, <b>Etc...</b>)</pre>
                <table class='Tabla'>
                    <tr>
                        <td class='TD_Sintaxis'><b>PosicionInicio</b></td>
                        <td class='TD_Sintaxis'>Especifica desde donde empezara el degradado. Puede ser :
                        <ul style="margin:0px; list-style:none">
                        	<li><code>left &nbsp; top &nbsp;&nbsp; </code><i>Esquina superior izquierda.</i></li>
                            <li><code>left &nbsp; center </code><i>Centrado verticalemten, hacia la izquierda.</i></li> 
                            <li><code>left &nbsp; bottom </code><i>Esquina inferior izquierda.</i></li>
                            <li><code>center top &nbsp;&nbsp; </code><i>Centrado horizontalmente, hacia arriba.</i></li>
                            <li><code>center center </code><i>Centrado.</i></li>
                            <li><code>center bottom </code><i>Centrado horizontalmente, hacia abajo.</i></li>
                            <li><code>right &nbsp;top&nbsp; &nbsp; </code><i>Esquina superior derecha.</i></li>
                            <li><code>right &nbsp;center </code><i>Centrado verticalmente, hacia la derecha.</i></li>
                            <li><code>right &nbsp;bottom </code><i>Esquina inferior derecha.</i></li>
                        </ul>
                        Si omites una de las palabras se presupondrá como '<code>center</code>'.<br />
                        También se puede definir la posición inicial mediante porcentajes o pixeles (si solo especificas un valor, por defecto el ultimo valor será 50%). <br />
                        Este parámetro es opcional, si no se especifica el degradado empieza desde el centro.<br /> </td>
                    </tr>
                    <tr>
                        <td><b>Figura</b></td>
                        <td>Figura que se usara para el degradado, puede ser '<code>circular</code>' o '<code>ellipse</code>'. Este parámetro es opcional y por defecto será '<code><b>ellipse</b></code>'.<br /></td>
                    </tr>
                    <tr>
                        <td><b>Tamaño</b></td>
                        <td>Tamaño del degradado que puede ser definido mediante valores en pixeles, porcentajes, o mediante una de las siguientes palabras clave :
<!--                            <table>
                            	<tr> 
                                    <td style="vertical-align:top"> -->
                                        <img src='../Web/Graficos/radial-gradient.png' style="float:right; margin:4px 4px 4px 8px; padding:4px" alt='La parte azul representa la caja donde pintamos el degradado, y los circulos de puntos rojos son partes del degradado que estan tanto dentro como fuera de la caja.' />
                                        <table class='Tabla'>
                                            <tr>
                                                <td style="white-space:nowrap">1 <b>closest-side</b></td>
                                                <td>El degradado está dimensionado de manera que su forma exterior se encuentra con el lado de la caja que está más cerca de su centro.<br /></td>
                                            </tr>
                                            <tr>
                                                <td style="white-space:nowrap">2 <b>farthest-side</b></td>
                                                <td>El degradado está dimensionado de manera que su forma exterior se encuentra con el lado de la caja que está más alejada de su centro.<br /></td>
                                            </tr>
                                            <tr>
                                                <td style="white-space:nowrap">3 <b>closest-corner</b></td>
                                                <td>El degradado está dimensionado de manera que su forma exterior se con la esquina de la caja que está más cerca de su centro.<br /></td>
                                            </tr>
                                            <tr>
                                                <td class='TD_SintaxisU' style="white-space:nowrap">4 <b>farthest-corner</b></td>
                                                <td class='TD_SintaxisU'>El degradado está dimensionado de manera que su forma exterior pasa por la esquina del cuadro que se encuentra más alejado de su centro <b>(valor por defecto)</b>.</td>
                                            </tr>
                                        </table>
                            
<!--                                    </td>
<!--                                    <td style="vertical-align:top"> -->
<!--                            		</td>
                                </tr>
                            </table>-->
                            <div class='nota'>La parte azul de la imagen representa la caja donde pintamos el degradado, y los círculos de puntos rojos son posibles partes del degradado que están tanto dentro como fuera de la caja.</div>
                            <br />
                        </td>
                    </tr>
                    <tr>
                        <td><b>Color</b></td>
                        <td>Color que se usara en esta posición. Para más información sobre los colores en CSS visita este enlace <a href="/RefCSS/Colores/" target="_blank">Referéncia CSS : Colores</a>.<br /></td>
                    </tr>
                    <tr>
                        <td><b>PuntoParada</b></td>
                        <td>Posición donde terminara el color, puede ser definida mediante porcentajes o mediante pixeles. Este parámetro es opcional, si no se especifica se calculara repartiendo el mismo porcentaje para los demás colores.<br /></td>
                    </tr>
                    <tr>
                        <td><b>Color2</b></td>
                        <td>Color que se usara en esta posición. Para más información sobre los colores en CSS visita este enlace <a href="/RefCSS/Colores/" target="_blank">Referéncia CSS : Colores</a>.<br /></td>
                    </tr>
                    <tr>
                        <td><b>PuntoParada2</b></td>
                        <td>Posición donde terminara el color2, puede ser definida mediante porcentajes o mediante pixeles. Este parámetro es opcional, si no se especifica se calculara repartiendo el mismo porcentaje para los demás colores.<br /></td>
                    </tr>
                    <tr>
                        <td class='TD_SintaxisU'><b>Etc...</b></td>
                        <td class='TD_SintaxisU'>Podemos especificar mas colores y puntos de parada si es necesario. Obviamente estos parámetros son opcionales.</td>
                    </tr>
                </table><br />
                <p>Veamos un ejemplo simple :</p>
<!-- -[INICIO devildrey33.ID4]-
/* Ejemplo radial simple */
.EjemploRadialSimple { background:radial-gradient(rgb(0, 0, 200), rgba(255, 255, 255, 0.08)); }
-[FIN devildrey33.ID4]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploRadialSimple", "Degradado radial simple", basename(__FILE__), "ID4"); 
                ?>
				
                
                
                
                
                
                
                
                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-radial-gradient(rgb(0, 0, 200), rgba(255, 255, 255, 0.08)); background:radial-gradient(rgb(0, 0, 200), rgba(255, 255, 255, 0.08));'></div>
                
                
                
                
                
                
                
                
                
                <p>En este ejemplo utilizamos dos colores, y automáticamente se asigna la figura elipse (aunque al ser un rectángulo perfecto se vea circular), y los puntos de parada se definen automáticamente al 50%. También fijaros que en esta ocasión he utilizado <code>rgba</code> para dar una transparencia al degradado.</p>
                <p>Ahora compliquemos un poco la cosa con el siguiente ejemplo :</p>
<!-- -[INICIO devildrey33.ID5]-
/* Ejemplo radial */
.EjemploRadial2 { background:radial-gradient(10px 20px, farthest-side, #FFFFFF 15%, green); }
-[FIN devildrey33.ID5]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploRadial2", "Degradado radial", basename(__FILE__), "ID5"); 
                ?>

                                
                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-radial-gradient(10px 20px, farthest-side, #FFFFFF 15%, green 90%, rgb(0, 100, 0)); background:radial-gradient(10px 20px, farthest-side, #FFFFFF 15%, green 90%, rgb(0, 100, 0));'></div>
                                
                <p>En este caso se ha definido una posición inicial distinta para el centro del degradado (10 pixeles desde la izquierda, y 20 pixeles desde arriba), el tamaño del degradado está limitado por <code>farthest-side</code> lo que hace que el ultimo color quede prácticamente plano. Hay 3 colores, blanco, verde, y un verde oscuro, fijaros que el verde oscuro llega un punto que tiene la misma tonalidad, esto es porque al llegar al tamaño máximo del elipse definido por <code>farthest-side</code> ya no se aplican más degradados y se queda el color plano.</p>
                <h3>Compatibilidad</h3>
                <p>Esta propiedad es soportada por :</p>
                <table class='postit'>
                    <tr>
                        <td><div class='Navegador_Chrome' title='Google Chrome'></div></td>
                        <td>Versiones 4.0 hasta 25 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_FireFox' title='Mozilla Firefox'></div></td>
                        <td>Versiones 3.6 hasta la 15.0 utilizando el prefijo <code>-moz-</code>, a partir de la 16 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Opera' title='Opera'></div></td>
                        <td>Versiones 11.6 hasta la 12 utilizando el prefijo <code>-o-</code>, a partir de la 12.1 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Safari' title='Safari'></div></td>
                        <td>Versiones 4.0 hasta la 6.0 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_IE' title='Internet Explorer'></div></td>
                        <td>A partir de la versión 10 sin necesidad de prefijo.</td>
                    </tr>
                </table>

                <h3>Ejemplo</h3><br />
        <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/CSS/Degradados/DegradadoRadial.html")); ?>        

                <hr />
                <a href='#repeating-radial-gradient'></a>
                <h2>Degradado radial repetitivo</h2>
                <p>En esencia estos degradados funcionan de forma muy similar a los degradados radiales con la diferencia de que este degradado se repite hasta el infinito en todas las direcciones.</p>
                <h3>Sintaxis</h3>
                <pre class='Sintaxis'>background: repeating-radial-gradient(<b>PosicionInicio</b>, <b>Figura</b>&nbsp;<b>Tamaño</b>, <b>Color</b>&nbsp;<b>PuntoParada</b>, <b>Color2</b>&nbsp;<b>PuntoParada2</b>, <b>Etc...</b>)</pre>

				<p>Los parametros son exactamente los mismos que con el <a href="#DegradadoRadial">Degradado radial</a>.</p>
               
                <p>Veamos un ejemplo simple :</p>     
<!-- -[INICIO devildrey33.ID6]-
/* Ejemplo radial repetitivo simple */
.EjemploRadialRepetitivoSimple { background:-webkit-repeating-radial-gradient(rgb(0, 0, 255) 0%, rgb(0, 0, 100) 20%); }
-[FIN devildrey33.ID6]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploRadialRepetitivoSimple", "Degradado radial repetitivo simple", basename(__FILE__), "ID6"); 
                ?>

                
                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-repeating-radial-gradient(rgb(0, 0, 255) 0%, rgb(0, 0, 100) 20%); background:repeating-radial-gradient(rgb(0, 0, 255) 0%, rgb(0, 0, 100) 20%);'></div>

                <p>En este ejemplo básicamente  hacemos un degradado con un azul claro en el 0% y un azul oscuro al 20%, que luego se repite hasta llenar la caja.</p>
                <p>Veamos otro ejemplo :</p>
<!-- -[INICIO devildrey33.ID7]-
/* Ejemplo radial repetitivo */
.EjemploRadialRepetitivo2 { background:repeating-radial-gradient(70% 70%, yellow 0%, yellow 15%, red 15%, red 30%); }
-[FIN devildrey33.ID7]- -->
                <?php 
                    $Base->PintarCodigo->PintarArchivoCSS("ID_EjemploRadialRepetitivo2", "Degradado radial repetitivo", basename(__FILE__), "ID7"); 
                ?>
                
                <div style='display:inline-block; width:67px; height:67px; margin-left:20px; border-radius:2px; border:1px solid #999; background:-webkit-repeating-radial-gradient(70% 70%, yellow 0%, yellow 15%, red 15%, red 30%); background:repeating-radial-gradient(70% 70%, yellow 0%, yellow 15%, red 15%, red 30%);'></div>
		<p>En este último ejemplo aunque deje de ser un degradado estrictamente hablando, es un efecto fácil de hacer para crear una diana por ejemplo. El truco de porque no hace el degradado entre el rojo y el amarillo está en que he añadido 2 veces cada color y no hay ninguna separación entre ellos, fijaros que el amarillo va del 0% al 15%, y luego el rojo va del 15% al 30%.</p>
                <table class='postit'>
                    <tr>
                        <td><div class='Navegador_Chrome' title='Google Chrome'></div></td>
                        <td>Versiones 4.0 hasta 25 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_FireFox' title='Mozilla Firefox'></div></td>
                        <td>Versiones 3.6 hasta la 15.0 utilizando el prefijo <code>-moz-</code>, a partir de la 16 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Opera' title='Opera'></div></td>
                        <td>Versiones 11.6 hasta la 12 utilizando el prefijo <code>-o-</code>, a partir de la 12.1 funciona sin prefijo.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_Safari' title='Safari'></div></td>
                        <td>Versiones 4.0 hasta la 6.0 utilizando el prefijo <code>-webkit-</code>.</td>
                    </tr>
                    <tr>
                        <td><div class='Navegador_IE' title='Internet Explorer'></div></td>
                        <td>A partir de la versión 10 sin necesidad de prefijo.</td>
                    </tr>
                </table>

                <h3>Ejemplo</h3><br />
        <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/CSS/Degradados/DegradadoRadialRepetitivo.html")); ?>        


            <div class='nota'>He de decir que toda esta documentación está sujeta a cambios ya que aun no está del todo claro como acabaran los degradados en CSS3, y aun están implementando nueva sintaxis, por lo que puede haber más de un cambio en el futuro. De todas formas pienso que como mucho añadirán mas funciones y dejaran todo lo hecho así para conservar compatibilidad.</div>
                
<?php
    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>