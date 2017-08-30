/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
"use strict";

var CyberParasit_Test = function() {
    
    this.Iniciar = function(nPadre) {
        this.Test = new ObjetoTest({ css : { bottom : "10px", left : "10px" } });
        this.tAnimaciones = this.Test.AgregarLista("Animaciones");
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Final   , "Variable" : "Iniciar", "Nombre" : "Ani Final" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Reducir , "Variable" : "Iniciar", "Nombre" : "Ani Reducir" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Tu      , "Variable" : "Iniciar", "Nombre" : "Ani Tu" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Tu2     , "Variable" : "Iniciar", "Nombre" : "Ani Tu2" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Tu3     , "Variable" : "Iniciar", "Nombre" : "Ani Tu3" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Pa      , "Variable" : "Iniciar", "Nombre" : "Ani Pa" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Pa2     , "Variable" : "Iniciar", "Nombre" : "Ani Pa2" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Pa3     , "Variable" : "Iniciar", "Nombre" : "Ani Pa3" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_TaDaDaDa, "Variable" : "Iniciar", "Nombre" : "Ani Ta-da-da-da" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_TuPaPaPa, "Variable" : "Iniciar", "Nombre" : "Ani Tu-pa-pa-pa" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Beeeng  , "Variable" : "Iniciar", "Nombre" : "Ani Beeeng" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Biiing  , "Variable" : "Iniciar", "Nombre" : "Ani Biiing" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Booong  , "Variable" : "Iniciar", "Nombre" : "Ani Booong" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Verde   , "Variable" : "Iniciar", "Nombre" : "Ani Azul a verde" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Rojo    , "Variable" : "Iniciar", "Nombre" : "Ani Verde a rojo" });
        this.tAnimaciones.Agregar({  Padre : nPadre.Animaciones.Ani_Azul    , "Variable" : "Iniciar", "Nombre" : "Ani Rojo a azul" });
        this.mCubo = this.tAnimaciones.AgregarLista("MostrarCubo");
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo1  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 1" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo2  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 2" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo3  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 3" });        
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo4  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 4" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo5  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 5" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo6  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 6" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo7  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 7" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo8  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 8" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo9  , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 9" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo10 , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 10" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo11 , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 11" });
        this.mCubo.Agregar({  Padre : nPadre.Animaciones.Ani_MCubo12 , "Variable" : "Iniciar", "Nombre" : "Ani MostrarCubo 12" });
        
//        this.Animaciones = this.Test.AgregarLista("Animaciones");
//        this.Animaciones.Agregar({ Padre : this.Camara.position, Variable : "x", Min : -200, Max : 200, Nombre : "position.x", Modificable : false  });
    };
    
    
};