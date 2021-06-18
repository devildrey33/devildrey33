/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$Lab = new function() {
    /* Temporizador para actualizar el resultado */
    this.Lab_Temporizador     = 0;
    this.Lab_TemporizadorS    = 0;
    this.Lab_SegundosActualizar = 0;
    /* Objeto que contiene el codemirror */
    this.Editor  = new Object;
    /* Path del archivo que se está editando */
    this.Archivo = "";
    /* Determina si se ha modificado el código */
    this.Original = "";
    /* Forzar vista                                                              SOLO SE UTILIZA AL INICIALIZAR POR PRIMERA VEZ */
    this.ForzarVista = "-1";
    /* Modo de resaltar el código (text/css, application/javascript, text/html)  SOLO SE UTILIZA AL INICIALIZAR POR PRIMERA VEZ */
    this.Modo = "text/html"; 
    /* Variable para determinar si se está intentando guardar un archivo del laboratorio */
    this.Guardando = false;
    
    
    /* Función que inicializa el laboratorio */
    this.Iniciar = function() {
        console.log("Lab.Iniciar", this.Archivo);
        /* Enlazo los eventos click para el explorador */
        this.EnlazarEventosExplorador();        
        
        this.Editor = CodeMirror.fromTextArea(document.getElementById('Lab_Codigo'), {
            mode                : this.Modo, // 'text/html',  // 'text/css', //application/javascript
            indentUnit          : 4,
            fixedGutter         : false,
            lineNumbers         : true,
            autoCloseTags       : true,
            autoCloseBrackets   : true,
            scrollbarStyle      : "simple",
            matchTags           : { bothTags : true },
            
            extraKeys           : { "Ctrl-S" : function(instance) { 
                                    if (typeof $Admin !== "undefined") { $Admin.Lab.Guardar();                                             }
                                    else                               { $Base.MostrarMensaje("No tienes permiso para guardar archivos."); }
                                  }}
            /*theme : "monokay",
            theme : "ambiance"/*,
            theme : "devildrey33"/*,
            onChange: function() {
                    clearTimeout(delay);
                    delay = setTimeout(updatePreview, 100);
            }*/
        });
        
        this.Editor.on("change", function(CM, Evento) {
            $Lab.TemporizadorActualizarResultado_Iniciar();
        });
        
        this.Editor.on("keyup", function(CM, Evento) {
            if (Evento.altKey && (Evento.keyCode === 65 || Evento.keyCode === 97)) {  // Alt + A (actualizar resultado)
                $Lab.ActualizarResultado();
            }
            if (Evento.keyCode === 27) { // Escape (cancelar actualización del resultado)
                $Lab.TemporizadorActualizarResultado_Cancelar();
            }
        });
        
        this.Original = $("#Lab_Codigo").val();
        switch (this.ForzarVista) {
            case "0" :     $(".Lab_BotonVerModoCabecera").trigger("click");     break; 
            case "1" :     $(".Lab_BotonVerFilas").trigger("click");            break; 
            case "2" :     $(".Lab_BotonVerColumnas").trigger("click");         break; 
            case "3" :     $(".Lab_BotonVerCodigo").trigger("click");           break; 
            case "4" :     $(".Lab_BotonVerPreview").trigger("click");          break;             
        }
//        this.ResaltarArchivoActual(this.Archivo, true);
        this.ActualizarResultado();

        /* Chapuça per que s'actualitzi be l'altura de les lineas dintre del codemirror */
//        setTimeout(function() {
            $Lab.Editor.setSize(parseInt($(".Codemirror").attr("width")), parseInt($(".Codemirror").attr("height")));            
  //      }, 5000);
//        this.CargarArchivo();  

//        $(".Lab_Directorio_Animacion").css({ height : "0px" });
    };
    
    this.IniciarEjemplo = function(Archivo) {
        this.ResaltarArchivoActual(Archivo, true);
        var DatosEntrada = $Base.BuscarEntrada(Archivo);
        if (DatosEntrada !== -1) {
            document.title = EntradasBlog[DatosEntrada]["Titulo"];
        }
        else {
            document.title = "Lab : " + Archivo;
        }        
    };
    
    // Inicia el temporizador de 5 segundos para actualizar el ejemplo
    this.TemporizadorActualizarResultado_Iniciar = function() {
        this.TemporizadorActualizarResultado_Cancelar();
        // Tiempo que se tarda desde el keyup a actualizar el resultado (en segundos).
        this.Lab_SegundosActualizar = 3;
        $("#Lab_Actualizar").attr({ "visible" : true });
        $("#Lab_Actualizar_Tiempo").html(this.Lab_SegundosActualizar);
        // Temporizador para la ventana de actualización
        this.Lab_Temporizador = setTimeout(function() { 
            $Lab.ActualizarResultado();
        }, this.Lab_SegundosActualizar * 1000);        
        // Temporizador para los segundos de la ventana de actualización
        this.Lab_TemporizadorS = setInterval(function() { 
            $Lab.Lab_SegundosActualizar --;
            $("#Lab_Actualizar_Tiempo").html($Lab.Lab_SegundosActualizar);
            if ($Lab.Lab_SegundosActualizar < 0) { 
                clearInterval(this.Lab_TemporizadorS);
            }
        }, 1000);
    };
    
    this.TemporizadorActualizarResultado_Cancelar = function() {
        $("#Lab_Actualizar").attr({ "visible" : false });

        if ($Lab.Lab_Temporizador !== 0) {
            clearTimeout($Lab.Lab_Temporizador);
            clearInterval(this.Lab_TemporizadorS);
        }
        $Lab.Lab_Temporizador = 0;
        $Lab.Lab_TemporizadorS = 0;
    };
    
    /* Función que asigna los eventos para el explorador del laboratorio */
    this.EnlazarEventosExplorador = function() {
        console.log("Lab.EnlazarEventosExplorador");
        $(".Lab_Explorador .Lab_Archivo").off("click").on("click", function() { $Lab.ClickArchivo($(this)); });
        $(".Lab_Explorador .Lab_Directorio").off("click").on("click", function() { $Lab.ClickDirectorio($(this)); });
        $(".Lab_Explorador .Lab_Archivo > a").off("click").on("click", function(e) {  
            $Lab.ClickArchivo($(this).parent());
            e.preventDefault();
            e.stopImmediatePropagation();
            return false;
        });        
    };
    
    
    /* Función para expandir / contraer directorios en el explorador del laboratorio */
    /* NOTA NO especificar nada en SoloAbrir si se desea hacer un togle */
    this.ClickDirectorio = function(Objeto, SoloAbrir) {
        console.log("Lab.ClickDirectorio", Objeto);
        
//        SA = SoloAbrir || true;
        Animacion = Objeto.next();
        Directorio = Animacion.find(".Lab_Lista");
        // Asigno la altura en pixeles del directorio por abrir
        var Altura = Animacion.css("height");
        var AltoPadre = 0;
        if (typeof(SoloAbrir) === "undefined") {
            if (parseInt(Altura) === 0) {
                Animacion.css({ "height" : Directorio.height()});
                AltoPadre = Directorio.height();
            }        
            else {
                Animacion.css({ "height" : 0 });         
                AltoPadre = -Directorio.height();                 
            }
        }
        else {
            if (SoloAbrir === true) {
                Animacion.css({ "height" : Directorio.height()});
                AltoPadre = Directorio.height();
            }
            else {
                Animacion.css({ "height" : 0 });         
                AltoPadre = -Directorio.height();                                 
            }
        }
        console.log(Altura, AltoPadre);

        /*
        if (parseInt(Altura) === 0) {
            console.log(Directorio.height());
            Animacion.css({ "height" : Directorio.height()});   
            AltoPadre = Directorio.height();
        }
        else  { 
            if (typeof(SoloAbrir) === "undefined") {
                Animacion.css({ "height" : 0 });         
                AltoPadre = -Directorio.height(); 
            }
            else { return; }
        }*/
        
        Padre = Objeto.parent().parent().parent();
        while (Padre !== null) {
            if (Padre.attr("class") !== "Lab_Directorio_Animacion") break;
            Padre.css({ "height" : Padre.height() + AltoPadre });
            Padre = Padre.parent().parent().parent();
        }
    };
    
    
    /* Función que controla cuando se hace click en un archivo del explorador, para cargarlo en el labotatorio. */
    /* Dest DEPRECATED??? */
//    this.ClickArchivo = function(Objeto, Dest) {
    this.ClickArchivo = function(Objeto) {
        console.log("Lab_ClickArchivo", Objeto);
        var Rec = Objeto;
        var Ret = Rec.find("a").html();

        while (Rec !== null) {
            Rec = Rec.parent().parent().parent().prev();
            if (Rec.attr("class") !== "Lab_Directorio") break;
            Ret = Rec.find("span").html() + "/" + Ret;
        }        
        Ret = "Ejemplos/" + Ret;
//        if (Dest) { $Admin.LabExplorar_CargarPreview(Ret); }
   /*     else      { */this.CargarArchivo(Ret);// }
    };
    
    
    /* Función que resalta y muestra el archivo actual */
    this.ResaltarArchivoActual = function(Archivo) {
        var UActual = $(".Lab_Explorador .Lab_Archivo[actual]");
        // Elimino la marca 'actual' del ultimo archivo del lab
        if (UActual.length > 0) {
            UActual.removeAttr("actual");
        }
        // Obtengo el archivo actual de la lista 
        ItemActual = $(".Lab_Explorador .Lab_Archivo[path='/Lab/" + Archivo + "']");
        ItemActual.attr("actual" , "true");
        Padre = ItemActual.parent().parent().parent().prev();
//        ArrayPadres = [];
        while (Padre.length !== 0) {
            if (Padre[0].className === "Lab_Directorio") {
//               ArrayPadres.unshift(Padre);
               $Lab.ClickDirectorio(Padre, true);            
            }
            Padre = Padre.parent().parent().parent().prev();
        }
/*        for (var i = 0; i < ArrayPadres.length; i++) {
            $Lab.ClickDirectorio(ArrayPadres[i], true);
        }*/
    };
    
    /* Función para cargar un archivo */
    this.CargarArchivo = function(Archivo, ID) {
        // Reseteo el temporizador para el tiempo de la sesión
        $Base.ResetearTimerTiempoSesion();
        $Base.Cargando("TRUE");
        $Base.CargarArchivo_nopush = false;
        console.log("Lab.CargarArchivo", Archivo);
        if (Archivo === null) { Archivo = $Base.Archivo; $Base.CargarArchivo_nopush = true; }
        if (ID === undefined) { ID = -1; }        
        this.PeticionAjax = $.post($Base.Raiz + "cmd/LabAbrirEjemplo.cmd",  { "Archivo" : Archivo, "ID" : ID }, function(data) {
            // Si el parse de JSON devuelve false, es que ha fallado y mostrará una ventana con el error PHP
            Datos = $Base.JSON_Parse(data);
            if (Datos === false) return;
            if      (Datos["Ret"] === 404) { $Base.MostrarErrorAjax(404, false); }
            else if (Datos["Ret"] === 403) { $Base.MostrarErrorAjax(403, false); }
            else                           { 
                // Laboratorio principal
                if (Datos["ID"] === -1) {
                    $Lab.IniciarEjemplo(Datos['Archivo']);
                    
                    $Lab.Editor.setOption("mode", Datos["Modo"]);
                    $Lab.Editor.setValue(Datos["Datos"]);  
                    
                    $Lab.Original = $Lab.Editor.getValue();
                    
                    switch (Datos["Vista"]) {                        
                        case "0" :     $(".Lab_BotonVerModoCabecera").trigger("click");     break; 
                        case "1" :     $(".Lab_BotonVerFilas").trigger("click");            break; 
                        case "2" :     $(".Lab_BotonVerColumnas").trigger("click");         break; 
                        case "3" :     $(".Lab_BotonVerCodigo").trigger("click");           break; 
                        case "4" :     $(".Lab_BotonVerPreview").trigger("click");          break;             
                    }
                    
//                    $Lab.AjustarVista(Datos["Vista"]);  
/*                    var DatosEntrada = $Base.BuscarEntrada(Datos["Archivo"]);
                    if (DatosEntrada !== -1) {
                        document.title = EntradasBlog[DatosEntrada]["Titulo"];
                    }
                    else {
                        document.title = "Lab : " + Datos["Archivo"];
                    }*/
                    
                    URL = "/" + $Base.RaizRelativa + "Lab/" + Datos["Archivo"];
                    $("#MarcoNavegacionLab").attr({"pagina" : Datos["Archivo"]});
                    if ($Base.CargarArchivo_nopush === false) {
                        $Base.Entrada = $Base.IdentificarEntrada(URL, URL);    
                        $Base.Entrada["Titulo"] = "Lab : " + Datos["Archivo"];
                        window.history.pushState($Base.Entrada, document.title, URL);
                        /* Pongo el scroll arriba DESPUÉS de identificar la URL y haber guardado el scroll para el historial */
                        $(window).scrollTop(0);
                    }
                    
                    
                    $("body").attr({ "modificado" : "false" });
                    $Base.ComprobarScrollVotacion();
                    $Lab.ActualizarResultado(); 
//                            $Base.RenovarMeta();

                    
                    $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
                    if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
                }
                // Instancia de un minilab
                else {
                    $Lab.MiniLab_Editores[Datos["ID"]].setValue(Datos["Datos"]);
                    $Lab.MiniLab_ActualizarResultado(Datos["ID"]);
                }
                $Base.Cargando("FALSE");

            }        
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Lab.CargarArchivo Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax((jqXHR.status === 404)? 1404 : jqXHR.status, false, tError);
        });
    };
    
    

    /* Se utilizan los siguientes espacios en el LocalStorage :
            Lab_AbiertoExplorador   :   Guarda el estado abierto/oculto para el explorador
            Lab_AnchoExplorador     :   Guarda el ancho en pixeles del explorador cuado está abierto

            Lab_BarraPosC           :   Posición para la barra en vista de columnas.
            Lab_BarraPosF           :   Posición para la barra en vista de filas.
     *
     **/  
    this.AjustarVista = function(NuevaVista, Guardar) {
        if (document.getElementById("Lab_Barra1") === null) { return; }
        // -1 Por defecto, 0 Cabecera, 1 Mixta columnas, 2 Mixta filas, 3 Código, 4 Preview
        if (NuevaVista === "-1") { 
            NuevaVista = (typeof(localStorage["Lab_Vista"]) === "undefined")? "0" : localStorage["Lab_Vista"]; 
        }
        else { 
            if (typeof(Guardar) === "undefined") { 
                localStorage["Lab_Vista"] = NuevaVista; 
            }
            else {
                if (Guardar === true) { 
                    localStorage["Lab_Vista"] = NuevaVista; 
                }
            }
        }
        if (typeof $("#BarraPrincipal").css("zoom") === "undefined") { Zoom = 1; }
        else                                                         { Zoom = $("#BarraPrincipal").css("zoom"); }
        if (Zoom === "normal") Zoom = 1;
        console.log("$Lab.AjustarVista", NuevaVista, Zoom);
        AnchoMenu = $("#BarraPrincipal").outerWidth() * Zoom;
        Ancho = window.innerWidth - (AnchoMenu * 2);
        Alto = window.innerHeight;
        AnchoBarra1 = parseInt($("#Lab_Barra1").outerWidth());
        //AnchoExplorador = parseInt(localStorage["Lab_AnchoExplorador"]);
        
//        $("#Lab_VerFilas_Estado, #Lab_VerColumnas_Estado, #Lab_VerCodigo_Estado, #Lab_VerPreview_Estado").removeAttr("checked");
        
        switch (NuevaVista) {
            case "0" : $("#BarraNavegacion_Lab_IconoVer").attr({ "ver" : "modocabecera" }); /*  $("#Lab_VerModoCabecera_Estado").attr({ "checked" : "checked" }); */   break; // Mixto Filas
            case "1" : $("#BarraNavegacion_Lab_IconoVer").attr({ "ver" : "filas" });        /*  $("#Lab_VerFilas_Estado").attr({ "checked" : "checked" });        */   break; // Mixto Filas
            case "2" : $("#BarraNavegacion_Lab_IconoVer").attr({ "ver" : "columnas" });     /*  $("#Lab_VerColumnas_Estado").attr({ "checked" : "checked" });     */   break; // Mixto Columnas
            case "3" : $("#BarraNavegacion_Lab_IconoVer").attr({ "ver" : "codigo" });       /*  $("#Lab_VerCodigo_Estado").attr({ "checked" : "checked" });       */   break; // Código
            case "4" : $("#BarraNavegacion_Lab_IconoVer").attr({ "ver" : "preview" });      /*  $("#Lab_VerPreview_Estado").attr({ "checked" : "checked" });      */   break; // Preview                
        }

        /* TODO!!! 
         *      - El codi en la NuevaVista(0) (ModoCabecera) ha d'anar a sota, i el canvas a sobre. */

        switch (NuevaVista) {
            case "0" : // Mixto Filas Tamaño de la cabecera
                $(".CodeMirror").css({ "display" : "block" });
                PosBarra = Alto - 240;
//                PosBarra = Math.round((Alto - 6) / 2);
/*                if (undefined === localStorage["Lab_BarraPosF"]) { PosBarra = Math.round((Alto - 6) / 2); }
                else                                             { PosBarra = parseInt(localStorage["Lab_BarraPosF"]); }*/

                $("#Lab_Barra1").css({  top : PosBarra, left : AnchoMenu,  height : 4, width : Ancho, display : "block", cursor : "ns-resize" });
                $("#Lab_Barra1").draggable({  /*                       El contenedor del drag sera el marco de navegación, OJO porque en la vista de columnas no debe ser asi */
                    axis: "y",  cursor : "ns-resize",   containment : "#MarcoNavegacion",
                    start : function(event, ui) {   $("#Lab_ParcheIframe").css({ "display" : "block" });    $Lab.DragFilas(false); },
                    drag  : function(event, ui) {                                                           $Lab.DragFilas(false); },
                    stop  : function(event, ui) {   $("#Lab_ParcheIframe").css({ "display" : "none" });     $Lab.DragFilas(true);  }
                });
                $("#Lab_Preview").css({ left : AnchoMenu, width : Ancho + 1, display : "block" });
                this.DragFilas(false);
                $("#Lab_Preview").focus();      // Asigno el foco al iframe del resultado, especialmente por los ejempls con canvas
                break;
            case "1" : // Mixto Filas
                $(".CodeMirror").css({ "display" : "block" });
                PosBarra = Math.round((Alto - 6) / 2);
/*                if (undefined === localStorage["Lab_BarraPosF"]) { PosBarra = Math.round((Alto - 6) / 2); }
                else                                             { PosBarra = parseInt(localStorage["Lab_BarraPosF"]); }*/

                $("#Lab_Barra1").css({  top : PosBarra, left : AnchoMenu,  height : 4, width : Ancho, display : "block", cursor : "ns-resize" });
                $("#Lab_Barra1").draggable({  /*                       El contenedor del drag sera el marco de navegación, OJO porque en la vista de columnas no debe ser asi */
                    axis: "y",  cursor : "ns-resize",   containment : "#MarcoNavegacion",
                    start : function(event, ui) {   $("#Lab_ParcheIframe").css({ "display" : "block" });    $Lab.DragFilas(false); },
                    drag  : function(event, ui) {                                                           $Lab.DragFilas(false); },
                    stop  : function(event, ui) {   $("#Lab_ParcheIframe").css({ "display" : "none" });     $Lab.DragFilas(true);  }
                });
                $("#Lab_Preview").css({ left : AnchoMenu, width : Ancho + 1, display : "block" });
                this.DragFilas(false);
                $("#Lab_Preview").focus();      // Asigno el foco al iframe del resultado, especialmente por los ejempls con canvas
                break;
            case "2" : // Mixto columnas
                $(".CodeMirror").css({ "display" : "block" });
                PosBarra = Math.round((Ancho - 6) / 2);
//                if (undefined === localStorage["Lab_BarraPosF"]) { PosBarra = Math.round((Ancho - 6) / 2); } // El 6 son los pixeles que ocupa la barra
  //              else                                             { PosBarra = parseInt(localStorage["Lab_BarraPosC"]); }

    //            AnchoParte = Math.round((Ancho - 6) / 2); // El 6 son los pixeles que ocupa la barra
                $("#Lab_Barra1").css({  top : 0, left  : PosBarra + AnchoMenu,  height : Alto, width  : 4, display : "block", cursor : "ew-resize" });
                $("#Lab_Barra1").draggable({  /*                       El contenedor del drag sera el MarcoNavegacionLab */
                    axis: "x",  cursor : "ew-resize",   containment : "#MarcoNavegacionLab",
                    start : function(event, ui) {   $("#Lab_ParcheIframe").css({ "display" : "block" });    $Lab.DragColumnas(false); },
                    drag  : function(event, ui) {                                                           $Lab.DragColumnas(false); },
                    stop  : function(event, ui) {   $("#Lab_ParcheIframe").css({ "display" : "none" });     $Lab.DragColumnas(true);  }
                });
                $("#Lab_Preview").css({ height : Alto + 1, left : PosBarra + AnchoMenu + 4, top : 0, display : "block" });
                this.DragColumnas(false);
                $("#Lab_Preview").focus();      // Asigno el foco al iframe del resultado, especialmente por los ejempls con canvas
                break;
            case "3" : // Código
                $("#Lab_Barra1").css({  display : "none" });
                $("#Lab_Preview").css({ display : "none" });
                this.Editor.setSize( Ancho,  Alto );
                $(".CodeMirror").css({ "display" : "block" });
                break;
            case "4" : // PreView
                $("#Lab_Barra1").css({  display : "none" });
                $("#Lab_Preview").css({ display : "block", top : 0, left : AnchoMenu, height : Alto, width : Ancho });
                $(".CodeMirror").css({ "display" : "none" });
                $("#Lab_Preview").focus();      // Asigno el foco al iframe del resultado, especialmente por los ejempls con canvas
                break;
        }
        
        $Base.RenovarMeta();

    };
    
    /* Función que controla cuando se arrastra el separador de la vista de filas */
    this.DragFilas = function(GuardarDatos) {
        if (document.getElementById("Lab_Barra1") === null) { return; }
        if (typeof $("#BarraPrincipal").css("zoom") === "undefined") { Zoom = 1; }
        else                                                         { Zoom = $("#BarraPrincipal").css("zoom"); }
        AltoBarra = $("#Lab_Barra1").outerHeight();
        AnchoMenu = $("#BarraPrincipal").outerWidth() * Zoom;
        Ancho = window.innerWidth - (AnchoMenu * 2);
        Alto = $(window).outerHeight();
        PosBarra = $("#Lab_Barra1").offset().top;

        this.Editor.setSize(Ancho, PosBarra); 
//        $("#MarcoNavegacionLab > .CodeMirror").css({ "left" :  AnchoMenu });
        
        $("#Lab_Preview").css({ "top" :  PosBarra + AltoBarra, "height" : (Alto - (PosBarra + AltoBarra)) });

/*        if (GuardarDatos === true && PosBarra > 0 && PosBarra < $(window).outerHeight()) {
            localStorage["Lab_BarraPosF"] = PosBarra;
        }*/
    };


    /* Calculos para el drag para la vista de columnas */
    this.DragColumnas = function(GuardarDatos) {
        if (document.getElementById("Lab_Barra1") === null) { return; }
        if (typeof $("#BarraPrincipal").css("zoom") === "undefined") { Zoom = 1; }
        else                                                         { Zoom = $("#BarraPrincipal").css("zoom"); }
        AnchoMenu = $("#BarraPrincipal").outerWidth() * Zoom;
        AnchoBarra = $("#Lab_Barra1").outerWidth();
        Alto = $(window).outerHeight();
        Ancho = window.innerWidth - (AnchoMenu);

        //        Ancho = $(window).outerWidth();
        PosBarra = $("#Lab_Barra1").offset().left;
        this.Editor.setSize(((PosBarra - AnchoMenu) > 0) ? PosBarra - AnchoMenu : 0,  Alto); 
//        $("#MarcoNavegacionLab > .CodeMirror").css({ "left" :  PosBarra + AnchoBarra });
    //    console.log("Alto " + Alto + " " + PosBarra +)
        $("#Lab_Preview").css({ "left" :  PosBarra + AnchoBarra, "width" : (Ancho - (PosBarra + AnchoBarra)) });

/*        if (GuardarDatos === true && PosBarra > AnchoMenu && PosBarra < $(window).outerWidth()) {
            localStorage["Lab_BarraPosC"] = PosBarra - AnchoMenu;
        }*/
    };
    

    /* Función que actualiza el marco del resultado */
    this.ActualizarResultado = function() {
        this.TemporizadorActualizarResultado_Cancelar();
        // Para eliminar todos los temporizadores que pueda haber cargados en el ejemplo elimino la etiqueta iframe y la vuelvo a crear.                
        var Estilos = $("#Lab_Preview").attr( "style" );
        $("#Lab_Preview").remove();
        $("<iframe id='Lab_Preview' allowfullscreen=true style='" + Estilos +"'></iframe>").insertBefore($( "#Lab_Barra1" ));
        // Actualizo el ejemplo
        var previewFrame = document.getElementById('Lab_Preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        var Codigo = this.Editor.getValue();
        preview.write(Codigo);
        preview.close();    
        if ($Lab.Original !== $Lab.Editor.getValue()) { $("body").attr({ "modificado" : "true" });  }
        else                                          { $("body").attr({ "modificado" : "false" }); }        
    };
    

    /* Función para determinar si el ejemplo ha sido modificado 
        NOTA siempre devuelve false si no es administrador */
    this.Modificado = function() {
/*        console.log("Lab.Modificado", $("body").attr("tipo"), $("body").attr("modificado"), $("body").attr("administrador33"));
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
        }*/
        return false;
    };











    this.MiniLab_Editores = [];

    /***********/
    /* MiniLab */
    /***********/
    this.MiniLab_Iniciar = function() {
        // Inicio los codemirrors
        console.log("Lab.MiniLab_Iniciar");
        this.MiniLab_Editores = [];
        MiniLabs = document.getElementsByClassName("MiniLab_Codigo");        
        for (var i = 0; i < MiniLabs.length; i++) {
            Archivo = MiniLabs[i].parentNode.getAttribute("archivo");
            this.MiniLab_Editores[i] = CodeMirror.fromTextArea(MiniLabs[i], {
                mode                : 'text/html',
                indentUnit          : 4,
                fixedGutter         : false,
                lineNumbers         : true,
                autoCloseTags       : true,
                autoCloseBrackets   : true,
                matchTags           : { bothTags : true }                
            });
            this.MiniLab_Editores[i].PosObjeto = i;
            this.MiniLab_Editores[i].on("change", function(cm, change) {
                $Lab.MiniLab_ActualizarResultado(cm.PosObjeto);
            });
            this.CargarArchivo(Archivo, i);
        }
        
        // Enlazo los botones de las vistas
        $(".MiniLab_VerCodigo").off("click").on("click", function(event) { 
            this.parentNode.parentNode.setAttribute("ver", "codigo");
            ID = this.parentNode.parentNode.getAttribute("id").replace("MiniLab_", "");
            $Lab.MiniLab_Editores[ID].refresh();
        });
        $(".MiniLab_VerPreview").off("click").on("click", function(event) { 
            this.parentNode.parentNode.setAttribute("ver", "preview");
        });
        $(".MiniLab_VerMixto").off("click").on("click", function(event) { 
            this.parentNode.parentNode.setAttribute("ver", "mixto");
            ID = this.parentNode.parentNode.getAttribute("id").replace("MiniLab_", "");
            $Lab.MiniLab_Editores[ID].refresh();
        });
        
        // Inicio los botones para multiples ejemplos
        $(".MiniLab_ContenedorBotones > label").off("click").on("click", function(event){ 
            Raiz = $(this).parent().parent();
            Raiz.find(".MiniLab[oculto='false']").attr({ "oculto" : "true" });
            Actual = Raiz.find(".MiniLab:nth-child(" + $(this).html() + ")");
            Actual.attr({ "oculto" : "false" });
            $Lab.MiniLab_Editores[Actual.attr("id").replace("MiniLab_", "")].refresh();
        });
    };

    /* Función que actualiza el marco del resultado */
    this.MiniLab_ActualizarResultado = function(ID) {
        console.log("Lab.MiniLab_ActualizarResultado", ID);
        var previewFrame = document.getElementById('MiniLab_' + ID).getElementsByClassName("MiniLab_Preview")[0];
//        var previewFrame = document.getElementById('Lab_Preview');
        var preview =  previewFrame.contentDocument ||  previewFrame.contentWindow.document;
        preview.open();
        var Codigo = this.MiniLab_Editores[ID].getValue();
        preview.write(Codigo);
        preview.close();    
    };


    
};


// Al cambiar el tamaño de la ventana, actualizo la vista del laboratorio
$(window).resize(function() {
    $Lab.AjustarVista("-1", false);
});

    








