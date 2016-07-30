/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Banner_Columnas3D = function() {
    // Llamo al constructor del ObjetoBanner
    ObjetoBanner.call(this, "THREE");
           
    this.TamCubo        = 0; // Tamaño de cada cubo
    
    this.Escena = new THREE.Scene();
    this.Camara = new THREE.PerspectiveCamera(40, this.Ancho / this.Alto, 0.5, 10000);
    // Preparo la camara
    this.Camara.position.set( 0, 0, 3000 );
    this.Escena.add(this.Camara);
    // Colores base que se van alternando
    this.RGBF = [ 50, 0, 0, 0 ]; // RGB que incluye la fase en el ultimo valor (0=R, 1=G, 2=B);
    
    
    // Variables locales
    var Divisiones  = 9;       // Numero de columnas de un lado
    var Tam         = 1000;
    this.TamCubo = (Tam / (Divisiones / 2));
    
    // Creo la parrilla
    this.Parrilla = new THREE.GridHelper(Tam, Tam / (Divisiones / 2));
    this.Parrilla.position.y = this.TamCubo;
//    this.Parrilla.setColors(new THREE.Color(0xcccccc), new THREE.Color(0x999999));    // blanco
    this.Parrilla.setColors(new THREE.Color(0xdddd00), new THREE.Color(0xcc9900));    // naranja
//    this.Parrilla.setColors(new THREE.Color(0x00cc00), new THREE.Color(0x009900));    // verde
//    this.Parrilla.setColors(new THREE.Color(0x6666cc), new THREE.Color(0x333399));      // azul
//        this.Parrilla = this.CrearParrilla(Tam, Divisiones, 0xdd6666, 0x888888);
//        this.Escena.add(this.Parrilla);

    // Creo el grupo de columnas
    this.GrupoCubos = new THREE.Object3D();
    this.GrupoCubos.add(this.Parrilla);
    var geometry = new THREE.BoxGeometry( this.TamCubo, this.TamCubo, this.TamCubo );    

    // Inicio cada columna en su posición
    for (var z = -(Divisiones / 2); z < (Divisiones / 2); z++) {
        for (var x = -(Divisiones / 2); x < (Divisiones / 2); x++) {
            var Cubo = new THREE.Mesh(geometry, new THREE.MeshBasicMaterial( { color: "rgb(0,50,0)" } ));
            Cubo.position.x = (x * this.TamCubo) + (this.TamCubo / 2);
            Cubo.position.z = (z * this.TamCubo) + (this.TamCubo / 2);                                
            Cubo.position.y = (this.TamCubo / 2);
            Cubo.Ani = new this.AniColumna(1, 1, 0, 0);
            this.GrupoCubos.add(Cubo);
        }
    }
    
    this.RandAni();

    this.GrupoCubos.rotation.x = 0.55;        
    this.Escena.add(this.GrupoCubos);


    // create a point light
    var pointLight = new THREE.PointLight(0xFF0000);
    pointLight.position.set(0, 10, 0);
    // add to the scene
    this.Escena.add(pointLight);       
};





