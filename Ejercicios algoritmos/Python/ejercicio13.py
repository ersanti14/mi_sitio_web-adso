#Realizar un programa que capture los datos de un empleado: 
#Nombre, Genero (1-masculino, 2-femenino), Salario básico, y tiempo de servicio.
#El sistema debe calcular el valor de la bonificación anual en base a los siguientes 
#lineamientos de la empresa:
#Si es mujer y el tiempo de servicio es superior a 5 años, su bonificación será de un 20% del 
#Salario básico 
#Si es mujer y el tiempo de servicio es inferior o igual a 5 años, su bonificación será de un 
#15% del Salario básico 
#Si es hombre y el tiempo de servicio es superior a 6 años, su bonificación será de un 20% del 
#Salario Básico.
#Si es hombre y el tiempo de servicio está entre 1 y 6 años su bonificación será de un 15% 
#del Salario Básico.

nombre = input("Ingrese su nombre: ")
genero = int(input("Ingrese su genero: "))
salario = float(input("Ingrese su salario básico: "))
tiempo = int(input("Ingrese su tiempo de servicio: "))
aumento15 = salario+(salario*0.15)
aumento20 = salario+(salario*0.20)

if(genero == 1):
    if(tiempo > 5):
        print (f'Hola',nombre,'su salario básico es de',salario,'pero con la bonificacion adquirida del 20% su salario sera de',aumento20)
    elif(tiempo <= 5):
        print(f'Hola',nombre,'su salario básico es de',salario,'pero con la bonificacion adquirida del 15% su salario sera de',aumento15)

if(genero == 2):
    if(tiempo > 6):
        print(f'Hola',nombre,'su salario básico es de',salario,'pero con la bonificacion adquirida del 20% su salario sera de',aumento20)
    elif(tiempo <= 6):
        print(f'Hola',nombre,'su salario básico es de',salario,'pero con la bonificacion adquirida del 15% su salario sera de',aumento15)
