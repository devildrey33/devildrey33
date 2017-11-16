/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Banner_MatrixLluviaHexadecimal = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : '2d',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body
    }) === false) { return false; }

    this.Iniciar();
    
    this.Cargando(false);
};    


Banner_MatrixLluviaHexadecimal.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
    constructor         : Banner_MatrixLluviaHexadecimal, 

    // Datos de la animación
    Nombre              : "Matrix lluvia hexadecimal",
    IdeaOriginal        : "thecodeplayer",
    URL                 : "https://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript",
    NombreURL           : "Matrix rain animation",    
    
    Iniciar             : function() {
        // Arrays para cada plano
        this.Caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" ];    
        this.Columnas   = [];
        this.TamFuente  = 10;
        this.NoPintar   = false;
        // Inicio las columnas
        this.Columnas = [];
        var Cols = this.Ancho / this.TamFuente;
        for (var i = 0; i < Cols; i++) {
            this.Columnas[i] = 1;
        }
        
    },
    
    Redimensionar       : function() {    },
    
    Scroll              : function() {    },
    
    Pintar              : function() {    
        // Evito procesar las columnas una de cada 2 veces que se llama a pintar
        this.NoPintar = !this.NoPintar;
        if (this.NoPintar === true) return;

        
        this.Context.fillStyle = "rgba(49, 46, 53, 0.05)";
        this.Context.fillRect(0, 0, this.Ancho, this.Alto);        
        this.Context.fillStyle = "#00FF00"; 
        this.Context.font = this.TamFuente + "px arial";

        for (var i = 0; i < this.Columnas.length; i++) {
            var Char = this.Caracteres[RandInt(this.Caracteres.length)];
            this.Context.fillText(Char, i * this.TamFuente, this.Columnas[i] * this.TamFuente);

            if (this.Columnas[i] * this.TamFuente > this.Alto && Rand() > 0.975) {
                this.Columnas[i] = 0;
            }

            this.Columnas[i] += 1;
        }
    }
    
    
});
