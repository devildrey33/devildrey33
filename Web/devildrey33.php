<?php 
if (!isset($_SESSION)) session_start();
/*
    NOTES a l'hora de fer els css :
    - He creat un subdomini img.devildrey33, que enllaça directament al directori d'imatges. Per no tenir problemes de paths relatius les imatges dels css apuntaran directament al subdomini d'internet inclus pel servidor de proves local.
*/

include("devildrey33_Lab.php");
include("devildrey33_PintarCodigo.php");
include("devildrey33_Comentarios.php");
include("devildrey33_htaccess.php");
include("devildrey33_EditarEntradas.php");


/* Examinar un exemple de cada plantilla i fer un estudi detallat de les diferencies i similituds, lo cual requerira en primera instancia evaluar i enumerar totes les etiquetes que intervenen en cada cas. */

/* *TODO / REINTERPRETAR EN AQUEST CAS : el tiups Articulo i ArticuloURLFalsa es una aberració, i aixo es un tema a estudiar.
        En principi un articulo representa un arxiu php real a l'arrel amb un tutorial que accepta missatges per aquell tema en concret.
        En canvi el articulo url falsa es basa en el mateix concepte, un tutorial (en aquest cas una part de una referencia) que no es un arxiu fisic i requereix poder escriure missatges per aquell tema en concret
        Pel que recordo el problema venia del sistema de missatgeria que requereix una url del document per fer alguna cosa, llavors la solucio no es fer chapuçes SI NO TRACTAR L'ARREL DEL PROBLEMA o be implementant
                algo dintre del objecte pels missatges, o be unificant les dues solucions de forma que ja no resulti un problema.

                Enumerar requeriments per cada tipus de plantilla : BD, CodiHTML, MissatgeriaPublica, BannerSuperiorAleatori, Document centrat
 */


class devildrey33 {
//    protected   $_Tipo;				// Tipo de plantilla
    protected   $_NombreDocumento;		// Nombre del documento que utiliza la plantilla
    protected   $_ArrayArticulos;		// Array con todos los articulos, con url, fecha y categorias.
    
//    public      $Opciones;

    public 	$BD;				// Base de datos
    public 	$PintarCodigo;			// Objeto para pintar código

    /* Constructor sin parametros, si hay que iniciar una plantilla ya se le suministraran el tipo y el nombre del documento en la misma función 
            Esto agilizara consultas ajax y de mensajeria que pasan por este constructor sin necesitar la mitad de cosas que se cargan.
    */
    public function __construct() {			
//        devildrey33::Minificar_JS_CSS();
        /* Clase que contiene las opciones que deben guardarse en la $_SESSION */
/*        if (strpos($_SERVER["SERVER_NAME"], "devildrey33.es")) {    $this->Opciones = new devildrey33_Opciones;             }
        else                                                   {    $this->Opciones = new devildrey33_Opciones(0, 0, 0, 1); }*/
        // Obtengo nombre y versión del navegador
/*        $Navegador = Base::ObtenerNavegador();
        // Reviso si el navegador es compatible (IE 8 e inferiores no son compatibles)
        if ($Navegador["Nombre"] == "Internet Explorer" && floatval($Navegador["Version"]) < 9.0)   {	$this->NavegadorNoCompatible($Navegador);	exit();	}
        // Firefox 3.x e inferiores no son compatibles
        if ($Navegador["Nombre"] == "Mozilla Firefox" && floatval($Navegador["Version"]) < 4.0)     {	$this->NavegadorNoCompatible($Navegador);	exit();	}		*/
            
        
        if (devildrey33_Opciones::ActualizarCache() === 1) { $this->Minificar_JS_CSS (); }

        // Creo el objeto para pintar el código estático
        $this->PintarCodigo = new devildrey33_PintarCodigo;
    }
    
    

