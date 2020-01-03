'use strict'

//DOM - Document Object Model

function cambiaColor(color){
    caja.style.color = color;
}

var caja = document.getElementById("mi_caja");
caja.innerHTML = "texto en la caja desde js";
caja.style.padding ="20px";
cambiaColor("red");

console.log(caja);