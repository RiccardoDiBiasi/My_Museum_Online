//funzione per salvare username e password
function store(theForm){
    document.getElementById('welcomeMessage').innerHTML = "";
    var inputUsername = theForm["username"];
    var inputPassword = theForm["password"];
    localStorage.setItem("username", inputUsername.value);
    localStorage.setItem("password", inputPassword.value);
    document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
    return false;
}