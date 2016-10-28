/*
    Test para el canvas del error 404 de devildrey33.es creado por Josep Antoni Bover Comas el 12-07-2016
    Idea original : http://es.gizmodo.com/la-mejor-pagina-de-error-404-te-deja-jugar-a-space-inva-510812213
        Vista por defecto en el Laboratorio de pruebas  
		devildrey33_Lab->Opciones->Vista = Columnas;

        Ultima modificación el 27/10/2016
*/
"use strict";  

/* Plantilla para crear banners animados en devildrey33.es */
var ObjetoCanvas_Depurar = false; // Si es true, no se parará la animación al perder el foco del teclado

// Constructor SIN TIPO, el tipo se especifica según la animación
var SpaceInvaders404 = function() {
    // Se ha creado el canvas, inicio los valores de la animación ... 
    this.PngEnemigos      = new Image(); // NOTES\devildrey33.es\SpaceInvaders Error404\SpaceInvaders404-60x30.png
    this.PngEnemigos.src  = "data:image/png;base64,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";
    // Creo la estructura con los datos del tanque del jugador
    this.Tanque = new this.JugadorTanque(this);

    // Llamo al constructor del ObjetoBanner
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : '2d',
        'Ancho'         : 500,
        'Alto'          : 500,
        'Entorno'       : 'Normal',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body
    }) === false) { return false; }
    
    this.Iniciar();
    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};

