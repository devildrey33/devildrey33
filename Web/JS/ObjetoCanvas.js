/* Fusión del ObjetoCanvas (originalmente destinado a tests de banners) con el ObjetoBanner 
    Creado el 14/10/2016 por Josep Antoni Bover Comas para devildrey33.es 
    Ultima modificación :  14/10/2016 
 */

/*  Opciones['Tipo']            puede ser : 
                                    - 2d       , Canvas con funciones 2D.                       (POR DEFECTO)
                                    - THREE    , Canvas utilizando la API del Three.js
    Opciones['Ancho']           por defecto el ancho se adapta al contenedor, establece un ancho en pixeles para que sea fijo.
    Opciones['Alto']            por defecto la altura se adapta al contenedor, establece una altura en pixeles para que sea fija.
    Opciones['Entorno']         puede ser :
                                    - Normal   , Canvas para crear tests rapidos.               (POR DEFECTO)
                                    - Banner   , Canvas diseñado para el Banner de devildrey33.
    Opciones['MostrarFPS']      puede ser : true o false.                                       (TRUE POR DEFECTO)
    Opciones['ElementoRaiz']    elemento del HTML donde se creará el canvas                     (POR DEFECTO es 'document.body')
    Opciones['Pausar']          pausa el canvas si está en segundo plano                        (POR DEFECTO es 'true')
*/

ObjetoCanvas = function(Opciones) {
    // Opciones por defecto
    this.OpcionesCanvas  = { 
        'Tipo'          : '2d',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Normal',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body,
        'Pausar'        : true              // Pausar si el canvas está en segundo plano
    };
    // Copio las nuevas opciones encima de las opciones por defecto
    if (typeof Opciones === 'object') {
        for (var Indice in Opciones) {
            this.OpcionesCanvas[Indice] = Opciones[Indice];
        }
/*        Opciones.forEach(function(Elemento, Indice, Array) { 
            this.Opciones[Indice] = Elemento;
        }.bind(this));*/
    }
            
    // En el entorno Normal hay que crear todas las etiquetas
    if (this.OpcionesCanvas['Entorno'] === 'Normal') {
        // Creo la cabecera vacia
        var PreCabecera = document.createElement('header');
        PreCabecera.id = "Cabecera";
        this.OpcionesCanvas['ElementoRaiz'].appendChild(PreCabecera);


        // Creo las etiquetas que contienen información adicional sobre la animación
        this.Cabecera = document.getElementById("Cabecera");
        this.Cabecera.innerHTML =   '<div id="Cabecera_Cargando">Cargando animación...</div>' +
                                    "<div id='Cabecera_Stats'>0 FPS</div>" +
                                    "<canvas id='Cabecera_Canvas'></canvas>" +
                                    '<div id="Cabecera_PausaAni">El canvas está en segundo plano, animación en pausa.</div>';
    }
    // En el entorno Banner las etiquetas ya estan creadas, pero hay que eliminar y volver a crear el canvas
    if (this.OpcionesCanvas['Entorno'] === 'Banner') {
        this.Cabecera = document.getElementById("Cabecera");
        // Hay que eliminar la etiqueta canvas por que al crear un 2d context encima de un webgl context y viceversa produce error.
        if (document.getElementById('Cabecera_Canvas')) { this.Cabecera.removeChild(document.getElementById('Cabecera_Canvas')); }
        this.Cabecera.innerHTML = this.Cabecera.innerHTML + "<canvas id='Cabecera_Canvas'></canvas>";        
        // Marco que contiene la información de la animación del banner
        document.getElementById("CabeceraAutorAni_HTML").innerHTML = "<div>"+ this.Nombre +"</div>" +
                                                                     "<div><span style='color:#AAA;'>Concepto original : </span><b>" + this.IdeaOriginal + "</b></div>" + 
                                                                     "<a href='" + this.URL + "' target='_blank'>" + this.NombreURL + "</a>";        
    }    
    
    // Asigno el estado cargando, que muestra una ventana que avisa al usuario.
    this.Cabecera.setAttribute("cargando", true);
    this.Cabecera.setAttribute("animar", true);
    
    
    // Obtengo la etiqueta canvas    
    this.Canvas = document.getElementById("Cabecera_Canvas");        
    
    // Tamaño del canvas
    this.Ancho          = 0;                                                // Ancho del canvas
    this.Alto           = 0;                                                // Altura del canvas
    
    // Determino el ancho y altura del canvas (fijo o variable)
    if (this.OpcionesCanvas.Ancho !== "Auto") { this.Ancho = this.OpcionesCanvas.Ancho; }
    if (this.OpcionesCanvas.Alto !== "Auto")  { this.Alto = this.OpcionesCanvas.Alto; }
    // Si el canvas es de ancho fijo, añado el css para centrar-lo
    if (this.OpcionesCanvas.Ancho !== "Auto") { this.Canvas.style.width = this.Ancho + "px"; this.Canvas.style.left = "calc(50% - (" + this.Ancho + "px / 2))"; }
    if (this.OpcionesCanvas.Alto !== "Auto")  { this.Canvas.style.height = this.Alto + "px"; this.Canvas.style.top = "calc(50% - (" + this.Ancho + "px / 2))";  }
    
    
    // Creación del contexto
    try {
        if (this.OpcionesCanvas.Tipo.toLowerCase() === '2d') {
            this.Context    = this.Canvas.getContext("2d");                         // Contexto 2D
        }
        else if (this.OpcionesCanvas.Tipo.toLowerCase() === 'three') {
            if (this.PixelRatio() > 1) { // El antialias no va con el samsung galaxy alpha...
               this.Context = new THREE.WebGLRenderer({ canvas : this.Canvas });    // Contexto THREE.JS
            }
            else {
               this.Context = new THREE.WebGLRenderer({ canvas : this.Canvas, antialias : true });    // Contexto THREE.JS
            }
            this.Context.setClearColor(0x312E35, 1);    // Color del fondo
        }
    }
    catch ( error ) {
/*        document.getElementById("Cabecera_Cargando").innerHTML = "Error iniciando WebGL : " + error + "<br />" + 
                                                                 "Si estas en chrome abre el enlace 'chrome://gpu', y vuelve atrás para re-cargar este ejemplo.";*/
        return false;
    }    
    
    this.RAFID          = 0;                                                // Request Animation Frame ID
    this.FPS_UltimoTick = Date.now() + 1000;                                // Ultimo Tick del sistema + 1000ms
    this.FPS_Contador   = 0;                                                // Contador de frames por segundo    
    this.FocoWeb        = true;                                             // Foco de la ventana de la web
    this.Tick           = 0;                                                // Date.now actualizado en cada frame
    // Calculo el tamaño del canvas
    this.EventoRedimensionar();
    // Temporizador para la animación
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));           
    
    // Evento mouse movimiento
    this.EnlazarEventos();
    
    // Estado cargando
    this.Cargando(true);
    
    if (this.OpcionesCanvas.MostrarFPS === false) {
        // Escondo el marco de los FPS
        document.getElementById("Cabecera_Stats").style.display = "none";
    }
    
    return true;
};