    // Inserta desde la etiqueta HTML hasta el inicio del body incluyendo el menu superior, publicidad y el banner    
    /* NombreDocumento ya no es necesaria, este parametro ahora se obtiene en las funciones InicioBlog, InicioDoc, InicioSinCabecera  */
    public function InicioPlantilla($NombreDocumento, $Titulo, $Meta = "") {
        $this->_NombreDocumento = $NombreDocumento;
        
        $Entradas = new devildrey33_EditarEntradas;
        $Entrada = $Entradas->BuscarEntrada($Titulo, substr($NombreDocumento, 0, -4));

        $Idioma = 'es';
        if ($Entrada !== false) $Idioma = $Entrada["Idioma"];
        
        echo "<!DOCTYPE HTML>".Intro().
"<html lang='".$Idioma."'>".Intro().
    "<head>".Intro().
        "<title>".$Titulo."</title>".Intro().
        "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />".Intro();
        "<meta name='viewport' content='width=device-width, initial scale=1'>".Intro();
        if ($Entrada !== false) {
            echo "<meta name='author' content='".$Entrada["Autor"]."' />".Intro().
            
            /* Twitter Card data */
            "<meta name='twitter:card' content='summary' />".Intro().        
            "<meta name='twitter:site' content='@publisher_handle' />".Intro().        
            "<meta name='twitter:title' content='".$Titulo."' />".Intro().        
    //        "<meta name='twitter:description' content='Page description less than 200 characters'>".Intro().        
            "<meta name='twitter:creator' content='@author_handle' />".Intro().        
            /* Twitter Summary card images must be at least 200x200px */
            "<meta name='twitter:image' content='http://".$_SERVER["SERVER_NAME"]."/Web/Graficos/250x200_".$Entrada["Imagen"]."' />".Intro().        

            /* Open Graph data */
            "<meta property='og:title' content='".$Titulo."' />".Intro().        
            "<meta property='og:type' content='article' />".Intro().        
            "<meta property='og:url' content=' http://".$_SERVER["SERVER_NAME"]."/Blog/".$Entrada["URL"]."' />".Intro().        
            "<meta property='og:image' content='http://".$_SERVER["SERVER_NAME"]."/Web/Graficos/250x200_".$Entrada["Imagen"]."' />".Intro().        
    //        "<meta property='og:description' content='Description Here' />".Intro().        
            "<meta property='og:site_name' content='devildrey33' />".Intro();
    //        "<meta property='fb:admins' content='Facebook numeric ID' />".Intro().        
        }
                
        echo $Meta.Intro().    
        '<meta name="msapplication-config" content="none"/>'.Intro(). // Para que el explorer no busque el archivo BrowserConfig.xml de las pelotas.
        "<link rel='shortcut icon' href='http://".$_SERVER["SERVER_NAME"]."/Web/Graficos/devildrey33.ico' />".Intro();
//        "<link rel='alternate' type='application/rss+xml' title='RSS 2.0' href='http://devildrey33.es/rss.xml' />".Intro();
        $this->Head_CSS();      // Enlace/s de los estilos CSS
        $this->Head_JS();	// Enlace/s de los archivos JavaScript
        echo "<script>";
        if (devildrey33_Opciones::MostrarConsola() == 0) {    echo "\$Base.Debug(false);"; }
        else                                             {    echo "\$Base.Debug(true);";  } 
        echo "</script>".Intro().
    "</head>".Intro();
        
        if (devildrey33_Opciones::Administrador() > 0)     echo "<body administrador33=true>".Intro();
        else                                               echo "<body>".Intro();

        echo "<div id='VentanaMensaje' class='MarcoVentana-350'><p></p><button class='Centrado'>Aceptar</button></div>".Intro().
        "<div id='VentanaError' class='MarcoVentana-350'><p></p><button class='Centrado'>Aceptar</button></div>".Intro().
        "<div id='VentanaLogin' class='MarcoVentana-250'>".Intro().
            "<table>".Intro().
              "<tr>"."<td>Usuario</td>"."<td>"."<input name='Usuario' type='text' id='devildrey33_Usuario' spellcheck='false' />"."</td>"."</tr>".Intro().
              "<tr>"."<td>Password</td>"."<td>"."<input name='Password' type='password' id='devildrey33_Password' />"."</td>"."</tr>".Intro().
            "</table>".Intro().
        "</div>".Intro().                
                
        // Menú lateral izquierdo 
        "<nav id='BarraPrincipal'>".Intro().
            "<input id='BarraPrincipal_Boton_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
            "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_Boton_Estado'></label>".Intro().
            "<div class='BarraPrincipal_BotonMenu'><div id='BarraPrincipal_Boton_Icono'></div></div>".Intro().
            "<div id='BarraPrincipal_Submenus'>".Intro().
                "<div id='BarraPrincipal_Fondo'></div>".Intro().
                // <!-- CSS -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonCSS_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonCSS_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-css' />".Intro().
                        "</span>".Intro().
//                        "<span class='IcoTexto'>CSS</span>".Intro().
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoCSS'>".Intro().
                        "<a href='/Doc/CSS/Colores'>Colores</a>".Intro().
                        "<a href='/Doc/CSS/Degradados'>Degradados</a>".Intro().
                        "<a href='/Doc/CSS/Unidades'>Unidades</a>".Intro().
                        "<a href='/Doc/CSS/Funciones'>Funciones</a>".Intro().
                        "<a href='/Doc/CSS/Reglas'>Reglas</a>".Intro().
                        "<a href='/Doc/CSS/Selectores'>Selectores</a>".Intro().
                        "<a href='/Doc/CSS/Propiedades'>Propiedades</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- C / C++ -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonCPP_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonCPP_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
//                        "<span class='IcoTexto'>C++</span>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-cpp' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoCPP'>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_1_0'>Calculadora</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_2_0'>Snake</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_3_0'>Instalador</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_4'>Archivos DUMP</a>".Intro().
                        "<a href='/Blog/BubaTronik'>BubaTronik</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                // <!-- HTML -->
//                "<a href='/Categorias/HTML' class='BarraPrincipal_BotonMenu'><span>HTML</span></a>".
                // <!-- JS -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonJS_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonJS_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-js' />".Intro().
                        "</span>".Intro().
//                        "<span class='IcoTexto'>JS</span>".Intro().
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoJS'>".Intro().
                        "<a href='/Blog/Canvas2D_1'>Canvas 2D 1</a>".Intro().
                        "<a href='/Blog/Canvas2D_2'>Canvas 2D 2</a>".Intro().
                        "<a href='/Blog/Canvas2D_3'>Canvas 2D 3</a>".Intro().
                        "<a href='/Blog/Canvas2D_4'>Canvas 2D 4</a>".Intro().
                        "<a href='/Blog/devildrey33_ListaDesplegable_2-0'>Lista desplegable</a>".Intro().
                        "<a href='/Lab/Ejemplos/Solitario/Solitario.html?Preview'>Solitario HTML5</a>".Intro().                
                    "</div>".Intro().
                "</div>".Intro().

                // <!-- PHP -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonPHP_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonPHP_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
//                        "<span class='IcoTexto'>PHP</span>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-php' />".Intro().
                        "</span>".Intro().                
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoPHP'>".Intro().
                        "<a href='/Blog/Captcha1'>Captchas 1</a>".Intro().
                        "<a href='/Blog/Captcha2'>Captchas 2</a>".Intro().
                        "<a href='/Blog/Captcha3'>Captchas 3</a>".Intro().
                        "<a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- Buscar -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonBuscar_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonBuscar_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-buscar' />".Intro().
                        "</span>".Intro().
//                        "<span class='IcoLupa20x20'></span>". // <!-- lupa a morphejar -->
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoBuscar'>".Intro().
                        "<input type='text' name='Search' id='BarraPrincipal_MarcoBuscar_Edit' placeholder='Texto a buscar..' required>".Intro().
                        "<div id='BarraPrincipal_MarcoBuscar_BotonBuscar'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-buscar' />".Intro().
//                           "<span class='IcoLupa20x20'></span>".Intro().
                        "</div>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                

            "</div>".Intro().
            "<div id='Marco33' class='Menu_BotonCheck' mostrar='true'>".Intro(); // Marco que contiene las herramientas de administrador
            $HA = $this->HerramientasAdmin("", "", FALSE);
            echo $HA["HTMLAdmin"];
            echo "</div>".Intro().            
        "</nav>".Intro().
        //"<div id='MotaLog'></div>".
        
        /* Icono para mostrar el estado cargando (aunque se encuentra fuera de la barra de navegación, ocupa parte de su espacio */
        "<div id='BarraNavegacion_Inferior'>".Intro().
            "<div></div>".Intro().
            "<div></div>".Intro().
        "</div>".Intro().
                    
        "<nav id='BarraNavegacion'>".Intro().
            /* Indice */
            "<a href='/' id='BarraNavegacion_Cerrar' tooltip-es='Volver al indice principal' tooltip-en='Return to main index' tooltip-pos='R' class='BarraPrincipal_BotonMenu'>".Intro().
                "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-indice' />".Intro().
            "</a>".Intro().
            /* Lab Ver */
            "<div id ='BarraNavegacion_LabVer' class='Menu_BotonCheck'  mostrar='true'>".Intro().
                "<input id='BarraNavegacion_BotonVer_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_BotonVer_Estado' tooltip-es='Vista del editor' tooltip-en='Editor's view' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto' id='BarraNavegacion_Lab_IconoVer'>".Intro().
/*                        "<span></span>".Intro().  */
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-filas' />".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-columnas' />".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-codigo' />".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-preview' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div id ='BarraNavegacion_LabMarcoVer'>".Intro().                                       
                    "<input id='Lab_VerFilas_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Filas' tooltip-en='Rows' tooltip-pos='T' class='BarraPrincipal_Boton_Label Lab_BotonVerFilas' for='Lab_VerFilas_Estado'></label>".Intro().                    
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-filas' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().

                    "<input id='Lab_VerColumnas_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Columnas' tooltip-en='Columns' tooltip-pos='T' class='BarraPrincipal_Boton_Label Lab_BotonVerColumnas' for='Lab_VerColumnas_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-columnas' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    
                    "<input id='Lab_VerCodigo_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Código' tooltip-en='Code' tooltip-pos='T' class='BarraPrincipal_Boton_Label Lab_BotonVerCodigo' for='Lab_VerCodigo_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-codigo' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    
                    "<input id='Lab_VerPreview_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Pre-visualización' tooltip-en='Preview' tooltip-pos='T' class='BarraPrincipal_Boton_Label Lab_BotonVerPreview' for='Lab_VerPreview_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-vista-preview' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    
/*                    "<div><span>Filas</span></div>".Intro().
                    "<div><span>Columnas</span></div>".Intro().
                    "<div><span>Código</span></div>".Intro().
                    "<div><span>Resultado</span></div>".Intro().*/
                "</div>".Intro().
            "</div>".Intro().
                    
            /* Lab explorar */
            "<div id='BarraNavegacion_LabExplorar' class='Menu_BotonCheck' mostrar='true'>".Intro().                    
                "<input id='BarraNavegacion_BotonExplorar_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_BotonExplorar_Estado' tooltip-es='Explorar ejemplos' tooltip-en='Examples explorer' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro(). 
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-explorar-lab' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                    
                    
//                "<span class='IcoTexto'>Ejem</span>".Intro().
                "<div id ='BarraNavegacion_LabMarcoExplorador'>".Intro().
                     "<div class='Lab_Explorador' id='BarraNavegacion_Explorador'>".Intro();
            if (devildrey33_Opciones::Administrador() > 0) { echo devildrey33_Lab::MostrarCarpetaEjemplos(); }
            else                                           { echo devildrey33_Lab::LeerCache(); }
            echo    "</div>".Intro().
                "</div>".Intro().                                        
            "</div>".Intro().
                    
            /* Blog Subindice */
            /* NOTA!! va el primero porque puede tener un tamaño muy grande, y asi aprovecha el máximo de altura*/
            "<div id='BarraNavegacion_Indice' class='Menu_BotonCheck' mostrar='true'>".Intro().
                "<input id='BarraNavegacion_Indice_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_Indice_Estado' tooltip-es='Secciones del documento' tooltip-en='Document sections' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-sub-indice' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div id='BarraNavegacion_SubIndice'></div>".Intro().
            "</div>".Intro().
                    
            /* Prev / Next (navegación) */
            "<div id='BarraNavegacion_NextPrev' class='Menu_BotonCheck' mostrar='true'>".Intro().
                "<input id='BarraNavegacion_PrevNext_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_PrevNext_Estado' tooltip-es='Navegación por el Blog' tooltip-en='Navigate' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-lista' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div id='BarraNavegacion_MarcoNextPrev'>".
                    "<button id='BarraNavegacion_MarcoNextPrev_Prev'></button>".Intro().
                    "<div id='BarraNavegacion_MarcoNextPrev_Desc'>"."</div>".Intro().
                    "<button id='BarraNavegacion_MarcoNextPrev_Next'></button>".Intro().
                   
                "</div>".Intro().
            "</div>".Intro().
                    
                    
            /* Redes sociales */
            "<div id='BarraNavegacion_RedesSociales' class='Menu_BotonCheck' mostrar='true'>".Intro().
                "<input id='BarraNavegacion_RedesSociales_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_RedesSociales_Estado' tooltip-es='Redes sociales' tooltip-en='Social networks' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-redes-sociales' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div id='BarraNavegacion_MarcoRedesSociales'>".
                    "<div class='BarraPrincipal_BotonMenu' id='BarraNavegacion_MarcoRedesSociales_Facebook'>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-facebook' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='BarraPrincipal_BotonMenu' id='BarraNavegacion_MarcoRedesSociales_Twitter'>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-twitter' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='BarraPrincipal_BotonMenu' id='BarraNavegacion_MarcoRedesSociales_GooglePlus'>".Intro().
                        "<span class='IcoTexto'>".Intro().
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-gplus' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().                                        
                "</div>".Intro().
            "</div>".Intro().
                    
            /* Votación para el documento */
            "<div id='BarraNavegacion_Votacion' class='Menu_BotonCheck'>".Intro().
                "<input id='BarraNavegacion_Votacion_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_Votacion_Estado' tooltip-es='Valoración del documento' tooltip-en='Document valoration' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro().
                        "<span>".Intro(). // Span para la animación de la rotación
                            "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-votacion' />".Intro().
                        "</span>".Intro().                    
                    "</span>".Intro().
                "</div>".Intro().
                "<div id='BarraNavegacion_MarcoVotacion'>".
                    "<span></span>".Intro(). // Por favor puntúa este documento del 1 al 5
                    "<span></span>".Intro(). // De esta forma me ayudas a mejorar la web
                    "<div class='VotarDocumento_Estrellas'>".Intro().
                        "<button>1</button>".Intro().
                        "<button>2</button>".Intro().
                        "<button>3</button>".Intro().
                        "<button>4</button>".Intro().
                        "<button>5</button>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
            "</div>".Intro().                    
                    
            /* Lab Guardar */
            "<div id='BarraNavegacion_LabGuardar' tooltip-es='Guardar archivo' tooltip-en='Save file' tooltip-pos='R' class='BarraPrincipal_BotonMenu'>".Intro().
                "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-guardar' />".Intro().
            "</div>".Intro().
            "<div id='BarraNavegacion_LabGuardarCache' tooltip-es='Guardar cache explorador' tooltip-en='Save explorer cache' tooltip-pos='R' class='BarraPrincipal_BotonMenu'>".Intro().
                "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-guardar-cache' />".Intro().
            "</div>".Intro().
                    
/*            "<div id='BarraNavegacion_Encuesta' class='BarraPrincipal_BotonMenu'></div>".Intro().
            "<div id='BarraNavegacion_VentanaEncuesta' class='MarcoVentana-500'>".Intro().
                "<p>Te importaria tomarte 30 segundos para votar este contenido del 1 al 5??</p>".Intro().
                "<p>Si lo deseas tambien puedes mandarme por privado tus criticas y o sugerencias.</p>".Intro().
                "<p>Por último, si te ha gustado este documento puedes compartir-lo con tus amigos a traves de :</p>".Intro().
                "<p>Muchas gracias!</p>".Intro().
            "</div>".Intro().    */                                
        "</nav>".Intro().
                   
/*        "<nav id='BarraInferiorDerecha'>".Intro().
            "<div id='BarraInferiorDerecha_Cargando'><div></div><div></div></div>".Intro().
        "</nav>".Intro();*/
        
        $EsAdmin = "";
        if (devildrey33_Opciones::Administrador() > 0) $EsAdmin = " NoMostrar=true";
        echo "<div id='Logo'".$EsAdmin." class='AnimarLogo'>".
            "<div>D</div>".
            "<div>E</div>".
            "<div>V</div>".
            "<div>I</div>".
            "<div>L</div>".
            "<div>D</div>".
            "<div>R</div>".
            "<div>E</div>".
            "<div>Y</div>".
            "<div>&nbsp;</div>".
            "<div>3</div>".
            "<div>3</div>".
        "</div>".Intro().
        "<div id='MarcoNavegacion'>".Intro();
    }
    
