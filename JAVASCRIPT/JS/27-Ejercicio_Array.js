"use strict";

/*
1. Pida 6 numero de pantalla y los meta en un array
2. Mostrar todos los elementos en el cuerpo de la pgina y en la consola
3. Ordenar el arreglo y mostrarlo
4. Invertir el orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda un valor introducido por el usuario y que diga si esta en el Array y su posición
*/
function mostrarArray(elementos, textoCustom = "") {
  //Mostrar en el cuerpo de la pagina
  document.write("<h1>Contenido del Array" + textoCustom + "</h1>");
  document.write("<ul>");
  numeros.forEach((elemento, index) => {
    document.write("<li>" + elemento + "</li><br/>");
  });
  document.write("</ul>");
}

/*Forma antigua 
var numeros = new Array(6); //Indicamos que el Array tendra 6 posiciones

for (var i = 0; i <= 5; i++) {
    numeros[i] = parseInt(prompt('Introduce un número',0));
}
console.log(numeros);
*/

/*Forma Actual de llenar automaticamente un Array de las pocisiones que queramos*/
var numeros = [];
for (let i = 0; i <= 5; i++) {
  //Pedir los 6 numeros
  numeros.push(parseInt(prompt("Introduce un número", 0)));
}

//Mostrar Array por consola
mostrarArray(numeros);

//Ordenar y mostrar
numeros.sort(function(a, b) {
  return a - b;
}); //De esta manera me lo organiza de manera numerica
mostrarArray(numeros, "Ordenado");

//Invertir y mostrar
numeros.reverse();
mostrarArray(numeros, "Invertido");

//Cantidad de elementos que tiene un Array
document.write("<h1> El array tiene: " + numeros.length + "elementos </h1>");

// Busqueda
var busqueda = parseInt(prompt("Busqueda un número", 0));
var posicion = numeros.find( numero => numero == busqueda);

if (posicion != -1) {
  document.write("<h1>Encontrado</h1>");
  document.write("<h1>Posición de la busqueda: " + posicion + "</h1>");
}else{
  document.write("<h1>No Encontrado</h1>");
}