ObjetoCanvas.prototype.Terminar = function() {
    if (this.RAFID !== 0) {
        window.cancelAnimationFrame(this.RAFID); 
    }
    
    if (this.OpcionesCanvas.Entorno === "Normal") {
        this.Cabecera.removeEventListener('mousedown', this.hEventoMousePresionado);
        this.Cabecera.removeEventListener('mouseup', this.hEventoMouseSoltado);
        window.removeEventListener('keydown', this.hEventoTeclaPresionada);
        window.removeEventListener('keyup', this.hEventoTeclaSoltada);    
    }
    
    this.Cabecera.removeEventListener('mousemove', this.hEventoMouseMove);
    this.Cabecera.removeEventListener('mouseenter', this.hEventoMouseEnter);
    this.Cabecera.removeEventListener('mouseleave', this.hEventoMouseLeave);        
    window.removeEventListener('resize', this.hEventoRedimensionar);
    window.removeEventListener('scroll', this.hEventoScroll);
    window.removeEventListener('blur', this.hEventoFocoPerdido);
    window.removeEventListener('focus', this.hEventoFocoRecibido);
    console.log("ObjetoCanvas.Terminar");
};

ObjetoCanvas.prototype.EnlazarEventos = function() {
    // Necesito guardar una variable con cada evento reconvertido con bind, para poder hacer mas tarde el removeEventListener
    if (this.OpcionesCanvas.Entorno === "Normal") {
        this.hEventoMousePresionado = this.EventoMousePresionado.bind(this);
        this.hEventoMouseSoltado    = this.EventoMouseSoltado.bind(this);
        this.hEventoTeclaPresionada = this.EventoTeclaPresionada.bind(this);
        this.hEventoTeclaSoltada    = this.EventoTeclaSoltada.bind(this);
        this.Cabecera.addEventListener('mousedown', this.hEventoMousePresionado);
        this.Cabecera.addEventListener('mouseup', this.hEventoMouseSoltado);
        window.addEventListener('keydown', this.hEventoTeclaPresionada);
        window.addEventListener('keyup', this.hEventoTeclaSoltada);
    }
    this.hEventoMouseMove       = this.EventoMouseMove.bind(this);
    this.hEventoMouseEnter      = this.EventoMouseEnter.bind(this);
    this.hEventoMouseLeave      = this.EventoMouseLeave.bind(this);
    this.hEventoRedimensionar   = this.EventoRedimensionar.bind(this);
    this.hEventoScroll          = this.EventoScroll.bind(this);
    this.hEventoFocoPerdido     = this.EventoFocoPerdido.bind(this);
    this.hEventoFocoRecibido    = this.EventoFocoRecibido.bind(this);
    
    this.Cabecera.addEventListener('mousemove', this.hEventoMouseMove);
    this.Cabecera.addEventListener('mouseenter', this.hEventoMouseEnter);
    this.Cabecera.addEventListener('mouseleave', this.hEventoMouseLeave);
    
    window.addEventListener('resize', this.hEventoRedimensionar);
    window.addEventListener('scroll', this.hEventoScroll);
    window.addEventListener('blur', this.hEventoFocoPerdido);
    window.addEventListener('focus', this.hEventoFocoRecibido);
};



