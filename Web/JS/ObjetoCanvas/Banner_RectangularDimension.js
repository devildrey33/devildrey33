/*
    Banner "Desperados Rectangular Dimension" para devildrey33.es creado por Josep Antoni Bover Comas el 25/07/2021

        Vista por defecto en el Laboratorio de pruebas  
		devildrey33_Lab->Opciones->Vista = Filas;

        Ultima modificación el 25/07/2021

        TODO :
        - Ajustar material y luces.
        - mover los rectangulos con un fragment shader, y crear el color a partir de la velocidad i el largo del rectangulo

        NOTA : Necesitaba desenpolvar mis habilidades con el three.js, lastima que no me ha salido a la primera con shaders... a ver si lo arreglo con algo mas de lucidez mental
*/


// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_RectangularDimension = function() {
    // Llamo al constructor del ObjetoBanner, y si devuelve un error salgo retornando false.
    // El segundo parámetro del constructor puede ser "2d" o "THREE".
    if (ObjetoCanvas.call(this, { 
        'Tipo'          : 'THREE',
        'Ancho'         : 'Auto',
        'Alto'          : 'Auto',
        'Entorno'       : 'Banner',
        'MostrarFPS'    : true,
        'ColorFondo'    : 0x000000,
        'ElementoRaiz'  : document.body
    }) === false) { return false; }

        
    this.Iniciar();

    this.Cargando(false);

    // Retorno true para advertir que se ha creado el canvas correctamente
    return true;
};

