/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


Banner_Cubos3D = function(Tipo) {
    this.Nombre         = "Cubos 3D";
    this.IdeaOriginal   = "devildrey33";
    this.URL            = "";
    this.NombreURL      = "";
    
    this.Camara         = null;
    this.Escena         = null;
    this.GrupoCubos     = null;
    
    this.TamCubo        = 0; // Tamaño de cada cubo
    
    this.Iniciar = function() {
//        this.Context.setClearColorHex(0x312E35, 1);
//        this.Context.clearColor(0x312E35, 1);
        
        this.Escena = new THREE.Scene();
        this.Camara = new THREE.PerspectiveCamera(40, this.Ancho / this.Alto, 0.5, 10000);
        // Preparo la camara
        this.Camara.position.set( 0, -300, 3000 );
        this.Escena.add(this.Camara);

//        var Cubo = new THREE.Mesh(geometry, material);
//        this.Context.autoClearColor(0x312E35);
//        this.Escena.add();
        // Creo los cubos
        
//        this.GrupoCubos.rotation.x = 0.7;
//        this.Escena.add(this.GrupoCubos);

/*        this.Parrilla = new THREE.GridHelper(1400, 200);
        this.Parrilla.position.set(25, -25, 0);
        this.Parrilla.setColors(new THREE.Color(0xddcccc), new THREE.Color(0x888888));
        */  
        var Divisiones = 20;
        var Tam = 1400;
        this.TamCubo = ((Tam * 2) / Divisiones);
        
        this.Parrilla = new THREE.GridHelper(Tam, Tam / 10);
        this.Parrilla.position.y = this.TamCubo;
        this.Parrilla.setColors(new THREE.Color(0x00bb00), new THREE.Color(0x006600));
//        this.Parrilla = this.CrearParrilla(Tam, Divisiones, 0xdd6666, 0x888888);

//        this.Escena.add(this.Parrilla);
        

        this.GrupoCubos = new THREE.Object3D();
        
        this.GrupoCubos.add(this.Parrilla);
        var geometry = new THREE.BoxGeometry( this.TamCubo, this.TamCubo, this.TamCubo );
        // Using wireframe materials to illustrate shape details.
        
//        var material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
/*        var Cubo = new THREE.SceneUtils.createMultiMaterialObject(geometry, multiMaterial);
        Cubo.position.x = -(Tam - (TamCubo / 2));
        Cubo.position.z = Tam - (TamCubo / 2);                
        Cubo.position.y = TamCubo / 2;*/
//        Cubo.scale.set(1, 2, 1);
        
        for (var z = -(Divisiones / 2); z < (Divisiones / 2); z++) {
            for (var x = -(Divisiones / 2); x < (Divisiones / 2); x++) {
                var rnd = Rand(150);
/*                var multiMaterial = [ new THREE.MeshBasicMaterial( { color: "rgb(0," + (50 + Math.floor(rnd)) + ", 0)" } ),
                                      new THREE.MeshBasicMaterial( { color: "rgb(0," + (100 + Math.floor(rnd)) + ", 0)", wireframe: true, transparent: true } ) ];         */
                var material = new THREE.MeshBasicMaterial( { color: "rgb(0,50,0)" } );
//                var Cubo = new THREE.SceneUtils.createMultiMaterialObject(geometry, multiMaterial);
                var Cubo = new THREE.Mesh(geometry, material);
                Cubo.MaxY = 150;
                Cubo.position.x = (x * this.TamCubo) + (this.TamCubo / 2);
                Cubo.position.z = (z * this.TamCubo) + (this.TamCubo / 2);                                
//                Cubo.scale.y = 1 + (rnd / 25);
                Cubo.position.y = (this.TamCubo / 2);
//                Cubo.position.y = ((this.TamCubo * Cubo.scale.y) / 2);
                Cubo.Vel = Rand(0.05, 0.01);
                Cubo.Ani = 0; // 0 Animando, 1 Desanimando, 2 Terminado
                this.GrupoCubos.add(Cubo);
            }
        }
/*        for (var z = -15; z < 15; z++) {            
            for (var x = -(this.Ancho / 70); x < (this.Ancho / 70) + 1; x++) {
                var Cubo = new THREE.Mesh(geometry, material);
                this.GrupoCubos.add(Cubo);
                Cubo.position.x = (x * 100);
                Cubo.position.z = (z * 100);                
            }
        }*/
        
        this.GrupoCubos.rotation.x = 0.55;        
        this.Escena.add(this.GrupoCubos);
        
        
        // create a point light
        var pointLight = new THREE.PointLight(0xFF0000);
        pointLight.position.set(0, 10, 0);
        // add to the scene
        this.Escena.add(pointLight);                    
    };
    
    
    
    this.Redimensionar = function() {
//        this.Camara.
//        this.Context.setSize(this.Ancho, this.Alto);
    };
    
    this.Pintar = function() {
        this.GrupoCubos.rotation.y += 0.002;
//        this.GrupoCubos.rotation.z += 0.00033;
//        this.GrupoCubos.rotation.x -= 0.00002;  
        for (var c = 1; c < this.GrupoCubos.children.length; c++) {
            var Cubo = this.GrupoCubos.children[c];
            if (Cubo.Ani === 0) {
                if (Cubo.scale.y < Cubo.MaxY / 40)    { 
                    Cubo.scale.y += Cubo.Vel;
                }
                else {
                    Cubo.Ani = 1;
                }
            }
            else if (Cubo.Ani === 1) {
                if (Cubo.scale.y > 1) { 
                    Cubo.scale.y -= Cubo.Vel;
                }
                else {
                    Cubo.MaxY = 150;
                    Cubo.Vel = Rand(0.03, 0.01);
                    Cubo.Ani = 0;
                }
            }
            
            Cubo.position.y = ((this.TamCubo * Cubo.scale.y) / 2);
            Cubo.material.color.setStyle("rgb(0, " + (Math.floor((Cubo.scale.y - 1) * 25) + 50) + ",0)");
            /*
            if (Cubo.scale.y > 1)    { 
                Cubo.scale.y -= Cubo.Vel;                 
//                var color1 = Math.floor((Cubo.scale.y - 1) * 25) + 50;
//                var color2 = Math.floor((Cubo.scale.y - 1) * 25) + 100;
//                Cubo.children[0].material.color.setStyle("rgb(0, " + color1 + ",0)");
//                Cubo.children[1].material.color.setStyle("rgb(0, " + color2 + ",0)");
                Cubo.material.color.setStyle("rgb(0, " + (Math.floor((Cubo.scale.y - 1) * 25) + 50) + ",0)");
                Cubo.position.y = ((this.TamCubo * Cubo.scale.y) / 2);
            }
            else {
//                Cubo.children[0].material.color.setStyle("rgb(0,50,0)");
//                Cubo.children[1].material.color.setStyle("rgb(0,100,0)");
                Cubo.material.color.setStyle("rgb(0,50,0)");
                Cubo.scale.y = 1; 
                Cubo.position.y = (this.TamCubo / 2);
//                Cubo.Animando = false;
            }*/
        }

/*        this.GrupoCubos.rotation.y += 0.01;*/
/*this.Camara.rotation.y += 0.001;*/
        this.Context.render(this.Escena, this.Camara);
    };
}; 