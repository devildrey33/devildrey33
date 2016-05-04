<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));
	$Base->InicioPlantilla("BubaTronik : Notas de versión");*/

	include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Notas de la versión de BubaTronik">
        <meta name="keywords" content="Notas BubaTronik, Notas versión BubaTronik">';

	
        $Base->InicioPlantilla(basename(__FILE__), "BubaTronik : Formatos", $META);
        
        $Base->InicioSinCabecera(basename(__FILE__), "BubaTronik : Formatos");

?>	

                <p><strong>[26/11/2010] Versión 0.61 :</strong></p>
                <ul>
                <li>LibVlc actualizada a la versión 1.1.5</li>
                <li>Solucionado que al ejecutar medios del explorador no se reproduzcan si no se esta reproduciendo nada.</li>
                <li>Reparado EditarNombre para canciones de un CD de audio que no funcionaba correctamente.</li>
                <li>Reparada la notificación de autoinserción. Ahora se actualizara la base de datos cuando se inserte un disco/cd con medios.</li>
                <li>Reparado mensaje de error que advierte de que la unidad no esta lista.</li>
                <li>Reparada lista de tipos en las opciones que podia provocar un error grave si se manipulaban varias veces.</li>
                <li>El thread del oscyloscope ahora funciona de forma segura y no se deja instancias encendidas al minimizar.</li>
                <li>Al editar el nombre o la pista de un medio desde la lista de canciones, se modificara en la base de datos.</li>
                <li>Se ha eliminado el sistema antiguo de logs.</li>
                <li>Las columnas de la lista se adaptan según tengan 2,3,4 digitos en la pista, y según el tiempo si es formato HH:MM:SS o MM:SS</li>
                <li>El reproductor abre y reproduce archivos con extensión crdownload. Estos archivos son descargas de google chrome, y si por ejemplo estamos descargando un video podemos forzar su reproducción mientras se esta descargando. NOTA : no se ha enlazado la extension crdownload al reproductor, por lo que habra que asociarlo manualmente. (TODO ESTO SE ENCUENTRA EN FASE BETA)</li>
                <li>Solucionado error grave al abrir una segunda instancia del reproductor sin parámetros.</li>
                <li>Las listas de estilos del menú principal ahora quedan ordenadas por orden alfabetico (FONG).</li>
                <li>Ahora se guarda la ultima selección de listas aleatorias en la pantalla de inicio.</li>
                <li>Reimplementado el sistema de dumps que no acababa de funcionar correctamente. Esperemos que ahora mande los informes de errores siempre.</li>
                <li>Solucionado error al escanear un medio por el cual si ese medio tiene un frame del tag con 0 bytes de datos petaba el reproductor, y no mandaba el informe de errores.</li>
                <li>Retocado sistema de busqueda nuevamente. Se han añadido 2 opciones nuevas que pedira por cada directorio que quieras escanear.</li>
                <li>Se ha retocado el control que muestra la lista de directorios del sistema para que pueda tener texto en negrita y en cursiva. Ademas tambien tiene desactivados aquellos directorios que no deberias escanear.</li>
                <li>Añadido soporte para arrastrar y soltar de windows (ahora puedes arrastrar incluso directorios enteros)</li>
                <li>Solucionado error de pintado en el ControlPresentacion que aveces solapaba 2 lineas en una.</li>
                <li>Traduccion al catalan al 100%</li>
                <li>Ahora se pueden guardar listas m3u</li>
                </ul>
                <br />
                <br />
                
                <p><strong>[30/10/2010] Versión 0.60 :</strong></p>
                <ul>
                <li>Retocada la forma de tratar nuevos medios añadiendolos desde el explorador. Si haces dobleclick en un archivo asociado al reproductor y el reproductor ya se esta ejecutando pasara lo siguente : Si no se esta reproduciendo nada o esta en pausa , se añadira a la lista y se abrira el nuevo medio. Si se esta reproduciendo alguna cosa, se añadira el medio a la lista sin ponerlo a reproducir. </li>
                <li>Retocado el sistema de redimensión de las ventanas para que funcione perfectamente en windows 7 con sus efectos de medio maximización. </li>
                <li>Añadido nuevo sistema de soporte de errores que guarda un archivo dump si el programa tiene una excepción, y lo mandara a devildrey33.es con tu permiso. </li>
                <li>Solucionado problema que no permite actualizar el reproductor bajo windows vista y windows 7 si no se usan privilegios de administrador al ejecutar el reproductor. Por desgracia los que tengan BubaTronik 0.57 funcionando bajo windows vista/7 sin privilegios de administrador, recibiran un error fatal al actualizar.... </li>
                <li>LibVlc actualizada a la versión 1.1.4 </li>
                <li>Re-Implementado el sistema que controlaba las extensiones utilizables del reproductor para dar en un futuro la posibilidad de agregar o quitar extensiones. </li>
                <li>Las actualizaciones ya no seran obligadas si tienes marcada la opcion buscar actualizaciones. Ahora se mostrara un dialogo que te permitira descargar e instalar la actualización si asi lo deseas. </li>
                <li>Solucionado problema al hacer pantalla completa en los videos, que recibia dobleclicks de mas. Si por ejemplo haciamos 3 clicks seguidos el reproductor lo interpretaba como dos dobleclicks, con lo que se maximizaba y se volvia a restaurar.  </li>
                <li>Solucionados problemas graficos con el ControlPresentacionEx y sus controles hijos. Ahora se calculan correctamente las regiones de los controles hijos.  </li>
                <li>Optimizados repintados de las escenas del ControlPresentacionEx.</li>
                <li>Retocado EdicionDesplegable para mostrar correctamente el estado del boton. Y tambien se han retocado los eventos para que queden como una combobox estandar de windows.  </li>
                <li>Las barras de progreso y desplazamiento ahora tienen todas 2 pixeles de borde.  </li>
                <li>Retocados varios iconos para que queden centrados en sus respectivos botones.  </li>
                <li>Se ha des-habilitado la opcion : &quot;Obtener teclado cuando el reproductor no este activo.&quot; ya que no funciona como deberia.  </li>
                <li>Solucionado error de repintado en los botones extra de las barras de scroll.</li>
                <li>Se ha simplificado el interface gráfico para buscar nuevos medios reproducibles, de forma que sea mas fácil realizar dicha tarea. </li>
                <li>La revision de coincidencias entre geneors, grupos y discos ahora se hace automáticamente si tienes marcada la opción &quot;Analisis post-escaneo&quot;</li>
                <li>Re-implementado el sistema para crear escenas que contienen controles, imagenes, y textos para que los objetos puedan ser alineados de varias formas. </li>
                <li>Retocado el pintado de links dentro del texto, ya que en windows 7 se creaba un efecto de texto doble que dejaba el texto poco nitido.  </li>
                <li>Rediseñada la sección de inicio para dar mas información en menos espacio, que ademas da algunas sugerencias.  </li>
                <li>Retocadas varias imagenes del reproductor para que se muestren mejor.  </li>
                <li>Implementado sistema para mostrar ayuda en cualquier control y link mediante tooltips. </li>
                <li>Rediseñada interfaz para añadir texto a la escena, ahora se puede agregar texto alineado de varias formas.  </li>
                <li>Solucionado bug con la barra de titulo de windows, que no movia la ventana del reproductor cuando se arrastraba el area con un degradado gris.  </li>
                <li>Añadido directorio \LUA de la libvlc (Si no existe al cargar algunos FLV y avis provocan una violación de acceso en la memoria, que no se puede depurar desde MSVC10).  </li>
                <li>Solucionado problema que asignaba el foco a la ventana del reproductor cada vez que se acababa una canción.  </li>
                <li>Creada ventana para contener registros de log utilizando el nuevo control DWLEdicionEx en modo multilinea y a todo color (DESHABILITADO).</li>
                <li>Eliminada opción de la lista inicial : &quot;Canciones mas escuchadas&quot; ya que si habia 5 tipos de lista, existia un 20% de probabilidades de que salieran las mas escuchadas, con lo que al final siempre seran las mismas.  </li>
                <li>Añadido soporte básico para listas M3U, ahora estas se mostraran en la base de datos (si la lista contiene medios invalidos estos no se mostraran en la base de datos, si todos los medios de la lista no son validos, directamente esa lista no aparecera).  </li>
                <li>Al borrar medios de la base de datos se te preguntara tambien para borrarlos del disco.  </li>
                <li>SOLUCIONADO todo el tema de asociaciones de archivos que no funcionaba correctamente en windows 7  </li>
                <li>Añadido des-instalador (puedes encontrarlo en panel de control -&gt; agregar / quitar programas).  </li>
                <li>Añadido soporte para reproducir CD's de audio.  </li>
                <li>El reproductor ahora soporta 52 extensiones en total : ASF, AMV, AVI, CDA, DIVX, DV, FLAC, FLV, GFX, IT, MKV, MID, MOV, MPEG, MPG, MPV, MPEG1, MPEG2, MPEG4, MPE, MP2, MP3, MP4, MP4V, MTS, M1V, M2T, M2TS, M2V, M3U, M4V, MOD, NSV, NUV, OGG, OGM, OGV, OGX, PS, RM, RMVB, SDP, S3M, TOD, TS, TTS, VOB, VRO, WAV, WEBM, WMA, WMV, XM, XVID. </li>
                <li>Analisis de los medios rediseñado, ahora se detectaran correctamente aquellos medios que tienen una extensión de video pero solo tienen audio.</li>
                <li>Se ha implementado que bubatronik aparezca en programas predeterminados. Ahora puedes elegir BubaTronik como reproductor predeterminado desde windows.  </li>
                <li>Reparados varios menús que no apuntaban a ninguna acción.  </li>
                <li>Añadidos varios tooltip de ayuda en los controles.  </li>
                <li>Retocado sistema a la hora de mostrar pistas de los medios. Si no tiene pista no se mostrara en la BD (antes salia con -1), y en la lista aparecera como pista 0.  </li>
                <li>Añadido menú para abrir la carpeta del medio seleccionado.  </li>
                <li>Diseñada pantalla &quot;Sobre bubatronik...&quot; con información extra acerca del reproductor. </li>
                </ul>
                <br />
                <br />
                
                <p><strong>[12/01/2010] Versión 0.57 : </strong></p>
                <ul>
                <li>Se ha detectado un problema que podria causar que el reproductor no se actualizara correctamente en la version 0.56. </li>
                <li>Solucionado memory leak al mover la ventana.</li>
                <li>Se ha movido la BD al directorio AppData del ordenador, para no tener que arrancar como administrador. (win 6.x) </li>
                <li>Se ha implementado soporte para las barras de titulo del windows vista y windows 7. (win 6.x) </li>
                <li>El reproductor aun esta en fase experimental bajo windows vista y windows 7. (win 6.x) </li>
                <li>Reparado bug al hacer la pantalla completa en un video, que no mostraba correctamente los controles. </li>
                <li>Retocado el instalador / actualizador para que ahora pueda mostrar las notas de la version y crear un acceso directo. </li>
                <li>Se han deshabilitado las teclas globales ya que no funcionaban correctamente (pendiente de revisión) </li>
                </ul>
                <br />
                <br />
                
                
                <p><strong>[28/11/2009] Versión 0.56 :</strong></p>
                <ul>
                <li>Se ha solucionado un problema con el repintado del control ShufleRepeat </li>
                <li>El modulo para mostrar coincidencias no se mostraba correctamente, actualmente se ha reparado el error. </li>
                <li>Las barras de scroll no actualizaban correctamente el control presentación. </li>
                <li>Al salir del modo pantalla completa el mouse ya no se quedara escondido.</li>
                </ul>
                <br />
                <br />
                
                <p><strong>[23/11/2009] Version 0.55 :</strong></p>
                <ul>
                <li>Teminado el sistema de skins, ahora se dispone de 4 previsualizaciones. Ademas como de costumbre puedes crearte un skin partiendo de otro y editando los valores RGB dentro de el. </li>
                <li>Se ha retocado el sistema para hacer pantalla completa con videos, y para maximizar la ventana. </li>
                <li>Las opciones han sido reorganizadas, y se han añadido varios iconos nuevos para las nuevas opciones. </li>
                <li>Se ha mejorado el controlpresentacionex para poder mostrar palabras en negrita. </li>
                <li>Se ha añadido un sistema para revisar la base de datos y eliminar medios que ya no existan. </li>
                <li>Actualizada la libvlc a la ultima version 1.0.3. </li>
                <li>Ahora existe la posibilidad para deshabilitar que los tooltips muestren datos de los tags. </li>
                <li>Añadido sistema para poder cargar otros idiomas, por el momento se dispone de Castellano y Catalan. Aun hay partes que solo se veran en castellano, estas partes estan pendientes de validacion / modificacion, y hasta que no esten completas no seran actualizadas para funcionar con las dlls de los idiomas. </li>
                <li>Añadida opcion para cambiar el ancho de las barritas. </li>
                <li>Añadidos controles para mover el orden de las canciones en la lista. </li>
                <li>Añadida opcion que permite ocultar automaticamente el mouse cuando se reproduce video. </li>
                <li>Retocado el thread del oscyloscopio, ahora es mas eficiente y rapido. </li>
                <li>Actualizados los iconos del reproductor, ahora el icono principal se vera a una resolucion aceptable y no a 16*16 </li>
                <li>Retocados los combo box para que admitan iconos, esencialmente para la seleccion de idiomas. </li>
                <li>Se ha solucionado un problema con los scrolls que no seguian bien el raton cuando se salia de su control. </li>
                <li>Retocado el algoritmo para el cambio de tamaño de la ventana, ahora la ventana no se movera si esta en su tamaño minimo. </li>
                <li>Ahora todos los controles quedan resaltados cuando el mouse esta encima. </li>
                <li>Se ha remplazado el dialogo de buscar directorios por defecto del windows, por el nuevo control DWLExplorarDirectorios. </li>
                <li>Se ha actualizado el sistema para detectar nuevas actualizaciones, ahora este descargara las actualizaciones y las instalara el solo. </li>
                <li>Se ha creado un instalador autoextraible que contiene el reproductor comprimido dentro listo para ser extraido en cualquier directorio. </li>
                </ul>
                <br />
                <br />
                
                <p><strong>[07/11/2009] Versión 0.50 :</strong></p>
                <ul>
                <li>Añadido sistema para detectar nuevas actualizaciones de forma automática. </li>
                <li>Se ha unificado la base de datos de vídeo y audio para que solo quede una. </li>
                <li>Añadidas teclas de acceso rapido para : play, pausa, stop, volumen, avanzar/retroceder medio, etc.. </li>
                <li>Solucionadas varias perdidas de memoria al destruir ciertos controles extendidos de la DWL 2009. </li>
                <li>Añadido soporte para varios idiomas, de momento solo esta el castellano. </li>
                <li>Añadido control para ver el tiempo actual y el tiempo restante. </li>
                <li>Se ha retocado la disposición de los controles para que el volumen sea mas alto. </li>
                </ul>
                <br />
                <br />
                
                <p><strong>Versión 0.41 :</strong></p>
                <ul>
                <li>Solucionado bug en modo pantalla completa que a veces mostraba la barra de inicio al mostrar los controles. </li>
                <li>Retocado el modo en que el explorador ejecuta el reproductor, de forma que ahora tenemos 2 opciones : Añadir a lista (por defecto), y Reproducir. </li>
                <li>Los controles de pantalla completa ahora se muestran según el skin del reproductor. </li>
                <li>Añadidas algunas opciones nuevas. </li>
                <li>Implementada ventana para mostrar mensajes de aviso. </li>
                <li>Reparado bug que podía hacer sonar una canción mientras se reproducía vídeo. </li>
                </ul>
                
                <br />
                <br />
                
                <p><strong>Versión 0.40 :</strong></p>
                <ul>
                <li>Solucionado bug con el directorio de los plugins, el cual hacia petar el reproductor con la gran mayoría de avis.</li>
                <li>Enlazados los menús para crear listas aleatorias. </li>
                <li>Se ha añadido soporte en modo pantalla completa para los controles estándar.</li>
                <li>Ahora el reproductor es maximizable.</li>
                <li>Implementados controles básicos par la ventana (maximizar / minimizar / cerrar)</li>
                </ul>
                
                <br />
                <br />
                <p><strong>Versión 0.30 :</strong></p>
                <ul>
                <li>Primera versión de cara al publico.</li>
                <li>Capacidad de reproducir audio y vídeo.</li>
                <li>Se pueden asociar los archivos de audio y vídeo para que el explorador ejecute este reproductor al pinchar en una canción/vídeo.</li>
                <li>Los tooltips informativos muestran todos los datos del medio, incluyendo tags de todos los tipos.</li>
                </ul>
                <p><br /><br />
                <div class='Centrado'>
                    <a href="BubaTronik" class='Boton-Normal'>Volver a la pagina principal de BubaTronik</a>
                </div>
                </p>

<?php
    $Base->FinBlog(true);
    $Base->FinPlantilla(); 
?>