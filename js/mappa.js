

function mostra(){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("caption").innerHTML = "STANZA DI ERCOLE" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanze/ercole/ercole.html'\"><span>Accedi alla stanza</span></button>";
}

function mostra2(){
  document.getElementById("myModal2").style.display = "block";
  document.getElementById("caption2").innerHTML = "STANZA DI APOLLO E DAFNE" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanze/apollo_dafne/apollo.html'\"><span>Accedi alla stanza</span></button>";
}

function mostra3(){
  document.getElementById("myModal3").style.display = "block";
  document.getElementById("caption3").innerHTML = "STANZA DI NARCISO" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanze/narciso/narciso.html'\"><span>Accedi alla stanza</span></button>";
}

function mostra4(){
  document.getElementById("myModal4").style.display = "block";
  document.getElementById("caption4").innerHTML = "STANZA DEL RATTO DI PROSERPINA" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanze/ratto_proserpina/proserpina.html'\"><span>Accedi alla stanza</span></button>";
}
function mostra5(){
  document.getElementById("myModal5").style.display = "block";
  document.getElementById("caption5").innerHTML = "STANZA DI ORFEO ED EURIDICE" + "<br>" + "<button class=\"button\" onclick=\"location.href = 'stanze/orfeo_euridice/orfeo.html'\"><span>Accedi alla stanza</span></button>";
}

var span = document.getElementsByClassName("chiudi")[0];


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
