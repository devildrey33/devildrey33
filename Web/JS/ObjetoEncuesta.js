/* */
$Encuesta = new function() {
    this.Iniciar = function() {
        $("#BarraNavegacion_Encuesta").on("click", function(e) {  $Encuesta.MostrarEncuesta(); });
    };

    this.MostrarBotonEncuesta = function() {
        if (document.getElementById("Comentarios")) {
            if (($(window).scrollTop() + $(window).height()) > $("#Comentarios").offset().top && $("#BarraNavegacion_Encuesta").attr("Visible") !== "false") {
                $("#BarraNavegacion_Encuesta").attr("Visible", true);
            }
        }
    };

    this.MostrarBotonEncuesta = function() {
        $("#BarraNavegacion_VentanaEncuesta").attr("Visible", true);
        $("#BarraNavegacion_Encuesta").attr("Visible", false);
    };
};
    
/* Evento Scroll */
//$(window).scroll(function() {     $Encuesta.MostrarBotonEncuesta();     });
/* Evento OnLoad */
//$(window).load(function() {       $Encuesta.Iniciar();                  });