// Evento que salta cuando se obtiene el foco de la ventana
ObjetoCanvas.prototype.EventoFocoRecibido = function() {
    console.log("Foco de la ventana recibido");
    this.FocoWeb = true;
    if (this.OpcionesCanvas.Entorno === "Normal") {
        this.Reanudar();
    }
    // En el entorno banner, solo se reanuda si el banner es visible en la ventana
    else if (this.OpcionesCanvas.Entorno === "Banner" && window.scrollX < 190) {
        this.Reanudar();
    }
};
    
// Evento que salta cuando se pierde el foco de la ventana
ObjetoCanvas.prototype.EventoFocoPerdido = function() {
    console.log("Foco de la ventana perdido");
    this.FocoWeb = false;
    this.Pausa();
};
    
// Función que devuelve el pixel ratio del dispositivo actual
ObjetoCanvas.prototype.PixelRatio = function() {
    var ratio = 1;
    // To account for zoom, change to use deviceXDPI instead of systemXDPI
    if (window.screen.systemXDPI !== undefined && window.screen.logicalXDPI !== undefined && window.screen.systemXDPI > window.screen.logicalXDPI) {
        // Only allow for values > 1
        ratio = window.screen.systemXDPI / window.screen.logicalXDPI;
    }
    else if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    }
    return ratio;    
};

// Función que determina el estado de carga (cargando/completo) true/false
ObjetoCanvas.prototype.Cargando = function(carga) {
    document.getElementById("Cabecera").setAttribute("cargando", carga);
};

// Función interna utilizada por requestAnimationFrame para actualizar y pintar la animación
ObjetoCanvas.prototype.Actualizar = function() {
    this.Tick = Date.now();
    this.FPS(); 
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));
    this.Pintar.apply(this); 
};

