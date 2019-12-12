'use strict';

/*Calculadora, que ingresa un numero1s por pantalla
-En el cuerpo de la pagina en una alerta ypor la consola, el resultado de sumar restar  multi y dividir las 2 cifras
*/

var numero1 = parseInt(prompt("Introduce el primer numéro", 0));
var numero2 = parseInt(prompt("Introduce el segundo numéro", 0));


while (numero1 < 0 || isNaN(numero1) || numero2 < 0 || isNaN(numero2)) {
  numero1 = parseInt(prompt("Introduce el primer numéro", 0));
  numero2 = parseInt(prompt("Introduce el segundo numéro", 0));
}

var resultado = "La suma es : " + (numero1 + numero2) + "</br>" +
  "La resta es : " + (numero1 - numero2) + "</br>" +
  "La multiplicación es : " + (numero1 * numero2) + "</br>" +
  "El producto es : " + (numero1 / numero2) + "</br>";

var resultadoalert = "La suma es : " + (numero1 + numero2) + "\n" +
  "La resta es : " + (numero1 - numero2) + "\n" +
  "La multiplicación es : " + (numero1 * numero2) + "\n" +
  "El producto es : " + (numero1 / numero2) + "\n";

document.write(resultado);
alert(resultadoalert);
console.log(resultadoalert);



