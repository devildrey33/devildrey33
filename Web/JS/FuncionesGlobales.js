/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


/* El que creo las funciones matemáticas básicas de javascript nunca imagino que se acabaria renderizando 3d en él... 
 *  Por lo que he creado un set básico funciones Rand mas fáciles de usar.*/

/* Función para generar un valor aleatório entero */
/* Si no se especifican parametros devuelve 0 o 1 */
/* Si solo se especifica un parámetro, el primer parámetro será el máximo, y el mínimo será 0 */
/* Si se especifican dos parámetros, el primero es el máximo, y el segundo es el mínimo. */
function RandInt(Max, Min) {
    return Math.floor(Rand(Max, Min));
}


/* Si no se especifican parametros devuelve 0 o 1 
   Si se especifica solo el Máximo, el mínimo será 0 */
function Rand(Max, Min) {
    var min = (typeof(Min) !== "undefined") ? Min : 0; // Si no se especifica el mínimo por defecto es 0
    var max = (typeof(Max) !== "undefined") ? Max : 1; // Si no se especifica el máximo por defecto es 1
    return min + Math.random() * (max - min);    
}

function CInt(Decimal) {
    return Math.floor(Decimal);
}

