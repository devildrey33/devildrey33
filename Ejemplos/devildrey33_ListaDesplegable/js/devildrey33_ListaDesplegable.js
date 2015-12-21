/* devildrey33_ListaDesplegable.js
	
	---------------
    | Descripción |
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		Este control viene a ser una copia del devildrey33_ComboBox creado para www.devildrey33.es que permite seleccionar una opcion de una lista.
		En www.devildrey33.es se utilizaba para elegir el filtro que queriamos para mostrar los artículos.
		La idea es que funcione al 100% con javascript sin jquery ni frameworks externos, sin necesidad de usar php.
		El control consiste en una caja con un texto, que al pasar el mouse por encima despliega una lista de opciones a elegir.
		El primer control era algo burdo y muy poco adaptable, por ello he querido enmendar la situación creando este nuevo control desde cero orientado a objetos, y que ademas no requiera componentes externos.
		NOTA : Este control no esta diseñado para miles de opciones, si hay mas opciones de las que caben en pantalla no será muy agradable para el usuario.
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
	Creado 				: 21/12/2012
	Creado por			: Josep Antoni Bover para www.devildrey33.es
	Última modificación : 25/03/2013
	Versión 			: 2.01 FINAL
	
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------		
	Compatibilidad :
		Este control deberia funcionar todos los navegadores a partir de IE6, aunque se recomienda el uso de navegadores actuales sobretodo para soportar funciones del CSS3.
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		
	---------
	| NOTAS |
	--- IE8 E INFERIORES ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		- innerHTML y AppendChild no funcionan en etiquetas personalizadas, por ejemplo "<devildrey33_ListaDesplegable>"
		- addEventListener no funciona hay que usar attachEvent, y el objeto this cambia...
		- Los eventos no saltan igual, y ya no he perdido mas el tiempo para ver de que forma saltan...
		- Salta el evento OnMouseOver y OnMouseOut del objeto de la lista de items.. y no deberia saltar...
		- Cuando pasa por el item seleccionado o los items, no salta el OnMouseOver de ObjetoListaDesplegable, y solo salta el OnMouseOut de ObjetoListaDesplegable.
		- Parece que la opcion "MostrarFlecha" = true, desestabiliza el ancho del combobox inicialmente.
			NOTA : hay un bug en IE8 e inferiores con el float.. igual habra que usar una tabla para mostrar el contenido..... DESCARTADO, ni tabla ni hostias.... IE8 e inferiores no soportaran la opción "MostrarFlecha"
     --	Ideas --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		- Incluir animación de colores : [DESCARTADO POR EL MOMENTO]
			Es bien sabido que todo el tema de colores debe llevarse desde CSS, pero si quiero que al desplegar el menu cambie su fondo de negro a blanco por ejemplo, Internet Explorer no podrá
			 hacerlo si se utiliza el metodo de transition.
			Se podrían crear 2 clases en CSS que tuvieran los colores para la animación, pero esto requeriria crear 2 objetos solo para obtener dichos colores, y personalmente es liar mucho la cosa.
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

	-----------------
	| TODO 2.0 BETA | 
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			HECHO	- Añadir animación al mostrar / ocultar la lista. (sin jquery)
			HECHO	- Añadir imagen de una flecha hacia abajo/arriba.
			HECHO	- Añadir / Eliminar Items una vez creada la ListaDesplegable.
			HECHO	- Modificar texto de un item una vez creada la ListaDesplegable.
			HECHO   - Buscar solución para el OnLoad, (ahora mismo hay que crear el script despues de crear la etiqueta devildrey33_ListaDesplegable)
			HECHO	 	Una posibilidad seria crear un temporizador que vaya mirando si existe la etiqueta devildrey33_ListaDesplegable en cuestion.
			HECHO	- Añadir parametro Opciones 
			HECHO		Desplegar combo hacia arriba o hacia abajo.
			HECHO		Permitir que se muestre el item seleccionado en la lista.
			HECHO		Desactivar animaciones (mostrar / ocultar)
			HECHO		Orden del array.
			HECHO 	- Permitir una ListaDesplegable sin items.
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
		
	------------------	
	| TODO 2.0 FINAL |
	--- IE8 e inferiores ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			HECHO		- Solucionar eventos (mirar notas IE8 e inferiores)
			DESCARTADO	- Solucionar bug del ancho cuando la opción "MostrarFlecha" está activada. (En IE8 o inferior no se podrá activar "MostrarFlecha")
			SOLUCIONADO	- Cuando la lista se despliega hacia arriba en IE8 e inferiores no sale el item seleccionado hasta que no pasamos con el mouse por encima.... 
			HECHO		- Una vez desplegada la lista hacia arriba se ven un par de pixeles del ultimo item (habra que resetear el CSS de una forma mas dura)
			HECHO		- En IE6 no se ve el color de fondo... (al usar el rgba despues de asignar un color fijo, IE6 lo pone como transparente...)
			HECHO		- En IE6 no se calcula correctamente el ancho del control.
			HECHO		- Detectar versión del navegador, si es IE6, IE7, o IE8  la opción "MostrarFlecha" debe estar siempre desactivada (Hay un bug con el float, sin contar que IE6 no soporta imagenes transparentes)				
			HECHO		- El :hover no va en IE6 si no es en tags 'a' ... (se ha creado la clase 'devildrey33_ListaDesplegable_ItemResaltado' solo para IE6 que es lo mismo que 'devildrey33_ListaDesplegable_Item:hover')
	 -- Normal -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			HECHO		- Renombrar de ComboBox a ListaDesplegable.
			HECHO		- Añadir opción para especificar un ancho mínimo para la ListaDesplegable.
			HECHO		- Añadir opción de no ocultar la lista al hacer click en un item.
			SOLUCIONADO	- Al hacer click en un item la lista no se oculta.... (curiosamente en explorer 8 e inferiores si que va bien... xd)
			HECHO		- Parámetros FuncionOnChange y nItems opcionales dentro del array de opciones (Comprobar que la lista funciona sin items)
			HECHO		- Cambiar el z-index al mostrar / ocultar la lista de forma que la que se muestre quede por delante de las otras.
			SOLUCIONADO	- Insertar items por orden aleatório no funciona bien. 
			HECHO		- Crear ejemplo de creación en el que se puedan usar todas las funciones disponibles.
			HECHO		- Crear ejemplo de una lista con imagenes.
			HECHO		- Al agregar / eliminar items hay que actualizar el espacio. (dejar para el final cuando tenga el ejemplo de creación)
			HECHO		- Eliminar función Item que devuelve el objeto devildrey33_ListaDesplegable_Item, y crear functión Texto para obtener / modificar el texto.
			HECHO		- La variable selección no tiene que ser numerica, tiene que guardar directamente el objeto y luego buscaremos el objeto para determinar su posición.
			SOLUCIONADO	- EliminarItem no actualiza correctamente la selección. (Si se borra el item seleccionado, la selección ira a parar al primer item si es que existe)
			SOLUCIONADO	- AgregarItem no actualiza correctamente la selección una vez se ha creado el control si añadimos un item al principio.
			SOLUCIONADO - Al borrar todos los items no se mantiene una altura minima al usar MostrarLista y OcultarLista.
			HECHO		- Añadir opcion MinimoAlto que se referirá a la altura del item seleccionado y no a la del control.
			HECHO		- Añadir evento on mouse over y on mouse out para los items de la lista
			HECHO		- Añadir evento mostrar lista y ocultar lista para saber cuando se termina de expandir / contraer la lista.
			SOLUCIONADO	- Hay que ocultar la lista de items con css opacity una vez ha terminado la funcion OcultarLista, y luego hay que volver a mostrarla al principio de MostrarLista.
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


	-------------------	
	| TODO 2.01 FINAL |
	--- Normal -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
			SOLUCIONADO	- El temporizador inicial para la creación no se detiene despues de los 1000 intentos.						
	------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
*/


