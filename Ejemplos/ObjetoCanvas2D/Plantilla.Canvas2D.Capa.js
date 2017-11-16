// Constructor 
var PlantillaCanvas2D_Capa = function() {
    // Llamo al constructor del ObjetoBanner
    if (Canvas2D.Capa.call(this) === false) { return false; }
    // Se ha creado el canvas, inicio los valores de la animación ... 
};

PlantillaCanvas2D_Capa.prototype = Object.assign( Object.create(Canvas2D.Capa.prototype), {
    constructor           : PlantillaCanvas2D_Capa, 
    // Función que se llama al redimensionar el documento
    EventoRedimensionar   : function() {    },
    
    // Función que pinta cada frame de la animación
    Pintar                : function() {    
        this.Context.clearRect(0, 0, this.Padre.Ancho, this.Padre.Alto);
    }
});
