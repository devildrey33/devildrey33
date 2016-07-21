/* Plantilla para crear banners animados en devildrey33.es */

// Constructor SIN TIPO, el tipo se especifica según la animación
var PLANTILLABANNER = function() {
    // Llamo al constructor del ObjetoBanner
    ObjetoBanner.call(this, "2d"); // Puede ser 2D o THREE
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
    // Función que pinta cada frame de la animación
    Pintar          : function() {    }
});