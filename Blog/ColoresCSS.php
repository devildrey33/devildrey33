<?php 
	
    $HEAD2 = '
            <style type="text/css">
                    .ColRes {
                            display:table;
                            width:20px;
                            height:20px;
                            border:1px solid #CCC;
                            background-color:#FFFFFF;
                    }

                    #ColHex { width:65px; }
                    #ColRGB { width:110px; }
                    #ColRGBA { width:150px; }
                    #ColHSLA { width:180px; }

                    .TD_Cabecera {
                            background-color:rgb(30, 30, 30);
                            color:#FFF;
                    }
                    .TD_Nombre { width:150px; }
                    .TD_Color { width:300px; }
                    .TD_Hex { width:100px; }
                    .TD_RGB { width:200px; }
                    .TD_HSL { width:220px; }

                    pre { margin:0px; }

                    .Div_Separador {
                            border-bottom-style:dashed;
                            border-bottom-width:1px;
                            border-bottom-color:#CCC;
                            height:1px;
                    }

            </style>
            <link href="/css/PropiedadesCSS.css" rel="stylesheet" type="text/css" />
            <script type="text/javascript">
                    function Color(Tipo) {
                            $("#ColRes" + Tipo).css({ "background-color" : $("#Col" + Tipo).val() });
                    }
            </script>
    ';


    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
/*	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	

    $Base->InicioPlantilla("Referéncia CSS : Colores", $HEAD, '<a href="/Doc/">Doc</a>/<a href="/Doc/CSS/">CSS</a>/Colores');*/


    $Base = new devildrey33;	

    $META = '<meta name="description" content="CSS Colores">
    <meta name="keywords" content="CSS, CSS3, CSS3 Colores">';

    if (!isset($_POST["SinPlantilla"])) {
        $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : Colores", $META);
    }

    $Base->InicioBlog(basename(__FILE__), "Referéncia CSS : Colores");
        
        

    function TablaColor($Nombre, $Hex) {
        $RGB = HexToRGB($Hex);
        $HSL = HexToHSL($Hex);
        echo '
            <tr>
                <td class="TD_Nombre">'.$Nombre.'</td>
                <td class="TD_Hex"><pre>'.$Hex.'</pre></td>
                <td class="TD_RGB"><pre>'.$RGB.'</pre></td>
                <td class="TD_HSL"><pre>'.$HSL.'</pre></td>
                <td class="TD_Color" style="background-color:'.$Nombre.'"></td>
            </tr>';
    }

    function HexToRGB($Hex){  
        if (substr($Hex,0,1) == "#")
                $Hex = substr($Hex,1);   
        $R = substr($Hex,0,2);

        $G = substr($Hex,2,2);

        $B = substr($Hex,4,2);
        return "rgb(".hexdec($R).", ".hexdec($G).", ".hexdec($B).")";
    } 


    function HexToHSL($Hex){
        if (substr($Hex,0,1) == "#")
                $Hex = substr($Hex,1);   

        $clrR = (hexdec(substr($Hex,0,2)));
        $clrG = (hexdec(substr($Hex,2,2)));
        $clrB = (hexdec(substr($Hex,4,2)));

        $clrMin = min($clrR, $clrG, $clrB);
        $clrMax = max($clrR, $clrG, $clrB);
        $deltaMax = $clrMax - $clrMin;

        $L = ($clrMax + $clrMin) / 510;

        if (0 == $deltaMax){
            $H = 0;
            $S = 0;
        }
        else{
            if (0.5 > $L){
                $S = $deltaMax / ($clrMax + $clrMin);
            }
            else{
                $S = $deltaMax / (510 - $clrMax - $clrMin);
            }

            if ($clrMax == $clrR) {
                $H = ($clrG - $clrB) / (6.0 * $deltaMax);
            }
            else if ($clrMax == $clrG) {
                $H = 1/3 + ($clrB - $clrR) / (6.0 * $deltaMax);
            }
            else {
                $H = 2 / 3 + ($clrR - $clrG) / (6.0 * $deltaMax);
            }

            if (0 > $H) $H += 1;
            if (1 < $H) $H -= 1;
        }
        return "hsl(".round($H * 360, 0).", ".round($S * 100, 0)."%, ".round($L * 100, 0)."%)";
    }
