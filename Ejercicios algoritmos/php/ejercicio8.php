<!-- Escribe un programa que pida al usuario los siguientes datos: días, horas y minutos. Y le 
conteste con la cantidad de segundos totales que son esos datos. -->

<form action="#" method="post">
    <input type="number" name="dia" placeholder="Ingrese la cantidad de dias">
    <input type="number" name="hora" placeholder="Ingrese la cantidad de horas">
    <input type="number" name="minuto" placeholder="Ingrese la cantidad de minutos">
    <button type="submit"> Calcular </button>
</form>

<?php

    $dia = $_POST['dia'];
    $hora = $_POST['hora'];
    $minuto = $_POST['minuto'];

    $segundos = ($dia*86400) + ($hora*3600) + ($minuto*60);

    echo "La cantidad de segundos de " .$segundos;

?>