Banner_Columnas3D.prototype = Object.assign( Object.create(ObjetoBanner.prototype) , {
    constructor         : Banner_Columnas3D, 

    // Datos de la animación
    Nombre              : "Columnas 3D",
    IdeaOriginal        : "devildrey33",
    URL                 : "",
    NombreURL           : "",
    RotacionCam         : Rand(0.002, -0.002),
    AvanceCamZ          : 0.1,
    
    
    Redimensionar       : function() {
//        this.Camara.
//        this.Context.setSize(this.Ancho, this.Alto);
    },
    
    Pintar              : function() {
        var rnd = Rand();
        if (rnd < 0.5) {
            rnd = RandInt(4);
            if (rnd === 0)      { if (this.RotacionCam > -0.004)    { this.RotacionCam -= 0.0003; }}
            else if (rnd === 1) { if (this.RotacionCam < 0.004)     { this.RotacionCam += 0.0003; }}
            else if (rnd === 2) { if (this.AvanceCamZ > -2)       { this.AvanceCamZ -= 0.1; }}
            else if (rnd === 3) { if (this.AvanceCamZ < 2)        { this.AvanceCamZ += 0.1; }}
        }
        // Rotación
        this.GrupoCubos.rotation.y += this.RotacionCam;
        // Posición Z
        if ((this.Camara.position.z < 3800 && this.AvanceCamZ > 0) || (this.Camara.position.z > 2100 && this.AvanceCamZ < 0)) {
            this.Camara.position.z += this.AvanceCamZ;
        }
        
        var AniTerminada = true;
//        this.GrupoCubos.rotation.z += 0.00033;
//        this.GrupoCubos.rotation.x -= 0.00002;  
        for (var c = 1; c < this.GrupoCubos.children.length; c++) {
            var Cubo = this.GrupoCubos.children[c];
            
            if (Cubo.Ani.FaseAni === 0) {
                if (Cubo.Ani.Retardo < 0) { // En delay
                    Cubo.Ani.Retardo += 16; // (16 milisegundos que suele tardar un frame a 60 por segundo)
                }
                else {
                    if (Cubo.scale.y < Cubo.Ani.MaxEscalaY / 40)    { 
                        Cubo.scale.y += Cubo.Ani.Vel;
                    }
                    else {
                        Cubo.Ani.FaseAni = 1;
                    }
                }
            }
            else if (Cubo.Ani.FaseAni === 1) {
                if (Cubo.scale.y > 1) { 
                    Cubo.scale.y -= Cubo.Ani.Vel;
                }
                else { // Se ha terminado una vuelta
                    Cubo.Ani.FaseAni = 2;
                }
            }            
            // Al escalar el cubo hay que modificar la Y
            Cubo.position.y = ((this.TamCubo * Cubo.scale.y) / 2);
            
            // Modifico el color
            /*switch (this.RGBF[3]) {
                case 0 : 
                    Cubo.material.color.setStyle("rgb(" + (Math.floor((Cubo.scale.y) * 25) + this.RGBF[0]) + "," + this.RGBF[1] + " ," + this.RGBF[2] + ")");
                    break;
                case 1 : 
                    Cubo.material.color.setStyle("rgb(" + this.RGBF[0] + "," + (Math.floor((Cubo.scale.y) * 25) + this.RGBF[1]) + " ," + this.RGBF[2] + ")");
                    break;
                case 2 : 
                    Cubo.material.color.setStyle("rgb(" + this.RGBF[0] + "," + this.RGBF[1] + " ," + (Math.floor((Cubo.scale.y) * 25) + this.RGBF[2]) + ")");
                    break;
            }*/
            Cubo.material.color.setStyle("rgb(180, " + (Math.floor((Cubo.scale.y - 1) * 25) + 50) + ",0)");            
//            Cubo.material.color.setStyle("rgb(40, 30," + (Math.floor((Cubo.scale.y - 1) * 25) + 75) + ")");            
            
            // Compruebo si la columna ha terminado
            if (Cubo.Ani.FaseAni !== 2) { AniTerminada = false; }            
        }
        
/*        if (this.RGBF[0] > 1) { this.RGBF[0] --; }
        if (this.RGBF[1] > 1) { this.RGBF[1] --; }
        if (this.RGBF[2] > 1) { this.RGBF[2] --; }
        if (this.RGBF[this.RGBF[3]] < 100) { this.RGBF[this.RGBF[3]] = this.RGBF[this.RGBF[3]] + 2; }*/
        
     
        this.Context.render(this.Escena, this.Camara);
        
        if (AniTerminada === true) { 
            this.RandAni(); 
            // Loop para el color
/*            this.RGBF[3] ++;
            if (this.RGBF[3] > 1) { this.RGBF[3] = 0; }*/
        }
    },
    

    IniciarAni_Texto        : function() {
        var ColumnasLado = Math.sqrt(this.GrupoCubos.children.length - 1);
        var Inicio       = Math.floor((ColumnasLado - 5) / 2); // Las letras son de 5x5
        var cc = 0;
        for (var z = Inicio; z < ColumnasLado - Inicio; z++) {
            for (var x = Inicio; x < ColumnasLado - Inicio; x++) {
                var PosMarcador = 1 + ((z * ColumnasLado) + x);
                var PosLetra    = ((z - Inicio) * (ColumnasLado - (Inicio * 2))) + (x - Inicio);
                if (this.Letras5x5['e'][PosLetra] === "x") {
                    this.GrupoCubos.children[PosMarcador].Ani = new this.AniColumna(100, 0.024, Rand(50));
                }
            }
        }
    },
    // Filas invertidas para el eje X o el eje Z
    IniciarAni_Filas        : function() {
        var ColumnasLado = Math.sqrt(this.GrupoCubos.children.length - 1);
        var Invertir = false;
        var rnd = Rand();
        for (var z = 0; z < ColumnasLado; z++) {
            Invertir = !Invertir;
            for (var x = 0; x < ColumnasLado; x++) {
                var Pos = 1 + ((rnd > 0.5) ? ((z * ColumnasLado) + x) : ((x * ColumnasLado) + z));
                this.GrupoCubos.children[Pos].Ani = new this.AniColumna(100, 0.074, ((Invertir === true)? x * 80 : (ColumnasLado - x) * 80));
            }
        }
    },    
    // Aleatório
    IniciarAni_Rand         : function() {
        for (var c = 1; c < this.GrupoCubos.children.length; c++) {
            this.GrupoCubos.children[c].Ani = new this.AniColumna(Rand(90, 1), Rand(0.06, 0.02), RandInt(500));
        }
    },
    // Ola de izquierda a derecha, o derecha a izquierda, o de arriba a abajo, o de abajo a arriba
    IniciarAni_Ola          : function() {
        var rnd = Rand();        
        var rnd2 = Rand();
        var ColumnasLado = Math.sqrt(this.GrupoCubos.children.length - 1);
        var pos = 0;
        for (var z = 0; z < ColumnasLado; z++) {
            for (var x = 0; x < ColumnasLado; x++, pos++) {
                var Pos = 1 + ((rnd2 > 0.5) ? ((z * ColumnasLado) + x) : ((x * ColumnasLado) + z));                
                this.GrupoCubos.children[Pos].Ani = new this.AniColumna(Rand(90, 80), 0.064, ((rnd > 0.5) ? pos * 20 : (this.GrupoCubos.children.length - pos) * 20) );
            }
        }
    },
    // Ola centrada en el eje X 
    IniciarAni_OlaCentrada  : function() {
        var Max = Math.floor((this.GrupoCubos.children.length - 1) / 2);
/*        var rnd = Rand();
        var ColumnasLado = Math.sqrt(this.GrupoCubos.children.length - 1);
        // Con parrillas impares el último no queda asignado
        this.GrupoCubos.children[this.GrupoCubos.children.length - 1].Ani =  new this.AniColumna(Rand(100, 80), 0.054, Max * 25);

        for (var z = 0; z < ColumnasLado; z++) {
            for (var x = 0; x < ColumnasLado; x++, pos++) {
                var Pos = 1 + ((rnd2 > 0.5) ? ((z * ColumnasLado) + x) : ((x * ColumnasLado) + z));                
            }
        }
*/
        
        this.GrupoCubos.children[this.GrupoCubos.children.length - 1].Ani =  new this.AniColumna(Rand(100, 80), 0.054, Max * 25);
        for (var c = 0; c < Max + 1; c++) {            
            this.GrupoCubos.children[(Max + c)].Ani = new this.AniColumna(Rand(100, 80), 0.054, c * 25);
            this.GrupoCubos.children[(Max - c) + 1].Ani = new this.AniColumna(Rand(100, 80), 0.054, c * 25);
        }            
    },
    
    // Inicia una animación aleatória
    RandAni                 : function() {        
        var rnd = RandInt(4);
//        var rnd = 1;
        console.log("Banner_Columnas3D.RandAni", rnd);
        if (rnd === 0)       {   this.IniciarAni_Rand(); }
        else if (rnd === 1)  {   this.IniciarAni_Ola(); }
        else if (rnd === 2)  {   this.IniciarAni_OlaCentrada(); }
        else if (rnd === 3)  {   this.IniciarAni_Filas(); }
        else if (rnd === 4)  {   this.IniciarAni_Texto(); }
    },
    
    // Estructura para guardar los valores de la animación
    AniColumna              : function(nMaxEscalaY, nVel, nRetardo) {
        this.MaxEscalaY = nMaxEscalaY;
        this.Vel        = nVel;
        this.Retardo    = -nRetardo;
        this.FaseAni    = 0;            // 0 Animando, 1 Desanimando, 2 Terminado
    },
    
    
// Letras de 5x5
    Letras5x5               : { "d" :  [    " ", "x", "x", " ", " ",
                                            " ", "x", " ", "x", " ", 
                                            " ", "x", " ", "x", " ", 
                                            " ", "x", " ", "x", " ", 
                                            " ", "x", "x", " ", " " ],
                                        
                                "e" :  [    " ", "x", "x", "x", " ", 
                                            " ", "x", " ", " ", " ", 
                                            " ", "x", "x", " ", " ", 
                                            " ", "x", " ", " ", " ", 
                                            " ", "x", "x", "x", " ", ],
                                        
                                "v" :  [    "x", " ", " ", " ", "x", 
                                            "x", " ", " ", " ", "x", 
                                            " ", "x", " ", "x", " ", 
                                            " ", "x", " ", "x", " ", 
                                            " ", " ", "x", " ", " ", ],
                                        
                                "i" :  [    " ", "x", "x", "x", " ", 
                                            " ", " ", "x", " ", " ", 
                                            " ", " ", "x", " ", " ", 
                                            " ", " ", "x", " ", " ", 
                                            " ", "x", "x", "x", " ", ],
                                        
                                "l" :  [    " ", "x", " ", " ", " ", 
                                            " ", "x", " ", " ", " ", 
                                            " ", "x", " ", " ", " ", 
                                            " ", "x", " ", " ", " ", 
                                            " ", "x", "x", "x", " ", ],
                                        
                                "r" :  [    " ", "x", "x", " ", " ", 
                                            " ", "x", " ", "x", " ", 
                                            " ", "x", "x", " ", " ", 
                                            " ", "x", " ", "x", " ", 
                                            " ", "x", " ", "x", " ", ],
                                        
                                "y" :  [    " ", "x", " ", "x", " ", 
                                            " ", "x", " ", "x", " ", 
                                            " ", " ", "x", " ", " ", 
                                            " ", " ", "x", " ", " ", 
                                            " ", " ", "x", " ", " ", ],
                                        
                                "3" :  [    " ", "x", "x", "x", " ", 
                                            " ", " ", " ", "x", " ", 
                                            " ", " ", "x", "x", " ", 
                                            " ", " ", " ", "x", " ", 
                                            " ", "x", "x", "x", " ", ] }
}); 