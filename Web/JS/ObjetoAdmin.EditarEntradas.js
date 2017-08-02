/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$Admin.EditarEntradas = new function() {
    /* DEPRECATED */
    /*******************/
    /* Editar entradas */
    /*******************/
    this.OrigFecha  = "";
    this.OrigTitulo = "";
    this.OrigURL    = "";
    this.OrigTags   = "";
    this.OrigImagen = "";
    this.OrigTipo   = "";
    
    
    this.Iniciar = function() {        
        // Nueva entrada
        console.log("Admin.EditarEntradasIniciar");
        $("#Editor_BotonAgregar").off("click").on("click", function() {
            $Admin.EditarEntradas.NuevaEntrada();            
        });
        // Boton guardar del editor/creador de entradas
        $("#Editor_Guardar").off("click").on("click", function() {
            $Admin.EditarEntradas.Guardar();
        });
        // Boton cancelar del editor/creador de entradas        
        $("#Editor_Cancelar").off("click").on("click", function() {
            $("#devildrey33_Entradas tr[seleccionado]").removeAttr("seleccionado");
            $("#Editor_Blog").attr({"mostrar" : false});
        });
        // Editar entrada
        $("#devildrey33_Entradas > tbody > tr").off("click").on("click", function() {
            $Admin.EditarEntradas.EditarEntrada(this);
        });
    };
    
    // Función que abre la ventana para crear una nueva entrada
    this.NuevaEntrada = function () {
        $("#Editor_Blog").attr({"mostrar" : true});
        $("#Editor_Guardar").html("Guardar");
        /* Obtengo la fecha de hoy */        
        Fecha = new Date().toDateInputValue();
        $("#Entrada_Fecha").val(Fecha);
        console.log("Admin.EditarEntradas.Iniciar", Fecha);
        this.OrigFecha   = Fecha;
        this.OrigTitulo  = "";
        this.OrigURL     = "";
        this.OrigTags    = "";
        this.OrigImagen  = "";
        this.OrigTipo    = "";
    };
    
    /* Función para empezar la edición de una entrada
        Entrada : es el elemento DOM que corresponde a la etiqueta <tr> del elemento que hay que editar */
    this.EditarEntrada = function (Entrada) {
        console.log("Admin.EditarEntradas.EditarEntrada", Entrada);
        $("#devildrey33_Entradas tr[seleccionado]").removeAttr("seleccionado");
        $(Entrada).attr({ "seleccionado" : true });
        $("#Editor_Blog").attr({"mostrar" : true});
        $("#Editor_Guardar").html("Editar");
        /* La fecha viene en formato dd/mm/aaaa, hay que invertir los valores de forma que quede asi : aaaa-mm-dd */
        Fecha = $(Entrada).find("td:nth-child(1)").html();        
        this.OrigFecha  = Fecha.substr(6, 4) + "-" + Fecha.substr(3, 2) + "-" + Fecha.substr(0, 2);
        this.OrigTitulo = $(Entrada).find("td:nth-child(2)").html();
        this.OrigURL    = $(Entrada).find("td:nth-child(3)").html();
        this.OrigTags   = $(Entrada).find("td:nth-child(4)").html();
        this.OrigImagen = $(Entrada).find("td:nth-child(5)").html();
        this.OrigTipo   = $(Entrada).find("td:nth-child(6)").html();
        $("#Entrada_Fecha").val(this.OrigFecha);
        $("#Entrada_Titulo").val(this.OrigTitulo);
        $("#Entrada_URL").val(this.OrigURL);
        $("#Entrada_Imagen").val(this.OrigImagen);
        $("#Entrada_Tipo").val(this.OrigTipo);
        Tags = this.OrigTags.split(", ");
        $("#Editor_Blog > ul > li > input").each(function() { this.checked = false; });
        for (i = 0; i < Tags.length; i++) {
            $Admin.MarcarCheckTag(Tags[i]);
        }
    };
    
    // Función interna que busca el checkbox correspondiente al tag especificado y lo marca
    this.MarcarCheckTag = function(Tag) {
        console.log("Admin.EditarEntradas.MarcarCheckTag", Tag);
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
    this.Guardar = function() {
        console.log("Admin.EditarEntradas.Guardar", Fecha);        
        // Nuevo
        if ($("#Editor_Guardar").html() === "Guardar") {            
            
        }
        // Editar 
        else {
            
        }
        
    };
};