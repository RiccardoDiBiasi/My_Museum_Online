//funzione per il login

function login() {
    var u = JSON.parse(localStorage.utenti);
    var l = u.length;
    var username = document.getElementById("userlogin").value;
    var password = document.getElementById("passlogin").value;
    for(i=0; i<l; i++){
        if((u[i].username == username) && (u[i].password == password)) {
            sessionStorage.setItem("username", u[i].username);
            return true;
        }
    }
    alert("Utente non registrato");
    
    return false;
}