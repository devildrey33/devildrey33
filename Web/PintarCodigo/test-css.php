<?php
include($_SERVER['DOCUMENT_ROOT'] . "/Web/devildrey33.php");
$Base = new devildrey33;

if (!isset($_POST["SinPlantilla"])) {
    $Base->InicioPlantilla(basename(__FILE__), "Test HTML", "");
}
?>

<!-- -[INICIO devildrey33.char]-
abc
-[FIN devildrey33.char]- --> 




<div style='padding:10px'>
    
    

    <h2>CSS</h2>
<!-- -[INICIO devildrey33.CSS]-
#NombreID {
    width:40px;
    height:40px;
    background-image:url("../Imagen.png");
}

/* Comentario */
#NombreID:hover {
    background-image:url("../ImagenH.png");
    cursor:pointer;
}
.NombreClase {
    cursor:pointer;
}
div {
    display:inline-table !important;
}

/* ejemplos de las reglas de https://css-tricks.com/the-at-rules-of-css/ */
@charset "UTF-8";

@import 'global.css';

/* Namespace para XHTML */
@namespace url(http://www.w3.org/1999/xhtml);

/* Namespace para SVG incrustado XHTML */
@namespace svg url(http://www.w3.org/2000/svg);

@document 
  /* Rules for a specific page */
  url(http://css-tricks.com/),
  
  /* Rules for pages with a URL that begin with... */
  url-prefix(http://css-tricks.com/snippets/),
  
  /* Rules for any page hosted on a domain */
  domain(css-tricks.com),

  /* Rules for all secure pages */
  regexp("https:.*")
{
  
  /* Start styling */
  body { font-family: Comic Sans; }
}

/* Fuente externa */
@font-face {
  font-family: 'MyWebFont';
  src:  url('myfont.woff2') format('woff2'),
        url('myfont.woff') format('woff');
}

/* Animación */
@keyframes pulse {
  0% {
    background-color: #001f3f;
  }
  100% {
    background-color: #ff4136;
  }
}

/* Media para iPhone en Horizontal y Vertical */
@media only screen 
  and (min-device-width: 320px) 
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    .module { width: 100%; }
}



 -[FIN devildrey33.CSS]- -->    
    <?php $Base->PintarCodigo->PintarArchivoCSS("CSS", "Test CSS", basename(__FILE__), "CSS"); ?>
    <ul>
        <li><linea cid="CSS" l="21">Línea 21</linea></li>
        <li><linea cid="CSS" l="5">Línea 5</linea></li>
        <li><linea cid="CSS" l="9">Línea 9</linea></li>
        <li><linea cid="CSS" l="12">Línea 12</linea></li>
        <li><linea cid="CSS" l="14">Línea 14</linea></li>
        <li><linea cid="CSS" l="1,4,5,7">Línea 1, 4, 5, 7</linea></li>
    </ul>
        

</div>
<?php
if (!isset($_POST["SinPlantilla"]))
    $Base->FinPlantilla();
?>





