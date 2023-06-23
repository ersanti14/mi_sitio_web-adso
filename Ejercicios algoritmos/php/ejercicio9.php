<!-- Escribe un programa que pida al usuario que introduzca los segundos, y le conteste 
diciéndole el número de días, horas, minutos y segundos que son. -->


<form action="#" method="post">
    <input type="number" name="segundo" placeholder="Ingrese los segundos">
    <button type="submit"> Calcular </button>
</form>

<?php

    $segundo = $_POST['segundo'];

    $dia = $segundo/86400;
    $hora = $segundo/3600;
    $minuto = $segundo/60;

    echo "La cantidad de dias son " .$dia;
    echo "<br>";
    echo "La cantidad de horas son " .$hora;
    echo "<br>";
    echo "La cantidad de minutos son " .$minuto;
    echo "<br>";
    echo "La cantidad de segundo son " .$segundo;

?>