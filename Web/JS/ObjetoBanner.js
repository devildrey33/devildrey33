/* DEPRECATED should use ObjetoCanvas */


/* Para crear un nuevo banner hay que seguir estos pasos : 
 *  - Modificar el archivo /Web/Config/ArchivosMinify.php, para añadirle el nuevo script para el banner. 
 *  - Modificar la variable $Banner_Lista, y añadir-le al final el nombre del objeto para el banner 
 *  - Construir un objeto que pueda ser "heredado" (aunque mas bien es engullido xd) por el ObjetoBanner */


/* Objeto base para los banners canvas
 * Los banners deben tener estas funciones sin parámetros : 
 *  - Pintar        : Pintado de cada frame de la escena [requerida]
 *  - Redimensionar : Redimensionar la escena            [opcional]  (Creo que no es necesaria ahora que esta función ejecuta la función Iniciar)
 *  - Scroll        : Al hacer scroll                    [opcional]
 * También requiere las siguientes variables :
 *  - Nombre        : Nombre de la animación             [requerida]
 *  - IdeaOriginal  : Nombre del autor del concepto      [requerida]
 *  - NombreURL     : URL del concepto                   [requerida]
 *  - URL           : URL del concepto                   [requerida]
 */

/* Al crear el banner se llama a las siguientes funciones en este orden : IniciarBanner > EventoRedimensionar > Redimensionar > Iniciar 
 * Una vez iniciado llamará a la función Pintar cada 16 milisegundos */

// Lista de banners
/*var $Banner_Lista = [ Banner_ResplandorCircular,        "2d",
                      Banner_Colisiones,                "2d",
                      Banner_TranstornoLineal,          "2d",
                      Banner_Espacio2D,                 "2d",
                      Banner_MatrixLluviaHexadecimal,   "2d",
                      Banner_Cubos3D,                   "THREE"];
*/
var $Banner = null;
//var Banner_Depurar = true;
var Banner_Depurar = false; // necesaria para poder controlar la depuración desde el panel de administración

/* El primer parametro es una nueva instancia a la classe banner que queremos ejecutar 
 * El segundo parámetro es el tipo de contexto, "2d" o "THREE", si no se especifica, por defecto es 2d */
ObjetoBanner = function(Tipo) {        
    // Hay que eliminar la etiqueta canvas por que al crear un 2d context encima de un webgl context y viceversa produce error.
    $("#Cabecera_Canvas").remove();
    $("#Cabecera").append("<canvas id='Cabecera_Canvas'></canvas>");
    this.Canvas = document.getElementById("Cabecera_Canvas");

    // Asigno el estado cargando, que muestra una ventana que avisa al usuario.
    this.Cargando(true);

    // Tipo por defecto
    if (typeof(Tipo) === "undefined") { this.Tipo = "2d"; }
    else                              { this.Tipo = Tipo; }

    console.log("constructor ObjetoBanner", this.Tipo);
    
    try {
        // Creo el contexto según el tipo especificado
        if (this.Tipo === "2d") {
            this.Context    = this.Canvas.getContext("2d");                         // Contexto 2D
        } else if(this.Tipo === "THREE") { 
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
        document.getElementById("Cabecera_Cargando").innerHTML = "Error iniciando WebGL : " + error + "<br />" + 
                                                                 "Si estas en chrome abre el enlace 'chrome://gpu', y vuelve atrás para re-cargar este ejemplo.";
        return false;
    }
//    this.Camara         = null;                                             // Camara para el Three.js

    this.Ancho          = 0;                                                // Ancho del canvas
    this.Alto           = 0;                                                // Altura del canvas
    this.RAFID          = 0;                                                // Request Animation Frame ID
    this.FPS_UltimoTick = Date.now() + 1000;                                // Ultimo Tick del sistema + 1000ms
    this.FPS_Contador   = 0;                                                // Contador de frames por segundo    
    this.PIx2           = Math.PI * 2;                                      // PI + PI
    this.FocoWeb        = true;                                             // Foco de la ventana de la web
    
    
    // Marco que contiene la información de la animación
    $("#CabeceraAutorAni_HTML").html(   "<div>"+ this.Nombre +"</div>" +
                                        "<div><span style='color:#AAA;'>Concepto original : </span><b>" + this.IdeaOriginal + "</b></div>" + 
                                        "<a href='" + this.URL + "' target='_blank'>" + this.NombreURL + "</a>");
    // Eventos para los botones next / prev
    $("#Cabecera_AutorAni > .BotonVentana:nth-child(1)").off("click").on("click", function() { $Base.Banner(-1); });
    $("#Cabecera_AutorAni > .BotonVentana:nth-child(3)").off("click").on("click", function() { $Base.Banner(-2); });
    this.EventoRedimensionar();
//    if (typeof(this.Iniciar) !== "undefined") { this.Iniciar.apply(this); }
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));       

    // Exporto la escena del THREE.JS para poder verla en el Three.js.inspector
