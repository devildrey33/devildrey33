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
                                    "/CSS/BarraPrincipal.css",
                                    "/CSS/BarraNavegacion.css",
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
                                    "/JS/ObjetoBase.js",
                                    "/JS/ObjetoIndice.js",
                                    "/JS/ObjetoComentarios.js",
                                    "/JS/ObjetoPintarCodigo.js",
                                    "/JS/ObjetoLab.js"
                )				  				  
);

?>