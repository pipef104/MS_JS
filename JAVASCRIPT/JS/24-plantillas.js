'use strict'

var nombre = prompt("Ingresa tu nombre");
var apellido = prompt("Ingresa tu apellido");

var texto = `
  <h1>Hola que tal </h1>
  <h3>Mi Nombre es: ${nombre}</h3>
  <h3>Mi Apellido es: ${apellido}</h3>
`;

document.write(texto);