//    if (typeof(this.Escena) !== "undefined") { window.scene = this.Escena; }
    
    document.getElementById("Cabecera").addEventListener('mousemove', this.EventoMouseMove.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseenter', this.EventoMouseEnter.bind(this));
    document.getElementById("Cabecera").addEventListener('mouseleave', this.EventoMouseLeave.bind(this));
    // Mouse
    // Evento mouse movimiento
    $("#Cabecera").on("mousemove", function(event) { 
        if ($Banner !== null) {
            $Banner.EventoMouseMove(event);
        }
    });    
    // Evento mouse movimiento
    $("#Cabecera").on("mouseenter", function(event) { 
        if ($Banner !== null) {
            $Banner.EventoMouseEnter(event);
        }
    });    
    // Evento mouse movimiento
    $("#Cabecera").on("mouseleave", function(event) { 
        if ($Banner !== null) {
            $Banner.EventoMouseLeave(event);
        }
    });    
    return true;
};

// Función que devuelve el pixel ratio del dispositivo actual
ObjetoBanner.prototype.PixelRatio = function() {
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
ObjetoBanner.prototype.Cargando = function(carga) {
    $("#Cabecera").attr({ "cargando" : carga });
};

// Función interna utilizada por requestAnimationFrame para actualizar y pintar la animación
ObjetoBanner.prototype.Actualizar = function() {
    this.FPS(); 
    this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this));
    this.Pintar.apply(this); 
};

// Función que procesa el evento mousemove
ObjetoBanner.prototype.EventoMouseMove = function(event) {
    if (typeof(this.MouseMove) !== "undefined") {
        this.MouseMove.apply(this, [ event ]);
    }
};

// Función que procesa el evento mousemove
ObjetoBanner.prototype.EventoMouseEnter = function(event) {
    if (typeof(this.MouseEnter) !== "undefined") {
        this.MouseEnter.apply(this, [ event ]);
    }
};

// Función que procesa el evento mousemove
ObjetoBanner.prototype.EventoMouseLeave = function(event) {
    if (typeof(this.MouseLeave) !== "undefined") {
        this.MouseLeave.apply(this, [ event ]);
    }
};

