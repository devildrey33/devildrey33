<?php
//    echo "devildrey33_htaccess.php\n";

include_once "devildrey33_Opciones.php";

/* La idea es poder modificar el htacces libremente sin tener que retocar este código.
    NO DEBES MODIFICAR los comentarios #INICIO y #FIN que encontraras dentro del archivo .htaccess, 
    por lo demás eres libre de añadir / modificar / eliminar código fuera de las áreas comprendidas entre los comentarios INICIO y FIN.
  */

class devildrey33_htaccess {    
    /* Función para banear una IP */
    static public function BanearIP($IP) {
        $Archivo = fopen("../.htaccess", "r");
        $Txthta = fread($Archivo, filesize("../.htaccess"));
        fclose($Archivo);                

        // Nueva IP para banear (\r\n es un salto de línea valido para windows, en linux se omite \r)
        $NuevaIP = "\r\n"."deny from ".$IP;
        // Comentario que debemos buscar
        $TxtIpBaneada = "#INICIO ips baneadas";
        // Obtenemos la posición donde empieza el comentario
        $Posicion = strpos($Txthta, $TxtIpBaneada);
        // No se ha encontrado el comentario salimos.....
        if ($Posicion === FALSE) return;
        // Sumamos el tamaño del comentario
        $Posicion += strlen($TxtIpBaneada);
        // Guardo el .htaccess con la nueva ip baneada
        $Archivo = fopen("../.htaccess", "w");
        // Guardamos desde el inicio hasta el comentario (incluyendo el mismo)
        fwrite($Archivo, substr($Txthta, 0, $Posicion), $Posicion);
        // Guardamos la nueva ip
        fwrite($Archivo, $NuevaIP, strlen($NuevaIP));
        // Guardamos el resto del archivo
        fwrite($Archivo, substr($Txthta, $Posicion, strlen($Txthta) - $Posicion), strlen($Txthta) - $Posicion);
        fclose($Archivo);
        
        // Me envio un correo
        Base::EnviarEmail("Intento de ataque de script", "IP BANEADA ".$IP." https://".$_SERVER["SERVER_NAME"]."/?Loguear", "Ataques@devildrey33.es");
    }
    
    /* Función para borrar la lista de baneados */
    static public function LimpiarBaneados() {
        if (devildrey33_Opciones::Administrador() === 0) return FALSE;
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO ips baneadas");
        $PosFin      = strpos($Datos, "#FIN ips baneadas");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        
        $DatosNuevos .= "#INICIO ips baneadas\r\n".
                "deny from 213.5.64.19\r\n";
        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }
    
    /* Función que obtiene las opciones disponibles y su estado */
    static public function ObtenerValores() {
        $Datos = file_get_contents(Base::Path_Raiz().".htaccess");
/*        $Archivo = fopen("../.htaccess", "r");
        $Datos = fread($Archivo, filesize("../.htaccess"));
        fclose($Archivo);                */
        $Ret = array("CheckSpelling"  => "false", 
                     "CompresionGZip" => "false", 
                     "Mantenimiento"  => "false", 
                     "CacheImagenes"  => "false", 
                     "Cors"           => "false");
        if (strpos($Datos, "#INICIO CheckSpelling activado")  !== false)  {     $Ret["CheckSpelling"]  = "true";      }
        if (strpos($Datos, "#INICIO CompresionGZip activado") !== false)  {     $Ret["CompresionGZip"] = "true";      }
        if (strpos($Datos, "#INICIO Mantenimiento activado")  !== false)  {     $Ret["Mantenimiento"]  = "true";      }
        if (strpos($Datos, "#INICIO CacheImagenes activado")  !== false)  {     $Ret["CacheImagenes"]  = "true";      }       
        if (strpos($Datos, "#INICIO Cors activado")           !== false)  {     $Ret["Cors"]           = "true";      }
        
        $InicioRewrite = strpos($Datos, "#INICIO Paths ") + strlen("#INICIO Paths ");
        $FinRewrite = strpos($Datos, "\r\n", $InicioRewrite);
        $Ret["RewriteBase"] = substr($Datos, $InicioRewrite, $FinRewrite - $InicioRewrite);
        return $Ret;
    }

    static public function Cors($Valor) {
        if (devildrey33_Opciones::Administrador() === 0) return FALSE;
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO Cors");
        $PosFin      = strpos($Datos, "#FIN Cors");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        if ($Valor == TRUE) {
            $DatosNuevos .= "#INICIO Cors activado\r\n".
                            "Header set Access-Control-Allow-Origin \"*\"\r\n";            
        }
        else {
            $DatosNuevos .= "#INICIO Cors desactivado\r\n";
        }
        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }
    
