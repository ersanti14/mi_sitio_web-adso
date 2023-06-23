/* Escribe un programa que pida al usuario que introduzca los segundos, y le conteste 
diciéndole el número de días, horas, minutos y segundos que son. */

function calcular(){

    const dia = 86400;
    const hora = 3600;
    const minuto = 60;

    let segundo

    segundo = document.getElementById("segundo").value

    day = segundo/dia;
    hour = segundo/hora;
    minutes = segundo/minuto;

    print = document.getElementById("respuesta")
    print.innerHTML = "La cantidad de dias son: " + day + "<br> La cantidad de horas son: " + hour + "<br> La cantidad de minutos son: " + minutes + "<br> La cantidad de segundos son: " + segundo;
}