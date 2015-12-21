<?php 
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    
    function GenerarIndice($BD, $Categoria = "Todo") {
        $ArrayTags = (require dirname(__FILE__).'/Web/Config/EntradasTags.php');
//        $Codigo = "<script>OcultarBarraNavegacion()</script>";

        $Codigo  = "<div id='Categorias' class='Categorias_Cerrado'>".Intro();
        $Codigo .=      "<span>Categoria : ".$Categoria."</span>".Intro();
        $Codigo .=      "<ul>".Intro();
        $Codigo .=         "<li path='/'>Todo</li>".Intro();
        foreach ($ArrayTags as $Tag) {
            $Codigo .=         "<li path='/Categorias/".str_replace(" ", "-", $Tag)."'>".$Tag."</li>".Intro();            
        }
/*        
        $Codigo .=         "<li path='/Categorias/C-y-C++'>C y C++</li>".Intro();
        $Codigo .=         "<li path='/Categorias/PHP'>PHP</li>".Intro();
        $Codigo .=         "<li path='/Categorias/SQL'>SQL</li>".Intro();
        $Codigo .=         "<li path='/Categorias/CSS'>CSS</li>".Intro();
        $Codigo .=         "<li path='/Categorias/JavaScript'>JavaScript</li>".Intro();
        $Codigo .=         "<li path='/Categorias/JQuery'>JQuery</li>".Intro();
        $Codigo .=         "<li path='/Categorias/HTML'>HTML</li>".Intro();
        $Codigo .=         "<li path='/Categorias/Programación'>Programación</li>".Intro();
        $Codigo .=         "<li path='/Categorias/Responsive'>Responsive</li>".Intro();
        $Codigo .=         "<li path='/Categorias/Servidores'>Servidores</li>".Intro();
        $Codigo .=         "<li path='/Categorias/.htaccess'>.htaccess</li>".Intro();        */
        $Codigo .=      "</ul>".Intro();
        $Codigo .= "</div>".Intro();
        
        $Codigo .= "<div id='MarcoIndice'>".Intro();
        $Codigo .= GenerarArticulos($BD, $Categoria);
        $Codigo .= "</div>".Intro();
        return $Codigo;
    }

    function GenerarArticulos($BD, $Categoria = "Todo") {
//        $BD = new devildrey33_BD;
        $Entradas = (require dirname(__FILE__).'/Web/Config/EntradasBlog.php');
        
        for ($i = 0; $i < count($Entradas); $i++) {
            
        }
        $Codigo = "";
        if ($Categoria == "") { $Categoria = "Todo"; }
        for ($i = 0; $i < count($Entradas); $i++) {
            if (BuscarCategoria($Entradas[$i]["Tags"], $Categoria) == TRUE) {
                switch ($Entradas[$i]["Tipo"]) {
                    case "Blog" :
                        $Codigo .= "<article class='Articulo_Portada' style='transition-delay:".(rand(0, 50) / 100)."s'>".Intro();
                        $Codigo .=    "<a href='/Blog/".$Entradas[$i]["URL"]."'>".Intro().
                                        "<div class='Articulo_Portada_ImagenO'></div>".Intro().
                                        "<img src='/Web/Graficos/155x125_".$Entradas[$i]["Imagen"]."' class='Articulo_Portada_Imagen' alt='".$Entradas[$i]["Titulo"]."' />".Intro().
                                      "</a>".Intro();
                        $Codigo .=    "<h1><a href='/Blog/".$Entradas[$i]["URL"]."'>".$Entradas[$i]["Titulo"]."</a></h1>".Intro();
                        $Codigo .=    "<span>".substr($Entradas[$i]["Fecha"], 0, 2)." de ".ObtenerMesStr(substr($Entradas[$i]["Fecha"], 3, 2))." del ".substr($Entradas[$i]["Fecha"], 6, 4)." por <b>".$Entradas[$i]["Autor"]."</b>".Intro();
                        $Codigo .=    $BD->ObtenerValoresEntrada($Entradas[$i]["URL"].".php", $Entradas[$i]["Titulo"], false).Intro();
        //                echo    ", 894 visitas, 0 comentarios, 0 votos.</span><br />";
                        $Codigo .=      "<span><br />".Intro();
                        $Codigo .=      EnlazarTags($Entradas[$i]["Tags"]).Intro();
                        $Codigo .=      "</span>".Intro();
                        $Codigo .=  "</span>".Intro();
                        $Codigo .= "</article>".Intro();
                        break;
                    case "Lab" :
                        $Codigo .= "<article class='Articulo_Portada' style='transition-delay:".(rand(0, 50) / 100)."s'>".Intro();
                        $Codigo .=    "<a href='/Lab/Ejemplos/".$Entradas[$i]["URL"]."'>".Intro().
                                        "<div class='Articulo_Portada_ImagenO'></div>".Intro().
                                        "<img src='http://img.devildrey33.es/155x125_".$Entradas[$i]["Imagen"]."' class='Articulo_Portada_Imagen' alt='".$Entradas[$i]["Titulo"]."' />".Intro().
                                      "</a>".Intro();
                        $Codigo .=    "<h1><a href='/Lab/Ejemplos/".$Entradas[$i]["URL"]."'>".$Entradas[$i]["Titulo"]."</a></h1>".Intro();
                        $Codigo .=    "<span>".substr($Entradas[$i]["Fecha"], 0, 2)." de ".ObtenerMesStr(substr($Entradas[$i]["Fecha"], 3, 2))." del ".substr($Entradas[$i]["Fecha"], 6, 4)." por <b>".$Entradas[$i]["Autor"]."</b>.".Intro();
//                        $Codigo .=    $BD->ObtenerValoresEntrada($Entradas[$i]["URL"].".php", $Entradas[$i]["Titulo"], false).Intro();
                        $Codigo .=      "<span><br />".Intro();
                        $Codigo .=      EnlazarTags($Entradas[$i]["Tags"]).Intro();
                        $Codigo .=      "</span>".Intro();
                        $Codigo .=  "</span>".Intro();
                        $Codigo .= "</article>".Intro();
                        break;
                }
            }
        }
        return $Codigo;
    }

    function BuscarCategoria($Array, $Cat) {
        if      ($Cat == "Todo")    { return TRUE; }
        foreach ($Array as $TmpCat) { if ($Cat == $TmpCat)  { return TRUE; } }
        return FALSE;
    }

    function ObtenerMesStr($NumMes) {
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

    function EnlazarTags($Tags) {
        $Ret = "Categorías : ";
        $Total = count($Tags);
        for ($i = 0; $i < $Total; $i++) {
            $URL = str_replace(" ", "-", trim($Tags[$i]));
            $Ret.= "<a href='http://".$_SERVER['SERVER_NAME']."/Categorias/".trim($URL)."'>".$Tags[$i]."</a>";
            if ($i != $Total - 1)   {	$Ret.=", "; }
            else                    {   $Ret.=".";  }
        }
        return $Ret;
    }
        
?>