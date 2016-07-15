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
                                    "/CSS/Tablas.css"
                ),				  
    /* Archivos JS */
    'js' => array(
                                    "/JS/FuncionesGlobales.js", // Funciones simplificadas básicas (Randoms, etc...)
                                    "/JS/ObjetoBase.js",
                                    "/JS/ObjetoIndice.js",
                                    "/JS/ObjetoComentarios.js",
                                    "/JS/ObjetoPintarCodigo.js",
                                    "/JS/ObjetoLab.js",
                                    "/JS/Banner/Banner_Espacio2D.js",
                                    "/JS/Banner/Banner_Colisiones.js",
                                    "/JS/Banner/Banner_ResplandorCircular.js",
                                    "/JS/Banner/Banner_TranstornoLineal.js",
                                    "/JS/Banner/Banner_MatrixLluviaHexadecimal.js",
                                    "/JS/Banner/Banner_Cubos3D.js",
                                    "/JS/ObjetoBanner.js", // Debe estar despues de los banners
//                                    "/JS/3rdParty/Stats.js" // FPS
                )				  				  
);

?>