SpaceInvaders404.prototype = Object.assign( Object.create(ObjetoCanvas.prototype), {
    constructor        : SpaceInvaders404, 
    
    Buffer404          : null,
    Mouse              : { X : 0, Y : 0 },
    BloquearControles  : true, // Si es false, la estructura mouse recibira las coordenadas del ratón, si es true la estrucutra mouse no se actualizará y podrá ser utilizada para una animación
    // Imagen que contiene 3 tipos de enemigos con 2 caras, y el ovni
                             /* Espacio     /\           A            D           <-          ->         */
    Teclas             : { 32 : false, 38 : false,  65 : false,  68 : false, 37 : false, 39 : false },
    Estado             : 0,    // Estado del juego (0 inicio, 1 juego, 2 muerto, 3 terminado)
    ActualizarEstado   : function () { }, // Función de pintado para el estado actual
    Disparos           : [],   // Array de disparos 
    Enemigos           : [],   // Array de enemigos
    Explosiones        : [],   // Array de explosiones
    Textos             : [],   // Array de textos;
    OleadaEnemigos     : 1,
    Oleada             : null,
    Puntos             : 0,
    
    Animacion          : new ObjetoAnimacion,
    
    Opciones           : { 
//        HUD     : false,                // Ayuda visual con las barras de la X, Y del mouse, y el ángulo de disparo
        Debug        : true,            // Mostrar informacion de depuración
        Invulnerable : false,            // Jugador invulnerable
        Tanque  : {                     // Opciones para el tanque
            DisparosPorSegundo    : 3,  // Disparos por segundo actuales
            MaxDisparosPorSegundo : 8,  // Máximo de disparos por segundo
            DisparosVelocidad     : 10, // Velocidad de desplazamiento de los disparos
            MaxVelocidad          : 5,  // Máximo de velocidad del tanque al moverse de derecha a izquierda
            Ancho                 : 30, // Ancho del tanque
            AltoBase              : 10, // Alto de la base del tanque
            AltoTorreta           : 16  // Alto de la torreta del tanque
        },
        Enemigo : {
            MaxDisparosPorSegundo : 3,      // Máximo de disparos por segundo (de todos los enemigos)
            DisparosVelocidad     : 5,      // Velocidad de desplazamiento de los disparos
            VelocidadX            : 1,      // Velocidad del enemigo al moverse de derecha a izquierda
            VelocidadY            : 4,      // Velocidad del enemigo al moverse hacia abajo
            MaxAnimacion          : 333,    // Tiempo que tarda en alternar la cara del space invader
            AnimacionMS           : 0,      // Tiempo actual de la animación
            AnimacionCara         : false,  // Cada enemigo tiene 2 imagenes (false/true)
            AniDerecha            : true,   // Los enemigos van hacia la derecha
            EspacioAlto           : 30      // Espacio de alto que hay entre 2 enemigos
        }
    },

        
    Iniciar : function() {        
        
        if (this.Opciones.Debug === true) {
            $("#SpaceInvaders404_Debug").attr({ "visible" : true });
        }
        // Creo la estructura con los datos del tanque del jugador
        this.Tanque = new this.JugadorTanque(this);

        // Actualizo la URL para el texto de error
        document.getElementById("SpaceInvaders404_URLError404").innerHTML = window.location.href;

        this.CrearError404();

        // Enlazar eventos
/*        window.addEventListener('keydown', this.EventoTeclaPresionada.bind(this));
        window.addEventListener('keyup', this.EventoTeclaSoltada.bind(this));
        window.addEventListener('mousemove', this.EventoMouseMove.bind(this));
        window.addEventListener('mousedown', this.EventoMouseDown.bind(this));
        window.addEventListener('mouseup', this.EventoMouseUp.bind(this));*/
        // Asigno el foco del teclado a esta ventana 
        window.focus();
        // Info 1
        $("#SpaceInvaders404_Instrucciones_Intro > button").off("click").on("click", this.AsignarEstado.bind(this, 1));
        // Info 2
        $("#SpaceInvaders404_Instrucciones_Intro2 > button").off("click").on("click", this.AsignarEstado.bind(this, 2)); 
        // Info 3
        $("#SpaceInvaders404_Instrucciones_Intro3 > button").off("click").on("click", this.AsignarEstado.bind(this, 3)); 

        // Boton reiniciar al terminar el juego
        $("#SpaceInvaders404_Instrucciones_JuegoTerminado > button").off("click").on("click", this.Reiniciar.bind(this)); 
        // Boton terminar de los records
        $("#SpaceInvaders404_Instrucciones_NuevoRecord > button").off("click").on("click", this.AsignarEstado.bind(this, 4)); 

        this.AsignarEstado(0);

        // Actualizo la escena
//        this.Actualizar();            
    },
    
    Reiniciar : function() {
        this.Disparos           = [],   // Array de disparos 
        this.Enemigos           = [],   // Array de enemigos
        this.Explosiones        = [],   // Array de explosiones
        this.Textos             = [],   // Array de textos;
        this.OleadaEnemigos     = 1,
        this.Oleada             = null,
        this.Puntos             = 0,
        // Creo la estructura con los datos del tanque del jugador
        this.Tanque = new this.JugadorTanque(this);
        for (var i = 1; i < 4; i++) {
            $("#SpaceInvaders404_Info > span:nth-child(" + i + ")").css({ "opacity" : 1 });
        }
        
        this.CrearError404();
        this.AsignarEstado(3);
    },
    // Función que crea un buffer con el texto 'error 404'
    CrearError404 : function() {
        // Creo un canvas que utilizare de back buffer para almacenar la imagen del 404, y asi poder almacenar los pixeles destruidos.
        this.Buffer404 = new BufferCanvas(this.Ancho, this.Alto);
        this.Buffer404.Context.font = "160px monospace";
        this.Buffer404.Context.fillStyle = "rgb(234, 80, 78)";
        this.Buffer404.Context.fillText("ERROR", (this.Ancho - this.Buffer404.Context.measureText("ERROR").width) / 2, 240); // La w suele tener un ancho aproximado a la altura del texto....
        this.Buffer404.Context.font = "260px monospace";
        this.Buffer404.Context.fillStyle = "rgb(234, 80, 78)";
        this.Buffer404.Context.fillText("404", (this.Ancho - this.Buffer404.Context.measureText("404").width) / 2, 440); // La w suele tener un ancho aproximado a la altura del texto....
        this.Buffer404.Context.strokeStyle = "rgba(41,39,44, 1)";
        // Con esta operación hacemos un clear encima del buffer 404 en el que todo lo que se pinta, borra el buffer con color transparente.
        this.Buffer404.Context.globalCompositeOperation = 'destination-out';
    },

    TipoEnemigo : { // imgs de 60x30
        0 : { Ancho : 33, Alto : 24, X1 : 0,   X2 : 60 },
        1 : { Ancho : 24, Alto : 24, X1 : 120, X2 : 180 },
        2 : { Ancho : 36, Alto : 24, X1 : 240, X2 : 300 },
        3 : { Ancho : 48, Alto : 21, X1 : 360 } // ovni
    },

    // Estructura para los datos de un enemigo
    Enemigo : function(X, Y, Tipo, PosLinea, Linea) {
        this.X                  = X;
        this.Y                  = Y; 
        this.Tipo               = Tipo;
        this.DisparosPorSegundo = 0;
        this.Linea              = Linea;
        this.PosLinea           = PosLinea;
    },  
        
    SiguienteOleadaEnemigos : function() {
        if (this.Oleada === null) {
           this.Oleada = this.CrearTexto("Centrado", 40, "40px monospace", "Oleada " + this.OleadaEnemigos++, 2000, this.CrearEnemigos.bind(this));
        }
    },
    
    CrearEnemigos : function() {
        this.Opciones.Enemigo.VelocidadX += 0.3;
        this.Opciones.Enemigo.VelocidadY += 0.2;
//        for (var y = 2; y > -1; y--) {
        for (var y = 0; y < 3; y++) {
            for (var x = 0; x < 8; x++) {
                var Centro = 10 + Math.floor((40 - this.TipoEnemigo[y].Ancho) / 2);
                this.Enemigos.push(new this.Enemigo(Centro + (x * 40), this.Opciones.Enemigo.EspacioAlto * (y +1), y, x, y));
            }
        }
        this.Oleada = null;
    },
            
    // Estructura para los datos del tanque del jugador
    JugadorTanque : function (Padre) {        
        this.X        = (Padre.Ancho - Padre.Opciones.Tanque.Ancho) / 2,
        this.Y        = Padre.Alto - 20;
        this.Angulo   = 90; // Ángulo de disparoqa
        this.Vel      = 0;  // Velocidad actual de desplazamiento
        this.MuertoMS = 0;  // variable para la invulnerabilidad despues de morir
        this.Vidas    = 4;  // Vidas
    },
       
    // Estructura para un disparo
    // Angulo 0 a 180 es hacia arriba (jugador) y de 180 a 360 es hacia abajo (enemigos)
    Disparo : function(X, Y, Angulo, Velocidad, Tipo) {
        this.X          = X;         // x inicial
        this.Y          = Y;         // y inicial
        this.Angulo     = Angulo;    // ángulo de avance
        this.Distancia  = 1;         // distancia a recorrer desde las coordenadas x,y iniciales
        this.Velocidad  = Velocidad; // Velocidad del disparo
        this.Tipo       = Tipo;      // Tipo de disparo (perforante, explosivo)
    },
    
    
    // Actualiza la posición del vehiculo 
    Teclado : function() {
        if (this.Opciones.Tanque.DisparosPorSegundo < this.Opciones.Tanque.MaxDisparosPorSegundo) {
            this.Opciones.Tanque.DisparosPorSegundo += this.Opciones.Tanque.MaxDisparosPorSegundo / 60;
        }
        // Barra que muestra el poder de disparo
        var Porcentaje = (100 / this.Opciones.Tanque.MaxDisparosPorSegundo) * this.Opciones.Tanque.DisparosPorSegundo;
        document.getElementById("Disparos_Valor").style.width = Porcentaje + "px";
        
        if (this.Tanque.MuertoMS === 0) {
            if (this.Teclas[65] === true || this.Teclas[37] === true) { 
                if (this.Tanque.Vel > -this.Opciones.Tanque.MaxVelocidad)  { this.Tanque.Vel -= 0.5; }
                if (this.Tanque.X > 0) { this.Tanque.X += this.Tanque.Vel; }
                else { this.Tanque.X = 0; }            
            } // A, <-
            else if (this.Teclas[68] === true || this.Teclas[39] === true) {  
                if (this.Tanque.Vel < this.Opciones.Tanque.MaxVelocidad)  { this.Tanque.Vel += 0.5; }
                if (this.Tanque.X < this.Ancho - this.Opciones.Tanque.Ancho) { this.Tanque.X += this.Tanque.Vel; }
                else { this.Tanque.X = this.Ancho - this.Opciones.Tanque.Ancho; }
            } // D, ->     
            // Al mover el tanque hay que recalcular el ángulo de disparo del tanque
            if (this.Teclas[65] === true || this.Teclas[37] === true || this.Teclas[68] === true || this.Teclas[39] === true) { 
                this.CalcularAnguloDisparoTanque();
            }

            // spc, cursor arriba (tambien se dispara con el mouse pero se simula una pulsación de la tecla espacio : 'this.Teclas[32] = true/false')
            if (this.Teclas[32] === true || this.Teclas[38] === true) {
                if (this.Opciones.Tanque.DisparosPorSegundo > 0) {
                    this.Disparos.push(new this.Disparo(this.Tanque.X + (this.Opciones.Tanque.Ancho / 2), this.Tanque.Y - 12, this.Tanque.Angulo, this.Opciones.Tanque.DisparosVelocidad));
                    this.Opciones.Tanque.DisparosPorSegundo --;
                }
            }        
        }
    },
    

    /* El problema es que solo miro el pixel del final donde ha avanzado el disparo, y no todo su recorrido... 
     *  Es decir si por ejemplo el disparo está en X = 250, y = 0 avanza 10 pixeles en un ánguilo de 90º (hacia arriba) la colisión ignora los pixeles del 0 al 9 de la Y, y solo mira el [250, 10].     * */
    /* Hace avanzar los disparos en su dirección, y detecta las colisiones*/
    ColisionesDisparos : function() {
        var Pixel = null;
//        var Fondo = HexToRgb("#EA504E");
        this.Context.strokeStyle = "#FFFFFF";
        for (var i = this.Disparos.length - 1; i > -1; i--) {
            var s = Math.sin(this.Disparos[i].Angulo * (Math.PI / 180));
            var c = Math.cos(this.Disparos[i].Angulo * (Math.PI / 180));
            // Avanzo los disparos
            this.Disparos[i].Distancia += this.Disparos[i].Velocidad / 3;
            var ux = this.Disparos[i].X - (this.Disparos[i].Distancia * c);
            var uy = this.Disparos[i].Y - (this.Disparos[i].Distancia * s);
            this.Disparos[i].Distancia += (this.Disparos[i].Velocidad / 3) *2;
            var x = this.Disparos[i].X - (this.Disparos[i].Distancia  * c);
            var y = this.Disparos[i].Y - (this.Disparos[i].Distancia * s);
            Pixel = this.Context.getImageData(Math.floor(x), Math.floor(y), 1, 1);

            // Pinto el disparo en el buffer del 404
/*            this.Context.lineWidth = 2;
            this.Buffer404.Context.lineWidth = 2;*/
            this.Buffer404.Context.beginPath();
            this.Buffer404.Context.moveTo(this.Disparos[i].X, this.Disparos[i].Y);
            this.Buffer404.Context.lineTo(Math.floor(x), Math.floor(y));                
            this.Buffer404.Context.stroke();               
            // Colision
            if (Pixel.data[0] === 234 && Pixel.data[1] === 80 && Pixel.data[2] === 78) { 
//                var RectaDisparo = { X : ((ux > x) ? ux : x), Y : ((ux > x) ? ux : x), Ancho : 1 + Math.abs(x - ux), Alto : 1 + Math.abs(y - uy)};
//                console.log(this.Enemigos[this.Enemigos.length - 1].Y);
//                if (this.Enemigos.length > 0) {
 //                   if (y - this.Opciones.Tanque.DisparosVelocidad <= this.Enemigos[this.Enemigos.length - 1].Y) {
                        // Busco si ha impactado en un aenemigo
                for (var e = this.Enemigos.length - 1; e > - 1; e--) {
    //                        var RectaEnemigo = { X : this.Enemigos[e].X, Y : this.Enemigos[e].Y, Ancho : this.TipoEnemigo[this.Enemigos[e].Tipo].Ancho, Alto : this.TipoEnemigo[this.Enemigos[e].Tipo].Alto };
    //                        if (this.RectaEnRecta(RectaEnemigo, RectaDisparo) === true) {
                    if (this.Enemigos[e].X < x && this.Enemigos[e].X + this.TipoEnemigo[this.Enemigos[e].Tipo].Ancho > x &&
                        this.Enemigos[e].Y < y && this.Enemigos[e].Y + this.TipoEnemigo[this.Enemigos[e].Tipo].Alto > y) {
                        this.CrearExplosion(x, y, 20);
                        this.Puntos += 10;
                        this.CrearTexto(x + 20, y, "12px monospace", "10", 750);
                        $("#Puntuacion").html("Puntuación : " + this.Puntos);
                        // Elimino el enemigo, ademas este es el sitio ideal para empezar una animación de explosión
                        this.Enemigos.splice(e, 1);  
                    }
   //                     }
     //               }
                }
                // Busco si ha impactado en el jugador
                if (this.Tanque.MuertoMS === 0) {
                    if (this.Tanque.X < x && this.Tanque.X + this.Opciones.Tanque.Ancho > x && this.Tanque.Y < y && this.Tanque.Y + this.Opciones.Tanque.AltoTorreta > y) {
                        this.MatarTanque();
                    }                
                }
                this.Disparos.splice(i, 1);                                
            }
            // No hay colisión
            else {
                // Compruebo si se ha salido el disparo de la pantalla para eliminarlo
                if (x < 0 || x > this.Ancho || y < 0 || y > this.Alto) {
                    this.Disparos.splice(i, 1);
                }
                else {
                    // Pinto el disparo            
                    this.Context.beginPath();
                    this.Context.moveTo(ux, uy);
                    this.Context.lineTo(x, y);                
                    this.Context.stroke();
                }
            }
        }        
    },  
    
    MatarTanque : function() { 
        if (this.Opciones.Invulnerable === true) {
            console.log("BUM");            
        }
        else {
            this.CrearExplosion(this.Tanque.X + this.Opciones.Tanque.Ancho / 2, this.Tanque.Y + this.Opciones.Tanque.AltoTorreta / 2, 40);
            this.Tanque.Vidas --;
            $("#SpaceInvaders404_Info > span:nth-child(" + this.Tanque.Vidas + ")").css({ "opacity" : 0 });
            if (this.Tanque.Vidas > 0) {
                this.Tanque.MuertoMS = this.Tick + 2000;
            }
            else {
                this.AsignarEstado(4);
            }
        }
    },
    

    PintarHUD : function() {
        // Pinto el HUD : 
        //  - una línea de izquerda a derecha con la posición X del mouse
        //  - una línea de arriba a abajo con la posición Y del mouse
        //  - línea desde el cañon del tanque a la posición x, y del mouse. 
        // Pinto el vehiculo del jugador
        this.Context.strokeStyle = "rgba(" + Math.floor(this.ColorHud.R) + "," + Math.floor(this.ColorHud.G) + "," + Math.floor(this.ColorHud.B) + "," + this.ColorHud.A + ")"; 
        // Eje X
        this.Context.beginPath();
        this.Context.moveTo(0, this.Mouse.Y);
        this.Context.lineTo(this.Ancho, this.Mouse.Y);
        this.Context.stroke();
        // Eje Y
        this.Context.beginPath();
        this.Context.moveTo(this.Mouse.X, 0);
        this.Context.lineTo(this.Mouse.X, this.Alto);
        this.Context.stroke();        

        this.Context.strokeStyle = "rgba(" + Math.floor(this.ColorHud.R) + "," + Math.floor(this.ColorHud.G) + "," + Math.floor(this.ColorHud.B) + ", 0.3)"; 
        // Ángulo de disparo
        var s = Math.sin(this.Tanque.Angulo * (Math.PI / 180));
        var c = Math.cos(this.Tanque.Angulo * (Math.PI / 180));
        this.Context.beginPath();
        this.Context.moveTo((this.Tanque.X + (this.Opciones.Tanque.Ancho / 2)) - c, (this.Tanque.Y - 12) - s);
        this.Context.lineTo(((this.Tanque.X + (this.Opciones.Tanque.Ancho / 2)) - (c * 1000)), ((this.Tanque.Y - 12) - (s * 1000)));                
        this.Context.stroke();
    },
    
    // Función que pinta el tanque y el HUD
    PintarTanque : function() {        
        if (this.Tanque.MuertoMS === 0) {
            this.Context.fillStyle = "rgba(" + Math.floor(this.ColorTanque.R) + "," + Math.floor(this.ColorTanque.G) + "," + Math.floor(this.ColorTanque.B) + "," + this.ColorTanque.A + ")"; 
            this.Context.fillRect(this.Tanque.X, this.Tanque.Y, this.Opciones.Tanque.Ancho, this.Opciones.Tanque.AltoBase);
            this.Context.fillRect(this.Tanque.X + this.Opciones.Tanque.Ancho / 3, this.Tanque.Y - 6, this.Opciones.Tanque.Ancho / 3, this.Opciones.Tanque.AltoTorreta);                
        }
        else {
            if (this.Tanque.MuertoMS < this.Tick) { this.Tanque.MuertoMS = 0; }; 
        }
    },

    CrearExplosion : function(X, Y, Rad) {
        var Explosion = this.Animacion.Crear([
            { "Paso" : { R : 255, G : 255, B :   0, A : 1, Radio : 1 }},
            { "Paso" : { R : 233, G :  80, B :  78, A : 0, Radio : 20 }, "Tiempo" : 250 },
        ]);
        Explosion.X = X; //this.Enemigos[e].X + (this.TipoEnemigo[this.Enemigos[e].Tipo].Ancho / 2);
        Explosion.Y = Y; //this.Enemigos[e].Y + (this.TipoEnemigo[this.Enemigos[e].Tipo].Alto / 2);
        this.Explosiones.push(Explosion);    
        // Pinto la explosion en el bufer 404
        this.Buffer404.Context.beginPath();
        this.Buffer404.Context.arc(X, Y, Rad, 0, Math.PI * 2);
        this.Buffer404.Context.fill();
        
        // Aqui s'ha de mirar una colisió entre l'explosió i el tank del jugador. (El tank del jugador no tira mai bales explosives, o no esta planejat...)
    }, 
    

    PintarExplosiones : function() {
        for (var i = this.Explosiones.length - 1; i > -1; i--) {
            if (this.Explosiones[i].Terminado === true) {
                this.Explosiones.splice(i, 1);
            }
            else {
                this.Context.strokeStyle = "rgba(" + Math.round(this.Explosiones[i].R) + "," + Math.round(this.Explosiones[i].G) + "," + Math.round(this.Explosiones[i].B) + "," + this.Explosiones[i].A + ")";
                this.Context.fillStyle = "rgba(" + Math.round(this.Explosiones[i].R) + "," + Math.round(this.Explosiones[i].G) + "," + Math.round(this.Explosiones[i].B) + "," + this.Explosiones[i].A + ")";
                this.Context.beginPath();
                this.Context.arc(this.Explosiones[i].X, this.Explosiones[i].Y, this.Explosiones[i].Radio, 0, 2 * Math.PI);
                this.Context.fill();
            }
        }
    },
    
    CrearTexto : function(nX, nY, nFuente, nTexto, nTiempo, nFuncionTerminado) { 
//        console.log(typeof(nFuncionTerminado));
        if (typeof(nFuncionTerminado) !== "function") { 
            nFuncionTerminado = function() {}; 
        }
        if (nX === "Centrado") {
            this.Context.font = nFuente;
            nX = (this.Ancho - this.Context.measureText(nTexto).width) / 2;
        }       
        var Texto = this.Animacion.Crear([
            { "Paso" : { Y : nY, A : 1 }},
            { "Paso" : { Y : nY - 15, A : 0 }, "Tiempo" : nTiempo, "Retraso" : 1 }
        ], { "FuncionTerminado" :  nFuncionTerminado });
        Texto.X = nX;
        Texto.Y = nY;
        Texto.Fuente = nFuente;
        Texto.Texto = nTexto;
        
        
        this.Textos.push(Texto);    
        return Texto;
    },

    PintarTextos : function() {
        for (var i = this.Textos.length - 1; i > -1; i--) {
            if (this.Textos[i].Terminado === true) {
                this.Textos.splice(i, 1);
            }
            else {
//                console.log(this.Textos[i].A, this.Textos[i].X, this.Textos[i].Y, this.Textos[i].Texto);
                this.Context.font = this.Textos[i].Fuente;                
                this.Context.fillStyle = "rgba(200, 200, 200, " + this.Textos[i].A + ")";
                this.Context.fillText(this.Textos[i].Texto, this.Textos[i].X, this.Textos[i].Y);
            }
        }        
    },

    PintarEnemigos : function() {
        if (this.Enemigos.length === 0) {
            this.SiguienteOleadaEnemigos();
            return;
        }
        if (this.Tanque.MuertoMS === 0 && this.Estado === 3) {
            // Animación de la cara 
            this.Opciones.Enemigo.AnimacionMS += 16;
            if (this.Opciones.Enemigo.AnimacionMS > this.Opciones.Enemigo.MaxAnimacion) { 
                this.Opciones.Enemigo.AnimacionMS = 0;
                this.Opciones.Enemigo.AnimacionCara = !this.Opciones.Enemigo.AnimacionCara;
            }
        }
        
        if (this.Enemigos.length === 0) { return; }
        // Guardo la posición del enemigo que está mas a la derecha
        var PosEnemigoDerecha = 0;
        var PosEnemigoIzquierda = this.Enemigos[0].X;
        for (var i = 0; i < this.Enemigos.length; i++) {
            if (this.Enemigos[i].X > PosEnemigoDerecha)   { PosEnemigoDerecha   = this.Enemigos[i].X; } 
            if (this.Enemigos[i].X < PosEnemigoIzquierda) { PosEnemigoIzquierda = this.Enemigos[i].X; } 
        }        

        // Compruebo si hay que alternar la dirección de los enemigos
        var AvanceY = 0;
        if (PosEnemigoIzquierda < 10)              { this.Opciones.Enemigo.AniDerecha = true;  AvanceY = this.Opciones.Enemigo.VelocidadY; }
        if (PosEnemigoDerecha > (this.Ancho - 50)) { this.Opciones.Enemigo.AniDerecha = false; AvanceY = this.Opciones.Enemigo.VelocidadY; }
                
        // Pinto los enemigos
        for (var i = 0; i < this.Enemigos.length; i++) {
            
            if (this.Tanque.MuertoMS === 0 && this.Estado === 3) {
                // Avance del enemigo
                this.Enemigos[i].X = (this.Opciones.Enemigo.AniDerecha === true) ? this.Enemigos[i].X + this.Opciones.Enemigo.VelocidadX : this.Enemigos[i].X - this.Opciones.Enemigo.VelocidadX;
                this.Enemigos[i].Y += AvanceY;
                // Sumo los nuevos disparos por segundo
                if (this.Enemigos[i].DisparosPorSegundo < this.Opciones.Enemigo.MaxDisparosPorSegundo) {
                    this.Enemigos[i].DisparosPorSegundo += this.Opciones.Enemigo.MaxDisparosPorSegundo / 60;
                }
                // Si quedan disparos por segundo
                if (this.Enemigos[i].DisparosPorSegundo > 0) {
                    this.Enemigos[i].DisparosPorSegundo --; 
    //                console.assert(i === 15);
                    if (this.BuscarEnemigo(this.Enemigos[i].Linea + 1, this.Enemigos[i].PosLinea) === null) {
    //                    console.log(i, this.Enemigos[i]);
                        var Angulo = Rand(2, -2) + (Math.atan2(this.Enemigos[i].Y - (this.Tanque.Y - 12), (this.Enemigos[i].X + (this.TipoEnemigo[this.Enemigos[i].Tipo].Ancho / 2)) - (this.Tanque.X + (this.Opciones.Tanque.Ancho / 2))) * 180 / Math.PI);
                        this.Disparos.push(new this.Disparo(Math.floor(this.Enemigos[i].X + (this.TipoEnemigo[this.Enemigos[i].Tipo].Ancho / 2)), Math.floor(this.Enemigos[i].Y + (this.TipoEnemigo[this.Enemigos[i].Tipo].Alto)) , Angulo, this.Opciones.Enemigo.DisparosVelocidad));
                    }
                }
            }
            // Alterno la cara del enemigo
            var x = (this.Opciones.Enemigo.AnimacionCara === false) ? this.TipoEnemigo[this.Enemigos[i].Tipo].X1 : this.TipoEnemigo[this.Enemigos[i].Tipo].X2;
            // Pinto el enemigo en la pantalla
            this.Context.drawImage(this.PngEnemigos,    x,                                              0,                                              // coordenadas source
                                                        this.TipoEnemigo[this.Enemigos[i].Tipo].Ancho, this.TipoEnemigo[this.Enemigos[i].Tipo].Alto,  // tam source
                                                        this.Enemigos[i].X,                             this.Enemigos[i].Y,                             // coordenadas dest
                                                        this.TipoEnemigo[this.Enemigos[i].Tipo].Ancho, this.TipoEnemigo[this.Enemigos[i].Tipo].Alto); // tam dest
            // Pinto el enemigo en el buffer del 404
            this.Buffer404.Context.drawImage(this.PngEnemigos,  x,                                              0,                                              // coordenadas source
                                                                this.TipoEnemigo[this.Enemigos[i].Tipo].Ancho, this.TipoEnemigo[this.Enemigos[i].Tipo].Alto,  // tam source
                                                                this.Enemigos[i].X,                             this.Enemigos[i].Y,                             // coordenadas dest
                                                                this.TipoEnemigo[this.Enemigos[i].Tipo].Ancho, this.TipoEnemigo[this.Enemigos[i].Tipo].Alto); // tam dest
            
        }        
    },
    
    // No se usa y no se si funciona...
    RectaEnRecta : function(r1, r2) {
        return !(r2.X > r1.X + r1.Ancho || r2.X + r2.Ancho < r1.X || r2.X > r1.Y + r1.Alto || r2.Y + r2.Alto < r1.Y);
    },

    BuscarEnemigo : function(Linea, PosLinea) {
        for (var i = this.Enemigos.length -1; i > -1; i--) {
            if (this.Enemigos[i].Linea === Linea && this.Enemigos[i].PosLinea === PosLinea) { 
                return this.Enemigos[i]; 
            }
        }
        return null;
    },

    CalcularAnguloDisparoTanque : function() {
        var Medio = { X : this.Tanque.X + (this.Opciones.Tanque.Ancho / 2),  Y : this.Tanque.Y - 12 };
        this.Tanque.Angulo = Math.atan2(Medio.Y - this.Mouse.Y, Medio.X - this.Mouse.X) * 180 / Math.PI;               
    },    
    
    // Intro (Info 1)
    EjecutarEstado : [
        function() { // Estado 0
            this.Context.drawImage(this.Buffer404.Canvas, 0 ,0);                                
        },
        function() { // Estado 1
            // Primera capa : tanque y el hud para el mouse que indica el ángulo de disparo.
            this.PintarTanque();

            if (this.ColorError404.Terminado === false) {
                this.Context.font = "160px monospace";
                this.Context.fillStyle = "rgb(" + Math.floor(this.ColorError404.R) + "," + Math.floor(this.ColorError404.G) + "," + Math.floor(this.ColorError404.B) + ")";
                this.Context.fillText("ERROR", (this.Ancho - this.Context.measureText("ERROR").width) / 2, 240); // La w suele tener un ancho aproximado a la altura del texto....
                this.Context.font = "260px monospace";
                this.Context.fillText("404", (this.Ancho - this.Context.measureText("404").width) / 2, 440); // La w suele tener un ancho aproximado a la altura del texto....
            }
            else {
                this.Context.drawImage(this.Buffer404.Canvas, 0 ,0);                                                    
            }
        }, 
        function() { // Estado 2
            // Compruebo las teclas presionadas
            this.Teclado();        

            this.PintarHUD();
            // Primera capa : tanque y el hud para el mouse que indica el ángulo de disparo.
            this.PintarTanque();

            // CanvasBuffer que contiene el texto 404 pintado
            this.Context.drawImage(this.Buffer404.Canvas, 0 ,0);                                    

            // Cuarta capa : disparos 
            // - compruebo las colisiones (contra el muro, los enemigos, y el jugador)
            this.ColisionesDisparos();            
        },
        function() { // Estado 3 (juego)
            // Compruebo las teclas presionadas
            this.Teclado();        

            this.PintarHUD();

            // Primera capa : tanque y el hud para el mouse que indica el ángulo de disparo.
            this.PintarTanque();

            // Segunda capa : CanvasBuffer que contiene el texto 404 pintado
            this.Context.drawImage(this.Buffer404.Canvas, 0 ,0);

            // Tercera capa : enemigos
            this.PintarEnemigos();

            // Cuarta capa : disparos 
            // - compruebo las colisiones (contra el muro, los enemigos, y el jugador)
            this.ColisionesDisparos();

            // Explosiones
            this.PintarExplosiones();

            // Textos
            this.PintarTextos();
            
        },
        function() { // Estado 4
            // Segunda capa : CanvasBuffer que contiene el texto 404 pintado
            this.Context.drawImage(this.Buffer404.Canvas, 0 ,0);

            // Tercera capa : enemigos
            this.PintarEnemigos();
            
            // Cuarta capa : disparos 
            // - compruebo las colisiones (contra el muro, los enemigos, y el jugador)
            this.ColisionesDisparos();
            
            // Explosiones
            this.PintarExplosiones();

            // Textos
            this.PintarTextos();            
        },
        function() { // Estado 5
            
        },
    ],
    
    Redimensionar   : function() {  this.Pintar();  },
    // Función que pinta cada frame de la animación
    Pintar : function() {        
        // Guardo el tiempo en ms de este frame (todas las funciones que requieran una marca de tiempo utilizaran este Date.now(), y de esta forma reducir los ciclos en cada frame)
        this.Tick = Date.now();
        // Borro el canvas
        this.Context.fillStyle = this.ColorFondo;
        this.Context.clearRect(0, 0, this.Ancho, this.Alto);
        
        this.Animacion.Actualizar(this.Tick);
        // Utilizo la función EjecutarEstado del estado actual
        this.ActualizarEstado();
        
        if (this.Opciones.Debug === true) {
            $("#SpaceInvaders404_Debug_TanqueX").html(this.Tanque.X);
            $("#SpaceInvaders404_Debug_MouseX").html(this.Mouse.X);
            $("#SpaceInvaders404_Debug_MouseY").html(this.Mouse.Y);    
            $("#SpaceInvaders404_Debug_Enemigos").html(this.Enemigos.length);    
            $("#SpaceInvaders404_Debug_Disparos").html(this.Disparos.length);    
            $("#SpaceInvaders404_Debug_Explosiones").html(this.Explosiones.length);    
            $("#SpaceInvaders404_Debug_Textos").html(this.Textos.length);    
            $("#SpaceInvaders404_Debug_Animaciones").html(this.Animacion.Animaciones.length);    
        }        
        
        // Temporizador para el siguiente frame
//        this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this)); 
    },
    
    ActualizarAniDisparoTanque : function(Valores) {
        this.BloquearControles = true;
        this.Tanque.X = Valores.X; 
        this.Mouse.X = Valores.XM; 
        this.Mouse.Y = Valores.YM; 
        this.CalcularAnguloDisparoTanque();        
        for (var d = 0; d < this.Opciones.Tanque.MaxDisparosPorSegundo; d++) {
            var Porcentaje = (100 / this.Opciones.Tanque.MaxDisparosPorSegundo) * this.Opciones.Tanque.DisparosPorSegundo;
            document.getElementById("Disparos_Valor").style.width = Porcentaje + "px";
            if (Valores.Disparo >= 1) {
                if (this.Opciones.Tanque.DisparosPorSegundo > 0) {
                    this.Disparos.push(new this.Disparo(this.Tanque.X + (this.Opciones.Tanque.Ancho / 2), this.Tanque.Y - 12, this.Tanque.Angulo, this.Opciones.Tanque.DisparosVelocidad));
                    this.Opciones.Tanque.DisparosPorSegundo --;
                }
            }            
        }
    },
    
    TerminarAniDisparoTanque : function() {  this.BloquearControles = false;  },

    
    AsignarEstado : function(nEstado) {
        this.Estado = nEstado;
        this.ActualizarEstado = this.EjecutarEstado[this.Estado];
        // Introducción
        if (nEstado === 0) {
            $("#SpaceInvaders404_Instrucciones_Intro").attr("visible", true);
            $("#SpaceInvaders404_Instrucciones_Intro2").attr("visible", false);    
            $("#SpaceInvaders404_Instrucciones_Intro3").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_NuevoRecord").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_Intro > button").focus();
        }       
        
        // Instrucciones (covertura, vidas y puntuación)
        if (nEstado === 1) {
            $("#SpaceInvaders404_Instrucciones_Intro").attr("visible", false);    
            $("#SpaceInvaders404_Instrucciones_Intro2").attr("visible", true);    
            $("#SpaceInvaders404_Instrucciones_Intro3").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_NuevoRecord").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_Intro2 > button").focus();
            // puntuación, vidas y energia de disparo visibles
            $("#SpaceInvaders404_Info").attr("visible", true);

            
            this.ColorError404 = this.Animacion.Crear([
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500, "Retraso" : 0},
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }, "Tiempo" : 500, "Retraso" : 250},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500, "Retraso" : 0},
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }, "Tiempo" : 500, "Retraso" : 250},
            ]);
            // Vuelvo a poner los colores del hud normales por si avanza de INFO antes de que termine la animación de color del HUD
            this.ColorTanque = this.Animacion.Crear([
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500, "Retraso" : 2500},
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }, "Tiempo" : 500, "Retraso" : 0},
            ]);                
        }
        
        // Instrucciones (movimiento y disparo)
        if (nEstado === 2) {
            $("#SpaceInvaders404_Info > span").css({ "opacity" : 1 });
            
            $("#SpaceInvaders404_Instrucciones_Intro").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro2").attr("visible", false);    
            $("#SpaceInvaders404_Instrucciones_Intro3").attr("visible", true);    
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_NuevoRecord").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_Intro3 > button").focus();
            this.ColorTanque.Terminar();
            this.ColorError404.Terminar();            

            this.ColorTanque = this.Animacion.Crear([ 
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }},
                { 'Paso' : { R :   0, G : 255, B :   0, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R :  34, G :  68, B :  34, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R :   0, G : 255, B :   0, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R :  34, G :  68, B :  34, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R :   0, G : 255, B :   0, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R :  34, G :  68, B :  34, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R : 234, G :  80, B :  78, A : 1 }, "Tiempo" : 500}
            ]);

            this.ColorHud = this.Animacion.Crear([
                { 'Paso' : { R : 240, G :  80, B :  78, A : 0.4 }},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500, "Retraso" : 4000},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 0 }, "Tiempo" : 500},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 0 }, "Tiempo" : 500},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 0 }, "Tiempo" : 500},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 1 }, "Tiempo" : 500},
                { 'Paso' : { R : 255, G : 255, B :   0, A : 0 }, "Tiempo" : 500},
                { 'Paso' : { R : 240, G :  80, B :  78, A : 0.4 }, "Tiempo" : 500}
            ]);        
    
            this.AniDisparoTanque = this.Animacion.Crear([
                { 'Paso' : { X : 235, XM : this.Mouse.X,  YM : this.Mouse.X,  Disparo : 0 }},
                { 'Paso' : { X : 157, XM : 202,           YM : 243,           Disparo : 0 }, Tiempo : 250, Retraso : 8000},
                { 'Paso' : { X : 157, XM : 202,           YM : 243,           Disparo : 1 }, Tiempo : 500},
                { 'Paso' : { X : 157, XM : 202,           YM : 243,           Disparo : 0 }, Tiempo : 500},
                { 'Paso' : { X : 157, XM : 202,           YM : 243,           Disparo : 1 }, Tiempo : 500},
                { 'Paso' : { X : 317, XM : 298,           YM : 237,           Disparo : 0 }, Tiempo : 500},
                { 'Paso' : { X : 317, XM : 298,           YM : 237,           Disparo : 1 }, Tiempo : 500},
                { 'Paso' : { X : 317, XM : 298,           YM : 237,           Disparo : 0 }, Tiempo : 500},
                { 'Paso' : { X : 317, XM : 298,           YM : 237,           Disparo : 1 }, Tiempo : 500},
                { 'Paso' : { X : 235, XM : 298,           YM : 237,           Disparo : 0 }, Tiempo : 500}
            ], { FuncionActualizar : this.ActualizarAniDisparoTanque.bind(this), FuncionTerminado : this.TerminarAniDisparoTanque.bind(this) });
        }        
        
        // Juego
        if (nEstado === 3) {
            $("#SpaceInvaders404_Instrucciones_Intro").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro2").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro3").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_NuevoRecord").attr("visible", false);                
            this.ColorTanque.Terminar();
            this.ColorError404.Terminar();            
            this.ColorHud.Terminar();
            this.AniDisparoTanque.Terminar();
            
            this.SiguienteOleadaEnemigos();
            
        }
        // Terminado con record
        if (nEstado === 4) {
            
            $("#SpaceInvaders404_Instrucciones_Intro").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro2").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro3").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado").attr("visible", true);                
            $("#SpaceInvaders404_Instrucciones_NuevoRecord").attr("visible", false);                
            
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado > button").focus();

        }
        // Terminado
        if (nEstado === 5) {
            
            $("#SpaceInvaders404_Instrucciones_Intro").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro2").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_Intro3").attr("visible", false);
            $("#SpaceInvaders404_Instrucciones_JuegoTerminado").attr("visible", false);                
            $("#SpaceInvaders404_Instrucciones_NuevoRecord").attr("visible", true);                
            
        }
        
        $("#SpaceInvaders404_Contenedor").attr({ "Estado" : this.Estado });
    },
    
    TeclaPresionada : function(Evento) {
        this.Teclas[Evento.keyCode] = true;
    },
    
    TeclaSoltada : function(Evento) {
        this.Teclas[Evento.keyCode] = false;
        // 'A' 'D' '<-' '->'
        if (Evento.keyCode === 65 || Evento.keyCode === 68 || Evento.keyCode === 37 || Evento.keyCode === 39 ) { 
            this.Tanque.Vel = 0;
        }
    },
    
    MouseMove : function(Evento) {       
        this.Mouse = { X : Evento.clientX - this.Canvas.offsetLeft,  Y : Evento.clientY - this.Canvas.offsetTop };
        // Tope para el mouse
        if (this.Mouse.Y > this.Alto - 32) { this.Mouse.Y = this.Alto - 32; }
        if (this.Mouse.Y < 0) { this.Mouse.Y = 0; }
        if (this.Mouse.X > this.Ancho) { this.Mouse.X = this.Ancho; }
        if (this.Mouse.X < 0) { this.Mouse.X = 0; }        
        
        this.CalcularAnguloDisparoTanque();
//        console.log(this.Mouse, this.Tanque.Angulo);
    },

    MousePresionado : function(Evento) {
        this.Teclas[32] = true;
    },
    
    MouseSoltado : function(Evento) {
        this.Teclas[32] = false;    
    }        
});

