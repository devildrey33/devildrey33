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
        
        // SVG's (de moment tots tenen color blanc de fondo
        '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display: none;">'.Intro().
            // Home
            '<g id="svg-home">'.Intro().
             	'<path d="M39.108,18.186c-0.379,0.607-1.03,0.941-1.697,0.941c-0.36,0-0.729-0.098-1.059-0.304L19.707,8.428L3.061,18.824 c-0.938,0.586-2.172,0.3-2.756-0.638c-0.586-0.937-0.301-2.171,0.637-2.756L18.647,4.373c0.647-0.405,1.471-0.405,2.119,0 l17.707,11.058C39.409,16.017,39.694,17.249,39.108,18.186z M32.668,19.264l-11.9-7.433c-0.648-0.405-1.472-0.405-2.119,0 L6.747,19.264c-0.585,0.365-0.939,1.006-0.939,1.696v12.384c0,1.104,0.896,2,2,2h6.567c1.104,0,2-0.896,2-2v-5.638 c0-1.838,1.496-3.332,3.334-3.332c1.837,0,3.333,1.496,3.333,3.332v5.637c0,1.104,0.896,2,2,2h6.567c1.104,0,2-0.896,2-2V20.96 C33.608,20.269,33.253,19.628,32.668,19.264z"/>'.Intro().
            '</g>'.Intro(). 
            // Cadena
            '<g id="svg-sub-indice">'.Intro().
                '<path d="M421.512,207.074l-85.795,85.767c-47.352,47.38-124.169,47.38-171.529,0c-7.46-7.439-13.296-15.821-18.421-24.465 l39.864-39.861c1.895-1.911,4.235-3.006,6.471-4.296c2.756,9.416,7.567,18.33,14.972,25.736c23.648,23.667,62.128,23.634,85.762,0 l85.768-85.765c23.666-23.664,23.666-62.135,0-85.781c-23.635-23.646-62.105-23.646-85.768,0l-30.499,30.532 c-24.75-9.637-51.415-12.228-77.373-8.424l64.991-64.989c47.38-47.371,124.177-47.371,171.557,0 C468.869,82.897,468.869,159.706,421.512,207.074z M194.708,348.104l-30.521,30.532c-23.646,23.634-62.128,23.634-85.778,0 c-23.648-23.667-23.648-62.138,0-85.795l85.778-85.767c23.665-23.662,62.121-23.662,85.767,0 c7.388,7.39,12.204,16.302,14.986,25.706c2.249-1.307,4.56-2.369,6.454-4.266l39.861-39.845 c-5.092-8.678-10.958-17.03-18.421-24.477c-47.348-47.371-124.172-47.371-171.543,0L35.526,249.96 c-47.366,47.385-47.366,124.172,0,171.553c47.371,47.356,124.177,47.356,171.547,0l65.008-65.003 C246.109,360.336,219.437,357.723,194.708,348.104z"/>'.Intro().
            '</g>'.Intro(). 
            // Votacions
            '<g id="svg-votacion">'.Intro().
                '<path d="M29 51c0,3 -2,5 -6,6 8,5 17,17 22,24 16,-22 23,-31 27,-37 3,4 4,9 4,14 0,16 -13,29 -28,29 -16,0 -29,-13 -29,-29 0,-16 13,-28 29,-28 8,0 15,3 21,9 -16,18 -3,2 -24,29 -6,-5 -13,-13 -16,-17zm48 -13c3,-3 5,-5 11,-11 -7,0 -10,3 -15,6 -6,-6 -15,-11 -25,-11 -20,0 -36,16 -36,36 0,20 16,36 36,36 19,0 35,-16 35,-36 0,-7 -2,-14 -6,-20z"></path>'.Intro().
            '</g>'.Intro().       
            // Reds socials
            '<g id="svg-redes-sociales">'.Intro().                
                '<rect transform="matrix(0.911371 0.411586 -0.411586 0.911371 14.5052 49.8104)" width="20.4107" height="1.67986"/>'.
                '<rect transform="matrix(0.741219 -0.671263 0.671263 0.741219 13.6788 49.6573)" width="20.4107" height="1.67986"/>'.
                '<circle cx="13" cy="51" r="5"/>'.
                '<circle cx="30" cy="36" r="5"/>'.
                '<circle cx="33" cy="60" r="5"/>'.
            '</g>'.Intro().                
            // Estrella de la mort    
            '<g id="svg-marco33">'.Intro().
                '<path d="M33.42,19.796c0.049-0.508,0.075-1.023,0.075-1.544c0-8.697-7.05-15.747-15.747-15.747S2,9.556,2,18.253 c0,0.208,0.004,0.416,0.012,0.622c0,0,5.918,3.288,15.631,3.153C28.723,21.874,33.42,19.796,33.42,19.796z M2.288,21.267 C3.695,28.522,10.081,34,17.747,34c0.959,0,1.899-0.086,2.811-0.25c2.85-0.514,5.433-1.794,7.529-3.619 c2.376-2.07,4.125-4.842,4.925-7.992c0,0-5.418,1.827-15.369,2.036C8.985,24.356,2.288,21.267,2.288,21.267z M12.358,17.993	c-2.897,0.382-5.246-1.656-5.246-4.553s2.349-5.555,5.246-5.938c2.897-0.382,5.246,1.656,5.246,4.553S15.255,17.611,12.358,17.993z"/>'.Intro().
                '<path d="M11.643,12.612c-0.027,0-0.039-0.005-0.039-0.005c0.005-0.268,0.239-0.527,0.468-0.557 c0.071,0.27-0.163,0.529-0.392,0.559L11.643,12.612z"/>'.Intro().
		'<path d="M12.11,10.547c-0.076,0-0.154,0.005-0.233,0.016c-0.976,0.129-1.767,1.024-1.767,2 c0,0.897,0.668,1.549,1.533,1.549c0.076,0,0.154-0.005,0.233-0.016c0.976-0.129,1.767-1.024,1.767-2 C13.643,11.2,12.975,10.547,12.11,10.547L12.11,10.547z"/>'.Intro().
            '</g>'.Intro().                
            // Llista
            '<g id="svg-lista">'.Intro().
                '<path d="M418.152,0H203.408c-12.427,0-24.325,4.953-33.101,13.755L42.654,142.01c-8.715,8.754-13.602,20.597-13.602,32.944 v272.243c0,25.789,20.916,46.697,46.705,46.697h342.395c25.788,0,46.69-20.908,46.69-46.697v-400.5 C464.842,20.91,443.94,0,418.152,0z M431.914,447.197c0,7.597-6.175,13.769-13.763,13.769H75.757 c-7.605,0-13.781-6.172-13.781-13.769V184.238h131.322c12.088,0,21.928-9.839,21.928-21.939V32.927h202.926 c7.587,0,13.763,6.172,13.763,13.77v400.5H431.914z"/>'.Intro().
                '<path d="M339.277,254.455H154.646c-13.632,0-24.695,11.054-24.695,24.695s11.063,24.695,24.695,24.695h184.631 c13.636,0,24.695-11.054,24.695-24.695S352.912,254.455,339.277,254.455z"/>'.Intro().
                '<path d="M339.277,172.139h-69.388c-13.635,0-24.694,11.054-24.694,24.694c0,13.642,11.059,24.695,24.694,24.695h69.388 c13.636,0,24.695-11.053,24.695-24.695C363.971,183.193,352.912,172.139,339.277,172.139z"/>'.Intro().
                '<path d="M339.277,89.825h-69.388c-13.635,0-24.694,11.05-24.694,24.695c0,13.641,11.059,24.694,24.694,24.694h69.388 c13.636,0,24.695-11.054,24.695-24.694C363.971,100.876,352.912,89.825,339.277,89.825z"/>'.Intro().
                '<path d="M339.277,347.421H154.646c-13.632,0-24.695,11.053-24.695,24.694s11.063,24.695,24.695,24.695h184.631 c13.636,0,24.695-11.054,24.695-24.695S352.912,347.421,339.277,347.421z"/>'.Intro().                
            '</g>'.Intro().                
            // Explorar Lab
            '<g id="svg-explorar-lab">'.Intro().
                '<path d="M400.942,0H160.677c-20.204,0-37.146,13.72-42.428,32.277h30.244c3.105-3.16,7.408-5.139,12.184-5.139h240.266 c9.441,0,17.132,7.725,17.132,17.164v327.752c0,9.455-7.69,17.155-17.132,17.155h-4.113v27.162h4.113 c24.43,0,44.303-19.881,44.303-44.317V44.303C445.245,19.882,425.372,0,400.942,0z"/>'.Intro().
                '<path d="M320.25,64.555H79.983c-24.397,0-44.302,19.881-44.302,44.302v327.752c0,24.438,19.905,44.318,44.302,44.318H320.25 c24.429,0,44.302-19.881,44.302-44.318V108.856C364.552,84.436,344.679,64.555,320.25,64.555z M337.381,436.608 c0,9.456-7.689,17.155-17.131,17.155H79.983c-9.472,0-17.147-7.699-17.147-17.155V108.856c0-9.439,7.675-17.163,17.147-17.163 H320.25c9.441,0,17.131,7.724,17.131,17.163V436.608z"/>'.Intro().
                '<path d="M264.68,260.637H161.78c-6.683,0-12.104,5.421-12.104,12.104c0,6.684,5.421,12.104,12.104,12.104H264.68 c6.682,0,12.104-5.421,12.104-12.104C276.784,266.058,271.361,260.637,264.68,260.637z"/>'.Intro().
                '<path d="M121.781,258.942c-7.646,0-13.807,6.178-13.807,13.798c0,7.621,6.161,13.799,13.807,13.799 c7.627,0,13.79-6.178,13.79-13.799C135.571,265.12,129.408,258.942,121.781,258.942z"/>'.Intro().
                '<path d="M264.68,314.167H161.78c-6.683,0-12.104,5.421-12.104,12.104c0,6.684,5.421,12.104,12.104,12.104H264.68 c6.682,0,12.104-5.421,12.104-12.104C276.784,319.588,271.361,314.167,264.68,314.167z"/>'.Intro().
                '<path d="M121.781,312.472c-7.646,0-13.807,6.179-13.807,13.799c0,7.621,6.161,13.799,13.807,13.799 c7.627,0,13.79-6.178,13.79-13.799C135.571,318.65,129.408,312.472,121.781,312.472z"/>'.Intro().
                '<path d="M264.68,367.696H161.78c-6.683,0-12.104,5.422-12.104,12.105c0,6.682,5.421,12.103,12.104,12.103H264.68 c6.682,0,12.104-5.422,12.104-12.103C276.784,373.118,271.361,367.696,264.68,367.696z"/>'.Intro().
                '<path d="M121.781,365.994c-7.646,0-13.807,6.186-13.807,13.807c0,7.62,6.161,13.799,13.807,13.799 c7.627,0,13.79-6.179,13.79-13.799C135.571,372.18,129.408,365.994,121.781,365.994z"/>'.Intro().
                '<path d="M264.68,207.106H161.78c-6.683,0-12.104,5.421-12.104,12.105c0,6.683,5.421,12.104,12.104,12.104H264.68 c6.682,0,12.104-5.421,12.104-12.104C276.784,212.527,271.361,207.106,264.68,207.106z"/>'.Intro().
                '<path d="M121.781,205.412c-7.646,0-13.807,6.178-13.807,13.799c0,7.62,6.161,13.798,13.807,13.798 c7.627,0,13.79-6.178,13.79-13.798C135.571,211.59,129.408,205.412,121.781,205.412z"/>'.Intro().
                '<path d="M264.68,153.577H161.78c-6.683,0-12.104,5.421-12.104,12.104c0,6.683,5.421,12.104,12.104,12.104H264.68 c6.682,0,12.104-5.421,12.104-12.104C276.784,158.998,271.361,153.577,264.68,153.577z"/>'.Intro().
                '<path d="M121.781,151.882c-7.646,0-13.807,6.178-13.807,13.799c0,7.62,6.161,13.807,13.807,13.807 c7.627,0,13.79-6.187,13.79-13.807C135.571,158.06,129.408,151.882,121.781,151.882z"/>'.Intro().
            '</g>'.Intro().                
            // Guardar cache del lab
            '<g id="svg-guardar-cache">'.Intro().
                '<path d="M432.823,121.049c-3.806-9.132-8.377-16.367-13.709-21.695l-79.941-79.942c-5.325-5.325-12.56-9.895-21.696-13.704 C308.346,1.903,299.969,0,292.357,0H27.409C19.798,0,13.325,2.663,7.995,7.993c-5.33,5.327-7.992,11.799-7.992,19.414v383.719 c0,7.617,2.662,14.089,7.992,19.417c5.33,5.325,11.803,7.991,19.414,7.991h383.718c7.618,0,14.089-2.666,19.417-7.991 c5.325-5.328,7.987-11.8,7.987-19.417V146.178C438.531,138.562,436.629,130.188,432.823,121.049z M182.725,45.677 c0-2.474,0.905-4.611,2.714-6.423c1.807-1.804,3.949-2.708,6.423-2.708h54.819c2.468,0,4.609,0.902,6.417,2.708 c1.813,1.812,2.717,3.949,2.717,6.423v91.362c0,2.478-0.91,4.618-2.717,6.427c-1.808,1.803-3.949,2.708-6.417,2.708h-54.819 c-2.474,0-4.617-0.902-6.423-2.708c-1.809-1.812-2.714-3.949-2.714-6.427V45.677z M328.906,401.991H109.633V292.355h219.273 V401.991z M402,401.991h-36.552h-0.007V283.218c0-7.617-2.663-14.085-7.991-19.417c-5.328-5.328-11.8-7.994-19.41-7.994H100.498 c-7.614,0-14.087,2.666-19.417,7.994c-5.327,5.328-7.992,11.8-7.992,19.417v118.773H36.544V36.542h36.544v118.771 c0,7.615,2.662,14.084,7.992,19.414c5.33,5.327,11.803,7.993,19.417,7.993h164.456c7.61,0,14.089-2.666,19.41-7.993 c5.325-5.327,7.994-11.799,7.994-19.414V36.542c2.854,0,6.563,0.95,11.136,2.853c4.572,1.902,7.806,3.805,9.709,5.708l80.232,80.23 c1.902,1.903,3.806,5.19,5.708,9.851c1.909,4.665,2.857,8.33,2.857,10.994V401.991z"/>'.Intro().
            '</g>'.Intro(). 
            // Guardar archivo del lab
            '<g id="svg-guardar">'.Intro().
                '<path d="M44.449,16.561c-0.475-0.591-1.191-0.936-1.949-0.936H40c0-1.381-1.119-2.5-2.5-2.5H35v-2.5c0-1.381-1.119-2.5-2.5-2.5 h-1.25v-5c0-0.69-0.561-1.25-1.25-1.25H5c-0.691,0-1.25,0.56-1.25,1.25v5H2.5c-1.381,0-2.5,1.119-2.5,2.5v30 c0,1.381,1.119,2.5,2.5,2.5h5h25h5c1.172,0,2.188-0.814,2.439-1.958l5-22.5C45.105,17.927,44.924,17.152,44.449,16.561z  M3.75,40.625H2.5v-30h1.25V40.625z M31.468,28.469l-8.75,8.749c-0.488,0.488-1.279,0.488-1.768,0l-8.75-8.75 c-0.357-0.356-0.465-0.895-0.271-1.362c0.193-0.467,0.648-0.771,1.154-0.771h3.125V15.626H12.5c-1.172,0-2.188,0.814-2.441,1.958 c0,0-5.057,22.861-5.057,23.042H5v-37.5h25v10c-1.381,0-2.5,1.119-2.5,2.5h-0.042v10.71h3.125c0.506,0,0.961,0.305,1.155,0.771 C31.934,27.574,31.825,28.111,31.468,28.469z M32.5,13.125h-1.25v-2.5h1.25V13.125z M8.667,7.417c0-0.69,0.56-1.25,1.25-1.25 h14.916c0.69,0,1.25,0.56,1.25,1.25s-0.56,1.25-1.25,1.25H9.917C9.228,8.667,8.667,8.107,8.667,7.417z M24.833,13.75H9.917 c-0.69,0-1.25-0.56-1.25-1.25s0.56-1.25,1.25-1.25h14.916c0.69,0,1.25,0.56,1.25,1.25S25.523,13.75,24.833,13.75z"/>'.Intro().
            '</g>'.Intro().                
                
        "</svg>".Intro().
                
