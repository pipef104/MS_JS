'use strict'

/*Programa que muestre todos los numero divisores de un numero ingresado por un pront */

var numero = parseInt(prompt("Introduce un numero",0));

for (var i = 1; i <= numero; i++) {
  if (numero%i == 0) {
    console.log("Divisor " + i);  
  }
  
}