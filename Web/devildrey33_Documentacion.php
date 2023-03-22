<?php 
    /* Simplifica la creación de entradas de la documentación */ 

    // BD para la documentación del CSS
    include("devildrey33.php");
    include("CSS_BD.php");
    
    class devildrey33_Documentacion {
        public $CSS_BD;
        public $NombrePropiedad;
        public $NombreCSS;
        public $Base;
        public $PathEjemplos;
        
        /* Si especificas el $META_ExtraKeywords debe ir así : "keyword de varias palabras, otra keyword, etc..." */
        public function __construct($Archivo, $META_ExtraKeywords = "") {
            $this->Inicio($Archivo, $META_ExtraKeywords);
        }
        
        public function __destruct() {
            $this->Fin();
        }
        
        
        public function Inicio($Archivo, $META_ExtraKeywords) { 
            $this->Base = new devildrey33;	    

            if ($META_ExtraKeywords != "") $META_ExtraKeywords = ", ".$META_ExtraKeywords;
                
            
            $this->CSS_BD = new CSS_BD;
            $this->NombrePropiedad    = $this->CSS_BD->NombrePropiedad();                           // Obtengo el nombre de la función / propiedad / selector / regla    
            $this->NombreCSS          = $this->CSS_BD->NormalizarNombre($this->NombrePropiedad);    // Obtengo el nombre del archivo que contiene la documentación (eliminando caracteres del CSS no válidos para el SO)

            $Tipo = "";
            // Obtengo el tipo (funcion / selector / regla / propiedad)
            if (strpos($_SERVER['REQUEST_URI'], "CSS/Funciones") !== FALSE) {    // Es una función
                $Tipo = "Función";
                $this->PathEjemplos = "Funciones";
            }
            else if (strpos($_SERVER['REQUEST_URI'], "CSS/Propiedades") !== FALSE) {  // Es una propiedad
                $Tipo = "Propiedad";
                $this->PathEjemplos = "Propiedades";            
            }
            else if (strpos($_SERVER['REQUEST_URI'], "CSS/Selectores") !== FALSE) {   // Es un selector
                $Tipo = "Selector";
                $this->PathEjemplos = "Selectores";        
            }
            else if (strpos($_SERVER['REQUEST_URI'], "CSS/Reglas") !== FALSE) {        // Es una regla
                $Tipo = "Regla";
                $this->PathEjemplos = "Reglas";            
            }

            $META = '<meta name="description" content="CSS '.$Tipo.' '.$this->NombrePropiedad.'">
            <meta name="keywords" content="CSS, CSS '.$this->NombrePropiedad.', CSS3, CSS3 '.$this->NombrePropiedad.', CSS '.$Tipo.' '.$this->NombrePropiedad.', CSS3 '.$Tipo.' '.$this->NombrePropiedad.$META_ExtraKeywords.'">
            <meta name="robots" content="index, follow">';

            $this->Base->InicioPlantilla($Tipo."CSS_".$this->NombreCSS.".php", $Tipo." CSS : ".$this->NombrePropiedad, $META);
            $this->Base->InicioDoc($Tipo."CSS_".$this->NombreCSS.".php", $Tipo." CSS : ".$this->NombrePropiedad);    

        }


        public function Fin() { 
            $Entrada = $this->CSS_BD->BuscarEntrada($this->NombrePropiedad);     // Obtengo los datos de la función / propiedad / selector / regla    

            // Array con uno o mas ejemplos para este documento
            $Paths = array("Ejemplos/CSS/".$this->PathEjemplos."/".$this->NombreCSS.".html");
            // Añado los ejemplos extra (si hay alguno
            if (is_null($Entrada["EjemplosExtra"]) === false) {
                for ($i = 0; $i < count($Entrada["EjemplosExtra"]); $i++) {
                    array_push($Paths, $Entrada["EjemplosExtra"][$i]);
                }
            }
            if (count($Paths) > 1)   {  echo "<hr /><h2>Códigos de ejemplo</h2><br />";           }
            else                     {  echo "<hr /><h2>Código de ejemplo</h2><br />";            }
            
            devildrey33_Lab::CrearMiniLab($Paths);
            $this->CSS_BD->MostrarCompatibilidad($this->NombrePropiedad, $Entrada["Version"], $Paths[0]);	
            $this->CSS_BD->MostrarEnlacesGrupo($this->NombrePropiedad);

            $this->Base->FinDoc();
            $this->Base->FinPlantilla(); 
        }
        
        
    };
?>