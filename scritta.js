var i = 0;
var txt ='Benvenuti in My Museum Online, il museo di Guido e Riccardo! Siamo due studenti di Ingegneria Informatica e questo è il nostro progetto per Linguaggi e Tecnologie per il web. Registrati ed accedi subito dalla mappa alle varie stanze del museo, nelle quali sicuramente troverai qualche opera dei tuoi artisti preferiti!!';
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