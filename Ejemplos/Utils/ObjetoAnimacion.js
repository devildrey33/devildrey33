/* Objeto para crear animaciones de tiempo creado por Josep Antoni Bover Creado el 25/08/2016
 *  Ultima modificación el 02/02/2017
 * */



/* Funciones de tiempo :    https://github.com/mietek/ease-tween/blob/master/src/index.js
                            https://gist.github.com/mckamey/3783009      */

// Ejemplo : 
    /*  var Animacion = ObjetoAnimacion.CrearAnimacion([
            { 'Paso' : { X : 100, Y: -100 }}, // El primer paso es el punto de inicio, y no tiene ni retraso, ni tiempo, ni función de tiempo.
            { 'Paso' : { X :   0, Y:    0 }, 'Retraso' : 100, 'Tiempo' : 1000, 'FuncionTiempo' : FuncionesTiempo.SinOut }
            { 'Paso' : { X : 100, Y: -100 }, 'Retraso' : 100, 'Tiempo' : 1000, 'FuncionTiempo' : FuncionesTiempo.SinIn  }
        ], { 
            "Invertir"          : true,                            // Invertir la animación al terminar los pasos
            "Repetir"           : 2,                               // Repetir 2 veces
            "FuncionActualizar" : function(Valores) { },           // Función que se llama cada vez que se actualizan los valores
            "FuncionTerminado"  : function() { }                   // Función que se llama al terminar la animación
        });*/
 
     
    
