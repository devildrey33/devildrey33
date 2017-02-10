/* ObjetoTest creado por Josep Antoni Bover Comas para devildrey33.es el 20/10/2016 
    Este objeto está pensado para facilitarme la vida a la hora de probar código, consiste en un UI con varios controles, que permiten modificar variables y ejecutar funciones.
    Inspirado en dat.GUI 
    Ultima modificaión 28/01/2017 (eliminado el recordar pestañas abiertas)
*/

/* Opciones por defecto
Opciones { 
    css            : { // Especificar el css al estilo JavaScript, es decir sin barras separadoras, y poniendo la mayuscula de separador
        top        : 'auto',
        left       : 'auto',
        riguht     : 'auto',
        bottom     : 'auto'
        position   : 'fixed';
        minWidth   : '350px';
        fontFamily : 'Inconsolata, monospace';
        fontSize   : '12px';
        zIndex     : '1000';
    },
    AutoActualizar : false // Si es true, se creará un temporizador cada 16ms (1000ms / 60fps) que actualizará todos los valores.
}*/
"option strict";


var ObjetoTest = function(Opciones) {        
    // Crea el temporizador de actualización automática
    this.AutoActualizar_Iniciar = function() {
        this.AutoActualizar_Cancelar();
        this.Timer_AutoActualizar = setTimeout(this.ActualizarValores.bind(this), 1000 / 60);
    };
    
    // Cancela el temporizador de actualización automática
    this.AutoActualizar_Cancelar = function() {
        if (this.Timer_AutoActualizar !== 0) {
            clearInterval(this.Timer_AutoActualizar);
            this.Timer_AutoActualizar = 0;
        }
    };
    
    // Inicia el ObjetoTest
    this.Iniciar = function(Opciones) {
        this.Variables = [];
        this.Listas = [];
        this.VarPrimeraActualizacion = true;
        this.MousePresionado = null;
        this.AutoActualizar = false;
        // Contenedores para el UI
        this.ControlLista = document.createElement('div');
        this.ControlLista.className = "ObjetoTest";
        if (typeof Opciones !== 'undefined') {
            if (typeof Opciones.css !== 'undefined') {
                // Creo los estilos del array de estilos
                for (var Indice in Opciones.css) {
                    this.ControlLista.style[Indice] = Opciones.css[Indice];
                }
            }
            if (typeof Opciones["AutoActualizar"] !== 'undefined')  { this.AutoActualizar = Opciones["AutoActualizar"]; }
        }

        // Inserto el control en el body
        if (document.body.childNodes.length > 0) { document.body.insertBefore(this.ControlLista, document.body.childNodes[0]); }    // Si hay hijos inserto el control al principio
        else                                     { document.body.appendChild(this.ControlLista); }                                  // Si no hay elementos en el body, añado el control
        
        // Como no se puede hacer un SetCapture del API de windows... tengo que controlar el mousemove y el mouse up de toda la ventana...
        this.MouseMovimiento = function(Evento) {
            if (this.MousePresionado !== null) {
                if (typeof this.MousePresionado.Barra_MouseMove !== 'undefined') {
                    var R = this.MousePresionado.ControlBarra.getBoundingClientRect();
                    var nEvento = { offsetX : Evento.clientX - R.left, offsetY : Evento.clientY - R.top };
//                    console.log(R, Evento, nEvento);
                    this.MousePresionado.Barra_MouseMove(nEvento);
                }
            }
        };
        
        this.MouseSoltado = function(Evento) {
//            console.log("ObjetoTest.MouseSoltado", this.MousePresionado, Evento);
            if (this.MousePresionado !== null) {
                this.MouseMovimiento(Evento);
                this.MousePresionado.Foco = false;
                this.MousePresionado = null;
            }
        };
        
        this.EventoMouseMovimiento  = this.MouseMovimiento.bind(this);
        this.EventoMouseSoltado     = this.MouseSoltado.bind(this);
        
        window.addEventListener('mousemove', this.EventoMouseMovimiento);
        window.addEventListener('mouseup', this.EventoMouseSoltado);
        
        // Creo una lista de controles vacia
        this.Lista = new ObjetoTest_Lista(this.ControlLista, this, false);

        // Agrega un control básico para (string, números, booleanos, funciones)
        this.Agregar = function(Opciones) {
            return this.Lista.Agregar(Opciones);
        };
        
        // Agrega una lista dentro de la lista de controles principal
        this.AgregarLista = function(Nombre) {
            return this.Lista.AgregarLista(Nombre);
        };

        // Actualiza todos los controles con los valores actuales
        this.ActualizarValores = function() {
//            this.RecordarPestañas(); // Función que determina que pestañas estaban abiertas y las vuelve a abrir
            for (var i = 0; i < this.Variables.length; i++) {
                this.Variables[i].Actualizar();
            }
        };
        
        // Si AutoActualizar está activo creo el temporizador que actualizará los valores
        if (this.AutoActualizar === true) {
            this.AutoActualizar_Iniciar();
        }        
    };
    /*
    this.RecordarPestañas = function() {
        if (this.VarPrimeraActualizacion === true) {
            for (var i = this.Listas.length - 1; i > -1; i--) {
                var StrLocalStorage = "ObjetoTest_" + this.Listas[i].Nombre.replace(/\s+/g, '');
                if (typeof localStorage[StrLocalStorage] !== 'undefined') {
                    if (localStorage[StrLocalStorage] === "true") {
                        this.Listas[i].Lista_MouseUp();
                    }
                }
            }
            this.VarPrimeraActualizacion = false;
        }        
    };*/
    
    
    this.Terminar = function() {
        window.removeEventListener('mousemove', this.EventoMouseMovimiento);
        window.removeEventListener('mouseup', this.EventoMouseSoltado);      
    };
    
    this.Iniciar(Opciones);
};

