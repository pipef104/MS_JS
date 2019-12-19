"use strict";

//Transformación de texto

var numero = 444;
var texto = "Curso de Js de Victor";
var texto2 = "Esta muy bueno";

var dato = numero.toString(); //Transformar numero a String
dato = texto.toUpperCase(); //Coloco todo en Mayusculas
dato = texto.toLowerCase(); //Coloco todo en Minusculas

console.log(dato);

// Calcular la longitud de un texto
var nombre = "Hola que mas";
nombre = ["hola", "como", "estas"];
var tamano = nombre.length;
console.log(tamano);


//Concatenar 
var textoTotal = texto.concat(" " + texto2);
console.log(textoTotal);
 console.log(texto+ " " + texto2);