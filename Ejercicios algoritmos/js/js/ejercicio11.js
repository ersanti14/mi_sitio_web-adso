/* Escribir un programa que pida por teclado dos resistencias y calcule y presente la resistencia 
equivalente en paralelo (Req=(R1*R2)/(R1+R2)). */

function calcular(){

    let resistencia1, resistencia2

    resistencia1 = document.getElementById("resis1").value 
    resistencia2 = document.getElementById("resis2").value 

    paralelo = parseInt((resistencia1*resistencia2)) / parseInt((resistencia1+resistencia2));

    print = document.getElementById("respuesta")
    print.innerHTML = "La resistencia equivalente en paralelo es " + paralelo;
}