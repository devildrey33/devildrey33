/* Base para crear ejemplos que usen Canvas 2D o THREE.JS */
/* ObjetoCanvas crea un Canvas2D o un Canvas utilizando THREE.js */
/* Además están las funciones Rand(max, min) para decimales y RandInt(max, min) para enteros, todos los parámetros son opcionales */

/* El primer parámetro es el tipo de contexto, "2d" o "THREE", si no se especifica, por defecto es 2d */
ObjetoCanvas = function(Tipo) {    

    this.Canvas = document.getElementById("Cabecera_Canvas");

    // Asigno el estado cargando, que muestra una ventana que avisa al usuario.
    var Cabecera = document.getElementById("Cabecera");
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
            if (this.PixelRatio() > 1) {                                                                // El antialias no va con el samsung galaxy alpha...
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

    this.Ancho          = 0;                                                // Ancho del canvas
    this.Alto           = 0;                                                // Altura del canvas
    this.RAFID          = 0;                                                // Request Animation Frame ID
    this.FPS_UltimoTick = Date.now() + 1000;                                // Ultimo Tick del sistema + 1000ms
    this.FPS_Contador   = 0;                                                // Contador de frames por segundo    
    this.FocoWeb        = true;                                             // Foco de la ventana de la web
    
    
    this.EventoRedimensionar();

    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));       

    // Exporto la escena del THREE.JS para poder verla en el Three.js.inspector
//    if (typeof(this.Escena) !== "undefined") { window.scene = this.Escena; }
        
    // Evento mouse movimiento
    this.EnlazarEventos();
    
    // Asigno el foco a la ventana del canvas, ya que al ser un iframe para tests no suele tener el foco asignado
//    window.focus(); (si hay que modificar el código no va bien...)
    
    return true;
};

ObjetoCanvas.prototype.EnlazarEventos = function() {
    document.getElementById("Cabecera").addEventListener('mousemove', this.EventoMouseMove.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseenter', this.EventoMouseEnter.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseleave', this.EventoMouseLeave.bind(this));
    window.addEventListener('resize', this.EventoRedimensionar.bind(this));
    window.addEventListener('scroll', this.EventoScroll.bind(this));
    window.addEventListener('blur', this.EventoFocoPerdido.bind(this));
    window.addEventListener('focus', this.EventoFocoRecibido.bind(this));
};

ObjetoCanvas.prototype.EventoFocoRecibido = function() {
    console.log("Foco de la ventana recibido");
    this.FocoWeb = true;
    this.Reanudar();
};
    
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
//    if ($Banner !== null) {
    this.FPS(); 
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));
    this.Pintar.apply(this); 
//    }
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseMove = function(event) {    
    if (typeof(this.MouseMove) !== "undefined") {
        this.MouseMove.apply(this, event);
    }
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseEnter = function(event) {
    if (typeof(this.MouseEnter) !== "undefined") {
        this.MouseEnter.apply(this, event);
    }
};

// Función que procesa el evento mousemove
ObjetoCanvas.prototype.EventoMouseLeave = function(event) {
    if (typeof(this.MouseLeave) !== "undefined") {
        this.MouseLeave.apply(this, event);
    }
};

// Función que obtiene el tamaño del canvas una vez redimensionado.
ObjetoCanvas.prototype.EventoRedimensionar = function() {
    /* El ancho del canvas siempre tiene que ser el mismo que #MarcoNavegacion - 60 pixeles que ocupan los botones de la izquierda
     * La altura del canvas siempre es la misma desde el principio */
    this.Ancho  = document.getElementById("Cabecera").offsetWidth;
    this.Alto   = document.getElementById("Cabecera").offsetHeight;
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
    // Hago la llamada a la función Iniciar que debería tener el NuevoBanner
//        if (typeof(this.Iniciar) !== "undefined") { this.Iniciar(); }
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
    var Tick = Date.now();
    if (Tick > this.FPS_UltimoTick) {
        this.FPS_UltimoTick = Tick + 1000;
        document.getElementById("Cabecera_Stats").innerHTML = this.FPS_Contador + " FPS";
        this.FPS_Contador = 0;
    }
    else {
        this.FPS_Contador ++;
    }
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