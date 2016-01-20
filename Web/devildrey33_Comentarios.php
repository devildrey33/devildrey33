<?php
/* Versio 2015 */
include_once("devildrey33_Opciones.php");
include("devildrey33_BD.php");

class devildrey33_Comentarios {
    public function AgregarComentarios($Pagina, $BD, $SoloLectura = FALSE) {
        echo "<div class='Blog'>".Intro();
        if ($SoloLectura == FALSE) {
            echo "<section id='Comentarios'>".Intro().
                    "<h2></h2><br />".Intro(). // Titulo por CSS (en ingles/castellano)
                    "<div id='Comentarios_MarcoDatos'>".Intro().
/*                        "<table>"."<tr>"."<td>".*/
                        "<input type='text' name='fullname' required placeholder='Nombre' id='Comentarios_Nombre' spellcheck='false'>".Intro().
                        "<input type='email' name='email' required placeholder='micorreo@servidor.dom' id='Comentarios_Correo' spellcheck='false'>".Intro().
                        "<input type='url' name='url' id='Comentarios_Web' placeholder='http://miweb.dominio (opcional)' pattern='http?://.+' title='Si no tienes pagina web deja este espacio en blanco' spellcheck='false'>".Intro().
                    "</div>".Intro().

/*                        "<div id='Comentarios_MarcoCaptcha'>".Intro().
                            "<div id='Comentarios_MarcoP2D'>".Intro().
                                "<div class='Delante'>".Intro().
                                    "<p>Si lo deseas puedes escribir un comentario con tus dudas, sugerencias o incluso criticas, siempre de un modo amigable y respetuoso con los demás usuarios.</p>".Intro().
                                    "<p>No se permiten enlaces a contenidos ilegales (software pirata, etc...)</p>".Intro().
                                    "<p>Pulsa sobre un comentario para acceder al menú con las acciones que puedes realizar.</p>".Intro().
                                "</div>".Intro().
                                "<div class='Detras'>".Intro().
                                    "Captcha".Intro().
                                "</div>".Intro().
                            "</div>".Intro().
                        "</div>".Intro().*/

                    "<div id='Comentarios_BarraControles'>".Intro().
                        "<button class='Boton' title='Negrita (Control + B)'></button>".Intro().
                        "<button class='Boton' title='Subrayado (Control + U)'></button>".Intro().
                        "<button class='Boton' title='Cursiva (Control + I)'></button>".Intro().
                        "<button class='Boton' title='Tachado'></button>".Intro().
                        "<button class='Boton' title='Des-hacer (Control + Z)'></button>".Intro().
                        "<button class='Boton' title='Re-hacer (Control + Y)'></button>".Intro().
                        "<button class='Boton' title='Lista'></button>".Intro().
                        "<button class='Boton' title='Lista numerada'></button>".Intro().
                        "<button class='Boton' title='Borrar / limpiar comentario'></button>".Intro().
                        "<button class='Boton' title='Justificar a la izquierda' marcado='true'></button>".Intro().
                        "<button class='Boton' title='Justificar centrado'></button>".Intro().
                        "<button class='Boton' title='Justificar a la derecha'></button>".Intro().
                    "</div>".Intro().
                    "<div contenteditable='true' id='Comentarios_Comentario'></div>".Intro().
                    "<button class='Centrado'></button>".Intro().  // Enviar comentario
                "</section>".Intro();
        }            

//            if (devildrey33_Opciones::Administrador() === 1)    echo "<section pagina='".$Pagina."' id='Comentarios_Datos' administrador='true'>";
//            else
        echo    "<section id='Comentarios_Datos'>".Intro();
        $this->LeerComentarios($Pagina, $BD, 20, 0);
        echo    "</section>".Intro();
        echo "</div>".Intro();

    }


    public function LeerComentarios($Pagina, $BD, $Num, $Desde) {
        $PaginaPadre = str_replace(array(".", "-"), "_", $Pagina);            
        $Resultado = $BD->_mysqli->query("SELECT * FROM comentarios__".$BD->_mysqli->real_escape_string(strtolower($PaginaPadre))." ORDER BY NumMsg DESC");
//            echo "SELECT * FROM Comentarios__".$PaginaPadre." ORDER BY NumMsg DESC || ".$Resultado;
        if ($Resultado) {
            $Total = $Resultado->num_rows;
            if ($Total !== 0) {
                for ($i = 0; $i < $Total; $i++) {
                    $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                    if ($i >= $Desde) {
                        $this->_ImprimirComentario($Datos, ($i - $Desde == ($Num / 2) - 1) ? TRUE : FALSE);
                        if ($i === $Total -1) echo "<div fincomentarios='true'></div>".Intro();
                    }

                    if ($i - $Desde == $Num - 1) break;
                }                
            }
        }
    }

