<?php
    /* Concepte per no utilitzar tanta memoria en el servidor al fer el log... en principi queda descartat ja que el servidor puja de nivell/pack i ja no serà necesari */
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $HEAD = "";

    $Base->InicioPlantilla(basename(__FILE__), "Logs de acceso", $HEAD);

    if (devildrey33_Opciones::Administrador() > 0) {
        $Log = new ArchivoLog;
        echo "<article class='Blog'>";
        $Log->LeerLogAccesos();
        echo "</article>";
    }
    else {
        echo "<script>\$Base.MostrarErrorAjax(404, true);</script>";
    }
    
    $Base->FinPlantilla(); 

    
    class ArchivoLog {
        public function LeerLogAccesos() {
            $ArchivoLog = "../logs/access.log.current";
            if (file_exists($ArchivoLog)) {
                $Archivo = fopen($ArchivoLog, "r");
                while (!feof($Archivo)){ 
                    $this->ParsearLinea(fgets($Archivo,1024 * 16)); 
                }                 
                $Datos = fread($Archivo, filesize($ArchivoLog));
                fclose($Archivo);
            }
        }
        
        public function ParsearLinea($Linea) {
            $Datos = explode(" ", $Linea);
/*            echo "<pre>";
            print_r($Datos);
            echo "</pre>";*/
            
            /* Ejemplo */
            /*	94.194.34.14 - - [03/Jul/2013:00:00:14 +0200] "GET /Graficos/devildrey33.ico HTTP/1.1" 200 3606 devildrey33.es "-" "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)" "-"
                    201.134.42.53 - - [03/Jul/2013:00:00:19 +0200] "GET /Tutorial_HTML5_8.php HTTP/1.1" 200 122235 devildrey33.es "http://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=0CDAQFjAB&url=http%3A%2F%2Fdevildrey33.es%2FTutorial_HTML5_8.php&ei=bE3TUY3jJOSMyAGwjIGQDA&usg=AFQjCNHe90T-d6n5n_EgTirFKAwwET4dGA&bvm=bv.48705608,d.aWc" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                    201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                    201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33_Comentarios.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                    201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /css/devildrey33.css HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
                    188.165.195.156 - - [03/Jul/2013:16:14:35 +0200] "HEAD / HTTP/1.1" 200 - devildrey33.es "-" "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0)
            
            /* Datos[0]  : IP 
               Datos[1]  : -
               Datos[2]  : -
               Datos[3]  : Fecha y hora  [11/Dec/2015:00:30:10
               Datos[4]  : +100]
               Datos[5]  : "GET o "POST
               Datos[6]  : URL
               Datos[7]  : HTTP/1.0" o HTTP/1.1"
               Datos[8]  : Respuesta (200, 404, etc...)
               Datos[9]  : Tamaño
               Datos[10] : Servidor (devildrey33.es)
               Datos[11] : Posible URL origen, o si es el origen un '-'
             del 12 al final es el USER AGENT, se tiene que analizar todo junto                    */
            $UA = "";
            for ($i = 11; $i < count($Datos); $i++) {
                $UA .= $Datos[$i]." ";
            }
            if (count($Datos) > 11) {
                echo "<Acceso ".
                        "ip='$Datos[0]' ".
                        "fecha='".substr($Datos[3], 1, strpos($Datos[3], ":") - 1)."' ".
                        "hora='".substr($Datos[3], strpos($Datos[3], ":") + 1)."' ".
                        "peticion='".substr($Datos[5], 1)."' ".
                        "url='".$Datos[6]."' ".
                        "http='".substr($Datos[7], 5, 3)."' ".
                        "ret='".$Datos[8]."' ".
                        "tam='".$Datos[9]."' ".
                        "server='".$Datos[10]."' ".
                        "useragent='".$UA."' ".
                   "></Acceso>";
            }
//            substr($Datos[3], strpos($this->ListaAccesos[$Contador]["Fecha"], ":") + 1);
        }
        
    }
?>