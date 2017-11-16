/* Canvas2D : Objeto principal que contiene todas las capas/canvas en 2d 
 *  Creado por Josep Antoni Bover Comas el 19/10/2017 para devildrey33.es 
 *  Ultima modificación : 19/10/2017 */

"use strict";

var Canvas2D = function(Opciones) {
    // Extensión de constantes para el objeto Math 
    if (typeof(Math.Radiant) === 'undefined') { Math.Radiant = Math.PI / 180; }
    if (typeof(Math.TAU)     === 'undefined') { Math.TAU     = Math.PI * 2; }
        
    // Opciones por defecto, puedes modificar las opciones creando un objeto que contenga una o mas opciones a modificar, y pasando el array en el constructor del ObjetoCanvas
    this.Opciones  = { 
        Id                      : '',                   // Id del Canvas2D
        Idioma                  : 'es',                 // Puede ser "cat"alà, "en"glish, y "es"pañol.
        Ancho                   : 'Auto',               // Ancho en PIXELES del Canvas2D  (Se puede especificar 'Auto' : se ajusta a la etiqueta Opciones.ElementoPadre)
        Alto                    : 'Auto',               // Altura en PIXELES del Canvas2D (Se puede especificar 'Auto' : se ajusta a la etiqueta Opciones.ElementoPadre)
        Cargando                : true,                 // Si es true mostrará el marco cargando al iniciar [para ocultar el marco debes utilizar Canvas2D.Cargando(false); una vez cargados todos los elementos]
        Pausar                  : true,                 // Si es true pausara la animación al perder el foco de la ventana, y aedmas mostrará un marco para informar al usuario.
        ElementoPadre           : document.body,        // Elemento padre donde se creará el Canvas2D
        MenuExtra               : {                     // Barra con un menú de botones extra para el Canvas2D
            Posicion                : 'derecha',        // Posición de la barra de menús extra con los botones, puede ser : 'derecha', 'izquierda' (de abajo a arriba)
            Mostrar                 : true,             // Muestra / oculta TODOS los botones
            MostrarFPS              : true,             // Muestra el boton que muestra los frames por segundo (siempre que Botones.Mostrar sea true)
            MostrarLogo             : true,             // Muestra el logo                                     (siempre que Botones.Mostrar sea true)
            MostrarPantallaCompleta : true              // Muestra el boton para activar / desactivar el modo pantalla completa
        }
    };
    
    // En pausa a false
    this._Pausa = false;
    
    // Array de capas
    this.Capas = [];
    
    // Array para los textos del idioma
    this.Idioma = {
        /* Pos:`[0]                [1]             [2]         [3]             [4]                     [5]             [6]                   */
        'cat' : ['Carregant...'    ,'Iniciar'      ,'Pausa'    ,'Reiniciar'    ,'Pantalla completa'    ,'Restaurar'    ,'Frames per segon'   ],
        'en'  : ['Loading...'      ,'Start'        ,'Pause'    ,'Restart'      ,'Full screen'          ,'Restore'      ,'frames per second'  ],
        'es'  : ['Cargando...'     ,'Iniciar'      ,'Pausa'    ,'Reiniciar'    ,'Pantalla completa'    ,'Restaurar'    ,'Frames por segundo' ]
    };
    
    // Copio las nuevas opciones encima de las opciones por defecto
    if (typeof Opciones === 'object') {
        for (var Indice in Opciones) {
            this.Opciones[Indice] = Opciones[Indice];
        }
    }
    
    // Creo la cabecera vacia si no existe
    // La cabecera contiene todas las capas y los controles necesatios para el Canvas2D
    if (!document.getElementById(this.Opciones.Id)) {
        var PreCabecera = document.createElement('div');
        PreCabecera.className = "Canvas2D";
        if (this.Opciones.Id !== '') {
            PreCabecera.id = this.Opciones.Id;
        }
        this.Opciones['ElementoPadre'].appendChild(PreCabecera);
    }
    
    // Obtengo la etiqueta principal Canvas2D
    if (this.Opciones.Id !== '') { // Si se ha especificado una ID
        this.EtiquetaCabecera = document.getElementById(this.Opciones.Id);
    }
    else { // si no se ha especificado una id obtengo el primer elemento con la clase .Canvas2D
        this.EtiquetaCabecera = this.Opciones.ElementoPadre.querySelectorAll(".Canvas2D")[0];
    }
    
    // Comrpuebo que la etiqueta principal existe, y en caso negativo muestro un error en la consola
    if (this.EtiquetaCabecera === null) {
        // ERROR : no se ha podido crear la etiqueta <div id='Canvas2D_???'>
        console.log("Canvas2D ERROR : no se ha podido crear/obtener el contenedor principal <div id='Canvas2D" + this.Opciones.Id + ">");
        return false;
    }
    
    // Creo las etiquetas adicionales para informar / guiar al usuario (cargando, pausa, iniciar, etc...)
    //  Estas etiquetas no se pueden crear / modificar externamente.
    // Etiqueta que muestra al usuario un marco que indica que se está cargando datos
    if (this.Opciones.Cargando === true) {
        this.EtiquetaCabecera.setAttribute("cargando", true);
        this.EtiquetaCabecera.innerHTML += "<div class='Canvas2D_Marco Canvas2D_Cargando'><span>" + this.Idioma[this.Opciones.Idioma][0] + "</span></div>";                
        this.EtiquetaCargando = this.EtiquetaCabecera.querySelectorAll(".Canvas2D_Cargando")[0];
    }
    
    // Etiqueta que muestra al usuario un marco que indica si la animación está en pausa por haber perdido el foco de la pestaña
    if (this.Opciones.Pausar === true) {
        this.EtiquetaCabecera.innerHTML += "<div class='Canvas2D_Marco Canvas2D_Pausa'><span>" + this.Idioma[this.Opciones.Idioma][2] + "</span></div>";                
        this.EtiquetaPausar = this.EtiquetaCabecera.querySelectorAll(".Canvas2D_Pausa")[0];
    }       
    
    // Barra de menú con botones extra
    if (this.Opciones.MenuExtra.Mostrar === true) {
        // Obtengo la etiqueta que contiene los botones extra
        this.EtiquetaMenuExtra = this.EtiquetaCabecera.querySelectorAll(".Canvas2D_Controles")[0];
        if (typeof(this.EtiquetaMenuExtra) === 'undefined') { // Si no existe la creo
            this.EtiquetaCabecera.innerHTML += "<div class='Canvas2D_Controles' alinear='" + this.Opciones.MenuExtra.Posicion + "'></div>";
            this.EtiquetaMenuExtra = this.EtiquetaCabecera.querySelectorAll(".Canvas2D_Controles")[0];
        }
        else { // Existe la etiqueta, modifico su posición
            this.EtiquetaMenuExtra.setAttribute("alinear", this.Opciones.MenuExtra.Posicion);
        }
        // Añado el boton FPS
        if (this.Opciones.MenuExtra.MostrarFPS === true) {
            this.EtiquetaMenuExtra.innerHTML = "<div class='Canvas2D_Marco' title='" + this.Idioma[this.Opciones.Idioma][6] + "'>" +
                    "<span class='Canvas2D_FPS'>60</span>" +
                    "<span class='Canvas2D_TxtFPS'>fps</span>" +
                "</div>";
                this.SpanFPS = this.EtiquetaMenuExtra.querySelectorAll(".Canvas2D_Marco > .Canvas2D_FPS")[0];
        }
    }
    
    // Calculo el tamaño del Canvas2D
    this.Ancho          = 0;                                                // Ancho del canvas
    this.Alto           = 0;                                                // Altura del canvas
    
    // Determino el ancho y altura del canvas (fijo o variable)
    if (this.Opciones.Ancho.toLowerCase() !== "auto") { this.Ancho = this.Opciones.Ancho; }
    if (this.Opciones.Alto.toLowerCase() !== "auto")  { this.Alto  = this.Opciones.Alto;  }        
    // Si el canvas es de ancho fijo, añado el css para centrarlo
/*    if (this.Opciones.Ancho !== "Auto") { this.Canvas.style.width  = this.Ancho + "px";   this.Canvas.style.left = "calc(50% - (" + this.Ancho + "px / 2))"; }
    if (this.Opciones.Alto !== "Auto")  { this.Canvas.style.height = this.Alto + "px";    this.Canvas.style.top  = "calc(50% - (" + this.Alto + "px / 2))";  }            */    
    
    // Variables para calcular los FPS
    this.FPS_UltimoTick = 0;
    this.FPS_Contador   = 0;

    // Enlazo los eventos del DOM con las funciones especificamente diseñadas
    this.EnlazarEventos();        
    
    if (typeof(this.Iniciar) !== 'undefined') {
        this.Iniciar();
    }
    
    // Timer para la animación
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));           
    
};


