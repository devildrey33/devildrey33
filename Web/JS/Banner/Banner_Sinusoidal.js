   /* Banner creado por Josep Antoni Bover Comas para devildrey33.es 
 *  Creado el : 07/09/2016
 *  Ultima modificación : 07/09/2016
 * */
// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_Sinusoidal = function() {    
    // Llamo al constructor del ObjetoBanner
    if (ObjetoBanner.call(this, "2d") === false) { return false; }
    // Se ha creado el canvas, inicio los valores de la animación ...         
    this.Reiniciar();
    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};


Banner_Sinusoidal.prototype = Object.assign( Object.create(ObjetoBanner.prototype), {
    constructor     : Banner_Sinusoidal,

    Nombre          : "Onda Sinusoidal",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/Sinusoidal.html",
    NombreURL       : "Lab : Sinusoidal",  
    
    Avance2         : 0,
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {  this.Reiniciar();  },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(Evento) { },
    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(Evento) {  },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(Evento) {  },
    
    Circulos        : [],
        
    CrearCirculos   : function(ArrayCirculos) {
        var TotalCirculos = RandInt(7, 4);
        
        this.Circulos = [];
        if (typeof(ArrayCirculos) === "undefined") {
            var cAlpha = 1 - (TotalCirculos / 10);
            
            for (var i = 0; i < TotalCirculos; i++) {                
                this.Circulos.push(new this.Circulo(RandInt((this.Alto / TotalCirculos) - 2, 15), 
                    "rgb(" + Math.floor(234 * cAlpha) + "," + Math.floor(80 * cAlpha) + "," + Math.floor(78 * cAlpha) + ")",
                    "rgb(" + Math.floor(255 * cAlpha) + "," + Math.floor(155 * cAlpha) + "," + Math.floor(155 * cAlpha) + ")"
                ));
                cAlpha += 0.1;
            }
        }
        else {
            var cAlpha = 1 - (ArrayCirculos.length / 10);
            for (var i = 0; i < ArrayCirculos.length; i++) {
                this.Circulos.push(new this.Circulo(ArrayCirculos[i], 
                    "rgb(" + Math.floor(234 * cAlpha) + "," + Math.floor(80 * cAlpha) + "," + Math.floor(78 * cAlpha) + ")",
                    "rgb(" + Math.floor(255 * cAlpha) + "," + Math.floor(155 * cAlpha) + "," + Math.floor(155 * cAlpha) + ")"
                ));
                cAlpha += 0.1;
            }
        }
        // Posición del circulo central
        this.Circulos[0].X = this.PosXCirculoCentral; // 
        this.Circulos[0].Y = this.Alto / 2;
        
        this.Circulos[this.Circulos.length - 1].Color = "rgb(234, 80, 78)";
    },
    
    Circulo : function(Tam, Color, ColorPunto) {
        this.Tam = Tam;
        this.X = 0;
        this.Y = 0;
        this.Color = Color;
        this.ColorPunto = ColorPunto;
        
        this.Avance = function(Avance, CirculoPadre) {
            this.X = CirculoPadre.X + (Math.cos(Avance) * (CirculoPadre.Tam));
            this.Y = CirculoPadre.Y + (Math.sin(Avance) * (CirculoPadre.Tam));            
        };
//        this.Vel = Rand();
    },
    
    Reiniciar       : function() { 
        this.DegradadoTranslucido_Ancho =  this.Ancho / 8;
        this.AnchoGrafico = this.Ancho - 400;
        this.PosXCirculoCentral = this.Ancho - 200;
        
        // Color para el gráfico
        this.Color = "rgb(234, 80, 78)";
        this.ColorPuntos = "rgb(255, 155, 155)";
        // Degradado translucido para borrar la onda en la parte izquierda del banner
        this.DegradadoTranslucido = this.Context.createLinearGradient(0, 0, this.DegradadoTranslucido_Ancho, 0);
        this.DegradadoTranslucido.addColorStop(0, "rgba(49, 46, 53, 1)");
        this.DegradadoTranslucido.addColorStop(1, "rgba(49, 46, 53, 0)");
        if (Rand() > 0.5) {  this.Velocidad = (Math.PI * 2) / 180;     }
        else              {  this.Velocidad = -((Math.PI * 2) / 180);  }
        
//        this.CrearCirculos([60, 40, 30, 45]);
        this.CrearCirculos();
                
        this.ImgOnda = new BufferCanvas((this.AnchoGrafico) + 360, this.Alto);
        this.ImgOnda.Context.strokeStyle = this.Color;    

        this.DiametroCirculo = this.ImgOnda.Alto / 5;
        
        this.ImgOnda.Context.beginPath();
        this.ImgOnda.Context.moveTo(0, this.ImgOnda.Alto / 2);
        var Avance = 0;
//        var MitadAltura = this.Alto / 2;
        
        /* 360 deg = Math.PI * 2 */
        for (var x = 0; x <= (this.AnchoGrafico) + 360; x++){
            Avance += this.Velocidad;
            for (var i = 1; i < this.Circulos.length; i++) {
                this.Circulos[i].Avance(Avance * i, this.Circulos[i - 1]);                
//                this.Circulos[i].Y = this.Circulos[i - 1].Y + (Math.sin(Avance * i) * (this.Circulos[i - 1].Tam));
            }
            this.ImgOnda.Context.lineTo(x, this.Circulos[this.Circulos.length - 1].Y);
        }
        this.ImgOnda.Context.stroke();

        this.Avance = -Math.floor(this.AnchoGrafico);
        this.Avance2 = 0;
    },
    
    
    // Función que pinta cada frame de la animación
    Pintar          : function() {    
        this.Context.fillStyle = "rgba(49, 46, 53, 0.95)";
/*        this.Context.fillStyle = "#FFF";*/
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);

        this.Context.strokeStyle = "rgb(80, 80, 80)";                
        this.Context.setLineDash([2.5]);
        this.Context.beginPath();
        this.Context.moveTo(115, this.Alto / 2);
        this.Context.lineTo(this.PosXCirculoCentral + 115, this.Alto / 2);
        this.Context.stroke();
        this.Context.beginPath();
        this.Context.moveTo(this.PosXCirculoCentral, (this.Alto / 2) - 115);
        this.Context.lineTo(this.PosXCirculoCentral, (this.Alto / 2) + 115);
        this.Context.stroke();
        this.Context.setLineDash([1, 0]);
        
        
        // Avance para el backbufer
        this.Avance +=1;
        if (this.Avance >= 360) this.Avance = 0;
        this.Context.drawImage(this.ImgOnda.Canvas, this.Avance, 0, this.AnchoGrafico, this.Alto, 0, 0, this.AnchoGrafico, this.Alto);


        this.Avance2 += this.Velocidad;
//        this.Context.fillStyle = this.ColorPuntos;                       
        
//        this.Context.strokeStyle = this.Color;        
        this.Context.fillStyle = this.ColorPunto;        
        for (var i = 0; i < this.Circulos.length; i++) {
            this.Context.strokeStyle = this.Circulos[i].Color;        
            this.Context.fillStyle = this.Circulos[i].ColorPunto;        
            if (i !== 0) { // No hay que calcular la posición del primer circulo porque es fijo.
                this.Circulos[i].Avance(this.Avance2 * i, this.Circulos[i - 1]);

                this.Context.beginPath();
                this.Context.arc(this.Circulos[i].X, this.Circulos[i].Y, 2, 0, 2 * Math.PI);
                this.Context.fill();            
            }
            if (i !== this.Circulos.length - 1) { // En la ultima posición no se pinta el circulo
                this.Context.beginPath();
                this.Context.arc(this.Circulos[i].X, this.Circulos[i].Y, this.Circulos[i].Tam, 0, 2 * Math.PI);
                this.Context.stroke();
            }
            
        }
                
        
        // Barra que une el último circulo con el gráfico
        this.Context.beginPath();
        this.Context.moveTo(this.Circulos[i - 1].X, this.Circulos[i - 1].Y);
        this.Context.lineTo(this.AnchoGrafico, this.Circulos[i - 1].Y);
        this.Context.stroke();
        
        // Punto inicial de la barra desde la curva sinusoidal
        this.Context.beginPath();
        this.Context.arc(this.AnchoGrafico, this.Circulos[i - 1].Y, 2.5, 0, 2 * Math.PI);
        this.Context.fill();
        
        // Pinto un degradado para suavizar la parte izquierda del banner
        this.Context.fillStyle = this.DegradadoTranslucido;
        this.Context.fillRect(0, 0, this.DegradadoTranslucido_Ancho, this.Alto);        
        
        
//        this.Context.drawImage(this.ImgOnda.Canvas, this.Avance2, 0, this.Ancho, this.Alto, 0, 0, this.Ancho, this.Alto);
    }
});
