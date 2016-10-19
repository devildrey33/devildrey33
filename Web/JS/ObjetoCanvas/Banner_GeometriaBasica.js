/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_GeometriaBasica = function() {
    // Llamo al constructor del ObjetoBanner
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

Banner_GeometriaBasica.prototype = Object.assign( Object.create(ObjetoCanvas.prototype), {
    constructor     : Banner_GeometriaBasica , 
    // Datos de la animación [requerido]
    Nombre          : "Geometría básica",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/GeometriaBasica.html",
    NombreURL       : "Lab : GeometriaBasica",    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(Evento) { this.Mouse = { X : Evento.clientX,  Y : Evento.clientY }; },
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
    
    TotalFiguras    : 150,
    
    Figuras         : [],
    
    Figura          : function(Ancho, Alto) {
        this.X              = Rand(Ancho, 0);
        this.Y              = Alto + 50;
        this.Tam            = Rand(15, 35);
        this.Velocidad      = Rand(2, 0.02);
        this.Tipo           = RandInt(3, 0); /* 0 Cuadrado, 1 Circulo, 2 Triangulo */
        this.Opacidad       = 1;
        this.VelocidadOpacidad = Rand(0.007, 0.0009);
        this.Rotacion       = 0; /* de 0 a Math.PI * 2 */
        this.VelocidadRotacion = Rand(0.05, -0.05);
        this.Angulo         = Rand(Math.PI * 2 , 0);
        
        this.Avance = function(MouseX, MouseY, Ancho) {            
            // Rotación del objeto;
            this.Rotacion += this.VelocidadRotacion;
            this.Opacidad -= this.VelocidadOpacidad;
            // Posición del objeto
//            var Angulo = Math.atan2(MouseY, MouseX) * (180 / Math.PI); 
            //var aY = Alto - this.Y;
            this.X += Math.cos(this.Angulo) * this.Velocidad;
            this.Y += Math.sin(this.Angulo) * this.Velocidad;
            // s'ha d'incloure el tamany de la figura en els calculs de les coordenades
            if (this.Opacidad < 0 || this.Y < -this.Tam || this.X > Ancho + this.Tam || this.X  < -this.Tam) {
                return false;
            }
            return true;
        };
        
    },
    
    Iniciar         : function() {
        this.Mouse = { X : this.Ancho / 2,  Y : this.Alto / 2 };
        for (var i = 0; i < this.TotalFiguras; i++) {
            this.Figuras[i] = new this.Figura(this.Ancho, this.Alto);
        }
    },

    
    PintarCuadrado  : function(X, Y, Tam, Rotacion) {
        this.Context.save();
        this.Context.translate(X, Y);
        this.Context.rotate(Rotacion);
        this.Context.fillRect(-Tam / 2, -Tam / 2, Tam, Tam);
        this.Context.restore();
    },
        
    PintarTriangulo  : function(X, Y, Tam, Rotacion) {
        this.Context.save();
        this.Context.translate(X, Y);
        this.Context.rotate(Rotacion);
        this.Context.moveTo(0, (Tam) * 0.66);
        this.Context.lineTo(Tam, -Tam);
        this.Context.lineTo(-Tam, -Tam);
        this.Context.closePath();
        this.Context.fill();
//        this.Context.fillRect(-Tam, -Tam, Tam * 2, Tam *2);
        this.Context.restore();
    },
        
    // Función que pinta cada frame de la animación
    Pintar          : function() {    
        this.Context.fillStyle = 'rgb(49, 46, 53)';
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        
        for (var i = this.Figuras.length - 1; i > 0; i--) {            
            if (this.Figuras[i].Avance(this.Mouse.X, this.Mouse.Y, this.Ancho) === false) { // La figura ha terminado la animación, creo una nueva
                this.Figuras[i] = new this.Figura(this.Ancho, this.Alto);
            }
            this.Context.fillStyle = 'rgba(255, 46, 53, ' + this.Figuras[i].Opacidad +' )';
            this.Context.beginPath();
            if (this.Figuras[i].Tipo === 0) {
                this.PintarCuadrado(this.Figuras[i].X, this.Figuras[i].Y, this.Figuras[i].Tam, this.Figuras[i].Rotacion);
            }
            else if (this.Figuras[i].Tipo === 1) {
                this.Context.arc(this.Figuras[i].X, this.Figuras[i].Y, this.Figuras[i].Tam, 0, Math.PI * 2);
            }
            else if (this.Figuras[i].Tipo === 2) {
                this.PintarTriangulo(this.Figuras[i].X, this.Figuras[i].Y, this.Figuras[i].Tam, this.Figuras[i].Rotacion);                
            }
            this.Context.fill();
        }
    }
});