// Función que procesa el evento keydown
ObjetoCanvas.prototype.EventoTeclaPresionada = function(event) {    
    if (typeof(this.TeclaPresionada) !== "undefined") { this.TeclaPresionada.apply(this, [ event ]); }        
};
// Función que procesa el evento keyup
ObjetoCanvas.prototype.EventoTeclaSoltada = function(event) {    
    if (typeof(this.TeclaSoltada) !== "undefined") { this.TeclaSoltada.apply(this, [ event ]); }    
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseMove = function(event) {    
    if (typeof(this.MouseMove) !== "undefined") { this.MouseMove.apply(this, [ event ] ); }
};

// Función que procesa el evento mousedown
ObjetoCanvas.prototype.EventoMousePresionado = function(event) {    
    if (typeof(this.MousePresionado) !== "undefined") { this.MousePresionado.apply(this, [ event ]); }
};
// Función que procesa el evento mouseup
ObjetoCanvas.prototype.EventoMouseSoltado = function(event) {    
    if (typeof(this.MouseSoltado) !== "undefined") {  this.MouseSoltado.apply(this, [ event ]);   }
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseEnter = function(event) {
    console.log("ObjetoCanvas.EventoMouseEnter");
    if (typeof(this.MouseEnter) !== "undefined") { this.MouseEnter.apply(this, [ event ]); }
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseLeave = function(event) { 
    console.log("ObjetoCanvas.EventoMouseLeave");
    if (typeof(this.MouseLeave) !== "undefined") { this.MouseLeave.apply(this, [ event ]); }
};

// Función que obtiene el tamaño del canvas una vez redimensionado.
ObjetoCanvas.prototype.EventoRedimensionar = function() {
    // Calculo el nuevo ancho y la nueva altura (si no son fijas)
    if (this.OpcionesCanvas.Ancho === "Auto") { this.Ancho  = document.getElementById("Cabecera").offsetWidth;  }
    if (this.OpcionesCanvas.Alto === "Auto")  { this.Alto   = document.getElementById("Cabecera").offsetHeight; }
    // Asigno el alto y el ancho a los atributos del canvas
    this.Canvas.setAttribute("width", this.Ancho);
    this.Canvas.setAttribute("height", this.Alto);
    if (this.OpcionesCanvas.Tipo.toLowerCase() === "three") { // redimensionar el THREE.JS
        this.Context.setSize(this.Ancho, this.Alto);
        if (this.Camara !== null && typeof(this.Camara) !== 'undefined') { // Si hay una camara creada
            this.Camara.aspect = this.Ancho / this.Alto;
            this.Camara.updateProjectionMatrix();            
        }
    }
    // 
    if (typeof(this.Redimensionar) !== "undefined") {
        this.Redimensionar.apply(this);
    }
};

// Función para pausar la animación
// - Hay que detectar cuando la animación no es visible y cuando la ventana no tiene el foco para pausar la animación
// - En modo depuración nunca se hace la pausa (esto es para poder depurar el Three.js en el Three.js.inspector)
ObjetoCanvas.prototype.Pausa = function() {
    if (this.RAFID !== 0 && this.OpcionesCanvas.Pausar === true) {
        document.getElementById("Cabecera").setAttribute("animar", false);
        console.log("ObjetoCanvas.Pausa");
        window.cancelAnimationFrame(this.RAFID); 
        this.RAFID = 0;
    }
};

// Función para reanudar la animación desde el ultimo punto
ObjetoCanvas.prototype.Reanudar = function() {
    if (this.RAFID === 0 && this.FocoWeb === true) {
        document.getElementById("Cabecera").setAttribute("animar", true);
        this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this)); 
        console.log("ObjetoCanvas.Reanudar RAFID = " + this.RAFID);
    }
};

// Función que controla el scroll para determinar si la animación sigue a la vista o no y de esta forma detenerla / reanudarla
ObjetoCanvas.prototype.EventoScroll = function() {
    // Llamo a la función Scroll del NuevoObjeto (si existe)
    if (this.OpcionesCanvas.Entorno === "Banner") {
//        if (this.Cabecera.length > 0) { // Hay páginas que no tienen la cabecera
        var PS = $(window).scrollTop();
        var Altura = this.Cabecera.offsetHeight;
        if (PS > Altura) {
            this.Pausa();
        }
        else if (PS < Altura) {
            this.Reanudar();
        }
    }

    
    if (typeof(this.Scroll) !== "undefined") {
        this.Scroll.apply(this);
    }            
};

// Función que cuenta los frames por segundo
ObjetoCanvas.prototype.FPS = function() {
    if (this.Tick > this.FPS_UltimoTick) {
        this.FPS_UltimoTick = this.Tick + 1000;
        document.getElementById("Cabecera_Stats").innerHTML = this.FPS_Contador + " FPS";
        this.FPS_Contador = 0;
    }
    else {
        this.FPS_Contador ++;
    }
};


////////////////////////////////////////////////////////////////////////////
// Objeto que crea y contiene un canvas 2d para utilizarlo de back buffer //
////////////////////////////////////////////////////////////////////////////
var BufferCanvas = function(Ancho, Alto) {
    this.Canvas = document.createElement("canvas");
    this.Canvas.setAttribute("width", Ancho);
    this.Canvas.setAttribute("height", Alto);
    this.Context = this.Canvas.getContext("2d"); 
    this.Ancho = Ancho;
    this.Alto = Alto;
};