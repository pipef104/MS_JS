"use strict";

//Funciones Anonimas
// Son funciones sin nombre

// var pelicula = function(nombre){
//     return "La pelicula es " + nombre;
// }

function sumame(numero1, numero2, sumaymuestra, sumaporDos) {
  var suma = numero1 + numero2;

  sumaymuestra(suma);
  sumaporDos(suma);
  return suma;
}

console.log(
  5,
  7,
  function(dato) {
    console.log("la suma de datos: " + dato);
  },
  function(dato) {
    console.log("la suma por dos es : " + dato*2);
  }
);