    static public function HerramientasAdmin($Login, $Pass, $Loguear = TRUE) {
        $EstadoLogin = "No eres administrador";
        $HTMLAdmin = "";
        if ($Loguear === TRUE) $EstadoLogin = devildrey33_Opciones::Login($Login, $Pass);
        
        if (devildrey33_Opciones::Administrador() > 0) {            
            $MinHTML    = (devildrey33_Opciones::Minificar_HTML()   === 1) ? "true" : "false";
            $MinCSS     = (devildrey33_Opciones::Minificar_CSS()    === 1) ? "true" : "false";
            $MinJS      = (devildrey33_Opciones::Minificar_JS()     === 1) ? "true" : "false";
            $Consola    = (devildrey33_Opciones::MostrarConsola()   === 1) ? "true" : "false";
            $Cache      = (devildrey33_Opciones::ActualizarCache()  === 1) ? "true" : "false";
            $HTAccess = new devildrey33_htaccess;
            $ValHT = $HTAccess->ObtenerValores();
            $HTMLAdmin = "<input id='BarraPrincipal_Boton33_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_Boton33_Estado'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro().
                        "<img class='ImgSvg' src='/Web/SVG/Iconos50x50.svg#svg-marco33' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div id ='BarraPrincipal_Marco33'>".Intro().
                    "<ul class='TablaMarco33 TablaSesion33'>".Intro().
                        "<li>Administrador</li>".Intro().
                        "<li>"."<div id='CH_Admin' class='CheckBox' marcado='true' title='Desactiva el modo administrador'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                        "<li>Comprimir HTML</li>".Intro().
                        "<li>"."<div id='CH_HTML' class='CheckBox' marcado='".$MinHTML."' title='Comprime el HTML eliminando saltos de línea'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                        "<li>Comprimir CSS</li>".Intro().
                        "<li>"."<div id='CH_CSS' class='CheckBox' marcado='".$MinCSS."' title='Comprime el CSS eliminando comentarios, espacios, tabulaciones, y saltos de línea.'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                        "<li>Comprimir JS</li>".Intro().
                        "<li>"."<div id='CH_JS' class='CheckBox' marcado='".$MinJS."' title='Comprime el JS eliminando comentarios, espacios, tabulaciones, y saltos de línea.'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                        "<li>Actualizar Cache</li>".Intro().
                        "<li>"."<div id='CH_Actualizar' class='CheckBox' marcado='".$Cache."' title='Comprime los archivos JS y CSS para crear su version minificada.'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                        "<li>MostrarDebug</li>".Intro().
                        "<li>"."<div id='CH_Consola' class='CheckBox' marcado='".$Consola."' title='Muestra datos de depuración por la consola'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                    "</ul>".Intro();
            if (devildrey33_Opciones::Administrador() === 1) {
                $HTMLAdmin .= "<div class='ContenedorMarco33 TablaMarco33'>".Intro().
                        "<ul class='TablaHtaccess33'>".Intro().
                            "<li>Compresion gzip</li>".Intro().
                            "<li>"."<div id='CH_CompresionGZip' class='CheckBox' marcado='".$ValHT["CompresionGZip"]."' title='Todos los datos son comprimidos con gzip antes de ser enviados.'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                            "<li>Cache Imagenes</li>".Intro().
                            "<li>"."<div id='CH_CacheImagenes' class='CheckBox' marcado='".$ValHT["CacheImagenes"]."' title='Indica al navegador que puede cachear las imagenes durante un mes'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                            "<li>Mantenimiento</li>".Intro().
                            "<li>"."<div id='CH_Mantenimiento' class='CheckBox' marcado='".$ValHT["Mantenimiento"]."' title='Anula todas las urls y muestra un mensaje de mantenimiento.'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                            "<li>CheckSpelling</li>".Intro().
                            "<li>"."<div id='CH_CheckSpelling' class='CheckBox' marcado='".$ValHT["CheckSpelling"]."' title='Redirige una petición no encontrada a una url similar. \nPor ejemplo si vamos a /index2.php se redirige a /index.php automáticamente.'>"."<div></div>"."<div></div>"."</div>"."</li>".Intro().
                        "</ul>".Intro().
                        "<button class='Boton' id='CH_IPSBan' title='Elimina todas las ips baneadas de la lista'>Limpiar ips baneadas</button>".Intro().
                    "</div>".Intro();
            }
                    
            $HTMLAdmin .= "<div class='TablaMarco33 TablaGeneral'>".Intro().
//                        "<button class='Boton' id='CH_Entradas'>Editar Entradas</button>".Intro().
//                        "<button class='Boton' id='CH_Lab'>Explorar Lab</button>".Intro().
                        "<button class='Boton' id='CH_Logs'>Log</button>".Intro().
                        "<button class='Boton' id='CH_Stats'>Stats</button>".Intro().
                    "</div>".Intro().
                "</div>".Intro();
            
        }        
        return array("Mensaje" => $EstadoLogin, "HTMLAdmin" => $HTMLAdmin, "ExplorarLab" => devildrey33_Lab::MostrarCarpetaEjemplos());        
    }
    