// Variable global que contiene todos los ListaDesplegable creados (es necesaria para funciones y eventos que cambian el scope a global)
var var_devildrey33_ListaDesplegable = [];
// Variable global que guarda el temporizador de las animaciones
var var_devildrey33_ListaDesplegable_TemporizadorAnimacion = 0;
// Variable que cuenta los intentos de utilizar la función _Crear con el temporizador
var var_devildrey33_ListaDesplegable_Intentos = 0;
// Variable que contiene el temporizador para iniciar el control
var var_devildrey33_ListaDesplegable_TemporizadorCrear = 0;


// Objeto PRIVADO para controlar un item
function devildrey33_ListaDesplegable_Item(nTexto) {
	if (typeof nTexto !== 'undefined') 	this._Texto = nTexto;
	if (!this.Objeto) this.Objeto = "";
	
	/* Función para asignar o obtener el texto de este item
		NuevoValor [Opcional] 	: Si se especifica este parámetro la funcion modificara el texto, en caso contrario devolvera el texto actual.
		Retorno					: Si no se ha especificado el parámetro opcional devolvera el texto de este item.
	 */
	this.Texto = function(NuevoValor) {
		// Si no hay parámetro, devuelvo la variable texto
		if (typeof NuevoValor === 'undefined') return this._Texto;
		// Si hay parámetro lo asigno como nuevo valor para la variable _Texto
		this._Texto = NuevoValor;
		// Si el Objeto existe asignamos su html
		if (this.Objeto)	this.Objeto.innerHTML = this._Texto;
	}
	
	/* Función que determina si este item es visible
		Retorno : Devuelve true si el item es visible, false si no lo es.
		NOTA	: Puede haber un item invisible si la opcion "OcultarItemSeleccionado" es true.
				  Este item será el seleccionado.
	 */
	this.Visible = function() {
		if (this.Objeto.style.display != "none") return true;
		return false;
	}
}


/* Objeto que contiene todos los datos y funciones de un devildrey33_ListaDesplegable
	nID 			: ID única para el control.
	Opciones		: Array de opciones que puede contener uno o mas de los siguientes valores :
		Opciones["Animacion"] 						= true		Utilizar animación al desplegar y ocultar la lista. (Por defecto se animara)
		Opciones["AnimacionTiempo"]					= 100		Tiempo de la animación en milisegundos (por defecto 100)
		Opciones["DesplegarHaciaArriba"] 			= false		Si se asigna a true la lista de items se desplegara hacia arriba. (Por defecto se despliega hacia abajo)
		Opciones["FuncionItemClick"]				= null		Función que se llamara cuando se haga click encima de un item, esta función debe tener un parametro que será el control que ha llamado a la función.
		Opciones["FuncionItemMouseOver"]			= null		Función que se llamara cuando se pase por encima de un item con el mouse.
		Opciones["FuncionItemMouseOut"]				= null		Función que se llamara cuando el mouse salga del área del item.
		Opciones["FuncionMostrarLista"]				= null		Función que se llamara una vez terminada de desplegar la lista.
		Opciones["FuncionOcultarLista"]				= null		Función que se llamara una vez terminada de ocultar la lista.
		Opciones["ItemSeleccionado"]				= 0			Item que quedara seleccionado al crear el control. (Por defecto es 0, que será el primer item insertado)
		Opciones["MinimoAncho"]						= 60		Ancho minimo para el control en pixeles. Por defecto es 60.
		Opciones["MinimoAlto"]						= 0			Altura minima del item seleccionado (debido a que se pueden cambiar los paddings y margins con css es mejor especificar la altura solo para el item, y que se añada el resto segun el css).
		Opciones["MostrarFlecha"]					= true		Muestra una flecha en la direccion que se despliega la lista en la parte lateral derecha (por defecto es true, si se especifica false no se mostrará)
		Opciones["ListaItems"]						= null		Array que contiene una lista de items para este control.
		Opciones["OcultarItemSeleccionado"] 		= false		Si se asigna a true, no se mostrara el item seleccionado dentro de la lista de items, solo se mostrará en la cabecera (por defecto es false)
		Opciones["OcultarListaAlHacerClick"]		= true		Cuando hacemos click en un item de la lista, esta se ocultara.
		Opciones["OrdenarItems"] 					= null		Puede ser : null (se dejará intacto), "OrdenAsc", "OrdenDesc", "?" (Aleatório)
 */
