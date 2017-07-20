/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Banner_Espacio2D = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : '2d',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body,
        'CapturaEjemplo': "Canvas2D_1.png"
    }) === false) { return false; }

    this.Iniciar();

    this.Cargando(false);
};

Banner_Espacio2D.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
    constructor     : Banner_Espacio2D, 
    // Datos de la animación [requerido]
    Nombre          : "Espacio 2D",
    IdeaOriginal    : "devildrey33",
    URL             : "https://devildrey33.es/Blog/Canvas2D_1",
    NombreURL       : "Tutorial HTML5 Canvas2D parte 1",    
    
    Iniciar         : function() { 
        // Arrays para cada plano
        this.Estrellas      = [];
        this.TotalEstrellas = ((this.Ancho * this.Alto) / 250);

        // Creo el array de estrellas
        for (var i = 0; i < this.TotalEstrellas; i++) {
            var Vel = Rand(5) + 0.5;
            var Col = 199 + Math.floor(Vel * 10);
            this.Estrellas[i] = new this.Estrella(RandInt(this.Ancho), RandInt(this.Alto), Vel, "rgb("+ Col +  "," + Col + "," + Col + ")");
        }
    },
    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que pinta cada frame de la animación
    Pintar          : function() {
        this.Context.fillStyle = 'rgba(49, 46, 53, 0.4)';
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        for (i = 0; i < this.TotalEstrellas; i++) {
            this.Estrellas[i].X -= this.Estrellas[i].Velocidad;
            // Se ha salido del recuadro
            if (this.Estrellas[i].X < 0) {
                var Vel = Rand(5) + 0.5;
                var Col = 199 + Math.floor(Vel * 10);
                this.Estrellas[i] = new this.Estrella(this.Ancho, RandInt(this.Alto), Vel, "rgb("+ Col +  "," + Col + "," + Col + ")");
            }
            this.Context.fillStyle = this.Estrellas[i].Color;
            this.Context.fillRect(this.Estrellas[i].X, this.Estrellas[i].Y, 1, 1);
        }
    },
    
    Estrella        : function(X, Y, Velocidad, Color) {
        this.X = X;
        this.Y = Y;
        this.Velocidad = Velocidad;
        this.Color = Color;
    }
});