// -[INICIO devildrey33.IniciarCaptcha]-
// Función que inicia los objetos del captcha para que puedan ser arrastrados utilizando JQuery
function IniciarCaptcha() {
	var ImagenCaptcha = $('.ImagenCaptcha');
	ImagenCaptcha.css({ 'left' : '0px', 'top' : '0px', 'cursor' : 'move' });
	ImagenCaptcha.draggable('enable');
	$('.ImagenCaptcha').draggable({
		containment: 'window',
		scroll: false,
		// Al empezar a arrastrar
		start : function(event, ui) {
			ImagenCaptcha.css({ 'left' : '0px', 'top' : '0px', 'cursor' : 'move', 'z-index' : '1' });
			ui.helper.css({ 'z-index' : '1000' });
		},
		// Mientras se arrastra		
		drag : function(event, ui) {
		}, 
		// Al terminar de arrastrar
		stop : function(event, ui) { 
			var DentroInterrogantes = ObjetoDentroObjeto($('#ResultadoCaptcha'), ui.helper);
			if (DentroInterrogantes == false) {
				ui.helper.animate({"left" : 0, "top" : 0}, "fast");
				$("#TxtResultado").html("");
			}
			else {
				// Validamos el resultado
				$.post("Captcha3_Ejemplo_Motor.php?ResultadoID=" + ui.helper.attr("id"), 
					function(data) {
						if (data == "Validado") {
							$("#TxtResultado").css({ "color" : "green" }).html("Captcha validado");
						}
						else {
							ui.helper.animate({"left" : 0, "top" : 0}, "fast");
							$("#TxtResultado").css({ "color" : "red" }).html("Resultado incorrecto");
						}
					}
				);
			}
		}
	});
}
// -[FIN devildrey33.IniciarCaptcha]-

// Función que calcula si dos objetos JQuery en posicion relativa estan en intersección
function ObjetoDentroObjeto(Objeto, Objeto2) {
	var R1 = {
		left   : Objeto.offset().left,
		top    : Objeto.offset().top,
		right  : Objeto.offset().left + Objeto.width(),
		bottom : Objeto.offset().top + Objeto.height()
	};
	var R2 = {
		left   : Objeto2.offset().left,
		top    : Objeto2.offset().top,
		right  : Objeto2.offset().left + Objeto2.width(),
		bottom : Objeto2.offset().top + Objeto2.height()
	};
	return !(R2.left > R1.right || R2.right < R1.left || R2.top > R1.bottom || R2.bottom < R1.top);
}
