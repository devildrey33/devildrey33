<?php 
    abstract class eTipo {
        const RaizDoc       = 0;
        const RaizCSS       = 1;
        const Funciones     = 2;
        const Propiedades   = 3;
        const Reglas        = 4;
        const Selectores    = 5;
        const Funcion       = 6;
        const Propiedad     = 7;
        const Regla         = 8;
        const Selector      = 9;
    };
    $TipoSalida = 0;

    if (isset($_GET["RaizCSS"])) 	{ if ($_GET["RaizCSS"]) 		$TipoSalida = eTipo::RaizCSS; 	}
    if (isset($_GET["RaizDoc"])) 	{ if ($_GET["RaizDoc"]) 		$TipoSalida = eTipo::RaizDoc; 	}
    if (isset($_GET["Funciones"])) 	{ if ($_GET["Funciones"]) 		$TipoSalida = eTipo::Funciones;	}
    if (isset($_GET["Reglas"])) 	{ if ($_GET["Reglas"]) 			$TipoSalida = eTipo::Reglas;	}
    if (isset($_GET["Funcion"])) 	{ if ($_GET["Funcion"] == ".php") 	$TipoSalida = eTipo::Funciones;		else	$TipoSalida = eTipo::Funcion; }
    if (isset($_GET["Propiedad"])) 	{ if ($_GET["Propiedad"] == ".php")	$TipoSalida = eTipo::Propiedades;	else	$TipoSalida = eTipo::Propiedad; }
    if (isset($_GET["Regla"]))          { if ($_GET["Regla"] == ".php") 	$TipoSalida = eTipo::Reglas; 		else	$TipoSalida = eTipo::Regla; }
    if (isset($_GET["Selector"])) 	{ if ($_GET["Selector"] == ".php") 	$TipoSalida = eTipo::Selectores; 	else	$TipoSalida = eTipo::Selector; }

