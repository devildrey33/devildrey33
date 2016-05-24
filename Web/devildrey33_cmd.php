<?php
    /* Archivo para peticiones ajax, tambien se puede utilizar a modo de consola MUY básica. */
    //include("devildrey33.php");
    include($_SERVER['DOCUMENT_ROOT']."/GenerarIndice.php");

    header('Content-Type: text/html; charset=utf-8');
    
    /* Elimino el ".php" final que se añade por la redirección del .htaccess */
    if (isset($_GET["cmd"]))    $Comando = substr($_GET["cmd"], 0, strlen($_GET["cmd"]) -4);
    else                        $Comando = "";

    /* Asigno si se verán o no los errores php */
    ini_set("display_errors", devildrey33_Opciones::MostrarErroresPHP());

    /* Comandos para cualquier usuario */
    switch ($Comando) {
        case "test2" : 
            $D = new devildrey33;
            $Str = Base::var_export(array(
            array(    
                'userAgent' 		=> "aaaaaaa",
                'Nombre'      		=> "aaaaaaa",
                'NombreCorto'		=> "aaaaaaa",
                'Version'   		=> "aaaaaaa",
                'Plataforma' 		=> "aaaaaaa",
                'PlataformaCorto' 	=> 1232321.33,
                'pattern'   		=> "aaaaaaa",
                'cosa'                  => [10,33,55,100, ['a', 'b', 'c', ['xx', 'xz']]],
                'patte3rn'   		=> "aaaaaaa"
                ), 
            array (
                'userAgent' 		=> "aaaaaaa",
                'Nombre'      		=> "aaaaaaa",
                'NombreCorto'		=> "aaaaaaa",
                'Version'   		=> "aaaaaaa",
                'Plataforma' 		=> "aaaaaaa",
                'PlataformaCorto' 	=> 1232321.33,
                'pattern'   		=> "aaaaaaa",
                'cosa'                  => [10,33,55,100, ['a', 'b', 'c', ['xx', 'xz']]],
                'patte3rn'   		=> "aaaaaaa"                   
                )
            ));
            echo "\n".$Str;
            break;
        case "test" : 
            devildrey33_Buscador::GenerarCache();
            break;
        case "ClearSession"                     :   
            session_unset();
            echo "OK";
            break;
        case "PrintSession"                     :   
            echo "<pre>";
            print_r($_SESSION);
            echo "</pre>";
            break;
        case "BanearIP"                         :   // DEPRECATED??
            $HT = new devildrey33_htaccess();
            $HT->BanearIP($_SERVER['REMOTE_ADDR']);
            break;
        case "Loguear"                          :   
            $L = devildrey33::HerramientasAdmin($_POST["l"], $_POST["p"], TRUE); 
            $L["ErrorPHP"] = Base::ObtenerLogPHP();
            echo json_encode($L);
            break;
        case "EnviarComentario"                 :
            $C = new devildrey33_Comentarios();
            echo $C->EnviarComentario($_POST["Pagina"], $_POST["Nombre"], $_POST["Email"], $_POST["Web"], $_POST["Comentario"], "", $_POST["URL"], $_POST["Autor"]);
            break;
        case "ObtenerComentarios"               :   
            $C2 = new devildrey33_Comentarios();
            echo $C2->InsertarComentarios($_POST["Pagina"], $_POST["Desde"], $_POST["Hasta"]);
            break;
        case "VotarComentario"                  :
            $C3 = new devildrey33_Comentarios();
            echo $C3->VotarComentario($_POST["Pagina"], $_POST["NumComentario"], $_POST["Valor"]);
            break;  
        case "VotarPagina"                  :
            $BD = new devildrey33_BD();
            echo $BD->VotarWeb($_POST["Pagina"], $_POST["Valor"], str_replace("http://www.", "http://", $_POST["URL"]));
            break;        
        case "LabAbrirEjemplo" : 
            echo json_encode(devildrey33_Lab::AbrirEjemplo($_POST["Archivo"], $_POST["ID"], TRUE));
            break;
        case "IndiceObtener15Mas" :  
            $BD = new devildrey33_BD();
            echo json_encode(["HTML" => Indice::GenerarArticulos($BD, $_POST["Categoria"], $_POST["Inicio"]), "ErrorPHP" => Base::ObtenerLogPHP()]);
            break;
    }

    /* Comandos para moderador y administrador */
    if (devildrey33_Opciones::Administrador() > 0) {        
        switch ($Comando) {
            // DEPRECATED??
            case "phpinfo"                      :   echo phpinfo();                                                                        break;
            case "Minificar"                    :   echo devildrey33::Minificar_JS_CSS();                                                                                                                       break;

            case "ActivarDebugPHP"              :   devildrey33_Opciones::MostrarErroresPHP(1);         echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "DesactivarDebugPHP"           :   devildrey33_Opciones::MostrarErroresPHP(0);         echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
//            case "CargarAdmin"                  :   devildrey33::HerramientasAdmin();                                                                                                                   break;
//            case "EscanearEjemplos"             :   echo devildrey33_Lab::MostrarCarpetaEjemplos();                                                                                                     break;
            case "Desloguear"                   :   echo json_encode(array("HTML" => devildrey33_Lab::LeerCache(), "ErroresPHP" => Base::ObtenerLogPHP()));     devildrey33_Opciones::Administrador(0);         break;
            case "ActivarMinificarHTML"         :   devildrey33_Opciones::Minificar_HTML(1);            echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "DesactivarMinificarHTML"      :   devildrey33_Opciones::Minificar_HTML(0);            echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "ActivarMinificarCSS"          :   devildrey33_Opciones::Minificar_CSS(1);             echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "DesactivarMinificarCSS"       :   devildrey33_Opciones::Minificar_CSS(0);             echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "ActivarMinificarJS"           :   devildrey33_Opciones::Minificar_JS(1);              echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "DesactivarMinificarJS"        :   devildrey33_Opciones::Minificar_JS(0);              echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "ActivarActualizarCache"       :   devildrey33_Opciones::ActualizarCache(1);           devildrey33::Minificar_JS_CSS();    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));     break;
            case "DesactivarActualizarCache"    :   devildrey33_Opciones::ActualizarCache(0);                                               echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));     break;
            case "ActivarConsola"               :   devildrey33_Opciones::MostrarConsola(1);            echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "DesactivarConsola"            :   devildrey33_Opciones::MostrarConsola(0);            echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
            case "Lab_GenerarCache"             :   devildrey33_Lab::GenerarCache($_POST["Lista"]);     echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
