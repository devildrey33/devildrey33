/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



// Constructor SIN TIPO, el tipo se especifica según la animación
var Banner_WormHole = function() {
    
    // Llamo al constructor del ObjetoBanner
    ObjetoBanner.call(this, "THREE"); // Puede ser 2D o THREE
    
    this.Escena = new THREE.Scene();
   
    this.Camara = new THREE.PerspectiveCamera(75, this.Ancho / this.Alto, 0.5, 1000);
    // Preparo la camara
//    this.Camara.position.y = (((this.Alto / 2) - 240) * 0.20);
    this.Camara.position.set( 0, (((this.Alto / 2) - 240) * 0.20), 500 );
    this.Escena.add(this.Camara);
    this.H = 0;
    this.H2 = 0.05;
    
    this.TexturasCargadas = 0;
    this.TotalTexturas = 2;
    
    
    
    
//    THREE.ImageUtils.crossOrigin = '';
//    this.Textura = THREE.ImageUtils.loadTexture('https://luigimannoni.github.io/assets/001_electric.jpg');

    /*this.Textura = THREE.ImageUtils.loadTexture('/Web/Graficos/Banner_WormHole1.jpg');
    this.Textura.wrapT = this.Textura.wrapS = THREE.RepeatWrapping;
    this.Textura.repeat.set( 1, 10 );*/
    
    var LoaderT1 = new THREE.TextureLoader().load('/Web/Graficos/Banner_WormHole11.jpg', function(T) { 
        T.wrapT = T.wrapS = THREE.RepeatWrapping;
        T.repeat.set( 1, 2 );
        $Banner.Tunel = new THREE.Mesh(
            new THREE.CylinderGeometry( 50, 50, 1000, 16, 32, true ),
            new THREE.MeshBasicMaterial({ 
                color: 0x666666,
                transparent: true,
                alphaMap: T,
                side: THREE.BackSide,
                opacity:0.3
            })
        );
        $Banner.Tunel.rotation.x = 90 * (Math.PI / 180); // 45 grados
        $Banner.Tunel.position.z = 128;        
        $Banner.Escena.add($Banner.Tunel);
        $Banner.Textura = T;
        console.log(T);
 
        $Banner.TexturasCargadas ++;
        // La textura se ha cargado, retiro la ventana que avisa al usuario de la carga.
        if ($Banner.TexturasCargadas === $Banner.TotalTexturas) { $Banner.Cargando(false); }
    });

    var LoaderT2 = new THREE.TextureLoader().load('/Web/Graficos/Banner_WormHole1.2.jpg', function(T2) { 
        T2.wrapT = T2.wrapS = THREE.RepeatWrapping;
        T2.repeat.set( 1, 2 );
        $Banner.Tunel2 = new THREE.Mesh(
            new THREE.CylinderGeometry( 60, 60, 1000, 16, 32, true ),
            new THREE.MeshBasicMaterial({ 
                color: 0x666666,
                transparent: true,
                alphaMap: T2,
                side: THREE.BackSide,
            })
        );
        $Banner.Tunel2.rotation.x = 90 * (Math.PI / 180); // 45 grados
        $Banner.Tunel2.position.z = 127;        
        $Banner.Escena.add($Banner.Tunel2);
        $Banner.Textura2 = T2;
        console.log(T2);
        $Banner.TexturasCargadas ++;
        // La textura se ha cargado, retiro la ventana que avisa al usuario de la carga.
        if ($Banner.TexturasCargadas === $Banner.TotalTexturas) { $Banner.Cargando(false); }
    });



    this.Camara.lookAt(this.Escena.position);
};

Banner_WormHole.prototype = Object.assign( Object.create(ObjetoBanner.prototype) , {
    constructor     : Banner_WormHole, 
    // Datos de la animación [requerido]
    Nombre          : "WormHole",
    IdeaOriginal    : "devildrey33",
    URL             : "/Lab/Ejemplos/BannerTest/WormHole.html",
    NombreURL       : "Lab : WormHole",    
    // Función que se llama al redimensionar el documento
    Redimensionar   : function()     { },
    // Función que se llama al hacer scroll en el documento    
    Scroll          : function()     { },
    // Función que se llama al mover el mouse por el canvas
    MouseMove       : function(X, Y) {
/*        var DestX = 0;
        var DestY = 0;
        if (X - (this.Ancho / 2) > 0)      {    DestX =  1;   }
        else if (X - (this.Ancho / 2) < 0) {    DestX = -1;   }
        if (Y - (this.Alto / 2) > 0)       {    DestY =  1;   }
        else if (Y - (this.Alto / 2) < 0)  {    DestY = -1;   }
        
        
        this.Camara.position.x = (((this.Ancho / 2) - X) * 0.040);
        this.Camara.position.y = (((this.Alto / 2) - Y) * 0.20);*/
//        this.Camara.lookAt(this.Escena.position);
    },
    // Función que pinta cada frame de la animación
    Pintar          : function() {    
        
        if (typeof(this.Tunel) !== 'undefined') {
            this.H += 0.001;
            if (this.H > 1) { this.H = 0; }
            this.Tunel.material.color.setHSL(this.H, 0.7, 0.7);

            // Rotación del tunel
            this.Tunel.rotation.y += 0.02;
            // Textura infinita avanzando y rotando
//            this.Textura.offset.z += 0.01;
            this.Textura.offset.y -= 0.014;
        }

        if (typeof(this.Tunel2) !== 'undefined') {
            // Color del tunel
            this.H2 += 0.001;
            if (this.H2 > 1) { this.H2 = 0; }
            this.Tunel2.material.color.setHSL(this.H2, 0.7, 0.7);

            // Rotación del tunel
            this.Tunel2.rotation.y -= 0.017;
            // Textura infinita avanzando y rotando
//            this.Textura2.offset.z += 0.005;
            this.Textura2.offset.y -= 0.019;
        }        
        
        this.Context.render(this.Escena, this.Camara);
    }
});