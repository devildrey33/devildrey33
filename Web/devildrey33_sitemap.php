<?php 
/* Creado el 10/07/2021 por Josep Antoni Bover Comas para https://devildrey33.es
    Objeto para generar el archivo sitemap.xml */

include_once "devildrey33_Opciones.php";

class devildrey33_sitemap {

    protected $Lista = [];

    // Función que genera el archivo sitemap.xml
    public function Generar() {      
        // leer entradas del Blog.
        $this->LeerEntradasBlog();
        // leer entradas de la documentación
        $this->LeerEntradasDoc();
        // Leer directorio de ejemplos
        $this->LeerEntradasLab();
        // guardar sitemap
        $this->Guardar();
        $this->Lista = [];
    }

    // Función que lee las entradas del blog
    private function LeerEntradasBlog() {
        $Entradas = (require dirname(__FILE__).'/Config/EntradasBlog.php');
        foreach ($Entradas as $Entrada) {
            switch ($Entrada["Tipo"]) {
                case "Blog" :
                    $Url = Base::URL_Raiz().'Blog/'.$Entrada["URL"];
                    $Path = Base::Path_Raiz().'Blog/'.$Entrada["URL"].".php";
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
            
            if ($this->BuscarUrl($Url) === false) {
                $Item = [ "loc" => $Url, "lastmod" => $this->Tiempo($Path), "priority" => $Prioridad];
                $this->Lista[] = $Item;
            }
        }
    }

    
    // Función que lee las entradas de la documentación CSS
    private function LeerEntradasDoc() {
        $Entradas = (require dirname(__FILE__).'/Config/EntradasDocCSS.php');
        foreach ($Entradas as $Entrada) {
            $Nombre = $Entrada["Nombre"];
            if ($Entrada["Path"] !== '') $Nombre = $Entrada["Path"];

            $Nombre = str_replace(array(":", "(", ")", "@"), "", $Nombre);

            switch ($Entrada["TipoCSS"]) {
                case 0 : // Propiedad
                    $Url = Base::URL_Raiz().'Doc/CSS/Propiedades/'.$Nombre;
                    $Path = Base::Path_Raiz().'Documentacion/CSS/Propiedades/'.$Nombre.".php";
                    break;
                case 1 : // Selector (treure els ':')
                    $Url = Base::URL_Raiz().'Doc/CSS/Selectores/'.$Nombre;
                    $Path = Base::Path_Raiz().'Documentacion/CSS/Selectores/'.$Nombre.".php";
                    break;
                case 2 : // Función (treure els '(' ')')
                    $Url = Base::URL_Raiz().'Doc/CSS/Funciones/'.$Nombre;
                    $Path = Base::Path_Raiz().'Documentacion/CSS/Funciones/'.$Nombre.".php";
                    break;
                case 3 : // Regla   (treure la '@')
                    $Url = Base::URL_Raiz().'Doc/CSS/Reglas/'.$Nombre;
                    $Path = Base::Path_Raiz().'Documentacion/CSS/Reglas/'.$Nombre.".php";
                    break;
            }

            if (file_exists($Path)) {
                if ($this->BuscarUrl($Url) === false) {
                    $Item = [ "loc" => $Url, "lastmod" => $this->Tiempo($Path), "priority" => "0.80"];
                    $this->Lista[] = $Item;
                }
            }

        }
    }

    // Función que lee las entradas de los ejemplos del lab
    private function LeerEntradasLab() {
        $Entradas = (require dirname(__FILE__).'/Config/ListaLab.php');
        foreach ($Entradas as $Entrada) {
            if (substr($Entrada, -1, 1) !== "/") { // No es un directorio
                $Tmp = substr($Entrada, 5); // Elimino el '/Lab/' del path
                $Url = Base::URL_Raiz()."Lab/".$Tmp;
                $Path = Base::Path_Raiz().$Tmp;
                if ($this->BuscarUrl($Url) === false) {
                    $Item = [ "loc" => $Url, "lastmod" => $this->Tiempo($Path), "priority" => "0.60"];
                    $this->Lista[] = $Item;
                }
            }
        }
    }

    // Función que busca la url en la lista
    private function BuscarUrl($Url) {
        $Total = count($this->Lista);
        for ($i = 0; $i < $Total; $i++) {
            if (strtolower($this->Lista[$i]["loc"]) == strtolower($Url)) {
                return true;
            }
        }
        return false;
    }


    // Función que devuelve el tiempo del path especificado
    private function Tiempo($Path) {
        $Tiempo = $Path;

        if (file_exists($Path)) {
            $Tiempo = date("Y-m-d",filemtime($Path))."T".date("H:i:s", filemtime($Path))."+00:00";
        }
        return $Tiempo;
    }

    // Función que guarda la lista en el archivo sitemap.xml
    private function Guardar() {

        $fp = fopen(Base::Path_Raiz()."sitemap.xml", 'w');

        $Contenido = '<?xml version="1.0" encoding="UTF-8"?>'."\n".
         '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'."\n".
            '<url>'."\n".
                '<loc>https://devildrey33.es/</loc>'."\n".
                '<lastmod>'.$this->Tiempo(Base::Path_Raiz().'/Web/Config/EntradasBlog.php').'</lastmod>'."\n".
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
