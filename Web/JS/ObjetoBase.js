/* Objeto principal para devildrey33 */
$Base = new function() {
    /* Entrada actual */
    this.Entrada            = [];
    /* Estado del login */
    this.Estado_Log         = 0;
    /* Contador de Ticks de un doble click a otro */
    this.Ticks_Log          = 0;
    /* Array de nombres de archivos JavaScript cargados dinamicamente. */
    this.JSDinamico         = [];
    /* Array de nombres de archivos CSS cargados dinamicamente. */
    this.CSSDinamico        = [];
    /* Posicion del preview de la siguiente o anterior entrada */
    this.PosPrevNext        = -2;
    /* Posicion del preview de la siguiente o anterior entrada */
    this.PosPrevNext_Tipo   = 0;
    /* Objeto que contiene la ultima petición ajax */
    this.PeticionAjax       = 0;
    /* Ancla especificada */
    this.Ancla;
    /* Temporizador para la animación del resaltado del h2 */
    this.TemporizadorAncla  = 0;
    /* Variable para almacenar la función que se utilizara al finalizar la carga dinámica de un CSS */
    this.FuncionCargarCSS  = function() { };
    /* Variable para almacenar la función que se utilizara al finalizar la carga dinámica de un JS */
    this.FuncionCargarJS  = function() { };
    
    this.URL                = "";
    this.nURL               = "";
        
    /* Buscador de google?¿? */
    this.CustomSearchControl = 0;
    
    this.Iniciar = function() {
        /* Botones de las vistas del lab */
//        $("#BarraNavegacion_LabVer > .BarraPrincipal_BotonMenu").on("click"), function() { $("#BarraNavegacion_BotonVer_Estado").trigger("click") }
        $("#BarraNavegacion_LabMarcoVer > label.BarraPrincipal_BotonMenu:nth-child(2)").click(function(e){ $Lab.AjustarVista("0"); });
        $("#BarraNavegacion_LabMarcoVer > label.BarraPrincipal_BotonMenu:nth-child(4)").click(function(e){ $Lab.AjustarVista("1"); });
        $("#BarraNavegacion_LabMarcoVer > label.BarraPrincipal_BotonMenu:nth-child(6)").click(function(e){ $Lab.AjustarVista("2"); });
        $("#BarraNavegacion_LabMarcoVer > label.BarraPrincipal_BotonMenu:nth-child(8)").click(function(e){ $Lab.AjustarVista("3"); });
        /* Explorador del laboratorio */
//        $("#BarraNavegacion_LabExplorar > .BarraPrincipal_BotonMenu > .IcoTexto > svg").on("click"), function() { $("#BarraNavegacion_BotonExplorar_Estado").trigger("click"); }
        $("#BarraNavegacion_LabMarcoVer > label.BarraPrincipal_BotonMenu:nth-child(8)").click(function(e){ $Lab.AjustarVista("3"); });

        $("#BarraNavegacion_Explorador .Lab_Archivo").off("click").on("click", function()       {   $Lab.ClickArchivo($(this));     });
        $("#BarraNavegacion_Explorador .Lab_Directorio").off("click").on("click", function()    {   $Lab.ClickDirectorio($(this));  });


        /* Eventos click para los botones del menú principal 
         *  Obtengo el evento del control input que va asociado a un label invisible que ocupa el mismo espacio que el boton.
         *  De esta forma todo el proceso de la animación se hace mediante CSS.
         *  Solo se requiere javascript para determinar en que boton se ha presionado, para cerrar otras ventanas emergentes. */
        $("#BarraPrincipal_Boton_Estado").click(function(e){                $Base.ClickMenu(0); }); /* tanca tot */
        $("#BarraPrincipal_BotonCSS_Estado").click(function(e){             $Base.ClickMenu(1); });
        $("#BarraPrincipal_BotonCPP_Estado").click(function(e){             $Base.ClickMenu(2); });
        $("#BarraPrincipal_BotonJS_Estado").click(function(e){              $Base.ClickMenu(3); });
        $("#BarraPrincipal_BotonPHP_Estado").click(function(e){             $Base.ClickMenu(4); });
        $("#BarraPrincipal_BotonBuscar_Estado").click(function(e){          $Base.ClickMenu(5); });
        
        $("#BarraNavegacion_BotonVer_Estado").click(function(e){            $Base.ClickMenu(6); });
        $("#BarraNavegacion_BotonExplorar_Estado").click(function(e){       $Base.ClickMenu(7); });
        $("#BarraNavegacion_Indice_Estado").click(function(e){              $Base.ClickMenu(9); });
        $("#BarraNavegacion_PrevNext_Estado").click(function(e){            $Base.ClickMenu(10); });
        $("#BarraNavegacion_RedesSociales_Estado").click(function(e){       $Base.ClickMenu(11); });
        $("#BarraNavegacion_Votacion_Estado").click(function(e){            $Base.ClickMenu(12); });
        
        $("#BarraPrincipal_MarcoBuscar_BotonBuscar").click(function(e) {                    $Base.Buscar(); });
        $("#BarraPrincipal_MarcoBuscar_Edit").keyup(function(e) { if (event.which === 13) { $Base.Buscar(); } });
        
        /* Marco prev next */
        $("#BarraNavegacion_MarcoNextPrev_Prev").click(function(e){ $Base.BotonVerSiguiente(); });
        $("#BarraNavegacion_MarcoNextPrev_Desc").click(function(e){ $Base.CargarURL($("#BarraNavegacion_MarcoNextPrev_Desc").attr("Path")); });
        $("#BarraNavegacion_MarcoNextPrev_Next").click(function(e){ $Base.BotonVerAnterior(); });

        /* Redes sociales */
        $("#BarraNavegacion_MarcoRedesSociales_Facebook").click(function(e){ $Base.BotonFacebook(); });
        $("#BarraNavegacion_MarcoRedesSociales_Twitter").click(function(e){ $Base.BotonTwitter(); });
        $("#BarraNavegacion_MarcoRedesSociales_GooglePlus").click(function(e){ $Base.BotonGooglePlus(); });
        

        /* Asigno entrada inicial para el historial */
        this.Entrada = this.IdentificarEntrada(document.location.pathname, document.location.pathname);
        window.history.replaceState(this.Entrada, this.Entrada["Titulo"], document.location.pathname);

        // Solo hay que redireccionar una vez tanto la barra de navecación como la barra principal.
        $('#BarraNavegacion > a').click(function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $Base.CargarURL($(this).attr("href"));
            return false;
        });
        // La barra principal se tiene que cerrar al ir a un enlace
        $('#BarraPrincipal > #BarraPrincipal_Submenus a').click(function(e) {
            console.log("Base.(#BarraPrincipal > #BarraPrincipal_Submenus a).Click");
            e.preventDefault();
            e.stopImmediatePropagation();
            $Base.ClickMenu(0);
            $Base.CargarURL($(this).attr("href"));
            return false;
        });

        // Combinación de clicks / letras del logo para abrir el login
        $("#Logo > div:nth-child(5)").dblclick(function(e) { 
            if ($Base.Estado_Log === 0) { 
                $Base.Ticks_Log = $Base.GetTickCount(); 
                $Base.Estado_Log = 1; 
                setTimeout(function() { $Base.Estado_Log = 0; }, 1500); 
            } 
        });
        $("#Logo > div:nth-child(11)").dblclick(function(e) {
            if ($Base.Estado_Log === 1) { 
                console.log("Tiempo de los clicks : " + parseInt($Base.GetTickCount() - $Base.Ticks_Log) + " milisegundos.");
                $("#VentanaLogin").attr({ "Visible" : "true" }); 
            }  
            setTimeout(function() { 
                if (typeof localStorage["Comentarios_Usuario"] === 'undefined') { $("#devildrey33_Usuario").focus(); }
                else                                                            { $("#devildrey33_Password").focus(); }
            }, 200);  
        });
        // Teclado del login
        $("#devildrey33_Usuario").keyup(function(e) { 
            switch (e.keyCode) {
                case 27 : $("#VentanaLogin").attr({ "Visible" : "false" });     break;
                case 13 : $("#devildrey33_Password").focus();                   break;
            } 
        });
        $("#devildrey33_Password").keyup(function(e) { 
            switch (e.keyCode) {
                case 27 : $("#VentanaLogin").attr({ "Visible" : "false" });     break;
                case 13 : $Base.Loguear();                                      break;
            } 
        });

        // Redirección de los links del indice
        this.RedireccionarLinks();

        /* Usuario para el login */
        if (typeof localStorage["Comentarios_Usuario"] !== 'undefined') { $("#devildrey33_Usuario").val(localStorage["Comentarios_Usuario"]); }
    };
    
    /* Función que muestra una ventana para el twiter */
    this.BotonTwitter = function() {
        Texto = $(".Cabecera > .Cabecera_Datos > h1").html();
//        if (typeof $(".Cabecera > .Cabecera_Datos > h1") === 'undefined') { Texto = $(".Cabecera > .Cabecera_Datos > h1").html();                     }
//        else                                                              { Texto = "" + window.location.href.replace(/^.*[\\\/]/, ''); }
        console.log("Base.BotonTwitter", Texto, window.location.href);
        window.open("http://twitter.com/home?status=" + Texto + ": " + window.location.href, "Twitter", "toolbar=no,width=550,height=255");
    };
    
    /* Función que muestra una ventana para el facebook */
    this.BotonFacebook = function() {        
        Texto = $(".Cabecera > .Cabecera_Datos > h1").html();
        //if (typeof $(".Cabecera > .Cabecera_Datos > h1") === 'undefined') { Texto = $(".Cabecera > .Cabecera_Datos > h1").html();                     }
        //else                                                              { Texto = "Experimento : " + window.location.href.replace(/^.*[\\\/]/, ''); }
        console.log("Base.BotonFacebook", Texto, window.location.href);
        window.open("http://www.facebook.com/share.php?u=" + window.location.href + "&t=" + Texto, "Facebook", "toolbar=no,width=550,height=355");
    };

    /* Función que muestra una ventana para el google+ */
    this.BotonGooglePlus = function() {        
        Texto = $(".Cabecera > .Cabecera_Datos > h1").html();
        //if (typeof $(".Cabecera > .Cabecera_Datos > h1") === 'undefined') { Texto = $(".Cabecera > .Cabecera_Datos > h1").html();                     }
        //else                                                              { Texto = "Experimento : " + window.location.href.replace(/^.*[\\\/]/, ''); }
        console.log("Base.BotonGooglePlus", Texto, window.location.href);
        window.open("https://plus.google.com/share?url=" + window.location.href + "&t=" + Texto, "Google Plus", "toolbar=no,width=550,height=355");
    };

    //https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fdevildrey33.es%2Fcapitulo.php%3Fserie%3D2874%26temp%3D1%26cap%3D01%26sthash.R8lb5Hgr.mjjo&title=Ver%2037%20dias%201x01%20online&summary=Todas%20tus%20series%20para%20ver%20online%20o%20en%20descarga%20directa%20&source=    
    this.BotonLinkEdin = function() {        
        Texto = $(".Cabecera > .Cabecera_Datos > h1").html();
        console.log("Base.BotonLinkEdin", Texto, window.location.href);
//        window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href + "&t=" + Texto, "Google Plus", "toolbar=no,width=550,height=355");
    }
    
    /* Objeto para mostrar / ocultar mensajes por la consola */
    /* Especifica si se muestran los logs de depuración */
    /* El segundo parámetro es para limpiar las entradas de la consola */
    /* Ej : Debug(true, false); */
    this.Debug = (function () {
        var Consola = console;
        return function(Valor, Limpiar){
            var nLimpiar = Limpiar || false;
            if (Valor === false) {
                console = {};
                console.log = function () { };
                if (nLimpiar) {
                    console.info = function () { };
                    console.warn = function () { };
                    console.error = function () { };
                } else {
                    console.info = Consola.info;
                    console.warn = Consola.warn;
                    console.error = Consola.error;              
                }
            } 
            else {
                console = Consola;
            }
        };
    })();
    
    /* Función que determina el estado del menú lateral izquierdo */
    this.ClickMenu = function(Menu) { 
        console.log("Base.ClickMenu", Menu);
        if (Menu !== 1) { $("#BarraPrincipal_BotonCSS_Estado").removeAttr("checked");    }
        if (Menu !== 2) { $("#BarraPrincipal_BotonCPP_Estado").removeAttr("checked");    }
        if (Menu !== 3) { $("#BarraPrincipal_BotonJS_Estado").removeAttr("checked");     }
        if (Menu !== 4) { $("#BarraPrincipal_BotonPHP_Estado").removeAttr("checked");    }
        if (Menu !== 5) { $("#BarraPrincipal_BotonBuscar_Estado").removeAttr("checked"); }
        /* Paso el foco al editbox de la busqueda */
        if (Menu === 5) { $("#BarraPrincipal_MarcoBuscar_Edit").focus().select();  }        
        if (Menu !== 6) { $("#BarraNavegacion_BotonVer_Estado").removeAttr("checked"); }
        if (Menu !== 7) { $("#BarraNavegacion_BotonExplorar_Estado").removeAttr("checked"); }
        if (Menu !== 8) { $("#BarraPrincipal_Boton33_Estado").removeAttr("checked");    }
        if (Menu !== 9) { $("#BarraNavegacion_Indice_Estado").removeAttr("checked"); }
        /* El menú admin cierra el menu principal (para ciertas vistas moviles puede no haber espacio para los dos a la vez) */
        if (Menu === 8) { $("#BarraPrincipal_Boton_Estado").removeAttr("checked"); }
        if (Menu !== 10) { $("#BarraNavegacion_PrevNext_Estado").removeAttr("checked"); }
        if (Menu !== 11) { $("#BarraNavegacion_RedesSociales_Estado").removeAttr("checked"); }
        if (Menu !== 12) { $("#BarraNavegacion_Votacion_Estado").removeAttr("checked"); }
    };
    

    /* Obtiene el valor númerico asignado al milisegundo actual de la ejecución */
    this.GetTickCount = function() {
        var d = new Date();
        return d.getTime();            
    };

        
    /* Enlaza los links a href sin target a la función CargarURL */
    this.RedireccionarLinks = function() {
        console.log("Base.RedireccionarLinks");
        $("#MarcoNavegacion a[href]:not([target])").off("click").on("click", function(e) {
            e.preventDefault();
            e.stopImmediatePropagation();
            $Base.CargarURL($(this).attr("href"));
            return false;
        });
        
        Pagina = $("#MarcoNavegacion > article").attr("pagina");
/*        if (typeof localStorage["Voto_" + Pagina] === "undefined") {
            $("#BarraNavegacion_Votacion").attr({ "Mostrar" : true });
            $("#BarraNavegacion_Votacion .VotarDocumento_Estrellas > button").off("click").on("click", function(e)  {
                $Base.VotarWeb($(this).html());
            });
        }
        else {*/
        $("#BarraNavegacion_Votacion").removeAttr("Mostrar");
        this.ComprobarScrollVotacion();
        //}
        // Enlazo las etiquetas linea al objeto PintarCodigo
        $PintarCodigo.EnlazarEtiquetas();

        this.ActualizarBarraNavegacion();
        $Lab.MiniLab_Iniciar();
        this.LogoCargando("FALSE");        
    };
        
        
    /* Vota la web */    
    this.VotarWeb = function(Valor) {
        Pagina = $("#MarcoNavegacion > article").attr("pagina");
        // Desmarco el boton de las votaciones
        $("#BarraNavegacion_Votacion_Estado").removeAttr("checked");
        
        console.log("Base.VotarWeb", Valor, Pagina);
        if (typeof localStorage["Voto_" + Pagina] === "undefined") {
            localStorage["Voto_" + Pagina] = Valor;
            $.post( "/cmd/VotarPagina.cmd", { "Pagina" : Pagina, "Valor" : Valor, "URL" : window.location.href }).done(function(data) {
                if (data !== "false") {
                    $(".Cabecera_Datos > .FechaEntrada > span").html(data);
                    $("#BarraNavegacion_Votacion").removeAttr("Mostrar");
                    if ($("html").attr("lang") === "es") { $Base.MostrarMensaje("La votación se ha relaizado correctamente, muchas gracias!"); }
                    else                                 { $Base.MostrarMensaje("Your vote is annotated, thank you!"); }
                }
                /*RedireccionarLinks();*/
            }).fail(function( jqXHR, textStatus, tError ) {
                /*if (textStatus === "error") { MostrarErrorAjax(500, false); }
                else                        { MostrarErrorAjax(404, false); }*/
                console.log("Base.VotarWeb Error ajax", jqXHR, textStatus, tError);
                $Base.MostrarErrorAjax(jqXHR.status, false);
            });                    
        }
        else {
            if ($("html").attr("lang") === "es") { $Base.MostrarMensaje("Solo puedes votar una vez por página."); }
            else                                 { $Base.MostrarMensaje("Only you can vote one time per page."); }
        }
    };
        

    /* Función para mostrar mensajes estandar */
    this.MostrarMensaje = function(Mensaje) { 
        console.log("Base.MostrarMensaje(" + Mensaje + ")");
        $("#VentanaMensaje > p").html(Mensaje);
        $("#VentanaMensaje > button").off("click.button").on("click.button", function() { 
            $("#VentanaMensaje").attr({"visible" : "false" }); 
        });

        $("#VentanaMensaje").attr({"visible" : "true" });
        setTimeout(function() { $("#VentanaMensaje > button").focus(); }, 100);
    };
    
    
    /* Función que muestra una ventana de error si hay algun problema al cargar una URL */
    this.MostrarErrorAjax = function(Error, VolverIndice) { 
        console.log("Base.MostrarErrorAjax(" + Error + ", " + VolverIndice + ")");
        this.LogoCargando("FALSE");    
        this.Cargando("FALSE");

        switch (Error) {
            case 403 : $("#VentanaError > p").html("Error 403! no se permite el acceso al archivo solicitado.");                    break;
            case 404 : $("#VentanaError > p").html("Error 404! el archivo solicitado no existe.");                                  break;
            default : $("#VentanaError > p").html("Error 500! Es posible que el servidor no esté disponible en estos momentos.");   break;
        }

        if (VolverIndice === true) {  
            this.Entrada["TipoPagina"] = "Error404";               
            $("#VentanaError > p").html($("#VentanaError > p").html() + " Pulsa aceptar para ser re-dirigido al indice.");
            $("#VentanaError > button").off("click.VentanaError").on("click.VentanaError", function() { 
                $("#VentanaError").attr({"visible" : "false" }); 
                $Base.CargarURL("/"); 
            });
        }
        else {  
            if (this.Entrada["TipoPagina"] === "Lab" || this.Entrada["TipoPagina"] === "LabError")  { this.Entrada["TipoPagina"] = "LabError"; }
            else                                                                                    { this.Entrada["TipoPagina"] = "Error404SinPlantilla"; }
            $("#VentanaError > button").off("click.VentanaError").on("click.VentanaError", function() { $("#VentanaError").attr({"visible" : "false" }); });
        }

        $("#VentanaError").attr({"visible" : "true" });        
        setTimeout(function() { $("#VentanaError > button").focus(); }, 100);

        this.ActualizarBarraNavegacion();        
    };
    
    
    /* Función que identifica una entrada según su URL */
    this.IdentificarEntrada = function(URL, URLReal) { 
        /* Habilito el boton de la encuesta para que pueda volver a salir, ya que no es el mismo documento. */
        $("#BarraNavegacion_Encuesta").removeAttr("Visible");

        var Ret = { "Titulo" : "devildrey33", "URL" : URL, "URLReal" : URLReal, "Imagen" : "", "TipoPagina" : "No identificado", "Pos" : -2, "Idioma" : "es" };    


        /* Indice */
        if (URLReal.indexOf("/Categorias/") > -1 || URL === "/") {
            Ret["TipoPagina"] = "Indice";
            $("body").attr({ "Tipo" : Ret["TipoPagina"] });
            console.log("Base.IdentificarEntrada : " + Ret["TipoPagina"], Ret);
            return Ret;
        }
        /* Buscar */
        if (URL.indexOf("/Buscar/") > -1) {
            Ret["TipoPagina"] = "Buscar";
            $("body").attr({ "Tipo" : Ret["TipoPagina"] });
            Ret["Titulo"] = "Buscar";
            console.log("Base.IdentificarEntrada : " + Ret["TipoPagina"], Ret);
            return Ret;
        }

        nURL = "";
        /* Es una entrada del blog o Documentación */
        if (URL.indexOf("/Blog/") > -1) {
            Ret["TipoPagina"] = "Blog";
            nURL = URL.substr(6);
        }
        if (URL.indexOf("/Doc/CSS") > -1) {
            Ret["TipoPagina"] = "DocCSS";
            nURL = URL.substr(8);
        }
        if (URL.indexOf("/Lab/") > -1) {
            Ret["TipoPagina"] = "Lab";
            nURL = "";
        }
        if (URL.indexOf("/Web/") > -1 || URL.indexOf("/FaqBarba") > -1) {
            Ret["TipoPagina"] = "Web";
            nURL = "";
        }

        $("body").attr({ "Tipo" : Ret["TipoPagina"] });

//        this.BuscarEntradaActual(URL, $(".Cabecera > .Cabecera_Datos > h1").html());

        console.log("Base.IdentificarEntrada : " + Ret["TipoPagina"], Ret);
        return Ret;    
    };
    
    this.BuscarEntradaActual = function(nURL, nTitulo) {
        for (i = 0; i < EntradasBlog.length; i++) {
//            console.log(nURL.indexOf(EntradasBlog[i]["URL"]), EntradasBlog[i]["URL"], EntradasBlog[i]["Fecha"] ,nFecha);
            if (nURL.indexOf(EntradasBlog[i]["URL"]) !== -1 && EntradasBlog[i]["Titulo"] === nTitulo) {
                console.log("Base.BuscarEntradaActual : " + i, EntradasBlog[i]);
                this.Entrada["Titulo"] = EntradasBlog[i]["Titulo"];
                this.Entrada["Imagen"] = EntradasBlog[i]["Imagen"];
                this.Entrada["Idioma"] = EntradasBlog[i]["Idioma"];
                this.PosPrevNext_Tipo = EntradasBlog[i]["Tipo"];
                return i;
            }
        }
        console.log("Base.BuscarEntradaActual : -1");
        return -1;
    };
    
    
    /* Función que actualiza los botones de la barra de navegación situada a la derecha de la pantalla */
    /* Se utiliza al cambiar de URL */
    this.ActualizarBarraNavegacion = function() { 
        console.log("Base.ActualizarBarraNavegacion", this.Entrada);
        this.EscanearAnclas();
        switch (this.Entrada["TipoPagina"]) {
            case "LabError" :
                this.MostrarBarraNavegacion();
                break;
            case "Lab" :
                $Lab.Iniciar();
                this.MostrarBarraNavegacion();
                break;
            case "Indice": 
                $("#MarcoIndice").attr({ "visible" : true });            
                $("#Categorias").attr({ "visible" : true });
                $Indice.Iniciar();
                this.OcultarBarraNavegacion();
                break;
            case "Blog" :
            case "DocCSS" :
                $Comentarios.Iniciar();
                this.MostrarBarraNavegacion();
                break;
            case "Web" :
                this.MostrarBarraNavegacion();
                break;            
            case "Buscar" :
            case "Error404" :
                $("#BarraNavegacion_Prev").hide();
                $("#BarraNavegacion_Next").hide();
                break;
            default : 
                this.OcultarBarraNavegacion();
                break;
        }
    };    
    
    this.CrearPrevNext = function(Pos) {
        console.log("Base.CrearPrevNext", Pos);
        if (Pos > EntradasBlog.length || Pos < 0) return false;
        
        $("#BarraNavegacion_MarcoNextPrev_Next").removeAttr("disabled");
        $("#BarraNavegacion_MarcoNextPrev_Prev").removeAttr("disabled");

        this.PosPrevNext = Pos;
        
        if (this.Entradas_BuscarSiguienteMismoTipo(Pos) === -1) {
            $("#BarraNavegacion_MarcoNextPrev_Next").attr({ "disabled" : "disabled" });            
        }
        if (this.Entradas_BuscarAnteriorMismoTipo(Pos) === -1) {
            $("#BarraNavegacion_MarcoNextPrev_Prev").attr({ "disabled" : "disabled" });
        }

        Imagen = "CSS3.png";
        if (EntradasBlog[this.PosPrevNext]["Tipo"].indexOf("DocCSS") === -1) {
            Imagen = EntradasBlog[this.PosPrevNext]["Imagen"];
        }
        $("#BarraNavegacion_MarcoNextPrev_Desc").html("<img src='/Web/Graficos/155x125_" + Imagen + "' alt=''/>" +
                                                      "<h3>" + EntradasBlog[this.PosPrevNext]["Titulo"] + "</h3>");
        $("#BarraNavegacion_MarcoNextPrev_Desc").attr({ "Path" : EntradasBlog[this.PosPrevNext]["URL"] });
        return true;
    };
    

    this.BotonVerSiguiente = function() {
        if (this.CrearPrevNext(this.Entradas_BuscarAnteriorMismoTipo(this.PosPrevNext)) === false) {
            $("#BarraNavegacion_MarcoNextPrev_Next").attr({"disabled" : "disabled"});
        }
    };
    
    this.BotonVerAnterior = function() {
        if (this.CrearPrevNext(this.Entradas_BuscarSiguienteMismoTipo(this.PosPrevNext)) === false) {
            $("#BarraNavegacion_MarcoNextPrev_Next").attr({"disabled" : "disabled"});
        }
    };
    
    this.Entradas_BuscarSiguienteMismoTipo = function(Cont) {
        while (--Cont > -1) {
            // mismo tipo
            if (this.PosPrevNext_Tipo === EntradasBlog[Cont]["Tipo"]) {
                if (Cont !== this.Entrada["Pos"]) {
                    return Cont;
                }
            }
        }
        return -1;        
    }

    this.Entradas_BuscarAnteriorMismoTipo = function(Cont) {
        while (++Cont < EntradasBlog.length -1) {
            // mismo tipo
            if (this.PosPrevNext_Tipo === EntradasBlog[Cont]["Tipo"]) {
                if (Cont !== this.Entrada["Pos"]) {
                    return Cont;
                }
            }
        }
        return -1;        
    }
    
    /* Muestra la barra de navegación con una animación */
    this.MostrarBarraNavegacion = function() { 
        this.Entrada["Pos"] = this.BuscarEntradaActual(this.Entrada["URL"], $(".Cabecera > .Cabecera_Datos > h1").html());

        console.log("Base.MostrarBarraNavegacion", this.Entrada);

        // Idioma del articulo
        $("html").attr({ "lang" : this.Entrada["Idioma"] });

        this.PosPrevNext = this.Entradas_BuscarSiguienteMismoTipo(this.Entrada["Pos"]);
        if (this.PosPrevNext == -1) { this.PosPrevNext = this.Entradas_BuscarAnteriorMismoTipo(this.Entrada["Pos"]); }

        /* Muestro la barra de navegacion */
        $("#BarraNavegacion").attr({ "Visible" : true });
        if (this.Entrada["Pos"] !== -1) { $("#BarraNavegacion_NextPrev").attr({ "mostrar" : "true" }); }
        else                            { $("#BarraNavegacion_NextPrev").removeAttr("mostrar"); }


        this.CrearPrevNext(this.PosPrevNext);
    };
    
    
    /* Oculta la barra de navegación con una animación */
    this.OcultarBarraNavegacion = function() { 
        $("#BarraNavegacion").attr({ "Visible" : false });
    };
    
    
    /* Busca la posición del ancla presionada y mueve el scroll para que quede en la parte superior de la pantalla. */
    this.BuscarAncla = function(Pos) {
        this.Ancla = $("#MarcoNavegacion h2").eq(Pos);
        var PosAncla = this.Ancla.offset().top;
        var PosScroll = $(document).scrollTop();
        var AltoVentana = $(window).height();
        console.log("Base.BuscarAncla("+ Pos +")", PosAncla, AltoVentana, PosScroll);
        if (!(PosAncla > PosScroll - AltoVentana && PosAncla < PosScroll + AltoVentana)) {
            $("body, html").stop().animate({ scrollTop : PosAncla - 25 });
        }
        this.Ancla.attr({ "resaltado" : "true" });
        if (this.TemporizadorAncla != 0) { clearTimeout(this.TemporizadorAncla); }
        this.TemporizadorAncla = setTimeout(function() { $Base.Ancla.removeAttr("resaltado"); $Base.TemporizadorAncla = 0; }, 1000);
    };
    
    /* Escanea el documento en busca de etiquetas h2 para enumerarlas en la lista de anclas */
    this.EscanearAnclas = function() {
        console.log("Base.EscanearAnclas");
        var Codigo = "";
        var ContadorAnclas = 0;
                
        $("#MarcoNavegacion h2").each(function(index) { 
            var Texto = $(this).html();
            if (Texto == "") { // No tiene texto en el HTML, está en el content del after.
                Texto = window.getComputedStyle(this, ':after').getPropertyValue('content');
                Texto = Texto.replace('"', '').replace('"', '');
            }
            Codigo = Codigo + "<div onclick='$Base.BuscarAncla(" + (ContadorAnclas++) + ")' title='" + Texto + "'>" + Texto + "</div>";
        });
        var Columnas = 0;
        while (ContadorAnclas > 0) { ContadorAnclas -= 12; Columnas ++; }
        $("#BarraNavegacion_SubIndice").attr({ "class" : "SubIndice_Columas_" + Columnas });
        if (Codigo !== "") {
            $("#BarraNavegacion_Indice").show();
            $("#BarraNavegacion_SubIndice").html(Codigo);
        }
        else {
            $("#BarraNavegacion_Indice").hide();
        }
    }; 
    
   
    /* Función que muestra / oculta la animación del logo en modo cargando */
    this.LogoCargando = function (Valor) {
        this.Cargando(Valor);
        if (Valor === "TRUE") {
            // Si hay una petición ajax pendiente, la cancelo.
            if (this.PeticionAjax != 0) { this.PeticionAjax.abort(); }
            /* Escondo todas las ventanas y el boton de la encuesta */
            $("#VentanaMensaje").attr("Visible", false);
            $("#VentanaError").attr("Visible", false);
            $("#BarraNavegacion_VentanaEncuesta").attr("Visible", false);
            $("#MarcoIndice").attr({ "Visible" : false });
            $("#Categorias").attr({ "Visible" : false });
            document.getElementById("Logo").className = "AnimarLogo";
            this.OcultarBarraNavegacion();
        }
        else {  
            this.PeticionAjax = 0;
            document.getElementById("Logo").className = "";
        }
    };
    
    
    /* Función que muestra / oculta el icono cargando de la esquina inferior derecha */
    this.Cargando = function(Valor) {
        if (Valor === "TRUE") { $("#BarraNavegacion_Inferior").attr({ "mostrar" : true });        }
        else                  { $("#BarraNavegacion_Inferior").removeAttr("mostrar");             }
    };
    
    
    /* Función que carga la URL para buscar palabras dentro de la web */
    this.Buscar = function() {    
        if ($("#BarraPrincipal_MarcoBuscar_Edit").val() === "")  {
            $("#BarraPrincipal_MarcoBuscar_Edit").focus();
            return;
        }

        console.log("Base.Buscar " + $("#BarraPrincipal_MarcoBuscar_Edit").val());   

        $.post( "/Buscar/", { "Regenerar" : "todo", "Categoria" : "Todo", "SinPlantilla" : "true", "Search" : $("#BarraPrincipal_MarcoBuscar_Edit").val() }).done(function(data) {
            $("body").attr({ "Tipo" : $Base.Entrada["Buscar"] });
            $("#MarcoNavegacion").html(data);
            /*RedireccionarLinks();*/
        }).fail(function( jqXHR, textStatus, tError ) {
            /*if (textStatus === "error") { MostrarErrorAjax(500, false); }
            else                        { MostrarErrorAjax(404, false); }*/
            console.log("Base.Buscar Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });

        URL = "/Buscar/" + $("#BarraPrincipal_MarcoBuscar_Edit").val();
        nURL = URL;
        var vURL = this.IdentificarEntrada(URL, nURL);

        window.history.pushState(vURL, document.title, URL);
        /* Pongo el scroll arriba DESPUES de identificar la URL y haber guardado el scroll para el historial */
    //    $(window).scrollTop(0);
        document.title = vURL["Titulo"];
        // Cierro el menu
        this.ClickMenu(0);
    };
    
    
    /* Función que carga una URL interna dentro del #MarcoNavegacion */
    this.CargarURL = function(URL) {    
/*        if (document.getElementById("Logo").className === "AnimarLogo") {
            console.log("Base.CargarURL Error, se ha intentado abrir una URL mientras se estaba cargando otra.");
            return false;
        }*/
        /* Escondo los menús de la barra de navegación */
        $("#BarraNavegacion > .Menu_BotonCheck > input[type=checkbox]").removeAttr("checked");
        this.LogoCargando("TRUE");
        
        if (URL.indexOf("/") === -1) {
            Path = window.location.href.split('/');
            Path.pop();
            Path = Path.join('/');
            URL = Path + "/" + URL;
            nURL = Path + "/" + URL;
        }

        
        if (URL === "/") nURL = "/index.php";
        else             nURL = URL;
        console.log("Base.CargarURL " + nURL);
        this.URL = URL;
        this.nURL = nURL;
        this.PeticionAjax = $.post(nURL, { "Regenerar" : "todo", "Categoria" : "Todo", "SinPlantilla" : "true" }).done(function(data) {
            if (data.indexOf("<script>$Base.MostrarErrorAjax(404, false);</script>") === 0) {
                $Base.MostrarErrorAjax(404, false);
            }
            else {
                $("#MarcoNavegacion").html(data);
                $Base.Entrada = $Base.IdentificarEntrada($Base.URL, $Base.nURL);    
                window.history.pushState($Base.Entrada, document.title, $Base.URL);
                /* Pongo el scroll arriba DESPUES de identificar la URL y haber guardado el scroll para el historial */
                $(window).scrollTop(0);
                document.title = $Base.Entrada["Titulo"];
//                if (isset($Base.Entrada["Idioma"]))
                $Base.RedireccionarLinks();
            }
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Base.CargarURL Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });

        // Oculto la ventana de error
        $("#VentanaError").attr({"visible" : "false" });  
    };  
    
    
    /* Función que consulta al servidor el usuario y el password introducidos, en caso de ser válidos, carga las herramientas de administrador */
    this.Loguear = function() {
        var l = $("#devildrey33_Usuario").val();
        var p = $("#devildrey33_Password").val().split("").reverse().join("");
        var v;
        var r = parseInt(Math.random() * (9 + 1));
        var pass = r.toString();
        for (var i = 0; i < p.length; i++) {
            v = p.charCodeAt(i) + r;
            if (v > 255) v -=255;
            rv = v.toString();
            if (v < 10) rv = "00" + rv;
            if (v < 100 && v > 10) rv = "0" + rv;        
            pass = pass + rv;
        }
        console.log("Base.Loguear(" + pass + ")");
        this.Cargando("TRUE");
        $.post("/cmd/Loguear.cmd", { "l" : l,  "p" : pass }).done(function(data) {
//            console.log("Base.Loguear", data);
            Datos = JSON.parse(data);
            if (Datos.Mensaje === "Correcto!") { // Logueado
                $Base.CargarJS("ObjetoAdmin.js", function() { $Admin.Iniciar(); });
                localStorage["Comentarios_Usuario"] = $("#devildrey33_Usuario").val();
                $("#devildrey33_Password").val("");
                $("#VentanaLogin").attr({ visible : false });
                // Añado el html para administrador
                $("#Marco33").html(Datos.HTMLAdmin);
                // Carpeta ejemplos completa con checkboxes para añadir / eliminar de la versión de usuario.
                $("#BarraNavegacion_Explorador").html(Datos.ExplorarLab);
                $("#BarraNavegacion_Explorador .Lab_Archivo").off("click").on("click", function() { $Lab.ClickArchivo($(this)); });
                $("#BarraNavegacion_Explorador .Lab_Directorio").off("click").on("click", function() { $Lab.ClickDirectorio($(this)); });
                
                // Espero medio segundo a que se cargue el javascript para iniciarlo
//                setTimeout(function() { $Admin.Iniciar(); }, 500);
            }
            else {  // Error login o password incorrectos
                $("#VentanaLogin").removeClass("VentanaError_AnimacionError");
                setTimeout(function() { $("#VentanaLogin").addClass("VentanaError_AnimacionError"); }, 50);
                $Base.Cargando("FALSE");
            }
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Base.Loguear Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });
    };   
    
    

    /* Función para enviar comandos simples */
    /* TODOS los comandos requieren ser administrador */
    this.cmd = function(Comando) {
        $.post("/cmd/" + Comando + ".cmd").done(function(data) {
            console.log("Base.cmd(" + Comando + ")", data);
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Base.cmd Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });                    
    };
    
    
    this.IniciarBuscador = function(nBuscar) {
        if (this.CustomSearchControl === 0) {
//            this.CargarJS("https://www.google.es/jsapi");
            google.load('search', '1');
            cse = new google.search.CustomSearchControl().draw('cse');
            google.load('search', '1');

            // Create a custom search control that uses a CSE restricted to code.google.com
            this.CustomSearchControl = new google.search.CustomSearchControl('005953647264407381580:5hnum4vxqqo');

            // Draw the control in content div
            this.CustomSearchControl.draw('content');        

            if (typeof nBuscar !== 'undefined') { this.CustomSearchControl.execute(nBuscar); }
        }
//        if ($nBuscar !== "") $DHE .= "customSearchControl.execute('".$nBuscar."');";
        
    };
    
    
    /* Carga un archivo JS dinamicamente 
       - Nombre  : Nombre del archivo JS sin ningun path
       - Funcion : Función a ejecutar una vez cargado el JS (puede ser NULL) */
    this.CargarJS = function(Nombre, Funcion) {
        if (typeof(Funcion) !== "undefined") {  this.FuncionCargarJS = Funcion;        }
        else                                 {  this.FuncionCargarJS = function() { }; }
        
        for (var i = 0; i < this.JSDinamico.length; i++) {
            if (this.JSDinamico[i] === Nombre) {
                console.log("Base.CargarJS(" + Nombre + ") ya se había cargado...");
                this.FuncionCargarJS();
                return;
            }
        }

/*        this.JSDinamico.push(Nombre);
        var Script = document.createElement('script');
        Script.setAttribute("type","text/javascript");
        Script.setAttribute("src", "/Web/JS/" + Nombre);
        // No se puede hacer un try / catch con el append child :(, por lo que los errores 404 no se pueden detectar...
        if (typeof Script !== "undefined") document.getElementsByTagName("head")[0].appendChild(Script);*/
        $.getScript("/Web/JS/" + Nombre, function(data, textStatus, jqxhr) {
            console.log("Base.CargarJS(" + Nombre + ")");    
            $Base.FuncionCargarJS();            
        }).fail(function(jqxhr, settings, exception) { 
            console.log("Base.CargarJS Error Ajax", jqxhr, settings, exception);    
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });
        
    };
    

    /* Carga un archivo CSS dinamicamente  */
    this.CargarCSS = function(Nombre) {
        for (var i = 0; i < this.CSSDinamico.length; i++) {
            if (this.CSSDinamico[i] === Nombre) {
                console.log("Base.CargarCSS(" + Nombre + ") ya se había cargado...");
                return;
            }
        }
        this.CSSDinamico.push(Nombre);
        var Script = document.createElement("link");
        Script.setAttribute("rel", "stylesheet");
        Script.setAttribute("type", "text/css");
        Script.setAttribute("href", "/Web/CSS/" + Nombre);
        // No se puede hacer un try / catch con el append child :(, por lo que los errores 404 no se pueden detectar...
        if (typeof Script !== "undefined") document.getElementsByTagName("head")[0].appendChild(Script);
        
        console.log("Base.CargarCSS(" + Nombre + ")");    
    };


    /* CALLBACK para el historial de navegación */
    this.CALLBACK_Histroial = function(event) {
        this.LogoCargando("TRUE");   
        console.log("Base.CALLBACK_Histroial", event.state);
        if (event.state)  {
            URL = event.state["URL"];
        }
        else  {
            // Esto no deberia suceder NUNCA
            URL = window.location.href;
        }       
        
        URL.replace("..", "");
        
        if (URL.indexOf("/") === -1) {
            Path = window.location.href.split('/');
            Path.pop();
            Path = Path.join('/');
            URL = Path + "/" + URL;
            nURL = Path + "/" + URL;
        }

        if (URL === "/") nURL = "/index.php";
        else             nURL = URL;
        this.PeticionAjax = $.post(nURL, { "Regenerar" : "todo", "Categoria" : "Todo", "SinPlantilla" : "true" }).done(function(data) {
            /* Error 404 */
            if (data.indexOf("<script>$Base.MostrarErrorAjax(404, false);</script>") === 0) {
                $Base.MostrarErrorAjax();
            }        
            else { /* Carga del historial normal */
                $("#MarcoNavegacion").html(data);
                $Base.Entrada = $Base.IdentificarEntrada(URL, nURL);    
                $Base.RedireccionarLinks();
                document.title = $Base.Entrada["Titulo"];
            }
        }).fail(function( jqXHR, textStatus, tError ) {
            console.log("Base.CALLBACK_Histroial Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false);
        });

        // Oculto la ventana de error
        $("#VentanaError").attr({"visible" : "false" });        
    };
    
    
    /* Activa / desactiva la animación de la cabecera según sea visible o no en la pantalla 
     *  Desde el administrador de tareas del chrome se ve que si la animación está activa, aunque no se vea en pantalla consume un 5% de cpu.
     *  Con esta función solucionamos el desperdicio de ciclos de la animación si no hay que mostrarla.
     * */
    this.AnimarCabeceraBlog = function() {
        Header = $(".Cabecera");
        if (Header.length > 0) {
            if ($(window).scrollTop() > 190 && Header.attr("animar")) {
                console.log("Base.AnimarCabeceraBlog [animar=false]", Header);
                Header.removeAttr("animar");        
            }
            else if ($(window).scrollTop() < 190 && typeof Header.attr("animar") === "undefined") {
                console.log("Base.AnimarCabeceraBlog [animar=true]", Header);
                Header.attr({ "animar" : "true" }); 
            }
        }
    };
    
    
    /* Función que comprueba la ultima subversión de la web visitada con este navegador */
    /* Si no hay sub-versión es que es la primera visita. */
/*    this.ComprobarSubVersionWeb = function() {
        SubVersion = 0;
        // Es la primera vez que entra, no necesita conocer las actualizaciones 
        if (typeof localStorage["devildrey33_SubVersion"] === 'undefined') {             
            localStorage["devildrey33_SubVersion"] = SubVersion; 
            // BUEN SITIO PARA INFORMAR DE COOKIES
        }
        // No es la misma versión, mostramos las notas de la subversión 
        if (localStorage["devildrey33_SubVersion"] !== SubVersion) {
            
        }
    };*/
                                            
    this.ComprobarScrollVotacion = function() {
        if ($(window).scrollTop() > ($(document).height() - ($(window).height() * 2))) {
            console.log("Base.ComprobarScrollVotacion");
//        if ($(window).scrollTop() > 190 && Header.attr("animar")) {
            if (typeof localStorage["Voto_" + Pagina] === "undefined") {
                $("#BarraNavegacion_Votacion").attr({ "Mostrar" : true });
                $("#BarraNavegacion_Votacion .VotarDocumento_Estrellas > button").off("click").on("click", function(e)  {
                    $Base.VotarWeb($(this).html());
                });
            }
        }
        
/*        else {
            $("#BarraNavegacion_Votacion").removeAttr("Mostrar");
        }        */
    };
};

/* Función añadida para convertir la fecha de hoy al formato que usan los input[type=date] */
Date.prototype.toDateInputValue = (function() {
    var local = new Date(this);
    local.setMinutes(this.getMinutes() - this.getTimezoneOffset());
    return local.toJSON().slice(0,10);
});


/* CALLBACK para el historial */
window.addEventListener('popstate', function(event) {
    $Base.CALLBACK_Histroial(event);
}, false);

/* Al cargar */
$(window).load(function()   { $Base.Iniciar(); });
/* Al usar el scroll */
$(window).scroll(function() { $Base.AnimarCabeceraBlog();   $Base.ComprobarScrollVotacion();     });