    public function FinPlantilla() {
        echo "</div>".Intro();
       
        echo "</body></html>".Intro();
    }
    
    public function InicioBlog($NombreDocumento, $Titulo) {
        $this->_NombreDocumento = $NombreDocumento;
        $this->BD = new devildrey33_BD();
        echo "<article class='Blog' pagina='$NombreDocumento'>".Intro();        
        echo    "<header class='Cabecera' animar='true'>".Intro().
                    "<div class='Cabecera_Fondo Cabecera_Img".rand(1, 4)."'></div>".Intro().
                    "<div class='Cabecera_Datos'>".Intro();
        $this->LeerDatos($this->_NombreDocumento, $Titulo);
        echo        "</div>".Intro();
        echo    "</header>".Intro();
    }
    
    /* Los datos para la Documentación hay que leerlos de otra forma */
    public function InicioDoc($NombreDocumento, $Titulo) {
        $this->_NombreDocumento = $NombreDocumento;
        $this->BD = new devildrey33_BD();
        echo "<article class='Blog' pagina='$NombreDocumento'>".Intro();        
        echo    "<header class='Cabecera' animar='true'>".Intro().
                    "<div class='Cabecera_Fondo Cabecera_Img".rand(1, 4)."'></div>".Intro().
                    "<div class='Cabecera_Datos'>".Intro();
        $this->LeerDatosPathFalso($this->_NombreDocumento, $Titulo);
        echo        "</div>".Intro();
        echo    "</header>".Intro();
    }
    
