/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Banner_MatrixLluviaHexadecimal = function() {
    this.Nombre         = "Matrix lluvia hexadecimal";
    this.IdeaOriginal   = "thecodeplayer";
    this.URL            = "http://thecodeplayer.com/walkthrough/matrix-rain-animation-html5-canvas-javascript";
    this.NombreURL      = "Matrix rain animation";

    // Arrays para cada plano
    this.Caracteres = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F" /*, "田", "由", "甲", "申", "甴", "电", "甶", "男", "甸", "甹", "町", "画", "甼", "甽", "甾", "甿", "畀", "畁", "畂", "畃", "畄", "畅", "畆", "畇", "畈", "畉", "畊", "畋", "界", "畍", "畎", "畏", "畐", "畑" */];    
    this.Columnas   = [];
    this.TamFuente  = 10;
    this.NoPintar   = false;
    

    this.Iniciar = function() {
        this.Columnas = [];
        var Cols = this.Ancho / this.TamFuente;
        for (var i = 0; i < Cols; i++) {
            this.Columnas[i] = 1;
        }
    };
    
    this.Pintar = function() {        
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
    };
    
    
}
