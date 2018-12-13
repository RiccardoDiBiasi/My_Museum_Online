var i = 0;
var txt ='Bentornato su My Museum Online! Ora che sei loggato potrai accedere alle varie stanze tramite la mappa e continuare il tuo viaggio all\' interno del nostro museo!';
var speed = 30;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}

window.onload = function() {
    typeWriter();
  };