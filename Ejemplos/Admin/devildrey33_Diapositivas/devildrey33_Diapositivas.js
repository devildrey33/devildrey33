/* Javascript para el tag Diapositivas  */
/* Creado el 20/12/2012 por devildrey33 */

/* TODO : trobar solució per que funcioni el onload amb l'escript colocat al head */


/* Clase para crear etiquetas con Diapositivas */
/* 
	Opciones :
				Fotos 					(array con los paths de las fotos)
				ID    					(ID unica para el tag Diapositivas, si no se especifica, se utilizaran todas las etiquetas Diapositivas)
				AnchoContenedor			(Anchura para el contenedor de las diapositivas, se debe especificar en pixeles, "auto" por defecto) !!!(en conflicte si limitem a determinades imatges la vista)
				AltoContenedor			(Altura para el contenedor de las diapositivas, se debe especificar en pixeles, "auto" por defecto)
				AnchoFoto				(Ancho para cada foto, por defecto "auto");
				AltoFoto				(Altura para cada foto, por defecto "auto");
				AnchoFotoSeleccionada	(Ancho para la foto selecionada, por defecto "auto");
				AltoFotoSeleccionada	(Altura para la foto selecionada, por defecto "auto");
				ImagenesVisibles		(Imagenes visibles)
 */
function Diapositivas(Opciones) {

	if (Opciones["Fotos"]) {
		this.PathFotos = Array();
		for (var i = 0; i < Opciones["Fotos"].length; i++) this.PathFotos[i] = Opciones["Fotos"][i];
		
	}
	else {
		alert("No se han especificado fotos para las diapositivas.");
		return;
	}
	
	// Guardamos la ID y establecemos el objeto que contiene las diapositivas
	this.ID = "";
	this.ObjetoDiapositivas = $("Diapositivas");
	if (Opciones["ID"]) {
		this.ID = Opciones["ID"];
		this.ObjetoDiapositivas = $("#" + this.ID);
	}
	
	// Ancho del contenedor
	this.AnchoContenedor = "auto";
	if (Opciones["AnchoContenedor"]) this.AnchoContenedor = Opciones["AnchoContenedor"];
	
	// Altura del contenedor
	this.AltoContenedor = "auto";
	if (Opciones["AltoContenedor"]) this.AltoContenedor = Opciones["AltoContenedor"];

	// Ancho de cada foto
	this.AnchoFoto = "155px";
	if (Opciones["AnchoFoto"]) this.AnchoFoto = Opciones["AnchoFoto"];

	// Altura de cada foto
	this.AltoFoto = "125px";
	if (Opciones["AltoFoto"]) this.AltoFoto = Opciones["AltoFoto"];
	
	
	// Ancho de la foto seleccionada
	this.AnchoFotoSeleccionada = "100%";
	if (Opciones["AnchoFotoSeleccionada"]) this.AnchoFotoSeleccionada = Opciones["AnchoFotoSeleccionada"];

	// Altura de la foto seleccionada
	this.AltoFotoSeleccionada = "100%";
	if (Opciones["AltoFotoSeleccionada"]) this.AltoFotoSeleccionada = Opciones["AltoFotoSeleccionada"];
	
	// Total de imagenes visibles
	this.ImagenesVisibles = "auto";
	if (Opciones["ImagenesVisibles"]) this.ImagenesVisibles = Opciones["ImagenesVisibles"];
	

	this.Crear = function() { 
		this.ObjetoDiapositivas.css({ "width": this.Ancho, "height" : this.Alto });
		var Codigo = "";
		for (var i = 0; i < this.PathFotos.length; i++) {
			Codigo += "<div class='Diapositivas_Foto' id='Diapositivas_Foto_"+ this.ID +"_" + i + "'>";
			Codigo += 	"<img class ='Imagen_Normal' src='" + this.PathFotos[i] + "' />"
			Codigo += "</div>";
		}
		this.ObjetoDiapositivas.html(Codigo);		

		// Asignamos los tamaños una vez creados los contenedores
		$(".Imagen_Normal").css({ "width"  : ((parseInt(this.AnchoFoto) / 100) * 75),
								  "height" : ((parseInt(this.AltoFoto) / 100) * 75) });
		$(".Imagen_Seleccionada").css({ "width" : this.AnchoFoto, "height" : this.AltoFoto });
	};
	
	
	this.Crear();
	
	
//	window.onload = function () { setTimeOut($.holdReady(false), 1000); };
	
}