var ObjetoTest_Lista = function(ControlPadre, ObjetoTestPadre, Visible) {
    /*{ // (valores por defecto en las opciones y su función)
        Padre         : window,                     // Objeto padre que contiene la variable a testearwawq
        Nombre        : "window.Variable",          // Nombre que se mostrará para el item
        Variable      : "",                         // Variable del control padre que queremos controlar
        Max           : 1,                          // Maximo (Solo se usa en controles numericos)
        Min           : 0,                          // Minimo (Solo se usa en controles numericos)
        Actualizar    : function(NuevoValor) { },   // Función que se llama al actualizar el valor desde el UI
        Modificable   : true,                       // Establece si se puede modificar la propiedad o es de solo lectura (funciona para todos los tipos excepto para funciones)
        TextoTrue     : "Encender",                 // Texto para el true (Solo se usa para los controles bool)
        TextoFalse    : "Apagar",                   // Texto para el fase (Solo se usa para los controles bool)
        PorDefecto    : Valores[Indice][0]          // Valor por defecto (Solo se usa para los controles select con arrays y objetos)
    }*/
    this.Padre = ObjetoTestPadre;    
    this.Variables = [];
    this.ControlLista = document.createElement('div');
    this.ControlLista.className = "ObjetoTest_Lista";
    ControlPadre.appendChild(this.ControlLista);
    
    this.Visible = Visible || false;
    
    this.Agregar = function(Opciones) {
        if (typeof Opciones.Actualizar === "undefined")  { Opciones.Actualizar = function(NuevoValor) { }; }
        if (typeof Opciones.Nombre === "undefined")      { Opciones.Nombre = Opciones.Variable; }
        if (typeof Opciones.Modificable === "undefined") { Opciones.Modificable = true; }
        var Control;
        switch (typeof Opciones.Padre[Opciones.Variable]) {
            case "string"   : Control = new this.ControlStr(this, Opciones);                                                                break;
            case "number"   : Control = new this.ControlNum(this, Opciones);                                                                break;
            case "boolean"  : Control = new this.ControlBool(this, Opciones);                                                               break;
            case "function" : Control = new this.ControlFunc(this, Opciones);                                                               break;
            case "array"    : Control = new this.ControlSelect(this, Opciones);                                                             break;
            case "object"   : Control = new this.ControlSelect(this, Opciones);                                                             break;
            default         : console.log("ObjetoTest.Agregar : Tipo " + typeof(Opciones.Padre[Opciones.Variable]) + " no está soportado"); break;
        };
        this.Padre.Variables.push(Control);
        this.Variables.push(Control);
        
        Control.Modificable = function(Valor) {
            this.ControlContenedor.setAttribute("Modificable", Valor);
        };
        
        return this.Padre.Variables[this.Padre.Variables.lenght - 1];
    };
    /* 
        <div id='ObjetoTest'>
            <div id='ObjetoTest_Contenedor'>                    <--Asigno altura
                <div id='ObjetoTest_NombreLista'></div>
                <div id='ObjetoTest_Lista'>
                    <div id='ObjetoTest_Contenedor'>            <--Asigno altura  /  \ -->
                        <div id='ObjetoTest_NombreLista'></div> <--Inicio bucle    ||  -->
                        <div id='ObjetoTest_Lista'> ... </div>
                    </div>
                </div>
            </div>
        </div>
    */
    
    this.AgregarLista = function(Nombre) {
        var fLista = function(ControlPadre, Nombre, ObjetoTestPadre) {
            this.ControlPadre = ControlPadre;
            this.Padre = ObjetoTestPadre;
            this.Nombre = Nombre;
             
            this.Lista_MouseUp = function(e) { 
                this.Lista.Visible = !this.Lista.Visible;
//                localStorage["ObjetoTest_" + this.Nombre.replace(/\s+/g, '')] = this.Lista.Visible;
                
                this.Lista.ControlLista.setAttribute("abierto", this.Lista.Visible);
                this.ControlContenedor.setAttribute("lista", true);
                this.ControlContenedor.setAttribute("abierto", this.Lista.Visible);
                
                var AlturaInicial = parseInt(this.ControlContenedor.style.height) || 22;
                
                var Alto = 22;
                // Expandir lista
                if (this.Lista.Visible === true) {                   
                    var Altos = this.ControlContenedor.querySelectorAll(".ObjetoTest_Lista[abierto=true]");
                    for (var i = 0; i < Altos.length; i++) {
                        Alto += (Altos[i].children.length * 22);
/*                        if (Altos[i].parentNode === this.ControlContenedor) { 
                            Alto += Altos[i].offsetHeight;
                        }*/
                    }                            
                }
                this.ControlContenedor.style.height = Alto + "px";                    
                
                var Diferencia = Alto - AlturaInicial;
                
                var Nodo = this.ControlContenedor.parentNode;
                while (Nodo.className !== "ObjetoTest") {
                    if (Nodo.className === "ObjetoTest_Contenedor") {
                        Nodo.style.height = (parseInt(Nodo.style.height) + Diferencia) + "px";
                    }
                    Nodo = Nodo.parentNode;
                }
            };
            
            // Contenedor para los controles (ObjetoTest_Contenedor)
            this.ControlContenedor = this.ControlPadre.CrearControlContenedor();
            
            // Div con el nombre de la variable (ObjetoTest_Nombre)
            this.ControlTexto = this.ControlPadre.CrearControlTexto(this.ControlContenedor, Nombre, true);
            this.ControlTexto.style.cursor = "pointer";
            this.ControlTexto.addEventListener('mouseup', this.Lista_MouseUp.bind(this));
            // Creo la lista
            this.Lista = new ObjetoTest_Lista(this.ControlContenedor, this.Padre, false);            
            var lsNombre = "ObjetoTest_" + Nombre.replace(/\s+/g, '');
//            var Abierto = localStorage[lsNombre] || false;
            this.Lista.ControlLista.setAttribute("abierto", false);
//            this.Lista.ControlLista.setAttribute("abierto", false);
            
        };        
        
        var l = new fLista(this, Nombre, this.Padre);
        this.Padre.Listas.push(l);
        return l.Lista;
    };
    
    this.CrearControlContenedor = function(Modificable) {
        var ControlContenedor = document.createElement('div');
        ControlContenedor.className = "ObjetoTest_Contenedor";
        this.ControlLista.appendChild(ControlContenedor);
        if (typeof Modificable !== 'undefined') {
            ControlContenedor.setAttribute("Modificable", Modificable);
        }
        return ControlContenedor;
    };
    
    this.CrearControlTexto = function(Contenedor, Texto, Lista) {
        var ControlTexto = document.createElement('div');
        ControlTexto.className = (typeof Lista === 'undefined') ? "ObjetoTest_Nombre" : "ObjetoTest_NombreLista";
        ControlTexto.innerHTML = Texto;
        Contenedor.appendChild(ControlTexto);
        return ControlTexto;
    };
    
    this.CrearControlInputString = function(Contenedor, Valor) {
        var ControlInput = document.createElement('input');
        ControlInput.className = "ObjetoTest_InputString";
        ControlInput.setAttribute("type", "text");
        ControlInput.setAttribute("value", Valor);
        Contenedor.appendChild(ControlInput);        
        return ControlInput;
    };

    this.CrearControlInputNum = function(Contenedor, Valor, Min, Max) {
        var ControlInput = document.createElement('input');
        ControlInput.className = "ObjetoTest_InputNum";
        ControlInput.setAttribute("type", "number");
        ControlInput.setAttribute("value", Valor);
        ControlInput.setAttribute("min", Min);
        ControlInput.setAttribute("max", Max);
        ControlInput.setAttribute("step", (Max - Min) / 20);
        Contenedor.appendChild(ControlInput);        
        return ControlInput;
    };
    
    this.CrearControlBarra = function(Contenedor, Valor, Min, Max) {
        var ControlBarra = document.createElement('div');
        ControlBarra.className = "ObjetoTest_Barra";
        ControlBarra.setAttribute("min", parseFloat(Min).toFixed(2));
        ControlBarra.setAttribute("max", parseFloat(Max).toFixed(2));
        ControlBarra.setAttribute("valor", Valor);
        ControlBarra.innerHTML = "<div class='ObjetoTest_Barra_Valor' style='width:" + ((Valor - Min) / (Max - Min)) * 100 + "%'></div>";
        Contenedor.appendChild(ControlBarra);        
        return ControlBarra;        
    };
    
    this.CrearControlBoton = function(Contenedor) {
        var ControlBoton = document.createElement('div');
        ControlBoton.className = "ObjetoTest_Boton";  
        ControlBoton.innerHTML = "Ejecutar";
        Contenedor.appendChild(ControlBoton);     
        return ControlBoton;
    };

    this.CrearControlBool = function(Contenedor, Valor, Texto) {
        var ControlBool = document.createElement('div');
        ControlBool.className = "ObjetoTest_Bool";
        ControlBool.setAttribute("marcado", Valor);
        ControlBool.innerHTML = Texto;
        Contenedor.appendChild(ControlBool);     
        return ControlBool;
    };
    
    this.CrearControlSelect = function(Contenedor, Valores, PorDefecto) {
        var ControlSelect = document.createElement('select');
        ControlSelect.className = "ObjetoTest_Select";
//        ControlBool.setAttribute("marcado", Valor);
        var Selected = "";
        if (Valores instanceof Array) {
            for (var i = 0; i < Valores.length; i++) {
                if (PorDefecto === Valores[i]) { Selected = " selected='selected'"; }
                else                           { Selected = ""; }
                ControlSelect.innerHTML = ControlSelect.innerHTML + "<option value='" + Valores[i] + "'" + Selected +">" + Valores[i] + "</option>";
            }
        }
        else {
            for (var Indice in Valores) {
                if (PorDefecto === Valores[Indice]) { Selected = " selected='selected'"; }
                else                                { Selected = ""; }
                ControlSelect.innerHTML = ControlSelect.innerHTML + "<option value='" + Valores[Indice] + "'" + Selected +">" + Indice + "</option>";
            }            
        }
        Contenedor.appendChild(ControlSelect);     
        return ControlSelect;        
    };
    
    this.ControlStr = function(Padre, Opciones) {
        this.Opciones   = Opciones;
        this.Padre      = Padre;
        this.Foco       = false;
        
        this.Input_Change = function(e) { 
            this.Opciones.Padre[this.Opciones.Variable] = this.ControlInputString.value;
            this.Opciones.Actualizar(this.Opciones.Padre[this.Opciones.Variable]); 
        };
        
        // Contenedor para los controles (ObjetoTest_Contenedor)
        this.ControlContenedor = this.Padre.CrearControlContenedor(this.Opciones.Modificable);
        // Div con el nombre de la variable (ObjetoTest_Nombre)
        this.ControlTexto = this.Padre.CrearControlTexto(this.ControlContenedor, this.Opciones.Nombre);
        // Input box para el string (ObjetoTest_InputString)
        this.ControlInputString = this.Padre.CrearControlInputString(this.ControlContenedor, this.Opciones.Padre[this.Opciones.Variable]);
        this.ControlInputString.addEventListener('change', this.Input_Change.bind(this));
        this.ControlInputString.addEventListener('focus', function() { this.Foco = true; }.bind(this));
        this.ControlInputString.addEventListener('blur', function() { this.Foco = false; }.bind(this));
        
        this.Actualizar = function() {
            if (this.Foco === false) {
                this.ControlInputString.setAttribute("value", this.Opciones.Padre[this.Opciones.Variable]);
            }
        };
    }; 
    
    this.ControlNum = function(Padre, Opciones) {
        this.Opciones   = Opciones;
        this.Padre      = Padre; 
        this.Foco       = false; // Mouse presionado en la barra,
        this.Foco2      = false; // foco del input box
        // Control para las opciones Min/Max
        if (typeof this.Opciones.Min === "undefined") { this.Opciones.Min = 0.0; }
        if (typeof this.Opciones.Max === "undefined") { this.Opciones.Max = 1.0; }
        
        this.AsignarMousePresionado = function() {
            if (this.ControlContenedor.getAttribute("modificable") === "false") { return false; }
            this.Foco = true;
            var OT = this.Padre;
            while (OT.Padre) {
                OT = OT.Padre;
            }
            OT.MousePresionado = this;
            return true;
        };
        
        this.Barra_MouseDown = function(e) { if (this.AsignarMousePresionado() === true) { this.Barra_MouseMove(e); } };
        
        this.Barra_MouseMove = function(e) { 
            // offsetX puede ser mas grande que el tamaño del control, o mas pequeño que 0
            var X = e.offsetX;
            if (X < 0) { X = 0; }
            if (X > this.ControlBarra.offsetWidth) { X = this.ControlBarra.offsetWidth; }
            this.ControlBarra.childNodes[0].style.width = ((X / this.ControlBarra.offsetWidth ) * 100) + "%";
            this.Opciones.Padre[this.Opciones.Variable] = ((this.Opciones.Max - this.Opciones.Min) * (X / this.ControlBarra.offsetWidth) + this.Opciones.Min);
            this.ControlInputNum.setAttribute("value", parseFloat(this.Opciones.Padre[this.Opciones.Variable]).toFixed(3));
            this.Opciones.Actualizar(Opciones.Padre[Opciones.Variable]); 
        };
        
        this.Input_Change = function(e) { 
            this.Opciones.Padre[this.Opciones.Variable] = parseFloat(this.ControlInputNum.value);
            this.ControlBarra.childNodes[0].style.width = ((this.Opciones.Padre[this.Opciones.Variable] - this.Opciones.Min) / (this.Opciones.Max - this.Opciones.Min)) * 100 + "%";
            this.Opciones.Actualizar(this.Opciones.Padre[this.Opciones.Variable]); 
        };            
        
        // Contenedor para los controles (ObjetoTest_Contenedor)
        this.ControlContenedor = this.Padre.CrearControlContenedor(this.Opciones.Modificable);
        // Div con el nombre de la variable (ObjetoTest_Nombre)
        this.ControlTexto = this.Padre.CrearControlTexto(this.ControlContenedor, this.Opciones.Nombre);
        // Div que simula una barra de desplazamiento (ObjetoTest_Barra)
        this.ControlBarra = this.Padre.CrearControlBarra(this.ControlContenedor, this.Opciones.Padre[this.Opciones.Variable], this.Opciones.Min, this.Opciones.Max);        
        this.ControlBarra.addEventListener('mousedown', this.Barra_MouseDown.bind(this));
        
        // Input box para el string (ObjetoTest_InputNum)
        this.ControlInputNum = this.Padre.CrearControlInputNum(this.ControlContenedor, this.Opciones.Padre[this.Opciones.Variable], this.Opciones.Min, this.Opciones.Max);
        this.ControlInputNum.addEventListener('change', this.Input_Change.bind(this));
        this.ControlInputNum.addEventListener('focus', function() { this.Foco2 = true; }.bind(this));
        this.ControlInputNum.addEventListener('blur', function() { this.Foco2 = false; }.bind(this));
        
        this.Actualizar = function() {
            if (this.Foco === false && this.Foco2 === false) {
                // Porcentaje de la barra
                this.ControlBarra.childNodes[0].style.width = ((Opciones.Padre[Opciones.Variable] - this.Opciones.Min) / (this.Opciones.Max - this.Opciones.Min)) * 100 + "%";
                // Valor del input box
                this.ControlInputNum.setAttribute("value", parseFloat(Opciones.Padre[Opciones.Variable]).toFixed(3));
            }
        };
    };
    
    this.ControlBool = function(Padre, Opciones) {
        this.Opciones   = Opciones;
        this.Padre      = Padre;
         
        if (typeof this.Opciones.TextoTrue === "undefined")  { this.Opciones.TextoTrue  = "TRUE";  }
        if (typeof this.Opciones.TextoFalse === "undefined") { this.Opciones.TextoFalse = "FALSE"; }
        
        this.TrueFalse_MouseUp = function(e)   { 
            this.Opciones.Padre[this.Opciones.Variable] = !this.Opciones.Padre[this.Opciones.Variable];
            this.ControlBoolTrue.setAttribute("marcado", this.Opciones.Padre[this.Opciones.Variable]);
            this.ControlBoolFalse.setAttribute("marcado", !this.Opciones.Padre[this.Opciones.Variable]);
            this.Opciones.Actualizar(this.Opciones.Padre[this.Opciones.Variable]); 
        };        
        
        // Contenedor para los controles (ObjetoTest_Contenedor)
        this.ControlContenedor = this.Padre.CrearControlContenedor(this.Opciones.Modificable);
        // Div con el nombre de la variable (ObjetoTest_Nombre)
        this.ControlTexto = this.Padre.CrearControlTexto(this.ControlContenedor, this.Opciones.Nombre);
        // Boton para la opción true (ObjetoTest_Bool)
        this.ControlBoolTrue = this.Padre.CrearControlBool(this.ControlContenedor, this.Opciones.Padre[this.Opciones.Variable], this.Opciones.TextoTrue);
        this.ControlBoolTrue.addEventListener('mouseup', this.TrueFalse_MouseUp.bind(this));        
        // Boton para la opción false (ObjetoTest_Bool)
        this.ControlBoolFalse = this.Padre.CrearControlBool(this.ControlContenedor, !this.Opciones.Padre[this.Opciones.Variable], this.Opciones.TextoFalse);
        this.ControlBoolFalse.addEventListener('mouseup', this.TrueFalse_MouseUp.bind(this));        

        this.Actualizar = function() {
            this.ControlBoolTrue.setAttribute("marcado", this.Opciones.Padre[this.Opciones.Variable]);
            this.ControlBoolFalse.setAttribute("marcado", !this.Opciones.Padre[this.Opciones.Variable]);
        };
    };
    
    
    this.ControlFunc = function(Padre, Opciones) {
        this.Opciones   = Opciones;
        this.Padre      = Padre;
        
        this.Boton_MouseUp = function() {
            this.Opciones.Padre[this.Opciones.Variable]();
        };
        
        // Contenedor para los controles (ObjetoTest_Contenedor)
        this.ControlContenedor = this.Padre.CrearControlContenedor();
        // Div con el nombre de la variable (ObjetoTest_Nombre)
        this.ControlTexto = this.Padre.CrearControlTexto(this.ControlContenedor, this.Opciones.Nombre);
        // Boton para ejecutar la función   (ObjetoTest_Boton)
        this.ControlBoton = this.Padre.CrearControlBoton(this.ControlContenedor);
        this.ControlBoton.addEventListener('mouseup', this.Boton_MouseUp.bind(this));
        
        this.Actualizar = function() { };
    };    
    
    
    this.ControlSelect = function(Padre, Opciones) {
        this.Opciones   = Opciones;
        this.Padre      = Padre;
        this.Opciones.PorDefecto = this.Opciones.PorDefecto || this.Opciones.Padre[this.Opciones.Variable][0];
        //if (typeof  === "undefined") { this.Opciones.Min = 0.0; }
        
        this.Select_Change = function() {
            this.Opciones.Actualizar(this.ControlSelect.value); 
        };

        // Contenedor para los controles (ObjetoTest_Contenedor)
        this.ControlContenedor = this.Padre.CrearControlContenedor();
        // Div con el nombre de la variable (ObjetoTest_Nombre)
        this.ControlTexto = this.Padre.CrearControlTexto(this.ControlContenedor, this.Opciones.Nombre);
        // Control que contiene el combobox con las opciones
        this.ControlSelect = this.Padre.CrearControlSelect(this.ControlContenedor, this.Opciones.Padre[this.Opciones.Variable], this.Opciones.PorDefecto);
        this.ControlSelect.addEventListener('change', this.Select_Change.bind(this));
        
        this.Actualizar = function() { };
    };
};