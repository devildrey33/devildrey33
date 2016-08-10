/* Plantilla para crear banners animados en devildrey33.es */

// Constructor SIN TIPO, el tipo se especifica según la animación
var PLANTILLABANNER = function() {
    // Llamo al constructor del ObjetoBanner, y si devuelve un error salgo retornando false.
    // El segundo parámetro del constructor puede ser "2d" o "THREE".
    if (ObjetoBanner.call(this, "2d") === false) { return false; }
    // Retorno true para advertir que se ha creado el canvas correctamente
    return true;
};

PLANTILLABANNER.prototype = Object.assign( Object.create(ObjetoBanner.prototype) , {
    constructor     : PLANTILLABANNER, 
    // Datos de la animación [requerido]
    Nombre          : "Cubos 3D",
    IdeaOriginal    : "devildrey33",
    URL             : "",
    NombreURL       : "",    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(event) { },
    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(event) { },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(event) { },
    // Función que pinta cada frame de la animación
    Pintar          : function() {    }
});