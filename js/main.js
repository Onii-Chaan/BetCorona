var validateForm = () => {
    var validated = true;

    for(i in document.getElementsByClassName("error-output"))
        i.innerHMTL = "";

    var nameOut = "";
    if(document.forms["register"]["name"].value.length == 0){
        nameOut = "Nepieciešams aizpildīt šo lauku!";
    } else if (document.forms["register"]["name"].value.length > 32){
        nameOut = "Nika garums nedrīkst pārsniegt 32 simbolus!";
    }     
    if(nameOut != ""){
        document.getElementsByClassName("error-output")[0].innerHTML = nameOut;
        document.forms["register"]["name"].classList.add("is-invalid");
        validated = false;
    } else {
        document.forms["register"]["name"].classList.add("is-valid");
    }

    var emailOut = "";
    if(document.forms["register"]["email"].value.length == 0){
        emailOut = "Nepieciešams aizpildīt šo lauku!";
    } else if (document.forms["register"]["email"].value.includes("@") == false){
        emailOut = "E-pasta laukam nepieciešams '@' simbols!";
    }
    if(emailOut != ""){
        document.getElementsByClassName("error-output")[1].innerHTML = emailOut;
        document.forms["register"]["email"].classList.add("is-invalid");
        validated = false;
    } else {
        document.forms["register"]["email"].classList.add("is-valid");
    }


    var passOut = "";
    if (document.forms["register"]["password"].value.length < 8){
        passOut = "Parolei jābūt vismaz 8 simbolus garai!";
    }
    if(passOut != ""){
        document.getElementsByClassName("error-output")[2].innerHTML = passOut;
        document.forms["register"]["password"].classList.add("is-invalid");
        validated = false;
    } else {
        document.forms["register"]["password"].classList.add("is-valid");
    }

    var passValid = "";
    if(document.forms["register"]["passwordValidate"].value != document.forms["register"]["password"].value || document.forms["register"]["passwordValidate"].value.length == 0){
        passValid = "Paroles nesakrīt!";
    }
    if(passValid != ""){
        document.getElementsByClassName("error-output")[3].innerHTML = passValid;
        document.forms["register"]["passwordValidate"].classList.add("is-invalid");
        validated = false;
    } else {
        document.forms["register"]["passwordValidate"].classList.add("is-valid");
    }

    return validated;   
}