    /* Si no hay cabecera no se acecde a la base de datos */
    public function InicioSinCabecera($NombreDocumento, $Titulo) {
        $this->_NombreDocumento = $NombreDocumento;
        $this->BD = new devildrey33_BD();
        echo "<article class='Blog' pagina='$NombreDocumento'>".Intro();        
/*        echo    "<div class='Cabecera Cabecera_Img".rand(1, 4)."'>";
        $this->LeerDatosPathFalso($NombreDocumento, $Titulo);
        echo    "</div>";        */
    }
    

    public function FinSinCabecera() {
        echo "</article>".Intro();        
    }

    public function FinBlog($EvitarComentarios = false, $SoloLectura = FALSE) {
/*        echo "<div id='VotarDocumento'>".Intro().
                "<div class='VotarDocumento postit'>".Intro().                
                    "<span></span>".Intro(). // Por favor puntúa este documento del 1 al 5
                    "<span></span>".Intro(). // De esta forma me ayudas a mejorar la web
                    "<div class='VotarDocumento_Estrellas'>".Intro().
                        "<button>1</button>".Intro().
                        "<button>2</button>".Intro().
                        "<button>3</button>".Intro().
                        "<button>4</button>".Intro().
                        "<button>5</button>".Intro().
                    "</div>".Intro().
                 "</div>".Intro();
             "</div>".Intro();*/
        
        echo "</article>".Intro();
        if ($EvitarComentarios === true) return;
        $Com = new devildrey33_Comentarios();
        $Com->AgregarComentarios($this->_NombreDocumento, $this->BD, $SoloLectura);
    }
    
