/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Banner_Espacio2D = function() {
    this.Nombre         = "Espacio 2D";
    this.IdeaOriginal   = "devildrey33";
    this.URL            = "http://devildrey33.es/Blog/Canvas2D_1";
    this.NombreURL      = "Tutorial HTML5 Canvas2D parte 1";

    // Arrays para cada plano
    this.TotalEstrellas = 0;
    this.Estrellas      = [];

    this.Iniciar = function() {
        this.Estrellas      = [];
        this.TotalEstrellas = ((this.Ancho * this.Alto) / 250);
        
        // Creo el array de estrellas
        for (var i = 0; i < this.TotalEstrellas; i++) {
            var Vel = Rand(5) + 0.5;
            var Col = 199 + Math.floor(Vel * 10);
            this.Estrellas[i] = new this.Estrella(RandInt(this.Ancho), RandInt(this.Alto), Vel, "rgb("+ Col +  "," + Col + "," + Col + ")");
        }
    };
    
    this.Pintar = function() {
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
    };
    
    this.Estrella = function(X, Y, Velocidad, Color) {
        this.X = X;
        this.Y = Y;
        this.Velocidad = Velocidad;
        this.Color = Color;
    };
    
    
};