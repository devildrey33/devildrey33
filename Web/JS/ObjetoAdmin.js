/* Objeto que contiene las funciones para el administrador */

ObjetoAdmin = function() {

    this.Iniciar = function() {        
        
        console.log("Admin.Iniciar");
        /* Oculto la animación cargando de la parte inferior derecha */
        $Base.Cargando("FALSE");
        /* Cargo el CSS para el administrador */
        $Base.CargarCSS("Admin.css");
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
        /* Boton explorar lab */
//        $('#CH_Lab').click(function(e){ $Base.CargarURL('/Web/Lab-Explorar'); $Base.ClickMenu(0); });  /* EXPLORAR LAB */
        /* Boton editar entradas */
//        $('#CH_Entradas').click(function(e){ $Base.CargarURL('/Web/Editar-Entradas'); $Base.ClickMenu(0); });  /* EXPLORAR LAB */        
        /* Boton limpiar baneados */ 
        $('#CH_IPSBan').click(function(e){ $Base.cmd("LimpiarBaneados"); });  
        /* CheckBox del marco de administración */
        $('#BarraPrincipal_Marco33 .CheckBox').off("click").on("click", function(e){ 
            var Marcado = ($(this).attr('marcado') === 'false') ? false : true;
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
                case 'CH_Actualizar' :
                    $Base.cmd((Marcado) ? 'DesactivarActualizarCache' : 'ActivarActualizarCache' );
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
                    $Base.ObjetoCanvas_Depurar = (Marcado) ? true : false;
/*                    if (Marcado)  { Banner_Depurar = true;  }
                    else                                      { Banner_Depurar = false; }*/
                    break;
            }
        });
        /*Boton guardar del lab */
        $("#BarraNavegacion_LabGuardar").off("click").on("click", function() { $Admin.Lab_Guardar(); });
        /*Boton guardar cache del lab */
        $("#BarraNavegacion_LabGuardarCache").off("click").on("click", function() { $Admin.LabExplorar_GenerarCache(); });
        /* Actualizo la lista del lab para mostrar todos los elementos */
        $("#BarraNavegacion .Lab_Explorador_Check").off("click").on("click", function() { $Admin.LabExplorar_ClickCheck($(this)); });                

        /* Re-emplazo la función $Lab.Modificado por una versión para administradores */
        $Lab.Modificado = function() {
            console.log("Lab.Modificado (ver Admin)", $("body").attr("tipo"), $("body").attr("modificado"), $("body").attr("administrador33"));
            if ($("body").attr("tipo") === "Lab" && $("body").attr("modificado") === "true" && $("body").attr("administrador33") !== "undefined") { 
                if ($Lab.Guardando === false) {
                    if (confirm("No has guardado el archivo, deseas guardarlo antes de continuar?") === true) { 
                        $Admin.Lab_Guardar(); 
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
        $("#CH_PausarBanner").attr({ "marcado" : !$Base.ObjetoCanvas_Depurar });
        
        
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
    
    

    /***************/
    /* Laboratorio */
    /***************/    
    
    this.Lab_Guardar = function() {        
        $Lab.Guardando = true;
        var Archivo = $("#MarcoNavegacionLab").attr("pagina");
        Codigo = $Lab.Editor.getValue();
//        console.log("Admin.Lab_Guardar", Archivo, Codigo, $("body").attr("modificado"));
        if ($("body").attr("modificado") === "false") {
            $Base.MostrarMensaje("No se ha modificado el archivo");
            return;
        }
        $Base.Cargando("TRUE");
        $Lab.Original = Codigo;
        // Es un archivo nuevo, necesita una nueva ubicación
/*        if (Archivo === "Ejemplos/Nuevo.html" || Archivo === "Ejemplos/NuevoCanvas2D.html", || Archivo === "Ejemplos/NuevoCanvasTHREE.html") {
            
        }
        else { // Sobre-escritura de un archivo normal*/
            $.post($Base.Raiz + "cmd/LabGuardarEjemplo.cmd", { "Archivo" : Archivo, "Codigo" : Codigo }).done(function(data) {
                Datos = JSON.parse(data);           
                if (Datos["Estado"] === 1) { // Error no es admin
                    console.log("Admin.Lab_Guardar Ajax Error! no es admin");
                    $("#BarraNavegacion_Explorador").html(Datos["HTML"]);
                    $Lab.EnlazarEventosExplorador();
                    $('body').attr({ 'administrador33' : false });
                    $Base.ClickMenu(0);
                    setTimeout(function() { $('#Marco33').html(''); }, 500);                    
    //                $Base.MostrarMensaje("Error!, no eres administrador.");
    //                $Base.Loguear($Admin.Lab_Guardar);
                    $Base.MostrarLogin($Admin.Lab_Guardar);
    /*                $("#VentanaLogin").attr({ "Visible" : "true" }); 
                    setTimeout(function() { 
                        if (typeof localStorage["Comentarios_Usuario"] === 'undefined') { $("#devildrey33_Usuario").focus(); }
                        else                                                            { $("#devildrey33_Password").focus(); }
                    }, 200);
                    $Base.FPL = $Admin.Lab_Guardar;*/
                }
                else {            
                    console.log("Admin.Lab_Guardar Ajax " + Datos["Mensaje"] );
                    $Base.MostrarMensaje(Datos["Mensaje"]);
                    $("body").attr({"modificado" : "false"});
                    $Lab.Guardando = false;
                }
                $Base.Cargando("FALSE");
                $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);            
                if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
            }).fail(function( jqXHR, textStatus, tError ) {
                console.log("Admin.Lab_Guardar Error ajax", jqXHR, textStatus, tError);
                $Base.MostrarErrorAjax(jqXHR.status, false);
                $Lab.Guardando = false;
            });    
//        }
    };
    
    // DEPRECATED
    /* Inicia la carpeta ejemplos del explorador de archivos del lab (zona admin) */
/*    this.LabExplorar_IniciarCarpetaEjemplos = function() {
        console.log("Admin.LabExplorar_IniciarCarpetaEjemplos");
        $("#MarcoNavegacion .Lab_Archivo").off("click").on("click", function() { $Lab.ClickArchivo($(this), "Lab_Explorador"); });
        $("#MarcoNavegacion .Lab_Directorio").off("click").on("click", function() { $Lab.ClickDirectorio($(this)); });
//        $("#MarcoNavegacion .Lab_Explorador_Check").off("click").on("click", function() { $Admin.LabExplorar_ClickCheck($(this)); });        
    };*/
    
    
    /* Función para cuando se hace click en un checkbox de explorador del laboratorio (SOLO ADMIN) */
    this.LabExplorar_ClickCheck = function(Objeto) {
        console.log("Admin.LabExplorar_ClickCheck", Objeto);
        var Hijos = Objeto.next().next();
        var Check = Objeto.is(':checked');
        // http://stackoverflow.com/questions/426258/checking-a-checkbox-with-jquery
        if (Check) { Hijos.find("input[type=checkbox]").each(function(){ this.checked = true; }); }
        else       { Hijos.find("input[type=checkbox]").each(function(){ this.checked = false; }); }
        // Compruebo si se ha modificado la lista
        var Modificado = false;
        $("#BarraNavegacion_LabMarcoExplorador").find("input[type=checkbox]").each(function() { 
            if ((this.checked === true && $(this).attr('def') == '1') || (this.checked === false && $(this).attr('def') == '0')) { Modificado = true; }
        });

        if (Modificado == false) { $("body").removeAttr("cachemodificada"); }
        else                     { $("body").attr({ "cachemodificada" : true });  }

    };
    
    

    /* Función para generar el archivo de la cache que contiene los elementos permitidos para verse en el lab (SOLO ADMIN) */
    this.LabExplorar_GenerarCache = function() {
        $Base.Cargando("TRUE");
        var Lista = [];
        $("#BarraNavegacion_LabMarcoExplorador").find("input[type=checkbox]").each(function(){ 
            if (this.checked === true) {
                Objeto = $(this).next();
                Lista.push(Objeto.attr("path"));
            }
        });
        if (Lista.length === 0) { $Base.MostrarMensaje("No se han seleccionado archivos ni directorios!"); return; }
        console.log("Admin.LabExplorar_GenerarCache", Lista);
        JLista = JSON.stringify(Lista);

        nAjax = $.post($Base.Raiz + "cmd/Lab_GenerarCache.cmd", { "Lista" : JLista });
        nAjax.done(function(data) {
            Datos = JSON.parse(data);
            console.log("Lab_GenerarCache Completo!");
            $Base.MostrarMensaje("Cache del laboratorio generada!");
            $Base.Cargando("FALSE");
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        });
        nAjax.fail(function( jqXHR, textStatus, tError ) { 
            console.log("Admin.LabExplorar_GenerarCache Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });                    
        // Asigno el valor por defecto a cada checkbox
        $("#BarraNavegacion_LabMarcoExplorador").find("input[type=checkbox]").each(function() { 
            if (this.checked === true)  { $(this).attr({ 'def' : '1' }); }
            else                        { $(this).attr({ 'def' : '0' }); }
        });
        // Oculto el boton para guardar la cache
        $("body").removeAttr("cachemodificada");
    };    
    





    /********/
    /* Log2 */ 
    /********/
    
    /* TODO :
     *  Al expandir una fila s'ha de posar un buto per mostrar totes les dades (inclus si no están marcades) 
     *  Butons per tancar les divs expandits 
     *  Duplicar els butons de les dates i posar els segons a sota de tot de la taula 
     *  Començar a pensar en el buscador de texte... s'ha de tenir en compte que ara tambè hi han pagines per cada dia que poden estar ocultes 
     *  Crear stats dels navegadors i els sistemas operatius */
    
    this.Log_IpAdmin = "0.0.0.0";
    
    this.Log_ArchivoChange = function() {
        var Combo = document.getElementById("Log_ArchivoActual");
        
        this.Log_CargarArchivo(Combo.options[Combo.selectedIndex].innerHTML);
    };
    
    
    this.Log_CargarArchivo = function(Archivo) {
        $Base.Cargando("TRUE");
        $("#Log_Lista").html("").css({ display : "none" });
        $("#Log_Stats").html("");
        $("#MarcoNavegacion").css({ cursor : 'progress' });
        $("#Log_Cargando").attr("visible", true);
        $("#Log_CargandoF1").css({ color : "#fff" });
        nAjax = $.post($Base.Raiz + "cmd/ObtenerLog.cmd", { "Archivo" : Archivo }).done(function(data) {
            Datos = JSON.parse(data);
//            $Base.MostrarMensaje(Datos["HTML"]);
            document.getElementById("Log_Datos").value = Datos["DatosLog"];
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }            
            $("#Log_CargandoF1").css({ color : "#999" });
            $("#Log_CargandoF2").css({ color : "#FFF" });
            setTimeout(function() { $Admin.Log_Actualizar2() }, 500);
            
        }).fail(function(jqXHR, textStatus, tError) { 
            console.log("Admin.Log_CargarArchivos Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error al cargar el archivo de log...");
            $Base.Cargando("FALSE");
        });
        
    };

    this.Log_Actualizar2 = function() {
        // Fase 1 : llegir el log linea a linea i fer un array ordenat per ips
        
        // Separo el archivo de log en lineas para poder obtener la información de cada una de ellas.
        var Texto = document.getElementById("Log_Datos").value;
        this.Log_Lineas = Texto.split("\n");
        // Borro la lista de ips (si existe)
        this.Log_Ips = [];
        this.Log_TotalTipos = { 
            "Ataques"      : 0,
            "Advertencias" : 0,
            "Errores404"   : 0,
            "Zips"         : 0,
            "Documentos"   : 0,
            "CSS"          : 0,
            "JS"           : 0,
            "Imagenes"     : 0,
            "Otros"        : 0
        };
        
        // Extraigo los datos de cada linea y los ordeno por ip
        for (var i = 0; i < this.Log_Lineas.length; i++) {
            this.Log_AgregarLinea(this.Log_Lineas[i], i);
        }
        
        // Actualizo los labels con los totates de los tipos
        /* Cambio los labels de los checkbox y agrego los totales de peticiones */
        $("#LabelAtaques span").html(       "Ataques ("        + this.Log_TotalTipos["Ataques"]      + ")");
        $("#LabelAdvertencias span").html(  "Advertencias ("   + this.Log_TotalTipos["Advertencias"] + ")");
        $("#LabelErrores404 span").html(    "Errores 404 ("    + this.Log_TotalTipos["Errores404"]   + ")");
        $("#LabelZips span").html(          "Zips ("           + this.Log_TotalTipos["Zips"]         + ")");
        $("#LabelErrores404 span").html(    "Errores 404 ("    + this.Log_TotalTipos["Errores404"]   + ")");
        $("#LabelDocumentos span").html(    "Documentos ("     + this.Log_TotalTipos["Documentos"]   + ")");
        $("#LabelCSS span").html(           "CSS ("            + this.Log_TotalTipos["CSS"]          + ")");
        $("#LabelJS span").html(            "JavaScript ("     + this.Log_TotalTipos["JS"]           + ")");
        $("#LabelImagenes span").html(      "Imagenes ("       + this.Log_TotalTipos["Imagenes"]     + ")");
        $("#LabelOtros span").html(         "Otros ("          + this.Log_TotalTipos["Otros"]        + ")");        
        
        var TotalNavegadores = 0;
        var TotalBots = 0;
        var TotalDesconocido = 0;
        var Checks = this.Log_ObtenerChecks();

        // Enumero por cada ip los navegadores/bots y su sistema operativo 
        if (this.Log_Ips.length > 0) {
            for (var i = 0; i < this.Log_Ips.length; i++) {
                var Info = this.Log_ObtenerNavegador2(this.Log_Ips[i]["Ua"][0]);            
                this.Log_Ips[i]["Info"] = Info;            
                switch (Info["Tipo"]) {
                    case 0 : TotalNavegadores ++;   break;
                    case 1 : TotalBots ++;          break;
                    case 2 : TotalDesconocido ++;   break;
                }
                
                // Creo una lista ordenada de los datos mas destacados
                var Destacados = [];
                for (var e = 0; e < this.Log_Ips[i]["Datos"].length; e++) {
//                    if (Checks[this.Log_Ips[i]["Datos"][e]["Relevancia"]] === true) {
                        Destacados.push(this.Log_Ips[i]["Datos"][e]); 
//                    }
                }

                // Si hay datos destacados
                if (Destacados.length > 0) {                
                    // Ordenar el array de destacados por el tipo de URL
                    Destacados.sort(function(a, b) { return (b["Relevancia"] - a["Relevancia"]); });
                    this.Log_Ips[i]["Destacados"] = Destacados;
                }                
            }
        }                

        // Modifico los totales de los checkbox
        $("#LabelNavegadores span").html(	"Navegadores (" + TotalNavegadores  + ")");
        $("#LabelBots span").html(		"Bots ("        + TotalBots         + ")");
        $("#LabelDesconocido span").html(	"Desconocido (" + TotalDesconocido  + ")");
        
        // Colores de los divs del paso actual de carga
        $("#Log_CargandoF2").css({ color : "#999" });
        $("#Log_CargandoF3").css({ color : "#FFF" });
        
        
        setTimeout( function() { $Admin.Log_CrearStats(); }, 500);        
    };
    
    this.Log_ParsearRespuesta2 = function(Respuesta) {        
        R = Respuesta.split(" ");
        Str = "";
        switch (R[0]) {
            case "200" : Str = "<span class='Log_Entrada_Documento'>Ok</span>"; 			break;
            case "301" : Str = "<span class='Log_Entrada_Advertencia'>Moved Permanently</span>"; 	break;
            case "302" : Str = "<span class='Log_Entrada_Documento'>Found</span>"; 			break;
            case "304" : Str = "<span class='Log_Entrada_Documento'>Not Modified</span>"; 		break;
            case "403" : Str = "<span class='Log_Entrada_Ataque'>Forbidden</span>";                     break;
            case "404" : Str = "<span class='Log_Entrada_Error'>Not Found</span>";                      break;
        }
        return Str;
    };
    
    // relevancia de la url definida por colores del 9 al 1
    this.Log_ColorRelevancia = function(Relevancia, Ret = 0) {
        if (Ret === 404) return "purple";
        switch (Relevancia) {
/*            case 9 : return "red";      break;// Ataque
            case 8 : return "darkcyan"; break;// Advertencia
            case 7 : return "purple";   break;// error 404
            case 6 : return "olive";    break;// zips
            case 5 : return "green";    break;// documento
            case 4 : return "blue";     break;// css
            case 3 : return "brown";    break;// js
            case 2 : return "grey";     break;// imagen
            case 1 : return "black";    break;// normal*/
            case 9 : return "Log_Entrada_Ataque";      break;// Ataque
            case 8 : return "Log_Entrada_Advertencia"; break;// Advertencia
            case 7 : return "Log_Entrada_Error";       break;// error 404
            case 6 : return "Log_Entrada_Zip";         break;// zips
            case 5 : return "Log_Entrada_Documento";   break;// documento
            case 4 : return "Log_Entrada_CSS";         break;// css
            case 3 : return "Log_Entrada_JS";          break;// js
            case 2 : return "Log_Entrada_Imagen";      break;// imagen
            case 1 : return "Log_Entrada_Otros";       break;// normal
        }
        return "black";
    };
    
    this.Log_ObtenerChecks = function() {
        return { 
            9 : document.getElementById('ChAtaques').checked,
            8 : document.getElementById('ChAdvertencias').checked,
            7 : document.getElementById('ChErrores404').checked,
            6 : document.getElementById('ChZip').checked,
            5 : document.getElementById('ChDocumentos').checked,
            4 : document.getElementById('ChCSS').checked,
            3 : document.getElementById('ChJS').checked,
            2 : document.getElementById('ChImagenes').checked,
            1 : document.getElementById('ChOtros').checked
        };
    };
    
    this.Log_CrearTablaDatos = function() {        
        var Pagina = -1;
        var Filas = "";
        var Fecha = "";
        var Checks = this.Log_ObtenerChecks();
        var Botones = "<div class='Log_ListaBotones'>";
                            
        for (var i = 0; i < this.Log_Ips.length; i++) {
            // Si hay datos destacados
            if (this.Log_Ips[i]["Destacados"].length > 0) {                
                // Nueva página
                if (Fecha !== this.Log_Ips[i]["Fecha"]) {
                    Fecha = this.Log_Ips[i]["Fecha"];                    
                    Filas += "</div><div class='Log_Lista' id='Log_ListaP" + (++Pagina) + "'" + ((Pagina === 0) ? " style='display:block'" : "") + ">";
                    Botones += "<input class='Log_ListaBoton' id='Log_ListaBotonaa" + Pagina + "' type='radio' name='Log_ListaBoton'" + ((Pagina === 0) ? " checked='checked'" : "") + ">" +
                               "<label for='Log_ListaBoton" + Pagina + "'>" + Fecha + "</label>";
                               
                }
                
                
                // Color de la url
                var ColorNavegador = "black";
                var ColorPeticiones = " style='color:#444'";

                // Color del navegador
                switch (this.Log_Ips[i]["Info"]["Tipo"]) {
                    case 0 : ColorNavegador = 'Log_Cliente_Navegador';   break;
                    case 1 : ColorNavegador = 'Log_Cliente_Bot';         break;
                    case 2 : ColorNavegador = 'Log_Cliente_Desconocido'; break;
                }            
                // Color para el número de peticiones
                if (this.Log_Ips[i]["Datos"].length > 200) { ColorPeticiones = " style='color:orange'"; }
                if (this.Log_Ips[i]["Datos"].length > 500) { ColorPeticiones = " style='color:red'";    }

                // Color identificativo para los ataques
                var Ataque = "";
                if (this.Log_Ips[i]["Destacados"][0]["Relevancia"] === 9) {
                    Ataque = " ataque='true'";
                }
                if (this.Log_IpAdmin === this.Log_Ips[i]["Ip"]) {
                    Ataque = " ataque='admin'";
                }
                
                var Destacados = -1;
                for (var e = 0; e < this.Log_Ips[i]["Destacados"].length; e++) {
                    if (Checks[this.Log_Ips[i]["Destacados"][e]["Relevancia"]] === true) {
                        Destacados = e;
                        break;
                    }
                }

                var ColorUrl = (Destacados > -1) ? this.Log_ColorRelevancia(this.Log_Ips[i]["Destacados"][Destacados]["Relevancia"]) : "Log_Entrada_Otros";
                
                // La cabecera lleva la IP, la url mas relevante, el tiempo de inicio y final, numero de requests, y el user agent simplificado (SO, NAVEGADOR) o Tipo de BOT
                Filas +=  "<div class='EntradaLog' id='EntradaLog" + i + "' style='display:" + ((Destacados > -1) ? "table" : 'none') + "'>" + // Contenedor para una Ip del log con todas sus peticiones
                        "<div class='EntradaLog_TablaFila'" + Ataque + ">" +
                            "<div class='EntradaLog_Fila' tipo='" + this.Log_Ips[i]["Info"]["Tipo"] + "'>" +
                                "<div class='EntradaLog_Ip'>" + this.Log_Ips[i]["Ip"] + "</div>" +
                                "<div class='EntradaLog_Url " + ColorUrl + "'>" + ((Destacados > -1) ? this.Log_Ips[i]["Destacados"][Destacados]["Url"] : "") + "</div>" +
                                "<div class='EntradaLog_Peticiones'" + ColorPeticiones + ">" + this.Log_Ips[i]["Destacados"].length + "</div>" + // Peticiones
                                "<div class='EntradaLog_TiempoInicio'>" + this.Log_Ips[i]["Datos"][0]["Hora"] + "</div>" +
                                "<div class='EntradaLog_TiempoFin'>" + this.Log_Ips[i]["Datos"][this.Log_Ips[i]["Datos"].length - 1]["Hora"] + "</div>" +
                                "<div class='EntradaLog_InfoClienteWeb " + ColorNavegador + "'>" + this.Log_Ips[i]["Info"]["NombreCorto"] + " " + this.Log_Ips[i]["Info"]["PlataformaCorto"] + "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='EntradaLog_Datos'>" +
                        "</div>" +
                    "</div>";
            }
        }
        Filas += "</div>";
        Botones += "</div>";
        $("#Log_Lista").html(Botones + Filas);
        
        
        $(".EntradaLog_Fila").off("click").on("click", function(e) {             
            //var tn = (e.target.parentNode.id !== "") ? e.target.parentNode.parentNode.id : e.target.parentNode.parentNode.id;
            var parent = e.target;
            while (parent.id === "") {
                parent = parent.parentNode;
            }
            
            $Admin.Log_ExpandirIp(parent.id);
        });
        
        $(".Log_ListaBoton").on("change", function(e) {
            var Id = e.target.id.slice(14);
            $(".Log_Lista").css({ display : "none" });
            $("#Log_ListaP" + Id).css({ display : "block" });
        });
        
        $("#Log_CargandoF4").css({ color : "#999" });
        $("#Log_Cargando").attr("visible", false);
        $("#MarcoNavegacion").css({ cursor : 'auto' });
        $("#Log_Lista").css({ display : "block" });

        $Base.Cargando("FALSE");        
    };
    
    this.Log_CrearStats = function() {
        this.Log_ArrayDocumentos = [];
        this.Log_ArrayErrores = [];
        this.Log_ArrayImagenes = [];
        this.Log_ArrayObjetos = [];
        for (var i = 0; i < this.Log_Ips.length; i++) {
            for (var e = 0; e < this.Log_Ips[i]["Datos"].length; e++) {
                switch (this.Log_Ips[i]["Datos"][e]["Relevancia"]) {
                    case 2  : this.Log_AgregarImagen(this.Log_Ips[i]["Datos"][e]["Url"]);   break;
                    case 5  : this.Log_AgregarDocumento(this.Log_Ips[i]["Datos"][e]["Url"]); break;
                    case 7  : this.Log_AgregarError(this.Log_Ips[i]["Datos"][e]["Url"]);     break;
                    default : this.Log_AgregarObjeto(this.Log_Ips[i]["Datos"][e]["Url"], this.Log_Ips[i]["Datos"][e]["Relevancia"]);    break;
                }
            }
        }        
        
        this.Log_ArrayDocumentos.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        this.Log_ArrayErrores.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        this.Log_ArrayImagenes.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        this.Log_ArrayObjetos.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        
        var TotalEntradas = 20;
        
        // Imprimo la tabla de los documentos
        var Codigo = "<div class='Log_Stat'>" + 
            "<h2>Documentos más solicitados</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.Log_ArrayDocumentos.length) { break; }
            Codigo += "<tr>" + 
                        "<td style='color:green'>" + this.Log_ArrayDocumentos[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='background-color:green; width:" + (300 * this.Log_ArrayDocumentos[i]["Contador"] / this.Log_ArrayDocumentos[0]["Contador"]) + "px'>" +this.Log_ArrayDocumentos[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";

        // Imprimo la tabla de los Errores
        Codigo += "<div class='Log_Stat'>" + 
            "<h2>Documentos de Error</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.Log_ArrayErrores.length) { break; }
            Codigo += "<tr>" + 
                        "<td style='color:purple'>" + this.Log_ArrayErrores[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='background-color:purple; width:" + (300 * this.Log_ArrayErrores[i]["Contador"] / this.Log_ArrayErrores[0]["Contador"]) + "px'>" +this.Log_ArrayErrores[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";
        
        // Imprimo la tabla de las imagenes
        Codigo += "<div class='Log_Stat'>" + 
            "<h2>Imagenes más solicitadas</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.Log_ArrayImagenes.length) { break; }
            Codigo += "<tr>" + 
                        "<td style='color:grey'>" + this.Log_ArrayImagenes[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='background-color:grey; width:" + (300 * this.Log_ArrayImagenes[i]["Contador"] / this.Log_ArrayImagenes[0]["Contador"]) + "px'>" +this.Log_ArrayImagenes[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";
        
        // Imprimo la tabla de los Objetos
        Codigo += "<div class='Log_Stat'>" + 
            "<h2>Objetos más solicitados</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.Log_ArrayObjetos.length) { break; }
            Codigo += "<tr>" + 
                        "<td class='" + this.Log_ColorRelevancia(this.Log_ArrayObjetos[i]["Tipo"]) + "'>" + this.Log_ArrayObjetos[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='width:" + (300 * this.Log_ArrayObjetos[i]["Contador"] / this.Log_ArrayObjetos[0]["Contador"]) + "px'>" +this.Log_ArrayObjetos[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";
        
        
        document.getElementById("Log_Stats").innerHTML = Codigo;
        
        $("#Log_CargandoF3").css({ color : "#999" });
        $("#Log_CargandoF4").css({ color : "#FFF" });
        setTimeout(function() { $Admin.Log_CrearTablaDatos(); }, 500);
        
    };
    
    this.Log_AgregarDocumento = function(Url) {
        for (var i = 0; i < this.Log_ArrayDocumentos.length; i++) {
            if (this.Log_ArrayDocumentos[i]["Url"] === Url) {
                this.Log_ArrayDocumentos[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1 };
        this.Log_ArrayDocumentos.push(Ret);
    };
    
    this.Log_AgregarError = function(Url) {
        for (var i = 0; i < this.Log_ArrayErrores.length; i++) {
            if (this.Log_ArrayErrores[i]["Url"] === Url) {
                this.Log_ArrayErrores[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1 };
        this.Log_ArrayErrores.push(Ret);        
    };
    
    this.Log_AgregarImagen = function(Url) {
        for (var i = 0; i < this.Log_ArrayImagenes.length; i++) {
            if (this.Log_ArrayImagenes[i]["Url"] === Url) {
                this.Log_ArrayImagenes[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1 };
        this.Log_ArrayImagenes.push(Ret);        
    };
    
    this.Log_AgregarObjeto = function(Url, Tipo) {
        for (var i = 0; i < this.Log_ArrayObjetos.length; i++) {
            if (this.Log_ArrayObjetos[i]["Url"] === Url) {
                this.Log_ArrayObjetos[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1, "Tipo" : Tipo };
        this.Log_ArrayObjetos.push(Ret);        
    };
    
    this.Log_ExpandirIp = function(Id, MostrarTodo = false) {
        var PosIp = Id.slice(10); // EntradaLog ocupa 10 caracteres (me quedo solo con el número)        
        if (this.Log_Ips[PosIp]["Abierto"] === false) {
            var Checks = this.Log_ObtenerChecks();
            
            $("#" + Id).attr("abierto", true);
//            var PosIp = Id.slice(10); // EntradaLog ocupa 10 caracteres (me quedo solo con el número)

            var ColorNavegador = "black";

            // Color del navegador
            switch (this.Log_Ips[PosIp]["Info"]["Tipo"]) {
                case 0 : ColorNavegador = 'Log_Cliente_Navegador';   break;
                case 1 : ColorNavegador = 'Log_Cliente_Bot';         break;
                case 2 : ColorNavegador = 'Log_Cliente_Desconocido'; break;
            }            


            // Codigo para el titulo y la tabla con la información básica
            var Codigo = "<h1 class='Log_Titulo1'>" + this.Log_Ips[PosIp]["Ip"] + "</h1>" +
            "<table class='Log_TituloTabla'>" +
                "<tr>" + "<td>Sistema</td>"         + "<td>:</td>" + "<td class='" + ColorNavegador + "'>" + this.Log_Ips[PosIp]["Info"]["Plataforma"]                                     + "</td>" + "</tr>" +
                "<tr>" + "<td>Navegador</td>"       + "<td>:</td>" + "<td class='" + ColorNavegador + "'>" + this.Log_Ips[PosIp]["Info"]["Nombre"]                                         + "</td>" + "</tr>" +
                "<tr>" + "<td>Fecha</td>"           + "<td>:</td>" + "<td>" + this.Log_Ips[PosIp]["Fecha"]                                                  + "</td>" + "</tr>" +
                "<tr>" + "<td>Conectado desde</td>" + "<td>:</td>" + "<td>" + this.Log_Ips[PosIp]["Datos"][0]["Hora"]                                       + "</td>" + "</tr>" +
                "<tr>" + "<td>Conectado hasta</td>" + "<td>:</td>" + "<td>" + this.Log_Ips[PosIp]["Datos"][this.Log_Ips[PosIp]["Datos"].length - 1]["Hora"] + "</td>" + "</tr>" +            
                "<tr>" + "<td>User Agent</td>"      + "<td>:</td>" + "<td>";
                for (var i = 0; i < this.Log_Ips[PosIp]["Ua"].length; i++) {
                    Codigo += "<pre class='Log_UserAgent' title='" + this.Log_Ips[PosIp]["Ua"][i] + "'>" + this.Log_Ips[PosIp]["Ua"][i] + "</pre>";
                }
            Codigo += "</td>" + "</tr>" + "</table>";
/*            for (var i = 0; i < this.Log_Ips[PosIp]["Ua"].length; i++) {
                Codigo += "<pre class='Log_UserAgent' title='" + this.Log_Ips[PosIp]["Ua"][i] + "'>" + this.Log_Ips[PosIp]["Ua"][i] + "</pre>";
            }*/
            
            // Imprimo todos los datos de esta ip
            Codigo += "<div class='Log_TablaEntrada'>";
            Codigo +=   "<div class='Log_TablaEntradaFila' style='background-color:#222; color:#FFF !important; font-weight:bold;'>" +
                            "<div>Hora</div>" +
                            "<div>Tipo</div>" +
                            "<div>Url</div>" +
                            "<div></div>" +
                            "<div>Salida</div>" +
                            "<div style='color:white'>Tamaño</div>" +
                        "</div>";
            for (var i = 0; i < this.Log_Ips[PosIp]["Datos"].length; i++) {
                if (Checks[this.Log_Ips[PosIp]["Datos"][i]["Relevancia"]] === true || MostrarTodo === true) {                    
                    Codigo += "<div class='Log_TablaEntradaFila' tipo='" + this.Log_Ips[PosIp]["Datos"][i]["Relevancia"] + "'>" +
                            "<div>" + this.Log_Ips[PosIp]["Datos"][i]["Hora"] + "</div>" +
                            "<div>" + this.Log_Ips[PosIp]["Datos"][i]["Peticion"] + "</div>" +
                            "<div class='" + this.Log_ColorRelevancia(this.Log_Ips[PosIp]["Datos"][i]["Relevancia"]) + "'>" + this.Log_Ips[PosIp]["Datos"][i]["Url"] + "</div>" +
                            "<div>" + this.Log_ParsearRespuesta2(this.Log_Ips[PosIp]["Datos"][i]["Ret"]) + "</div>" +
                            "<div>" + this.Log_Ips[PosIp]["Datos"][i]["Ret"] + "</div>" +
                            "<div>" + this.Log_Ips[PosIp]["Datos"][i]["Tam"]  + "</div>" +
                        "</div>";
                }
            }
            Codigo += "</div>" + 
            "<div class='Log_ContenidoOculto'>Mostrar contenido oculto.</div>";


            $("#" + Id + " > .EntradaLog_Datos").html(Codigo);
        }
        else {
            $("#" + Id).attr("abierto", false);
            $("#" + Id + " > .EntradaLog_Datos").html("");
        }
        this.Log_Ips[PosIp]["Abierto"] = !this.Log_Ips[PosIp]["Abierto"];
    };

    this.Log_TipoUrl = function(Url, Ret = 0) {
        var nUrl = Url.toLowerCase();
        if (nUrl.indexOf("banearip.php") !== -1)        {	this.Log_TotalTipos["Ataques"]++;               return 9; 	}
        if (nUrl.indexOf("?") !== -1)               	{	this.Log_TotalTipos["Advertencias"]++; 		return 8; 	}
        if (Ret === "404")                              {       this.Log_TotalTipos["Errores404"]++;            return 7;       }
        if (nUrl.indexOf("error404") !== -1)            {	this.Log_TotalTipos["Errores404"]++; 		return 7; 	}
        if (nUrl.indexOf(".zip") !== -1)               	{	this.Log_TotalTipos["Zips"]++;                  return 6; 	}
        if (nUrl.indexOf(".php") !== -1)               	{	this.Log_TotalTipos["Documentos"]++; 		return 5; 	}
        if (nUrl.indexOf(".html") !== -1)               {	this.Log_TotalTipos["Documentos"]++; 		return 5; 	}
        if (nUrl.indexOf(".cmd") !== -1)               	{	this.Log_TotalTipos["Documentos"]++; 		return 5; 	}
        if (nUrl.indexOf(".css") !== -1)               	{	this.Log_TotalTipos["CSS"]++;                   return 4; 	}
        if (nUrl.indexOf(".js") !== -1)               	{	this.Log_TotalTipos["JS"]++;                    return 3; 	}
        if (nUrl.indexOf(".svg") !== -1)               	{	this.Log_TotalTipos["Imagenes"]++; 		return 2; 	}
        if (nUrl.indexOf(".ico") !== -1)               	{	this.Log_TotalTipos["Imagenes"]++; 		return 2; 	}
        if (nUrl.indexOf(".png") !== -1)               	{	this.Log_TotalTipos["Imagenes"]++; 		return 2; 	}
        if (nUrl.indexOf(".jpg") !== -1)               	{	this.Log_TotalTipos["Imagenes"]++; 		return 2; 	}
        if (nUrl.indexOf(".gif") !== -1)               	{	this.Log_TotalTipos["Imagenes"]++; 		return 2; 	}
        if (nUrl.indexOf(".") === -1)               	{	this.Log_TotalTipos["Documentos"]++; 		return 5; 	}
        this.Log_TotalTipos["Otros"]++;
        return 1;    
   };
    
    
    /* Ejemplo */
    /*	94.194.34.14 - - [03/Jul/2013:00:00:14 +0200] "GET /Graficos/devildrey33.ico HTTP/1.1" 200 3606 devildrey33.es "-" "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:19 +0200] "GET /Tutorial_HTML5_8.php HTTP/1.1" 200 122235 devildrey33.es "http://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=0CDAQFjAB&url=http%3A%2F%2Fdevildrey33.es%2FTutorial_HTML5_8.php&ei=bE3TUY3jJOSMyAGwjIGQDA&usg=AFQjCNHe90T-d6n5n_EgTirFKAwwET4dGA&bvm=bv.48705608,d.aWc" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33_Comentarios.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /css/devildrey33.css HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        188.165.195.156 - - [03/Jul/2013:16:14:35 +0200] "HEAD / HTTP/1.1" 200 - devildrey33.es "-" "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0) */
    this.Log_AgregarLinea = function(Linea, NumLinea) {
        // Extraigo los valores de esta linea
        var Datos = Linea.split(" ");
        var TotalDatos = Datos.length;
        var Ret = { Ip : "0.0.0.0", Datos : [ {} ], Ua : [ "" ], Abierto : false, Destacados : [], Fecha : "" };
        var Ua = "";
        for (var i = 12; i < Datos.length - 1; i++) {
            Ua += Datos[i] + " ";
        }

        if (TotalDatos < 10) { return; }

        // Organizo los datos de esta línea
        Ret["Ip"] = Datos[0];
        Ret["Datos"][0]["Linea"] = NumLinea;
        
        var FH = Datos[3].split(":");
        Ret["Fecha"] = FH[0].slice(1);
        Ret["Datos"][0]["Hora"] = FH[1] + ":" + FH[2] + ":" + FH[3];        

        Ret["Datos"][0]["Peticion"] = Datos[5].slice(1);      

        Ret["Datos"][0]["Url"]  = Datos[6];        
        Ret["Datos"][0]["Http"] = Datos[7].slice(0, -1);
        Ret["Datos"][0]["Ret"]  = Datos[8];
        Ret["Datos"][0]["Relevancia"] = this.Log_TipoUrl(Ret["Datos"][0]["Url"], Ret["Datos"][0]["Ret"]);
        
        Ret["Datos"][0]["Tam"]      = Datos[9];        
        Ret["Datos"][0]["Server"]   = Datos[10];       
        // 
        // Busco si hay otra IP igual en el array de ips para añadirla o expandirla con mas datos
        for (var i = 0; i < this.Log_Ips.length; i++) {
            // Si coinciden la ip y la fecha
            if (this.Log_Ips[i]["Ip"] === Ret["Ip"] && this.Log_Ips[i]["Fecha"] === Ret["Fecha"]) {
                this.Log_Ips[i]["Datos"].push(Ret["Datos"][0]);                
                // Compruebo si existe el user agent
                for (var u = 0; u < this.Log_Ips[i]["Ua"].length; u++) {
                    if (this.Log_Ips[i]["Ua"][u].toLowerCase().trim() === Ua.toLowerCase().trim()) {
                        return; // El user agent ya existe en la lista, salgo de la función
                    }
                }
                // El UserAgent no existe creo una nueva entrada
                this.Log_Ips[i]["Ua"].push(Ua);
                return;
            }
        }
        // No existe la ip o tiene una fecha distinta
        Ret["Ua"][0] = Ua;
        this.Log_Ips.push( Ret );
    };
    
    
    

    this.Log_ObtenerNavegador2 = function(UA) {        
        var Tipo            = 2; // (0 navegador, 1 bot, 2 desconocido)
        var Nombre          = "Desconocido";
        var NombreCorto     = "Desconocido";
        var Version         = "";
        var Plataforma      = "Desconocido";
        var PlataformaCorto = "";
        UserAgent = UA.toLowerCase();
        // Plataforma
        if	(UserAgent.indexOf("android") !== -1)		 { PlataformaCorto = 'Android';      Plataforma = 'Android'; } 
        else if	(UserAgent.indexOf("linux") !== -1)              { PlataformaCorto = 'Linux';        Plataforma = 'Linux'; }
        else if	(UserAgent.indexOf("iphone") !== -1)		 { PlataformaCorto = 'iPhone';       Plataforma = 'iPhone'; }
        else if	(UserAgent.indexOf("ipad") !== -1)		 { PlataformaCorto = 'iPad';         Plataforma = 'iPad'; }
        else if	(UserAgent.indexOf("macintosh") !== -1)		 { PlataformaCorto = 'Mac';          Plataforma = 'Macintosh'; }
        else if	(UserAgent.indexOf("mac os x") !== -1)		 { PlataformaCorto = 'Mac';          Plataforma = 'Macintosh'; }
        else if	(UserAgent.indexOf("windows nt 5.0") !== -1)	 { PlataformaCorto = 'Win2k';        Plataforma = 'Microsoft Windows 2000'; } 
        else if	(UserAgent.indexOf("windows nt 5.") !== -1)	 { PlataformaCorto = 'WinXP';        Plataforma = 'Microsoft Windows XP'; }
        else if	(UserAgent.indexOf("windows nt 6.0") !== -1)	 { PlataformaCorto = 'WinVista';     Plataforma = 'Microsoft Windows Vista'; }
        else if	(UserAgent.indexOf("windows nt 6.1") !== -1)	 { PlataformaCorto = 'Win7';         Plataforma = 'Microsoft Windows 7'; } 
        else if	(UserAgent.indexOf("windows nt 6.2") !== -1)	 { PlataformaCorto = 'Win8';         Plataforma = 'Microsoft Windows 8'; } 
        else if	(UserAgent.indexOf("windows nt 10.0") !== -1)	 { PlataformaCorto = 'Win10';        Plataforma = 'Microsoft Windows 10'; } 
        else if	(UserAgent.indexOf("windows 98") !== -1)	 { PlataformaCorto = 'Win98';        Plataforma = 'Microsoft Windows 98'; }
        else if	(UserAgent.indexOf("windows") !== -1)		 { PlataformaCorto = 'Win';          Plataforma = 'Microsoft Windows'; }
        else if	(UserAgent.indexOf("win32") !== -1)		 { PlataformaCorto = 'Win';          Plataforma = 'Microsoft Windows'; }

        /* Navegadores */
        if	(UserAgent.indexOf("opera mini") !== -1)  	 { NombreCorto = 'Opera Mini';       Nombre = 'Opera Mini';                 Tipo = 0; } 
        else if	(UserAgent.indexOf("opera") !== -1)  		 { NombreCorto = 'Opera';            Nombre = 'Opera';                      Tipo = 0; } 
        else if	(UserAgent.indexOf("edge") !== -1)  		 { NombreCorto = 'Edge';             Nombre = 'Microsoft Edge';             Tipo = 0; } 
        else if	(UserAgent.indexOf("firefox") !== -1)		 { NombreCorto = 'Firefox';          Nombre = 'Mozilla Firefox';            Tipo = 0; } 
        else if	(UserAgent.indexOf("chrome") !== -1) 		 { NombreCorto = 'Chrome';           Nombre = 'Google Chrome';              Tipo = 0; }
        else if (UserAgent.indexOf("ucbrowser") !== -1)          { NombreCorto = 'UCBrowser';        Nombre = 'UCBrowser';                  Tipo = 0; }
        else if	(UserAgent.indexOf("safari") !== -1)		 { NombreCorto = 'Safari';           Nombre = 'Apple Safari';               Tipo = 0; }
        else if	(UserAgent.indexOf("netscape") !== -1) 		 { NombreCorto = 'Netscape';         Nombre = 'Netscape';                   Tipo = 0; } 
        /* Lectores de feeds */
        else if	(UserAgent.indexOf("feedly") !== -1) 		 { NombreCorto = 'Feedly';           Nombre = 'Feedly RSS Reader';          Tipo = 1; } 
        else if	(UserAgent.indexOf("inoreader") !== -1) 	 { NombreCorto = 'InoReader';        Nombre = 'InoReader Crawler';          Tipo = 1; } 
        else if	(UserAgent.indexOf("feedfetcher-google") !== -1) { NombreCorto = 'Google Reader';    Nombre = 'Google Reader';              Tipo = 1; } 
        /* Bots generales */
        else if	(UserAgent.indexOf("baiduspider") !== -1)	 { NombreCorto = 'Baiduspider';      Nombre = 'Baiduspider';                Tipo = 1; } 
        else if	(UserAgent.indexOf("ezooms") !== -1) 		 { NombreCorto = 'Ezooms Bot';       Nombre = 'Ezooms';                     Tipo = 1; } 
        else if	(UserAgent.indexOf("yandexbot") !== -1) 	 { NombreCorto = 'YandexBot';        Nombre = 'YandexBot';                  Tipo = 1; }
        else if	(UserAgent.indexOf("yandeximages") !== -1) 	 { NombreCorto = 'YandexImages';     Nombre = 'YandexImages';               Tipo = 1; }
        else if	(UserAgent.indexOf("exabot") !== -1) 		 { NombreCorto = 'Exabot';           Nombre = 'Exabot';                     Tipo = 1; } 
        else if	(UserAgent.indexOf("alexa") !== -1) 		 { NombreCorto = 'Alexa';            Nombre = 'Alexa Web Crawler';          Tipo = 1; } 
        else if	(UserAgent.indexOf("bingbot") !== -1) 		 { NombreCorto = 'Bing';             Nombre = 'Bing Bot';                   Tipo = 1; } 
        else if	(UserAgent.indexOf("msnbot") !== -1) 		 { NombreCorto = 'MSNBot';           Nombre = 'MSN Bot';                    Tipo = 1; } 
        else if	(UserAgent.indexOf("majestic") !== -1) 		 { NombreCorto = 'Majestic';         Nombre = 'Majestic Bot';               Tipo = 1; } 
        else if	(UserAgent.indexOf("googlebot") !== -1) 	 { NombreCorto = 'Googlebot';        Nombre = 'Googlebot';                  Tipo = 1; } 
        else if	(UserAgent.indexOf("googlebot-mobile") !== -1) 	 { NombreCorto = 'Googlebot';        Nombre = 'Googlebot Mobile';           Tipo = 1; } 
        else if	(UserAgent.indexOf("facebook") !== -1) 		 { NombreCorto = 'FaceeBook';        Nombre = 'FaceBook Bot';               Tipo = 1; } 
        else if	(UserAgent.indexOf("ahrefsbot") !== -1)   	 { NombreCorto = 'AhrefsBot';        Nombre = 'AhrefsBot';                  Tipo = 1; } 
        else if	(UserAgent.indexOf("google-site-verifi") !== -1) { NombreCorto = 'Googlebot';        Nombre = 'Google-Site-Verification';   Tipo = 1; } 
        
        else if	(UserAgent.indexOf("bot") !== -1)		 { NombreCorto = 'Bot';              Nombre = 'Bot genérico';               Tipo = 2; } 
        /* Internet explorer al final porque muchos llevan msie sin ser IE en el user agent */
        else if	(UserAgent.indexOf("msie 11.0") !== -1) 	 { NombreCorto = 'IE11';             Nombre = 'Internet Explorer';	Version = 11.0; 	Tipo = 0; }
        else if	(UserAgent.indexOf("msie 10.0") !== -1)		 { NombreCorto = 'IE10';             Nombre = 'Internet Explorer';	Version = 10.0; 	Tipo = 0; }
        else if	(UserAgent.indexOf("msie 9.0") !== -1)		 { NombreCorto = 'IE9';              Nombre = 'Internet Explorer';	Version = 9.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 8.0") !== -1)		 { NombreCorto = 'IE8';              Nombre = 'Internet Explorer';	Version = 8.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 7.0") !== -1) 		 { NombreCorto = 'IE7';              Nombre = 'Internet Explorer';	Version = 7.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 6.0") !== -1)		 { NombreCorto = 'IE6';              Nombre = 'Internet Explorer';	Version = 6.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie")  !== -1)		 { NombreCorto = 'IE';               Nombre = 'Internet Explorer'; 				Tipo = 0; }


        return { 
            "Nombre" 		: Nombre, 
            "NombreCorto" 	: NombreCorto,
            "Version" 		: Version,
            "Plataforma" 	: Plataforma,
            "PlataformaCorto"   : PlataformaCorto,
            "Tipo" 		: Tipo
        };
    };    
    
        
    this.Log_ClickCheckOpciones = function() {
        var Checks = this.Log_ObtenerChecks();
        var Checks2 = { 
            0 : document.getElementById('ChNavegadores').checked,
            1 : document.getElementById('ChBots').checked,
            2 : document.getElementById('ChDesconocido').checked
        };
        
        for (var i = 0; i < this.Log_Ips.length; i++) {
            // Busco la primera entrada destacada (si existe)
            var Pos = -1;
            for (var e = 0; e < this.Log_Ips[i]["Destacados"].length; e++) {
                if (Checks[this.Log_Ips[i]["Destacados"][e]["Relevancia"]] === true) {
                    Pos = e;
                    break;
                }
            }
            // Si hay destacados y el check del navegador está marcado
            if (Pos > -1 && Checks2[this.Log_Ips[i]["Info"]["Tipo"]] === true) {
                document.getElementById("EntradaLog" + i).style.display = "table";
                var Url = $("#EntradaLog" + i + " .EntradaLog_Url");
//                Url.css({ color : this.Log_ColorRelevancia(this.Log_Ips[i]["Destacados"][Pos]["Relevancia"]) });
                Url.attr('class', this.Log_ColorRelevancia(this.Log_Ips[i]["Destacados"][Pos]["Relevancia"]));
                Url.html(this.Log_Ips[i]["Destacados"][Pos]["Url"]);
                if (this.Log_Ips[i]["Abierto"] === true) {
                    this.Log_Ips[i]["Abierto"] = false;
                    this.Log_ExpandirIp("EntradaLog" + i);
                }
            }
            else {
                document.getElementById("EntradaLog" + i).style.display = "none";                
            }
        }
    };
    
/*    this.Log_ClickCheckBuscador = function() {
        
    };*/
    
    


    /***************/
    /* Comentarios */
    /***************/
    
    this.Comentarios_VerEmail = function(Boton) {
        Pagina = $(".Blog").attr("pagina");
        NumC = $(Boton).parent().parent().attr("comentario"); 
        console.log("Admin.Comentarios_VerEmail", Pagina, NumC);
        nAjax = $.post($Base.Raiz + "cmd/VerEmailComentario.cmd", { "Pagina" : Pagina,  "NumComentario" : NumC }).done(function(data) {
            Datos = JSON.parse(data);
            $Base.MostrarMensaje(Datos["HTML"]);
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        }).fail(function(jqXHR, textStatus, tError) { 
            console.log("Admin.Comentarios_VerEmail Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error de la petición Ajax al ver el email.");
            $Base.Cargando("FALSE");
        });
    }
    
    /* Elimina el comentario especificado en el parametro boton 
     *  - Boton : Etiqueta del boton que se ha presionado en formato DOM */    
    this.Comentarios_BotonEliminarComentario = function(Boton) {
        Pagina = $(".Blog").attr("pagina");
        NumC = $(Boton).parent().parent().attr("comentario"); 
        console.log("Admin.Comentarios_BotonEliminarComentario", Pagina, NumC);

        $Base.Cargando("TRUE");
        // ajax para votar
        nAjax = $.post($Base.Raiz + "cmd/EliminarComentario.cmd", { "Pagina" : Pagina,  "NumComentario" : NumC }).done(function(data) {
            // Al terminar la petición ajax correctamente
            Datos = JSON.parse(data);
            if (Datos.Mensaje === "Comentario Eliminado") {
                $("#Comentarios_Datos > div[comentario=" + Datos.NumComentario + "]").remove();
            }
            else {
                $Base.MostrarMensaje(data.Mensaje);                
            }
            $Base.Cargando("FALSE");
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        }).fail(function(jqXHR, textStatus, tError) { 
            // Fallo al realizar la petición ajax            
            console.log("Admin.Comentarios_BotonEliminarComentario Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error de la petición Ajax al eliminar el mensaje.");
            $Base.Cargando("FALSE");
        });        
    };
    
    this.Comentarios_Edicion = 0;
    this.Comentarios_ComentarioOriginal = "";
    /* Empieza la edición del comentario especificado.
     * Para saber cual es el comentario especificado partimos desde la etiqueta del boton presionado, y desde alli obtenemos el número de comentario.
     *  - Boton : Etiqueta del boton que se ha presionado en formato DOM */    
    this.Comentarios_BotonEditarComentario = function(Boton) {
        this.Comentarios_Edicion_Cancelar();
        Comentario = $(Boton).parent().parent();
        NumC = Comentario.attr("comentario"); 
        console.log("Admin.Comentarios_BotonEditarComentario", NumC);
        Comentario.html(Comentario.html() + "<div>" + 
                                                "<button onclick='$Admin.Comentarios_Edicion_Guardar()'>Guardar</button>" +
                                                "<button onclick='$Admin.Comentarios_Edicion_Cancelar()'>Cancelar</button>" + 
                                            "</div>");
        Editor = Comentario.find("div:nth-child(3)");
        Editor.attr({"contenteditable" : true});
        this.Comentarios_ComentarioOriginal = Editor.html();
        this.Comentarios_Edicion = Comentario;
        Editor.focus();
    };
    
    
    this.Comentarios_Edicion_Guardar = function() {
        if (this.Comentarios_Edicion !== 0) {
            console.log("Admin.Comentarios_Edicion_Guardar", this.Comentarios_Edicion.attr("comentario"));
            $Base.Cargando("TRUE");
            var Msg = this.Comentarios_Edicion.find("div:nth-child(3)").html();
            Msg.replace(' contenteditable="true"', ''); // Elimino posibles divs creados al hacer intro que se crean con el atributo contenteditable=true, y que no deberian estar dentro de un contenido editable...
            nAjax = $.post($Base.Raiz + "cmd/EditarComentario.cmd", {   "Pagina"        : $(".Blog").attr("pagina"),  
                                                                        "NumComentario" : NumC,
                                                                        "Mensaje"       : Msg
            }).done(function(data) {
                // Al terminar la petición ajax correctamente
                Datos = JSON.parse(data);
                if (Datos.Mensaje === "Comentario Editado") {
//                    $("#Comentarios_Datos > div[comentario=" + Datos.NumComentario + "]").remove();
                    
                    $("#Comentarios_Datos > div[comentario] > div[contenteditable=true]").removeAttr("contenteditable");
                    // Elimino los botones guardar y cancelar (no se que fa el jquery pero avegades borra lineas de texte i posa contents editables de mes.....)
                    //                                         Al re-carregar (F5) tot es veu bè... tot i que s'han d'eliminar els content editable extras que no se d'on surten (chrome/jquery)
                    $Admin.Comentarios_Edicion.find("div:nth-child(4)").remove();
                    // Limpio la memoria;
                    $Admin.Comentarios_ComentarioOriginal = "";
                    $Admin.Comentarios_Edicion = 0;            
                    $Comentarios.EnlazarBotonesMensajes();                    
                    $Base.MostrarMensaje("Mensaje editado");                
                }
                else {
                    $Base.MostrarMensaje(data.Mensaje);                
                }
                $Base.Cargando("FALSE");
                $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
                if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
            }).fail(function(jqXHR, textStatus, tError) { 
                // Fallo al realizar la petición ajax            
                console.log("Admin.Comentarios_Edicion_Guardar Error ajax", jqXHR, textStatus, tError);
                $Base.MostrarMensaje("Error de la petición Ajax al guardar el mensaje.");
                $Base.Cargando("FALSE");
            });   
            this.Comentarios_Edicion.find("div:nth-child(3)").html(Msg);
        }
    };
    
    
    this.Comentarios_Edicion_Cancelar = function() { 
        if (this.Comentarios_Edicion !== 0) {
            console.log("Admin.Comentarios_Edicion_Cancelar", this.Comentarios_Edicion.attr("comentario"));
            $("#Comentarios_Datos > div[comentario] > div[contenteditable=true]").removeAttr("contenteditable");
            // Vuelvo a asignar el contenido inicial
            this.Comentarios_Edicion.find("div:nth-child(3)").html(this.Comentarios_ComentarioOriginal);
            // Elimino los botones guardar y cancelar
            this.Comentarios_Edicion.find("div:nth-child(4)").remove();
            // Limpio la memoria;
            this.Comentarios_ComentarioOriginal = "";
            this.Comentarios_Edicion = 0;            
            $Comentarios.EnlazarBotonesMensajes();
        }
    };
    
    
    
    /* DEPRECATED */
    /*******************/
    /* Editar entradas */
    /*******************/
    this.EditarEntradas_OrigFecha  = "";
    this.EditarEntradas_OrigTitulo = "";
    this.EditarEntradas_OrigURL    = "";
    this.EditarEntradas_OrigTags   = "";
    this.EditarEntradas_OrigImagen = "";
    this.EditarEntradas_OrigTipo   = "";
    
    
    this.EditarEntradas_Iniciar = function() {        
        // Nueva entrada
        console.log("Admin.EditarEntradas_Iniciar");
        $("#Editor_BotonAgregar").off("click").on("click", function() {
            $Admin.EditarEntradas_NuevaEntrada();            
        });
        // Boton guardar del editor/creador de entradas
        $("#Editor_Guardar").off("click").on("click", function() {
            $Admin.EditarEntradas_Guardar();
        });
        // Boton cancelar del editor/creador de entradas        
        $("#Editor_Cancelar").off("click").on("click", function() {
            $("#devildrey33_Entradas tr[seleccionado]").removeAttr("seleccionado");
            $("#Editor_Blog").attr({"mostrar" : false});
        });
        // Editar entrada
        $("#devildrey33_Entradas > tbody > tr").off("click").on("click", function() {
            $Admin.EditarEntradas_EditarEntrada(this);
        });
    };
    
    // Función que abre la ventana para crear una nueva entrada
    this.EditarEntradas_NuevaEntrada = function () {
        $("#Editor_Blog").attr({"mostrar" : true});
        $("#Editor_Guardar").html("Guardar");
        /* Obtengo la fecha de hoy */        
        Fecha = new Date().toDateInputValue();
        $("#Entrada_Fecha").val(Fecha);
        console.log("Admin.EditarEntradas_Iniciar", Fecha);
        this.EditarEntradas_OrigFecha   = Fecha;
        this.EditarEntradas_OrigTitulo  = "";
        this.EditarEntradas_OrigURL     = "";
        this.EditarEntradas_OrigTags    = "";
        this.EditarEntradas_OrigImagen  = "";
        this.EditarEntradas_OrigTipo    = "";
    };
    
    /* Función para empezar la edición de una entrada
        Entrada : es el elemento DOM que corresponde a la etiqueta <tr> del elemento que hay que editar */
    this.EditarEntradas_EditarEntrada = function (Entrada) {
        console.log("Admin.EditarEntradas_EditarEntrada", Entrada);
        $("#devildrey33_Entradas tr[seleccionado]").removeAttr("seleccionado");
        $(Entrada).attr({ "seleccionado" : true });
        $("#Editor_Blog").attr({"mostrar" : true});
        $("#Editor_Guardar").html("Editar");
        /* La fecha viene en formato dd/mm/aaaa, hay que invertir los valores de forma que quede asi : aaaa-mm-dd */
        Fecha = $(Entrada).find("td:nth-child(1)").html();        
        this.EditarEntradas_OrigFecha  = Fecha.substr(6, 4) + "-" + Fecha.substr(3, 2) + "-" + Fecha.substr(0, 2);
        this.EditarEntradas_OrigTitulo = $(Entrada).find("td:nth-child(2)").html();
        this.EditarEntradas_OrigURL    = $(Entrada).find("td:nth-child(3)").html();
        this.EditarEntradas_OrigTags   = $(Entrada).find("td:nth-child(4)").html();
        this.EditarEntradas_OrigImagen = $(Entrada).find("td:nth-child(5)").html();
        this.EditarEntradas_OrigTipo   = $(Entrada).find("td:nth-child(6)").html();
        $("#Entrada_Fecha").val(this.EditarEntradas_OrigFecha);
        $("#Entrada_Titulo").val(this.EditarEntradas_OrigTitulo);
        $("#Entrada_URL").val(this.EditarEntradas_OrigURL);
        $("#Entrada_Imagen").val(this.EditarEntradas_OrigImagen);
        $("#Entrada_Tipo").val(this.EditarEntradas_OrigTipo);
        Tags = this.EditarEntradas_OrigTags.split(", ");
        $("#Editor_Blog > ul > li > input").each(function() { this.checked = false; });
        for (i = 0; i < Tags.length; i++) {
            $Admin.EditarEntradas_MarcarCheckTag(Tags[i]);
        }
    };
    
    // Función interna que busca el checkbox correspondiente al tag especificado y lo marca
    this.EditarEntradas_MarcarCheckTag = function(Tag) {
        console.log("Admin.EditarEntradas_MarcarCheckTag", Tag);
        $("#Editor_Blog > ul > li > span").each(function() { 
            if ($(this).html() === Tag) {
                $(this).prev()[0].checked = true;
                return;
            }
        });
    };
    
    /* Función que guarda el resultado de la edición 
        Si el boton tiene el texto "Guardar" se trata de un elemento nuevo. 
        Si el boton tiene el texto "Editar" se trata de un elemento a editar */
    this.EditarEntradas_Guardar = function() {
        console.log("Admin.EditarEntradas_Guardar", Fecha);        
        // Nuevo
        if ($("#Editor_Guardar").html() === "Guardar") {            
            
        }
        // Editar 
        else {
            
        }
        
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
