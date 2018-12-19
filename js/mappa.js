// Get the modal
var modal = document.getElementById('myModal');

// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myImg');
var modalImg = document.getElementById("img01");
var captionText = document.getElementById("caption");

function mostra(){
  document.getElementById("myModal").style.display = "block";
  document.getElementById("caption").innerHTML = "ciaostreonzo";
}

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("chiudi")[0];

// When the user clicks on <span> (x), close the modal
function sparisci() { 
  document.getElementById("myModal").style.display = "none";
}
