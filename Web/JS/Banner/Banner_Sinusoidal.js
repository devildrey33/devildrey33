   /* Banner creado por Josep Antoni Bover Comas para devildrey33.es 
 *  Creado el : 07/09/2016
 *  Ultima modificación : 07/09/2016
 * */


// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_Sinusoidal = function() {    
    // Llamo al constructor del ObjetoBanner
    if (ObjetoBanner.call(this, "2d") === false) { return false; }
    // Se ha creado el canvas, inicio los valores de la animación ... 
    // Color para el gráfico
    this.Color = "rgb(234, 80, 78)";
    this.ColorPuntos = "rgb(255, 155, 155)";
    // Degradado translucido para borrar la onda en la parte izquierda del banner
    this.DegradadoTranslucido = this.Context.createLinearGradient(0, 0, this.DegradadoTranslucido_Ancho, 0);
    this.DegradadoTranslucido.addColorStop(0, "rgba(49, 46, 53, 1)");
    this.DegradadoTranslucido.addColorStop(1, "rgba(49, 46, 53, 0)");
     
    this.Velocidad1 = (Math.PI / 90);
    this.Velocidad2 = 4; // Velocidad2 es multiplicada por Velocidad1, y puede ser negativo
    
    this.Iniciar();
    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};


Banner_Sinusoidal.prototype = Object.assign( Object.create(ObjetoBanner.prototype), {
    constructor     : Banner_Sinusoidal,
    
    Nombre          : "Onda Sinusoidal",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/Sinusoidal.html",
    NombreURL       : "Lab : Sinusoidal",  
    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {  this.Iniciar();  },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(Evento) { },
    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(Evento) {  },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(Evento) {  },
    
    Iniciar       : function() { 
        this.DegradadoTranslucido_Ancho =  this.Ancho / 8;
        this.AnchoGrafico = this.Ancho * 0.7;
        // Posición del circulo central
        this.PosCirculo = this.Ancho * 0.9,

        this.ImgOnda = new BufferCanvas((this.AnchoGrafico) + 360, this.Alto);
        this.ImgOnda.Context.strokeStyle = this.Color;    

        this.DiametroCirculo = this.ImgOnda.Alto / 5;

        this.ImgOnda.Context.moveTo(0, this.ImgOnda.Alto / 2);    
        var Avance = 0;
        var y, y2;
        for (var x = 0; x <= (this.AnchoGrafico) + 360; x++){
            Avance -= this.Velocidad1;
            y = Math.sin(Avance) * this.DiametroCirculo;
            y2 = Math.sin(Avance * this.Velocidad2) * this.DiametroCirculo;
            this.ImgOnda.Context.lineTo(x, y + y2 + (this.Alto / 2)  );
        }
        this.ImgOnda.Context.stroke();        

        this.Avance = -(this.AnchoGrafico + 1);
        this.Avance2 = 0;
    },
    
    // Función que pinta cada frame de la animación
    Pintar          : function() {    
        this.Context.fillStyle = "rgba(49, 46, 53, 0.95)";
/*        this.Context.fillStyle = "#FFF";*/
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);
        // Avance para el backbufer
        this.Avance +=1;
        if (this.Avance >= 360) this.Avance = 0;
        this.Context.drawImage(this.ImgOnda.Canvas, this.Avance, 0, this.AnchoGrafico, this.Alto, 0, 0, this.AnchoGrafico, this.Alto);

        this.Avance2 -= this.Velocidad1;
        var x = Math.cos(this.Avance2) * this.DiametroCirculo;
        var y = Math.sin(this.Avance2) * this.DiametroCirculo;
        var x2 = Math.cos(this.Avance2 * this.Velocidad2) * this.DiametroCirculo;
        var y2 = Math.sin(this.Avance2 * this.Velocidad2) * this.DiametroCirculo;

        
                
        // Circulo central
        this.Context.strokeStyle = this.Color;
        this.Context.beginPath();
        this.Context.arc(this.PosCirculo, this.Alto / 2, this.DiametroCirculo, 0, 2 * Math.PI);
        this.Context.stroke();
        
        
        // Circulo rotando        
        this.Context.beginPath();
        this.Context.arc(x + this.PosCirculo, y + (this.Alto / 2), this.DiametroCirculo, 0, 2 * Math.PI);
        this.Context.stroke();
        // Barra
        this.Context.beginPath();
        this.Context.moveTo(x + x2 + this.PosCirculo, y + y2 + (this.Alto / 2));
        this.Context.lineTo(this.AnchoGrafico, y + y2 + (this.Alto / 2));
        this.Context.stroke();
        

        // Puntos
        this.Context.fillStyle = this.ColorPuntos;
        // Punto central del circulo base
        this.Context.strokeStyle = this.Color;
        this.Context.beginPath();
        this.Context.arc(this.PosCirculo, this.Alto / 2, 1, 0, 2 * Math.PI);
        this.Context.fill();
        // Punto circulo orbitando
        this.Context.beginPath();
        this.Context.arc(x + this.PosCirculo, y + (this.Alto / 2), 2, 0, 2 * Math.PI);
        this.Context.fill();
        // Punto inicial de la barra desde el circulo
        this.Context.beginPath();
        this.Context.arc(x + x2 + this.PosCirculo, y + y2 + (this.Alto / 2), 2.5, 0, 2 * Math.PI);
        this.Context.fill();
        // Punto inicial de la barra desde la curva sinusoidal
        this.Context.beginPath();
        this.Context.arc(this.AnchoGrafico, y + y2 + (this.Alto / 2), 2.5, 0, 2 * Math.PI);
        this.Context.fill();
        
        // Pinto un degradado para suavizar la parte izquierda del banner
        this.Context.fillStyle = this.DegradadoTranslucido;
        this.Context.fillRect(0, 0, this.DegradadoTranslucido_Ancho, this.Alto);        
        
        
//        this.Context.drawImage(this.ImgOnda.Canvas, this.Avance2, 0, this.Ancho, this.Alto, 0, 0, this.Ancho, this.Alto);
    }
});