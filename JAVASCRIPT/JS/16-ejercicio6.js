'use strict'

/* Decir si un numero es par o impar y si no es valido el numero que ingrese pedir de nuevo el numero*/

var numero = parseInt(prompt("Introduce un numero",0));

while (isNaN(numero)) {
  numero = parseInt(prompt("Introduce un numero",0));
}

if (numero%2 == 0) {
  alert(numero + " es par.");
}else{
  alert(numero + " es inpar.");
}