/* Función que especifica / obtiene el estado de carga
 *  Si no se especifica ningúin parámetro, devuelve true si está cargando, false en caso contrario
 *  Si se especifica un parámetro : 'true' y true muestran el marco cargando, 'false' y false ocultan el marco cargando */
Canvas2D.prototype.Cargando = function(Carga) {
    // Obtener estado
    if (typeof(Carga) === 'undefined') { 
        var Ret = this.EtiquetaCabecera.getAttribute("cargando");
        return (Ret === "true" || Ret === true);        
    }
    // Asignar estado
    else {                                  
        this.EtiquetaCabecera.setAttribute("cargando", Carga);
    }
};

/* Función que especifica / obtiene el estado de pausa
 *  Si no se especifica ningúin parámetro, devuelve true si está en pausa, false en caso contrario
 *  Si se especifica un parámetro : 'true' y true muestran el marco de la pausa, 'false' y false ocultan el marco de la pausa */
Canvas2D.prototype.Pausa = function(nPausa) {
    // Obtener estado
    if (typeof(nPausa) === 'undefined') { 
        var Ret = this.EtiquetaCabecera.getAttribute("pausa");
        return (Ret === "true" || Ret === true);
    }
    // Asignar estado
    else {                                  
        this.EtiquetaCabecera.setAttribute("pausa", nPausa);        
        if (nPausa === true || nPausa === 'true') {
            window.cancelAnimationFrame(this.RAFID);                                // Cancelo el temporizador
            this.RAFID = 0;
        }
        else { 
            if (this.RAFID === 0) { // Si el temporizador está apagado, su id debería ser 0
                this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));  // Reanudo el temporizador
            }
        }
    }    
};

