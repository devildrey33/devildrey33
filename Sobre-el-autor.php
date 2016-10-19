<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


    include("Web/devildrey33.php");
        
    $Base = new devildrey33;
        
    
    $Base->InicioPlantilla(basename(__FILE__), "Sobre devildrey33", "");    
    $Base->BD = new devildrey33_BD();
//    echo Indice::GenerarIndice($Base->BD, $Categoria, 0);

    echo "<script>\$Base.SobreElAutor = new SobreDevildrey33;</script>";
    
    $Base->FinPlantilla(); 



?>