'use strict';

// Bucle while

var year = 2020;

while (year != 1991) {
  //Ejecuta esto
  console.log("Estamos en el año: " + 2020);
  if (year == 2010) {
    break;
  }
  year++;
}

//Do while
var years = 20;
do{
    alert("Solo cuando sea diferente a 20");
    year = 20;
}while (year != 20)