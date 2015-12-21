/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


$Indice = new function() {
    
    this.Iniciar = function() {
        console.log("Indice.Iniciar");
        // Combo categorias
        $("#Categorias").off("click").on("click", function(e) { $Indice.ClickCategorias(); });
        // Items del combo de las categorias
        $("#Categorias > ul > li").off("click").on("click", function(e) { $Base.CargarURL($(this).attr("path")); });
    };
    
    /* Click en la combo de categorias del indice */
    this.ClickCategorias = function() {
        Cat = $("#Categorias");
        console.log("Indice.ClickCategorias", $("#Categorias > ul").height(), Cat.height());
        if (Cat.height() == 19) {
           Cat.height(40 + $("#Categorias > ul").height()) ;
        }
        else {
           Cat.height(19);
        }
    };
    
    
};