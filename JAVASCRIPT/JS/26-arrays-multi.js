'use strict'

var categoria = ['Acción', 'Terror', 'Comedia'];
var peliculas = ['La vida es bella', 'La verdad duele','Grantorino'];
peliculas.sort();
console.log(peliculas);

var cine = [categoria,peliculas];

var add = prompt("Introduce tu pelicula");

while (add != 'ACABAR') {
  add = prompt("Introduce tu pelicula");
  peliculas.push = add;
}

peliculas.push = "Batman";
console.log(peliculas);