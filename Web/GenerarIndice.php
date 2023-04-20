<?php
    include("devildrey33.php");
                    

    class Indice {    
        static function GenerarIndice($BD, $Categoria = "Todo", $Inicio = 0) {
            $ArrayTags = (require dirname(__FILE__).'/Config/EntradasTags.php');
                    
            $Codigo  = '<input id="Categorias_Estado" class="Menu_Boton_Input" type="checkbox">'.Intro();
            $Codigo .= '<label id="Categorias_Label" for="Categorias_Estado"></label>'.Intro();
            $Codigo .= "<div id='Categorias' class='SinSeleccion' categoria='".$Categoria."'>".Intro();
            $Codigo .=      "<span>Categoría : ".$Categoria."</span>".Intro();
            $Codigo .=      "<div>".Intro();
            $Codigo .=         "<div path='".Base::URL_Raiz()."'>Todo</div>".Intro();
            foreach ($ArrayTags as $Tag) {
                $Codigo .=         "<div path='".Base::URL_Raiz()."Categorias/".str_replace(" ", "-", $Tag)."'>".$Tag."</div>".Intro();            
            }
            $Codigo .=      "</div>".Intro();
            $Codigo .= "</div>".Intro();

            $Codigo .= "<div id='MarcoIndice'>".Intro();
            
            $Fin = devildrey33_Opciones::EntradasIndice();
            if ($Fin === 0) $Fin = 16;
            
            $Codigo .= Indice::GenerarArticulos($BD, $Categoria, $Inicio, $Fin);
            $Codigo .= "</div>".Intro();
            return $Codigo;
        }

        static function GenerarArticulos($BD, $Categoria = "Todo", $Inicio = 0, $Fin = 16) {
            /* Si inicio es 0 hay que comprobar que no se hubieran cargado elementos anteriormente mediante el scroll */
/*            if ($Inicio === 0) {
                $Inicio = devildrey33_Opciones::EntradasIndice();
            }*/
            
            $Entradas = (require dirname(__FILE__).'/Config/EntradasBlog.php');
            if ($Categoria === "Todo") {
                $EntradasPC = $Entradas;
            }
            else { /* Creo un array solo con las entradas que tengan la categoria especificada */
                for ($i = 0; $i < count($Entradas); $i++) {
                    if (Indice::BuscarCategoria($Entradas[$i]["Tags"], $Categoria) === TRUE) {
                        $EntradasPC[] = $Entradas[$i];
                    }
                }
            }
            $Codigo = "";
            if ($Categoria == "") { $Categoria = "Todo"; }
            $Contador = 0;
            $TotalEntradas = (is_null($EntradasPC) === true) ? 0 : count($EntradasPC);
            for ($i = $Inicio; $i < $TotalEntradas; $i++) {
//                if (Indice::BuscarCategoria($Entradas[$i]["Tags"], $Categoria) === TRUE) {
                    switch ($EntradasPC[$i]["Tipo"]) {
                        case "Blog"     :  default :    $URL = Base::URL_Blog().$EntradasPC[$i]["URL"];   $EntradasPC[$i]["URL"].= ".php";   break;
                        case "Lab"      :               $URL = Base::URL_Lab().$EntradasPC[$i]["URL"];                                       break;
                        case "Experience" :             $URL = Base::URL_Raiz().$EntradasPC[$i]["URL"];                                       break;
                        case "DocCSS"   :               $URL = Base::URL_Doc().$EntradasPC[$i]["URL"];                                       break;
                    }
                    // Parche parche para que como mínimo en un servidor local no dedicado (localhost/directorio-web) se pueda acceder a las entradas del indice
//                    if ($EntradasPC[$i]["Tipo"] === "Blog" && devildrey33_Opciones::$ServidorLocal === TRUE) { $URL .= ".php"; }

                    $Codigo .= "<article class='Articulo_Portada' style='transition-delay:".(rand(0, 50) / 100)."s'>".Intro();
                    $Codigo .=    "<div class='Articulo_Portada_MarcoI'></div>".Intro();
                    $Codigo .=    "<div class='Articulo_Portada_MarcoD'></div>".Intro();
//                    $Codigo .=    "<div class='Articulo_Portada_Marco'>".Intro();
                    $Codigo .=      "<a href='".$URL."'>".Intro().
                                      "<div class='Articulo_Portada_ImagenO'></div>".Intro().
                                      "<img src='".Base::URL_Graficos()."155x125_".$EntradasPC[$i]["Imagen"]."' class='Articulo_Portada_Imagen' alt='".$EntradasPC[$i]["Titulo"]."' />".Intro().
                                    "</a>".Intro();
                    $Codigo .=      "<h1><a href='".$URL."'>".$EntradasPC[$i]["Titulo"]."</a></h1>".Intro();
                    $Codigo .=      "<div class='MarcoInformacion'>".Intro();
                    
                    
                    $ValoresEntrada = $BD->ObtenerValoresEntrada2($EntradasPC[$i]["URL"], false);
                    $Codigo .=      "<div>".
                                        "<b>".$ValoresEntrada["Visitas"]."</b> visitas, ".
                                        "<b>".$ValoresEntrada["Comentarios"]."</b> ";
                    if ($ValoresEntrada["Comentarios"] != 1) { $Codigo .= "comentarios"; }
                    else                                     { $Codigo .= "comentario"; }
                    $Codigo .=          ", <b>".$ValoresEntrada["Votaciones"]["TotalVotaciones"]."</b> ";
                    if ($ValoresEntrada["Votaciones"]["TotalVotaciones"] == 1) { $Codigo .= "voto de <b>".round($ValoresEntrada["Votaciones"]["TotalEstrellas"] / $ValoresEntrada["Votaciones"]["TotalVotaciones"], 2)."</b> sobre <b>5</b>."; }
                    else                                                       { 
                        if ($ValoresEntrada["Votaciones"]["TotalEstrellas"] == 0) {
                            $Codigo .= "votos";
                        }
                        else {
                            $Codigo .= "votos con una media de <b>".round($ValoresEntrada["Votaciones"]["TotalEstrellas"] / $ValoresEntrada["Votaciones"]["TotalVotaciones"], 2)."</b> sobre <b>5</b>.";                            
                        }                        
                    }                            
//                    $Codigo .=      "</div>".Intro();
                    $Codigo .=    "</div>".Intro();

                    //$Codigo .=    "<div>".$BD->ObtenerValoresEntrada($EntradasPC[$i]["URL"], $EntradasPC[$i]["Titulo"], false)."</div>".Intro();
//                    $Codigo .=    "<div>".$BD->ObtenerValoresEntrada($EntradasPC[$i]["URL"], $EntradasPC[$i]["Titulo"], false)."</div>".Intro();
                    $Codigo .=    "<div>".substr($EntradasPC[$i]["Fecha"], 0, 2)." de ".Indice::ObtenerMesStr(substr($EntradasPC[$i]["Fecha"], 3, 2))." del ".substr($EntradasPC[$i]["Fecha"], 6, 4)." por <b>".$EntradasPC[$i]["Autor"]."</b></siv>".Intro();
//$Codigo .= "<span><b>190</b> visitas, <b>0</b> comentarios, <b>120</b> votos con una media de <b>10</b> sobre <b>5</b><br />07 septiembre del 2025 <b>- Josep Antoni Bover</b>";
                    $Codigo .=      "<div>".Intro();
                    $Codigo .=      Indice::EnlazarTags($EntradasPC[$i]["Tags"]).Intro();
                    $Codigo .=      "</div>".Intro();
                    $Codigo .=  "</div>".Intro();
                    $Codigo .= "</article>".Intro();                
                    // Ultimo articulo de la lista
                    $Contador ++;
                    if ($i === (count($EntradasPC) - 1)) {
                        $Codigo .= "<div finscrollinfinito='true'></div>".Intro();   
                    }
//                }
                // Cuando se leen 16 articulos paramos
                if ($Fin === $Contador) { 
                    devildrey33_Opciones::EntradasIndice($Inicio + $Contador);  /* Guardo en la sesión el número de entradas guardadas con el scroll en el indice */
                    return $Codigo;                                             /* - De esta forma si se vuelve al indice por el historial volverá a la posición de la entrada a la que se accedió */
                }
            }
            return $Codigo;
        }

        static function BuscarCategoria($Array, $Cat) {
            if      ($Cat == "Todo")    { return TRUE; }
            foreach ($Array as $TmpCat) { if ($Cat == $TmpCat)  { return TRUE; } }
            return FALSE;
        }

        static function ObtenerMesStr($NumMes) {
            switch ($NumMes) {
                case "01" : return "Enero";
                case "02" : return "Febrero";
                case "03" : return "Marzo";
                case "04" : return "Abril";
                case "05" : return "Mayo";
                case "06" : return "Junio";
                case "07" : return "Julio";
                case "08" : return "Agosto";
                case "09" : return "Septiembre";
                case "10" : return "Octubre";
                case "11" : return "Noviembre";
                case "12" : return "Diciembre";
            }
        }

        static function EnlazarTags($Tags) {
            $Ret = "<b>Categorías</b> : ";
            $Total = count($Tags);
            for ($i = 0; $i < $Total; $i++) {
                $URL = str_replace(" ", "-", trim($Tags[$i]));
                $Ret.= "<a href='".Base::URL_Raiz()."Categorias/".trim($URL)."'>".$Tags[$i]."</a>";
                if ($i != $Total - 1)   {	$Ret.=", "; }
                else                    {   $Ret.=".";  }
            }
            return $Ret;
        }
    };        
?>