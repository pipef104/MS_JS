'use strict'

//Local Storage

//Comprobar si el Local Storage esta disponible en el navegador
if (typeof(storage)!== 'undefined') {
  console.log("Local Storage Disponible");
}else{
  console.log("Local Storage Incompatible");
}

//Guardar datos en el LocalStorage
localStorage.setItem("titulo","Curso de Symfony ");

//Recuperar Elemento
document.querySelector("#peliculas").innerHTML = localStorage.getItem("titulo");

//Guardar Objetos
var usuario = {
  nombre: "Felipe Lopez",
  email: "pipef104@gmail.com",
  web: "pipeweb.com"
};

localStorage.setItem("usuario",JSON.stringify(usuario));

//Recuperar OBjeto
var userjs = JSON.parse(localStorage.getItem("usuario"));

console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" " +userjs.nombre );