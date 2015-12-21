// Función para contar las iteraciones por segundo que puede hacer el navegador
function TestVelocidad() {
	var Tiempo       = new Date();
	var TiempoActual = Tiempo.getTime() + 1000;
	var Iteraciones  = 0;
	while (TiempoActual > Tiempo.getTime()) {
		 Iteraciones ++;
		 Tiempo = new Date();
	}
	alert("Total de iteraciones en un segundo : " + Iteraciones);
}