/*    echo "<pre>";
    print_r($_POST);
    echo "</pre>";
    echo "<pre>";
    print_r($_GET);
    echo "</pre>";*/

    include("devildrey33.php");
    include("CSS_BD.php");

    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/

    /* Propiedad, Selector, Funcion, Regla */
    if ($TipoSalida == eTipo::Funcion || $TipoSalida == eTipo::Propiedad || $TipoSalida == eTipo::Regla || $TipoSalida == eTipo::Selector) { 
        switch ($TipoSalida) {
            case eTipo::Funcion : 	$Path = "Funciones";	$PathBD = "Función"; 	$TipoTxt = "función"; 	 $TipoTxt2 = "funciones"; 	break;
            case eTipo::Propiedad :     $Path = "Propiedades";	$PathBD = "Propiedad"; 	$TipoTxt = "propiedad";	 $TipoTxt2 = "propiedades";     break;
            case eTipo::Regla : 	$Path = "Reglas";	$PathBD = "Regla"; 	$TipoTxt = "regla";	 $TipoTxt2 = "reglas"; 		break;
            case eTipo::Selector : 	$Path = "Selectores";	$PathBD = "Selector"; 	$TipoTxt = "selector";	 $TipoTxt2 = "selectores"; 	break;
        }

        // Obtengo el nombre de la propiedad
        for ($i = strlen($_SERVER['REQUEST_URI']); $i > 0; $i --) {
            if (substr($_SERVER['REQUEST_URI'], $i, 1) == '/') {
                $NombrePropiedad = substr($_SERVER['REQUEST_URI'], $i + 1);
                break;
            }
        }
        // Si no hay nombre de propiedad vuelvo al indice de propiedades
/*	if ($NombrePropiedad == "")	header("location: http://devildrey33.es/Doc/CSS/".$Path."/");*/

        $Tipo = $Path." CSS : ";
        $NombrePropiedad = str_replace(".php", "", $NombrePropiedad);  // filtro las extensiones php
        $CSS_BD = new CSS_BD;
        $Entrada = $CSS_BD->BuscarEntrada($NombrePropiedad);
        $NombreCSS = $CSS_BD->NormalizarNombre($NombrePropiedad);
       
        $Base = new devildrey33;        
        $META = "<meta name='keywords' content='".$NombrePropiedad.", CSS ".$NombrePropiedad.", ".$Tipo.$NombrePropiedad."'>";
        $Base->InicioPlantilla($PathBD."CSS_".$NombreCSS.".php", $PathBD." CSS : ".$NombrePropiedad, $META);
        $PathDoc = "../Documentacion/CSS/".$Path."/".$CSS_BD->NormalizarNombre($NombrePropiedad).".php";
        
        // Si es de error no tiene que mostrar los comentarios.
        $EvitarComentarios = false;

        if (file_exists($PathDoc)) {
            $Base->InicioDoc($PathBD."CSS_".$NombreCSS.".php", $PathBD." CSS : ".$NombrePropiedad);
            
            $Archivo = fopen($PathDoc, "r");
            $DatosArchivo = fread($Archivo, filesize($PathDoc));
            fclose($Archivo);

            $PosCompatibilidad = strpos($DatosArchivo, "<h2>Compatibilidad</h2>");
            $PosSabiasQue = strpos($DatosArchivo, "<h2>¿Sabías que...?</h2>");
            
            if ($PosSabiasQue !== false) {
                echo substr($DatosArchivo, 0, $PosSabiasQue);                
            }
            else {
                echo substr($DatosArchivo, 0, $PosCompatibilidad - 8);
            }

            $Compatibilidad = substr($DatosArchivo, $PosCompatibilidad);
/*            if ($PosSabiasQue !== false) {
                $SabiasQue = substr($DatosArchivo, $PosSabiasQue, ($PosCompatibilidad - $PosSabiasQue));
            }*/
            
            $ArchivoEjemplo = "../Ejemplos/".$Path."CSS/".$NombreCSS.".html";
            $EnlaceEjemplo = "/Lab/Ejemplos/".$Path."CSS/".$NombreCSS.".html";

            // Si existe el ejemplo lo mostramos
            $FechaEjemplo = "";
            if (file_exists($ArchivoEjemplo)) {
//                $Base->CrearBotonLab("BotonLab1", $ArchivoEjemplo, "Ver ejemplo", TRUE);
                echo "<hr /><h2>Código de ejemplo</h2><br />";
                if ($Entrada === false) {
                    devildrey33_Lab::CrearMiniLab(array("Ejemplos/".$Path."CSS/".$NombreCSS.".html"));
                }
                else {
                    $ArrayEntradas = $Entrada["EjemplosExtra"];
                    array_unshift($ArrayEntradas, "Ejemplos/".$Path."CSS/".$NombreCSS.".html");
                    devildrey33_Lab::CrearMiniLab($ArrayEntradas);
                }
                
/*                echo "<div style='display:table; margin:auto;'><a href='".$EnlaceEjemplo."'><button>Ver ejemplo</button></a></div>";
                
                echo "<div style='clear:both'></div>";

                $Base->PintarCodigo->PintarArchivoHTML('CodigoPC_'.$NombreCSS, $PathBD.' '.$NombrePropiedad, $ArchivoEjemplo);
                echo "<br /><br />";*/
                $FechaEjemplo = date("d/m/Y", filemtime($ArchivoEjemplo));
            }
            else {
                echo "<span style='color:red'>".$ArchivoEjemplo."</span>";
            }


                echo "<hr />";

            if ($PosSabiasQue !== false) {
                echo substr($DatosArchivo, $PosSabiasQue, ($PosCompatibilidad - $PosSabiasQue));
            }
            
            
            
            
            echo $Compatibilidad;
            
//            echo $Compatibilidad;
            $CSS_BD->MostrarCompatibilidad($NombrePropiedad);

            $Fecha = date("d/m/Y", filemtime($PathDoc));
            echo "<div style='position:relative'>".
                    "<div class='postit' style='position:absolute; right:0px; top:-107px; '>Documento modificado por última vez : <i>".$Fecha."</i><br />";
            if ($FechaEjemplo != "") echo "Ejemplo modificado por última vez : <i style='float:right'>".$FechaEjemplo."</i>";
            echo    "</div>".
                "</div>";            
            
            
            $CSS_BD->MostrarEnlacesGrupo($NombrePropiedad);

            
            $Base->FinBlog($EvitarComentarios);
        }
        else { /* Error 404 */
            if (!isset($_POST["SinPlantilla"])) echo "<script>\$Base.MostrarErrorAjax(404, true);</script>";
            else                                echo "<script>\$Base.MostrarErrorAjax(404, false);</script>";
            $EvitarComentarios = true;
        }
        
        
        $Base->FinPlantilla(); 
    }

    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/    
    
    /* PropiedadES, SelectorES, FuncionES, ReglaS */
    /*else if ($TipoSalida == eTipo::Funciones || $TipoSalida == eTipo::Propiedades || $TipoSalida == eTipo::Reglas || $TipoSalida == eTipo::Selectores) { 
        switch ($TipoSalida) {
            case eTipo::Funciones : 	$Str = "funciones";	$Str2 = "Funciones";	break;
            case eTipo::Propiedades : 	$Str = "propiedeades";	$Str2 = "Propiedeades";	break;
            case eTipo::Selectores : 	$Str = "selectores";	$Str2 = "Selectores";	break;
            case eTipo::Reglas : 	$Str = "reglas";	$Str2 = "Reglas";	break;
        }
        
        $Base = new devildrey33;        
        $META = '<meta name="description" content="Referencia '.$Str.' css, Ejemplos '.$Str.' css">
                <meta name="robots" content="index, follow">';
        $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS : ".$Str2, $META);
        $Base->InicioDoc(basename(__FILE__), "Referéncia CSS : ".$Str2);
        
        

        $CSS_BD = new CSS_BD;
        switch ($TipoSalida) {
            case eTipo::Funciones : 	$Documentadas = $CSS_BD->MostrarPorGrupo(CSSTipo::Funcion);	break;
            case eTipo::Propiedades : 	$Documentadas = $CSS_BD->MostrarPorGrupo(CSSTipo::Propiedad);	break;
            case eTipo::Selectores : 	$Documentadas = $CSS_BD->MostrarPorGrupo(CSSTipo::Selector);	break;
            case eTipo::Reglas : 	$Documentadas = $CSS_BD->MostrarPorGrupo(CSSTipo::Regla);	break;
        }

        $Fecha = date("d/m/Y", filemtime("CSS_BD.php"));
        echo "<br /><div class='devildrey33_Nota'>".CSSTipo::Plural($TipoSalida)." documentadas : <b>".$Documentadas["Documentadas"]."/".$Documentadas["Total"]."</b><br />Modificado por última vez : <i>".$Fecha."</i>.</div>";

        $Base->FinBlog();
        $Base->FinPlantilla(); 
    }

    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/
    
    
    /* RAIZ CSS */	
    elseif ($TipoSalida == eTipo::RaizCSS) {
        
        $Base = new devildrey33;        
        $META = '<meta name="description" content="Referencia css, Ejemplos css">'.
                '<meta name="keywords" content="CSS">'.
                '<meta name="robots" content="index, follow">';
        $Base->InicioPlantilla(basename(__FILE__), "Referéncia CSS", $META);
        $Base->InicioDoc(basename(__FILE__), "Referéncia CSS");
        
        echo '<br />'.
        '<div><a href="/Doc/CSS/Colores/">Colores</a></div>'.
        '<div><a href="/Doc/CSS/Degradados/">Degradados</a></div>'.
        '<div><a href="/Doc/CSS/Unidades/">Unidades</a></div>'.
        '<div><a href="/Doc/CSS/Propiedades/">Propiedades</a></div>'.
        '<div><a href="/Doc/CSS/Funciones/">Funciones</a></div>'.
        '<div><a href="/Doc/CSS/Reglas/">Reglas</a></div>'.
        '<div><a href="/Doc/CSS/Selectores/">Selectores</a></div><hr />';
        $CSS_BD = new CSS_BD;
        $Documentadas = $CSS_BD->MostrarTodo();

        $Fecha = date("d/m/Y", filemtime("CSS_BD.php"));
        echo "<br /><div class='devildrey33_Nota'>Proporción de la documentación terminada : <b>".$Documentadas["Documentadas"]."/".$Documentadas["Total"]."</b><br />Modificado por última vez : <i>".$Fecha."</i>.</div>";

        echo "<hr />";


        $Base->FinBlog();
        $Base->FinPlantilla(); 

    }

    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/
    /*************************************************************************************************************************************/


    /* RAIZ DOCUMENTOS */	
    elseif ($TipoSalida == eTipo::RaizDoc) {
        $Base = new devildrey33;        
        $META = '<meta name="robots" content="index, follow">';
        $Base->InicioPlantilla(basename(__FILE__), "Documentación", $META);
        $Base->InicioDoc(basename(__FILE__), "Documentación");

        echo '<br />'.
        '<div><a href="/Doc/CSS/">CSS</a></div>'.
        '<div><a href="/Doc/DWL/">DWL</a></div>';
        $Base->FinBlog();
        $Base->FinPlantilla(); 
    }

?>


