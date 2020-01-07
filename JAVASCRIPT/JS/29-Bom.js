'use strict'

//Es el Browser Object Model

function getBom(){
  console.log(window.innerHeight); //Ver el tamaño de la ventana
  console.log(window.innerWidth); //Ver el anchor de la ventana
  console.log(window.location);//Saber url que me encuentre en ese momento
};


function redirect(url){
  window.location.href  = url;// Se le envia una URL para redireccionar
}

//Abrir una nueva ventana

function OpenWindow(url){
  window.open(url);
}

getBom();

