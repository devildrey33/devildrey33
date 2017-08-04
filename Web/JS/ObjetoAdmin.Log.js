/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */





    /********/
    /* Log2 */ 
    /********/
    
    /* TODO :
     *  Al expandir una fila s'ha de posar un buto per mostrar totes les dades (inclus si no están marcades) 
     *  Butons per tancar les divs expandits 
     *  Duplicar els butons de les dates i posar els segons a sota de tot de la taula 
     *  Començar a pensar en el buscador de texte... s'ha de tenir en compte que ara tambè hi han pagines per cada dia que poden estar ocultes 
     *  Crear stats dels navegadors i els sistemas operatius */
$Admin.Log = new function() {
    
    this.IpAdmin = "0.0.0.0";
    
    this.ArchivoChange = function() {
        var Combo = document.getElementById("Log_ArchivoActual");
        
        this.CargarArchivo(Combo.options[Combo.selectedIndex].innerHTML);
    };
    
    
    this.CargarArchivo = function(Archivo) {
        $Base.Cargando("TRUE");
        $("#Log_Lista").html("").css({ display : "none" });
        $("#Log_Stats").html("");
        $("#MarcoNavegacion").css({ cursor : 'progress' });
        $("#Log_Cargando").attr("visible", true);
        $("#Log_CargandoF1").css({ color : "#fff" });
        nAjax = $.post($Base.Raiz + "cmd/ObtenerLog.cmd", { "Archivo" : Archivo }).done(function(data) {
            Datos = JSON.parse(data);
//            $Base.MostrarMensaje(Datos["HTML"]);
            document.getElementById("Log_Datos").value = Datos["DatosLog"];
            $("#ErroresPHP_Info").html(Datos["ErroresPHP"]);
            if (Datos["ErroresPHP"] !== "") { $Base.MostrarErroresPHP(); }            
            $("#Log_CargandoF1").css({ color : "#999" });
            $("#Log_CargandoF2").css({ color : "#FFF" });
            setTimeout(function() { $Admin.Log.Actualizar() }, 500);
            
        }).fail(function(jqXHR, textStatus, tError) { 
            console.log("Admin.Log.CargarArchivos Error ajax", jqXHR, textStatus, tError);
            $Base.MostrarMensaje("Error al cargar el archivo de log...");
            $Base.Cargando("FALSE");
        });
        
    };

    this.Actualizar = function() {
        // Fase 1 : llegir el log linea a linea i fer un array ordenat per ips
        
        // Separo el archivo de log en lineas para poder obtener la información de cada una de ellas.
        var Texto = document.getElementById("Log_Datos").value;
        this.Lineas = Texto.split("\n");
        // Borro la lista de ips (si existe)
        this.Ips = [];
        this.TotalTipos = { 
            "Ataques"      : 0,
            "Advertencias" : 0,
            "Errores404"   : 0,
            "Zips"         : 0,
            "Cmd"          : 0,
            "Documentos"   : 0,
            "CSS"          : 0,
            "JS"           : 0,
            "Imagenes"     : 0,
            "Otros"        : 0
        };
        
        // Extraigo los datos de cada linea y los ordeno por ip
        for (var i = 0; i < this.Lineas.length; i++) {
            this.AgregarLinea(this.Lineas[i], i);
        }
        
        // Actualizo los labels con los totates de los tipos
        /* Cambio los labels de los checkbox y agrego los totales de peticiones */
        $("#LabelAtaques span").html(       "Ataques ("        + this.TotalTipos["Ataques"]      + ")");
        $("#LabelAdvertencias span").html(  "Advertencias ("   + this.TotalTipos["Advertencias"] + ")");
        $("#LabelErrores404 span").html(    "Errores 404 ("    + this.TotalTipos["Errores404"]   + ")");
        $("#LabelZips span").html(          "Zips ("           + this.TotalTipos["Zips"]         + ")");
        $("#LabelErrores404 span").html(    "Errores 404 ("    + this.TotalTipos["Errores404"]   + ")");
        $("#LabelCmd span").html(           "Ajax ("           + this.TotalTipos["Cmd"]          + ")");
        $("#LabelDocumentos span").html(    "Documentos ("     + this.TotalTipos["Documentos"]   + ")");
        $("#LabelCSS span").html(           "CSS ("            + this.TotalTipos["CSS"]          + ")");
        $("#LabelJS span").html(            "JavaScript ("     + this.TotalTipos["JS"]           + ")");
        $("#LabelImagenes span").html(      "Imagenes ("       + this.TotalTipos["Imagenes"]     + ")");
        $("#LabelOtros span").html(         "Otros ("          + this.TotalTipos["Otros"]        + ")");        
        
        var TotalNavegadores = 0;
        var TotalBots = 0;
        var TotalDesconocido = 0;
        var Checks = this.ObtenerChecks();

        // Si hay ips
        if (this.Ips.length > 0) {
            // Enumero por cada ip los navegadores/bots y su sistema operativo 
            for (var i = 0; i < this.Ips.length; i++) {
                var Info = this.ObtenerNavegador2(this.Ips[i]["Ua"][0]);            
                this.Ips[i]["Info"] = Info;            
                switch (Info["Tipo"]) {
                    case 0 : TotalNavegadores ++;   break;
                    case 1 : TotalBots ++;          break;
                    case 2 : TotalDesconocido ++;   break;
                }
                
                // Creo una lista ordenada de los datos mas destacados
                var Destacados = [];
                for (var e = 0; e < this.Ips[i]["Datos"].length; e++) {
//                    if (Checks[this.Ips[i]["Datos"][e]["Relevancia"]] === true) {
                        Destacados.push(this.Ips[i]["Datos"][e]); 
//                    }
                }

                // Si hay datos destacados
                if (Destacados.length > 0) {                
                    // Ordenar el array de destacados por el tipo de URL
                    Destacados.sort(function(a, b) { return (b["Relevancia"] - a["Relevancia"]); });
                    this.Ips[i]["Destacados"] = Destacados;
                }                
            }
        }                

        // Modifico los totales de los checkbox
        $("#LabelNavegadores span").html(	"Navegadores (" + TotalNavegadores  + ")");
        $("#LabelBots span").html(		"Bots ("        + TotalBots         + ")");
        $("#LabelDesconocido span").html(	"Desconocido (" + TotalDesconocido  + ")");
        
        // Colores de los divs del paso actual de carga
        $("#Log_CargandoF2").css({ color : "#999" });
        $("#Log_CargandoF3").css({ color : "#FFF" });
        
        
        setTimeout( function() { $Admin.Log.CrearStats(); }, 500);        
    };
    
    this.ParsearRespuesta = function(Respuesta) {        
        R = Respuesta.split(" ");
        Str = "";
        switch (R[0]) {
            case "200" : Str = "<span class='Log_Entrada_Documento'>Ok</span>"; 			break;
            case "301" : Str = "<span class='Log_Entrada_Advertencia'>Moved Permanently</span>"; 	break;
            case "302" : Str = "<span class='Log_Entrada_Documento'>Found</span>"; 			break;
            case "304" : Str = "<span class='Log_Entrada_Documento'>Not Modified</span>"; 		break;
            case "403" : Str = "<span class='Log_Entrada_Ataque'>Forbidden</span>";                     break;
            case "404" : Str = "<span class='Log_Entrada_Error'>Not Found</span>";                      break;
        }
        return Str;
    };
    
    // relevancia de la url definida por colores del 9 al 1
    this.ColorRelevancia = function(Relevancia, Ret = 0) {
        if (Ret === 404) return "purple";
        switch (Relevancia) {
            case 9 : return "Log_Entrada_Ataque";      break;// Ataque
            case 8 : return "Log_Entrada_Advertencia"; break;// Advertencia
            case 7 : return "Log_Entrada_Error";       break;// error 404
            case 6 : return "Log_Entrada_Zip";         break;// zips
            case 5 : return "Log_Entrada_Cmd";         break;// zips
            case 4 : return "Log_Entrada_Documento";   break;// documento
            case 3 : return "Log_Entrada_CSS";         break;// css
            case 2 : return "Log_Entrada_JS";          break;// js
            case 1 : return "Log_Entrada_Imagen";      break;// imagen
            case 0 : return "Log_Entrada_Otros";       break;// normal
        }
        return "black";
    };
    
    this.ObtenerChecks = function() {
        return { 
            9 : document.getElementById('ChAtaques').checked,
            8 : document.getElementById('ChAdvertencias').checked,
            7 : document.getElementById('ChErrores404').checked,
            6 : document.getElementById('ChZip').checked,
            5 : document.getElementById('ChCmd').checked,
            4 : document.getElementById('ChDocumentos').checked,
            3 : document.getElementById('ChCSS').checked,
            2 : document.getElementById('ChJS').checked,
            1 : document.getElementById('ChImagenes').checked,
            0 : document.getElementById('ChOtros').checked
        };
    };
    
    this.CrearTablaDatos = function() {        
        var Pagina = -1;
        var Filas = "";
        var Fecha = "";
        var Checks = this.ObtenerChecks();
        var Botones = "<div class='Log_ListaBotones'>";
                            
        for (var i = 0; i < this.Ips.length; i++) {
            // Si hay datos destacados
            if (this.Ips[i]["Destacados"].length > 0) {                
                // Nueva página
                if (Fecha !== this.Ips[i]["Fecha"]) {
                    Fecha = this.Ips[i]["Fecha"];                    
                    Filas += "</div><div class='Log_Lista' id='Log_ListaP" + (++Pagina) + "'" + ((Pagina === 0) ? " style='display:block'" : "") + ">";
                    Botones += "<input class='Log_ListaBoton' id='Log_ListaBotonaa" + Pagina + "' type='radio' name='Log_ListaBoton'" + ((Pagina === 0) ? " checked='checked'" : "") + ">" +
                               "<label for='Log_ListaBoton" + Pagina + "'>" + Fecha + "</label>";
                               
                }
                
                
                // Color de la url
                var ColorNavegador = "black";
                var ColorPeticiones = " style='color:#444'";

                // Color del navegador
                switch (this.Ips[i]["Info"]["Tipo"]) {
                    case 0 : ColorNavegador = 'Log_Cliente_Navegador';   break;
                    case 1 : ColorNavegador = 'Log_Cliente_Bot';         break;
                    case 2 : ColorNavegador = 'Log_Cliente_Desconocido'; break;
                }            
                // Color para el número de peticiones
                if (this.Ips[i]["Datos"].length > 200) { ColorPeticiones = " style='color:orange'"; }
                if (this.Ips[i]["Datos"].length > 500) { ColorPeticiones = " style='color:red'";    }

                // Color identificativo para los ataques
                var Ataque = "";
                if (this.Ips[i]["Destacados"][0]["Relevancia"] === 9) {
                    Ataque = " ataque='true'";
                }
                if (this.IpAdmin === this.Ips[i]["Ip"]) {
                    Ataque = " ataque='admin'";
                }
                
                var Destacados = -1;
                for (var e = 0; e < this.Ips[i]["Destacados"].length; e++) {
                    if (Checks[this.Ips[i]["Destacados"][e]["Relevancia"]] === true) {
                        Destacados = e;
                        break;
                    }
                }

                var ColorUrl = (Destacados > -1) ? this.ColorRelevancia(this.Ips[i]["Destacados"][Destacados]["Relevancia"]) : "Log_Entrada_Otros";
                
                // La cabecera lleva la IP, la url mas relevante, el tiempo de inicio y final, numero de requests, y el user agent simplificado (SO, NAVEGADOR) o Tipo de BOT
                Filas +=  "<div class='EntradaLog' id='EntradaLog" + i + "' style='display:" + ((Destacados > -1) ? "table" : 'none') + "'>" + // Contenedor para una Ip del log con todas sus peticiones
                        "<div class='EntradaLog_TablaFila'" + Ataque + ">" +
                            "<div class='EntradaLog_Fila' tipo='" + this.Ips[i]["Info"]["Tipo"] + "'>" +
                                "<div class='EntradaLog_Ip'>" + this.Ips[i]["Ip"] + "</div>" +
                                "<div class='EntradaLog_Url " + ColorUrl + "'>" + ((Destacados > -1) ? this.Ips[i]["Destacados"][Destacados]["Url"] : "") + "</div>" +
                                "<div class='EntradaLog_Peticiones'" + ColorPeticiones + ">" + this.Ips[i]["Destacados"].length + "</div>" + // Peticiones
                                "<div class='EntradaLog_TiempoInicio'>" + this.Ips[i]["Datos"][0]["Hora"] + "</div>" +
                                "<div class='EntradaLog_TiempoFin'>" + this.Ips[i]["Datos"][this.Ips[i]["Datos"].length - 1]["Hora"] + "</div>" +
                                "<div class='EntradaLog_InfoClienteWeb " + ColorNavegador + "'>" + this.Ips[i]["Info"]["NombreCorto"] + " " + this.Ips[i]["Info"]["PlataformaCorto"] + "</div>" +
                            "</div>" +
                        "</div>" +
                        "<div class='EntradaLog_Datos'>" +
                        "</div>" +
                    "</div>";
            }
        }
        Filas += "</div>";
        Botones += "</div>";
        $("#Log_Lista").html(Botones + Filas);
        
        
        $(".EntradaLog_Fila").off("click").on("click", function(e) {             
            var parent = e.target;
            while (parent.id === "") {
                parent = parent.parentNode;
            }
            
            $Admin.Log.ExpandirIp(parent.id);
        });
        
        $(".Log_ListaBoton").on("change", function(e) {
            var Id = e.target.id.slice(14);
            $(".Log_Lista").css({ display : "none" });
            $("#Log_ListaP" + Id).css({ display : "block" });
        });
        
        $("#Log_CargandoF4").css({ color : "#999" });
        $("#Log_Cargando").attr("visible", false);
        $("#MarcoNavegacion").css({ cursor : 'auto' });
        $("#Log_Lista").css({ display : "block" });

        $Base.Cargando("FALSE");        
    };
    
    this.CrearStats = function() {
        this.ArrayDocumentos = [];
        this.ArrayErrores    = [];
        this.ArrayImagenes   = [];
        this.ArrayObjetos    = [];
        for (var i = 0; i < this.Ips.length; i++) {
            for (var e = 0; e < this.Ips[i]["Datos"].length; e++) {
                switch (this.Ips[i]["Datos"][e]["Relevancia"]) {
                    case 2  : this.AgregarImagen(this.Ips[i]["Datos"][e]["Url"]);                                           break;
                    case 4  : this.AgregarDocumento(this.Ips[i]["Datos"][e]["Url"]);                                        break;
                    case 7  : this.AgregarError(this.Ips[i]["Datos"][e]["Url"]);                                            break;
                    default : this.AgregarObjeto(this.Ips[i]["Datos"][e]["Url"], this.Ips[i]["Datos"][e]["Relevancia"]);    break;
                }
            }
        }        
        
        this.ArrayDocumentos.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        this.ArrayErrores.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        this.ArrayImagenes.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        this.ArrayObjetos.sort(function(a, b) { return (b["Contador"] - a["Contador"]); });
        
        var TotalEntradas = 20;
        
        // Imprimo la tabla de los documentos
        var Codigo = "<div class='Log_Stat'>" + 
            "<h2>Documentos más solicitados</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.ArrayDocumentos.length) { break; }
            Codigo += "<tr>" + 
                        "<td style='color:green' title='" + this.ArrayDocumentos[i]["Url"] + "'>" + this.ArrayDocumentos[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='background-color:green; width:" + (300 * this.ArrayDocumentos[i]["Contador"] / this.ArrayDocumentos[0]["Contador"]) + "px'>" + this.ArrayDocumentos[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";

        // Imprimo la tabla de los Errores
        Codigo += "<div class='Log_Stat'>" + 
            "<h2>Documentos de Error</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.ArrayErrores.length) { break; }
            Codigo += "<tr>" + 
                        "<td style='color:purple' title='" + this.ArrayErrores[i]["Url"] + "'>" + this.ArrayErrores[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='background-color:purple; width:" + (300 * this.ArrayErrores[i]["Contador"] / this.ArrayErrores[0]["Contador"]) + "px'>" +this.ArrayErrores[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";
        
        // Imprimo la tabla de las imagenes
        Codigo += "<div class='Log_Stat'>" + 
            "<h2>Imagenes más solicitadas</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.ArrayImagenes.length) { break; }
            Codigo += "<tr>" + 
                        "<td style='color:grey' title='" + this.ArrayImagenes[i]["Url"] + "'>" + this.ArrayImagenes[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='background-color:grey; width:" + (300 * this.ArrayImagenes[i]["Contador"] / this.ArrayImagenes[0]["Contador"]) + "px'>" +this.ArrayImagenes[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";
        
        // Imprimo la tabla de los Objetos
        Codigo += "<div class='Log_Stat'>" + 
            "<h2>Objetos más solicitados</h2>" +
            "<div class='Log_StatsMarco'>" +
                "<table class='Log_StatsTabla'>";
//        var Uno = this.Log_ArrayDocumentos[this.Log_ArrayDocumentos.length - 1]["Contador"] / 100;
        for (var i = 0; i < TotalEntradas; i++) {
            if (i === this.ArrayObjetos.length) { break; }
            Codigo += "<tr>" + 
                        "<td class='" + this.ColorRelevancia(this.ArrayObjetos[i]["Tipo"]) + "' title='" + this.ArrayObjetos[i]["Url"] + "'>" + this.ArrayObjetos[i]["Url"] + "</td>" + 
                        "<td>" + "<span class='Log_StatBarra' style='width:" + (300 * this.ArrayObjetos[i]["Contador"] / this.ArrayObjetos[0]["Contador"]) + "px'>" +this.ArrayObjetos[i]["Contador"] +"</span></td>" + 
                    "</tr>";
        }
        Codigo += "</table></div></div>";
        // Asigno el código de los stats al div contenedor       
        document.getElementById("Log_Stats").innerHTML = Codigo;
        
        // Cambio los tamaños de las barras acorde a su porcentaje para que se vea la transición del ancho
        
        // Siguiente fase de carga
        $("#Log_CargandoF3").css({ color : "#999" });
        $("#Log_CargandoF4").css({ color : "#FFF" });
        setTimeout(function() { $Admin.Log.CrearTablaDatos(); }, 500);
        
    };
    
    this.AgregarDocumento = function(Url) {
        for (var i = 0; i < this.ArrayDocumentos.length; i++) {
            if (this.ArrayDocumentos[i]["Url"] === Url) {
                this.ArrayDocumentos[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1 };
        this.ArrayDocumentos.push(Ret);
    };
    
    this.AgregarError = function(Url) {
        for (var i = 0; i < this.ArrayErrores.length; i++) {
            if (this.ArrayErrores[i]["Url"] === Url) {
                this.ArrayErrores[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1 };
        this.ArrayErrores.push(Ret);        
    };
    
    this.AgregarImagen = function(Url) {
        for (var i = 0; i < this.ArrayImagenes.length; i++) {
            if (this.ArrayImagenes[i]["Url"] === Url) {
                this.ArrayImagenes[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1 };
        this.ArrayImagenes.push(Ret);        
    };
    
    this.AgregarObjeto = function(Url, Tipo) {
        for (var i = 0; i < this.ArrayObjetos.length; i++) {
            if (this.ArrayObjetos[i]["Url"] === Url) {
                this.ArrayObjetos[i]["Contador"] ++;
                return;
            }
        }
        var Ret = { "Url" : Url, "Contador" : 1, "Tipo" : Tipo };
        this.ArrayObjetos.push(Ret);        
    };
    
    this.ExpandirIp = function(Id, MostrarTodo = false) {
        var PosIp = Id.slice(10); // EntradaLog ocupa 10 caracteres (me quedo solo con el número)        
        if (this.Ips[PosIp]["Abierto"] === false) {
            var Checks = this.ObtenerChecks();
            
            $("#" + Id).attr("abierto", true);
//            var PosIp = Id.slice(10); // EntradaLog ocupa 10 caracteres (me quedo solo con el número)

            var ColorNavegador = "black";

            // Color del navegador
            switch (this.Ips[PosIp]["Info"]["Tipo"]) {
                case 0 : ColorNavegador = 'Log_Cliente_Navegador';   break;
                case 1 : ColorNavegador = 'Log_Cliente_Bot';         break;
                case 2 : ColorNavegador = 'Log_Cliente_Desconocido'; break;
            }            


            // Codigo para el titulo y la tabla con la información básica
            var Codigo = "<h1 class='Log_Titulo1'>" + this.Ips[PosIp]["Ip"] + "</h1>" +
            "<table class='Log_TituloTabla'>" +
                "<tr>" + "<td>Sistema</td>"         + "<td>:</td>" + "<td class='" + ColorNavegador + "'>" + this.Ips[PosIp]["Info"]["Plataforma"]                                     + "</td>" + "</tr>" +
                "<tr>" + "<td>Navegador</td>"       + "<td>:</td>" + "<td class='" + ColorNavegador + "'>" + this.Ips[PosIp]["Info"]["Nombre"]                                         + "</td>" + "</tr>" +
                "<tr>" + "<td>Fecha</td>"           + "<td>:</td>" + "<td>" + this.Ips[PosIp]["Fecha"]                                                  + "</td>" + "</tr>" +
                "<tr>" + "<td>Conectado desde</td>" + "<td>:</td>" + "<td>" + this.Ips[PosIp]["Datos"][0]["Hora"]                                       + "</td>" + "</tr>" +
                "<tr>" + "<td>Conectado hasta</td>" + "<td>:</td>" + "<td>" + this.Ips[PosIp]["Datos"][this.Ips[PosIp]["Datos"].length - 1]["Hora"] + "</td>" + "</tr>" +            
                "<tr>" + "<td>User Agent</td>"      + "<td>:</td>" + "<td>";
                for (var i = 0; i < this.Ips[PosIp]["Ua"].length; i++) {
                    Codigo += "<pre class='Log_UserAgent' title='" + this.Ips[PosIp]["Ua"][i] + "'>" + this.Ips[PosIp]["Ua"][i] + "</pre>";
                }
            Codigo += "</td>" + "</tr>" + "</table>";
            
            // Imprimo todos los datos de esta ip
            Codigo += "<div class='Log_TablaEntrada'>";
            Codigo +=   "<div class='Log_TablaEntradaFila' style='background-color:#222; color:#FFF !important; font-weight:bold;'>" +
                            "<div>Hora</div>" +
                            "<div>Tipo</div>" +
                            "<div>Url</div>" +
                            "<div></div>" +
                            "<div>Salida</div>" +
                            "<div style='color:white'>Tamaño</div>" +
                        "</div>";
            for (var i = 0; i < this.Ips[PosIp]["Datos"].length; i++) {
                if (Checks[this.Ips[PosIp]["Datos"][i]["Relevancia"]] === true || MostrarTodo === true) {                    
                    Codigo += "<div class='Log_TablaEntradaFila' tipo='" + this.Ips[PosIp]["Datos"][i]["Relevancia"] + "'>" +
                            "<div>" + this.Ips[PosIp]["Datos"][i]["Hora"] + "</div>" +
                            "<div>" + this.Ips[PosIp]["Datos"][i]["Peticion"] + "</div>" +
                            "<div class='" + this.ColorRelevancia(this.Ips[PosIp]["Datos"][i]["Relevancia"]) + "'>" + this.Ips[PosIp]["Datos"][i]["Url"] + "</div>" +
                            "<div>" + this.ParsearRespuesta(this.Ips[PosIp]["Datos"][i]["Ret"]) + "</div>" +
                            "<div>" + this.Ips[PosIp]["Datos"][i]["Ret"] + "</div>" +
                            "<div>" + this.Ips[PosIp]["Datos"][i]["Tam"]  + "</div>" +
                        "</div>";
                }
            }
            Codigo += "</div>" + 
            "<div class='Log_ContenidoOculto'>Mostrar contenido oculto.</div>";


            $("#" + Id + " > .EntradaLog_Datos").html(Codigo);
        }
        else {
            $("#" + Id).attr("abierto", false);
            $("#" + Id + " > .EntradaLog_Datos").html("");
        }
        this.Ips[PosIp]["Abierto"] = !this.Ips[PosIp]["Abierto"];
    };

    this.TipoUrl = function(Url, Ret = 0) {
        var nUrl = Url.toLowerCase();
        if (nUrl.indexOf("banearip.php") !== -1)        {	this.TotalTipos["Ataques"]++;           return 9; 	}
        if (nUrl.indexOf("?") !== -1)               	{	this.TotalTipos["Advertencias"]++; 	return 8; 	}
        if (Ret === "404")                              {       this.TotalTipos["Errores404"]++;        return 7;       }
        if (nUrl.indexOf("error404") !== -1)            {	this.TotalTipos["Errores404"]++; 	return 7; 	}
        if (nUrl.indexOf(".zip") !== -1)               	{	this.TotalTipos["Zips"]++;              return 6; 	}
        if (nUrl.indexOf(".cmd") !== -1)               	{	this.TotalTipos["Cmd"]++;               return 5; 	}
        if (nUrl.indexOf(".php") !== -1)               	{	this.TotalTipos["Documentos"]++; 	return 4; 	}
        if (nUrl.indexOf(".html") !== -1)               {	this.TotalTipos["Documentos"]++; 	return 4; 	}
        if (nUrl.indexOf(".css") !== -1)               	{	this.TotalTipos["CSS"]++;               return 3; 	}
        if (nUrl.indexOf(".js") !== -1)               	{	this.TotalTipos["JS"]++;                return 2; 	}
        if (nUrl.indexOf(".svg") !== -1)               	{	this.TotalTipos["Imagenes"]++; 		return 1; 	}
        if (nUrl.indexOf(".ico") !== -1)               	{	this.TotalTipos["Imagenes"]++; 		return 1; 	}
        if (nUrl.indexOf(".png") !== -1)               	{	this.TotalTipos["Imagenes"]++; 		return 1; 	}
        if (nUrl.indexOf(".jpg") !== -1)               	{	this.TotalTipos["Imagenes"]++; 		return 1; 	}
        if (nUrl.indexOf(".gif") !== -1)               	{	this.TotalTipos["Imagenes"]++; 		return 1; 	}
        if (nUrl.indexOf(".") === -1)               	{	this.TotalTipos["Documentos"]++; 	return 4; 	} // algo sin extensión debe ser un documento
        this.TotalTipos["Otros"]++;
        return 0;    
   };
    
    
    /* Ejemplo */
    /*	94.194.34.14 - - [03/Jul/2013:00:00:14 +0200] "GET /Graficos/devildrey33.ico HTTP/1.1" 200 3606 devildrey33.es "-" "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:19 +0200] "GET /Tutorial_HTML5_8.php HTTP/1.1" 200 122235 devildrey33.es "http://www.google.com.mx/url?sa=t&rct=j&q=&esrc=s&source=web&cd=2&ved=0CDAQFjAB&url=http%3A%2F%2Fdevildrey33.es%2FTutorial_HTML5_8.php&ei=bE3TUY3jJOSMyAGwjIGQDA&usg=AFQjCNHe90T-d6n5n_EgTirFKAwwET4dGA&bvm=bv.48705608,d.aWc" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /js/devildrey33_Comentarios.js HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        201.134.42.53 - - [03/Jul/2013:00:00:24 +0200] "GET /css/devildrey33.css HTTP/1.1" 304 - devildrey33.es "http://devildrey33.es/Tutorial_HTML5_8.php" "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:21.0) Gecko/20100101 Firefox/21.0" "-"
        188.165.195.156 - - [03/Jul/2013:16:14:35 +0200] "HEAD / HTTP/1.1" 200 - devildrey33.es "-" "Mozilla/4.0 (compatible; MSIE 5.01; Windows NT 5.0) */
    this.AgregarLinea = function(Linea, NumLinea) {
        // Extraigo los valores de esta linea
        var Datos = Linea.split(" ");
        var TotalDatos = Datos.length;
        var Ret = { Ip : "0.0.0.0", Datos : [ {} ], Ua : [ "" ], Abierto : false, Destacados : [], Fecha : "" };
        var Ua = "";
        for (var i = 12; i < Datos.length - 1; i++) {
            Ua += Datos[i] + " ";
        }

        if (TotalDatos < 10) { return; }

        // Organizo los datos de esta línea
        Ret["Ip"] = Datos[0];
        Ret["Datos"][0]["Linea"] = NumLinea;
        
        var FH = Datos[3].split(":");
        Ret["Fecha"] = FH[0].slice(1);
        Ret["Datos"][0]["Hora"] = FH[1] + ":" + FH[2] + ":" + FH[3];        

        Ret["Datos"][0]["Peticion"] = Datos[5].slice(1);      

        Ret["Datos"][0]["Url"]  = Datos[6];        
        Ret["Datos"][0]["Http"] = Datos[7].slice(0, -1);
        Ret["Datos"][0]["Ret"]  = Datos[8];
        Ret["Datos"][0]["Relevancia"] = this.TipoUrl(Ret["Datos"][0]["Url"], Ret["Datos"][0]["Ret"]);
        
        Ret["Datos"][0]["Tam"]      = Datos[9];        
        Ret["Datos"][0]["Server"]   = Datos[10];       
        // 
        // Busco si hay otra IP igual en el array de ips para añadirla o expandirla con mas datos
        for (var i = 0; i < this.Ips.length; i++) {
            // Si coinciden la ip y la fecha
            if (this.Ips[i]["Ip"] === Ret["Ip"] && this.Ips[i]["Fecha"] === Ret["Fecha"]) {
                this.Ips[i]["Datos"].push(Ret["Datos"][0]);                
                // Compruebo si existe el user agent
                for (var u = 0; u < this.Ips[i]["Ua"].length; u++) {
                    if (this.Ips[i]["Ua"][u].toLowerCase().trim() === Ua.toLowerCase().trim()) {
                        return; // El user agent ya existe en la lista, salgo de la función
                    }
                }
                // El UserAgent no existe creo una nueva entrada
                this.Ips[i]["Ua"].push(Ua);
                return;
            }
        }
        // No existe la ip o tiene una fecha distinta
        Ret["Ua"][0] = Ua;
        this.Ips.push( Ret );
    };
    
    
    

    this.ObtenerNavegador2 = function(UA) {        
        var Tipo            = 2; // (0 navegador, 1 bot, 2 desconocido)
        var Nombre          = "Desconocido";
        var NombreCorto     = "Desconocido";
        var Version         = "";
        var Plataforma      = "Desconocido";
        var PlataformaCorto = "";
        UserAgent = UA.toLowerCase();
        // Plataforma
        if	(UserAgent.indexOf("android") !== -1)		 { PlataformaCorto = 'Android';      Plataforma = 'Android'; } 
        else if	(UserAgent.indexOf("linux") !== -1)              { PlataformaCorto = 'Linux';        Plataforma = 'Linux'; }
        else if	(UserAgent.indexOf("iphone") !== -1)		 { PlataformaCorto = 'iPhone';       Plataforma = 'iPhone'; }
        else if	(UserAgent.indexOf("ipad") !== -1)		 { PlataformaCorto = 'iPad';         Plataforma = 'iPad'; }
        else if	(UserAgent.indexOf("macintosh") !== -1)		 { PlataformaCorto = 'Mac';          Plataforma = 'Macintosh'; }
        else if	(UserAgent.indexOf("mac os x") !== -1)		 { PlataformaCorto = 'Mac';          Plataforma = 'Macintosh'; }
        else if	(UserAgent.indexOf("windows nt 5.0") !== -1)	 { PlataformaCorto = 'Win2k';        Plataforma = 'Microsoft Windows 2000'; } 
        else if	(UserAgent.indexOf("windows nt 5.") !== -1)	 { PlataformaCorto = 'WinXP';        Plataforma = 'Microsoft Windows XP'; }
        else if	(UserAgent.indexOf("windows nt 6.0") !== -1)	 { PlataformaCorto = 'WinVista';     Plataforma = 'Microsoft Windows Vista'; }
        else if	(UserAgent.indexOf("windows nt 6.1") !== -1)	 { PlataformaCorto = 'Win7';         Plataforma = 'Microsoft Windows 7'; } 
        else if	(UserAgent.indexOf("windows nt 6.2") !== -1)	 { PlataformaCorto = 'Win8';         Plataforma = 'Microsoft Windows 8'; } 
        else if	(UserAgent.indexOf("windows nt 10.0") !== -1)	 { PlataformaCorto = 'Win10';        Plataforma = 'Microsoft Windows 10'; } 
        else if	(UserAgent.indexOf("windows 98") !== -1)	 { PlataformaCorto = 'Win98';        Plataforma = 'Microsoft Windows 98'; }
        else if	(UserAgent.indexOf("windows") !== -1)		 { PlataformaCorto = 'Win';          Plataforma = 'Microsoft Windows'; }
        else if	(UserAgent.indexOf("win32") !== -1)		 { PlataformaCorto = 'Win';          Plataforma = 'Microsoft Windows'; }

        /* Navegadores */
        if	(UserAgent.indexOf("opera mini") !== -1)  	 { NombreCorto = 'Opera Mini';       Nombre = 'Opera Mini';                 Tipo = 0; } 
        else if	(UserAgent.indexOf("opera") !== -1)  		 { NombreCorto = 'Opera';            Nombre = 'Opera';                      Tipo = 0; } 
        else if	(UserAgent.indexOf("edge") !== -1)  		 { NombreCorto = 'Edge';             Nombre = 'Microsoft Edge';             Tipo = 0; } 
        else if	(UserAgent.indexOf("firefox") !== -1)		 { NombreCorto = 'Firefox';          Nombre = 'Mozilla Firefox';            Tipo = 0; } 
        else if	(UserAgent.indexOf("chrome") !== -1) 		 { NombreCorto = 'Chrome';           Nombre = 'Google Chrome';              Tipo = 0; }
        else if (UserAgent.indexOf("ucbrowser") !== -1)          { NombreCorto = 'UCBrowser';        Nombre = 'UCBrowser';                  Tipo = 0; }
        else if	(UserAgent.indexOf("safari") !== -1)		 { NombreCorto = 'Safari';           Nombre = 'Apple Safari';               Tipo = 0; }
        else if	(UserAgent.indexOf("netscape") !== -1) 		 { NombreCorto = 'Netscape';         Nombre = 'Netscape';                   Tipo = 0; } 
        /* Lectores de feeds */
        else if	(UserAgent.indexOf("feedly") !== -1) 		 { NombreCorto = 'Feedly';           Nombre = 'Feedly RSS Reader';          Tipo = 1; } 
        else if	(UserAgent.indexOf("inoreader") !== -1) 	 { NombreCorto = 'InoReader';        Nombre = 'InoReader Crawler';          Tipo = 1; } 
        else if	(UserAgent.indexOf("feedfetcher-google") !== -1) { NombreCorto = 'Google Reader';    Nombre = 'Google Reader';              Tipo = 1; } 
        /* Bots generales */
        else if	(UserAgent.indexOf("baiduspider") !== -1)	 { NombreCorto = 'Baiduspider';      Nombre = 'Baiduspider';                Tipo = 1; } 
        else if	(UserAgent.indexOf("ezooms") !== -1) 		 { NombreCorto = 'Ezooms Bot';       Nombre = 'Ezooms';                     Tipo = 1; } 
        else if	(UserAgent.indexOf("yandexbot") !== -1) 	 { NombreCorto = 'YandexBot';        Nombre = 'YandexBot';                  Tipo = 1; }
        else if	(UserAgent.indexOf("yandeximages") !== -1) 	 { NombreCorto = 'YandexImages';     Nombre = 'YandexImages';               Tipo = 1; }
        else if	(UserAgent.indexOf("exabot") !== -1) 		 { NombreCorto = 'Exabot';           Nombre = 'Exabot';                     Tipo = 1; } 
        else if	(UserAgent.indexOf("alexa") !== -1) 		 { NombreCorto = 'Alexa';            Nombre = 'Alexa Web Crawler';          Tipo = 1; } 
        else if	(UserAgent.indexOf("bingbot") !== -1) 		 { NombreCorto = 'Bing';             Nombre = 'Bing Bot';                   Tipo = 1; } 
        else if	(UserAgent.indexOf("msnbot") !== -1) 		 { NombreCorto = 'MSNBot';           Nombre = 'MSN Bot';                    Tipo = 1; } 
        else if	(UserAgent.indexOf("majestic") !== -1) 		 { NombreCorto = 'Majestic';         Nombre = 'Majestic Bot';               Tipo = 1; } 
        else if	(UserAgent.indexOf("googlebot") !== -1) 	 { NombreCorto = 'Googlebot';        Nombre = 'Googlebot';                  Tipo = 1; } 
        else if	(UserAgent.indexOf("googlebot-mobile") !== -1) 	 { NombreCorto = 'Googlebot';        Nombre = 'Googlebot Mobile';           Tipo = 1; } 
        else if	(UserAgent.indexOf("facebook") !== -1) 		 { NombreCorto = 'FaceeBook';        Nombre = 'FaceBook Bot';               Tipo = 1; } 
        else if	(UserAgent.indexOf("ahrefsbot") !== -1)   	 { NombreCorto = 'AhrefsBot';        Nombre = 'AhrefsBot';                  Tipo = 1; } 
        else if	(UserAgent.indexOf("google-site-verifi") !== -1) { NombreCorto = 'Googlebot';        Nombre = 'Google-Site-Verification';   Tipo = 1; } 
        
        else if	(UserAgent.indexOf("bot") !== -1)		 { NombreCorto = 'Bot';              Nombre = 'Bot genérico';               Tipo = 2; } 
        /* Internet explorer al final porque muchos llevan msie sin ser IE en el user agent */
        else if	(UserAgent.indexOf("msie 11.0") !== -1) 	 { NombreCorto = 'IE11';             Nombre = 'Internet Explorer';	Version = 11.0; 	Tipo = 0; }
        else if	(UserAgent.indexOf("msie 10.0") !== -1)		 { NombreCorto = 'IE10';             Nombre = 'Internet Explorer';	Version = 10.0; 	Tipo = 0; }
        else if	(UserAgent.indexOf("msie 9.0") !== -1)		 { NombreCorto = 'IE9';              Nombre = 'Internet Explorer';	Version = 9.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 8.0") !== -1)		 { NombreCorto = 'IE8';              Nombre = 'Internet Explorer';	Version = 8.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 7.0") !== -1) 		 { NombreCorto = 'IE7';              Nombre = 'Internet Explorer';	Version = 7.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie 6.0") !== -1)		 { NombreCorto = 'IE6';              Nombre = 'Internet Explorer';	Version = 6.0; 		Tipo = 0; }
        else if	(UserAgent.indexOf("msie")  !== -1)		 { NombreCorto = 'IE';               Nombre = 'Internet Explorer'; 				Tipo = 0; }


        return { 
            "Nombre" 		: Nombre, 
            "NombreCorto" 	: NombreCorto,
            "Version" 		: Version,
            "Plataforma" 	: Plataforma,
            "PlataformaCorto"   : PlataformaCorto,
            "Tipo" 		: Tipo
        };
    };    
    
        
    this.ClickCheckOpciones = function() {
        var Checks = this.ObtenerChecks();
        var Checks2 = { 
            0 : document.getElementById('ChNavegadores').checked,
            1 : document.getElementById('ChBots').checked,
            2 : document.getElementById('ChDesconocido').checked
        };
        // Miro todas las ips
        for (var i = 0; i < this.Ips.length; i++) {
            // Busco la primera entrada destacada y marcada (si existe)
            var Pos = -1;
            if (Checks2[this.Ips[i]["Info"]["Tipo"]] === true) {
                for (var e = 0; e < this.Ips[i]["Destacados"].length; e++) {
                    if (Checks[this.Ips[i]["Destacados"][e]["Relevancia"]] === true) {
                        Pos = e;
                        break;
                    }
                }
                // Si hay destacados y el check del navegador está marcado
                if (Pos > -1) {
                    document.getElementById("EntradaLog" + i).style.display = "table";
                    var Url = $("#EntradaLog" + i + " .EntradaLog_Url");
                    Url.attr('class', "EntradaLog_Url " + this.ColorRelevancia(this.Ips[i]["Destacados"][Pos]["Relevancia"]));
                    Url.html(this.Ips[i]["Destacados"][Pos]["Url"]);
                    // Si está abierto tengo que volver a recargar los datos interiores
                    if (this.Ips[i]["Abierto"] === true) {
                        this.Ips[i]["Abierto"] = false;
                        this.ExpandirIp("EntradaLog" + i);
                    }
                }
                else {
                    document.getElementById("EntradaLog" + i).style.display = "none";                
                }
            }
            else {
                document.getElementById("EntradaLog" + i).style.display = "none";                
            }
        }
    };
};