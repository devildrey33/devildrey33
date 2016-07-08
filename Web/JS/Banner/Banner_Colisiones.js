/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Banner_Colisiones = function() {
    this.Nombre         = "Colisiones";
    this.IdeaOriginal   = "mxmx";
    this.URL            = "http://codepen.io/mnmxmx/pen/mEVxeg";
    this.NombreURL      = "Particles";

    // Arrays para cada plano
    this.CirculosSuperior = [];
    this.CirculosMedio    = [];
    this.CirculosInferior = [];
    
    this.Colision = false;
    this.Velocidad = 1.26;

    this.Iniciar = function() {
        this.CirculosSuperior = [];
        this.CirculosMedio    = [];
        this.CirculosInferior = [];
        
        for (var Y = 1; Y < (this.Alto / 70); Y++) {        // Cada 70 pixeles de alto
            for (var X = 1; X < (this.Ancho / 110); X++) {  // Cada 110 pixeles de ancho
                var x   = X * 110 + Rand(-20, 20);
                var y   = Y * 70 + Rand(-16, 16);                
                var Rnd = RandInt(0, 3);
                
                if (Rnd === 0 || Rnd === 2) { // Creo un circulo en el plano superior
                    var Color = "rgb(" + RandInt(95, 75) + "," + RandInt(121, 101) + "," + RandInt(135, 115) + ")";
                    this.CirculosSuperior.push(new this.Circulo(x, y, Rand(16, 10), Color, this.Velocidad));
                }
                if (Rnd === 0 || Rnd === 1) { // Creo un circulo en el plano del medio
                    var Color = "rgb(" + RandInt(147, 127) + "," + RandInt(149, 129) + "," + RandInt(81, 61) + ")";
                    this.CirculosMedio.push(new this.Circulo(x, y, Rand(8, 7), Color, this.Velocidad));
                }
                // Creo un circulo en el plano inferior
                var Color = "rgb(" + RandInt(112, 92) + "," + RandInt(89, 69) + "," + RandInt(97, 77) + ")";                    
                this.CirculosInferior.push(new this.Circulo(x, y, Rand(6, 4), Color, this.Velocidad));
            }
        }
    };

    
    
    this.Pintar = function() {
        this.Context.fillStyle = "rgba(49,46,53, 1)";
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        this.PintarArrayCirculos(this.CirculosInferior);
        this.PintarArrayCirculos(this.CirculosMedio);
        this.PintarArrayCirculos(this.CirculosSuperior);                
    };
    
    // Función que pinta un plano compuesto por circulos
    this.PintarArrayCirculos = function(ArrayCirculos) {
        this.ComprobarDistancia(ArrayCirculos);
        var Tam = ArrayCirculos.length;
        for (var i = 0; i < Tam; i++) {
            var C = ArrayCirculos[i];
            C.Actualizar();
            this.Context.globalAlpha = 1;
            this.Context.fillStyle = C.Color;
            this.Context.beginPath();
            this.Context.arc(C.X, C.Y, C.Radio, 0, this.PIx2, false);
            this.Context.fill();
        }
    };

    // Función que comprueba las colisiones
    this.ComprobarDistancia = function(ArrayCirculos) {
        var Tam = ArrayCirculos.length;
        for (var i = 0; i < Tam - 1; i++) {
            for (var j = i + 1; j < Tam; j++) {
                var p0 = ArrayCirculos[i];
                var p1 = ArrayCirculos[j];
                var Distancia = (p1.X - p0.X) * (p1.X - p0.X) + (p1.Y - p0.Y) * (p1.Y - p0.Y);
                var Angulo = Math.atan2(p1.Y - p0.Y, p1.X - p0.X);

                if (Distancia < 7500 && ArrayCirculos === this.CirculosSuperior || Distancia < 5000 && ArrayCirculos === this.CirculosMedio || Distancia < 3000 && ArrayCirculos === this.CirculosInferior) {
                    this.Context.globalAlpha = .4;

/*                    if (ArrayCirculos === this.CirculosSuperior) {
                        this.Context.strokeStyle = "rgb(255,255,255)";
                    } 
                    else if (ArrayCirculos === this.CirculosMedio) {
                        this.Context.strokeStyle = "rgb(245,245,245)";
                    } 
                    else if (ArrayCirculos === this.CirculosInferior) {*/
                        this.Context.strokeStyle = "rgb(235,235,235)";
//                    }

                    this.Context.beginPath();
                    this.Context.moveTo(p0.X, p0.Y);
                    this.Context.lineTo(p1.X, p1.Y);
                    this.Context.stroke();
                }

                if (Distancia < (p0.Radio + p1.Radio) * (p0.Radio + p1.Radio)) {
                    this.Colision = true;
                    var Velocidad = 3.33;
                    p1.VelocidadX = Math.cos(Angulo) * Velocidad;
                    p1.VelocidadY = Math.sin(Angulo) * Velocidad;
                    p0.VelocidadX = -Math.cos(Angulo) * Velocidad;
                    p0.VelocidadY = -Math.sin(Angulo) * Velocidad;
                } 
                else {
                    this.Colision = false;
                }
            }
        }
    };
    
    
    // Objeto base para los circulos
    this.Circulo = function(X, Y, Radio, Color, Velocidad) {
        this.X          = X;
        this.Y          = Y;
        this.Radio      = Radio;
        this.Color      = Color;
        this.Velocidad  = Velocidad;
        this.Angulo     = Math.random() * (Math.PI * 2);
        this.VelocidadX = Velocidad * Math.cos(this.Angulo);
        this.VelocidadY = Velocidad * Math.sin(this.Angulo);
        
        this.Actualizar = function() {
            if (this.X - this.Radio < 0 || this.X + this.Radio > $Banner.Ancho)     {  this.VelocidadX *= -1;  } 
            else if (this.Y - this.Radio < 0 || this.Y + this.Radio > $Banner.Alto) {  this.VelocidadY *= -1;  }
            if (!$Banner.Colision) {
                var VA = Math.sqrt(this.VelocidadX * this.VelocidadX + this.VelocidadY * this.VelocidadY);  // Velocidad actual
                var AA = Math.atan2(this.VelocidadY, this.VelocidadX);                                      // Ángulo actual
                // Easing
                if ($Banner.Velocidad < VA) {
                    this.VelocidadX -= Math.cos(AA) * (VA - $Banner.Velocidad) * .15;
                    this.VelocidadY -= Math.sin(AA) * (VA - $Banner.Velocidad) * .15;
                }
            }

            this.X += this.VelocidadX;
            this.Y += this.VelocidadY;        
        };
        
        
    };

};