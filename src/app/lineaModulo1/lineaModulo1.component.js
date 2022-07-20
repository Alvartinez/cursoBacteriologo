function linea1(){
    document.getElementById("contendedorLinea1").classList.remove("ventana");
    document.getElementById("contendedorLinea1").classList.add("ventanaabierta");
}

function cierrelinea1(){
    document.getElementById("contendedorLinea1").classList.remove("ventanaabierta");
    document.getElementById("contendedorLinea1").classList.add("ventana");
}

function evalua(){
    document.getElementById("evaluar").classList.remove("Evaluacion");
    document.getElementById("evaluar").classList.add("evaluacionAbierta");
}

function cierreEvalua(){
    document.getElementById("evaluar").classList.remove("evaluacionAbierta");
    document.getElementById("evaluar").classList.add("Evaluacion");
}