?>




                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_CSS3.png" alt="Colores CSS" />
                <p>Dentro de los estilos CSS muchas veces necesitamos definir algún color, hoy veremos qué alternativas tenemos a la hora de definir estos colores y que compatibilidad tenemos en cada alternativa.</p>
                <p>Estas alternativas las podemos separar en : colores en hexadecimal, colores en RGB (Red, Green, Blue), colores en RGBA (Red, Green, Blue, Alpha), colores en HSL (Hue, Saturation, Lightness), colores en HSLA (Hue, Saturation, Lightness, Alpha) y colores predefinidos por los navegadores.</p>
                <!-- FIN_INTRODUCCION -->
                <h2>Colores hexadecimales</h2>
                <p>Los colores hexadecimales se definen siempre con una parrilla al principio '#' y pueden tener 3 o 6 caracteres que cada uno de ellos representa un valor en hexadecimal. Cuando utilizamos solo 3 caracteres estamos utilizando una paleta de colores reducida que nos permite crear colores básicos, en cambio cuando utilizamos 6 caracteres tenemos una paleta completa de 24bits (ocupa 32bits en memoria pero como no hay transparencias realmente solo se utilizan 24).</p>
				<p>Al usar 3 caracteres el primero corresponde al rojo, el segundo al verde, y el tercero al azul, #<span style="color:red">?</span><span style="color:green">?</span><span style="color:blue">?</span>. Cuando se usan 6 caracteres los colores se agrupan de 2 en 2 #<span style="color:red">??</span><span style="color:green">??</span><span style="color:blue">??</span>, y siguen el mismo orden : rojo, verde, y azul.</p>
                <p>Un valor en hexadecimal se expresa en base 16, esto quiere decir que disponemos en un solo carácter de un valor que llega de 0 a 15, y para representarlo además de números se pueden usar algunas letras : 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, E, F.</p>
				<p>Los valores cercanos a '<i>0</i>' son oscuros (negro), y los valores cercanos a '<i>F</i>' son claros (blanco), por lo tanto para definir el color negro debemos especificar #000000, para el color blanco #FFFFFF, al estar dividido en tres canales (Red, Green, Blue) podemos especificar el color rojo con #FF0000, el verde con #00FF00, y el azul con #0000FF.</p>
                <p>Personalmente este tipo de colores me lía un poco sobre todo cuando llegamos a los valores comprendidos entre la "<i>A</i>" y la "<i>F</i>" por lo que no suelo utilizar esta alternativa.</p>
                <div class='nota'>Un color en hexadecimal no nos permite especificar transparencia.</div><br />

                <?php 
/* -[INICIO devildrey33.ID1]-
<p style='background-color:#FFFFFF'> Blanco </p>
<p style='background-color:#000000'> Negro  </p>
<p style='background-color:#FF0000'> Rojo   </p>
<p style='background-color:#00FF00'> Verde  </p>
<p style='background-color:#0000FF'> Azul   </p>
-[FIN devildrey33.ID1]- */
                    $Base->PintarCodigo->PintarArchivoHTML('ColorHex', 'Colores hexadecimales', basename(__FILE__), "ID1"); 
                ?>
                <br />
                <table><tr><td>Prueba en esta caja de texto algunos colores : 
                <input id="ColHex" value="#FFFFFF" onKeyUp="$('#ColResHex').css({ 'background-color' : $('#ColHex').val() });">
                = </td><td><span id="ColResHex" class='ColRes'></span></td></tr></table>
                <br />
                <h3>Compatibilidad</h3>
                Se pueden especificar valores en hexadecimal en todos los navegadores compatibles con CSS1.<br />
                <?php $Base->CompatibilidadNavegadores(true, true, true, true, true); ?>
                <hr />


                <br /><h2>Colores RGB (Red, Green, Blue)</h2>
                <p>Los colores RGB funcionan prácticamente igual que los colores hexadecimales, con la diferencia de que los representamos con un valor decimal, y que para crear el color debemos utilizar la función <i>rgb</i>.</p>
                <p>Cada canal de color puede ir de 0 a 255 (en hexadecimal 255 es FF), y al igual que con los colores hexadecimales los valores cercanos a cero son colores oscuros (negro) y los valores cercanos a 255 son colores claros (blanco).</p>
                <p>También podemos especificar cada canal de color por porcentajes del 0% al 100%.</p>
                <p>Para mi esta es una de las mejores opciones a la hora de especificar colores, ya que estoy muy acostumbrado a utilizar la escala RGB en varios lenguajes de programación, y me parece más clara que la hexadecimal, aunque para especificar un color hay que escribir algunos caracteres más.</p>
                <div class='nota'>Un color en RGB no nos permite especificar transparencia, para añadir el canal Alpha (o dicho de otra forma usar transparencia) para usar transparencias deberíamos usar la función <i>RGBA</i>.</div><br />
                <?php 
