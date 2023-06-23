/* Suponiendo que 1 euro = 4444 pesos. Escribe un programa que pida al usuario un número 
de pesos y calcule el cambio en euros. */

function calcular(){

    let euros
    const euro = 4444;

    euros = document.getElementById("peso").value 

    total = euros*euro

    print = document.getElementById("respuesta")
    print.innerHTML = "La cantidad de euros es " + total;

}