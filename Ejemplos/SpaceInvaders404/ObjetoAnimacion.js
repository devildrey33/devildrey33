

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
var ObjetoAnimacion = new function() {
    // Array de animaciones
    this.Animaciones = [];
    // Actualiza las animaciones
    this.Actualizar = function() {
        for (var i = this.Animaciones.length - 1; i > -1; i--) {
            if (this.Animaciones[i].Actualizar() === true) { // Si ha terminado, elimino la animación del array de animaciones pendientes
                this.Animaciones.splice(i, 1);
            }
        }
    };
    
    // Estructura con los datos que debe tener un paso
    this.Paso = function(Paso, Tiempo, Retraso, FuncionTiempo) {
        this.Paso               = Paso;
        this.Tiempo             = (typeof Tiempo            !== 'undefined') ? Tiempo  : 1;
        this.Retraso            = (typeof Retraso           !== 'undefined') ? Retraso : 0;
//        this.FuncionActualizar  = (typeof FuncionActualizar !== 'undefined') ? FuncionActualizar : function(Indice, Valor) { };
        this.FuncionTiempo      = (typeof FuncionTiempo     !== 'undefined') ? FuncionTiempo : function(n) { return n; };
    };
    
    // Función para crear una nueva animación
    this.Crear = function(ArrayPasos, FuncionActualizar, FuncionTerminado) {
        this._UltimoTick         = 0;            // Ultimo date.now que se ha obtenido con la función Actualizar
        this._Pasos              = ArrayPasos;   // Array con los parámetros
        this._PosPasos           = 1;            // Posición dentro del array de datos
        this._PasoOrig           = this._Pasos[this._PosPasos - 1];
        this._PasoDest           = this._Pasos[this._PosPasos];
        this._Avance             = 0;
        this._FuncionActualizar  = (typeof FuncionActualizar !== 'undefined') ? FuncionActualizar : function() { };
        this._FuncionTerminado   = (typeof FuncionTerminado !== 'undefined') ? FuncionTerminado : function() { };
        this.Terminado           = false;        // Animación terminada
        // Valores iniciales
        for (var Indice in this._PasoOrig.Paso) {                    
            this[Indice] = this._PasoOrig.Paso[Indice];
//            this._PasoDest.FuncionActualizar(Indice, this[Indice]);
            this._FuncionActualizar(Indice, this[Indice]);
        }    
        
        ObjetoAnimacion.Animaciones.push(this);
        // Función que termina la animación y deja los valores en su estado final
        this.Terminar = function() {
            this._FuncionTerminado();
            this.Terminado = true;            
            for (var Indice in this._Pasos[this._Pasos.length - 1].Paso) {                    
                this[Indice] = this._Pasos[this._Pasos.length - 1].Paso[Indice];
                this._FuncionActualizar(Indice, this[Indice]);
//                this._Pasos[this._Pasos.length - 1].FuncionActualizar(Indice, this[Indice]);
            }            
        };
        // Actualiza la animación
        this.Actualizar = function() {
            if (this.Terminado === true) { return true; }
            var t = Date.now();
            if (this._UltimoTick !== 0) {
                // Tiempo desde el ultimo frame a este frame
                var TiempoFrame = t - this._UltimoTick;
                if (this._PasoDest.Retraso > 0) {
                    this._PasoDest.Retraso = this._PasoDest.Retraso - TiempoFrame; 
                }
                else {
                    this._Avance += (TiempoFrame / this._PasoDest.Tiempo);
                    var FuncionTiempo = this._PasoDest.FuncionTiempo(this._Avance);
                    if (FuncionTiempo < 1) {
                        for (var Indice in this._PasoDest.Paso) {                    
                            this[Indice] = this._PasoOrig.Paso[Indice] - (this._PasoOrig.Paso[Indice] - this._PasoDest.Paso[Indice]) * FuncionTiempo;
                            this._FuncionActualizar(Indice, this[Indice]);
//                            this._PasoDest.FuncionActualizar(Indice, this[Indice]);
                        }
                    }
                    else {
                        // Valores finales de este paso
                        for (var Indice in this._PasoDest.Paso) {                    
                            this[Indice] = this._PasoDest.Paso[Indice];
                            this._FuncionActualizar(Indice, this[Indice]);
//                            this._PasoDest.FuncionActualizar(Indice, this[Indice]);
                        }    
                        // Avanzo al siguiente paso
                        this._PosPasos ++;
                        if (this._PosPasos < this._Pasos.length) {
                            this._PasoOrig = this._Pasos[this._PosPasos - 1];
                            this._PasoDest = this._Pasos[this._PosPasos];
                            this._Avance = 0;
                        }
                        // No hay mas pasos
                        else {
                            this._FuncionTerminado();
                            this.Terminado = true;
                        }
                    }
                }
            }        
            this._UltimoTick = t;
            return this.Terminado;
        };
    };
};
      