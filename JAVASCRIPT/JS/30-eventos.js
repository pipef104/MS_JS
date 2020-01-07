"use strict";

//Evento es una función que se ejecuta cuando sucede algo

//Eventos del raton

function CambiarColor() {
  var bg = boton.style.background;
  if (bg == "green") {
    boton.style.background = "red";
  } else {
    boton.style.background = "green";
  }
  return true;
}

var boton = document.querySelector("#boton");
boton.addEventListener("click", function() {
  CambiarColor();
});

//Evento Mouse OVer "Cuando entro al boton hace un efecto"
boton.addEventListener("mouseover",function(){
  boton.style.background = "#CCC";
})

//Evento Mouse Out "Cuando salgo del boton hace un efecto"
boton.addEventListener("mouseout",function(){
  boton.style.background = "yellow";
})