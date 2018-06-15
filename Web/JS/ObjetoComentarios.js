/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$Comentarios = new function() {
    this.NumComentario          = 0;
    this.Obteniendo             = false;
    this.MostrarComentarioTimer = 0;
    this.Enviando               = false;
    
    /* Función que inicia los enlaces de los comentarios */
    this.Iniciar = function() {
        console.log("Comentarios.Iniciar");
        /* Spans que enlazan con un comentario */
        $("#Comentarios_Datos span[comentario]").off("click").on("click", function() {  
            $Comentarios.MostrarComentario($(this).attr("comentario"));
        });
        /* Eventos que pueden hacer variar los estados de los botones  */
        $("#Comentarios_Comentario").on('blur keyup paste copy cut mouseup', function() {
            $Comentarios.AsignarEstadosBotones();
        });
        /* * TODO habilitar etiquetes especials per administradors, s'hauria de re-escriure la funcio on paste al loguejar en el ObjetoAdministrador */
        /* Pegar datos en el comentario, hay que limpiar todas las etiquetas y dejar solo el texto plano 
         * Esto evita que me hagan un Control + C de toda la pagina y me peguen todo el contenido en el mensaje (incluidos controles...) */
        $('#Comentarios_Comentario').on('paste', function(e) {
            e.preventDefault();
            var Ret = $("<div></div>").append((e.originalEvent || e).clipboardData.getData('text/html'));
            Ret.find('*').each(function() { 
//                console.log($(this).get(0).tagName);
                if ($(this).get(0).tagName === 'SCRIPT' || $(this).get(0).tagName === 'BUTTON') {
                    $(this).remove();
                }
                if ($(this).get(0).tagName === 'A') {
                    $(this).attr({ "target" : "_blank" })
                }
            });
//            console.log(Ret.html());
/*            var Texto = (e.originalEvent || e).clipboardData.getData('text/html');            
            Texto.replace("script", "pre");*/
            $Comentarios.ComandoEdicion("insertHTML", Ret.html());
        });        
        
        /* Botones con comandos para la edición */
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(1)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("bold");                   });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(2)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("underline");              });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(3)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("italic");                 });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(4)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("strikethrough");          });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(5)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("undo");                   });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(6)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("redo");                   });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(7)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("insertunorderedlist");    });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(8)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("insertorderedlist");      });
//        $("#Comentarios_BarraControles > button:nth-child(9)").off("click").on("click",  function() { $Comentarios.InsertarHTML("<pre>Código</pre>", true);              });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(9)").off("click").on("click",  function() { $Comentarios.ComandoEdicion("removeFormat");           });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(10)").off("click").on("click", function() { $Comentarios.ComandoEdicion("justifyLeft");            });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(11)").off("click").on("click", function() { $Comentarios.ComandoEdicion("justifyCenter");          });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(12)").off("click").on("click", function() { $Comentarios.ComandoEdicion("justifyRight");           });
        /* Boton enviar */
        $("#Comentarios > .Centrado > button").off("click").on("click", function() { $Comentarios.BotonEnviarComentario(); });
        
        $("#Comentarios_Datos > div[comentario]").off("click").on("click", function(evento) { $Comentarios.SeleccionarComentario($(this)); });
        
        if (typeof localStorage["Comentarios_Usuario"]  !== "undefined")  { $("#Comentarios_Nombre").val(localStorage["Comentarios_Usuario"]);  }
        if (typeof localStorage["Comentarios_Correo"]   !== "undefined")  { $("#Comentarios_Correo").val(localStorage["Comentarios_Correo"]);   }
        if (typeof localStorage["Comentarios_Web"]      !== "undefined")  { $("#Comentarios_Web").val(   localStorage["Comentarios_Web"]);      }    
                       
        this.EnlazarBotonesMensajes();
        
        $("#Comentarios_Comentario").html("");        
        this.Obteniendo = false;
        
        /* Traducció del buto dels comentaris... s'ha de fer per javascript perque m'he menjat el before i el after per la transició del :hover */
        if ($("html").attr("lang") === "es") { $("#Comentarios > #Comentarios_Comentario + button").html("Enviar comentario"); }
        else                                 { $("#Comentarios > #Comentarios_Comentario + button").html("Send comment"); }

        
    };
    
    this.EnlazarBotonesMensajes = function() {
        /* Boton responder */
        $("div[comentario] > .Comentarios_ControlesMensaje > button:nth-child(1)").off("click").on("click", function(evento) { $Comentarios.BotonResponder(this); }); 
        /* Boton +1 */
        $("div[comentario] > .Comentarios_ControlesMensaje > button:nth-child(2)").off("click").on("click", function(evento) { $Comentarios.VotarComentario(this, 1); }); 
        /* Boton -1 */
        $("div[comentario] > .Comentarios_ControlesMensaje > button:nth-child(3)").off("click").on("click", function(evento) { $Comentarios.VotarComentario(this, 0); }); 
        /* Editar mensaje (SOLO ADMIN) */
        $("div[comentario] > .Comentarios_ControlesMensaje > button:nth-child(4)").off("click").on("click", function(evento) { $Admin.Comentarios.BotonEditarComentario(this); }); 
        /* Eliminar mensaje (SOLO ADMIN) */
        $("div[comentario] > .Comentarios_ControlesMensaje > button:nth-child(5)").off("click").on("click", function(evento) { $Admin.Comentarios.BotonEliminarComentario(this); });         
        /* Ver email (SOLO ADMIN) */
        $("div[comentario] > .Comentarios_ControlesMensaje > button:nth-child(6)").off("click").on("click", function(evento) { $Admin.Comentarios.VerEmail(this); });         
    };
    
    /* Botones responder de los mensajes existentes 
     *  - Boton : Etiqueta del boton que se ha presionado en formato DOM */
    this.BotonResponder = function(Boton) {
        NumC = $(Boton).parent().parent().attr("comentario"); 
        this.InsertarHTML("<span comentario='" + NumC + "' contenteditable='false'>"+ NumC +"</span>&nbsp;");         
    };
    
    /* Botones +1 y -1 de los mensajes existentes 
     *  - Boton : Etiqueta del boton que se ha presionado en formato DOM 
     *  - Valor : Solo acepta 1 (+1), o 0 (-1) */
    this.VotarComentario = function(Boton, Valor) {
        Pagina = $("#MarcoNavegacion > article.Blog").attr("pagina");
        NumC   = $(Boton).parent().parent().attr("comentario");
        
        LCSTR = "Votaciones_" + Pagina + "_" + NumC;
        if (typeof localStorage[LCSTR] !== "undefined") { // ya ha votado
            console.log("Comentarios.VotarComentario (ya has votado)");
            $Base.MostrarMensaje("No puedes votar el mismo mensaje 2 veces.");
            return;
        }
        else {
            localStorage[LCSTR] = true;
        }
        
        
        $Base.Cargando("TRUE");
        console.log("Comentarios.BotonMasUno");

        // ajax para votar
        nAjax = $.post($Base.Raiz + "cmd/VotarComentario.cmd", { "Pagina"        : Pagina,
                                                     "NumComentario" : NumC,
                                                     "Valor"         : Valor
        // Al terminar la petición ajax correctamente
        }).done(function(data) { 
            // Si el parse de JSON devuelve false, es que ha fallado y mostrará una ventana con el error PHP
            Datos = $Base.JSON_Parse(data);
            if (Datos === false) return;
            if (Datos.Mensaje === "Correcto") {
                nValor = $("#Comentarios_Datos > div[comentario=" + Datos.NumComentario + "] > div:nth-child(2) > span > b:nth-child(1)");
                nTotal = $("#Comentarios_Datos > div[comentario=" + Datos.NumComentario + "] > div:nth-child(2) > span > b:nth-child(2)");
                nValor.html(parseInt(nValor.html()) + Datos.Valor);
                nTotal.html(parseInt(nTotal.html()) + 1);
            }
            else {
                $Base.MostrarMensaje(data.Mensaje);                
            }
            $Base.Cargando("FALSE");
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        // Fallo al realizar la petición ajax            
        }).fail(function(jqXHR, textStatus, tError) { 
            console.log("Comentarios.VotarComentario Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error al tramitar la votación.");
            $Base.Cargando("FALSE");
        });                
    };

    
    /* Selecciona el comentario especificado
     *  - Comentario : Etiqueta en formato JQuery que contiene todo el comentario */
    this.SeleccionarComentario = function(Comentario) {        
        console.log("Comentarios.SeleccionarComentario");
        $("#Comentarios_Datos > div[comentario][seleccionado=true]").removeAttr("seleccionado");
        Comentario.attr({"seleccionado" : true });
    };
        
    
    this.BotonEnviarComentario = function() {
        if (this.Enviando === true) return;
        console.log("Comentarios.EnviarComentario", $("#Comentarios_Correo").css("border-color"));
        // Validación de los campos necesarios (nombre, email, mensaje)
        if ($("#Comentarios_Nombre").css("border-color") === "rgb(176, 53, 53)") {
            $Base.MostrarMensaje("Debes introducir un nombre válido.");
            return false;
        }
        if ($("#Comentarios_Correo").css("border-color") === "rgb(176, 53, 53)") {
            $Base.MostrarMensaje("La dirección de correo introducida no es válida.");
            return false;
        }        
        if ($("#Comentarios_Comentario").html() === "") {
            $Base.MostrarMensaje("El mensaje está vacio!");
            return false;
        }
        
        this.Enviando = true;

        // Reseteo el temporizador para el tiempo de la sesión
        $Base.ResetearTimerTiempoSesion();
        $Base.Cargando("TRUE");
        
        // Guardo los datos introducidos en el navegador 
        localStorage["Comentarios_Usuario"] = $("#Comentarios_Nombre").val();
        localStorage["Comentarios_Correo"]  = $("#Comentarios_Correo").val();
              
        if ($("#Comentarios_Web").val() !== "") { localStorage["Comentarios_Web"] = $("#Comentarios_Web").val(); }
        nAjax = $.post($Base.Raiz + "cmd/EnviarComentario", { "URL"         : window.location.href,
                                                              "Nombre"      : $("#Comentarios_Nombre").val(),
                                                              "Email"       : $("#Comentarios_Correo").val(),
                                                              "Web"         : $("#Comentarios_Web").val(),
                                                              "Comentario"  : $("#Comentarios_Comentario").html(),
                                                              "Pagina"      : $("#MarcoNavegacion > article.Blog").attr("pagina"),
                                                              "Autor"       : $(".Cabecera_Datos > .FechaEntrada > .Autor").html()
                                                            } );
        console.log("Comentarios.BotonEnviarComentario");
        nAjax.done(function(data) { 
            // Si el parse de JSON devuelve false, es que ha fallado y mostrará una ventana con el error PHP
            Datos = $Base.JSON_Parse(data);
            if (Datos === false) return;
            // Se ha detectado un error, parseando en el PHP 
            if (Datos["HTML"].substr(0, 5) === "Error") { 
                $Base.MostrarMensaje(Datos["HTML"]);
            }
            // Mensaje enviado
            else {                                
                $("#Comentarios_Datos").html(Datos["HTML"] + $("#Comentarios_Datos").html());
                $Comentarios.Iniciar();
                $("body, html").stop().animate({ scrollTop : $("#Comentarios_Datos").offset().top - 200 }, 200);
                $Base.MostrarMensaje("Comentario enviado correctamente.");
            }
            $Base.Cargando("FALSE");
            $Comentarios.Enviando = false;
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        });
        // Fallo al realizar la petición ajax
        nAjax.fail(function(jqXHR, textStatus, tError) { 
            console.log("Comentarios.BotonEnviarComentario Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error enviando el comentario.");
            $Base.Cargando("FALSE");
            $Comentarios.Enviando = false;
        });        
        return true;
    };
    
    /* Obtiene 20 mensajes partiendo del ultimo hacia abajo */
    this.Obtener20 = function() {
        if ($("div[fincomentarios=true]").offset()) return;
        if (this.Obteniendo === true) return;
        // Reseteo el temporizador para el tiempo de la sesión
        $Base.ResetearTimerTiempoSesion();
        $Base.Cargando("TRUE");
        Pagina = $("#MarcoNavegacion > article.Blog").attr("pagina")
        Desde = $("#Comentarios_Datos div[comentario]:last-child").attr("comentario");
        console.log("Comentarios.Obtener20", Pagina, Desde);
        this.Obteniendo = true;
        nAjax = $.post($Base.Raiz + "cmd/ObtenerComentarios", { "Pagina" : Pagina,  "Desde" : Desde - 1, "Hasta" : Desde - 21 } );
        nAjax.done(function(data) { 
            // Si el parse de JSON devuelve false, es que ha fallado y mostrará una ventana con el error PHP
            Datos = $Base.JSON_Parse(data);
            if (Datos === false) return;
            $("div[puntoscroll=true]").removeAttr("puntoscroll");
            $("#Comentarios_Datos").html($("#Comentarios_Datos").html() + Datos["HTML"]);
            $Base.Cargando("FALSE");
            $Comentarios.Iniciar();
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        });
        // Fallo al realizar la petición ajax
        nAjax.fail(function(jqXHR, textStatus, tError) { 
            console.log("Comentarios.Obtener20 Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error cargando los 20 siguientes comentarios");
            $Base.Cargando("FALSE");

            $Comentarios.Obteniendo = false;
        });        
    };
    
    /* Obtiene X mensajes hasta llegar al comentario Num */
    this.ObtenerHastaNum = function(Num) {
        if ($("div[fincomentarios=true]").offset()) return;
        if (this.Obteniendo === true) return;
        // Reseteo el temporizador para el tiempo de la sesión
        $Base.ResetearTimerTiempoSesion();
        $Base.Cargando("TRUE");

//        if (typeof(Num) === undefined) return;
//        if (this.Obteniendo === true) return;
        Pagina = $("#MarcoNavegacion > article.Blog").attr("pagina");
        Desde = $("#Comentarios_Datos div[comentario]:last-child").attr("comentario");
        console.log("Comentarios.ObtenerHastaNum", Pagina, Desde);
        this.Obteniendo = true;
        nAjax = $.post($Base.Raiz + "cmd/ObtenerComentarios", { "Pagina" : Pagina,  "Desde" : Desde - 1, "Hasta" : Num } );
        nAjax.done(function(data) { 
            // Si el parse de JSON devuelve false, es que ha fallado y mostrará una ventana con el error PHP
            Datos = $Base.JSON_Parse(data);
            if (Datos === false) return;
            $("div[puntoscroll=true]").removeAttr("puntoscroll");
            $("#Comentarios_Datos").html($("#Comentarios_Datos").html() + Datos["HTML"]);
            $Comentarios.Obteniendo = false;
            $Comentarios.Iniciar();
            $Base.Cargando("FALSE");
            $Comentarios.MostrarComentario($Comentarios.NumComentario);
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        });
        // Fallo al realizar la petición ajax
        nAjax.fail(function(jqXHR, textStatus, tError) { 
            console.log("Comentarios.ObtenerHastaNum Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error cargando el comentario [#" + $Comentarios.NumComentario + "].");
            $Base.Cargando("FALSE");
            $Comentarios.Obteniendo = false;
        });        
    };
    
    /* Función que muestra en pantalla el comentario con el numero especificado, y lo resalta durante 3 segundos */
    this.MostrarComentario = function(Num) {
/*        if (Num < 1) {
            $Base.MostrarMensaje("El comentario no existe!");
            return;
        }*/
        setTimeout(function() { $Comentarios.SeleccionarComentario($("#Comentarios_Datos div[comentario=" + Num + "]")); }, 10);
        

        if ($("#Comentarios_Datos div[comentario=" + Num + "]").offset()) {
            console.log("Comentarios.MostrarComentario", Num);
            Pos = $("#Comentarios_Datos div[comentario=" + Num + "]").offset().top;
            Tam = $("#Comentarios_Datos div[comentario=" + Num + "]").height() + 40; // 40 pixels mas de margen
            PosScroll = $("body").scrollTop() || $("html").scrollTop();            
            if (!(Pos > PosScroll && Pos < PosScroll + ($(window).height() - Tam))) {
                $("body, html").stop().animate({ scrollTop : Pos - ($(window).height() - Tam) }, 200);
            }

            /* Si hay un temporizador y el comentario seleccionado no coincide, elimino el temporizador */
            if (this.MostrarComentarioTimer !== 0 && Num !== this.NumComentario) {
                $("#Comentarios_Datos div[resaltado=true]").removeAttr("resaltado");
                console.log("Comentarios.MostrarComentario (CancelarTimerAni)", this.MostrarComentarioTimer);
                clearTimeout(this.MostrarComentarioTimer);
                this.MostrarComentarioTimer = 0;
            }
            /* Si el comentario no es el mismo que el ultimo resaltado */
            if (Num !== this.NumComentario) {
                /* Asigno el estado resaltado para que se inicie la animación */
                $("#Comentarios_Datos div[comentario=" + Num + "]").attr("resaltado", "true");
                /* Temporizador para eliminar el estado resaltado una vez terminada la animación */
                this.MostrarComentarioTimer = setTimeout(function() { 
                    $("#Comentarios_Datos div[resaltado=true]").removeAttr("resaltado");                 
                    console.log("Comentarios.MostrarComentario (FinTimerAni)", $Comentarios.MostrarComentarioTimer);
                    $Comentarios.MostrarComentarioTimer = 0;
                    $Comentarios.NumComentario = 0;
                }, 5000);        
            }
        }
        else {
            if ($("div[fincomentarios=true]").offset()) {    $Base.MostrarMensaje("El mensaje #" + Num + " no existe o ha sido eliminado."); }
            else                                        {    this.ObtenerHastaNum(Num - 20); }
        }
        this.NumComentario = Num;
        
    };
    
        
    /* Función que determina si se ha pasado del punto del scroll, para cargar 20 comentarios mas */
    this.PuntoScroll = function() {
        Comentario = $("div[puntoscroll=true]");
        if (Comentario.offset()) {
            if (($(window).scrollTop() + $(window).height()) > Comentario.offset().top) {
                $Comentarios.Obtener20();
            }
        }
    };
    
    /* Establece un comando para el contenteditable */
    this.ComandoEdicion = function(Comando, Param) {
        if (typeof Param === 'undefined') Param = null;
        console.log("Comentarios.ComandoEdicion", Comando);
        this.AsignarEstadosBotones();

//        setTimeout(function(Comando, Param) { 
        $("#Comentarios_Comentario").focus();
        document.execCommand(Comando, false, Param);
//        }, 1000, Comando, Param);
        
//        setTimeout(function() { $("#Comentarios_Comentario").focus(); }, 1);
    };
    
    /* Comprueba los estados de los botones según la posición del cursor */
    this.AsignarEstadosBotones = function() {
        console.log("Comentarios.AsignarEstadosBotones");
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(1)").attr({ "marcado" : (document.queryCommandState("bold"))                  ? true : false });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(2)").attr({ "marcado" : (document.queryCommandState("underline"))             ? true : false });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(3)").attr({ "marcado" : (document.queryCommandState("italic"))                ? true : false });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(4)").attr({ "marcado" : (document.queryCommandState("strikethrough"))         ? true : false });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(7)").attr({ "marcado" : (document.queryCommandState("insertunorderedlist"))   ? true : false });
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(8)").attr({ "marcado" : (document.queryCommandState("insertorderedlist"))     ? true : false });        
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(10)").attr({ "marcado" : (document.queryCommandState("justifyLeft"))          ? true : false });        
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(11)").attr({ "marcado" : (document.queryCommandState("justifyCenter"))        ? true : false });        
        $("#Comentarios_BarraControles > .BotonEdicion:nth-child(12)").attr({ "marcado" : (document.queryCommandState("justifyRight"))         ? true : false });        
    };
    
    this.InsertarHTML = function(HTML) {
        document.getElementById("Comentarios_Comentario").focus();
        this.CursorAlFinal();
        var Seleccion = window.getSelection();
        if (Seleccion.getRangeAt && Seleccion.rangeCount) {
            var Rango = Seleccion.getRangeAt(0);
            var Elemento = document.createElement("div");
            Elemento.innerHTML = HTML;
            
            var Fragmento = document.createDocumentFragment();
            var Nodo, UltimoNodo;
            while ((Nodo = Elemento.firstChild)) {
                UltimoNodo = Fragmento.appendChild(Nodo);
            }
            Rango.insertNode(Fragmento);
            this.CursorAlFinal();
        }
    };    
    
    /* http://stackoverflow.com/questions/6690752/insert-html-at-caret-in-a-contenteditable-div */
    /*this.InsertarHTML2 = function(html, selectPastedContent) {
        var sel, range;
        $("#Comentarios_Comentario").focus();
        if (window.getSelection) {
            // IE9 and non-IE
            sel = window.getSelection();
            if (sel.getRangeAt && sel.rangeCount) {
                range = sel.getRangeAt(0);
                range.deleteContents();

                // Range.createContextualFragment() would be useful here but is
                // only relatively recently standardized and is not supported in
                // some browsers (IE9, for one)
                var el = document.createElement("div");
                el.innerHTML = html;
                var frag = document.createDocumentFragment(), node, lastNode;
                while ( (node = el.firstChild) ) {
                    lastNode = frag.appendChild(node);
                }
                var firstNode = frag.firstChild;
                range.insertNode(frag);

                // Preserve the selection
                if (lastNode) {
                    range = range.cloneRange();
                    range.setStartAfter(lastNode);
                    if (selectPastedContent) {
                        range.setStartBefore(firstNode);
                    } else {
                        range.collapse(true);
                    }
                    sel.removeAllRanges();
                    sel.addRange(range);
                }
            }
        } else if ( (sel = document.selection) && sel.type != "Control") {
            // IE < 9
            var originalRange = sel.createRange();
            originalRange.collapse(true);
            sel.createRange().pasteHTML(html);
            if (selectPastedContent) {
                range = sel.createRange();
                range.setEndPoint("StartToStart", originalRange);
                range.select();
            }
        }
        $("#Comentarios_Comentario").focus();

    };*/
    this.CursorAlFinal = function() {
        Elemento = document.getElementById("Comentarios_Comentario");
        var Rango = document.createRange();
        Rango.selectNodeContents(Elemento);
        Rango.collapse(false);
        var Seleccion = window.getSelection();
        Seleccion.removeAllRanges();
        Seleccion.addRange(Rango);        
    };
        /*
    this.CursorAlFinal = function() {
        el = document.getElementById("Comentarios_Comentario");
//        el.focus();
        if (typeof window.getSelection != "undefined" && typeof document.createRange != "undefined") {
            var range = document.createRange();
            range.selectNodeContents(el);
            range.collapse(false);
            var sel = window.getSelection();
            sel.removeAllRanges();
            sel.addRange(range);
        } 
        else if (typeof document.body.createTextRange != "undefined") {
            var textRange = document.body.createTextRange();
            textRange.moveToElementText(el);
            textRange.collapse(false);
            textRange.select();
        }
    }*/
};

$(window).scroll(function() {     $Comentarios.PuntoScroll();     });