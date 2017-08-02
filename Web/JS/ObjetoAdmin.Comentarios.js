/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$Admin.Comentarios = new function() {   
    this.VerEmail = function(Boton) {
        Pagina = $(".Blog").attr("pagina");
        NumC = $(Boton).parent().parent().attr("comentario"); 
        console.log("Admin.Comentarios.VerEmail", Pagina, NumC);
        nAjax = $.post($Base.Raiz + "cmd/VerEmailComentario.cmd", { "Pagina" : Pagina,  "NumComentario" : NumC }).done(function(data) {
            Datos = JSON.parse(data);
            $Base.MostrarMensaje(Datos["HTML"]);
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }
        }).fail(function(jqXHR, textStatus, tError) { 
            console.log("Admin.Comentarios.VerEmail Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error de la petición Ajax al ver el email.");
            $Base.Cargando("FALSE");
        });
    }
    
    /* Elimina el comentario especificado en el parametro boton 
     *  - Boton : Etiqueta del boton que se ha presionado en formato DOM */    
    this.BotonEliminarComentario = function(Boton) {
        Pagina = $(".Blog").attr("pagina");
        NumC = $(Boton).parent().parent().attr("comentario"); 
        console.log("Admin.BotonEliminarComentario", Pagina, NumC);

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
            console.log("Admin.Comentarios.BotonEliminarComentario Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error de la petición Ajax al eliminar el mensaje.");
            $Base.Cargando("FALSE");
        });        
    };
    
    this.Edicion = 0;
    this.ComentarioOriginal = "";
    /* Empieza la edición del comentario especificado.
     * Para saber cual es el comentario especificado partimos desde la etiqueta del boton presionado, y desde alli obtenemos el número de comentario.
     *  - Boton : Etiqueta del boton que se ha presionado en formato DOM */    
    this.BotonEditarComentario = function(Boton) {
        this.Edicion_Cancelar();
        Comentario = $(Boton).parent().parent();
        NumC = Comentario.attr("comentario"); 
        console.log("Admin.Comentarios.BotonEditarComentario", NumC);
        Comentario.html(Comentario.html() + "<div>" + 
                                                "<button onclick='$Admin.Comentarios.Edicion_Guardar()'>Guardar</button>" +
                                                "<button onclick='$Admin.Comentarios.Edicion_Cancelar()'>Cancelar</button>" + 
                                            "</div>");
        Editor = Comentario.find("div:nth-child(3)");
        Editor.attr({"contenteditable" : true});
        this.ComentarioOriginal = Editor.html();
        this.Edicion = Comentario;
        Editor.focus();
    };
    
    
    this.Edicion_Guardar = function() {
        if (this.Edicion !== 0) {
            console.log("Admin.Comentarios.Edicion_Guardar", this.Edicion.attr("comentario"));
            $Base.Cargando("TRUE");
            var Msg = this.Edicion.find("div:nth-child(3)").html();
            Msg.replace(' contenteditable="true"', ''); // Elimino posibles divs creados al hacer intro que se crean con el atributo contenteditable=true, y que no deberian estar dentro de un contenido editable...
            nAjax = $.post($Base.Raiz + "cmd/EditarComentario.cmd", {   "Pagina"        : $(".Blog").attr("pagina"),  
                                                                        "NumComentario" : NumC,
                                                                        "Mensaje"       : Msg
            }).done(function(data) {
                // Al terminar la petición ajax correctamente
                Datos = JSON.parse(data);
                if (Datos.Mensaje === "Comentario Editado") {
                    
                    $("#Comentarios_Datos > div[comentario] > div[contenteditable=true]").removeAttr("contenteditable");
                    // Elimino los botones guardar y cancelar (no se que fa el jquery pero avegades borra lineas de texte i posa contents editables de mes.....)
                    //                                         Al re-carregar (F5) tot es veu bè... tot i que s'han d'eliminar els content editable extras que no se d'on surten (chrome/jquery)
                    $Admin.Comentarios.Edicion.find("div:nth-child(4)").remove();
                    // Limpio la memoria;
                    $Admin.Comentarios.ComentarioOriginal = "";
                    $Admin.Comentarios.Edicion = 0;            
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
                console.log("Admin.Comentarios.Edicion_Guardar Error ajax", jqXHR, textStatus, tError);
                $Base.MostrarMensaje("Error de la petición Ajax al guardar el mensaje.");
                $Base.Cargando("FALSE");
            });   
            this.Edicion.find("div:nth-child(3)").html(Msg);
        }
    };
    
    
    this.Edicion_Cancelar = function() { 
        if (this.Edicion !== 0) {
            console.log("Admin.Comentarios_Edicion_Cancelar", this.Edicion.attr("comentario"));
            $("#Comentarios_Datos > div[comentario] > div[contenteditable=true]").removeAttr("contenteditable");
            // Vuelvo a asignar el contenido inicial
            this.Edicion.find("div:nth-child(3)").html(this.ComentarioOriginal);
            // Elimino los botones guardar y cancelar
            this.Edicion.find("div:nth-child(4)").remove();
            // Limpio la memoria;
            this.ComentarioOriginal = "";
            this.Edicion = 0;            
            $Comentarios.EnlazarBotonesMensajes();
        }
    };
    
    
    
    
};