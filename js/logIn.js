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