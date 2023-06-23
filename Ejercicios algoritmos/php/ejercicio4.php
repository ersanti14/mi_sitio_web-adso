<!-- Escribe un programa que pregunte el precio, el tanto por ciento de descuento, y te diga el 
precio con descuento. Por ejemplo, si el precio que introduce el usuario es 300 y el 
descuento 20, el programa dirá que el precio final con descuento es de 240. -->

<form action="#" method="post">
    <input type="number" name="precio" placeholder="Ingrese el precio">
    <input type="number" name="descuento" placeholder="Ingrese el descuento">
    <button type="submit"> Calcular </button>
</form>

<?php

    $precio = $_POST['precio'];
    $descuento = $_POST['descuento'];

    $total = $precio-($precio*$descuento)/100;

    echo "El precio de su compra aplicando el descuento es de " .$total;

?>