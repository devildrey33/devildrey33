<!doctype html>
<html>
	<head>
	    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
		<title>Acordeon</title>
        <style type="text/css">
			/* Div que contiene tanto la parte de altura fija como la parte de altura variable */
			.DivPrincipal {
				overflow:hidden;
				border-color:#000;
				border-width:1px;
				border-style:dotted;
				background-color:#EEE;
				width:500px;
			}
			
			/* Clase que hace la animación que oculta el acordeon */
			.DivVariableOculto {
				/* Chrome y safari */
				-webkit-transition-property:height;
				-webkit-transition-duration:0.5s;    
				/* Mozilla */
				-moz-transition-property:height;
				-moz-transition-duration:0.5s;    
				/* Opera */
				-o-transition-property:height;
				-o-transition-duration:0.5s;  	
				/* Todos (no funciona hasta que la propiedad transition sea aceptada por todos los navegadores) */
				transition-property:height;
				transition-duration:0.5s;  
				/* Altura 0% */
				height:0px;
			}
			
			/* Clase que hace la animación que muestra el acordeon */
			.DivVariableVisible {
				/* Chrome y safari */
				-webkit-transition-property:height;
				-webkit-transition-duration:1.0s;    
				/* Mozilla */
				-moz-transition-property:height;
				-moz-transition-duration:1.0s;    
				/* Opera */
				-o-transition-property:height;
				-o-transition-duration:1.0s;  	
				/* Todos (no funciona hasta que la propiedad transition sea aceptada por todos los navegadores) */
				transition-property:height;
				transition-duration:1.0s;  
				/* Altura 100% */
				height:1000px;
			}
			
			/* FIX PARA LA ALTURA 
				Si ponemos height:auto la animacion no funciona, por lo que debemos especificar la altura maxima del div oculto.
			 */
			
			/* Altura máxima para el acordeon 1 */
			#Acordeon_1 {
				max-height:200px !important;
				background-color:#DDD;
			}		
		</style>
        <script language="javascript">
        	function Acordeon(id) {
				if (document.getElementById("Acordeon_1").className == "DivVariableOculto") 
					document.getElementById("Acordeon_1").className = "DivVariableVisible";
				else	
					document.getElementById("Acordeon_1").className = "DivVariableOculto";
			}
        </script>
	</head>
	<body>
		<div class="DivPrincipal">
        	<p>Esde div contiene datos ocultos que se muestran al hacer click en el link Expandir.</p>
        	<a href="javascript:Acordeon('Acordeon_1')">Expandir / Contraer</a>

        	<div class="DivVariableOculto" id="Acordeon_1">
            	<p>Datos ocultos</p>
            	<p>Datos ocultos</p>
            	<p>Datos ocultos</p>
            	<p>Datos ocultos</p>
            	<p>Datos ocultos</p>
            	<p>Datos ocultos</p>
            </div>
            
        </div>        
	</body>
</html>