<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
    $Base = new devildrey33;	

    $HEAD = "";

    $Base->InicioPlantilla(basename(__FILE__), "Editar Entradas", $HEAD);

    if (devildrey33_Opciones::Administrador() > 0) {
        $Edit = new devildrey33_EditarEntradas;
        echo "<article class='Blog'>".Intro().
                // Panel para editar / crear una entrada del blog
                "<div id='Editor_Blog'>".Intro().
                    "<table>".Intro().
                        "<tr>".Intro().
                            "<td>Fecha</td>".Intro().
                            "<td><input id='Entrada_Fecha' type='date' /></td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Titulo</td>".Intro().
                            "<td><input id='Entrada_Titulo' type='text' /></td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>URL</td>".Intro().
                            "<td><input id='Entrada_URL' type='url' /></td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Imagen</td>".Intro().
                            "<td><input id='Entrada_Imagen' type='text' /></td>".Intro().
                        "</tr>".Intro().
                        "<tr>".Intro().
                            "<td>Tipo</td>".Intro().
                            "<td><input id='Entrada_Tipo' type='text' /></td>".Intro().
                        "</tr>".Intro().
                    "</table>".Intro().
                    "<ul>".Intro();
        $Tags = require dirname(__FILE__).'/Config/EntradasTags.php';
        for ($i = 0; $i < count($Tags); $i++) {
            echo "<li><input type='checkbox'><span>".$Tags[$i]."</span></li>";
        }
        
        echo        "</ul>".Intro().                
                    "<div>".Intro().
                        "<button id='Editor_Guardar'>Guardar</button>".Intro().
                        "<button id='Editor_Cancelar'>Cancelar</button>".Intro().
                    "</div>".Intro().
                "</div>".Intro().
                "<div id='Editor_BarraNavegacionInferior'>".Intro().
                    "<div id='Editor_BotonAgregar' class='Menu_Boton'></div>".Intro().
                "</div>".Intro();
            
        $Edit->ImprimirEntradas();
        echo "</article>".Intro();
        echo "<script>\$Admin.EditarEntradas_Iniciar();</script>".Intro();
    }
    else {
        // No es admin, mostramos un 404
        echo "<script>\$Base.MostrarErrorAjax(404, true);</script>".Intro();
    }
    
    $Base->FinPlantilla(); 
     
    
?>