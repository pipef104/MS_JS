"use strict";

//Evento es una función que se ejecuta cuando sucede algo

//Eventos del raton

window.addEventListener("load", () => {
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
  boton.addEventListener("mouseover", function() {
    boton.style.background = "#CCC";
  });

  //Evento Mouse Out "Cuando salgo del boton hace un efecto"
  boton.addEventListener("mouseout", function() {
    boton.style.background = "yellow";
  });

  //Focus
  var input = document.querySelector("#campo_nombre");
  input.addEventListener("focus", function() {
    console.log("Estas dentro del input");
  });
  //Blur
  input.addEventListener("blur", function() {
    console.log("Estas fuera del input");
  });
  //Keydown
  input.addEventListener("keydown", function(event) {
    console.log("Pulsando  esta tecla", String.fromCharCode(event.KeyCode));
  });

  //Keypress
  input.addEventListener("keypress", function(event) {
    console.log("Tecla presionada", String.fromCharCode(event.KeyCode));
  });

  //KeyUp
  input.addEventListener("keyup", function(event) {
    console.log("Tecla soltada ", String.fromCharCode(event.KeyCode));
  });
});
