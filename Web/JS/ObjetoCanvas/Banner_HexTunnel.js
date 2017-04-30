/* Plantilla para crear banners animados en devildrey33.es */

// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_HexTunnel = function() {
    // Llamo al constructor del ObjetoBanner, y si devuelve un error salgo retornando false.
    // El segundo parámetro del constructor puede ser "2d" o "THREE".
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : 'THREE',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body
    }) === false) { return false; }
    
    // Se ha creado el canvas, inicio los valores de la animación ... 
    this.Iniciar();
    
    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
    
    // Retorno true para advertir que se ha creado el canvas correctamente
    return true;
};


Banner_HexTunnel.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
    constructor     : Banner_HexTunnel, 
    
    Nombre          : "HexTunnel",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/HexTunnel.html",
    NombreURL       : "Lab : HexTunnel",    
    Invertir        : false,
    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function() {    },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function() {    },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(Evento) { },
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
    // Función que se llama al pausar el banner
    Pausa           : function() {  this.Animaciones.Pausa(); },
    // Función que se llama al reanudar el banner
    Reanudar        : function() {  this.Animaciones.Reanudar(); },
    // Función que se llama al justo despues de terminar el banner
    Terminado       : function() {  this.Animaciones.Limpiar(); },
    // Función que inicia el ejemplo
    Iniciar         : function() {
        // Instancia para el objeto encargado de las animaciones de tiempo http://devildrey33.es/Ejemplos/Utils/ObjetoAnimacion.js
        this.Animaciones = new ObjetoAnimacion;        
        // Activo el mapeado de sombras
        this.Context.shadowMap.enabled	= true;
        // Creo la escena
        this.Escena = new THREE.Scene();
        window.scene = this.Escena; // Three js inspector...
        // Creo la camara
        this.Camara = new THREE.PerspectiveCamera(75, this.Ancho / this.Alto, 0.5, 2000);
        this.Camara.position.set(0, 0, 10);        
        this.Camara.name = "Camara";
        this.Escena.add(this.Camara);
        
        // Plano para el suelo
        this.Suelo = new THREE.Mesh(    new THREE.PlaneGeometry(2000, 2000), 
                                        new THREE.MeshPhongMaterial({ color: 0x555555, specular : 0x777777 }));
        this.Suelo.name = "Suelo";
        this.Suelo.rotation.x = -Math.PI / 2;
        this.Suelo.position.y = -20;
        this.Suelo.castShadow = false;
        this.Suelo.receiveShadow = true;
        this.Escena.add(this.Suelo);
        
        this.Avance = 0;
        
        this.CrearBloques();

        this.CrearLuces();
    },
       
    CrearBloques : function() {        
//        this.Animaciones.Limpiar();
        this.Filas = 48; // 48 filas de 2 columnas
        // 8 Texturas que se repiten
        this.Texturas = [];
        for (var t = 0; t < 8; t++) {
            this.Texturas[t] =  new this.TexturaBloque(this.Animaciones);            
        } 
        
        this.Bloques  = [];
        var TA = 0; // TexturaActual
        for (var i = 0; i < this.Filas ; i++) {
            this.Bloques.push(new this.Bloque(this.Escena, -24, 0, i * -20, 0, 0, 0, this.Texturas[TA++]));
            this.Bloques.push(new this.Bloque(this.Escena, 24, 0, i * -20, 0, 0, 0, this.Texturas[TA++]));
            if (TA > 7) { TA = 0; }
        }
        
    },

    TexturaBloque : function(ObjAnimacion) {
        this.Buffer  = new BufferCanvas(512, 1024);
        this.Textura = new THREE.Texture(this.Buffer.Canvas);
        // Guardo el objeto animación global
        this.Animaciones = ObjAnimacion;

        this.Buffer.Context.fillStyle = "rgb(0, 0, 120)";
        this.Buffer.Context.fillRect(0, 0, this.Buffer.Ancho, this.Buffer.Alto);
        this.Buffer.Context.font = "32px monospace";

        // 512 - 60 / 26 (Ancho - Margen / Caracteres por linea)
        this.Buffer.Context.fillStyle = "rgb(95, 95, 95)";

        // Función para obtener un valor hexadecimal aleatório.
        this.RandHex = function() {
            return '0x' + Math.random().toString(16).slice(2, 8).toUpperCase();
        };
        // Creo la textura con 26 lineas que contienen 3 valores hex de 32 bits cada una.
        this.Lineas = 26;
        this.CaracteresPorLinea = 26;
        for (var i = 1; i < this.Lineas; i++) {
            var HexStr = this.RandHex() + ' ' + this.RandHex() + ' ' + this.RandHex();
            this.Buffer.Context.fillText(HexStr, 30, i * 40);
        }
        this.Textura.needsUpdate = true;          

        // Animación que sobre-escribe un valor Hex y lo resalta
        this.CrearAni = function() {
            var Ani = this.Animaciones.CrearAnimacion(
                [   // Pasos de la animación
                    {   Paso : { R :  255, G : 255, B : 0 }     }, 
                    {   Paso : { R :  95,  G : 95,  B : 95 }, Tiempo : RandInt(2000, 750), FuncionTiempo : FuncionesTiempo.SinOut }
                ], 
                {   // Opciones de la animación
                    FuncionActualizar : function(Valores) { 
                        var CharTam = this.Buffer.Ancho / this.CaracteresPorLinea;
                        // TMB Transports Municipals de Barcelona !!
                        var x1 = 30 + (Valores.Const.X * (CharTam * 8));
                        var x2 = CharTam * 8;
                        var y1 = (Valores.Const.Y) * 40;
                        var y2 = ((Valores.Const.Y) * 40) - 30;
                        this.Buffer.Context.fillStyle = "rgb(0, 0, 120)";
                        this.Buffer.Context.fillRect(x1, y2, x2, 40);
                        
                        this.Buffer.Context.fillStyle = "rgb(" + Math.floor(Valores.R) + "," + Math.floor(Valores.G) + "," + Math.floor(Valores.B) + ")";
                        
                        this.Buffer.Context.fillText(Valores.Const.HexStr, x1, y1);
                        this.Textura.needsUpdate = true;
                    }.bind(this),
                    Const : { 
                        'X' : RandInt(3, 0), 
                        'Y' : RandInt(this.Lineas, 1),
                        Texto : this.RandHex(), 
                        HexStr : this.RandHex() 
                    },
                    FuncionTerminado  : this.CrearAni.bind(this)
                }
            ).Iniciar();            
        };
        
        this.CrearAni();
    },
        
    Bloque : function(Escena, X, Y, Z, RotacionX, RotacionY, RotacionZ, TB) {       
        this.Buffer  = new BufferCanvas(512, 1024);
        this.Textura = TB;
        this.Figura  = new THREE.Mesh(  new THREE.BoxGeometry( 20, 40, 10 ), 
                                        new THREE.MeshStandardMaterial( { map: this.Textura.Textura, transparent : true, roughness: 0.5, opacity: 0.75  } ));
        Escena.add(this.Figura);
        this.Figura.position.set(X, Y, Z);
        this.Figura.rotation.set(RotacionX, RotacionY, RotacionZ);
        this.Figura.castShadow = true;
        this.Buffer.Context.fillStyle = "rgb(0, 0, 120)";
        this.Buffer.Context.fillRect(0, 0, this.Buffer.Ancho, this.Buffer.Alto);
        this.Buffer.Context.font = "32px monospace";                       
        this.Figura.name = "Bloque";        
    },
    
    CrearLuces : function() {
        // Luz direccional
        this.DirLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
        this.DirLight.name = "DirLight1";
        this.DirLight.position.set( 18, 60, -230 );
        this.DirLight.position.multiplyScalar( 20 );
        this.DirLight.target = this.Suelo;
        this.DirLight.castShadow = true;
        this.DirLight.shadow.mapSize.width = 2048;
        this.DirLight.shadow.mapSize.height = 2048;
        var d = 40;
        this.DirLight.shadow.camera.left = -d;
        this.DirLight.shadow.camera.right = d;
        this.DirLight.shadow.camera.top = d;
        this.DirLight.shadow.camera.bottom = -d;
        this.DirLight.shadow.camera.far = 4500;
        this.Escena.add( this.DirLight );
/*        this.Dlhelper = new THREE.CameraHelper(this.DirLight.shadow.camera);
        this.Escena.add(this.Dlhelper);
        this.Dlhelper.visible = true;*/

        this.DirLight2 = new THREE.DirectionalLight( 0xffffff, 1.4 );
        this.DirLight2.name = "DirLight2";
        this.DirLight2.position.set( 3, 1, 50 );
        this.DirLight2.position.multiplyScalar( 20 );
        this.DirLight2.target = this.Suelo;
        this.DirLight2.castShadow = true;
        this.DirLight2.shadow.mapSize.width = 2048;
        this.DirLight2.shadow.mapSize.height = 2048;
        this.DirLight2.shadow.camera.left = -d;
        this.DirLight2.shadow.camera.right = d;
        this.DirLight2.shadow.camera.top = d;
        this.DirLight2.shadow.camera.bottom = -d;
        this.DirLight2.shadow.camera.far = 2500; 
//        this.DirLight.target = this.Cubo;
        this.Escena.add( this.DirLight2 );
/*        this.Dlhelper2 = new THREE.CameraHelper(this.DirLight2.shadow.camera);
        this.Escena.add(this.Dlhelper2);
        this.Dlhelper2.visible = true;*/
        
        // Luz de ambiente  
        this.HemiLight = new THREE.HemisphereLight( 0xeeeeee, 0xffffff, 1.2 );
        this.HemiLight.color.setHSL( 0.6, 0.6, 0.6 );
        this.HemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
        this.HemiLight.position.set( 0, 0, 0 );
        this.Escena.add( this.HemiLight );                 
    },

    
    Avanzar : function() { 
//        this.Avance -= 0.25;
/*        this.Camara.position.z = this.Avance;
        
        this.DirLight.position.set( 12, 40, -120 - this.Avance );
        
        this.DirLight2.position.set( 3, 10, 20 - this.Avance );
        
        this.Suelo.position.z = this.Avance;*/
        
        for (var i = 0; i < this.Filas * 2; i++) {
           if (this.Bloques[i].Figura.position.z > this.Camara.position.z + 100) {
               this.Bloques[i].Figura.position.z = this.Bloques[i].Figura.position.z - (20 * this.Filas);
           }
           else {
               this.Bloques[i].Figura.position.z += 0.07;
           }
        }
    },
    
    // Función que pinta cada frame de la animación
    Pintar          : function() {  
        console.log(this.Filas, this.Texturas.length, this.Bloques.length);
        this.Avanzar();
        // Actualizo las animaciones de tiempo
        this.Animaciones.Actualizar(this.Tick);
        
        this.Context.render(this.Escena, this.Camara);  
    }
});