    public function NavegadorNoCompatible($Navegador) {
        echo "<!DOCTYPE HTML>".
            "<html lang='es'>".
                "<head>".
                    "<title>devildrey33</title>".
                "</head>".
                "<body>".
                    "<p>El navegador ".$Navegador["Nombre"]." ".$Navegador["Version"]." No es compatible con esta web.</p>".
                "</body>".
            "</html>";
    }

    
    // Se utiliza al entrar en la web de una entrada
    public function LeerDatos($Archivo, $TituloH1) {
        $Entradas = new devildrey33_EditarEntradas();
        for ($i = 0; $i < $Entradas->Total(); $i++) {
            if (strpos($Archivo, $Entradas->Datos[$i]["URL"]) === 0) {
                $Dia = substr($Entradas->Datos[$i]["Fecha"], 0, 2);
                $Mes = Base::ObtenerMesStr(substr($Entradas->Datos[$i]["Fecha"], 3, 2));
                $Any = substr($Entradas->Datos[$i]["Fecha"], 6, 4);
                $Nombre = $Entradas->Datos[$i]["Titulo"];
//                echo $this->RedesSociales($Archivo, $Nombre);
                echo "<h1>".$TituloH1."</h1>".Intro();
                echo "<div class='FechaEntrada'>".Intro();
                echo $Dia." de ".$Mes." del ".$Any." por <b class='Autor'>".$Entradas->Datos[$i]["Autor"]."</b>".Intro();
                echo "<span>".$this->BD->ObtenerValoresEntrada($Archivo, true)."</span>".Intro();
                echo "<br />".Intro();
                echo $this->EnlazarTags($Entradas->Datos[$i]["Tags"]).Intro();
                echo "</div>".Intro();
                return;
            }
        }
    }
    
