#Realizar un login de usuario, solicitando el correo y la contraseña, si el correo=’fund@gmail.com’ y la clave=’123456‘, el sistema mostrará el mensaje “Bienvenidos a Fundamentos de programación”, si los datos son inválidos el sistema deberá mostrar “Error en los datos de ingreso.”

email = 'fund@gmail.com'
contraseña = '123456'

correo = input("Ingrese su correo: ")
password = input("Ingrese su contraseña: ")

if(correo == email and password == contraseña):
    print('Bienvenidos a fundamentos de la programacion')
else:
    print('Error en los datos de ingreso')
 