    public function InsertarComentarios($Pagina, $Desde, $Hasta) {
        $BD = new devildrey33_BD;
        $Punto = FALSE;
        $PaginaPadre = str_replace(array(".", "-"), "_", $Pagina);            
        $Resultado = $BD->_mysqli->query("SELECT * FROM comentarios__".$BD->_mysqli->real_escape_string(strtolower($PaginaPadre))." ORDER BY NumMsg DESC");
        if ($Resultado) {
            $Total = $Resultado->num_rows;
            if ($Total !== 0) {
                for ($i = 0; $i < $Total; $i++) {
                    $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
//                        echo $Datos["NumMsg"].' <= '.$Desde;
                    if ($Datos["NumMsg"] <= $Desde) {
                        if ($Datos["NumMsg"] < ($Hasta +10) && $Punto === FALSE) {
                            $this->_ImprimirComentario($Datos, TRUE);
                            $Punto = TRUE;
                        }
                        else {
                            $this->_ImprimirComentario($Datos, FALSE);                                
                        }

                        if ($i === $Total -1) echo "<div fincomentarios='true'></div>".Intro();
                    }                        
                    if ($Datos["NumMsg"] <= $Hasta) break;
                }
            }
        }
    }

    private function _ImprimirComentario($Datos, $Punto = FALSE) {
        $Delays = range(1,6);
        shuffle($Delays);
        
        echo "<a name='".$Datos["NumMsg"]."'></a>";       
        if ($Punto === TRUE)  echo "<div PuntoScroll='true' comentario='".$Datos["NumMsg"]."'>".Intro();
        else                  echo "<div comentario='".$Datos["NumMsg"]."'>".Intro();
        echo    "<div class='Comentarios_ControlesMensaje'>".
                    "<button class='TransitionDelay0".$Delays[0]."'>Responder</button>".
                    "<button class='TransitionDelay0".$Delays[1]."'>+1</button>".
                    "<button class='TransitionDelay0".$Delays[2]."'>-1</button>".
                    "<button class='TransitionDelay0".$Delays[3]."'>Editar</button>".
                    "<button class='TransitionDelay0".$Delays[4]."'>Eliminar</button>".
                    "<button class='TransitionDelay0".$Delays[5]."'>Ver email</button>".
                "</div>";
        if ($Datos["PaginaWeb"] !== "") $Nombre = "<a href='".$Datos["PaginaWeb"]."' target='_blank'>".$Datos["Nombre"]."</a>".Intro();
        else                            $Nombre = $Datos["Nombre"];
        echo    "<div>[#".$Datos["NumMsg"]."] ".$Nombre." <span>".$Datos["FechaCreacion"].", votos <b>".$Datos["VotacionesValor"]."</b> de <b>".$Datos["VotacionesTotal"]."</b>.</span></div>".Intro();
        $Mensaje = str_replace(array('\"', "\'"), array('"'  , "'"), $Datos["Mensaje"]);
        echo    "<div>".$Mensaje."</div>".Intro();
        echo "</div>".Intro();
    }        
    
    
    /* Función para votar un comentario especifico. 
     *  $PaginaPadre   : Nombre del archivo que contiene la pagina donde se va a votar uno de sus comentarios.
     *  $NumComentario : Número del comentario que se va a votar.
     *  $Valor         : Solo puede ser 0 (-1) o 1 (+1).      */
    public function VotarComentario($PaginaPadre, $NumComentario, $Valor) {        
        if (intval($Valor) === 0 || intval($Valor) === 1) {
            // Conexión con la BD
            $BD = new devildrey33_BD;        
            $PaginaPadre    = $BD->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", $PaginaPadre));        
            $Resultado      = $BD->_mysqli->query("SELECT * FROM comentarios__".strtolower($PaginaPadre)." WHERE NumMsg='".$NumComentario."'");
            if ($Resultado) {
                $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
                $Resultado = $BD->_mysqli->query("UPDATE comentarios__".strtolower($PaginaPadre).
                                                " SET VotacionesTotal='".($Datos["VotacionesTotal"] + 1)."' , VotacionesValor='".(intval($Datos["VotacionesValor"]) + intval($BD->_mysqli->real_escape_string($Valor))).
                                               "' WHERE NumMsg='".$NumComentario."'");
                if ($Resultado) {
                    $Mensaje = "Correcto";
                }
                else {
                    $Mensaje = "Error en el UPDATE : ".$BD->_mysqli->error;
                }
            }
            else {
                $Mensaje = "Error en el SELECT : ".$BD->_mysqli->error;
            }
        }        
        else {
            $Mensaje = "El valor no es válido.";
        }
        return json_encode(array("Pagina" => $PaginaPadre, "NumComentario" => $NumComentario, "Valor" => intval($Valor), "Mensaje" => $Mensaje));
    }
    