// Función que inicia y agrega una capa a la lista de capas
Canvas2D.prototype.AgregarCapa = function(Capa) {
    Capa.Iniciar(this);
    this.Capas.push(Capa);
};


// Función que cuenta los frames por segundo
Canvas2D.prototype.FPS = function() {
    if (this.Tick > this.FPS_UltimoTick) {
        this.FPS_UltimoTick = this.Tick + 1000;
        this.SpanFPS.innerHTML = this.FPS_Contador;
        var Parte = 256 / 60;
        // Color de verde a rojo según el framerate (60fps verde, 30fps naranja, 1fps rojo)
        this.SpanFPS.style.color = "rgb(" + Math.round(255 - (this.FPS_Contador * Parte)) + "," + Math.round(this.FPS_Contador * Parte) + ", 0)";
        this.FPS_Contador = 0;
    }
    else {
        this.FPS_Contador ++;
    }
};

// Función interna que actualiza la animación
Canvas2D.prototype.Actualizar = function() {
    this.Tick = Date.now();
    if (this.Opciones.MenuExtra.MostrarFPS === true) { this.FPS(); }
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));
    for (var i = 0; i < this.Capas.length; i++) {
        this.Capas[i].Pintar.apply(this.Capas[i]);
    }
};

// Función que enlaza los eventos a sus funciones
Canvas2D.prototype.EnlazarEventos = function() {
    window.addEventListener('resize', this._EventoRedimensionar.bind(this));
    window.addEventListener('blur', this._EventoFocoPerdido.bind(this));
    window.addEventListener('focus', this._EventoFocoRecibido.bind(this));        
};


// Función que obtiene el tamaño del canvas una vez redimensionado.
Canvas2D.prototype._EventoRedimensionar = function() {
    // Calculo el nuevo ancho y la nueva altura (si no son fijas)
    if (this.OpcionesCanvas.Ancho === "Auto") { this.Ancho  = this.Cabecera.offsetWidth;  }
    if (this.OpcionesCanvas.Alto === "Auto")  { this.Alto   = this.Cabecera.offsetHeight; }
    
    // Asigno el alto y el ancho a los atributos del canvas
    this.Canvas.setAttribute("width", this.Ancho);
    this.Canvas.setAttribute("height", this.Alto);
    
    // Ejecuto el evento en cada capa
    for (var i = 0; i < this.Capas.length; i++) {
        this.Capas[i]._EventoRedimensionar.apply(this.Capas[i]);
    }
    
    // Si existe una función de redimensionado extra, la ejecuto
    if (typeof(this.EventoRedimensionar) !== "undefined") {
        this.EventoRedimensionar.apply(this);
    }    
};

// Función que nos indica que se ha perdido el foco del teclado.
Canvas2D.prototype._EventoFocoPerdido = function() {
    if (this.Opciones.Pausar === true) {
        this.Pausa(true);
    }
    // Si existe una función para el foco perdido extra, la ejecuto
    if (typeof(this.EventoFocoPerdido) !== "undefined") {
        this.EventoFocoPerdido.apply(this);
    }        
};

// Función que nos indica que se ha recibido el foco del teclado
Canvas2D.prototype._EventoFocoRecibido = function() {
    if (this.Opciones.Pausar === true) {
        this.Pausa(false);
    }    
    // Si existe una función para el foco recibido extra, la ejecuto
    if (typeof(this.EventoFocoRecibido) !== "undefined") {
        this.EventoFocoRecibido.apply(this);
    }    
};
