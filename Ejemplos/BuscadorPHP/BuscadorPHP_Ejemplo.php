<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    	<title>Ejemplo del buscador PHP</title>
        <link href='ColorearCodigoPHP_CSS_Ejemplo.css' rel='stylesheet' type='text/css' />
		<style>
            .PalabraEncontrada {
                font-weight:bold;
                color:#900;
            }
        </style>
	</head>
    <body>
    	<h2>Ejemplo del buscador PHP :</h2>
        <p>Introduce un texto a buscar y presiona intro.</p>
        <form action='BuscadorPHP_Ejemplo.php' method='post'>
	        <input type='text' name='Search' id='Edit_Search' value='' />
        </form>
        <a href="BuscadorPHP.php">Volver a devildrey33</a>.<hr />
        <?php
			include("devildrey33_Buscador.php");
			$Buscador = new devildrey33_Buscador;
			if (isset($_POST['Search'])) $Buscador->Buscar($_POST['Search']);
        ?>
    </body>
</html>