    /* Lista de errores :
     *  1 - No se ha escrito el nombre
     *  2 - Ese nombre no se puede utilizar (solo lo puede usar el admin)
     *  3 - No se ha escrito el correo
     *  4 - El formato del correo no es válido    */    
    public function EnviarComentario($PaginaPadre2, $Nombre, $Email, $PaginaWeb, $Comentario, $DatosCaptcha, $URL, $Autor) {
        /* Validación de todos los valores */
        $Error = "Error!";
        // No hay nombre
        if ($Nombre == "")      { $Error .= " No hay nombre."; }
        // El nombre no se puede usar
        if (devildrey33_Opciones::Administrador() != 1) {
            if (strcasecmp($Nombre, "devildrey33") == 0                 || 
                strcasecmp($Nombre, "Josep Antoni Bover") == 0          || 
                strcasecmp($Nombre, "Jose Antonio Bover") == 0          || 
                strcasecmp($Nombre, "Josep Antoni Bover Comas") == 0    || 
                strcasecmp($Nombre, "Jose Antonio Bover Comas") == 0)   
                                { $Error .= " No puedes usar ese nombre."; }        
        }
        if (devildrey33_Opciones::Administrador() != 2) {
             if (strcasecmp($Nombre, "Joel Barba") == 0) {
                 $Error .= " No puedes usar ese nombre.";
             }
        }
        if ($Email == "")       { $Error .= " No se ha introducido ningún correo."; }
        else                    { if (filter_var($Email, FILTER_VALIDATE_EMAIL) === false) { $Error .= " El formato del correo no es válido."; } }
        // No hay comentario
        if ($Comentario == "") 	{ $Error .= " No hay comentario"; }
        // Si hay algun error, lo imprimo y salgo de la función
        if ($Error != "Error!") {
            echo $Error;
            return;
        }
        // Conexión con la BD
        $BD = new devildrey33_BD;        
        $PaginaPadre = $BD->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", $PaginaPadre2));        
        $Resultado = $BD->_mysqli->query("SELECT * FROM comentarios__".strtolower($PaginaPadre));
        
        $CrearTabla = true;
        if ($Resultado) {
            if ($Resultado->num_rows != 0) $CrearTabla = false; // La tabla ya está creada
            $Resultado->close();
        }
        
        if ($CrearTabla == true) {
            // Creo la tabla SOLO si no existe
            $BD->_mysqli->query("CREATE TABLE comentarios__".strtolower($PaginaPadre)." ".
                                "(NumMsg INT NOT NULL AUTO_INCREMENT PRIMARY KEY, ".
                                 "Nombre VARCHAR(128), ".
                                 "Correo VARCHAR(256), ".
                                 "IPV4 VARCHAR(16), ".
                                 "FechaCreacion VARCHAR(64), ".
                                 "VotacionesTotal INT, ".
                                 "VotacionesValor INT, ".
                                 "Mensaje TEXT, ".
                                 "PaginaWeb VARCHAR(256))");
        }
        // Creo una fecha legible
        $FechaActual = date("d")." ".Base::ObtenerMesStr(date("m"))." del ".date("Y")." a las ".date("G:i");
        // Inserto los datos del comentario
        $Resultado = $BD->_mysqli->query("INSERT INTO comentarios__".strtolower($PaginaPadre)." ".
                                         "(Nombre, Correo, IPV4, FechaCreacion, VotacionesTotal, VotacionesValor, Mensaje, PaginaWeb) ".
                                         "VALUES('".$this->StrSeguro($BD, $Nombre)."', '".$this->StrSeguro($BD, $Email)."', '".$_SERVER['REMOTE_ADDR']."', '$FechaActual', '0', '0', '".$BD->_mysqli->real_escape_string($Comentario)."', '".$this->StrSeguro($BD, $PaginaWeb)."')");
        // Si no se ha escrito el comentario con mi nombre, me envio un correo informativo
        if ($Nombre != "devildrey33") {
            Base::EnviarEmail("Nuevo mensaje en $PaginaPadre2", 
                              "Nuevo mensaje de $Nombre en : ".str_replace("www.", "", $URL)."\nIp : ".$_SERVER['REMOTE_ADDR'], 
                              "contacto@".$_SERVER["SERVER_NAME"], 
                              "devildrey33@hotmail.com");
        }
        // Si l'ha fet el barba pero no ha escrit el missatge
        if ($Autor == "Joel Barba" && $Nombre != "Joel Barba") {
            Base::EnviarEmail("Nuevo mensaje en $PaginaPadre2", 
                              "Nuevo mensaje de $Nombre en : ".str_replace("www.", "", $URL)."\nIp : ".$_SERVER['REMOTE_ADDR'], 
                              "contacto@".$_SERVER["SERVER_NAME"], 
                              "joel.barba.vidal@gmail.com");
        }
        
        $Resultado = $BD->_mysqli->query("SELECT * FROM comentarios__".$BD->_mysqli->real_escape_string(strtolower($PaginaPadre))." ORDER BY NumMsg DESC");
        $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
        $this->_ImprimirComentario($Datos, FALSE);
    }
    
    
    public function StrSeguro($BD, $String) {
        if ($String == "") return "";
        // Re-emplazo caracteres '<' y '>' por su variante HTML, tambien parseo el string para hacerlo seguro con mysql
        return $BD->_mysqli->real_escape_string(str_replace(array('<', '>'), array('&lt;', '&gt;'), $String));
    }

