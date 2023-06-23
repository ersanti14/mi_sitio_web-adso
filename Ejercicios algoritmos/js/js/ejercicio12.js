/* Realizar un login de usuario, solicitando el correo y la contraseña, si el 
correo=’fund@gmail.com’ y la clave=’123456‘, el sistema mostrará el mensaje “Bienvenidos a Fundamentos de programación”, si los datos son inválidos el sistema deberá mostrar 
“Error en los datos de ingreso.” */

function validar(){

    const corre = "fund@gmail.com";
    const pass = "123456";

    let correo, password

    correo = document.getElementById("correo").value 
    password = document.getElementById("password").value 

    respuesta = document.getElementById("respuesta")

    if(correo == corre && password == pass){
        respuesta.innerHTML = "Bienvenidos a fundamentos de programación";
    }else{
        respuesta.innerHTML = "Error en los datos de ingreso";
    }

}