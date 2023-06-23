/* Escribe un programa que pregunte al usuario su altura aproximada, sus iniciales y conteste 
diciendo: “Sus iniciales son: A.J.R. y su altura 1.34 (por ejemplo)”. */

function validar(){

    let altura, iniciales

    altura = document.getElementById("altura").value 
    iniciales = document.getElementById("iniciales").value 

    print = document.getElementById("respuesta")
    print.innerHTML = "Sus iniciales son " + iniciales + " y su altura es " + altura;
}