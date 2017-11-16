// Constructor 
var TestCanvas2D = function() {
    // Llamo al constructor del ObjetoBanner
    if (Canvas2D.call(this, { 
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
    }) === false) { return false; }
    // Se ha creado el canvas, inicio los valores de la animación ... 

    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};

TestCanvas2D.prototype = Object.assign( Object.create(Canvas2D.prototype), {
    constructor     : TestCanvas2D, 
    // Función que se llama al redimensionar el documento
    EventoRedimensionar   : function() {    },
/*    // Función que se llama al hacer scroll en el documento    
    EventoScroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    EventoMouseMove       : function(Evento) { },
    // Función que se llama al presionar un botón del mouse por el canvas
    EventoMousePresionado : function(Evento) { },
    // Función que se llama al soltar un botón del mouse por el canvas
    EventoMouseSoltado    : function(Evento) { },
    // Función que se llama al entrar con el mouse en el canvas
    EventoMouseEnter      : function(Evento) { },
    // Función que se llama al salir con el mouse del canvas
    EventoMouseLeave      : function(Evento) { },
    // Función que se llama al presionar una tecla
    EventoTeclaPresionada : function(Evento) { },
    // Función que se llama al soltar una tecla
    EventoTeclaSoltada    : function(Evento) { },
    // Función que se llama al presionar la pantalla
    EventoTouchStart      : function(Evento) { },
    // Función que se llama al soltar el dedo de la pantalla
    EventoTouchEnd        : function(Evento) { },    */
    // Función que se llama al perder el foco
    EventoFocoPerdido     : function() { },
    // Función que se llama al obtener el foco
    EventoFocoObtenido    : function() { },
    
    Iniciar               : function() { 
        console.log("iniciar");
        this.AgregarCapa(new TestCanvas2D_Capa1);
        this.AgregarCapa(new TestCanvas2D_Capa2);
    },
    
    // Función que pinta cada frame de la animación
    Pintar                : function() { }
});
