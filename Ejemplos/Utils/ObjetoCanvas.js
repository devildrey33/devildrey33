/* Base para crear ejemplos que usen Canvas 2D o THREE.JS, y que ademas simula el objeto utilizado en http://devildrey33.es para crear banners animados en la cabecera de las entradas del blog/doc */
/* Se puede crear un Canvas2D o un Canvas utilizando THREE.js */
/* Dispone de varios eventos enlazados listos para usar : mousedown, mouseup, mousemove, mouseenter, mouseleave, keydown, keyup, focus, blur, scroll, resize */
/* Además están las funciones Rand(max, min) para decimales y RandInt(max, min) para enteros, todos los parámetros son opcionales */
/* Tambien incluye un pequeño objeto para crear canvas que van a ser utilizados de buffer (BufferCanvas) */


/* El parámetro Tipo es el tipo de contexto, "2d" o "THREE", si no se especifica, por defecto es 2d */
/* Si no se especifica AnchoFijo y AltoFijo el canvas se adaptara al tamaño de la ventana, y se centrara */
ObjetoCanvas = function(Tipo, AnchoFijo, AltoFijo) {    
    this.Ancho          = 0;                                                // Ancho del canvas
    this.Alto           = 0;                                                // Altura del canvas
    
    // Determino el ancho y altura del canvas (fijo o variable)
    if (typeof(AnchoFijo) !== "undefined") { this.AnchoFijo = true; this.Ancho = AnchoFijo; }
    else                                   { this.AnchoFijo = false;                        }
    if (typeof(AltoFijo) !== "undefined")  { this.AltoFijo = true; this.Alto = AltoFijo;    }
    else                                   { this.AltoFijo = false;                         }

    // Creo las etiquetas que contienen información adicional sobre la animación
    var Cabecera = document.getElementById("Cabecera");
    Cabecera.innerHTML =        '<div id="Cabecera_Cargando">Cargando animación...</div>' +
                                "<div id='Cabecera_Stats'>0 FPS</div>" +
                                "<canvas id='Cabecera_Canvas'></canvas>" +
                                '<div id="Cabecera_PausaAni">El canvas está en segundo plano, animación en pausa.</div>';


    this.Canvas = document.getElementById("Cabecera_Canvas");
    // Si el canvas es de ancho fijo, añado el css para centrar-lo
    if (this.AnchoFijo === true) { this.Canvas.style.width = this.Ancho + "px"; this.Canvas.style.left = "calc(50% - (" + this.Ancho + "px / 2))"; }
    if (this.AltoFijo === true)  { this.Canvas.style.height = this.Alto + "px"; this.Canvas.style.top = "calc(50% - (" + this.Ancho + "px / 2))";  }

    // Asigno el estado cargando, que muestra una ventana que avisa al usuario.
    Cabecera.setAttribute("cargando", true);
    Cabecera.setAttribute("animar", true);

    // Tipo por defecto
    if (typeof(Tipo) === "undefined") { this.Tipo = "2d"; }
    else                              { this.Tipo = Tipo; }

    console.log("constructor ObjetoCanvas", this.Tipo);
    
    try {
        // Creo el contexto según el tipo especificado
        if (this.Tipo === "2d") {
            this.Context    = this.Canvas.getContext("2d");                                             // Contexto 2D
        } else if(this.Tipo === "THREE") { 
            // Aunque no es muy correcto... presupongo que los dispositivos con un pixel ratio mayor que uno son dispositivos moviles
            if (this.PixelRatio() > 1) {                                                                // El antialias no va con mi samsung galaxy alpha...
               this.Context = new THREE.WebGLRenderer({ canvas : this.Canvas });                        // Contexto THREE.JS
            }
            else {
               this.Context = new THREE.WebGLRenderer({ canvas : this.Canvas, antialias : true });      // Contexto THREE.JS + Antialias
            }
            this.Context.setClearColor(0x312E35, 1);    // Color del fondo
        }
    }
    catch ( error ) {
        // Uso el marco de la carga para informar del error
        document.getElementById("Cabecera_Cargando").innerHTML = "Error iniciando WebGL : " + error + "<br />" + 
                                                                 "Si estas en chrome abre el enlace 'chrome://gpu', y vuelve atrás para re-cargar este ejemplo.";
        return false;
    }

    this.RAFID          = 0;                                                // Request Animation Frame ID
    this.FPS_UltimoTick = Date.now() + 1000;                                // Ultimo Tick del sistema + 1000ms
    this.FPS_Contador   = 0;                                                // Contador de frames por segundo    
    this.FocoWeb        = true;                                             // Foco de la ventana de la web
    this.Tick           = 0;                                                // Date.now actualizado en cada frame
    
    
    this.EventoRedimensionar();

    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));       

    // Exporto la escena del THREE.JS para poder verla en el Three.js.inspector
