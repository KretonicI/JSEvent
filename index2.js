let InputIme = document.getElementById("ime");
let InputPrezime = document.getElementById("prezime");
let InputEmail = document.getElementById("Email");

let buttonSend = document.getElementById("posalji");
let buttonReset = document.getElementById("reset");

//funkcije za focus in/out za polje ime
function fokusIn(e){
    e.target.style.backgroundColor = "yellow";
}
function fokusOut(e){
    if (e.target.value == "") e.target.style.backgroundColor = "red";
}

function focusOutEmail (e){
    e.target.style.backgroundColor = "lightgrey";
    if (e.target.value.indexOf ("@") <0 ){
        e.target.style.backgroundColor = "red";
    }
}

function resetClick (){
    let YesNo = confirm ("Želite li resetirati sva polja");
    console.log ("Yes/No = " + YesNo);
    if (YesNo){
        InputIme.value = "";
        InputIme.style.backgroundColor
    }
}

InputIme.addEventListener("focus", fokusIn);
InputIme.addEventListener("blur", fokusOut);
InputPrezime.addEventListener("focus", fokusIn);
InputPrezime.addEventListener("blur", fokusOut);
InputEmail.addEventListener("focus", fokusIn);
InputEmail.addEventListener("blur", focusOutEmail);