// Función que obtiene el tamaño del canvas una vez redimensionado.
ObjetoBanner.prototype.EventoRedimensionar = function() {
    /* El ancho del canvas siempre tiene que ser el mismo que #MarcoNavegacion - 60 pixeles que ocupan los botones de la izquierda
     * La altura del canvas siempre es la misma desde el principio */
    this.Ancho  = document.getElementById("MarcoNavegacion").offsetWidth - 60; // El 60 es el ancho del botón del menú lateral derecho, pero no es correcto en ciertas resoluciones moviles...
    this.Alto   = this.Canvas.offsetHeight;
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
ObjetoBanner.prototype.Pausa = function() {
    if (this.RAFID !== 0 && Banner_Depurar === false) {
        $("#Cabecera").attr({ "animar" : "false" });
        console.log("Banner.Pausa");
        window.cancelAnimationFrame(this.RAFID); 
        this.RAFID = 0;
    }
};

// Función para reanudar la animación desde el ultimo punto
ObjetoBanner.prototype.Reanudar = function() {
    if (this.RAFID === 0 && this.FocoWeb === true) {
        $("#Cabecera").attr({ "animar" : "true" }); 
        this.RAFID = window.requestAnimationFrame(this.Actualizar.bind(this)); 
        console.log("Banner.Reanudar RAFID = " + this.RAFID);
    }
};

// Función que controla el scroll para determinar si la animación sigue a la vista o no y de esta forma detenerla / reanudarla
ObjetoBanner.prototype.EventoScroll = function() {
    var Header = $("#Cabecera");
    if (Header.length > 0) { // Hay páginas que no tienen la cabecera
        var PS = $(window).scrollTop();
        var Altura = Header.get(0).offsetHeight;
        if (PS > Altura) {
            if ($Banner !== null) { $Banner.Pausa(); }
        }
        else if (PS < Altura) {
            if ($Banner !== null) { $Banner.Reanudar(); }
        }
        // Llamo a la función Scroll del NuevoObjeto (si existe)
        if (typeof(this.Scroll) !== "undefined") {
            this.Scroll.apply(this);
        }            
    }
};

// Función que cuenta los frames por segundo
ObjetoBanner.prototype.FPS = function() {
    var Tick = Date.now();
    if (Tick > this.FPS_UltimoTick) {
        this.FPS_UltimoTick = Tick + 1000;
        $("#Cabecera_Stats").html(this.FPS_Contador + " FPS");
        this.FPS_Contador = 0;
    }
    else {
        this.FPS_Contador ++;
    }
};
      
      
      
      
      

// Objeto que crea y contiene un canvas 2d para utilizarlo de back buffer
var BufferCanvas = function(Ancho, Alto) {
    this.Canvas = document.createElement("canvas");
    this.Canvas.setAttribute("width", Ancho);
    this.Canvas.setAttribute("height", Alto);
    this.Context = this.Canvas.getContext("2d"); 
    this.Ancho = Ancho;
    this.Alto = Alto;
};
      
      
      
      
      
      
      
      
// Objeto para crear animaciones      
var ObjetoAnimacion_Paso = function(Datos, Tiempo, Retraso, FuncionTiempo) {
    this.Datos   = Datos;
    this.Tiempo  = (typeof Tiempo        !== 'undefined') ? Tiempo  : 1;
    this.Retraso = (typeof Retraso       !== 'undefined') ? Retraso : 0;
    this.Funcion = (typeof FuncionTiempo !== 'undefined') ? Funcion : function() { };
};

var ObjetoAnimacion = function(ArrayPasos, FuncionTerminado) {
    this._UltimoTick         = 0;            // Ultimo date.now que se ha obtenido con la función Actualizar
    this._Pasos              = ArrayPasos;   // Array con los parámetros
    this._PosPasos           = 1;            // Posición dentro del array de datos
    this._PasoOrig           = this._Pasos[this._PosPasos - 1];
    this._PasoDest           = this._Pasos[this._PosPasos];
    this._Avance             = 0;
    this._FuncionTerminado   = (typeof FuncionTerminado !== 'undefined') ? FuncionTerminado : function() { };
    this.Terminado           = false;        // Animación terminada
    // Valores iniciales
    for (var Indice in this._PasoOrig.Datos) {                    
        this[Indice] = this._PasoOrig.Datos[Indice];
    }    
        
    this.Actualizar = function() {
        if (this.Terminado === true) { return; }
        var t = Date.now();
        if (this._UltimoTick !== 0) {
            // Tiempo desde el ultimo frame a este frame
            var TiempoFrame = t - this._UltimoTick;
            if (this._PasoDest.Retraso > 0) {
                this._PasoDest.Retraso = this._PasoDest.Retraso - TiempoFrame; 
            }
            else {
                this._Avance += (TiempoFrame / this._PasoDest.Tiempo);
                for (var Indice in this._PasoDest.Datos) {                    
                    this[Indice] = this._PasoOrig.Datos[Indice] - (this._PasoOrig.Datos[Indice] - this._PasoDest.Datos[Indice]) * this._Avance;
                }
                if (this._Avance >= 1) {
                    this._PosPasos ++;
                    if (this._PosPasos < this._Pasos.length) {
                        this._PasoOrig = this._Pasos[this._PosPasos - 1];
                        this._PasoDest = this._Pasos[this._PosPasos];
                        this._Avance = 0;
                    }
                    else {
                        this.Terminado = true;
                        this._FuncionTerminado();
                    }
                }
            }
        }        
        this._UltimoTick = t;
    };
};
      

/*var ani = new ObjetoAnimacion(Array(
    new ObjetoAnimacion_Paso({ x : 0, y : 500 }),
    new ObjetoAnimacion_Paso({ x : 500, y : 0 }, 5000),
    new ObjetoAnimacion_Paso({ x : 2500, y : -2500 }, 500)
));*/      
      
      
      
      
      
      
      
      
      
      


// Evento cambio de tamaño
$(window).on("resize", function() { 
    if ($Banner !== null) { $Banner.EventoRedimensionar(); }
});


// Evento posición scroll
$(window).on("scroll", function() { 
    if ($Banner !== null) { $Banner.EventoScroll(); }
});

// Evento foco perdido
$(window).on("blur", function() { 
    console.log("Foco de la ventana perdido");
    if ($Banner !== null) {
        $Banner.FocoWeb = false;
        $Banner.Pausa();
    }
});

// Evento foco obtenido
$(window).on("focus", function() { 
    console.log("Foco de la ventana recibido");
    if ($Banner !== null) {
        $Banner.FocoWeb = true;
        if ($(window).scrollTop() < 190) {
            $Banner.Reanudar();
        }
    }
});

// Evento mouse movimiento
/*$(window).on("mousemove", function(event) { 
   if ($Banner !== null) {
       $Banner.EventoMouseMove(event.clientX, event.clientY);
   }
});*/