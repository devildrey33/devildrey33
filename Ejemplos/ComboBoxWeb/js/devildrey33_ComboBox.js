/* Codigo JavaScript y JQuery para devildrey33_ComboBox  */
/* Creado el 03/10/2011 por Jose Antonio Bover           */

function devildrey33_ComboBox_Mostrar(ID) {
	var HeightLista = $("#devildrey33_CoboBoxLista_" + ID).height() + 28;
	$("#devildrey33_CoboBoxImagen_" + ID).css({ 'background-position' : '-16px 0px' });
	$("#" + ID).stop().css({ "background-color" : "rgba(51,51,51, 0.9)" }).animate({ height : HeightLista + 'px' }, "fast");
}

function devildrey33_ComboBox_Ocultar(ID) {
	$("#devildrey33_CoboBoxImagen_" + ID).css({ 'background-position' : '0px 0px' });
	$("#" + ID).stop().css({ "background-color" : "rgba(51,51,51, 1.0)" }).animate({ height : '24px' }, "fast");
}

function devildrey33_ComboBox_Click(ID, Funcion, Texto) {
	devildrey33_ComboBox_Ocultar(ID);
	$("#devildrey33_ComboBoxTexto_" + ID).html(Texto);
	eval(Funcion + "('" + Texto + "');");
}