/* -[INICIO devildrey33.ID2]-
<p style='background-color:rgb(255, 255, 255)'> Blanco </p>
<p style='background-color:rgb(0, 0, 0)'      > Negro  </p>
<p style='background-color:rgb(255, 0, 0)'    > Rojo   </p>
<p style='background-color:rgb(0, 255, 0)'    > Verde  </p>
<p style='background-color:rgb(0, 0, 255)'    > Azul   </p>
-[FIN devildrey33.ID2]- */
                    $Base->PintarCodigo->PintarArchivoHTML('ColorHex', 'Colores RGB', basename(__FILE__), "ID2"); 
                ?>
                <br />
                <table><tr><td>Prueba en esta caja de texto algunos colores : <input id="ColRGB" value="rgb(255, 255, 255)" onKeyUp="$('#ColResRGB').css({ 'background-color' : $('#ColRGB').val() });"> = </td><td><span id="ColResRGB" class='ColRes'></span></td></tr></table>
                <br />
                <h3>Compatibilidad</h3>
                Se pueden especificar valores en RGB en todos los navegadores compatibles con CSS1.<br />
                <?php $Base->CompatibilidadNavegadores(true, true, true, true, true); ?>
                <hr />


                <br /><h2>Colores RGBA (Red, Green, Blue, Alpha)</h2>
                <p>Los colores RGBA son una extensión del RGB y la única diferencia es que tienen un cuarto parámetro adicional, el cual indica su transparencia.</p>
                <p>La transparencia puede tener un valor desde 0.0 (transparente) a 1.0 (opaco)</p>
                <p>Para mi esta es la mejor opción a la hora de especificar un color con transparencia.</p>
                <div class='nota'>La función <i>RGBA</i> está disponible en todos los navegadores actuales, pero en navegadores antiguos como Firefox 2, Opera 9 y Explorer 8 e inferiores no está soportada.</div><br />
                <?php 
/* -[INICIO devildrey33.ID3]-
<p style='background-color:rgba(255, 255, 255, 0.5)'> Blanco translucido </p>
<p style='background-color:rgba(0, 0, 0, 0.5)'      > Negro translucido  </p>
<p style='background-color:rgba(255, 0, 0, 0.5)'    > Rojo translucido   </p>
<p style='background-color:rgba(0, 255, 0, 0.5)'    > Verde translucido  </p>
<p style='background-color:rgba(0, 0, 255, 0.5)'    > Azul translucido   </p>
-[FIN devildrey33.ID3]- */
                    $Base->PintarCodigo->PintarArchivoHTML('ColorHex', 'Colores RGBA', basename(__FILE__), "ID3"); 
                ?>
                <br />
                <table><tr><td>Prueba en esta caja de texto algunos colores : <input id="ColRGBA" value="rgba(255, 255, 255, 0.5)" onKeyUp="$('#ColResRGBA').css({ 'background-color' : $('#ColRGBA').val() });"> = </td><td><span id="ColResRGBA" class='ColRes' style='background-color:rgba(255, 255, 255, 0.5);'></span></td></tr></table>
                <br />
                <h3>Compatibilidad</h3>
                Se pueden especificar valores en RGBA en todos los navegadores compatibles con CSS3.<br />
                <?php $Base->CompatibilidadNavegadores(true, true, true, true, true); ?>
                <hr />


                <br /><h2>Colores HSL (Hue, Saturation, Lightness)</h2>
                <p>Los colores HSL (Matriz, Saturación, Luminosidad) definen un modelo de color en términos de sus componentes constituyentes. El modelo HSL se representa gráficamente como un cono doble o un doble hexágono. Los dos vértices en el modelo HSL se corresponden con el blanco y el negro, el ángulo se corresponde con la matriz, la distancia al eje con la saturación, y la distancia al eje blanco-negro se corresponde con la luminancia.</p>
                <p>La matriz se define de 0 a 360 grados donde 0-360 son rojo, 120 es verde, y 240 es azul. La saturación es un porcentaje del 0% (gris) al 100% (color claro). La luminosidad es otro porcentaje del 0% al 100% donde el 0 es negro y el 100 es blanco.</p>
                <div class='nota'>La función <i>HSL</i> está disponible en todos los navegadores actuales, pero en navegadores antiguos como Opera 9 y Explorer 8 e inferiores no está soportada.</div><br />
                <?php 
