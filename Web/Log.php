<?php
    /* Concepte per no utilitzar tanta memoria en el servidor al fer el log... en principi queda descartat ja que el servidor puja de nivell/pack i ja no serà necesari */
    include("devildrey33.php");
    $Base = new devildrey33;	

    $HEAD = "";

    $Base->InicioPlantilla(basename(__FILE__), "Logs de acceso", $HEAD);

    if (devildrey33_Opciones::Administrador() > 0) {
        $Log = new devildrey33_Log;
        echo "<article class='Blog'>";
        echo "<div id='Log_Cargando' visible='true'>".
                "<ul>".
                    "<li id='Log_CargandoF1'>Obteniendo datos del servidor</li>".
                    "<li id='Log_CargandoF2'>Ordenando datos por ip</li>".
                    "<li id='Log_CargandoF3'>Creando estadisticas</li>".
                    "<li id='Log_CargandoF4'>Generando la tabla...</li>".
                "</ul>".
                "<div>NOTA : Este proceso puede llevar varios minutos</div>".
             "</div>".              
             
        
        $Log->EnumLogs();
//        $Log->LeerLogAccesos("current");
        echo "<textarea id='Log_Datos'></textarea>";
        
        echo "<div id='Log_Stats'></div>";
        echo "<div id='Log_Lista'></div>";
        echo "</article>";
        echo "<script>".
                "\$Admin.Log_IpAdmin = '".$_SERVER["REMOTE_ADDR"]."';".
                "\$Admin.Log_CargarArchivo('access.log.current');".
            "</script>";
    }
    else {
        echo "<script>\$Base.MostrarErrorAjax(404, true);</script>";
        echo "<script>try { \$Admin.Desloguear(); } catch(err) { }</script>";
    }
    
    $Base->FinPlantilla(); 

?>