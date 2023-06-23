/* Realizar un programa que capture los datos de un empleado: 
Nombre, Genero (1-masculino, 2-femenino), Salario básico, y tiempo de servicio.
El sistema debe calcular el valor de la bonificación anual en base a los siguientes 
lineamientos de la empresa:
Si es mujer y el tiempo de servicio es superior a 5 años, su bonificación será de un 20% del 
Salario básico 
Si es mujer y el tiempo de servicio es inferior o igual a 5 años, su bonificación será de un 
15% del Salario básico 
Si es hombre y el tiempo de servicio es superior a 6 años, su bonificación será de un 20% del 
Salario Básico.
Si es hombre y el tiempo de servicio está entre 1 y 6 años su bonificación será de un 15% 
del Salario Básico. */

function calcular(){

    const gener1 = "Femenino";
    const gener2 = "Masculino";

    let name, genero, salario, tiempo

    name = document.getElementById("name").value 
    genero = document.getElementById("genero").value 
    salario = document.getElementById("salario").value 
    tiempo = document.getElementById("tiempo").value 
    aumento15 = parseInt(salario) + parseInt((salario*0.15));
    aumento20 = parseInt(salario) + parseInt((salario*0.20));

    respuesta = document.getElementById("respuesta")

    if(genero == gener1){
        if(tiempo > 5){
            respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 20% su salario será de "+aumento20
        }else if(tiempo <= 5){
            respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 15% su salario será de "+aumento15
        }
        }if(genero == gener2){
            if(tiempo > 6){
                respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 20% su salario será de "+aumento20
            }else if(tiempo <= 6){
                respuesta.innerHTML = "Hola "+name+" su salario básico es de "+salario+", aplicando la bonificación del 15% su salario será de "+aumento15
            }
            }
    }
    

