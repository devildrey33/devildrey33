<!DOCTYPE HTML>
<html>
	<head>
    	<title>Ejemplo devildrey33_Menu</title>
        <link href='devildrey33_Menu.css' rel='stylesheet' type='text/css' />
        <script type='text/javascript' src='devildrey33_Menu.js'></script>
        <script type='text/javascript' src='jquery-1.7.1.min.js'></script>
    </head>
    <body style='margin:0px'>
    	<div style='position:fixed; width:100%; height:40px; background-color:#000; padding-left:10px'>
        	<?php 
				include("devildrey33_Menu.php");
				$Menu = new devildrey33_Menu("MenuWebFijo_Ejemplo.xml");
				$Menu->CrearMenus();
			?>
        </div>
        <br />
        <br />
        <br />
        <p><a href="http://www.devildrey33.es/MenuWebFijo.php">Volver a devildrey33</a>.</p>
    </body>
</html>
