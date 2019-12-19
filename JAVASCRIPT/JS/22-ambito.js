'use strict'

var numero = 2;
var texto = "Hola mundo soy una variable global";

function holamundo(texto){
  let hola_mundo = "Texto dentro de función";
  console.log(texto);
  console.log(numero.toString());
  console.log(hola_mundo);
}

holamundo(texto);