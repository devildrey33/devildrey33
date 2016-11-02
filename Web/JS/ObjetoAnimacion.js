/* Objeto para crear animaciones de tiempo creado por Josep Antoni Bover Creado el 25/08/2016
 *  Ultima modificación el 28/10/2016
 * */



/* Funciones de tiempo :    https://github.com/mietek/ease-tween/blob/master/src/index.js
                            https://gist.github.com/mckamey/3783009      */

/* 
this.ColorTanque = new ObjetoAnimacion.Crear(Array( 
    new ObjetoAnimacion.Paso({ R : 234, G :  80, B :  78, A : 1 }),
    new ObjetoAnimacion.Paso({ R :   0, G : 255, B :   0, A : 1 }, 500, 0),
    new ObjetoAnimacion.Paso({ R :  34, G :  68, B :  34, A : 1 }, 500, 0),
    new ObjetoAnimacion.Paso({ R : 234, G :  80, B :  78, A : 1 }, 500, 0)
));
 
     **/    
    
var FuncionesTiempo = {
    Linear      : function(Tiempo) { return Tiempo; },
    SinIn       : function(Tiempo) { return 1 - Math.cos(Tiempo * Math.PI / 2); },
    SinOut      : function(Tiempo) { return Math.sin(Tiempo * Math.PI / 2); },
    SinInOut    : function(Tiempo) { return -0.5 * (Math.cos(Math.PI * Tiempo) - 1);  }    
};
    
    
var ObjetoAnimacion = function() {
    // Array de animaciones
    this.Animaciones = [];
    this.EnPausa = false;
    // Actualiza las animaciones
    this.Actualizar = function(nTick) {
        if (this.EnPausa === true) { return; }
        var Tick;
        if (typeof(nTick) === 'undefined') { Tick = Date.now(); }
        else                               { Tick = nTick;}
        for (var i = this.Animaciones.length - 1; i > -1; i--) {
            if (this.Animaciones[i].Actualizar(Tick) === true) { // Si ha terminado, elimino la animación del array de animaciones pendientes
                this.Animaciones.splice(i, 1);
            }
        }
    };
    
    // Función que pausa TODAS las animaciones de este objeto
    this.Pausa = function() {
        this.EnPausa = true;
    };
    
    // Función que reanuda TODAS las animaciones de este objeto
    this.Reanudar = function() {
        var Tick = Date.now();
        // Actualizo el ultimo tick de todas las animaciones para que no pase nada de tiempo desde que se ha pausado
        for (var i = this.Animaciones.length - 1; i > -1; i--) {
            this.Animaciones[i]._UltimoTick = Tick - 1;
        }
        this.EnPausa = false;
    };
        
    this.Limpiar = function() {
        this.Animaciones = [];
    };
    // Ejemplo : 
    /*  var Animacion = ObjetoAnimacion.Crear([
            { 'Paso' : { X : 100, Y: -100 }}, // El primer paso es el punto de inicio, y no tiene ni retraso, ni tiempo, ni función de tiempo.
            { 'Paso' : { X :   0, Y:    0 }, 'Retraso' : 100, 'Tiempo' : 1000, 'FuncionTiempo' : FuncionesTiempo.SinOut }
            { 'Paso' : { X : 100, Y: -100 }, 'Retraso' : 100, 'Tiempo' : 1000, 'FuncionTiempo' : FuncionesTiempo.SinIn }
        ], { 
            "Repetir"           : 2,                               // Repetir 2 veces
            "FuncionActualizar" : function(Valores) { },           // Función que se llama cada vez que se actualizan los valores
            "FuncionTerminado"  : function() { }                   // Función que se llama al terminar la animación
        });*/
    // NOTA : Los retrasos ya no se aplican al repetir la animación
    this.Crear = function(Pasos, Opciones) {
        var Ani = new this.Animacion(Pasos, Opciones);
        this.Animaciones.push(Ani);
        return Ani;
    };    

    // Función que contiene los datos de una animación
    this.Animacion = function(ArrayPasos, Opciones) {
        this._UltimoTick         = 0;            // Ultimo date.now que se ha obtenido con la función Actualizar
        this._Pasos              = ArrayPasos;   // Array con los parámetros
        this._PosPasos           = 1;            // Posición dentro del array de datos
        this._PasoOrig           = this._Pasos[this._PosPasos - 1]; 
        this._PasoDest           = this._Pasos[this._PosPasos];
        this._Avance             = 0;
        this._Opciones           = { Repetir : 0, FuncionActualizar : function(Valores) { }, FuncionTerminado : function() { } };
        if (typeof (Opciones) !== 'undefined') { 
            if (typeof Opciones.Repetir !== "undefined")           { this._Opciones.Repetir = Opciones.Repetir;                     }
            if (typeof Opciones.FuncionActualizar !== "undefined") { this._Opciones.FuncionActualizar = Opciones.FuncionActualizar; }
            if (typeof Opciones.FuncionTerminado !== "undefined")  { this._Opciones.FuncionTerminado = Opciones.FuncionTerminado;   }
        }
        this.Terminado           = false;        // Animación terminada
        // Completo los datos de cada paso
        for (var Paso in this._Pasos) {
            if (typeof this._Pasos[Paso].Tiempo === "undefined")         { this._Pasos[Paso].Tiempo = 1; }
            if (typeof this._Pasos[Paso].Retraso === "undefined")        { this._Pasos[Paso].Retraso = 0; }
            if (typeof this._Pasos[Paso].FuncionTiempo === "undefined")  { this._Pasos[Paso].FuncionTiempo = FuncionesTiempo.Linear; }
        }
        
        // Valores iniciales
        for (var Indice in this._PasoOrig.Paso) {                    
            this[Indice] = this._PasoOrig.Paso[Indice];
        }    
        this._Opciones.FuncionActualizar(this);
        
        // Función que termina la animación y la deja tal y como está
        this.Cancelar = function() {
            console.log("ObjetoAnimacion.Cancelar");
            this._Opciones.FuncionTerminado();
            this.Terminado = true;                        
        };
        
        // Función que termina la animación y deja los valores en su estado final
        this.Terminar = function() {
            console.log("ObjetoAnimacion.Terminar");
            this._Opciones.FuncionTerminado();
            this.Terminado = true;            
            for (var Indice in this._Pasos[this._Pasos.length - 1].Paso) {                    
                this[Indice] = this._Pasos[this._Pasos.length - 1].Paso[Indice];
            }                        
            this._Opciones.FuncionActualizar(this);
        };
        // Actualiza la animación
        this.Actualizar = function(t) {
            if (this.Terminado === true) { return true; }
//            var t = Date.now();
            if (this._UltimoTick !== 0) {
                // Tiempo desde el ultimo frame a este frame
                var TiempoFrame = t - this._UltimoTick;
                if (this._PasoDest.Retraso > 0) {
                    this._PasoDest.Retraso = this._PasoDest.Retraso - TiempoFrame; 
                }
                else {
                    this._Avance += (TiempoFrame / this._PasoDest.Tiempo);
                    var FuncionTiempo = this._PasoDest.FuncionTiempo(this._Avance);
//                    console.log(this._Avance, FuncionTiempo);
                    if (this._Avance < 1 && this._Avance > -1) {
                        for (var Indice in this._PasoDest.Paso) {                    
                            this[Indice] = this._PasoOrig.Paso[Indice] - (this._PasoOrig.Paso[Indice] - this._PasoDest.Paso[Indice]) * FuncionTiempo;
                        }
                        this._Opciones.FuncionActualizar(this);
                    }
                    else {
                        // Valores finales de este paso
                        for (var Indice in this._PasoDest.Paso) {                    
                            this[Indice] = this._PasoDest.Paso[Indice];
                        }    
                        this._Opciones.FuncionActualizar(this);
                        // Avanzo al siguiente paso
                        this._PosPasos ++;
                        if (this._PosPasos < this._Pasos.length) {
                            this._PasoOrig = this._Pasos[this._PosPasos - 1];
                            this._PasoDest = this._Pasos[this._PosPasos];
                            this._Avance = 0;
                        }
                        // No hay mas pasos
                        else {
                            if (this._Opciones.Repetir === 0) {
                                this._Opciones.FuncionTerminado();
                                this.Terminado = true;
                            }
                            else {
                                this._Opciones.Repetir --;
                                this._PosPasos = 1;
                                this._PasoOrig = this._Pasos[this._PosPasos - 1]; 
                                this._PasoDest = this._Pasos[this._PosPasos];                                
                                this._Avance = 0;
                            }
                        }
                    }
                }
            }        
            this._UltimoTick = t;
            return this.Terminado;
        };
    };
};
      