    public function VerEmailComentario($PaginaPadre, $NumComentario) {
        if (devildrey33_Opciones::Administrador() > 0) {
            $BD = new devildrey33_BD; 
            $PaginaPadre = $BD->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", $PaginaPadre)); 
            $Resultado   = $BD->_mysqli->query("SELECT * FROM comentarios__".strtolower($PaginaPadre)." WHERE NumMsg='".$NumComentario."'");
            
            $Datos = $Resultado->fetch_array(MYSQLI_ASSOC);
            return $Datos["Correo"];
        }        
    }
    
    /* Función para eliminar un comentario de una pagina */
    public function EliminarComentario($PaginaPadre, $NumComentario) {
        $Mensaje = "";
        if (devildrey33_Opciones::Administrador() > 0) {
            $BD = new devildrey33_BD; 
            $PaginaPadre = $BD->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", $PaginaPadre));        
            $Resultado = $BD->_mysqli->query("DELETE FROM comentarios__".strtolower($PaginaPadre)." WHERE NumMsg='".$BD->_mysqli->real_escape_string($NumComentario)."'");
            if ($Resultado !== true) { $Mensaje = "Error : ".$BD->_mysqli->error; }
            else                     { $Mensaje = "Comentario Eliminado"; }
        }
        else {
            $Mensaje = "Error : Se requieren permisos de administración para borrar comentarios.";
        }
        return json_encode(array("Pagina" => $PaginaPadre, "NumComentario" => $NumComentario, "Mensaje" => $Mensaje));        
    }

    
    public function EditarComentario($PaginaPadre, $NumComentario, $Comentario) {
        $Mensaje = "";
        if (devildrey33_Opciones::Administrador() > 0) {
            $BD = new devildrey33_BD; 
            $PaginaPadre = $BD->_mysqli->real_escape_string(str_replace(array(".", "-"), "_", $PaginaPadre));        
            $Resultado = $BD->_mysqli->query("UPDATE comentarios__".strtolower($PaginaPadre).
                                            " SET Mensaje='".$BD->_mysqli->real_escape_string($Comentario).
                                           "' WHERE NumMsg='".$BD->_mysqli->real_escape_string($NumComentario)."'");
            if ($Resultado !== true) { $Mensaje = "Error : ".$BD->_mysqli->error; }
            else                     { $Mensaje = "Comentario Editado"; }
        }
        else {
            $Mensaje = "Error : Se requieren permisos de administración para editar comentarios.";
        }
        return json_encode(array("Pagina" => $PaginaPadre, "NumComentario" => $NumComentario, "Mensaje" => $Mensaje));                
    }
    
}
?>