var Canvas = null;
window.addEventListener('load', function() { Canvas = new SpaceInvaders404; });











/*******************************************************************************************************************************************************/
/* Función para detectar colisiones con el algoritmo bresenham, y que tiene un memory leak por usar getImageData con imagenes de 500x500 cada frame... */
/*******************************************************************************************************************************************************/

    /* No se que algoritmo se usa en el canvas para pintar una línea con moveTo, lineTo (por descarte imagino que el : https://rosettacode.org/wiki/Xiaolin_Wu%27s_line_algorithm)
     * - he utilizado el algoritmo de bresenham para calcular la línea que he pintado en el disparo, pero es impreciso ... 
     * - Por lo que veo el problema es que el canvas pinta las líneas con algun anti alias, y eso hace que algunos pixeles detectados en el bucle del bresenham den falsos positivos... 
     *      - Al encontrar una colision se pintara de nuevo el pixel colisionado, y de esta forma no se trabara el algoritmo de bresenham */     
    
    
    /* Hace avanzar los disparos en su dirección, y detecta las colisiones de todo el recorrido del disparo */
/*    this.ColisionesDisparos = function() {
        // getImageData es un peligro.... memory leak al canto 
        this.ArrayPixels = this.Context.getImageData(0, 0, this.Ancho, this.Alto);
        var Fondo = HexToRgb("#EA504E");
        this.Context.strokeStyle = "#FFFFFF";
        for (var i = this.Disparos.length - 1; i > -1; i--) {
            var Eliminado = false;
            // Calculo las coordenadas x (cos), y (sin)
            var s = Math.sin(this.Disparos[i].Angulo * (Math.PI / 180));
            var c = Math.cos(this.Disparos[i].Angulo * (Math.PI / 180));
            // Posición inicial
            var x1 = Math.floor(this.Disparos[i].X - (this.Disparos[i].Distancia * c));
            var y1 = Math.floor(this.Disparos[i].Y - (this.Disparos[i].Distancia * s));
            // Posición final
            var x2 = Math.floor(this.Disparos[i].X - ((this.Disparos[i].Distancia + this.Opciones.Tanque.DisparosVelocidad) * c));
            var y2 = Math.floor(this.Disparos[i].Y - ((this.Disparos[i].Distancia + this.Opciones.Tanque.DisparosVelocidad) * s));
            
            // Pinto el disparo en el buffer del 404
            this.Buffer404.Context.beginPath();
            this.Buffer404.Context.lineWidth = 1;
            this.Buffer404.Context.moveTo(x1, y1);
            this.Buffer404.Context.lineTo(x2, y2);
            this.Buffer404.Context.stroke();               
            // Pinto el disparo            
            this.Context.beginPath();
            this.Context.moveTo(x1, y1);
            this.Context.lineTo(x2, y2);                
            this.Context.stroke();

            // Define differences and error check (bresenham algorithm)
            var dx = Math.abs(x2 - x1);     // Desplazamiento x
            var dy = Math.abs(y2 - y1);     // Desplazamiento y
            var sx = (x1 < x2) ? 1 : -1;    // Suma x
            var sy = (y1 < y2) ? 1 : -1;    // Suma y
            var err = dx - dy;                        
            // Compruebo todos los pixeles por los que tiene que pasar el disparo
            while (!((x1 === x2) && (y1 === y2))) {
                var e2 = err << 1;
                if (e2 > -dy) { err -= dy;  x1 += sx; }
                if (e2 < dx)  { err += dx;  y1 += sy; }                
                // Posición del pixel dentro del dataImage 
                var Pos = ((y1 * this.Alto) + x1) * 4;                                
                // Colisión
                if (this.ArrayPixels.data[Pos] ===  Fondo.r && this.ArrayPixels.data[Pos + 1] === Fondo.g && this.ArrayPixels.data[Pos + 2] === Fondo.b) { 
                    // Borro el pixel de la colisión (en determinados ángulos puede haber pixeles que no se han borrado con el moveto - lineto)
                    this.Buffer404.Context.fillRect(x1, y1, 1, 1);
                    // Busco si ha impactado en un enemigo
                    for (var e = this.Enemigos.length - 1; e > - 1; e--) {
                        if (this.Enemigos[e].X < x1 && this.Enemigos[e].X + this.TipoEnemigo[this.Enemigos[e].Tipo].Ancho > x1 &&
                            this.Enemigos[e].Y < y1 && this.Enemigos[e].Y + this.TipoEnemigo[this.Enemigos[e].Tipo].Alto > y1) {
                            // Elimino el enemigo, ademas este es el sitio ideal para empezar una animación de explosión
                            this.Enemigos.splice(e, 1);  
                        }
                    }
                    // Busco si ha impactado en el jugador
                    if (this.Tanque.X < x1 && this.Tanque.X + this.Opciones.Tanque.Ancho > x1 && this.Tanque.Y < y1 && this.Tanque.Y + this.Opciones.Tanque.Alto > y1) {
                        this.MatarTanque();
                    }
                    this.Disparos.splice(i, 1);                                                    
                    Eliminado = true;
                    break;
                }
                // No hay colisión
                else {
                    // Compruebo si se ha salido el disparo de la pantalla para eliminarlo
                    if (x1 < 0 || x1 > this.Ancho || y1 < 0 || y1 > this.Alto) {
                        this.Disparos.splice(i, 1);
                        Eliminado = true;
                        break;
                    }
                }                                                
                
            }
            
            if (Eliminado === false) {
                this.Disparos[i].Distancia += this.Opciones.Tanque.DisparosVelocidad;
            }
            
        }        
        this.ArrayPixels = null;
    };    */
