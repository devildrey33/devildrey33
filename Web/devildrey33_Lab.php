<?php 
//    echo "devildrey33_Lab.php\n";
    
    include_once("devildrey33_Opciones.php");
    class devildrey33_Lab {
        public function __construct() { }

        static public function GuardarEjemplo($Archivo, $Codigo) {
            /* Aixo no pasa mai (GuardarEjemplos nomes s'executa en el cmd si ets admin...), pero ho deixarem per si de cas... */
            if (devildrey33_Opciones::Administrador() === 0) {
                $Ret = -1;
                $Mensaje = "No tienes permisos para guardar el archivo.";
                return json_encode(array("Ret" => $Ret, "Mensaje" => $Mensaje, "Archivo" => $Archivo));
            }
            
            $Ret = file_put_contents($_SERVER['DOCUMENT_ROOT']."/".$Archivo, $Codigo, FILE_USE_INCLUDE_PATH );
            if ($Ret) { $Mensaje = "El '$Archivo' se ha guardado correctamente."; }
            else      { $Mensaje = "Error al guardar el archivo : '$Archivo'";    }
            
            return json_encode(array("Ret" => $Ret, "Mensaje" => $Mensaje, "Archivo" => $Archivo, "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
        }
        
        
        
        static public function AbrirEjemplo($nArchivo, $ID, $Ajax = FALSE) {
            $Vista = "0";
            /* Separo el nombre del archivo i la ID si lleva alguna (antiguamente se configuraba la vista del lab mediante una ID, ahora se hace con un comentario en el mismo ejemplo */
            $sArchivo = explode("#", $nArchivo);
            $Archivo = $sArchivo[0];
/*            if (isset($sArchivo[1])) {
                switch ($sArchivo[1]) {                    
                    case "Columnas" : $Vista = "0"; break;
                    case "Filas"    : $Vista = "1"; break;
                    case "Codigo"   : $Vista = "2"; break;
                    case "Preview"  : $Vista = "3"; break;
                }
            }*/
            $Ret     = 0;
            // Abro el archivo
            $DatosArchivo = file_get_contents($_SERVER['DOCUMENT_ROOT']."/".$Archivo, FILE_USE_INCLUDE_PATH);
            if ($DatosArchivo === FALSE) { // El archivo no existe
                $Ret = 404;
                $Archivo = "Ejemplos/Error.html";
                $DatosArchivo = file_get_contents($_SERVER['DOCUMENT_ROOT']."/".$Archivo, FILE_USE_INCLUDE_PATH);                
            }
            else {
                // Está dentro de ejemplos	            
                if (strpos($Archivo, "Ejemplos/") !== false /*|| strpos($Archivo, "Tutoriales_WinAPI/") !== false*/) {
                    /* Modo para resaltar el código en el editor */
                    $Modo = "Invalido";
                    if (substr($Archivo, strlen($Archivo) - 5) === ".html") { $Modo = "text/html"; }
                    if (substr($Archivo, strlen($Archivo) - 4) === ".svg")  { $Modo = "text/html"; }
                    if (substr($Archivo, strlen($Archivo) - 4) === ".css")  { $Modo = "text/css"; }
                    if (substr($Archivo, strlen($Archivo) - 3) === ".js")   { $Modo = "application/javascript"; }
                    
                    // Es un archivo permitido (html, js, css)
                    if ($Modo !== "Invalido") {
                        // Los archivos HTML y SVG pueden tener un comentario que especifica la vista por defecto (si no se especifica una vista por defecto se mostrara por filas)
                        if ($Modo === "text/html") {
                            if (strpos($DatosArchivo, "devildrey33_Lab->Opciones->Vista = Filas;"))               { $Vista = "0"; } 
                            elseif (strpos($DatosArchivo, "devildrey33_Lab->Opciones->Vista = Columnas;"))        { $Vista = "1"; }
                            elseif (strpos($DatosArchivo, "devildrey33_Lab->Opciones->Vista = Codigo;"))          { $Vista = "2"; }
                            elseif (strpos($DatosArchivo, "devildrey33_Lab->Opciones->Vista = Preview;"))         { $Vista = "3"; }
                        }
                        // Los archivos JS y CSS solo se pueden mostrar en vista de Código
                        else {
                            $Vista = "2";
                        }
                        
                        // Sumo una visita para este ejemplo
                        $BD = new devildrey33_BD;
                        $BD->SumarVisita($Archivo, true);
                        
                        // Retorno el código 200 (HTML)
                        $Ret = 200;
                    }
                    else {// No se permite acceder a archivos que no sean .html, .js, .css, y .svg
                       $Archivo = "Ejemplos/ErrorExtension.html";
                       $DatosArchivo = file_get_contents($_SERVER['DOCUMENT_ROOT']."/".$Archivo, FILE_USE_INCLUDE_PATH);
                       $Ret = 200; 
                    }
                }
                else { // El archivo está fuera de la carpeta /Ejemplos/
                   $Archivo = "Ejemplos/ErrorLimites.html";
                   $DatosArchivo = file_get_contents($_SERVER['DOCUMENT_ROOT']."/".$Archivo, FILE_USE_INCLUDE_PATH);
                   $Ret = 200;  
                }
            }
//            if ($Ajax == FALSE) http_response_code($Ret);
            http_response_code($Ret);
            return array("Ret" => $Ret, "Datos" => $DatosArchivo, "ID" => intval($ID), "Archivo" => $Archivo, "Vista" => $Vista, "Modo" => $Modo);            
        }
        
        
        
        static public function _EscanearDirectorio($Directorio, $CheckBox = TRUE) {
            $Entradas = (require dirname(__FILE__).'/Config/ListaLab.php');
            $Ret = "<div class='Lab_Lista'>".Intro();            
            $Dir = opendir($Directorio);
            if ($Dir === FALSE) { $Ret .= "<div>Error abriendo el directorio : ".$Directorio."</div>".Intro()."</div>";  return $Ret;}
            while (false !== ($Archivo = readdir($Dir))) {
                if ($Archivo != "." && $Archivo != "..") {
                    $HREF = str_replace($_SERVER['DOCUMENT_ROOT'], "/Lab", $Directorio."/".$Archivo);
                    // Directorio                
                    if (is_dir($Directorio."/".$Archivo) === TRUE) {
                        $Ret .= "<div class='Lab_Item'>".Intro();
                        if ($CheckBox === TRUE) {
                            $BRet = devildrey33_Lab::_Buscar($Entradas, $HREF."/");
                            if ($BRet === TRUE)
                                $Ret .= "<input class='Lab_Explorador_Check' type='checkbox' checked='checked' def='1' />".Intro();
                            else 
                                $Ret .= "<input class='Lab_Explorador_Check' type='checkbox' def='0' />".Intro();
                        }
                        $Ret .= "<div class='Lab_Directorio' path='".$HREF."/'>".Intro().
                                    "<div class='Lab_IcoDirectorioC'></div>".Intro().
                                    "<span>".$Archivo."</span>".Intro().
                                "</div>".Intro().
                                "<div class='Lab_Directorio_Animacion'>".Intro();
                        $Ret .= devildrey33_Lab::_EscanearDirectorio($Directorio."/".$Archivo, $CheckBox);
                        $Ret .=    "</div>".Intro().
                            "</div>".Intro();
                    }
                    // Archivo
                    else {
                        $Ret .= "<div class='Lab_Item'>".Intro();
                        if ($CheckBox === TRUE) {
                            $BRet = devildrey33_Lab::_Buscar($Entradas, $HREF);
                            if ($BRet === TRUE)
                                $Ret .= "<input class='Lab_Explorador_Check' type='checkbox' checked='checked' def='1' />".Intro();
                            else
                                $Ret .= "<input class='Lab_Explorador_Check' type='checkbox' def='0' />".Intro();
                        }
                        $Ret .= "<div class='Lab_Archivo' path='".$HREF."'>".Intro().
                                    "<div class='Lab_IcoArchivo'></div>".Intro().
//                                    "<span>".$Archivo."</span>".Intro().
                                    "<a href='".$HREF."'>".$Archivo."</a>".Intro(). // link invisible para los buscadores
                                "</div>".Intro().
                            "</div>".Intro();
                    }
                }
            }            
            $Ret .= "</div>".Intro();
            return $Ret;
        }
        
        static private function _Buscar($Entradas, $Path) {
            for ($i = 0; $i < count($Entradas); $i++) {
                if ($Entradas[$i] === $Path) return TRUE;
            }
            return FALSE;
        }
        
        static public function MostrarCarpetaEjemplos($CheckBox = TRUE) {
            return devildrey33_Lab::_EscanearDirectorio($_SERVER['DOCUMENT_ROOT']."/Ejemplos", $CheckBox);
            
/*                    '$("#MarcoNavegacion .Lab_Archivo").off("click").on("click", function() { $Lab.ClickArchivo($(this), "Lab_Explorador"); });'.
                    '$("#MarcoNavegacion .Lab_Directorio").off("click").on("click", function() { $Lab.ClickDirectorio($(this)); });'.
                    '$("#MarcoNavegacion .Lab_Explorador_Check").off("click").on("click", function() { $Lab.ClickCheck($(this)); });'.
                "</script>";            */
        }
        
        public function LeerCache() {
            return file_get_contents($_SERVER['DOCUMENT_ROOT']."/Web/Cache/Lab_Explorador.txt");
        }
        /* Genera la cache a partir de una lista en JSon generada con JavaScript */
        public function GenerarCache($JLista) {
            $Lista = json_decode(stripslashes($JLista));
            file_put_contents($_SERVER['DOCUMENT_ROOT']."/Web/Config/ListaLab.php", "<?php return ".var_export($Lista, TRUE).";");
            
            $Codigo = devildrey33_Lab::_EscanearDirectorioGG("../Ejemplos");
            file_put_contents($_SERVER['DOCUMENT_ROOT']."/Web/Cache/Lab_Explorador.txt", $Codigo);            
        }
        
        static public function _EscanearDirectorioGG($Directorio) {
            $Entradas = (require dirname(__FILE__).'/Config/ListaLab.php');
//            static $ID = 0;
            $Codigo = "<div class='Lab_Lista'>";
            $Dir = opendir($Directorio);
            if ($Dir === FALSE) { $Codigo .= "<div>Error abriendo el directorio : ".$Directorio."</div></div>";  return;}
            while (false !== ($Archivo = readdir($Dir))) {
                if ($Archivo != "." && $Archivo != "..") {
                    // Directorio                
                    if (is_dir($Directorio."/".$Archivo) === TRUE) {
                        $HREF = str_replace("..", "/Lab", $Directorio."/".$Archivo."/");                        
                        if (devildrey33_Lab::_Buscar($Entradas, $HREF) == TRUE) {
                            $Codigo .= "<div class='Lab_Item'>".Intro();
    //                        if ($CheckBox === TRUE) echo "<input class='Lab_Explorador_Check' type='checkbox'".(devildrey33_Lab::_Buscar($Entradas, $HREF) == TRUE ? " checked='checked'" : "" )." />";
                            $Codigo .="<div class='Lab_Directorio' path='".$HREF."'>".Intro().
                                        "<div class='Lab_IcoDirectorioC'></div>".Intro().
                                        "<span>".$Archivo."</span>".Intro().
                                    "</div>".Intro().
                                    "<div class='Lab_Directorio_Animacion'>".Intro();
                            $Codigo .= devildrey33_Lab::_EscanearDirectorioGG($Directorio."/".$Archivo);
                            $Codigo .=    "</div>".Intro().
                                "</div>".Intro();
                        }
                    }
                    // Archivo
                    else {
                        $HREF = str_replace("..", "/Lab", $Directorio."/".$Archivo);
                        if (devildrey33_Lab::_Buscar($Entradas, $HREF) == TRUE) {
                            $Codigo .= "<div class='Lab_Item'>".Intro();
//                        if ($CheckBox === TRUE) echo "<input class='Lab_Explorador_Check' type='checkbox'".(devildrey33_Lab::_Buscar($Entradas, $HREF) == TRUE ? " checked='checked'" : "" )." />";
                            $Codigo .= "<div class='Lab_Archivo' path='".$HREF."'>".Intro().
                                        "<div class='Lab_IcoArchivo'></div>".Intro().
//                                        "<span>".$Archivo."</span>".Intro().
                                        "<a href='".$HREF."'>".$Archivo."</a>".Intro(). // link invisible para los buscadores
                                    "</div>".Intro().
                                "</div>".Intro();
                        }
                    }
                }
            }            
            $Codigo .= "</div>".Intro();
            return $Codigo;            
        }        
        
        
//        static $_CrearMiniLab_ID = 0;
        
        static function CrearMiniLab($ArrayArchivos) {
//            devildrey33_Lab::_CrearMiniLab_ID ++;
            static $ID = -1;
            static $IDC = -1;
            $Oculto = "false";
            $Total = count($ArrayArchivos);
            if ($Total > 1) {
                $IDC ++;
                echo "<div class='MiniLab_Contenedor'>";
            }
            foreach ($ArrayArchivos as $Archivo) {
                $ID++;            
                
                echo "<div class='MiniLab' oculto='$Oculto' archivo='$Archivo' ver='mixto' id='MiniLab_$ID'>".Intro().
                        "<textarea class='MiniLab_Codigo'></textarea>".Intro().
                        "<iframe class='MiniLab_Preview'></iframe>".Intro().
                        "<div class='MiniLab_VerPreview'></div>".Intro().
                        
                        "<div class='Menu'>".Intro().
                            "<input id='MiniLab_Codigo_Estado_$ID' class='Menu_Boton_Input' type='radio' name='MiniLab_input_$ID'  />".Intro().
                            "<label tooltip-es='Ver el código' tooltip-en='Code' tooltip-pos='B' class='Menu_Boton_Label MiniLab_VerCodigo' for='MiniLab_Codigo_Estado_$ID'></label>".Intro().
                            "<div class='Menu_Boton'>".Intro().
                                "<img src='/Web/SVG/Iconos50x50.svg#svg-vista-codigo' class='Menu_Boton_SVG' />".Intro().
                            "</div>".Intro().
                        "</div>".Intro().
                        "<div class='Menu'>".Intro().
                            "<input id='MiniLab_Preview_Estado_$ID' class='Menu_Boton_Input' type='radio' name='MiniLab_input_$ID' />".Intro().
                            "<label tooltip-es='Ver la pre-visualización' tooltip-en='preview' tooltip-pos='B' class='Menu_Boton_Label MiniLab_VerPreview' for='MiniLab_Preview_Estado_$ID'></label>".Intro().
                            "<div class='Menu_Boton'>".Intro().
                                "<img src='/Web/SVG/Iconos50x50.svg#svg-vista-preview' class='Menu_Boton_SVG' />".Intro().
                            "</div>".Intro().
                        "</div>".Intro().                        
                        "<div class='Menu'>".Intro().
                            "<input id='MiniLab_Mixto_Estado_$ID' class='Menu_Boton_Input' type='radio' name='MiniLab_input_$ID' checked='checked' />".Intro().
                            "<label tooltip-es='Vista mixta (código/preview)' tooltip-en='Mixed view (code/preview)' tooltip-pos='B' class='Menu_Boton_Label MiniLab_VerMixto' for='MiniLab_Mixto_Estado_$ID'></label>".Intro().
                            "<div class='Menu_Boton'>".Intro().
                                "<img src='/Web/SVG/Iconos50x50.svg#svg-vista-columnas' class='Menu_Boton_SVG' />".Intro().                            
                            "</div>".Intro().
                        "</div>".Intro().
                        "<a href='/Lab/$Archivo'><button class='Boton-Normal'>Abrir en el laboratorio</button></a>".Intro().

                    "</div>".Intro();
                $Oculto = "true";
            }
            if ($Total > 1) {
                echo "<div class='MiniLab_ContenedorBotones'>";
                $Contador = 0;
                foreach ($ArrayArchivos as $Archivo) {
                    $Contador ++;
                    echo "<input id='MiniLab_Contenedor_Estado_$Contador' class='Menu_Boton_Input' type='radio' name='MiniLab_Contenedor_$IDC'";
                    if ($Contador === 1) echo " checked=checked";
                    echo " />".Intro().
                        "<label class='Menu_Boton' for='MiniLab_Contenedor_Estado_$Contador'>$Contador</label>".Intro();
                    
                    //echo "<button>".++$Contador."</button>";
                }
                echo "</div>";
                
                echo "<div>";
            }
        }
    };

    /*$Lab = new devildrey33_Lab;*/
//    devildrey33_Lab::MostrarCarpetaEjemplos();
    
?>
