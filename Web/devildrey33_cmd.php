<?php

//    echo "devildrey33_cmd.php\n";


    /* Archivo para peticiones ajax, tambien se puede utilizar a modo de consola MUY básica. */
    //include("devildrey33.php");
    include("GenerarIndice.php");

    /* Asigno si se verán o no los errores php */
    ini_set("display_errors", devildrey33_Opciones::MostrarErroresPHP());     
    
    class devildrey33_cmd {
        public $Comando = "";
        public function __construct($cmd) {
//            header('Content-Type: text/html; charset=utf-8');

//            if (isset($_GET["cmd"]))    $this->Comando = substr($_GET["cmd"], 0, strlen($_GET["cmd"]) -4);
//            else                        $this->Comando = "";
            $this->Comando = $cmd;
//                        echo "hola". $this->Comando;

            switch ($this->Comando) {
                // Tests
                case "test" :                           
                    echo Base::URL_Web().
                        "\n".Base::URL_Graficos().
                        "\n".Base::URL_JS().
                        "\n".Base::URL_CSS().
                        "\n".Base::URL_Blog().
                        "\n".Base::URL_Descargas().
                        "\n".Base::Path_Web().
                        "\n".$_SERVER["SERVER_NAME"];
                    break;
                case "ClearSession" :                   $this->ClearSession();                      break;
                case "PrintSession" :                   $this->PrintSession();                      break;
                // Acciones usuario    
                case "Buscar" :                         $this->Buscar();                            break;
                case "BanearIP" :                       $this->BanearIP();                          break;
                case "Loguear" :                        $this->Loguear();                           break;
                case "Desloguear" :                     $this->Desloguear();                        break;
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
                case "ActivarBorrarLogPHP" :            $this->BorrarLogPHP(1);                     break;
                case "DesactivarBorrarLogPHP" :         $this->BorrarLogPHP(0);                     break;
                case "ActivarDebugPHP" :                $this->DebugPHP(1);                         break;
                case "DesactivarDebugPHP" :             $this->DebugPHP(0);                         break;
                case "ActivarMinificarHTML" :           $this->MinificarHTML(1);                    break;
                case "DesactivarMinificarHTML" :        $this->MinificarHTML(0);                    break;
                case "ActivarMinificarCSS" :            $this->MinificarCSS(1);                     break;
                case "DesactivarMinificarCSS" :         $this->MinificarCSS(0);                     break;
                case "ActivarMinificarJS" :             $this->MinificarJS(1);                      break;
                case "DesactivarMinificarJS" :          $this->MinificarJS(0);                      break;
                case "ActivarActualizarCache" :         $this->ActualizarCache(1);                  break;
                case "DesactivarActualizarCache" :      $this->ActualizarCache(0);                  break;
                case "ActivarConsola" :                 $this->Consola(1);                          break;
                case "DesactivarConsola" :              $this->Consola(0);                          break;
                case "ActivarPausarBanner" :            $this->PausarBanner(1);                     break;
                case "DesactivarPausarBanner" :         $this->PausarBanner(0);                     break;
                case "Lab_GenerarCache" :               $this->Lab_GenerarCache();                  break;
                case "VerEmailComentario" :             $this->VerEmailComentario();                break;
                case "EliminarComentario" :             $this->EliminarComentario();                break;
                case "EditarComentario" :               $this->EditarComentario();                  break;
                case "LabGuardarEjemplo" :              $this->LabGuardarEjemplo();                 break;
                case "ObtenerLog" :                     $this->LogObtener();                        break;
                // Super admin
                case "ActivarCors" :                    $this->Cors(TRUE);                          break;
                case "DesactivarCors" :                 $this->Cors(FALSE);                         break;
                case "ActivarCheckSpelling" :           $this->CheckSpelling(TRUE);                 break;
                case "DesactivarCheckSpelling" :        $this->CheckSpelling(FALSE);                break;
                case "ActivarCompresionGZip" :          $this->CompresionGZip(TRUE);                break;
                case "DesactivarCompresionGZip" :       $this->CompresionGZip(FALSE);               break;
                case "ActivarMantenimiento" :           $this->Mantenimiento(TRUE);                 break;
                case "DesactivarMantenimiento" :        $this->Mantenimiento(FALSE);                break;
                case "ActivarCacheImagenes" :           $this->CacheImagenes(TRUE);                 break;
                case "DesactivarCacheImagenes" :        $this->CacheImagenes(FALSE);                break;
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
/*            if ($L["Mensaje"] === 3) { $L["Estado"] = 2; }
            else                                 { $L["Estado"] = 0; }*/
            
            echo json_encode($L);
        }
        
        public function Desloguear($Estado = 0) {            
            devildrey33_Opciones::Administrador(0);
            echo json_encode(array("HTML" => devildrey33_Lab::LeerCache(), "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => $Estado, "Comando" => $this->Comando));     
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
            echo $BD->VotarWeb($_POST["Pagina"], $_POST["Valor"], str_replace( array("http://www.", "https://www."), "https://", $_POST["URL"]));            
        }
        
        public function LabAbrirEjemplo() {
            $J = devildrey33_Lab::AbrirEjemplo($_POST["Archivo"], $_POST["ID"], TRUE);
            $J["ErroresPHP"] = Base::ObtenerLogPHP();
            $J["Estado"] = 0;
            echo json_encode($J);
        }
        
        public function IndiceObtener15Mas() {
            $BD = new devildrey33_BD();
            echo json_encode(["HTML" => Indice::GenerarArticulos($BD, $_POST["Categoria"], $_POST["Inicio"]), "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0]);            
        }
        
        public function ClearSession() {
            if (devildrey33_Opciones::Administrador() > 0 || devildrey33_Opciones::$ServidorLocal === TRUE) { 
                session_unset();
                echo "OK";
            }
        }
        
        public function PrintSession() {
            if (devildrey33_Opciones::Administrador() > 0 || devildrey33_Opciones::$ServidorLocal === TRUE) { 
                echo "<pre>";
                print_r($_SESSION);
                echo "</pre>";
            }
        }
        // No se usa....
        public function phpinfo() {
            if (devildrey33_Opciones::Administrador() > 0) { 
                echo phpinfo();
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function Minificar() {
            if (devildrey33_Opciones::Administrador() > 0) { 
                echo devildrey33::Minificar_JS_CSS();
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function GenerarCacheBuscador() {
            if (devildrey33_Opciones::Administrador() > 0) { 
                $Ret = devildrey33_Buscador::GenerarCache();
                $Msg = ($Ret === true) ? "Cache del buscador generada!" : "Error generando la cache del buscador";
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0, "Mensaje" => $Msg));
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function BorrarLogPHP($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::BorrarLogPHP($Num);
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }
            else {
                $this->Desloguear(1);
            }
        }
                
        public function DebugPHP($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::MostrarErroresPHP($Num); 
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }
            else {
                $this->Desloguear(1);
            }
        }
                
        public function MinificarHTML($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::Minificar_HTML($Num);            
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function MinificarCSS($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::Minificar_CSS($Num);             
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function MinificarJS($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::Minificar_JS($Num);
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function ActualizarCache($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::ActualizarCache($Num);           
                if ($Num === 1) {
                    devildrey33::Minificar_JS_CSS();    
                    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0, "Mensaje" => "Cache Generada!"));
                }
                else {
                    echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));                    
                }
            }
            else {
                $this->Desloguear(1);
            }
        }
        
        public function Consola($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::MostrarConsola($Num);            
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }            
            else {
                $this->Desloguear(1);
            }
        }

        public function PausarBanner($Num) {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Opciones::PausarBannerJS($Num);            
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }            
            else {
                $this->Desloguear(1);
            }
        }

        public function Lab_GenerarCache() {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                devildrey33_Lab::GenerarCache($_POST["Lista"]);     
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            }            
            else {
                $this->Desloguear(1);
            }            
        }
        
        public function VerEmailComentario() {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                $C = new devildrey33_Comentarios();
                echo $C->VerEmailComentario($_POST["Pagina"], $_POST["NumComentario"]);
            }
            else {
                $this->Desloguear(1);
            }            
        }
        
        public function EliminarComentario() {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                $C = new devildrey33_Comentarios();    
                echo $C->EliminarComentario($_POST["Pagina"], $_POST["NumComentario"]);
            }
            else {
                $this->Desloguear(1);
            }            
        }
        
        public function EditarComentario() {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                $C = new devildrey33_Comentarios();
                echo $C->EditarComentario($_POST["Pagina"], $_POST["NumComentario"], $_POST["Mensaje"]);
            }
            else {
                $this->Desloguear(1);
            }            
        }
        
        public function LabGuardarEjemplo() {            
            if (devildrey33_Opciones::Administrador() > 0) { 
                echo devildrey33_Lab::GuardarEjemplo($_POST["Archivo"], $_POST["Codigo"]); 
            }                        
            else {
                $this->Desloguear(1);
            }
        }
        
        
        public function LogObtener() {
            if (devildrey33_Opciones::Administrador() > 0) { 
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0, "DatosLog" => devildrey33_Log::ObtenerLog($_POST["Archivo"]))); 
            }                        
            else {
                $this->Desloguear(1);
            }
        }
        
        public function CheckSpelling($Num) {            
            if (devildrey33_Opciones::Administrador() === 1) { 
                devildrey33_htaccess::CheckSpelling($Num);    
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0)); 
            }            
            else {
                $this->Desloguear(1);
            }
        }
        
        public function Cors($Num) {            
            if (devildrey33_Opciones::Administrador() === 1) { 
                devildrey33_htaccess::Cors($Num);    
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0)); 
            }            
            else {
                $this->Desloguear(1);
            }
        }
        
        public function CompresionGZip($Num) {            
            if (devildrey33_Opciones::Administrador() === 1) { 
                devildrey33_htaccess::CompresionGZip($Num);
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0)); 
            }                        
            else {
                $this->Desloguear(1);
            }
        }

        public function Mantenimiento($Num) {            
            if (devildrey33_Opciones::Administrador() === 1) { 
                 devildrey33_htaccess::Mantenimiento($Num);
                 echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0)); 
            }                        
            else {
                $this->Desloguear(1);
            }
        }
        public function CacheImagenes($Num) {            
            if (devildrey33_Opciones::Administrador() === 1) { 
                devildrey33_htaccess::CacheImagenes($Num);
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));   
            }                        
            else {
                $this->Desloguear(1);
            }
        }

        public function LimpiarBaneados() {            
            if (devildrey33_Opciones::Administrador() === 1) { 
                devildrey33_htaccess::LimpiarBaneados();
                echo json_encode(array("ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0, "Mensaje" => "Se ha vaciado la lista de ips baneadas")); 
            }
            else {
                $this->Desloguear(1);
            }
        }
        
    };
    
    
      /* Estructura de datos para pasar de php a javascript con el JSON :
       | Nombre         | Descrición                                                                 | Requerido
       ----------------------------------------------------------------------------------------------------------
       | ErroresPHP     | Las advertencias y errores que ha devuelto la ejecución del código.        | Si
       | Estado         | Estado de la petición : (0 = Ok, 1 = Requiere Admin, 2 = Error)            | Si
       | Comando        | Cadena de caracteres que contiene el comando                               | Opcional
       | Params         | Parametros subministrados en el $_POST                                     | Opcional
       | HTML           | Código HTML a insertar                                                     | Opcional
       | Mensaje        | Mensaje que se mostrará al terminar la función $Base.cmd                   | Opcional
     */
  
?>