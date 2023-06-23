#Escribe un programa que pida al usuario los siguientes datos: días, horas y minutos. Y le conteste con la cantidad de segundos totales que son esos datos.

day = 86400
hour = 3600
minute = 60

dia = int(input("Ingrese la cantidad de dias: "))
hora = int(input("Ingrese la cantidad de horas: "))
minuto = int(input("Ingrese la cantidad de minutos: "))

segundo = (dia*day) + (hora*hour) + (minuto*minute)

print('La cantidad de segundos totales son',segundo)