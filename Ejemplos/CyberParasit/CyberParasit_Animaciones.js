/* Three.js CyberParasit creado por Josep Antoni Bover Comas el 08/08/2017 para devildrey33.es
 * Archivo que contiene todo lo relacionado con las animaciones
        Ultima modificación el 30/08/2017  */

/* Max 300 a 93.02 BPM */

"use strict";

var CyberParasit_Animaciones = function() {
    this.Iniciar = function(CyberParasitPadre) {
        // Iniciar desde el Beat X
        var Debug_IniciarDesdeBeat = 0;
        
        this.OA = new ObjetoAnimacion;
        this.Padre = CyberParasitPadre;
        this.UltimoBeat = -1;
        
        this.Ani_Verde = this.OA.CrearAnimacion([
            { 'Paso' : { 
                    r0 : this.Padre.Parasito_PresetAzul[0].r, g0 : this.Padre.Parasito_PresetAzul[0].g, b0 : this.Padre.Parasito_PresetAzul[0].b, 
                    r1 : this.Padre.Parasito_PresetAzul[1].r, g1 : this.Padre.Parasito_PresetAzul[1].g, b1 : this.Padre.Parasito_PresetAzul[1].b, 
                    r2 : this.Padre.Parasito_PresetAzul[2].r, g2 : this.Padre.Parasito_PresetAzul[2].g, b2 : this.Padre.Parasito_PresetAzul[2].b, 
                    r3 : this.Padre.Parasito_PresetAzul[3].r, g3 : this.Padre.Parasito_PresetAzul[3].g, b3 : this.Padre.Parasito_PresetAzul[3].b, 
                    r4 : this.Padre.Parasito_PresetAzul[4].r, g4 : this.Padre.Parasito_PresetAzul[4].g, b4 : this.Padre.Parasito_PresetAzul[4].b, 
                    r5 : this.Padre.Parasito_PresetAzul[5].r, g5 : this.Padre.Parasito_PresetAzul[5].g, b5 : this.Padre.Parasito_PresetAzul[5].b 
                }},                      
            { 'Paso' : {
                    r0 : this.Padre.Parasito_PresetVerde[0].r, g0 : this.Padre.Parasito_PresetVerde[0].g, b0 : this.Padre.Parasito_PresetVerde[0].b,
                    r1 : this.Padre.Parasito_PresetVerde[1].r, g1 : this.Padre.Parasito_PresetVerde[1].g, b1 : this.Padre.Parasito_PresetVerde[1].b,
                    r2 : this.Padre.Parasito_PresetVerde[2].r, g2 : this.Padre.Parasito_PresetVerde[2].g, b2 : this.Padre.Parasito_PresetVerde[2].b,
                    r3 : this.Padre.Parasito_PresetVerde[3].r, g3 : this.Padre.Parasito_PresetVerde[3].g, b3 : this.Padre.Parasito_PresetVerde[3].b,
                    r4 : this.Padre.Parasito_PresetVerde[4].r, g4 : this.Padre.Parasito_PresetVerde[4].g, b4 : this.Padre.Parasito_PresetVerde[4].b,
                    r5 : this.Padre.Parasito_PresetVerde[5].r, g5 : this.Padre.Parasito_PresetVerde[5].g, b5 : this.Padre.Parasito_PresetVerde[5].b,                    
                }, 'Tiempo' : this.Padre.BeatMS * 2, 'FuncionTiempo' : FuncionesTiempo.SinIn },
        ], { FuncionTerminado : function() { console.log("Ani_Verde terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito_Colores[0].setRGB(Valores.r0, Valores.g0, Valores.b0);
                this.Padre.Parasito_Colores[1].setRGB(Valores.r1, Valores.g1, Valores.b1);
                this.Padre.Parasito_Colores[2].setRGB(Valores.r2, Valores.g2, Valores.b2);
                this.Padre.Parasito_Colores[3].setRGB(Valores.r3, Valores.g3, Valores.b3);
                this.Padre.Parasito_Colores[4].setRGB(Valores.r4, Valores.g4, Valores.b4);
                this.Padre.Parasito_Colores[5].setRGB(Valores.r5, Valores.g5, Valores.b5);
                if (ObjetoNavegador.EsMovil() === false) {
                    this.Padre.PointLight3.color.setRGB(Valores.r3, Valores.g3, Valores.b3);
                }
                this.Padre.PointLight4.color.setRGB(Valores.r3, Valores.g3, Valores.b3);
                // color cubo
                this.Padre.Cubo_Material.materials[0].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[1].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[2].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[3].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[5].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
            }.bind(this)
        });    

        this.Ani_Rojo = this.OA.CrearAnimacion([
            { 'Paso' : { 
                    r0 : this.Padre.Parasito_PresetVerde[0].r, g0 : this.Padre.Parasito_PresetVerde[0].g, b0 : this.Padre.Parasito_PresetVerde[0].b, 
                    r1 : this.Padre.Parasito_PresetVerde[1].r, g1 : this.Padre.Parasito_PresetVerde[1].g, b1 : this.Padre.Parasito_PresetVerde[1].b, 
                    r2 : this.Padre.Parasito_PresetVerde[2].r, g2 : this.Padre.Parasito_PresetVerde[2].g, b2 : this.Padre.Parasito_PresetVerde[2].b, 
                    r3 : this.Padre.Parasito_PresetVerde[3].r, g3 : this.Padre.Parasito_PresetVerde[3].g, b3 : this.Padre.Parasito_PresetVerde[3].b, 
                    r4 : this.Padre.Parasito_PresetVerde[4].r, g4 : this.Padre.Parasito_PresetVerde[4].g, b4 : this.Padre.Parasito_PresetVerde[4].b, 
                    r5 : this.Padre.Parasito_PresetVerde[5].r, g5 : this.Padre.Parasito_PresetVerde[5].g, b5 : this.Padre.Parasito_PresetVerde[5].b 
                }},                      
            { 'Paso' : {
                    r0 : this.Padre.Parasito_PresetRojo[0].r, g0 : this.Padre.Parasito_PresetRojo[0].g, b0 : this.Padre.Parasito_PresetRojo[0].b,
                    r1 : this.Padre.Parasito_PresetRojo[1].r, g1 : this.Padre.Parasito_PresetRojo[1].g, b1 : this.Padre.Parasito_PresetRojo[1].b,
                    r2 : this.Padre.Parasito_PresetRojo[2].r, g2 : this.Padre.Parasito_PresetRojo[2].g, b2 : this.Padre.Parasito_PresetRojo[2].b,
                    r3 : this.Padre.Parasito_PresetRojo[3].r, g3 : this.Padre.Parasito_PresetRojo[3].g, b3 : this.Padre.Parasito_PresetRojo[3].b,
                    r4 : this.Padre.Parasito_PresetRojo[4].r, g4 : this.Padre.Parasito_PresetRojo[4].g, b4 : this.Padre.Parasito_PresetRojo[4].b,
                    r5 : this.Padre.Parasito_PresetRojo[5].r, g5 : this.Padre.Parasito_PresetRojo[5].g, b5 : this.Padre.Parasito_PresetRojo[5].b,                    
                }, 'Tiempo' : this.Padre.BeatMS * 2, 'FuncionTiempo' : FuncionesTiempo.SinIn },
        ], { FuncionTerminado : function() { console.log("Ani_Rojo terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito_Colores[0].setRGB(Valores.r0, Valores.g0, Valores.b0);
                this.Padre.Parasito_Colores[1].setRGB(Valores.r1, Valores.g1, Valores.b1);
                this.Padre.Parasito_Colores[2].setRGB(Valores.r2, Valores.g2, Valores.b2);
                this.Padre.Parasito_Colores[3].setRGB(Valores.r3, Valores.g3, Valores.b3);
                this.Padre.Parasito_Colores[4].setRGB(Valores.r4, Valores.g4, Valores.b4);
                this.Padre.Parasito_Colores[5].setRGB(Valores.r5, Valores.g5, Valores.b5);
                if (ObjetoNavegador.EsMovil() === false) {
                    this.Padre.PointLight3.color.setRGB(Valores.r3, Valores.g3, Valores.b3);
                }
                this.Padre.PointLight4.color.setRGB(Valores.r3, Valores.g3, Valores.b3);
                // color cubo
                this.Padre.Cubo_Material.materials[0].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[1].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[2].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[3].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[5].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
            }.bind(this)
        });   
        
        this.Ani_Azul = this.OA.CrearAnimacion([
            { 'Paso' : { 
                    r0 : this.Padre.Parasito_PresetRojo[0].r, g0 : this.Padre.Parasito_PresetRojo[0].g, b0 : this.Padre.Parasito_PresetRojo[0].b, 
                    r1 : this.Padre.Parasito_PresetRojo[1].r, g1 : this.Padre.Parasito_PresetRojo[1].g, b1 : this.Padre.Parasito_PresetRojo[1].b, 
                    r2 : this.Padre.Parasito_PresetRojo[2].r, g2 : this.Padre.Parasito_PresetRojo[2].g, b2 : this.Padre.Parasito_PresetRojo[2].b, 
                    r3 : this.Padre.Parasito_PresetRojo[3].r, g3 : this.Padre.Parasito_PresetRojo[3].g, b3 : this.Padre.Parasito_PresetRojo[3].b, 
                    r4 : this.Padre.Parasito_PresetRojo[4].r, g4 : this.Padre.Parasito_PresetRojo[4].g, b4 : this.Padre.Parasito_PresetRojo[4].b, 
                    r5 : this.Padre.Parasito_PresetRojo[5].r, g5 : this.Padre.Parasito_PresetRojo[5].g, b5 : this.Padre.Parasito_PresetRojo[5].b 
                }},                      
            { 'Paso' : {
                    r0 : this.Padre.Parasito_PresetAzul[0].r, g0 : this.Padre.Parasito_PresetAzul[0].g, b0 : this.Padre.Parasito_PresetAzul[0].b,
                    r1 : this.Padre.Parasito_PresetAzul[1].r, g1 : this.Padre.Parasito_PresetAzul[1].g, b1 : this.Padre.Parasito_PresetAzul[1].b,
                    r2 : this.Padre.Parasito_PresetAzul[2].r, g2 : this.Padre.Parasito_PresetAzul[2].g, b2 : this.Padre.Parasito_PresetAzul[2].b,
                    r3 : this.Padre.Parasito_PresetAzul[3].r, g3 : this.Padre.Parasito_PresetAzul[3].g, b3 : this.Padre.Parasito_PresetAzul[3].b,
                    r4 : this.Padre.Parasito_PresetAzul[4].r, g4 : this.Padre.Parasito_PresetAzul[4].g, b4 : this.Padre.Parasito_PresetAzul[4].b,
                    r5 : this.Padre.Parasito_PresetAzul[5].r, g5 : this.Padre.Parasito_PresetAzul[5].g, b5 : this.Padre.Parasito_PresetAzul[5].b,                    
                }, 'Tiempo' : this.Padre.BeatMS * 2, 'FuncionTiempo' : FuncionesTiempo.SinIn },
        ], { FuncionTerminado : function() { console.log("Ani_Azul terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito_Colores[0].setRGB(Valores.r0, Valores.g0, Valores.b0);
                this.Padre.Parasito_Colores[1].setRGB(Valores.r1, Valores.g1, Valores.b1);
                this.Padre.Parasito_Colores[2].setRGB(Valores.r2, Valores.g2, Valores.b2);
                this.Padre.Parasito_Colores[3].setRGB(Valores.r3, Valores.g3, Valores.b3);
                this.Padre.Parasito_Colores[4].setRGB(Valores.r4, Valores.g4, Valores.b4);
                this.Padre.Parasito_Colores[5].setRGB(Valores.r5, Valores.g5, Valores.b5);
                if (ObjetoNavegador.EsMovil() === false) {
                    this.Padre.PointLight3.color.setRGB(Valores.r3, Valores.g3, Valores.b3);
                }
                this.Padre.PointLight4.color.setRGB(Valores.r3, Valores.g3, Valores.b3);
                // color cubo
                this.Padre.Cubo_Material.materials[0].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[1].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[2].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[3].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
                this.Padre.Cubo_Material.materials[5].color.setRGB(Valores.r5, Valores.g5, Valores.b5);
            }.bind(this)
        });       



        // Animación del movimiento de la cámara en cada tu-pa
        this.Ani_Camara = this.OA.CrearAnimacion([
            { 'Paso' : { cpx : 0, cpy : 0 }},                      
            { 'Paso' : { cpx : new ObjetoAnimacion_Rand(15,-15), cpy : new ObjetoAnimacion_Rand(10,-10)}, 'Tiempo' : this.Padre.BeatMS - 50, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                this.Padre.Camara.position.x = Valores.cpx;
                this.Padre.Camara.position.y = 10 + Valores.cpy;
                this.Padre.Camara.rotation.x = Valores.cpx / 40;
                this.Padre.Camara.rotation.y = Valores.cpy / 40;
                this.Padre.Camara.lookAt(new THREE.Vector3(0,0,0));
            }.bind(this), FuncionTerminado : function(Valores) {
                // Re-emplazo los valores del primer paso por unas co-ordenadas aleatorias
                this.Ani_Camara.Pasos[0].Paso.cpx = this.Ani_Camara.cpx;
                this.Ani_Camara.Pasos[0].Paso.cpy = this.Ani_Camara.cpy;
            }.bind(this)
        });       

        /* 1 Beat */        
        this.Ani_Tu = this.OA.CrearAnimacion([
            { 'Paso' : { x : 1    }},                      
            { 'Paso' : { x : 1.50 }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { x : 1    }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].scale.x = Valores.x;
                }
            }.bind(this)/*, FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)             */
        });        
        /* 1 Beat */
        this.Ani_Pa = this.OA.CrearAnimacion([
            { 'Paso' : { y : 1    }},                      
            { 'Paso' : { y : 1.50 }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { y : 1    }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                this.Padre.Parasitos.scale.y = Valores.y;
            }.bind(this)/*, FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)   */
        });        
        
        /* 1 Beat */        
        this.Ani_Tu2 = this.OA.CrearAnimacion([
            { 'Paso' : { sy : 1   , ry : 0              }},                      
            { 'Paso' : { sy : 1.50, ry : -(Math.PI / 3) }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { sy : 1   , ry : 0              }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                this.Padre.Parasitos.scale.y = Valores.sy;
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                   this.Padre.Parasito[i].rotation.y = Valores.ry;
                }
            }.bind(this)/*, FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)             */
        });        
        /* 1 Beat */
        this.Ani_Pa2 = this.OA.CrearAnimacion([
            { 'Paso' : { sy : 1  , ry : 0            }},                      
            { 'Paso' : { sy : 2.0, ry : Math.PI / 3  }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { sy : 1  , ry : 0            }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                this.Padre.Parasitos.scale.y = Valores.sy;
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                   this.Padre.Parasito[i].rotation.y = Valores.ry;
                }
            }.bind(this)/*, FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)   */
        });        
        

        /* 1 Beat */        
        this.Ani_Tu3 = this.OA.CrearAnimacion([
            { 'Paso' : { s : 1  , rz : 0      /*, or : this.Padre.Parasito_PresetVerde[3].r, og : this.Padre.Parasito_PresetVerde[3].g, ob : this.Padre.Parasito_PresetVerde[3].b, */}},                      
            { 'Paso' : { s : 1.5, rz : Math.PI/*, or : this.Padre.Parasito_PresetAzul[3].r , og : this.Padre.Parasito_PresetAzul[3].g , ob : this.Padre.Parasito_PresetAzul[3].b   */}, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { s : 1  , rz : Math.PI/*, or : this.Padre.Parasito_PresetVerde[3].r, og : this.Padre.Parasito_PresetVerde[3].g, ob : this.Padre.Parasito_PresetVerde[3].b  */}, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                   this.Padre.Parasito[i].rotation.z = Valores.rz;
                   this.Padre.Parasito[i].scale.set(Valores.s, Valores.s, Valores.s);
                }
//                this.Padre.Parasito_Colores[3].setRGB(Valores.or, Valores.og, Valores.ob);
                
            }.bind(this)/*, FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)             */
        });        
        /* 1 Beat */
        this.Ani_Pa3 = this.OA.CrearAnimacion([
            { 'Paso' : { s : 1  , rz : Math.PI, or : this.Padre.Parasito_PresetVerde[3].r, og : this.Padre.Parasito_PresetVerde[3].g, ob : this.Padre.Parasito_PresetVerde[3].b, }},                      
            { 'Paso' : { s : 1.5, rz : 0      , or : this.Padre.Parasito_PresetAzul[3].r , og : this.Padre.Parasito_PresetAzul[3].g , ob : this.Padre.Parasito_PresetAzul[3].b   }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { s : 1  , rz : 0      , or : this.Padre.Parasito_PresetVerde[3].r, og : this.Padre.Parasito_PresetVerde[3].g, ob : this.Padre.Parasito_PresetVerde[3].b, }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                   this.Padre.Parasito[i].rotation.z = Valores.rz;
                   this.Padre.Parasito[i].scale.set(Valores.s, Valores.s, Valores.s);
                }
                this.Padre.Parasito_Colores[3].setRGB(Valores.or, Valores.og, Valores.ob);
            }.bind(this)/*, FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)   */
        });        
        

        
        /* 2 Beats */
        this.Ani_TuPaPaPa = this.OA.CrearAnimacion([
            { 'Paso' : { y : 1   , x : 1,   }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { y : 2.20, x : 0.3, }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn, 'Retraso' : this.Padre.BeatMS / 2  },
            { 'Paso' : { y : 1   , x : 1,   }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
            { 'Paso' : { y : 1.80, x : 0.7, }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1,   }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
            { 'Paso' : { y : 2   , x : 0.5, }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1,   }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
            { 'Paso' : { y : 2.20, x : 0.3, }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1,   }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionTerminado : function() { console.log("Ani_TuPaPaPa terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].scale.set(Valores.x, Valores.y, 1);
                }
            }.bind(this)            
        });
        
        /* 1 Beat */
        this.Ani_TaDaDaDa = this.OA.CrearAnimacion([
            { 'Paso' : { z : 0    }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { z : -Math.PI * 0.5 }, 'Tiempo' : 50                          , 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { z : -Math.PI * 0.5 }, 'Tiempo' : (this.Padre.BeatMS / 4) - 50, 'FuncionTiempo' : FuncionesTiempo.Linear   },
            { 'Paso' : { z : -Math.PI       }, 'Tiempo' : 50                          , 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { z : -Math.PI       }, 'Tiempo' : (this.Padre.BeatMS / 4) - 50, 'FuncionTiempo' : FuncionesTiempo.Linear   },
            { 'Paso' : { z : -Math.PI * 1.5 }, 'Tiempo' : 50                          , 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { z : -Math.PI * 1.5 }, 'Tiempo' : (this.Padre.BeatMS / 4) - 50, 'FuncionTiempo' : FuncionesTiempo.Linear   },
            { 'Paso' : { z : -Math.PI * 2   }, 'Tiempo' : 50                          , 'FuncionTiempo' : FuncionesTiempo.SinInOut },
            { 'Paso' : { z : -Math.PI * 2   }, 'Tiempo' : (this.Padre.BeatMS / 4) - 50, 'FuncionTiempo' : FuncionesTiempo.Linear   }
//            { 'Paso' : { z : 1    }, 'Tiempo' : this.Padre.BeatMS / 4, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
        ], { FuncionTerminado : function() { console.log("Ani_TaDaDaDa terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Camara.rotation.z = Valores.z;
//                this.Padre.Camara.lookAt(new THREE.Vector3(0,0,0));
            }.bind(this)            
        });
        
        /* 1 Beat */
        this.Ani_Beeeng = this.OA.CrearAnimacion([
            { 'Paso' : { x : 0    , rx : 0    }},                      
            { 'Paso' : { x : new ObjetoAnimacion_Rand(3, 2.5), rx : new ObjetoAnimacion_Rand(-2.3, -2)   }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : -2.6 , rx : 1.7  }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : 2.1  , rx : -1.9 }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : -1.9 , rx : 1.3  }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : 1.3  , rx : -1.1 }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : -0.7 , rx : 0.7  }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : 0.4  , rx : -0.3 }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            { 'Paso' : { x : 0    , rx : 0    }, 'Tiempo' : (this.Padre.BeatMS / 8), 'FuncionTiempo' : FuncionesTiempo.SinInOut },                
            
        ], { FuncionTerminado : function() { console.log("Ani_Beeeng terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasitos.position.x = Valores.x;                
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].rotation.x = Valores.rx;
                    this.Padre.Parasito[i].rotation.y = Valores.rx;
                }                
                this.Padre.Escenario.position.x = -Valores.x * 8;
                this.Padre.Escenario.position.y = -(Valores.x * 4);
            }.bind(this)
        });
        
        /* 1 Beat */
        this.Ani_Biiing = this.OA.CrearAnimacion([
            { 'Paso' : { x : 1    , y : 1   /* , rx : 0           */ }},                      
            { 'Paso' : { x : 0.2  , y : 3.1 /* , rx : Math.PI     */ }, 'Tiempo' : 100, 'FuncionTiempo' : FuncionesTiempo.SinIn },                     
            { 'Paso' : { x : 1    , y : 1   /* , rx : Math.PI * 2 */ }, 'Tiempo' : this.Padre.BeatMS - 100, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionTerminado : function() { console.log("Ani_Biiing terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].scale.x = Valores.x;
                    this.Padre.Parasito[i].scale.y = Valores.y;
                }
//                this.Padre.Parasito[0].rotation.x = Valores.rx;
            }.bind(this)            
        });

        /* 1 Beat */
        this.Ani_Booong = this.OA.CrearAnimacion([
            { 'Paso' : { rz : 0           , s : 1    }},                      
            { 'Paso' : { rz : Math.PI     , s : 2    }, 'Tiempo' : 100, 'FuncionTiempo' : FuncionesTiempo.SinIn },                     
            { 'Paso' : { rz : Math.PI * 2 , s : 1    }, 'Tiempo' : this.Padre.BeatMS - 100, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { FuncionTerminado : function() { console.log("Ani_Booong terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].scale.set(Valores.s, Valores.s, Valores.s);
                    this.Padre.Parasito[i].rotation.z = Valores.rz;
                }
            }.bind(this)            
        });

        /* 9 Beats */
        this.Ani_Reducir = this.OA.CrearAnimacion([
            { 'Paso' : { s : 1  }},                      
            { 'Paso' : { s : 0.001  }, 'Tiempo' : this.Padre.BeatMS * 9, 'FuncionTiempo' : FuncionesTiempo.SinIn },                     
        ], { FuncionTerminado : function() { 
                console.log("Ani_Reducir terminada : " + this.Padre.Beats); 
                this.Padre.Parasitos_Visibles = 1;
                for (var i = 0; i < this.Padre.Parasito.length; i++) {
                    this.Padre.Parasito[i].position.set(0,0,0);
                }
            }.bind(this), 
            FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].scale.set(Valores.s, Valores.s, Valores.s);
                }
            }.bind(this)            
        });

        // 1 Beat
        this.Ani_Final = this.OA.CrearAnimacion([
            { 'Paso' : { s : 0.001 , cx : 0, cy :  0, cz : 50, /*r : 0*/    }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { s : 1     , cx : 0, cy : 10, cz : 30, /*r : Math.PI * 2.5*/ }, 'Tiempo' : this.Padre.BeatMS, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
        ], { FuncionTerminado : function() { console.log("Ani_Final terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
//                this.Padre.Parasito[0].rotation.set(-Valores.r, Valores.r / 2, -Valores.r / 2);
                this.Padre.Parasito[0].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Camara.position.set(Valores.cx, Valores.cy, Valores.cz);
                this.Padre.Camara.lookAt(new THREE.Vector3(0,0,0));
            }.bind(this) , FuncionIniciado : function() {
                // Inicio los valores de la camara para el primer paso
                this.Ani_Final.Pasos[0].cx = this.Padre.Camara.position.x;
                this.Ani_Final.Pasos[0].cy = this.Padre.Camara.position.y;
                this.Ani_Final.Pasos[0].cz = this.Padre.Camara.position.z;
            }.bind(this)
        });
        
                
        // Primera fila segundo cubo
        this.Ani_MCubo1 = this.OA.CrearAnimacion([
            { 'Paso' : { x :  0, s : 0.01 }},                     
            { 'Paso' : { x : 10, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo1 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[1].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[0].position.x = Valores.x;
                this.Padre.Parasito[1].position.x = -Valores.x;
            }.bind(this) 
        });
        
        // Segunda fila primer cubo
        this.Ani_MCubo2 = this.OA.CrearAnimacion([
            { 'Paso' : { z :  0, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { z : 10, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo2 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[2].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[0].position.z = Valores.z;
                this.Padre.Parasito[1].position.z = Valores.z;
                this.Padre.Parasito[2].position.z = -Valores.z;
                this.Padre.Camara.position.z = Valores.z + 30;
            }.bind(this) 
        });

        // Segunbda fila segundo cubo
        this.Ani_MCubo3 = this.OA.CrearAnimacion([
            { 'Paso' : { zx :  0, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { zx : 10, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo3 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[3].scale.set(Valores.s, Valores.s, Valores.s);
//                this.Padre.Parasito[0].position.z = Valores.zx;
//                this.Padre.Parasito[1].position.z = Valores.zx;
                this.Padre.Parasito[2].position.x = -Valores.zx;
                this.Padre.Parasito[3].position.x = Valores.zx;
                this.Padre.Parasito[3].position.z = -Valores.zx;
            }.bind(this) 
        });
        
        // separo las filas/columnas e introduzco un cubo en medio
        this.Ani_MCubo4 = this.OA.CrearAnimacion([
            { 'Paso' : { zx : 10, z :  10, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { zx : 20, z :  20, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo4 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[4].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[0].position.z = Valores.zx;
                this.Padre.Parasito[1].position.z = Valores.zx;
                this.Padre.Parasito[2].position.z = -Valores.zx;
                this.Padre.Parasito[3].position.z = -Valores.zx;
                this.Padre.Camara.position.z = Valores.zx + 30;
            }.bind(this) 
        });
        
        // nuevo cubo en medio (3 filas de 2 cubos)
        this.Ani_MCubo5 = this.OA.CrearAnimacion([
            { 'Paso' : { x :  0, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 10, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo5 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[5].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
            }.bind(this) 
        });
        
        // nuevo cubo en medio (primera y ultima fila de dos cubos, la fila del medio tiene 3 cubos)
        this.Ani_MCubo6 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 10, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 20, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo6 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[6].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
            }.bind(this) 
        });
        
        // nuevo cubo en medio de la ultima fila (primera fila 2 cubos, segunda y tercera fila 3 cubos)
        this.Ani_MCubo7 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 10, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 20, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo7 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[7].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[7].position.z = -Valores.x;
                this.Padre.Parasito[2].position.x = -Valores.x;
                this.Padre.Parasito[3].position.x = Valores.x;
            }.bind(this) 
        });
        
        // nuevo cubo en medio de la primera fila (las tres filas tienen 3 cubos)
        this.Ani_MCubo8 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 10, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 20, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo8 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[8].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[8].position.z = Valores.x;
                this.Padre.Parasito[0].position.x = -Valores.x;
                this.Padre.Parasito[1].position.x = Valores.x;
            }.bind(this) 
        });
        
        // nuevo cubo en medio (primera y ultima fila de tres cubos, la fila del medio tiene cuatro cubos)
        this.Ani_MCubo9 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 20, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 30, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo9 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[9].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
                this.Padre.Parasito[6].position.x = Valores.x - 20;
                this.Padre.Parasito[9].position.x = -(Valores.x - 20);
            }.bind(this) 
        });
        
        
        this.Ani_MCubo10 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 20, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 30, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo10 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[10].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[2].position.x = -Valores.x;
                this.Padre.Parasito[3].position.x = Valores.x;
                this.Padre.Parasito[7].position.x = Valores.x - 20;
                this.Padre.Parasito[10].position.x = -(Valores.x - 20);
                this.Padre.Parasito[10].position.z = -(Valores.x - 10);
            }.bind(this) 
        });
        
        
        this.Ani_MCubo11 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 20, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 30, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo11 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[11].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[0].position.x = -Valores.x;
                this.Padre.Parasito[1].position.x = Valores.x;
                this.Padre.Parasito[8].position.x = Valores.x - 20;
                this.Padre.Parasito[11].position.x = -(Valores.x - 20);
                this.Padre.Parasito[11].position.z = (Valores.x - 10);
            }.bind(this) 
        });

        // nuevo cubo en medio (primera y ultima fila de tres cubos, la fila del medio tiene cuatro cubos)
        this.Ani_MCubo12 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 30, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 40, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }            
        ], { FuncionIniciado : function() { this.Padre.Parasitos_Visibles ++; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo12 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[12].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
                this.Padre.Parasito[6].position.x = Valores.x - 20;
                this.Padre.Parasito[9].position.x = -(Valores.x - 20);
            }.bind(this) 
        });
        
        // 100 - 158
        // Array de 301 Beats : 0 nada, 1 Tu, 2 Pa, 2 Tu2, 3 Pa2 etc...  (mirar this.FuncionesTuParray para ver que animación corresponde a cada valor)
        this.TuParray = [
        //  0   1   2   3   4   5   6   7   8   9           10  11  12  13  14  15  16  17  18  19 
            0,  0 , 0,  0,  0,  0,  0,  0,  0,  0,           0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        // 20  21  22  23  24  25  26  27  28  29           30  31  32  33  34  35  36  37  38  39 
            0,  0 , 0,  0,  0,  0,  0,  0,  0,  0,           0,  0,  1,  2,  1,  2,  1,  2,  1,  2,
        // 40  41  42  43  44  45  46  47  48  49           50  51  52  53  54  55  56  57  58  59 
            1,  2 , 1,  2,  1,  2,  1,  2,  1,  2,           1,  2,  1,  2,  1,  2,  1,  2,  1,  2,
        // 60  61  62  63  64  65  66  67  68  69           70  71  72  73  74  75  76  77  78  79 
            1,  2 , 1,  2, 10,  4,  3,  4,  3,  4,           3,  4,  3,  4,  3,  4,  3,  4,  3,  7,
        // 80  81  82  83  84  85  86  87  88  89           90  91  92  93  94  95  96  97  98  99 
           10,  4 , 3,  4,  3,  4,  3,  4,  3,  4,           3,  4,  3,  4,  3,  8,  0,  0,  0,  0,
        ///////////////////////////////////////////////////////////////////////////////////////////
        //100   1   2   3   4   5   6   7   8   9           10  11  12  13  14  15  16  17  18  19 
            5,  6,  5,  6,  5,  6,  5,  6,  5,  6,           5,  6,  5,  6,  5,  6,  5,  6,  5,  6,
        // 20  21  22  23  24  25  26  27  28  29           30  31  32  33  34  35  36  37  38  39 
            5,  6,  5,  6,  5,  6,  5,  6,  5,  6,           5,  6,  5,  6,  5,  6,  5,  6,  5,  6,
        // 40  41  42  43  44  45  46  47  48  49           50  51  52  53  54  55  56  57  58  59 
            5,  6,  5,  6,  5,  6,  5,  6,  5,  6,           5,  6,  5,  6,  5,  6,  5,  6,  5,  0,
        // 60  61  62  63  64  65  66  67  68  69           70  71  72  73  74  75  76  77  78  79 
           10,  4,  3,  4,  3,  4,  3,  4, 10,  4,           3,  4,  3,  4,  3,  4, 10,  4,  3,  4,            
        // 80  81  82  83  84  85  86  87  88  89           90  91  92  93  94  95  96  97  98  99 
            3,  4,  3,  4, 10,  4,  3,  4,  3,  4,           3,  4, 10,  2,  1,  2,  1,  2,  1,  2,
        ///////////////////////////////////////////////////////////////////////////////////////////
        //200   1   2   3   4   5   6   7   8   9           10  11  12  13  14  15  16  17  18  19
            1,  2,  1,  2,  1,  2,  1,  2, 10,  2,           1,  2,  1,  2,  1,  2,  1,  2,  1,  2,
        // 20  21  22  23  24  25  26  27  28  29           30  31  32  33  34  35  36  37  38  39 
            1,  2,  1,  2, 10,  4,  3,  4,  3,  4,           3,  4,  3,  4,  3,  4,  3,  4,  3,  7,
        // 40  41  42  43  44  45  46  47  48  49           50  51  52  53  54  55  56  57  58  59 
           10,  4,  3,  4,  3,  4,  3,  4,  3,  4,           3,  4,  3,  4,  3,  8, 10,  4,  3,  4,
        // 60  61  62  63  64  65  66  67  68  69           70  71  72  73  74  75  76  77  78  79 
            3,  4,  3,  4,  3,  4,  3,  4,  3,  4,           3,  7, 10,  4,  3,  4,  3,  4,  3,  4,
        // 80  81  82  83  84  85  86  87  88  89           90  91  92  93  94  95  96  97  98  99 
            3,  4,  3,  4,  3,  4,  3,  9,  0,  0,           0,  0,  0,  0,  0,  0,  0,  0,  0,  0,
        /////////////////////////////////////////////////////////////////////////
        //300   1
            0,  0            
        ];
        
        this.FuncionesTuParray = [
            function() { },                                     // 0
            this.Ani_Tu.Iniciar.bind(this.Ani_Tu),              // 1
            this.Ani_Pa.Iniciar.bind(this.Ani_Pa),              // 2
            this.Ani_Tu2.Iniciar.bind(this.Ani_Tu2),            // 3
            this.Ani_Pa2.Iniciar.bind(this.Ani_Pa2),            // 4
            this.Ani_Tu3.Iniciar.bind(this.Ani_Tu3),            // 5
            this.Ani_Pa3.Iniciar.bind(this.Ani_Pa3),            // 6
            this.Ani_TaDaDaDa.Iniciar.bind(this.Ani_TaDaDaDa),  // 7
            this.Ani_Biiing.Iniciar.bind(this.Ani_Biiing),      // 8
            this.Ani_Booong.Iniciar.bind(this.Ani_Booong),      // 9
            this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)       // 10
        ];

        // Array de animaciones críticas (invertido para mas facilidad a la hora de montar el bucle con splice)
        // 93.02 BPM
        this.Pasos_Animacion = [
            { Beats : 1, Beat : 299, Funcion : this.Ani_Final.Iniciar.bind(this.Ani_Final)       , FuncionTerminado : this.Ani_Final.Terminar.bind(this.Ani_Final)     },
            { Beats : 9, Beat : 288, Funcion : this.Ani_Reducir.Iniciar.bind(this.Ani_Reducir)   , FuncionTerminado : this.Ani_Reducir.Terminar.bind(this.Ani_Reducir) },            
            { Beats : 2, Beat : 287, Funcion : this.Ani_Azul.Iniciar.bind(this.Ani_Azul)         , FuncionTerminado : this.Ani_Azul.Terminar.bind(this.Ani_Azul)       },   
            { Beats : 1, Beat : 272, Funcion : this.Ani_MCubo12.Iniciar.bind(this.Ani_MCubo12)   , FuncionTerminado : this.Ani_MCubo12.Terminar.bind(this.Ani_MCubo12) },   
            { Beats : 1, Beat : 256, Funcion : this.Ani_MCubo11.Iniciar.bind(this.Ani_MCubo11)   , FuncionTerminado : this.Ani_MCubo11.Terminar.bind(this.Ani_MCubo11) },   
            { Beats : 1, Beat : 240, Funcion : this.Ani_MCubo10.Iniciar.bind(this.Ani_MCubo10)   , FuncionTerminado : this.Ani_MCubo10.Terminar.bind(this.Ani_MCubo10) },   
            { Beats : 1, Beat : 224, Funcion : this.Ani_MCubo9.Iniciar.bind(this.Ani_MCubo9)     , FuncionTerminado : this.Ani_MCubo9.Terminar.bind(this.Ani_MCubo9)   },   
            { Beats : 1, Beat : 208, Funcion : this.Ani_MCubo8.Iniciar.bind(this.Ani_MCubo8)     , FuncionTerminado : this.Ani_MCubo8.Terminar.bind(this.Ani_MCubo8)   },   
            { Beats : 1, Beat : 192, Funcion : this.Ani_MCubo7.Iniciar.bind(this.Ani_MCubo7)     , FuncionTerminado : this.Ani_MCubo7.Terminar.bind(this.Ani_MCubo7)   },   
            { Beats : 1, Beat : 184, Funcion : this.Ani_MCubo6.Iniciar.bind(this.Ani_MCubo6)     , FuncionTerminado : this.Ani_MCubo6.Terminar.bind(this.Ani_MCubo6)   },   
            { Beats : 1, Beat : 176, Funcion : this.Ani_MCubo5.Iniciar.bind(this.Ani_MCubo5)     , FuncionTerminado : this.Ani_MCubo5.Terminar.bind(this.Ani_MCubo5)   },   
            { Beats : 1, Beat : 168, Funcion : this.Ani_MCubo4.Iniciar.bind(this.Ani_MCubo4)     , FuncionTerminado : this.Ani_MCubo4.Terminar.bind(this.Ani_MCubo4)   },   
            { Beats : 1, Beat : 160, Funcion : this.Ani_MCubo3.Iniciar.bind(this.Ani_MCubo3)     , FuncionTerminado : this.Ani_MCubo3.Terminar.bind(this.Ani_MCubo3)   },   
            { Beats : 2, Beat : 159, Funcion : this.Ani_Rojo.Iniciar.bind(this.Ani_Rojo)         , FuncionTerminado : this.Ani_Rojo.Terminar.bind(this.Ani_Rojo)       },               
            { Beats : 2, Beat : 158, Funcion : this.Ani_TuPaPaPa.Iniciar.bind(this.Ani_TuPaPaPa) },    // empieza medio beat antes y se come un Pa.. mejor la dejo aquí        
            { Beats : 2, Beat :  96, Funcion : this.Ani_Verde.Iniciar.bind(this.Ani_Verde)       , FuncionTerminado : this.Ani_Verde.Terminar.bind(this.Ani_Verde)     },   
            { Beats : 1, Beat :  80, Funcion : this.Ani_MCubo2.Iniciar.bind(this.Ani_MCubo2)     , FuncionTerminado : this.Ani_MCubo2.Terminar.bind(this.Ani_MCubo2)   },   
            { Beats : 1, Beat :  64, Funcion : this.Ani_MCubo1.Iniciar.bind(this.Ani_MCubo1)     , FuncionTerminado : this.Ani_MCubo1.Terminar.bind(this.Ani_MCubo1)   },   
        ];

        return Debug_IniciarDesdeBeat;
    };
    
    // Hay animaciones unicas / críticas que deben ser terminadas si no se han ejecutado, para mantener la linea de la animación (posiciones del cubo, colores, etc...)
    this.ActivarAnimacion = function() {
        // Beats atrasados (al ocultar la pestaña no sigue los ciclos normales y pasa a modo reposo (en chrome no actualiza nada, y en firefox una vez cada x segundos)
        if (this.UltimoBeat < this.Padre.Beats -1) {
            console.log("beats atrasados");
            for (var i = this.Pasos_Animacion.length - 1; i > -1; i--) {
                // Si el beat ya ha pasado y existe una funcion terminado, la ejecuto
                if (this.Padre.Beats > (this.Pasos_Animacion[i].Beat + this.Pasos_Animacion[i].Beats) && typeof(this.Pasos_Animacion[i].FuncionTerminado) !== "undefined") {
                    if (this.Pasos_Animacion[i]._Terminado !== true) {
                        this.Pasos_Animacion[i].FuncionTerminado();
                        this.Pasos_Animacion.splice(i, 1);
                    }
                }
            }
        }
        // Nuevo Beat
        if (this.UltimoBeat !== this.Padre.Beats) {
            if (this.Pasos_Animacion.length > 0) {
                if (this.Pasos_Animacion[this.Pasos_Animacion.length - 1].Beat === this.Padre.Beats) {
                    this.Pasos_Animacion[this.Pasos_Animacion.length - 1].Funcion();
                    this.Pasos_Animacion.splice(this.Pasos_Animacion.length - 1, 1);
                }
            }
                        
            // Activo la animación del TuParray que toca en este beat;
            this.FuncionesTuParray[this.TuParray[this.Padre.Beats]]();
            if (this.TuParray[this.Padre.Beats] > 0)   { this.Ani_Camara.Iniciar(); } // Camara
        }
        this.UltimoBeat = this.Padre.Beats;
    };    
};


// 