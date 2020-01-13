'use strict'

window.addEventListener('load',()=>{
  //Timers

  //El setinterval se ejecuta continuamente es mejor el settimeout el cual se ejecuta solo una ves 
  var tiempo = setInterval(()=>{
    console.log("set interval ejecutado");
    document.querySelector("h1").style.color = "red";
  },3000);
});