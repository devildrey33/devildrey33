/* Para crear un nuevo banner hay que seguir estos pasos : 
 *  - Modificar el archivo /Web/Config/ArchivosMinify.php, para añadirle el nuevo script para el banner. 
 *  - Modificar la variable $Banner_Lista, y añadir-le al final el nombre del objeto para el banner 
 *  - Construir un objeto que pueda ser "heredado" (aunque mas bien es engullido xd) por el ObjetoBanner */


/* Objeto base para los banners canvas
 * Los banners deben tener estas funciones sin parámetros : 
 *  - Iniciar       : Valores iniciales                 [requerida] (NOTA Dentro de esta función hay que reiniciar todos los valores de la animación por que al re-dimensionar el canvas  el 99% de veces se necesita unos valores acordes al ancho y alto disponibles.)
 *  - Pintar        : Pintado de la escena              [requerida]
 *  - Redimensionar : Redimensionar la escena           [opcional]  (Creo que no es necesaria ahora que esta función ejecuta la función Iniciar)
 *  - Scroll        : Al hacer scroll                   [opcional]
 * También requiere las siguientes variables :
 *  - Nombre        : Nombre de la animación            [requerida]
 *  - IdeaOriginal  : Nombre del autor del concepto     [requerida]
 *  - NombreURL     : URL del concepto                  [requerida]
 *  - URL           : URL del concepto                  [requerida]
 */


// Lista de banners
var $Banner_Lista = [ Banner_ResplandorCircular,
                      Banner_Colisiones, 
                      Banner_TranstornoLineal, 
                      Banner_Espacio2D, 
                      Banner_MatrixLluviaHexadecimal ];

var $Banner = null;

ObjetoBanner = function(NuevoBanner) {
    // Añado todas las funciones y variables del NuevoBanner a este objeto antes de hacer nada. (POEO Programación Orientada a Engullir Objetos??)
    // (probablemente no es la forma más correcta para utilizar la POO en Java Script, pero es la que me resulta más cómoda.)
    for (var Propiedad in NuevoBanner) { 
        if (this.hasOwnProperty(Propiedad) === false) {
            this[Propiedad] = NuevoBanner[Propiedad];
        }
    }
    // Variables para el banner
    this.Canvas     = document.getElementById("Cabecera_Canvas");
    this.Context    = this.Canvas.getContext("2d");
    this.Ancho      = 0;
    this.Alto       = 0;
    this.RAFID      = 0; // Request Animation Frame ID
    this.Stats      = new Stats();
    
    this.PIx2 = Math.PI * 2;

    // FPS
    document.getElementById("Cabecera_Stats").innerHTML = "";
    document.getElementById("Cabecera_Stats").appendChild(this.Stats.domElement);
 
    this.IniciarBanner = function() {
        console.log("Banner.IniciarBanner");
        // Marco que contiene la información de la animación
        $("#CabeceraAutorAni_HTML").html(   "<div>"+ this.Nombre +"</div>" +
                                            "<div><span style='color:#AAA;'>Concepto original : </span><b>" + this.IdeaOriginal + "</b></div>" + 
                                            "<a href='" + this.URL + "' target='_blank'>" + this.NombreURL + "</a>");
        // Eventos para los botones next / prev
        $("#Cabecera_AutorAni > .BotonVentana:nth-child(1)").off("click").on("click", function() { $Base.Banner(-1); });
        $("#Cabecera_AutorAni > .BotonVentana:nth-child(3)").off("click").on("click", function() { $Base.Banner(-2); });
/*        this.Canvas = document.getElementById("Cabecera_Canvas");
        this.Context = this.Canvas.getContext("2d");*/
        this.EventoRedimensionar();
//        if (typeof(this.Iniciar) !== "undefined") { this.Iniciar(); }
        this.RAFID = window.requestAnimationFrame(this.Actualizar);       
    };   
    
    // Función interna utilizada por requestAnimationFrame para actualizar y pintar la animación
    this.Actualizar = function() {
        if ($Banner !== null) {
            $Banner.RAFID = window.requestAnimationFrame($Banner.Actualizar);
            $Banner.Pintar(); 
            $Banner.Stats.update();
        }
    };
    
    // Función que obtiene el tamaño del canvas una vez redimensionado.
    this.EventoRedimensionar = function() {
        this.Ancho  = this.Canvas.parentNode.offsetWidth - 200; // El 60 es el ancho del boton, pero no es correcto en ciertas resoluciones moviles...
        this.Alto   = this.Canvas.parentNode.offsetHeight;
        this.Canvas.width  = this.Ancho;
        this.Canvas.height = this.Alto;
        if (typeof(this.Redimensionar) !== "undefined") {
            this.Redimensionar();
        }
        // Hago la llamada a la función Iniciar que debería tener el NuevoBanner
        if (typeof(this.Iniciar) !== "undefined") { this.Iniciar(); }
    };

    // Función para pausar la animación
    // - Hay que detectar cuando la animación no es visible y cuando la ventana no tiene el foco para pausar la animación
    this.Pausa = function() {
        if (this.RAFID !== 0) {
            $(".Cabecera").attr({ "animar" : "false" });
            console.log("Banner.Pausa");
            window.cancelAnimationFrame(this.RAFID); 
            this.RAFID = 0;            
        }
    };
    
    // Función para reanudar la animación desde el ultimo punto
    this.Reanudar = function() {
        if (this.RAFID === 0 && $Base.FocoWeb === true) {
            $(".Cabecera").attr({ "animar" : "true" }); 
            this.RAFID = window.requestAnimationFrame(this.Actualizar); 
            console.log("Banner.Reanudar RAFID = " + this.RAFID);
        }
    };
    
    this.EventoScroll = function() {
        var Header = $(".Cabecera");
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
                this.Scroll();
            }
            
        }
    };
      
    
    /////////////////
    // Constructor //
    /////////////////
    this.IniciarBanner();
};



$(window).on("resize", function() { 
    if ($Banner !== null) { $Banner.EventoRedimensionar(); }
});


// Evento posición scroll
$(window).on("scroll", function() { 
    if ($Banner !== null) { $Banner.EventoScroll(); }
});

// Evento foco perdido
$(window).on("blur", function() { 
    $Base.FocoWeb = false;
    console.log("Foco de la ventana perdido");
    if ($Banner !== null) {
        $Banner.Pausa();
    }
});

// Evento foco obtenido
$(window).on("focus", function() { 
    $Base.FocoWeb = true;
    console.log("Foco de la ventana recibido");
    if ($Banner !== null) {
        if ($(window).scrollTop() < 190) {
            $Banner.Reanudar();
        }
    }
});
