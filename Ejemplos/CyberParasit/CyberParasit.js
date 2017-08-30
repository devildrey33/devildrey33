/* Three.js CyberParasit creado por Josep Antoni Bover Comas el 08/08/2017 para devildrey33.es
        Ultima modificación el 30/08/2017  */
"use strict";

// Constructor
var CyberParasit = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoCanvas.call(this, { 
        Tipo              : 'THREE',
        Ancho             : 'Auto',
        Alto              : 'Auto',
        Entorno           : 'Normal',
        MostrarFPS        : !ObjetoNavegador.EsMovil(),
        BotonLogo         : false,
        BotonExtraHTML    : '<div class="ObjetoCanvas_Marco" id="BeatActual" title="Beats transcurridos"><div>0</div></div>',
        ElementoRaiz      : document.body,
        Pausar            : false,             // Pausa el canvas si la pestaña no tiene el foco del teclado
        ColorFondo        : 0x999999,
        ForzarLandscape   : false, // no acaba de funcionar...
        CapturaEjemplo    : "CyberParasit.png"
    }) === false) { return false; }
    
    // Se ha creado el canvas, inicio los valores de la animación ... 
    this.Iniciar();
};

CyberParasit.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
    constructor     : CyberParasit, 
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(Evento) { 
/*        var man = this.Ancho / 2;
        var mal = this.Alto / 2;
        var px = (Evento.clientX - man) / 100;
        var py = (Evento.clientY - mal) / 40;
        var rx = (Evento.clientX - man) / 50000;
        var ry = (Evento.clientX - mal) / 15000;
        this.Camara.position.x = px;
        this.Camara.position.y = -py;
        this.Camara.rotation.x = rx;
        this.Camara.rotation.y = ry;
        this.Camara.lookAt(new THREE.Vector3(0,0,0));
        console.log(this.Camara.position, this.Camara.rotation);*/
    },
    // Función que se llama al presionar un botón del mouse por el canvas
    MousePresionado : function(Evento) { },
    // Función que se llama al soltar un botón del mouse por el canvas
    MouseSoltado    : function(Evento) { },
    // Función que se llama al entrar con el mouse en el canvas
    MouseEnter      : function(Evento) { },
    // Función que se llama al salir con el mouse del canvas
    MouseLeave      : function(Evento) { },
    // Función que se llama al presionar una tecla
    TeclaPresionada : function(Evento) { },
    // Función que se llama al soltar una tecla
    TeclaSoltada    : function(Evento) { },
    // Función que se llama al presionar la pantalla
    TouchStart      : function(Evento) { },
    // Función que se llama al soltar el dedo de la pantalla
    TouchEnd        : function(Evento) { },    
    // Variable que indica si se ha terminado la canción
    Terminado       : false,
    // Muestra / oculta el marco que cuenta los beats
    MostrarBeats    : false,
    // Utilizar desde CyberParasit_Animacion
    Debug_IniciarDesdeBeat : 0, 
    
    Parasito_Colores : [
        new THREE.Color('rgb(  0,   0, 128)'), // 0 - Pluma para los bordes de los circulos
        new THREE.Color('rgb(  0,   0, 128)'), // 1 - Fondo graves (circulo exterior)
        new THREE.Color('rgb(119, 136, 153)'), // 2 - Fondo medios (circulo del mig)
        new THREE.Color('rgb(176, 196, 222)'), // 3 - Fondo agudos (circulo interior)
        new THREE.Color('rgb(254, 255, 255)'), // 4 - Onda circular
        new THREE.Color('rgb( 65, 105, 255)'), // 5 - Color cubo        
    ],
    
    Parasito_PresetAzul : [
        new THREE.Color('rgb(  0,   0, 128)'), // 0 - Pluma para los bordes de los circulos
        new THREE.Color('rgb(  0,   0, 128)'), // 1 - Fondo graves (circulo exterior)
        new THREE.Color('rgb(119, 136, 153)'), // 2 - Fondo medios (circulo del mig)
        new THREE.Color('rgb(176, 196, 222)'), // 3 - Fondo agudos (circulo interior)
        new THREE.Color('rgb(254, 255, 255)'), // 4 - Onda circular
        new THREE.Color('rgb( 65, 105, 255)'), // 5 - Color cubo        
    ],
    
    Parasito_PresetVerde : [
        new THREE.Color('rgb(  0,  64,   0)'), // 0 - Pluma para los bordes de los circulos
        new THREE.Color('rgb(  0, 128,   0)'), // 1 - Fondo graves (circulo exterior)
        new THREE.Color('rgb(229, 231, 233)'), // 2 - Fondo medios (circulo del mig)
//        new THREE.Color('rgb(  0, 255,   0)'), // 3 - Fondo agudos (circulo interior)
        new THREE.Color('rgb(125, 206, 160)'), // 3 - Fondo agudos (circulo interior)
        new THREE.Color('rgb(254, 255, 255)'), // 4 - Onda circular
        new THREE.Color('rgb( 40, 180,  99)'), // 5 - Color cubo        
    ],
    
    Parasito_PresetRojo : [
        new THREE.Color('rgb( 64,   0,   0)'), // 0 - Pluma para los bordes de los circulos
        new THREE.Color('rgb(148,  49,  38)'), // 1 - Fondo graves (circulo exterior)
        new THREE.Color('rgb(223, 221, 219)'), // 2 - Fondo medios (circulo del mig)
        new THREE.Color('rgb(255,   0,   0)'), // 3 - Fondo agudos (circulo interior)
        new THREE.Color('rgb(254, 255, 255)'), // 4 - Onda circular
        new THREE.Color('rgb(203,  67,  53)'), // 5 - Color cubo        
    ],
    // Función que inicia el ejemplo
    Iniciar         : function() {
        // Oculto el marco de los beats 
        if (this.MostrarBeats === false || ObjetoNavegador.EsMovil() === true) {
            document.getElementById("BeatActual").style.display = "none";
        }
                
        // Activo el mapeado de sombras
        this.Context.shadowMap.enabled	= true;        
        
        // Creo la escena y la cámara
        this.Escena = new THREE.Scene();        
        window.scene = this.Escena;         // Three.js inspector
        this.Camara = new THREE.PerspectiveCamera(75, this.Ancho / this.Alto, 0.5, 2000);
        this.Camara.position.set(0, 10, 30);
        this.Camara.name = "Camara";
        this.Escena.add(this.Camara);
        this.Camara.lookAt(new THREE.Vector3(0, 0, 0));
        // Creo niebla si no es un dispositivo movil o el firefox
        if (ObjetoNavegador.EsMovil() === false) {
            this.Escena.fog = new THREE.Fog(0xaaaaaa, 0, 350);
        }


        // Inicio el API del audio y cargo la canción
        this.Audio = new CyberParasit_Audio();
        this.Audio.Iniciar(this);        
//        this.Audio.CargarCancion();

        // Creacion de los objetos de la escena
        this.CrearEscenario();                
        this.CrearLuces();        
        this.CrearParasitos();
                
        // Datos relacionados con los Beats Per Minute
        this.BPM = 93.02;
        this.BeatMS = 60000 / this.BPM;
        this.Beats = 0;
        this.UltimoBeat = 0;
        
        // Instancia para el objeto encargado de las animaciones de tiempo http://devildrey33.es/Ejemplos/Utils/ObjetoAnimacion.js
        this.Animaciones = new CyberParasit_Animaciones;
        this.Debug_IniciarDesdeBeat = this.Animaciones.Iniciar(this);              
        
        // Creo e inicio una instancia del ObjetoTest
        if (typeof(CyberParasit_Test) !== "undefined") {
            this.Test = new CyberParasit_Test();
            this.Test.Iniciar(this);
        }
        // Si no estoy depurando a partir del Beat X, asigno los valores iniciales del cubo para la animación inicial.
/*        if (this.Debug_IniciarDesdeBeat === 0) {
            this.Animaciones.Ani_Inicial.AsignarValoresIniciales();
        }*/
    },
    
    
    CrearParasitos  : function() { 
        this.Parasito = [];

        // Inicio el plano 2D para el Ojo del robot
        this.BufferOjo = new BufferCanvas(512, 512);
        this.BufferOjo.Textura = new THREE.Texture(this.BufferOjo.Canvas);
        this.BufferOjo.Context.lineWidth = 5;      
        
        this.PintarOjo(this.Tick, [0, 0, 0, 0, 0]);
        
        var Cubo_Materiales = [
/*            new THREE.MeshPhongMaterial({ color : this.Parasito_Colores[5], specular : 0x3333AA, transparent : true, opacity : 0.8, shininess : 200 }),
            new THREE.MeshPhongMaterial({ color : this.Parasito_Colores[5], specular : 0x3333AA, transparent : true, opacity : 0.8, shininess : 200 }),
            new THREE.MeshPhongMaterial({ color : this.Parasito_Colores[5], specular : 0x3333AA, transparent : true, opacity : 0.8, shininess : 200 }),
            new THREE.MeshPhongMaterial({ color : this.Parasito_Colores[5], specular : 0x3333AA, transparent : true, opacity : 0.8, shininess : 200 }),
            new THREE.MeshPhongMaterial({ map   : this.BufferOjo.Textura,    specular : 0x3333AA, transparent : true, opacity : 0.8, shininess : 200 }),
            new THREE.MeshPhongMaterial({ color : this.Parasito_Colores[5], specular : 0x3333AA, transparent : true, opacity : 0.8, shininess : 200 })*/

            new THREE.MeshStandardMaterial({ color : this.Parasito_Colores[5], metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.8 }),
            new THREE.MeshStandardMaterial({ color : this.Parasito_Colores[5], metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.8 }),
            new THREE.MeshStandardMaterial({ color : this.Parasito_Colores[5], metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.8 }),
            new THREE.MeshStandardMaterial({ color : this.Parasito_Colores[5], metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.8 }),
            new THREE.MeshStandardMaterial({ map   : this.BufferOjo.Textura,   metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.8 }),
            new THREE.MeshStandardMaterial({ color : this.Parasito_Colores[5], metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.8 })
        ];
        
        this.Parasitos = new THREE.Group();
        this.Escena.add(this.Parasitos);
        
        var Cubo_Geometria = new THREE.BoxGeometry( 10, 10, 10 );
        this.Cubo_Material = new THREE.MultiMaterial(Cubo_Materiales);
        // Creo 13 cubos
        for (var i = 0; i < 13; i++) {
            this.Parasito[i] = new THREE.Group();
            var Cubo = new THREE.Mesh(  Cubo_Geometria, this.Cubo_Material );
            Cubo.castShadow = true;
            Cubo.receiveShadow = true;                                            
            this.Parasito[i].add(Cubo);
            if (ObjetoNavegador.EsMovil() === false) {
                var CuboWire = new THREE.Mesh(  Cubo_Geometria, new THREE.MeshStandardMaterial({ color : 0x555555, metalness: 0.1, roughness: 0.4, transparent : true, opacity : 0.5, wireframe:true }) );
                this.Parasito[i].add(CuboWire);
            }
            this.Parasitos.add(this.Parasito[i]);
            
            if (i > 0) { this.Parasito[i].scale.set(0.01); }
        }
        
        this.Parasitos_Visibles = 1;
    },
    
    CrearEscenario : function() {
        this.Escenario = new THREE.Group();
        this.Escenario.name = "Escenario";
        this.Escena.add(this.Escenario);
        
        var Color = 0x002200;
        
        // Palno para el suelo
        this.Suelo = new THREE.Mesh(    new THREE.PlaneGeometry(260, 260), 
                                        new THREE.MeshPhongMaterial({ color: Color, specular : 0xcccccc }));
        this.Suelo.name = "Suelo";
        this.Suelo.rotation.x = -Math.PI / 2;
        this.Suelo.position.y = -44;
//        this.Suelo.position.z = -110;
        this.Suelo.castShadow = false;
        this.Suelo.receiveShadow = true;
        this.Escenario.add(this.Suelo);
      
        var loader = new THREE.JSONLoader();        
        loader.load(
            // resource URL
            '/Ejemplos/CyberParasit/CyberParasit_ModeloPlacaMadre.json',
            // Function when resource is loaded
            function ( Geometria ) {
                this.CrearPlacaMadre(Geometria);
            }.bind(this)
        );        
    },
    
    CrearPlacaMadre : function(Geometria) {
        this.Cargando(false);
        if (ObjetoNavegador.EsMovil() === false) {
            this.PlacaMadre2 = new THREE.Mesh( Geometria, new THREE.MeshPhongMaterial({ color: 0x333333, specular : 0xbbbbbb, wireframe : true }) );
            this.PlacaMadre2.scale.set(100, 100, 100);
            this.PlacaMadre2.position.y = -45;
            this.PlacaMadre2.position.z = -40;
            this.Escenario.add(this.PlacaMadre2);
        }
                
        this.PlacaMadre = new THREE.Mesh( Geometria, new THREE.MeshStandardMaterial({ color: 0x888888, metalness: 0.4, roughness: 0.4 }));
        this.PlacaMadre.scale.set(100, 100, 100);
        this.PlacaMadre.position.y = -44.95;
        this.PlacaMadre.position.z = -40;
        this.PlacaMadre.castShadow = false;
        this.PlacaMadre.receiveShadow = true;
        this.Escenario.add(this.PlacaMadre);
    },

    
    CrearLuces      : function() {        
        this.PointLight = new THREE.PointLight( 0xaaaaaa, 0.6, 300 );
        this.PointLight.position.set(20, 55.5, 20); // No es pot tocar la altura (o s'ha de modificar de la animació beeeng)
        this.PointLight.castShadow = true;
        this.PointLight.name = "PointLight";
        this.PointLight.shadow.mapSize.width = 512;
        this.PointLight.shadow.mapSize.height = 512;
        this.Escena.add(this.PointLight);
        this.Escena.add(new THREE.PointLightHelper(this.PointLight, 1));

/*        this.PointLight2 = new THREE.PointLight( this.Parasito_Colores[3], 0.2, 200 );
        this.PointLight2.position.set(5, 1, 20);
        this.PointLight2.castShadow = true;
        this.PointLight2.name = "PointLight2";
        this.PointLight2.shadow.mapSize.width = 512;
        this.PointLight2.shadow.mapSize.height = 512;
        this.Escena.add(this.PointLight2);
        this.Escena.add(new THREE.PointLightHelper(this.PointLight, 1));*/
        if (ObjetoNavegador.EsMovil() === false) {
            this.PointLight3 = new THREE.PointLight( this.Parasito_Colores[3], 0.4, 100 );
            this.PointLight3.position.set(-90, 5, -95);
            this.PointLight3.castShadow = true;
            this.PointLight3.name = "PointLight3";
            this.PointLight3.shadow.mapSize.width = 512;
            this.PointLight3.shadow.mapSize.height = 512;
            this.Escena.add(this.PointLight3);
        }
//         this.Escena.add(new THREE.PointLightHelper(this.PointLight3, 1));/*
        
        this.PointLight4 = new THREE.PointLight( this.Parasito_Colores[3], 0.3, 300 );
        this.PointLight4.position.set(90, 15, -175);
        this.PointLight4.castShadow = true;
        this.PointLight4.name = "PointLight4";
        this.PointLight4.shadow.mapSize.width = 512;
        this.PointLight4.shadow.mapSize.height = 512;
        this.Escena.add(this.PointLight4);
//         this.Escena.add(new THREE.PointLightHelper(this.PointLight4, 1));*/
        //        this.Escena.add(new THREE.PointLightHelper(this.PointLight3, 1));

        // HemisphereLight  
        this.HemiLight = new THREE.HemisphereLight( 0xeeeeee, 0xffffff, 1 );
        this.HemiLight.color.setHSL( 0.6, 0.6, 0.6 );
        this.HemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
        this.HemiLight.position.set( 0, 0, 0 );
        this.HemiLight.name = "HemiLight";
        this.Escena.add( this.HemiLight );           
    },
    
    Audio_EventoCanPlay : function() {
        this.Cargando(false);
        if (this.Debug_IniciarDesdeBeat > 0) {
            this.IniciarShow();
        }
        else {
            document.getElementById("Empezar").setAttribute("visible", true);            
        }
        
        
    },
    
    Audio_EventoTerminado : function() {
        this.Terminado = true;
        document.getElementById("Repetir").setAttribute("visible", true);        
        document.getElementById("Creditos").setAttribute("visible", true);

        this.RestaurarPantalla();
    },
    
    IniciarShow : function() {
        this.PantallaCompleta();
        
        this.Animaciones.Iniciar(this);
        // Si estoy depurando en un beat especifico, asigno a 0 la rotación de los parasitos
        if (this.Debug_IniciarDesdeBeat > 0) {
            this.Parasito[0].rotation.set(0, 0, 0);
        }
        
        this.TickInicio = this.Tick - (this.Debug_IniciarDesdeBeat * Math.floor(this.BeatMS));
        this.Beats = this.Debug_IniciarDesdeBeat;
        this.Audio.Cancion.currentTime = (this.Debug_IniciarDesdeBeat * this.BeatMS)  / 1000;
        console.log("ms entre Beats : " + this.BeatMS);
//        console.log(this.Audio.Cancion.currentTime, (this.Debug_IniciarDesdeBeat * this.BeatMS)  / 1000);
        console.log(this.Audio.Cancion.duration, (this.Audio.Cancion.duration * 1000) / this.BeatMS);
        
        this.Audio.PlayPausa();
//        this.TickInicio = this.Tick;
        this.Terminado = false;
        document.getElementById("Empezar").setAttribute("visible", false);
        document.getElementById("Repetir").setAttribute("visible", false);
        document.getElementById("Creditos").setAttribute("visible", false);
        
        this.Animaciones.Pasos_Actual = 0;
        for (var i = 0; i < this.Animaciones.Pasos_Animacion.length; i++) {
            if (this.Animaciones.Pasos_Animacion[i].Beat < this.Debug_IniciarDesdeBeat) {
                this.Animaciones.Pasos_Actual ++;
            }
        }
        
//        this.Animaciones.RotarZ.Iniciar();
    },
    

    PintarOjo : function(Tick, MediaAudio) {

        var mx = (this.BufferOjo.Ancho / 2);
        var my = (this.BufferOjo.Alto / 2);
        
        this.BufferOjo.Context.fillStyle = "rgb(" + Math.floor(this.Parasito_Colores[5].r * 255) + "," + Math.floor(this.Parasito_Colores[5].g * 255) + "," + Math.floor(this.Parasito_Colores[5].b * 255) + ")";
//        this.BufferOjo.Context.fillStyle = "#" + this.Parasito_Colores[5].getHexString();
        this.BufferOjo.Context.fillRect(0, 0, this.BufferOjo.Ancho, this.BufferOjo.Alto);
                       
                
        var Valor = this.Audio.DatosAnalizadorSin[0];
        this.BufferOjo.Context.strokeStyle = "rgb(" + Math.floor(this.Parasito_Colores[0].r * 255) + "," + Math.floor(this.Parasito_Colores[0].g * 255) + "," + Math.floor(this.Parasito_Colores[0].b * 255) + ")";
//        this.BufferOjo.Context.strokeStyle = "#" + this.Parasito_Colores[0].getHexString();
        
        // Pinto el circulo con la media de los graves
        this.BufferOjo.Context.fillStyle = "rgb(" + Math.floor(this.Parasito_Colores[1].r * 255) + "," + Math.floor(this.Parasito_Colores[1].g * 255) + "," + Math.floor(this.Parasito_Colores[1].b * 255) + ")";
//        this.BufferOjo.Context.fillStyle = "#" + this.Parasito_Colores[1].getHexString();
        this.BufferOjo.Context.beginPath();        
        this.BufferOjo.Context.arc(mx, my, 20 + (MediaAudio[0]) * 0.8, 0, this.Constantes.TAU, false);
        this.BufferOjo.Context.stroke();
        this.BufferOjo.Context.fill();

        // Pinto el circulo con la media de los medios        
        this.BufferOjo.Context.fillStyle = "rgb(" + Math.floor(this.Parasito_Colores[2].r * 255) + "," + Math.floor(this.Parasito_Colores[2].g * 255) + "," + Math.floor(this.Parasito_Colores[2].b * 255) + ")";
//        this.BufferOjo.Context.fillStyle = "#" + this.Parasito_Colores[2].getHexString();
        this.BufferOjo.Context.beginPath();        
        this.BufferOjo.Context.arc(mx, my, 26 + (MediaAudio[1]) * 0.7, 0, this.Constantes.TAU, false);
        this.BufferOjo.Context.stroke();
        this.BufferOjo.Context.fill();
        
        // Pinto el circulo con la media de los agudos        
        this.BufferOjo.Context.fillStyle = "rgb(" + Math.floor(this.Parasito_Colores[3].r * 255) + "," + Math.floor(this.Parasito_Colores[3].g * 255) + "," + Math.floor(this.Parasito_Colores[3].b * 255) + ")";
//        this.BufferOjo.Context.fillStyle = "#" + this.Parasito_Colores[3].getHexString();
        this.BufferOjo.Context.beginPath();        
        this.BufferOjo.Context.arc(mx, my, (32 + MediaAudio[2]) * 0.6, 0, this.Constantes.TAU, false);
        this.BufferOjo.Context.stroke();
        this.BufferOjo.Context.fill();
        
        // Onda circular
        this.BufferOjo.Context.strokeStyle = "rgb(" + Math.floor(this.Parasito_Colores[4].r * 255) + "," + Math.floor(this.Parasito_Colores[4].g * 255) + "," + Math.floor(this.Parasito_Colores[4].b * 255) + ")";
//        this.BufferOjo.Context.strokeStyle = "#" + this.Parasito_Colores[4].getHexString();;
        this.BufferOjo.Context.beginPath();        

        var Avance = this.Constantes.TAU / this.Audio.TamDatos;
        var Angulo = Tick;
        var i = 0;
        for (var i = 0; i < this.Audio.TamDatos; i++) {
            Valor = this.Audio.DatosAnalizadorSin[i] * 0.7;
            var x = mx + (Math.cos(Angulo) * (90 + Valor));
            var y = my + (Math.sin(Angulo) * (90 + Valor));
            
            this.BufferOjo.Context.lineTo(x, y);            
            Angulo += Avance;
        }
        Valor = this.Audio.DatosAnalizadorSin[0] * 0.7;
        this.BufferOjo.Context.lineTo(mx + (Math.cos(Tick) * (90 + Valor)), my + (Math.sin(Tick) * (90 + Valor)));            
        this.BufferOjo.Context.closePath();
        this.BufferOjo.Context.stroke();
        this.BufferOjo.Textura.needsUpdate = true;
    },    
        
        
    MostrarBPM : function() {        
        if (!this.TickInicio || this.Terminado === true) { return; }
        this.Beats = Math.floor((this.Audio.Cancion.currentTime * 1000) / this.BeatMS);
        if (this.MostrarBeats === false) { return; }
        document.querySelector("#BeatActual > div").innerHTML = this.Beats;
    },
    
    // Función que pinta cada frame de la animación
    Pintar          : function() {          
        this.MostrarBPM();
        this.Animaciones.ActivarAnimacion();
        this.Animaciones.OA.Actualizar(this.Tick);
        var MediasAudio = this.Audio.MediaFrequenciasAudio();
        this.PintarOjo(this.Tick, MediasAudio);
        
        this.Context.render(this.Escena, this.Camara); 
    }    
});


// Inicialización del canvas en el Load de la página
var CP = null;
window.addEventListener('load', function() { CP = new CyberParasit; });