Banner_RectangularDimension.prototype = Object.assign( Object.create(ObjetoCanvas.prototype) , {
    constructor     : Banner_RectangularDimension, 
    // Datos de la animación [requerido]
    Nombre          : "RectangularDimension",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/RectangularDimension.html",
    NombreURL       : "Lab : Rectangular Dimension",    
    // Rectangulos del banner
    Rectangulos     : [],
    // Función que inicia el ejemplo
    Iniciar         : function() {
        // Creo la escena
        this.Escena = new THREE.Scene();
        // Creo la camara
        this.Camara = new THREE.PerspectiveCamera(75, this.Ancho / this.Alto, 0.5, 1000);
        this.Camara.Rotacion = { Grados : 0, Avance : (Math.PI / 180) / 3, Distancia : 20, MirarHacia : new THREE.Vector3(0, 0, 0), Animacion : true };
        this.Camara.position.set(0, 0, this.Camara.Rotacion.Distancia);       

        // Función para que la cámara rote alrededor de la escena
        this.Camara.Rotar = function() {
            this.Rotacion.Grados += this.Rotacion.Avance;
            this.position.x = this.Rotacion.Distancia * Math.cos(this.Rotacion.Grados);
            this.position.z = this.Rotacion.Distancia * Math.sin(this.Rotacion.Grados);
            this.lookAt(this.Rotacion.MirarHacia); 
        };

        this.Escena.add(this.Camara);

        // COnfiguro el banner para ordenadores de escritorio
        if (ObjetoNavegador.EsMovil() === false) {
            this.TotalRectangulos = 1500;
        }
        // COnfiguro el banner para moviles y tablets (menos potentes)
        else {
            this.TotalRectangulos = 850;
        }

        // Creo los rectangulos
        for (var i = 0; i < this.TotalRectangulos; i++) {
            this.CrearRectangulo();
        }

        this.CrearLuces();
    },

    RndAvance       : function() {
        return Rand(1.4, 0.6);
    },

    RndPos       : function() {
        return Rand(50.0, -50.0);
    },
    
    RndZ		: function() {
        return Rand(-100.0, -75.0);
    },

    CrearRectangulo : function() {
        var Tam = Rand(0.9, 0.2); // tamaño X e Y
        var TamLargo = Rand(4.0, 0.2) + Tam; // Profundidad del rectangulo, y le sumo el tamaño de la X y la Y para que nunca sea inferior
        var RectanguloGeo = new THREE.BoxBufferGeometry( Tam, Tam, TamLargo );
        var Color = "rgb(" + (RandInt(60, -60) + 82) + "," +  (RandInt(60, -60) + 116) + ", " + RandInt(255, 120) + ")";
        var Rectangulo = new THREE.Mesh(  RectanguloGeo, new THREE.MeshPhongMaterial({ color: new THREE.Color(Color)/*0x527497*/, specular : 0x3333AA, transparent : true, opacity:Rand(0.9, 0.75), shininess : 200    }));
        this.Escena.add(Rectangulo);
        Rectangulo.position.set(this.RndPos(), this.RndPos(), Rand(-100.0, 100.0));
        Rectangulo.Avance = this.RndAvance();
        Rectangulo.TamLargo = TamLargo;
        this.Rectangulos.push(Rectangulo);
    },

    Avance : function() {
        for (var i = 0; i < this.TotalRectangulos; i++) {
            // sumo el avance de este rectangulo
            this.Rectangulos[i].position.set(this.Rectangulos[i].position.x, this.Rectangulos[i].position.y, this.Rectangulos[i].position.z + this.Rectangulos[i].Avance);
            // Si el rectangulo ya no es visible, lo reinicio aleatóriamente
            if (this.Rectangulos[i].position.z > 100 + this.Rectangulos[i].TamLargo) {
                this.Rectangulos[i].position.set(this.RndPos(), this.RndPos(), this.RndZ());
                this.Rectangulos[i].Avance = this.RndAvance();
            }
        }
    },

    CrearRectanguloShader : function() {
        var Tam = Rand(0.9, 0.2); // tamaño X e Y
        var TamLargo = Rand(4.0, 0.2) + Tam; // Profundidad del rectangulo, y le sumo el tamaño de la X y la Y para que nunca sea inferior
        var RectanguloGeo = new THREE.BoxBufferGeometry( Tam, Tam, TamLargo );
        // Variables para el vertex shader
        var Uniforms = {
            Velocidad       : { "type" : "1f", value : Rand(2.0, 0.3)  },
            PosicionZ       : { "type" : "1f", value : Rand(50.0, 1.0)  },
            Transparencia   : { "type" : "1f", value : Rand(0.1, 0.9)  },
            Largo           : { "type" : "1f", value : TamLargo  }
        }

        var MaterialShader = new THREE.ShaderMaterial({
            uniforms       : Uniforms,
            vertexShader   : document.getElementById('VertexShader').innerHTML,
            fragmentShader : document.getElementById('FragmentShader').innerHTML,
            transparent    : true
        });

        // Creo el rectangulo con los datos del shader
        var Rectangulo = new THREE.Mesh(RectanguloGeo, MaterialShader);
        this.Rectangulos.push(Rectangulo);
        this.Escena.add(Rectangulo);
        Rectangulo.position.set(Rand(15.0, -15.0), Rand(15.0, -15.0), Uniforms.PosicionZ);
    },
    
    CrearLuces : function() {
        // Luz direccional
        this.DirLight = new THREE.DirectionalLight( 0xffffff, 0.41 );
        this.DirLight.position.set( 30, 60, 20 ); //.normalize();
        this.DirLight.position.multiplyScalar( 20 );
        this.DirLight.castShadow = true;
        this.DirLight.shadow.mapSize.width = 2048;
        this.DirLight.shadow.mapSize.height = 2048;
        var d = 40;
        this.DirLight.shadow.camera.left = -d;
        this.DirLight.shadow.camera.right = d;
        this.DirLight.shadow.camera.top = d;
        this.DirLight.shadow.camera.bottom = -d;
        this.DirLight.shadow.camera.far = 3500;
//        this.DirLight.target = this.Suelo;
        this.Escena.add( this.DirLight );
        
        // Luz de ambiente  
        this.HemiLight = new THREE.HemisphereLight( 0xeeeeee, 0xffffff, 0.4 );
        this.HemiLight.color.setHSL( 0.6, 0.6, 0.6 );
        this.HemiLight.groundColor.setHSL( 0.095, 1, 0.75 );
        this.HemiLight.position.set( 0, 0, 0 );
        this.Escena.add( this.HemiLight );         
        
    },
    
    // Función que pinta cada frame de la animación
    Pintar          : function() {  
        this.Camara.Rotar();
        this.Avance();
        this.Context.render(this.Escena, this.Camara);  
    }});