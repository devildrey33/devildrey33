/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$Admin.Lab = new function() {
    
    /***************/
    /* Laboratorio */
    /***************/    
    
    this.Guardar = function() {        
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
    this.Explorar_ClickCheck = function(Objeto) {
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
    this.Explorar_GenerarCache = function() {
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
    


};
