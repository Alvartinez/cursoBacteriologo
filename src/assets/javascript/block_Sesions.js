
document.querySelector(".contenedor").addEventListener("click", animabarras);

var ln1 = document.querySelector(".line1");
var ln2 = document.querySelector(".line2");
var ln3 = document.querySelector(".line3");

function animabarras(){
    ln1.classList.toggle("activeline1");
    ln2.classList.toggle("activeline2");
    ln3.classList.toggle("activeline3");
}