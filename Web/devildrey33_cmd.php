<?php
    /* Archivo para peticiones ajax, tambien se puede utilizar a modo de consola MUY básica. */
    //include("devildrey33.php");
    include($_SERVER['DOCUMENT_ROOT']."/GenerarIndice.php");

    
    /* Elimino el ".php" final que se añade por la redirección del .htaccess */
    if (isset($_GET["cmd"]))    $Comando = substr($_GET["cmd"], 0, strlen($_GET["cmd"]) -4);
    else                        $Comando = "";
    
    
    /* Comandos para cualquier usuario */
    switch ($Comando) {
        case "ClearSession"                     :   
            session_unset();
            echo "OK";
            break;
        case "PrintSession"                     :   
            echo "<pre>";
            print_r($_SESSION);
            echo "</pre>";
            break;
        case "BanearIP"                         :   
            $HT = new devildrey33_htaccess();
            $HT->BanearIP($_SERVER['REMOTE_ADDR']);
            break;
        case "Loguear"                          :   
            echo json_encode(devildrey33::HerramientasAdmin($_POST["l"], $_POST["p"], TRUE));
            break;
        case "EnviarComentario"                 :
            $C = new devildrey33_Comentarios();
            $C->EnviarComentario($_POST["Pagina"], $_POST["Nombre"], $_POST["Email"], $_POST["Web"], $_POST["Comentario"], "", $_POST["URL"], $_POST["Autor"]);
            break;
        case "ObtenerComentarios"               :   
            $C2 = new devildrey33_Comentarios();
            $C2->InsertarComentarios($_POST["Pagina"], $_POST["Desde"], $_POST["Hasta"]);
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
            echo Indice::GenerarArticulos($BD, $_POST["Categoria"], $_POST["Inicio"]);
            break;
    }
    
    /* Comandos para moderador y administrador */
    if (devildrey33_Opciones::Administrador() > 0) {        
        switch ($Comando) {
            case "Minificar"                    :   echo devildrey33::Minificar_JS_CSS();                                                                                                               break;
//            case "CargarAdmin"                  :   devildrey33::HerramientasAdmin();                                                                                                                   break;
//            case "EscanearEjemplos"             :   echo devildrey33_Lab::MostrarCarpetaEjemplos();                                                                                                     break;
            case "Desloguear"                   :   echo devildrey33_Lab::LeerCache();                  devildrey33_Opciones::Administrador(0);                                                         break;
            case "ActivarMinificarHTML"         :   devildrey33_Opciones::Minificar_HTML(1);                                                                                                            break;
            case "DesactivarMinificarHTML"      :   devildrey33_Opciones::Minificar_HTML(0);                                                                                                            break;
            case "ActivarMinificarCSS"          :   devildrey33_Opciones::Minificar_CSS(1);                                                                                                             break;
            case "DesactivarMinificarCSS"       :   devildrey33_Opciones::Minificar_CSS(0);                                                                                                             break;
            case "ActivarMinificarJS"           :   devildrey33_Opciones::Minificar_JS(1);                                                                                                              break;
            case "DesactivarMinificarJS"        :   devildrey33_Opciones::Minificar_JS(0);                                                                                                              break;
            case "ActivarActualizarCache"       :   devildrey33_Opciones::ActualizarCache(1);           devildrey33::Minificar_JS_CSS();                                                                break;
            case "DesactivarActualizarCache"    :   devildrey33_Opciones::ActualizarCache(0);                                                                                                           break;
            case "ActivarConsola"               :   devildrey33_Opciones::MostrarConsola(1);                                                                                                            break;
            case "DesactivarConsola"            :   devildrey33_Opciones::MostrarConsola(0);                                                                                                            break;
            case "Lab_GenerarCache"             :   devildrey33_Lab::GenerarCache($_POST["Lista"]);                                                                                                     break;
/*            case "AdaptarComentarios"           :   $BD = new devildrey33_BD();                         $BD->AdaptarComentarios();                                                                      break;*/
            case "VerEmailComentario"           :   $C = new devildrey33_Comentarios();                 echo $C->VerEmailComentario($_POST["Pagina"], $_POST["NumComentario"]);                         break;
            case "EliminarComentario"           :   $C = new devildrey33_Comentarios();                 echo $C->EliminarComentario($_POST["Pagina"], $_POST["NumComentario"]);                         break;
            case "EditarComentario"             :   $C = new devildrey33_Comentarios();                 echo $C->EditarComentario($_POST["Pagina"], $_POST["NumComentario"], $_POST["Mensaje"]);        break;
            case "BorrarSesion"                 :   session_unset();                                                                                                                                    break;
            case "LabGuardarEjemplo"            :   echo devildrey33_Lab::GuardarEjemplo($_POST["Archivo"], $_POST["Codigo"]);                                                                          break;    
/*            case "ConvertirVotaciones" :
                $BD = new devildrey33_BD(); 
                $BD->ConvertirVotaciones();
                break;*/        
            case "help" :
                echo "<p>Lista de comandos</p>".
                    "<ul>".
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
                case "ActivarCheckSpelling"         :   $HT = new devildrey33_htaccess();                   $HT->CheckSpelling(TRUE);                                                                       break;
                case "DesactivarCheckSpelling"      :   $HT = new devildrey33_htaccess();                   $HT->CheckSpelling(FALSE);                                                                      break;
                case "ActivarCompresionGZip"        :   $HT = new devildrey33_htaccess();                   $HT->CompresionGZip(TRUE);                                                                      break;
                case "DesactivarCompresionGZip"     :   $HT = new devildrey33_htaccess();                   $HT->CompresionGZip(FALSE);                                                                     break;
                case "ActivarMantenimiento"         :   $HT = new devildrey33_htaccess();                   $HT->Mantenimiento(TRUE);                                                                       break;
                case "DesactivarMantenimiento"      :   $HT = new devildrey33_htaccess();                   $HT->Mantenimiento(FALSE);                                                                      break;
                case "ActivarCacheImagenes"         :   $HT = new devildrey33_htaccess();                   $HT->CacheImagenes(TRUE);                                                                       break;
                case "DesactivarCacheImagenes"      :   $HT = new devildrey33_htaccess();                   $HT->CacheImagenes(FALSE);                                                                      break;
                case "LimpiarBaneados"              :   $HT = new devildrey33_htaccess();                   $HT->LimpiarBaneados();                                                                         break;

            }
        }
        
    }
    
?>