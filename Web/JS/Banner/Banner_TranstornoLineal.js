/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Banner_TranstornoLineal = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoBanner.call(this, "2d") === false) { return false; }
    // Inicio los valores
    this.Tick           = ( Rand() * 360 ) | 0;
    this.MaxTriangulos  = 10;   
    this.Triangulos     = [];
    // Establezco el ancho de línea y el color del fondo
    this.Context.lineWidth = .1;
    this.Context.fillStyle = 'rgb(49, 46, 53)';
    this.Context.fillRect( 0, 0, this.Ancho, this.Alto );
    this.Cargando(false);
};   
    
Banner_TranstornoLineal.prototype = Object.assign( Object.create(ObjetoBanner.prototype) , {
    constructor     : Banner_TranstornoLineal, 
    // Datos de la animación [requerido]
    Nombre          : "Transtorno Lineal",
    IdeaOriginal    : "Matei Copot",
    URL             : "https://codepen.io/towc/pen/mJroQr",
    NombreURL       : "Lines lines lines, love 'em!",    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que pinta cada frame de la animación
    Pintar          : function() {    
        this.Tick += .2;
        this.Tick %= 360;

        this.Context.globalCompositeOperation = 'destination-out';
        this.Context.fillStyle = 'rgba(49, 46, 53, 0.1)';
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        this.Context.globalCompositeOperation = 'lighter';

        if (this.Triangulos.length < this.MaxTriangulos && Rand() < 0.6 ) {
            this.Triangulos.push(new this.Triangulo(this));
        }
// step
        
        for (var T = 0; T < this.Triangulos.length; T++) {
            
            this.Triangulos[T].X += this.Triangulos[T].VelocidadX;
            this.Triangulos[T].Y += this.Triangulos[T].VelocidadY;

            this.Context.strokeStyle = 'hsl(' + (this.Triangulos[T].hue + RandInt(30)) + ', 80%, 50%)';

            this.Context.save();
            this.Context.translate(this.Triangulos[T].X, this.Triangulos[T].Y);

            for (var i = 0; i < this.Triangulos[T].TotalLineas; ++i) {

                var l1 = this.Triangulos[T].Lineas[i];

                l1.p1.Avanzar();
                l1.p2.Avanzar();

                var dx1 = (l1.p1.X - l1.p2.X) / this.Triangulos[T].Separaciones;
                var dy1 = (l1.p1.Y - l1.p2.Y) / this.Triangulos[T].Separaciones;

                for (var j = i + 1; j < this.Triangulos[T].TotalLineas; ++j) {

                    var l2 = this.Triangulos[T].Lineas[j];
                    var dx2 = (l2.p1.X - l2.p2.X) / this.Triangulos[T].Separaciones;
                    var dy2 = (l2.p1.Y - l2.p2.Y) / this.Triangulos[T].Separaciones;

                    for (var k = 0; k < this.Triangulos[T].Separaciones; ++k) {

                        var rand1 = Rand( this.Triangulos[T].jitter, -this.Triangulos[T].jitter );
                        var rand2 = Rand( this.Triangulos[T].jitter, -this.Triangulos[T].jitter );

                        this.Context.beginPath();
                        this.Context.moveTo(l1.p1.X + rand1 + k * dx1,      l1.p1.Y + rand1 + k * dy1);
                        this.Context.lineTo(l2.p1.X + rand2 + k * dx2,      l2.p1.Y + rand2 + k * dy2);

                        this.Context.stroke();
                    }
                }
            }

            this.Context.restore();

            if (this.Triangulos[T].X + this.Triangulos[T].Lado < 0 || this.Triangulos[T].X > this.Ancho || this.Triangulos[T].Y + this.Triangulos[T].Lado < 0 || this.Triangulos[T].Y > this.Alto ) {
                this.Triangulos[T].Iniciar();
            }
// step
        }
            
//        this.Triangulos.map( function(Triangulo) { Triangulo.Avanzar(); } );
    },
        

    Triangulo       : function(Padre) {        
        this.Padre = Padre;
        // Objeto que controla al posición de un triangulo  
        this.Posicion = function(Lado) {
            this.Lado = Lado;

            this.X = Rand() * Lado;
            this.Y = Rand() * Lado;

            var Radio = Rand() * Math.PI * 2;
            var Velocidad = Lado * 0.01;

            this.VelocidadX = Math.cos( Radio ) * Velocidad;
            this.VelocidadY = Math.sin( Radio ) * Velocidad;

            this.Avanzar = function() {
                this.X += this.VelocidadX;
                this.Y += this.VelocidadY;

                if (this.X < 0 || this.X > this.Lado) { this.VelocidadX *= -1; }
                if (this.Y < 0 || this.Y > this.Lado) { this.VelocidadY *= -1; }
            };
        };
        
        this.Iniciar = function() {
            this.Lado          = Rand(100, 50);
            this.TotalLineas   = Rand(5, 2);
            this.Separaciones  = Rand(10, 5);
            this.hue           = this.Padre.Tick;
            this.jitter        = 0.01 * this.Lado;

            var Velocidad      = Rand(2, 0);

            // decide on which side it spawns
            var Lado = Rand() < .5;
            var Radio;

            if (Rand() < .5) {
                this.X = Rand() * this.Padre.Ancho;
                this.Y = (Lado) ? -this.Lado : this.Padre.Alto + this.Lado;

                Radio = (Lado) ? Rand() * Math.PI : - Rand() * Math.PI;
            } 
            else {
                this.X = Rand() < .5 ? -this.Lado : this.Padre.Ancho + this.Lado;
                this.Y = Rand() * this.Padre.Alto;

                Radio = (Lado) ? Rand() * (Math.PI * 2) : -Rand() * (Math.PI * 2);
            }

            this.VelocidadX = Math.cos(Radio) * Velocidad;
            this.VelocidadY = Math.sin(Radio) * Velocidad;

            // handle the lines
            this.Lineas = [];

            for( var i = 0; i < this.TotalLineas; ++i ) {
                var Linea = {      
                    p1: new this.Posicion(this.Lado),
                    p2: new this.Posicion(this.Lado)
                };

                Linea.p1 = new this.Posicion(this.Lado);
                Linea.p2 = new this.Posicion(this.Lado);

                this.Lineas.push(Linea);
            }            
        };
        
        this.Iniciar();
    }
});