function devildrey33_ListaDesplegable(nID, Opciones) {
	
	/* Función para asignar / obtener el texto de un item.
			function Texto(nPosicion, nTexto)
			nPosicion [opcional] : Posición del item que queremos asignar o obtener (si no se especifica este parámetro la función devuelve el texto del item seleccionado)
			nTexto    [opcional] : Nuevo texto para el item (si no se especifica este parámetro la función devuelve el texto del item en la posicion especificada)
			Retorno				 : Si no se especifica ningún parametro devuelve el texto del item seleccionado.
								   Si se especifica nPosicion devuelve el texto del item en la posición especificada.
								   Si se especifica nPosicion y nTexto devuelve true en caso de que se haya cambiado el texto correctamente, o false en caso de error.
	 */
	this.Texto = function(nPosicion, nTexto) {
		if (typeof nTexto === 'undefined') { // Obtener Texto
			if (typeof nPosicion === 'undefined') { // Obtener Texto seleccionado
				var Sel = this.Seleccion();
				if (Sel == -1) 	return "";
				else			return this._ItemSeleccionado.Texto();
			}
			// Protección contra errores en la posición
			if (nPosicion < 0) 						return "Error : indice menor que 0.";
			if (nPosicion > this._Items.length - 1) return "Error : indice mayor que devildrey33_ListaDesplegable.TotalItems().";
			// Devuelvo el texto de la posición especificada
			return this._Items[nPosicion]._Texto;
		}
		else {
			// Protección contra errores en la posición
			if (nPosicion < 0) 						return false;
			if (nPosicion > this._Items.length - 1) return false;
			// Asigno el nuevo texto
			this._Items[nPosicion].Texto(nTexto);
			// Si la posición coincide con el item seleccionado, asigno el texto al item seleccionado.
			if (nPosicion == this.Seleccion()) this.ObjetoItemSeleccionado.innerHTML = nTexto;
			this._AjustarTam();
			
			return true;
		}
	}


	/* Función que devuelve el total de items dentro de esta ListaDesplegable
			function TotalItems();
			Retorno : Esta función devuelve el total de items dentro de la ListaDesplegable.
	 */
	this.TotalItems = function() {
		return this._Items.length;
	}
	

	/* Función que borra todos los items de la ListaDesplegable
			function BorrarTodo();
			Retorno : Esta función no devuelve nada.
			NOTA    : Tambien se borrara el texto del objeto que contiene el item seleccionado.
	 */
	this.BorrarTodo = function() {
		delete this._Items;
		this._Items = [];
		this._ItemSeleccionado = null;
		if (this.ObjetoListaItems) {
			this.ObjetoItemSeleccionado.innerHTML ="";
			this.ObjetoListaItems.innerHTML = "";
			this._AjustarTam();		
		}
	}


	/*  Función para agregar un item en la posición especificada, se puede omitir la posición para agregar el item al final de la lista.
			function ArgegarItem(nTexto, nPos);
			nTexto			: Texto para el item
			nPos [Opcional]	: Posición para el item (debe ser un valor entre 0 y TotalItems(), tambien puede ser "Inicio", "Final", "OrdenAsc", "OrdenDesc", "?" o "Aleatorio" (Aleatório))
			Retorno 		: Esta función devuelve true si el item se ha creado correctamente, false si la posición no es válida.
			NOTA   			: se puede usar dinamicamente una vez creada la ListaDesplegable.
	 */
	this.AgregarItem = function(nTexto, nPos) {
		if (typeof nPos === 'undefined') nPos = this.Opciones["OrdenarItems"];
		switch (nPos) {
			case null :
			case "Final" :
				nPos = this._Items.length;
				this._Items.push(new devildrey33_ListaDesplegable_Item(nTexto));												
				break;
			case "Inicio" : 
				nPos = 0;
				this._Items.splice(0, 0, new devildrey33_ListaDesplegable_Item(nTexto));
				break;
			case "OrdenAsc"  :
			case "OrdenDesc"  : 
			 	this._Items.push(new devildrey33_ListaDesplegable_Item(nTexto));												
				break;
			case "?"  : 
			case "Aleatorio" :
				nPos = Math.floor(Math.random() * this._Items.length);
				this._Items.splice(nPos, 0, new devildrey33_ListaDesplegable_Item(nTexto));	
				break;
			default :
				// Protección por si se excede el rango de los items
				if (nPos < 0) 					return false;
				if (nPos > this._Items.length) 	return false;
				if (parseInt(nPos) == "NaN")	return false;
				
				this._Items.splice(nPos, 0, new devildrey33_ListaDesplegable_Item(nTexto));										
				break;
		}
		
		if (nPos == "OrdenAsc") 	this._Items.sort(function(a, b) { return (a._Texto < b._Texto ? -1 : ( a._Texto > b._Texto ? 1 : 0));  });
		if (nPos == "OrdenDesc") 	this._Items.sort(function(a, b) { return (a._Texto < b._Texto ? 1 : ( a._Texto > b._Texto ? -1 : 0));  });

		// Añadimos un item dinamicamente
		if (this.ObjetoListaItems) {
			var NuevoLI = document.createElement("li");
			NuevoLI.className = "devildrey33_ListaDesplegable_Item";
			NuevoLI.innerHTML = nTexto;
			var InsertarEn = this.ObjetoListaItems.childNodes[nPos];
			if (nPos > this.ObjetoListaItems.childNodes.length - 1) InsertarEn = null; // Internet explorer requiere que se le pase null para agregar al final.
			var NuevoObjeto = this.ObjetoListaItems.insertBefore(NuevoLI, InsertarEn);
			this._Items[nPos].Objeto = NuevoObjeto;
			this._EnlazarEvento(NuevoObjeto, "click", this._OnClick);

			// Ordenamos los items si es necesario
			if (nPos == "OrdenAsc" || nPos == "OrdenDesc") {
				for (var i = 0; i < this._Items.length; i++) this._Items[i].Objeto.innerHTML = this._Items[i]._Texto;
			}
			
			this._AjustarTam();		
		}
		return true;
	}


	/*  Función para eliminar el item de la posición especificada
			function EliminarItem(nPos);
			nPos	: Posición válida del item que queremos elimiar (Puede ser desde 0 a TotalItems())
			Retorno : Esta función devuelve true en caso de haber eliminado el item, false en case de error.
			NOTA    : se puede usar dinamicamente una vez creada la ListaDesplegable.
	 */
	this.EliminarItem = function(nPos) {
		// Protección por si la posición excede del rango de items
		if (nPos < 0) 						return false;
		if (nPos > this._Items.length - 1) 	return false;

		// Si existe el objeto lo eliminamos
		if (this._Items[nPos].Objeto) {
			this._Items[nPos].Objeto.parentNode.removeChild(this._Items[nPos].Objeto);
			
		}

		// Se va a borrar el item seleccionado, eliminamos el objeto de la selección
		if (this._ItemSeleccionado == this._Items[nPos]) this._ItemSeleccionado = null;

		// Elimino el item del array
		this._Items.splice(nPos, 1);
		
		// Se ha borrado la seleccion, seleccionamos el primer item.
		if (this._ItemSeleccionado == null) this.Seleccion(0);

		if (this.ObjetoListaItems) this._AjustarTam();
		return true;
	}
	
	
	/* FIX para agregar nuevas tags con innerHTML de IE.... */
	this._AgregarObjeto = function(Padre, Tag, Clase, ID) {
		var NuevoTag = document.createElement(Tag);
		if (Clase != "") NuevoTag.className = Clase;
		if (ID != "") NuevoTag.id = ID;
		Padre.appendChild(NuevoTag);
	}
	
	
	/*  Función PRIVADA que crea los objetos que componen la ListaDesplegable
			function _Crear();
			Retorno : Esta función no devuelve nada.
			NOTA    : Esta función crea un temporizador que va saltando hasta que se ha creado el tag <devildrey33_ListaDesplegable> en el navegador.
	 */
	this._Crear = function() {

		// Si no existe el objeto creamos un temporizador que va comprobando cada 100ms si se ha creado
		if (document.getElementById(this.ID)) 	
			clearInterval(this._TemporizadorCrear);
		else
			return - 1;
		
		// Obtenemos la etiqueta <devildrey33_ListaDesplegable>		
		this.EtiquetaListaDesplegable = document.getElementById(this.ID);
		
		// Me aseguro de borrar el contenido de la etiqueta por si se usa _Crear por segunda vez en ella.
		this.EtiquetaListaDesplegable.innerHTML = "";
		
		// Inserto el div que contiene la ListaDesplegable dentro del tag <devildrey33_ListaDesplegable>
		this._AgregarObjeto(this.EtiquetaListaDesplegable, "div", "devildrey33_ListaDesplegable_Interna", "devildrey33_ListaDesplegable_" + this.ID);
		
		// Div que contiene la ListaDesplegable
		this.ObjetoListaDesplegable = document.getElementById("devildrey33_ListaDesplegable_" + this.ID);
		// UL que contiene la lista de items
		this.ObjetoListaItems = "";
		// Span que contiene el texto del item seleccionado
		this.ObjetoItemSeleccionado = "";
	
		// Por defecto se selecciona el primer item
//		this._Seleccion = this.Opciones["ItemSeleccionado"];
		
		// Guardamos el objeto que quedara como seleccionado
		if (this._Items[this.Opciones["ItemSeleccionado"]]) this._ItemSeleccionado = this._Items[this.Opciones["ItemSeleccionado"]];
		else												this._ItemSeleccionado = null;

		var Codigo = "";
		if (this.Opciones["DesplegarHaciaArriba"] == false) {
			Codigo += "<span id='devildrey33_ListaDesplegable_ItemSeleccionado_" + this.ID + "' class='devildrey33_ListaDesplegable_ItemSeleccionado'>" + this.Texto() + "</span>";
			// Añado la flecha 
			if (this.Opciones["MostrarFlecha"] == true) Codigo += "<div class='devildrey33_ListaDesplegable_ImagenAbajoNormal' id='devildrey33_ListaDesplegable_Flecha_" + this.ID + "'> </div>";
			Codigo += "<ul class='devildrey33_ListaDesplegable_ListaItems' id='devildrey33_ListaDesplegable_ListaItems_" + this.ID + "'>";
			for (var i = 0; i < this._Items.length; i++) {	
				if (this._ItemSeleccionado == this._Items[i] && this.Opciones["OcultarItemSeleccionado"] == true)	
					Codigo += "<li class='devildrey33_ListaDesplegable_Item' style='display:none'>" + this._Items[i].Texto() + "</li>";
				else
					Codigo += "<li class='devildrey33_ListaDesplegable_Item'>" + this._Items[i].Texto() + "</li>";						
			}
			Codigo += "</ul>";
		}
		else {
			Codigo = "<ul class='devildrey33_ListaDesplegable_ListaItems' id='devildrey33_ListaDesplegable_ListaItems_" + this.ID + "'>";
			for (var i = 0; i < this._Items.length; i++) {	
				if (this._ItemSeleccionado == this._Items[i] && this.Opciones["OcultarItemSeleccionado"] == true)	
					Codigo += "<li class='devildrey33_ListaDesplegable_Item' style='display:none'>" + this._Items[i].Texto() + "</li>";
				else
					Codigo += "<li class='devildrey33_ListaDesplegable_Item'>" + this._Items[i].Texto() + "</li>";						
			}
			Codigo += "</ul>";
			Codigo += "<span id='devildrey33_ListaDesplegable_ItemSeleccionado_" + this.ID + "' class='devildrey33_ListaDesplegable_ItemSeleccionado'>" + this.Texto() + "</span>";
			// Añado la flecha 
			if (this.Opciones["MostrarFlecha"] == true) Codigo += "<div class='devildrey33_ListaDesplegable_ImagenArribaNormal' id='devildrey33_ListaDesplegable_Flecha_" + this.ID + "'> </div>";
		}
		this.ObjetoListaDesplegable.innerHTML = Codigo;

		// UL que contiene la lista de items
		this.ObjetoListaItems = document.getElementById("devildrey33_ListaDesplegable_ListaItems_" + this.ID);
		// Span que contiene el texto del item seleccionado
		this.ObjetoItemSeleccionado = document.getElementById("devildrey33_ListaDesplegable_ItemSeleccionado_" + this.ID);
		
		// Enlazo todos los items con su objeto (Tag <li>) y tambien enlazo todos los tags con el evento OnClick
		for (var i = 0; i < this._Items.length; i++) {
			this._Items[i].Objeto = document.getElementById("devildrey33_ListaDesplegable_ListaItems_" + this.ID).childNodes[i];
			this._EnlazarEvento(this._Items[i].Objeto, "click", this._OnClick);
			this._EnlazarEvento(this._Items[i].Objeto, "mouseover", this._OnMouseOverItem);
			this._EnlazarEvento(this._Items[i].Objeto, "mouseout", this._OnMouseOutItem);
		}

		// Reajusto el tamaño del control segun el ancho de los items
		this._AjustarTam();
		
		// Eventos del mouse (over/out)
		this._EnlazarEvento(this.ObjetoListaDesplegable, "mouseover", this._OnMouseOver);
		this._EnlazarEvento(this.ObjetoListaDesplegable, "mouseout", this._OnMouseOut);		

		// Guardo la posición Y inicial una vez colocados todos los objetos.
		// Si se muestra la lista hacia arriba, la posición del objeto ListaDesplegable es absoluta por lo que el top tiene un valor que no es 0, y necesito guardarlo para mostrar la lista correctamente.
		if (this.Opciones["DesplegarHaciaArriba"] == true) {
			this._Top = parseInt(this.ObjetoListaDesplegable.offsetTop);
			this.ObjetoListaDesplegable.style.top = this._Top + "px";
		}
		
		// Devuelvo true para confirmar la creación del control
		return true;
	}
	
	
	/* Función PRIVADA que calcula el tamaño necesario para mostrar la lista desplegable y lo asigna al control.
			function _AjustarTam();
			Retorno : Esta función no devuelve nada.
	 */	
	this._AjustarTam = function() {
		// Creo una item oculto para medir el texto
		var ItemFalso = document.createElement("div");
		
		document.body.appendChild(ItemFalso);
		ItemFalso.className = "devildrey33_ListaDesplegable_Item";
		ItemFalso.style.left = -2000;
		ItemFalso.style.top = -2000;
		ItemFalso.style.position = "absolute";
		
		// Si no hay minimo alto definido lo calculamos partiendo de lo que deberia ocupar el item seleccionado
		if (this.Opciones["MinimoAlto"] == 0) {
			ItemFalso.innerHTML = "a";
			this.Opciones["MinimoAlto"] = parseInt(ItemFalso.offsetHeight);
		}
		
		// Calculo el ancho
		var Ancho = this.Opciones["MinimoAncho"];
		// Si hay que mostrar la flecha, resto el ancho de la flecha inicial
		if (this.Opciones["MostrarFlecha"] == true) Ancho -= 20; // 2 + 16 + 2 [margen + imagen + margen]
		for (i = 0; i != this._Items.length; i++) {
			ItemFalso.innerHTML = this._Items[i]._Texto;
			if (Ancho < parseInt(ItemFalso.offsetWidth)) Ancho = parseInt(ItemFalso.offsetWidth);
		}
		
		// Si hay que mostrar la flecha, añadimos el ancho que antes se habia restado
		if (this.Opciones["MostrarFlecha"] == true) Ancho += 20; // 2 + 16 + 2 [margen + imagen + margen]
		
		// Calculo la altura
		var Alto = this.Opciones["MinimoAlto"];;
		if (Alto < parseInt(this.ObjetoItemSeleccionado.offsetHeight)) Alto = parseInt(this.ObjetoItemSeleccionado.offsetHeight);
		
		// Ajusto la altura de la clase devildrey33_ListaDesplegable al tamaño del primer item de´la ListaDesplegable.
		this.ObjetoListaDesplegable.style.height = Alto + "px";

		// Ajusto el ancho de la ListaDesplegable al ancho del item mas grande.
		this.ObjetoListaDesplegable.style.width = Ancho + "px";

		// Ajusto la altura del tag ListaDesplegable al tamaño del div "devildrey33_ListaDesplegable_Interna"
		this.EtiquetaListaDesplegable.style.height = parseInt(this.ObjetoListaDesplegable.offsetHeight) + "px";
		this.EtiquetaListaDesplegable.style.width = parseInt(this.ObjetoListaDesplegable.offsetWidth) + "px";
		
		// Si el control se despliega hacia arriba muevo la lista
		if (this.Opciones["DesplegarHaciaArriba"] == true) this.ObjetoListaItems.style.marginTop = "-" + parseInt(this.ObjetoListaItems.offsetHeight) + "px";
		
		// Si el control debe mostrar la flecha, la centro segun la altura de este
		if (this.Opciones["MostrarFlecha"] == true)	document.getElementById("devildrey33_ListaDesplegable_Flecha_" + this.ID).style.marginTop = ((parseInt(this.ObjetoListaDesplegable.style.height) - 8) / 2) + "px";		
		
		// Elimino el item oculto que he creado para medir el tamaño adecuado
		document.body.removeChild(ItemFalso);
		delete ItemFalso;
	}
	

	/*  Función para asignar/obtener la posición del item seleccionado.
			function Seleccion(NuevaPos);
			NuevaPos [Opcional]	: Si se especifica este parametro se asignara la nueva posicion especificada. Debe ser un valor válido entre 0 y TotalItems()
			Retorno 			: Si no se especifica una nueva posición devuelve la posición del item seleccionado, si se especifica una posición devuelve true en caso de ser válida, o false en caso contrario.
			NOTA    			: Si no se especifica el parametro NuevaPos, esta funcion devuelve la posición de la selección.
	 */
	this.Seleccion = function(NuevaPos) {
		if (typeof NuevaPos === 'undefined') { // Obtener seleccion
			for (var i = 0; i < this._Items.length; i++) {
				if (this._Items[i] == this._ItemSeleccionado) return i;
			}
			return -1;
		}
		
		// Protección por si la nueva posición excede del rango de items
		if (NuevaPos < 0) 						return false;
		if (this._Items.length == 0) {
			this.ObjetoItemSeleccionado.innerHTML = "";
		}
		if (NuevaPos > this._Items.length - 1) 	return false;

		// Si se ha creado la ListaDesplegable
		if (this.EtiquetaListaDesplegable) {
			if (this.Opciones["OcultarItemSeleccionado"] == true) {
				this._Items[this.Seleccion()].Objeto.style.display = "block";
				this._Items[NuevaPos].Objeto.style.display = "none";
			}
			this.ObjetoItemSeleccionado.innerHTML = this._Items[NuevaPos].Texto();
		}
		
		// Asignamos la nueva posición a la selección
		this._ItemSeleccionado = this._Items[NuevaPos];
//		this._Seleccion = NuevaPos;
		return true;
	}


	/* 	Función PRIVADA para enlazar un tag con un evento
			function _EnlazarEvento(Objeto, Tipo, Funcion);
			Objeto 	: Tag que queremos enlazar
			Tipo 	: Tipo de evento que queremos enlazar (mousemove, mouseover, click, etc...)
			Funcion	: Función que se nelazara con el evento,
			Retorno : No devuelve nada.
			NOTA	: Función creada para mantener compatibilidad con el IE8.
	 */
	this._EnlazarEvento = function(Objeto, Tipo, Funcion) {
		if (typeof Objeto.addEventListener == "function") 	Objeto.addEventListener(Tipo, Funcion, false);	// Navegadores modernos
		else 												Objeto.attachEvent("on" + Tipo, Funcion);		// IE 8 e inferiores
	}
	
	
	/* Función para mostrar la lista desplegable
			function MostrarLista();
			Retorno : No devuelve nada.
	 */
	this.MostrarLista = function() {		
		this.ObjetoListaDesplegable.style.zIndex = "1000";
		if (this.Opciones["DesplegarHaciaArriba"] == false) {
			if (this.Opciones["Animacion"] == false) {
				this.ObjetoListaDesplegable.style.height = (parseInt(this.ObjetoListaItems.offsetHeight) + parseInt(this.ObjetoItemSeleccionado.offsetHeight)) + "px";
				this.ObjetoListaItems.style.opacity = "1.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
				this.Opciones["FuncionMostrarLista"](this);
			}
			else {
				this.ObjetoListaItems.style.opacity = "1.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
				this._IniciarAnimacion("MostrarAbajo");
			}
			if (this.Opciones["MostrarFlecha"] == true) document.getElementById("devildrey33_ListaDesplegable_Flecha_" + this.ID).className = "devildrey33_ListaDesplegable_ImagenAbajoResaltada";
		}
		else {
			if (this.Opciones["Animacion"] == false) {
				// Necesitamos una altura minima de 19 pixeles que es lo que deberia ocupar el item seleccionado en caso de no existir
				var AlturaMinima = this.Opciones["MinimoAlto"];
				if (parseInt(this.ObjetoItemSeleccionado.offsetHeight) > AlturaMinima)
					AlturaMinima = parseInt(this.ObjetoItemSeleccionado.offsetHeight);

				this.ObjetoListaDesplegable.style.top = (this._Top - parseInt(this.ObjetoListaItems.offsetHeight)) + "px";
				this.ObjetoListaItems.style.marginTop = "0px";
				this.ObjetoListaDesplegable.style.height = (parseInt(this.ObjetoListaItems.offsetHeight) + AlturaMinima) + "px";
				this.ObjetoListaItems.style.opacity = "1.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
				this.Opciones["FuncionMostrarLista"](this);
			}
			else {
				this.ObjetoListaItems.style.opacity = "1.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
				this._IniciarAnimacion("MostrarArriba");
			}
			if (this.Opciones["MostrarFlecha"] == true) document.getElementById("devildrey33_ListaDesplegable_Flecha_" + this.ID).className = "devildrey33_ListaDesplegable_ImagenArribaResaltada";
		}
	}


	/* Función para ocultar la lista desplegable
			function OcultarLista();
			Retorno : No devuelve nada.
	 */
	this.OcultarLista = function() {		
		this.ObjetoListaDesplegable.style.zIndex = "";
		if (this.Opciones["DesplegarHaciaArriba"] == false) {
			if (this.Opciones["Animacion"] == false) {
				this.ObjetoListaDesplegable.style.height = parseInt(this.ObjetoItemSeleccionado.offsetHeight) + "px";
				this.ObjetoListaItems.style.opacity = "0.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
				this.Opciones["FuncionOcultarLista"](this);
			}
			else {
				this._IniciarAnimacion("OcultarAbajo");
			}
			if (this.Opciones["MostrarFlecha"] == true) document.getElementById("devildrey33_ListaDesplegable_Flecha_" + this.ID).className = "devildrey33_ListaDesplegable_ImagenAbajoNormal";
		}
		else {
			if (this.Opciones["Animacion"] == false) {
				// Necesitamos una altura minima de 19 pixeles que es lo que deberia ocupar el item seleccionado en caso de no existir
				var AlturaMinima = this.Opciones["MinimoAlto"];
				if (parseInt(this.ObjetoItemSeleccionado.offsetHeight) > AlturaMinima)
					AlturaMinima =  parseInt(this.ObjetoItemSeleccionado.offsetHeight);
				
				this.ObjetoListaItems.style.marginTop = "-" + parseInt(this.ObjetoListaItems.offsetHeight) + "px";
				this.ObjetoListaDesplegable.style.height = AlturaMinima + "px";
				this.ObjetoListaDesplegable.style.top = this._Top + "px";
				this.ObjetoListaItems.style.opacity = "0.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
				this.Opciones["FuncionOcultarLista"](this);
			}
			else {
				this._IniciarAnimacion("OcultarArriba");
			}
			if (this.Opciones["MostrarFlecha"] == true) document.getElementById("devildrey33_ListaDesplegable_Flecha_" + this.ID).className = "devildrey33_ListaDesplegable_ImagenArribaNormal";
		}
	}
	

	/* Función PRIVADA que inicia la animación para desplegar o ocultar la lista
			function _IniciarAnimacion(Tipo);
			Tipo 	: Puede ser MostrarAbajo y OcultarAbajo para desplegar el control hacia abajo, 
					  y MostrarArriba y OcultarArriba para desplegarlo hacia arriba.
			Retorno : No devuelve nada.
	*/
	this._IniciarAnimacion = function(Tipo) {
		this._Animando = Tipo;
		
		// (300ms / 200px) = 15ms (de cada tick del temporizador, si se hace cada 15 segundos son unos 66fps)
		this._AnimacionParte = (parseInt(this.ObjetoListaItems.offsetHeight) / this.Opciones["AnimacionTiempo"]) * 15;
		this._AnimacionAltura = parseInt(this.ObjetoListaDesplegable.style.height);
		// Para las animaciones que se despliegan hacia arriba tambien necesito guardar el margen superior de la lista y la posición Y del control
		if (this._Animando == "MostrarArriba" ||this._Animando == "OcultarArriba") {
			this._AnimacionMargen = parseInt(this.ObjetoListaItems.style.marginTop);
			this._AnimacionTop = parseInt(this.ObjetoListaDesplegable.offsetTop);
		}
				
		// Si no existe el temporizador lo creamos
		if (var_devildrey33_ListaDesplegable_TemporizadorAnimacion == 0) {
			var_devildrey33_ListaDesplegable_TemporizadorAnimacion = setInterval(function() { 
				var Animando = false;
				for (var Combo in var_devildrey33_ListaDesplegable) {
					if (var_devildrey33_ListaDesplegable[Combo]._Animando != "") {
						var_devildrey33_ListaDesplegable[Combo]._Animacion(); 
						Animando = true;
					}
				}				
				// Si no quedan mas animaciones terminamos el temporizador
				if (Animando == false) {
					clearInterval(var_devildrey33_ListaDesplegable_TemporizadorAnimacion);
					var_devildrey33_ListaDesplegable_TemporizadorAnimacion = 0;
				}
			}, 15);
		}
	}


	/* Función PRIVADA que realiza la animación.
			function _Animacion();
			Retorno : No devuelve nada.
	*/
	this._Animacion = function() {
		var Altura = parseInt(this.ObjetoListaDesplegable.style.height);
		// Necesitamos una altura minima de 19 pixeles que es lo que deberia ocupar el item seleccionado en caso de no existir
		var AlturaMinima = this.Opciones["MinimoAlto"];
		if (parseInt(this.ObjetoItemSeleccionado.offsetHeight) > AlturaMinima)
			AlturaMinima =  parseInt(this.ObjetoItemSeleccionado.offsetHeight);
		
		switch (this._Animando) {
			case "MostrarAbajo" :
				if (Altura < ((parseInt(this.ObjetoListaItems.offsetHeight) + AlturaMinima) - this._AnimacionParte)) {
					this._AnimacionAltura += this._AnimacionParte;
					this.ObjetoListaDesplegable.style.height = Math.round(this._AnimacionAltura) + "px";
				}
				else {
					this.ObjetoListaDesplegable.style.height = (parseInt(this.ObjetoListaItems.offsetHeight) + AlturaMinima) + "px";
					this._Animando = "";
					this.Opciones["FuncionMostrarLista"](this);
				}
				break;
			case "OcultarAbajo" :
				if (Altura > (AlturaMinima + this._AnimacionParte)) {
					this._AnimacionAltura -= this._AnimacionParte;
					this.ObjetoListaDesplegable.style.height = Math.round(this._AnimacionAltura) + "px";
				}
				else {
					this.ObjetoListaDesplegable.style.height = AlturaMinima + "px";
					this.ObjetoListaItems.style.opacity = "0.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
					this._Animando = "";
					this.Opciones["FuncionOcultarLista"](this);
				}
				break;
			case "MostrarArriba" :
				if (Altura < ((parseInt(this.ObjetoListaItems.offsetHeight) + AlturaMinima) - this._AnimacionParte)) {
					this._AnimacionAltura += this._AnimacionParte;
					this._AnimacionTop -= this._AnimacionParte;
					this._AnimacionMargen += this._AnimacionParte;
					this.ObjetoListaDesplegable.style.height = Math.round(this._AnimacionAltura) + "px";
					this.ObjetoListaDesplegable.style.top = Math.round(this._AnimacionTop) + "px"; // parse int elimina decimales sin redondear
					this.ObjetoListaItems.style.marginTop = Math.round(this._AnimacionMargen) + "px";
				}
				else {
					this.ObjetoListaDesplegable.style.height = (parseInt(this.ObjetoListaItems.offsetHeight) + AlturaMinima) + "px";
					this.ObjetoListaDesplegable.style.top = (this._Top - parseInt(this.ObjetoListaItems.offsetHeight)) + "px";
					this.ObjetoListaItems.style.marginTop = "0px";
					this._Animando = "";
					this.Opciones["FuncionMostrarLista"](this);
				}
				break;
			case "OcultarArriba" :
				if (Altura > (AlturaMinima + this._AnimacionParte)) {
					this._AnimacionAltura -= this._AnimacionParte;
					this._AnimacionTop += this._AnimacionParte;
					this._AnimacionMargen -= this._AnimacionParte;
					this.ObjetoListaDesplegable.style.height = Math.round(this._AnimacionAltura) + "px";
					this.ObjetoListaDesplegable.style.top = Math.round(this._AnimacionTop) + "px";
					this.ObjetoListaItems.style.marginTop = Math.round(this._AnimacionMargen) + "px";
				}
				else {
					this.ObjetoListaDesplegable.style.height = AlturaMinima + "px";
					this.ObjetoListaDesplegable.style.top = this._Top + "px";
					this.ObjetoListaItems.style.marginTop = "-" + parseInt(this.ObjetoListaItems.offsetHeight) + "px";
					this.ObjetoListaItems.style.opacity = "0.0"; // Ocultamos la lista (para IE6 no vale el display hidden, un truco es el opacity)
					this._Animando = "";
					this.Opciones["FuncionOcultarLista"](this);
				}
				break;
		}
	}

	

	/* 
		NOTA : 	En los eventos On.... se pierde el puntero this, y este se convierte en el objeto que manda el evento, 
		  		por ello se obtiene la ID de la ListaDesplegable y se accede a él desde "var_devildrey33_ListaDesplegable[ID]"
	 */
	 
	/* Función PRIVADA para obtener el evento MouseOver y determinar si hay que mostrar la lista
			function _OnMouseOver();
			Retorno : No devuelve nada.
			NOTA	: Mucho cuidado, el puntero this de esta función no se refiere a esta clase.
	 */
	this._OnMouseOver = function() {
		// Obtenemos la ID numerica partiendo de la ID del div "devildrey33_ListaDesplegable_??"
		var ID = "";
		if (this.id) { // Navegadores modernos
		 	ID = this.id.substr(String("devildrey33_ListaDesplegable_").length);
		}
		else { // IE 8 e inferiores
			var Nodo = window.event.srcElement;			
			while (ID == "") {				
				// Efecto hover para IE6
				if (Nodo.className == "devildrey33_ListaDesplegable_Item" && navigator.userAgent.indexOf('MSIE 6') != -1) Nodo.className = "devildrey33_ListaDesplegable_ItemResaltado";
				// Buscamos la ID de la raíz
				if (Nodo.id.indexOf("devildrey33_ListaDesplegable_ItemSeleccionado_") != -1)	ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ItemSeleccionado_").length);
				else if (Nodo.id.indexOf("devildrey33_ListaDesplegable_Flecha_") != -1) 		ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_Flecha_").length);
				else if (Nodo.id.indexOf("devildrey33_ListaDesplegable_ListaItems_") != -1) 	ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
				else if (Nodo.id.indexOf("devildrey33_ListaDesplegable_") != -1) 				ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_").length);
				Nodo = Nodo.parentNode;
			}
/*			var eID = window.event.srcElement.id;
			// Si no hay ID es un item por lo que vamos a buscar la lista que tiene ID
			if (eID == "") {
				eID = window.event.srcElement.parentNode.id;
				if (navigator.userAgent.indexOf('MSIE 6') != -1) 
					window.event.srcElement.className = 'devildrey33_ListaDesplegable_ItemResaltado';// Efecto hover para IE6
			}
			if (eID.indexOf("devildrey33_ListaDesplegable_ItemSeleccionado_") != -1) 	ID = eID.substr(String("devildrey33_ListaDesplegable_ItemSeleccionado_").length); 	// Item seleccionado
			else if (eID.indexOf("devildrey33_ListaDesplegable_Flecha_") != -1) 		ID = eID.substr(String("devildrey33_ListaDesplegable_Flecha_").length); 			// Flecha
			else if (eID.indexOf("devildrey33_ListaDesplegable_ListaItems_") != -1) 	ID = eID.substr(String("devildrey33_ListaDesplegable_ListaItems_").length); 		// Lista de items
			else if (eID.indexOf("devildrey33_ListaDesplegable_") != -1) 				ID = eID.substr(String("devildrey33_ListaDesplegable_").length); 					// ListaDesplegable intern
*/
		}
		
		// Mostramos la lista
		if (var_devildrey33_ListaDesplegable[ID]) {
//			var_devildrey33_ListaDesplegable[ID].Opciones["FuncionMouseOver"](var_devildrey33_ListaDesplegable[ID], -1);
			var_devildrey33_ListaDesplegable[ID].MostrarLista();
		}
	}
	
	/* Función PRIVADA para obtener el evento MouseOver para cada item de la lista
			function _OnMouseOverItem();
			Retorno : No devuelve nada.
			NOTA	: Mucho cuidado, el puntero this de esta función no se refiere a esta clase.
	 */
	this._OnMouseOverItem = function() {
		var ID = "";
		var Pos = 0;
		if (this.parentNode) { // Navegadores modernos
		 	ID = this.parentNode.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
			while (this.parentNode.childNodes[Pos] != this) Pos ++;
		}
		else { // IE8 e inferiores
			var Nodo = window.event.srcElement.parentNode;
			var NodoItem = window.event.srcElement;
			while (Nodo.id.indexOf("devildrey33_ListaDesplegable_ListaItems_") == -1) {
				NodoItem = Nodo;
				Nodo = Nodo.parentNode;
			}
			ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
			while (Nodo.childNodes[Pos] != NodoItem) Pos ++;
		}
		
		if (var_devildrey33_ListaDesplegable[ID]) {
			var_devildrey33_ListaDesplegable[ID].Opciones["FuncionItemMouseOver"](var_devildrey33_ListaDesplegable[ID], Pos);
		}
	}
	
	
	/* Función PRIVADA para obtener el evento MouseOut y determinar si hay que ocultar la lista
			function _OnMouseOut();
			Retorno : No devuelve nada.
			NOTA	: Mucho cuidado, el puntero this de esta funcion no se refiere a esta clase.
	 */
	this._OnMouseOut = function() {
		// Obtenemos la ID numerica partiendo de la ID del DIV "devildrey33_ListaDesplegable_??"
		var ID = "";
		if (this.id) { // Navegadores modernos
		 	ID = this.id.substr(String("devildrey33_ListaDesplegable_").length);
		}
		else { // IE 8 e inferiores
			var Nodo = window.event.srcElement;			
			while (ID == "") {				
				// Efecto hover para IE6
				if (Nodo.className == "devildrey33_ListaDesplegable_ItemResaltado" && navigator.userAgent.indexOf('MSIE 6') != -1) Nodo.className = "devildrey33_ListaDesplegable_Item";
				// Buscamos la ID de la raíz
				if (Nodo.id.indexOf("devildrey33_ListaDesplegable_ItemSeleccionado_") != -1)	ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ItemSeleccionado_").length);
				else if (Nodo.id.indexOf("devildrey33_ListaDesplegable_Flecha_") != -1) 		ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_Flecha_").length);
				else if (Nodo.id.indexOf("devildrey33_ListaDesplegable_ListaItems_") != -1) 	ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
				else if (Nodo.id.indexOf("devildrey33_ListaDesplegable_") != -1) 				ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_").length);
				Nodo = Nodo.parentNode;
			}
		
/*			var eID = window.event.srcElement.id;
			// Si no hay ID es un item por lo que vamos a buscar la lista que tiene ID
			if (eID == "") {
				eID = window.event.srcElement.parentNode.id;
				if (navigator.userAgent.indexOf('MSIE 6') != -1) 
					window.event.srcElement.className = 'devildrey33_ListaDesplegable_Item';// Efecto hover para IE6
			}
			if (eID.indexOf("devildrey33_ListaDesplegable_ItemSeleccionado_") != -1) 	ID = eID.substr(String("devildrey33_ListaDesplegable_ItemSeleccionado_").length); 	// Item seleccionado
			else if (eID.indexOf("devildrey33_ListaDesplegable_Flecha_") != -1) 		ID = eID.substr(String("devildrey33_ListaDesplegable_Flecha_").length); 			// Flecha
			else if (eID.indexOf("devildrey33_ListaDesplegable_ListaItems_") != -1) 	ID = eID.substr(String("devildrey33_ListaDesplegable_ListaItems_").length); 		// Lista de items
			else if (eID.indexOf("devildrey33_ListaDesplegable_") != -1) 				ID = eID.substr(String("devildrey33_ListaDesplegable_").length); 					// ListaDesplegable interna*/
		}
		// Ocultamos la lista
		if (var_devildrey33_ListaDesplegable[ID]) {
//			var_devildrey33_ListaDesplegable[ID].Opciones["FuncionMouseOut"](var_devildrey33_ListaDesplegable[ID], -1);
			var_devildrey33_ListaDesplegable[ID].OcultarLista();
		}
	}
	
	
	/* Función PRIVADA para obtener el evento MouseOut para cada item de la lista
			function _OnMouseOut();
			Retorno : No devuelve nada.
			NOTA	: Mucho cuidado, el puntero this de esta función no se refiere a esta clase.
	 */
	this._OnMouseOutItem = function() {
		var ID = "";
		var Pos = 0;
		if (this.parentNode) { // Navegadores modernos
		 	ID = this.parentNode.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
			while (this.parentNode.childNodes[Pos] != this) Pos ++;
		}
		else { // IE8 e inferiores
			var Nodo = window.event.srcElement.parentNode;
			var NodoItem = window.event.srcElement;
			while (Nodo.id.indexOf("devildrey33_ListaDesplegable_ListaItems_") == -1) {
				NodoItem = Nodo;
				Nodo = Nodo.parentNode;
			}
			ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
			while (Nodo.childNodes[Pos] != NodoItem) Pos ++;
		}
		
		if (var_devildrey33_ListaDesplegable[ID]) {
			var_devildrey33_ListaDesplegable[ID].Opciones["FuncionItemMouseOut"](var_devildrey33_ListaDesplegable[ID], Pos);
		}
	}
	
	
	/* Función PRIVADA para obtener el evento Click y determinar si hay que cambiar la seleccion actual
			function _OnClick();
			Retorno : No devuelve nada.
			NOTA	: Mucho cuidado, el puntero this de esta funcion no se refiere a esta clase.
	 */
	this._OnClick = function() {
		// Obtenemos la ID numerica partiendo de la ID del UL "devildrey33_ListaDesplegable_ListaItems_??"
		var ID = "";
		var PosItem = 0;
		if (this.parentNode) {	// Navegadores modernos
			ID = this.parentNode.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
			// Buscamos la posicion del item en el que se ha hecho click
			while (this.parentNode.childNodes[PosItem] != this) PosItem ++;
		}
		else { // IE8 e inferiores
			var Nodo = window.event.srcElement.parentNode;
			var NodoItem = window.event.srcElement;
			while (Nodo.id.indexOf("devildrey33_ListaDesplegable_ListaItems_") == -1) {
				NodoItem = Nodo;
				Nodo = Nodo.parentNode;
			}
			// Por probar en el ejemplo con imagenes y IE8 e inferiores..
			ID = Nodo.id.substr(String("devildrey33_ListaDesplegable_ListaItems_").length);
			while (Nodo.childNodes[PosItem] != NodoItem) PosItem ++;
		}

		// Seleccionamos el nuevo item seleecionado, ejecutamos la función del click externa, y ocultamos la lista.
		var_devildrey33_ListaDesplegable[ID].Seleccion(PosItem);
		var_devildrey33_ListaDesplegable[ID].Opciones["FuncionItemClick"](var_devildrey33_ListaDesplegable[ID], PosItem);
		// Temporizador que oculta la lista 50 milisegundos despues de haber presionado en un item
		if (var_devildrey33_ListaDesplegable[ID].Opciones["OcultarListaAlHacerClick"] == true) setTimeout(function() { var_devildrey33_ListaDesplegable[ID].OcultarLista(); }, 1);
	}
	
	
	/* --------------------------------------------- */
	/* Valores por defecto para la ListaDesplegable */
	/* ------------------------------------------- */
	this.Opciones = { 
		"OcultarItemSeleccionado" 			: false,
		"DesplegarHaciaArriba"				: false,
		"OrdenarItems"						: null,
		"Animacion"							: true,
		"AnimacionTiempo"					: 100,
		"MostrarFlecha"						: true,
		"ItemSeleccionado"					: 0,
		"OcultarListaAlHacerClick"			: true,
		"ListaItems"						: Array(),
		"FuncionItemClick"					: function(ListaDesplegable, Pos) { },
		"FuncionItemMouseOver"				: function(ListaDesplegable, Pos) { },
		"FuncionItemMouseOut"				: function(ListaDesplegable, Pos) { },
		"FuncionMostrarLista"				: function(ListaDesplegable) { },
		"FuncionOcultarLista"				: function(ListaDesplegable) { },
		"MinimoAncho"						: 60,
		"MinimoAlto"						: 0
	};
		
	// Si se ha definido la variable Opciones
	if (Opciones) {
		// Mostrar el Item seleccionado en la lista
		if (typeof Opciones["OcultarItemSeleccionado"] != "undefined") 		this.Opciones["OcultarItemSeleccionado"]		= Opciones["OcultarItemSeleccionado"];
		// Desplegar la lista hacia arriba
		if (typeof Opciones["DesplegarHaciaArriba"] != "undefined") 		this.Opciones["DesplegarHaciaArriba"] 			= Opciones["DesplegarHaciaArriba"];
		// Orden de los items
		if (typeof Opciones["OrdenarItems"] != "undefined") 				this.Opciones["OrdenarItems"] 					= Opciones["OrdenarItems"];
		// Realizar animación
		if (typeof Opciones["Animacion"] != "undefined") 					this.Opciones["Animacion"] 						= Opciones["Animacion"];
		// Tiempo de la animación
		if (typeof Opciones["AnimacionTiempo"] != "undefined") 				this.Opciones["AnimacionTiempo"] 				= Opciones["AnimacionTiempo"];
		// Flecha que indica hacia donde se despliega el control
		if (typeof Opciones["MostrarFlecha"] != "undefined") 				this.Opciones["MostrarFlecha"] 					= Opciones["MostrarFlecha"];
		// Texto que se mostrará
		if (typeof Opciones["ItemSeleccionado"] != "undefined")				this.Opciones["ItemSeleccionado"] 				= Opciones["ItemSeleccionado"];
		// Ocultar la lista al hacer Click
		if (typeof Opciones["OcultarListaAlHacerClick"] != "undefined") 	this.Opciones["OcultarListaAlHacerClick"] 		= Opciones["OcultarListaAlHacerClick"];
		// Array de items para este control
		if (typeof Opciones["ListaItems"] != "undefined") 					this.Opciones["ListaItems"] 					= Opciones["ListaItems"];
		// Función que será llamada al hacer click en un item de la lista
		if (typeof Opciones["FuncionItemClick"] != "undefined") 			this.Opciones["FuncionItemClick"] 				= Opciones["FuncionItemClick"];
		// Función que será llamada al entrar en el área de un item
		if (typeof Opciones["FuncionItemMouseOver"] != "undefined") 		this.Opciones["FuncionItemMouseOver"] 			= Opciones["FuncionItemMouseOver"];
		// Función que será llamada al salir del área de un item
		if (typeof Opciones["FuncionItemMouseOut"] != "undefined") 			this.Opciones["FuncionItemMouseOut"] 			= Opciones["FuncionItemMouseOut"];
		// Función que será llamada al empezar y terminar de mostrar la lista
		if (typeof Opciones["FuncionMostrarLista"] != "undefined") 			this.Opciones["FuncionMostrarLista"] 			= Opciones["FuncionMostrarLista"];
		// Función que será llamada al empezar y terminar de ocultar la lista
		if (typeof Opciones["FuncionOcultarLista"] != "undefined") 			this.Opciones["FuncionOcultarLista"] 			= Opciones["FuncionOcultarLista"];
		// Minimo de ancho en pixeles para el control
		if (typeof Opciones["MinimoAncho"] != "undefined") 					this.Opciones["MinimoAncho"] 					= Opciones["MinimoAncho"];
		// Minimo de altura en pixeles para el item seleccionado
		if (typeof Opciones["MinimoAlto"] != "undefined") 					this.Opciones["MinimoAlto"] 					= Opciones["MinimoAlto"];
	}

	// Para IE 6 y 7 desactivo la opcion "MostrarFlecha" incluso si la asignas a true, ya que el float está bug y no me voy a trar 2 dias cambiando código para que se vea en este navegador.....
	// Como solo es un tema visual y no afecta en nada al funcionamiento lo voy a dejar asi, ademas IE6, IE7, y IE8 son lo peor que ha tenido que sufrir internet en años, si el usuario no se molesta 
	//  en ponerse algo decente, yo no tengo porque molestarme en hacer que se vea 100% igual (que tampoco podría por temas de CSS)
	if (navigator.userAgent.indexOf('MSIE 6') != -1 || navigator.userAgent.indexOf('MSIE 7') != -1 || navigator.userAgent.indexOf('MSIE 8') != -1) 	this.Opciones["MostrarFlecha"] = false;

	
	// Estado de la animación
	this._Animando = "";
	// Altura actual de la ListaDesplegable en la animación
	this._AnimacionAltura = 0;
	// Margen actual de la lista de la ListaDesplegable en la animación (solo para animaciones hacia arriba)
	this._AnimacionMargen = 0;
	// Posición top actual de la lista del ListaDesplegable en la animación (solo para animaciones hacia arriba)
	this._AnimacionTop = 0;
	// Array interno para guardar los items
	this._Items = [];
	// Guardamos la ID y establecemos el objeto que contiene las diapositivas
	this.ID = nID;
	// Asigno esta clase a la variable global necesaria para los eventos
	var_devildrey33_ListaDesplegable[this.ID] = this;	
	// Creo una lista de los items en memoria ordenados segun las opciones especificadas.
	for (var i = 0; i < this.Opciones["ListaItems"].length; i++) this.AgregarItem(this.Opciones["ListaItems"][i], this.Opciones["OrdenarItems"]);
	/* -------------------------------------------------------- */
	/* Fin de la obtención de valores para la ListaDesplegable */
	/* ------------------------------------------------------ */
	
	
	
	// Temporizador que se ejecuta mientras no existan los tags <devildrey33_ListaDesplegable>
	// NOTA : esto es un fix para no tener que poner el script debajo del tag
	// NOTA2 : Lo de los intentos puede ser malo para webs que tarden mucho en cargar :/, pero dejar el timer cada 20ms me parece tambien malo...	
	if (var_devildrey33_ListaDesplegable_TemporizadorCrear == 0) {
		var_devildrey33_ListaDesplegable_TemporizadorCrear = setInterval(function () { 
			var Creados = true;
			for (var Combo in var_devildrey33_ListaDesplegable) {
				// Si no existe la variable EtiquetaListaDesplegable es que aun no se ha creado la combo
				if (!var_devildrey33_ListaDesplegable[Combo].EtiquetaListaDesplegable) {
					if (var_devildrey33_ListaDesplegable[Combo]._Crear() != true) Creados = false;
				}
			}
			// Sumo 1 al contador de intentos..
			var_devildrey33_ListaDesplegable_Intentos ++;
			// Cuando se han creado todos los objetos, o se han superado los 1000 intentos desactivamos el temporizador
			if (Creados == true || var_devildrey33_ListaDesplegable_Intentos > 1000) { 
				clearInterval(var_devildrey33_ListaDesplegable_TemporizadorCrear); 
				var_devildrey33_ListaDesplegable_TemporizadorCrear = 0; 
			}
			if (var_devildrey33_ListaDesplegable_Intentos > 1000) {
				if (navigator.userAgent.indexOf('MSIE 6') != -1) 	alert("devildrey33_ListaDesplegable : ERROR! una o más ListaDesplegable no han sido creadas despues de 1000 intentos (20 segundos).");
				else												console.log("devildrey33_ListaDesplegable : ERROR! una o más ListaDesplegable no han sido creadas despues de 1000 intentos (20 segundos).");
				clearInterval(var_devildrey33_ListaDesplegable_TemporizadorCrear); 
				var_devildrey33_ListaDesplegable_TemporizadorCrear = 0; 
			}
		}, 20);
	}
	
}


