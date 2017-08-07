<?php 

//echo "devildrey33\n";

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
include("devildrey33_Buscador.php");
include("devildrey33_Log.php");


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
    public      $EntradaBlog;                      // Contiene la lista de entradas del blog

    /* Constructor sin parametros, si hay que iniciar una plantilla ya se le suministraran el tipo y el nombre del documento en la misma función 
            Esto agilizara consultas ajax y de mensajeria que pasan por este constructor sin necesitar la mitad de cosas que se cargan.
    */
    public function __construct() {			
        // Actualizo la cache de los archivos JS y CSS si estoy en el servidor local.
        if (devildrey33_Opciones::$ServidorLocal === true) { $this->Minificar_JS_CSS (); }
        
        // Establezco si se mostraran o no los errores php en el mismo documento (por defecto se mostraran en un marco a parte de la web)
        ini_set("display_errors", devildrey33_Opciones::MostrarErroresPHP());

/*        if (devildrey33_Opciones::$ServidorLocal === TRUE && !isset($_SESSION["Opciones"]["ServidorLocal"])) {
            // En el modo local, si es la primera visita re-asigno los paths del archivo .htaccess 
            $_SESSION["Opciones"]["ServidorLocal"] = TRUE;
            devildrey33_htaccess::ReasignarPaths();
        }*/
        
        // Creo el objeto para pintar el código estático
        $this->PintarCodigo = new devildrey33_PintarCodigo;
    }
    
    public function CALLBACK_Shutdown() {
        $Log = Base::ObtenerLogPHP();
        if ($Log !== "") {
            echo "<div id='ErroresFinPlantilla'>".Intro().
                $Log.
            "</div>".Intro().
            "<script>\$Base.MostrarErroresPHP();</script>";
        }
    }
    // Inserta desde la etiqueta HTML hasta el inicio del body incluyendo el menu superior, publicidad y el banner    
    /* NombreDocumento ya no es necesaria, este parametro ahora se obtiene en las funciones InicioBlog, InicioDoc, InicioSinCabecera  */
    /* SOLO SE USA SI no se recibe un POST o un GET SinPlantilla */
    public function InicioPlantilla($NombreDocumento, $Titulo, $Meta = "") {
        register_shutdown_function(array($this, "CALLBACK_Shutdown"));

        $Entradas = new devildrey33_EditarEntradas;
        $this->EntradaBlog = $Entradas->BuscarEntrada($Titulo, $NombreDocumento);
        
/*        echo "<pre>";
        print_r($this->EntradaBlog);
        echo "</pre>";*/
        
        if (isset($_GET["GenerarCacheBuscador"]) || isset($_POST["SinPlantilla"])) {
            ob_start();
            return "";
        }
        $this->_NombreDocumento = $NombreDocumento;
        
        $Idioma = 'es';
        $Imagen = Base::URL_Raiz()."Web/Graficos/logo400.png";
        $Autor  = "Josep Antoni Bover";
        $URL    = Base::URL_Raiz();
        if ($this->EntradaBlog !== false) { 
            $Idioma = $this->EntradaBlog["Idioma"];
            $Titulo = $this->EntradaBlog["Titulo"];
            $Autor  = $this->EntradaBlog["Autor"];
            if ($this->EntradaBlog["Tipo"] === "Blog")    { $URL    = Base::URL_Raiz()."Blog/".$this->EntradaBlog["URL"];     }
            elseif ($this->EntradaBlog["Tipo"] === "Lab") { $URL    = Base::URL_Raiz()."Lab/".$this->EntradaBlog["URL"];      }
            else                                          { $URL    = Base::URL_Raiz().$this->EntradaBlog["URL"];             }
            $Imagen = Base::URL_Raiz()."Web/Graficos/250x200_".$this->EntradaBlog["Imagen"];
        }
        
        echo "<!DOCTYPE HTML>".Intro().
"<html lang='".$Idioma."'>".Intro().
    "<head>".Intro().
        "<title>".$Titulo."</title>".Intro().
        "<meta http-equiv='Content-Type' content='text/html; charset=utf-8' />".Intro().
//        "<meta name='viewport' content='width=device-width, initial scale=1'>".Intro().
        "<meta name='author' content='".$Autor."' />".Intro().
//            echo '<meta name="description" content="Página web dedicada al mundo de la programación, donde puedes encontrar información sobre HTML, CSS, JS, Ajax, jQuery, PHP, MySql, C/C++, Three.js, etc...." />'.Intro();
        "<meta name='twitter:card' content='summary' />".Intro().        
        "<meta name='twitter:site' content='@publisher_handle' />".Intro().        
        "<meta name='twitter:title' content=\"".$Titulo."\" />".Intro().        
//        "<meta name='twitter:description' content='Page description less than 200 characters'>".Intro().        
        "<meta name='twitter:creator' content='@author_handle' />".Intro().        
        /* Twitter Summary card images must be at least 200x200px */
        "<meta name='twitter:image' content='".$Imagen."' />".Intro().        

        /* Open Graph data */
        "<meta property='og:title' content=\"".$Titulo."\" />".Intro().        
        "<meta property='og:type' content='article' />".Intro().        
        "<meta property='og:url' content='".$URL."' />".Intro().        
        "<meta property='og:image' content='".$Imagen."' />".Intro().        
//        "<meta property='og:description' content='Description Here' />".Intro().        
        "<meta property='og:site_name' content='devildrey33' />".Intro();

//        }
                
        echo $Meta.Intro().    
        '<meta name="msapplication-config" content="none"/>'.Intro(). // Para que el explorer no busque el archivo BrowserConfig.xml de las pelotas.
        /* Manifest per android (https://developers.google.com/web/updates/2014/11/Support-for-installable-web-apps-with-webapp-manifest-in-chrome-38-for-Android) */
//        '<link rel="manifest" href="/manifest.json">'.Intro().
        "<link rel='shortcut icon' href='".Base::URL_Raiz()."Web/Graficos/devildrey33.ico' />".Intro();
//        "<link rel='alternate' type='application/rss+xml' title='RSS 2.0' href='http://devildrey33.es/rss.xml' />".Intro();
        $this->Head_CSS();      // Enlace/s de los estilos CSS
        $this->Head_JS();	// Enlace/s de los archivos JavaScript
        
        // Paso varios datos necesarios al JavaScript
        echo "<script>".Intro();
//        echo "try {".Intro();
        echo "\$Base.Raiz = '".Base::URL_Raiz()."'; ".Intro();
        echo "\$Base.RaizRelativa = '".Base::PathRelativo_Raiz()."'; ".Intro();
        // Evito que se carguen dinámicamente archivos CSS y JS del modo administrador
        if (devildrey33_Opciones::Administrador() > 0) {
            if (devildrey33_Opciones::Minificar_CSS() === 0) { // sin comprimir
                if (file_exists(dirname(__FILE__).'/Config/ArchivosMinify.php')) {
                    $ArrayCSS = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
                    foreach ($ArrayCSS["css-admin"] as $Archivo) {
                        echo "\$Base.CSSDinamico.push('".substr($Archivo, 5)."');".Intro();
                    }
                    foreach ($ArrayCSS["js-admin"] as $Archivo) {
                        echo "\$Base.JSDinamico.push('".substr($Archivo, 5)."');".Intro();
                    }
                }
//                echo "\$Base.CSSDinamico.push('Admin.css');".Intro();
            }
            echo "\$Base.CSSDinamico.push('devildrey33.admin.min.css');".Intro();                
            echo "\$Base.JSDinamico.push('devildrey33.admin.min.js');".Intro();                
        }
        if (devildrey33_Opciones::MostrarConsola() === 0) {  echo "\$Base.Debug(false);".Intro();   }
        else                                             {  echo "\$Base.Debug(true);".Intro();    } 
        echo "</script>".Intro().
    "</head>".Intro();
        
        if (devildrey33_Opciones::Administrador() > 0)     echo "<body administrador33=true>".Intro();
        else                                               echo "<body>".Intro();
        // Fix per mostrar la font Nova Mono correctament en el banner HexTunnel
        echo "<div style='font-family:Nova Mono; position:fixed; top:-100px'>NovaMonoFix</div>".Intro();
        
//        echo file_get_contents(Base::Path_Web()."SVG/Iconos50x50.svg");
        echo "<div id='ErroresPHP' mostrar='false'>".Intro().
            "<div id='ErroresPHP_Titulo'>Errores PHP</div>".Intro().
            "<div id='ErroresPHP_Cerrar'>X</div>".Intro().
            "<div id='ErroresPHP_Info'></div>".Intro().
        "</div>".Intro().
/*        "<div id='VentanaMensaje' class='MarcoVentana-350'><p></p><div class='Centrado'><button class='Boton-BoxShadow2'>Aceptar</button></div></div>".Intro().
        "<div id='VentanaError' class='MarcoVentana-350'><p></p><div class='Centrado'><button class='Boton-BoxShadow2'>Aceptar</button></div></div>".Intro().*/
        "<div id='VentanaLogin' class='MarcoVentana-250'>".Intro().
            "<table>".Intro().
              "<tr>"."<td>Usuario</td>"."<td>"."<input name='Usuario' type='text' id='devildrey33_Usuario' spellcheck='false' />"."</td>"."</tr>".Intro().
              "<tr>"."<td>Password</td>"."<td>"."<input name='Password' type='text' id='devildrey33_Password' />"."</td>"."</tr>".Intro().
            "</table>".Intro().
        "</div>".Intro().                
                
        // Menú lateral izquierdo 
        "<nav id='BarraPrincipal' class='SinSeleccion'>".Intro().
            "<input id='BarraPrincipal_Boton_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
            "<label class='Menu_Boton_Label' for='BarraPrincipal_Boton_Estado' tooltip-es='Menú principal' tooltip-en='Main menu' tooltip-pos='L'></label>".Intro().
            "<div class='Menu_Boton'>".Intro().
                "<div id='BarraPrincipal_Boton_Burguer'></div>".Intro().
            "</div>".Intro().
            "<div id='BarraPrincipal_Submenus'>".Intro().
                "<div id='BarraPrincipal_Fondo'></div>".Intro().
                // <!-- CSS -->
//                "<div class='Menu' mostrar='true'>".Intro().
                "<div class='Menu'>".Intro().
                    "<input id='BarraPrincipal_BotonCSS_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                    "<label class='Menu_Boton_Label' for='BarraPrincipal_BotonCSS_Estado' tooltip-es='CSS' tooltip-en='CSS' tooltip-pos='L'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-css' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='Menu_Marco' id='BarraPrincipal_MarcoCSS'>".Intro().
                        "<a href='/Doc/CSS/Colores'>Colores</a>".Intro().
                        "<a href='/Doc/CSS/Degradados'>Degradados</a>".Intro().
                        "<a href='/Doc/CSS/Unidades'>Unidades</a>".Intro().
                        "<a href='/Doc/CSS/Funciones'>Funciones</a>".Intro().
                        "<a href='/Doc/CSS/Reglas'>Reglas</a>".Intro().
                        "<a href='/Doc/CSS/Selectores'>Selectores</a>".Intro().
                        "<a href='/Doc/CSS/Propiedades'>Propiedades</a>".Intro().
                        "<a href='/Doc/CSS/Variables'>Variables</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- C / C++ -->
                "<div class='Menu'>".Intro().
//                "<div class='Menu' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonCPP_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                    "<label class='Menu_Boton_Label' for='BarraPrincipal_BotonCPP_Estado' tooltip-es='C/C++ en Windows' tooltip-en='C/C++ on Windows' tooltip-pos='L'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-cpp' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='Menu_Marco' id ='BarraPrincipal_MarcoCPP'>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_1_0'>Calculadora</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_2_0'>Snake</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_3_0'>Instalador</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_4'>Archivos DUMP</a>".Intro().
                        "<a href='/Blog/BubaTronik'>BubaTronik</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                // <!-- HTML -->
//                "<a href='/Categorias/HTML' class='Menu_Boton'><span>HTML</span></a>".
                // <!-- JS -->
                "<div class='Menu'>".Intro().
//                "<div class='Menu' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonJS_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                    "<label class='Menu_Boton_Label' for='BarraPrincipal_BotonJS_Estado' tooltip-es='JavaScript y jQuery' tooltip-en='JavaScript and jQuery' tooltip-pos='L'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-js' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='Menu_Marco' id='BarraPrincipal_MarcoJS'>".Intro().
                        "<a href='/Blog/Canvas2D_1'>Canvas 2D 1</a>".Intro().
                        "<a href='/Blog/Canvas2D_2'>Canvas 2D 2</a>".Intro().
                        "<a href='/Blog/Canvas2D_3'>Canvas 2D 3</a>".Intro().
                        "<a href='/Blog/Canvas2D_4'>Canvas 2D 4</a>".Intro().
                        "<a href='/Blog/devildrey33_ListaDesplegable_2-0'>Lista desplegable</a>".Intro().
                        "<a href='/Lab/Ejemplos/Solitario/Solitario.html'>Lab : Solitario HTML5</a>".Intro().                
                        "<a href='/Lab/Ejemplos/BannerTest/WormHole.html'>Lab : Adiestrando cubos</a>".Intro().                
                        "<a href='/Lab/Ejemplos/BannerTest/WormHole.html'>Lab : WormHole</a>".Intro().                
                        "<a href='/Lab/Ejemplos/BannerTest/WormHole.html'>Lab : Sinusoidal</a>".Intro().                
                    "</div>".Intro().
                "</div>".Intro().

                // <!-- PHP -->
                "<div class='Menu'>".Intro().
//                "<div class='Menu' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonPHP_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                    "<label class='Menu_Boton_Label' for='BarraPrincipal_BotonPHP_Estado' tooltip-es='PHP' tooltip-en='PHP' tooltip-pos='L'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-php' />".Intro().
                        "</span>".Intro().                
                    "</div>".Intro().
                    "<div class='Menu_Marco' id='BarraPrincipal_MarcoPHP'>".Intro().
                        "<a href='/Blog/Captcha1'>Captchas 1</a>".Intro().
                        "<a href='/Blog/Captcha2'>Captchas 2</a>".Intro().
                        "<a href='/Blog/Captcha3'>Captchas 3</a>".Intro().
                        "<a href='/Blog/resaltar-sintaxis-codigo-fuente'>Resaltar sintaxis de un código fuente</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- Buscar -->
                "<div class='Menu'>".Intro().
//                "<div class='Menu' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonBuscar_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                    "<label class='Menu_Boton_Label' for='BarraPrincipal_BotonBuscar_Estado' tooltip-es='Buscar' tooltip-en='Search' tooltip-pos='L'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-buscar' />".Intro().
                        "</span>".Intro().
//                        "<span class='IcoLupa20x20'></span>". // <!-- lupa a morphejar -->
                    "</div>".Intro().
                    "<div class='Menu_Marco' id='BarraPrincipal_MarcoBuscar'>".Intro().
                        "<input type='text' name='Search' id='BarraPrincipal_MarcoBuscar_Edit' placeholder='Texto a buscar..' required>".Intro().
                        "<div id='BarraPrincipal_MarcoBuscar_BotonBuscar'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-buscar' />".Intro().
//                               "<span class='IcoLupa20x20'></span>".Intro().
                        "</div>".Intro().
                        "<div id='BarraPrincipal_MarcoBuscar_Resultado'></div>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- Sobre devildrey33 -->
/*                "<div class='Menu'>".Intro().                    
                    "<a href='".Base::URL_Raiz()."Sobre-el-autor' id='SobreDevildrey33' class='Menu_Boton' tooltip-es='Sobre el autor' tooltip-en='About devildrey33' tooltip-pos='L'>".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-logo' />".Intro().
                    "</a>".Intro().
                "</div>".Intro().*/
                

            "</div>".Intro().
            "<div id='Marco33' class='Menu' mostrar='true'>".Intro(); // Marco que contiene las herramientas de administrador
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
            "<a href='/' id='BarraNavegacion_Cerrar' tooltip-es='Volver al indice principal' tooltip-en='Return to main index' tooltip-pos='R' class='Menu_Boton'>".Intro().
                "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-indice' />".Intro().
            "</a>".Intro().
            /* Lab Ver */
            "<div id ='BarraNavegacion_LabVer' class='Menu'  mostrar='true'>".Intro().
                "<input id='BarraNavegacion_BotonVer_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraNavegacion_BotonVer_Estado' tooltip-es='Vista del editor' tooltip-en='Editor's view' tooltip-pos='R'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz' id='BarraNavegacion_Lab_IconoVer'>".Intro().
/*                        "<span></span>".Intro().  */
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-filas' />".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-columnas' />".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-codigo' />".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-preview' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div class='Menu_Marco' id ='BarraNavegacion_LabMarcoVer'>".Intro().                                       
                    "<input id='Lab_VerFilas_Estado' class='Menu_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Filas' tooltip-en='Rows' tooltip-pos='B' class='Menu_Boton_Label Lab_BotonVerFilas' for='Lab_VerFilas_Estado'></label>".Intro().                    
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-filas' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().

                    "<input id='Lab_VerColumnas_Estado' class='Menu_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Columnas' tooltip-en='Columns' tooltip-pos='B' class='Menu_Boton_Label Lab_BotonVerColumnas' for='Lab_VerColumnas_Estado'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-columnas' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    
                    "<input id='Lab_VerCodigo_Estado' class='Menu_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Código' tooltip-en='Code' tooltip-pos='B' class='Menu_Boton_Label Lab_BotonVerCodigo' for='Lab_VerCodigo_Estado'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-codigo' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    
                    "<input id='Lab_VerPreview_Estado' class='Menu_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Ver Pre-visualización' tooltip-en='Preview' tooltip-pos='B' class='Menu_Boton_Label Lab_BotonVerPreview' for='Lab_VerPreview_Estado'></label>".Intro().
                    "<div class='Menu_Boton'>".Intro().
                        "<span class='Menu_Boton_Cruz' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-vista-preview' sinopacidad='true' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    
/*                    "<div><span>Filas</span></div>".Intro().
                    "<div><span>Columnas</span></div>".Intro().
                    "<div><span>Código</span></div>".Intro().
                    "<div><span>Resultado</span></div>".Intro().*/
                "</div>".Intro().
            "</div>".Intro().
                    
            /* Lab explorar */
            "<div id='BarraNavegacion_LabExplorar' class='Menu' mostrar='true'>".Intro().                    
                "<input id='BarraNavegacion_BotonExplorar_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraNavegacion_BotonExplorar_Estado' tooltip-es='Explorar ejemplos' tooltip-en='Examples explorer' tooltip-pos='R'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz'>".Intro(). 
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-explorar-lab' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                    
                    
//                "<span class='Menu_Boton_Cruz'>Ejem</span>".Intro().
                "<div class='Menu_Marco' id ='BarraNavegacion_LabMarcoExplorador'>".Intro().
                     "<div class='Lab_Explorador SinSeleccion' id='BarraNavegacion_Explorador'>".Intro();
            if (devildrey33_Opciones::Administrador() > 0) { echo devildrey33_Lab::MostrarCarpetaEjemplos(); }
            else                                           { echo devildrey33_Lab::LeerCache(); }
            echo    "</div>".Intro().
                "</div>".Intro().                                        
            "</div>".Intro().
                    
            /* Blog Subindice */
            /* NOTA!! va el primero porque puede tener un tamaño muy grande, y asi aprovecha el máximo de altura*/
            "<div id='BarraNavegacion_Indice' class='Menu' mostrar='true'>".Intro().
                "<input id='BarraNavegacion_Indice_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraNavegacion_Indice_Estado' tooltip-es='Secciones del documento' tooltip-en='Document sections' tooltip-pos='R'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz'>".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-sub-indice' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div class='Menu_Marco' id='BarraNavegacion_SubIndice'></div>".Intro().
            "</div>".Intro().
                    
            /* Prev / Next (navegación) */
            "<div id='BarraNavegacion_NextPrev' class='Menu' mostrar='true'>".Intro().
                "<input id='BarraNavegacion_PrevNext_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraNavegacion_PrevNext_Estado' tooltip-es='Navegación por el Blog' tooltip-en='Navigate' tooltip-pos='R'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz'>".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-lista' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div class='Menu_Marco' id='BarraNavegacion_MarcoNextPrev'>".
                    "<button class='BotonSvg-Normal' id='BarraNavegacion_MarcoNextPrev_Prev'><img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-prev'></button>".Intro().
                    "<button class='BotonSvg-Normal' id='BarraNavegacion_MarcoNextPrev_Desc'>"."</button>".Intro().
                    "<button class='BotonSvg-Normal' id='BarraNavegacion_MarcoNextPrev_Next'><img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-next'></button>".Intro().
                   
                "</div>".Intro().
            "</div>".Intro().
                    
                    
            /* Redes sociales */
            "<div id='BarraNavegacion_RedesSociales' class='Menu' mostrar='true'>".Intro().
                "<input id='BarraNavegacion_RedesSociales_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraNavegacion_RedesSociales_Estado' tooltip-es='Redes sociales' tooltip-en='Social networks' tooltip-pos='R'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz'>".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-redes-sociales' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div class='Menu_Marco' id='BarraNavegacion_MarcoRedesSociales'>".
                    "<div class='Menu_Boton' id='BarraNavegacion_MarcoRedesSociales_Facebook' tooltip-es='Facebook' tooltip-en='Facebook' tooltip-pos='T'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-facebook' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='Menu_Boton' id='BarraNavegacion_MarcoRedesSociales_Twitter' tooltip-es='Twitter' tooltip-en='Twitter' tooltip-pos='T'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-twitter' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().
                    "<div class='Menu_Boton' id='BarraNavegacion_MarcoRedesSociales_GooglePlus' tooltip-es='Google plus' tooltip-en='Google plus' tooltip-pos='T'>".Intro().
                        "<span class='Menu_Boton_Cruz'>".Intro().
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-gplus' />".Intro().
                        "</span>".Intro().
                    "</div>".Intro().                                        
                "</div>".Intro().
            "</div>".Intro().
                    
            /* Votación para el documento */
            "<div id='BarraNavegacion_Votacion' class='Menu'>".Intro().
                "<input id='BarraNavegacion_Votacion_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraNavegacion_Votacion_Estado' tooltip-es='Valoración del documento' tooltip-en='Document valoration' tooltip-pos='R'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz'>".Intro().
                        "<span>".Intro(). // Span para la animación de la rotación
                            "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-votacion' />".Intro().
                        "</span>".Intro().                    
                    "</span>".Intro().
                "</div>".Intro().
                "<div class='Menu_Marco' id='BarraNavegacion_MarcoVotacion'>".
                    "<span></span>".Intro(). // Por favor puntúa este documento del 1 al 5
                    "<span></span>".Intro(). // De esta forma me ayudas a mejorar la web
                    "<div class='VotarDocumento_Estrellas'>".Intro().
                        "<button class='Boton-Normal'>1</button>".Intro().
                        "<button class='Boton-Normal'>2</button>".Intro().
                        "<button class='Boton-Normal'>3</button>".Intro().
                        "<button class='Boton-Normal'>4</button>".Intro().
                        "<button class='Boton-Normal'>5</button>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
            "</div>".Intro().                    
                    
            /* Lab Guardar */
            "<div id='BarraNavegacion_LabGuardar' tooltip-es='Guardar archivo' tooltip-en='Save file' tooltip-pos='R' class='Menu_Boton'>".Intro().
                "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-guardar' />".Intro().
            "</div>".Intro().
            "<div id='BarraNavegacion_LabGuardarCache' tooltip-es='Guardar cache explorador' tooltip-en='Save explorer cache' tooltip-pos='R' class='Menu_Boton'>".Intro().
                "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-guardar-cache' />".Intro().
            "</div>".Intro().
                    
        "</nav>".Intro();
                   
/*        "<nav id='BarraInferiorDerecha'>".Intro().
            "<div id='BarraInferiorDerecha_Cargando'><div></div><div></div></div>".Intro().
        "</nav>".Intro();*/
        
//        $EsAdmin = "";
//        if (devildrey33_Opciones::Administrador() > 0) $EsAdmin = " NoMostrar=true";
        
//        echo "<div id='Logo'".$EsAdmin." class='AnimarLogo SinSeleccion'>".
        echo "<div id='Logo' class='AnimarLogo SinSeleccion'>".
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
            $MinHTML        = (devildrey33_Opciones::Minificar_HTML()     === 1) ? "true" : "false";
            $MinCSS         = (devildrey33_Opciones::Minificar_CSS()      === 1) ? "true" : "false";
            $MinJS          = (devildrey33_Opciones::Minificar_JS()       === 1) ? "true" : "false";
            $Consola        = (devildrey33_Opciones::MostrarConsola()     === 1) ? "true" : "false";
            $PHPDebug       = (devildrey33_Opciones::MostrarErroresPHP()  === 1) ? "true" : "false";
            $BorrarPHP      = (devildrey33_Opciones::BorrarLogPHP()       === 1) ? "true" : "false";
            $Cache          = (devildrey33_Opciones::ActualizarCache()    === 1) ? "true" : "false";
            $PausarBanner   = (devildrey33_Opciones::Banner_Pausar()      === 1) ? "true" : "false";
            $MostrarFPS     = (devildrey33_Opciones::Banner_MostrarFPS()  === 1) ? "true" : "false";
            $ValHT = devildrey33_htaccess::ObtenerValores();
            $HTMLAdmin = "<input id='BarraPrincipal_Boton33_Estado' class='Menu_Boton_Input' type='checkbox' />".Intro().
                "<label class='Menu_Boton_Label' for='BarraPrincipal_Boton33_Estado' tooltip-es='Administración' tooltip-en='Administration' tooltip-pos='L'></label>".Intro().
                "<div class='Menu_Boton'>".Intro().
                    "<span class='Menu_Boton_Cruz'>".Intro().
                        "<img class='Menu_Boton_SVG' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-marco33' />".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div class='Menu_Marco' id='BarraPrincipal_Marco33'>".Intro().
                    "<table class='MarcoOpciones2C MarcoOpcionesBorde' titulo='Sesión'>".Intro().
                        "<tr>".Intro().
                            "<td>Administrador</td>".Intro().
                            "<td><div id='CH_Admin' class='CheckBox' marcado='true' title='Desactiva el modo administrador'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Comprimir HTML</td>".Intro().
                            "<td>"."<div id='CH_HTML' class='CheckBox' marcado='".$MinHTML."' title='Comprime el HTML eliminando saltos de línea'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Comprimir CSS</td>".Intro().
                            "<td>"."<div id='CH_CSS' class='CheckBox' marcado='".$MinCSS."' title='Comprime el CSS eliminando comentarios, espacios, tabulaciones, y saltos de línea.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Comprimir JS</td>".Intro().
                            "<td>"."<div id='CH_JS' class='CheckBox' marcado='".$MinJS."' title='Comprime el JS eliminando comentarios, espacios, tabulaciones, y saltos de línea.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
/*                        "<tr>".Intro().
                            "<td>Actualizar Cache</td>".Intro().
                            "<td>"."<div id='CH_Actualizar' class='CheckBox' marcado='".$Cache."' title='Comprime los archivos JS y CSS para crear su version minificada.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().*/
                        "<tr>".Intro().
                            "<td>Mostrar Debug PHP</td>".Intro().
                            "<td>"."<div id='CH_DebugPHP' class='CheckBox' marcado='".$PHPDebug."' title='Muestra las advertencias y errores php en el mismo output'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Borrar Debug PHP</td>".Intro().
                            "<td>"."<div id='CH_BorrarPHP' class='CheckBox' marcado='".$BorrarPHP."' title='Elimina el archivo log con los errores PHP antes de ejecutar código'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                    "</table>".Intro();
                    
//                    "<div>".Intro().
            

            if (devildrey33_Opciones::Administrador() === 1) {
                $HTMLAdmin .= 
                    "<div class='MarcoOpcionesBorde' titulo='.htaccess'>".Intro().
                        "<table class='MarcoOpciones2C'>".Intro().
                            "<tr>".Intro().
                                "<td>Compresion gzip</td>".Intro().
                                "<td>"."<div id='CH_CompresionGZip' class='CheckBox' marcado='".$ValHT["CompresionGZip"]."' title='Todos los datos son comprimidos con gzip antes de ser enviados.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                            "</tr>".Intro().
                            "<tr>".Intro().
                                "<td>Cache Imagenes</td>".Intro().
                                "<td>"."<div id='CH_CacheImagenes' class='CheckBox' marcado='".$ValHT["CacheImagenes"]."' title='Indica al navegador que puede cachear las imagenes durante un mes'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                            "</tr>".Intro().
                            "<tr>".Intro().
                                "<td>Mantenimiento</td>".Intro().
                                "<td>"."<div id='CH_Mantenimiento' class='CheckBox' marcado='".$ValHT["Mantenimiento"]."' title='Anula todas las urls y muestra un mensaje de mantenimiento.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                            "</tr>".Intro().
                            "<tr>".Intro().
                                "<td>CheckSpelling</td>".Intro().
                                "<td>"."<div id='CH_CheckSpelling' class='CheckBox' marcado='".$ValHT["CheckSpelling"]."' title='Redirige una petición no encontrada a una url similar. \nPor ejemplo si vamos a /index2.php se redirige a /index.php automáticamente.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                            "</tr>".Intro().
                            "<tr>".Intro().
                                "<td>Cors</td>".Intro().
                                "<td>"."<div id='CH_Cors' class='CheckBox' marcado='".$ValHT["Cors"]."' title='Habilita / des-habilita el Cross Origin Resource Sharing.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                            "</tr>".Intro().
                        "</table>".Intro().
                        "<button class='Boton-Normal' id='CH_IPSBan' title='Elimina todas las ips baneadas de la lista'>Limpiar ips baneadas</button>".Intro().
                    "</div>".Intro();
            }
            
            $HTMLAdmin.= 
                    "<table class='MarcoOpciones2C MarcoOpcionesBorde' titulo='JavaScript'>".Intro().
                        "<tr>".Intro().
                            "<td>Mostrar Debug JS</td>".Intro().
                            "<td>"."<div id='CH_Consola' class='CheckBox' marcado='".$Consola."' title='Muestra datos de depuración por la consola'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                    "</table>".Intro();
            
            $HTMLAdmin.= 
                    "<table class='MarcoOpciones2C MarcoOpcionesBorde' titulo='Banners JS'>".Intro().
                        "<tr>".Intro().
                            "<td>Pausar</td>".
                            "<td>"."<div id='CH_PausarBanner' class='CheckBox' marcado='".$PausarBanner."' title='Desactiva el banner cuando no está visible o cuando la pestaña pierde el foco.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Mostrar FPS</td>".
                            "<td>"."<div id='CH_MostrarFPS' class='CheckBox' marcado='".$MostrarFPS."' title='Desactiva el banner cuando no está visible o cuando la pestaña pierde el foco.'>"."<div></div>"."<div></div>"."</div>"."</td>".Intro().
                        "</tr>".Intro().
                    "</table>".Intro();
            
//                    "</div>".Intro();
                    
            $HTMLAdmin .= 
                    "<div class='MarcoOpcionesBorde_Botones' titulo='Varios PHP'>".Intro().
//                        "<button class='Boton' id='CH_Entradas'>Editar Entradas</button>".Intro().
//                        "<button class='Boton' id='CH_Lab'>Explorar Lab</button>".Intro().
                        "<button class='Boton-Normal' id='CH_Logs' "             . "title='Log de visitas del servidor'>Log de visitas</button>".Intro().
                        "<button class='Boton-Normal' id='CH_Minificar' "        . "title='Comprime los archivos css y js para la versión release de la web'>Minificar JS y CSS</button>".Intro().
                        "<button class='Boton-Normal' id='CH_Stats' "            . "title='Estadisticas de la base de datos'>Stats de la BD</button>".Intro().
                        "<button class='Boton-Normal' id='CH_PhpInfo' "          . "title='Información de la versión PHP del servidor actual'>Info servidor PHP</button>".Intro().
                        "<button class='Boton-Normal' id='CH_GenCacheBuscador' " . "title='Generar array de palabras cache para el buscador de la web'>Generar cache para el Buscador</button>".Intro().
                    "</div>".Intro().
                "</div>".Intro(); // #BarraPrincipal_Marco33
            
        }        
        // La función para loguear se utiliza tanto via ajax como al iniciar, por lo que tengo que pasar los errores PHP SOLO desde ajax.
        // Si añado los errores en la misma función de HerramientasAdmin se borraria una parte del log de errores al loguear desde devildrey33.php
        // En definitiva no hay que utilizar Base::ObtenerLogPHP() desde esta función
        return array("Estado" => $EstadoLogin, "HTMLAdmin" => $HTMLAdmin, "ExplorarLab" => devildrey33_Lab::MostrarCarpetaEjemplos());        
    }
    
    public function FinPlantilla() {
        if (isset($_POST["SinPlantilla"]) || isset($_GET["GenerarCacheBuscador"])) {
            $HTML = ob_get_contents();
            ob_end_clean();            
            echo json_encode(array("HTML" => $HTML, "ErroresPHP" => Base::ObtenerLogPHP(), "Estado" => 0));
            return;
        }
                        
        echo "</div>".Intro();
        echo "</body>".Intro()."</html>";        
    }
    
    public function InicioBlog($NombreDocumento, $Titulo, $AlinearImagenDerecha = FALSE) {
        $this->_NombreDocumento = $NombreDocumento;
        $this->BD = new devildrey33_BD();
        echo "<article class='Blog' pagina='$NombreDocumento'>".Intro();        
            echo    "<header id='Cabecera' animar='true'>".Intro().
                        "<div id='Cabecera_Stats'>0 FPS</div>".Intro().
//                        "<canvas id='Cabecera_Canvas'></canvas>".Intro().
                        "<div class='Cabecera_Datos'>".Intro();
            $this->LeerDatos($this->_NombreDocumento, $Titulo);
            echo        "</div>".Intro();
            echo        "<div id='Cabecera_AutorAni' class='SinSeleccion'>".Intro().
                            "<div class='BotonVentana' onclick='\$Base.Banner(-1);'><img class='' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-prev'></div>".Intro().
                            "<div id='CabeceraAutorAni_HTML'></div>".Intro().
                            "<div class='BotonVentana' onclick='\$Base.Banner(-2);'><img class='' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-next'></div>".Intro().
                        "</div>".Intro();
            echo        "<div id='Cabecera_PausaAni'>La web está en segundo plano, animación en pausa.</div>";
            echo        "<div id='Cabecera_Cargando'>Cargando animación...</div>";
            echo    "</header>".Intro();
            if ($AlinearImagenDerecha === FALSE) 
                echo "<img class='ImagenPortada' src='".Base::URL_Graficos()."250x200_".$this->EntradaBlog["Imagen"]."' alt='$Titulo' />".Intro();
            else 
                echo "<img class='ImagenPortada2' src='".Base::URL_Graficos()."250x200_".$this->EntradaBlog["Imagen"]."' alt='$Titulo' />".Intro();
    }
    
    /* Los datos para la Documentación hay que leerlos de otra forma */
    public function InicioDoc($NombreDocumento, $Titulo) {
        $this->_NombreDocumento = $NombreDocumento;
        $this->BD = new devildrey33_BD();
        echo "<article class='Blog' pagina='$NombreDocumento'>".Intro();        
//        if (!isset($_GET["GenerarCacheBuscador"])) {
            echo    "<header id='Cabecera' animar='true'>".Intro().
                        "<div id='Cabecera_Stats'>0 FPS</div>".Intro().
                        "<div class='Cabecera_Datos'>".Intro();
        $this->LeerDatosPathFalso($this->_NombreDocumento, $Titulo);
            echo        "</div>".Intro();
            echo        "<div id='Cabecera_AutorAni' class='SinSeleccion'>".Intro().
                            "<div class='BotonVentana' onclick='\$Base.Banner(-1);'><img class='' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-prev'></div>".Intro().
                            "<div id='CabeceraAutorAni_HTML'></div>".Intro().
                            "<div class='BotonVentana' onclick='\$Base.Banner(-2);'><img class='' src='".Base::URL_Web()."SVG/Iconos50x50.svg#svg-next'></div>".Intro().
                        "</div>".Intro();
            echo        "<div id='Cabecera_PausaAni'>La web está en segundo plano, animación en pausa.</div>";
            echo        "<div id='Cabecera_Cargando'>Cargando animación...</div>";
            
            echo    "</header>".Intro();
//        }
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
        if ($EvitarComentarios === true || isset($_GET["GenerarCacheBuscador"])) return;
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
            $Ret.= "<a href='".Base::URL_Raiz()."Categorias/".trim($URL)."'>".$Tags[$i]."</a>";
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
            if (file_exists(dirname(__FILE__).'/Config/ArchivosMinify.php')) {
                $ArrayCSS = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
                $Raiz = "/".str_replace("\\", "/", substr(dirname(__FILE__), strlen($_SERVER["DOCUMENT_ROOT"])));
                foreach ($ArrayCSS["css"] as $Archivo) {
                    echo "<link rel='stylesheet' href='".Base::URL_Web().substr($Archivo, 1)."' />".Intro();                
                }
                if (devildrey33_Opciones::Administrador() > 0) {                                        
                    foreach ($ArrayCSS["css-admin"] as $Archivo) {
                        echo "<link rel='stylesheet' href='".Base::URL_Web().substr($Archivo, 1)."' />".Intro();                
                    }                    
                }
            }
            else {
                error_log("<span style='color:red'>Error!</span> devildrey33::Head_CSS -> no se encuentra el archivo '/Config/ArchivosMinify.php'");
            }                
        }
        else {
            echo "<link rel='stylesheet' href='".Base::URL_Cache()."devildrey33.min.css' />".Intro();
            if (devildrey33_Opciones::Administrador() > 0) {                                        
                echo "<link rel='stylesheet' href='".Base::URL_Cache()."devildrey33.admin.min.css' />".Intro();
            }
        }
    }

    
    public function GenerarListaEntradasJS() {
        if (file_exists(dirname(__FILE__).'/Config/EntradasBlog.php') === false) {
            error_log("<div style='color:red'>No existe el archivo '/Config/EntradasBlog.php' !!! (devildrey33::GenerarListaEntradasJS)</div>");
            return;
        }
        $EntradasBlog   = require dirname(__FILE__).'/Config/EntradasBlog.php';
        if (file_exists(dirname(__FILE__).'/Config/EntradasDocCSS.php') === false) {
            error_log("<div style='color:red'>No existe el archivo '/Config/EntradasDocCSS.php' !!!</div>");
            return;
        }
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
                switch ($Entrada["TipoCSS"]) {
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
//        $Raiz = "/".str_replace("\\", "/", substr(dirname(__FILE__), strlen($_SERVER["DOCUMENT_ROOT"])));
        if (devildrey33_Opciones::Minificar_JS() == 0) { // jQuery sin minificar        
            echo '<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.js"></script>'.Intro();
            echo '<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.js"></script>'.Intro(); // Para la barra separadora del lab
        }
        else {
            echo '<script src="//ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>'.Intro();
            echo '<script src="//ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>'.Intro(); // Para la barra separadora del lab
        }
//        echo "<script type='text/javascript' src='https://www.google.es/jsapi'></script>".Intro(); // json api?
        /* addons del codemirror */
        echo "<script src='".Base::URL_JS()."3rdParty/codemirror.min.js'></script>".Intro();
        /* Three js */
        if (devildrey33_Opciones::Minificar_JS() == 0) { // Three.js sin minificar
            echo "<script src='".Base::URL_JS()."3rdParty/three-0.84.js'></script>".Intro();
        }
        else {
            echo "<script src='".Base::URL_JS()."3rdParty/three-0.84.min.js'></script>".Intro();            
        }
//        echo "<script src='".Base::URL_JS()."3rdParty/tweenjs-0.6.2.min.js'></script>".Intro();
//        echo "<script src='".Base::URL_JS()."3rdParty/stats.min.js'></script>".Intro();
        
        echo "<script src='".Base::URL_Cache()."EntradasBlog.js'></script>".Intro();

        if (devildrey33_Opciones::Minificar_JS() == 0) {
            if (file_exists(dirname(__FILE__).'/Config/ArchivosMinify.php')) {
                $ArrayCSS = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
                foreach ($ArrayCSS["js"] as $Archivo) {
                    echo "<script src='".Base::URL_Web().substr($Archivo, 1)."'></script>".Intro();
                }            
                
                if (devildrey33_Opciones::Administrador() > 0) {                        
                    foreach ($ArrayCSS["js-admin"] as $Archivo) {
                        echo "<script src='".Base::URL_Web().substr($Archivo, 1)."'></script>".Intro();
                    }            
                }                
            }
            else { 
                error_log("<span style='color:red'>Error!</span> devildrey33::Head_JS -> el archivo '/Config/ArchivosMinify.php' no existe.");
            }
        }
        else {
            echo "<script src='".Base::URL_Cache()."devildrey33.min.js'></script>".Intro();
            if (devildrey33_Opciones::Administrador() > 0) {                        
                echo "<script src='".Base::URL_Cache()."devildrey33.admin.min.js'></script>".Intro().
                     "<script>\$Base.JSDinamico.push('devildrey33.admin.min.js');</script>".Intro(); // Añado el admin a la lista de archivos javascript dinámicos, para que nadie añada luego el objeto admin desde javascript                
            }
        }            
    }    
    
    /* Comprime los archivos JS y CSS */
    static public function Minificar_JS_CSS() {
        if (file_exists(dirname(__FILE__).'/Config/ArchivosMinify.php')) {
            include("CSSMin.php");
            include("JSMin.php");

            $MinDebug = "\n";
            $ArrayMin = (require dirname(__FILE__).'/Config/ArchivosMinify.php');
            /* Archivo JS minificado */
            $StringJS = "";
            foreach ($ArrayMin["js"] as $Archivo) {
                $JSMin = new JSMin(file_get_contents(dirname(__FILE__).$Archivo));
                $StringJS .= $JSMin->min().$MinDebug;
            }
            file_put_contents(dirname(__FILE__)."/Cache/devildrey33.min.js", $StringJS);
            
            /* Archivo JS minificado para administradores */
            $StringJS = "";
            foreach ($ArrayMin["js-admin"] as $Archivo) {
                $JSMin = new JSMin(file_get_contents(dirname(__FILE__).$Archivo));
                $StringJS .= $JSMin->min().$MinDebug;
            }
            file_put_contents(dirname(__FILE__)."/Cache/devildrey33.admin.min.js", $StringJS);

            
            /* Archivo CSSS minificado */
            $StringCSS = "";
            $CSSMin = new CSSmin;
            foreach ($ArrayMin["css"] as $Archivo) {
                $StringCSS .= $CSSMin->run(file_get_contents(dirname(__FILE__).$Archivo));            
            }
            file_put_contents(dirname(__FILE__)."/Cache/devildrey33.min.css", $StringCSS);
            
            /* Archivo JS minificado para administradores */
            $StringCSS = "";
            $CSSMin = new CSSmin;
            foreach ($ArrayMin["css-admin"] as $Archivo) {
                $StringCSS .= $CSSMin->run(file_get_contents(dirname(__FILE__).$Archivo));            
            }
            file_put_contents(dirname(__FILE__)."/Cache/devildrey33.admin.min.css", $StringCSS);

            return "Cache actualizada!";
        }
        else {
            error_log("<span style='color:red'>Error!</span> devildrey33::Minificar_JS_CSS -> el archivo '/Config/ArchivosMinify.php' no existe.");
            return "Error del servidor";
        }
    }

};

?>