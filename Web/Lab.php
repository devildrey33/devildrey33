<?php

    /* Archivo a cargar */
//    $Archivo = substr($_SERVER["REQUEST_URI"], 5);
    $sArchivo = explode('?', substr($_SERVER["REQUEST_URI"], 5));
    $Archivo = $sArchivo[0];
    
    $MostrarError = FALSE;
    if ($Archivo == "")                     { $Archivo = "Ejemplos/Nuevo.html"; }
    if (is_file("../".$Archivo) === FALSE)  { $Archivo = "Ejemplos/Error.html"; }
    
    
    /* Modo : Pantalla completa, portable */
    if (isset($_GET["Modo"]))    {   $Modo = $_GET["Modo"]; }
    else                         {   $Modo = ""; }
    // Vista del editor
    if (isset($_GET["Editor"]))  {   $Editor = $_GET["Editor"]; }
    else                         {   $Editor = ""; }

    
    include("devildrey33.php");
    $Base = new devildrey33;	

    $CArchivo = devildrey33_Lab::AbrirEjemplo($Archivo, -1);
    
/*    echo "<pre>";
    print_r($sArchivo);
    echo "</pre>";*/
    
    $HEAD = "";

    $Base->InicioPlantilla($Archivo, "Lab : ".basename($Archivo), $HEAD);
/*    if ($CArchivo["Ret"] != 200) { // Error al abrir el archivo
        $Archivo = "Ejemplos/Error.html"; 
//        $MostrarError = TRUE;
        $CArchivo = devildrey33_Lab::AbrirEjemplo($Archivo, -1);
    }*/
    
//    echo $_SERVER["REQUEST_URI"];
    /* Maquetacio a pantalla completa */
/*    echo "<pre>";
    print_r($_SERVER);
    echo "</pre>";*/

    
    echo "<article id='MarcoNavegacionLab' pagina='".$Archivo."'>".Intro();
    echo '<textarea id="Lab_Codigo" name="code" style="display:none">'.$CArchivo["Datos"].'</textarea>'.Intro().
         '<iframe id="Lab_Preview"></iframe>'.Intro().
/*         "<div id='Lab_Explorador_Buscar'>".Intro().
         '<input type="text" placeholder="Texto a buscar.." />'.Intro().
         "</div>".Intro().*/
         "<div id='Lab_Barra1' class='SinSeleccion'>".Intro().
            "<div id='Lab_BotonExplorador' title='Mostrar / Ocultar el explorador'></div>".Intro().
         "</div>".Intro().
         "<div id='Lab_Barra2'></div>".Intro().
         "<div id='Lab_ParcheIframe'></div>".Intro().
         "<div id='Lab_Actualizar'>Actualización en <span id='Lab_Actualizar_Tiempo'>5</span>s<br /><b>Esc</b> para cancelar<br /> <b>Alt+A</b> para actualizar</div>".Intro().
    "</article>".Intro();

    
    echo "<script>".Intro().
            "\$Lab.Archivo = '".$Archivo."';".Intro().
            "\$Lab.ForzarVista = '".$CArchivo["Vista"]."';".Intro().
            "\$Lab.Modo = '".$CArchivo["Modo"]."';".Intro();
    if ($MostrarError == TRUE) echo "\$Base.MostrarErrorAjax(404, false);".Intro();
    echo "window.addEventListener('load', function() { \$Lab.IniciarEjemplo('".$Archivo."'); });";
    
    echo "</script>".Intro();


//    $Base->FinBlog();
    $Base->FinPlantilla(); 
?>




