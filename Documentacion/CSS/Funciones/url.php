<?php    
    include("../../../Web/devildrey33_Documentacion.php");    
    $Doc = new devildrey33_Documentacion(basename(__FILE__)); $Base = $Doc->Base;  
?>

<p>Esta funcion permite especificar un archivo externo.</p>
<p>Se puede utilizar en las porpiedades <a href='/Doc/CSS/Propiedades/background'>background</a>,  <a href='/Doc/CSS/Propiedades/background'>background-image</a>, <a href='/Doc/CSS/Propiedades/filter'>filter</a>, y <a href='/Doc/CSS/Propiedades/clip-path'>clip-path</a>.</p>
<p>También se puede utilizar en las reglas  <a href='/Doc/CSS/Reglas/@document'>@document</a>, <a href='/Doc/CSS/Reglas/@import'>@import</a>, y <a href='/Doc/CSS/Reglas/@font-face'>@font-face</a>.</p>
<hr />
<h2>Sintaxis</h2>
<pre class='Sintaxis'>url( <i>Ruta</i> [ <i>#ID</i> ] );</pre>
<br />
<h3><i>Ruta</i></h3>
<div class='Tab'>
<p>La dirección del elemento externo al que queremos enlazar, por ejemplo :<p/>
<!-- -[INICIO devildrey33.ruta]-            
url(mi_imagen.png);       /* Archivo png externo */
url(mi_imagen.svg#MiID);  /* Una parte del archivo svg externo */
-[FIN devildrey33.ruta]- -->
    <?php 
        $Base->PintarCodigo->PintarArchivoC("ruta", "", basename(__FILE__), 'ruta'); /* Amb C queda millor pintat que amb CSS... xd */
    ?>            
    <div class="nota">Se puede especificar una ID al final del path, para señalar un objeto concreto del archivo sin que se muestre el resto.</div>
</div>
<br />