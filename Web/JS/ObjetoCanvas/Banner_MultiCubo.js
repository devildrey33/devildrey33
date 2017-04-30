
// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_MultiCubo = function() {
    // Llamo al constructor del ObjetoBanner
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : 'THREE',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ElementoRaiz'  : document.body,
        'ColorFondo'    : 0x888888
    }) === false) { return false; }
    
    // Se ha creado el canvas, inicio los valores de la animación ... 
    this.Iniciar();
    
    // Esconde la ventana que informa al usuario de que se está cargando la animación. (REQUERIDO)
    this.Cargando(false);
};

Banner_MultiCubo.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
    constructor     : Banner_MultiCubo, 
    
    Nombre          : "Multi Cubo",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/MultiCubo.html",
    NombreURL       : "Lab : MultiCubo",    
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
    // Función que se llama al pausar el banner
    Pausa           : function() { this.Animaciones.Pausa(); },
    // Función que se llama al reanudar el banner
    Reanudar        : function() { this.Animaciones.Reanudar(); },
    // Función que inicia el ejemplo
    Cubos           : [],
    
    uAniRGC         : 0, // Ultima animación del grupo de cubos
    
    Iniciar         : function() {
        // Instancia para el objeto encargado de las animaciones de tiempo http://devildrey33.es/Ejemplos/Utils/ObjetoAnimacion.js
        this.Animaciones = new ObjetoAnimacion;
        // Activo el mapeado de sombras
        this.Context.shadowMap.enabled	= true;
        
        this.Escena = new THREE.Scene();
        // Creo la cámara
        this.Camara = new THREE.PerspectiveCamera(75, this.Ancho / this.Alto, 0.5, 1000);
        this.Camara.Rotacion = { Grados : 45 * (Math.PI / 180), Avance : (Math.PI / 180) / 3, Distancia : 50 };
        this.Camara.position.set(0, 0, this.Camara.Rotacion.Distancia);        
        // Función para que la cámara rote alrededor de la escena
        this.Camara.Rotar = function(Escena) {
            this.Rotacion.Grados += this.Rotacion.Avance;
            this.position.x = this.Rotacion.Distancia * Math.cos(this.Rotacion.Grados);
            this.position.z = this.Rotacion.Distancia * Math.sin(this.Rotacion.Grados);
            this.lookAt(Escena.position);            
        };
        this.Escena.add(this.Camara);
        
        this.Camara.AniAvanceCamara = this.Animaciones.CrearAnimacion([
            { 'Paso' : { z : 500, y: 150 }},
            { 'Paso' : { z :  50, y:  0 }, 'Tiempo' : 1250, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
        ], { "Repetir" : 0, FuncionActualizar : function(Valores) { 
                this.Camara.position.y = Valores.y; 
                this.Camara.Rotacion.Distancia = Valores.z; 
            }.bind(this) 
        }).Iniciar();
        
        
        // Palno para el suelo
        this.Suelo = new THREE.Mesh(    new THREE.PlaneGeometry(1000, 1000), 
                                        new THREE.MeshPhongMaterial({ color: 0x444444, specular : 0xffffff  }));
        this.Suelo.rotation.x = -Math.PI / 2;
        this.Suelo.position.y = -20;
        this.Suelo.castShadow = false;
        this.Suelo.receiveShadow = true;
        this.Escena.add(this.Suelo);
        // Creo varias luces para las sombras y los reflejos
        this.CrearLuces();
        // Creo 27 cubos colocados en forma de cubo
        this.CrearCubos();
        // Animación aleatoria con los cubos
        this.AnimarCubos();
    },
    
    CrearCubos      : function () {
        for (var i = 0; i < 27; i++) {
            // De momento voy a conservar un material para cada cubo...
            var Cubo = new THREE.Mesh(  new THREE.BoxGeometry( 6.5, 6.5, 6.5 ), 
                                        new THREE.MeshPhongMaterial({ color: 0x4e50ea, specular : 0x3333AA, transparent : true, opacity:0.9, shininess : 200    }));
            Cubo.castShadow = true;
            Cubo.receiveShadow = true;
            Cubo.Numero = i; // Identificador de cubo (del 0 al 26)
            this.Cubos[i] = Cubo;                
            this.Escena.add(this.Cubos[i]);
        }
        // Posiciono los cubos empezando por la esquina superior izquierda, y terminando en la esquina inferior derecha
        var Contador = 0;
        for (var z = 10; z >= -10; z -= 10) {
            for (var y = 10; y >= -10; y -=10) {
                for (var x = -10; x <= 10; x +=10) {
                    this.Cubos[Contador++].position.set(x, y, z);
                }                
            }
        }
        // Primer cubo azul, para comprobar que los cubos conservan su posición despues de rotar varios grupos de cubos
//        this.Cubos[0].material.color.setHex(0x6666ff);
    },
    
    // Elige entre animación de un cubo o animación de un grupo
    AnimarCubos : function() {
        if (Rand() > 0.5) { this.AnimacionRotarGrupoCubos(); }
        else              { this.AnimacionRotarCubo(); }
    },
        
    // Al hacer rotaciones de multiples cubos, las posiciones no quedan 100% precisas, y al cabo de muchas iteraciones acaba descuadrandose todo
    Aprox : function(Valor) {
        if      (Valor > 5)  { return 10;  } 
        else if (Valor < -5) { return -10; }
        else                 { return 0;   }
    },
    
    // Animación para rotar un grupo de cubos
    AnimacionRotarGrupoCubos : function() {
        var Pos = RandInt(9, 0);
        // Para no repetir el ultimo tipo de animación
        while (Pos === this.uAniRGC) { Pos = RandInt(9, 0); }
        this.uAniRGC = Pos;
        if (this.GrupoCubos) {  // tengo que re-añadir los cubos a la escena, para eliminar el grupo de cubos
            // Calculo la posición de cada cubo dentro del grupo
            for (var i = 0; i < this.GrupoCubos.children.length; i++) {                
                var vector = new THREE.Vector3();
                vector.setFromMatrixPosition( this.GrupoCubos.children[i].matrixWorld );
                this.Cubos[this.GrupoCubos.children[i].Numero].position.set(this.Aprox(vector.x), this.Aprox(vector.y), this.Aprox(vector.z));
            }
            // Al volver a añadir los cubos a la escena, se eliminan de dentro del grupo de cubos
            for (var i = 0; i < this.Cubos.length; i++) {
                this.Escena.add(this.Cubos[i]);
            }        
        }
        else {
            // Creo el grupo de cubos 
            this.GrupoCubos = new THREE.Group();
        }
        var RotarCaraX = 0;
        var RotarCaraY = 0;
        var RotarCaraZ = 0; 
        // Añado 9 cubos según la posición aleatória
        for (var i = 0; i < this.Cubos.length; i++) {
            switch (Pos) {
                case 0 : // derecha
                    if (this.Cubos[i].position.x >  5) { this.GrupoCubos.add(this.Cubos[i]); }  
                    RotarCaraX = RandInt(3, 1); 
                    break;   
                case 1 : // izquierda
                    if (this.Cubos[i].position.x < -5) { this.GrupoCubos.add(this.Cubos[i]); }  
                    RotarCaraX = RandInt(3, 1); 
                    break;   
                case 2 : // arriba
                    if (this.Cubos[i].position.y >  5) { this.GrupoCubos.add(this.Cubos[i]); }  
                    RotarCaraY = RandInt(3, 1); 
                    break;   
                case 3 : // abajo
                    if (this.Cubos[i].position.y < -5) { this.GrupoCubos.add(this.Cubos[i]); }  
                    RotarCaraY = RandInt(3, 1); 
                    break;   
                case 4 : // delante
                    if (this.Cubos[i].position.z >  5) { this.GrupoCubos.add(this.Cubos[i]); } 
                    RotarCaraZ = RandInt(3, 1); 
                    break;   
                case 5 : // atras
                    if (this.Cubos[i].position.z < -5) { this.GrupoCubos.add(this.Cubos[i]); } 
                    RotarCaraZ = RandInt(3, 1);
                    break;   
                case 6 : // centro x
                    if (this.Cubos[i].position.x < 5 && this.Cubos[i].position.x > -5) { this.GrupoCubos.add(this.Cubos[i]); } 
                    RotarCaraX = RandInt(3, 1);
                    break;   
                case 7 : // centro y
                    if (this.Cubos[i].position.y < 5 && this.Cubos[i].position.y > -5) { this.GrupoCubos.add(this.Cubos[i]); } 
                    RotarCaraY = RandInt(3, 1); 
                    break;   
                case 8 : // centro z
                    if (this.Cubos[i].position.z < 5 && this.Cubos[i].position.z > -5) { this.GrupoCubos.add(this.Cubos[i]); }
                    RotarCaraZ = RandInt(3, 1); 
                    break;   
            }
        }
        this.Escena.add(this.GrupoCubos);
        
        this.AniRotarGrupoCubos = this.Animaciones.CrearAnimacion([{ 
                'Paso' : { x : 0, y : 0, z : 0 }
            }, { 
                'Paso' : { x : RotarCaraX * (Math.PI / 2), y : RotarCaraY * (Math.PI / 2), z : RotarCaraZ * (Math.PI / 2) }, 
                Tiempo : 500 * (RotarCaraX + RotarCaraY + RotarCaraZ), 
                FuncionTiempo : FuncionesTiempo.SinOut}
            ], {
                FuncionActualizar : function(Valores) { 
                    this.GrupoCubos.rotation.x = Valores.x; 
                    this.GrupoCubos.rotation.y = Valores.y; 
                    this.GrupoCubos.rotation.z = Valores.z; 
                }.bind(this), 
                FuncionTerminado  : this.AnimarCubos.bind(this), 
                Retraso           : 200
        }).Iniciar();                                
    },
    
    AnimacionRotarCubo   : function() {
        var Eje = RandInt(3);
        this.CuboAnimado = RandInt(27, 0);        
        var RotarCara = RandInt(3, 1);
        if (Eje === 0) {
            this.AniRotarCubo = this.Animaciones.CrearAnimacion([
                { 'Paso' : { x : 0 }},
                { 'Paso' : { x : RotarCara * (Math.PI / 2) }, Tiempo : 350 * RotarCara, FuncionTiempo : FuncionesTiempo.SinOut}], { FuncionActualizar : function(Valores) { this.Cubos[this.CuboAnimado].rotation.x = Valores.x; }.bind(this), FuncionTerminado : this.AnimarCubos.bind(this), "Retraso" : 200
            }).Iniciar();                        
        }
        else if (Eje === 1) {
            this.AniRotarCubo = this.Animaciones.CrearAnimacion([
                { 'Paso' : { y : 0 }},
                { 'Paso' : { y : RotarCara * (Math.PI / 2) }, Tiempo : 350 * RotarCara, FuncionTiempo : FuncionesTiempo.SinOut}], { FuncionActualizar : function(Valores) { this.Cubos[this.CuboAnimado].rotation.y = Valores.y; }.bind(this), FuncionTerminado : this.AnimarCubos.bind(this), "Retraso" : 200 
            }).Iniciar();                                    
        }
        else {
            this.AniRotarCubo = this.Animaciones.CrearAnimacion([
                { 'Paso' : { z : 0 }}, //this.Cubos[this.CuboAnimado].rotation.z
                { 'Paso' : { z : RotarCara * (Math.PI / 2) }, Tiempo : 350 * RotarCara, FuncionTiempo : FuncionesTiempo.SinOut}], { FuncionActualizar : function(Valores) { this.Cubos[this.CuboAnimado].rotation.z = Valores.z; }.bind(this), FuncionTerminado : this.AnimarCubos.bind(this), "Retraso" : 200
            }).Iniciar();                                                
        }        
    },
    
    
    CrearLuces      : function() {
        this.dirLight = new THREE.DirectionalLight( 0xffffff, 0.7 );
//        this.dirLight.position.set(0.3, - 1, - 1).normalize();
        this.dirLight.color.setHSL( 0.1, 1, 0.95 );
        this.dirLight.position.set( 20, 35, 50 ).normalize();
        this.dirLight.position.multiplyScalar( 50 );
        this.Escena.add( this.dirLight );
        this.dirLight.castShadow = true;
        this.dirLight.shadow.mapSize.width = 2048;
        this.dirLight.shadow.mapSize.height = 2048;
        var d = 80;
        this.dirLight.shadow.camera.left = -d;
        this.dirLight.shadow.camera.right = d;
        this.dirLight.shadow.camera.top = d;
        this.dirLight.shadow.camera.bottom = -d;
        this.dirLight.shadow.camera.far = 3500;
        
	this.SpotLight	= new THREE.SpotLight( 0xCCFFFF, 0 );
	this.SpotLight.position.set( 5, 150, 750 );
	this.SpotLight.shadow.camera.near	= 0.01;		
	this.SpotLight.shadow.camera.far	= 1000;		
	this.SpotLight.shadow.camera.visible	= true;
	this.SpotLight.castShadow		= true;
        this.SpotLight.target = this.Suelo;
        this.Escena.add( this.SpotLight );	
/*        this.splhelper = new THREE.CameraHelper(this.SpotLight.shadow.camera);
        this.Escena.add(this.splhelper);*/
        this.AniEncenderLuz = this.Animaciones.CrearAnimacion([
            { 'Paso' : { Intensidad : 0 }},
            { 'Paso' : { Intensidad : 0.7, }, 'Tiempo' : 60, 'FuncionTiempo' : FuncionesTiempo.SinInOut, 'Retraso' : 0 },
            { 'Paso' : { Intensidad : 0, },'Tiempo' : 60, 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { Intensidad : 0.6, }, 'Tiempo' : 60, 'FuncionTiempo' : FuncionesTiempo.SinInOut, },
            { 'Paso' : { Intensidad : 0.1, },'Tiempo' : 50, 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { Intensidad : 0.7} , 'Tiempo' : 850, 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { Intensidad : 1} , 'Tiempo' : 2500, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
        ], { FuncionActualizar : function(Valores) { 
                this.SpotLight.intensity = Valores.Intensidad; 
                this.dirLight.intensity = Valores.Intensidad * 0.6; 
            }.bind(this) 
        }).Iniciar();            
        
        
                
        this.HemiLight = new THREE.HemisphereLight( 0xeeeeee, 0xffffff, 0.8 );
        this.HemiLight.color.setHSL( 0.6, 0.6, 0.6 );
        this.HemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
        this.HemiLight.position.set( 0, 0, 0 );
        this.Escena.add( this.HemiLight );        
    },
    
    // Función que pinta cada frame de la animación
    Pintar          : function() {  
        // Actualizo las animaciones de tiempo
        this.Animaciones.Actualizar(this.Tick);
        // Actualizo la rotación de la camara
        this.Camara.Rotar(this.Escena);
        // Aplico el render
        this.Context.render(this.Escena, this.Camara);  
    }
});