/*        "<div id='cse' style='width: 100%;'>Cargando</div>
        <script src='//www.google.com/jsapi' type='text/javascript'></script>
        <script type='text/javascript'>
            google.load('search', '1', {language: 'es', style: google.loader.themes.V2_DEFAULT});
            google.setOnLoadCallback(function() {
            var customSearchOptions = {};
            var imageSearchOptions = {};
            imageSearchOptions['layout'] = 'google.search.ImageSearch.LAYOUT_POPUP';
            customSearchOptions['enableImageSearch'] = true;
            customSearchOptions['adoptions'] = {'layout' : 'noTop'};
            var customSearchControl =   new google.search.CustomSearchControl('005953647264407381580:5hnum4vxqqo', customSearchOptions);
            customSearchControl.setResultSetSize(google.search.Search.FILTERED_CSE_RESULTSET);
            var options = new google.search.DrawOptions();
            customSearchControl.draw('cse', options);".        
        "}, true);
        </script>".*/
                
                
                
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
                        "<span class='IcoTexto'>CSS</span>".Intro().
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoCSS'>".Intro().
                        "<a href='/Doc/CSS/Colores'>Colores</a>".Intro().
                        "<a href='/Doc/CSS/Degradados'>Degradados</a>".Intro().
                        "<a href='/Doc/CSS/Funciones'>Funciones</a>".Intro().
                        "<a href='/Doc/CSS/Propiedades'>Propiedades</a>".Intro().
                        "<a href='/Doc/CSS/Reglas'>Reglas</a>".Intro().
                        "<a href='/Doc/CSS/Selectores'>Selectores</a>".Intro().
                        "<a href='/Doc/CSS/Unidades'>Unidades</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- C / C++ -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonCPP_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonCPP_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoTexto'>C++</span>".Intro().
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoCPP'>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_1_0'>Calculadora</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_2_0'>Snake</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_3_0'>Instalador</a>".Intro().
                        "<a href='/Blog/Tutorial_WINAPI_4'>DUMP</a>".Intro().
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
                        "<span class='IcoTexto'>JS</span>".Intro().
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
                        "<span class='IcoTexto'>PHP</span>".Intro().
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoPHP'>".Intro().
                        "<a href='/Blog/Captcha1'>Captchas 1</a>".Intro().
                        "<a href='/Blog/Captcha2'>Captchas 2</a>".Intro().
                        "<a href='/Blog/Captcha3'>Captchas 3</a>".Intro().
                        "<a href='/Blog/ColorearCodigoPHP_XML'>Pintar Código</a>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                
                // <!-- Buscar -->
                "<div class='Menu_BotonCheck' mostrar='true'>".Intro().
                    "<input id='BarraPrincipal_BotonBuscar_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                    "<label class='BarraPrincipal_Boton_Label' for='BarraPrincipal_BotonBuscar_Estado'></label>".Intro().
                    "<div class='BarraPrincipal_BotonMenu'>".Intro().
                        "<span class='IcoLupa20x20'></span>". // <!-- lupa a morphejar -->
                    "</div>".Intro().
                    "<div id ='BarraPrincipal_MarcoBuscar'>".Intro().
                        "<input type='text' name='Search' id='BarraPrincipal_MarcoBuscar_Edit' placeholder='Texto a buscar..' required>".Intro().
                        "<div id='BarraPrincipal_MarcoBuscar_BotonBuscar'>".Intro().
                           "<span class='IcoLupa20x20'></span>".Intro().
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
            /* Home */
            "<a href='/' id='BarraNavegacion_Cerrar' tooltip-es='Volver al indice principal' tooltip-en='Return to main index' tooltip-pos='R' class='BarraPrincipal_BotonMenu'>".Intro().
                "<svg viewBox='-15 -14 70 70'>".Intro().
                    "<use xlink:href='#svg-home'></use>".Intro().
                "</svg>".Intro().                    
            "</a>".Intro().
            /* Lab Ver */
            "<div id ='BarraNavegacion_LabVer' class='Menu_BotonCheck'  mostrar='true'>".Intro().
                "<input id='BarraNavegacion_BotonVer_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_BotonVer_Estado' tooltip-es='Vista del editor' tooltip-en='Editor's view' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto' id='BarraNavegacion_Lab_IconoVer'>".Intro().
                        "<span></span>".Intro(). 
                    "</span>".Intro().
                "</div>".Intro().
                "<div id ='BarraNavegacion_LabMarcoVer'>".Intro().                                       
                    "<input id='Lab_VerFilas_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Filas' tooltip-en='Rows' tooltip-pos='T' class='BarraPrincipal_BotonMenu Lab_BotonVerFilas' for='Lab_VerFilas_Estado'></label>".Intro().
                    "<input id='Lab_VerColumnas_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Columnas' tooltip-en='Columns' tooltip-pos='T' class='BarraPrincipal_BotonMenu Lab_BotonVerColumas' for='Lab_VerColumnas_Estado'></label>".Intro().
                    "<input id='Lab_VerCodigo_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Código' tooltip-en='Code' tooltip-pos='T' class='BarraPrincipal_BotonMenu Lab_BotonVerCodigo' for='Lab_VerCodigo_Estado'></label>".Intro().
                    "<input id='Lab_VerPreview_Estado' class='BarraPrincipal_Boton_Input' type='radio' name='Lab_Ver' />".Intro().
                    "<label tooltip-es='Pre-visualización' tooltip-en='Preview' tooltip-pos='T' class='BarraPrincipal_BotonMenu Lab_BotonVerPreview' for='Lab_VerPreview_Estado'></label>".Intro().
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
                        "<svg viewBox='-170 -200 800 800'>".Intro().
                            "<use xlink:href='#svg-explorar-lab'></use>".Intro().
                        "</svg>".Intro().
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
                        "<svg viewBox='-240 -290 950 950'>".Intro().
                            "<use xlink:href='#svg-sub-indice'></use>".Intro().
                        "</svg>".Intro().
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
                        "<svg viewBox='-240 -280 950 950'>".Intro().
                            "<use xlink:href='#svg-lista'></use>".Intro().
                        "</svg>".Intro().
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
                        "<svg viewBox='-5 16 60 60'>".Intro().
                            "<use xlink:href='#svg-redes-sociales'></use>".Intro().
                        "</svg>".Intro().
                    "</span>".Intro().
                "</div>".Intro().
                "<div id='BarraNavegacion_MarcoRedesSociales'>".
                    "<button id='BarraNavegacion_MarcoRedesSociales_Facebook'></button>".Intro().
                    "<button id='BarraNavegacion_MarcoRedesSociales_Twitter'></button>".Intro().
                    "<button id='BarraNavegacion_MarcoRedesSociales_GooglePlus'></button>".Intro().
                    "<button id='BarraNavegacion_MarcoRedesSociales_Linkedin'></button>".Intro().
                "</div>".Intro().
            "</div>".Intro().
                    
            /* Votación para el documento */
            "<div id='BarraNavegacion_Votacion' class='Menu_BotonCheck'>".Intro().
                "<input id='BarraNavegacion_Votacion_Estado' class='BarraPrincipal_Boton_Input' type='checkbox' />".Intro().
                "<label class='BarraPrincipal_Boton_Label' for='BarraNavegacion_Votacion_Estado' tooltip-es='Valoración del documento' tooltip-en='Document valoration' tooltip-pos='R'></label>".Intro().
                "<div class='BarraPrincipal_BotonMenu'>".Intro().
                    "<span class='IcoTexto'>".Intro().
                        "<svg viewBox='-18 -12 130 130'>".Intro().
                            "<use xlink:href='#svg-votacion'></use>".Intro().
                        "</svg>".Intro().
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
                "<svg viewBox='-14 -12 70 70'>".Intro().
                    "<use xlink:href='#svg-guardar'></use>".Intro().
                "</svg>".Intro().
            "</div>".Intro().
            "<div id='BarraNavegacion_LabGuardarCache' tooltip-es='Guardar cache explorador' tooltip-en='Save explorer cache' tooltip-pos='R' class='BarraPrincipal_BotonMenu'>".Intro().
                "<svg viewBox='-160 -160 750 750'>".Intro().
                    "<use xlink:href='#svg-guardar-cache'></use>".Intro().
                "</svg>".Intro().
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
                        '<svg viewBox="-7 -8 50 50">'.Intro().
                            '<use xlink:href="#svg-marco33"></use>'.Intro().
                        '</svg>'.Intro().
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
        echo "<script type='text/javascript' src='https://www.google.es/jsapi'></script>";
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