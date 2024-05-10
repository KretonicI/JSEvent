console.log("index.js loadede -> OK");

function focusIn(){
    console.log("Događaj na fokusIN");
    var input1 = document.getElementById("input1");
    input1.style.backgroundColor = "yellow";
}
function focusOut(){
    console.log("Događaj na fokusOUT");
    var input1 = document.getElementById("input1");
    input1.style.backgroundColor = "red";
}

function klikButton(){
    console.log("Događaj na onClick button");
   
    alert ("Kliknuli ste na button");
    let input3 = document.getElementById ("input1");
    input3.style.backgroundColor = "white";
}

let input2= document.getElementById("input2");
input2.addEventListener('focus', fokusIn2);
function fokusIn2(){
    console.log ("događaj na FokusIn2")
    input2.style.backgroundColor = "green";
}

function fokusOut2(){
    console.log ("događaj na FokusOut2")
    input2.style.backgroundColor = "purple";
}
input2.addEventListener("focus", focusIn2);
input2.addEventListener("blur", focusOut2)