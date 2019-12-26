"use strict";

// Arrays o Arreglos o Matrices : Es una colección de datos que tenga un avariable

var nombre = "Felipe";

var nombres = ["Felipe Lopez", "Maritza Ortiz", "Andres Lopez", 16, true];

var lenguajes = new Array("PHP", "JS", "GO", "Java");

console.log(nombres);

// Como acceder a una posición del arreglo
console.log(lenguajes[3]);

//Como saber cuantos elementos tiene un arreglo
console.log(lenguajes.length);
/*
var elemento = parseInt(prompt("Que elemento quieres de la lista", 0));
if (elemento >= nombres.length) {
   alert("El elemento ingresado es mayor que el tamaño del arreglo, el mayor tamaño es: " + nombres.length);
} else {
    alert("El usuario seleccionado es:" + nombres[elemento]);
}*/

/*Con el siguiente codigo puedo recorrer un arreglo, y implementar codigo HTML para que salga en pantalla y 
haciendo que salga en pantalla cada uno de los atributos del arreglo*/
document.write("<h1>Lenguajes de programación del 2018</h1>");
document.write("<br>");
document.write("<ul>");
for (var i = 0; i < lenguajes.length; i++) {
  document.write("<li>" + lenguajes[i] + "</li>");
}
document.write("</ul>");
