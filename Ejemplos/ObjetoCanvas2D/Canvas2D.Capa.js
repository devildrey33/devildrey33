/* Canvas2D.Canvas : Objeto que simula una capa mediante un canvas transparente
 *  Creado por Josep Antoni Bover Comas el 19/10/2017 para devildrey33.es 
 *  Ultima modificación : 19/10/2017 */

/* Este objeto está diseñado para crear una etiqueta canvas la cual debe pintar transparente el área que no se use 
 *  - Las ventajas son :
 *      - Poder utilizar filtros css en cada capa independiente mente
 *      - Ahorro de ciclos si pintamos las capas de forma inteligente (solo cuanbdo exista un cambio)
 *      
 *  - Desventajas :
 *      - Al tener varios canvas en memoria la ram necesaria equivale a 1 png del tamaño del Canvas2D multiplicado por el número de capas.
 *          - Se podria llegar a optimizar con capas de tamaño reducido proporcionalmente, pero puede ser un pelotazo si lo queremos responsive y que se actualize en el OnResize....
 *              - Por no hablar de que dicha optimización la tendra que plantear el programador dependiendo de las circunstancias (TO SEE..)
 *  */

Canvas2D.Capa = function() {
    
};

// Crea la capa y inicia sus valores
Canvas2D.Capa.prototype.Iniciar = function(Padre) {
    this.Padre    = Padre; // Objeto Canvas2D padre
    this.Id       = this.Padre.Capas.length;
    
    var IDCanvas = "";
    if (this.Padre.Opciones.Id !== "") { IDCanvas = "Canvas2D_" + this.Padre.Opciones.Id + "_Capa_" + this.Id; }
    else                               { IDCanvas = "Canvas2D_Capa_" + this.Id; }
    
    // Creo la etiqueta para el canvas / capa
    this.Canvas = document.createElement('canvas');
    this.Canvas.id = IDCanvas;
    this.Padre.EtiquetaCabecera.appendChild(this.Canvas);
//    this.Canvas = document.getElementById(IDCanvas);
    // Tamaño para la capa
    this.Canvas.style.width = this.Padre.Ancho;
    this.Canvas.style.height = this.Padre.Alto;
    
    this.Context = this.Canvas.getContext("2d");                         // Contexto 2D    
};


Canvas2D.Capa.prototype._EventoRedimensionar = function() {    
    // Tamaño para la capa    
    this.Canvas.style.width = this.Padre.Ancho;
    this.Canvas.style.height = this.Padre.Alto;
    
    // Si existe una función de redimensionado extra, la ejecuto
    if (typeof(this.EventoRedimensionar) !== "undefined") {
        this.EventoRedimensionar.apply(this);
    }    
};