<!-- Escribe un programa que pregunte al usuario cuántos años tiene, y conteste al usuario: 
“Ahora sé que tienes (x) años, gracias”. X es la cantidad de años ingresada por el teclado. -->

<form action="#" method="post">
    <input type="number" name="edad" placeholder="Ingrese su edad">
    <button type="submit"> Validar </button>
</form>

<?php

    $edad = $_POST['edad'];

    echo "Ahora se que tienes " .$edad. " años, gracias";

?>