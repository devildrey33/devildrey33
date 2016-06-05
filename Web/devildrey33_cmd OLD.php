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
/*        case "test2" : 
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
            break;*/
        case "Buscar" :
            echo devildrey33_Buscador::Buscar($_POST["Palabras"]);
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
        case "BanearIP"                         :   // Utilizado desde el .htaccess
            devildrey33_htaccess::BanearIP($_SERVER['REMOTE_ADDR']);
            break;
        case "Loguear"                          :   
            $L = devildrey33::HerramientasAdmin($_POST["l"], $_POST["p"], TRUE); 
            $L["ErroresPHP"] = Base::ObtenerLogPHP();
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
            echo json_encode(["HTML" => Indice::GenerarArticulos($BD, $_POST["Categoria"], $_POST["Inicio"]), "ErroresPHP" => Base::ObtenerLogPHP()]);
            break;
    }

    /* Comandos para moderador y administrador */
    if (devildrey33_Opciones::Administrador() > 0) {        
        switch ($Comando) {
            // DEPRECATED??
            case "phpinfo"                      :   echo phpinfo();                                                                                                                                             break;
            case "Minificar"                    :   echo devildrey33::Minificar_JS_CSS();                                                                                                                       break;

            case "GenerarCacheBuscador"         :   devildrey33_Buscador::GenerarCache();               echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;

            case "ActivarBorrarLogPHP"          :   devildrey33_Opciones::BorrarLogPHP(1);              echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;            
            case "DesactivarBorrarLogPHP"       :   devildrey33_Opciones::BorrarLogPHP(0);              echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));                                         break;
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
                case "ActivarCheckSpelling"         :   devildrey33_htaccess::CheckSpelling(TRUE);    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarCheckSpelling"      :   devildrey33_htaccess::CheckSpelling(FALSE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "ActivarCompresionGZip"        :   devildrey33_htaccess::CompresionGZip(TRUE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarCompresionGZip"     :   devildrey33_htaccess::CompresionGZip(FALSE);  echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "ActivarMantenimiento"         :   devildrey33_htaccess::Mantenimiento(TRUE);    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarMantenimiento"      :   devildrey33_htaccess::Mantenimiento(FALSE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "ActivarCacheImagenes"         :   devildrey33_htaccess::CacheImagenes(TRUE);    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "DesactivarCacheImagenes"      :   devildrey33_htaccess::CacheImagenes(FALSE);   echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
                case "LimpiarBaneados"              :   devildrey33_htaccess::LimpiarBaneados();      echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));    break;
            }
        }
    }
    else { // No estas logueado o ha expirado el tiempo de sesión
        echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 1, "Comando" => $Comando, "Params" => $_POST));
    }
    
    
    function JsonRet($Estado) {
        echo json_encode(array(
            "ErroresPHP" => Base::ObtenerLogPHP(),
            "Estado"     => $Estado,
            "Comando"    => $Comando,
            "Params"     => $_POST
        )); 
    }

    /* Estructura de datos para pasar de php a javascript con el JSON :
       | Nombre         | Descrición                                                                 | Requerido
       ----------------------------------------------------------------------------------------------------------
       | ErroresPHP     | Las advertencias y errores que ha devuelto la ejecución del código.        | Si
       | Estado         | Estado de la petición : (0 = Ok, 1 = Requiere Admin, 2 = Error)            | Si
       | Comando        | Cadena de caracteres que contiene el comando                               | Opcional
       | Params         | Parametros subministrados en el $_POST                                     | Opcional
       | HTML           | Código HTML a insertar                                                     | Opcional
     */
    
    
    
    
    
    
    
    class devildrey33_cmd {
        public $Comando = "";
        public function __construct() {
            $this->Comando = basename($_GET["CMD"], ".php");
            switch ($this->Comando) {
                // Tests
                case "ClearSession" :                   $this->ClearSession();                      break;
                case "PrintSession" :                   $this->PrintSession();                      break;
                // Acciones usuario    
                case "Buscar" :                         $this->Buscar();                            break;
                case "BanearIP" :                       $this->BanearIP();                          break;
                case "Loguear" :                        $this->Loguear();                           break;
                case "EnviarComentario" :               $this->EnviarComentario();                  break;
                case "ObtenerComentarios" :             $this->ObtenerComentarios();                break;
                case "VotarComentario" :                $this->VotarComentario();                   break;
                case "VotarPagina" :                    $this->VotarPagina();                       break;
                case "LabAbrirEjemplo" :                $this->LabAbrirEjemplo();                   break;
                case "IndiceObtener15Mas" :             $this->IndiceObtener15Mas();                break;
                // Acciones Admin
                case "phpinfo" :                        $this->phpinfo();                           break;
                case "Minificar" :                      $this->Minificar();                         break;
                case "GenerarCacheBuscador" :           $this->GenerarCacheBuscador();              break;
                case "ActivarBorrarLogPHP" :            $this->ActivarBorrarLogPHP();               break;
                case "DesactivarBorrarLogPHP" :         $this->DesactivarBorrarLogPHP();            break;
                case "ActivarDebugPHP" :                $this->ActivarDebugPHP();                   break;
                case "DesactivarDebugPHP" :             $this->DesactivarDebugPHP();                break;
                case "Desloguear" :                     $this->Desloguear();                        break;
                case "ActivarMinificarHTML" :           $this->ActivarMinificarHTML();              break;
                case "DesactivarMinificarHTML" :        $this->DesactivarMinificarHTML();           break;
                case "ActivarMinificarCSS" :            $this->ActivarMinificarCSS();               break;
                case "DesactivarMinificarCSS" :         $this->DesactivarMinificarCSS();            break;
                case "ActivarMinificarJS" :             $this->ActivarMinificarJS();                break;
                case "DesactivarMinificarJS" :          $this->DesactivarMinificarJS();             break;
                case "ActivarActualizarCache" :         $this->ActivarActualizarCache();            break;
                case "DesactivarActualizarCache" :      $this->DesactivarActualizarCache();         break;
                case "ActivarConsola" :                 $this->ActivarConsola();                    break;
                case "DesactivarConsola" :              $this->DesactivarConsola();                 break;
                case "Lab_GenerarCache" :               $this->Lab_GenerarCache();                  break;
                case "VerEmailComentario" :             $this->VerEmailComentario();                break;
                case "EliminarComentario" :             $this->EliminarComentario();                break;
                case "EditarComentario" :               $this->EditarComentario();                  break;
                case "BorrarSesion" :                   $this->BorrarSesion();                      break;
                case "LabGuardarEjemplo" :              $this->LabGuardarEjemplo();                 break;
                // Super admin
                case "ActivarCheckSpelling" :           $this->ActivarCheckSpelling();              break;
                case "DesactivarCheckSpelling" :        $this->DesactivarCheckSpelling();           break;
                case "ActivarCompresionGZip" :          $this->ActivarCompresionGZip();             break;
                case "DesactivarCompresionGZip" :       $this->DesactivarCompresionGZip();          break;
                case "ActivarMantenimiento" :           $this->ActivarMantenimiento();              break;
                case "DesactivarMantenimiento" :        $this->DesactivarMantenimiento();           break;
                case "ActivarCacheImagenes" :           $this->ActivarCacheImagenes();              break;
                case "DesactivarCacheImagenes" :        $this->DesactivarCacheImagenes();           break;
                case "LimpiarBaneados" :                $this->LimpiarBaneados();                   break;
            }
        }
        
        public function Buscar() {
            echo devildrey33_Buscador::Buscar($_POST["Palabras"]);
        }
        
        public function BanearIP() {
            devildrey33_htaccess::BanearIP($_SERVER['REMOTE_ADDR']);
        }
        
        public function Loguear() {
            // La función para loguear se utiliza tanto via ajax como al iniciar, por lo que tengo que pasar los errores PHP SOLO desde ajax.
            // Si añado los errores en la misma función de HerramientasAdmin se borraria una parte del log de errores al loguear desde devildrey33.php
            $L = devildrey33::HerramientasAdmin($_POST["l"], $_POST["p"], TRUE); 
            $L["ErroresPHP"] = Base::ObtenerLogPHP();
        }
        
        public function EnviarComentario() {
            $C = new devildrey33_Comentarios();
            echo $C->EnviarComentario($_POST["Pagina"], $_POST["Nombre"], $_POST["Email"], $_POST["Web"], $_POST["Comentario"], "", $_POST["URL"], $_POST["Autor"]);            
        }
        
        public function ObtenerComentarios() {
            $C2 = new devildrey33_Comentarios();
            echo $C2->InsertarComentarios($_POST["Pagina"], $_POST["Desde"], $_POST["Hasta"]);
        }
        
        public function VotarComentario() {
            $C3 = new devildrey33_Comentarios();
            echo $C3->VotarComentario($_POST["Pagina"], $_POST["NumComentario"], $_POST["Valor"]);            
        }
        
        public function VotarPagina() {
            $BD = new devildrey33_BD();
            echo $BD->VotarWeb($_POST["Pagina"], $_POST["Valor"], str_replace("http://www.", "http://", $_POST["URL"]));            
        }
        
        public function LabAbrirEjemplo() {
            echo json_encode(devildrey33_Lab::AbrirEjemplo($_POST["Archivo"], $_POST["ID"], TRUE));
        }
        
        public function IndiceObtener15Mas() {
            $BD = new devildrey33_BD();
            echo json_encode(["HTML" => Indice::GenerarArticulos($BD, $_POST["Categoria"], $_POST["Inicio"]), "ErroresPHP" => Base::ObtenerLogPHP()]);            
        }
        
        public function ClearSession() {
            session_unset();
            echo "OK";
        }
        
        public function PrintSession() {
            echo "<pre>";
            print_r($_SESSION);
            echo "</pre>";
        }
        
        public function phpinfo() {
            echo phpinfo();
        }
        
        public function Minificar() {
            echo devildrey33::Minificar_JS_CSS();
        }
        
        public function GenerarCacheBuscador() {
            devildrey33_Buscador::GenerarCache();               
            echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP()));
        }
    };
    
    
    
?>