/* Objeto que contiene las funciones para el administrador */

$Admin = new function() {

    this.Iniciar = function() {        
        
        console.log("Admin.Iniciar");
        /* Oculto la animación cargando de la parte inferior derecha */
        $Base.Cargando("FALSE");
        /* Cargo el CSS para el administrador */
        $Base.CargarCSS("Admin.css");
        /* Activo el CSS para el modo administrador */
        $("body").attr({ "administrador33" : true });
        /* re-emplazo de la funcion click para el menu de administración */
        $('#BarraPrincipal_Boton33_Estado').click(function(e){ $Base.ClickMenu(8); });
        /* Boton ver logs */
        $('#CH_Logs').click(function(e){ $Base.CargarURL('/Web/Log'); $Base.ClickMenu(0); }); /* MOSTRAR LOGS */
        /* Boton ver logs */
        $('#CH_Stats').click(function(e){ $Base.CargarURL('/Web/Stats'); $Base.ClickMenu(0); }); /* MOSTRAR LOGS */
        /* Boton explorar lab */
//        $('#CH_Lab').click(function(e){ $Base.CargarURL('/Web/Lab-Explorar'); $Base.ClickMenu(0); });  /* EXPLORAR LAB */
        /* Boton editar entradas */
//        $('#CH_Entradas').click(function(e){ $Base.CargarURL('/Web/Editar-Entradas'); $Base.ClickMenu(0); });  /* EXPLORAR LAB */        
        /* Boton limpiar baneados */ 
        $('#CH_IPSBan').click(function(e){ $Base.cmd("LimpiarBaneados"); $Base.MostrarMensaje('Se ha vaciado la lista de ips baneadas.'); });  
        /* CheckBox del marco de administración */
        $('#BarraPrincipal_Marco33 .CheckBox').click(function(e){ 
            $(this).attr({ 'marcado' : ($(this).attr('marcado') === 'false') ? 'true' : 'false' });
            switch ($(this).attr('id')) {
                case 'CH_Admin' : /* Desloguear */
                    $Admin.Desloguear();
                    break;
                case 'CH_HTML' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarMinificarHTML' : 'ActivarMinificarHTML' );
                    break;
                case 'CH_CSS' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarMinificarCSS' : 'ActivarMinificarCSS' );
                    break;
                case 'CH_JS' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarMinificarJS' : 'ActivarMinificarJS' );
                    break;
                case 'CH_Consola' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarConsola' : 'ActivarConsola' );
                    $Base.Debug(($(this).attr('marcado') === 'false') ? false : true);
                    break;
                case 'CH_Actualizar' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarActualizarCache' : 'ActivarActualizarCache' );
                    if ($(this).attr('marcado') !== 'false') { $Base.MostrarMensaje('Cache actualizada.'); }
                    break;
                case 'CH_CheckSpelling' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarCheckSpelling' : 'ActivarCheckSpelling' );
                    break;
                case 'CH_CompresionGZip' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarCompresionGZip' : 'ActivarCompresionGZip' );
                    break;
                case 'CH_CacheImagenes' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarCacheImagenes' : 'ActivarCacheImagenes' );
                    break;
                case 'CH_Mantenimiento' :
                    $Base.cmd(($(this).attr('marcado') === 'false') ? 'DesactivarMantenimiento' : 'ActivarMantenimiento' );
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
            if ($("body").attr("tipo") === "Lab" && $("body").attr("modificado") === "true" && $("body").attr("administrador33") === "true") { 
                if (confirm("No has guardado el archivo, deseas guardarlo antes de continuar?") === true) { $Admin.Lab_Guardar(); }
                $("body").attr({ "modificado" : "false" });
            }
        };
    };
    
    /* Función para desloguear, vuelve a dejar toda la web a nivel usuario eliminando el código de administración */
    this.Desloguear = function() {
        $Base.Cargando("TRUE");

        nAjax = $.post("/cmd/Desloguear.cmd");
        nAjax.done(function(data) {
            console.log("Admin.Desloguear", data);
            $("#BarraNavegacion_Explorador").html(data);
            
            $Lab.EnlazarEventosExplorador();
            
            $Base.Cargando("FALSE");
        });
        nAjax.fail(function( jqXHR, textStatus, tError ) { 
            console.log("Admin.Desloguear EscanearEjemplos Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
            $Base.Cargando("FALSE");
        });                
        $('body').removeAttr('administrador33');
        $Base.ClickMenu(0);
        setTimeout(function() { $('#Marco33').html(''); }, 500);    
    };
    
    

    /***************/
    /* Laboratorio */
    /***************/    
    
    this.Lab_Guardar = function() {        
        Archivo = $("#MarcoNavegacionLab").attr("pagina");
        Codigo = $Lab.Editor.getValue();
        console.log("Admin.Lab_Guardar", Archivo, Codigo, $("body").attr("modificado"));
        if ($("body").attr("modificado") === "false") {
            $Base.MostrarMensaje("No se ha modificado el archivo");
            return;
        }
        $Base.Cargando("TRUE");
        $Lab.Original = Codigo;
        $.post("/cmd/LabGuardarEjemplo.cmd", { "Archivo" : Archivo, "Codigo" : Codigo }).done(function(data) {
            Datos = JSON.parse(data);
            $Base.MostrarMensaje(Datos["Mensaje"]);
            $("body").attr({"modificado" : "false"});
            $Base.Cargando("FALSE");
//            $Lab.Modificado = false;
        }).fail(function( jqXHR, textStatus, tError ) {
            console.log("Admin.Lab_Guardar Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
            $Base.Cargando("FALSE");
        });        
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

        nAjax = $.post("/cmd/Lab_GenerarCache.cmd", { "Lista" : JLista });
        nAjax.done(function(data) {
            console.log("Lab_GenerarCache Completo!", data);
            $Base.MostrarMensaje("Cache del laboratorio generada!");
            $Base.Cargando("FALSE");
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
    


    /*******/
    /* Log */
    /*******/

    /* /Web/Log.php 
     * Función que actualiza las entradas del log según las opciones marcadas */
    this.Log_Actualizar = function() {
        $Base.Cargando("TRUE");
        /* Obtengo los valores de los checkbox */
        var ChAtaques           = document.getElementById('ChAtaques').checked;
        var ChAdvertencias 	= document.getElementById('ChAdvertencias').checked;
        var ChErrores404 	= document.getElementById('ChErrores404').checked;
        var ChZip		= document.getElementById('ChZip').checked;
        var ChDocumentos 	= document.getElementById('ChDocumentos').checked;
        var ChCSS		= document.getElementById('ChCSS').checked;
        var ChJS		= document.getElementById('ChJS').checked;
        var ChImagenes          = document.getElementById('ChImagenes').checked;
        var ChOtros		= document.getElementById('ChOtros').checked;

        var ChNavegadores	= document.getElementById('ChNavegadores').checked;
        var ChBots		= document.getElementById('ChBots').checked;
        var ChDesconocido	= document.getElementById('ChDesconocido').checked;

        /* Cambio los labels de los checkbox y agrego los totales de peticiones */
        $("#LabelAtaques span").html(       "Ataques ("        + BD_LogTotalTipos["Ataques"]      + ")");
        $("#LabelAdvertencias span").html(  "Advertencias ("   + BD_LogTotalTipos["Advertencias"] + ")");
        $("#LabelErrores404 span").html(    "Errores 404 ("    + BD_LogTotalTipos["Errores404"]   + ")");
        $("#LabelZips span").html(          "Zips ("           + BD_LogTotalTipos["Zips"]         + ")");
        $("#LabelErrores404 span").html(    "Errores 404 ("    + BD_LogTotalTipos["Errores404"]   + ")");
        $("#LabelDocumentos span").html(    "Documentos ("     + BD_LogTotalTipos["Documentos"]   + ")");
        $("#LabelCSS span").html(           "CSS ("            + BD_LogTotalTipos["CSS"]          + ")");
        $("#LabelJS span").html(            "JavaScript ("     + BD_LogTotalTipos["JS"]           + ")");
        $("#LabelImagenes span").html(      "Imagenes ("       + BD_LogTotalTipos["Imagenes"]     + ")");
        $("#LabelOtros span").html(         "Otros ("          + BD_LogTotalTipos["Otros"]        + ")");

        // Si no encuentro el primer tipo de navegador, doy una vuelta al bucle para asignar los navegadores en memoria
        if (BD_LogPorIP[0][0]["Navegador_Tipo"] == undefined) {
            TotalNavegadores = 0;
            TotalBots = 0;
            TotalDesconocido = 0;
            for (i = 0; i < BD_LogPorIP.length - 1; i++) {
                Navegador = this.Log_ObtenerNavegador(BD_LogPorIP[i][0]["Navegador"]);
                BD_LogPorIP[i][0]["Navegador_Tipo"] = Navegador["Tipo"];
                BD_LogPorIP[i][0]["Navegador"] = Navegador;
                switch (Navegador["Tipo"]) {
                    case 0 : TotalNavegadores++; 	break;
                    case 1 : TotalBots++; 		break;
                    case 2 : TotalDesconocido++; 	break;
                }
            }
            // Modifico los totales de los checkbox
            $("#LabelNavegadores span").html(	"Navegadores (" + TotalNavegadores  + ")");
            $("#LabelBots span").html(		"Bots ("        + TotalBots         + ")");
            $("#LabelDesconocido span").html(	"Desconocido (" + TotalDesconocido  + ")");
        }

        Codigo = "";
        for (i = 0; i < BD_LogPorIP.length - 1; i++) {
            var Destacados = Array();
            if ((BD_LogPorIP[i][0]["Navegador_Tipo"] == 0 && ChNavegadores == true) || (BD_LogPorIP[i][0]["Navegador_Tipo"] == 1 && ChBots == true) || (BD_LogPorIP[i][0]["Navegador_Tipo"] == 2 && ChDesconocido == true)) {
                for (i2 = 0; i2 < BD_LogPorIP[i].length; i2++) {
                    switch (BD_LogPorIP[i][i2]["URL_Tipo"]) {
                        case 1 : { if (ChAtaques == true)       Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 2 : { if (ChAdvertencias == true)  Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 3 : { if (ChErrores404 == true)    Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 4 : { if (ChZip == true)           Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 5 : { if (ChDocumentos == true)    Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 6 : { if (ChCSS == true)           Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 7 : { if (ChJS == true)            Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 8 : { if (ChImagenes == true)      Destacados.push(BD_LogPorIP[i][i2]);    break; }
                        case 9 : { if (ChOtros == true)         Destacados.push(BD_LogPorIP[i][i2]);    break; }
                    }
                }
            }
            // Ordenar el array de destacados por el tipo de URL
            Destacados.sort(function(a, b) { return (a["URL_Tipo"] - b["URL_Tipo"]); });

            /* TODO : refer aquesta part per mostrar tota la fila en vermell si es un atack */

            //Destacados.push(Normales);
            if (Destacados.length > 0) {
                Codigo = Codigo + '<div class="Log">' + 
                                    '<div class="Log_Tabla">' + 
                                        '<div style="display:table-row; cursor:pointer" onclick=\'$Admin.Log_MostrarInfo(' + i + '); \'>' + 
                                            '<div class="Log_TdURL" title="' + Destacados[0] + '">' + this.Log_EstablecerTipoUrl(Destacados[0]) + '</div>';
                // IP
                if (Log_IP_Admin == BD_LogPorIP[i][0]['IP'])    Codigo = Codigo + '<div class="Log_TdIP" title="' + BD_LogPorIP[i][0]['IP']  + '"><span style="color:OliveDrab; font-weight:bold">' + BD_LogPorIP[i][0]['IP'] + '</span></div>';
                else                                            Codigo = Codigo + '<div class="Log_TdIP" title="' + BD_LogPorIP[i][0]['IP']  + '">' + BD_LogPorIP[i][0]['IP'] + '</div>';	
                // Total entradas
                if (Destacados.length > 500)        Codigo = Codigo + '<div class="Log_TdTotalEntradas">(<span style="color:red">' + Destacados.length + '</span>)</div>';
                else if (Destacados.length > 200)   Codigo = Codigo + '<div class="Log_TdTotalEntradas">(<span style="color:orange">' + Destacados.length + '</span>)</div>';
                else                                Codigo = Codigo + '<div class="Log_TdTotalEntradas">(' + Destacados.length + ')</div>';

                Codigo = Codigo +   '<div class="Log_TdTiempo">' + BD_LogPorIP[i][BD_LogPorIP[i].length - 1]['Fecha'] + ' &nbsp; &nbsp; ' + BD_LogPorIP[i][0]['Fecha'] + '</div>' +
                                        '<div class="Log_TdPlataforma">' +  BD_LogPorIP[i][0]['Navegador']["NombreCorto"] + ' ' + BD_LogPorIP[i][0]['Navegador']["PlataformaCorto"] + '</div>' +
                                    '</div>' +
                                '</div>';
                if (BD_LogPorIP[i]["Visible"] == true) {
                    Codigo = Codigo + '<div class="Log_Entradas" id="AccesoExpandible_' + i + '" style="display:block; background-color:#DDD">' + this.Log_CrearInfo(i);
                }
                else {
                    Codigo = Codigo + '<div class="Log_Entradas" id="AccesoExpandible_' + i + '">';
                }
                Codigo = Codigo + '</div>' +
                '</div>';
            }
        }	

        document.getElementById('Log_Contenedor').innerHTML = Codigo;
        $Base.Cargando("FALSE");
    };

    this.Log_EsconderInfo = function(Pos) {        
        $("#AccesoExpandible_" + Pos).css({ display: "none" });
        BD_LogPorIP[Pos]["Visible"] = false;
    };

    this.Log_MostrarTodaLaInfo = function(Pos) {        
        $("#AccesoExpandible_" + Pos).html(this.Log_CrearInfo(Pos, true));
    };

    this.Log_MostrarInfo = function(Pos) {        
        var Marco = $("#AccesoExpandible_" + Pos);
        if (Marco.css("display") == "block") {
            Marco.css({ display: "none", "background-color" : "transparent" });	
            BD_LogPorIP[Pos]["Visible"] = false;
        }
        else {
            Marco.css({ display: "block", "background-color" : "#DDD" });
            BD_LogPorIP[Pos]["Visible"] = true;
        }
        if (Marco.html() == "") Marco.html(this.Log_CrearInfo(Pos));
    };


    /* Función que genera el código HTML que contiene toda la entrada especificada */
    this.Log_CrearInfo = function(Pos, MostrarTodo) {        
        if (MostrarTodo != true) MostrarTodo = false;

        var ChAtaques       = document.getElementById('ChAtaques').checked;
        var ChAdvertencias  = document.getElementById('ChAdvertencias').checked;
        var ChErrores404    = document.getElementById('ChErrores404').checked;
        var ChZip           = document.getElementById('ChZip').checked;
        var ChDocumentos    = document.getElementById('ChDocumentos').checked;
        var ChCSS           = document.getElementById('ChCSS').checked;
        var ChJS            = document.getElementById('ChJS').checked;
        var ChImagenes      = document.getElementById('ChImagenes').checked;
        var ChOtros         = document.getElementById('ChOtros').checked;

        var ContadorOcultos = 0;

        Codigo = '<div class="Log_Cerrar" onclick="$Admin.Log_EsconderInfo(' + Pos + ')"><span>X</span></div>' +
                    '<h1>' + BD_LogPorIP[Pos][0]['IP'] + '</h1>' +
                    '<table>' +
                        '<tr><td>Sistema</td><td>:</td><td>' + BD_LogPorIP[Pos][0]['Navegador']['Plataforma'] + '</td></tr>' +
                        '<tr><td>Navegador</td><td>:</td><td>' + BD_LogPorIP[Pos][0]['Navegador']['Nombre'] + ' ' + BD_LogPorIP[Pos][0]['Navegador']['Version'] + '</td></tr>' +
                        '<tr><td>Conectado desde</td><td>:</td><td>' + BD_LogPorIP[Pos][0]['Fecha'] + '</td></tr>' +
                        '<tr><td>Conectado hasta</td><td>:</td><td>' + BD_LogPorIP[Pos][BD_LogPorIP[Pos].length - 1]['Fecha'] + '</td></tr>' +
                    '</table>' +
                    '<pre>' + BD_LogPorIP[Pos][0]['Navegador']['UserAgent'] + '</pre>' +
                    '<table>';
        for (i2 = 0; i2 < BD_LogPorIP[Pos].length; i2++) {
            BoolInsertarCodigo = true;
            switch (BD_LogPorIP[Pos][i2]["URL_Tipo"]) {
                case 1 : { if (ChAtaques === false      && MostrarTodo === false) 	{ BoolInsertarCodigo = false; } break; };
                case 2 : { if (ChAdvertencias === false && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 3 : { if (ChErrores404 === false   && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 4 : { if (ChZip === false          && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 5 : { if (ChDocumentos === false   && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 6 : { if (ChCSS === false          && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 7 : { if (ChJS === false           && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 8 : { if (ChImagenes === false     && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
                case 9 : { if (ChOtros === false        && MostrarTodo === false)	{ BoolInsertarCodigo = false; } break; };
            }
            if (BoolInsertarCodigo === true) 
                Codigo = Codigo + '<tr><td>' + BD_LogPorIP[Pos][i2]['Fecha']+ '</td><td>&nbsp;' + BD_LogPorIP[Pos][i2]['Accion'] + '</td><td>' + this.Log_EstablecerTipoUrl(BD_LogPorIP[Pos][i2]) + '</td>' + this.Log_ParsearRespuesta(BD_LogPorIP[Pos][i2]['Respuesta']) + '</tr>';
            else
                ContadorOcultos ++;
        }
        Codigo = Codigo + '</table>';
        if (ContadorOcultos > 0) Codigo = Codigo + '<p>Hay ' + ContadorOcultos + ' entradas ocultas, haz click <a style="cursor:pointer" onclick="$Admin.Log_MostrarTodaLaInfo(' + Pos + ')">aquí</a> para mostrarlas todas.</p>';

        return Codigo;
    };

    this.Log_ParsearRespuesta = function(Respuesta) {        
        R = Respuesta.split(" ");
        Str = "";
        switch (R[0]) {
            case "200" : Str = "<span class='Log_Entrada_Documento'>Ok</span>"; 			break;
            case "301" : Str = "<span class='Log_Entrada_Advertencia'>Moved Permanently</span>"; 	break;
            case "302" : Str = "<span class='Log_Entrada_Documento'>Found</span>"; 			break;
            case "304" : Str = "<span class='Log_Entrada_Documento'>Not Modified</span>"; 		break;
            case "403" : Str = "<span class='Log_Entrada_Ataque'>Forbidden</span>";                     break;
        }
        return "<td>" + Str + "</td><td>" + R[0] + "</td><td><span class='Log_Entrada_Imagen'>" + R[1] + "</span></td>";
    };

    /* Añade la clase correspondiente segun el tipo de archivo solicitado */
    this.Log_EstablecerTipoUrl = function(Log) {        
        switch (Log["URL_Tipo"]) {
            case 1 : return "<span class='Log_Entrada_Ataque'>" + Log["URL"] + "</span>"; 	// Ataque
            case 2 : return "<span class='Log_Entrada_Advertencia'>" + Log["URL"] + "</span>"; 	// Advertencia
            case 3 : return "<span class='Log_Entrada_Error'>" + Log["URL"] + "</span>"; 	// Error 404
            case 4 : return "<span class='Log_Entrada_Zip'>" + Log["URL"] + "</span>"; 		// Zip
            case 5 : return "<span class='Log_Entrada_Documento'>" + Log["URL"] + "</span>"; 	// Documento
            case 6 : return "<span class='Log_Entrada_CSS'>" + Log["URL"] + "</span>"; 		// CSS
            case 7 : return "<span class='Log_Entrada_JS'>" + Log["URL"] + "</span>"; 		// JS
            case 8 : return "<span class='Log_Entrada_Imagen'>" + Log["URL"] + "</span>"; 	// Imagen
            case 9 : return "<span class='Log_Entrada_Otros'>" + Log["URL"] + "</span>"; 	// Otros
        }
    };

    this.Log_ObtenerNavegador = function(UA) {        
        var Tipo            = 2; // (0 navegador, 1 bot, 2 desconocido)
        var Nombre          = "Desconocido";
        var NombreCorto     = "Desconocido";
        var Version         = "";
        var Plataforma      = "Desconocido";
        var PlataformaCorto = "";
        UserAgent = UA.toLowerCase();
        // Plataforma
        if 	(UserAgent.indexOf("linux") !== -1)              { PlataformaCorto = 'Linux';        Plataforma = 'Linux';	}
        else if	(UserAgent.indexOf("android") !== -1)		 { PlataformaCorto = 'Android';      Plataforma = 'Android'; } 
        else if	(UserAgent.indexOf("iphone") !== -1)		 { PlataformaCorto = 'iPhone';       Plataforma = 'iPhone'; }
        else if	(UserAgent.indexOf("ipad") !== -1)		 { PlataformaCorto = 'iPad';         Plataforma = 'iPad'; }
        else if	(UserAgent.indexOf("macintosh") !== -1)		 { PlataformaCorto = 'Mac';          Plataforma = 'Macintosh'; }
        else if	(UserAgent.indexOf("mac os x") !== -1)		 { PlataformaCorto = 'Mac';          Plataforma = 'Macintosh'; }
        else if	(UserAgent.indexOf("windows nt 5.0") !== -1)	 { PlataformaCorto = 'Win2k';        Plataforma = 'Microsoft Windows 2000'; } 
        else if	(UserAgent.indexOf("windows nt 5.") !== -1)	 { PlataformaCorto = 'WinXP';        Plataforma = 'Microsoft Windows XP'; }
        else if	(UserAgent.indexOf("windows nt 6.0") !== -1)	 { PlataformaCorto = 'WinVista';     Plataforma = 'Microsoft Windows Vista'; }
        else if	(UserAgent.indexOf("windows nt 6.1") !== -1)	 { PlataformaCorto = 'Win7';         Plataforma = 'Microsoft Windows 7'; } 
        else if	(UserAgent.indexOf("windows nt 6.2") !== -1)	 { PlataformaCorto = 'Win8';         Plataforma = 'Microsoft Windows 8'; } 
        else if	(UserAgent.indexOf("windows 98") !== -1)	 { PlataformaCorto = 'Win98';        Plataforma = 'Microsoft Windows 98'; }
        else if	(UserAgent.indexOf("windows") !== -1)		 { PlataformaCorto = 'Win';          Plataforma = 'Microsoft Windows'; }
        else if	(UserAgent.indexOf("win32") !== -1)		 { PlataformaCorto = 'Win';          Plataforma = 'Microsoft Windows'; }

        /* Navegadores */
        if	(UserAgent.indexOf("opera mini") !== -1)  	 { NombreCorto = 'Opera Mini';       Nombre = 'Opera Mini'; 		Tipo = 0; } 
        else if	(UserAgent.indexOf("opera") !== -1)  		 { NombreCorto = 'Opera';            Nombre = 'Opera'; 			Tipo = 0; } 
        else if	(UserAgent.indexOf("firefox") !== -1)		 { NombreCorto = 'Firefox';          Nombre = 'Mozilla Firefox'; 	Tipo = 0; } 
        else if	(UserAgent.indexOf("chrome") !== -1) 		 { NombreCorto = 'Chrome';           Nombre = 'Google Chrome'; 		Tipo = 0; }
        else if	(UserAgent.indexOf("safari") !== -1)		 { NombreCorto = 'Safari';           Nombre = 'Apple Safari';		Tipo = 0; }
        else if	(UserAgent.indexOf("netscape") !== -1) 		 { NombreCorto = 'Netscape';         Nombre = 'Netscape'; 		Tipo = 0; } 
        /* Lectores de feeds */
        else if	(UserAgent.indexOf("feedly") !== -1) 		 { NombreCorto = 'Feedly';           Nombre = 'Feedly RSS Reader';  	Tipo = 1; } 
        else if	(UserAgent.indexOf("inoreader") !== -1) 	 { NombreCorto = 'InoReader';        Nombre = 'InoReader Crawler';  	Tipo = 1; } 
        else if	(UserAgent.indexOf("feedfetcher-google") !== -1) { NombreCorto = 'Google Reader';    Nombre = 'Google Reader';  	Tipo = 1; } 
        /* Bots generales */
        else if	(UserAgent.indexOf("baiduspider") !== -1)	 { NombreCorto = 'Baiduspider';      Nombre = 'Baiduspider'; 		Tipo = 1; } 
        else if	(UserAgent.indexOf("ezooms") !== -1) 		 { NombreCorto = 'Ezooms Bot';       Nombre = 'Ezooms'; 		Tipo = 1; } 
        else if	(UserAgent.indexOf("yandexbot") !== -1) 	 { NombreCorto = 'YandexBot';        Nombre = 'YandexBot'; 		Tipo = 1; }
        else if	(UserAgent.indexOf("yandeximages") !== -1) 	 { NombreCorto = 'YandexImages';     Nombre = 'YandexImages'; 		Tipo = 1; }
        else if	(UserAgent.indexOf("exabot") !== -1) 		 { NombreCorto = 'Exabot';           Nombre = 'Exabot'; 		Tipo = 1; } 
        else if	(UserAgent.indexOf("alexa") !== -1) 		 { NombreCorto = 'Alexa';            Nombre = 'Alexa Web Crawler'; 	Tipo = 1; } 
        else if	(UserAgent.indexOf("bingbot") !== -1) 		 { NombreCorto = 'Bing';             Nombre = 'Bing Bot';		Tipo = 1; } 
        else if	(UserAgent.indexOf("msnbot") !== -1) 		 { NombreCorto = 'MSNBot';           Nombre = 'MSN Bot';		Tipo = 1; } 
        else if	(UserAgent.indexOf("majestic") !== -1) 		 { NombreCorto = 'Majestic';         Nombre = 'Majestic Bot';		Tipo = 1; } 
        else if	(UserAgent.indexOf("googlebot") !== -1) 	 { NombreCorto = 'Googlebot';        Nombre = 'Googlebot'; 		Tipo = 1; } 
        else if	(UserAgent.indexOf("googlebot-mobile") !== -1) 	 { NombreCorto = 'Googlebot';        Nombre = 'Googlebot Mobile'; 	Tipo = 1; } 
        else if	(UserAgent.indexOf("facebook") !== -1) 		 { NombreCorto = 'FaceeBook';        Nombre = 'FaceBook Bot'; 		Tipo = 1; } 
        else if	(UserAgent.indexOf("ahrefsBot") !== -1)   	 { NombreCorto = 'AhrefsBot';        Nombre = 'AhrefsBot'; 		Tipo = 1; } 
        else if	(UserAgent.indexOf("bot") !== -1)		 { NombreCorto = 'Bot';              Nombre = 'Bot genÃ©rico'; 		Tipo = 2; } 
        /* Internet explorer al final porque muchos llevan msie sin ser IE en el user agent */
        else if	(UserAgent.indexOf("msie 11.0") !== -1) 	 { NombreCorto = 'IE11';             Nombre = 'Internet Explorer';	Version = 11.0; 	Tipo = 0; }
        else if	(UserAgent.indexOf("msie 10.0") !== -1)		 { NombreCorto = 'IE10';             Nombre = 'Internet Explorer';	Version = 10.0; 	Tipo = 0; }
        else if	(UserAgent.indexOf("msie 9.0") !== -1)		 { NombreCorto = 'IE9';              Nombre = 'Internet Explorer';	Version = 9.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 8.0") !== -1)		 { NombreCorto = 'IE8';              Nombre = 'Internet Explorer';	Version = 8.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 7.0") !== -1) 		 { NombreCorto = 'IE7';              Nombre = 'Internet Explorer';	Version = 7.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 6.0") !== -1)		 { NombreCorto = 'IE6';              Nombre = 'Internet Explorer';	Version = 6.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie")  !== -1)		 { NombreCorto = 'IE';               Nombre = 'Internet Explorer'; 						Tipo = 0; }

        switch (Tipo) {
            case 0 : Color = 'darkgreen';   break;
            case 1 : Color = 'grey';        break;
            case 2 : Color = 'orange';      break;
        }

        return { 
            "Nombre" 		: "<span style='color:" + Color + "'>" + Nombre + "<span>", 
            "NombreCorto" 	: "<span style='color:" + Color + "'>" + NombreCorto + "<span>",
            "Version" 		: "<span style='color:" + Color + "'>" + Version + "<span>",
            "Plataforma" 	: "<span style='color:" + Color + "'>" + Plataforma + "<span>",
            "PlataformaCorto"   : "<span style='color:" + Color + "'>" + PlataformaCorto + "<span>",
            "Tipo" 		: Tipo,
            "UserAgent"		: UA
        };
    };
    
    
    /***************/
    /* Comentarios */
    /***************/
    
    this.Comentarios_VerEmail = function(Boton) {
        Pagina = $(".Blog").attr("pagina");
        NumC = $(Boton).parent().parent().attr("comentario"); 
        console.log("Admin.Comentarios_VerEmail", Pagina, NumC);
        nAjax = $.post("/cmd/VerEmailComentario.cmd", { "Pagina" : Pagina,  "NumComentario" : NumC }).done(function(data) {
            $Base.MostrarMensaje(data);
        }).fail(function(jqXHR, textStatus, tError) { 
            console.log("Admin.Comentarios_VerEmail Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error al ver el email.");
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
        nAjax = $.post("/cmd/EliminarComentario.cmd", { "Pagina" : Pagina,  "NumComentario" : NumC }).done(function(data) {
            // Al terminar la petición ajax correctamente
            Datos = JSON.parse(data);
            if (Datos.Mensaje === "Comentario Eliminado") {
                $("#Comentarios_Datos > div[comentario=" + Datos.NumComentario + "]").remove();
            }
            else {
                $Base.MostrarMensaje(data.Mensaje);                
            }
            $Base.Cargando("FALSE");
        }).fail(function(jqXHR, textStatus, tError) { 
            // Fallo al realizar la petición ajax            
            console.log("Admin.Comentarios_BotonEliminarComentario Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error al eliminar el mensaje.");
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
            
            nAjax = $.post("/cmd/EditarComentario.cmd", {   "Pagina"        : $(".Blog").attr("pagina"),  
                                                            "NumComentario" : NumC,
                                                            "Mensaje"       : this.Comentarios_Edicion.find("div:nth-child(3)").html()
            }).done(function(data) {
                // Al terminar la petición ajax correctamente
                Datos = JSON.parse(data);
                if (Datos.Mensaje === "Comentario Editado") {
//                    $("#Comentarios_Datos > div[comentario=" + Datos.NumComentario + "]").remove();
                    $("#Comentarios_Datos > div[comentario] > div[contenteditable=true]").removeAttr("contenteditable");
                    // Elimino los botones guardar y cancelar
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
            }).fail(function(jqXHR, textStatus, tError) { 
                // Fallo al realizar la petición ajax            
                console.log("Admin.Comentarios_Edicion_Guardar Error ajax", jqXHR, textStatus, tError);
                $Base.MostrarMensaje("Error al guardar el mensaje.");
                $Base.Cargando("FALSE");
            });                                           
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




$(window).load(function() { $Admin.Iniciar(); });


/* Avisa cuando recargas la pagina sin guardar el codumento del Lab */
window.onbeforeunload = function() { 
    if (typeof $Admin !== "undefined") {
        if ($("body").attr("tipo") === "Lab" && $("body").attr("modificado") === "true" && $("body").attr("administrador33") === "true") {
            return "Atención no has guardado el documento!!";
        }
    }
};
