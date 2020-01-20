'use strict'

//JSON - Java Script Object Notation

var pelicula = {
    titulo: 'Batman VS SuperMan',
    year: 2017,
    pais: 'Estados Unidos'
};

var peliculas = [
    {
        titulo: "La verdad Duele",
        year: 2016,
        pais: 'Francia'
    },
    pelicula
];
var caja_peliculas = document.querySelector("#peliculas");

var index;
for (index in peliculas) {
   var p = document.createElement("p");
   p.append(peliculas[index].titulo + "-" + peliculas[index].year);
   caja_peliculas.append(p);
};