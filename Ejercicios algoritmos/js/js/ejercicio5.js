/* Escribe un programa que pregunte al usuario los dos lados de un rectángulo y presente por 
pantalla el cálculo del perímetro (suma de los lados) y el área (base por altura). */

function calcular(){

    let base, altura

    base = document.getElementById("base").value 
    altura = document.getElementById("altura").value 

    perimetro = (base*2) + (altura*2);
    area = base*altura;

    print = document.getElementById("respuesta")
    print.innerHTML = "El perimetro del rectangulo es de " + perimetro + " y su area es de " + area;
}