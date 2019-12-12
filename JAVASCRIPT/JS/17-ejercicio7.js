"use strict";

/*Tabla de multiplicar de un numero introducido*/

var numero = parseInt(prompt("Introduce un numero", 0));

for (var i = 1; i <= 10; i++) {
  document.write(i + " x " + numero + " : " + numero * i + "</br>");
}
