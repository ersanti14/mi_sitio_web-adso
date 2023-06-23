<!-- Escribe un programa que pida un número entero, y conteste al usuario: “Has introducido el 
número (x), gracias”. X debe ser el numero introducido -->

    <form action="#" method="post">
        <input type="number" name="int" placeholder="Ingrese un numero">

    <button type="submit"> Validar </button>
    </form>

<?php

    $numero = $_POST['int'];

    echo "Has introducido el numero " .$numero. ", gracias";

?>