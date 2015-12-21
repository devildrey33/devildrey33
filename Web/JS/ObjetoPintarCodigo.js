/* Objeto PintarCodigo creado el 26/11/2015 para devildrey33.es 
 * Última modificación el 28/11/2015 */
$PintarCodigo = new function() {
    // Etiqueta línea actual
    this.CodigoDivC         = [];
    // Temporizador para el click de la línea
    this.CodigoTemporizador = 0;
    
    
    /* Función que enlaza las etiquetas 'linea' con el javascript */
    this.EnlazarEtiquetas = function() {
        console.log("PintarCodigo.Iniciar");
        // Evento click para la etiqueta <linea>
        $("linea").off("click").on("click", function(e) {            
            $PintarCodigo.MostrarLineaCodigo($(this).attr("cid"), $(this).attr("l"));
        });
        // Evento mousehover para la etiqueta <linea>
        $("linea").off("mouseover").on("mouseover", function(e) {
            Lineas = $(this).attr("l").split(",");
            console.log("$PintarCodigo.EnlazarEtiquetas > linea:mousehover", Lineas);
            for (var i = 0; i < Lineas.length; i++) {
                $("#" + $(this).attr("cid") + " > .Codigo_PRECodigo > div[l=" + Lineas[i] + "]").attr({ "hover" : "true" });
            }
        });
        // Evento mouseout para la etiqueta <linea>
        $("linea").off("mouseout").on("mouseout", function(e) {
            Lineas = $(this).attr("l").split(",");
            console.log("$PintarCodigo.EnlazarEtiquetas > linea:mouseout", Lineas);
            for (var i = 0; i < Lineas.length; i++) {
                $("#" + $(this).attr("cid") + " > .Codigo_PRECodigo > div[l=" + Lineas[i] + "]").removeAttr("hover");
            }
        });        
    };
    
    
    /* Función que resalta la línea especificada en el marco de código 
       Requiere la ID del marco del código, y el número de Línea       
     *  NOTA : si se han especificado varias líneas solo se utilizará la primera. */
    this.MostrarLineaCodigo = function(ID, Lineas) {
        console.log("PintarCodigo.MostrarLineaCodigo", ID, Lineas);        
        Linea = Lineas.split(',');
        // Si hay un temporizador activado, lo elimino y elimino el atributo click de la línea
        if (this.CodigoTemporizador != 0) {  
            clearTimeout(this.CodigoTemporizador); 
            this.CodigoDivC.removeAttr("click"); 
            this.CodigoTemporizador = 0;  
        }
        this.CodigoDivC = $("#" + ID + " > .Codigo_PRECodigo > div[l=" + Linea[0] + "]");
        this.CodigoDivC.attr({ "click" : "true" });
        // Creo un nuevo temporizador para resaltar en verde la línea
        this.CodigoTemporizador = setTimeout(function() { 
            $PintarCodigo.CodigoDivC.removeAttr("click"); 
            $PintarCodigo.CodigoTemporizador = 0;
        }, 900);
        
        // Movemos el scroll a la posición de la linea si no está visible
        if (this.CodigoDivC.offset()) {
            Pos          = this.CodigoDivC.offset().top - 10;
            Tam          = this.CodigoDivC.height() + 20; // 20 pixels mas de margen
            PosScroll    = $("body").scrollTop() || $("html").scrollTop();                        
            WindowHeight = $(window).height();
            console.log("PintarCodigo.MostrarLineaCodigo (reposicionando)", Pos, PosScroll, Tam, WindowHeight);            
            if (Pos > PosScroll && Pos < PosScroll + (WindowHeight - Tam)) {
                   // El scroll está bien posicionado
            }
            else { // Reposicionamos el scroll                
                if (Pos > PosScroll) {  $("body, html").stop().animate({ scrollTop : Pos - (WindowHeight - Tam) }, 200);  } // Por debajo de la etiqueta linea                
                else                 {  $("body, html").stop().animate({ scrollTop : Pos }, 200);                         } // Por encima de la etiqueta linea
            }            
        }        
    };
    
};