/*            case "AdaptarComentarios"           :   $BD = new devildrey33_BD();                         $BD->AdaptarComentarios();                                                                      break;*/
            case "VerEmailComentario"           :   $C = new devildrey33_Comentarios();                 echo $C->VerEmailComentario($_POST["Pagina"], $_POST["NumComentario"]);                                 break;
            case "EliminarComentario"           :   $C = new devildrey33_Comentarios();                 echo $C->EliminarComentario($_POST["Pagina"], $_POST["NumComentario"]);                                 break;
            case "EditarComentario"             :   $C = new devildrey33_Comentarios();                 echo $C->EditarComentario($_POST["Pagina"], $_POST["NumComentario"], $_POST["Mensaje"]);                break;
            case "BorrarSesion"                 :   session_unset();                                                                                                                                            break;
            case "LabGuardarEjemplo"            :   echo devildrey33_Lab::GuardarEjemplo($_POST["Archivo"], $_POST["Codigo"]);                                                                                  break;    
/*            case "ConvertirVotaciones" :
                $BD = new devildrey33_BD(); 
                $BD->ConvertirVotaciones();
                break;*/        
            case "help" :
                echo "<p>Lista de comandos</p>".
                    "<ul>".
                        "<li>phpinfo</li>".
                        "<li>ClearSession / PrintSession</li>".
                        "<li>ActivarMantenimiento / DesactivarMantenimiento</li>".
                        "<li>ActivarCheckSpelling / DesactivarCheckSpelling</li>".
                        "<li>ActivarCompresionGZip / DesactivarCompresionGZip</li>".
                        "<li>ActivarCacheImagenes / DesactivarCacheImagenes</li>".
                        "<li>LimpiarBaneados</li>".
                        "<li>Minificar <i>(Vuelve a crear la cache para los archivos CSS y JS)</i></li>".
                        "<li>BorrarSesion (borra los datos de la variable \$_SESSION</li>".
                        "<li>Desloguear</li>".
                    "</ul>";
                break;
        
        }
        /* Comandos para administrador */
        if (devildrey33_Opciones::Administrador() === 1) {        
            switch ($Comando) {
                case "ActivarCheckSpelling"         :   $HT = new devildrey33_htaccess();   $HT->CheckSpelling(TRUE);    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarCheckSpelling"      :   $HT = new devildrey33_htaccess();   $HT->CheckSpelling(FALSE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "ActivarCompresionGZip"        :   $HT = new devildrey33_htaccess();   $HT->CompresionGZip(TRUE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarCompresionGZip"     :   $HT = new devildrey33_htaccess();   $HT->CompresionGZip(FALSE);  echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "ActivarMantenimiento"         :   $HT = new devildrey33_htaccess();   $HT->Mantenimiento(TRUE);    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarMantenimiento"      :   $HT = new devildrey33_htaccess();   $HT->Mantenimiento(FALSE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "ActivarCacheImagenes"         :   $HT = new devildrey33_htaccess();   $HT->CacheImagenes(TRUE);    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarCacheImagenes"      :   $HT = new devildrey33_htaccess();   $HT->CacheImagenes(FALSE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "LimpiarBaneados"              :   $HT = new devildrey33_htaccess();   $HT->LimpiarBaneados();      echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
            }
        }
    }

?>