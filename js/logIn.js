//funzione per il login

function login() {
    var u = JSON.parse(localStorage.utenti);
    var l = u.length;
    var username = document.getElementById("userlogin").value;
    var password = document.getElementById("passlogin").value;
    for(i=0; i<l; i++){
        if((u[i].username == username) && (u[i].password == password)) {
            sessionStorage.setItem("username", u[i].username);
            sessionStorage.setItem("email", u[i].email);
            sessionStorage.setItem("nome", u[i].nome);
            sessionStorage.setItem("cognome", u[i].cognome);
            sessionStorage.setItem("artista", u[i].artista);
            sessionStorage.setItem("token", u[i].token);
            return true;
        }
    }
    alert("Utente non registrato");
    
    return false;
}

function log_out(){
	if(window.confirm("Vuoi disconnetterti?")){
        sessionStorage.setItem("username", JSON.stringify(null));
        sessionStorage.setItem("email", JSON.stringify(null));
        sessionStorage.setItem("nome", JSON.stringify(null));
        sessionStorage.setItem("cognome", JSON.stringify(null));
        sessionStorage.setItem("artista", JSON.stringify(null));
        sessionStorage.setItem("token", JSON.stringify(null));
		window.location.href = "index.html"
	}
}


function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
