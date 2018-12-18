//controllo che l'utente abbia inserito la stessa password anche nel form di conferma della pass
function checkPass() {
    if(document.formsignup.ripetiPass.value != document.formsignup.inputPass.value) {
        alert("Password non corrispondenti");
        return false;
    }
    return true;
}

//inizializzare lo storage controllando se è gia stato creato
function initStorage() {
    if(typeof(localStorage.utenti) == "undefined") {
        localStorage.utenti = "[]";
    }
    if(typeof(sessionStorage) == undefined) {
        sessionStorage = "[]";
    }
}



//gestione signup
function signup() {
    var u = JSON.parse(localStorage.utenti);
    var l = u.length;
    for (i = 0; i < l; i++){
        if(u[i].username == document.getElementById("register").inputUsername.value ){
            alert("L'username scelto è già in uso.");
            return false;
        }
        else if(u[i].email == document.getElementById("email").value){
            alert("L'email scelta è già in uso.");
            return false;
        }

    }

    if(checkPass()){
    var p = {  
    nome:document.getElementById("nome").value,
    cognome:document.getElementById("cognome").value,
    artista:document.getElementById("artista").value,  
    username:document.getElementById("username").value,
    email:document.getElementById("email").value,
    password:document.getElementById("password").value
    
};

    u[l] = p;
    localStorage.utenti = JSON.stringify(u);
    sessionStorage.setItem("username", p["username"]);
    sessionStorage.setItem("email", p["email"]);
    sessionStorage.setItem("nome", p["nome"]);
    sessionStorage.setItem("cognome", p["cognome"]);
    sessionStorage.setItem("artista", p["artista"]);
    sessionStorage.setItem("token", "");
    return true;
}
    else {
        alert("Le password non corrispondono.");
        return false;
    }
}
