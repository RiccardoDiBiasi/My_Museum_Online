

function mostra(){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("caption").innerHTML = "STANZA DI ERCOLE" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanza1.html'\"><span>Accedi alla stanza</span></button>";
}

function mostra2(){
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("caption2").innerHTML = "STANZA DI APOLLO E DAFNE" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanza2.html'\"><span>Accedi alla stanza</span></button>";
}

function mostra3(){
  document.getElementById("myModal3").style.display = "block";
  document.getElementById("caption3").innerHTML = "STANZA DI NARCISO" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanza3.html'\"><span>Accedi alla stanza</span></button>";
}

function mostra4(){
  document.getElementById("myModal4").style.display = "block";
  document.getElementById("caption4").innerHTML = "STANZA DEL RATTO DI PROSERPINA" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanza4.html'\"><span>Accedi alla stanza</span></button>";
}
function mostra5(){
  document.getElementById("myModal5").style.display = "block";
  document.getElementById("caption5").innerHTML = "STANZA DI ORFEO ED EURIDICE" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanza5.html'\"><span>Accedi alla stanza</span></button>";
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("chiudi")[0];

// When the user clicks on <span> (x), close the modal
function sparisci() { 
  document.getElementById("myModal").style.display = "none";
}

function sparisci2() { 
  document.getElementById("myModal2").style.display = "none";
}

function sparisci3() { 
  document.getElementById("myModal3").style.display = "none";
}

function sparisci4() { 
  document.getElementById("myModal4").style.display = "none";
}
  
function sparisci5() { 
  document.getElementById("myModal5").style.display = "none";
}
