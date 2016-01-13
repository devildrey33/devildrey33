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
            $this->CrearLista();
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
                    switch ($CSS["Tipo"]) {
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

        public function MostrarCompatibilidad($Nombre) {
            foreach ($this->_Lista as $CSS) {
                $NombreComp = $this->NormalizarNombre($CSS["Nombre"]);
                $NombreComp2 = $this->NormalizarNombre($Nombre);
                if ($NombreComp == $NombreComp2) {
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
                }
            }
        }




        public function MostrarPropiedadesPorOrdenAlfabetico() {
            $Ret["Total"] = 0;
            $Ret["Documentadas"] = 0;
            echo "<div class='Grupo_Marco'>";
            $this->MostrarGrupo_Cabeceraes();
            foreach ($this->_Lista as $Propiedad) {
                if ($Propiedad["Tipo"] == CSSTipo::Propiedad) {
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
                        if ($Entrada["Tipo"] == $Tipo) {
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
                if ($Entrada["Tipo"] == $Tipo || $Tipo == CSSTipo::Todos) {
                    if ($Entrada["Grupo"] == $Grupo) {
                        echo "<tr>";
//						if ($Ret["Total"] != 0) echo "<div class='Div_Separador'></div>";
                        $Ret["Total"] ++;
                        if ($Entrada["Path"] == "") $Path = $Entrada["Nombre"];
                        else                        $Path = $Entrada["Path"];
/*                        if ($Entrada["Path"] == "") $Path = $this->NormalizarNombre($Entrada["Nombre"]);
                        else                        $Path = $this->NormalizarNombre($Entrada["Path"]);*/
                        if (file_exists("../Documentacion/CSS/".CSSTipo::Plural($Entrada["Tipo"])."/".$this->NormalizarNombre($Path).".php")) {
                            echo "<td class='Espacio".CSSTipo::Singular($Entrada["Tipo"])."'><a href='/Doc/CSS/".CSSTipo::Plural($Entrada["Tipo"])."/".$Path."'>".$Entrada["Nombre"]."</a></td>";
                            $Ret["Documentadas"]++;
                        }
                        else {
                            echo "<td class='Espacio".CSSTipo::Singular($Entrada["Tipo"])."'>".$Entrada["Nombre"]."</td>";
                        }
//						if ($Entrada["Tipo"] == CSSTipo::Selector) echo "<td class='EspacioEjemplo'>".$Entrada["Ejemplo"]."</td>";
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
        

        /* 	$Nombre 		: String con el nombre
                $Tipo   		: Tipo de css (Enum_CSSTipo)
                $Grupo			: Sub tipo de css (Enum_CSSGrupo)
                $Descripcion            : String con la descripción
                $Version		: CSS1, CSS2, CSS3, CSS4, etc... (utilizar solo el número)
                $Soportada		: Array de versiones (Chorme, FireFox, IE,  Opera, Safari) (0 NO soportado, < 999 Soportado, > 1000 Soportado con prefijo)
                $Ejemplo		: Ejemplo corto (para selectores)
                $Path			: Nombre del archivo (para selectores con nombres raros)
        */
        function AgregarCSS($Nombre, $Tipo, $Grupo, $Version, $Soportada, $Descripcion, $Ejemplo = "", $Path = "", $EjemplosExtra = array()) {
            $this->_Lista[$this->_ListaTotalItems ++] = array("Nombre" => $Nombre, "Tipo" => $Tipo, "Grupo" => $Grupo, "Descripcion" => $Descripcion, "Version" => $Version, "Soportada" => $Soportada, "Ejemplo" => $Ejemplo, "Path" => $Path, "EjemplosExtra" => $EjemplosExtra);
        }



        function CrearLista() {
            $this->AgregarCSS(":active", 			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			1, 	array(1, 1, 8, 7, 1), 			"Selecciona el enlace que se está presionando con el mouse.", "a:active");
            $this->AgregarCSS("::after", 			CSSTipo::Selector, 	CSSGrupo::PseudoElemento,		2, 	array(1, 1, 8, 7, 4), 			"Inserta un texto después del elemento especificado.", "a::after");
            $this->AgregarCSS("align-content", 			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex, 			3, 	array(1021, 28, 0, 12.10, 0), 		"");	
            $this->AgregarCSS("align-items", 			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex, 			3, 	array(1021, 20, 11, 12.10, 7),		"");
            $this->AgregarCSS("align-self", 			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex, 			3, 	array(1021, 20, 0, 12.10, 0), 		"");
            $this->AgregarCSS("animation", 			CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004), 	"Propiedad corta para todas las propiedades de la animación, excepto para \"<i>animation-play-state</i>\".");
            $this->AgregarCSS("animation-delay", 		CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004), 	"Especifica un retraso para empezar la animación.");
            $this->AgregarCSS("animation-direction", 		CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004), 	"Especifica si la animación es unicamente lineal, o se debe invertir al terminar.");
            $this->AgregarCSS("animation-duration", 		CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004), 	"Especifica el tiempo que se invertirá en la animación desde el 0% hasta el 100%.");
            $this->AgregarCSS("animation-fill-mode", 		CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004), 	"");
            $this->AgregarCSS("animation-iteration-count",	CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004),	"Especifica el numero de veces que se repetirá la animación.");
            $this->AgregarCSS("animation-name", 		CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004),	"Especifica el nombre de la animación.");
            $this->AgregarCSS("animation-play-state", 		CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004), 	"Especifica si la animación está activa o no.");
            $this->AgregarCSS("animation-timing-function",	CSSTipo::Propiedad, 	CSSGrupo::Animacion, 			3, 	array(1002, 16, 10, 1015, 1004),	"Especifica la curva de velocidad que se usara para la animación.");
            $this->AgregarCSS("attr()",				CSSTipo::Funcion, 	CSSGrupo::ContenidoGen,			2, 	array(1002, 16, 10, 12.10, 4), 		"");
            $this->AgregarCSS("backface-visibility",		CSSTipo::Propiedad, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1004),	"Establece si la parte trasera de un objeto 3D debe ser visible.");
            $this->AgregarCSS("background",			CSSTipo::Propiedad, 	CSSGrupo::Fondo,			1, 	array(1, 1, 4, 3.5, 1),			"Propiedad corta que permite asignar todas las propiedades del fondo en una declaración.");
            $this->AgregarCSS("background-attachment",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica como tratar el fondo al hacer scroll.");
            $this->AgregarCSS("background-clip",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			3, 	array(1, 4, 9, 10.5, 3),		"Especifica el area de pintado para el fondo.");
            $this->AgregarCSS("background-color",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el color del fondo.");
            $this->AgregarCSS("background-image",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica la url para la imagen de fondo.");
            $this->AgregarCSS("background-origin",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			3, 	array(1, 4, 9, 10.5, 3),		"Especifica la posición donde empezara la imagen de fondo.");
            $this->AgregarCSS("background-position",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica la posición inicial para la imagen de fondo.");
            $this->AgregarCSS("background-repeat",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica si la imagen del fondo debe repetirse.");
            $this->AgregarCSS("background-size",		CSSTipo::Propiedad, 	CSSGrupo::Fondo,			3, 	array(1, 4, 9, 10.5, 3),		"Especifica el tamaño de la imagen de fondo.");
            $this->AgregarCSS("::before",			CSSTipo::Selector, 	CSSGrupo::PseudoElemento,               2, 	array(1, 1, 8, 7, 4),			"Inserta un texto antes del elemento especificado.", "a::before");
            $this->AgregarCSS("blur()",				CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("border",				CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 4, 4, 3.5, 1),			"Propiedad corta que nos permite asignar el tamaño, color y tipo de borde.");
            $this->AgregarCSS("border-bottom",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 4, 4, 3.5, 1),			"Propiedad corta que nos permite asignar el tamaño, color y tipo del borde inferior.");
            $this->AgregarCSS("border-bottom-color",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 4, 4, 3.5, 1),			"Especifica el color del borde de la parte inferior.");
            $this->AgregarCSS("border-bottom-left-radius",	CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(4, 4, 9, 10.5, 3),		"Define la figura del borde inferior izquierdo.");
            $this->AgregarCSS("border-bottom-right-radius",	CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(4, 4, 9, 10.5, 3),		"Define la figura del borde inferior derecho.");
            $this->AgregarCSS("border-bottom-style",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 1, 5.5, 9.2, 1),		"Especifica el estilo del borde de la parte inferior.");
            $this->AgregarCSS("border-bottom-width",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el tamaño del borde de la parte inferior.");
            $this->AgregarCSS("border-collapse",		CSSTipo::Propiedad, 	CSSGrupo::Tabla,			2, 	array(1, 1, 5, 4, 1.2),			"Especifica si se pintara el borde unido con todas las celdas, o si se pintara para cada celda.");
            $this->AgregarCSS("border-color",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el color del borde.");
            $this->AgregarCSS("border-image",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(15, 16, 11, 15, 6),		"Propiedad corta que nos permite especificar las propiedades url, slice, y repeat de border-image.");
            $this->AgregarCSS("border-image-outset",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(15, 16, 11, 15, 6),		"Especifica el tamaño del borde exterior del borde con imagen.");
            $this->AgregarCSS("border-image-repeat",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(15, 16, 11, 15, 6),		"Especifica como se va a adaptar la imagen origen al borde.");
            $this->AgregarCSS("border-image-slice",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(15, 16, 11, 15, 6),		"Especifica la porción de la imagen origen que se va a utilizar para el borde.");
            $this->AgregarCSS("border-image-source",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(15, 16, 11, 15, 6),		"Especifica la ruta de la imagen que se utilizará para el borde.");
            $this->AgregarCSS("border-image-width",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(15, 16, 11, 15, 6),		"Especifica el tamaño en el que se dividirá la imagen origen.");
            $this->AgregarCSS("border-left",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 4, 4, 3.5, 1),			"Propiedad corta que nos permite asignar el tamaño, color y tipo del borde inferior.");
            $this->AgregarCSS("border-left-color",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 4, 4, 3.5, 1),			"Especifica el color del borde de la parte izquierda.");
            $this->AgregarCSS("border-left-style",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 1, 5.5, 9.2, 1),		"Especifica el estilo del borde de la parte izquierda.");
            $this->AgregarCSS("border-left-width",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el tamaño del borde de la parte izquierda.");
            $this->AgregarCSS("border-radius",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(4, 4, 9, 10.5, 5),		"Propiedad corta que nos permite definir como redondear los bordes del objeto.");
            $this->AgregarCSS("border-right",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 4, 4, 3.5, 1),			"Propiedad corta que nos permite asignar el tamaño, color y tipo del borde inferior.");
            $this->AgregarCSS("border-right-color",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 4, 4, 3.5, 1),			"Especifica el color del borde de la parte derecha.");
            $this->AgregarCSS("border-right-style",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 1, 5.5, 9.2, 1),		"Especifica el estilo del borde de la parte derecha.");
            $this->AgregarCSS("border-right-width",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el tamaño del borde de la parte derecha.");
            $this->AgregarCSS("border-spacing",			CSSTipo::Propiedad, 	CSSGrupo::Tabla,			2, 	array(1, 1, 5, 4, 1.2),			"Especifica el espacio entre celdas.");
            $this->AgregarCSS("border-style",			CSSTipo::Propiedad, 	CSSGrupo::Tabla,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el estilo del borde.");
            $this->AgregarCSS("border-top",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 4, 4, 3.5, 1),			"Propiedad corta que nos permite asignar el tamaño, color y tipo del borde superior.");
            $this->AgregarCSS("border-top-color",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 4, 4, 3.5, 1),			"Especifica el color del borde de la parte superior.");
            $this->AgregarCSS("border-top-left-radius",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(4, 4, 9, 10.5, 3),		"Define la figura del borde superior izquierdo.");
            $this->AgregarCSS("border-top-right-radius",	CSSTipo::Propiedad, 	CSSGrupo::Bordes,			3, 	array(4, 4, 9, 10.5, 3),		"Define la figura del borde superior derecho.");
            $this->AgregarCSS("border-top-style",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			2, 	array(1, 1, 5.5, 9.2, 1),		"Especifica el estilo del borde de la parte superior.");
            $this->AgregarCSS("border-top-width",		CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el tamaño del borde de la parte superior.");
            $this->AgregarCSS("border-width",			CSSTipo::Propiedad, 	CSSGrupo::Bordes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el tamaño del borde.");
            $this->AgregarCSS("bottom",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 5, 6, 1),			"Especifica la posición partiendo desde la parte inferior.");
            // REVISAR box-decoration-break, en la MDN no existeix, i ami l'exemple no em funciona... pero hi han mogollon de pagines que expliquen el comportament... raro raro
            $this->AgregarCSS("box-decoration-break",		CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(1021, 0, 0, 1015, 1006),		"Especifica como tratar un contenedor cuando este no cabe por completo en su contenedor padre.");
            $this->AgregarCSS("box-shadow",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			3, 	array(10, 4, 9, 10.5, 5.1),		"Define una o más sombras para la caja / contenedor.");
            $this->AgregarCSS("box-sizing",			CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			3, 	array(9, 1, 8, 7, 5.1),			"");
            $this->AgregarCSS("break-after",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			3, 	array(0, 0, 10, 0, 0),			"");
            $this->AgregarCSS("break-before",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			3, 	array(0, 0, 10, 0, 0),			"");
            $this->AgregarCSS("break-inside",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			3, 	array(0, 0, 10, 0, 0),			"");
            $this->AgregarCSS("brightness()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("calc()",				CSSTipo::Funcion, 	CSSGrupo::Valores,			3, 	array(26, 16, 9, 15, 3),		"");
            $this->AgregarCSS("caption-side",			CSSTipo::Propiedad, 	CSSGrupo::Tabla,			3, 	array(1, 1, 8, 4, 1),			"Especifica donde se posicionará el titulo de la tabla.");
            $this->AgregarCSS("@charset",			CSSTipo::Regla, 	CSSGrupo::Texto,			2, 	array(2, 1.5, 5.5, 9, 4),		"");
            $this->AgregarCSS(":checked",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1, 9, 9, 3.1),			"Selecciona las etiquetas input marcadas.", "input:checked", "", array("/Ejemplos/Checked/CheckBox-personalizado.html", "/Ejemplos/Checked/RadioButton-personalizado.html"));
            $this->AgregarCSS("clear",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica que elementos flotantes son permitidos a continuación.");
            $this->AgregarCSS("clip",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 8, 7, 5),			"Especifica que área debe mostrarse en elementos con posición absoluta.");
            $this->AgregarCSS("color",				CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 3, 3.5, 1),			"Especifica el color para el texto.");
            $this->AgregarCSS("columns",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-count",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-fill",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-gap",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-rule",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-rule-color",		CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-rule-style",		CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-rule-width",		CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-span",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("columns-width",			CSSTipo::Propiedad, 	CSSGrupo::Columnas,			3, 	array(1001, 1009, 10, 1015, 1003),	"");
            $this->AgregarCSS("content",			CSSTipo::Propiedad, 	CSSGrupo::ContenidoGen,			2, 	array(1, 1, 8, 7, 1),			"");
            $this->AgregarCSS("contrast()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("counter-increment",		CSSTipo::Propiedad, 	CSSGrupo::ContenidoGen,			2, 	array(2, 1, 8, 9.2, 3),			"");
            $this->AgregarCSS("counter-reset",			CSSTipo::Propiedad, 	CSSGrupo::ContenidoGen,			2, 	array(2, 1, 8, 9.2, 3.1),		"");
            $this->AgregarCSS("cubic-bezier()",			CSSTipo::Funcion, 	CSSGrupo::Tiempo,			3, 	array(16, 4, 10, 12.1, 5.1),		"");
            $this->AgregarCSS("cursor",				CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			2, 	array(1, 1, 4, 7, 1.2),			"");
            $this->AgregarCSS(":default",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(10, 4, 0, 10, 5),			"Selecciona las etiquetas que sean el control por defecto de su grupo.", ":default");
            $this->AgregarCSS(":dir",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(0, 18, 0, 0, 0),			"", ":dir(ltr)");
            $this->AgregarCSS("direction",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			2, 	array(2, 1, 5.5, 9.2, 1.3),		"Especifica la dirección hacia donde se escribirá el texto.");
            $this->AgregarCSS(":disabled",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1, 9, 9, 3.1),			"Selecciona las etiquetas desactivadas.", "input:disabled");
            $this->AgregarCSS("display",			CSSTipo::Propiedad, 	CSSGrupo::Posicion,			1, 	array(1, 1, 4, 5, 1),			"Especifica como se muestra el objeto.");
            $this->AgregarCSS("@document",			CSSTipo::Regla, 	CSSGrupo::URL,				4, 	array(0, 1006, 0, 0, 0),		"");
            $this->AgregarCSS("drop-shadow()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
//			$this->AgregarCSS("element()",				CSSTipo::Funcion, 		CSSGrupo::Objetos,				4, 	array(1018, 0, 0, 1017, 3),			"");
            $this->AgregarCSS(":empty",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(1, 1, 8, 4, 1.2),			"Selecciona los elementos especificados que están vacios.", "p:empty");
            $this->AgregarCSS("empty-cells",			CSSTipo::Propiedad, 	CSSGrupo::Tabla,			1, 	array(1, 1, 4, 5, 1),			"Especifica si se deben pintar los bordes y fondos de las celdas vacias.");
            $this->AgregarCSS(":enabled",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1, 9, 9, 3.1),			"Selecciona las etiquetas activadas.", "input:enabled");
            $this->AgregarCSS("filter",				CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			3, 	array(1018, 0, 0, 1017, 3),		"");
//			$this->AgregarCSS(":first",						CSSTipo::Selector, 		CSSGrupo::PseudoClase,			3, 	array(1018, 0, 0, 1017, 3),			"");
            $this->AgregarCSS(":first-child",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(4, 3, 7, 9.5, 4),			"Selecciona el primer elemento especificado dentro de su jerarquía.", "p:first-child");
            $this->AgregarCSS("::first-letter",			CSSTipo::Selector, 	CSSGrupo::PseudoElemento,		1, 	array(1, 1, 9, 7, 1),			"Selecciona la primera letra del elemento especificado.", "p::first-letter");
            $this->AgregarCSS("::first-line",			CSSTipo::Selector, 	CSSGrupo::PseudoElemento,		1, 	array(1, 1, 9, 7, 1),			"Selecciona la primera línea del elemento especificado.", "p::first-line");
            $this->AgregarCSS(":first-of-type",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.2),		"Selecciona todos los elementos especificados que son el primer hijo (del mismo tipo) de otro elemento.", "p:first-of-type");
            $this->AgregarCSS("flex",				CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(29, 20, 11, 12.10, 1006.1),	"Propiedad corta para las propiedades flex-grow, flex-shrink, y flex-basis.");
            $this->AgregarCSS("flex-basis",			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(31, 22, 11, 12.10, 1007),		"Especifica el tamaño base de un flex-item.");
            $this->AgregarCSS("flex-direction",			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(31, 22, 11, 12.10, 0),		"Especifica el eje y la dirección de un contenedor flex.");
            $this->AgregarCSS("flex-flow",			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(31, 28, 11, 12.10, 1006.1),	"Propiedad corta para flex-direction y flex-wrap.");
            $this->AgregarCSS("flex-grow",			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(31, 20, 11, 12.10, 1006.1),	"Especifica el factor de crecimiento para un flex-item.");
            $this->AgregarCSS("flex-shrink",			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(31, 20, 11, 12.10, 0),		"Especifica el factor de contracción para un flex-item.");
            $this->AgregarCSS("flex-wrap",			CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(31, 28, 11, 12.10, 1006.1),	"Especifica si los objetos hijos deben permanecer en la misma línea.");
            $this->AgregarCSS("float",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			1, 	array(1, 1, 4, 7, 1),			"Especifica si el elemento es flotante, y hacia que lado se decanta.");
            $this->AgregarCSS(":focus",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(1, 1, 8, 7, 1),			"Selecciona elemento que tiene el foco del teclado.", "input:focus");
            $this->AgregarCSS("font",				CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			1, 	array(1, 1, 4, 3.5, 1),			"Propiedad corta que permite especificar las propiedades font-family, font-size, font-style, font-weight, y line-height.");
            $this->AgregarCSS("@font-face",			CSSTipo::Regla, 	CSSGrupo::Fuentes,			3, 	array(3.5, 6, 9, 11.10, 5.1),		"Regla para definir una fuente externa nueva.");
            $this->AgregarCSS("font-family",			CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			1, 	array(1, 1, 3, 3.5, 1),			"Especifica el nombre de la fuente.");
            $this->AgregarCSS("font-feature-settings",		CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			3, 	array(1016, 1004, 10, 0, 0),		"");
            $this->AgregarCSS("font-size",			CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			1, 	array(1, 1, 5.5, 7, 1),			"Especifica el tamaño del texto.");
            // POR REVISAR
            $this->AgregarCSS("font-size-adjust",		CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			3, 	array(0, 3, 0, 0, 0),			"Especifica un tamaño de ajuste por si no es posible cargar la fuente por defecto.");
            // POR REVISAR
            $this->AgregarCSS("font-stretch",			CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			3, 	array(0, 3, 9, 0, 0),			"Especifica una <code>font-family</code> normal, condensada o expandida.");
            $this->AgregarCSS("font-style",			CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			1, 	array(1, 1, 4, 7, 1),			"Especifica el estilo con el que se mostrará el texto.");
            $this->AgregarCSS("font-variant",			CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica si se usaran caracteres en mayusculas y minusculas normalmente, o solo mayusculas con un tamaño distinto.");
            $this->AgregarCSS("font-weight",			CSSTipo::Propiedad, 	CSSGrupo::Fuentes,			1, 	array(2, 1, 3, 3.5, 1.3),		"Especifica el grosor con el que se pintara el texto.");
            $this->AgregarCSS(":fullscreen",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1015, 1009, 1011, 0, 1006),	"", ":fullscreen"); //https://developer.mozilla.org/en/DOM/Using_full-screen_mode
            $this->AgregarCSS("grayscale()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("height",				CSSTipo::Propiedad, 	CSSGrupo::Tam,				1, 	array(1, 1, 4, 7, 1.0),			"Especifica la altura para el objeto.");
            $this->AgregarCSS(":hover",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(1, 1, 7, 7, 2),			"Selecciona elemento situado debajo del mouse.", "a:hover"); 
            $this->AgregarCSS("hsl()",				CSSTipo::Funcion, 	CSSGrupo::Color,			3, 	array(1, 1, 9, 9.5, 3.1),		"Función para especificar un color utilizando el modelo HSL.");
            $this->AgregarCSS("hsla()",				CSSTipo::Funcion, 	CSSGrupo::Color,			3, 	array(1, 3, 9, 10, 3.1),		"Función para especificar un color utilizando el modelo HSL con canal Alpha (transparencias).");
            $this->AgregarCSS("hue-rotate()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("hyphens",			CSSTipo::Propiedad, 	CSSGrupo::ContenidoPag,			3, 	array(1013, 1006, 1010, 0, 1005.1),	"");
            $this->AgregarCSS("icon",				CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			3, 	array(0, 0, 0, 0, 0),			"");
            $this->AgregarCSS("image-rendering",		CSSTipo::Propiedad, 	CSSGrupo::Imagen,			4, 	array(0, 0, 0, 0, 0),			"");
            $this->AgregarCSS("image-orientation",		CSSTipo::Propiedad, 	CSSGrupo::Imagen,			3, 	array(0, 26, 0, 0, 0),			"");
            $this->AgregarCSS("ime-mode",			CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			3, 	array(0, 3, 5, 0, 0),			"");
            $this->AgregarCSS("@import",			CSSTipo::Regla, 	CSSGrupo::URL,				1, 	array(1, 1, 5.5, 3.5, 3),		"");
            $this->AgregarCSS(":indeterminate",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(6, 6, 10, 15, 5.2),		"", ":indeterminate"); 
//			$this->AgregarCSS(":in-range",		CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(6, 6, 10, 15, 5.2),		"", ":indeterminate"); 
            $this->AgregarCSS(":invalid",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(10, 4, 10, 10, 5.0),		"", "input:invalid"); 
            $this->AgregarCSS("invert()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("justify-content",		CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(1021, 20, 0, 12.10, 0),		"");
            $this->AgregarCSS("@keyframes",			CSSTipo::Regla, 	CSSGrupo::Animacion,			3, 	array(1001, 16, 10, 1015, 1004),	"Regla para especificar las fases de una animación.");
            $this->AgregarCSS(":lang",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(1, 1, 8, 8, 3.1),			"Selecciona el elemento con el atributo language que empiece por el idioma especificado.", "p:lang(es)"); 
            $this->AgregarCSS(":last-child",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(1, 1, 8, 8, 3.1),			"Selecciona el último elemento especificado dentro de su jerarquía.", "p:last-child"); 
            $this->AgregarCSS(":last-of-type",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(1, 1, 8, 8, 3.1),			"Selecciona todos los elementos especificados que son el <b>último</b> hijo (del mismo tipo) de otro elemento.", "p:last-of-type"); 
            $this->AgregarCSS("left",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 5, 6, 1),			"Especifica la posición partiendo desde la parte izquierda.");
            $this->AgregarCSS(":left",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			2, 	array(0, 0, 8, 9.2, 0),			"", ":left"); 
            $this->AgregarCSS("letter-spacing",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica la separación entre cada caracter de un texto.");
            $this->AgregarCSS("linear-gradient()",		CSSTipo::Funcion, 	CSSGrupo::Degradado,			3, 	array(1010, 16, 10, 1011, 1005.1),	"");
            $this->AgregarCSS(":link",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona los enlaces.", "a:link"); 
            $this->AgregarCSS("line-height",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 4, 7, 1),			"Especifica la separación entre las líneas de un texto.");
            $this->AgregarCSS("list-style",			CSSTipo::Propiedad, 	CSSGrupo::Lista,			2, 	array(1, 1, 4, 7, 1),			"Propiedad corta que permite especificar todos los estilos de la lista.");
            $this->AgregarCSS("list-style-image",		CSSTipo::Propiedad, 	CSSGrupo::Lista,			2, 	array(1, 1, 4, 7, 1),			"Especifica una imagen externa para el marcador de los items.");
            $this->AgregarCSS("list-style-position",		CSSTipo::Propiedad, 	CSSGrupo::Lista,			2, 	array(1, 1, 4, 3.5, 1),			"Especifica la posición donde se insertará el marcador de los items.");
            $this->AgregarCSS("list-style-type",		CSSTipo::Propiedad, 	CSSGrupo::Lista,			2, 	array(1, 1, 4, 3.5, 1),			"Especifica el tipo de marcador que se utilizara para los items.");
            $this->AgregarCSS("margin",				CSSTipo::Propiedad, 	CSSGrupo::Margen,			1, 	array(1, 1, 3, 3.5, 1),			"Propiedad corta que permite especificar todos los margenes.");
            $this->AgregarCSS("margin-bottom",			CSSTipo::Propiedad, 	CSSGrupo::Margen,			1, 	array(1, 1, 3, 3.5, 1),			"Especifica el margen inferior.");
            $this->AgregarCSS("margin-left",			CSSTipo::Propiedad, 	CSSGrupo::Margen,			1, 	array(1, 1, 3, 3.5, 1),			"Especifica el margen izquierdo.");
            $this->AgregarCSS("margin-right",			CSSTipo::Propiedad, 	CSSGrupo::Margen,			1, 	array(1, 1, 3, 3.5, 1),			"Especifica el margen derecho.");
            $this->AgregarCSS("margin-top",			CSSTipo::Propiedad, 	CSSGrupo::Margen,			1, 	array(1, 1, 3, 3.5, 1),			"Especifica el margen superior.");
            $this->AgregarCSS("marks",				CSSTipo::Propiedad, 	CSSGrupo::ContenidoPag,			3, 	array(0, 0, 0, 0, 0),			"");
            $this->AgregarCSS("mask",				CSSTipo::Propiedad, 	CSSGrupo::SVG,				3, 	array(1, 1, 0, 1, 1),			"");
            $this->AgregarCSS("mask-type",			CSSTipo::Propiedad, 	CSSGrupo::SVG,				3, 	array(24, 20, 0, 15, 0),		"");
            $this->AgregarCSS("matrix()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1001, 16, 10, 1015, 1003.1),	"");
            $this->AgregarCSS("matrix3d()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1001, 16, 10, 1015, 1004),	"");
            $this->AgregarCSS("max-height",			CSSTipo::Propiedad, 	CSSGrupo::Tam,				2, 	array(1, 1, 7, 7, 1),			"Especifica la altura maxima para el objeto.");
            $this->AgregarCSS("max-width",			CSSTipo::Propiedad, 	CSSGrupo::Tam,				2, 	array(1, 1, 7, 7, 1),			"Especifica el ancho maximo para el objeto.");
            $this->AgregarCSS("@media",				CSSTipo::Regla, 	CSSGrupo::MediaQuery,			2, 	array(1, 1, 9, 9.2, 1.3),		"Permite especificar una serie de selectores en el caso de cumplirse el tipo de medio especificado.");
            $this->AgregarCSS("min-height",			CSSTipo::Propiedad, 	CSSGrupo::Tam,				2, 	array(1, 1, 7, 7, 1),			"Especifica la altura minima para el objeto.");
            $this->AgregarCSS("min-width",			CSSTipo::Propiedad, 	CSSGrupo::Tam,				2, 	array(1, 1, 7, 7, 1),			"Especifica el ancho minimo para el objeto.");
            $this->AgregarCSS("@namespace",			CSSTipo::Regla, 	CSSGrupo::EspacioNombres,		3, 	array(0, 0, 0, 0, 0),			"");
            $this->AgregarCSS(":not",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.2),		"Selecciona las etiquetas que no sean la especificada.", ":not(p)"); 
            $this->AgregarCSS(":nth-child",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.1),		"Selecciona el elemento especificado partiendo de la posición del hijo.", "p:nth-child(1)"); 
            $this->AgregarCSS(":nth-last-child",		CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.2),		"Selecciona el elemento especificado partiendo de la posición del hijo, contando por detrás.", "p:nth-last-child(2)"); 
            $this->AgregarCSS(":nth-last-of-type",		CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.2),		"Selecciona el elemento especificado (del mismo tipo) partiendo de la posición del hijo, contando por detrás.", "p:nth-last-of-type(3)"); 
            $this->AgregarCSS(":nth-of-type",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.1),		"Selecciona el elemento especificado (del mismo tipo) partiendo de la posición del hijo.", "p:nth-of-type(4)"); 
            $this->AgregarCSS(":only-child",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(2, 1.5, 9, 9.5, 3.1),		"Selecciona todos los elementos especificados que son el <b>único</b> hijo de otro elemento.", "p:only-child"); 
            $this->AgregarCSS(":only-of-type",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 3.5, 9, 9.5, 3.2),		"Selecciona todos los elementos especificados que son el <b>único</b> hijo (del mismo tipo) de otro elemento.", "p:only-of-type"); 
            $this->AgregarCSS("opacity",			CSSTipo::Propiedad, 	CSSGrupo::Color,			3, 	array(1, 1, 9, 9, 1.2),			"Especifica la altura maxima para el objeto.");
            $this->AgregarCSS("opacity()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS(":optional",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(10, 4, 10, 10, 5),		"", ":optional"); 
            $this->AgregarCSS("order",				CSSTipo::Propiedad, 	CSSGrupo::CajasFlex,			3, 	array(1021, 20, 1010, 12.10, 0),	"Especifica el orden de un flex-item dentro de un contenedor flex.");
            $this->AgregarCSS("orphans",			CSSTipo::Propiedad, 	CSSGrupo::Impresion,			3, 	array(25, 0, 8, 9.2, 0),		"");
            $this->AgregarCSS("outline",			CSSTipo::Propiedad, 	CSSGrupo::Contorno,			2, 	array(1, 1, 8, 7, 1.2),			"Propiedad corta que nos permite asignar el tamaño, el color, y el estilo del contorno / borde exterior.");
            $this->AgregarCSS("outline-color",			CSSTipo::Propiedad, 	CSSGrupo::Contorno,			2, 	array(1, 1, 8, 7, 1.2),			"Especifica el color del contorno / borde exterior.");
            $this->AgregarCSS("outline-offset",			CSSTipo::Propiedad, 	CSSGrupo::Contorno,			2, 	array(1, 1, 0, 7, 1.2),			"Especifica la distancia entre el borde interior y el contorno / borde exterior.");
            $this->AgregarCSS("outline-style",			CSSTipo::Propiedad, 	CSSGrupo::Contorno,			2, 	array(1, 1, 8, 7, 1.2),			"Especifica el estilo del contorno / borde exterior.");
            $this->AgregarCSS("outline-width",			CSSTipo::Propiedad, 	CSSGrupo::Contorno,			2, 	array(1, 1, 8, 7, 1.2),			"Especifica la distancia entre el borde interior y el contorno / borde exterior.");
            $this->AgregarCSS("overflow",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			2, 	array(1, 1, 4, 7, 1.2),			"Define como se debe tratar el contenido que sobresale del contenedor.");
            // word-wrap SE HA RENOMBRADO A overflow-wrap
//			$this->AgregarCSS("overflow-wrap",				CSSTipo::Propiedad, 	CSSGrupo::Cajas,				3, 	array(1, 3.5, 5.5, 10.5, 1),		"Define como se debe tratar el contenido que sobresale del contenedor.");
            $this->AgregarCSS("overflow-x",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			2, 	array(1, 3.5, 5, 9.5, 3),		"Define como se debe tratar el contenido que sobresale por la derecha o izquierda del contenedor.");
            $this->AgregarCSS("overflow-y",			CSSTipo::Propiedad, 	CSSGrupo::Cajas,			2, 	array(1, 3.5, 5, 9.5, 3),		"Define como se debe tratar el contenido que sobresale por la arriba o abajo del contenedor.");
            $this->AgregarCSS("padding",			CSSTipo::Propiedad, 	CSSGrupo::Relleno,			1, 	array(1, 1, 4, 3.5, 1),			"Propiedad corta que permite especificar todas las propiedades del relleno.");
            $this->AgregarCSS("padding-bottom",			CSSTipo::Propiedad, 	CSSGrupo::Relleno,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el relleno inferior.");
            $this->AgregarCSS("padding-left",			CSSTipo::Propiedad, 	CSSGrupo::Relleno,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el relleno de la parte izquierda.");
            $this->AgregarCSS("padding-right",			CSSTipo::Propiedad, 	CSSGrupo::Relleno,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el relleno de la parte derecha.");
            $this->AgregarCSS("padding-top",			CSSTipo::Propiedad, 	CSSGrupo::Relleno,			1, 	array(1, 1, 4, 3.5, 1),			"Especifica el relleno superior.");
            $this->AgregarCSS("@page",				CSSTipo::Regla, 	CSSGrupo::Impresion,			2, 	array(2, 19, 8, 6, 5),			"");
            $this->AgregarCSS("page-break-after",		CSSTipo::Propiedad, 	CSSGrupo::Impresion,			2, 	array(1, 1, 4, 7, 1.2),			"");
            $this->AgregarCSS("page-break-before",		CSSTipo::Propiedad, 	CSSGrupo::Impresion,			2, 	array(1, 1, 4, 7, 1.2),			"");
            $this->AgregarCSS("page-break-inside",		CSSTipo::Propiedad, 	CSSGrupo::Impresion,			2, 	array(1, 19, 8, 7, 1.3),		"");
            $this->AgregarCSS("perspective",			CSSTipo::Propiedad, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"Especifica la perspectiva 3D con la que se mostrarán sus hijos.");
            $this->AgregarCSS("perspective()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("perspective-origin",		CSSTipo::Propiedad, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"Especifica la posición 3D de la perspectiva con la que se mostrarán sus hijos.");
            $this->AgregarCSS("pointer-events",			CSSTipo::Propiedad, 	CSSGrupo::SVG,				3, 	array(2, 3.6, 11, 15, 4.0),		"");
            $this->AgregarCSS("position",			CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 7, 4, 1),			"Especifica el tipo de posicionamiento para el objeto.");
            $this->AgregarCSS("quotes",				CSSTipo::Propiedad, 	CSSGrupo::ContenidoGen,			2, 	array(11, 1.5, 8, 4, 0),		"");
            $this->AgregarCSS("radial-gradient()",		CSSTipo::Funcion, 	CSSGrupo::Degradado,			3, 	array(1010, 16, 10, 1011, 1005.1),	"");
            $this->AgregarCSS(":read-write",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1015, 0, 0, 4),		"", "input:read-write"); 
            $this->AgregarCSS("rect()",				CSSTipo::Funcion, 	CSSGrupo::Figura,			2, 	array(1, 1, 5.5, 9.5, 1.3),		"");
            $this->AgregarCSS("repeating-linear-gradient()",    CSSTipo::Funcion, 	CSSGrupo::Degradado,			3, 	array(1010, 16, 10, 1011, 1005.1),	"");
            $this->AgregarCSS("repeating-radial-gradient()",    CSSTipo::Funcion, 	CSSGrupo::Degradado,			3, 	array(1010, 16, 10, 1011, 1005.1),	"");
            $this->AgregarCSS("resize",				CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			3, 	array(4, 5, 0, 0, 4),			"");
            $this->AgregarCSS("rgb()",				CSSTipo::Funcion, 	CSSGrupo::Color,			3, 	array(1, 1, 4, 3.5, 3.1),		"Función para especificar un color utilizando el modelo RGB.");
            $this->AgregarCSS("rgba()",				CSSTipo::Funcion, 	CSSGrupo::Color,			3, 	array(1, 1, 8, 10, 3.1),		"Función para especificar un color utilizando el modelo RGB con canal Alpha (transparencias).");
            $this->AgregarCSS("right",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 5, 6, 1),			"Especifica la posición partiendo desde la parte derecha.");
            $this->AgregarCSS(":right",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(0, 0, 8, 9.2, 0),			"", ":right"); 
            $this->AgregarCSS(":root",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1, 9, 9.5, 1),			"Selecciona la raíz del documento.", ":root"); 
            $this->AgregarCSS("rotate()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("rotatex()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("rotatey()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("rotatez()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("rotate3d()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("saturate()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("scale()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("scalex()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("scaley()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("scalez()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("scale3d()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
//			$this->AgregarCSS(":scope",						CSSTipo::Selector, 		CSSGrupo::PseudoClase,			4, 	array(1, 1, 9, 9.5, 1),				"Selecciona la raíz del documento.", ":root"); 
            $this->AgregarCSS("::selection",			CSSTipo::Selector, 	CSSGrupo::PseudoElemento,		3, 	array(1, 1001, 9, 9.5, 1.1),		"Selecciona la porción del elemento que ha sido seleccionado por el usuario.", ":selection"); 
            $this->AgregarCSS("sepia()",			CSSTipo::Funcion, 	CSSGrupo::Filtro,			3, 	array(1018, 0, 0, 1017, 3),		"");
            $this->AgregarCSS("skew()",				CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("skewx()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("skewy()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("steps()",			CSSTipo::Funcion, 	CSSGrupo::Tiempo,			3, 	array(8, 4, 10, 12.1, 5.1),		"");
            $this->AgregarCSS("@supports",			CSSTipo::Regla, 	CSSGrupo::Condicional,			3, 	array(28, 22, 0, 12.1, 0),		"");
            $this->AgregarCSS("table-layout",			CSSTipo::Propiedad, 	CSSGrupo::Tabla,			3, 	array(14, 1, 5, 7, 1),			"Especifica el algoritmo que se usará para calcular el tamaño de las columnas.");
            $this->AgregarCSS("tab-size",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(21, 1004, 0, 15, 0),			"Especifica los espacios que tiene cada tabulación en el objeto.");
            $this->AgregarCSS(":target",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1.3, 9, 9.5, 1.3),			"Selecciona el último anclaje en el que se ha hecho click.", ":target"); 
            $this->AgregarCSS("text-align",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(1, 1, 3, 3.5, 1.0),			"Especifica la alineación del texto.");
            $this->AgregarCSS("text-align-last",		CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(0, 1012, 5.5, 0, 0),			"Especifica la alineación para la última línea.");
//			$this->AgregarCSS("text-combine-horizontal",	CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(0, 1012, 5.5, 0, 0),			"");
            $this->AgregarCSS("text-decoration",		CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 3, 3.5, 1),				"Especifica la decoración del texto.");
            $this->AgregarCSS("text-decoration-color",		CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(0, 1006, 0, 0, 0),			"Especifica el color para la decoración del texto.");
            $this->AgregarCSS("text-decoration-line",		CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(0, 1006, 0, 0, 0),			"Especifica que tipo de lineas se muestran en la decoración.");
            $this->AgregarCSS("text-decoration-style",		CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(0, 1006, 0, 0, 0),			"Especifica el estilo de las lineas que se muestran en la decoración.");
            $this->AgregarCSS("text-indent",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 3, 3.5, 1),				"Especifica el tamaño de la sangría dentro de un bloque de texto.");
            $this->AgregarCSS("text-justify",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(0, 0, 9, 0, 0),				"Especifica el método que se utilizará para justificar el texto.");
//			$this->AgregarCSS("text-oritentation",			CSSTipo::Propiedad, 	CSSGrupo::Texto,				1, 	array(1, 1, 3, 3.5, 1),				"Especifica la decoración del texto.");
            $this->AgregarCSS("text-overflow",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 7, 6, 11, 1.3),			"Especifica como se tratara el texto si está parcialmente oculto.");
            $this->AgregarCSS("text-rendering",			CSSTipo::Propiedad, 	CSSGrupo::SVG,				3, 	array(4, 3, 0, 0, 5),				"");
            $this->AgregarCSS("text-shadow",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(2, 3.5, 10, 9.5, 1.1),		"Especifica la sombra para el texto.");
            $this->AgregarCSS("text-transform",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 4, 7, 1),				"Especifica la transformación para el texto : Mayúsculas, Minúsculas, Primera letra de cada palabra mayúscula.");
            $this->AgregarCSS("text-underline-position",	CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(33, 0, 6, 0, 0),				"");
            $this->AgregarCSS("top",				CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 5, 6, 1),				"Especifica la posición partiendo desde la parte superior.");
            $this->AgregarCSS("transform",			CSSTipo::Propiedad, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"Especifica una o varias transformaciones en 2d y en 3d.");
            $this->AgregarCSS("transform-origin",		CSSTipo::Propiedad, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"Especifica la posición del elemento transformado.");
            $this->AgregarCSS("transform-style",		CSSTipo::Propiedad, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 0, 1015, 1005),		"Especifica el estilo del elemento transformado.");
            $this->AgregarCSS("transition",			CSSTipo::Propiedad, 	CSSGrupo::Transicion,			3, 	array(26, 16, 10, 12, 1003),		"Propiedad corta que nos permite especificar en una sola linea las cuatro propiedades de la transición.");
            $this->AgregarCSS("transition-delay",		CSSTipo::Propiedad, 	CSSGrupo::Transicion,			3, 	array(26, 16, 10, 12.1, 1003),		"Especifica el tiempo que tardará en arrancar la transición.");
            $this->AgregarCSS("transition-duration",		CSSTipo::Propiedad, 	CSSGrupo::Transicion,			3, 	array(26, 16, 10, 12.1, 1003),		"Especifica el tiempo que durará la transición.");
            $this->AgregarCSS("transition-property",		CSSTipo::Propiedad, 	CSSGrupo::Transicion,			3, 	array(26, 16, 10, 12.1, 1003),		"Especifica que propiedades intervienen en la transición.");
            $this->AgregarCSS("transition-timing-function",	CSSTipo::Propiedad, 	CSSGrupo::Transicion,			3, 	array(26, 16, 10, 12.1, 1003),		"Especifica la curva de velocidad que se usara para la transición.");
            $this->AgregarCSS("translate()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("translatex()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("translatey()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("translatez()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("translate3d()",			CSSTipo::Funcion, 	CSSGrupo::Transformaciones,		3, 	array(1012, 16, 10, 1015, 1005),	"");
            $this->AgregarCSS("unicode-bidi",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			2, 	array(2, 1, 5.5, 9.2, 1.3),		"Especifica junto con la propiedad direction hacia donde se escribe el texto. (para páginas con multiples idiomas)");
            $this->AgregarCSS("unicode-range",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(16, 0, 9, 12, 5),			"");
            $this->AgregarCSS("url()",				CSSTipo::Funcion, 	CSSGrupo::Valores,			1, 	array(1, 1, 3, 3.5, 1),			"");
            $this->AgregarCSS("user-select",			CSSTipo::Propiedad, 	CSSGrupo::Interfaz,			3, 	array(1001, 1001, 1010, 1015, 1005),    "Propiedad que permite evitar la selección con el mouse.");
            $this->AgregarCSS(":valid",				CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(10, 4, 10, 10, 5),		"", ":valid"); 
//			$this->AgregarCSS("::value",					CSSTipo::Selector, 		CSSGrupo::PseudoClase,			3, 	array(1, 1.3, 9, 9.5, 1.3),			"", "::value"); 
            $this->AgregarCSS("vertical-align",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 4, 4, 1),			"Especifica como debe alinearse verticalmente el objeto.");
//			$this->AgregarCSS("@viewport",					CSSTipo::Regla, 		CSSGrupo::Responsive,				3, 	array(28, 22, 0, 12.1, 0),			"");
            $this->AgregarCSS("visibility",			CSSTipo::Propiedad, 	CSSGrupo::Posicion,			2, 	array(1, 1, 4, 4, 1),			"Especifica si el objeto es visible, y reserva su espacio aunque no sea visible.");
            $this->AgregarCSS(":visited",			CSSTipo::Selector, 	CSSGrupo::PseudoClase,			3, 	array(1, 1, 3.5, 3.5, 1),		"Selecciona los enlaces visitados.", "a:visited"); 
            $this->AgregarCSS("white-space",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			2, 	array(1, 1, 5.5, 4, 1),			"Especifica como se tratan los espacios en blanco del texto.");
            $this->AgregarCSS("widows",				CSSTipo::Propiedad, 	CSSGrupo::Impresion,			3, 	array(25, 0, 8, 9.2, 0),		"");
            $this->AgregarCSS("width",				CSSTipo::Propiedad, 	CSSGrupo::Tam,				1, 	array(1, 1, 4, 7, 1),			"Especifica la altura para el objeto.");
            $this->AgregarCSS("word-break",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			3, 	array(1, 15, 5.5, 15, 3),		"Especifica como se deben cortar las lineas de texto (al final de la palabra o al final de una letra).");
            $this->AgregarCSS("word-spacing",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 1, 6, 3.5, 1),			"Especifica el espacio entre palabras.");
            $this->AgregarCSS("word-wrap",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			1, 	array(1, 3.5, 5.5, 10.5, 1),		"Especifica si se deben cortar forzosamente las palabras que excedan el ancho del objeto.");
//			$this->AgregarCSS("writing-mode",			CSSTipo::Propiedad, 	CSSGrupo::,						1, 	array(1, 1, 4, 7, 1),				"Especifica si se deben cortar forzosamente las palabras que excedan el ancho del objeto.");
            $this->AgregarCSS("z-index",			CSSTipo::Propiedad, 	CSSGrupo::Texto,			2, 	array(1, 3, 4, 4, 1),			"Especifica el orden en el que aparecen las capas / objetos que se sobreponen entre ellos.");

            $this->AgregarCSS("Selector de etiqueta",		CSSTipo::Selector, 	CSSGrupo::Basico,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona todas las etiquetas del tipo especificado.", "div", "Etiqueta");
            $this->AgregarCSS("Selector de clase",		CSSTipo::Selector, 	CSSGrupo::Basico,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona todas las etiquetas que tengan la clase <code>MiClase</code>.", ".MiClase", "Clase");
            $this->AgregarCSS("Selector de ID",			CSSTipo::Selector, 	CSSGrupo::Basico,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona la etiqueta que tenga la ID <code>MiID</code>.", "#MiID", "ID");
            $this->AgregarCSS("Selector múltiple",		CSSTipo::Selector, 	CSSGrupo::Combinado,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona multiples elementos para aplicar el mismo estilo.", "div, #MiID", "MultiplesElementos");
            $this->AgregarCSS("Selector descendencia",		CSSTipo::Selector, 	CSSGrupo::Combinado,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona los elementos <code>#MiID</code> dentro de los elementos <code>div</code>.", "div #MiID", "ElementoDentroElemento");
            $this->AgregarCSS("Selector hijos",			CSSTipo::Selector, 	CSSGrupo::Combinado,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos <code>span</code> que tengan cómo padre un elemento <code>p</code>.", "p > span", "ElementoPadreElemento");
            $this->AgregarCSS("Selector adyacente",		CSSTipo::Selector, 	CSSGrupo::Combinado,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos <code>p</code> que se encuentren justo despues de un elemento <code>div</code>.", "div + p", "ElementoDespuesElemento");
            $this->AgregarCSS("Selector precendencia",		CSSTipo::Selector, 	CSSGrupo::Combinado,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos <code>span</code> que esten precedidos por un elemento <code>p</code>.", "p ~ span", "ElementoPrecedidoElemento");
            $this->AgregarCSS("Selector universal",		CSSTipo::Selector, 	CSSGrupo::Combinado,			1, 	array(1, 1, 3, 3.5, 1),			"Selecciona <b>TODAS</b> las etiquetas.", "*", "Asterisco");
            $this->AgregarCSS("Selector [atributo]",		CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que tienen definido el atributo especificado.", "span[title]", "[Atributo]");
            $this->AgregarCSS("Selector [atributo=valor]",	CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que tienen el atributo con el valor especificado.", "a[href=valor]", "[Atributo=Valor]");
            $this->AgregarCSS("Selector [atributo~=valor]",	CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que el valor del atributo contenga la palabra especificada.", "div[title~=palabra]", "[Atributo~=Palabra]");
            $this->AgregarCSS("Selector [atributo*=valor]",	CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que el valor del atributo contenga el string especificado.", "div[title*=string]", "[Atributo*=String]");
            $this->AgregarCSS("Selector [atributo|=valor]",	CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que el valor del atributo sea el valor especificado.", "div[title|=valor]", "AtributoEsValor");
            $this->AgregarCSS("Selector [atributo^=valor]",	CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que el valor del atributo empiece con el valor especificado (string).", "div[title^=valor]", "AtributoEmpiezaValor");
            $this->AgregarCSS("Selector [atributo$=valor]",	CSSTipo::Selector, 	CSSGrupo::Atributo,			3, 	array(1, 1, 9, 9, 3),			"Selecciona los elementos que el valor del atributo termine con el valor especificado.", "div[title$=valor]", "[Atributo$=Valor]");
            
            /* Creo el archivo de intercambio para poder crear la lista de entradas en javascript */
            if (filemtime(dirname(__FILE__).'/CSS_BD.php') > filemtime(dirname(__FILE__)."/Config/EntradasDocCSS.php")) { 
                file_put_contents($_SERVER['DOCUMENT_ROOT']."/Web/Config/EntradasDocCSS.php", "<?php return ".var_export($this->_Lista, TRUE).";");                
            }
        }
    };

    abstract class CSSTipo { 
        const Todos     = -1; /* Valor especial para mostrar todos los tipos */
        const Propiedad = 0;
        const Selector 	= 1;
        const Funcion 	= 2;
        const Regla 	= 3;
        static public function Singular($Tipo) {
            switch ($Tipo) {
                case CSSTipo::Propiedad : return "Propiedad";
                case CSSTipo::Selector 	: return "Selector";
                case CSSTipo::Funcion 	: return "Función";
                case CSSTipo::Regla 	: return "Regla";
            }
        }
        static public function Plural($Tipo) {
            switch ($Tipo) {
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

        const TotalGrupos		= 38;

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
            }
        }
    };
/* historial de modificacions 

	30/12/2013 totes les transforms
	06/12/2013 varies propietats del grup texte : text-align-last, text-justify, unicode-bidi, word-wrap, white-space, etc...
	10/01/2014 totes les border-image
	11/01/2014 actualitzat :nth-child, :nth-last-child. nous : text-decoration-style, text-decoration-color, text-decoration-line, tab-size, rgb(), rgba()
	12/01/2014 bottom, top
*/
?>