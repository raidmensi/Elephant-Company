function alpha(str) {
    var regex="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    for(var i=0; i<str.length; i++) {
        if(regex.indexOf(str[i]) == -1) {
            return false;
        }
    }
    return true;
}

function vname(name) {
    if(!alpha(name.value)) {
        name.style.borderColor = "red";
        return false;
    }
    if(name.value.length < 2) {
        name.style.borderColor = "red";
        return false;
    }else {
        name.style.borderColor = "black";
    }
}
function vprenom(prenom) {
    if(!alpha(prenom.value)) {
        prenom.style.borderColor = "red";
        return false;
    }   
    if(prenom.value.length < 2) {
        prenom.style.borderColor = "red";
        return false;
    } else {
        prenom.style.borderColor = "black";
    }  
}
function vemail(email) {
    var regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!(regex.test(email.value))) {
        email.style.borderColor = "red";
        return false;
    }else {
        email.style.borderColor = "black";
    }
    return true;
}
function vpassword(password) {
    if(password.value.length < 8) {
        password.style.borderColor = "red";
        document.getElementById("spanpassword").style.display = "inline";
        return false;
    }else {
        password.style.borderColor = "black";
        document.getElementById("spanpassword").style.display = "none";
    }
    return true;
}
function toggleMenu() {

  var menu = document.getElementById("menu");

  menu.classList.toggle("active");

}