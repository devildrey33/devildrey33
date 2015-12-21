<?php 
/*	include("devildrey33.php");
	$Base = new devildrey33(devildrey33_TipoPlantilla::Articulo, basename(__FILE__));	
	$Base->InicioPlantilla("Inyección SQL");*/
        
        
        include($_SERVER['DOCUMENT_ROOT']."/Web/devildrey33.php");
	$Base = new devildrey33;	
	
	$META = '<meta name="description" content="Inyección SQL">
        <meta name="keywords" content="SQL">';

        if (!isset($_POST["SinPlantilla"])) {
            $Base->InicioPlantilla(basename(__FILE__), "Inyección SQL", $META);
        }
        
        $Base->InicioBlog(basename(__FILE__), "Inyección SQL");
        
?>	



                <!-- INTRODUCCION -->
                <img class="ImagenPortada" src="/Web/Graficos/250x200_InyeccionSQL.png" alt="Inyección SQL" onclick="Imagen_Mostrar('/Graficos/InyeccionSQL.jpg');" />
                <p>A pesar de que esta vulnerabilidad es de sobras conocida por la comunidad de programadores, y de que hace bastantes años que existe, recientemente me he encontrado algunos sitios webs que tienen dicha vulnerabilidad en la actualidad, cosa que no me entra en la cabeza.</p>
                <p>La inyección sql es una técnica que permite a un atacante insertar código sql en una consulta, el cual en la mayoría de veces puede resultar fatal para la integridad y privacidad de la base de datos atacada.</p>
                <!-- FIN_INTRODUCCION -->
                
                <p>Esta técnica consiste en manipular un campo requerido por el usuario para modificar una sentencia SQL, por ejemplo vamos a imaginar que tenemos una base de datos en la cual tenemos una tabla <i>usuarios</i> donde tenemos los nombres de usuario de nuestra web.</p>
                <p>Algo muy típico seria tener una sentencia SQL de este tipo :</p>
                <?php 
/* -[INICIO devildrey33.ID1]-
$Consulta = "SELECT * FROM usuarios WHERE nombre=\'".$_POST["NombreUsuario"]."\'";
-[FIN devildrey33.ID1]- */
                    $Base->PintarCodigo->PintarArchivoPHP("ID1", "Consulta tipica", basename(__FILE__), 'ID1'); 
                ?>
                <p>Para introducir el nombre de usuario se usaría un formulario con un INPUT TEXT que mandaría sus datos mediante un POST.</p>
                <p>En este caso el atacante lo tiene bastante fácil para intuir como estaría construida la sentencia SQL por lo que podría intentar inyectar código en ella.</p>
                <p>Lo primero que se podría intentar es poner en el campo <i>nombre</i> algo por este estilo : <i>' or '1'='1 </i></p> 
                <p>Haciendo esto, la consulta SQL quedaría así : 
                <?php 
/* -[INICIO devildrey33.ID2]-
$Consulta = "SELECT * FROM usuarios WHERE nombre=\'\' or \'1\'=\'1\'"
-[FIN devildrey33.ID2]- */                
                    $Base->PintarCodigo->PintarArchivoPHP("ID2", "Consulta hackeada", basename(__FILE__), 'ID2'); 
                ?>
                <p>Fijaros que como nombre de usuario no se introduce nada aunque podría ser cualquier cosa, y la verdad es que no importa porque lo realmente importante es lo siguiente <i>or '1'='1</i>. Introduciendo un or en la sentencia estamos diciéndole que si el usuario es '' <b>o</b> uno es igual a uno devuelva true. Esto permitiría al atacante acceder a los datos relacionados con los usuarios o cosas peores.</p>
                <p>Por ejemplo el atacante podría decidir que quiere borrar nuestra tabla de usuarios, lo cual le resultaría muy fácil introduciendo en el nombre el siguiente fragmento <i>'; DROP TABLE usuarios</i> por lo que la sentencia quedaría así :</p>
                <?php 
/* -[INICIO devildrey33.ID3]-
$Consulta = "SELECT * FROM usuarios WHERE nombre=\'\'; DROP TABLE usuarios\'"
-[FIN devildrey33.ID3]- */

                    $Base->PintarCodigo->PintarArchivoPHP("ID3", "Consulta hackeada", basename(__FILE__), 'ID3'); 
                ?>
                <p>Viendo esto espero que ya comprendáis un poco mejor de que va el asunto, pero como podemos evitar que se inyecte código en un INPUTBOX?, pues es muy fácil, en php existe la función <a href="http://php.net/manual/es/function.mysql-real-escape-string.php" target="_new">mysql_real_escape_string</a> la cual inserta antibarras '\' delante de las comillas y dobles comillas entre otros caracteres peligrosos para que no sean tomados en cuenta por la consulta, y solo sean usados dentro de las variables a buscar.</p>
                <?php 
/* -[INICIO devildrey33.ID4]-
// Consulta en la que nos pueden inyectar codigo SQL.
$Consulta = "SELECT * FROM usuarios WHERE nombre=\'".$_POST["NombreUsuario"]."\'";
// Consulta SEGURA.
$Consulta = "SELECT * FROM usuarios WHERE nombre=\'".mysql_real_escape_string($_POST["NombreUsuario"])."\'";                
-[FIN devildrey33.ID4]- */
                    $Base->PintarCodigo->PintarArchivoPHP("ID4", "Consulta hackeada", basename(__FILE__), 'ID4'); 
                ?>
               
                <p>Otra cosa muy importante es que algunos programadores por comodidad al tener un error en una sentencia SQL incluyen dicha sentencia en el mensaje de error, y eso es un grave error. Cuanta menos información demos a los atacantes mejor, ya que ellos normalmente no deberían saber los nombres de nuestras tablas ni otros datos que puedan revelar nuestras sentencias SQL.
                <h3>Enlaces recomendados :</h3>
                <ul>
                <li style="list-style:disc"><a href="http://es.wikipedia.org/wiki/Inyecci%C3%B3n_SQL" target="_new">WikiPedia Inyección SQL</a></li>
                <li style="list-style:disc"><a href="http://www.eslomas.com/upload/2006/06/advanced_sql_injection.pdf" target="_new">Advanced SQL Injection In SQL Server Applications</a></li>
                <li style="list-style:disc"><a href="http://www.unixwiz.net/techtips/sql-injection.html" target="_new">Steve Friedl (SQL Injection Attacks by Example)</a></li>
                </ul>        



<?php
    $Base->FinBlog();
    if (!isset($_POST["SinPlantilla"])) $Base->FinPlantilla(); 
?>