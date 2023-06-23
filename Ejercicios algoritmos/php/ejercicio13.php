<!-- Realizar un programa que capture los datos de un empleado: 
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
del Salario Básico. -->

<style>
    body{
        display: flex;
        flex-direction: column;
    }
    input{
        display: flex;
        flex-direction: column;
        margin: 5px; 
        width: 200px;
    }
    select{
        width: 200px;
        margin: 5px;
    }
    button{
        margin-left: 70px;
    }
</style>

<div class="todo">
    <form action="#" method="post">
        <input type="text" name="name" placeholder="Ingrese su nombre">
        <select name="genero">
            <option name="1"> Masculino </option>
            <option name="2"> Femenino </option>
        </select>
        <input type="number" name="salario" placeholder="Ingrese su salario">
        <input type="number" name="tiempo" placeholder="Ingrese su tiempo de servicio">

        <button type="submit"> Validar </button>
    </form>
</div>

<?php

    const Femenino = "Femenino";
    const Masculino = "Masculino";

    $name = $_POST['name'];
    $genero = $_POST['genero'];
    $salario = $_POST['salario'];
    $tiempo = $_POST['tiempo'];
    $aumento15 = $salario+($salario*0.15);
    $aumento20 = $salario+($salario*0.20);

    if($genero == Femenino){
        if($tiempo > 5){
            echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 20% del salario básico, para un total de $".$aumento20;
        }elseif($tiempo <= 5){
            echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 15% del salario básico, para un total de $".$aumento15;
            }
    }
    
        if($genero == Masculino){
            if($tiempo > 6){
                echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 20% del salario básico, para un total de $".$aumento20;
            }elseif($tiempo <= 6){
                echo "Hola ".$name." su salario es de $".$salario." y su bonificación será de un 15% del salario básico, para un total de $".$aumento15;
            }
        }
    

?>