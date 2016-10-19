/* Plantilla para crear banners animados en devildrey33.es */

// Constructor SIN TIPO, el tipo se especifica según la animación
var PLANTILLABANNER = function() {
    // Llamo al constructor del ObjetoBanner, y si devuelve un error salgo retornando false.
    // El segundo parámetro del constructor puede ser "2d" o "THREE".
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : '2d',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body
    }) === false) { return false; }
    // Retorno true para advertir que se ha creado el canvas correctamente
    return true;
};

PLANTILLABANNER.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
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
    MouseMove       : function(Evento) { },
    // Función que se llama al presionar un botón del mouse por el canvas
    MousePresionado : function(Evento) { },
    // Función que se llama al soltar un botón del mouse por el canvas
    MouseSoltado    : function(Evento) { },
    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(Evento) {  },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(Evento) {  },
    // Función que se llama al presionar una tecla
    TeclaPresionada : function(Evento) { },
    // Función que se llama al soltar una tecla
    TeclaSoltada    : function(Evento) { },
    // Función que pinta cada frame de la animación
    Pintar          : function() {    }
});