'use strict';

var suma = 0;
var contador = 0;

do {
  var numero = parseInt(prompt("Introduce numero hasta que ingreses uno negativo", 0));
  if (isNaN(numero)) {
    numero = 0;
  } else if (numero >= 0) {
    suma += numero;
    contador ++;
  }
  console.log(suma,contador;)
} while (numero >= 0);

alert("La suma de todos los numeros es: "+ suma);
alert("La media de todos los numeros es:" + (suma/contador));