    // Se utiliza al entrar en la web de una entrada con un path falso (de momento PropiedadesCSS)
    public function LeerDatosPathFalso($Archivo, $TituloH1) {
        if (strpos($Archivo, "SelectorCSS_") !== FALSE) 	{
            $ArchivoSinEntrada = str_replace(array("SelectorCSS_", '(', ')'), array("../Documentacion/CSS/Selectores/", '', ''), $Archivo);
            $PathFalso = str_replace(array("SelectorCSS_", ".php"), array("Doc/CSS/Selectores/", ''), $Archivo);
        }
        else if (strpos($Archivo, "FunciónCSS_") !== FALSE) 	{
            $ArchivoSinEntrada = str_replace(array("FunciónCSS_", '(', ')'), array("../Documentacion/CSS/Funciones/", '', ''), $Archivo);
            $PathFalso = str_replace(array("FunciónCSS_", ".php"), array("Doc/CSS/Funciones/", ''), $Archivo);
            $PathFalso = str_replace(".php", "", $PathFalso);
        }
        else if (strpos($Archivo, "ReglaCSS_") !== FALSE) 	{
            $ArchivoSinEntrada = str_replace(array("ReglaCSS_", '(', ')'), array("../Documentacion/CSS/Reglas/", '', ''), $Archivo);
            $PathFalso = str_replace(array("ReglaCSS_", ".php"), array("Doc/CSS/Reglas/", ''), $Archivo);
            $PathFalso = str_replace(".php", "", $PathFalso);
        }
        else if (strpos($Archivo, "PropiedadCSS_") !== FALSE) 	{
            $ArchivoSinEntrada = str_replace(array("PropiedadCSS_", '(', ')'), array("../Documentacion/CSS/Propiedades/", '', ''), $Archivo);
            $PathFalso = str_replace(array("PropiedadCSS_", ".php"), array("Doc/CSS/Propiedades/", ''), $Archivo);
            $PathFalso = str_replace(".php", "", $PathFalso);
        }
        else {
            $ArchivoSinEntrada = $Archivo;
            $PathFalso = "/".$Archivo;
        }
        
//        echo $ArchivoSinEntrada
        
//			echo "<br />".$Archivo."<br />".$ArchivoSinEntrada;
        // No se ha encontrado la entrada en el XML (propiedad css)
//        if (file_exists($ArchivoSinEntrada)) $this->_Echo($this->RedesSociales($PathFalso, $TituloHead));
        echo "<h1>".$TituloH1."</h1>".Intro();		

//        echo $ArchivoSinEntrada;
        if (file_exists($ArchivoSinEntrada)) {
            echo "<div class='FechaEntrada'>".Intro();
            echo date("d", filemtime($ArchivoSinEntrada))." de ".Base::ObtenerMesStr(date("m", filemtime($ArchivoSinEntrada)))." del ".date("Y", filemtime($ArchivoSinEntrada))." por <b>Josep Antoni Bover</b>".Intro();
            echo "<span>".$this->BD->ObtenerValoresEntrada(str_replace("ó", "o", $Archivo), true)."</span><br />".Intro();
            echo $this->EnlazarTags(array('CSS')).Intro();
            echo "</div>".Intro();
        }
        else {
            echo "<div class='FechaEntrada'>$Archivo, $ArchivoSinEntrada no existe.</div>";
        }
    }    
    
    
    // SOLO SE UTILIZA en /Blog/ColoresCSS.php
    // Función para mostrar los iconos de los 5 navegadores para que se vea cuales son compatibles
    public function CompatibilidadNavegadores($Chrome = true, $FireFox = true, $Opera = true, $Safari = true, $IE = true) {
        echo "<div class='postit'>".Intro();
        if ($Chrome) 	echo "<div class='Navegador_Chrome' title='Google Chrome'></div>".Intro();
        else		echo "<div class='Navegador_Chrome Navegador_NoSoportado' title='Google Chrome NO SOPORTADO!!'></div>".Intro();

        if ($FireFox) 	echo "<div class='Navegador_FireFox' title='Mozilla FireFox'></div>".Intro();
        else		echo "<div class='Navegador_FireFox Navegador_NoSoportado' title='Mozilla FireFox NO SOPORTADO!!'></div>".Intro();

        if ($Opera) 	echo "<div class='Navegador_Opera' title='Opera'></div>".Intro();
        else		echo "<div class='Navegador_Opera Navegador_NoSoportado' title='Opera NO SOPORTADO!!'></div>".Intro();

        if ($Safari) 	echo "<div class='Navegador_Safari' title='Safari'></div>".Intro();
        else		echo "<div class='Navegador_Safari Navegador_NoSoportado' title='Safari NO SOPORTADO!!'></div>".Intro();

        if ($IE) 	echo "<div class='Navegador_IE' title='Internet Explorer'></div>".Intro();
        else            echo "<div class='Navegador_IE Navegador_NoSoportado' title='Internet Explorer NO SOPORTADO!!'></div>".Intro();
        echo "</div>".Intro();
        echo "<br />".Intro();
    }

    
    public function EnlazarTags($Tags) {
        $Ret = "Categorías : ";
        $Total = count($Tags);
        for ($i = 0; $i < $Total; $i++) {
            $URL = str_replace(" ", "-", trim($Tags[$i]));
            $Ret.= "<a href='http://".$_SERVER['SERVER_NAME']."/Categorias/".trim($URL)."'>".$Tags[$i]."</a>";
            if ($i != $Total - 1)   {	$Ret.=", "; }
            else                    {   $Ret.=".";  }
        }
        return $Ret;
    }
    
    
    /* Función que inserta en el html el o los liks a los archivos CSS necesarios para la web 
            NOTA : normalmente solo devuelve un link comprimido, pero en modo administrador si la opcion 'Minificar_CSS' es true, se añaden todos los links originales.
    */		
    public function Head_CSS() {
        if (devildrey33_Opciones::Minificar_CSS() == 0) {
            $ArrayCSS = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
            foreach ($ArrayCSS["css"] as $Archivo) 
                echo "<link rel='stylesheet' href='http://".$_SERVER["SERVER_NAME"]."/Web".$Archivo."' />".Intro();
        }
        else {
            echo "<link rel='stylesheet' href='http://".$_SERVER["SERVER_NAME"]."/Web/Cache/devildrey33.min.css' />".Intro();
        }
    }

    
    public function GenerarListaEntradasJS() {
        $EntradasBlog   = require dirname(__FILE__).'/Config/EntradasBlog.php';
        $EntradasDocCSS = require dirname(__FILE__).'/Config/EntradasDocCSS.php';
        //   Creo el archivo con la variable EntradasBlog para JavaScript
        if (filemtime(dirname(__FILE__).'/Config/EntradasBlog.php') > filemtime(dirname(__FILE__)."/Cache/EntradasBlog.js") ||
            filemtime(dirname(__FILE__).'/Config/EntradasDocCSS.php') > filemtime(dirname(__FILE__)."/Cache/EntradasBlog.js")) {
           // $Contador = 0;
            /* /Blog */
            foreach ($EntradasBlog as $Entrada) {
                /* Excluyo los tags del array para javascript (unos 4kb menos para el js final, de 17kb a 13kb) */
                $EntradaJS["Titulo"]  = $Entrada["Titulo"];
                $EntradaJS["URL"]     = $Entrada["URL"];
                $EntradaJS["Imagen"]  = $Entrada["Imagen"];
                $EntradaJS["Tipo"]    = $Entrada["Tipo"];
                $EntradaJS["Idioma"]  = $Entrada["Idioma"];
                $EntradasJS[] = $EntradaJS;
            }  
            /* /Doc/CSS */
            foreach ($EntradasDocCSS as $Entrada) {
                $EntradaJS["Tipo"]     = "DocCSS-".$Entrada["Grupo"];
                switch ($Entrada["Tipo"]) {
                    case 0 :    $IN = "Propiedad";  $IN2 = "/Doc/CSS/Propiedades/";  break;
                    case 1 : 	$IN = "Selector";   $IN2 = "/Doc/CSS/Selectores/";   break;
                    case 2 : 	$IN = "Función";    $IN2 = "/Doc/CSS/Funciones/";    break;
                    case 3 : 	$IN = "Regla";      $IN2 = "/Doc/CSS/Reglas/";       break;
                }
                if ($Entrada["Path"] != "") 
                    $EntradaJS["URL"]  = $IN2.$Entrada["Path"];
                else
                    $EntradaJS["URL"]  = $IN2.$Entrada["Nombre"];
                
                $EntradaJS["Titulo"]   = $IN." CSS : ".$Entrada["Nombre"];
                $EntradaJS["Idioma"]   = "es";
                $EntradasJS[] = $EntradaJS;
            }
            /* La raíz de DocCSS */
            $EntradaJS["Titulo"] = "Referéncia CSS : Colores";
            $EntradaJS["URL"]    = "Colores";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            $EntradaJS["Titulo"] = "Referéncia CSS : Degradados";
            $EntradaJS["URL"]    = "Degradados";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            $EntradaJS["Titulo"] = "Referéncia CSS : Funciones";
            $EntradaJS["URL"]    = "Funciones";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            $EntradaJS["Titulo"] = "Referéncia CSS : Propiedades";
            $EntradaJS["URL"]    = "Propiedades";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            $EntradaJS["Titulo"] = "Referéncia CSS : Reglas";
            $EntradaJS["URL"]    = "Reglas";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            $EntradaJS["Titulo"] = "Referéncia CSS : Selectores";
            $EntradaJS["URL"]    = "Selectores";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            $EntradaJS["Titulo"] = "Referéncia CSS : Unidades";
            $EntradaJS["URL"]    = "Unidades";
            $EntradaJS["Tipo"]   = "DocCSS";
            $EntradasJS[] = $EntradaJS;
            
            
            file_put_contents(dirname(__FILE__)."/Cache/EntradasBlog.js", "var EntradasBlog =".json_encode($EntradasJS));
        }                        
        
    }
    
