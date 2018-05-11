<?php
    /*
            _ListaPropiedades
            _ListaGrupos

            _ListaSelectores
            _ListaFunciones
            _ListaReglas
    */

    class CSS_BD {
        protected $_Lista		= array();
        protected $_ListaTotalItems 	= 0;
        protected $_ListaPropiedades 	= array();
        protected $_ListaGrupos 	= array();

        protected $_ListaSelectores 	= array();
        protected $_ListaFunciones 	= array();
        protected $_ListaReglas 	= array();

        public function __construct() {
            $this->_Lista = (require dirname(__FILE__).'/Config/EntradasDocCSS.php');
            //$this->CrearLista();
        }

        public function MostrarEnlacesGrupo($Nombre) {
            $Encontrado = false;
            foreach ($this->_Lista as $CSS) {
                $NombreComp = $this->NormalizarNombre($CSS["Nombre"]);
                $NombreComp2 = $this->NormalizarNombre($Nombre);
                if ($NombreComp == $NombreComp2 || $CSS["Path"] == $Nombre) {
                    $Grupo = $CSS["Grupo"];
                    $Encontrado = true;
                    break;
                }
            }
            if ($Encontrado == false) return;
            echo "<hr /><h2>Enlaces relacionados</h2><ul class='EnlacesRelacionados'>";
            $Inicio = "";
            foreach ($this->_Lista as $CSS) {
                $NombreComp = $this->NormalizarNombre($CSS["Nombre"]);
                $NombreComp2 = $this->NormalizarNombre($Nombre);
                if ($CSS["Grupo"] == $Grupo && $NombreComp != $NombreComp2) {
                    switch ($CSS["TipoCSS"]) {
                        case CSSTipo::Propiedad : $Path = "/Doc/CSS/Propiedades/".$CSS["Nombre"]; 	break;
                        case CSSTipo::Funcion 	: $Path = "/Doc/CSS/Funciones/".$CSS["Nombre"]; 	break;
                        case CSSTipo::Regla 	: $Path = "/Doc/CSS/Reglas/".$CSS["Nombre"]; 		break;
                        case CSSTipo::Selector 	: $Path = "/Doc/CSS/Selectores/".$CSS["Nombre"]; 	break;
                    }
                    echo "<li><a href='".$Path."'>".$CSS["Nombre"]."</a></li>";
                    if ($Inicio == "") $Inicio = ",  ";
                }
            }
            echo "</ul>";
        }

        public function MostrarCompatibilidadMini($Nombre) {
            $Ret = "";
            foreach ($this->_Lista as $CSS) {
                if ($CSS["Nombre"] == $Nombre) {
                    if ($CSS["Soportada"][0] > 1000) 	$Ret .= "<img src='/Web/Graficos/Chrome.png' class='Navegador_NoSoportado' title='Chrome soportado a partir de la versión ".($CSS["Soportada"][0] - 1000)." con el prefijo -webkit-.' />";
                    else if ($CSS["Soportada"][0] > 0) 	$Ret .= "<img src='/Web/Graficos/Chrome.png' title='Chrome soportado a partir de la versión ".$CSS["Soportada"][0].".' />";
                    else 				$Ret .= "<div class='MiniNoSoportado' title='No soportado en Chrome.'></div>";
                    if ($CSS["Soportada"][1] > 1000) 	$Ret .= "<img src='/Web/Graficos/Firefox.png' class='Navegador_NoSoportado' title='Firefox soportado a partir de la versión ".($CSS["Soportada"][1] - 1000)." con el prefijo -moz-.' />";
                    else if ($CSS["Soportada"][1] > 0) 	$Ret .= "<img src='/Web/Graficos/Firefox.png' title='Firefox soportado a partir de la versión ".$CSS["Soportada"][1].".' />";
                    else 				$Ret .= "<div class='MiniNoSoportado' title='No soportado en Firefox.'></div>";
                    if ($CSS["Soportada"][2] > 1000) 	$Ret .= "<img src='/Web/Graficos/IE9.png' class='Navegador_NoSoportado' title='IE soportado a partir de la versión ".($CSS["Soportada"][2] - 1000)." con el prefijo -ms-.' />";
                    else if ($CSS["Soportada"][2] > 0) 	$Ret .= "<img src='/Web/Graficos/IE9.png' title='IE soportado a partir de la versión ".$CSS["Soportada"][2].".' />";
                    else 				$Ret .= "<div class='MiniNoSoportado' title='No soportado en Internet Explorer.'></div>";
                    if ($CSS["Soportada"][3] > 1000) 	$Ret .= "<img src='/Web/Graficos/Opera.png' class='Navegador_NoSoportado' title='Opera soportado a partir de la versión ".($CSS["Soportada"][3] - 1000)." con el prefijo -webkit-.' />";
                    else if ($CSS["Soportada"][3] > 0) 	$Ret .= "<img src='/Web/Graficos/Opera.png' title='Opera soportado a partir de la versión ".$CSS["Soportada"][3].".' />";
                    else 				$Ret .= "<div class='MiniNoSoportado' title='No soportado en Opera.'></div>";
                    if ($CSS["Soportada"][4] > 1000) 	$Ret .= "<img src='/Web/Graficos/Safari.png' class='Navegador_NoSoportado' title='Safari soportado a partir de la versión ".($CSS["Soportada"][4] - 1000)." con el prefijo -webkit-.' />";
                    else if ($CSS["Soportada"][4] > 0) 	$Ret .= "<img src='/Web/Graficos/Safari.png' title='Safari soportado a partir de la versión ".$CSS["Soportada"][4].".' />";
                    else 				$Ret .= "<div class='MiniNoSoportado' title='No soportado en Safari.'></div>";
                    return $Ret;
                }
            }
            return "Error";
        }

        public function MostrarCompatibilidad($Nombre, $CSSVer = 3, $PathEjemplo = "") {
            foreach ($this->_Lista as $CSS) {
                $NombreComp = $this->NormalizarNombre($CSS["Nombre"]);
                $NombreComp2 = $this->NormalizarNombre($Nombre);
                if ($NombreComp == $NombreComp2) {
                    echo "<hr />";
                    echo "<h2>Compatibilidad</h2>";
                    echo "<p>Esta propiedad es soportada por todos los navegadores compatibles con CSS".$CSSVer.".</p>";
                    echo "<table class='postit'>";
                    echo    "<tr>";
                    echo 	"<td><div class='Navegador_Chrome".(($CSS["Soportada"][0] == 0) ? " Navegador_NoSoportado" : "")."' title='Google Chrome'></div></td>";
                    if ($CSS["Soportada"][0] > 1000) 	echo "<td>Soportado a partir de la versión ".($CSS["Soportada"][0] - 1000)." con el prefijo <code>-webkit-</code></td>";
                    else if  ($CSS["Soportada"][0] > 0) echo "<td>Soportado a partir de la versión ".$CSS["Soportada"][0]."</td>";
                    else				echo "<td><b>NO</b> soportado</td>";
                    echo    "</tr>";
                    echo    "<tr>";
                    echo 	"<td><div class='Navegador_FireFox".(($CSS["Soportada"][1] == 0) ? " Navegador_NoSoportado" : "")."' title='Mozilla Firefox'></div></td>";
                    if ($CSS["Soportada"][1] > 1000) 	echo "<td>Soportado a partir de la versión ".($CSS["Soportada"][1] - 1000)." con el prefijo <code>-moz-</code></td>";
                    else if  ($CSS["Soportada"][1] > 0) echo "<td>Soportado a partir de la versión ".$CSS["Soportada"][1]."</td>";
                    else				echo "<td><b>NO</b> soportado</td>";
                    echo    "</tr>";
                    echo    "<tr>";
                    echo        "<td><div class='Navegador_Opera".(($CSS["Soportada"][3] == 0) ? " Navegador_NoSoportado" : "")."' title='Opera'></div></td>";
                    if ($CSS["Soportada"][3] > 1000) 	echo "<td>Soportado a partir de la versión ".($CSS["Soportada"][3] - 1000)." con el prefijo <code>-webkit-</code></td>";
                    else if  ($CSS["Soportada"][3] > 0) echo "<td>Soportado a partir de la versión ".$CSS["Soportada"][3]."</td>";
                    else                		echo "<td><b>NO</b> soportado</td>";
                    echo    "</tr>";
                    echo    "<tr>";
                    echo 	"<td><div class='Navegador_Safari".(($CSS["Soportada"][4] == 0) ? " Navegador_NoSoportado" : "")."' title='Safari'></div></td>";
                    if ($CSS["Soportada"][4] > 1000) 	echo "<td>Soportado a partir de la versión ".($CSS["Soportada"][4] - 1000)." con el prefijo <code>-webkit-</code></td>";
                    else if  ($CSS["Soportada"][4] > 0) echo "<td>Soportado a partir de la versión ".$CSS["Soportada"][4]."</td>";
                    else				echo "<td><b>NO</b> soportado</td>";
                    echo    "</tr>";
                    echo    "<tr>";
                    echo 	"<td><div class='Navegador_IE".(($CSS["Soportada"][2] == 0) ? " Navegador_NoSoportado" : "")."' title='Internet Explorer'></div></td>";
                    if ($CSS["Soportada"][2] > 1000) 	echo "<td>Soportado a partir de la versión ".($CSS["Soportada"][2] - 1000)." con el prefijo <code>-ms-</code></td>";
                    else if  ($CSS["Soportada"][2] > 0) echo "<td>Soportado a partir de la versión ".$CSS["Soportada"][2]."</td>";
                    else				echo "<td><b>NO</b> soportado</td>";
                    echo    "</tr>";
                    echo "</table><br />";
                    
                    
                    $Fecha = date("d/m/Y", filemtime($_SERVER['SCRIPT_FILENAME']));
                    echo "<div style='position:relative'>".
                            "<div class='postit' style='position:absolute; right:0px; top:-107px; '>Documento modificado por última vez : <i>".$Fecha."</i>";

                    if ($PathEjemplo != "" && file_exists($_SERVER["DOCUMENT_ROOT"]."/".$PathEjemplo) === TRUE)
                            echo "<br />Ejemplo modificado por última vez : <i style='float:right'>".date("d/m/Y", filemtime($_SERVER["DOCUMENT_ROOT"]."/".$PathEjemplo))."</i>";
                    echo    "</div>".
                        "</div>";            
                    
                }
            }
        }




        public function MostrarPropiedadesPorOrdenAlfabetico() {
            $Ret["Total"] = 0;
            $Ret["Documentadas"] = 0;
            echo "<div class='Grupo_Marco'>";
            $this->MostrarGrupo_Cabeceraes();
            foreach ($this->_Lista as $Propiedad) {
                if ($Propiedad["TipoCSS"] == CSSTipo::Propiedad) {
                    if ($Ret["Total"] != 0) echo "<div class='Div_Separador'></div>";
                    $Ret["Total"] ++;
                    $Ret["Documentadas"] +=	$this->MostrarDescripcionPropiedad($Propiedad);
                }
            }
            echo "</div>";
            return $Ret;
        }

        public function MostrarTodo() {
            $Ret["Total"] = 0;
            $Ret["Documentadas"] = 0;
            for ($i = 0; $i < CSSGrupo::TotalGrupos; $i++) {
                $Ret2 = $this->MostrarGrupo(CSSTipo::Todos, $i);
                $Ret["Total"] += $Ret2["Total"];
                $Ret["Documentadas"] += $Ret2["Documentadas"];
            }
            return $Ret;
        }

        public function MostrarPorGrupo($Tipo) {
            $Ret["Total"] = 0;
            $Ret["Documentadas"] = 0;
            for ($i = 0; $i < CSSGrupo::TotalGrupos; $i++) {
                $Ret2 = $this->MostrarGrupo($Tipo, $i);
                $Ret["Total"] += $Ret2["Total"];
                $Ret["Documentadas"] += $Ret2["Documentadas"];
            }
            return $Ret;
        }

        public function MostrarGrupo_Cabeceraes() {
            echo "<div class='Grupo_Cabecera'>";
            echo "	<div class='EspacioPropiedad'>Propiedad</div>";
            echo "	<div class='EspacioDescripcion'>Descripción</div>";
            echo "</div>";
        }

        public function MostrarCabeceraSelectores() {
            echo "<div class='CabeceraSelector'>";
            echo "	<div class='EspacioSelector'>Selector</div>";
            echo "	<div class='EspacioSelector'>Ejemplo</div>";
            echo "	<div class='EspacioDescripcion'>Descripción</div>";
            echo "</div>";
        }


        public function MostrarGrupo($Tipo, $Grupo) {
            $Ret["Total"] = 0;
            $Ret["Documentadas"] = 0;

            $HayEntradas = false;
            if ($Tipo != CSSTipo::Todos) {
                // Recuento los valores del grupo, para determinar si hay propiedades dentro del grupo
                foreach ($this->_Lista as $Entrada) {
                    if ($Entrada["Grupo"] == $Grupo) {
                        if ($Entrada["TipoCSS"] == $Tipo) {
                            $HayEntradas = true;
                            break;
                        }
                    }
                }
                if ($HayEntradas == false) return $Ret;
            }
            // Creo la cabecera
            echo "<br style='clear:both'/>";
            echo "<h2>".CSSGrupo::Str($Grupo)."</h2>";
//            echo "<div class='Grupo_Marco'>";
/*			switch ($Tipo) {
                    case CSSTipo::Selector  :	$this->MostrarCabeceraSelectores();		break;
                    default					:	$this->MostrarGrupo_Cabeceraes();	break;
            }*/
/*            echo "<div class='Grupo_Cabecera'><table><tr>
                            <td class='EspacioPropiedad'>Propiedad</td>
                            <td class='EspacioDescripcion'>Descripción</td>
                            <td class='EspacioCompatibilidad'>Navegadores</td>
                            <td class='EspacioVersion'>CSS</td>
                    </tr></table></div>";*/


            echo "<table class='Tabla TablaDocCSS'><tr>".
                    "<th>Propiedad</th>".
                    "<th>Descripción</th>".
                    "<th>Navegadores</th>".
                    "<th>CSS</th>".
                 "</tr>";
            foreach ($this->_Lista as $Entrada) {
                if ($Entrada["TipoCSS"] == $Tipo || $Tipo == CSSTipo::Todos) {
                    if ($Entrada["Grupo"] == $Grupo) {
                        echo "<tr>";
//						if ($Ret["Total"] != 0) echo "<div class='Div_Separador'></div>";
                        $Ret["Total"] ++;
                        if ($Entrada["Path"] == "") $Path = $Entrada["Nombre"];
                        else                        $Path = $Entrada["Path"];
/*                        if ($Entrada["Path"] == "") $Path = $this->NormalizarNombre($Entrada["Nombre"]);
                        else                        $Path = $this->NormalizarNombre($Entrada["Path"]);*/
                        if (file_exists("../Documentacion/CSS/".CSSTipo::Plural($Entrada["TipoCSS"])."/".$this->NormalizarNombre($Path).".php")) {
                            echo "<td class='Espacio".CSSTipo::Singular($Entrada["TipoCSS"])."'><a href='/Doc/CSS/".CSSTipo::Plural($Entrada["TipoCSS"])."/".$Path."'>".$Entrada["Nombre"]."</a></td>";
                            $Ret["Documentadas"]++;
                        }
                        else {
                            echo "<td class='Espacio".CSSTipo::Singular($Entrada["TipoCSS"])."'>".$Entrada["Nombre"]."</td>";
                        }
//						if ($Entrada["TipoCSS"] == CSSTipo::Selector) echo "<td class='EspacioEjemplo'>".$Entrada["Ejemplo"]."</td>";
                        echo "<td  title='".$Entrada["Descripcion"]."'>".$Entrada["Descripcion"]."</td>";
                        echo "<td >".$this->MostrarCompatibilidadMini($Entrada["Nombre"])."</td>";
                        echo "<td >".$Entrada["Version"]."</td>";
                        echo "</tr>";
                    }
                }
            }
            echo "</table>"; //"</div>";

            return $Ret;
        }


        /* Elimina carácteres del CSS invalidos para un nombre de archivo */
        public function NormalizarNombre($Nombre) {
            $Excluir = array('@', ':', '(', ')', '[', ']', '=', '*', '|', '.php');
            return str_replace($Excluir, '', $Nombre);
        }


        public function BuscarEntrada($Nombre) {
            foreach ($this->_Lista as $Entrada) {
                if ($Entrada["Nombre"] === $Nombre) {
                    return $Entrada;
                }
            }
            return false;
        }
        
        public function NombrePropiedad() {
            $Nombre = "";
            // Obtengo el nombre de la propiedad
            for ($i = strlen($_SERVER['REQUEST_URI']); $i > 0; $i --) {
                if (substr($_SERVER['REQUEST_URI'], $i, 1) == '/') {
                    $Nombre = substr($_SERVER['REQUEST_URI'], $i + 1);
                    break;
                }
            }
            $Nombre = str_replace(".php", "", $Nombre);  // filtro las extensiones php                
            return $Nombre;
        }
        
    };

    abstract class CSSTipo { 
        const Todos     = -1; /* Valor especial para mostrar todos los tipos */
        const Propiedad = 0;
        const Selector 	= 1;
        const Funcion 	= 2;
        const Regla 	= 3;
        static public function Singular($TipoCSS) {
            switch ($TipoCSS) {
                case CSSTipo::Propiedad : return "Propiedad";
                case CSSTipo::Selector 	: return "Selector";
                case CSSTipo::Funcion 	: return "Función";
                case CSSTipo::Regla 	: return "Regla";
            }
        }
        static public function Plural($TipoCSS) {
            switch ($TipoCSS) {
                case CSSTipo::Propiedad : return "Propiedades";
                case CSSTipo::Selector 	: return "Selectores";
                case CSSTipo::Funcion 	: return "Funciones";
                case CSSTipo::Regla 	: return "Reglas";
            }
        }
    };



    abstract class CSSGrupo { 
        const Animacion 		= 0;
        const Bordes 			= 1;
        const Cajas 			= 2;
        const CajasFlex			= 3;
        const Color 			= 4;
        const Columnas 			= 5;
        const ContenidoPag 		= 6;
        const ContenidoGen 		= 7;
        const Contorno 			= 8;
        const Degradado			= 9;
        const Filtro			= 10;
        const Figura			= 11;
        const Fondo 			= 12;
        const Fuentes 			= 13;
        const Imagen 			= 14;
        const Impresion 		= 15;
        const Interfaz 			= 16;
        const Margen 			= 17;
        const MediaQuery		= 18;
        const EspacioNombres            = 19;
        const Lista 			= 20;
        const Posicion 			= 21;
        const PseudoClase		= 22;
        const PseudoElemento            = 23;
        const Condicional		= 24; // Reglas condicionales
        const Relleno 			= 25;
        const Atributo			= 26; // Selectores por atributo
        const Basico                    = 27; // Selectores básicos
        const Combinado			= 28; // Selectores combinados
        const SVG			= 29;
        const Tabla 			= 30;
        const Tam 			= 31;
        const Texto 			= 32;
        const Tiempo			= 33;
        const Transformaciones          = 34;
        const Transicion 		= 35;
        const URL			= 36;
        const Valores			= 37;
        const Recortar			= 38;
        const TotalGrupos		= 39;

        static function Str($Grupo) {
            switch ($Grupo) {
                case CSSGrupo::Animacion 		: return "Animación";
                case CSSGrupo::Atributo			: return "Selectores por atributo";
                case CSSGrupo::Basico			: return "Selectores básicos";
                case CSSGrupo::Bordes			: return "Bordes";
                case CSSGrupo::Cajas			: return "Cajas / Contenedores";
                case CSSGrupo::CajasFlex		: return "Cajas Flexibles";
                case CSSGrupo::Combinado		: return "Selectores combinados";
                case CSSGrupo::Condicional		: return "Condicionales";
                case CSSGrupo::Color			: return "Color";
                case CSSGrupo::Columnas			: return "Columnas";
                case CSSGrupo::ContenidoPag		: return "Contenido de paginas";
                case CSSGrupo::ContenidoGen		: return "Contenido generado";
                case CSSGrupo::Contorno			: return "Contorno";
                case CSSGrupo::Degradado		: return "Degradado";
                case CSSGrupo::Filtro			: return "Filtro";
                case CSSGrupo::Figura			: return "Figura";
                case CSSGrupo::Fondo			: return "Fondo";
                case CSSGrupo::Fuentes			: return "Fuentes";
                case CSSGrupo::Imagen			: return "Imagen";			
                case CSSGrupo::Impresion		: return "Impresión";			
                case CSSGrupo::Interfaz			: return "Interfaz";			
                case CSSGrupo::Margen			: return "Margen";
                case CSSGrupo::MediaQuery		: return "Media query";
                case CSSGrupo::EspacioNombres		: return "Namespace";
                case CSSGrupo::Lista			: return "Lista";
                case CSSGrupo::Posicion			: return "Posición";
                case CSSGrupo::PseudoClase		: return "Pseudo clase";
                case CSSGrupo::PseudoElemento		: return "Pseudo elemento";
                case CSSGrupo::Relleno			: return "Relleno";
                case CSSGrupo::SVG			: return "SVG";
                case CSSGrupo::Tabla			: return "Tabla";
                case CSSGrupo::Tam			: return "Tamaño";
                case CSSGrupo::Texto			: return "Texto";
                case CSSGrupo::Tiempo			: return "Tiempo";
                case CSSGrupo::Transformaciones		: return "Transformaciones";
                case CSSGrupo::Transicion		: return "Transición";
                case CSSGrupo::URL			: return "URL";
                case CSSGrupo::Valores			: return "Valores";
                case CSSGrupo::Recortar			: return "Recortar";
            }
        }
    };

?>