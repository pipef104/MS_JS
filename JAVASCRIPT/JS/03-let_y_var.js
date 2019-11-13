'use strict' 

//Pruebas let y var

//Prueba con var 
var numero = 40;
console.log(numero);

if(true){
  var numero = 50;
  console.log(numero);
}
console.log(numero);

//Prueba con let
let texto = "Curso Js Victor robles";
console.log(texto);
if (true) {
  let texto = "Curso Laravel 5";
  console.log(texto)// Valor laravel 5
}
console.log(texto)