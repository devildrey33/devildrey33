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

    if (!isset($_POST["SinPlantilla"])) {
        $Base->InicioPlantilla(basename(__FILE__), "Laboratorio de pruebas", $HEAD);
    }
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

    
    echo "<div id='MarcoNavegacionLab'>";
    echo '<textarea id="Lab_Codigo" name="code" style="display:none">'.$CArchivo["Datos"].'</textarea>'.
         '<iframe id="Lab_Preview"></iframe>'.
/*         "<div id='Lab_Explorador_Buscar'>".
         '<input type="text" placeholder="Texto a buscar.." />'.
         "</div>".*/
         "<div id='Lab_Barra1'>".
            "<div id='Lab_BotonExplorador' title='Mostrar / Ocultar el explorador'></div>".
         "</div>".
         "<div id='Lab_Barra2'></div>".
         "<div id='Lab_ParcheIframe'></div>";
    echo "</div>";
//    echo substr($_SERVER["REQUEST_URI"], 5);
$Vista = -1;
if (isset($sArchivo[1])) {
    switch ($sArchivo[1]) {
        case "Columnas" : $Vista = 0; break;
        case "Filas"    : $Vista = 1; break;
        case "Codigo"   : $Vista = 2; break;
        case "Preview"  : $Vista = 3; break;
    }
}
    
    echo "<script>".
            "\$Lab.Archivo = '".$Archivo."';".
            "\$Lab.ForzarVista = '".$Vista."';";
    if ($MostrarError == TRUE) echo "\$Base.MostrarErrorAjax(404, false);";
    echo "</script>";


//    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>




