/* Escribe un programa que pregunte al usuario cuántos años tiene, y conteste al usuario: 
“Ahora sé que tienes (x) años, gracias”. X es la cantidad de años ingresada por el teclado. */

function validar(){

    let edad

    edad = document.getElementById("edad").value 

    print = document.getElementById("respuesta")
    print.innerHTML = "Ahora se que tienes " + edad + " años, gracias";
}