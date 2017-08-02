<?php
/**
 * Groups configuration for default Minify implementation
 * @package Minify
 */

/** 
 * You may wish to use the Minify URI Builder app to suggest
 * changes. http://yourdomain/min/builder/
 *
 * See http://code.google.com/p/minify/wiki/CustomSource for other ideas
 **/

return array(
    /* Archivos CSS */
    'css' => array(
        "/CSS/Base.css",
        "/CSS/Boton.css",
        "/CSS/Menu.css",
        "/CSS/Logo.css",
        "/CSS/BarraPrincipal.css",
        "/CSS/BarraNavegacion.css",
        "/CSS/Tooltips.css",
        "/CSS/Blog.css",
        "/CSS/PintarCodigo.css",
        "/CSS/Lab.css",
        "/CSS/Comentarios.css",
        "/CSS/Index.css",
        "/CSS/Media.css",
        "/CSS/Codemirror.css",
        "/CSS/Codemirror-SimpleScrollbar.css",
        "/CSS/Tablas.css",
        "/CSS/ObjetoTest.css",
        "/CSS/Error404.css"
    ),				  
    /* Archivos CSS administrador */
    'css-admin' => array(
        "/CSS/Admin.css",
        "/CSS/Admin.Log.css",
        "/CSS/Admin.EditarEntradas.css"
    ),
    

    /* Archivos JS */
    'js' => array(
        "/JS/FuncionesGlobales.js", // Funciones simplificadas básicas (Randoms, etc...)
        "/JS/ObjetoBase.js",
        "/JS/ObjetoIndice.js",
        "/JS/ObjetoComentarios.js",
        "/JS/ObjetoPintarCodigo.js",
        "/JS/ObjetoLab.js",
        "/JS/ObjetoCanvas.js", // Debe estar antes de los banners / canvas
        "/JS/ObjetoAnimacion.js", // Debe estar antes de los banners / canvas
        "/JS/ObjetoCanvas/Banner_Espacio2D.js",
//      "/JS/Banner/Banner_Colisiones.js",
//      "/JS/Banner/Banner_ResplandorCircular.js",
//      "/JS/Banner/Banner_TranstornoLineal.js",
//      "/JS/Banner/Banner_MatrixLluviaHexadecimal.js",      
        "/JS/ObjetoCanvas/Banner_AdiestramientoCubos3D.js",
        "/JS/ObjetoCanvas/Banner_WormHole.js",
//      "/JS/ObjetoCanvas/Banner_Anillos.js",                // no m'agrada
        "/JS/ObjetoCanvas/Banner_Sinusoidal.js",
        "/JS/ObjetoCanvas/Banner_GeometriaBasica.js",
        "/JS/ObjetoCanvas/Banner_EsferaVShader.js",
        "/JS/ObjetoCanvas/Banner_ReunionDeCirculos.js",
        "/JS/ObjetoCanvas/Banner_MultiCubo.js",
        "/JS/ObjetoCanvas/Banner_HexTunnel.js",
        "/JS/ObjetoCanvas/SobreDevildrey33.js",
        "/JS/ObjetoTest.js"
    ),
    /* Archivos CSS administrador */    
    'js-admin' => array(
        "/JS/ObjetoAdmin.js",
        "/JS/ObjetoAdmin.Lab.js",
        "/JS/ObjetoAdmin.Comentarios.js",
        "/JS/ObjetoAdmin.EditarEntradas.js",
        "/JS/ObjetoAdmin.Log.js"
    )
    
);

?>