/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_ReunionDeCirculos = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : '2d',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body
    }) === false) { return false; }
    // Se ha creado el canvas, inicio los valores de la animación ... 
    this.Iniciar();

    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};

Banner_ReunionDeCirculos.prototype = Object.assign( Object.create(ObjetoCanvas.prototype), {
    constructor     : Banner_ReunionDeCirculos, 
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(Evento) { /*this.Mouse.X = Evento.offsetX;     /* this.Mouse.Y = Evento.offsetY; */  },
    // Función que se llama al presionar un botón del mouse por el canvas
    MousePresionado : function(Evento) { },
    // Función que se llama al soltar un botón del mouse por el canvas
    MouseSoltado    : function(Evento) { },
    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(Evento) {  },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(Evento) { /*this.Mouse.X = this.Ancho / 2;     this.Mouse.Y = this.Alto / 2; */ },
    // Función que se llama al presionar una tecla
    TeclaPresionada : function(Evento) { },
    // Función que se llama al soltar una tecla
    TeclaSoltada    : function(Evento) { },

    Nombre          : "Reunión de circulos",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/ReunionDeCirculos.html",
    NombreURL       : "Lab : Reunion de circulos",    
    
    TotalCirculos   : 75,
    Circulos        : [],    
    
    Iniciar         : function() {
        this.Circulos = [];
        this.Mouse = { "X" : this.Ancho / 2, "Y" : this.Alto / 2, "Radio" : 10 };
    },
    
    Circulo         : function(Padre) {
        this.Padre = Padre;
        
        this.Iniciar = function() {
            if (Rand() > 0.5) { // empieza fijo por arriba o abajo
                this.X = Rand(this.Padre.Ancho);
                this.Y = (Rand() > 0.5) ? -10 : this.Padre.Alto + 10;
            }
            else { // empieza fijo por la derecha o la izquierda 
                this.X = (Rand() > 0.5) ? -10 : this.Padre.Ancho + 10;
                this.Y = Rand(this.Padre.Alto);            
            }        
            this.Velocidad = Rand(8.0, 4);        
            this.Radio = Rand(2, 5);            
            this.ColorH = Math.abs(Math.sin(this.Padre.Tick / 20000)) * 255;
            this.ColorA = 0.6;
            this.Explotado = false;
        };
        
        this.Actualizar = function() {
            if (this.Explotado === false) {
                // Avanzo el circulo hacia el puntero del mouse, o hacia el medio de la pantalla
                var Angulo = Math.atan2(this.Y - this.Padre.Mouse.Y, this.X - this.Padre.Mouse.X) * 180 / Math.PI;                
                this.X -= Math.cos(Angulo * (Math.PI / 180)) * this.Velocidad;
                this.Y -= Math.sin(Angulo * (Math.PI / 180)) * this.Velocidad;
                // Compruebo las colisiones
                var dx = this.X - this.Padre.Mouse.X;
                var dy = this.Y - this.Padre.Mouse.Y;
                var Distancia = Math.sqrt(dx * dx + dy * dy);
                if (Distancia < this.Radio + this.Padre.Mouse.Radio) { this.Explotar(); }                
            }
            else {
                if (this.Radio < this.RadioExplosion && this.ColorA > 0) { this.Radio += 0.66; this.ColorA -= 0.01; }
                else                                                     { this.Iniciar();     } // Reinicio 
            }
            var Color = 'hsla(' + this.ColorH + ", 70%, 50%, " + this.ColorA + ")"; 
            this.Padre.Context.beginPath();
            this.Padre.Context.strokeStyle = Color;
            this.Padre.Context.arc(this.X, this.Y, this.Radio, 0, 2 * Math.PI, false);            
            this.Padre.Context.stroke();
        };        
        
        this.Explotar = function() {
            this.RadioExplosion = this.Radio * Rand(15, 5);
            this.Explotado = true;
        };
        
        this.Iniciar();
    },
    
    // Función que pinta cada frame de la animación
    Pintar          : function() { 
        if (this.Circulos.length < this.TotalCirculos) {
            for (var i = 0; i < 10; i++) { this.Circulos.push(new this.Circulo(this)); }
        }
        
        this.Context.fillStyle = 'rgba(49, 46, 53, 0.25)';
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        
        this.Context.globalCompositeOperation ="lighter";
        
        for (var i = 0; i < this.Circulos.length; i++) {
            this.Circulos[i].Actualizar();
        }
        this.Context.globalCompositeOperation ="source-over";
    }
});
