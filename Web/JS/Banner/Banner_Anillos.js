
// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_Anillos = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoBanner.call(this, "2d") === false) { return false; }
    // Se ha creado el canvas, inicio los valores de la animación ... 
    
    this.TotalCirculos = 350;
    this.Circulos      = [];
    
    this.Circulo = function(Padre) {
        this.Padre = Padre;
        var CentroX = (this.Padre.Ancho / 2);
        this.CentroY = (this.Padre.Alto / 2);
        this.Angulo = Rand(360);
        this.Distancia = 15 + Rand(CentroX + 100);
        this.Tam = Rand(4, 1);
        this.Avance = (Rand(0.008, 0.0005) / 4) * this.Tam; // El avance es correlativo al tamaño para que no queden espacios en su estela
        this.X = CentroX + (this.Distancia * Math.cos(this.Angulo));
        this.Y = (this.Padre.Alto / 2) + (this.Distancia * Math.sin(this.Angulo));
        this.Color = "rgb(" + RandInt(255, 20) + "," + RandInt(255, 20) + "," + RandInt(255, 20) + ")";
        this.Avanzar = function() {
            if (Padre.Invertir === false) { this.Angulo += this.Avance; }
            else                          { this.Angulo -= this.Avance * 1.5; }

            //if (this.Angulo > 360) this.Angulo -= 360;
            this.X = (this.Padre.Ancho / 2) +(this.Distancia * Math.cos(this.Angulo));
            this.Y = (this.Padre.Alto / 2) + (this.Distancia * Math.sin(this.Angulo));            
        };
    }; 
    
    for (var i = 0; i < this.TotalCirculos; i++) {
        this.Circulos[i] = new this.Circulo(this);
    }

    this.Context.fillStyle = 'rgb(49, 46, 53)';
    this.Context.fillRect(0, 0, this.Ancho, this.Alto);

    

    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};

Banner_Anillos.prototype = Object.assign( Object.create(ObjetoBanner.prototype) , {
    constructor     : Banner_Anillos, 
    // Datos de la animación
    Nombre          : "Anillos",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/Anillos.html",
    NombreURL       : "Lab : Anillos",    
    Invertir        : false,

    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(event) { this.Invertir = true; },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(event) { this.Invertir = false; },
    // Función que pinta cada frame de la animación
    Pintar          : function() {    
        this.Context.fillStyle = (this.Invertir === true) ? 'rgba(49, 46, 53, 0.02)' : 'rgba(49, 46, 53, 0.09)';
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        for (var i = 0; i < this.TotalCirculos; i++) {
            this.Circulos[i].Avanzar();
            this.Context.beginPath();
            this.Context.fillStyle = this.Circulos[i].Color;
            this.Context.arc(this.Circulos[i].X, this.Circulos[i].Y, this.Circulos[i].Tam, 0, 2 * Math.PI, false);            
            this.Context.fill();
        }
    }
});