var FuncionesTiempo = {
    Linear          : function(Tiempo) { return Tiempo;                                   },
    SinIn           : function(Tiempo) { return 1 - Math.cos(Tiempo * Math.PI / 2);       },
    SinOut          : function(Tiempo) { return Math.sin(Tiempo * Math.PI / 2);           },
    SinInOut        : function(Tiempo) { return -0.5 * (Math.cos(Math.PI * Tiempo) - 1);  },
    CubicInOut      : function(Tiempo) { 
        return (Tiempo < 0.5) ? 
            4.0 * Tiempo * Tiempo * Tiempo : 
            0.5 * Math.pow(2.0 * Tiempo - 2.0, 3.0) + 1.0; 
    },
    CircularInOut   : function(Tiempo) {
        return (Tiempo < 0.5) ?
            0.5 * (1.0 - Math.sqrt(1.0 - 4.0 * Tiempo * Tiempo)) :
            0.5 * (Math.sqrt((3.0 - 2.0 * Tiempo) * (2.0 * Tiempo - 1.0)) + 1.0);
    }
};
    
    
var ObjetoAnimacion = function() {
    // Array de animaciones
    this.Animaciones = [];
    this.EnPausa = false;
    this.Tick = 0;
    // Actualiza las animaciones
    this.Actualizar = function(nTick) {
        if (this.EnPausa === true) { return; }
//        var Tick;
        if (typeof(nTick) === 'undefined') { this.Tick = Date.now(); }
        else                               { this.Tick = nTick;}
        for (var i = this.Animaciones.length - 1; i > -1; i--) {
            if (this.Animaciones[i].Actualizar(this.Tick) === true) { // Si ha terminado, elimino la animación del array de animaciones pendientes
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
        this.Tick = Date.now();
        // Actualizo el ultimo tick de todas las animaciones para que no pase nada de tiempo desde que se ha pausado
        for (var i = this.Animaciones.length - 1; i > -1; i--) {
            this.Animaciones[i]._UltimoTick = this.Tick - 1;
        }
        this.EnPausa = false;
    };
        
    // Termina y elimina todas las animaciones en curso
    this.Limpiar = function() {
        for (var i = this.Animaciones.length - 1; i > -1; i--) {
            this.Animaciones[i].Terminar();
        }
        this.Animaciones = [];
    };

    this.CrearAnimacion = function(Pasos, Opciones) {
        return new ObjetoAnimacion_Animacion(Pasos, Opciones, this, false);;
    };    
    
    // NOTA las transiciones y las repeticiones no se llevan muy bien...
    // no se puede utilizar la opción Invertir
    this.CrearTransicion = function(Pasos, Opciones) {
        return new ObjetoAnimacion_Animacion(Pasos, Opciones, this, true);;
    };    

};


// Función que contiene los datos de una animación
var ObjetoAnimacion_Animacion = function(ArrayPasos, Opciones, Padre, nTransicion) {
//        this._Invertido          = false;        // Invertir animación
    this._Padre              = Padre;        // ObjetoAnimacion padre
    this._UltimoTick         = 0;            // Ultimo date.now que se ha obtenido con la función Actualizar
    this._Pasos              = ArrayPasos;   // Array con los parámetros
    this._PosPasos           = 1;            // Posición dentro del array de datos
    this._PasoOrig           = this._Pasos[this._PosPasos - 1]; 
    this._PasoDest           = this._Pasos[this._PosPasos];
    this._Avance             = 0;            // Avance puede ser de 0 a 1
    this._Invertido          = nTransicion;  // Invertir animación (para las transiciones empieza en true)
    this._Terminado          = false;        // Animación terminada
    this._Retraso            = this._PasoDest.Retraso;
    this._Opciones           = { Repetir : 0, Invertir : false, FuncionActualizar : function(Valores) { }, FuncionTerminado : function() { } };
    if (typeof (Opciones) !== 'undefined') { 
        if (typeof Opciones.Repetir !== "undefined")           { this._Opciones.Repetir = Opciones.Repetir;                     }
        if (typeof Opciones.Invertir !== "undefined")          { this._Opciones.Invertir = Opciones.Invertir;                   }
        if (typeof Opciones.FuncionActualizar !== "undefined") { this._Opciones.FuncionActualizar = Opciones.FuncionActualizar; }
        if (typeof Opciones.FuncionTerminado !== "undefined")  { this._Opciones.FuncionTerminado = Opciones.FuncionTerminado;   }
    }
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
    
    this.Iniciar = function() {
        var AniCreada = false;
        // Agrego la animacion al array de animaciones del padre (si no existe)
        for (var i = 0; i < this._Padre.Animaciones.length; i++) {
            if (this._Padre.Animaciones[i] === this) {
                AniCreada = true;
                break;
            }
        }        
        if (AniCreada === false) { // No se está animando
            this._Padre.Animaciones.push(this);
            this._PosPasos = 1;
            this._PasoOrig           = this._Pasos[this._PosPasos - 1]; 
            this._PasoDest           = this._Pasos[this._PosPasos];
            this._Retraso            = this._PasoDest.Retraso;
        }        
        this._Terminado = false;
    };
    
    
    // Inicia la transición (de principio a fin, o del final al principio
    this.Transicion = function() {
        this._Invertido = !this._Invertido;
        
//        console.log(this._PasoOrig, this._PasoDest);
        
        var AniCreada = false;
        // Agrego la animacion al array de animaciones del padre (si no existe)
        for (var i = 0; i < this._Padre.Animaciones.length; i++) {
            if (this._Padre.Animaciones[i] === this) {
                AniCreada = true;
                break;
            }
        }
        if (AniCreada === false) { // No se está animando
            this._Padre.Animaciones.push(this);
            if (this._Invertido === false) {
                // Si está en el paso final, asigno el paso actual al primer paso
                this._PosPasos = 1;
                this._PasoOrig           = this._Pasos[this._PosPasos - 1]; 
                this._PasoDest           = this._Pasos[this._PosPasos];
                this._Retraso            = this._PasoDest.Retraso;
            }
            else {
    //            this._Avance = 1;            
                // Si está en el paso inicial, asigno el paso actual al ultimo paso
                this._PosPasos = this._Pasos.length - 1;
                this._PasoOrig           = this._Pasos[this._PosPasos]; 
                this._PasoDest           = this._Pasos[this._PosPasos - 1];
                this._Retraso            = this._PasoOrig.Retraso;
            }
            this._Avance = 0;
            this._UltimoTick = 0;
        }
        else { // Animación en curso
            var PasoD = this._PasoDest;
            var PasoO = this._PasoOrig;
            this._PasoDest = PasoO;
            this._PasoOrig = PasoD;
/*            this.Cancelar();*/
            var Avance = Math.abs(this._Avance - 1);
            this._Avance = Avance;
            var FuncionTiempo = this._PasoDest.FuncionTiempo(this._Avance);            
            for (var Indice in this._PasoOrig.Paso) {                    
                this[Indice] = PasoO[Indice] - (PasoO[Indice] - PasoD[Indice]) * FuncionTiempo;
            }
            
        }
        
        this._Terminado = false;
        
    };

    // Función que termina la animación y la deja tal y como está
    this.Cancelar = function() {
//        console.log("ObjetoAnimacion.Cancelar");
        this._Opciones.FuncionTerminado();
        this.Terminado = true;                        
    };

    // Función que termina la animación y deja los valores en su estado final
    this.Terminar = function() {
//        console.log("ObjetoAnimacion.Terminar");
        this._Opciones.FuncionTerminado();
        this._Terminado = true;            
        for (var Indice in this._Pasos[this._Pasos.length - 1].Paso) {                    
            this[Indice] = this._Pasos[this._Pasos.length - 1].Paso[Indice];
        }                        
        this._Opciones.FuncionActualizar(this);
    };

    this.Actualizar = function(t) {
        if (this._Terminado === true) { return true; }
        var Ret = 0;
        if (this._UltimoTick !== 0) {
            (this._Invertido === false) ? Ret = this.ActualizarNormal(t) : Ret = this.ActualizarInvertido(t);
        }
        this._UltimoTick = t;
        return Ret;
    };

    // Actualiza la animación
    this.ActualizarNormal = function(t) {
            // Tiempo desde el ultimo frame a este frame
        var TiempoFrame = t - this._UltimoTick;
        // Aplico el retraso si existe
        if (this._Retraso > 0) {
            this._Retraso = this._Retraso - TiempoFrame; 
        }
        // Avance de la animación
        else {
            // Sumo o resto el avance de la animación
            this._Avance += (TiempoFrame / this._PasoDest.Tiempo);
            var FuncionTiempo = this._PasoDest.FuncionTiempo(this._Avance);
            // Paso por completar
            if (this._Avance < 1 && this._Avance > -1) {
                for (var Indice in this._PasoDest.Paso) {                    
                    this[Indice] = this._PasoOrig.Paso[Indice] - (this._PasoOrig.Paso[Indice] - this._PasoDest.Paso[Indice]) * FuncionTiempo;
                }
                this._Opciones.FuncionActualizar(this);
            }
            // Paso completado
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
                    this._Retraso = this._PasoDest.Retraso;                    
                    this._Avance = 0;
                }
                // No hay mas pasos
                else {
                    if (this._Opciones.Invertir === false) {
                        if (this._Opciones.Repetir === 0) {
                            this._Opciones.FuncionTerminado();
                            this._Terminado = true;
                        }
                        else {
                            this._Opciones.Repetir --;
                            this._PosPasos = 1;
                            this._PasoOrig = this._Pasos[this._PosPasos - 1]; 
                            this._PasoDest = this._Pasos[this._PosPasos];                                
                            this._Retraso = this._PasoDest.Retraso;                    
                            this._Avance = 0;
                        }
                    }
                    else {
                        this._PosPasos = this._Pasos.length - 1;
                        this._PasoOrig = this._Pasos[this._PosPasos]; 
                        this._PasoDest = this._Pasos[this._PosPasos - 1];                                
                        this._Retraso = this._PasoOrig.Retraso;                    
                        this._Avance = 0;
                        this._Invertido = true;
                    }
                }
            }
        }                
        return this._Terminado;
    };
    
    // Actualiza la animación a la inversa
    this.ActualizarInvertido = function(t) {
//        console.log("ActualizarInvertido");
        // Tiempo desde el ultimo frame a este frame
        var TiempoFrame = t - this._UltimoTick;
        // Sumo o resto el avance de la animación
        this._Avance += (TiempoFrame / this._PasoOrig.Tiempo);
        var FuncionTiempo = this._PasoDest.FuncionTiempo(this._Avance);
        // Paso por completar
        if (this._Avance < 1 && this._Avance > -1) {
            for (var Indice in this._PasoDest.Paso) {                    
                this[Indice] = this._PasoOrig.Paso[Indice] - (this._PasoOrig.Paso[Indice] - this._PasoDest.Paso[Indice]) * FuncionTiempo;
            }
            this._Opciones.FuncionActualizar(this);
        }
        // Paso completado
        else {
            // Aplico el retraso si existe
            if (this._Retraso > 0) {
                this._Retraso = this._Retraso - TiempoFrame; 
            }
            // Siguiente paso
            else {
                // Valores finales de este paso
                for (var Indice in this._PasoDest.Paso) {                    
                    this[Indice] = this._PasoDest.Paso[Indice];
                }    
                this._Opciones.FuncionActualizar(this);
                // Avanzo al siguiente paso
                this._PosPasos --;
                if (this._PosPasos > 0) {
                    this._PasoOrig = this._Pasos[this._PosPasos];
                    this._PasoDest = this._Pasos[this._PosPasos - 1];
                    this._Retraso = this._PasoOrig.Retraso;                    
                    this._Avance = 0;
                }
                // No hay mas pasos
                else {
                    if (this._Opciones.Invertir === true) {
                        this._Invertido = false;
                    }
                    // No hay mas repeticiones
                    if (this._Opciones.Repetir === 0) {
                        this._Opciones.FuncionTerminado();
                        this._Terminado = true;
                    }
                    else {
                        this._Opciones.Repetir --;
                        this._PosPasos = 1;
                        this._PasoOrig = this._Pasos[this._PosPasos - 1]; 
                        this._PasoDest = this._Pasos[this._PosPasos];                                
                        this._Avance = 0;
                        this._Retraso = this._PasoOrig.Retraso;                                            
                    }
                }
            }
        }
                
        this._UltimoTick = t;
        return this._Terminado;
    };    
};