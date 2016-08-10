/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Banner_ResplandorCircular = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoBanner.call(this, "2d") === false) { return false; }
    // Inicio los valores básicos
    this.Maximo       = 150;
    this.ColorActual  = 10;
    this.Avance       = 0.07;
    // Inicio los circulos
    this.Circulos = [];
    for (var i = 1; i < this.Maximo; i++) {
        setTimeout(function(Banner) {
            var Circulo = new Banner.Circulo(this);
            Banner.Circulos.push(Circulo);
        }, i * 2, this);
    }
    this.Cargando(false);
};

Banner_ResplandorCircular.prototype = Object.assign( Object.create(ObjetoBanner.prototype) , {
    constructor     : Banner_ResplandorCircular, 
    // Datos de la animación [requerido]
    Nombre          : "Resplandor circular",
    IdeaOriginal    : "Bailh",
    URL             : "http://codepen.io/cathbailh/pen/KpPjPg",
    NombreURL       : "Sweet chaos in the space of tulle",    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que pinta cada frame de la animación
    Pintar          : function() {
        // La clave para obtener el efecto de difuminado es "borrar" el fondo con un color rgba casi transparente 
        this.Context.fillStyle = "rgba(51, 51, 20, 0.02)";
        // Conserva el fondo
        this.Context.globalCompositeOperation = "source-over";
        this.Context.fillRect(0,0, this.Ancho, this.Alto * 1);
        // El "hue" solo irá de 0 a 65 que mas o menos es de rojo a amarillo
/*        if (this.Avance > 0) { if (this.ColorActual > 65) { this.Avance = -0.07; } }
        else                 { if (this.ColorActual < 1)  { this.Avance = 0.07; }  }*/
        this.ColorActual += this.Avance;
        if (this.ColorActual > 360) this.ColorActual = 0;
//        console.log(this.ColorActual);

//            this.Context.globalCompositeOperation = "overlay";
        this.Context.globalCompositeOperation = "lighter"; // El luminosity tampoco queda mal
        for (var C = 0; C < this.Circulos.length; C++){            
            this.Context.strokeStyle = this.Circulos[C].Color;
            this.Context.beginPath();
            this.Context.arc(this.Circulos[C].X, this.Circulos[C].Y, this.Circulos[C].Radio * 0.8, 0, this.PIx2);
            this.Context.stroke();
            
            this.Circulos[C].X += this.Circulos[C].VelocidadX;
            this.Circulos[C].Y += this.Circulos[C].VelocidadY * -2;
            this.Circulos[C].Avance ++;
            if (this.Circulos[C].Avance >= this.Circulos[C].MaxAvance || this.Circulos[C].Radio <= .05) {
                this.Circulos[C] = new this.Circulo(this);
            }                        
            
        }                

    },
    
    /* Objeto que contiene los datos de un circulo */
    Circulo         : function(Padre) {
        this.Padre = Padre;
        this.IniciarCirculo = function() {
            this.Radio = Rand(20, 80);
            this.X = (this.Padre.Ancho / 2) + Rand(5, -5);
            this.Y = (this.Padre.Alto / 2) + Rand(2, -2);
            this.VelocidadX = Rand(7, -7);
            this.VelocidadY = Rand(3.5, -3.5);
            this.Color = "hsla(" + this.Padre.ColorActual + ", 100%, 40%, .05)";
            this.Avance = 0.004;
            this.MaxAvance = Rand(0, 350);        
        };        
        this.IniciarCirculo();
    }
});