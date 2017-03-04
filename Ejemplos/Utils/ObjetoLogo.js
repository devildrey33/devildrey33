/* Javascript para el Logo_devildrey33 creado por Josep Antoni Bover Comas para codepen.io/devildrey33 */ 

var Logo_devildrey33 = function() {
    var PreLogo = document.createElement('a');
    PreLogo.setAttribute("href", "http://devildrey33.es");
    PreLogo.setAttribute("target", "_blank");
    PreLogo.id = "Logo_devildrey33";
    PreLogo.innerHTML = "<div>" +
                            "<span>D</span>" + 
                            "<span>E</span>" + 
                            "<span>V</span>" + 
                            "<span>I</span>" + 
                            "<span>L</span>" + 
                            "<span>D</span>" + 
                            "<span>R</span>" + 
                            "<span>E</span>" + 
                            "<span>Y</span>" + 
                            "<span>&nbsp;</span>" + 
                            "<span>3</span>" + 
                            "<span>3</span>" +
                        "</div>" +
                        "<img src='https://devildrey33.es/Web/SVG/Iconos50x50.svg#svg-logo' />";
    document.body.appendChild(PreLogo);                
};            

var Logo = null;
window.addEventListener('load', function() { Logo = new Logo_devildrey33; });