'use strict'

// Hacer un programa que muestre todos los numeros que hay entre el primer numero ingresado y el segudno

var numero1 = parseInt(prompt("Introduce el primer numero",0));
var numero2 = parseInt(prompt("Introduce el segundo numero",0));

document.write("<h1>De "+ numero1 + " a " + numero2 + " hay estos numeros :</h1>");
for (var i = numero1; i <= numero2; i++) {
  document.write(i+"<br>");
}
