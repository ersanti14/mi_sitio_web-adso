<!-- Suponiendo que pi = 3.1416. Escribe un programa que pida al usuario que introduzca el 
radio, y presente por pantalla el cálculo del perímetro de la circunferencia (2*pi*r), el área 
del círculo (pi*r2 ), y el volumen de la esfera (V = 4*pi*r3 /3). -->

<form action="#" method="post">
    <input type="number" name="radio" placeholder="Ingrese el radio">
    <button type="submit"> Calcular </button>
</form>

<?php

    const pi = 3.1416;
    $radio = $_POST['radio'];

    $perimetro = 2*pi*$radio;
    $area = pi*($radio*$radio);
    $volumen = 4*pi*($radio*$radio*$radio)/3;

    echo "El perimetro de la circunsferencia es de " .$perimetro;
    echo "<br>";
    echo "El area del circulo es de " .$area;
    echo "<br>";
    echo "El volumen de la esfera es de " .$volumen;

?>