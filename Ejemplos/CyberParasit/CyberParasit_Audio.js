/* Three.js CyberParasit creado por Josep Antoni Bover Comas el 08/08/2017 para devildrey33.es
        Ultima modificación el 27/08/2017  */

"use strict";

var CyberParasit_Audio = function() {
    this.DatosAnalizador    = [];
    this.DatosAnalizadorSin = [];
    
    this.Iniciar = function(Padre) {
        this.CancionCargada = true;
        var Compatibilidad = window.AudioContext || window.webkitAudioContext;
        this.AudioContext = new Compatibilidad();        
        this.Analizador = this.AudioContext.createAnalyser();
        this.Analizador.fftSize = 1024;
        this.Analizador.smoothingTimeConstant = 0.8; // 
        this.Padre = Padre;        
        this.TamDatos = this.Analizador.fftSize / 2;
        this.DatosAnalizador = new Uint8Array(this.TamDatos);
        this.DatosAnalizadorSin = new Uint8Array(this.TamDatos);                        
        this.CargarCancion();        
    };
    

    this.CargarCancion = function() {        
        this.Padre.Cargando(true);
        this.CancionCargada = false;
        this.Cancion = new Audio();
        this.Cancion.controls = true;
        this.Cancion.crossOrigin = "anonymous";
        this.Cancion.src = "/Ejemplos/BannerTest/Canciones/LevenRain_-_ActionMan_Versus_The_CyberParasites.mp3";
        this.Cancion.addEventListener('canplay', this.CanPlay.bind(this));        
        this.Cancion.addEventListener('ended', function() { 
            this.Padre.Audio_EventoTerminado();
        }.bind(this) );        
    };    
    
    
    this.CanPlay = function() {
        if (this.CancionCargada !== true) {
            this.CancionCargada = true;
            this.AudioSource = this.AudioContext.createMediaElementSource(this.Cancion);
            this.AudioSource.connect(this.Analizador);
            this.Analizador.connect(this.AudioContext.destination);
            this.Padre.Audio_EventoCanPlay();
            this.Padre.Cargando(false);
        }        
    };
    
    // Devuelve true si se ha hecho play, false si se ha hecho pausa
    this.PlayPausa = function() {
       if (this.Cancion.duration > 0 && !this.Cancion.paused) {
           this.Cancion.pause(); 
           return false;
       } 
       else { 
           this.Cancion.play();
           return true;
       } 
    };
    
    this.MediaFrequenciasAudio = function() {
        // Obtengo los bufers con la frequencia y la onda
        this.Analizador.getByteFrequencyData(this.DatosAnalizador);
        this.Analizador.getByteTimeDomainData(this.DatosAnalizadorSin);        
        
        // Graves  de 0hz    a 256hz
        // Medios  de 257hz  a 2000hz
        // Agudos  de 2001hz a 16000hz
        var HzPorBarra = this.AudioContext.sampleRate / this.Analizador.fftSize;
        var Divisiones = [ 256, 2000, 16000, 50000 ];
        var Total      = [ 0, 0, 0, 0, 0 ];// Graves, Medios, Agudos, Agudos inaudibles, Media de todo
        var Valores    = [ 0, 0, 0, 0, 0 ];// Graves, Medios, Agudos, Agudos inaudibles, Media de todo
        var Pos        = 0;        
        var TotalFreq = this.TamDatos;
        for (var i = 0; i < TotalFreq; i++) {
            if (i * HzPorBarra > Divisiones[Pos]) {
                Pos++;
            }
            Total[Pos] ++;
            Valores[Pos] += this.DatosAnalizador[i];
        }
        
        return [ Valores[0] / Total[0], Valores[1] / Total[1], Valores[2] / Total[2], Valores[3] / Total[3], (Valores[0] + Valores[1] + Valores[2] + Valores[3]) / TotalFreq ];
    };
};