    /* Función para activar / desactivar el modulo checkspelling (redireccion a nombres similares) */
    static public function CheckSpelling($Valor) {
        if (devildrey33_Opciones::Administrador() === 0) return FALSE;
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO CheckSpelling");
        $PosFin      = strpos($Datos, "#FIN CheckSpelling");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        if ($Valor == TRUE) {
            $DatosNuevos .= "#INICIO CheckSpelling activado\r\n".
                            "<IfModule mod_speling.c>\r\n".
                            "CheckSpelling On\r\n". 
                            "</IfModule>\r\n";
        }        
        else {
            $DatosNuevos .= "#INICIO CheckSpelling desactivado\r\n".
                            "<IfModule mod_speling.c>\r\n".
                            "CheckSpelling Off\r\n".
                            "</IfModule>\r\n";
        }
        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }    
    
    /* Función para activar / desactivar la compresion GZIP */
    static public function CompresionGZip($Valor) {
        if (devildrey33_Opciones::Administrador() === 0) return FALSE;
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO CompresionGZip");
        $PosFin      = strpos($Datos, "#FIN CompresionGZip");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        if ($Valor == TRUE) {
            $DatosNuevos .= "#INICIO CompresionGZip activado\r\n".
                            "<ifModule mod_gzip.c>\r\n".
                            "mod_gzip_on Yes\r\n".
                            "mod_gzip_dechunk Yes\r\n".
                            "mod_gzip_item_include file .(html?|txt|css|js|php|pl)$\r\n".
                            "mod_gzip_item_include file /\r\n".
                            "mod_gzip_item_include handler ^cgi-script$\r\n".
                            "mod_gzip_item_include mime ^text/.*\r\n".
                            "mod_gzip_item_include mime ^application/x-javascript.*\r\n".
                            "mod_gzip_item_exclude mime ^image/.*\r\n".
                            "mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*\r\n".
                            "</ifModule>\r\n";
        }        
        else {
            $DatosNuevos .= "#INICIO CompresionGZip desactivado\r\n";
        }
        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }    
    
    /* Función para activar / desactivar la pagina de mantenimiento */
    static public function Mantenimiento($Valor) {
        if (devildrey33_Opciones::Administrador() === 0) return FALSE;
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO Mantenimiento");
        $PosFin      = strpos($Datos, "#FIN Mantenimiento");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        if ($Valor == TRUE) {
            $DatosNuevos .= "#INICIO Mantenimiento activado\r\n".
                            "RewriteRule ^(.+)\.php$ Mantenimiento.php?CMD=$1 [L,QSA]\r\n";
//                            "RewriteRule ^(.*)$ Mantenimiento.php?CMD=$1 [L,QSA]\r\n";
        }        
        else {
            $DatosNuevos .= "#INICIO Mantenimiento desactivado\r\n";
        }
        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }    
    
    /* Función para activar / desactivar la cache de imagenes en el navegador (1 mes por defecto) */
    static public function CacheImagenes($Valor) {
        if (devildrey33_Opciones::Administrador() === 0) return FALSE;
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO CacheImagenes");
        $PosFin      = strpos($Datos, "#FIN CacheImagenes");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        if ($Valor == TRUE) {
            $DatosNuevos .= "#INICIO CacheImagenes activado\r\n";
                            '<IfModule mod_expires.c>\r\n'.
                            'ExpiresActive On\r\n'.
                            'ExpiresByType image/jpg "access 1 month"\r\n'.
                            'ExpiresByType image/jpeg "access 1 month"\r\n'.
                            'ExpiresByType image/gif "access 1 month"\r\n'.
                            'ExpiresByType image/png "access 1 month"\r\n'.
                            'ExpiresDefault "now"\r\n'.
                            '</IfModule>\r\n';
        
        }        
        else {
            $DatosNuevos .= "#INICIO CacheImagenes desactivado\r\n";
        }
        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }    
    
    /* Función para establecer el directorio raíz de la web (que no tiene por que ser la raíz del servidor) */
    /* De esta forma en localhost/devildrey33.es/ funcionan las redirecciones hacia el Lab, Doc, cmd, etc... */
    static public function ReasignarPaths() {
        $Datos       = file_get_contents(Base::Path_Raiz().".htaccess");
        $PosInicio   = strpos($Datos, "#INICIO Paths");
        $PosFin      = strpos($Datos, "#FIN Paths");
        $DatosNuevos = substr($Datos, 0, $PosInicio);
        
        $Path = str_replace(" ", "%20", Base::PathRelativo_Raiz());
        
        $DatosNuevos .= "#INICIO Paths /".$Path."\r\n".
                        "# Document d'error (Comentar en localhost per veure els errors)\r\n".
                        "ErrorDocument 404 /".$Path."Web/Error404.php\r\n".
                        "\r\n".
                        "# Modul RewriteEngine per simular directoris en les propietats css\r\n".
                        "Options +FollowSymlinks\r\n".
                        "RewriteEngine on\r\n".
                        "# Base arrel del servidor\r\n".
                        "RewriteBase /".$Path."\r\n";

        $DatosNuevos .= substr($Datos, $PosFin, strlen($Datos) - $PosFin);
        file_put_contents(Base::Path_Raiz().".htaccess", $DatosNuevos);
    }
};

?>