//    if (typeof(this.Escena) !== "undefined") { window.scene = this.Escena; }
        
    // Evento mouse movimiento
    this.EnlazarEventos();
    
    // Asigno el foco a la ventana del canvas, ya que al ser un iframe para tests no suele tener el foco asignado
//    window.focus(); (si hay que modificar el código en el lab es un follón..)
    
    return true;
};

ObjetoCanvas.prototype.EnlazarEventos = function() {
    document.getElementById("Cabecera").addEventListener('mousemove', this.EventoMouseMove.bind(this));
    document.getElementById("Cabecera").addEventListener('mousedown', this.EventoMousePresionado.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseup', this.EventoMouseSoltado.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseenter', this.EventoMouseEnter.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseleave', this.EventoMouseLeave.bind(this));
    window.addEventListener('keydown', this.EventoTeclaPresionada.bind(this));
    window.addEventListener('keyup', this.EventoTeclaSoltada.bind(this));
    window.addEventListener('resize', this.EventoRedimensionar.bind(this));
    window.addEventListener('scroll', this.EventoScroll.bind(this));
    window.addEventListener('blur', this.EventoFocoPerdido.bind(this));
    window.addEventListener('focus', this.EventoFocoRecibido.bind(this));
};

// Evento que salta cuando se obtiene el foco de la ventana
ObjetoCanvas.prototype.EventoFocoRecibido = function() {
    console.log("Foco de la ventana recibido");
    this.FocoWeb = true;
    this.Reanudar();
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
    if (typeof(this.MouseEnter) !== "undefined") { this.MouseEnter.apply(this, [ event ]); }
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseLeave = function(event) { 
    if (typeof(this.MouseLeave) !== "undefined") { this.MouseLeave.apply(this, [ event ]); }
};

// Función que obtiene el tamaño del canvas una vez redimensionado.
ObjetoCanvas.prototype.EventoRedimensionar = function() {
    /* El ancho del canvas siempre tiene que ser el mismo que #MarcoNavegacion - 60 pixeles que ocupan los botones de la izquierda
     * La altura del canvas siempre es la misma desde el principio */
    if (this.AnchoFijo === false) { this.Ancho  = document.getElementById("Cabecera").offsetWidth;  }
    if (this.AltoFijo === false)  { this.Alto   = document.getElementById("Cabecera").offsetHeight; }
    this.Canvas.setAttribute("width", this.Ancho);
    this.Canvas.setAttribute("height", this.Alto);
    if (this.Tipo === "THREE") { // redimensionar el THREE.JS
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
    if (this.RAFID !== 0 && ObjetoCanvas_Depurar === false) {
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

      
      
      
      
      
    
/* Función para generar un valor aleatório entero */
/* Si no se especifican parametros devuelve 0 o 1 */
/* Si solo se especifica un parámetro, el primer parámetro será el máximo, y el mínimo será 0 */
/* Si se especifican dos parámetros, el primero es el máximo, y el segundo es el mínimo. */
function RandInt(Max, Min) {
    return Math.floor(Rand(Max, Min));
}


/* Si no se especifican parametros devuelve 0 o 1 
   Si se especifica solo el Máximo, el mínimo será 0 */
function Rand(Max, Min) {
    var min = (typeof(Min) !== "undefined") ? Min : 0; // Si no se especifica el mínimo por defecto es 0
    var max = (typeof(Max) !== "undefined") ? Max : 1; // Si no se especifica el máximo por defecto es 1
    return min + Math.random() * (max - min);    
}      