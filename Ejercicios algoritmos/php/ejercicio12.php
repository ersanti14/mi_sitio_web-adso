<!-- Realizar un login de usuario, solicitando el correo y la contraseña, si el 
correo=’fund@gmail.com’ y la clave=’123456‘, el sistema mostrará el mensaje “Bienvenidos a Fundamentos de programación”, si los datos son inválidos el sistema deberá mostrar 
“Error en los datos de ingreso.” -->

<form action="#" method="post">
    <input type="text" name="correo" placeholder="Ingrese su correo">
    <input type="text" name="contraseña" placeholder="Ingrese su contraseña">
    
    <button type="submit"> Validar </button>
</form>

<?php

    const email = 'fund@gmail.com';
    const password = '123456'; 

    $correo = $_POST['correo'];
    $contraseña = $_POST['contraseña'];

    if($correo == email && $contraseña == password){
        echo "Bienvenidos a fundamentos de la programación";
    }else{
        echo "Error en los datos de ingreso";
    }

?>