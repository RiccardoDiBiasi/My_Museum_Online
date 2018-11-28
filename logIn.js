//funzione per il login
function login(theForm) {
    document.getElementById('welcomeMessage').innerHTML = "Bella zio!";
    var inputUsername = theForm["username"];
    var inputPassword = theForm["password"];
    var username = inputUsername.value;
    var password = inputPassword.value;
    if ((username == localStorage.getItem('username')) && (password == localStorage.getItem('password'))) {
     document.getElementById('welcomeMessage').innerHTML = "Welcome " + localStorage.getItem('username') + "!";
      } else {
     alert( "Invalid Log-in!");
    }
    return false;
   }