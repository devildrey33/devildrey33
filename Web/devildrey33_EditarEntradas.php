<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of devildrey33_EditarEntradas
 *
 * @author devildrey33
 */

//    echo "devildrey33_EditarEntradas\n";

// DEPRECATED???? NO... lo que no edita entrades.. nomes les obte..

include_once "devildrey33_Opciones.php";

if (!defined('DEF_devildrey33_EditarEntradas')) {
    define('DEF_devildrey33_EditarEntradas', true);


    class devildrey33_EditarEntradas {
        /* No poden haber 2 entrades amb la mateixa url o els butons siguiente y anterior entren en bucle infinit */
        public $Datos;
        public function __construct() {
            $this->Datos = require dirname(__FILE__).'/Config/EntradasBlog.php';
        }

        public function AgregarEntrada($Entrada) {
            array_unshift($this->Datos, $Entrada);
            return $this->Guardar();
        }

        public function EditarEntrada($Pos, $Entrada) {
            $this->Datos[$Pos] = $Entrada;
            return $this->Guardar();
        }

        public function Guardar() {
            return file_put_contents(Base::Path_Raiz()."Web/Config/EntradasBlog.php", "<?php return ".var_export($this->Datos, TRUE).";");
        }

        public function Total() {
            return count($this->Datos);
        }
        
        public function BuscarEntrada($Titulo, $URL) {
            foreach ($this->Datos as $Entrada) {
                if ($Entrada["Tipo"] === "Blog") { // Para las entradas del blog necesito comparar el titulo, ya que alguna puede compartir la ruta
                    if ($Entrada["Titulo"] === $Titulo && $Entrada["URL"] === substr($URL, 0, -4)) {
                        return $Entrada;
                    }
                }
                else {
                    if ($Entrada["URL"] === $URL) {
                        return $Entrada;
                    }
                }
            }
            return false;
        }

        public function ImprimirEntradas() {                                    
            echo "<table id='devildrey33_Entradas'>".Intro().
                    "<thead>".Intro().
                        "<tr>".Intro().
                            "<td>Fecha</td>".Intro().
                            "<td>Titulo</td>".Intro().
                            "<td>URL</td>".Intro().
                            "<td>Tags</td>".Intro().
                            "<td>Imagen</td>".Intro().
                            "<td>Tipo</td>".Intro().
                        "</tr>".Intro().
                    "</thead>".Intro();
            foreach ($this->Datos as $Entrada) {
                echo "<tr>".Intro().
                        "<td>".$Entrada["Fecha"]."</td>".Intro().
                        "<td title='".$Entrada["Titulo"]."'>".$Entrada["Titulo"]."</td>".Intro().
                        "<td title='".$Entrada["URL"]."'>".$Entrada["URL"]."</td>".Intro().
                $Tags = "";
                foreach ($Entrada["Tags"] as $Tag) {
                    $Tags .= $Tag.", ";
                }
                $Tags = substr($Tags, 0, strlen($Tags) - 2);
                echo    "<td title='".$Tags."'>".$Tags."</td>".Intro().                                
                        "<td title='".$Entrada["Imagen"]."'>".$Entrada["Imagen"]."</td>".Intro().
                        "<td>".$Entrada["Tipo"]."</td>".Intro().
                    "</tr>".Intro();
            }
            echo "</table>".Intro();
        }
    }
}