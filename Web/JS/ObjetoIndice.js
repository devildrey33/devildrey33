/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$Indice = new function() {
    this.Cargando = false;
    
    this.Iniciar = function() {
        console.log("Indice.Iniciar");
        // Combo categorias
        $("#Categorias").off("click").on("click", function(e) { $Indice.ClickCategorias(); });
        // Items del combo de las categorias
        $("#Categorias > div > div").off("click").on("click", function(e) { $Base.CargarURL($(this).attr("path")); });
    };
    
    /* Click en la combo de categorias del indice */
    this.ClickCategorias = function() {
        Cat = $("#Categorias");
        console.log("Indice.ClickCategorias", $("#Categorias > div").height(), Cat.height());
        if (Cat.height() == 19) {
           Cat.height(40 + $("#Categorias > div").height()) ;
        }
        else {
           Cat.height(19);
        }
    };
    
    this.ComprobarScroll = function() {
        console.log("Indice.ComprobarScroll", $("#MarcoIndice > div[finscrollinfinito]").length);
        if ($("#MarcoIndice > div[finscrollinfinito]").length === 0 && this.Cargando === false && $("#MarcoIndice").length !== 0) {
            if ($(window).scrollTop() > ($(document).height() - ($(window).height() * 2))) {        
                this.Cargando = true;
                $Base.Cargando("TRUE");
                Inicio = $("#MarcoIndice > .Articulo_Portada").length;

                nAjax = $.post("/cmd/IndiceObtener15Mas.cmd", { "Categoria" : $("#Categorias").attr("categoria"),  "Inicio" : Inicio } );
                nAjax.done(function(data) { 
                    $("div[puntoscroll=true]").removeAttr("puntoscroll");
                    $("#MarcoIndice").html($("#MarcoIndice").html() + data);
                    $Base.Cargando("FALSE");
                    $Indice.Cargando = false;
//                    $Comentarios.Iniciar();
                });
                // Fallo al realizar la petición ajax
                nAjax.fail(function(jqXHR, textStatus, tError) { 
                    console.log("Indice.ComprobarScroll Error ajax", jqXHR, textStatus, tError);
                    $Indice.Cargando = false;
                    $Base.MostrarMensaje("Error cargando los 10 siguientes articulos");
                    $Base.Cargando("FALSE");
                });        
            }
        }
    };
    
};

$(window).scroll(function() {   $Indice.ComprobarScroll();  });