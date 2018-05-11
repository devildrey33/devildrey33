/* Objeto principal para devildrey33 */
$Base = new function() {
    // Variable que contiene la animación de Sobre el autor ...
    this.SobreElAutor       = null;
    this.CanvasError404     = null;
//    this.ObjetoCanvas_Depurar = false; // necesaria para poder controlar la depuración desde el panel de administración
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
    this.FuncionCargarCSS   = function() { };
    /* Variable para almacenar la función que se utilizara al finalizar la carga dinámica de un JS */
    this.FuncionCargarJS    = function() { };
    /* Función post logueado */
    this.FPL                = function() { };
    /* URL absoluta y relativa de la web */
    this.Raiz               = "";   // https://devildrey33.es 
    this.RaizRelativa       = "";   // Path relativo de la raíz (puede ser "")
    
    this.PosBanner          = 0;
        
    this.TimerTiempoSesion  = 0;
    // Función vacia para resetear el tiempo de la sesión (la función se rellena al iniciar el objeto admin)
    this.ResetearTimerTiempoSesion = function() {  };
    
    this.Iniciar = function() {
        /* Botones de las vistas del lab */
//        $("#BarraNavegacion_LabVer > .Menu_Boton").on("click"), function() { $("#BarraNavegacion_BotonVer_Estado").trigger("click") }
        $(".Lab_BotonVerFilas").click(function(e)   { $Lab.AjustarVista("0"); });
        $(".Lab_BotonVerColumnas").click(function(e){ $Lab.AjustarVista("1"); });
        $(".Lab_BotonVerCodigo").click(function(e)  { $Lab.AjustarVista("2"); });
        $(".Lab_BotonVerPreview").click(function(e) { $Lab.AjustarVista("3"); });
        /* Explorador del laboratorio */
//        $("#BarraNavegacion_LabExplorar > .Menu_Boton > .Menu_Boton_Cruz > svg").on("click"), function() { $("#BarraNavegacion_BotonExplorar_Estado").trigger("click"); }
//        $("#BarraNavegacion_LabMarcoVer > label.Menu_Boton:nth-child(8)").click(function(e){ $Lab.AjustarVista("3"); });

        $Lab.EnlazarEventosExplorador();

        /* Eventos click para los botones del menú principal 
         *  Obtengo el evento del control input que va asociado a un label invisible que ocupa el mismo espacio que el boton.
         *  De esta forma todo el proceso de la animación se hace mediante CSS.
         *  Solo se requiere javascript para determinar en que boton se ha presionado, para cerrar otras ventanas emergentes. */
        $("#BarraPrincipal_Boton_Estado").click(            this.ClickMenu.bind(this, 0)); /* tanca tot */
        $("#BarraPrincipal_BotonCSS_Estado").click(         this.ClickMenu.bind(this, 1));
        $("#BarraPrincipal_BotonCPP_Estado").click(         this.ClickMenu.bind(this, 2));
        $("#BarraPrincipal_BotonJS_Estado").click(          this.ClickMenu.bind(this, 3));
        $("#BarraPrincipal_BotonPHP_Estado").click(         this.ClickMenu.bind(this, 4));
        $("#BarraPrincipal_BotonBuscar_Estado").click(      this.ClickMenu.bind(this, 5));
        
        $("#BarraNavegacion_BotonVer_Estado").click(        this.ClickMenu.bind(this, 6));
        $("#BarraNavegacion_BotonExplorar_Estado").click(   this.ClickMenu.bind(this, 7));
        $("#BarraNavegacion_Indice_Estado").click(          this.ClickMenu.bind(this, 9));
        $("#BarraNavegacion_PrevNext_Estado").click(        this.ClickMenu.bind(this, 10));
        $("#BarraNavegacion_RedesSociales_Estado").click(   this.ClickMenu.bind(this, 11));
        $("#BarraNavegacion_Votacion_Estado").click(        this.ClickMenu.bind(this, 12));
        
        $("#BarraPrincipal_MarcoBuscar_BotonBuscar").click( this.Buscar.bind(this));
        $("#BarraPrincipal_MarcoBuscar_Edit").keyup(function(e)        { if (event.which === 13) { $Base.Buscar(); } });
        
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
                $Base.MostrarLogin();
            }  
        });
        // Teclado del login
        $("#devildrey33_Usuario").keyup(function(e) { 
            switch (e.keyCode) {
                case 27 : $Base.MostrarLoginEsc();              break; // Esc
                case 13 : $("#devildrey33_Password").focus();   break; // Intro
            } 
        });
        $("#devildrey33_Password").keyup(function(e) { 
            switch (e.keyCode) {
                case 27 : $Base.MostrarLoginEsc();              break;  // Esc
                case 13 : $Base.Loguear();                      break;  // Intro
            } 
        });               

        // Boton cerrar para el log de errores php
        $("#ErroresPHP_Cerrar").click(function(e){ $("#ErroresPHP").attr({ "mostrar" : false }); });

        // Redirección de los links del indice
        this.RedireccionarLinks();

        /* Usuario para el login */
        if (typeof localStorage["Comentarios_Usuario"] !== 'undefined') { $("#devildrey33_Usuario").val(localStorage["Comentarios_Usuario"]); }
    };
    
    // Cancelación de la ventana de login/password
    this.MostrarLoginEsc = function() {    
        $("#VentanaLogin").attr({ "Visible" : "false" });
        document.getElementById('devildrey33_Password').setAttribute('type', 'text');
    };
    
    // Muestra la pantalla para loguear como administrador
    this.MostrarLogin = function(FuncionPostLogin) {
        // Asigno el callback post login
        if (typeof(FuncionPostLogin) !== "undefined") this.FPL = FuncionPostLogin;
        
        document.getElementById('devildrey33_Password').setAttribute('type', 'password');
//        $("#devildrey33_Password").attr('type', 'password');
        
        // Muestro la ventana de login
        $("#VentanaLogin").attr({ "Visible" : "true" }); 
        // Paso el foco al primer textbox vacio
        setTimeout(function() { 
            if (typeof localStorage["Comentarios_Usuario"] === 'undefined') { $("#devildrey33_Usuario").focus(); }
            else                                                            { $("#devildrey33_Password").focus(); }
        }, 200);  
    };
    
    /* Función para cargar un banner, si se especifica pos, se cargara el banner de esa posición, en caso contrario se cargara un banner aleatorio. */
    /* -1 es prev y -2 es next */
    this.Banner = function(Pos) {
        if ($Banner !== null) {             
            $Banner.Terminar();
        }
        
        var Banner_Lista = [    /*Banner_ResplandorCircular,
                                Banner_Colisiones,
                                Banner_TranstornoLineal,*/
                                Banner_Espacio2D,
                                Banner_MatrixLluviaHexadecimal,
                                Banner_AdiestramientoCubos3D,
                                Banner_WormHole,
//                                Banner_Anillos,
                                Banner_Sinusoidal,
                                Banner_GeometriaBasica,
                                Banner_ReunionDeCirculos,
                                Banner_HexTunnel,
                                Banner_MultiCubo,
                                Banner_EsferaVShader
                            ];                
                            
        var fPos = 0;
        // Si no se ha especificado ninguna posición generamos una aleatória
        if (typeof (Pos === "undefined")) { fPos = RandInt(Banner_Lista.length - 1); }
        else                              { fPos = Pos }
        // Si es -1 es el botón Prev y si es -2 es el botón Next (de los controles del canvas)
        if (Pos === -1) { // Prev
            fPos = this.PosBanner -1; 
            if (fPos < 0) { 
                fPos = (Banner_Lista.length) -1; 
            } 
        }
        else if (Pos === -2) {  // Next
            fPos = this.PosBanner + 1; 
            if (fPos >= (Banner_Lista.length)) { 
                fPos = 0;                       
            } 
        }
        console.log("Base.Banner(Pos = " + Pos + ")", fPos);
        this.PosBanner = fPos;
        
//        $Banner = new Banner_HexTunnel();
        $Banner = new Banner_Lista[fPos];
        // Muestro / oculto el div de los frames por segundo según el checkbox del panel de administración
        $Banner.OpcionesCanvas.MostrarFPS = ($("#CH_MostrarFPS").attr("marcado") === "true") ? true : false;
        document.getElementById("Cabecera_Stats").style.display = ($Banner.OpcionesCanvas.MostrarFPS) ? "block" : "none";
    };
    
    /* Función para mostrar la ventana con los errores php */
    this.MostrarErroresPHP = function() {
        console.log("Base.MostrarErroresPHP");
        $EFP = $("#ErroresFinPlantilla").html();
        if ($EFP !== "") { 
            $("#ErroresFinPlantilla").html("");
            $("#ErroresPHP_Info").html($EFP); 
        }
        $("#ErroresPHP").attr({ "mostrar" : true });
    };
    
    /* Función que muestra una ventana para el twiter */
    this.BotonTwitter = function() {
       // Texto = $("#Cabecera > .Cabecera_Datos > h1").html();
        Texto = document.title;
        
//        if (typeof $(".Cabecera > .Cabecera_Datos > h1") === 'undefined') { Texto = $(".Cabecera > .Cabecera_Datos > h1").html();                     }
//        else                                                              { Texto = "" + window.location.href.replace(/^.*[\\\/]/, ''); }
        console.log("Base.BotonTwitter", Texto, window.location.href);
        window.open("https://twitter.com/home?status=" + Texto + ": " + window.location.href, "Twitter", "toolbar=no,width=550,height=255");
    };
    
    /* Función que muestra una ventana para el facebook */
    this.BotonFacebook = function() {        
     //   Texto = $("#Cabecera > .Cabecera_Datos > h1").html();
        Texto = document.title;
        //if (typeof $(".Cabecera > .Cabecera_Datos > h1") === 'undefined') { Texto = $(".Cabecera > .Cabecera_Datos > h1").html();                     }
        //else                                                              { Texto = "Experimento : " + window.location.href.replace(/^.*[\\\/]/, ''); }
        console.log("Base.BotonFacebook", Texto, window.location.href);
        window.open("https://www.facebook.com/share.php?u=" + window.location.href + "&t=" + Texto, "Facebook", "toolbar=no,width=550,height=355");
    };

    /* Función que muestra una ventana para el google+ */
    this.BotonGooglePlus = function() {        
   //     Texto = $("#Cabecera > .Cabecera_Datos > h1").html();
        Texto = document.title;
        //if (typeof $(".Cabecera > .Cabecera_Datos > h1") === 'undefined') { Texto = $(".Cabecera > .Cabecera_Datos > h1").html();                     }
        //else                                                              { Texto = "Experimento : " + window.location.href.replace(/^.*[\\\/]/, ''); }
        console.log("Base.BotonGooglePlus", Texto, window.location.href);
        window.open("https://plus.google.com/share?url=" + window.location.href + "&t=" + Texto, "Google Plus", "toolbar=no,width=550,height=355");
    };

    //https://www.linkedin.com/shareArticle?mini=true&url=http%3A%2F%2Fdevildrey33.es%2Fcapitulo.php%3Fserie%3D2874%26temp%3D1%26cap%3D01%26sthash.R8lb5Hgr.mjjo&title=Ver%2037%20dias%201x01%20online&summary=Todas%20tus%20series%20para%20ver%20online%20o%20en%20descarga%20directa%20&source=    
    this.BotonLinkEdin = function() {        
//        Texto = $("#Cabecera > .Cabecera_Datos > h1").html();
        Texto = document.title;
        console.log("Base.BotonLinkEdin", Texto, window.location.href);
//        window.open("https://www.linkedin.com/shareArticle?mini=true&url=" + window.location.href + "&t=" + Texto, "Google Plus", "toolbar=no,width=550,height=355");
    };
    
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
        if (Menu !== 1) { $("#BarraPrincipal_BotonCSS_Estado").prop("checked", false);    }
        if (Menu !== 2) { $("#BarraPrincipal_BotonCPP_Estado").prop("checked", false);    }
        if (Menu !== 3) { $("#BarraPrincipal_BotonJS_Estado").prop("checked", false);     }
        if (Menu !== 4) { $("#BarraPrincipal_BotonPHP_Estado").prop("checked", false);    }
        if (Menu !== 5) { $("#BarraPrincipal_BotonBuscar_Estado").prop("checked", false); }
        /* Paso el foco al editbox de la busqueda */
        if (Menu === 5) { $("#BarraPrincipal_MarcoBuscar_Edit").focus().select();  }        
        if (Menu !== 6) { $("#BarraNavegacion_BotonVer_Estado").prop("checked", false); }
        if (Menu !== 7) { $("#BarraNavegacion_BotonExplorar_Estado").prop("checked", false); }
        // Localiza el archivo abierto en la lista de archivos del lab
        if (Menu === 7) { setTimeout( function() { $Lab.ResaltarArchivoActual($("#MarcoNavegacion > article").attr("pagina"), true); }, 400); }        
        if (Menu !== 8) { $("#BarraPrincipal_Boton33_Estado").prop("checked", false);    }
        /* El menú admin cierra el menu principal (para ciertas vistas moviles puede no haber espacio para los dos a la vez) */
        if (Menu === 8) { $("#BarraPrincipal_Boton_Estado").prop("checked", false); }
        if (Menu !== 9) { $("#BarraNavegacion_Indice_Estado").prop("checked", false); }
        if (Menu !== 10) { $("#BarraNavegacion_PrevNext_Estado").prop("checked", false); }
        if (Menu !== 11) { $("#BarraNavegacion_RedesSociales_Estado").prop("checked", false); }
        if (Menu !== 12) { $("#BarraNavegacion_Votacion_Estado").prop("checked", false); }
    };
    

    /* Obtiene el valor númerico asignado al milisegundo actual de la ejecución */
    this.GetTickCount = function() {
        var d = new Date();
        return d.getTime();            
    };

        
    /* Enlaza los links a href sin target a la función CargarURL */
    this.RedireccionarLinks = function() {
        console.log("Base.RedireccionarLinks");
        // Enlaces del marco de navegación
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
        
        
    /* Vota la entrada */    
    this.VotarWeb = function(Valor) {
        Pagina = $("#MarcoNavegacion > article").attr("pagina");
        // Desmarco el boton de las votaciones
        $("#BarraNavegacion_Votacion_Estado").removeAttr("checked");
        console.log("Base.VotarWeb", Valor, Pagina);
        if (typeof localStorage["Voto_" + Pagina] === "undefined") {
            localStorage["Voto_" + Pagina] = Valor;
            $.post(this.Raiz + "cmd/VotarPagina.cmd", { "Pagina" : Pagina, "Valor" : Valor, "URL" : window.location.href }).done(function(data) {
                Datos = JSON.parse(data);
                if (Datos["HTML"] !== "false") {
                    $(".Cabecera_Datos > .FechaEntrada > span").html(Datos["HTML"]);
                    $("#BarraNavegacion_Votacion").removeAttr("Mostrar");
                    if ($("html").attr("lang") === "es") { $Base.MostrarMensaje("La votación se ha relaizado correctamente, muchas gracias!"); }
                    else                                 { $Base.MostrarMensaje("Your vote is annotated, thank you!"); }
                }
                $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
                if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
                /*RedireccionarLinks();*/
            }).fail(function( jqXHR, textStatus, tError ) {
                console.log("Base.VotarWeb Error ajax", jqXHR, textStatus, tError);
                $Base.MostrarErrorAjax(jqXHR.status, false, tError);
            });                    
        }
        else {
            if ($("html").attr("lang") === "es") { $Base.MostrarMensaje("Solo puedes votar una vez por página."); }
            else                                 { $Base.MostrarMensaje("Only you can vote one time per page."); }
        }
    };
        

    /* Función para mostrar mensajes estandar */
    /* - Inserta un div con el mensaje, de esta forma se pueden mostrar varios mensajes a al vez */
    this.MostrarMensaje = function(Mensaje, Titulo, Alerta, Funcion) { 
        console.log("Base.MostrarMensaje(" + Mensaje + ")");
        if (typeof(Alerta) === "undefined")  { Alerta = "false"; }                                                              
        else                                 { if (typeof(Titulo) === "undefined") { Titulo = "Mensaje de alerta"; } }  // Si no se ha especificado titulo lo establezco como 'Titulo de alerta'
        if (typeof(Titulo) === "undefined")  { Titulo = "Mensaje"; } // Titulo normal
        if (typeof(Funcion) === "undefined") { Funcion = function () { }; }
        
        Ventana = $("<div class='VentanaMensaje MarcoVentana-350' visible='false' alerta='" + Alerta + "' titulo='" + Titulo + "'>" + 
                        "<p>" + Mensaje + "</p>" + 
                        "<div class='Centrado'>" + "<button class='BotonVentana'>Aceptar</button>" + "</div>" + 
                    "</div>");
        Ventana.find(".Centrado > button").on("click", { "Funcion" : Funcion }, function(event) { 
            $(this).parent().parent().attr({"visible" : "false" });
            event.data.Funcion();
            setTimeout(function(Ventana) { Ventana.remove(); }, 500, $(this).parent().parent());
        });
        Ventana.appendTo('body').attr({"visible" : "false"});
//        Ventana.attr({"visible" : "true"}).find("button").focus();
        setTimeout(function(Ventana) { Ventana.attr({"visible" : "true"}).find("button").focus(); }, 100, Ventana);
    };
    
    this.MostrarErrorAjax = function(Error, VolverIndice, Excepcion) { 
        console.log("Base.MostrarErrorAjax(" + Error + ", " + VolverIndice + ")");
        this.LogoCargando("FALSE");    
        this.Cargando("FALSE");
        switch (Error) {
            case 403  : Mensaje = "Error 403 en la petición ajax.<br />No se permite el acceso al archivo solicitado.";                                         break;
            case 404  : Mensaje = "Error 404 en la petición ajax.<br />El archivo solicitado no existe.";                                                       break;
            case 1404 : Mensaje = "Error 404 en la petición ajax.<br />No se puede cargar el ejemplo del lab.";                                                 break;
            default   : Mensaje = "Error 500 en la petición ajax.<br />Es posible que el servidor no esté disponible en estos momentos. (" + Excepcion + ")";   break;
        }
        Funcion = function() { };
        if (VolverIndice === true) {  
            this.Entrada["TipoPagina"] = "Error404";               
            Mensaje = Mensaje + " Pulsa aceptar para ser re-dirigido al indice.";
            Funcion = function() { $Base.CargarURL("/"); };
        }
        this.MostrarMensaje(Mensaje, "true", Funcion);
    };    
    
    /* Función que muestra una ventana de error si hay algun problema al cargar una URL */
    /*this.MostrarErrorAjax = function(Error, VolverIndice, Excepcion) { 
        console.log("Base.MostrarErrorAjax(" + Error + ", " + VolverIndice + ")");
        this.LogoCargando("FALSE");    
        this.Cargando("FALSE");

        switch (Error) {
            case 403  : $("#VentanaError > p").html("Error 403! no se permite el acceso al archivo solicitado.");                                        break;
            case 404  : $("#VentanaError > p").html("Error 404! el archivo solicitado no existe.");                                                      break;
            case 1404 : $("#VentanaError > p").html("Error 404! al enviar la petición ajax para cargar un archivo del lab.");                            break;
            default   : $("#VentanaError > p").html("Error 500! Es posible que el servidor no esté disponible en estos momentos. (" + Excepcion + ")");  break;
        }

        if (VolverIndice === true) {  
            this.Entrada["TipoPagina"] = "Error404";               
            $("#VentanaError > p").html($("#VentanaError > p").html() + " Pulsa aceptar para ser re-dirigido al indice.");
            $("#VentanaError > div > button").off("click.VentanaError").on("click.VentanaError", function() { 
                $("#VentanaError").attr({"visible" : "false" }); 
                $Base.CargarURL("/"); 
            });
        }
        else {  
            if (this.Entrada["TipoPagina"] === "Lab" || this.Entrada["TipoPagina"] === "LabError")      { this.Entrada["TipoPagina"] = "LabError"; }
            else                                                                                        { this.Entrada["TipoPagina"] = "Error404SinPlantilla"; }
            $("#VentanaError > div > button").off("click.VentanaError").on("click.VentanaError", function()   { $("#VentanaError").attr({"visible" : "false" }); });
        }

        $("#VentanaError").attr({"visible" : "true" });        
        setTimeout(function() { $("#VentanaError > div > button").focus(); }, 100);

        this.ActualizarBarraNavegacion();        
    };*/
    
    
    /* Función que identifica una entrada según su URL */
    this.IdentificarEntrada = function(iURL, URLReal) { 
        // Por defecto es el indice... de esta forma se detecta si está en un servidor local y dentro de un directorio, al estilo http://localhost/devildrey33.es/
        var Ret = { "Titulo" : "devildrey33", "URL" : iURL, "URLReal" : URLReal, "Imagen" : "", "TipoPagina" : "Desconocido", "Pos" : -2, "Idioma" : "es" };    

        /* Indice */
        if (URLReal.indexOf("Categorias/") > -1 || iURL === "/" + this.RaizRelativa || iURL === this.Raiz) {
            Ret["TipoPagina"] = "Indice";
            $("body").attr({ "Tipo" : Ret["TipoPagina"] });
            console.log("Base.IdentificarEntrada : " + Ret["TipoPagina"], Ret);
            return Ret;
        }

        nURL = "";
        cURL = iURL.toLowerCase();
        /* Es una entrada del blog o Documentación */
        if (cURL.indexOf("blog/") > -1) {
            Ret["TipoPagina"] = "Blog";
            nURL = iURL.substr(6);
        }
        if (cURL.indexOf("doc/css") > -1 || cURL.indexOf("documentacion/css") > -1) {
            Ret["TipoPagina"] = "DocCSS";
            nURL = iURL.substr(8);
        }
        if (cURL.indexOf("lab/") > -1) {
            Ret["TipoPagina"] = "Lab";
            nURL = "";
        }
/*        if (cURL.indexOf("web/") > -1) {
            Ret["TipoPagina"] = "Web";
            nURL = "";
        }*/
        // Web / Admin                || Sobre el autor                      || Faq barba                     || Página de error 404
        if (cURL.indexOf("web/") > -1 || cURL.indexOf("sobre-el-autor") > -1 || cURL.indexOf("faqbarba") > -1) { 
            Ret["TipoPagina"] = "Simple";
            nURL = "";
        }
        // Página de error 404
        if (document.getElementById('Error404') !== null) {
            Ret["TipoPagina"] = "Error404";
            nURL = "";            
        }

        $("body").attr({ "Tipo" : Ret["TipoPagina"] });
        var p = this.BuscarEntrada(iURL);
        if (p !== -1) {
            Ret["Titulo"] = EntradasBlog[p]["Titulo"];
        }
        
        this.RenovarMeta();
//        this.BuscarEntradaActual(URL, $(".Cabecera > .Cabecera_Datos > h1").html());

        console.log("Base.IdentificarEntrada : " + Ret["TipoPagina"], Ret);
        return Ret;    
    };
    
    this.BuscarEntrada = function(nURL) {
        for (i = 0; i < EntradasBlog.length; i++) {
            if (nURL.indexOf(EntradasBlog[i]["URL"]) !== -1) {
                return i;
            }
        }
        return -1;
    };
    
    // Busca la entrada del blog / doc css
    this.BuscarEntradaActual = function(nURL, nTitulo) {
        for (i = 0; i < EntradasBlog.length; i++) {
//            console.log(nURL.indexOf(EntradasBlog[i]["URL"]), EntradasBlog[i]["URL"], EntradasBlog[i]["Fecha"] ,nFecha);
            if (EntradasBlog[i]["Titulo"] === nTitulo) {
                if (nURL.indexOf(EntradasBlog[i]["URL"]) !== -1) {
                    console.log("Base.BuscarEntradaActual : " + i, EntradasBlog[i]);
                    this.Entrada["Titulo"] = EntradasBlog[i]["Titulo"];
                    this.Entrada["Imagen"] = EntradasBlog[i]["Imagen"];
                    this.Entrada["Idioma"] = EntradasBlog[i]["Idioma"];
                    this.PosPrevNext_Tipo = EntradasBlog[i]["Tipo"];
                    return i;
                }
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
/*            case "LabError" :
            case "Error404" :
            case "Error404SinPlantilla" :
                this.MostrarBarraNavegacion();
                break;*/
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
                // Inicio un banner aleatório
                this.Banner();                                
                $Comentarios.Iniciar();
                this.MostrarBarraNavegacion();
                break;
/*            case "Web" :
                this.MostrarBarraNavegacion();
                break;            */
            case "Buscar" :
                $("#BarraNavegacion_Prev").hide();
                $("#BarraNavegacion_Next").hide();
                break;
            case "Simple" :
            default : 
                this.MostrarBarraNavegacion(true);
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
        $("#BarraNavegacion_MarcoNextPrev_Desc").html("<img src='" + this.Raiz + "Web/Graficos/155x125_" + Imagen + "' alt=''/>" +
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
    this.MostrarBarraNavegacion = function(nSimple) { 
        var Simple = (typeof nSimple === 'undefined') ? false : true;
        console.log("Base.MostrarBarraNavegacion(Simple)", Simple);

        $("#BarraNavegacion_RedesSociales, #BarraNavegacion_Votacion").attr('mostrar', !Simple);
                
        // Idioma del articulo
        $("html").attr({ "lang" : this.Entrada["Idioma"] });
        /* Muestro la barra de navegacion */
        $("#BarraNavegacion").attr({ "Visible" : true });

        if (Simple === false) {
            this.Entrada["Pos"] = this.BuscarEntradaActual(this.Entrada["URL"], $("#Cabecera > .Cabecera_Datos > h1").html());

            this.PosPrevNext = this.Entradas_BuscarSiguienteMismoTipo(this.Entrada["Pos"]);
            if (this.PosPrevNext == -1) { this.PosPrevNext = this.Entradas_BuscarAnteriorMismoTipo(this.Entrada["Pos"]); }

            $("#BarraNavegacion_NextPrev").attr({ "mostrar" : (this.Entrada["Pos"] !== -1) ? "true" : "false" }); 

            this.CrearPrevNext(this.PosPrevNext);
        }
        else {
            $("#BarraNavegacion_NextPrev").attr({ "mostrar" : "false" }); 
        }
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
        if (this.TemporizadorAncla !== 0) { clearTimeout(this.TemporizadorAncla); }
        this.TemporizadorAncla = setTimeout(function() { $Base.Ancla.removeAttr("resaltado"); $Base.TemporizadorAncla = 0; }, 1000);
    };
    
    /* Escanea el documento en busca de etiquetas h2 para enumerarlas en la lista de anclas */
    this.EscanearAnclas = function() {
        console.log("Base.EscanearAnclas");
        var Codigo = "";
        var ContadorAnclas = 0;
                
        $("#MarcoNavegacion h2").each(function(index) { 
            var Texto = $(this).html();
            if (Texto === "") { // No tiene texto en el HTML, está en el content del after.
                Texto = window.getComputedStyle(this, ':after').getPropertyValue('content');
                Texto = Texto.replace('"', '').replace('"', '');
            }
            Codigo = Codigo + "<div onclick='$Base.BuscarAncla(" + (ContadorAnclas++) + ")' title='" + Texto + "'>" + Texto + "</div>";
        });
        var Columnas = 0;
        while (ContadorAnclas > 0) { ContadorAnclas -= 12; Columnas ++; }
        $("#BarraNavegacion_SubIndice").attr({ "class" : "Menu_Marco SubIndice_Columas_" + Columnas });
        if (Codigo !== "") {
            $("#BarraNavegacion_Indice").show();
            $("#BarraNavegacion_SubIndice").html(Codigo);
        }
        else {
            $("#BarraNavegacion_Indice").hide();
        }
    }; 
    
   
    /* Función que muestra / oculta la animación del logo en modo cargando */
    /* Esta función se ha ejecutado porque se ha utilizado $Base.CargarURL para cargar un documento */
    this.LogoCargando = function (Valor) {
        this.Cargando(Valor);
        if (Valor === "TRUE") {
            // Si hay una petición ajax pendiente, la cancelo.
            if (this.PeticionAjax !== 0) { this.PeticionAjax.abort(); }
            /* Escondo y elimino todas las ventanas de mensaje */
            $(".VentanaMensaje").attr("Visible", false).each( function() { 
                setTimeout(function(Ventana) { Ventana.remove(); }, 500, $(this));
            });
            /* Escondo los marcos del indice */
            $("#MarcoIndice").attr({ "Visible" : false });
            $("#Categorias").attr({ "Visible" : false });
            document.getElementById("Logo").className = "AnimarLogo SinSeleccion";
            this.OcultarBarraNavegacion();
        }
        else {  
            this.PeticionAjax = 0;
            document.getElementById("Logo").className = "SinSeleccion";
            /* Vuelvo al estado normal los marcos del indice */
            $("#MarcoIndice").attr({ "Visible" : true });
            $("#Categorias").attr({ "Visible" : true });
            
//            $("#Logo").attr({ "desactivado" : true });
        }
    };
    
    
    /* Función que muestra / oculta el icono cargando de la esquina inferior derecha */
    this.Cargando = function(Valor) {
        if (Valor === "TRUE" || Valor === true) { $("#BarraNavegacion_Inferior").attr({ "mostrar" : true });        }
        else                                    { $("#BarraNavegacion_Inferior").removeAttr("mostrar");             }
    };
    
    
    /* Función que carga la URL para buscar palabras dentro de la web */
    this.Buscar = function() {    
        if ($("#BarraPrincipal_MarcoBuscar_Edit").val() === "")  {
            $("#BarraPrincipal_MarcoBuscar_Edit").focus();
            this.MostrarMensaje("Debes especificar una o mas palabras a buscar.")
            return;
        }

        console.log("Base.Buscar " + $("#BarraPrincipal_MarcoBuscar_Edit").val());   
        this.Cargando("TRUE");
        $.post(this.Raiz + "cmd/Buscar", { "Palabras" : $("#BarraPrincipal_MarcoBuscar_Edit").val() }).done(function(data) {
            Datos = JSON.parse(data);
//            $("body").attr({ "Tipo" : $Base.Entrada["Buscar"] });
//            $("#MarcoNavegacion").html(Datos["HTML"]);
            $("#BarraPrincipal_MarcoBuscar_Resultado").html(Datos["HTML"]);
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
//            $Base.RedireccionarLinks();
            $Base.Cargando("FALSE");
            // Enlaces del marco resultado de la busqueda
            $("#BarraPrincipal_MarcoBuscar a[href]:not([target])").off("click").on("click", function(e) {
                e.preventDefault();
                e.stopImmediatePropagation();
                $Base.CargarURL($(this).attr("href"));
                $Base.ClickMenu(0);
                return false;
            });
            
            
            /*RedireccionarLinks();*/
        }).fail(function( jqXHR, textStatus, tError ) {
            /*if (textStatus === "error") { MostrarErrorAjax(500, false); }
            else                        { MostrarErrorAjax(404, false); }*/
            console.log("Base.Buscar Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false, tError);
        });

    };
    
    this.TerminarCanvas = function() {
        if ($Banner !== null) {
            $Banner.Terminar();
            $Banner = null;
        }
        if (this.SobreElAutor !== null) {
            this.SobreElAutor.Terminar();
            this.SobreElAutor = null;
        }
        if (this.CanvasError404 !== null) {
            this.CanvasError404.Terminar();
            this.CanvasError404 = null;
        }
    },
    
    /* Función que carga una URL interna dentro del #MarcoNavegacion */
    this.CargarURL = function(cURL) {    
        // Reseteo el temporizador para el tiempo de la sesión
        this.ResetearTimerTiempoSesion();
        
        /* Comprobación para determinar si hay un archivo modificado en el lab y mostrar un mensaje de advertencia */
        if ($Lab.Modificado() === true) { 
            setTimeout(function(nURL) { $Base.CargarURL(nURL); }, 200, cURL);
            return;
        }
        
        /* Escondo los menús de la barra de navegación */
        $("#BarraNavegacion > .Menu > input[type=checkbox]").removeAttr("checked");
        this.LogoCargando("TRUE");
        
        // Si la url no tiene ninguna barra
        if (cURL.indexOf("/") === -1) {
            Path = window.location.href.split('/');
            Path.pop();
            Path = Path.join('/');
            cURL = Path + "/" + cURL;
            nURL = Path + "/" + cURL;
        }        
        
        if (cURL === "/" + this.Raiz)   nURL = "/" + this.RaizRelativa + "index.php";
        else                            nURL = cURL;

        // En servidores locales no dedicados hay que redirigir las urls absolutas al directorio que utiliza la web.
        if (cURL.charAt(0) === '/') { // URL absoluta que empieza por '/'
            nURL = "/" + this.RaizRelativa + cURL.substr(1);
            cURL = nURL;
        }
        
        console.log("Base.CargarURL " + nURL);
        this.cURL = cURL;
        this.nURL = nURL;
        this.PeticionAjax = $.post(nURL, { "Regenerar" : "todo", "Categoria" : "Todo", "SinPlantilla" : "true" }).done(function(data) {
            Datos = JSON.parse(data);
            if (Datos["HTML"].indexOf("<script>$Base.MostrarErrorAjax(404, false);</script>") === 0) {
                $Base.MostrarErrorAjax(404, false, 'No se ha encontrado');
            }
            else {
                $Base.TerminarCanvas();
                $("#MarcoNavegacion").html(Datos["HTML"]);
                $Base.Entrada = $Base.IdentificarEntrada($Base.cURL, $Base.nURL);    
                window.history.pushState($Base.Entrada, document.title, $Base.cURL);
                /* Pongo el scroll arriba DESPUES de identificar la URL y haber guardado el scroll para el historial */
                $(window).scrollTop(0);
                if ($Base.Entrada["TipoPagina"] !== "Lab") {
                    document.title = $Base.Entrada["Titulo"];
                }
//                if (isset($Base.Entrada["Idioma"]))
                $Base.RedireccionarLinks();
                $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
                if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
            }
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Base.CargarURL Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false, tError);
        });

        // Oculto la ventana de error
        $("#VentanaError").attr({"visible" : "false" });  
    };  
    
    this.RenovarMeta = function() { 
//        return;
        var p = $(".Blog").attr('pagina') || $("#MarcoNavegacionLab").attr('pagina');
        
        for (var i = 0; i < EntradasBlog.length; i++) {
            //console.log($(".Blog").attr('pagina'), EntradasBlog[i].URL);
            if (EntradasBlog[i].URL === p || EntradasBlog[i].URL + ".php"  === p) {
                $("meta[name='twitter:title']").attr({ "content" : EntradasBlog[i].Titulo });
                $("meta[name='twitter:image']").attr({ "content" : $Base.Raiz + "Web/Graficos/250x200_" + EntradasBlog[i].Imagen });

                $("meta[property='og:title']").attr({ "content" : EntradasBlog[i].Titulo });
                $("meta[property='og:image']").attr({ "content" : $Base.Raiz + "Web/Graficos/250x200_" + EntradasBlog[i].Imagen });
                var URL = $Base.Raiz + EntradasBlog[i].URL;
                if (EntradasBlog[i]["Tipo"] === "Blog")     { URL = $Base.Raiz + "Blog/" + EntradasBlog[i].URL; }
                else if (EntradasBlog[i]["Tipo"] === "Lab") { URL = $Base.Raiz + "Lab/" + EntradasBlog[i].URL;  }
//                else                                        { URL = $Base.Raiz + EntradasBlog[i].URL;           }
                $("meta[property='og:url']").attr({ "content" : URL });                
                return;
            }
        }
        // Si no se enceuntra la entrada pongo la información por defecto
        $("meta[name='twitter:title']").attr({ "content" : "devildrey33.es" });
        $("meta[name='twitter:image']").attr({ "content" : "https://devildrey33.es/Web/Graficos/logo400.png" });
        $("meta[property='og:title']").attr({ "content" : "devildrey33.es" });
        $("meta[property='og:image']").attr({ "content" : "https://devildrey33.es/Web/Graficos/logo400.png" });
        $("meta[property='og:url']").attr({ "content" : "https://devildrey33.es" });                
    },
    
    
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
        $.post($Base.Raiz + "cmd/Loguear.cmd", { "l" : l,  "p" : pass }).done(function(data, textStatus, jqXHR) {
//            console.log("Base.Loguear", data);
            Datos = JSON.parse(data);
            if (Datos.Estado === 0) { // Logueado
                localStorage["Comentarios_Usuario"] = $("#devildrey33_Usuario").val();
                //$("#devildrey33_Password").val("");
                $("#VentanaLogin").attr({ visible : false });
                // Añado el html para administrador
                $("#Marco33").html(Datos.HTMLAdmin);
                // Cargo el JavaScript para el administrador
//                $Base.CargarJS("ObjetoAdmin.js", function() { $Admin.Iniciar(); });
                $Base.CargarJS("devildrey33.admin.min.js", function() { $Admin.Iniciar(); }, true);

                // Carpeta ejemplos completa con checkboxes para añadir / eliminar de la versión de usuario.
                $("#BarraNavegacion_Explorador").html(Datos.ExplorarLab);
                $Lab.EnlazarEventosExplorador();
                // Función post logueado (si la sesión expira y se ejecuta un comando de administrador pasa lo siguiente) :
                // - la web se desloguea
                // - pide otra vez el login
                // - Al loguear correctamente vuelve a ejecutar el comando de administración
                $Base.FPL();
            }
            else {  // Error en el cmd
                if (Datos.Estado === 1) { // Pass incorrecto
                    $("#VentanaLogin").removeClass("VentanaError_AnimacionError");
                    setTimeout(function() { $("#VentanaLogin").addClass("VentanaError_AnimacionError"); }, 50);
                }
                else if (Datos.Estado === 2) { // Error php en el loguear
                    $Base.MostrarMensaje("Error interno del servidor...", "Error grave", "true");
                }
                $Base.Cargando("FALSE");
            }
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
            $Base.FPL = function() { }; // Reseteo la función de logueado
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Base.Loguear Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false, tError);
            $Base.FPL = function() { }; // Reseteo la función de logueado
        });
    };   
    
    

    /* Función para enviar comandos simples */
    this.cmd = function(Comando) {
        this.Cargando("TRUE");
        // Reseteo el temporizador para el tiempo de la sesión
        this.ResetearTimerTiempoSesion();
        $.post(this.Raiz + "cmd/" + Comando + ".cmd").done(function(data) {
            Datos = JSON.parse(data);
            console.log("Base.cmd(" + Comando + ")", Datos);
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
            if (Datos["Estado"] === 0 && "Mensaje" in Datos) {
                if (Datos["Mensaje"] !== "") { $Base.MostrarMensaje(Datos["Mensaje"]); }
            }
            if (Datos["Estado"] === 1) { // Error no es admin
                $("#BarraNavegacion_Explorador").html(Datos["HTML"]);
                $Lab.EnlazarEventosExplorador();
                $('body').attr({ 'administrador33' : false });
                $Base.ClickMenu(0);
                setTimeout(function() { $('#Marco33').html(''); }, 500);                    
                $Base.MostrarMensaje("Error!, no eres administrador.");
            }
            $Base.Cargando("FALSE");
            
        }).fail(function( jqXHR, textStatus, tError ) { 
            console.log("Base.cmd Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false, tError);
            this.Cargando("FALSE");
        });                    
    };
    
    /*
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
        
    };*/
    
    
    /* Carga un archivo JS dinamicamente 
       - Nombre  : Nombre del archivo JS sin ningun path
       - Funcion : Función a ejecutar una vez cargado el JS (puede ser NULL) 
       - Cache   : parámetro indica si se trata de un archivo css de la cache */
    this.CargarJS = function(Nombre, Funcion, Cache) {
        if (typeof(Funcion) !== "undefined") {  this.FuncionCargarJS = Funcion;        }
        else                                 {  this.FuncionCargarJS = function() { }; }

        if (typeof(Cache) === "undefined")   {  Cache = false;        }
        
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
        $.getScript("/" + this.RaizRelativa + ((Cache === false) ? "Web/JS/" : "Web/Cache/") + Nombre, function(data, textStatus, jqxhr) {
            console.log("Base.CargarJS(" + Nombre + ")");    
            $Base.FuncionCargarJS();            
        }).fail(function(jqxhr, settings, exception) { 
            console.log("Base.CargarJS Error Ajax", jqxhr, settings, exception);    
            $Base.MostrarErrorAjax(jqxhr.status, false, exception);
        });
        
    };
    

    /* Carga un archivo CSS dinamicamente  */
    /* El segundo parámetro indica si se trata de un archivo css de la cache */
    this.CargarCSS = function(Nombre, Cache) {
        
        if (typeof(Cache) === "undefined")   {  Cache = false;        }
        
        // Mira si está cargado
        for (var i = 0; i < this.CSSDinamico.length; i++) {
            if (this.CSSDinamico[i] === Nombre) {
                console.log("Base.CargarCSS(" + Nombre + ") ya se había cargado...");
                return; // El archivo ya está cargado
            }
        }
        // Si no está cargado
        this.CSSDinamico.push(Nombre);
        var Script = document.createElement("link");
        Script.setAttribute("rel", "stylesheet");
        Script.setAttribute("type", "text/css");
        
        Script.setAttribute("href", "/" + this.RaizRelativa + ((Cache === false) ? "Web/CSS/" : "Web/Cache/") + Nombre);
        // No se puede hacer un try / catch con el append child :(, por lo que los errores 404 no se pueden detectar...
        if (typeof Script !== "undefined") document.getElementsByTagName("head")[0].appendChild(Script);
        
        console.log("Base.CargarCSS(" + Nombre + ")");    
    };


    /* CALLBACK para el historial de navegación */
    this.CALLBACK_Histroial = function(event) {
        // Reseteo el temporizador para el tiempo de la sesión
        this.ResetearTimerTiempoSesion();
        /* Comprobación para determinar si hay un archivo modificado en el lab y mostrar un mensaje de advertencia */        
        if ($Lab.Modificado() === true) { 
            setTimeout(function(nURL) { $Base.CALLBACK_Histroial(event); }, 200, event);
            return;
        }

        
//        $Lab.Modificado();

        this.LogoCargando("TRUE");   
        console.log("Base.CALLBACK_Histroial", event.state);
        if (event.state)  {
            cURL = event.state["URL"];
        }
        else  {
            // Esto no deberia suceder NUNCA
            cURL = window.location.href;
        }       
        
        cURL.replace("..", "");
        
        if (cURL.indexOf("/") === -1) {
            Path = window.location.href.split('/');
            Path.pop();
            Path = Path.join('/');
            cURL = Path + "/" + cURL;
            nURL = Path + "/" + cURL;
        }

        if (cURL === "/") nURL = "/index.php";
        else              nURL = cURL;
        this.PeticionAjax = $.post(nURL, { "Regenerar" : "todo", "Categoria" : "Todo", "SinPlantilla" : "true" }).done(function(data) {
            Datos = JSON.parse(data);
            /* Error 404 */
            if (Datos["HTML"].indexOf("<script>$Base.MostrarErrorAjax(404, false);</script>") === 0) {
                $Base.MostrarErrorAjax(404, "false");
            }        
            else { /* Carga del historial normal */
                $Base.TerminarCanvas();
                $("#MarcoNavegacion").html(Datos["HTML"]);
                $Base.Entrada = $Base.IdentificarEntrada(cURL, nURL);    
                $Base.RedireccionarLinks();
                document.title = $Base.Entrada["Titulo"];
            }
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        }).fail(function( jqXHR, textStatus, tError ) {
            console.log("Base.CALLBACK_Histroial Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarErrorAjax(jqXHR.status, false, tError);
        });

        // Oculto la ventana de error
        $("#VentanaError").attr({"visible" : "false" });        
    };
    
    
    /* Activa / desactiva la animación de la cabecera según sea visible o no en la pantalla 
     *  Desde el administrador de tareas del chrome se ve que si la animación está activa, aunque no se vea en pantalla consume un 5% de cpu.
     *  Con esta función solucionamos el desperdicio de ciclos de la animación si no hay que mostrarla.
     * */
/*    this.AnimarCabeceraBlog = function() {
        Header = $("#Cabecera");
        if (Header.length > 0) {
            if ($(window).scrollTop() > 190 && Header.attr("animar")) {
                console.log("Base.AnimarCabeceraBlog [animar=false]", Header);
                Header.removeAttr("animar");        
                if (this.Banner !== null) { this.Banner.Pausa(); }
            }
            else if ($(window).scrollTop() < 190 && typeof Header.attr("animar") === "undefined") {
                console.log("Base.AnimarCabeceraBlog [animar=true]", Header);
                Header.attr({ "animar" : "true" }); 
                if (this.Banner !== null) { this.Banner.Reanudar(); }
            }
        }
    };*/
                                            
    this.ErrorJS = function(e) {
        var ErrorStr =   "%cTipo     : %c" + e.type +
                       "\n%cError    : %c" + e.error + 
                       "\n%cArchivo  : %c" + e.filename.substring(e.filename.lastIndexOf('/') + 1)+
                       "\n%cPath     : %c" + e.filename + ":" + e.lineno  +
                       "\n%cLínea    : %c" + e.lineno +
                       "\n%cCaracter : %c" + e.colno +
                       "\n%cFecha    : %c" + new Date();
        console.log(ErrorStr,   "font-weight: bold;", "color: #e74c3c;", 
                                "font-weight: bold;", "font-weight: normal; color: #e74c3c;", 
                                "font-weight: bold;", "font-weight: normal;", 
                                "font-weight: bold;", "font-weight: normal; color: #3498db;", 
                                "font-weight: bold;", "font-weight: normal;", 
                                "font-weight: bold;", "font-weight: normal;", 
                                "font-weight: bold;", "font-weight: normal;");
    };
                                            
    this.ComprobarScrollVotacion = function() {
//        console.log("Base.ComprobarScrollVotacion()", $("#Comentarios_Datos").offset())
        if (typeof localStorage["Voto_" + $("#MarcoNavegacion > article").attr("pagina")] === "undefined") { // Si no se ha votado la página
            if (typeof($("#Comentarios_Datos").offset()) !== "undefined") { FinalPagina = $("#Comentarios_Datos").offset().top;  }
            else                                                          { FinalPagina = $(document).height();                 }
            if ($(window).scrollTop() > FinalPagina - ($(window).height() * 2)) {
                console.log("Base.ComprobarScrollVotacion");
                Pagina = $("#MarcoNavegacion > article").attr("pagina");
                if (typeof localStorage["Voto_" + Pagina] === "undefined") {
                    $("#BarraNavegacion_Votacion").attr({ "mostrar" : "true" });
                    $("#BarraNavegacion_Votacion .VotarDocumento_Estrellas > button").off("click").on("click", function(e)  {
                        $Base.VotarWeb($(this).html());
                    });
                }
            }
        }        
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

/* CALLBACK para los errores JavaScript */
window.addEventListener('error', function(e) {
    $Base.ErrorJS(e);
});

/* Al cargar */
$(window).on("load", function() { $Base.Iniciar(); });
/* Al usar el scroll */
$(window).on("scroll", function() { $Base.ComprobarScrollVotacion(); });



var $Banner = null;
//var Banner_Depurar = true;

