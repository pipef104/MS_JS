'use strict';
/*
  Programa que pida 2 numeros y que nos digan cual es el mayor, el menor y si son iguales
  PLUS: Si lo que se ingresa no son un numero o que son menores a 0 vuelva a pedir los datos
*/

/* NOTA: Tener encuenta que el Prompt siempre recibe un String
la instrucción isNaN sirve para evaluar si es algo diferente a un numero*/
var number1 = parseInt(prompt("Introduce el primer número", 0));
var number2 = parseInt(prompt("Introduce el segundo número", 0));

while (number1<=0 || number2<= 0 || isNaN(number1) || isNaN(number2) ) {
  number1 = parseInt(prompt("Introduce el primer número", 0));
  number2 = parseInt(prompt("Introduce el segundo número", 0));
}

if (number1 == number2) {
  alert("Los numero son iguales");
}else if(number1 > number2){
  alert("El numero mayor es: "+ number1);
  alert("El numero menor es: "+ number2);
}else if(number2 > number1){
  alert("El numero mayor es: "+ number2);
  alert("El numero menor es: "+ number1);
}else{
  alert("Introduce los numeros correctos");
}


