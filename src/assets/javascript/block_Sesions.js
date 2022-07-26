
function animabarras(){
    var ln1 = document.getElementById("line1");
    var ln2 = document.getElementById("line2");
    var ln3 = document.getElementById("line3");
    if(ln1.className == "activeline1"){
        ln1.classList.remove("activeline1"); 
        ln2.classList.remove("activeline2");
        ln3.classList.remove("activeline3"); 
        document.getElementById("pantalla").add("menu");
    }else{
        ln1.classList.add("activeline1"); 
        ln2.classList.add("activeline2");
        ln3.classList.add("activeline3");
        document.getElementById("pantalla").remove("menu");
    }
}