/* -[INICIO devildrey33.ID4]-
<p style='background-color:hsl(0, 0%, 100%)'    > Blanco </p>
<p style='background-color:hsl(0, 0%, 0%)'      > Negro  </p>
<p style='background-color:hsl(0, 100%, 50%)'   > Rojo   </p>
<p style='background-color:hsl(120, 100%, 50%)' > Verde  </p>
<p style='background-color:hsl(240, 100%, 50%)' > Azul   </p>
-[FIN devildrey33.ID4]- */
                    $Base->PintarCodigo->PintarArchivoHTML('ColorHex', 'Colores HSL', basename(__FILE__), "ID4");
                ?>
                <br />
                <table><tr><td>Prueba en esta caja de texto algunos colores : <input id="ColHSL" value="hsl(0, 0%, 100%)" onKeyUp="$('#ColResHSL').css({ 'background-color' : $('#ColHSL').val() });"> = </td><td><span id="ColResHSL" class='ColRes'></span></td></tr></table>
                <br />
                <h3>Compatibilidad</h3>
                Se pueden especificar valores en HSL en todos los navegadores compatibles con CSS3.<br />
                <?php $Base->CompatibilidadNavegadores(true, true, true, true, true); ?>
                <hr />


                <br /><h2>Colores HSLA (Hue, Saturation, Lightness, Alpha)</h2>
                <p>Los colores HSLA son una extensión de los colores HSL con el añadido del canal Alpha para realizar transparencias. Para ello se ha agregado un cuarto parámetro que especifica la transparencia y que puede ir de 0.0 (transparente) al 1.0 (opaco).</p>
                <div class='nota'>La función <i>HSLA</i> está disponible en todos los navegadores actuales, pero en navegadores antiguos como Firefox 2, Opera 9 y Explorer 8 e inferiores no está soportada.</div><br />
                <?php
