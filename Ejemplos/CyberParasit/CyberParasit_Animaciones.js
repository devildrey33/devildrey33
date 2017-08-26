/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Max 300 a 93.02 BPM */

/* tururururu 96 - 158 */ 

var CyberParasit_Animaciones = function() {
    this.Iniciar = function(CyberParasitPadre) {
        // Iniciar desde el Beat X
        var Debug_IniciarDesdeBeat = 0;
        
        this.OA = new ObjetoAnimacion;
        this.Padre = CyberParasitPadre;
        this.UltimoBeat = -1;

        //this.Ani_CamaraUPos = [0, 0];
        
        this.Ani_Verde = this.OA.CrearAnimacion([
            { 'Paso' : { r : this.Padre.Parasito_Colores[3].r, g : this.Padre.Parasito_Colores[3].g, b : this.Padre.Parasito_Colores[3].b }},                      
            { 'Paso' : { r : this.Padre.Parasito_Colores[6].r, g : this.Padre.Parasito_Colores[6].g, b : this.Padre.Parasito_Colores[6].b }, 'Tiempo' : this.Padre.BeatMS, 'FuncionTiempo' : FuncionesTiempo.SinIn },
        ], { "Repetir" : 0, FuncionActualizar : function(Valores) { 
                this.Padre.Parasito_Colores[3].setRGB(Valores.r, Valores.g, Valores.b);
                // color cubo
/*                this.Padre.Parasito_Colores[5].setRGB(Valores.r, Valores.g, Valores.b);
                this.Padre.Cubo_Material.materials[0].color.setRGB(Valores.r, Valores.g, Valores.b);
                this.Padre.Cubo_Material.materials[1].color.setRGB(Valores.r, Valores.g, Valores.b);
                this.Padre.Cubo_Material.materials[2].color.setRGB(Valores.r, Valores.g, Valores.b);
                this.Padre.Cubo_Material.materials[3].color.setRGB(Valores.r, Valores.g, Valores.b);
                this.Padre.Cubo_Material.materials[5].color.setRGB(Valores.r, Valores.g, Valores.b);*/
            }.bind(this)
        });    

        this.Ani_Rojo = this.OA.CrearAnimacion([
            { 'Paso' : { r : this.Padre.Parasito_Colores[6].r, g : this.Padre.Parasito_Colores[6].g, b : this.Padre.Parasito_Colores[6].b }},                      
            { 'Paso' : { r : this.Padre.Parasito_Colores[7].r, g : this.Padre.Parasito_Colores[7].g, b : this.Padre.Parasito_Colores[7].b }, 'Tiempo' : this.Padre.BeatMS, 'FuncionTiempo' : FuncionesTiempo.SinIn },
        ], { "Repetir" : 0, FuncionActualizar : function(Valores) { 
                this.Padre.Parasito_Colores[3].setRGB(Valores.r, Valores.g, Valores.b);
            }.bind(this)
        });    

        this.Ani_Camara = this.OA.CrearAnimacion([
            { 'Paso' : { cpx : 0, cpy : 0 }},                      
            { 'Paso' : { cpx : new ObjetoAnimacion_Rand(15,-15), cpy : new ObjetoAnimacion_Rand(10,-10)}, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinIn },
        ], { "Repetir" : 0, FuncionActualizar : function(Valores) { 
                this.Padre.Camara.position.x = Valores.cpx;
                this.Padre.Camara.position.y = 10 + Valores.cpy;
                this.Padre.Camara.rotation.x = Valores.cpx / 40;
                this.Padre.Camara.rotation.y = Valores.cpy / 40;
                this.Padre.Camara.lookAt(new THREE.Vector3(0,0,0));
            }.bind(this), FuncionTerminado : function(Valores) {
                // Re-emplazo los valores del primer paso
                this.Ani_Camara._Pasos[0].Paso.cpx = this.Ani_Camara.cpx;
                this.Ani_Camara._Pasos[0].Paso.cpy = this.Ani_Camara.cpy;
//                this.Ani_Camara._PasosIniciales[0].Paso.cpx = this.Ani_Camara.cpx;
//                this.Ani_Camara._PasosIniciales[0].Paso.cpy = this.Ani_Camara.cpy;
            }.bind(this)
        });       

        /* 1 Beat */        
        this.Ani_Tu = this.OA.CrearAnimacion([
            { 'Paso' : { x : 1    }},                      
            { 'Paso' : { x : 1.50 }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { x : 1    }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { "Repetir" : 0, FuncionActualizar : function(Valores) { 
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].scale.x = Valores.x;
                }
            }.bind(this), FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)             
        });        
        /* 1 Beat */
        this.Ani_Pa = this.OA.CrearAnimacion([
            { 'Paso' : { y : 1    }},                      
            { 'Paso' : { y : 1.50 }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinIn },
            { 'Paso' : { y : 1    }, 'Tiempo' : 115, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { "Repetir" : 0, FuncionActualizar : function(Valores) { 
                this.Padre.Parasitos.scale.y = Valores.y;
            }.bind(this), FuncionIniciado : function() { this.Ani_Camara.Iniciar(); }.bind(this)   
        });        
        

        
        /* 2 Beats */
        this.Ani_TuPaPaPa = this.OA.CrearAnimacion([
            { 'Paso' : { y : 1   , x : 1    }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { y : 1.60, x : 1    }, 'Retraso' : this.Padre.BeatMS * 0.5 ,'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
            { 'Paso' : { y : 1.60, x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
            { 'Paso' : { y : 1.60, x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
            { 'Paso' : { y : 1.60, x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinIn  },
            { 'Paso' : { y : 1   , x : 1    }, 'Tiempo' : this.Padre.BeatMS / 6, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_TuPaPaPa terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_TaDaDaDa terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
            
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_Beeeng terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasitos.position.x = Valores.x;                
                for (var i = 0; i < this.Padre.Parasitos_Visibles; i++) {
                    this.Padre.Parasito[i].rotation.x = Valores.rx;
                    this.Padre.Parasito[i].rotation.y = Valores.rx;
                }                
                this.Padre.Escenario.position.x = -Valores.x;
                this.Padre.PointLight.position.y = Valores.Const.LuzPosInicialY - (Valores.x * 10);
            }.bind(this), 'Const' : { 'LuzPosInicialY' : this.Padre.PointLight.position.y }
        });
        
        /* 1 Beat */
        this.Ani_Biiing = this.OA.CrearAnimacion([
            { 'Paso' : { x : 1    , y : 1   /* , rx : 0           */ }},                      
            { 'Paso' : { x : 0.2  , y : 2.5 /* , rx : Math.PI     */ }, 'Tiempo' : 100, 'FuncionTiempo' : FuncionesTiempo.SinIn },                     
            { 'Paso' : { x : 1    , y : 1   /* , rx : Math.PI * 2 */ }, 'Tiempo' : this.Padre.BeatMS - 100, 'FuncionTiempo' : FuncionesTiempo.SinOut },
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_Biiing terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_Booong terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, 
            FuncionTerminado : function() { 
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
            { 'Paso' : { s : 0.001 , c : 50, r : 0    }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { s : 1     , c : 30, r : Math.PI * 2.5 }, 'Tiempo' : this.Padre.BeatMS, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_Final terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[0].rotation.set(-Valores.r, Valores.r / 2, -Valores.r / 2);
                this.Padre.Parasito[0].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Camara.position.z = Valores.c;
            }.bind(this) 
        });
        
        
        // 1 Beat * 10
        // la creo al final para que se asignen los valores iniciales de la rotación del cyberparasito, (ya que otras animaciones tambien manipulan uno o mas ejes de la rotación)
        this.Ani_Inicial = this.OA.CrearAnimacion([
            { 'Paso' : { r : Math.PI * 2.5    }},                      
            { 'Paso' : { r : 0 }, 'Tiempo' : this.Padre.BeatMS * 10, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
        ], { "Repetir" : 0, FuncionTerminado : function() { console.log("Ani_Inicial terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[0].rotation.set(-Valores.r, Valores.r / 2, -Valores.r / 2);
            }.bind(this) 
        });
        
        // Primera fila segundo cubo
        this.Ani_MCubo1 = this.OA.CrearAnimacion([
            { 'Paso' : { x :  0, s : 0.01 }},                     
            { 'Paso' : { x : 10, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =2; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo1 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[1].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[0].position.x = Valores.x;
                this.Padre.Parasito[1].position.x = -Valores.x;
            }.bind(this) 
        });
        
        // Segunda fila primer cubo
        this.Ani_MCubo2 = this.OA.CrearAnimacion([
            { 'Paso' : { z :  0, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { z : 10, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =3; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo2 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =4; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo3 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =5; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo4 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =6; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo5 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[5].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
            }.bind(this) 
        });
        
        // nuevo cubo en medio (primera y ultima fila de dos cubos, la fila del medio tiene 3 cubos)
        this.Ani_MCubo6 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 10, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 20, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =7; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo6 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[6].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
            }.bind(this) 
        });
        
        // nuevo cubo en medio de la ultima fila (primera fila 2 cubos, segunda y tercera fila 3 cubos)
        this.Ani_MCubo7 = this.OA.CrearAnimacion([
            { 'Paso' : { x : 10, s : 0.01 }},                      // Beats * Milisegundos por Beat
            { 'Paso' : { x : 20, s : 1    }, 'Tiempo' : this.Padre.BeatMS / 2, 'FuncionTiempo' : FuncionesTiempo.SinInOut }
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =8; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo7 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
            
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =9; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo8 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =10; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo9 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =11; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo10 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =12; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo11 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
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
        ], { "Repetir" : 0, FuncionIniciado : function() { this.Padre.Parasitos_Visibles =13; }.bind(this), FuncionTerminado : function() { console.log("Ani_MCubo12 terminada : " + this.Padre.Beats); }.bind(this), FuncionActualizar : function(Valores) { 
                this.Padre.Parasito[12].scale.set(Valores.s, Valores.s, Valores.s);
                this.Padre.Parasito[4].position.x = -Valores.x;
                this.Padre.Parasito[5].position.x = Valores.x;
                this.Padre.Parasito[6].position.x = Valores.x - 20;
                this.Padre.Parasito[9].position.x = -(Valores.x - 20);
            }.bind(this) 
        });
        
        
        //   |2| [3]
        // [4] [5] [6] [9]
        //   |0| [1] [4]

        
        // Aunque parece una chapuza la mejor solución es no utilizar el repeat del ObjetoAnimacion para los TU PA
        // La razón principal es que de esta forma no se descoordina la animación si la pestaña del navegador no es visible
        
        // 93.02 BPM
        this.Pasos_Animacion = [
            { Beats :10, Beat : 1, Funcion : this.Ani_Inicial.Iniciar.bind(this.Ani_Inicial)   , FuncionTerminado : this.Ani_Inicial.Terminar.bind(this.Ani_Inicial) },     
//            { Beat :  32, Duracion : this.Ani_TuPa1_Tiempo   , Funcion : this.Ani_Tu1.Iniciar.bind(this.Ani_TuPa1)         },
            // FASE TUPA 1 (de 32 a 94)
            { Beats : 1, Beat :  32, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  33, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  34, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  35, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  36, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  37, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  38, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  39, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  40, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  41, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  42, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  43, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  44, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  45, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  46, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  47, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  48, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  49, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  50, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  51, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  52, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  53, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  54, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  55, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  56, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  57, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  58, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  59, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  60, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  61, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  62, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  63, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
//            { Beat :  64, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  64, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat :  64, Funcion : this.Ani_MCubo1.Iniciar.bind(this.Ani_MCubo1)     , FuncionTerminado : this.Ani_MCubo1.Terminar.bind(this.Ani_MCubo1) },   
            { Beats : 1, Beat :  65, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  66, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  67, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  68, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  69, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  70, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  71, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  72, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  73, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  74, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  75, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  76, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  77, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  78, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  79, Funcion : this.Ani_TaDaDaDa.Iniciar.bind(this.Ani_TaDaDaDa) },   
            { Beats : 1, Beat :  80, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat :  80, Funcion : this.Ani_MCubo2.Iniciar.bind(this.Ani_MCubo2)     , FuncionTerminado : this.Ani_MCubo2.Terminar.bind(this.Ani_MCubo2) },   
            { Beats : 1, Beat :  81, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  82, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  83, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  84, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  85, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  86, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  87, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  88, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  89, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  90, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  91, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  92, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  93, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat :  94, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat :  95, Funcion : this.Ani_Biiing.Iniciar.bind(this.Ani_Biiing)     },   
            { Beats : 1, Beat :  96, Funcion : this.Ani_Verde.Iniciar.bind(this.Ani_Verde)       },   
            
            
            // FASE TUPA 2 (de 100 a 158)
//            { Beat : 100, Funcion : this.Ani_TuPa2.Iniciar.bind(this.Ani_TuPa2)       },
            { Beats : 1, Beat : 100, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 101, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 102, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 103, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 104, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 105, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 106, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 107, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 108, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 109, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 110, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 111, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 112, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 113, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 114, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 115, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 116, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 117, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 118, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 119, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 120, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 121, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 122, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 123, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 124, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 125, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 126, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 127, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 128, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 129, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 130, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 131, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 132, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 133, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 134, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 135, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 136, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 137, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 138, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 139, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 140, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 141, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 142, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 143, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 144, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 145, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 146, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 147, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 148, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 149, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 150, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 151, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 152, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 153, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 154, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 155, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 156, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 157, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 158, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },            
            { Beats : 2, Beat : 158, Funcion : this.Ani_TuPaPaPa.Iniciar.bind(this.Ani_TuPaPaPa) },            
            { Beats : 1, Beat : 159, Funcion : this.Ani_Rojo.Iniciar.bind(this.Ani_Rojo)         },   
            
            { Beats : 1, Beat : 160, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },
            { Beats : 1, Beat : 160, Funcion : this.Ani_MCubo3.Iniciar.bind(this.Ani_MCubo3)     , FuncionTerminado : this.Ani_MCubo3.Terminar.bind(this.Ani_MCubo3) },   
            // FASE TUPA 3
            //{ Beat : 161, Funcion : this.Ani_TuPa3.Iniciar.bind(this.Ani_TuPa3)       },
            { Beats : 1, Beat : 161, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 162, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 163, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beats : 1, Beat : 164, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 165, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 166, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 167, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 168, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 168, Funcion : this.Ani_MCubo4.Iniciar.bind(this.Ani_MCubo4)     , FuncionTerminado : this.Ani_MCubo4.Terminar.bind(this.Ani_MCubo4) },   
            { Beats : 1, Beat : 169, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 170, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 171, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 172, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 173, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 174, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 175, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 176, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 176, Funcion : this.Ani_MCubo5.Iniciar.bind(this.Ani_MCubo5)     , FuncionTerminado : this.Ani_MCubo5.Terminar.bind(this.Ani_MCubo5) },   
            { Beats : 1, Beat : 177, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 178, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 179, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },            
            { Beats : 1, Beat : 180, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 181, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 182, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 183, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 184, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 184, Funcion : this.Ani_MCubo6.Iniciar.bind(this.Ani_MCubo6)     , FuncionTerminado : this.Ani_MCubo6.Terminar.bind(this.Ani_MCubo6) },   
            { Beats : 1, Beat : 185, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 186, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 187, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 188, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 189, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 190, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 191, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 192, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 192, Funcion : this.Ani_MCubo7.Iniciar.bind(this.Ani_MCubo7)     , FuncionTerminado : this.Ani_MCubo7.Terminar.bind(this.Ani_MCubo7) },   
            { Beats : 1, Beat : 193, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 194, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 195, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 196, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 197, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 198, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 199, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            // 192 
            { Beats : 1, Beat : 200, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 201, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 202, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 203, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 204, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 205, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 206, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 207, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 208, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 208, Funcion : this.Ani_MCubo8.Iniciar.bind(this.Ani_MCubo8)     , FuncionTerminado : this.Ani_MCubo8.Terminar.bind(this.Ani_MCubo8) },   
            { Beats : 1, Beat : 209, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },            
            { Beats : 1, Beat : 210, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 211, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 212, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 213, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 214, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 215, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 216, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 217, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 218, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 219, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 220, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 221, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 222, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 223, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 224, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 224, Funcion : this.Ani_MCubo9.Iniciar.bind(this.Ani_MCubo9)     , FuncionTerminado : this.Ani_MCubo9.Terminar.bind(this.Ani_MCubo9) },   
            { Beats : 1, Beat : 225, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 226, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 227, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 228, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 229, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 230, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 231, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 232, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 233, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 234, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 235, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 236, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 237, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 238, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },            
            { Beats : 1, Beat : 239, Funcion : this.Ani_TaDaDaDa.Iniciar.bind(this.Ani_TaDaDaDa) },
            { Beats : 1, Beat : 240, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 240, Funcion : this.Ani_MCubo10.Iniciar.bind(this.Ani_MCubo10)     , FuncionTerminado : this.Ani_MCubo10.Terminar.bind(this.Ani_MCubo10) },   
            { Beats : 1, Beat : 241, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 242, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 243, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 244, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 245, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 246, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 247, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 248, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 249, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 250, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 251, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 252, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 253, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 254, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 255, Funcion : this.Ani_Biiing.Iniciar.bind(this.Ani_Biiing)     },   
//            { Beats : 1, Beat : 256, Funcion : this.Ani_TuPa4.Iniciar.bind(this.Ani_TuPa4)       },
            { Beats : 1, Beat : 256, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     },   
            { Beats : 1, Beat : 256, Funcion : this.Ani_MCubo11.Iniciar.bind(this.Ani_MCubo11)     , FuncionTerminado : this.Ani_MCubo11.Terminar.bind(this.Ani_MCubo11) },   
            { Beats : 1, Beat : 257, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 258, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 259, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 260, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 261, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 262, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 263, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 264, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 265, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 266, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 267, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 268, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 269, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 270, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 271, Funcion : this.Ani_TaDaDaDa.Iniciar.bind(this.Ani_TaDaDaDa) },
            { Beats : 1, Beat : 272, Funcion : this.Ani_Beeeng.Iniciar.bind(this.Ani_Beeeng)     }, 
            { Beats : 1, Beat : 272, Funcion : this.Ani_MCubo12.Iniciar.bind(this.Ani_MCubo12)     , FuncionTerminado : this.Ani_MCubo12.Terminar.bind(this.Ani_MCubo12) },   
            { Beats : 1, Beat : 273, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 274, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 275, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 276, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 277, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 278, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 279, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 280, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 281, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 282, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 283, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 284, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },
            { Beats : 1, Beat : 285, Funcion : this.Ani_Pa.Iniciar.bind(this.Ani_Pa)             },
            { Beats : 1, Beat : 286, Funcion : this.Ani_Tu.Iniciar.bind(this.Ani_Tu)             },            

            { Beats : 1, Beat : 287, Funcion : this.Ani_Booong.Iniciar.bind(this.Ani_Booong)     },            
            { Beats : 9, Beat : 288, Funcion : this.Ani_Reducir.Iniciar.bind(this.Ani_Reducir)   , FuncionTerminado : this.Ani_Reducir.Terminar.bind(this.Ani_Reducir) },            
            
            { Beats : 1, Beat : 299, Funcion : this.Ani_Final.Iniciar.bind(this.Ani_Final)       , FuncionTerminado : this.Ani_Final.Terminar.bind(this.Ani_Final) }
//            { Beat : 301, Funcion : console.log("FIN")                                }   
        ];
        
        return Debug_IniciarDesdeBeat;
    };
    

    this.ActivarAnimacion = function() {
        if (this.UltimoBeat !== this.Padre.Beats) {
            for (var i = 0; i < this.Pasos_Animacion.length; i++) {
                if (this.Pasos_Animacion[i].Beat === this.Padre.Beats) {
                    this.Pasos_Animacion[i].Funcion();
                }
/*                else { // aproximación para las animaciones críticas que necesitan actualizar los datos de la escena en ciertos momentos (nunca se repiten)
                    if (this.Padre.Beats > (this.Pasos_Animacion[i].Beat + this.Pasos_Animacion[i].Beats) + 1 && typeof(this.Pasos_Animacion[i].FuncionTerminado) !== "undefined") {
                        if (this.Pasos_Animacion[i]._Terminado !== true) {
                            this.Pasos_Animacion[i].FuncionTerminado();
                        }
                    }
                }*/
            }
        }
        this.UltimoBeat = this.Padre.Beats;
        /*
        var t = this.Padre.Tick - this.Padre.TickInicio;
        if (this.Pasos_Actual >= this.Pasos_Animacion.length) { return; }
        if (t > (this.Pasos_Animacion[this.Pasos_Actual].Beat * this.Padre.BeatMS)) {
            this.Pasos_Animacion[this.Pasos_Actual++].Funcion();
        }*/
    };    
};


// 