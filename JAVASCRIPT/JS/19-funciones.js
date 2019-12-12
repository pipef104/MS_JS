"use strict";

// Funciones
// Es una agrupación reutilizable de un conjunto de instrucciones

// //Defino la función
// function calculadora(){
//   console.log("Hola soy la calculadora");
//   return "Hola soy la calculadora";
// }

// // Llamo la función
// console.log(calculadora());

// Una función tambien puede resivir parametros como se puede ver a continuación

/*
****************************************************************
var numero1 = parseInt(prompt("Introduce el primer numéro", 0));
var numero2 = parseInt(prompt("Introduce el segundo numéro", 0));

function calculadora(numero1, numero2){
  console.log("suma :" + ( numero1 + numero2 ));
  console.log("Resta:" + ( numero1 - numero2 ));
  console.log("Multiplicación:" + ( numero1 * numero2 ));
  console.log("División:" + ( numero1 / numero2 ));
}

calculadora(numero1, numero2);
*/

 var numero1 = parseInt(prompt("Introduce el primer numéro", 0));
 var numero2 = parseInt(prompt("Introduce el segundo numéro", 0));

// //Parametros opcionales en las funciones
// function calculadora(numero1, numero2, mostrar = false) {
//   if (mostrar == false) {
//     console.log("suma :" + (numero1 + numero2));
//     console.log("Resta:" + (numero1 - numero2));
//     console.log("Multiplicación:" + numero1 * numero2);
//     console.log("División:" + numero1 / numero2);
//   } else {
//     document.write("suma :" + (numero1 + numero2) + "<br/>");
//     document.write("Resta:" + (numero1 - numero2) + "<br/>");
//     document.write("Multiplicación:" + numero1 * numero2 + "<br/>");
//     document.write("División:" + numero1 / numero2 + "<br/>");
//   }
// }

// calculadora(numero1, numero2, true);

/**************************************************************** */
// Funciones que se llaman desde otras funciones

function porconsola (numero1, numero2){
  console.log("suma :" + (numero1 + numero2));
  console.log("Resta:" + (numero1 - numero2));
  console.log("Multiplicación:" + numero1 * numero2);
  console.log("División:" + numero1 / numero2);
  console.log("************************************");
}


function porpantalla(numero1, numero2) {
    document.write("suma :" + (numero1 + numero2) + "<br/>");
    document.write("Resta:" + (numero1 - numero2) + "<br/>");
    document.write("Multiplicación:" + numero1 * numero2 + "<br/>");
    document.write("División:" + numero1 / numero2 + "<br/>");
    console.log("************************************");
}

function calculadora(numero1, numero2, mostrar = false){
  if (mostrar == false) {
    porconsola(numero1,numero2);
  }else{
    porpantalla(numero1, numero2);
  }
  return true;
}

calculadora(numero1,numero2,false);