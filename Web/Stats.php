<?php

    include("devildrey33.php");
    $Base = new devildrey33;	

    $HEAD = "";

    $Base->InicioPlantilla(basename(__FILE__), "Estadisticas", $HEAD);

    if (devildrey33_Opciones::Administrador() > 0) {
        echo "<article class='Blog'>";
        ImprimirStats();
        echo "</article>";
    }
    else {
        echo "<script>\$Base.MostrarErrorAjax(404, true);</script>";
        echo "<script>\$Admin.Desloguear();</script>";
    }
    
    $Base->FinPlantilla();     
?>

<?php 
    function ImprimirStats() {
        $BD = new devildrey33_BD;
        echo TablaEntradas($BD);
        echo TablaDescargas($BD);
    }
    
    function TablaEntradas($BD) {
        $Resultado = $BD->_mysqli->query("SELECT * FROM paginas ORDER BY Visitas DESC");
        $Total = 0;
        $Ret = "<br />".Intro()."<h2>Entradas</h2>".Intro();
        if ($Resultado) 
            $Total = $Resultado->num_rows;        
        if ($Total > 0) {        
            $Ret .= "<table class='Tabla'>".Intro().
                        "<thead>".Intro().
                            "<tr>".Intro().
                                "<th>NumPagina</th>".Intro().
                                "<th>Pagina</th>".Intro().
                                "<th>Visitas</th>".Intro().
                                "<th>VotosTotal</th>".Intro().
                                "<th>VotosValor</th>".Intro().
                            "</tr>".Intro().
                        "</thead>".Intro();
            for ($i = 0; $i < $Total; $i++) {
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                $Ret .= "<tr>".Intro().
                            "<td>".$Datos["NumPagina"]."</td>".Intro().
                            "<td>".$Datos["Pagina"]."</td>".Intro().
                            "<td>".$Datos["Visitas"]."</td>".Intro().
                            "<td>".$Datos["VotosTotal"]."</td>".Intro().
                            "<td>".$Datos["VotosValor"]."</td>".Intro().
                        "</tr>".Intro();
            }           
            $Ret .= "</table>".Intro();
        }
        return $Ret;
    }
    
    function TablaDescargas($BD) {
        $Resultado = $BD->_mysqli->query("SELECT * FROM descargas ORDER BY TotalDescargas DESC");
        $Total = 0;
        $Ret = "<br />".Intro()."<h2>Descargas</h2>".Intro();
        if ($Resultado) 
            $Total = $Resultado->num_rows;        
        if ($Total > 0) {        
            $Ret .= "<table class='Tabla'>".Intro().
                        "<thead>".Intro().
                            "<tr>".Intro().
                                "<th>NumDescarga</th>".Intro().
                                "<th>Url</th>".Intro().
                                "<th>TotalDescargas</th>".Intro().
                            "</tr>".Intro().
                        "</thead>".Intro();
            for ($i = 0; $i < $Total; $i++) {
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                $Ret .= "<tr>".Intro().
                            "<td>".$Datos["NumDescarga"]."</td>".Intro().
                            "<td>".$Datos["Url"]."</td>".Intro().
                            "<td>".$Datos["TotalDescargas"]."</td>".Intro().
                        "</tr>".Intro();
            }           
            $Ret .= "</table>".Intro();
        }
        return $Ret;
    }
?>