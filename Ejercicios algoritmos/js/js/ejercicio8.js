/* Escribe un programa que pida al usuario los siguientes datos: días, horas y minutos. Y le 
conteste con la cantidad de segundos totales que son esos datos. */

function calcular(){

    const dias = 86400;
    const horas = 3600;
    const minutos = 60;

    let dia, hora, minuto

    dia = document.getElementById("dia").value 
    hora = document.getElementById("hora").value 
    minuto = document.getElementById("minuto").value 

    segundo = (dia*dias) + (hora*horas) + (minuto*minutos);

    print = document.getElementById("respuesta")
    print.innerHTML = "La cantidad de segundos que corresponden estos datos son " + segundo;
}