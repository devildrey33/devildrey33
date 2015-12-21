PeticionAjax = 0;
// -[INICIO devildrey33.OnLoad]-
$(window).load(function() {
    ActualizarContenido();
});
// -[FIN devildrey33.OnLoad]-

// -[INICIO devildrey33.CALLBACK]-
/* CALLBACK para el historial */
window.addEventListener('popstate', function(event) {
    // Si hay una petición ajax pendiente, la cancelamos
    if (PeticionAjax != 0) PeticionAjax.abort();
    // Inicio la animación de la carga
    $("body").attr({ "cargando" : true });
    console.log("CALLBACK_Histroial", window.location.href, event);
    // Petición ajax para obtener el documento dinámico
    PeticionAjax = $.post(window.location.href, { "SinPlantilla" : "true" }).done(function(data) {
        // Asigno el nuevo HTML para el marco dinámico
        $("#MarcoDinamico").html(data);        
        // Re-direcciono todas las etiquetas 'a' a la funcion CargarURL, y actualizo el titulo y el menú.
        ActualizarContenido();
        // Borramos la petición ajax de la memória
        PeticionAjax = 0;        
    // Error en la petición ajax
    }).fail(function(jqXHR, textStatus, tError) {
        // Termino la animación de la carga
        $("body").removeAttr("cargando");
        // Si hay un error
        alert("Error cargando " + window.location.href);
        // Borramos la petición ajax de la memória
        PeticionAjax = 0;        
    });
}, false);
// -[FIN devildrey33.CALLBACK]-

// -[INICIO devildrey33.ActualizarContenido]-
// Esta función re-emplaza el evento click de las etiquetas "a" para cargar el enlace dinamicamente.
function ActualizarContenido() {
    // Solo se redireccionan etiquetas sin el atributo target
    $("a[href]:not([target])").off("click").on("click", function(e) {
        // Evito que el evento llegue a la función OnClick por defecto de los enlaces
        e.preventDefault();
        // Cargo la URL del enlace utilizando Ajax
        CargarURL($(this).attr("href"));
        // Devuelvo false para que el evento no se extienda a sus padres.
        return false;
    });
    
    /* El titulo y el nombre del archivo los podemos encontrar en el div #InformacionDinamica
       que se ha creado expresamente en la plantilla para esta finalidad. */     
    // Asigno el nuevo titulo 
    document.title = $("#InformacionDinamica").attr("titulo");        
    // Asigno el boton actual del menú superior
    $("#MenuSuperior > ul").attr({ "archivo" : $("#InformacionDinamica").attr("archivo") });        
    // Termino la animación de la carga
    $("body").removeAttr("cargando");    
}
// -[FIN devildrey33.ActualizarContenido]-

// -[INICIO devildrey33.CargarURL]-
// Función que carga una URL dinámicamente
function CargarURL(URL) {
    // Si hay una petición ajax pendiente, la cancelamos
    if (PeticionAjax != 0) PeticionAjax.abort();
    // Inicio la animación de la carga
    $("body").attr({ "cargando" : true });
    console.log("CargarURL", URL, document.title);
    // Petición ajax para obtener el documento dinámico
    PeticionAjax = $.post(URL, { "SinPlantilla" : "true" }).done(function(data) {
        // Asigno el nuevo HTML para el marco dinámico
        $("#MarcoDinamico").html(data);        
        // Re-direcciono todas las etiquetas 'a' a la funcion CargarURL, y actualizo el titulo y el menú.
        ActualizarContenido();
        // Añado la nueva URL al historial de la pestaña, y esta queda como la URL actual.
        window.history.pushState(null, document.title, URL);        
        // Borramos la petición ajax de la memória
        PeticionAjax = 0;        
    // Error en la petición ajax
    }).fail(function(jqXHR, textStatus, tError) {
        // Termino la animación de la carga
        $("body").removeAttr("cargando");
        // Si hay un error
        alert("Error cargando " + URL);        
        // Borramos la petición ajax de la memória
        PeticionAjax = 0;        
    });
}
// -[FIN devildrey33.CargarURL]-