    /* Función que inserta en el html el o los liks a los archivos JS necesarios para la web 
            NOTA : normalmente solo devuelve un link comprimido, pero en modo administrador si la opcion 'Minificar_JS' es true, se añaden todos los links de los scripts originales.
    */
    public function Head_JS() {
        $this->GenerarListaEntradasJS();                
        
        echo '<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>'.Intro();
        echo '<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.11.0/jquery-ui.min.js"></script>'.Intro();
        echo "<script type='text/javascript' src='https://www.google.es/jsapi'></script>".Intro();
        /* addons del codemirror */
        echo "<script src='http://".$_SERVER["SERVER_NAME"]."/Web/JS/codemirror.min.js'></script>".Intro();
        echo "<script src='http://".$_SERVER["SERVER_NAME"]."/Web/Cache/EntradasBlog.js'></script>".Intro();

        if (devildrey33_Opciones::Minificar_JS() == 0) {
            $ArrayCSS = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
            foreach ($ArrayCSS["js"] as $Archivo) {
                echo "<script src='http://".$_SERVER["SERVER_NAME"]."/Web".$Archivo."'></script>".Intro();
            }
        }
        else {
            echo "<script src='http://".$_SERVER["SERVER_NAME"]."/Web/Cache/devildrey33.min.js'></script>".Intro();
        }
        
        if (devildrey33_Opciones::Administrador() > 0) {
            echo "<script src='http://".$_SERVER["SERVER_NAME"]."/Web/JS/ObjetoAdmin.js'></script>".Intro().
                 "<script>\$Base.JSDinamico.push('ObjetoAdmin.js');</script>".Intro(); // Para que no lo cargue dinamicamente
        }
            
    }    
    
    /* Comprime los archivos JS y CSS */
    static public function Minificar_JS_CSS() {
        include("CSSMin.php");
        include("JSMin.php");
        
        $MinDebug = "\n";
        //$MinDebug = "";
        
        $ArrayMin = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
        $StringJS = "";
        foreach ($ArrayMin["js"] as $Archivo) {
            $JSMin = new JSMin(file_get_contents(dirname(__FILE__).$Archivo));
            $StringJS .= $JSMin->min().$MinDebug;
        }
        file_put_contents(dirname(__FILE__)."/Cache/devildrey33.min.js", $StringJS);
        
        $StringCSS = "";
        $CSSMin = new CSSmin;
        foreach ($ArrayMin["css"] as $Archivo) {
            $StringCSS .= $CSSMin->run(file_get_contents(dirname(__FILE__).$Archivo));            
        }
        file_put_contents(dirname(__FILE__)."/Cache/devildrey33.min.css", $StringCSS);
        
        return "Cache actualizada!";
    }

    
    
};
?>