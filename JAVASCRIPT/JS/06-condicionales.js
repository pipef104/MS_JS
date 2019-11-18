"use strict";

// Condicional If
// Si A es mayor a B entonces hacer esto
// var edad1 = 30;
// var edad2 = 12;

// if(edad1 > edad2){
//   console.log(edad1 + " es mayor que " + edad2);
// }else{
//   console.log(edad2 + " es mayor que " + edad1);
// }

var age = 45;
var name = "Felipe";

/* Operadores Relacionales
 higher: >
 minor: <
 higher or equals: >=
 minor or equals: <=
 Equals: ==
 Different: !=
*/

if (age >= 18) {
  console.log(
    "El usuario " + name + " tiene " + age + " por lo cual es mayor de edad "
  );
  if (age == 33) {
    console.log("Todavia eres Millenial");
  } else if (age >= 40) {
    console.log(" Ya no eres millenial");
  }
} else {
  console.log(
    "El usuario " + name + " tiene " + age + " por lo cual es menor de edad "
  );
}

/* OPERADORES LOGICOS
  AND(Y): &&
  OR(O): ||
  NEGATION: !
*/
var year = new Date().getFullYear(); //Propiedad para tomar año del sistema

//NEGATION
if (year != 2016) {
  console.log("El año no es 2016");
}

//AND
if (year >= 2000 && year <= 220 && year != 2018) {
  console.log("Estamos en la era actual");
} else {
  console.log("Estamos en la era post moderna");
}

//OR
if (year == 2008 || ( year >= 2018 && year == 2020)) {
  console.log("El año acaba en 8");
} else {
  console.log("Año no registrado");
}
