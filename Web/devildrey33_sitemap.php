<?php 
/* Objeto para generar el sitemap */

include_once "devildrey33_Opciones.php";

class devildrey33_sitemap {

    protected $Lista = [];

    public function Generar() {      
        // leer EntradasBlog y EntradasDoc.
        $this->LeerEntradasBlog();
        // leer directorio de ejemplos (busqueda recursiva...)
        // guardar sitemap
        $this->Guardar();
        $this->Lista = [];
    }

    private function LeerEntradasBlog() {
        $Entradas = (require dirname(__FILE__).'/Config/EntradasBlog.php');
        foreach ($Entradas as $Entrada) {
            switch ($Entrada["Tipo"]) {
                case "Blog" :
                    $Url = Base::URL_Raiz().'Blog/'.$Entrada["URL"];
                    $Path = Base::Path_Raiz().'Blog/'.$Entrada["URL"];
                    $Prioridad = "0.80";
                    break;
                case "Doc" :
                    $Url = Base::URL_Raiz().'Doc/CSS/'.$Entrada["URL"];
                    $Path = Base::Path_Raiz().'Documentacion/CSS/'.$Entrada["URL"].".php";
                    $Prioridad = "0.80";
                    break;
                case "Lab" : 
                    $Url = Base::URL_Raiz().'Lab/'.$Entrada["URL"];
                    $Path = Base::Path_Raiz().$Entrada["URL"];
                    $Prioridad = "0.60";
                    break;
            }
            
            $Tiempo = "";
            if (file_exists($Path)) {
                $Tiempo = date("Y-m-d",filemtime($Path))."T".date("H:i:s", filemtime($Path))."+00:00";
            }

            $Item = [ "loc" => $Url, "lastmod" => $Tiempo, "priority" => $Prioridad];
            $this->Lista[] = $Item;
        }
    }

    private function LeerEntradasDoc() {
        $Entradas = (require dirname(__FILE__).'/Config/EntradasDocCSS.php');

    }

    private function Guardar() {

        $fp = fopen(Base::Path_Raiz()."sitemap.xml", 'w');

        $Contenido = '<?xml version="1.0" encoding="UTF-8"?>'."\n".
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">'."\n".
            '<url>'."\n".
                '<loc>https://devildrey33.es/</loc>'."\n".
                '<lastmod>2019-08-06T12:43:08+00:00</lastmod>'."\n".
                '<priority>1.00</priority>'."\n".
            '</url>'."\n";

        foreach ($this->Lista as $Item) {
            $Contenido.= '<url>'."\n".
            '<loc>'.$Item["loc"].'</loc>'."\n".
            '<lastmod>'.$Item["lastmod"].'</lastmod>'."\n".
            '<priority>'.$Item["priority"].'</priority>'."\n".
            '</url>'."\n";
        }

         $Contenido.= '</urlset>'."\n";
         fwrite($fp, $Contenido);
         fclose($fp);
        
    }

};