/* -[INICIO devildrey33.ID5]-
<p style='background-color:hsl(0, 0%, 100%, 0.5)'     > Blanco translucido </p>
<p style='background-color:hsla(0, 0%, 0%, 0.5)'      > Negro translucido  </p>
<p style='background-color:hsla(0, 100%, 50%, 0.5)'   > Rojo translucido   </p>
<p style='background-color:hsla(120, 100%, 50%, 0.5)' > Verde translucido  </p>
<p style='background-color:hsla(240, 100%, 50%, 0.5)' > Azul translucido   </p>
-[FIN devildrey33.ID5]- */
                    $Base->PintarCodigo->PintarArchivoHTML('ColorHex', 'Colores HSL', basename(__FILE__), "ID5"); 
                ?>
                <br />
                <table><tr><td>Prueba en esta caja de texto algunos colores : <input id="ColHSLA" value="hsla(0, 0%, 100%, 0.5)" onKeyUp="$('#ColResHSLA').css({ 'background-color' : $('#ColHSLA').val() });"> = </td><td><span id="ColResHSLA" class='ColRes' style='background-color:hsla(0, 0%, 100%, 0.5);'></span></td></tr></table>
                <br />
                <h3>Compatibilidad</h3>
                Se pueden especificar valores en HSLA en todos los navegadores compatibles con CSS3.<br />
                <?php $Base->CompatibilidadNavegadores(true, true, true, true, true); ?>
                <hr />

                <br /><h2>Colores predefinidos para todos los navegadores</h2>
                <p>Estos colores predefinidos se pueden utilizar en todos los navegadores y basta con escribir el nombre del color para mostrarlo. A continuación tienes una tabla con los 147 colores predefinidos :</p>

                    <table class="Tabla">
                        <tr>
                            <th>Nombre</th>
                            <th>Hex</th>
                            <th>RGB</th>
                            <th>HSL</th>
                            <th>Color</th>
                        </tr>
                    
                <?php 
                    TablaColor("AliceBlue", "#F0F8FF");
                    TablaColor("AntiqueWhite", "#FAEBD7");
                    TablaColor("Aqua", "#00FFFF");
                    TablaColor("Aquamarine", "#7FFFD4");
                    TablaColor("Azure", "#F0FFFF");
                    TablaColor("Beige", "#F5F5DC");
                    TablaColor("Bisque", "#FFE4C4");
                    TablaColor("Black", "#000000");
                    TablaColor("BlanchedAlmond", "#FFEBCD");
                    TablaColor("Blue", "#0000FF");
                    TablaColor("BlueViolet", "#8A2BE2");
                    TablaColor("Brown", "#A52A2A");
                    TablaColor("BurlyWood", "#DEB887");
                    TablaColor("CadetBlue", "#5F9EA0");
                    TablaColor("Chartreuse", "#7FFF00");
                    TablaColor("Chocolate", "#D2691E");
                    TablaColor("Coral", "#FF7F50");
                    TablaColor("CornflowerBlue", "#6495ED");
                    TablaColor("Cornsilk", "#FFF8DC");
                    TablaColor("Crimson", "#DC143C");
                    TablaColor("Cyan", "#00FFFF");
                    TablaColor("DarkBlue", "#00008B");
                    TablaColor("DarkCyan", "#008B8B");
                    TablaColor("DarkGoldenRod", "#B8860B");
                    TablaColor("DarkGray", "#A9A9A9");
                    TablaColor("DarkGrey", "#A9A9A9");
                    TablaColor("DarkGreen", "#006400");
                    TablaColor("DarkKhaki", "#BDB76B");
                    TablaColor("DarkMagenta", "#8B008B");
                    TablaColor("DarkOliveGreen", "#556B2F");
                    TablaColor("Darkorange", "#FF8C00");
                    TablaColor("DarkOrchid", "#9932CC");
                    TablaColor("DarkRed", "#8B0000");
                    TablaColor("DarkSalmon", "#E9967A");
                    TablaColor("DarkSeaGreen", "#8FBC8F");
                    TablaColor("DarkSlateBlue", "#483D8B");
                    TablaColor("DarkSlateGray", "#2F4F4F");
                    TablaColor("DarkSlateGrey", "#2F4F4F");
                    TablaColor("DarkTurquoise", "#00CED1");
                    TablaColor("DarkViolet", "#9400D3");
                    TablaColor("DeepPink", "#FF1493");
                    TablaColor("DeepSkyBlue", "#00BFFF");
                    TablaColor("DimGray", "#696969");
                    TablaColor("DimGrey", "#696969");
                    TablaColor("DodgerBlue", "#1E90FF");
                    TablaColor("FireBrick", "#B22222");
                    TablaColor("FloralWhite", "#FFFAF0");
                    TablaColor("ForestGreen", "#228B22");
                    TablaColor("Fuchsia", "#FF00FF");
                    TablaColor("Gainsboro", "#DCDCDC");
                    TablaColor("GhostWhite", "#F8F8FF");
                    TablaColor("Gold", "#FFD700");
                    TablaColor("GoldenRod", "#DAA520");
                    TablaColor("Gray", "#808080");
                    TablaColor("Grey", "#808080");
                    TablaColor("Green ", "#008000");
                    TablaColor("GreenYellow", "#ADFF2F");
                    TablaColor("HoneyDew", "#F0FFF0");
                    TablaColor("HotPink", "#FF69B4");
                    TablaColor("IndianRed", "#CD5C5C");
                    TablaColor("Indigo", "#4B0082");
                    TablaColor("Ivory", "#FFFFF0");
                    TablaColor("Khaki", "#F0E68C");
                    TablaColor("Lavender", "#E6E6FA");
                    TablaColor("LavenderBlush", "#FFF0F5");
                    TablaColor("LawnGreen", "#7CFC00");
                    TablaColor("LemonChiffon", "#FFFACD");
                    TablaColor("LightBlue", "#ADD8E6");
                    TablaColor("LightCoral", "#F08080");
                    TablaColor("LightCyan", "#E0FFFF");
                    TablaColor("LightGoldenRodYellow", "#FAFAD2");
                    TablaColor("LightGray", "#D3D3D3");
                    TablaColor("LightGrey", "#D3D3D3");
                    TablaColor("LightGreen", "#90EE90");
                    TablaColor("LightPink", "#FFB6C1");
                    TablaColor("LightSalmon", "#FFA07A");
                    TablaColor("LightSeaGreen", "#20B2AA");
                    TablaColor("LightSkyBlue", "#87CEFA");
                    TablaColor("LightSlateGray", "#778899");
                    TablaColor("LightSlateGrey", "#778899");
                    TablaColor("LightSteelBlue", "#B0C4DE");
                    TablaColor("LightYellow", "#FFFFE0");
                    TablaColor("Lime", "#00FF00");
                    TablaColor("LimeGreen", "#32CD32");
                    TablaColor("Linen", "#FAF0E6");
                    TablaColor("Magenta", "#FF00FF");
                    TablaColor("Maroon", "#800000");
                    TablaColor("MediumAquaMarine", "#66CDAA");
                    TablaColor("MediumBlue", "#0000CD");
                    TablaColor("MediumOrchid", "#BA55D3");
                    TablaColor("MediumPurple", "#9370DB");
                    TablaColor("MediumSeaGreen", "#3CB371");
                    TablaColor("MediumSlateBlue", "#7B68EE");
                    TablaColor("MediumSpringGreen", "#00FA9A");
                    TablaColor("MediumTurquoise", "#48D1CC");
                    TablaColor("MediumVioletRed", "#C71585");
                    TablaColor("MidnightBlue", "#191970");
                    TablaColor("MintCream", "#F5FFFA");
                    TablaColor("MistyRose", "#FFE4E1");
                    TablaColor("Moccasin", "#FFE4B5");
                    TablaColor("NavajoWhite", "#FFDEAD");
                    TablaColor("Navy", "#000080");
                    TablaColor("OldLace", "#FDF5E6");
                    TablaColor("Olive", "#808000");
                    TablaColor("OliveDrab", "#6B8E23");
                    TablaColor("Orange", "#FFA500");
                    TablaColor("OrangeRed", "#FF4500");
                    TablaColor("Orchid", "#DA70D6");
                    TablaColor("PaleGoldenRod", "#EEE8AA");
                    TablaColor("PaleGreen", "#98FB98");
                    TablaColor("PaleTurquoise", "#AFEEEE");
                    TablaColor("PaleVioletRed", "#DB7093");
                    TablaColor("PapayaWhip", "#FFEFD5");
                    TablaColor("PeachPuff", "#FFDAB9");
                    TablaColor("Peru", "#CD853F");
                    TablaColor("Pink", "#FFC0CB");
                    TablaColor("Plum", "#DDA0DD");
                    TablaColor("PowderBlue", "#B0E0E6");
                    TablaColor("Purple", "#800080");
                    TablaColor("Red", "#FF0000");
                    TablaColor("RosyBrown", "#BC8F8F");
                    TablaColor("RoyalBlue", "#4169E1");
                    TablaColor("SaddleBrown", "#8B4513");
                    TablaColor("Salmon", "#FA8072");
                    TablaColor("SandyBrown", "#F4A460");
                    TablaColor("SeaGreen", "#2E8B57");
                    TablaColor("SeaShell", "#FFF5EE");
                    TablaColor("Sienna", "#A0522D");
                    TablaColor("Silver", "#C0C0C0");
                    TablaColor("SkyBlue", "#87CEEB");
                    TablaColor("SlateBlue", "#6A5ACD");
                    TablaColor("SlateGray", "#708090");
                    TablaColor("SlateGrey", "#708090");
                    TablaColor("Snow", "#FFFAFA");
                    TablaColor("SpringGreen", "#00FF7F");
                    TablaColor("SteelBlue", "#4682B4");
                    TablaColor("Tan", "#D2B48C");
                    TablaColor("Teal", "#008080");
                    TablaColor("Thistle", "#D8BFD8");
                    TablaColor("Tomato", "#FF6347");
                    TablaColor("Turquoise", "#40E0D0");
                    TablaColor("Violet", "#EE82EE");
                    TablaColor("Wheat", "#F5DEB3");
                    TablaColor("White", "#FFFFFF");
                    TablaColor("WhiteSmoke", "#F5F5F5");
                    TablaColor("Yellow", "#FFFF00");
                    TablaColor("YellowGreen", "#9ACD32");
                ?>
                    </table>
				<br />
				<table><tr><td>Prueba en esta caja de texto algunos colores : <input id="ColNombre" value="white" onKeyUp="$('#ColResNombre').css({ 'background-color' : $('#ColNombre').val() });"> = </td><td><span id="ColResNombre" class='ColRes'></span></td></tr></table>
                <br />
                <h3>Compatibilidad</h3>
                Se pueden especificar nombres de color en todos los navegadores compatibles con CSS1.<br />
                <?php $Base->CompatibilidadNavegadores(true, true, true, true, true); ?>

<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>