/* Se tienen un cultivo de café, de los cuales con el uso de la tecnología se recolectan los 
siguientes datos para análisis de suelo:
PH (Acidez del suelo) rango adecuado entre 5 y 5.5.
Materia orgánica mayor a 8
Fosforo (P) mayor a 30
Calcio (Ca) mayor a 3
Magnesio (Mg) mayor a 0.9
Potasio (K) mayor a 0.4
Aluminio (Al) menor a 1
Acorde a los datos recolectados identificar si el suelo es apto para la siembra café */

function calcular(){

    let ph, materia,fosforo, calcio, magnesio, potasio, aluminio

    ph = document.getElementById("ph").value 
    materia = document.getElementById("materia").value 
    fosforo = document.getElementById("fosforo").value 
    calcio = document.getElementById("calcio").value 
    magnesio = document.getElementById("magnesio").value 
    potasio = document.getElementById("potasio").value
    aluminio = document.getElementById("aluminio").value 

    print = document.getElementById("respuesta")

    if(ph > 5 && ph <=  5.5 && materia > 8 && fosforo > 30 && calcio > 3 && magnesio > 0.9 && potasio > 0.4 && aluminio < 1){
        print.innerHTML = "El suelo es apto para la siembra de café"
    }else{
        print.innerHTML = "El suelo no es apto para la siembra de café"
    }
}