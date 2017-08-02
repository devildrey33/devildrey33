/* Objeto que contiene las funciones para el administrador */

ObjetoAdmin = function() {

    this.Iniciar = function() {                
        console.log("Admin.Iniciar");
        /* Oculto la animación cargando de la parte inferior derecha */
        $Base.Cargando("FALSE");
        /* Cargo el CSS para el administrador */
        $Base.CargarCSS("devildrey33.admin.min.css", true);
        /* Activo el CSS para el modo administrador */
        $("body").attr({ "administrador33" : true });
        /* re-emplazo de la funcion click para el menu de administración */
        $('#BarraPrincipal_Boton33_Estado').off("click").on("click", function(e){ $Base.ClickMenu(8); });
        /* Boton ver logs */
        $('#CH_Logs').off("click").on("click", function(e){ console.log("a"); $Base.CargarURL('/Web/Log'); $Base.ClickMenu(0); }); /* MOSTRAR LOGS */
        /* Boton ver stats */
        $('#CH_Stats').off("click").on("click", function(e){ $Base.CargarURL('/Web/Stats'); $Base.ClickMenu(0); }); /* MOSTRAR stats */
        /* Boton ver php info */
        $('#CH_PhpInfo').off("click").on("click", function(e){ $Base.CargarURL('/Web/phpinfo'); $Base.ClickMenu(0); }); /* MOSTRAR info php */
        /* Botón generar cache del buscador */
        $('#CH_GenCacheBuscador').off("click").on("click", function(e){ $Base.cmd('GenerarCacheBuscador');  }); 
        
        $('#CH_Minificar').off("click").on("click", function(e){ $Base.cmd('Minificar-JS-CSS'); });
        /* Boton explorar lab */
//        $('#CH_Lab').click(function(e){ $Base.CargarURL('/Web/Lab-Explorar'); $Base.ClickMenu(0); });  /* EXPLORAR LAB */
        /* Boton editar entradas */
//        $('#CH_Entradas').click(function(e){ $Base.CargarURL('/Web/Editar-Entradas'); $Base.ClickMenu(0); });  /* EXPLORAR LAB */        
        /* Boton limpiar baneados */ 
        $('#CH_IPSBan').click(function(e){ $Base.cmd("LimpiarBaneados"); });  
        /* CheckBox del marco de administración */
        $('#BarraPrincipal_Marco33 .CheckBox').off("click").on("click", function(e){ 
            var Marcado = ($(this).attr('marcado') === 'true') ? true : false;
            $(this).attr({ 'marcado' : !Marcado });
            switch ($(this).attr('id')) {
                // Session
                case 'CH_Admin' : /* Desloguear */
                    $Admin.Desloguear();
                    break;
                case 'CH_HTML' :
                    $Base.cmd((Marcado) ? 'DesactivarMinificarHTML' : 'ActivarMinificarHTML' );
                    break;
                case 'CH_CSS' :
                    $Base.cmd((Marcado) ? 'DesactivarMinificarCSS' : 'ActivarMinificarCSS' );
                    break;
                case 'CH_JS' :
                    $Base.cmd((Marcado) ? 'DesactivarMinificarJS' : 'ActivarMinificarJS' );
                    break;
                case 'CH_DebugPHP' :
                    $Base.cmd((Marcado) ? 'DesactivarDebugPHP' : 'ActivarDebugPHP' );
                    break;
                case 'CH_BorrarPHP' :
                    $Base.cmd((Marcado) ? 'DesactivarBorrarLogPHP' : 'ActivarBorrarLogPHP' );
                    break;
/*                case 'CH_Actualizar' :
                    $Base.cmd((Marcado) ? 'DesactivarActualizarCache' : 'ActivarActualizarCache' );*/
//                    if ($(this).attr('marcado') !== 'false') { $Base.MostrarMensaje('Cache actualizada.'); }
                    break;
                // htaccess
                case 'CH_CompresionGZip' :
                    $Base.cmd((Marcado) ? 'DesactivarCompresionGZip' : 'ActivarCompresionGZip' );
                    break;
                case 'CH_CacheImagenes' :
                    $Base.cmd((Marcado) ? 'DesactivarCacheImagenes' : 'ActivarCacheImagenes' );
                    break;
                case 'CH_Mantenimiento' :
                    $Base.cmd((Marcado) ? 'DesactivarMantenimiento' : 'ActivarMantenimiento' );
                    break;
                case 'CH_CheckSpelling' :
                    $Base.cmd((Marcado) ? 'DesactivarCheckSpelling' : 'ActivarCheckSpelling' );
                    break;
                case 'CH_Cors' :
                    $Base.cmd((Marcado) ? 'DesactivarCors' : 'ActivarCors' );
                    break;
                // JavaScript
                case 'CH_Consola' :
                    $Base.cmd((Marcado) ? 'DesactivarConsola' : 'ActivarConsola' );
                    $Base.Debug((Marcado) ? false : true);
                    break;
                case 'CH_PausarBanner' :
                    $Base.cmd((Marcado) ? 'DesactivarPausarBanner' : 'ActivarPausarBanner' );
                    $Banner.OpcionesCanvas.Pausar = (Marcado) ? false : true;
                    break;
                case 'CH_MostrarFPS' :
                    $Base.cmd((Marcado) ? 'DesactivarFPSBanner' : 'ActivarFPSBanner' );
                    $Banner.OpcionesCanvas.MostrarFPS = !Marcado;
                    document.getElementById("Cabecera_Stats").style.display = (!Marcado) ? "block" : "none";
                    break;
            }
        });
        
        /*Boton guardar del lab */
        $("#BarraNavegacion_LabGuardar").off("click").on("click", function() { $Admin.Lab_Guardar(); });
        /*Boton guardar cache del lab */
        $("#BarraNavegacion_LabGuardarCache").off("click").on("click", function() { $Admin.Lab.Explorar_GenerarCache(); });
        /* Actualizo la lista del lab para mostrar todos los elementos */
        $("#BarraNavegacion .Lab_Explorador_Check").off("click").on("click", function() { $Admin.Lab.Explorar_ClickCheck($(this)); });                

        /* Re-emplazo la función $Lab.Modificado por una versión para administradores */
        $Lab.Modificado = function() {
            console.log("Lab.Modificado (ver Admin)", $("body").attr("tipo"), $("body").attr("modificado"), $("body").attr("administrador33"));
            if ($("body").attr("tipo") === "Lab" && $("body").attr("modificado") === "true" && $("body").attr("administrador33") !== "undefined") { 
                if ($Lab.Guardando === false) {
                    if (confirm("No has guardado el archivo, deseas guardarlo antes de continuar?") === true) { 
                        $Admin.Lab.Guardar(); 
                        return true; 
                    }
                    else { // cancelar guardar lab
                        return false;
                    }
                }
                else {
                    return true;
                }
            }
        };
        
        // Marco/desmarco el checkbox de las opciones administrativas (pausar banner)
//        $("#CH_PausarBanner").attr({ "marcado" : $Banner.OpcionesCanvas["Pausar"] });
        
        
        /* Re-emplazo la función $Base.ResetearTimerTiempoSesion por una versión para administradores */
        $Base.ResetearTimerTiempoSesion = function () { 
            // hay un timer activo
            if ($Base.TimerTiempoSesion !== 0) {
                clearTimeout($Base.TimerTiempoSesion);
            }
            $Base.TimerTiempoSesion = setTimeout(function() {  $Admin.Desloguear(); }, 30 * 60 * 1000);
//            $Base.TimerTiempoSesion = setTimeout(function() { $Base.MostrarMensaje("La sesión ha expirado, y has sido deslogueado.", "Sesión expirada"); $Admin.Desloguear(); }, 3000)
        };
        
        $Base.ResetearTimerTiempoSesion();
        
        // cambio el tipo del input password para que en el chrome no muestre "No es seguro" en la URL
        document.getElementById('devildrey33_Password').setAttribute('type', 'text');
        
        //$Lab.ResaltarArchivoActual(Archivo, true);
    };
    
    /* Función para desloguear, vuelve a dejar toda la web a nivel usuario eliminando el código de administración */
    this.Desloguear = function() {
        console.log("Admin.Desloguear");
        $Base.Cargando("TRUE");

        nAjax = $.post($Base.Raiz + "cmd/Desloguear.cmd");
        nAjax.done(function(data) {
            Datos = JSON.parse(data);
            console.log("Admin.Desloguear");
            $("#BarraNavegacion_Explorador").html(Datos["HTML"]);            
            $Lab.EnlazarEventosExplorador();            
            $Base.Cargando("FALSE");
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
            $('body').attr({ 'administrador33' : false });
            /* Elimino el código de la función $Base.ResetearTimerTiempoSesion */
            $Base.ResetearTimerTiempoSesion = function () { };
            // Elimino el temporizador de la sesión
            if ($Base.TimerTiempoSesion !== 0) { clearTimeout($Base.TimerTiempoSesion); }
            $Base.TimerTiempoSesion = 0;
        });
        nAjax.fail(function( jqXHR, textStatus, tError ) { 
            console.log("Admin.Desloguear EscanearEjemplos Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
            $('body').attr({ 'administrador33' : false });
        });                
        $Base.ClickMenu(0);
        setTimeout(function() { $('#Marco33').html(''); }, 500);    
    };
    
};

var $Admin = new ObjetoAdmin;
// Requerido por si se recarga toda la pagina siendo admin
$(window).on("load", function() { $Admin.Iniciar(); });


/* Avisa cuando recargas la pagina sin guardar el codumento del Lab */
window.onbeforeunload = function() { 
    console.log("window.onbeforeunload", $("body").attr("tipo"), $("body").attr("modificado"), $("body").attr("administrador33"));
    if (typeof $Admin !== "undefined") {
        if ($("body").attr("tipo") === "Lab" && $("body").attr("modificado") === "true" && $("body").attr("administrador33") === "undefined") {
            return "Atención no has guardado el documento!!";
        }
    }
};
