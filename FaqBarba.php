<?php
    include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");

    $Base = new devildrey33;
    $Base->InicioPlantilla(basename(__FILE__), "devildrey33.es", "");    
    
    $ArrayDatos = (require dirname(__FILE__).'/Web/Passwords.php');
?>
    <article class='Blog' pagina='FaqBarba.php'>
        <br />
        <h2>Instalació</h2>
<?php echo "<p>Has de crear la BD <b>".$ArrayDatos["NOM-BD"]."</b> amb login '<b>root</b>', pass '<b>".$ArrayDatos["PASS-Barba"]."</b>'.</p>"; ?>
        <hr />
        <h2>Conta</h2>
        <table class="Tabla">
            <tr>
                <td>Usuari</td>
<?php echo     "<td>".$ArrayDatos["LOGIN-Barba"]."</td>"; ?>
            </tr>
            <tr>
                <td>Password</td>
<?php echo     "<td>".$ArrayDatos["PASS-Barba"]."</td>"; ?>
            </tr>
        </table>
        <ul>
            <li>Per loguejar : dobleclick a la '<b>L</b>' del logo deviLdrey33, i dobleclick al <b>penultim</b> '<b>3</b>' del logo, en menys de 1500 ms, o http://localhost/?Loguear</li>
            <li>Ningu pot utilitzar el nom 'Joel Barba' per escriure missatges, has de loguejarte per poder utilitzar el nom.</li>
            <li>Tens permisos per editar i eliminar missatges, OJU.</li>
            <li>Tens permisos per editar exemples del Laboratori de proves, tambe OJU.</li>
            <li>Tens permisos de depuració (des-minificar codi, veure misatges de la consola, actualitzar cache).</li>
        </ul>
        <p>La web es posa en modo depuració automaticament sempre que loguejis (codi descomprimit i misatges de consola, per veure el html separat per lineas has de recarregar la web), i recorda que nomes pots utilitzar el nom un cop has entrat amb la teva conta.</p>
        <hr />
        <h2>Directoris</h2>
        <p>OJU! Els directoris locals no tenen sempre el mateix nom en el servidor. En principi si tenen una URL diferent es que funciona desde les dues, pero si te la URL diferent es per alguna rao, per exemple les descarregues les controlo amb un contador, per lo que el directori <i>/Descargas</i> es virtual i pasa per un PHP que suma la descarrega i despres redirecciona al directori <i>/App</i> </p>
        <table class='Tabla'>
            <thead>
                <tr>
                   <th>Directori</th>
                   <th>URL</th>
                   <th>Descripció</th>
                </tr>
            </thead>            
            <tr>
                <td>/Apps</td>
                <td>/Descargas</td>
                <td>Directori amb zips de descarrega</td>               
            </tr>
            <tr>
                <td>/Blog</td>
                <td>/Blog</td>
                <td>Directori on van les entrades del blog</td>               
            </tr>
            <tr>
                <td>/Codigo</td>
                <td>/Codigo</td>
                <td>Directori on es guarden codis de qualsevol exemple / tuto</td>               
            </tr>
            <tr>
                <td>/Documentacion</td>
                <td>/Doc</td>
                <td>Directori per documentacio, ara mateix nomes hi ha la de CSS i no esta acabada...</td>               
            </tr>
            <tr>
                <td>/Ejemplos</td>
                <td>/Ejemplos</td>
                <td>Directori per tot tipus d'exemples de HTML, CSS, i JS</td>               
            </tr>
            <tr>
                <td></td>
                <td>/Lab/Ejemplos</td>
                <td>Laboratori de proves (editor HTML5/CSS3/JS dinamic)</td>               
            </tr>
            <tr>
                <td>/logs</td>
                <td></td>
                <td>Directori intern del servidor per guardar logs</td>               
            </tr>
            <tr>
                <td>/nbproject</td>
                <td></td>
                <td>Directori del projecte de netbeans</td>               
            </tr>
            <tr>
                <td>/Fuentes</td>
                <td></td>
                <td>Tipografies web</td>               
            </tr>
            <tr>
                <td>/Web</td>
                <td>/Web</td>
                <td>Directori principal del codi PHP</td>               
            </tr>
            <tr>
                <td>/Web/Cache</td>
                <td>/Web/Cache</td>
                <td>Directori on es guarden arxius cache</td>               
            </tr>
            <tr>
                <td>/Web/Config</td>
                <td>/Web/Config</td>
                <td>Directori on hi ha la configuració (Llista de entrades i de categories, i llista d'arxius js i css per comprimir)</td>               
            </tr>
            <tr>
                <td>/Web/CSS</td>
                <td>/Web/CSS</td>
                <td>Directori pels arxius CSS</td>               
            </tr>
            <tr>
                <td>/Web/Graficos</td>
                <td>/Web/Graficos</td>
                <td>Directori on es guarden totes les imatges, també es pot accedir desde http://img.devildrey33.es</td>               
            </tr>
            <tr>
                <td>/Web/JS</td>
                <td>/Web/JS</td>
                <td>Directori pels arxius JS</td>               
            </tr>            
            <tr>
                <td>/Web/PintarCodigo</td>
                <td>/Web/PintarCodigo</td>
                <td>Diccionaris i tests per l'objecte PintarCodigo</td>               
            </tr>            
        </table>                
        <br />
        <hr />        
        <h2>Plantilla</h2>
        <p>Abans de res el primer que has de fer al crear el nou arxiu es colocar el codi per la plantilla : </p>
<?php 
/* -[INICIO devildrey33.IDC1]-
<?php 
    include($_SERVER["DOCUMENT_ROOT"]."/Web/devildrey33.php");
    $Base = new devildrey33;	
    $Titul = "How to use google app scripts";
    // Meta, has de posar els tags pel SEO, els de facebook i twiter es fan automaticament
    $META = "<meta name=\'description\' content=\'".$Titul."\'>".
    "<meta name=\"keywords\" content=\"google app scripts, google scripts how to, google app, google scripts\>";
    // Inici de la plantilla (primer cop que entra a devildrey33)
    $Base->InicioPlantilla(basename(__FILE__), $Titul, $META);
    // Inici de la capçalera del Blog
    $Base->InicioBlog(basename(__FILE__), $Titul);
?> 
-[FIN devildrey33.IDC1]- */
    $Base->PintarCodigo->PintarArchivoPHP("ID1", "Plantilla inici", basename(__FILE__), 'IDC1'); 
?>
        <p>Aquest codi s'ha de posar just al començament de l'arxiu php. Has de modificar el <linea cid='ID1' l='4'>$Titul</linea> i el <linea cid='ID1' l='6'>$META</linea> apropiadament.</p>
        <p>Si necesites afegir un CSS o JS extra s'hauran de carregar via JavaScript just a sota de la <linea cid='ID1' l='14'>linea 14</linea>.</p>
<?php 
/* -[INICIO devildrey33.IDC2]-
// Carregar CSS
<script>$Base.CargarCSS("Blog_how-to-use-google-app-scripts.css");</script>
// Carregar script JS
<script>$Base.CargarJS("Blog_how-to-use-google-app-scripts.js");</script>
// Carregar script i executar funció d'aquest script un cop s'ha carregat
<script>$Base.CargarJS("Blog_how-to-use-google-app-scripts.js", function() { FuncioInici(); });</script>
 -[FIN devildrey33.IDC2]-*/
    $Base->PintarCodigo->PintarArchivoPHP("ID2", "Carregar javascript o css extern", basename(__FILE__), 'IDC2'); 
?>
        <p>Aquestes funcions miren directament als directoris <i>/Web/CSS</i>, i <i>/Web/JS</i>, no els hi posis cap path. Tambe s'hauria de respectar la nomenclatura afegint davan "Blog_" i despres el nom del php. D'aquesta forma en un futur ho podre automatitzar...</p>
        <p>A la <linea cid='ID2' l='6'>línea 6</linea> carrego un script i ames executo una funció del script un cop s'ha carregat.</p>
        <div class='nota'>La web carrega tots els documents dinamicament, i la forma mes neta que he trobat per carregar CSS/JS dinamicament es aquesta.</div>
        <br />
<?php 
/* -[INICIO devildrey33.IDC3]-
<?php
    $Base->FinBlog();
    // Final de la plantilla (primer cop que entra a devildrey33)
    $Base->FinPlantilla(); 
?>
-[FIN devildrey33.IDC3]- */
    $Base->PintarCodigo->PintarArchivoPHP("ID3", "Plantilla final", basename(__FILE__), 'IDC3');
?>        
        <p>Aquest codi s'ha de posar just al final de l'arxiu.</p>
        <p>La funció FinBlog te 2 parametres : <code>$EvitarComentarios = FALSE</code>, <code>$SoloLectura = FALSE</code>.</p>
        <table class='Tabla'>
            <tr>
                <td>$EvitarComentarios</td>
                <td>Ocultar tots els comentaris i controls.</td>                
            </tr>
            <tr>
                <td>$SoloLectura</td>
                <td>Ocultar els controls per enviar comentaris, pero deixa els comentaris.</td>                
            </tr>
        </table>
        <br />
        <hr />
        <h2>Normes de maquetació i generals</h2>
        <ul>
            <li>Utilitzar etiqueta h2 per anclatjes dinamics, no utilitzar la etiqueta h1 en cap moment.</li>
            <li>No sortir mai de la etiqueta <code>&lt;article class='Blog'&gt;</code>, que es on comença el teu codi.</li>
            <li>Prohibit cualsevol tipus de flash, java, silverlight, etc...</li>
            <li>Si necesites escriure algun arxiu temporal en PHP fes-ho a la carpeta <i>/Web/Cache</i>.</li>           
        </ul>
        <hr />
        <h2>CSS</h2>
        <p>Nomes pots crear un arxiu CSS per article, l'has de posar a '/Web/CSS', i l'has de carregar desde javascript amb la funció <code>$Base.CargarCSS('Nom.css')</code> nomes el nom, no li posis cap path.</p>
        <table class='Tabla'>
            <thead>
                <tr>
                   <th>Clase</th>
                   <th>Etiqueta</th>
                   <th>Descripció</th>
                </tr>
            </thead>            
            <tr>
                <td><b>.ImagenPortada</b></td>
                <td>img</td>
                <td>Imatge que es mostra sempre al principi del article, ha de ser de 250x200 sense transparencies. (alineada a l'esquerra)</td>                
            </tr>
            <tr>
                <td><b>.ImagenPortada2</b></td>
                <td>img</td>
                <td>Imatge que es mostra sempre al principi del article, ha de ser de 250x200 sense transparencies. (alineada a la dreta)</td>                
            </tr>
            <tr>
                <td><b>.Tabla</b></td>
                <td>table</td>
                <td>Aquesta taula, pot contenir taules filla i neta.
                    <table class='Tabla'>
                        <thead>
                            <tr>
                                <th>Head taula filla</th>
                                <th>Head taula filla</th>
                            </tr>
                        </thead>
                        <tr>
                            <td>valor</td>
                            <td>
                                <table class='Tabla'>
                                    <thead>
                                        <tr>
                                            <th>Head taula neta</th>
                                            <th>Head taula neta</th>
                                        </tr>
                                    </thead>
                                    <tr>
                                        <td>valor</td>
                                        <td>valor</td>
                                    </tr>
                                </table>
                                
                            </td>
                        </tr>
                    </table>
                </td>                
            </tr>
            <tr>
                <td><b>.postit</b></td>
                <td>*</td>
                <td><div class='postit'>Marc del color de un post-it.</div></td>                
            </tr>
            <tr>
                <td><b>.nota</b></td>
                <td>*</td>
                <td><div class='nota'>Post-it amb el texte 'NOTA :' en negreta.</div></td>                
            </tr>
            <tr>
                <td><b>.notamental</b></td>
                <td>*</td>
                <td><div class='notamental'>marc amb fondo blanc entre parentesis que te una font mes petita i de color gris, ideal per frases <b>CURTES</b> i memorables com 'el mechero no fa a l'home', o 'por la birra hermanos!!'. Lo de curtes es per que el parentesis nomes dona per una linea xD.</div></td>                
            </tr>
            <tr>
                <td><b>.Sintaxis</b></td>
                <td>pre</td>
                <td><pre class='Sintaxis'>Per <b>remarcar</b> sintaxis <i>etiqueta &lt;i&gt;</i>, etiqueta <code>&lt;code&gt;</code>.</pre></td>                
            </tr>
            <tr>
                <td><b>.Boton-Normal</b></td>
                <td><b>button</b>, <b>a</b></td>
                <td>Buto, si es un buto de descarrega fes servir la etiqueta 'a' amb un <code>target='_blank'</code>. <strike>La etiqueta <code>button</code> no necesita que se li especifiqui la clase Boton-Normal</strike>, i aquesta etiqueta es la que recomano per utilitzar amb javascript. <div class='nota'>Si vols un buto amb un efecte hover especial, mirat <a href='/Lab/Ejemplos/Transition/Botones.html'>Botones.html</a> i esculleix la clase que mes t'adradi (<code>.Boton-Normal</code> equival a <code>.Boton-LinealGradient2</code> de moment xD...).</div></td>                
            </tr>
            <tr>
                <td><b>.Centrado</b></td>
                <td>*</td>
                <td>Clase per centrar objectes (<code>margin-left:auto</code>, <code>margin-right:auto</code>, <code>display:table</code>). En esencia per centrar butons, o imatges.</td>
            </tr>
            <tr>
                <td></td>
                <td style='width:65px'><b>b</b>, <b>i</b>, <b>code</b></td>
                <td>Per remarcar paraules / codi, pots fer servir :  <b>&lt;b&gt;</b>, <i>&lt;i&gt;</i>, <code>&lt;code&gt;</code>, <strike>&lt;strike&gt;</strike>. </td>                
            </tr>
            <tr>
                <td></td>
                <td style='width:65px'><b>linea</b></td>
                <td>Per remarcar líneas de l'objecte <code>PintarCodigo</code>, per exemple : <linea cid='ID3' l='1'>Plantilla final (línea 1)</linea>.<br />
                    Has de fer 2 atributs a l'etiqueta :<br /> 
                    <ul style='margin:0px; pading:0px; list-style:none;'>
                        <li><b>cid</b> es la ID del marc del códi.</li>
                        <li><b>l</b> es el número de línea a resaltar (pots especificar varies lineas separades per una coma <b>i sense espais</b>).</li>
                    </ul>
                    <div class='nota'>Ara tambè pots fer servir una etiqueta &lt;a&gt; amb els atributs <code>cid</code> i <code>l</code>, per fer un enllaç que a mes resalti una o varies lineas de codi. <a href='/FaqBarba' cid='ID3' l='1'>Exemple (no facis click, nomes inspecciona els atributs)</a>.</div>
                </td>                
                
            </tr>
        </table>
        
        <br /><hr />
        <h2>JavaScript</h2>
        <p>Nomes pots crear un arxiu JS per article, l'has de posar a '/Web/JS', i l'has de carregar desde javascript amb la funció <code>$Base.CargarJS('Nom.js')</code> nomes el nom, no li posis cap path.</p>
        <ul>
            <li>Si vols sapiguer el nom del teu arxiu php desde javascript pots utilitzar <code>$('.Blog').attr('pagina');</code></li>
            <li>Per sapiguer el autor del article pots utilitzar <code>$(".Cabecera_Datos > .FechaEntrada > .Autor").html()</code></li>
            <li>La funció <code>console.log</code> nomes funciona si tens activat el mode MostrarDebug del buto admin.</li>
            <li>Alternativament a la funció <code>alert</code> tens <code>$Base->MostrarMensaje(Msg)</code>, que te un look com la web.</li>
            <li>Si has d'utilitzar javascript dintre del mateix php, sobretot no has de crear timers directament amb <code>setInterval</code> i <code>setTimeout</code>. El tema es que si carregues unaltre document dinamicament, els timers si no els has apagat segueixen en memoria provocan errors, perque el codi del teu php ja no existeix. Si has de fer un timer, tant el timer com la funció posala en un JS extern, que aquests si que es queden carregats i no es borren mai.</li>
        </ul>
        <hr />
        <h2>PHP - $Base->PintarCodigo</h2>
        <p>Objecte per pintar codi estatic, soporta C/C++, HTML, JavaScript, CSS, JS.</p>
        <p>Les funcions <i>PintarArchivo</i> permeten o be mostrar un arxiu complet o mostrar nomes una porció. Per mostrar nomes una porció s'ha de marcar l'arxiu de codi amb un comentari especial, per exemple en un arxiu C s'ha de marcar el principi de la porció amb el comentari <code>/* -[INICIO devildrey33.<b>%ID%</b>]- */</code>, i el final amb <code>/* -[FIN devildrey33.<b>%ID%</b>]- */</code></p>
        <p>Per posar les IDS en un arxiu pots utilitzar cualsevol tipus de comentari que soporti el llenguatge.</p>
        
        
        <table class='Tabla'>
            <thead>
                <tr>
                   <th>Funcions</th>
                   <th>Comentari</th>
                   <th>Parametres</th>
                </tr>
            </thead>            
            <tr>
                <td style='width:400px'>
                    <b>PintarArchivoHTML</b>($IDMarco, $Titulo, $Archivo, $ID = "")<br />
                    <b>PintarArchivoXML</b></b>($IDMarco, $Titulo, $Archivo, $ID = "")<br />
                    <b>PintarArchivoCSS</b>($IDMarco, $Titulo, $Archivo, $ID = "")<br />
                    <b>PintarArchivoPHP</b>($IDMarco, $Titulo, $Archivo, $ID = "")<br />
                    <b>PintarArchivoJS</b>($IDMarco, $Titulo, $Archivo, $ID = "")<br />
                    <b>PintarArchivoC</b>($IDMarco, $Titulo, $Archivo, $ID = "")<br />
                </td>
                <td>
                    &lt;!-- --&gt;<br />
                    &lt;!-- --&gt;<br />
                    /* */<br />
                    /* */<br />
                    /* */<br />
                    /* */<br />
                </td>
                <td>
                    <b>$IDMarco</b> es la id del marc del codi en HTML/JavaScript<br />
                    <b>$Titulo</b> el titul<br /> 
                    <b>$Archivo</b> path de l'arxiu<br />
                    <b>$ID</b> es la id de la porció a mostrar, si no hi ha $ID es mostra tot l'arxiu<br />
                </td>
            </tr>
            <tr>
                <td><b>PintarTexto</b>($IDMarco, $Titulo, $Codigo)</td>
                <td>NO VA AMB COMENTARIS</td>
                <td>
<b>$IDMarco</b> es la id del marc del codi en HTML/JavaScript<br />
<b>$Titulo</b> el titul<br /> 
<b>$Codigo</b> codi sense cap configuració de colors                    
                </td>
            </tr>
        </table>        
        
        <div class='nota'>PintarArchivoHTML detecta fragments de CSS i JS i els parseja internament</div>
        <p>Si et veus molt apurat i vols mostrar codi pero no el tens en cap arxiu, ho pots posar <linea cid='ID4' l='2,3,4'>en el mateix php</linea> de l'article amb el següent codi :</p>
<?php 
/* -[INICIO devildrey33.IDC4]-
<?php
// -[INICIO devildrey33.ID?]-
function LaMevaFuncioDelExemple () { };
// -[FIN devildrey33.ID?]-
$Base->PintarCodigo->PintarArchivoPHP("IDHTML", "Carregar javascript o css extern", basename(__FILE__), 'ID?'); 
?>
-[FIN devildrey33.IDC4]- */
    $Base->PintarCodigo->PintarArchivoPHP("ID4", "Carregar javascript o css extern", basename(__FILE__), 'IDC4'); 
?>
        
        
        <br /><hr /><br />
        <h2>PHP - devildrey33_Lab::CrearMiniLab</h2>
        <p>Tambe pots fer servir el editor dinamic per HTML5 / CSS3 / JS, amb la funció : <linea cid="ID5" l="1">devildrey33_Lab::CrearMiniLab(<code>array</code>)</linea>.</p>
<?php 
/* -[INICIO devildrey33.IDC5]-
<?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/Checked/CheckBox-personalizado.html")); ?>
-[FIN devildrey33.IDC5]- */
    $Base->PintarCodigo->PintarArchivoPHP("ID5", "Carregar javascript o css extern", basename(__FILE__), 'IDC5'); 
?>

        <p>Aquest editor requereix que el codi a mostrar estigui dintre de la carpeta <i>/Ejemplos</i>, i tambe ha d'estar a la llista d'arxius permesos.</p>
        <p>Per editar la llista d'arxius permesos en el laboratori, has d'entrar al laboratori, loguejarte, i obrir l'exporador d'exemples (tercer icona del menu de la dreta).</p>
        <p>El parametre array es un o mes strings amb paths d'exemple : <code>'Ejemplos/Checked/CheckBox-personalizado.html'</code></p>
        <div class='nota'>Sobretot el string ha de començar sempre amb <code>'Ejemplos/...'</code> i sense la primera barra. Si no et donara error.</div>
        
        <?php devildrey33_Lab::CrearMiniLab(array("Ejemplos/Checked/CheckBox-personalizado.html")); ?>        
        <hr />
        <h2>Crear una nova entrada al Blog</h2>
        <p>Per crear /editar / eliminar una entrada al blog has d'editar l'arxiu : <code>/Web/Config/EntradasBlog.php</code>.</p>       
        <p>En principi tambe tinc un editor online desde <i>Admin -> Editar Entradas</i>, pero encara <b>no funciona</b>.</p>
        <p>Si necesites afegir alguna Categoria de l'index has d'editar l'arxiu : <code>/Web/Config/EntradasTags.php</code></p>
        <br /><hr />
        <h2>NOTES Finals</h2>
        <p>Rebras un missatge al teu correu cada cop que algu escrigui un missatge a un article teu. <b>(S'HA DE PROBAR)</b></p>
        <p>Ves amb oju a l'hora d'escriure PHP, perque hi ha un objecte PHP que es diu <code>$Base</code>, i un objecte jQuery que tambe es diu <code>$Base</code>.</p>
        <p>I per ultim... si per un casual et dona per activar el Mantenimiento QUE NO HAURIES DE POGUER, i no saps com treurel proba aquesta URL <code>/cmd/DesactivarMantenimiento</code>, i si no funciona carrega el backup de l'arxiu <code>.htaccess</code> de l'arrel... </p>
    
    </article>


<?php
   $Base->FinPlantilla(); 
    